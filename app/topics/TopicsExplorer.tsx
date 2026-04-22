"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Topic } from "@/lib/topics";

export type CountryLite = {
  code: string;
  name: string;
  flag: string;
};

export default function TopicsExplorer({
  topics,
  countries,
}: {
  topics: Topic[];
  countries: CountryLite[];
}) {
  const [query, setQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const countryByCode = useMemo(() => {
    const m = new Map<string, CountryLite>();
    for (const c of countries) m.set(c.code, c);
    return m;
  }, [countries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter((t) => {
      if (countryFilter !== "all" && t.country !== countryFilter) return false;
      if (activeKeyword) {
        const hasKw = t.keywords.some(
          (k) => k.toLowerCase() === activeKeyword.toLowerCase(),
        );
        if (!hasKw) return false;
      }
      if (q) {
        const hay = `${t.title} ${t.summary} ${t.keywords.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [topics, query, countryFilter, activeKeyword]);

  // Top keywords from the currently filtered set (not the whole corpus) — reactive
  const topKeywords = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of filtered) {
      for (const k of t.keywords) {
        const key = k.trim();
        if (!key) continue;
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
  }, [filtered]);

  // Country options sorted by name, with a count next to each
  const countryOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of topics) {
      counts.set(t.country, (counts.get(t.country) ?? 0) + 1);
    }
    return countries
      .map((c) => ({ ...c, count: counts.get(c.code) ?? 0 }))
      .filter((c) => c.count > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [countries, topics]);

  return (
    <>
      <section className="mt-8 space-y-3">
        <div className="relative">
          <input
            type="search"
            placeholder="Search topics by title, summary, or keyword…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 text-xs text-zinc-400 hover:text-zinc-700"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="text-[10px] uppercase tracking-wide text-zinc-400">Country:</label>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs focus:border-indigo-500 focus:outline-none"
          >
            <option value="all">All countries ({topics.length})</option>
            {countryOptions.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name} ({c.count})
              </option>
            ))}
          </select>

          {activeKeyword && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
              #{activeKeyword}
              <button
                type="button"
                onClick={() => setActiveKeyword(null)}
                className="text-indigo-500 hover:text-indigo-900"
                aria-label="Remove keyword filter"
              >
                ×
              </button>
            </span>
          )}
        </div>

        {topKeywords.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-wide text-zinc-400 mr-1">
              Popular tags:
            </span>
            {topKeywords.map(([kw, count]) => {
              const active = activeKeyword?.toLowerCase() === kw.toLowerCase();
              return (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setActiveKeyword(active ? null : kw)}
                  className={`rounded-full border px-2 py-0.5 text-[11px] transition ${
                    active
                      ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                  }`}
                >
                  {kw} <span className="text-zinc-400">· {count}</span>
                </button>
              );
            })}
          </div>
        )}

        <p className="text-xs text-zinc-500">
          Showing {filtered.length} of {topics.length} topics
          {(query || countryFilter !== "all" || activeKeyword) && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCountryFilter("all");
                setActiveKeyword(null);
              }}
              className="ml-2 text-indigo-600 hover:underline"
            >
              reset
            </button>
          )}
        </p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500">
            No topics match your filters.
          </div>
        )}
        {filtered.map((t) => {
          const country = countryByCode.get(t.country);
          return (
            <article
              key={t.id}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-300"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{country?.flag ?? "🏳️"}</span>
                <Link
                  href={`/elections/${t.country}/topics`}
                  className="font-medium text-zinc-700 hover:text-indigo-700"
                >
                  {country?.name ?? t.country}
                </Link>
                {typeof t.supporterCount === "number" && (
                  <span className="ml-auto text-[10px] font-medium text-indigo-700">
                    👥 {t.supporterCount.toLocaleString()}
                  </span>
                )}
              </div>
              <Link href={`/topics/${t.id}`} className="group mt-2">
                <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-indigo-700">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{t.summary}</p>
                <p className="mt-2 text-xs font-medium text-indigo-600 group-hover:underline">
                  Read more →
                </p>
              </Link>
              <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                {t.keywords.map((kw) => {
                  const active = activeKeyword?.toLowerCase() === kw.toLowerCase();
                  return (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => setActiveKeyword(active ? null : kw)}
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {kw}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
