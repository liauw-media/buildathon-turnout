"use client";

import { useRef, useState } from "react";

type Props = {
  firstName: string;
  flag: string;
  countryName: string;
  city: string;
  electionLabel: string;
  electionDate: string; // pre-formatted string from server
};

function downloadSvgAsPng(svgEl: SVGSVGElement, filename: string) {
  const svgData = new XMLSerializer().serializeToString(svgEl);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, 1080, 1080);
    URL.revokeObjectURL(url);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const pngUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(pngUrl);
    }, "image/png");
  };
  img.src = url;
}

function downloadSvgRaw(svgEl: SVGSVGElement, filename: string) {
  const svgData = new XMLSerializer().serializeToString(svgEl);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function ShareCard({
  firstName,
  flag,
  countryName,
  city,
  electionLabel,
  electionDate,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [copied, setCopied] = useState(false);

  function handleDownloadPng() {
    if (svgRef.current) {
      downloadSvgAsPng(svgRef.current, `${firstName.toLowerCase()}-turnout-card.png`);
    }
  }

  function handleDownloadSvg() {
    if (svgRef.current) {
      downloadSvgRaw(svgRef.current, `${firstName.toLowerCase()}-turnout-card.svg`);
    }
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* The SVG card — rendered at full viewBox, displayed via CSS */}
      <div className="w-full max-w-[480px]">
        <svg
          ref={svgRef}
          viewBox="0 0 1080 1080"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full rounded-2xl shadow-2xl"
          style={{ aspectRatio: "1 / 1" }}
        >
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="1080" height="1080" fill="url(#bgGrad)" rx="48" ry="48" />

          {/* Subtle texture circles */}
          <circle cx="900" cy="150" r="280" fill="white" fillOpacity="0.04" />
          <circle cx="180" cy="920" r="220" fill="white" fillOpacity="0.04" />

          {/* Top label */}
          <text
            x="540"
            y="120"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="36"
            fontWeight="500"
            fill="white"
            fillOpacity="0.7"
            letterSpacing="4"
          >
            TURNOUT
          </text>

          {/* Flag emoji */}
          <text
            x="540"
            y="400"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="220"
          >
            {flag}
          </text>

          {/* First name */}
          <text
            x="540"
            y="510"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="96"
            fontWeight="800"
            fill="white"
          >
            {firstName}
          </text>

          {/* Diaspora + city */}
          <text
            x="540"
            y="590"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="38"
            fill="white"
            fillOpacity="0.8"
          >
            {countryName} diaspora · {city}
          </text>

          {/* Divider */}
          <line
            x1="200"
            y1="640"
            x2="880"
            y2="640"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2"
          />

          {/* Headline */}
          <text
            x="540"
            y="720"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="58"
            fontWeight="700"
            fill="white"
          >
            I&apos;m committing to vote.
          </text>

          {/* Election subtext line 1 */}
          <text
            x="540"
            y="790"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="34"
            fill="white"
            fillOpacity="0.75"
          >
            Voting from abroad in {electionLabel},
          </text>

          {/* Election subtext line 2 */}
          <text
            x="540"
            y="836"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="34"
            fill="white"
            fillOpacity="0.75"
          >
            {electionDate}
          </text>

          {/* Footer */}
          <text
            x="540"
            y="1010"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="28"
            fill="white"
            fillOpacity="0.45"
            letterSpacing="1"
          >
            turnout.vote
          </text>
        </svg>
      </div>

      {/* Download + share buttons */}
      <div className="flex w-full max-w-[480px] flex-col gap-3">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleDownloadPng}
            className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Download card (PNG)
          </button>
          <button
            type="button"
            onClick={handleDownloadSvg}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:border-zinc-400 transition"
          >
            SVG
          </button>
        </div>

        <button
          type="button"
          onClick={handleCopyLink}
          className={`w-full rounded-lg border px-4 py-3 text-sm font-medium transition ${
            copied
              ? "border-emerald-400 bg-emerald-50 text-emerald-800"
              : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
          }`}
        >
          {copied ? "Copied!" : "Copy share link"}
        </button>
      </div>

      {/* Social placeholders */}
      <div className="w-full max-w-[480px]">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-400">
          Share again on social
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="flex-1 cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400"
          >
            𝕏 Twitter/X
          </button>
          <button
            type="button"
            disabled
            className="flex-1 cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400"
          >
            WhatsApp
          </button>
          <button
            type="button"
            disabled
            className="flex-1 cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
