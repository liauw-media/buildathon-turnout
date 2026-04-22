# Turnout — From Support to Votes

A lightweight civic-tech prototype that helps diaspora voters turn intent into action.
Non-partisan, privacy-first, built as a 2-hour hackathon prototype on 2026-04-22.

## The problem

Across diaspora communities many people are motivated to support democratic change, but a
large share never completes the steps required to actually vote. Missed deadlines, unclear
procedures, and inertia create a gap between **intention and turnout**. In parallel,
electoral processes can be vulnerable to manipulation — so every real diaspora vote matters
even more.

## The approach

Turnout strengthens democratic outcomes by increasing turnout among already-motivated but
inactive supporters. It doesn't try to counter manipulation directly; it focuses on
removing friction at every step of the voter journey.

### Three stages

| Stage | Goal | What happens |
|---|---|---|
| **Commit** | Convert passive support into public intent | User signals they'll vote with a 30-second form (name, email, city, country of origin). Visible running count creates social momentum. |
| **Guide** | Remove procedural confusion | User receives a personalized checklist of registration steps, deadlines, and required documents for their country — in plain language. |
| **Activate** | Ensure follow-through | Automated reminder timeline before registration deadline and election day. Optional: match with nearby voters to go together. |

The approach combines **commitment devices + implementation intentions + reminders** — all
well-studied turnout interventions — with plain information design.

## MVP scope (this prototype)

**Voter-facing routes:**
- `/` — landing with 3-stage explainer and live commit count
- `/commit` — 30-second commit form (server action, cookie session, no auth)
- `/dashboard` — personalized guide: countdown, 3-step checklist, reminder timeline, vote-together matching, share-card CTA
- `/momentum` — public social-proof stats: **Europe world map** with city pins, bars by country, top diaspora cities, recent commitments
- `/inbox` — **simulated message center**: every email/SMS that would be delivered to the committed user (~9 messages per country, mix of email/SMS, past/scheduled states). Stand-in for real email/SMS delivery.
- `/shared` — downloadable **share card** ("I'm committing to vote"): SVG/PNG download, copy-link, social-share placeholders
- `/elections/[code]/topics` — public, keyword-searchable topic browser (what's at stake in each election, non-partisan framing)

**Operator-facing route:**
- `/admin` — unauthenticated admin panel (URL-protected for the showcase):
  - **Elections tab** — edit per-country election date, label, registration deadline (persists to `data/elections.json` as overrides)
  - **Topics tab** — CRUD topics with keyword management (persists to `data/topics.json`)
  - **Countries tab** — per-country stats: # topics, # commits, next election, override badge

**Data:**
- Mocked country rules for 4 scenarios: 🇲🇩 Moldova, 🇷🇴 Romania, 🇬🇪 Georgia, 🇹🇷 Türkiye
- JSON-file storage for commits, topics, election overrides — all survive refresh
- Seed: ~30 commits across 18 diaspora cities, 20 topics (5 per country), 18 consulate addresses
- No real auth — cookie holds the anonymous commit id

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** server components + server actions
- **TypeScript**
- **Tailwind CSS v4**
- Node `fs` for persistence (zero infra)

## File structure

```
app/
  layout.tsx                        # shell, nav, footer
  page.tsx                          # landing + live commit count
  commit/
    page.tsx                        # commit form
    actions.ts                      # "use server" — addCommit + set cookie
  dashboard/
    page.tsx                        # personalized guide
    actions.ts                      # "use server" — toggle progress
    ProgressToggle.tsx              # client — optimistic toggle
    VotingGroup.tsx                 # client — vote-together group UI
  momentum/
    page.tsx                        # public stats
    WorldMap.tsx                    # SVG Europe map with city pins
  inbox/
    page.tsx                        # simulated email/SMS center
  shared/
    page.tsx                        # share card shell
    ShareCard.tsx                   # client — SVG card + PNG download
  admin/
    page.tsx                        # tabbed admin (elections | topics | countries)
    actions.ts                      # "use server" — CRUD actions
    ElectionsForm.tsx               # client — election overrides
    TopicsTable.tsx                 # client — topic list with inline edit
    TopicForm.tsx                   # client — create/edit topic
  elections/
    [code]/topics/
      page.tsx                      # public keyword-searchable topics
      SearchBox.tsx                 # client — URL-synced search

lib/
  types.ts              # Commit, CountryRules, ReminderEvent
  countries.ts          # static country rules (4 countries)
  store.ts              # JSON-file store (commits)
  timeline.ts           # date helpers + reminder timeline
  topics.ts             # Topic type + seed (20 topics)
  topics-store.ts       # CRUD for topics
  elections-store.ts    # election-override store + getEffectiveCountry
  geo.ts                # city → lat/lng for the world map
  matching.ts           # vote-together pairing algorithm
  messages.ts           # email/SMS content generator for /inbox
  consulates.ts         # consulate addresses per diaspora city

data/
  commits.json          # seeded with ~30 committed voters
  topics.json           # seeded with 20 topics (5 per country)
  elections.json        # election overrides (starts empty)
```

## Running it

```bash
npm install    # already installed
npm run dev    # http://localhost:3000
```

**Demo flow (target ~2 minutes):**

1. `/momentum` — social proof: Europe map with city pins, country/city bars, recent commits ticker.
2. `/elections/MD/topics` — what's at stake, search by keyword (e.g. "EU") to filter topics.
3. `/` → `/commit` — fill the form (pick Romania for shortest deadline, most urgent countdown).
4. `/dashboard` — personalized plan: countdowns, 3-step checklist (click to toggle), documents, upcoming nudges, **vote-together** matching (2-4 nearby voters, high-five + suggest-a-time), share-card CTA.
5. `/inbox` — the full reminder center: ~9 emails/SMS with past/scheduled states, per-country consulate info, actual procedural content.
6. `/shared` — download the share card as PNG or SVG, copy share link.
7. `/admin` — as the operator: edit Moldova's election date, create a new topic with keywords, see stats update live on `/momentum` and `/elections/MD/topics`.

## Principles

- **Non-partisan** — the only information shown is procedural (how, where, when).
- **Privacy-first** — email/name never shown publicly; only initials + city surfaced on `/momentum`.
- **Transparent** — rules shown are copied from each country's official election authority.
- **Low friction** — commit step demands minimal data; everything else is progressive.

## What this prototype *doesn't* do (but would in production)

- Real email/SMS delivery (reminders shown as a timeline, not actually sent)
- Real authentication — currently just a cookie with the commit id
- Verified voter identity — this platform never needs to verify identity; it just guides
  people to the official channels that do
- Moderation / abuse prevention on voting-group matching
- Database (Postgres/SQLite) instead of a JSON file
- i18n — country-specific content is currently English only

## Why this is safe, legally

Turnout never handles ballots, never collects IDs, and never intermediates with electoral
authorities. It only surfaces publicly-available procedural information and sends reminders
the user explicitly opted into. It is a directory and a nudge engine, nothing more.
