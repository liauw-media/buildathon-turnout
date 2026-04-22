import { COUNTRIES } from "@/lib/countries";
import { PERMANENT_COMMITMENT_COPY } from "@/lib/diaspora";
import { submitCommit } from "./actions";

type SearchParams = Promise<{ error?: string }>;

export default async function CommitPage({ searchParams }: { searchParams: SearchParams }) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Commit to vote</h1>
      <p className="mt-2 text-zinc-600">
        30 seconds now means you won&apos;t miss a deadline later. We&apos;ll only use this info to
        send you relevant reminders — nothing else.
      </p>

      {/* Permanent commitment reassurance */}
      <div className="mt-4 rounded-md bg-indigo-50 border border-indigo-100 p-3 text-xs text-indigo-900">
        <span className="font-semibold">{PERMANENT_COMMITMENT_COPY.headline}.</span>{" "}
        {PERMANENT_COMMITMENT_COPY.body}
      </div>

      {error && (
        <div className="mt-6 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {error === "missing" && "Please fill in all required fields."}
          {error === "country" && "Please choose a valid country of origin."}
        </div>
      )}

      <form action={submitCommit} className="mt-8 space-y-5">
        <Field label="Full name" name="name" type="text" placeholder="Maria Popescu" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <div className="grid grid-cols-2 gap-4">
          <Field label="City you live in" name="city" type="text" placeholder="Berlin" required />
          <Field
            label="Country of residence"
            name="residenceCountry"
            type="text"
            placeholder="Germany"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-800">
            Country of origin (where you vote)
            <span className="ml-1 text-rose-600">*</span>
          </label>
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

        <label className="flex items-start gap-2 text-sm text-zinc-600">
          <input type="checkbox" required className="mt-0.5" />
          <span>
            I understand Turnout is non-partisan and will only send me information about my own
            country&apos;s voting process.
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Count me in
        </button>
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
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
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
        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}
