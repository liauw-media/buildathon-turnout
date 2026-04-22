import { promises as fs } from "node:fs";
import path from "node:path";
import type { CountryRules } from "./types";
import type { ElectionOverride } from "./topics";
import { COUNTRIES, getCountry } from "./countries";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "elections.json");

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function readOverrides(): Promise<ElectionOverride[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as ElectionOverride[];
}

export async function writeOverrides(overrides: ElectionOverride[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(overrides, null, 2), "utf8");
}

export async function getOverride(country: string): Promise<ElectionOverride | undefined> {
  const overrides = await readOverrides();
  return overrides.find((o) => o.country === country);
}

export async function upsertOverride(input: ElectionOverride): Promise<ElectionOverride> {
  const overrides = await readOverrides();
  const idx = overrides.findIndex((o) => o.country === input.country);
  if (idx === -1) {
    overrides.push(input);
  } else {
    overrides[idx] = { ...overrides[idx], ...input };
  }
  await writeOverrides(overrides);
  return input;
}

/**
 * Merges an ElectionOverride on top of the static COUNTRIES entry.
 * Returns a full CountryRules-shaped object with any overrides applied.
 */
export async function getEffectiveCountry(
  code: string,
): Promise<CountryRules | undefined> {
  const base = getCountry(code);
  if (!base) return undefined;

  const override = await getOverride(code);
  if (!override) return base;

  return {
    ...base,
    nextElection: {
      label: override.nextElectionLabel ?? base.nextElection.label,
      date: override.nextElectionDate ?? base.nextElection.date,
    },
    registrationDeadline: override.registrationDeadline ?? base.registrationDeadline,
  };
}

export async function getAllEffectiveCountries(): Promise<CountryRules[]> {
  return Promise.all(COUNTRIES.map((c) => getEffectiveCountry(c.code) as Promise<CountryRules>));
}
