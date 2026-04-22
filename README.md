# Turnout — From Support to Votes

> A non-partisan, privacy-first civic-tech platform that helps diaspora voters turn intent into action.

### 🔗 Live demo → **<https://buildathon-turnout.vercel.app/>**

Built for a buildathon on 2026-04-22. Showcases how a lightweight three-stage flow (**Commit → Guide → Activate**) can close the intention-to-turnout gap among motivated but inactive diaspora supporters.

---

## What you can demo right now

Open the live URL and try any of these without signing up — use the **persona switcher** in the top-left to swap between 8 pre-seeded diaspora voters:

| Route | What you'll see |
|---|---|
| [`/`](https://buildathon-turnout.vercel.app/) | Landing page — 3-stage explainer, non-partisan hero illustration, live commit counter |
| [`/momentum`](https://buildathon-turnout.vercel.app/momentum) | Zoomable world map (drag, wheel, pinch) with city-level diaspora pins + social-proof stats |
| [`/elections`](https://buildathon-turnout.vercel.app/elections) | Searchable/filterable calendar of **195 real + satirical elections** across 48 countries with accessibility-tier badges |
| [`/topics`](https://buildathon-turnout.vercel.app/topics) | Global keyword-searchable library of 154 non-partisan political topics with rich detail pages |
| [`/dashboard`](https://buildathon-turnout.vercel.app/dashboard) | Personalized plan: countdowns, 3-step checklist, **My elections** (per-event pledges), reminder feed with modal, anonymous voting-group matching |
| [`/inbox`](https://buildathon-turnout.vercel.app/inbox) | Simulated message center — ~9 personalized emails/SMS per user (past + scheduled states) |
| [`/shared`](https://buildathon-turnout.vercel.app/shared) | Downloadable share card (PNG/SVG) |
| [`/admin`](https://buildathon-turnout.vercel.app/admin) | Operator console — 6 tabs (Elections / Topics / Countries / **Events** / **Reminders** / **Stats**) with live CRUD |

---

## Demo flow (2–3 min pitch)

1. **Persona switcher** (top-left in nav) → pick "Maria (MT, London)"
2. **Dashboard** → see her voting-accessibility tier (🔴 must travel home), pledged elections, privacy-first voting group
3. **Elections** → click Malta 2027 General Election → pledge it inline ("I'll vote in this election")
4. **Inbox** → open a scheduled SMS, see the actual body
5. **Topics** → search "EU integration" → jump to a topic detail with official sources, news links, supporter count
6. **Admin → Events tab** → 195 calendar entries, satirical authoritarian-regime "referendums" included, featured star flag visible
7. **Admin → Stats tab** → region / tier distributions, featured upcoming list
8. Switch persona to **Lukas (CH, Berlin)** → dashboard now shows 🟢 e-voting + 4 quarterly Swiss referendums pledged

---

## Architecture

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript strict** · **Tailwind v4**
- **Supabase** — magic-link auth + Postgres (commits, topics, election overrides, reminder settings, per-event pledges)
- **Vercel** — autodeploy from `main`
- **Natural Earth 110m** world outline (172 countries) projected equirectangular for the zoomable map
- All app state **dual-mode**: works with Supabase when env is set, falls back to JSON files for local dev

## Local setup

```bash
git clone https://github.com/liauw-media/buildathon-turnout
cd buildathon-turnout
npm install
cp .env.local.example .env.local    # fill in Supabase keys

# Apply schema
supabase link --project-ref <your-ref>
supabase db push

# Seed demo data (38 commits + 154 topics)
node supabase/seed.mjs

npm run dev
```

Full deploy runbook in [`DEPLOY.md`](./DEPLOY.md).

## Tech highlights

| Concern | How we solved it |
|---|---|
| Mutable state on serverless (Vercel FS is read-only) | Dual-mode store: Supabase when env set, JSON file fallback for dev |
| Non-partisan content guarantee | Every topic summary & detail reviewed against a "describe the issue, don't endorse positions" rubric |
| Privacy-first voting group | No names, no initials — hash-stable emoji avatars + city-only distance ("Fellow voter · Berlin") |
| Authoritarian regimes | Included honestly: 7 regimes (KP/RU/IR/CU/VE/CN/BY) with ⚫ "no free overseas vote" tier + satirical-but-respectful shadow-election entries |
| Demo-scale numbers | `DEMO_MULTIPLIER` (×847) applied to visible momentum counts with clear code comment — never burn into DB |
| Minimum friction commit | Email + city + country = 3 fields (per the original pitch "minimal friction (email/city)") |
| Persona switching for pitches | 8 curated personas in a top-nav dropdown — instant cookie swap, no auth roundtrip |

## Coverage

- **48 countries** — all EU 27 + non-EU European states + Balkans + 7 authoritarian regimes
- **195 elections** in the calendar (real + 14 satirical showcase entries)
- **154 topics** across all countries with 2–4 paragraph detail, official sources, news links, endorsements, supporter counts
- **18 consulate cities** with plausible addresses (for diaspora-location messaging)

## License & credits

Non-partisan prototype, built for buildathon demo purposes. Content is factual or clearly-labelled satirical. Borders data: [Natural Earth](https://www.naturalearthdata.com/) (public domain).
