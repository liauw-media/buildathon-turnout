import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, readTopics } from "@/lib/topics-store";
import { getCountry } from "@/lib/countries";
import { readCommits } from "@/lib/store";
import { formatDate } from "@/lib/timeline";

export const dynamic = "force-dynamic";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [topic, allTopics, commits] = await Promise.all([
    getTopic(id),
    readTopics(),
    readCommits(),
  ]);

  if (!topic) notFound();
  const country = getCountry(topic.country);
  if (!country) notFound();

  // Mocked supporter count — use declared value or derive plausibly from commits
  const countryCommits = commits.filter((c) => c.country === topic.country).length;
  const supporterCount =
    topic.supporterCount ??
    Math.max(
      3,
      Math.round(countryCommits * (0.25 + deterministicRatio(topic.id) * 0.6)),
    );

  // Related topics — same country, different topic, sharing ≥1 keyword
  const related = allTopics
    .filter(
      (t) =>
        t.id !== topic.id &&
        t.country === topic.country &&
        t.keywords.some((k) =>
          topic.keywords.some((mk) => mk.toLowerCase() === k.toLowerCase()),
        ),
    )
    .slice(0, 3);

  // Same-keyword topics across other countries (broaden view)
  const crossCountry = allTopics
    .filter(
      (t) =>
        t.country !== topic.country &&
        t.keywords.some((k) =>
          topic.keywords.some((mk) => mk.toLowerCase() === k.toLowerCase()),
        ),
    )
    .slice(0, 4);

  const paragraphs = (topic.detail ?? topic.summary).split(/\n{2,}/).filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <nav className="flex items-center gap-2 text-xs text-zinc-500">
        <Link href="/topics" className="hover:text-zinc-800">
          Topics
        </Link>
        <span>/</span>
        <Link
          href={`/elections/${topic.country}/topics`}
          className="hover:text-zinc-800"
        >
          {country.flag} {country.name}
        </Link>
        <span>/</span>
        <span className="truncate text-zinc-800">{topic.title}</span>
      </nav>

      <header className="mt-4 flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <span className="text-2xl leading-none">{country.flag}</span>
            <span className="font-medium">{country.name}</span>
            <span className="text-zinc-400">·</span>
            <span>{country.nextElection.label}</span>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">{topic.title}</h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {topic.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-sm">
          <SupporterCard count={supporterCount} country={country.name} />
        </div>
      </header>

      <article className="mt-8 space-y-4 text-[15px] leading-relaxed text-zinc-800">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Official sources
          </h2>
          {topic.officialLinks && topic.officialLinks.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {topic.officialLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-md border border-zinc-200 p-3 hover:border-indigo-300 hover:bg-indigo-50/40"
                  >
                    <p className="text-sm font-medium text-zinc-900 group-hover:text-indigo-800">
                      {l.label} <span aria-hidden>→</span>
                    </p>
                    {l.source && (
                      <p className="mt-0.5 text-xs text-zinc-500">{l.source}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm italic text-zinc-400">
              Operators can add official links in{" "}
              <Link href="/admin?tab=topics" className="text-indigo-600 hover:underline">
                /admin
              </Link>
              .
            </p>
          )}
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Recent coverage
          </h2>
          {topic.newsLinks && topic.newsLinks.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {topic.newsLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-md border border-zinc-200 p-3 hover:border-indigo-300 hover:bg-indigo-50/40"
                  >
                    <p className="text-sm font-medium text-zinc-900 group-hover:text-indigo-800">
                      {l.label} <span aria-hidden>→</span>
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {l.source ?? "Unknown source"}
                      {l.publishedAt ? ` · ${formatDate(l.publishedAt)}` : ""}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm italic text-zinc-400">
              No news items yet — once operators add sources they&apos;ll show here.
            </p>
          )}
        </section>
      </div>

      {topic.endorsements && topic.endorsements.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Civic organizations tracking this
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {topic.endorsements.map((e, i) =>
              e.url ? (
                <a
                  key={i}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 hover:border-indigo-300 hover:text-indigo-700"
                >
                  {e.name}
                </a>
              ) : (
                <span
                  key={i}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                >
                  {e.name}
                </span>
              ),
            )}
          </div>
        </section>
      )}

      {(related.length > 0 || crossCountry.length > 0) && (
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {related.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Also on the {country.name} ballot
              </h2>
              <ul className="mt-3 space-y-2">
                {related.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/topics/${t.id}`}
                      className="block rounded-md border border-zinc-200 p-3 text-sm hover:border-zinc-300 hover:bg-zinc-50"
                    >
                      <p className="font-medium text-zinc-900">{t.title}</p>
                      <p className="mt-1 text-xs text-zinc-500 line-clamp-2">
                        {t.summary}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {crossCountry.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Same issue in other countries
              </h2>
              <ul className="mt-3 space-y-2">
                {crossCountry.map((t) => {
                  const c = getCountry(t.country);
                  return (
                    <li key={t.id}>
                      <Link
                        href={`/topics/${t.id}`}
                        className="block rounded-md border border-zinc-200 p-3 text-sm hover:border-zinc-300 hover:bg-zinc-50"
                      >
                        <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                          {c?.flag} {c?.name ?? t.country}
                        </p>
                        <p className="mt-1 font-medium text-zinc-900">{t.title}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="mt-12 rounded-lg border border-zinc-200 bg-indigo-50/60 p-5">
        <p className="text-sm font-medium text-zinc-900">
          Make this issue count — vote in {country.nextElection.label} on{" "}
          {formatDate(country.nextElection.date)}.
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          Turnout won&apos;t tell you how to vote. We just help you show up.
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

function SupporterCard({ count, country }: { count: number; country: string }) {
  return (
    <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-right">
      <p className="text-2xl font-semibold text-indigo-900">
        {count.toLocaleString()}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-indigo-700">
        {country} diaspora flagging this
      </p>
    </div>
  );
}

// Deterministic pseudo-random ratio in [0, 1) from the topic id — keeps mocked numbers stable across renders
function deterministicRatio(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return (Math.abs(h) % 1000) / 1000;
}
