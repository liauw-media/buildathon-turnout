import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";
import { COUNTRIES } from "@/lib/countries";
import { submitWelcome } from "./actions";

type SearchParams = Promise<{ error?: string }>;

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error } = await searchParams;

  // Require an authenticated Supabase session to reach this page.
  const supabase = await getSupabaseServer();
  const session = supabase ? (await supabase.auth.getUser()).data.user : null;

  if (!supabase || !session) {
    // If Supabase isn't configured or no session, fall back to /commit.
    redirect("/commit");
  }

  const store = await cookies();
  const pendingEmail = store.get("turnout_pending_email")?.value ?? session.email ?? "";

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-zinc-500">One more step</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        Welcome, {pendingEmail.split("@")[0] || "friend"}.
      </h1>
      <p className="mt-2 text-zinc-600">
        Two quick questions and your plan is ready.
      </p>

      {error && (
        <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {error === "missing" && "Please fill in both fields."}
          {error === "country" && "Please pick a valid country."}
        </div>
      )}

      <form action={submitWelcome} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-800">
            City you live in <span className="text-rose-600">*</span>
          </label>
          <input
            name="city"
            required
            placeholder="Berlin, Paris, London…"
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-800">
            Your country of origin <span className="text-rose-600">*</span>
          </label>
          <p className="mt-0.5 text-xs text-zinc-500">Where you&apos;re registered to vote.</p>
          <select
            name="country"
            required
            defaultValue=""
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          >
            <option value="" disabled>
              Select your country…
            </option>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          See my plan →
        </button>
      </form>
    </div>
  );
}
