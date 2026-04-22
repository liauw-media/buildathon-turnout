"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCommit } from "@/lib/store";
import { addPledge, removePledge } from "@/lib/pledges-store";

export async function pledgeElection(formData: FormData) {
  const country = String(formData.get("country") ?? "").trim().toUpperCase();
  const electionDate = String(formData.get("electionDate") ?? "").trim();
  const electionLabel = String(formData.get("electionLabel") ?? "").trim();

  if (!country || !electionDate || !electionLabel) {
    return;
  }

  const store = await cookies();
  const commitId = store.get("turnout_uid")?.value;
  if (!commitId) {
    redirect(`/commit?code=${country}&election=${electionDate}`);
  }

  const user = await getCommit(commitId);
  if (!user) {
    redirect(`/commit?code=${country}&election=${electionDate}`);
  }

  // Guardrail: user can only pledge to events in their own country (one identity, one vote).
  if (user.country !== country) {
    redirect(`/elections/${country}?event=${electionDate}&error=wrong-country`);
  }

  await addPledge(commitId, country, electionDate, electionLabel);
  revalidatePath(`/elections/${country}`);
  revalidatePath("/dashboard");
  redirect(`/elections/${country}?event=${electionDate}&pledged=1`);
}

export async function unpledgeElection(formData: FormData) {
  const country = String(formData.get("country") ?? "").trim().toUpperCase();
  const electionDate = String(formData.get("electionDate") ?? "").trim();

  if (!country || !electionDate) return;

  const store = await cookies();
  const commitId = store.get("turnout_uid")?.value;
  if (!commitId) return;

  await removePledge(commitId, country, electionDate);
  revalidatePath(`/elections/${country}`);
  revalidatePath("/dashboard");
  redirect(`/elections/${country}?event=${electionDate}`);
}
