"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatDate } from "@/lib/timeline";
import type { CountryRegion, VotingAccessibility } from "@/lib/types";

export type ElectionRow = {
  code: string;
  name: string;
  flag: string;
  electionLabel: string;
  electionDate: string;
  registrationDeadline: string;
  days: number;
  regDays: number;
  topicCount: number;
  commitCount: number;
  region: CountryRegion;
  votingAccessibility: VotingAccessibility;
};

type TimeFilter = "all" | "30" | "90" | "365" | "past";
type RegionFilter = "all" | CountryRegion;
type TierFilter = "all" | VotingAccessibility;

const TIER_META: Record<VotingAccessibility, { emoji: string; label: string; color: string }> = {
  evoting: { emoji: "🟢", label: "E-voting", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  postal: { emoji: "🟡", label: "Postal ballot", color: "bg-amber-100 text-amber-800 border-amber-200" },
  consulate: { emoji: "🟠", label: "Consulate only", color: "bg-orange-100 text-orange-800 border-orange-200" },
  travel: { emoji: "🔴", label: "Must travel home", color: "bg-rose-100 text-rose-800 border-rose-200" },
  none: { emoji: "⚫", label: "No free vote", color: "bg-zinc-200 text-zinc-800 border-zinc-300" },
};

const REGION_META: Record<CountryRegion, { label: string; color: string }> = {
  eu: { label: "EU", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  europe: { label: "Europe (non-EU)", color: "bg-sky-100 text-sky-800 border-sky-200" },
  authoritarian: { label: "Authoritarian", color: "bg-zinc-200 text-zinc-800 border-zinc-300" },
};

export default function ElectionsExplorer({ rows }: { rows: ElectionRow[] }) {
  const [query, setQuery] = useState("");
  const [time, setTime] = useState<TimeFilter>("all");
  const [region, setRegion] = useState<RegionFilter>("all");
  const [tier, setTier] = useState<TierFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (q) {
        const hay = `${r.name} ${r.code} ${r.electionLabel}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (region !== "all" && r.region !== region) return false;
      if (tier !== "all" && r.votingAccessibility !== tier) return false;
      if (time === "past" && r.days >= 0) return false;
      if (time === "30" && (r.days < 0 || r.days > 30)) return false;
      if (time === "90" && (r.days < 0 || r.days > 90)) return false;
      if (time === "365" && (r.days < 0 || r.days > 365)) return false;
      return true;
    });
  }, [rows, query, time, region, tier]);

  const shownUpcoming = filtered.filter((r) => r.days >= 0);
  const shownPast = filtered.filter((r) => r.days < 0);

  const timeOptions: Array<{ value: TimeFilter; label: string }> = [
    { value: "all", label: "All upcoming" },
    { value: "30", label: "Next 30 days" },
    { value: "90", label: "Next 90 days" },
    { value: "365", label: "Next year" },
    { value: "past", label: "Past" },
  ];

  const regionOptions: Array<{ value: RegionFilter; label: string }> = [
    { value: "all", label: "All regions" },
    { value: "eu", label: "EU" },
    { value: "europe", label: "Europe (non-EU)" },
    { value: "authoritarian", label: "Authoritarian" },
  ];

  const tierOptions: Array<{ value: TierFilter; label: string }> = [
    { value: "all", label: "Any access" },
    { value: "evoting", label: "🟢 E-voting" },
    { value: "postal", label: "🟡 Postal" },
    { value: "consulate", label: "🟠 Consulate" },
    { value: "travel", label: "🔴 Travel home" },
    { value: "none", label: "⚫ No free vote" },
  ];

  return (
    <>
      <section className="mt-8 space-y-3">
        <div className="relative">
          <input
            type="search"
            placeholder="Search country or election (e.g. Malta, parliamentary, general)…"
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

        <div className="flex flex-wrap gap-2">
          <ChipGroup value={time} onChange={setTime} options={timeOptions} label="When" />
          <ChipGroup value={region} onChange={setRegion} options={regionOptions} label="Region" />
          <ChipGroup value={tier} onChange={setTier} options={tierOptions} label="Voting access" />
        </div>

        <p className="text-xs text-zinc-500">
          Showing {filtered.length} of {rows.length} elections
          {(query || time !== "all" || region !== "all" || tier !== "all") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setTime("all");
                setRegion("all");
                setTier("all");
              }}
              className="ml-2 text-indigo-600 hover:underline"
            >
              reset filters
            </button>
          )}
        </p>
      </section>

      <section className="mt-6">
        <div className="overflow-hidden rounded-lg border border-zinc-200">
          <div className="hidden grid-cols-[1fr_auto_auto_auto_auto_auto] gap-4 border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium uppercase tracking-wide text-zinc-500 md:grid">
            <span>Country</span>
            <span className="text-right">Access</span>
            <span className="text-right">Election date</span>
            <span className="text-right">Register by</span>
            <span className="text-right">Topics</span>
            <span className="text-right">Commits</span>
          </div>
          <ul className="divide-y divide-zinc-200">
            {shownUpcoming.length === 0 && (
              <li className="px-4 py-8 text-center text-sm text-zinc-500">
                No upcoming elections match your filters.
              </li>
            )}
            {shownUpcoming.map((r) => (
              <li key={`${r.code}-${r.electionDate}-${r.electionLabel}`}>
                <Link
                  href={`/elections/${r.code}?event=${r.electionDate}`}
                  className="grid grid-cols-1 items-center gap-3 px-4 py-4 transition hover:bg-zinc-50 md:grid-cols-[1fr_auto_auto_auto_auto_auto]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{r.flag}</span>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-zinc-900">{r.name}</p>
                      <p className="truncate text-xs text-zinc-500">{r.electionLabel}</p>
                      <p className="mt-0.5 md:hidden">
                        <RegionBadge region={r.region} />
                      </p>
                    </div>
                  </div>
                  <div className="text-right md:block hidden">
                    <TierBadge tier={r.votingAccessibility} />
                  </div>
                  <DateCell date={r.electionDate} days={r.days} variant="election" />
                  <DateCell
                    date={r.registrationDeadline}
                    days={r.regDays}
                    variant="register"
                  />
                  <span className="hidden text-right text-sm text-zinc-700 md:block">
                    {r.topicCount}
                  </span>
                  <span className="hidden text-right text-sm text-zinc-700 md:block">
                    {r.commitCount}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {shownPast.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-zinc-500">
              Past elections ({shownPast.length})
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {shownPast.map((r) => (
                <Link
                  key={`p-${r.code}-${r.electionDate}-${r.electionLabel}`}
                  href={`/elections/${r.code}?event=${r.electionDate}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 hover:bg-white"
                >
                  <span>{r.flag}</span>
                  <span>{r.name}</span>
                  <span className="text-zinc-400">· {formatDate(r.electionDate)}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function ChipGroup<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: Array<{ value: T; label: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10px] uppercase tracking-wide text-zinc-400 mr-1">{label}:</span>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-full border px-2.5 py-0.5 text-xs transition ${
            value === o.value
              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function DateCell({
  date,
  days,
  variant,
}: {
  date: string;
  days: number;
  variant: "election" | "register";
}) {
  const past = days < 0;
  const urgent = !past && days <= 14;
  const soon = !past && days <= 60;
  return (
    <div className="text-right text-sm">
      <p className="text-zinc-900">{formatDate(date)}</p>
      <p
        className={`text-xs ${
          past
            ? "text-zinc-400"
            : urgent
              ? "text-rose-600"
              : soon
                ? "text-amber-600"
                : "text-zinc-500"
        }`}
      >
        {past
          ? `${Math.abs(days)} days ago`
          : days === 0
            ? variant === "election"
              ? "today"
              : "closes today"
            : `in ${days} day${days === 1 ? "" : "s"}`}
      </p>
    </div>
  );
}

function TierBadge({ tier }: { tier: VotingAccessibility }) {
  const meta = TIER_META[tier];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${meta.color}`}
      title={meta.label}
    >
      <span>{meta.emoji}</span>
      <span className="hidden xl:inline">{meta.label}</span>
    </span>
  );
}

function RegionBadge({ region }: { region: CountryRegion }) {
  const meta = REGION_META[region];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${meta.color}`}
    >
      {meta.label}
    </span>
  );
}
