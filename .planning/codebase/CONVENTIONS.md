# Coding Conventions

**Analysis Date:** 2026-04-22

## Naming Patterns

**Files:**
- Route pages: `page.tsx` in kebab-case route folders (e.g., `/app/commit/page.tsx`, `/app/dashboard/page.tsx`)
- Server actions: `actions.ts` colocated with their consuming page (e.g., `/app/commit/actions.ts`)
- Client components: PascalCase with `.tsx` (e.g., `/app/dashboard/ProgressToggle.tsx`)
- Utilities: camelCase with `.ts` (e.g., `/lib/timeline.ts`, `/lib/store.ts`)
- Type definitions: `types.ts` (e.g., `/lib/types.ts`)
- Data/constants: camelCase (e.g., `/lib/countries.ts`)

**Functions:**
- All functions use camelCase: `daysUntil()`, `formatDate()`, `buildReminderTimeline()`, `toggleProgress()`, `addCommit()`, `getCommit()`, `updateProgress()`, `submitCommit()`
- Server actions are exported async functions: `export async function submitCommit()` in `actions.ts`
- Inline utility functions in component files use camelCase: helper function `Field()` inline in page components

**Variables:**
- All variables use camelCase: `daysToRegistration`, `daysToElection`, `doneCount`, `turnout_uid` (exception: cookie name uses snake_case per convention)
- Destructured object props use camelCase: `{ keyName, label, detail, done }`
- Constants that require computation use camelCase: `const MS_PER_DAY = 1000 * 60 * 60 * 24`

**Types:**
- All types use PascalCase: `Commit`, `CountryRules`, `ReminderEvent`
- Type properties use camelCase: `registrationDeadline`, `residenceCountry`, `createdAt`, `nextElection`, `requiredDocuments`
- Union types are literal strings: `kind: "info" | "deadline" | "action"`, `tone: "urgent" | "normal"`

## Code Style

**Formatting:**
- Tailwind CSS v4 for all styling - no custom CSS classes
- Inline Tailwind utility classes directly on elements (see `/app/commit/page.tsx` line 10: `className="mx-auto max-w-xl px-6 py-16"`)
- Responsive classes use Tailwind's breakpoint prefixes: `sm:grid-cols-2`, `md:grid-cols-2`, `lg:` patterns
- Color system uses Tailwind defaults with explicit color steps: `indigo-600`, `zinc-900`, `rose-700`, `emerald-500`

**Linting:**
- TypeScript strict mode enabled (see `tsconfig.json` line 7: `"strict": true`)
- ESLint not configured (scaffold disabled it for hackathon prototype)
- Type safety enforced by TS compiler - all imports have explicit type annotations where needed
- No implicit `any` types

## Import Organization

**Order:**
1. External packages from node/next (e.g., `import { cookies } from "next/headers"`)
2. Next.js specific imports (e.g., `import Link from "next/link"`)
3. Internal utilities and types (e.g., `import { addCommit } from "@/lib/store"`)
4. Styles (e.g., `import "./globals.css"`)

**Path Aliases:**
- `@/*` maps to project root: `import type { Commit } from "@/lib/types"` resolves to `/lib/types.ts`
- All internal imports use `@/` prefix, never relative paths like `../`

**Example from `/app/commit/page.tsx`:**
```typescript
import { COUNTRIES } from "@/lib/countries";
import { submitCommit } from "./actions";
```

## Error Handling

**Pattern: Redirect with Query String**
Server actions validate input and redirect with error codes in query parameters:

```typescript
// From /app/commit/actions.ts
if (!name || !email || !city || !country) {
  redirect("/commit?error=missing");
}
if (!getCountry(country)) {
  redirect("/commit?error=country");
}
```

Error codes are consumed on the page via `searchParams`:

```typescript
// From /app/commit/page.tsx
export default async function CommitPage({ searchParams }: { searchParams: SearchParams }) {
  const { error } = await searchParams;
  
  {error && (
    <div className="mt-6 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
      {error === "missing" && "Please fill in all required fields."}
      {error === "country" && "Please choose a valid country of origin."}
    </div>
  )}
```

**No try-catch blocks in code** - validation errors are handled via redirect, not exceptions.

## Logging

**Framework:** `console` (no logging library installed)

**Patterns:**
- No explicit logging observed in codebase
- Debugging is implicit through TypeScript type checking and runtime errors

## Comments

**When to Comment:**
- Minimal inline comments in this codebase
- Only descriptive comments found: `// ISO timestamp`, `// ISO date`, `// ISO alpha-2 code of country of origin`
- Comments explain why, not what the code does (e.g., `// Mocked registration rules for a few diaspora scenarios.`)

**JSDoc/TSDoc:**
- Type definitions include inline property comments for clarity:

```typescript
export type Commit = {
  id: string;
  name: string;
  email: string;
  city: string;
  country: string; // ISO alpha-2 code of country of origin (where they'd vote)
  residenceCountry: string; // Where they currently live (diaspora location)
  createdAt: string; // ISO timestamp
  progress: {
    registered: boolean;
    planned: boolean;
    voted: boolean;
  };
};
```

## Function Design

**Size:** Functions are small and focused (typically 5-20 lines)

**Parameters:**
- Functions accept specific parameters, not large config objects
- Type-safe parameters: `toggleProgress(key: keyof Commit["progress"], next: boolean)`
- Query parameters are async-awaited in page functions (React 19 pattern):

```typescript
export default async function CommitPage({ searchParams }: { searchParams: SearchParams }) {
  const { error } = await searchParams;
```

**Return Values:**
- Async server actions return the created/updated resource or `undefined`
- Page components return JSX (async components render directly)
- Utility functions return specific types: `Promise<Commit>`, `ReminderEvent[]`, `number`

## Module Design

**Exports:**
- Named exports used consistently (no default exports except page components)
- `export async function submitCommit()` in server actions
- `export function ProgressToggle()` for components
- `export const COUNTRIES` for constants
- `export type` for type definitions

**Barrel Files:**
- Not used in this codebase - each file imports directly from its source

**Example export patterns:**

```typescript
// /lib/store.ts - all named async exports
export async function readCommits(): Promise<Commit[]>
export async function writeCommits(commits: Commit[]): Promise<void>
export async function addCommit(input: ...): Promise<Commit>
export async function getCommit(id: string): Promise<Commit | undefined>
export async function updateProgress(id: string, progress: ...): Promise<Commit | undefined>
```

## React 19 Server Components

**Default behavior:** All page components in `/app/` are server components (no `"use client"` by default)

**Server component example** (`/app/dashboard/page.tsx`):
```typescript
export default async function DashboardPage() {
  const store = await cookies();
  const id = store.get("turnout_uid")?.value;
  const user = id ? await getCommit(id) : undefined;
  // Component directly renders data, no useState or browser APIs
}
```

**Client component** (`/app/dashboard/ProgressToggle.tsx`):
```typescript
"use client";

import { useTransition } from "react";
import { toggleProgress } from "./actions";

export function ProgressToggle({ keyName, label, detail, done }: Props) {
  const [pending, start] = useTransition();
  
  onClick={() => start(() => toggleProgress(keyName, !done))}
  // Uses useTransition to call server action
}
```

Pattern: `"use client"` only on components that use browser APIs (`useTransition`, event handlers). Always import server actions at the top of client components.

## Session Management

**Cookie-based sessions:**
- User ID stored in `turnout_uid` cookie (set after form submission in `/app/commit/actions.ts`)
- Cookie attributes: `httpOnly: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 365, path: "/"`
- Retrieved via `await cookies()` then `store.get("turnout_uid")?.value`

---

*Convention analysis: 2026-04-22*
