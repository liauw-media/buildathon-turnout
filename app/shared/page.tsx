import Link from "next/link";
import { cookies } from "next/headers";
import { getCommit } from "@/lib/store";
import { getCountry } from "@/lib/countries";
import { formatDate } from "@/lib/timeline";
import { fifthOf } from "@/lib/diaspora";
import { ShareCard } from "./ShareCard";

export default async function SharedPage() {
  const store = await cookies();
  const id = store.get("turnout_uid")?.value;
  const user = id ? await getCommit(id) : undefined;

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <p className="text-5xl">🗳️</p>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900">
          Commit first to get your share card
        </h1>
        <p className="mt-3 text-zinc-600">
          Your personalised commitment card will appear here once you&apos;ve
          joined the movement.
        </p>
        <Link
          href="/commit"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
        >
          Commit to vote →
        </Link>
      </div>
    );
  }

  const country = getCountry(user.country);
  const firstName = user.name.split(" ")[0];
  const flag = country?.flag ?? "🗳️";
  const countryName = country?.name ?? user.country;
  const electionLabel = country?.nextElection.label ?? "upcoming election";
  const electionDate = country?.nextElection.date
    ? formatDate(country.nextElection.date)
    : "";
  const fifthLabel = country ? fifthOf(country) : null;

  return (
    <div className="mx-auto max-w-xl px-6 py-12">
      {/* Page heading */}
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          Your commitment card
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-900">
          Share it — every card brings someone closer to voting.
        </h1>
        {fifthLabel && (
          <p className="mt-2 text-sm text-zinc-500">
            Joining {fifthLabel} — will you?
          </p>
        )}
      </div>

      {/* The interactive card component */}
      <ShareCard
        firstName={firstName}
        flag={flag}
        countryName={countryName}
        city={user.city}
        electionLabel={electionLabel}
        electionDate={electionDate}
      />

      {/* Go to plan link */}
      <div className="mt-10 text-center">
        <Link
          href="/dashboard"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Go to my plan →
        </Link>
      </div>
    </div>
  );
}
