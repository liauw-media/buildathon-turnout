import Link from "next/link";
import { readCommits } from "@/lib/store";
import { COUNTRIES, getCountry } from "@/lib/countries";
import WorldMap, { type CityPin } from "./WorldMap";

export const dynamic = "force-dynamic";

export default async function MomentumPage() {
  const commits = await readCommits();

  const byCountry = new Map<string, number>();
  const byCity = new Map<string, number>();
  for (const c of commits) {
    byCountry.set(c.country, (byCountry.get(c.country) ?? 0) + 1);
    const cityKey = c.residenceCountry ? `${c.city}, ${c.residenceCountry}` : c.city;
    byCity.set(cityKey, (byCity.get(cityKey) ?? 0) + 1);
  }

  const countryRows = [...byCountry.entries()]
    .map(([code, count]) => ({ code, count, country: getCountry(code) }))
    .sort((a, b) => b.count - a.count);
  const maxCountry = Math.max(1, ...countryRows.map((r) => r.count));

  const cityRows = [...byCity.entries()]
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  const maxCity = Math.max(1, ...cityRows.map((r) => r.count));

  const recent = [...commits]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8);

  // Build CityPin list for the world map (use "city, residenceCountry" key to match byCity)
  const cityPins: CityPin[] = [...byCity.entries()].map(([city, count]) => ({ city, count }));

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Live momentum</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            {commits.length.toLocaleString()} committed voters
          </h1>
          <p className="mt-1 text-zinc-600">
            Visible momentum converts supporters into participants. Every commit counts.
          </p>
        </div>
        <Link
          href="/commit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Add yours →
        </Link>
      </div>

      <div className="mt-10">
        <WorldMap cities={cityPins} />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold">By country of origin</h2>
          <div className="mt-4 space-y-3">
            {countryRows.length === 0 && (
              <p className="text-sm text-zinc-500">No commits yet. Be the first.</p>
            )}
            {countryRows.map((r) => (
              <Bar
                key={r.code}
                label={`${r.country?.flag ?? ""} ${r.country?.name ?? r.code}`}
                count={r.count}
                ratio={r.count / maxCountry}
                total={commits.length}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Top diaspora cities</h2>
          <div className="mt-4 space-y-3">
            {cityRows.length === 0 && (
              <p className="text-sm text-zinc-500">No cities yet.</p>
            )}
            {cityRows.map((r) => (
              <Bar
                key={r.city}
                label={r.city}
                count={r.count}
                ratio={r.count / maxCity}
                total={commits.length}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">Recent commitments</h2>
        <ul className="mt-3 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
          {recent.length === 0 && (
            <li className="p-4 text-sm text-zinc-500">No commits yet.</li>
          )}
          {recent.map((c) => {
            const cc = getCountry(c.country);
            return (
              <li key={c.id} className="flex items-center justify-between p-3 text-sm">
                <span className="flex items-center gap-2">
                  <span>{cc?.flag ?? "🏳️"}</span>
                  <span className="font-medium">{initials(c.name)}</span>
                  <span className="text-zinc-500">
                    from {c.city}
                    {c.residenceCountry ? `, ${c.residenceCountry}` : ""}
                  </span>
                </span>
                <span className="text-xs text-zinc-500">{relativeTime(c.createdAt)}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs text-zinc-500">
          Only initials and city are shown publicly. Emails are never displayed.
        </p>
      </section>

      <section className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-xs text-zinc-500">
        Covered countries in this prototype:{" "}
        {COUNTRIES.map((c) => `${c.flag} ${c.name}`).join(" · ")}
      </section>
    </div>
  );
}

function Bar({
  label,
  count,
  ratio,
  total,
}: {
  label: string;
  count: number;
  ratio: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-zinc-800">{label}</span>
        <span className="text-zinc-500">
          {count} · {pct}%
        </span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${Math.max(4, ratio * 100)}%` }}
        />
      </div>
    </div>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join(".")
    .concat(".");
}

function relativeTime(iso: string): string {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}
