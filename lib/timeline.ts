import type { CountryRules, ReminderEvent } from "./types";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function daysUntil(iso: string, from: Date = new Date()): number {
  const target = new Date(iso).getTime();
  const base = new Date(from.toISOString().slice(0, 10)).getTime();
  return Math.ceil((target - base) / MS_PER_DAY);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function buildReminderTimeline(country: CountryRules): ReminderEvent[] {
  const regDate = new Date(country.registrationDeadline);
  const electionDate = new Date(country.nextElection.date);

  const reg = (days: number): string =>
    new Date(regDate.getTime() - days * MS_PER_DAY).toISOString().slice(0, 10);
  const ele = (days: number): string =>
    new Date(electionDate.getTime() - days * MS_PER_DAY).toISOString().slice(0, 10);

  return [
    {
      date: reg(14),
      label: "Email: registration window opens in 2 weeks",
      kind: "info",
    },
    {
      date: reg(3),
      label: "SMS nudge: registration closes in 3 days",
      kind: "action",
    },
    {
      date: country.registrationDeadline,
      label: `Registration deadline (${country.name})`,
      kind: "deadline",
    },
    {
      date: ele(7),
      label: "Plan your vote — we'll suggest nearby voters to travel with",
      kind: "info",
    },
    {
      date: ele(1),
      label: "SMS: final reminder, polls open tomorrow",
      kind: "action",
    },
    {
      date: country.nextElection.date,
      label: `Election day — ${country.nextElection.label}`,
      kind: "deadline",
    },
  ];
}
