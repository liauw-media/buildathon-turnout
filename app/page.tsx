import Link from "next/link";
import { readCommits } from "@/lib/store";

export default async function Home() {
  const commits = await readCommits();
  const count = commits.length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="flex flex-col items-start gap-6">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          Non-partisan · Privacy-first
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          From support to votes.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          Millions in the diaspora want democratic change but never complete the steps required to
          actually vote. Turnout closes that gap: commit once, get guided through registration in
          your country, and receive timely nudges so you don&apos;t miss a deadline.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/commit"
            className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Commit to vote
          </Link>
          <Link
            href="/momentum"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
          >
            See momentum →
          </Link>
        </div>
        <p className="text-sm text-zinc-500">
          <span className="font-semibold text-zinc-900">{count.toLocaleString()}</span> people have
          already committed.
        </p>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        <Stage
          num="1"
          title="Commit"
          body="Signal early intent to vote in under 30 seconds. Email and city — that&rsquo;s all we need."
        />
        <Stage
          num="2"
          title="Guide"
          body="Once elections are announced, get localized steps, deadlines, and documents for your country."
        />
        <Stage
          num="3"
          title="Activate"
          body="Receive timely reminders and — if you want — join a small group of voters near you."
        />
      </section>

      <section className="mt-16 rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-600">
        <p className="font-medium text-zinc-900">Why this works</p>
        <p className="mt-2">
          Turnout doesn&apos;t try to counter manipulation directly. It strengthens outcomes by
          converting already-motivated supporters into verified voters — closing the intention-to-action
          gap with behavioral design (commitment + reminders) and plain, trustworthy information.
        </p>
      </section>
    </div>
  );
}

function Stage({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 p-6">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
        {num}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{body}</p>
    </div>
  );
}
