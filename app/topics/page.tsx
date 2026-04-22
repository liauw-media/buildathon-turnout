import Link from "next/link";
import { readTopics } from "@/lib/topics-store";
import { COUNTRIES } from "@/lib/countries";
import TopicsExplorer from "./TopicsExplorer";

export const dynamic = "force-dynamic";

export default async function TopicsIndexPage() {
  const topics = await readTopics();

  const countriesLite = COUNTRIES.map((c) => ({
    code: c.code,
    name: c.name,
    flag: c.flag,
  }));

  // Distinct keyword count for the hero stat
  const kwSet = new Set<string>();
  for (const t of topics) {
    for (const k of t.keywords) kwSet.add(k.trim().toLowerCase());
  }

  return (
    <div className="mx-auto max-w-full px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Topic library</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">What&apos;s at stake</h1>
          <p className="mt-1 text-zinc-600">
            Non-partisan, procedural summaries of the political questions on each country&apos;s
            ballot. Search by keyword, filter by country, tap a tag to focus.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Stat label="Topics" value={topics.length} />
          <Stat label="Countries" value={countriesLite.length} />
          <Stat label="Keywords" value={kwSet.size} />
        </div>
      </div>

      <TopicsExplorer topics={topics} countries={countriesLite} />

      <div className="mt-12 flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
        <p>
          Topics are non-partisan and editable by operators at{" "}
          <Link href="/admin?tab=topics" className="font-medium text-indigo-600 hover:underline">
            /admin
          </Link>
          . They never endorse candidates or parties.
        </p>
        <Link
          href="/elections"
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs hover:bg-zinc-50"
        >
          See upcoming elections →
        </Link>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-center">
      <p className="text-lg font-semibold leading-none text-zinc-900">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500">{label}</p>
    </div>
  );
}
