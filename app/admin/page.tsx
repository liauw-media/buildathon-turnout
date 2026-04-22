import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { readTopics } from "@/lib/topics-store";
import { readOverrides, getAllCalendarEvents } from "@/lib/elections-store";
import { readCommits } from "@/lib/store";
import { getReminderSettings } from "@/lib/reminder-settings-store";
import { ElectionsForm } from "./ElectionsForm";
import { TopicsTable } from "./TopicsTable";
import { EventsTable } from "./EventsTable";
import { RemindersForm } from "./RemindersForm";
import type { VotingAccessibility, CountryRegion } from "@/lib/types";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ tab?: string; error?: string; success?: string }>;

const TABS = [
  { id: "elections", label: "Elections" },
  { id: "topics", label: "Topics" },
  { id: "countries", label: "Countries" },
  { id: "events", label: "Events" },
  { id: "reminders", label: "Reminders" },
  { id: "stats", label: "Stats" },
];

// ── Stats helpers ──────────────────────────────────────────────────────────────

function miniBar(value: number, max: number, colour: string): string {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return `${pct}%`;
}

export default async function AdminPage({ searchParams }: { searchParams: SearchParams }) {
  const { tab = "elections", error, success } = await searchParams;

  const [topics, overrides, commits, calendarEvents, reminderSettings] = await Promise.all([
    readTopics(),
    readOverrides(),
    readCommits(),
    getAllCalendarEvents(),
    getReminderSettings(),
  ]);

  // Pre-compute commit counts per country for Events tab
  const commitCounts: Record<string, number> = {};
  for (const c of commits) {
    commitCounts[c.country] = (commitCounts[c.country] ?? 0) + 1;
  }

  // Stats pre-computation
  const today = new Date().toISOString().slice(0, 10);
  const in30 = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);
  const in90 = new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10);
  const in365 = new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10);

  const upcomingEvents = calendarEvents.filter((e) => e.date >= today);
  const events30 = calendarEvents.filter((e) => e.date >= today && e.date <= in30).length;
  const events90 = calendarEvents.filter((e) => e.date >= today && e.date <= in90).length;
  const events365 = calendarEvents.filter((e) => e.date >= today && e.date <= in365).length;
  const featuredEvents = calendarEvents.filter((e) => e.featured);

  // By region
  const regionCounts: Record<CountryRegion, number> = { eu: 0, europe: 0, authoritarian: 0 };
  for (const e of calendarEvents) {
    const country = COUNTRIES.find((c) => c.code === e.code);
    if (country) regionCounts[country.region] = (regionCounts[country.region] ?? 0) + 1;
  }
  const maxRegion = Math.max(...Object.values(regionCounts));

  // By tier (country count)
  const tierCounts: Record<VotingAccessibility, number> = {
    evoting: 0,
    postal: 0,
    consulate: 0,
    travel: 0,
    none: 0,
  };
  for (const c of COUNTRIES) {
    tierCounts[c.votingAccessibility] = (tierCounts[c.votingAccessibility] ?? 0) + 1;
  }
  const maxTier = Math.max(...Object.values(tierCounts));

  // Top 5 by commit count
  const sortedByCommits = [...COUNTRIES]
    .map((c) => ({ ...c, commits: commitCounts[c.code] ?? 0 }))
    .sort((a, b) => b.commits - a.commits)
    .slice(0, 5);

  // Preview country for Reminders tab (Malta — first in COUNTRIES list)
  const previewCountry = COUNTRIES[0];
  const previewOverride = overrides.find((o) => o.country === previewCountry.code);
  const previewDeadline =
    previewOverride?.registrationDeadline ?? previewCountry.registrationDeadline ?? null;
  const previewElectionDate =
    previewOverride?.nextElectionDate ?? previewCountry.nextElection.date ?? null;

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
        <nav className="-mb-px flex flex-wrap gap-x-6 gap-y-0">
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

      {/* Tab: Events */}
      {tab === "events" && (
        <div className="mt-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-zinc-900">All calendar events</h2>
            <p className="mt-1 text-sm text-zinc-600">
              {calendarEvents.length} events across {Object.keys(COUNTRIES).length} countries from{" "}
              <code className="text-xs bg-zinc-100 px-1 rounded">elections-calendar.json</code>.
            </p>
          </div>
          <EventsTable events={calendarEvents} commitCounts={commitCounts} />
        </div>
      )}

      {/* Tab: Reminders */}
      {tab === "reminders" && (
        <div className="mt-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-zinc-900">Reminder settings</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Configure when email and SMS reminders fire relative to registration deadlines and
            election day. Applies globally to all countries (per-country overrides can be added
            later). Changes persist to Supabase when configured; otherwise they apply for the
            current server session only.
          </p>
          <div className="mt-6">
            <RemindersForm
              settings={reminderSettings}
              previewCountry={previewCountry.name}
              previewFlag={previewCountry.flag}
              previewDeadline={previewDeadline}
              previewElectionDate={previewElectionDate}
            />
          </div>
        </div>
      )}

      {/* Tab: Stats */}
      {tab === "stats" && (
        <div className="mt-6 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Prototype stats</h2>
            <p className="mt-1 text-sm text-zinc-600">Live overview of all data in the system.</p>
          </div>

          {/* Totals */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "Countries", value: COUNTRIES.length },
              { label: "Topics", value: topics.length },
              { label: "Events", value: calendarEvents.length },
              { label: "Commits", value: commits.length },
              { label: "Featured events", value: featuredEvents.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-zinc-200 bg-white p-5 text-center"
              >
                <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Time windows */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">Upcoming events</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Next 30 days", value: events30 },
                { label: "Next 90 days", value: events90 },
                { label: "Next 365 days", value: events365 },
              ].map((w) => (
                <div key={w.label} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-2xl font-bold text-indigo-600">{w.value}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{w.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* By region */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">Events by region</h3>
            <div className="space-y-2">
              {(["eu", "europe", "authoritarian"] as CountryRegion[]).map((r) => {
                const count = regionCounts[r] ?? 0;
                const pct = miniBar(count, maxRegion, "");
                return (
                  <div key={r} className="flex items-center gap-3">
                    <span className="w-28 text-xs font-medium text-zinc-600 capitalize">{r}</span>
                    <div className="flex-1 rounded-full bg-zinc-100 h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-indigo-500"
                        style={{ width: pct }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs text-zinc-500">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* By tier */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">Countries by voting tier</h3>
            <div className="space-y-2">
              {(["evoting", "postal", "consulate", "travel", "none"] as VotingAccessibility[]).map(
                (tier) => {
                  const count = tierCounts[tier] ?? 0;
                  const pct = miniBar(count, maxTier, "");
                  return (
                    <div key={tier} className="flex items-center gap-3">
                      <span className="w-28 text-xs font-medium text-zinc-600 capitalize">
                        {tier}
                      </span>
                      <div className="flex-1 rounded-full bg-zinc-100 h-3 overflow-hidden">
                        <div
                          className="h-3 rounded-full bg-violet-500"
                          style={{ width: pct }}
                        />
                      </div>
                      <span className="w-8 text-right text-xs text-zinc-500">{count}</span>
                    </div>
                  );
                },
              )}
            </div>
          </div>

          {/* Top 5 by commits */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">Top 5 countries by commits</h3>
            <ul className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white">
              {sortedByCommits.map((c, i) => (
                <li key={c.code} className="flex items-center gap-3 px-4 py-3">
                  <span className="w-5 text-xs text-zinc-400 font-mono">{i + 1}.</span>
                  <span className="text-lg">{c.flag}</span>
                  <span className="flex-1 text-sm font-medium text-zinc-800">{c.name}</span>
                  <span className="text-sm font-semibold text-zinc-900">{c.commits}</span>
                  <span className="text-xs text-zinc-400">commits</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured upcoming events */}
          {upcomingEvents.filter((e) => e.featured).length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 mb-3">
                Featured upcoming events
              </h3>
              <ul className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white">
                {upcomingEvents
                  .filter((e) => e.featured)
                  .slice(0, 10)
                  .map((e, idx) => (
                    <li key={`${e.code}-${e.date}-${idx}`} className="flex items-center gap-3 px-4 py-3">
                      <span className="text-amber-400">★</span>
                      <span className="text-base">{e.flag}</span>
                      <span className="flex-1 text-sm text-zinc-800">{e.label}</span>
                      <span className="text-xs font-mono text-zinc-500">{e.date}</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
