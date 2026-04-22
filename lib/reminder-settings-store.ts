import { hasSupabaseFull } from "./supabase/env";
import { getSupabaseAdmin } from "./supabase/server";

export type ReminderSettings = {
  emailDaysBeforeRegDeadline: number[];
  smsDaysBeforeRegDeadline: number[];
  emailDaysBeforeElection: number[];
  smsDaysBeforeElection: number[];
};

const DEFAULTS: ReminderSettings = {
  emailDaysBeforeRegDeadline: [14, 3],
  smsDaysBeforeRegDeadline: [3],
  emailDaysBeforeElection: [7, 1],
  smsDaysBeforeElection: [1, 0],
};

type DbRow = {
  scope: string;
  email_days_before_reg_deadline: number[];
  sms_days_before_reg_deadline: number[];
  email_days_before_election: number[];
  sms_days_before_election: number[];
  updated_at: string;
};

function rowToSettings(row: DbRow): ReminderSettings {
  return {
    emailDaysBeforeRegDeadline: row.email_days_before_reg_deadline,
    smsDaysBeforeRegDeadline: row.sms_days_before_reg_deadline,
    emailDaysBeforeElection: row.email_days_before_election,
    smsDaysBeforeElection: row.sms_days_before_election,
  };
}

export async function getReminderSettings(): Promise<ReminderSettings> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin
        .from("reminder_settings")
        .select("*")
        .eq("scope", "global")
        .maybeSingle();
      if (!error && data) {
        return rowToSettings(data as DbRow);
      }
    }
  }
  return { ...DEFAULTS };
}

export async function updateReminderSettings(input: ReminderSettings): Promise<void> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin.from("reminder_settings").upsert(
        {
          scope: "global",
          email_days_before_reg_deadline: input.emailDaysBeforeRegDeadline,
          sms_days_before_reg_deadline: input.smsDaysBeforeRegDeadline,
          email_days_before_election: input.emailDaysBeforeElection,
          sms_days_before_election: input.smsDaysBeforeElection,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "scope" },
      );
      if (error) throw error;
    }
  }
  // Silently no-op when Supabase is not configured
}
