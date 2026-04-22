import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { hasSupabaseFull } from "./supabase/env";
import { getSupabaseAdmin } from "./supabase/server";

export type Pledge = {
  id: string;
  commitId: string;
  country: string;
  electionDate: string; // ISO date
  electionLabel: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "pledges.json");

// ── Supabase row ↔ Pledge mapper ───────────────────────────────────────

type Row = {
  id: string;
  commit_id: string;
  country: string;
  election_date: string;
  election_label: string;
  created_at: string;
};

function rowToPledge(r: Row): Pledge {
  return {
    id: r.id,
    commitId: r.commit_id,
    country: r.country,
    electionDate: r.election_date,
    electionLabel: r.election_label,
    createdAt: r.created_at,
  };
}

// ── JSON fallback helpers ──────────────────────────────────────────────

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

async function readJson(): Promise<Pledge[]> {
  await ensureFile();
  return JSON.parse(await fs.readFile(DATA_FILE, "utf8")) as Pledge[];
}

async function writeJson(pledges: Pledge[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(pledges, null, 2), "utf8");
}

// ── Public API ─────────────────────────────────────────────────────────

export async function readPledgesFor(commitId: string): Promise<Pledge[]> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin
        .from("election_pledges")
        .select("*")
        .eq("commit_id", commitId)
        .order("election_date", { ascending: true });
      if (error) throw error;
      return (data ?? []).map(rowToPledge);
    }
  }
  const all = await readJson();
  return all
    .filter((p) => p.commitId === commitId)
    .sort((a, b) => a.electionDate.localeCompare(b.electionDate));
}

export async function readAllPledges(): Promise<Pledge[]> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin.from("election_pledges").select("*");
      if (error) throw error;
      return (data ?? []).map(rowToPledge);
    }
  }
  return readJson();
}

export async function hasPledged(
  commitId: string,
  country: string,
  electionDate: string,
): Promise<boolean> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data } = await admin
        .from("election_pledges")
        .select("id")
        .eq("commit_id", commitId)
        .eq("country", country)
        .eq("election_date", electionDate)
        .maybeSingle();
      return Boolean(data);
    }
  }
  const all = await readJson();
  return all.some(
    (p) =>
      p.commitId === commitId &&
      p.country === country &&
      p.electionDate === electionDate,
  );
}

export async function addPledge(
  commitId: string,
  country: string,
  electionDate: string,
  electionLabel: string,
): Promise<Pledge> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { data, error } = await admin
        .from("election_pledges")
        .upsert(
          {
            commit_id: commitId,
            country,
            election_date: electionDate,
            election_label: electionLabel,
          },
          { onConflict: "commit_id,country,election_date" },
        )
        .select("*")
        .single();
      if (error) throw error;
      return rowToPledge(data as Row);
    }
  }

  const all = await readJson();
  const existing = all.find(
    (p) =>
      p.commitId === commitId &&
      p.country === country &&
      p.electionDate === electionDate,
  );
  if (existing) return existing;
  const pledge: Pledge = {
    id: randomUUID(),
    commitId,
    country,
    electionDate,
    electionLabel,
    createdAt: new Date().toISOString(),
  };
  all.push(pledge);
  await writeJson(all);
  return pledge;
}

export async function removePledge(
  commitId: string,
  country: string,
  electionDate: string,
): Promise<void> {
  if (hasSupabaseFull()) {
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin
        .from("election_pledges")
        .delete()
        .eq("commit_id", commitId)
        .eq("country", country)
        .eq("election_date", electionDate);
      if (error) throw error;
      return;
    }
  }
  const all = await readJson();
  const next = all.filter(
    (p) =>
      !(
        p.commitId === commitId &&
        p.country === country &&
        p.electionDate === electionDate
      ),
  );
  await writeJson(next);
}
