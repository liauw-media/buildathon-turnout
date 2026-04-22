"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { addCommit } from "@/lib/store";
import { getCountry } from "@/lib/countries";
import { getSupabaseServer } from "@/lib/supabase/server";
import { hasSupabaseFull, getSiteUrl } from "@/lib/supabase/env";

function deriveNameFromEmail(email: string): string {
  const local = email.split("@")[0] ?? "";
  return (
    local
      .split(/[._-]+/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() + part.slice(1))
      .join(" ") || "Friend"
  );
}

export async function submitCommit(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!email || !city || !country) {
    redirect("/commit?error=missing");
  }
  if (!getCountry(country)) {
    redirect("/commit?error=country");
  }

  // ── Magic-link path ────────────────────────────────────────────────
  // When Supabase is fully configured, send a magic link. The callback
  // route finishes the commit after the user clicks the link.
  if (hasSupabaseFull()) {
    const supabase = await getSupabaseServer();
    if (supabase) {
      const redirectTo = new URL("/auth/callback", getSiteUrl());
      redirectTo.searchParams.set("city", city);
      redirectTo.searchParams.set("country", country);
      redirectTo.searchParams.set("next", "/dashboard");

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo.toString(),
          shouldCreateUser: true,
        },
      });

      if (error) {
        redirect(`/commit?error=auth`);
      }
      redirect(`/commit/check-email?email=${encodeURIComponent(email)}`);
    }
  }

  // ── Fallback: direct JSON-store commit (local dev / no Supabase) ────
  const commit = await addCommit({
    name: deriveNameFromEmail(email),
    email,
    city,
    residenceCountry: "",
    country,
  });

  const store = await cookies();
  store.set("turnout_uid", commit.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  redirect("/dashboard");
}
