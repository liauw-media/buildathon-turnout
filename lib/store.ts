import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Commit } from "./types";
import { hasSupabaseFull } from "./supabase/env";
import { getSupabaseAdmin } from "./supabase/server";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "commits.json");

// ── Dual-mode: Supabase when configured, JSON file otherwise ──────────

type DbRow = {
  id: string;
  name: string;
  email: string;
  city: string;
  residence_country: string | null;
  country: string;
  created_at: string;
  progress: Commit["progress"];
};

function rowToCommit(r: DbRow): Commit {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    city: r.city,
    residenceCountry: r.residence_country ?? "",
    country: r.country,
    createdAt: r.created_at,
    progress: r.progress ?? { registered: false, planned: false, voted: false },
  };
}

// ── JSON-file fallback helpers ────────────────────────────────────────

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

async function readJson(): Promise<Commit[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as Commit[];
}

async function writeJson(commits: Commit[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(commits, null, 2), "utf8");
}

// ── Public API (dual-mode) ────────────────────────────────────────────

export async function readCommits(): Promise<Commit[]> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin
        .from("commits")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToCommit);
    }
  }
  return readJson();
}

export async function writeCommits(commits: Commit[]): Promise<void> {
  // No-op in Supabase mode: writes go through addCommit / updateProgress.
  if (hasSupabaseFull()) return;
  await writeJson(commits);
}

export async function addCommit(
  input: Omit<Commit, "id" | "createdAt" | "progress">,
): Promise<Commit> {
  const commit: Commit = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    progress: { registered: false, planned: false, voted: false },
  };

  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin.from("commits").insert({
        id: commit.id,
        name: commit.name,
        email: commit.email,
        city: commit.city,
        residence_country: commit.residenceCountry,
        country: commit.country,
        created_at: commit.createdAt,
        progress: commit.progress,
      });
      if (error) throw error;
      return commit;
    }
  }

  const commits = await readJson();
  commits.push(commit);
  await writeJson(commits);
  return commit;
}

export async function getCommit(id: string): Promise<Commit | undefined> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin
        .from("commits")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      return data ? rowToCommit(data as DbRow) : undefined;
    }
  }
  const commits = await readJson();
  return commits.find((c) => c.id === id);
}

export async function updateProgress(
  id: string,
  progress: Partial<Commit["progress"]>,
): Promise<Commit | undefined> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const current = await getCommit(id);
      if (!current) return undefined;
      const next = { ...current.progress, ...progress };
      const { error } = await admin
        .from("commits")
        .update({ progress: next })
        .eq("id", id);
      if (error) throw error;
      return { ...current, progress: next };
    }
  }
  const commits = await readJson();
  const idx = commits.findIndex((c) => c.id === id);
  if (idx === -1) return undefined;
  commits[idx].progress = { ...commits[idx].progress, ...progress };
  await writeJson(commits);
  return commits[idx];
}
