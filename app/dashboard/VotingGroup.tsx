"use client";

import { useState } from "react";
import type { MockMember } from "@/lib/matching";

// Palette of muted pleasant background colors for avatar circles
const AVATAR_PALETTE = [
  "bg-indigo-100 text-indigo-800",
  "bg-violet-100 text-violet-800",
  "bg-sky-100 text-sky-800",
  "bg-teal-100 text-teal-800",
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-800",
];

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) & 0xffff;
  }
  return h;
}

function avatarColor(initials: string): string {
  return AVATAR_PALETTE[hashName(initials) % AVATAR_PALETTE.length];
}

type Props = {
  initialMembers: MockMember[];
};

type FormState = "idle" | "open" | "submitted";

export function VotingGroup({ initialMembers }: Props) {
  const [highFived, setHighFived] = useState<Set<string>>(new Set());
  const [formState, setFormState] = useState<FormState>("idle");
  const [datetime, setDatetime] = useState("");
  const [note, setNote] = useState("");

  function toggleHighFive(id: string) {
    setHighFived((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitted");
    setDatetime("");
    setNote("");
  }

  if (initialMembers.length === 0) {
    return (
      <section className="mt-12 rounded-lg border border-zinc-200 p-5 bg-white">
        <p className="font-medium text-zinc-900">Vote together</p>
        <p className="mt-1 text-sm text-zinc-600">
          No other voters from your community have committed yet in your area.
          Share your commitment card to bring more in!
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-zinc-900">Vote together</p>
          <p className="mt-0.5 text-sm text-zinc-500">
            {initialMembers.length} people near you have committed
          </p>
        </div>
        <span className="mt-0.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
          {initialMembers.length} matched
        </span>
      </div>

      {/* Member list */}
      <ul className="mt-5 space-y-3">
        {initialMembers.map((member) => {
          const hf = highFived.has(member.id);
          return (
            <li
              key={member.id}
              className={`flex items-center gap-3 rounded-md border px-4 py-3 transition ${
                hf
                  ? "border-emerald-300 bg-emerald-50"
                  : "border-zinc-200 bg-zinc-50"
              }`}
            >
              {/* Avatar */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${avatarColor(member.initials)}`}
                aria-hidden
              >
                {member.initials}
              </div>

              {/* Name + distance */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-900">
                  {member.displayName}
                </p>
                <p className="text-xs text-zinc-500">{member.distanceMock}</p>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleHighFive(member.id)}
                  title={hf ? "Undo high five" : "High five!"}
                  className={`rounded-md border px-2.5 py-1 text-xs font-medium transition ${
                    hf
                      ? "border-emerald-400 bg-emerald-500 text-white"
                      : "border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  {hf ? "👋 High-fived!" : "👋 High five"}
                </button>
                <button
                  type="button"
                  disabled
                  title="Messaging coming soon"
                  className="cursor-not-allowed rounded-md border border-zinc-200 px-2.5 py-1 text-xs text-zinc-400"
                >
                  Message
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Suggest a time CTA */}
      <div className="mt-5 border-t border-zinc-100 pt-4">
        {formState === "submitted" ? (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Proposal shared with your group (demo). Your group will see it next
            time they log in.
          </div>
        ) : formState === "open" ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="text-sm font-medium text-zinc-900">
              Suggest a time to go together
            </p>
            <div>
              <label
                htmlFor="vg-datetime"
                className="block text-xs text-zinc-600"
              >
                Proposed date &amp; time
              </label>
              <input
                id="vg-datetime"
                type="datetime-local"
                required
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="vg-note" className="block text-xs text-zinc-600">
                Note to the group (optional)
              </label>
              <textarea
                id="vg-note"
                rows={2}
                placeholder="e.g. Meet at the consulate entrance at 10am?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Send proposal
              </button>
              <button
                type="button"
                onClick={() => setFormState("idle")}
                className="rounded-md border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:border-zinc-400"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setFormState("open")}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Suggest a time to go together
          </button>
        )}
      </div>
    </section>
  );
}
