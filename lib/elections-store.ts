import { promises as fs } from "node:fs";
import path from "node:path";
import type { CountryRules } from "./types";
import type { ElectionOverride } from "./topics";
import { COUNTRIES, getCountry } from "./countries";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "elections.json");
const CALENDAR_FILE = path.join(DATA_DIR, "elections-calendar.json");

export type CalendarEvent = {
  label: string;
  date: string;
  kind?: string;
  source?: string;
  notes?: string | null;
  featured?: boolean;
};

export type Calendar = {
  generatedAt?: string;
  sourceCount?: number;
  countries: Record<string, CalendarEvent[]>;
};

export type RichCalendarEvent = CalendarEvent & {
  country: string;
  code: string;
  flag: string;
  countryName: string;
  days: number;
};

// In-memory cache for the calendar (static per build; data file is treated as static)
let calendarCache: Calendar | null = null;

async function readCalendar(): Promise<Calendar> {
  if (calendarCache) return calendarCache;
  try {
    const raw = await fs.readFile(CALENDAR_FILE, "utf8");
    calendarCache = JSON.parse(raw) as Calendar;
  } catch {
    calendarCache = { countries: {} };
  }
  return calendarCache;
}

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
 * Returns the raw research-sourced calendar events for a country, if any.
 * Consumers can use this to display sources/kinds/notes alongside the base data.
 */
export async function getCountryCalendar(code: string): Promise<CalendarEvent[]> {
  const cal = await readCalendar();
  return cal.countries[code] ?? [];
}

/**
 * Merges (in priority order, highest wins):
 *   1. Admin override  (ElectionOverride)
 *   2. Research calendar (elections-calendar.json)
 *   3. Static base     (COUNTRIES)
 *
 * The earliest upcoming calendar event becomes `nextElection`; the rest become
 * `additionalVotes` (replacing any base additionalVotes). An admin override still
 * wins if explicitly set (we respect operator edits over research).
 */
export async function getEffectiveCountry(
  code: string,
): Promise<CountryRules | undefined> {
  const base = getCountry(code);
  if (!base) return undefined;

  const [override, calendarEvents] = await Promise.all([
    getOverride(code),
    getCountryCalendar(code),
  ]);

  // Start from base.
  let result: CountryRules = { ...base };

  // Apply research calendar when present (events already sorted by date).
  if (calendarEvents.length > 0) {
    const today = new Date().toISOString().slice(0, 10);
    const upcoming = calendarEvents.filter((e) => e.date >= today);
    const picked = upcoming.length > 0 ? upcoming : calendarEvents.slice(-3);
    const next = picked[0];
    const rest = picked.slice(1);
    result = {
      ...result,
      nextElection: { label: next.label, date: next.date },
      additionalVotes: rest.map((e) => ({ label: e.label, date: e.date })),
    };
  }

  // Apply admin override last (highest priority for label/date/deadline).
  if (override) {
    result = {
      ...result,
      nextElection: {
        label: override.nextElectionLabel ?? result.nextElection.label,
        date: override.nextElectionDate ?? result.nextElection.date,
      },
      registrationDeadline:
        override.registrationDeadline ?? result.registrationDeadline,
    };
  }

  return result;
}

export async function getAllEffectiveCountries(): Promise<CountryRules[]> {
  return Promise.all(
    COUNTRIES.map((c) => getEffectiveCountry(c.code) as Promise<CountryRules>),
  );
}

/**
 * Returns the raw Calendar object (generatedAt, sourceCount, countries map).
 */
export async function readElectionsCalendar(): Promise<Calendar> {
  return readCalendar();
}

/**
 * Returns a flat list of all calendar events enriched with country metadata
 * and a `days` field (days until the event; negative = past).
 * Sorted by date ascending (upcoming first, past events at the end).
 */
export async function getAllCalendarEvents(): Promise<RichCalendarEvent[]> {
  const cal = await readCalendar();
  const today = new Date().toISOString().slice(0, 10);
  const countryMap = new Map(COUNTRIES.map((c) => [c.code, c]));

  const events: RichCalendarEvent[] = [];

  for (const [code, calEvents] of Object.entries(cal.countries)) {
    const meta = countryMap.get(code);
    const flag = meta?.flag ?? "";
    const countryName = meta?.name ?? code;

    for (const ev of calEvents) {
      const diffMs = new Date(ev.date).getTime() - new Date(today).getTime();
      const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
      events.push({ ...ev, country: code, code, flag, countryName, days });
    }
  }

  // Upcoming first (ascending), then past events (also ascending within past)
  events.sort((a, b) => {
    const aUpcoming = a.days >= 0;
    const bUpcoming = b.days >= 0;
    if (aUpcoming && !bUpcoming) return -1;
    if (!aUpcoming && bUpcoming) return 1;
    return a.date.localeCompare(b.date);
  });

  return events;
}
