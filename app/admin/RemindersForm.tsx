"use client";

import { useState, useTransition } from "react";
import { saveReminderSettings } from "./actions";
import type { ReminderSettings } from "@/lib/reminder-settings-store";

type Props = {
  settings: ReminderSettings;
  previewCountry: string;
  previewFlag: string;
  previewDeadline: string | null;
  previewElectionDate: string | null;
};

function parseInts(raw: string): number[] {
  return raw
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n) && n >= 0);
}

function offsetDates(baseDate: string, offsets: number[]): string[] {
  const base = new Date(baseDate);
  return offsets
    .map((days) => {
      const d = new Date(base);
      d.setDate(d.getDate() - days);
      return d.toISOString().slice(0, 10);
    })
    .sort();
}

function PreviewRow({
  label,
  baseDate,
  offsets,
}: {
  label: string;
  baseDate: string | null;
  offsets: number[];
}) {
  if (!baseDate) return null;
  const dates = offsetDates(baseDate, offsets);
  if (dates.length === 0) return null;
  return (
    <div className="text-xs text-zinc-600">
      <span className="font-medium">{label} ({baseDate}):</span>{" "}
      reminders on{" "}
      <span className="font-mono">{dates.join(", ")}</span>
    </div>
  );
}

export function RemindersForm({
  settings,
  previewCountry,
  previewFlag,
  previewDeadline,
  previewElectionDate,
}: Props) {
  const [emailReg, setEmailReg] = useState(
    settings.emailDaysBeforeRegDeadline.join(", "),
  );
  const [smsReg, setSmsReg] = useState(
    settings.smsDaysBeforeRegDeadline.join(", "),
  );
  const [emailElection, setEmailElection] = useState(
    settings.emailDaysBeforeElection.join(", "),
  );
  const [smsElection, setSmsElection] = useState(
    settings.smsDaysBeforeElection.join(", "),
  );
  const [isPending, startTransition] = useTransition();
  const [localSuccess, setLocalSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLocalSuccess(false);
    const fd = new FormData();
    fd.set("emailDaysBeforeRegDeadline", emailReg);
    fd.set("smsDaysBeforeRegDeadline", smsReg);
    fd.set("emailDaysBeforeElection", emailElection);
    fd.set("smsDaysBeforeElection", smsElection);
    startTransition(async () => {
      await saveReminderSettings(fd);
      setLocalSuccess(true);
    });
  }

  const previewEmailRegOffsets = parseInts(emailReg);
  const previewSmsRegOffsets = parseInts(smsReg);
  const previewEmailElectionOffsets = parseInts(emailElection);
  const previewSmsElectionOffsets = parseInts(smsElection);

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <fieldset>
          <legend className="text-sm font-semibold text-zinc-800 mb-3">
            Registration deadline reminders
          </legend>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1">
                Email — days before deadline
              </label>
              <input
                type="text"
                value={emailReg}
                onChange={(e) => setEmailReg(e.target.value)}
                placeholder="14, 3"
                className="w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="mt-1 text-xs text-zinc-400">
                Comma-separated days (e.g. "14, 3" = 2 weeks before + 3 days before)
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1">
                SMS — days before deadline
              </label>
              <input
                type="text"
                value={smsReg}
                onChange={(e) => setSmsReg(e.target.value)}
                placeholder="3"
                className="w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </fieldset>

        <div className="border-t border-zinc-100 pt-6">
          <fieldset>
            <legend className="text-sm font-semibold text-zinc-800 mb-3">
              Election day reminders
            </legend>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Email — days before election day
                </label>
                <input
                  type="text"
                  value={emailElection}
                  onChange={(e) => setEmailElection(e.target.value)}
                  placeholder="7, 1"
                  className="w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="mt-1 text-xs text-zinc-400">
                  Use 0 for election day itself
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  SMS — days before election day
                </label>
                <input
                  type="text"
                  value={smsElection}
                  onChange={(e) => setSmsElection(e.target.value)}
                  placeholder="1, 0"
                  className="w-full rounded-md border border-zinc-300 px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60 transition-colors"
          >
            {isPending ? "Saving…" : "Save settings"}
          </button>
          {localSuccess && (
            <span className="text-sm text-emerald-600 font-medium">Saved!</span>
          )}
        </div>
      </form>

      {/* Preview section */}
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="text-sm font-semibold text-zinc-800 mb-3">
          Preview — {previewFlag} {previewCountry}
        </h3>
        <div className="space-y-2">
          <PreviewRow
            label="Email (reg. deadline)"
            baseDate={previewDeadline}
            offsets={previewEmailRegOffsets}
          />
          <PreviewRow
            label="SMS (reg. deadline)"
            baseDate={previewDeadline}
            offsets={previewSmsRegOffsets}
          />
          <PreviewRow
            label="Email (election day)"
            baseDate={previewElectionDate}
            offsets={previewEmailElectionOffsets}
          />
          <PreviewRow
            label="SMS (election day)"
            baseDate={previewElectionDate}
            offsets={previewSmsElectionOffsets}
          />
          {!previewDeadline && !previewElectionDate && (
            <p className="text-xs text-zinc-400">No upcoming dates available for preview.</p>
          )}
        </div>
      </div>
    </div>
  );
}
