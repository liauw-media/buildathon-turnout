// WorldMap.tsx — real Europe map with projected Natural Earth borders + commitment pins.
// Projection: equirectangular. Borders (lib/europe-geo.ts) and dots share the same projection
// so they always align.

import { CITY_COORDS, cityKey } from "@/lib/geo";
import { EUROPE_PATHS } from "@/lib/europe-geo";

const VIEW_W = 800;
const VIEW_H = 440;
const PAD = 24;
const BOUNDS = { minLat: 34, maxLat: 62, minLng: -12, maxLng: 34 };

function project(lat: number, lng: number): { x: number; y: number } {
  const x =
    PAD +
    ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * (VIEW_W - 2 * PAD);
  const y =
    PAD +
    ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * (VIEW_H - 2 * PAD);
  return { x, y };
}

function pinRadius(count: number): number {
  return Math.max(5, Math.min(18, 4 + Math.sqrt(count) * 3.5));
}

export type CityPin = {
  city: string;
  count: number;
};

interface WorldMapProps {
  cities: CityPin[];
}

export default function WorldMap({ cities }: WorldMapProps) {
  const pins = cities
    .map(({ city, count }) => {
      const key = cityKey(city);
      const coords = CITY_COORDS[key];
      if (!coords) return null;
      const { x, y } = project(coords.lat, coords.lng);
      return { key, displayCity: city, count, x, y, r: pinRadius(count) };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const total = pins.reduce((acc, p) => acc + p.count, 0);
  const cityCount = pins.length;

  const labeledCount = Math.min(8, pins.length);
  const topPins = [...pins].sort((a, b) => b.count - a.count).slice(0, labeledCount);
  const labeledSet = new Set(topPins.map((p) => p.key));

  // Sort so larger pins render first (smaller on top)
  const renderPins = [...pins].sort((a, b) => b.r - a.r);

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">Where commitments are coming from</h2>
          <p className="mt-1 text-sm text-zinc-500">
            {total} committed voter{total === 1 ? "" : "s"} across {cityCount}{" "}
            diaspora {cityCount === 1 ? "city" : "cities"}.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <span
            className="inline-block rounded-full bg-indigo-500"
            style={{ width: 8, height: 8 }}
          />
          Pin size = commitments per city
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50/40">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="block w-full h-auto"
          aria-label="Map of Europe showing diaspora voter commitment locations"
        >
          <defs>
            <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
            <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.8" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Real Europe borders — Natural Earth 110m projected equirectangular */}
          <g
            fill="#f4f4f5"
            stroke="#a1a1aa"
            strokeWidth="0.5"
            strokeLinejoin="round"
          >
            {EUROPE_PATHS.map((c) => (
              <path key={c.iso || c.name} d={c.d}>
                <title>{c.name}</title>
              </path>
            ))}
          </g>

          {/* Glow halos under larger pins */}
          {renderPins
            .filter((p) => p.count > 1)
            .map((p) => (
              <circle
                key={`glow-${p.key}`}
                cx={p.x}
                cy={p.y}
                r={p.r * 3.5}
                fill="url(#glow-grad)"
              />
            ))}

          {/* Pins */}
          {renderPins.map((p) => (
            <g key={p.key}>
              <title>{`${p.displayCity} — ${p.count} commitment${
                p.count !== 1 ? "s" : ""
              }`}</title>
              <circle
                cx={p.x}
                cy={p.y}
                r={p.r}
                fill="#6366f1"
                stroke="#ffffff"
                strokeWidth="2"
                filter="url(#pin-shadow)"
              />
              {p.r >= 10 && (
                <text
                  x={p.x}
                  y={p.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={Math.max(9, p.r * 0.7)}
                  fontWeight="600"
                  fill="white"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {p.count}
                </text>
              )}
            </g>
          ))}

          {/* Labels for the top cities */}
          {topPins.map((p) => {
            const offsetY = p.r + 14;
            return (
              <g key={`lbl-${p.key}`} style={{ pointerEvents: "none" }}>
                <text
                  x={p.x}
                  y={p.y + offsetY}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="#18181b"
                  stroke="#ffffff"
                  strokeWidth="3"
                  paintOrder="stroke"
                >
                  {cityKey(p.displayCity)}
                </text>
              </g>
            );
          })}

          {/* Unlabeled indicator count at bottom right */}
          {pins.length > labeledSet.size && (
            <text
              x={VIEW_W - 16}
              y={VIEW_H - 14}
              textAnchor="end"
              fontSize="10"
              fill="#71717a"
            >
              +{pins.length - labeledSet.size} more {pins.length - labeledSet.size === 1 ? "city" : "cities"} (hover to see)
            </text>
          )}
        </svg>
      </div>
    </section>
  );
}
