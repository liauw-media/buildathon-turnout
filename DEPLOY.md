# Deploying Turnout (Supabase + Vercel)

This prototype uses **Supabase** for magic-link auth + commit storage, and **Vercel** to host the Next.js app. When no Supabase env vars are set, the app falls back to the JSON-file store for local development.

## 1. Create a Supabase project

1. Go to <https://supabase.com/dashboard> and create a new project.
2. Once provisioned, grab these from **Project Settings → API**:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep private)

## 2. Run the schema migration

In the Supabase dashboard → **SQL Editor**, paste the contents of `supabase/migrations/001_init.sql` and run it. This creates three tables: `commits`, `topics`, `election_overrides`, plus RLS policies and an aggregation view.

## 3. Fill in `.env.local` (local dev)

```bash
cp .env.local.example .env.local
# then edit .env.local with your Supabase credentials
```

## 4. Seed the database

```bash
node supabase/seed.mjs
```

This reads `data/commits.json`, `data/topics.json`, and `data/elections.json` and upserts them into Supabase. Includes the 8 demo personas (`persona-mt-london`, `persona-ch-berlin`, etc.) so the persona switcher works against real data.

## 5. Configure Supabase Auth

Supabase dashboard → **Authentication → URL Configuration**:

- **Site URL**: your production URL (e.g. `https://turnout-demo.vercel.app`) — or `http://localhost:3000` for local testing.
- **Redirect URLs** — add both:
  - `http://localhost:3000/auth/callback`
  - `https://<your-vercel-deploy>/auth/callback`

Supabase dashboard → **Authentication → Providers → Email** — enable "Email OTP" (this is what powers magic links). Default settings are fine.

## 6. Deploy to Vercel

```bash
# Install Vercel CLI if needed:  npm i -g vercel
vercel
```

Or via the dashboard: import the repo, let it auto-detect Next.js. On first deploy, set these env vars in **Project → Settings → Environment Variables**:

| Name                             | Scope               | Value                                       |
|----------------------------------|---------------------|---------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`       | Production, Preview | your Supabase URL                           |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | Production, Preview | your anon key                               |
| `SUPABASE_SERVICE_ROLE_KEY`      | Production, Preview | your service-role key (NEVER expose public) |
| `NEXT_PUBLIC_SITE_URL`           | Production          | your Vercel deploy URL                      |

Redeploy after setting env vars so the build picks them up.

## 7. Local development modes

| Env vars set?       | Behaviour                                                                         |
|---------------------|-----------------------------------------------------------------------------------|
| None set            | JSON-file storage (`data/commits.json`), cookie-based "auth", no magic links      |
| All set             | Supabase storage, real magic-link auth, persona switcher still works for demo     |

You can develop against either — the app detects at runtime via `hasSupabaseFull()`.

## Demo flow after deploy

1. Open your Vercel URL → landing page with the 3-stage explainer.
2. Click **Commit to vote** → form asks only email + city + country.
3. Submit → "check your inbox" page appears.
4. Email arrives → click magic link → `/auth/callback` exchanges the code, creates a commit row, redirects to `/dashboard`.
5. Dashboard shows personalized countdowns, 3-step plan, voting group, inbox link.
6. To demo other personas, use the **persona switcher** in the top nav — instant cookie swap, no auth round-trip.

## Files you should know

- `lib/supabase/env.ts` — env-var helpers + `hasSupabaseFull()` detection
- `lib/supabase/server.ts` — SSR cookie-aware server client + admin (service-role) client
- `lib/supabase/browser.ts` — browser-side client (singleton)
- `app/commit/actions.ts` — magic-link submission + fallback path
- `app/auth/callback/route.ts` — exchanges OTP code, creates commit row, sets cookie
- `app/welcome/page.tsx` — first-time onboarding when user comes from magic link without city/country pre-filled
- `supabase/migrations/001_init.sql` — full schema
- `supabase/seed.mjs` — data seeder (rerunnable; uses upsert)
