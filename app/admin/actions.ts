"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addTopic, updateTopic, deleteTopic } from "@/lib/topics-store";
import { upsertOverride } from "@/lib/elections-store";
import { COUNTRIES } from "@/lib/countries";
import { updateReminderSettings } from "@/lib/reminder-settings-store";

// ─── Elections ───────────────────────────────────────────────────────────────

export async function saveElection(formData: FormData): Promise<void> {
  const country = String(formData.get("country") ?? "").trim();
  const nextElectionLabel = String(formData.get("nextElectionLabel") ?? "").trim();
  const nextElectionDate = String(formData.get("nextElectionDate") ?? "").trim();
  const registrationDeadline = String(formData.get("registrationDeadline") ?? "").trim();

  if (!country || !COUNTRIES.find((c) => c.code === country)) {
    redirect("/admin?tab=elections&error=invalid_country");
  }

  await upsertOverride({
    country,
    nextElectionLabel: nextElectionLabel || undefined,
    nextElectionDate: nextElectionDate || undefined,
    registrationDeadline: registrationDeadline || undefined,
  });

  revalidatePath("/admin");
  revalidatePath("/dashboard");
  redirect("/admin?tab=elections&success=saved");
}

// ─── Topics ──────────────────────────────────────────────────────────────────

function parseKeywords(raw: string): string[] {
  return raw
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

export async function createTopic(formData: FormData): Promise<void> {
  const country = String(formData.get("country") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  const keywordsRaw = String(formData.get("keywords") ?? "").trim();

  if (!country || !title || !summary) {
    redirect("/admin?tab=topics&error=missing_fields");
  }
  if (!COUNTRIES.find((c) => c.code === country)) {
    redirect("/admin?tab=topics&error=invalid_country");
  }

  const keywords = parseKeywords(keywordsRaw);

  await addTopic({ country, title, summary, keywords });

  revalidatePath("/admin");
  revalidatePath(`/elections/${country}/topics`);
  redirect("/admin?tab=topics&success=created");
}

export async function editTopic(formData: FormData): Promise<void> {
  const id = String(formData.get("id") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  const keywordsRaw = String(formData.get("keywords") ?? "").trim();

  if (!id || !country || !title || !summary) {
    redirect("/admin?tab=topics&error=missing_fields");
  }

  const keywords = parseKeywords(keywordsRaw);

  await updateTopic(id, { country, title, summary, keywords });

  revalidatePath("/admin");
  revalidatePath(`/elections/${country}/topics`);
  redirect("/admin?tab=topics&success=updated");
}

export async function removeTopic(formData: FormData): Promise<void> {
  const id = String(formData.get("id") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!id) {
    redirect("/admin?tab=topics&error=missing_id");
  }

  await deleteTopic(id);

  revalidatePath("/admin");
  if (country) revalidatePath(`/elections/${country}/topics`);
  redirect("/admin?tab=topics&success=deleted");
}

// ─── Reminder Settings ────────────────────────────────────────────────────────

function parseIntArray(raw: string): number[] {
  return raw
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n) && n >= 0);
}

export async function saveReminderSettings(formData: FormData): Promise<void> {
  const emailDaysBeforeRegDeadline = parseIntArray(
    String(formData.get("emailDaysBeforeRegDeadline") ?? ""),
  );
  const smsDaysBeforeRegDeadline = parseIntArray(
    String(formData.get("smsDaysBeforeRegDeadline") ?? ""),
  );
  const emailDaysBeforeElection = parseIntArray(
    String(formData.get("emailDaysBeforeElection") ?? ""),
  );
  const smsDaysBeforeElection = parseIntArray(
    String(formData.get("smsDaysBeforeElection") ?? ""),
  );

  await updateReminderSettings({
    emailDaysBeforeRegDeadline,
    smsDaysBeforeRegDeadline,
    emailDaysBeforeElection,
    smsDaysBeforeElection,
  });

  revalidatePath("/admin");
}
