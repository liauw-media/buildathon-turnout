# Testing Patterns

**Analysis Date:** 2026-04-22

## Current State

**No testing framework installed** - `package.json` contains no test dependencies (`jest`, `vitest`, `playwright`, `@testing-library`, etc.).

**Test coverage:** 0% (no `.test.ts`, `.spec.ts`, or `.test.tsx` files exist in the codebase)

This is a hackathon prototype built on 2026-04-22 with immediate shipping priority over test coverage.

## Test Framework Recommendations

If productionizing this prototype, adopt a two-tier testing strategy:

### Unit Tests: Vitest + @testing-library/react

**Why Vitest:**
- Fast (uses Vite transpilation, similar to Next.js dev build)
- Native ESM support (no CommonJS confusion with Node imports)
- TypeScript support out-of-the-box
- Jest-compatible API (minimal migration cost later)
- Better DX for server component testing than Jest

**Recommended setup:**

```bash
npm install --save-dev vitest @testing-library/react @testing-library/dom jsdom
```

**Config: `vitest.config.ts`**
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
  },
})
```

### E2E Tests: Playwright

**Why Playwright:**
- Cross-browser E2E testing (Chrome, Firefox, Safari)
- Easy form submission and navigation testing (perfect for this app)
- Network request interception for mocking
- Screenshots/videos on failure

**Recommended setup:**

```bash
npm install --save-dev @playwright/test
npx playwright install
```

**Config: `playwright.config.ts`**
```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:3000' },
  webServer: { command: 'npm run dev', port: 3000 },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
})
```

## What to Test

### Unit: Utilities (Priority: High)

**`/lib/timeline.ts`** - date/reminder logic is pure functions:
```typescript
// Test daysUntil()
- Past dates (negative days)
- Future dates (positive days)
- Edge case: same day (0 days)
- Timezone handling for ISO date parsing

// Test buildReminderTimeline()
- Returns correct number of events (6 events currently)
- Event dates are in correct order (ascending)
- Event kinds are correct (info/deadline/action)
- Different country rules produce different timelines
```

**`/lib/store.ts`** - file I/O and data persistence:
```typescript
// Test readCommits()
- Returns empty array if file doesn't exist
- Returns parsed JSON array if file exists
- Handles corrupted JSON gracefully

// Test addCommit()
- Creates new commit with UUID and timestamp
- Writes to file
- Returns created commit object
- Subsequent reads retrieve the commit

// Test updateProgress()
- Updates only specified progress fields
- Returns updated commit
- Handles missing commits gracefully
```

**`/lib/countries.ts`** - country data and lookup:
```typescript
// Test getCountry()
- Returns country object for valid code (e.g., "MD" → Moldova)
- Returns undefined for invalid codes
- Case sensitivity handling
```

### Unit: Components (Priority: Medium)

**`/app/dashboard/ProgressToggle.tsx`** - client component with server action:
```typescript
// Mock toggleProgress server action
// Test that onClick calls toggleProgress with correct key
// Test that disabled state is set during transition
// Test that visual state changes (done/not-done styling)
// Test accessibility: checkbox semantics, aria-hidden on icon
```

**Inline components in pages** (e.g., `Field()`, `Stage()`, `Countdown()`):
```typescript
// Test Field component renders with correct attributes
// Test Stage component displays num/title/body correctly
// Test Countdown shows "Passed" for past dates and "N days" for future
```

### E2E: User Flows (Priority: High)

**Main commit flow** (`/commit`):
```typescript
test('should submit commit form and redirect to dashboard', async ({ page }) => {
  await page.goto('/commit');
  
  // Fill form
  await page.fill('[name="name"]', 'Maria Popescu');
  await page.fill('[name="email"]', 'maria@example.com');
  await page.fill('[name="city"]', 'Berlin');
  await page.selectOption('[name="country"]', 'RO');
  await page.check('input[type="checkbox"]');
  
  // Submit
  await page.click('button[type="submit"]');
  
  // Expect redirect to dashboard
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('text=Hi Maria')).toBeVisible();
});

test('should show error for missing required field', async ({ page }) => {
  await page.goto('/commit');
  await page.fill('[name="name"]', 'Maria');
  // Don't fill other fields
  
  await page.click('button[type="submit"]');
  await page.waitForURL('/commit?error=missing');
  
  await expect(page.locator('text=Please fill in all required fields')).toBeVisible();
});

test('should show error for invalid country', async ({ page }) => {
  await page.goto('/commit');
  await page.fill('[name="name"]', 'Maria');
  // ... fill form
  await page.fill('[name="country"]', 'INVALID');
  
  await page.click('button[type="submit"]');
  await page.waitForURL('/commit?error=country');
  
  await expect(page.locator('text=Please choose a valid country')).toBeVisible();
});
```

**Dashboard flow** (`/dashboard`):
```typescript
test('should show personalized dashboard after commit', async ({ page }) => {
  // Assuming previous test left us logged in (via cookie)
  await page.goto('/dashboard');
  
  await expect(page.locator('text=Your 3-step plan')).toBeVisible();
  await expect(page.locator('text=Register to vote abroad')).toBeVisible();
});

test('should toggle progress state', async ({ page }) => {
  await page.goto('/dashboard');
  
  const checkbox = page.locator('button', { hasText: 'Register to vote abroad' });
  await checkbox.click();
  
  // Expect button styling to change (green background)
  await expect(checkbox).toHaveClass(/emerald-50/);
});

test('should show no plan message when not logged in', async ({ page }) => {
  // Clear cookies to simulate not logged in
  await page.context().clearCookies();
  
  await page.goto('/dashboard');
  await expect(page.locator('text=No plan yet')).toBeVisible();
  await expect(page.locator('text=Commit to vote')).toBeVisible();
});
```

## What NOT to Test

**Do not unit test:**
- Page component layout (tested by E2E and visual regression)
- Tailwind utility class application (no CSS assertions in tests)
- Next.js framework behavior (redirects, cookies, revalidation) — covered by E2E
- Inline component styling logic

**Do not create unit tests for:**
- Server actions in isolation (they depend on server context like `cookies()`)
- Page components directly (test them via E2E)
- Static data in `countries.ts` (data source changes less frequently)

## Test Organization

**Location:**
- Co-located: `__tests__/` directory next to source files
- OR: Top-level `tests/` directory mirroring `lib/`, `app/` structure

**Recommended structure:**
```
/lib
  ├── timeline.ts
  ├── store.ts
  └── __tests__/
      ├── timeline.test.ts
      ├── store.test.ts
      └── countries.test.ts

/app
  ├── dashboard/
  │   ├── ProgressToggle.tsx
  │   └── __tests__/
  │       └── ProgressToggle.test.tsx

/e2e
  ├── commit-flow.spec.ts
  └── dashboard-flow.spec.ts
```

## Run Commands (Post-Setup)

```bash
# Unit tests
npm run test              # Run all tests once
npm run test:watch       # Watch mode
npm run test:coverage    # Generate coverage report

# E2E tests
npm run e2e              # Run all E2E tests
npm run e2e:ui           # Interactive test UI
npm run e2e:debug        # Debug mode with inspector

# Both
npm run test:all         # All tests (unit + E2E)
```

## Coverage Targets (Recommendations)

| Category | Target |
|----------|--------|
| Statements | 70% |
| Branches | 60% |
| Functions | 70% |
| Lines | 70% |

**Priorities:**
1. **High priority:** `lib/store.ts` (data persistence - any bug means data loss)
2. **High priority:** `lib/timeline.ts` (deadline logic - any bug means missed elections)
3. **Medium priority:** `lib/countries.ts` (country data lookup)
4. **Medium priority:** Server actions in `app/*/actions.ts` (via E2E)
5. **Low priority:** Inline page components (via E2E visual checks)

## Mocking Strategy

**What to mock:**
- Server actions in client component tests: Use `vi.mock('./actions.ts')`
- File I/O in store tests: Consider `vi.mock('node:fs/promises')`
- Date in timeline tests: Use `vi.setSystemTime()` for consistent date checks

**What NOT to mock:**
- Next.js internals (cookies, redirect, etc.) - test via E2E
- Database/persistence layer for integration tests - use real file system for store tests

## Async Testing

**Server actions in E2E:**
```typescript
test('form submission triggers server action', async ({ page }) => {
  await page.goto('/commit');
  await page.fill('[name="name"]', 'Test User');
  
  // This waits for navigation (server action + redirect)
  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type="submit"]'),
  ]);
  
  // Now on new page
  expect(page.url()).toContain('/dashboard');
});
```

**Client-side mutations:**
```typescript
test('toggle updates UI immediately during transition', async ({ page }) => {
  // Use Playwright's expectation with toHaveClass
  // which waits for DOM changes
  await button.click();
  
  await expect(button).toHaveClass(/emerald-50/);
});
```

## Current Test Gaps

**Critical gaps:**
- Zero coverage on `lib/store.ts` — file I/O is untested, any regression corrupts data directory
- Zero coverage on `lib/timeline.ts` — date math is untested, deadlines could be wrong
- Zero E2E coverage on commit form validation flow
- Zero E2E coverage on cookie-based session persistence

**Medium-risk gaps:**
- No tests for country lookup edge cases
- No tests for responsive design breakpoints (Tailwind utility application)
- No tests for error state rendering

---

*Testing analysis: 2026-04-22*
