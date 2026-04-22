-- Per-election pledges — one row per commit × specific election event.
-- Lets a committed user (or persona) opt in to individual events from the
-- calendar, not just their country's general commitment.

CREATE TABLE IF NOT EXISTS public.election_pledges (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  commit_id       text NOT NULL REFERENCES public.commits(id) ON DELETE CASCADE,
  country         text NOT NULL,                -- ISO alpha-2
  election_date   date NOT NULL,
  election_label  text NOT NULL,
  created_at      timestamptz NOT NULL DEFAULT now(),
  UNIQUE (commit_id, country, election_date)
);

CREATE INDEX IF NOT EXISTS election_pledges_commit_idx  ON public.election_pledges(commit_id);
CREATE INDEX IF NOT EXISTS election_pledges_country_idx ON public.election_pledges(country, election_date);

ALTER TABLE public.election_pledges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read" ON public.election_pledges;
CREATE POLICY "public_read" ON public.election_pledges FOR SELECT USING (true);

-- Writes go through the service-role key (bypasses RLS) — server actions only.

-- Seed a couple of pledges for demo personas so "My elections" isn't empty on first open.
INSERT INTO public.election_pledges (commit_id, country, election_date, election_label)
SELECT * FROM (VALUES
  ('persona-mt-london',   'MT', DATE '2027-04-10', 'General election'),
  ('persona-mt-london',   'MT', DATE '2028-04-15', 'Local council elections'),
  ('persona-ch-berlin',   'CH', DATE '2026-06-14', 'Federal referendums (June round)'),
  ('persona-ch-berlin',   'CH', DATE '2026-09-27', 'Federal referendums (September round)'),
  ('persona-ch-berlin',   'CH', DATE '2027-10-24', 'Swiss federal elections'),
  ('persona-de-paris',    'DE', DATE '2029-09-23', 'Bundestag election'),
  ('persona-fr-montreal', 'FR', DATE '2027-04-18', 'Presidential election — round 1'),
  ('persona-tr-cologne',  'TR', DATE '2028-05-14', 'General election')
) AS seed(commit_id, country, election_date, election_label)
WHERE EXISTS (SELECT 1 FROM public.commits WHERE id = seed.commit_id)
ON CONFLICT (commit_id, country, election_date) DO NOTHING;
