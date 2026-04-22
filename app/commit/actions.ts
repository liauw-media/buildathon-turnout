"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { addCommit } from "@/lib/store";
import { getCountry } from "@/lib/countries";

export async function submitCommit(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const residenceCountry = String(formData.get("residenceCountry") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!name || !email || !city || !country) {
    redirect("/commit?error=missing");
  }
  if (!getCountry(country)) {
    redirect("/commit?error=country");
  }

  const commit = await addCommit({ name, email, city, residenceCountry, country });

  const store = await cookies();
  store.set("turnout_uid", commit.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  redirect("/dashboard");
}
