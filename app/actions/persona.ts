"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCommit } from "@/lib/store";

export async function setPersona(commitId: string) {
  const commit = await getCommit(commitId);
  if (!commit) redirect("/?error=persona");

  const store = await cookies();
  store.set("turnout_uid", commitId, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function clearPersona() {
  const store = await cookies();
  store.delete("turnout_uid");
  revalidatePath("/", "layout");
  redirect("/");
}
