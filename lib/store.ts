import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Commit } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "commits.json");

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function readCommits(): Promise<Commit[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as Commit[];
}

export async function writeCommits(commits: Commit[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(commits, null, 2), "utf8");
}

export async function addCommit(
  input: Omit<Commit, "id" | "createdAt" | "progress">,
): Promise<Commit> {
  const commits = await readCommits();
  const commit: Commit = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    progress: { registered: false, planned: false, voted: false },
  };
  commits.push(commit);
  await writeCommits(commits);
  return commit;
}

export async function getCommit(id: string): Promise<Commit | undefined> {
  const commits = await readCommits();
  return commits.find((c) => c.id === id);
}

export async function updateProgress(
  id: string,
  progress: Partial<Commit["progress"]>,
): Promise<Commit | undefined> {
  const commits = await readCommits();
  const idx = commits.findIndex((c) => c.id === id);
  if (idx === -1) return undefined;
  commits[idx].progress = { ...commits[idx].progress, ...progress };
  await writeCommits(commits);
  return commits[idx];
}
