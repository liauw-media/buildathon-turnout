"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import { getSupabaseServer, getSupabaseAdmin } from "@/lib/supabase/server";
import { getCountry } from "@/lib/countries";

export async function submitWelcome(formData: FormData) {
  const city = String(formData.get("city") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!city || !country) redirect("/welcome?error=missing");
  if (!getCountry(country)) redirect("/welcome?error=country");

  const supabase = await getSupabaseServer();
  const admin = getSupabaseAdmin();

  if (!supabase || !admin) {
    redirect("/commit?error=not-configured");
  }

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  if (!user) redirect("/commit");

  const email = user.email ?? "";
  const name = deriveName(email);

  // Upsert commit row
  const { data: existing } = await admin
    .from("commits")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  let commitId = existing?.id as string | undefined;

  if (commitId) {
    await admin
      .from("commits")
      .update({ name, email, city, country, residence_country: "" })
      .eq("id", commitId);
  } else {
    commitId = randomUUID();
    await admin.from("commits").insert({
      id: commitId,
      user_id: user.id,
      name,
      email,
      city,
      residence_country: "",
      country,
      progress: { registered: false, planned: false, voted: false },
    });
  }

  // Mirror to our simple cookie so existing personalized pages work unchanged
  const store = await cookies();
  store.set("turnout_uid", commitId!, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  store.delete("turnout_pending_email");

  redirect("/dashboard");
}

function deriveName(email: string): string {
  const local = email.split("@")[0] ?? "";
  return (
    local
      .split(/[._-]+/)
      .filter(Boolean)
      .map((p) => p[0]?.toUpperCase() + p.slice(1))
      .join(" ") || "Friend"
  );
}
