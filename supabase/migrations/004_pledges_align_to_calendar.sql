-- Fix persona seed pledges to match real dates in data/elections-calendar.json.
-- The 003 seed used plausible-but-mock dates. This rewrites them to match
-- actual events in the research-sourced calendar so the "Pledged ✓" state
-- resolves correctly on /elections/[code] pages.

-- Drop the mismatched seed pledges.
DELETE FROM public.election_pledges
WHERE commit_id LIKE 'persona-%';

-- Re-insert with calendar-aligned dates.
INSERT INTO public.election_pledges (commit_id, country, election_date, election_label)
SELECT * FROM (VALUES
  -- Malta — London persona (pledges to both scheduled Malta events)
  ('persona-mt-london',   'MT', DATE '2027-03-01', 'General election'),
  ('persona-mt-london',   'MT', DATE '2029-06-01', 'European Parliament election'),

  -- Switzerland — Berlin persona (pledges to 3 referendum rounds + federal election)
  ('persona-ch-berlin',   'CH', DATE '2026-06-14', 'Switzerland federal referendum round (June)'),
  ('persona-ch-berlin',   'CH', DATE '2026-09-27', 'Switzerland federal referendum round (September)'),
  ('persona-ch-berlin',   'CH', DATE '2026-11-29', 'Switzerland federal referendum round (November)'),
  ('persona-ch-berlin',   'CH', DATE '2027-10-24', 'Switzerland federal elections (National Council and Council of States)'),

  -- Germany — Paris persona (pledges to Bundestag + Berlin state vote)
  ('persona-de-paris',    'DE', DATE '2026-09-20', 'Berlin Abgeordnetenhaus election'),
  ('persona-de-paris',    'DE', DATE '2029-03-26', 'Germany federal Bundestag election'),

  -- France — Montreal persona
  ('persona-fr-montreal', 'FR', DATE '2027-04-11', 'French presidential election (first round)'),
  ('persona-fr-montreal', 'FR', DATE '2029-06-01', 'French legislative election (National Assembly)'),

  -- Turkey — Cologne persona
  ('persona-tr-cologne',  'TR', DATE '2028-05-14', 'Presidential and parliamentary general election')
) AS seed(commit_id, country, election_date, election_label)
WHERE EXISTS (SELECT 1 FROM public.commits WHERE id = seed.commit_id)
ON CONFLICT (commit_id, country, election_date) DO NOTHING;
