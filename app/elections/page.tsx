import Link from "next/link";
import { getAllEffectiveCountries } from "@/lib/elections-store";
import { readTopics } from "@/lib/topics-store";
import { readCommits } from "@/lib/store";
import { daysUntil } from "@/lib/timeline";
import ElectionsExplorer, { type ElectionRow } from "./ElectionsExplorer";

export const dynamic = "force-dynamic";

export default async function ElectionsIndexPage() {
  const [countries, topics, commits] = await Promise.all([
    getAllEffectiveCountries(),
    readTopics(),
    readCommits(),
  ]);

  const topicsByCountry = new Map<string, number>();
  for (const t of topics) {
    topicsByCountry.set(t.country, (topicsByCountry.get(t.country) ?? 0) + 1);
  }

  const commitsByCountry = new Map<string, number>();
  for (const c of commits) {
    commitsByCountry.set(c.country, (commitsByCountry.get(c.country) ?? 0) + 1);
  }

  // Flatten every country's nextElection + additionalVotes into individual rows.
  const rows: ElectionRow[] = [];
  for (const c of countries) {
    const elections = [
      { label: c.nextElection.label, date: c.nextElection.date },
      ...(c.additionalVotes ?? []),
    ];
    for (const e of elections) {
      const days = daysUntil(e.date);
      rows.push({
        code: c.code,
        name: c.name,
        flag: c.flag,
        electionLabel: e.label,
        electionDate: e.date,
        registrationDeadline: c.registrationDeadline,
        days,
        regDays: daysUntil(c.registrationDeadline),
        topicCount: topicsByCountry.get(c.code) ?? 0,
        commitCount: commitsByCountry.get(c.code) ?? 0,
        region: c.region,
        votingAccessibility: c.votingAccessibility,
      });
    }
  }
  rows.sort((a, b) => a.days - b.days);

  const upcoming = rows.filter((r) => r.days >= 0);
  const next30 = upcoming.filter((r) => r.days <= 30).length;
  const next90 = upcoming.filter((r) => r.days <= 90).length;

  return (
    <div className="mx-auto max-w-full px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Election calendar</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            Upcoming elections & votes
          </h1>
          <p className="mt-1 text-zinc-600">
            Every election Turnout covers — including local, referendums, and authoritarian-regime
            votes — sorted by how soon they happen. Click a country to browse the issues at stake
            and commit.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Stat label="Next 30 days" value={next30} tone="urgent" />
          <Stat label="Next 90 days" value={next90} tone="warn" />
          <Stat label="Countries" value={countries.length} tone="info" />
        </div>
      </div>

      <ElectionsExplorer rows={rows} />

      <section className="mt-12 rounded-lg border border-zinc-200 bg-indigo-50/60 p-5 text-sm text-zinc-700">
        <p className="font-medium text-zinc-900">Don&apos;t see your country?</p>
        <p className="mt-1">
          Turnout covers {countries.length} countries today and is expanding. Commit anyway to
          register interest — we&apos;ll add coverage as we verify procedural information for your
          country.
        </p>
        <Link
          href="/commit"
          className="mt-3 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Commit to vote →
        </Link>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "urgent" | "warn" | "info";
}) {
  const toneClass =
    tone === "urgent"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : tone === "warn"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-indigo-200 bg-indigo-50 text-indigo-700";
  return (
    <div className={`rounded-lg border px-3 py-2 text-center ${toneClass}`}>
      <p className="text-lg font-semibold leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wide opacity-80">{label}</p>
    </div>
  );
}
