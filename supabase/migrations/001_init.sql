-- Turnout — initial schema
-- Run this in the Supabase SQL editor (or via `supabase db push`) on a fresh project.

-- ─────────────────────────────────────────────────────────────────────────
-- Extensions
-- ─────────────────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ─────────────────────────────────────────────────────────────────────────
-- commits — one row per committed diaspora voter
--   id:       stable string id. For personas use slug ("persona-mt-london").
--             For magic-link users, equal to auth.users.id::text.
--   user_id:  FK to auth.users; null for personas/anon commits.
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.commits (
  id                 text PRIMARY KEY,
  user_id            uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  name               text NOT NULL,
  email              text NOT NULL,
  city               text NOT NULL,
  residence_country  text NOT NULL DEFAULT '',
  country            text NOT NULL,           -- ISO alpha-2
  created_at         timestamptz NOT NULL DEFAULT now(),
  progress           jsonb NOT NULL DEFAULT '{"registered": false, "planned": false, "voted": false}'::jsonb
);

CREATE INDEX IF NOT EXISTS commits_user_id_idx     ON public.commits(user_id);
CREATE INDEX IF NOT EXISTS commits_country_idx     ON public.commits(country);
CREATE INDEX IF NOT EXISTS commits_created_at_idx  ON public.commits(created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS commits_user_id_unique ON public.commits(user_id) WHERE user_id IS NOT NULL;

-- ─────────────────────────────────────────────────────────────────────────
-- topics — political issues per country (non-partisan content)
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.topics (
  id               text PRIMARY KEY,
  country          text NOT NULL,
  title            text NOT NULL,
  summary          text NOT NULL,
  keywords         text[] NOT NULL DEFAULT '{}',
  detail           text,
  official_links   jsonb NOT NULL DEFAULT '[]'::jsonb,
  news_links       jsonb NOT NULL DEFAULT '[]'::jsonb,
  endorsements     jsonb NOT NULL DEFAULT '[]'::jsonb,
  supporter_count  integer,
  created_at       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS topics_country_idx ON public.topics(country);

-- ─────────────────────────────────────────────────────────────────────────
-- election_overrides — admin edits applied on top of static country data
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.election_overrides (
  country                text PRIMARY KEY,
  next_election_label    text,
  next_election_date     date,
  registration_deadline  date,
  updated_at             timestamptz NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────────────────
-- Row-Level Security
-- ─────────────────────────────────────────────────────────────────────────
ALTER TABLE public.commits             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.election_overrides  ENABLE ROW LEVEL SECURITY;

-- Public read access (momentum page shows aggregate counts; topics are public)
DROP POLICY IF EXISTS "public_read" ON public.commits;
CREATE POLICY "public_read" ON public.commits
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "public_read" ON public.topics;
CREATE POLICY "public_read" ON public.topics
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "public_read" ON public.election_overrides;
CREATE POLICY "public_read" ON public.election_overrides
  FOR SELECT USING (true);

-- Authenticated users can update their own commit progress (registered/planned/voted toggles)
DROP POLICY IF EXISTS "user_updates_own" ON public.commits;
CREATE POLICY "user_updates_own" ON public.commits
  FOR UPDATE USING (auth.uid() = user_id);

-- Writes (INSERT / DELETE / admin updates) go through the service-role key (bypasses RLS).
-- Keep SERVICE_ROLE_KEY server-side only.

-- ─────────────────────────────────────────────────────────────────────────
-- Helpful view for momentum page
-- ─────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW public.commits_by_country AS
SELECT country, COUNT(*)::int AS total
FROM public.commits
GROUP BY country
ORDER BY total DESC;

GRANT SELECT ON public.commits_by_country TO anon, authenticated;
