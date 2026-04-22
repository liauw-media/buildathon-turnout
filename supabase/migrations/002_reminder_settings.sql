CREATE TABLE IF NOT EXISTS public.reminder_settings (
  scope text PRIMARY KEY,  -- "global" for demo simplicity; can extend to per-country later
  email_days_before_reg_deadline int[] NOT NULL DEFAULT '{14, 3}',
  sms_days_before_reg_deadline int[] NOT NULL DEFAULT '{3}',
  email_days_before_election int[] NOT NULL DEFAULT '{7, 1}',
  sms_days_before_election int[] NOT NULL DEFAULT '{1, 0}',
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.reminder_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read" ON public.reminder_settings;
CREATE POLICY "public_read" ON public.reminder_settings FOR SELECT USING (true);

-- Seed a default row
INSERT INTO public.reminder_settings (scope) VALUES ('global')
  ON CONFLICT (scope) DO NOTHING;
