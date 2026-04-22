"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { updateProgress } from "@/lib/store";
import type { Commit } from "@/lib/types";

export async function toggleProgress(key: keyof Commit["progress"], next: boolean) {
  const store = await cookies();
  const id = store.get("turnout_uid")?.value;
  if (!id) return;
  await updateProgress(id, { [key]: next });
  revalidatePath("/dashboard");
}
