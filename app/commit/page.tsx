import Link from "next/link";
import { cookies } from "next/headers";
import { COUNTRIES, getCountry } from "@/lib/countries";
import { PERMANENT_COMMITMENT_COPY, fifthOf } from "@/lib/diaspora";
import { getCommit, readCommits } from "@/lib/store";
import { formatDate } from "@/lib/timeline";
import { submitCommit } from "./actions";

type SearchParams = Promise<{
  error?: string;
  code?: string; // country code deep-linked from an election page
  election?: string; // election date ISO when pledging from /elections/[code]/topics
}>;

export default async function CommitPage({ searchParams }: { searchParams: SearchParams }) {
  const { error, code, election } = await searchParams;

  // ── Already committed? Short-circuit — no form. ───────────────────────
  const store = await cookies();
  const uid = store.get("turnout_uid")?.value;
  const existing = uid ? await getCommit(uid) : undefined;

  if (existing) {
    const userCountry = getCountry(existing.country);
    const pledgeCountry = code ? getCountry(code.toUpperCase()) : undefined;
    const allCommits = await readCommits();
    const sameCountryCount = allCommits.filter((c) => c.country === existing.country).length;

    // Contextual: came from a specific country's election page
    const deepLinked = Boolean(pledgeCountry);
    const samePledge = pledgeCountry?.code === existing.country;

    return (
      <div className="mx-auto max-w-xl px-6 py-20">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg text-white">
              ✓
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-emerald-700">You&apos;re in.</p>
              <h1 className="mt-1 text-2xl font-semibold text-emerald-900">
                {deepLinked && samePledge
                  ? `Your vote is counted, ${existing.name.split(" ")[0]}.`
                  : deepLinked && !samePledge
                    ? `${existing.name.split(" ")[0]}, you&apos;re already committed.`
                    : `Welcome back, ${existing.name.split(" ")[0]}.`}
              </h1>
              {userCountry && (
                <p className="mt-2 text-sm text-emerald-900">
                  Part of <span className="font-medium">{fifthOf(userCountry)}</span> —{" "}
                  <span className="font-medium">{sameCountryCount.toLocaleString()}</span>{" "}
                  committed voter{sameCountryCount === 1 ? "" : "s"} so far.
                </p>
              )}
            </div>
          </div>

          {deepLinked && pledgeCountry && samePledge && (
            <div className="mt-5 rounded-md border border-emerald-200 bg-white p-4 text-sm">
              <p className="text-zinc-700">
                Pledged to{" "}
                <span className="font-semibold text-zinc-900">
                  {pledgeCountry.flag} {pledgeCountry.name}
                </span>
                {election ? (
                  <>
                    {" "}·{" "}
                    <span className="font-medium text-indigo-700">
                      {formatDate(election)}
                    </span>
                  </>
                ) : null}
                .
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                No need to re-register — one commitment covers every election for your country.
                We&apos;ll remind you before each one.
              </p>
            </div>
          )}

          {deepLinked && pledgeCountry && !samePledge && userCountry && (
            <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              You&apos;re currently committed as <span className="font-medium">{userCountry.flag} {userCountry.name}</span>{" "}
              diaspora. Turnout tracks one country per person — one identity, one vote — so we can&apos;t
              add <span className="font-medium">{pledgeCountry.flag} {pledgeCountry.name}</span>{" "}
              pledges to this account.
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dashboard"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700"
          >
            See my plan →
          </Link>
          <Link
            href="/elections"
            className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-zinc-800 hover:bg-zinc-50"
          >
            Explore elections →
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Want to sign out?{" "}
          <Link href="/actions/signout" className="text-zinc-700 hover:underline">
            (Clear persona via the switcher in the top nav.)
          </Link>
        </p>
      </div>
    );
  }

  // ── Not committed — show the minimal 3-field form ─────────────────────

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Commit to vote</h1>
      <p className="mt-2 text-zinc-600">
        Three fields. That&apos;s it. We&apos;ll send you deadline reminders for your country —
        nothing else.
      </p>

      <div className="mt-4 rounded-md bg-indigo-50 border border-indigo-100 p-3 text-xs text-indigo-900">
        <span className="font-semibold">{PERMANENT_COMMITMENT_COPY.headline}.</span>{" "}
        {PERMANENT_COMMITMENT_COPY.body}
      </div>

      {error && (
        <div className="mt-6 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {error === "missing" && "Please fill in all required fields."}
          {error === "country" && "Please choose a valid country."}
          {error === "auth" && "Couldn&apos;t send the magic link — please try again."}
          {error === "not-configured" && "Supabase is not configured on this deployment."}
        </div>
      )}

      <form action={submitCommit} className="mt-8 space-y-5">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />

        <Field
          label="City you live in"
          name="city"
          type="text"
          placeholder="Berlin, Paris, London…"
          required
          autoComplete="address-level2"
        />

        <div>
          <label className="block text-sm font-medium text-zinc-800">
            Your country of origin <span className="text-rose-600">*</span>
          </label>
          <p className="mt-0.5 text-xs text-zinc-500">
            Where you&apos;re registered to vote — we tailor the guide and reminders to this.
          </p>
          <select
            name="country"
            required
            defaultValue={code?.toUpperCase() ?? ""}
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
          Commit to vote →
        </button>

        <p className="text-center text-xs text-zinc-500">
          Non-partisan · Privacy-first · We never share your email.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-800">
        {label}
        {required && <span className="ml-1 text-rose-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}
