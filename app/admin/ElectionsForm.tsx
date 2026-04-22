"use client";

import { useState } from "react";
import type { CountryRules } from "@/lib/types";
import type { ElectionOverride } from "@/lib/topics";
import { saveElection } from "./actions";

type Props = {
  countries: CountryRules[];
  overrides: ElectionOverride[];
};

export function ElectionsForm({ countries, overrides }: Props) {
  const [selected, setSelected] = useState<string>(countries[0]?.code ?? "");

  const base = countries.find((c) => c.code === selected);
  const override = overrides.find((o) => o.country === selected);

  const effectiveLabel = override?.nextElectionLabel ?? base?.nextElection.label ?? "";
  const effectiveDate = override?.nextElectionDate ?? base?.nextElection.date ?? "";
  const effectiveDeadline = override?.registrationDeadline ?? base?.registrationDeadline ?? "";

  return (
    <div className="space-y-6">
      {/* Country picker */}
      <div>
        <label className="block text-sm font-medium text-zinc-800">Country</label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>

      {base && (
        <form action={saveElection} className="space-y-4">
          <input type="hidden" name="country" value={selected} />

          <div>
            <label className="block text-sm font-medium text-zinc-800">Election label</label>
            <input
              name="nextElectionLabel"
              type="text"
              defaultValue={effectiveLabel}
              key={`${selected}-label`}
              placeholder={base.nextElection.label}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <p className="mt-1 text-xs text-zinc-500">
              Default: <span className="font-mono">{base.nextElection.label}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-800">Election date</label>
            <input
              name="nextElectionDate"
              type="date"
              defaultValue={effectiveDate}
              key={`${selected}-date`}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <p className="mt-1 text-xs text-zinc-500">
              Default: <span className="font-mono">{base.nextElection.date}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-800">
              Registration deadline
            </label>
            <input
              name="registrationDeadline"
              type="date"
              defaultValue={effectiveDeadline}
              key={`${selected}-deadline`}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <p className="mt-1 text-xs text-zinc-500">
              Default: <span className="font-mono">{base.registrationDeadline}</span>
            </p>
          </div>

          {override && (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              This country has active overrides. Saving will update them.
            </div>
          )}

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Save changes
          </button>
        </form>
      )}
    </div>
  );
}
