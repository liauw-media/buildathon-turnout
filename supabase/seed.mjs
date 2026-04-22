// Seed Supabase with local JSON data (commits + topics + election_overrides).
// Usage:  node supabase/seed.mjs
// Requires these env vars (set in .env.local OR exported):
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//
// Safe to re-run — uses upsert by primary key.

import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load .env.local by hand so we don't depend on a dotenv package
async function loadEnv() {
  try {
    const raw = await fs.readFile(path.join(ROOT, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!m) continue;
      const [, k, v] = m;
      if (!process.env[k]) process.env[k] = v.replace(/^["']|["']$/g, "");
    }
  } catch {
    /* no .env.local — rely on exported env */
  }
}
await loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  console.error("Fill in .env.local first.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function loadJson(name) {
  const p = path.join(ROOT, "data", name);
  const raw = await fs.readFile(p, "utf8");
  return JSON.parse(raw);
}

async function seedCommits() {
  const commits = await loadJson("commits.json");
  const rows = commits.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    city: c.city,
    residence_country: c.residenceCountry ?? "",
    country: c.country,
    created_at: c.createdAt,
    progress: c.progress,
  }));

  const { error } = await supabase.from("commits").upsert(rows, { onConflict: "id" });
  if (error) throw error;
  console.log(`✓ seeded ${rows.length} commits`);
}

async function seedTopics() {
  const topics = await loadJson("topics.json");
  const rows = topics.map((t) => ({
    id: t.id,
    country: t.country,
    title: t.title,
    summary: t.summary,
    keywords: t.keywords ?? [],
    detail: t.detail ?? null,
    official_links: t.officialLinks ?? [],
    news_links: t.newsLinks ?? [],
    endorsements: t.endorsements ?? [],
    supporter_count: t.supporterCount ?? null,
    created_at: t.createdAt,
  }));

  const { error } = await supabase.from("topics").upsert(rows, { onConflict: "id" });
  if (error) throw error;
  console.log(`✓ seeded ${rows.length} topics`);
}

async function seedOverrides() {
  let overrides = [];
  try {
    overrides = await loadJson("elections.json");
  } catch {
    console.log("  (no election overrides to seed)");
    return;
  }
  if (!overrides.length) {
    console.log("  (no election overrides to seed)");
    return;
  }

  const rows = overrides.map((o) => ({
    country: o.country,
    next_election_label: o.nextElectionLabel ?? null,
    next_election_date: o.nextElectionDate ?? null,
    registration_deadline: o.registrationDeadline ?? null,
  }));

  const { error } = await supabase
    .from("election_overrides")
    .upsert(rows, { onConflict: "country" });
  if (error) throw error;
  console.log(`✓ seeded ${rows.length} election overrides`);
}

try {
  await seedCommits();
  await seedTopics();
  await seedOverrides();
  console.log("\nAll seed data applied. You can now start the app with `npm run dev`.");
} catch (err) {
  console.error("✗ seed failed:", err.message ?? err);
  process.exit(1);
}
