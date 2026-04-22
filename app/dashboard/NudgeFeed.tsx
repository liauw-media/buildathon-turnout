"use client";

import { useState, useEffect } from "react";
import type { Message } from "@/lib/messages";
import { formatDate } from "@/lib/timeline";

type Props = {
  sent: Message[];
  scheduled: Message[];
};

export default function NudgeFeed({ sent, scheduled }: Props) {
  const [selected, setSelected] = useState<Message | null>(null);

  // Close on Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Column
        title="Latest messages"
        caption={sent.length ? `${sent.length} sent` : "Nothing sent yet"}
        items={sent}
        onSelect={setSelected}
        emptyHint="Your first reminder will appear here once it's sent."
      />
      <Column
        title="Upcoming nudges"
        caption={scheduled.length ? `${scheduled.length} scheduled` : "All caught up"}
        items={scheduled}
        onSelect={setSelected}
        emptyHint="No more reminders scheduled."
      />
      {selected && <MessageModal message={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function Column({
  title,
  caption,
  items,
  onSelect,
  emptyHint,
}: {
  title: string;
  caption: string;
  items: Message[];
  onSelect: (m: Message) => void;
  emptyHint: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs text-zinc-500">{caption}</span>
      </div>
      {items.length === 0 ? (
        <p className="mt-3 text-sm text-zinc-500 italic">{emptyHint}</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {items.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => onSelect(m)}
                className="group flex w-full items-start gap-3 rounded-md border border-zinc-200 bg-white p-3 text-left transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <ChannelBadge channel={m.channel} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-900 group-hover:text-indigo-700">
                    {m.subject}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-zinc-500">
                    {m.status === "sent" ? "Sent" : "Scheduled"} · {formatDate(m.date)}
                  </p>
                </div>
                <span aria-hidden className="mt-1 text-xs text-zinc-400 group-hover:text-indigo-500">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChannelBadge({ channel }: { channel: Message["channel"] }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-6 items-center rounded px-1.5 text-[10px] font-semibold uppercase tracking-wide ${
        channel === "sms"
          ? "bg-amber-100 text-amber-800"
          : "bg-zinc-100 text-zinc-700"
      }`}
    >
      {channel}
    </span>
  );
}

function MessageModal({
  message,
  onClose,
}: {
  message: Message;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Nudge detail"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-xl"
      >
        <header className="flex items-start justify-between gap-3 border-b border-zinc-200 px-5 py-4">
          <div>
            <div className="flex items-center gap-2">
              <ChannelBadge channel={message.channel} />
              <span className="text-xs text-zinc-500">
                {message.status === "sent" ? "Sent" : "Scheduled for"}{" "}
                {formatDate(message.date)}
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-zinc-900">
              {message.subject}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">
              <span className="font-medium text-zinc-700">From:</span> {message.from}
            </p>
            <p className="text-xs text-zinc-500">
              <span className="font-medium text-zinc-700">To:</span> {message.to}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            ✕
          </button>
        </header>
        <div className="max-h-[60vh] overflow-y-auto px-5 py-4">
          {message.channel === "sms" ? (
            <div className="mx-auto max-w-xs rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-900">
              <p className="mb-2 text-[10px] uppercase tracking-wide text-zinc-500">
                TURNOUT SMS
              </p>
              <div className="whitespace-pre-wrap rounded-2xl rounded-bl-md border border-zinc-200 bg-white p-3">
                {message.body}
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-[15px] leading-relaxed text-zinc-800">
              {message.body.split(/\n{2,}/).map((p, i) => (
                <p key={i} className="whitespace-pre-wrap">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <footer className="flex items-center justify-end gap-3 border-t border-zinc-200 bg-zinc-50 px-5 py-3 text-xs text-zinc-500">
          <span>Demo: Turnout never actually sends these — they&apos;re rendered here for preview.</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white hover:bg-zinc-700"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
