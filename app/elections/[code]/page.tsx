import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountry } from "@/lib/countries";
import { getCountryCalendar, getEffectiveCountry } from "@/lib/elections-store";
import { getTopicsByCountry } from "@/lib/topics-store";
import { readCommits } from "@/lib/store";
import { daysUntil, formatDate } from "@/lib/timeline";
import { fifthOf } from "@/lib/diaspora";
import type { VotingAccessibility } from "@/lib/types";

export const dynamic = "force-dynamic";

type Params = Promise<{ code: string }>;
type SearchParams = Promise<{ event?: string }>;

const TIER_META: Record<VotingAccessibility, { emoji: string; label: string; color: string }> = {
  evoting: { emoji: "🟢", label: "E-voting available", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  postal: { emoji: "🟡", label: "Postal ballot", color: "bg-amber-100 text-amber-800 border-amber-200" },
  consulate: { emoji: "🟠", label: "Consulate voting only", color: "bg-orange-100 text-orange-800 border-orange-200" },
  travel: { emoji: "🔴", label: "Must travel home to vote", color: "bg-rose-100 text-rose-800 border-rose-200" },
  none: { emoji: "⚫", label: "No free overseas vote", color: "bg-zinc-200 text-zinc-800 border-zinc-300" },
};

export default async function CountryElectionsPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { code: raw } = await params;
  const { event } = await searchParams;
  const code = raw.toUpperCase();

  const base = getCountry(code);
  if (!base) notFound();

  const [effective, events, topics, allCommits] = await Promise.all([
    getEffectiveCountry(code),
    getCountryCalendar(code),
    getTopicsByCountry(code),
    readCommits(),
  ]);

  const country = effective ?? base;
  const commitCount = allCommits.filter((c) => c.country === code).length;

  // If ?event=<date> requested, surface that event as the "focus"; else use the nearest upcoming.
  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const focus =
    sorted.find((e) => e.date === event) ??
    sorted.find((e) => e.date >= today) ??
    sorted[sorted.length - 1];

  const upcoming = sorted.filter((e) => e.date >= today);
  const past = sorted.filter((e) => e.date < today);
  const tier = TIER_META[country.votingAccessibility];

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500">
        <Link href="/elections" className="hover:text-zinc-800">
          ← Elections
        </Link>
        <span>/</span>
        <span className="text-zinc-800">
          {country.flag} {country.name}
        </span>
      </nav>

      {/* Header */}
      <header className="mt-5 flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">Elections</p>
              <h1 className="text-3xl font-semibold tracking-tight">{country.name}</h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-600">
            <span className="font-medium">{fifthOf(country)}</span> ·{" "}
            {commitCount.toLocaleString()} committed diaspora voter
            {commitCount === 1 ? "" : "s"}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2 text-sm">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tier.color}`}
          >
            <span>{tier.emoji}</span>
            {tier.label}
          </span>
          <Link
            href={`/commit?code=${code}&election=${focus?.date ?? country.nextElection.date}`}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Commit to vote →
          </Link>
        </div>
      </header>

      {/* Focused event card (the specific one the user clicked, or next upcoming) */}
      {focus && (
        <section className="mt-8 rounded-lg border-2 border-indigo-200 bg-indigo-50/60 p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-indigo-700">
                {focus.date === event ? "Selected event" : "Next up"}
                {focus.featured ? " · ⭐ Featured" : ""}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900">{focus.label}</h2>
              <p className="mt-1 text-sm text-zinc-600">
                {formatDate(focus.date)}
                {(() => {
                  const d = daysUntil(focus.date);
                  if (d < 0) return ` · ${Math.abs(d)} days ago`;
                  if (d === 0) return " · today";
                  return ` · in ${d} days`;
                })()}
                {focus.kind ? ` · ${focus.kind}` : ""}
              </p>
              {focus.notes && (
                <p className="mt-2 text-sm text-zinc-700 italic">{focus.notes}</p>
              )}
            </div>
            {focus.source && focus.source !== "unknown" && (
              <a
                href={focus.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-indigo-700 hover:underline"
              >
                Official source →
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <p className="rounded-md bg-white px-3 py-1.5 text-zinc-700">
              Registration deadline: <span className="font-semibold">{formatDate(country.registrationDeadline)}</span>
            </p>
            <p className="rounded-md bg-white px-3 py-1.5 text-zinc-700">
              Voting: <span className="font-semibold">{tier.label}</span>
            </p>
          </div>
        </section>
      )}

      {/* All events list */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">All scheduled events</h2>
        <p className="mt-1 text-sm text-zinc-500">
          {upcoming.length} upcoming · {past.length} past
        </p>

        <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200">
          <ul className="divide-y divide-zinc-200">
            {upcoming.map((ev) => {
              const selected = ev.date === focus?.date;
              const days = daysUntil(ev.date);
              return (
                <li key={ev.date + ev.label}>
                  <Link
                    href={`/elections/${code}?event=${ev.date}`}
                    className={`flex items-center justify-between gap-4 px-4 py-3 text-sm transition ${
                      selected ? "bg-indigo-50" : "hover:bg-zinc-50"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium text-zinc-900">
                        {ev.featured && <span className="mr-1">⭐</span>}
                        {ev.label}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {ev.kind ?? "election"}
                        {ev.notes ? ` · ${ev.notes}` : ""}
                      </p>
                    </div>
                    <div className="text-right text-xs text-zinc-600">
                      <p>{formatDate(ev.date)}</p>
                      <p className="text-zinc-400">in {days} days</p>
                    </div>
                  </Link>
                </li>
              );
            })}
            {past.slice(-3).map((ev) => {
              const d = daysUntil(ev.date);
              return (
                <li key={"p-" + ev.date + ev.label} className="opacity-50">
                  <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                    <div className="min-w-0">
                      <p className="truncate text-zinc-700">{ev.label}</p>
                      <p className="text-xs text-zinc-500">{ev.kind ?? "election"}</p>
                    </div>
                    <div className="text-right text-xs text-zinc-500">
                      <p>{formatDate(ev.date)}</p>
                      <p>{Math.abs(d)} days ago</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Topics + registration detail links */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link
          href={`/elections/${code}/topics`}
          className="group rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-indigo-300"
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500">What&apos;s at stake</p>
          <p className="mt-1 text-base font-semibold text-zinc-900 group-hover:text-indigo-700">
            {topics.length} topic{topics.length === 1 ? "" : "s"} →
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            Non-partisan summaries of the issues on the ballot.
          </p>
        </Link>

        <a
          href={country.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-indigo-300"
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500">How to register</p>
          <p className="mt-1 text-base font-semibold text-zinc-900 group-hover:text-indigo-700">
            Official portal →
          </p>
          <p className="mt-1 truncate text-sm text-zinc-600">{country.registrationUrl}</p>
        </a>
      </section>
    </div>
  );
}
