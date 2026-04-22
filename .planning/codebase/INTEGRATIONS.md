# External Integrations

**Analysis Date:** 2026-04-22

## Status

This is a **2-hour hackathon prototype** with no external service integrations. All features use local storage and mocked data. The following describes what exists and what scaffolding is in place for future integration.

## APIs & External Services

**Currently integrated:**
- None. No HTTP calls to external services in the codebase.

**External URLs in app (informational only):**
- Moldova CEC registration: `https://www.cec.md/en/` (user-facing link in `lib/countries.ts`)
- Romania diaspora voting: `https://www.votstrainatate.ro/` (user-facing link in `lib/countries.ts`)
- Georgia CEC: `https://cesko.ge/en` (user-facing link in `lib/countries.ts`)
- Türkiye YSK: `https://www.ysk.gov.tr/en` (user-facing link in `lib/countries.ts`)

These are registration URLs for users to navigate to; the app does not consume their APIs.

## Data Storage

**Current:**
- **Filesystem storage only**
  - Location: `data/commits.json` (created at runtime if missing)
  - Implementation: `lib/store.ts` uses Node.js `fs/promises` API
  - Data: Voter commitment records with UUID, email, location, progress tracking
  - Persistence: Synchronous JSON write on every `addCommit()` or `updateProgress()`
  - No database, ORM, or query builder

**Mocked Data:**
- Country registration rules and election information hardcoded in `lib/countries.ts`
  - 4 countries: Moldova, Romania, Georgia, Türkiye
  - Election dates, deadlines, registration URLs, required documents
  - No dynamic source; all data literal in TypeScript

**No Caching:**
- Every request reads from JSON file (no in-memory cache)
- No Redis, Memcached, or session store

## Authentication & Identity

**Current:**
- **Session: HTTP-only secure cookies only**
  - Mechanism: Next.js `cookies()` API (set in `app/commit/actions.ts`)
  - Cookie name: `turnout_uid`
  - Value: UUID of the user's commitment record
  - Options: httpOnly, sameSite: "lax", maxAge: 365 days, path: "/"
  - No user password or email verification

**No real auth provider** - Prototype assumes email provided in commit form is valid. No email confirmation, 2FA, or identity verification.

**Privacy notes:**
- App claims "privacy-first" but sends email addresses to `data/commits.json` (local file only)
- No encryption of stored emails
- No GDPR export/deletion APIs

## Monitoring & Observability

**Error Tracking:**
- None (no Sentry, Datadog, or similar)
- Errors logged to default Next.js error handling

**Logs:**
- Console only (Next.js dev server or production logs)
- No structured logging framework
- No distributed tracing

**Performance Monitoring:**
- None (no analytics, Core Web Vitals collection, etc.)

## CI/CD & Deployment

**Hosting:**
- Not deployed; runs locally for hackathon
- Suitable for: Vercel (native Next.js), self-hosted Node servers
- Deployment method: Not configured (no GitHub Actions, GitLab CI, etc.)

**CI Pipeline:**
- None configured (no GitHub Actions, GitLab CI, Jenkins, etc.)
- No automated tests to run on commit

## Environment Configuration

**Current state:**
- No `.env` file required
- No environment variables referenced in code
- All configuration hardcoded:
  - Country data in `lib/countries.ts`
  - Data directory: `process.cwd()/data` (runtime relative path)
  - Cookie settings in `app/commit/actions.ts`

**Scalability limitation:**
- File path `data/` is relative to `process.cwd()` — fragile on different deployment targets
- Should be moved to absolute path or env var for production

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

**No email sending** (e.g., confirmation, reminders)

## Planned Integrations (Not Implemented)

Based on app structure, these are likely candidates for future phases:

**Email Service:**
- Placeholder for sending commitment confirmations and reminders
- Countries' registration deadlines suggest reminder emails pre-deadline
- Not scaffolded; would require service like SendGrid, Mailgun, or AWS SES

**Analytics:**
- App tracks user commitment and progress states but sends nowhere
- Placeholder for aggregation service to show "momentum" (user count, progress stages)
- `app/momentum/page.tsx` displays static mock data

**Diaspora Voter Databases:**
- Could integrate with country-specific APIs to verify registration status
- Currently mocked; would require official connections to election commissions

**Election Calendar API:**
- Could pull real election dates, deadlines from authoritative source
- Currently hardcoded with dates relative to 2026-04-22 (hackathon "today")

## Security Posture

**What's missing:**
- No HTTPS enforcement in config
- No CORS headers (not relevant for SPA/SSR app)
- No rate limiting on server actions
- No CSRF tokens (Next.js handles implicitly but not verified in codebase)
- No input validation beyond basic string checks in `app/commit/actions.ts`
- No SQL injection risk (no SQL), but JSON parsing could be hardened

**Current mitigations:**
- httpOnly cookies prevent XSS access to session ID
- Form data validated (name, email, city, country required) in `app/commit/actions.ts`
- No eval() or dynamic code execution

## Data Flow

**Commitment flow:**
1. User fills form on `app/commit/page.tsx`
2. Form submission calls `submitCommit()` server action in `app/commit/actions.ts`
3. Data validated, then passed to `addCommit()` in `lib/store.ts`
4. `lib/store.ts` reads `data/commits.json`, appends record with UUID
5. File written back synchronously
6. UUID stored in secure httpOnly cookie
7. User redirected to `/dashboard`

**Progress tracking:**
1. User clicks toggle on `app/dashboard/page.tsx`
2. Calls `toggleProgress()` server action in `app/dashboard/actions.ts`
3. Reads session UUID from cookie
4. Calls `updateProgress()` in `lib/store.ts`
5. File re-read, record updated in-memory, file written back
6. Page revalidated with Next.js `revalidatePath()`

---

*Integration audit: 2026-04-22*
