import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountry } from "@/lib/countries";
import { getTopicsByCountry } from "@/lib/topics-store";
import type { Topic } from "@/lib/topics";
import { SearchBox } from "./SearchBox";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

type Params = Promise<{ code: string }>;
type SearchParams = Promise<{ q?: string }>;

export default async function TopicsBrowserPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { code } = await params;
  const { q = "" } = await searchParams;

  const country = getCountry(code.toUpperCase());
  if (!country) notFound();

  const allTopics = await getTopicsByCountry(code.toUpperCase());

  const query = q.trim().toLowerCase();
  const topics: Topic[] = query
    ? allTopics.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.keywords.some((k) => k.toLowerCase().includes(query)),
      )
    : allTopics;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-xs text-zinc-500 hover:text-zinc-700"
        >
          ← Home
        </Link>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-3xl">{country.flag}</span>
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Election topics</p>
            <h1 className="text-3xl font-semibold tracking-tight">{country.name}</h1>
          </div>
        </div>
        <p className="mt-2 text-zinc-600">
          Key policy areas for the{" "}
          <span className="font-medium">{country.nextElection.label}</span> on{" "}
          <span className="font-medium">{country.nextElection.date}</span>. Described factually
          and without partisan framing.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Suspense>
          <SearchBox defaultValue={q} />
        </Suspense>
      </div>

      {/* Results meta */}
      <p className="mb-4 text-xs text-zinc-500">
        {query ? (
          <>
            {topics.length} result{topics.length !== 1 ? "s" : ""} for &ldquo;{q}&rdquo;
            {" "}·{" "}
            <Link href={`/elections/${code}/topics`} className="text-indigo-600 hover:underline">
              Clear
            </Link>
          </>
        ) : (
          <>
            {topics.length} topic{topics.length !== 1 ? "s" : ""}
          </>
        )}
      </p>

      {/* Topic cards */}
      {topics.length === 0 && (
        <div className="rounded-lg border border-zinc-200 p-8 text-center">
          <p className="text-zinc-500">No topics match your search.</p>
          <Link
            href={`/elections/${code}/topics`}
            className="mt-2 inline-block text-sm text-indigo-600 hover:underline"
          >
            View all topics
          </Link>
        </div>
      )}

      <div className="space-y-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} query={query} />
        ))}
      </div>

      {/* Footer nudge */}
      <div className="mt-12 rounded-lg border border-indigo-100 bg-indigo-50 p-5 text-sm">
        <p className="font-medium text-indigo-900">Ready to commit to vote?</p>
        <p className="mt-1 text-indigo-700">
          Stay informed and take action. We&apos;ll send you deadline reminders for{" "}
          {country.name}.
        </p>
        <Link
          href={`/commit?code=${country.code}&election=${country.nextElection.date}`}
          className="mt-3 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Commit to vote →
        </Link>
      </div>
    </div>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-100 text-yellow-900">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function TopicCard({ topic, query }: { topic: Topic; query: string }) {
  return (
    <article className="rounded-lg border border-zinc-200 p-5 transition hover:border-zinc-300">
      <div className="flex items-start justify-between gap-3">
        <Link href={`/topics/${topic.id}`} className="group block flex-1">
          <h2 className="font-semibold text-zinc-900 group-hover:text-indigo-700">
            {highlightMatch(topic.title, query)}
          </h2>
        </Link>
        {typeof topic.supporterCount === "number" && (
          <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700">
            👥 {topic.supporterCount.toLocaleString()}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{topic.summary}</p>
      {topic.keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {topic.keywords.map((k) => {
            const matches = query && k.toLowerCase().includes(query);
            return (
              <span
                key={k}
                className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  matches
                    ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                    : "border-zinc-200 bg-zinc-100 text-zinc-600"
                }`}
              >
                {k}
              </span>
            );
          })}
        </div>
      )}
      <Link
        href={`/topics/${topic.id}`}
        className="mt-3 inline-block text-xs font-medium text-indigo-600 hover:underline"
      >
        Read more →
      </Link>
    </article>
  );
}
