import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseServer, getSupabaseAdmin } from "@/lib/supabase/server";
import { getCountry } from "@/lib/countries";
import { addCommit, getCommit } from "@/lib/store";
import { randomUUID } from "node:crypto";

/**
 * Magic-link return URL.
 * Supabase redirects here with ?code=… after a user clicks the OTP link.
 * We exchange the code for a session, then ensure a `commits` row exists for the user.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const city = url.searchParams.get("city") ?? "";
  const country = url.searchParams.get("country") ?? "";
  const next = url.searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(new URL("/?auth=missing-code", request.url));
  }

  const supabase = await getSupabaseServer();
  if (!supabase) {
    // Supabase not configured — this route shouldn't have been hit; fail gracefully.
    return NextResponse.redirect(new URL("/?auth=not-configured", request.url));
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !data.session) {
    return NextResponse.redirect(new URL(`/?auth=error&msg=${encodeURIComponent(error?.message ?? "unknown")}`, request.url));
  }

  const user = data.session.user;
  const email = user.email ?? "";
  const userId = user.id;

  // Check whether this user already has a commit record.
  const admin = getSupabaseAdmin();
  let existingCommitId: string | undefined;

  if (admin) {
    const { data: row } = await admin
      .from("commits")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();
    existingCommitId = row?.id;
  }

  if (!existingCommitId) {
    // Determine country/city from query string (if /commit carried them) or fall back to onboarding.
    if (!city || !country || !getCountry(country)) {
      // Redirect to a lightweight onboarding page to collect the two missing fields.
      const store = await cookies();
      store.set("turnout_pending_email", email, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60, // 1 hour
      });
      return NextResponse.redirect(new URL(`/welcome`, request.url));
    }

    // Insert the commit row.
    const newId = randomUUID();
    const name = deriveName(email);

    if (admin) {
      await admin.from("commits").insert({
        id: newId,
        user_id: userId,
        name,
        email,
        city,
        residence_country: "",
        country,
        progress: { registered: false, planned: false, voted: false },
      });
    } else {
      // Fallback: write to JSON store
      await addCommit({ name, email, city, residenceCountry: "", country });
    }

    existingCommitId = newId;
  }

  // Mirror the auth session to our own simple `turnout_uid` cookie so personalized
  // pages work without changing every call site.
  if (existingCommitId) {
    const store = await cookies();
    store.set("turnout_uid", existingCommitId, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }

  return NextResponse.redirect(new URL(next, request.url));
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

// Silence "unused" lint while keeping the fallback helper available for the JSON path.
void getCommit;
