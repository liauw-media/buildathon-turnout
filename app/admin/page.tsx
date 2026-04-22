import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { readTopics } from "@/lib/topics-store";
import { readOverrides } from "@/lib/elections-store";
import { readCommits } from "@/lib/store";
import { ElectionsForm } from "./ElectionsForm";
import { TopicsTable } from "./TopicsTable";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ tab?: string; error?: string; success?: string }>;

const TABS = [
  { id: "elections", label: "Elections" },
  { id: "topics", label: "Topics" },
  { id: "countries", label: "Countries" },
];

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const { tab = "elections", error, success } = await searchParams;

  const [topics, overrides, commits] = await Promise.all([
    readTopics(),
    readOverrides(),
    readCommits(),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Admin</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Turnout Admin</h1>
          <p className="mt-1 text-zinc-600 text-sm">
            Manage elections, topics, and country data. URL-protected — not publicly linked.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-zinc-200">
        <nav className="-mb-px flex gap-6">
          {TABS.map((t) => (
            <Link
              key={t.id}
              href={`/admin?tab=${t.id}`}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t.id
                  ? "border-indigo-600 text-indigo-700"
                  : "border-transparent text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Alerts */}
      <div className="mt-6">
        {error && (
          <div className="mb-4 rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error === "missing_fields" && "Please fill in all required fields."}
            {error === "invalid_country" && "Please select a valid country."}
            {error === "missing_id" && "Topic ID is missing."}
            {!["missing_fields", "invalid_country", "missing_id"].includes(error) && error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {success === "saved" && "Election data saved successfully."}
            {success === "created" && "Topic created successfully."}
            {success === "updated" && "Topic updated successfully."}
            {success === "deleted" && "Topic deleted."}
            {!["saved", "created", "updated", "deleted"].includes(success) && "Saved."}
          </div>
        )}
      </div>

      {/* Tab: Elections */}
      {tab === "elections" && (
        <div className="mt-6 max-w-xl">
          <h2 className="text-lg font-semibold text-zinc-900">Election overrides</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Override the static election data per country. Blank fields fall back to the built-in
            defaults.
          </p>
          <div className="mt-6">
            <ElectionsForm countries={COUNTRIES} overrides={overrides} />
          </div>

          {overrides.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-zinc-800">Active overrides</h3>
              <ul className="mt-3 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
                {overrides.map((o) => {
                  const country = COUNTRIES.find((c) => c.code === o.country);
                  return (
                    <li key={o.country} className="flex items-center justify-between px-4 py-3 text-sm">
                      <span className="font-medium">
                        {country?.flag ?? ""} {country?.name ?? o.country}
                      </span>
                      <span className="text-zinc-500 text-xs">
                        {o.nextElectionDate ?? "—"} · deadline {o.registrationDeadline ?? "—"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Tab: Topics */}
      {tab === "topics" && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Topics</h2>
              <p className="mt-1 text-sm text-zinc-600">
                {topics.length} topic{topics.length !== 1 ? "s" : ""} across all countries.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <TopicsTable topics={topics} countries={COUNTRIES} />
          </div>
        </div>
      )}

      {/* Tab: Countries */}
      {tab === "countries" && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-zinc-900">Countries</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Read-only overview of supported countries with live stats.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {COUNTRIES.map((country) => {
              const override = overrides.find((o) => o.country === country.code);
              const topicCount = topics.filter((t) => t.country === country.code).length;
              const commitCount = commits.filter((c) => c.country === country.code).length;
              const electionDate = override?.nextElectionDate ?? country.nextElection.date;
              const electionLabel = override?.nextElectionLabel ?? country.nextElection.label;

              return (
                <div key={country.code} className="rounded-lg border border-zinc-200 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <p className="font-semibold text-zinc-900">{country.name}</p>
                        <p className="text-xs text-zinc-500">{country.code}</p>
                      </div>
                    </div>
                    {override && (
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                        overridden
                      </span>
                    )}
                  </div>

                  <dl className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md bg-zinc-50 p-3">
                      <dt className="text-xs text-zinc-500">Topics</dt>
                      <dd className="mt-0.5 text-xl font-semibold text-zinc-900">{topicCount}</dd>
                    </div>
                    <div className="rounded-md bg-zinc-50 p-3">
                      <dt className="text-xs text-zinc-500">Committed voters</dt>
                      <dd className="mt-0.5 text-xl font-semibold text-zinc-900">{commitCount}</dd>
                    </div>
                  </dl>

                  <div className="mt-3 text-xs text-zinc-600">
                    <p>
                      <span className="font-medium">Next election:</span> {electionLabel}
                    </p>
                    <p className="mt-0.5 font-mono text-zinc-500">{electionDate}</p>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/elections/${country.code}/topics`}
                      className="text-xs text-indigo-600 hover:underline"
                    >
                      View topics →
                    </Link>
                    <span className="text-zinc-300">·</span>
                    <Link
                      href={`/admin?tab=topics`}
                      className="text-xs text-zinc-500 hover:text-zinc-700"
                    >
                      Manage topics
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
