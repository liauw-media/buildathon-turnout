"use client";

import { useState, useRef, useEffect } from "react";
import { setPersona, clearPersona } from "@/app/actions/persona";
import type { PersonaMeta } from "@/lib/personas";

const ACCENT_DOT: Record<PersonaMeta["accent"], string> = {
  rose: "bg-rose-500",
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
  zinc: "bg-zinc-400",
  indigo: "bg-indigo-500",
};

const ACCENT_BADGE: Record<PersonaMeta["accent"], string> = {
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  sky: "bg-sky-50 text-sky-700 border-sky-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  zinc: "bg-zinc-100 text-zinc-600 border-zinc-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export type EnrichedPersona = PersonaMeta & {
  flag: string;
  firstName: string;
};

type Props = {
  personas: EnrichedPersona[];
  activeCommitId: string | undefined;
};

export default function PersonaSwitcher({ personas, activeCommitId }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePersona = personas.find((p) => p.commitId === activeCommitId);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
          activePersona
            ? `${ACCENT_BADGE[activePersona.accent]} hover:opacity-80`
            : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100",
        ].join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {activePersona ? (
          <>
            <span
              className={`h-2 w-2 rounded-full ${ACCENT_DOT[activePersona.accent]} flex-shrink-0`}
            />
            <span className="max-w-[120px] truncate">
              {activePersona.flag} {activePersona.firstName}
            </span>
          </>
        ) : (
          <>
            <span className="h-2 w-2 rounded-full bg-zinc-300 flex-shrink-0" />
            Pick a persona
          </>
        )}
        <svg
          className={`h-3 w-3 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-72 rounded-lg border border-zinc-200 bg-white shadow-lg z-50">
          <div className="px-3 py-2 border-b border-zinc-100">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Demo personas
            </p>
          </div>

          <ul role="listbox" className="max-h-80 overflow-y-auto py-1">
            {personas.map((persona) => {
              const isActive = persona.commitId === activeCommitId;
              return (
                <li key={persona.commitId} role="option" aria-selected={isActive}>
                  <form
                    action={async () => {
                      setOpen(false);
                      await setPersona(persona.commitId);
                    }}
                  >
                    <button
                      type="submit"
                      className={[
                        "flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-zinc-50",
                        isActive ? "bg-zinc-50" : "",
                      ].join(" ")}
                    >
                      {/* Accent dot + flag */}
                      <span className="flex-shrink-0 mt-0.5 flex items-center gap-1">
                        <span
                          className={`h-2 w-2 rounded-full ${ACCENT_DOT[persona.accent]}`}
                        />
                        <span className="text-base leading-none">{persona.flag}</span>
                      </span>

                      {/* Text */}
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-zinc-900 truncate">
                          {persona.displayName}
                          {isActive && (
                            <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                              active
                            </span>
                          )}
                        </span>
                        <span className="block text-xs text-zinc-500 mt-0.5 leading-snug">
                          {persona.blurb}
                        </span>
                      </span>
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>

          {/* Clear / divider */}
          <div className="border-t border-zinc-100 py-1">
            <form
              action={async () => {
                setOpen(false);
                await clearPersona();
              }}
            >
              <button
                type="submit"
                className="flex w-full items-center gap-2 px-3 py-2 text-xs text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700 transition-colors"
              >
                <svg
                  className="h-3.5 w-3.5 flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 8h12M8 2l6 6-6 6" />
                </svg>
                Clear persona · return to demo home
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
