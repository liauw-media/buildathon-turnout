// WorldMap.tsx — pure-SVG Europe-focused map for /momentum
// Server component: no interactivity beyond CSS hover + SVG <title>.
// Projection: equirectangular, bounded to Europe viewport.

import { CITY_COORDS, cityKey } from "@/lib/geo";

// ── Projection ────────────────────────────────────────────────────────────────
const VIEW_W = 800;
const VIEW_H = 500;
const BOUNDS = { minLat: 34, maxLat: 62, minLng: -12, maxLng: 34 };

function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * VIEW_W;
  const y = ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * VIEW_H;
  return { x, y };
}

// ── Continent / landmass silhouettes ─────────────────────────────────────────
// Stylized closed polygon paths using projected screen coords.
// Built from approximate lat/lng waypoints that are then projected.
// Order: clockwise outer polygon → recognizable landmass shape.

function latLngs(pairs: [number, number][]): string {
  return pairs
    .map(([lat, lng], i) => {
      const { x, y } = project(lat, lng);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ") + " Z";
}

// Iberian Peninsula
const IBERIA = latLngs([
  [43.8, -8.9], [43.8, -1.7], [42.8, 0.3], [41.5, 2.2],
  [40.5, 0.5], [37.9, 0.8], [36.1, -5.4], [36.0, -9.5],
  [37.0, -8.9], [39.5, -9.4], [41.9, -8.8], [43.8, -8.9],
]);

// France + Benelux blob
const FRANCE_BENELUX = latLngs([
  [51.5, 2.5], [51.5, 5.8], [50.3, 8.0], [49.5, 7.9],
  [48.0, 7.8], [46.4, 7.0], [43.8, 7.5], [43.4, 3.1],
  [43.3, -1.7], [47.5, -2.2], [48.4, -4.7], [48.7, -1.9],
  [50.1, -1.8], [51.1, 1.8], [51.5, 2.5],
]);

// Great Britain
const GREAT_BRITAIN = latLngs([
  [58.6, -3.1], [57.5, -1.8], [55.9, -2.0], [54.6, -1.0],
  [53.4, 0.1], [51.4, 1.5], [50.8, -0.3], [50.6, -5.0],
  [51.5, -5.1], [52.7, -4.5], [53.3, -4.6], [54.7, -5.2],
  [55.0, -5.7], [56.5, -5.5], [57.6, -5.8], [58.6, -3.1],
]);

// Ireland
const IRELAND = latLngs([
  [55.2, -6.0], [54.0, -6.2], [52.0, -6.3], [51.5, -9.8],
  [53.3, -10.2], [54.3, -8.3], [55.2, -6.0],
]);

// Scandinavia (Norway + Sweden + Denmark rough outline)
const SCANDINAVIA = latLngs([
  [57.7, 10.6], [57.7, 11.9], [59.1, 11.4], [59.9, 11.0],
  [60.5, 12.3], [61.0, 11.9], [62.0, 14.3], [62.0, 17.0],
  [60.7, 18.0], [59.4, 18.7], [58.6, 17.0], [57.2, 16.5],
  [55.5, 14.1], [55.3, 12.7], [56.0, 10.6], [57.7, 10.6],
]);

const NORWAY = latLngs([
  [58.0, 7.0], [59.0, 5.3], [60.3, 5.0], [61.0, 4.5],
  [62.0, 5.0], [61.5, 8.5], [62.0, 14.3], [61.0, 11.9],
  [60.5, 12.3], [59.9, 11.0], [59.1, 11.4], [58.0, 7.0],
]);

// Alps + Central Europe (Germany, Switzerland, Austria, Czech, Poland, Hungary blob)
const CENTRAL_EUROPE = latLngs([
  [54.5, 14.3], [54.1, 18.5], [51.0, 23.8], [49.5, 22.5],
  [47.8, 18.8], [46.5, 16.8], [46.4, 13.7], [47.0, 9.5],
  [47.4, 7.5], [49.5, 7.9], [50.3, 8.0], [51.5, 5.8],
  [51.5, 9.0], [53.5, 10.5], [54.5, 14.3],
]);

// Italy boot
const ITALY = latLngs([
  [44.1, 7.4], [45.5, 13.8], [45.8, 13.3], [44.7, 15.2],
  [43.0, 13.4], [41.9, 15.1], [40.5, 15.6], [38.1, 15.6],
  [37.9, 15.0], [38.3, 16.0], [38.8, 16.3], [39.9, 18.4],
  [40.0, 17.5], [38.0, 14.7], [37.5, 13.5], [38.2, 12.5],
  [39.5, 8.4], [40.7, 8.0], [41.1, 9.5], [44.1, 7.4],
]);

// Sicily
const SICILY = latLngs([
  [38.2, 12.3], [37.5, 13.5], [37.0, 15.3], [37.1, 15.7],
  [38.2, 15.6], [38.4, 14.5], [38.2, 12.3],
]);

// Balkans (Slovenia, Croatia, BiH, Serbia, Montenegro, N.Macedonia, Albania, Kosovo, Bulgaria, Romania blob)
const BALKANS = latLngs([
  [46.5, 16.8], [47.8, 18.8], [49.5, 22.5], [48.2, 22.2],
  [48.0, 26.2], [46.5, 30.5], [44.0, 28.5], [43.6, 28.5],
  [41.5, 28.0], [40.9, 25.4], [41.0, 23.0], [41.4, 22.5],
  [41.9, 20.5], [42.4, 19.3], [43.5, 18.5], [43.0, 17.0],
  [42.6, 18.5], [42.5, 16.9], [44.0, 15.4], [45.2, 13.9],
  [45.8, 13.3], [45.5, 13.8], [46.5, 16.8],
]);

// Greece + Aegean blob (mainland + islands approximated)
const GREECE = latLngs([
  [41.5, 26.5], [40.9, 25.4], [40.6, 22.5], [40.5, 23.4],
  [38.1, 23.8], [37.9, 24.0], [36.4, 22.8], [36.7, 21.8],
  [37.7, 21.5], [37.9, 22.0], [38.1, 22.5], [40.0, 22.5],
  [39.6, 19.9], [41.3, 19.6], [41.5, 20.1], [41.8, 22.3],
  [41.5, 26.5],
]);

// Crete approximate
const CRETE = latLngs([
  [35.3, 23.5], [35.5, 26.4], [34.9, 26.0], [34.9, 23.5], [35.3, 23.5],
]);

// Turkey (European side + part of Anatolia for context)
const TURKEY = latLngs([
  [41.5, 26.5], [41.8, 28.0], [41.0, 29.2], [40.7, 30.1],
  [41.0, 32.5], [41.5, 33.9], [41.1, 34.0], [40.0, 33.5],
  [37.5, 34.0], [36.5, 36.0], [36.6, 36.1], [37.0, 36.1],
  [36.4, 29.7], [36.3, 28.3], [37.3, 27.3], [38.0, 26.5],
  [38.5, 26.0], [40.1, 26.4], [40.4, 26.7], [41.5, 26.5],
]);

// ── Latitude / longitude grid lines ──────────────────────────────────────────
function gridLines() {
  const lines: string[] = [];
  // Latitude lines every 10°
  for (let lat = 40; lat <= 60; lat += 10) {
    const { x: x1, y } = project(lat, BOUNDS.minLng);
    const { x: x2 } = project(lat, BOUNDS.maxLng);
    lines.push(`M${x1.toFixed(1)},${y.toFixed(1)} L${x2.toFixed(1)},${y.toFixed(1)}`);
  }
  // Longitude lines every 10°
  for (let lng = -10; lng <= 30; lng += 10) {
    const { x, y: y1 } = project(BOUNDS.maxLat, lng);
    const { y: y2 } = project(BOUNDS.minLat, lng);
    lines.push(`M${x.toFixed(1)},${y1.toFixed(1)} L${x.toFixed(1)},${y2.toFixed(1)}`);
  }
  return lines.join(" ");
}

// ── Pin sizing ────────────────────────────────────────────────────────────────
// radius = 4 + sqrt(count) * 3, capped at 22
function pinRadius(count: number): number {
  return Math.min(22, 4 + Math.sqrt(count) * 3);
}

// ── Component types ───────────────────────────────────────────────────────────
export type CityPin = {
  city: string; // may include ", CountryCode" suffix
  count: number;
};

interface WorldMapProps {
  cities: CityPin[];
}

// ── Main component ────────────────────────────────────────────────────────────
export default function WorldMap({ cities }: WorldMapProps) {
  // Resolve each city to a coordinate, deduplicating by base name
  const resolvedPins: Array<{
    city: string;
    displayCity: string;
    count: number;
    x: number;
    y: number;
    r: number;
  }> = [];

  for (const { city, count } of cities) {
    const key = cityKey(city);
    const coords = CITY_COORDS[key];
    if (!coords) continue; // unknown city — skip gracefully
    const { x, y } = project(coords.lat, coords.lng);
    resolvedPins.push({ city: key, displayCity: city, count, x, y, r: pinRadius(count) });
  }

  // Sort so smaller pins render on top of larger ones
  resolvedPins.sort((a, b) => b.r - a.r);

  const LAND_PATHS = [
    IBERIA,
    FRANCE_BENELUX,
    GREAT_BRITAIN,
    IRELAND,
    SCANDINAVIA,
    NORWAY,
    CENTRAL_EUROPE,
    ITALY,
    SICILY,
    BALKANS,
    GREECE,
    CRETE,
    TURKEY,
  ];

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-5">
      <h2 className="text-lg font-semibold">Where commitments are coming from</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Every pin is a diaspora voter who&apos;s committed.
      </p>

      <div className="mt-4 overflow-hidden rounded-md">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="w-full h-auto"
          aria-label="Europe map showing diaspora voter commitment locations"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.06))" }}
        >
          {/* Defs: drop-shadow filter for pins */}
          <defs>
            <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Ocean background */}
          <rect width={VIEW_W} height={VIEW_H} fill="#f8fafc" />

          {/* Grid lines — very faint */}
          <path d={gridLines()} fill="none" stroke="#e4e4e7" strokeWidth="0.5" strokeDasharray="4 4" />

          {/* Landmass silhouettes */}
          {LAND_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="#f4f4f5"
              stroke="#d4d4d8"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          ))}

          {/* City pins */}
          {resolvedPins.map(({ city, displayCity, count, x, y, r }) => (
            <g key={city} style={{ cursor: "default" }}>
              {/* Invisible hit area for CSS hover */}
              <circle
                cx={x.toFixed(1)}
                cy={y.toFixed(1)}
                r={(r + 6).toFixed(1)}
                fill="transparent"
                className="peer"
              />

              {/* SVG tooltip (shows in most browsers on hover) */}
              <title>{`${displayCity} — ${count} commitment${count !== 1 ? "s" : ""}`}</title>

              {/* Pin outer glow ring */}
              <circle
                cx={x.toFixed(1)}
                cy={y.toFixed(1)}
                r={(r + 3).toFixed(1)}
                fill="#6366f1"
                fillOpacity="0.15"
              />

              {/* Pin body */}
              <circle
                cx={x.toFixed(1)}
                cy={y.toFixed(1)}
                r={r.toFixed(1)}
                fill="#6366f1"
                stroke="white"
                strokeWidth="1.5"
                filter="url(#pin-shadow)"
              />

              {/* Count label inside pin (shown only when pin is large enough) */}
              {r >= 10 && (
                <text
                  x={x.toFixed(1)}
                  y={(y + 1).toFixed(1)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={Math.max(8, r * 0.7).toFixed(1)}
                  fontWeight="600"
                  fill="white"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {count}
                </text>
              )}

              {/* Hover label — positioned above the pin */}
              <g
                transform={`translate(${x.toFixed(1)}, ${(y - r - 8).toFixed(1)})`}
                opacity="0"
                className="peer-hover:opacity-100 transition-opacity duration-150"
                style={{ pointerEvents: "none" }}
              >
                {/* Label background pill */}
                <rect
                  x="-46"
                  y="-20"
                  width="92"
                  height="18"
                  rx="4"
                  fill="#1e1b4b"
                  fillOpacity="0.9"
                />
                <text
                  textAnchor="middle"
                  y="-6"
                  fontSize="10"
                  fontWeight="500"
                  fill="white"
                  style={{ userSelect: "none" }}
                >
                  {displayCity} — {count}
                </text>
              </g>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block rounded-full bg-indigo-500"
            style={{ width: 8, height: 8 }}
          />
          Committed voter
        </span>
        <span>Pin size = number of commitments from that city</span>
      </div>
    </section>
  );
}
