"use client";

import { useTransition } from "react";
import { toggleProgress } from "./actions";
import type { Commit } from "@/lib/types";

type Props = {
  keyName: keyof Commit["progress"];
  label: string;
  detail?: string;
  done: boolean;
};

export function ProgressToggle({ keyName, label, detail, done }: Props) {
  const [pending, start] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => start(() => toggleProgress(keyName, !done))}
      className={`flex w-full items-start gap-3 rounded-md border p-4 text-left transition ${
        done
          ? "border-emerald-300 bg-emerald-50"
          : "border-zinc-200 bg-white hover:border-zinc-300"
      } ${pending ? "opacity-60" : ""}`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          done ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300"
        }`}
        aria-hidden
      >
        {done ? "✓" : ""}
      </span>
      <span className="min-w-0">
        <span
          className={`block text-sm font-medium ${
            done ? "text-emerald-800 line-through" : "text-zinc-900"
          }`}
        >
          {label}
        </span>
        {detail && <span className="mt-0.5 block text-xs text-zinc-600">{detail}</span>}
      </span>
    </button>
  );
}
