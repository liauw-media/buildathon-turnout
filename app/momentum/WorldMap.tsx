"use client";
// WorldMap.tsx — interactive world map with pan/zoom, equirectangular projection.
// Default view frames Europe. Drag to pan, wheel/buttons to zoom.

import { useCallback, useEffect, useRef, useState } from "react";
import { CITY_COORDS, cityKey } from "@/lib/geo";
import { WORLD_PATHS, WORLD_VIEW, WORLD_BOUNDS } from "@/lib/world-geo";

// ─── Projection ────────────────────────────────────────────────────────────────

const VIEW_W = WORLD_VIEW.w; // 1000
const VIEW_H = WORLD_VIEW.h; // 500

function projectToWorld(lat: number, lng: number): { x: number; y: number } {
  const x =
    ((lng - WORLD_BOUNDS.minLng) / (WORLD_BOUNDS.maxLng - WORLD_BOUNDS.minLng)) *
    VIEW_W;
  const y =
    ((WORLD_BOUNDS.maxLat - lat) / (WORLD_BOUNDS.maxLat - WORLD_BOUNDS.minLat)) *
    VIEW_H;
  return { x, y };
}

// ─── ViewBox helpers ───────────────────────────────────────────────────────────

interface VB {
  x: number;
  y: number;
  w: number;
  h: number;
}

// Default view: Europe roughly lat 34–62, lng -12–34
const EUROPE_LAT_MIN = 34;
const EUROPE_LAT_MAX = 62;
const EUROPE_LNG_MIN = -14;
const EUROPE_LNG_MAX = 36;

function europeViewBox(): VB {
  const tl = projectToWorld(EUROPE_LAT_MAX, EUROPE_LNG_MIN);
  const br = projectToWorld(EUROPE_LAT_MIN, EUROPE_LNG_MAX);
  // Add a small margin
  const margin = 10;
  return {
    x: tl.x - margin,
    y: tl.y - margin,
    w: br.x - tl.x + margin * 2,
    h: br.y - tl.y + margin * 2,
  };
}

const DEFAULT_VB = europeViewBox();
const WORLD_VB: VB = { x: 0, y: 0, w: VIEW_W, h: VIEW_H };

// Maximum zoom = when viewBox is 1/20th of world width
const MIN_VB_W = VIEW_W / 20;
// Minimum zoom = full world
const MAX_VB_W = VIEW_W;

function clampViewBox(vb: VB): VB {
  // Clamp width
  const w = Math.max(MIN_VB_W, Math.min(MAX_VB_W, vb.w));
  // Keep aspect ratio
  const scale = w / vb.w;
  const h = vb.h * scale;
  // Clamp position so we can't pan outside world bounds
  const x = Math.max(WORLD_VB.x, Math.min(WORLD_VB.x + WORLD_VB.w - w, vb.x));
  const y = Math.max(WORLD_VB.y, Math.min(WORLD_VB.y + WORLD_VB.h - h, vb.y));
  return { x, y, w, h };
}

function vbString(vb: VB): string {
  return `${vb.x} ${vb.y} ${vb.w} ${vb.h}`;
}

// ─── Types ─────────────────────────────────────────────────────────────────────

export type CityPin = {
  city: string;
  count: number;
};

function pinRadius(count: number): number {
  // Log-scaled so big boosted counts don't saturate at the cap. Small,
  // readable pins that still differentiate by magnitude.
  //   1 -> ~2.5  |  100 -> ~3.4  |  1k -> ~5  |  10k -> ~7  |  30k+ -> 8
  return Math.max(2.5, Math.min(8, Math.log10(count + 1) * 1.7));
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function WorldMap({ cities }: { cities: CityPin[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [vb, setVb] = useState<VB>(DEFAULT_VB);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    startVb: VB;
  }>({ active: false, startX: 0, startY: 0, startVb: DEFAULT_VB });
  const pinchRef = useRef<{ dist: number; centerX: number; centerY: number } | null>(
    null
  );

  // ── Coordinate conversion: SVG element pixels → world SVG coordinates ──────
  const clientToSVGPoint = useCallback(
    (clientX: number, clientY: number): { wx: number; wy: number } | null => {
      const svg = svgRef.current;
      if (!svg) return null;
      const rect = svg.getBoundingClientRect();
      // Fraction of the element
      const fx = (clientX - rect.left) / rect.width;
      const fy = (clientY - rect.top) / rect.height;
      return {
        wx: vb.x + fx * vb.w,
        wy: vb.y + fy * vb.h,
      };
    },
    [vb]
  );

  // ── Zoom to/from a world point ─────────────────────────────────────────────
  const zoomAtPoint = useCallback(
    (factor: number, worldX: number, worldY: number) => {
      setVb((prev) => {
        const newW = prev.w * factor;
        const newH = prev.h * factor;
        // Keep (worldX, worldY) fixed under cursor
        const fx = (worldX - prev.x) / prev.w;
        const fy = (worldY - prev.y) / prev.h;
        const newX = worldX - fx * newW;
        const newY = worldY - fy * newH;
        return clampViewBox({ x: newX, y: newY, w: newW, h: newH });
      });
    },
    []
  );

  // ── Mouse events ───────────────────────────────────────────────────────────
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      e.preventDefault();
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startY: e.clientY,
        startVb: vb,
      };
    },
    [vb]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const drag = dragRef.current;
      if (!drag.active) return;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = drag.startVb.w / rect.width;
      const scaleY = drag.startVb.h / rect.height;
      const dx = (e.clientX - drag.startX) * scaleX;
      const dy = (e.clientY - drag.startY) * scaleY;
      setVb(
        clampViewBox({
          x: drag.startVb.x - dx,
          y: drag.startVb.y - dy,
          w: drag.startVb.w,
          h: drag.startVb.h,
        })
      );
    };

    const onMouseUp = () => {
      dragRef.current.active = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // ── Wheel zoom ─────────────────────────────────────────────────────────────
  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGSVGElement>) => {
      e.preventDefault();
      const pt = clientToSVGPoint(e.clientX, e.clientY);
      if (!pt) return;
      // deltaY > 0 = zoom out, < 0 = zoom in
      const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
      zoomAtPoint(factor, pt.wx, pt.wy);
    },
    [clientToSVGPoint, zoomAtPoint]
  );

  // ── Touch pinch-zoom ───────────────────────────────────────────────────────
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
        const centerClientX = (t0.clientX + t1.clientX) / 2;
        const centerClientY = (t0.clientY + t1.clientY) / 2;
        pinchRef.current = { dist, centerX: centerClientX, centerY: centerClientY };
      } else if (e.touches.length === 1) {
        const t = e.touches[0];
        dragRef.current = {
          active: true,
          startX: t.clientX,
          startY: t.clientY,
          startVb: vb,
        };
      }
    },
    [vb]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const t0 = e.touches[0];
        const t1 = e.touches[1];
        const newDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
        const factor = pinchRef.current.dist / newDist;
        const cx = pinchRef.current.centerX;
        const cy = pinchRef.current.centerY;
        const pt = clientToSVGPoint(cx, cy);
        if (pt) {
          zoomAtPoint(factor, pt.wx, pt.wy);
        }
        pinchRef.current.dist = newDist;
      } else if (e.touches.length === 1) {
        const drag = dragRef.current;
        if (!drag.active) return;
        const t = e.touches[0];
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const scaleX = drag.startVb.w / rect.width;
        const scaleY = drag.startVb.h / rect.height;
        const dx = (t.clientX - drag.startX) * scaleX;
        const dy = (t.clientY - drag.startY) * scaleY;
        setVb(
          clampViewBox({
            x: drag.startVb.x - dx,
            y: drag.startVb.y - dy,
            w: drag.startVb.w,
            h: drag.startVb.h,
          })
        );
      }
    },
    [clientToSVGPoint, zoomAtPoint]
  );

  const handleTouchEnd = useCallback(() => {
    pinchRef.current = null;
    dragRef.current.active = false;
  }, []);

  // ── Button zoom ────────────────────────────────────────────────────────────
  const zoomIn = useCallback(() => {
    setVb((prev) => {
      const cx = prev.x + prev.w / 2;
      const cy = prev.y + prev.h / 2;
      const factor = 1 / 1.4;
      const newW = prev.w * factor;
      const newH = prev.h * factor;
      return clampViewBox({
        x: cx - newW / 2,
        y: cy - newH / 2,
        w: newW,
        h: newH,
      });
    });
  }, []);

  const zoomOut = useCallback(() => {
    setVb((prev) => {
      const cx = prev.x + prev.w / 2;
      const cy = prev.y + prev.h / 2;
      const factor = 1.4;
      const newW = prev.w * factor;
      const newH = prev.h * factor;
      return clampViewBox({
        x: cx - newW / 2,
        y: cy - newH / 2,
        w: newW,
        h: newH,
      });
    });
  }, []);

  const resetView = useCallback(() => {
    setVb(DEFAULT_VB);
  }, []);

  // ── City pins ──────────────────────────────────────────────────────────────
  const pins = cities
    .map(({ city, count }) => {
      const key = cityKey(city);
      const coords = CITY_COORDS[key];
      if (!coords) return null;
      const { x, y } = projectToWorld(coords.lat, coords.lng);
      return { key, displayCity: city, count, x, y, r: pinRadius(count) };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const total = pins.reduce((acc, p) => acc + p.count, 0);
  const cityCount = pins.length;

  const topPins = [...pins].sort((a, b) => b.count - a.count).slice(0, 8);
  const labeledSet = new Set(topPins.map((p) => p.key));
  const renderPins = [...pins].sort((a, b) => b.r - a.r);

  // Scale pin radius and font by current zoom level (vb.w relative to default)
  // When zoomed in, pins should appear larger in world space
  const zoomScale = DEFAULT_VB.w / vb.w;
  // We want pins to appear ~constant in screen size, so scale inversely
  // but with a min/max to keep them visible
  const pinScaleFactor = Math.max(0.4, Math.min(2.5, 1 / Math.sqrt(zoomScale)));

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

      <div className="relative mt-5 overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50/40">
        {/* Zoom controls */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
          <button
            onClick={zoomIn}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white/90 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white/90 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={resetView}
            className="flex h-7 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white/90 text-xs text-zinc-500 shadow-sm backdrop-blur-sm hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            aria-label="Reset view"
            title="Reset to Europe view"
          >
            ↺
          </button>
        </div>

        {/* Hint */}
        <div className="absolute bottom-2 left-3 z-10 text-[10px] text-zinc-400 select-none pointer-events-none">
          Drag to pan · Scroll to zoom
        </div>

        <svg
          ref={svgRef}
          viewBox={vbString(vb)}
          className="block w-full h-auto cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: "none" }}
          aria-label="World map showing diaspora voter commitment locations"
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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

          {/* Ocean background */}
          <rect x={0} y={0} width={VIEW_W} height={VIEW_H} fill="#e8f4fd" />

          {/* World country borders — Natural Earth 110m */}
          <g fill="#f4f4f5" stroke="#a1a1aa" strokeWidth="0.4" strokeLinejoin="round">
            {WORLD_PATHS.map((c) => (
              <path key={c.iso + "_" + c.name} d={c.d}>
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
                r={p.r * 3.5 * pinScaleFactor}
                fill="url(#glow-grad)"
              />
            ))}

          {/* Pins */}
          {renderPins.map((p) => {
            const scaledR = p.r * pinScaleFactor;
            return (
              <g key={p.key}>
                <title>{`${p.displayCity} — ${p.count} commitment${
                  p.count !== 1 ? "s" : ""
                }`}</title>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={scaledR}
                  fill="#6366f1"
                  stroke="#ffffff"
                  strokeWidth={1.5 * pinScaleFactor}
                  filter="url(#pin-shadow)"
                />
                {scaledR >= 10 && (
                  <text
                    x={p.x}
                    y={p.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={Math.max(9, scaledR * 0.7)}
                    fontWeight="600"
                    fill="white"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {p.count}
                  </text>
                )}
              </g>
            );
          })}

          {/* Labels for top 8 cities */}
          {topPins.map((p) => {
            const scaledR = p.r * pinScaleFactor;
            const offsetY = scaledR + 14 * pinScaleFactor;
            return (
              <g key={`lbl-${p.key}`} style={{ pointerEvents: "none" }}>
                <text
                  x={p.x}
                  y={p.y + offsetY}
                  textAnchor="middle"
                  fontSize={11 * pinScaleFactor}
                  fontWeight="600"
                  fill="#18181b"
                  stroke="#ffffff"
                  strokeWidth={3 * pinScaleFactor}
                  paintOrder="stroke"
                >
                  {cityKey(p.displayCity)}
                </text>
              </g>
            );
          })}

          {/* Unlabeled count indicator */}
          {pins.length > labeledSet.size && (
            <text
              x={vb.x + vb.w - 8}
              y={vb.y + vb.h - 8}
              textAnchor="end"
              fontSize={10 * pinScaleFactor}
              fill="#71717a"
              style={{ pointerEvents: "none" }}
            >
              +{pins.length - labeledSet.size} more{" "}
              {pins.length - labeledSet.size === 1 ? "city" : "cities"}
            </text>
          )}
        </svg>
      </div>
    </section>
  );
}
