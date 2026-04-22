import type { Commit, CountryRules } from "./types";
import { findConsulate } from "./consulates";
import { formatDate } from "./timeline";

export type MessageChannel = "email" | "sms";
export type MessageStatus = "sent" | "scheduled";

export type Message = {
  id: string;
  channel: MessageChannel;
  from: string;
  to: string;
  subject: string;
  /** Plain-text body — newlines preserved; rendered as paragraphs in the UI */
  body: string;
  date: string; // ISO date string (YYYY-MM-DD or full ISO)
  status: MessageStatus;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isoDate(iso: string): string {
  return iso.slice(0, 10);
}

function addDays(isoDate: string, days: number): string {
  const d = new Date(isoDate);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function subtractDays(isoDate: string, days: number): string {
  return addDays(isoDate, -days);
}

function statusFor(date: string): MessageStatus {
  const today = new Date().toISOString().slice(0, 10);
  return date <= today ? "sent" : "scheduled";
}

const FROM_EMAIL = "Turnout <no-reply@turnout.vote>";
const FROM_SMS = "TURNOUT";

// ---------------------------------------------------------------------------
// Individual message builders
// ---------------------------------------------------------------------------

function welcomeEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = isoDate(user.createdAt);
  return {
    id: "msg-1-welcome",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: `Welcome, ${firstName} — here's your 3-step plan`,
    body: [
      `Hi ${firstName},`,
      `You've committed to vote in ${country.name}'s ${country.nextElection.label} — and that matters. We'll guide you through every step so nothing falls through the cracks.`,
      `Here's your 3-step plan:\n\n1. ${country.steps[0]?.title ?? "Register to vote abroad"}\n2. ${country.steps[1]?.title ?? "Plan your vote"}\n3. ${country.steps[2]?.title ?? "Cast your vote"}`,
      `We'll send you a detailed guide for each step over the next few days. For now, take a look at your personal dashboard — it tracks your progress, shows key deadlines, and tells you exactly what to do next.`,
      `→ Visit your dashboard at turnout.vote/dashboard`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function howToRegisterEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = addDays(isoDate(user.createdAt), 1);
  return {
    id: "msg-2-register",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: `Step 1 of 3 — How to register to vote abroad from ${user.city}`,
    body: [
      `Hi ${firstName},`,
      `Let's get you registered. Here's exactly how Step 1 works for ${country.name} voters living in ${user.city}:`,
      `${country.steps[0]?.title ?? "Register to vote abroad"}\n${country.steps[0]?.detail ?? ""}`,
      `Registration deadline: ${formatDate(country.registrationDeadline)}. Don't leave this until the last minute — the portal can get busy.`,
      `Ready to register? Head to the official portal:\n→ ${country.registrationUrl}`,
      `We'll walk you through your documents next. Keep an eye on your inbox.`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function documentsEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = addDays(isoDate(user.createdAt), 2);
  const docList = country.requiredDocuments.map((d) => `• ${d}`).join("\n");
  return {
    id: "msg-3-documents",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: "Have these documents ready before you register",
    body: [
      `Hi ${firstName},`,
      `Before you sit down to register, make sure you have the following with you:`,
      docList,
      `Important: Check that your passport hasn't expired and that it will remain valid through election day (${formatDate(country.nextElection.date)}). An expired passport will disqualify you at the polling station — even if you're already registered.`,
      `If you need to renew, start that process now — consulate appointments can take several weeks.`,
      `→ Review your full plan at turnout.vote/dashboard`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function whereToVoteEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = addDays(isoDate(user.createdAt), 3);
  const consulate = findConsulate(country.code, user.city);
  const consulateInfo = consulate
    ? `${consulate.address}${consulate.phone ? ` · ${consulate.phone}` : ""}`
    : "Contact your nearest consulate for details.";

  return {
    id: "msg-4-where-to-vote",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: `Where and how you'll cast your vote`,
    body: [
      `Hi ${firstName},`,
      `As a ${country.name} diaspora voter in ${user.city}, you'll vote at a specially designated polling station hosted by or near the ${country.name} consulate or embassy in your area.`,
      `Your nearest voting point:\n${consulateInfo}`,
      `Polling stations for diaspora voters typically open at 07:00 and close at 21:00 on election day (${formatDate(country.nextElection.date)}). Arrive early — queues can build up, especially in larger cities.`,
      `What to bring:\n${country.requiredDocuments.map((d) => `• ${d}`).join("\n")}`,
      `Want to coordinate with other voters near you? We can connect you with 2–4 people from ${user.city} who are also planning to vote. Opt in from your dashboard.`,
      `→ turnout.vote/dashboard`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function registrationWindowEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = subtractDays(country.registrationDeadline, 14);
  return {
    id: "msg-5-reg-window",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: `Two weeks left to register — don't miss your window`,
    body: [
      `Hi ${firstName},`,
      `This is your two-week heads-up: the registration deadline for ${country.name}'s ${country.nextElection.label} is ${formatDate(country.registrationDeadline)}.`,
      `If you haven't registered yet, now is the time. The process takes about 10 minutes on a good day — but the portal can slow down as the deadline approaches.`,
      `→ Register now: ${country.registrationUrl}`,
      `If you're already registered, great — sit tight. We'll confirm your polling station details closer to election day.`,
      `Questions? Reply to this email and a member of the Turnout team will get back to you.`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function deadlineReminderSms(user: Commit, country: CountryRules): Message {
  const date = subtractDays(country.registrationDeadline, 3);
  return {
    id: "msg-6-deadline-sms",
    channel: "sms",
    from: FROM_SMS,
    to: user.email,
    subject: "Registration closes in 3 days",
    body: `TURNOUT: 3 days left to register for ${country.name} elections. Deadline: ${formatDate(country.registrationDeadline)}. Register now → ${country.registrationUrl}`,
    date,
    status: statusFor(date),
  };
}

function planVoteDayEmail(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = subtractDays(country.nextElection.date, 7);
  const consulate = findConsulate(country.code, user.city);
  const consulateAddress = consulate?.address ?? "your nearest consulate polling station";

  return {
    id: "msg-7-vote-day-plan",
    channel: "email",
    from: FROM_EMAIL,
    to: user.email,
    subject: `One week out — time to plan your vote day`,
    body: [
      `Hi ${firstName},`,
      `${country.name}'s ${country.nextElection.label} is one week away, on ${formatDate(country.nextElection.date)}. Here's how to make sure election day goes smoothly.`,
      `Where to go:\n${consulateAddress}`,
      `Polling hours: 07:00–21:00 local time. We recommend arriving before 10:00 to avoid the midday rush.`,
      `What to bring:\n${country.requiredDocuments.map((d) => `• ${d}`).join("\n")}`,
      `Going with others? A small group from ${user.city} is coordinating. Join them from your dashboard — it takes 10 seconds and makes the day a lot more fun.`,
      `→ turnout.vote/dashboard`,
      `— The Turnout team`,
    ].join("\n\n"),
    date,
    status: statusFor(date),
  };
}

function pollsOpenTomorrowSms(user: Commit, country: CountryRules): Message {
  const date = subtractDays(country.nextElection.date, 1);
  return {
    id: "msg-8-tomorrow-sms",
    channel: "sms",
    from: FROM_SMS,
    to: user.email,
    subject: "Polls open tomorrow",
    body: `TURNOUT: Polls open tomorrow! ${country.name} ${country.nextElection.label}. Don't forget your documents. See you at the ballot box.`,
    date,
    status: statusFor(date),
  };
}

function pollsOpenTodaySms(user: Commit, country: CountryRules): Message {
  const firstName = user.name.split(" ")[0];
  const date = country.nextElection.date;
  return {
    id: "msg-9-election-day-sms",
    channel: "sms",
    from: FROM_SMS,
    to: user.email,
    subject: `Polls are open in ${user.city}`,
    body: `TURNOUT: Today's the day, ${firstName}! Polls are open in ${user.city}. Go vote → turnout.vote/dashboard`,
    date,
    status: statusFor(date),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function buildMessagesFor(user: Commit, country: CountryRules): Message[] {
  const messages: Message[] = [
    welcomeEmail(user, country),
    howToRegisterEmail(user, country),
    documentsEmail(user, country),
    whereToVoteEmail(user, country),
    registrationWindowEmail(user, country),
    deadlineReminderSms(user, country),
    planVoteDayEmail(user, country),
    pollsOpenTomorrowSms(user, country),
    pollsOpenTodaySms(user, country),
  ];

  // Sort by date ascending
  return messages.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

// ---------------------------------------------------------------------------
// Sample Moldova inbox for unauthenticated visitors
// ---------------------------------------------------------------------------

const SAMPLE_USER: Commit = {
  id: "sample",
  name: "Maria Popescu",
  email: "maria@example.com",
  city: "Berlin",
  country: "MD",
  residenceCountry: "Germany",
  createdAt: "2026-04-15T10:00:00.000Z",
  progress: { registered: false, planned: false, voted: false },
};

export function buildSampleMessages(country: CountryRules): Message[] {
  return buildMessagesFor(SAMPLE_USER, country);
}
