"use client";

import { useState, useMemo } from "react";
import type { RichCalendarEvent } from "@/lib/elections-store";

type CommitCounts = Record<string, number>;

type Props = {
  events: RichCalendarEvent[];
  commitCounts: CommitCounts;
};

type FilterMode = "all" | "upcoming" | "featured";

function DaysChip({ days }: { days: number }) {
  if (days === 0) {
    return (
      <span className="ml-1.5 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
        today
      </span>
    );
  }
  if (days > 0) {
    return (
      <span className="ml-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
        +{days}d
      </span>
    );
  }
  return (
    <span className="ml-1.5 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500">
      {days}d
    </span>
  );
}

function KindBadge({ kind }: { kind: string | undefined }) {
  if (!kind) return <span className="text-zinc-400">—</span>;
  const colours: Record<string, string> = {
    general: "bg-indigo-50 text-indigo-700 border-indigo-200",
    regional: "bg-violet-50 text-violet-700 border-violet-200",
    local: "bg-sky-50 text-sky-700 border-sky-200",
    referendum: "bg-rose-50 text-rose-700 border-rose-200",
    presidential: "bg-amber-50 text-amber-700 border-amber-200",
    eu: "bg-blue-50 text-blue-700 border-blue-200",
  };
  const cls = colours[kind.toLowerCase()] ?? "bg-zinc-50 text-zinc-600 border-zinc-200";
  return (
    <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cls}`}>
      {kind}
    </span>
  );
}

export function EventsTable({ events, commitCounts }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterMode>("upcoming");

  const filtered = useMemo(() => {
    let result = events;

    if (filter === "upcoming") result = result.filter((e) => e.days >= 0);
    if (filter === "featured") result = result.filter((e) => e.featured);

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (e) =>
          e.countryName.toLowerCase().includes(q) ||
          e.code.toLowerCase().includes(q) ||
          e.label.toLowerCase().includes(q),
      );
    }

    return result;
  }, [events, filter, query]);

  const upcomingCount = events.filter((e) => e.days >= 0).length;
  const pastCount = events.filter((e) => e.days < 0).length;
  const featuredCount = events.filter((e) => e.featured).length;

  const FILTERS: { id: FilterMode; label: string }[] = [
    { id: "upcoming", label: "Upcoming only" },
    { id: "featured", label: "Featured only" },
    { id: "all", label: "All" },
  ];

  return (
    <div>
      {/* Search + filter row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="search"
          placeholder="Search country or event…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
        />
        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filter === f.id
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-zinc-200">
        <table className="min-w-full divide-y divide-zinc-200 text-sm">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                Country
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                Event
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                Kind
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-zinc-500">
                ★
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                Source
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-zinc-500">
                Commits
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-zinc-400">
                  No events match the current filter.
                </td>
              </tr>
            ) : (
              filtered.map((ev, idx) => (
                <tr
                  key={`${ev.code}-${ev.date}-${idx}`}
                  className={ev.days < 0 ? "opacity-60" : ""}
                >
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">
                    <span className="mr-1.5">{ev.flag}</span>
                    {ev.countryName}
                    <span className="ml-1.5 text-xs text-zinc-400">{ev.code}</span>
                  </td>
                  <td className="px-4 py-3 text-zinc-700 max-w-xs">
                    <span className="line-clamp-2">{ev.label}</span>
                    {ev.notes && (
                      <p className="mt-0.5 text-xs text-zinc-400 line-clamp-1">{ev.notes}</p>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-zinc-700">
                    {ev.date}
                    <DaysChip days={ev.days} />
                  </td>
                  <td className="px-4 py-3">
                    <KindBadge kind={ev.kind} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {ev.featured ? (
                      <span title="Featured" className="text-amber-400 text-base">
                        ★
                      </span>
                    ) : (
                      <span className="text-zinc-200">☆</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {ev.source ? (
                      <a
                        href={ev.source}
                        target="_blank" rel="noopener noreferrer"
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        link ↗
                      </a>
                    ) : (
                      <span className="text-zinc-300 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-xs text-zinc-600">
                    {commitCounts[ev.code] ?? 0}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer count */}
      <p className="mt-3 text-xs text-zinc-500">
        {upcomingCount} upcoming · {pastCount} past · {featuredCount} featured
        {filtered.length !== events.length && (
          <span className="ml-2 text-indigo-600">({filtered.length} shown)</span>
        )}
      </p>
    </div>
  );
}
