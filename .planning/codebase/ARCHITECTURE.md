# Architecture

**Analysis Date:** 2026-04-22

## Pattern Overview

**Overall:** Next.js 16 App Router with Server Actions

**Key Characteristics:**
- Server-first architecture (React 19 Server Components as default)
- Form handling via Server Actions with automatic redirects
- Cookie-based session state for user identification
- JSON file persistence (not a database)
- Per-route shared UI (layout wrapper) with route-specific server/client hybrid components
- Strongly typed with TypeScript across data layer and UI

## Layers

**App Router (`app/`):**
- Purpose: Route-level page components and layouts, entry points for each URL
- Location: `app/`
- Contains: Page components (`.tsx`), Server Action definitions (`.ts`), client-side UI components (`.tsx` marked with `"use client"`)
- Depends on: `lib/` for store, types, utilities
- Used by: Next.js routing engine; accessed directly via browser navigation

**Shared Library (`lib/`):**
- Purpose: Reusable domain logic, types, and utilities
- Location: `lib/`
- Contains: Type definitions, store functions, country rules, timeline generation, date utilities
- Depends on: Node.js core modules only (`fs`, `path`, `crypto`)
- Used by: All routes and server actions

**Data Persistence (`data/`):**
- Purpose: JSON file backing store for all application data
- Location: `data/`
- Contains: `commits.json` - array of user commitments with progress state
- Depends on: Nothing (passive JSON file)
- Used by: `lib/store.ts` (read/write operations)

**Layout & Navigation (`app/layout.tsx`):**
- Purpose: Root HTML structure, site-wide header/footer, navigation links
- Location: `app/layout.tsx`
- Contains: Header with nav to all routes, footer with branding
- Used by: All pages (Next.js layout composition)

## Data Flow

**User Commitment (Form Submission → Storage → Cookie → Redirect):**

1. User navigates to `/commit`
2. Server renders `app/commit/page.tsx` (server component) with form
3. Form `action` attribute references Server Action `submitCommit()` from `app/commit/actions.ts`
4. User submits form → `submitCommit(formData)` runs on server
5. Validation:
   - Check required fields (name, email, city, country)
   - Validate country code via `getCountry()` from `lib/countries.ts`
   - If invalid → redirect to `/commit?error=missing` or `/commit?error=country`
6. On success:
   - Call `addCommit()` from `lib/store.ts` → reads `data/commits.json`, appends new entry, writes back
   - `addCommit()` returns commit with UUID and timestamp
   - Set httpOnly cookie `turnout_uid` with commit ID (1 year expiry)
   - Redirect to `/dashboard`
7. Browser receives redirect, navigates to `/dashboard`

**Dashboard Rendering (Cookie Read → Store Fetch → Page Render):**

1. User navigates to `/dashboard`
2. Server renders `app/dashboard/page.tsx` (server component)
3. Get cookies: `store.get("turnout_uid")?.value`
4. If no cookie → show "No plan yet" placeholder with link to `/commit`
5. If cookie exists:
   - Call `getCommit(id)` from `lib/store.ts` → reads `data/commits.json`, finds matching commit
   - Get country rules: `getCountry(user.country)` from `lib/countries.ts` → lookup table
   - Calculate timeline: `buildReminderTimeline(country)` from `lib/timeline.ts` → generate 6 reminder events
   - Render dashboard with user name, country info, city, countdown timers, 3-step progress tracker
6. Dashboard page renders `ProgressToggle` (client component) for each step
7. When user clicks toggle → `toggleProgress()` Server Action called → updates `data/commits.json` → `revalidatePath("/dashboard")` → page re-renders

**Momentum Page (Aggregation Read → Render):**

1. Server renders `app/momentum/page.tsx` with `export const dynamic = "force-dynamic"`
2. Call `readCommits()` from `lib/store.ts` → reads entire `data/commits.json`
3. Aggregate by country and city
4. Sort by count, slice top 10 cities, slice recent 8 commits
5. Render bar charts, recent activity list, commit count badges

**Home Page (Count Read → Render):**

1. Server renders `app/page.tsx`
2. Call `readCommits()` → read entire JSON
3. Display `commits.length` as "X people have already committed"
4. Render 3-stage pipeline explanation

## State Management

**User Session:**
- Stored in: httpOnly cookie `turnout_uid` (value: UUID of commit record)
- Lifespan: 1 year
- Purpose: Identify user across page loads
- On redirect: Next.js middleware would check this cookie (currently implicit via server-side lookup)

**User Progress:**
- Stored in: `data/commits.json` as part of commit record
- Structure: `{ registered: boolean, planned: boolean, voted: boolean }`
- Mutation: `updateProgress()` Server Action in `app/dashboard/actions.ts`
- Refresh: `revalidatePath("/dashboard")` triggers automatic re-render

**Country Rules:**
- Stored in: `lib/countries.ts` hardcoded array (not in JSON)
- Lookup: `getCountry(code)` function
- Data: Election dates, registration deadlines, required documents, steps, official URLs

## Key Abstractions

**Commit Type (`lib/types.ts`):**
- Purpose: Typed representation of a user commitment
- Fields:
  - `id`: UUID
  - `name`, `email`, `city`: User-provided
  - `country`: ISO alpha-2 code (where they vote)
  - `residenceCountry`: Where they currently live
  - `createdAt`: ISO timestamp
  - `progress`: Three booleans tracking registration/planning/voting
- Used in: All store operations, dashboard rendering

**CountryRules Type (`lib/types.ts`):**
- Purpose: Election-specific rules and deadlines for a country
- Fields:
  - `code`: ISO alpha-2 code
  - `name`, `flag`: Display strings
  - `nextElection`: Label and ISO date
  - `registrationDeadline`: ISO date
  - `registrationUrl`: Official government portal
  - `steps`: Array of 3 action items with details
  - `requiredDocuments`: List of needed docs
- Implementation: `lib/countries.ts` hardcoded for 4 countries (MD, RO, GE, TR)

**Store Functions (`lib/store.ts`):**
- `readCommits()`: Parse JSON file into `Commit[]`
- `addCommit()`: Generate UUID, timestamp, append to JSON, persist
- `getCommit(id)`: Find single commit by ID
- `updateProgress()`: Patch progress object, rewrite JSON
- All operations async via `fs.promises`

**Timeline Generation (`lib/timeline.ts`):**
- `buildReminderTimeline(country)`: Generate 6 reminder events with dates and types
- `daysUntil(iso)`: Calculate days between now and a date (handles timezone edge case)
- `formatDate(iso)`: Display-friendly date format
- Events: Info (background update), Action (SMS nudge), Deadline (critical)

## Entry Points

**Home Page (`/`):**
- Location: `app/page.tsx`
- Triggers: User visits root, or clicks home nav link
- Responsibilities: Hero section, explain 3-stage pipeline, show total count, link to `/commit` and `/momentum`

**Commit Page (`/commit`):**
- Location: `app/commit/page.tsx` + `app/commit/actions.ts`
- Triggers: User clicks "Commit to vote" button
- Responsibilities: Render form with country dropdown (from `lib/countries.ts`), accept submission, validate, create commit record, set cookie, redirect

**Dashboard Page (`/dashboard`):**
- Location: `app/dashboard/page.tsx` + `app/dashboard/ProgressToggle.tsx` + `app/dashboard/actions.ts`
- Triggers: Redirect after `/commit` submission, or direct navigation
- Responsibilities: Read user commit from cookie, fetch country rules, calculate timelines, show personalized plan, allow progress toggles, show upcoming nudges

**Momentum Page (`/momentum`):**
- Location: `app/momentum/page.tsx`
- Triggers: User clicks "Momentum" nav link
- Responsibilities: Aggregate all commits, show country/city distribution, list recent commitments, display public engagement metrics

## Error Handling

**Strategy:** Redirect with query parameters (lightweight, works across RSC/client boundary)

**Patterns:**

**Form Validation Errors (in `/commit`):**
```typescript
// app/commit/actions.ts
if (!name || !email || !city || !country) {
  redirect("/commit?error=missing");
}
if (!getCountry(country)) {
  redirect("/commit?error=country");
}
```
Page reads `searchParams.error` and renders error alert:
```typescript
{error === "missing" && "Please fill in all required fields."}
{error === "country" && "Please choose a valid country of origin."}
```

**Missing User Session (in `/dashboard`):**
```typescript
if (!user) {
  return <div>No plan yet. Commit to vote first.</div>;
}
```

**Invalid Country Rule Lookup (in `/dashboard`):**
```typescript
if (!country) {
  return <div className="text-rose-700">Unknown country on file. Please recommit.</div>;
}
```

**Client-Side Transition States (in `ProgressToggle`):**
```typescript
const [pending, start] = useTransition();
onClick={() => start(() => toggleProgress(keyName, !done))}
// Disables button and applies opacity-60 during Server Action
```

## Cross-Cutting Concerns

**Logging:** Not implemented. Would add `console.log()` calls in store operations or Server Actions as needed.

**Validation:**
- Form fields: HTML5 attributes (`required`, `type="email"`)
- Country selection: `getCountry(code)` lookup (fail if not found)
- No schema validation library (TypeScript provides compile-time safety)

**Authentication:** Not implemented. Current "auth" is a simple cookie UUID (not verified, no secrets). **Security concern:** Any commit ID can be guessed or brute-forced. Suitable only for hackathon.

**Cookie Handling:**
- Set in `app/commit/actions.ts`: `httpOnly: true, sameSite: "lax", maxAge: 1 year`
- Read in page components: `const store = await cookies(); store.get("turnout_uid")?.value`
- Read in Server Actions: same pattern
- No CSRF token (CSRF protection is implicit in Next.js via same-site cookies and POST-only Server Actions)

**Caching & Revalidation:**
- JSON file read is unoptimized (full file every time)
- `revalidatePath("/dashboard")` in `toggleProgress()` Action clears page cache and forces re-render
- Momentum page: `export const dynamic = "force-dynamic"` (no caching, always fresh count)
- Home/Commit pages: Default static with dynamic data fetch (can be revalidated on demand)

**Timezone Handling:**
- All dates stored as ISO strings (e.g., `"2026-06-15"`)
- `daysUntil()` normalizes to UTC midnight to avoid DST edge cases
- Display format: `toLocaleDateString("en-GB", {...})` (locale-aware, no timezone assumption)

---

*Architecture analysis: 2026-04-22*
