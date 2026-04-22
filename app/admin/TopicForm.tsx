"use client";

import { useState } from "react";
import type { Topic } from "@/lib/topics";
import type { CountryRules } from "@/lib/types";
import { createTopic, editTopic } from "./actions";

type Props = {
  countries: CountryRules[];
  topic?: Topic; // if provided, we're editing
  onCancel?: () => void;
};

export function TopicForm({ countries, topic, onCancel }: Props) {
  const isEdit = Boolean(topic);
  const [keywords, setKeywords] = useState(topic?.keywords.join(", ") ?? "");

  const action = isEdit ? editTopic : createTopic;

  return (
    <form action={action} className="space-y-4 rounded-lg border border-zinc-200 p-5">
      <h3 className="font-medium text-zinc-900">{isEdit ? "Edit topic" : "New topic"}</h3>

      {isEdit && <input type="hidden" name="id" value={topic!.id} />}

      <div>
        <label className="block text-sm font-medium text-zinc-800">
          Country <span className="text-rose-600">*</span>
        </label>
        <select
          name="country"
          defaultValue={topic?.country ?? ""}
          required
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        >
          <option value="" disabled>
            Select country…
          </option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-800">
          Title <span className="text-rose-600">*</span>
        </label>
        <input
          name="title"
          type="text"
          required
          defaultValue={topic?.title ?? ""}
          placeholder="e.g. Judicial Reform"
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-800">
          Summary <span className="text-rose-600">*</span>
        </label>
        <textarea
          name="summary"
          required
          defaultValue={topic?.summary ?? ""}
          rows={3}
          placeholder="1-3 sentences describing the issue factually and non-partisanly."
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-800">Keywords</label>
        <input
          name="keywords"
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Comma-separated, e.g. EU, reform, judiciary"
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        />
        <p className="mt-1 text-xs text-zinc-500">Separate with commas.</p>
        {keywords.trim() && (
          <div className="mt-2 flex flex-wrap gap-1">
            {keywords
              .split(",")
              .map((k) => k.trim())
              .filter(Boolean)
              .map((k) => (
                <span
                  key={k}
                  className="inline-block rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {k}
                </span>
              ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {isEdit ? "Save changes" : "Create topic"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
