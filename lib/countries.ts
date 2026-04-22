import type { CountryRules } from "./types";

// Mocked registration rules for a few diaspora scenarios.
// Dates are set relative to the hackathon "today" (2026-04-22) to create a believable timeline.
export const COUNTRIES: CountryRules[] = [
  {
    code: "MD",
    name: "Moldova",
    flag: "🇲🇩",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-07-05",
    },
    registrationDeadline: "2026-06-15",
    registrationUrl: "https://www.cec.md/en/",
    steps: [
      {
        title: "Pre-register for a polling station abroad",
        detail:
          "Submit your overseas registration on the CEC portal so a ballot location is planned near you.",
      },
      {
        title: "Verify your passport is valid through election day",
        detail: "Expired passports cannot be used at diaspora polling stations.",
      },
      {
        title: "Confirm your assigned polling station",
        detail: "Check the CEC confirmation email 2 weeks before the vote.",
      },
    ],
    requiredDocuments: ["Valid Moldovan passport", "Proof of residence abroad (optional)"],
  },
  {
    code: "RO",
    name: "Romania",
    flag: "🇷🇴",
    nextElection: {
      label: "Presidential Elections",
      date: "2026-05-24",
    },
    registrationDeadline: "2026-04-30",
    registrationUrl: "https://www.votstrainatate.ro/",
    steps: [
      {
        title: "Register on votstrainatate.ro",
        detail: "Choose between voting by mail or in-person at a diaspora polling station.",
      },
      {
        title: "Upload passport scan",
        detail: "Only Romanian passports are accepted — national ID is not valid abroad.",
      },
      {
        title: "Track your mail-in ballot",
        detail: "If voting by mail, ballots are shipped ~3 weeks before election day.",
      },
    ],
    requiredDocuments: ["Valid Romanian passport", "Proof of address abroad"],
  },
  {
    code: "GE",
    name: "Georgia",
    flag: "🇬🇪",
    nextElection: {
      label: "Local Elections",
      date: "2026-10-18",
    },
    registrationDeadline: "2026-09-18",
    registrationUrl: "https://cesko.ge/en",
    steps: [
      {
        title: "Check the diaspora voter list",
        detail: "Verify you're on the electoral roll for voters abroad via the CEC portal.",
      },
      {
        title: "Find your nearest polling station",
        detail: "Polling stations are hosted at Georgian consulates and embassies.",
      },
      {
        title: "Bring original ID documents",
        detail: "Photocopies or digital IDs are not accepted.",
      },
    ],
    requiredDocuments: ["Georgian ID card or passport"],
  },
  {
    code: "TR",
    name: "Türkiye",
    flag: "🇹🇷",
    nextElection: {
      label: "General Elections",
      date: "2026-06-14",
    },
    registrationDeadline: "2026-05-20",
    registrationUrl: "https://www.ysk.gov.tr/en",
    steps: [
      {
        title: "Book a voting appointment",
        detail: "Overseas voting requires a scheduled time slot at your consulate.",
      },
      {
        title: "Bring your Turkish ID",
        detail: "T.C. Kimlik numaranızı ve geçerli kimlik belgenizi yanınızda bulundurun.",
      },
      {
        title: "Vote during the 2-week overseas window",
        detail: "Diaspora polls open earlier and close 4 days before domestic election day.",
      },
    ],
    requiredDocuments: ["Turkish national ID or passport"],
  },
];

export function getCountry(code: string): CountryRules | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
