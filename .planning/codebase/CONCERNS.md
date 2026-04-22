# Codebase Concerns

**Analysis Date:** 2026-04-22

## Security Issues

### Missing CSRF Protection on Server Actions

**Risk:** Server actions (`submitCommit`, `toggleProgress`) accept POST requests without CSRF tokens. Although Next.js provides implicit CSRF protection via origin checking, server actions should explicitly validate origin headers or use token-based CSRF defenses for production.

**Files:** `app/commit/actions.ts`, `app/dashboard/actions.ts`

**Current mitigation:** Next.js origin validation (implicit). Insufficient for production.

**Recommendations:**
- Add explicit CSRF token generation and validation in server actions
- Validate `origin` and `referer` headers explicitly
- Consider using a library like `csrf` for token management

### Plaintext PII Storage on Disk

**Risk:** Names, emails, cities, and residence countries stored unencrypted in `data/commits.json`. File permissions depend on OS defaults. No encryption at rest means anyone with filesystem access reads all personal data.

**Files:** `lib/store.ts`, `data/commits.json`

**Current mitigation:** None. Data stored as plain JSON.

**Recommendations:**
- Implement encryption at rest (e.g., `crypto` module with AES-256-GCM)
- Encrypt sensitive fields (name, email) before writing to disk
- Use environment-based encryption keys (rotated separately)
- Consider moving to a proper database with built-in encryption support

### Session ID Vulnerability (Cookie-Only Auth)

**Risk:** User authentication is solely based on an httpOnly cookie containing a commit ID. No signature, no HMAC, no expiration validation beyond age. An attacker who reads the JSON file can impersonate any user by setting their cookie. No rate limiting prevents brute-force cookie guessing.

**Files:** `app/commit/actions.ts` (sets cookie), `app/dashboard/page.tsx` (reads cookie)

**Current mitigation:**
- httpOnly flag prevents client-side access
- sameSite=lax prevents cross-site usage
- 1-year expiration limits window

**Recommendations:**
- Sign and encrypt cookie contents with HMAC or JWT
- Add rate limiting on `/dashboard` to prevent brute-force UUID enumeration
- Implement CSRF tokens on server actions
- Consider adding timestamp validation to cookies
- In production: use proper OAuth or session middleware (e.g., `next-auth`)

### Email Not Verified

**Risk:** Email field accepted without verification. Users can enter any email address; no confirmation email is sent. Reminders would go to unvalidated addresses. Spam entries trivial.

**Files:** `app/commit/page.tsx`, `lib/types.ts`

**Current mitigation:** HTML5 email input validation (client-side only).

**Recommendations:**
- Add email verification flow before commit is stored
- Store `emailVerified` boolean in `Commit` type
- Send verification link via email (when email delivery is added)
- Reject unverified commits from reminder flows

## Data Integrity Issues

### Race Conditions in File Writes (Not Concurrent-Safe)

**Risk:** `readCommits()` + modify + `writeCommits()` pattern is not atomic. Two simultaneous requests can lose data:
1. Request A reads `[commit1, commit2]`
2. Request B reads `[commit1, commit2]` 
3. Request A writes `[commit1, commit2, commit3]`
4. Request B writes `[commit1, commit2, commit4]` (loses commit3)

Similarly, `updateProgress` reads, modifies, and writes without locking.

**Files:** `lib/store.ts` (lines 18-26, 44-58)

**Impact:** Lost commits under concurrent load. Progress updates overwritten. Data corruption under traffic.

**Current state:** JSON file with no locking mechanism.

**Recommendations:**
- Implement file-level locking using `proper-lockfile` or similar
- Add read/write lock semantics:
  ```typescript
  const lock = await acquireLock('commits.json');
  try { ... } finally { await releaseLock(lock); }
  ```
- Transition to SQLite or PostgreSQL for ACID guarantees
- Add optimistic locking with version/timestamp fields

### No Input Validation Beyond "Required"

**Risk:** Name, email, city, country fields only checked for existence. No length limits, no character validation, no SQL injection prevention (not applicable for JSON, but matters for future DB migration).

**Files:** `app/commit/actions.ts` (lines 9-20), `app/commit/page.tsx`

**Current validation:**
- Required field checks
- Country code whitelist (`getCountry()`)

**Missing validation:**
- Name: max length, character set
- Email: format (relies on browser `type="email"`)
- City: max length
- residenceCountry: no whitelist, accepts any string

**Recommendations:**
- Add server-side validation with `zod` or similar:
  ```typescript
  const schema = z.object({
    name: z.string().min(2).max(100).regex(/^[a-zA-Z\s'-]+$/),
    email: z.string().email().max(254),
    city: z.string().min(1).max(100),
    country: z.enum(['MD', 'RO', 'GE', 'TR']),
  });
  ```
- Sanitize all inputs before storing
- Add rate limiting per email/IP to prevent spam

## Performance Bottlenecks

### Full File Read on Every Request

**Risk:** Every page load reads the entire `commits.json` file into memory:
- `/` landing page: `readCommits()` to display count
- `/momentum`: `readCommits()` to build stats for all cities/countries
- `/dashboard`: `readCommits()` to find one user's record

At 1000+ commits, each request parses the full JSON. With concurrent users, this is multiplied. CPU and I/O scale linearly with data size.

**Files:** `lib/store.ts` (line 18-22), `app/page.tsx` (line 5), `app/momentum/page.tsx` (line 8), `app/dashboard/page.tsx` (line 11)

**Impact:** 
- Startup latency grows with data
- CPU usage spikes under traffic
- Memory pressure from repeated parsing
- No pagination or caching

**Recommendations:**
- Implement pagination: load top 100 commits, not all
- Cache count and top stats in memory or Redis
- Add `Cache-Control` headers to static data
- Use database indexes for efficient queries
- Implement incremental updates instead of full rewrites

### No Pagination on Momentum Page

**Risk:** `/momentum` computes statistics over all commits in memory. With 10,000+ commits, computing top cities and country aggregates becomes expensive. No limits on data sent to client.

**Files:** `app/momentum/page.tsx` (lines 10-26)

**Current approach:** In-memory `Map` aggregation, hardcoded `.slice(0, 10)` for cities.

**Recommendations:**
- Paginate API response: return top 20 countries, top 20 cities (not 10)
- Add "view more" pagination
- Pre-compute and cache aggregates in a separate store (e.g., Redis)
- Lazy-load country stats with JavaScript

### No Caching on Public Pages

**Risk:** Landing page (`/`) re-reads commit count on every request. Momentum page (`/momentum`) re-computes all stats (maps, sorting, slicing) on every request. These are read-heavy operations suitable for caching.

**Files:** `app/page.tsx`, `app/momentum/page.tsx`

**Current mitigation:** `force-dynamic` on momentum page (line 5 of momentum/page.tsx) disables static generation.

**Recommendations:**
- Use `revalidatePath()` to regenerate static pages when commits are added
- Cache commit count in memory with TTL
- Pre-compute momentum stats every 5 minutes
- Serve static pages with `Cache-Control: max-age=300` (5 minutes)

## Fragile Areas

### File Deletion or Corruption Risks

**Risk:** No backup mechanism. A single corrupted byte in `commits.json` causes `JSON.parse()` to fail, crashing all pages. No validation or error recovery.

**Files:** `lib/store.ts` (line 21)

**Current mitigation:** None.

**Recommendations:**
- Add JSON validation before parse:
  ```typescript
  try { return JSON.parse(raw); } 
  catch (e) { 
    console.error('Corrupted commits file');
    // Restore from backup or fallback
  }
  ```
- Keep a `commits.json.bak` backup before writes
- Validate schema with `zod` after parse
- Add file integrity checks (SHA256 hash)

### Hard-Coded Country Data

**Risk:** Country rules, dates, and URLs live in `lib/countries.ts`. Dates are manually set relative to "today" (2026-04-22). If deployed in production, dates will be incorrect immediately. No way to update rules without redeploy.

**Files:** `lib/countries.ts` (lines 4-111)

**Current state:** Mocked dates; registration deadlines and election dates hardcoded.

**Recommendations:**
- Move country data to a database or JSON config file
- Add date calculation logic (e.g., "60 days before election")
- Implement admin panel to update country rules without redeploy
- Store election schedules separately so they can be updated

### No Environment Configuration

**Risk:** All hardcoded values (registration URLs, country codes, cookie name). No `.env` support for production overrides.

**Files:** `lib/countries.ts`, `app/commit/actions.ts` (cookie name hardcoded)

**Recommendations:**
- Create `.env.local` and `.env.example`
- Move sensitive URLs and config to environment variables
- Use `process.env` with type safety:
  ```typescript
  const COOKIE_NAME = process.env.COOKIE_NAME || 'turnout_uid';
  ```

## Scalability Limits

### JSON File Storage (Hard Ceiling)

**Risk:** JSON file persistence cannot scale beyond a single server. With 100,000+ commits, parsing and writing become prohibitively slow. No multi-instance deployment possible (instances will overwrite each other's writes).

**Current state:** All data in `data/commits.json`.

**Scaling path:**
1. Short term: SQLite (supports multi-read, single-write via WAL)
2. Medium term: PostgreSQL with connection pooling
3. Long term: Consider sharding by country or election cycle

### No Load Balancing / Multi-Instance Support

**Risk:** File-based storage is not shareable across server instances. Horizontal scaling impossible. Single point of failure.

**Recommendations:**
- Move to database (PostgreSQL/SQLite)
- Implement connection pooling
- Use distributed session store (Redis) for cookies
- Plan for geographic distribution and failover

### No Database Migrations or Schema Versioning

**Risk:** `Commit` type changes require manual data transformation. Adding fields means updating all records. No version tracking.

**Files:** `lib/types.ts`

**Recommendations:**
- Implement migrations framework (e.g., `drizzle-orm`, `prisma`)
- Track schema versions in database
- Test migrations with seed data

## Missing Critical Features

### Email Delivery Not Implemented

**Risk:** Reminders shown as timeline but never sent. Users see "SMS nudge: registration closes in 3 days" on dashboard but receive no actual SMS. Defeats entire purpose of the "Activate" stage.

**Files:** `lib/timeline.ts` (lines 31-37, 50-52), `app/dashboard/page.tsx` (line 125)

**Current approach:** Timeline is mocked; reminders not sent.

**Recommendations:**
- Implement email queue (e.g., Bull, Agenda)
- Integrate email provider (SendGrid, Mailgun, AWS SES)
- Add reminder scheduling tied to registration deadlines
- Track delivery status per commit

### No Rate Limiting

**Risk:** Endpoint `/commit` accepts unlimited requests from same IP/email. No throttling on:
- Commit form submissions (spam)
- Progress toggle requests (DoS)
- Momentum page stats (resource exhaustion)

**Recommendations:**
- Add rate limiting middleware:
  ```typescript
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 requests per window
  });
  app.use('/commit', limiter);
  ```
- Rate limit by IP and email separately
- Add CAPTCHA to commit form

### No User Input Sanitization

**Risk:** User names, cities, and residence countries are displayed on `/momentum` page. No HTML escaping or XSS prevention visible (React auto-escapes, but trust this for production).

**Files:** `app/momentum/page.tsx` (lines 102-107)

**Current mitigation:** React automatic escaping.

**Recommendations:**
- Explicitly sanitize with DOMPurify or similar
- Add CSP headers to prevent inline scripts
- Validate and allow-list characters in user input

## Test Coverage Gaps

**Untested areas:**
- `lib/store.ts` — File I/O logic, error handling, race conditions
- `app/commit/actions.ts` — Cookie setting, redirect logic
- `lib/timeline.ts` — Date calculations (off-by-one bugs likely)
- `lib/countries.ts` — Country lookup, data consistency

**Risk:** Silent failures in critical paths. No regression detection.

**Recommendations:**
- Add unit tests for store (read/write, concurrent writes)
- Add integration tests for server actions
- Add snapshot tests for timeline calculations
- Aim for 80%+ coverage on critical paths

## Production Readiness

**Summary of blockers before production:**
1. Implement proper authentication (OAuth, not cookies alone)
2. Add CSRF protection on all server actions
3. Encrypt PII at rest
4. Move to PostgreSQL (concurrent-safe, scalable)
5. Implement rate limiting
6. Verify email addresses before accepting commits
7. Deploy email delivery system
8. Add comprehensive logging and monitoring
9. Implement error recovery for file corruption
10. Add integration tests for critical flows

**Estimated effort:** 2-3 weeks of focused hardening.

---

*Concerns audit: 2026-04-22*
