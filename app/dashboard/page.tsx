import Link from "next/link";
import { cookies } from "next/headers";
import { getCommit, readCommits } from "@/lib/store";
import { getCountry } from "@/lib/countries";
import { daysUntil, formatDate } from "@/lib/timeline";
import { fifthOf, PERMANENT_COMMITMENT_COPY } from "@/lib/diaspora";
import { buildMessagesFor } from "@/lib/messages";
import { ProgressToggle } from "./ProgressToggle";
import { VotingGroup } from "./VotingGroup";
import NudgeFeed from "./NudgeFeed";
import { findGroup } from "@/lib/matching";

export default async function DashboardPage() {
  const store = await cookies();
  const id = store.get("turnout_uid")?.value;
  const user = id ? await getCommit(id) : undefined;
  const allCommits = await readCommits();

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">No plan yet</h1>
        <p className="mt-2 text-zinc-600">
          Commit to vote first and we&apos;ll build your personalized plan.
        </p>
        <Link
          href="/commit"
          className="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Commit to vote
        </Link>
      </div>
    );
  }

  const country = getCountry(user.country);
  if (!country) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-rose-700">Unknown country on file. Please recommit.</p>
      </div>
    );
  }

  const daysToRegistration = daysUntil(country.registrationDeadline);
  const daysToElection = daysUntil(country.nextElection.date);
  const group = findGroup(user, allCommits);

  // Build the full personalized message set then split past / future for the feed.
  const messages = buildMessagesFor(user, country);
  const sent = messages
    .filter((m) => m.status === "sent")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);
  const scheduled = messages
    .filter((m) => m.status === "scheduled")
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  const doneCount =
    (user.progress.registered ? 1 : 0) +
    (user.progress.planned ? 1 : 0) +
    (user.progress.voted ? 1 : 0);

  // Diaspora community stats for this user's country
  const countryCommits = allCommits.filter((c) => c.country === user.country);
  const citySet = new Set(countryCommits.map((c) => c.city));
  const diasporaLabel = fifthOf(country);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Your plan</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            Hi {user.name.split(" ")[0]} 👋
          </h1>
          <p className="mt-1 text-zinc-600">
            Voting as <span className="font-medium">{country.flag} {country.name}</span> diaspora —{" "}
            {user.city}
            {user.residenceCountry ? `, ${user.residenceCountry}` : ""}.
          </p>
          <p className="mt-1 text-xs text-indigo-700">
            You&apos;re part of {diasporaLabel} —{" "}
            {countryCommits.length} committed voter{countryCommits.length !== 1 ? "s" : ""} across{" "}
            {citySet.size} {citySet.size !== 1 ? "cities" : "city"}.
          </p>
        </div>
        <div className="text-xs text-zinc-500">
          {doneCount}/3 steps completed
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Countdown
          label="Registration deadline"
          date={country.registrationDeadline}
          days={daysToRegistration}
          tone={daysToRegistration <= 14 ? "urgent" : "normal"}
        />
        <Countdown
          label={country.nextElection.label}
          date={country.nextElection.date}
          days={daysToElection}
          tone="normal"
        />
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Your 3-step plan</h2>
        <div className="mt-3 space-y-2">
          <ProgressToggle
            keyName="registered"
            label="Register to vote abroad"
            detail={country.steps[0]?.detail}
            done={user.progress.registered}
          />
          <ProgressToggle
            keyName="planned"
            label="Plan your vote — confirm polling station or mail ballot"
            detail={country.steps[1]?.detail}
            done={user.progress.planned}
          />
          <ProgressToggle
            keyName="voted"
            label="Cast your vote"
            detail={country.steps[2]?.detail}
            done={user.progress.voted}
          />
        </div>
      </section>

      {/* Permanent commitment callout */}
      <div className="mt-4 rounded-md bg-indigo-50 border border-indigo-100 p-3 text-xs text-indigo-900">
        <span className="font-semibold">{PERMANENT_COMMITMENT_COPY.headline}.</span>{" "}
        {PERMANENT_COMMITMENT_COPY.body}
      </div>

      <section className="mt-10">
        <div>
          <h2 className="text-lg font-semibold">What you&apos;ll need</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-700">
            {country.requiredDocuments.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <a
            href={country.registrationUrl}
            target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            Official registration portal →
          </a>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Reminder feed</p>
          <Link
            href="/inbox"
            className="text-xs font-medium text-indigo-600 hover:underline"
          >
            Open full inbox →
          </Link>
        </div>
        <NudgeFeed sent={sent} scheduled={scheduled} />
      </section>

      <VotingGroup initialMembers={group} />

      {/* Share card CTA */}
      <div className="mt-8 rounded-lg border border-indigo-100 bg-indigo-50 px-5 py-4 text-sm text-indigo-900">
        Got a moment? Share your commitment — it&apos;s how momentum spreads.{" "}
        <Link
          href="/shared"
          className="font-semibold text-indigo-700 hover:underline"
        >
          Create share card →
        </Link>
      </div>
    </div>
  );
}

function Countdown({
  label,
  date,
  days,
  tone,
}: {
  label: string;
  date: string;
  days: number;
  tone: "urgent" | "normal";
}) {
  const past = days < 0;
  return (
    <div
      className={`rounded-lg border p-5 ${
        past
          ? "border-zinc-200 bg-zinc-50"
          : tone === "urgent"
            ? "border-rose-200 bg-rose-50"
            : "border-indigo-200 bg-indigo-50"
      }`}
    >
      <p className="text-xs uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold">
        {past ? "Passed" : `${days} days`}
      </p>
      <p className="mt-1 text-xs text-zinc-600">{formatDate(date)}</p>
    </div>
  );
}
