"use client";

import { useState } from "react";
import type { Topic } from "@/lib/topics";
import type { CountryRules } from "@/lib/types";
import { TopicForm } from "./TopicForm";
import { removeTopic } from "./actions";

type Props = {
  topics: Topic[];
  countries: CountryRules[];
};

export function TopicsTable({ topics, countries }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  const countryMap = new Map(countries.map((c) => [c.code, c]));

  return (
    <div className="space-y-6">
      {/* Create button */}
      {!showCreate && (
        <button
          type="button"
          onClick={() => {
            setShowCreate(true);
            setEditingId(null);
          }}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          + New topic
        </button>
      )}

      {showCreate && (
        <TopicForm
          countries={countries}
          onCancel={() => setShowCreate(false)}
        />
      )}

      {/* Topic rows */}
      {topics.length === 0 && (
        <p className="text-sm text-zinc-500">No topics yet. Create one above.</p>
      )}

      <div className="space-y-3">
        {topics.map((topic) => {
          const country = countryMap.get(topic.country);

          if (editingId === topic.id) {
            return (
              <TopicForm
                key={topic.id}
                countries={countries}
                topic={topic}
                onCancel={() => setEditingId(null)}
              />
            );
          }

          return (
            <div
              key={topic.id}
              className="rounded-lg border border-zinc-200 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">
                      {country?.flag ?? ""} {country?.name ?? topic.country}
                    </span>
                  </div>
                  <h3 className="mt-0.5 font-medium text-zinc-900">{topic.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 line-clamp-2">{topic.summary}</p>
                  {topic.keywords.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {topic.keywords.map((k) => (
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
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(topic.id);
                      setShowCreate(false);
                    }}
                    className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
                  >
                    Edit
                  </button>
                  <form action={removeTopic}>
                    <input type="hidden" name="id" value={topic.id} />
                    <input type="hidden" name="country" value={topic.country} />
                    <button
                      type="submit"
                      className="rounded-md border border-rose-300 bg-white px-3 py-1.5 text-sm text-rose-700 hover:bg-rose-50"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
