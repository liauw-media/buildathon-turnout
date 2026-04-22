# Codebase Structure

**Analysis Date:** 2026-04-22

## Directory Layout

```
project-root/
├── app/                    # Next.js App Router routes and layouts
│   ├── layout.tsx          # Root layout (header, footer, nav)
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Tailwind styles
│   ├── commit/
│   │   ├── page.tsx        # Commit form page (/commit)
│   │   └── actions.ts      # Server Action: submitCommit()
│   ├── dashboard/
│   │   ├── page.tsx        # Personalized dashboard (/dashboard)
│   │   ├── ProgressToggle.tsx  # Client component for progress checkboxes
│   │   └── actions.ts      # Server Action: toggleProgress()
│   └── momentum/
│       └── page.tsx        # Public momentum/stats page (/momentum)
├── lib/                    # Shared business logic and utilities
│   ├── store.ts            # JSON file persistence (CRUD for commits)
│   ├── types.ts            # TypeScript types (Commit, CountryRules, ReminderEvent)
│   ├── countries.ts        # Hardcoded election rules for 4 countries (MD, RO, GE, TR)
│   └── timeline.ts         # Reminder timeline generation and date utilities
├── data/                   # Data directory
│   └── commits.json        # JSON file backing store (30 seed records)
├── public/                 # Static assets (empty in this build)
├── package.json            # npm dependencies
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration (inferred)
├── .prettierrc             # Code formatting (inferred)
├── .eslintrc               # Linting (inferred)
└── .planning/codebase/     # GSD codebase documentation
    └── ARCHITECTURE.md     # This file's companion
```

## Directory Purposes

**`app/`:**
- Purpose: Next.js App Router - one directory per route
- Contains: Page components (`.tsx` with default export), Server Actions (`.ts` with `"use server"`), client components (`.tsx` with `"use client"`)
- Key files:
  - `layout.tsx`: Root layout wrapper
  - `page.tsx`: Route handler (index page for `/`)
  - `*/page.tsx`: Route-specific pages
  - `*/actions.ts`: Server Action definitions for that route

**`lib/`:**
- Purpose: Shared reusable modules
- Contains: Type definitions, store interface, business logic, utilities
- Key files:
  - `store.ts`: `readCommits()`, `addCommit()`, `getCommit()`, `updateProgress()`, `writeCommits()`
  - `types.ts`: `Commit`, `CountryRules`, `ReminderEvent` types
  - `countries.ts`: Election rules array and `getCountry()` lookup function
  - `timeline.ts`: `buildReminderTimeline()`, `daysUntil()`, `formatDate()` utilities

**`data/`:**
- Purpose: JSON file-based persistence layer
- Contains: `commits.json` (30 seed records demonstrating the data model)
- Generated at runtime: Yes (file is created on first write if missing via `ensureFile()` in `lib/store.ts`)
- Committed: Yes (seed data included)

**`public/`:**
- Purpose: Static assets served directly without processing
- Contains: Empty (no public assets in this build)
- Committed: Standard Next.js convention

## Key File Locations

**Entry Points:**
- `app/page.tsx`: Home page (`/`) - shows hero, count, and 3-stage explanation
- `app/commit/page.tsx`: Commit form (`/commit`) - accepts user data, validates, creates record
- `app/dashboard/page.tsx`: User dashboard (`/dashboard`) - personalized plan with progress tracker
- `app/momentum/page.tsx`: Public momentum display (`/momentum`) - stats on all commitments

**Configuration:**
- `package.json`: npm dependencies and scripts
- `tsconfig.json`: TypeScript compiler options
- `next.config.ts`: Next.js build configuration
- `app/globals.css`: Global Tailwind styles
- `app/layout.tsx`: Root metadata and HTML structure

**Core Logic:**
- `lib/store.ts`: All JSON file I/O operations (read, write, add, get, update)
- `lib/countries.ts`: 4 countries with election rules (MD=Moldova, RO=Romania, GE=Georgia, TR=Türkiye)
- `lib/timeline.ts`: Timeline event generation with date math
- `lib/types.ts`: TypeScript type definitions

**Testing:**
- None present (hackathon prototype, 2-hour build)

## Naming Conventions

**Files:**
- Route pages: `page.tsx` (Next.js convention)
- Server Actions: `actions.ts` (lowercase, same directory as page)
- Client components: `ComponentName.tsx` (PascalCase, same directory as page)
- Utilities: `utility-name.ts` (kebab-case for multi-word)
- Type modules: `types.ts` (singular)

**Directories:**
- Route folders: lowercase, kebab-case if multi-word (e.g., `dashboard`, `momentum`)
- Shared lib: `lib/` (Next.js convention)
- Data: `data/` (singular, lowercase)

**Exports:**
- `store.ts`: Named exports for all functions (`export async function readCommits()`)
- `countries.ts`: Named export array (`export const COUNTRIES`) + named function (`export function getCountry()`)
- `timeline.ts`: Named exports for all functions
- `types.ts`: Named exports for all types

**Imports:**
- Path aliases: `@/lib/`, `@/app/` (configured in `tsconfig.json`)
- All imports use absolute paths with aliases, not relative paths
- Example: `import { Commit } from "@/lib/types"`

## Where to Add New Code

**New Route/Page:**
1. Create directory: `app/my-route/`
2. Add page component: `app/my-route/page.tsx` (server component by default)
3. If form submission needed:
   - Add `app/my-route/actions.ts` with Server Action (top line: `"use server"`)
   - Reference action in form: `<form action={myAction}>`
4. If client interactivity needed:
   - Create `app/my-route/MyComponent.tsx` with `"use client"` top line
   - Import and use in page component
5. Add nav link in `app/layout.tsx` header if needed

**New Server Action:**
- Create in same directory as page: `app/route-name/actions.ts`
- Top line: `"use server"`
- Import types from `@/lib/types`
- Call store functions from `@/lib/store`
- Use `revalidatePath()` to refresh cached pages
- Use `redirect()` to navigate after action

**New Utility or Business Logic:**
- Add function to existing `lib/` file if related (e.g., date math → `lib/timeline.ts`)
- Create new file `lib/feature-name.ts` if standalone module
- Export named functions, not default exports
- Import in pages/actions via `@/lib/feature-name`

**New Data Type:**
- Add to `lib/types.ts`
- Use in store functions with typing
- Example: `export type MyType = { ... }`

**Country Rules Updates:**
- Edit `lib/countries.ts` array
- Add new `CountryRules` object with all required fields
- Test via `getCountry(code)` lookup in pages
- No database change needed (hardcoded array)

**Progress Tracking Enhancement:**
- Edit `Commit.progress` fields in `lib/types.ts`
- Update `ProgressToggle.tsx` component to handle new fields
- Update `app/dashboard/page.tsx` to display/track new progress item
- Update `toggleProgress()` Server Action if logic changes

## Special Directories

**`.next/`:**
- Purpose: Next.js build output and dev server cache
- Generated: Yes (created by `next dev` and `next build`)
- Committed: No (in `.gitignore`)
- Do not edit: This directory is regenerated on each build

**`.planning/codebase/`:**
- Purpose: GSD codebase analysis documents
- Generated: No (written by analysis tool)
- Committed: Yes (reference documents)
- Do not edit: Use GSD tools to regenerate

**`node_modules/`:**
- Purpose: npm package dependencies
- Generated: Yes (via `npm install`)
- Committed: No (in `.gitignore`)
- Do not edit: Run `npm install` to populate

**`data/`:**
- Purpose: JSON persistence layer
- Generated: Partially (created empty if missing, populated on first commit)
- Committed: Yes (seed data included)
- Do edit: Only via `lib/store.ts` functions (don't edit JSON directly in production)

## File Organization Philosophy

**Server-First by Default:**
- All route pages are server components unless marked with `"use client"`
- Client components are isolated and co-located with their page
- Server Actions live in same directory as pages they serve

**Type Safety:**
- All data flowing between server and client is typed
- TypeScript enforces correctness across layers
- No `any` types used in this build

**Composition over Configuration:**
- Route structure mirrors URL structure (`/commit` → `app/commit/page.tsx`)
- Shared logic extracted to `lib/` to avoid duplication
- No global state management (cookies for session, JSON for persistence)

---

*Structure analysis: 2026-04-22*
