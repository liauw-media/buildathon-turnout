export type Topic = {
  id: string;
  country: string; // ISO alpha-2
  title: string;
  summary: string; // 1-3 sentences, non-partisan
  keywords: string[];
  createdAt: string;
};

export type ElectionOverride = {
  country: string;
  nextElectionLabel?: string;
  nextElectionDate?: string;
  registrationDeadline?: string;
};

// Seed defaults — returned when no topics.json override exists for a country
export const SEED_TOPICS: Topic[] = [
  // Moldova
  {
    id: "md-001",
    country: "MD",
    title: "EU Integration Path",
    summary:
      "Moldova applied for EU candidate status in 2022 and has been advancing reforms aligned with EU accession requirements. Key chapters include judicial reform, anti-corruption measures, and alignment with the EU single market. The pace and conditions of accession continue to be debated.",
    keywords: ["EU", "accession", "European Union", "integration", "foreign policy"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "md-002",
    country: "MD",
    title: "Anti-Corruption Reforms",
    summary:
      "Moldova has established several anti-corruption bodies including the National Anticorruption Center and the Prosecutor's Office for Combating Organized Crime and Corruption. Reform progress and institutional effectiveness are ongoing policy discussions.",
    keywords: ["corruption", "transparency", "rule of law", "prosecution", "institutions"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "md-003",
    country: "MD",
    title: "Russian Media Influence",
    summary:
      "The Moldovan government has restricted several Russian-linked TV channels, citing disinformation concerns. Questions around media plurality, freedom of the press, and information security form a significant part of the public debate.",
    keywords: ["media", "disinformation", "Russia", "press freedom", "information"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "md-004",
    country: "MD",
    title: "Economic Reforms and Energy Independence",
    summary:
      "Moldova has worked to diversify its energy sources, reducing dependence on Russian gas following supply disruptions. Broader economic reforms aim to modernize infrastructure, attract investment, and align with EU trade standards.",
    keywords: ["economy", "energy", "gas", "investment", "trade"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "md-005",
    country: "MD",
    title: "Diaspora Voting Rights",
    summary:
      "Moldovan citizens abroad can vote at embassies and consulates, but turnout and logistical challenges remain persistent issues. Policy proposals have included expanding polling stations and introducing postal or electronic voting options.",
    keywords: ["diaspora", "voting", "electoral reform", "overseas voters", "civil rights"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },

  // Romania
  {
    id: "ro-001",
    country: "RO",
    title: "EU Funds Absorption",
    summary:
      "Romania has historically underperformed in absorbing EU structural and cohesion funds compared to regional peers. Improving absorption rates is a key policy goal, with implications for infrastructure, education, and economic development.",
    keywords: ["EU funds", "cohesion", "infrastructure", "absorption", "investment"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ro-002",
    country: "RO",
    title: "Judicial Independence",
    summary:
      "Romania has faced EU scrutiny through the Cooperation and Verification Mechanism regarding the independence of its judiciary. Recent legislative changes and appointments have renewed debate about the separation of powers.",
    keywords: ["judiciary", "rule of law", "CVM", "courts", "independence"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ro-003",
    country: "RO",
    title: "Anti-Corruption Enforcement",
    summary:
      "Romania's National Anticorruption Directorate (DNA) has prosecuted high-profile public officials. Its operational independence and resourcing have been central to debates about institutional integrity.",
    keywords: ["DNA", "corruption", "prosecution", "accountability", "transparency"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ro-004",
    country: "RO",
    title: "Healthcare System Reform",
    summary:
      "Romania's healthcare system faces challenges including underfunding, rural access gaps, and high rates of medical emigration. Reform proposals address hospital investment, digitization, and staff retention.",
    keywords: ["healthcare", "hospitals", "reform", "medical emigration", "public health"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ro-005",
    country: "RO",
    title: "Diaspora Representation",
    summary:
      "Romanian citizens abroad number in the millions and have significant electoral weight. Debates continue around dedicated parliamentary seats for diaspora, postal voting expansion, and consular service capacity.",
    keywords: ["diaspora", "representation", "overseas voting", "parliament", "civil rights"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },

  // Georgia
  {
    id: "ge-001",
    country: "GE",
    title: "EU Candidate Status",
    summary:
      "Georgia received EU candidate status in 2023. Progress toward accession negotiations depends on meeting benchmarks in rule of law, judicial reform, and democratic governance. The government's approach to these conditions remains a subject of political debate.",
    keywords: ["EU", "accession", "candidate status", "European Union", "foreign policy"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ge-002",
    country: "GE",
    title: "Judicial Reform",
    summary:
      "International observers and EU institutions have called for reforms to Georgia's judicial appointment processes and court independence. Proposed changes include revisions to the High Council of Justice and the Constitutional Court.",
    keywords: ["judiciary", "courts", "rule of law", "reform", "independence"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ge-003",
    country: "GE",
    title: "Foreign Agents Law Debate",
    summary:
      "A law requiring organizations receiving more than 20% of their funding from abroad to register as carrying foreign influence has prompted widespread civil society protest and EU criticism. Proponents argue it promotes transparency; critics say it restricts civil society.",
    keywords: ["NGOs", "civil society", "foreign influence", "transparency", "freedom"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ge-004",
    country: "GE",
    title: "Economic Development and Tourism",
    summary:
      "Georgia has positioned itself as a regional hub for business and tourism, with notable growth in the hospitality sector. Debate centers on how to manage rapid growth, diversify the economy beyond services, and ensure regional equity.",
    keywords: ["economy", "tourism", "investment", "growth", "diversification"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "ge-005",
    country: "GE",
    title: "Territorial Integrity",
    summary:
      "The status of South Ossetia and Abkhazia, occupied by Russia following the 2008 war, remains unresolved. The issue affects Georgia's security posture, foreign policy alliances, and eligibility for certain international frameworks.",
    keywords: ["territorial integrity", "Abkhazia", "South Ossetia", "Russia", "security"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },

  // Türkiye
  {
    id: "tr-001",
    country: "TR",
    title: "Economic Stability and Inflation",
    summary:
      "Türkiye has experienced significant inflationary pressure over recent years, driven by currency depreciation and monetary policy choices. Economic stabilization efforts, interest rate policy, and cost-of-living impacts are central public policy questions.",
    keywords: ["economy", "inflation", "lira", "monetary policy", "cost of living"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "tr-002",
    country: "TR",
    title: "Press Freedom",
    summary:
      "Türkiye ranks low on international press freedom indices. Debates focus on media ownership concentration, legal frameworks governing journalists, and access to online platforms. These conditions affect how citizens receive and assess political information.",
    keywords: ["press freedom", "media", "journalism", "censorship", "internet"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "tr-003",
    country: "TR",
    title: "Judicial Independence",
    summary:
      "The composition and independence of Türkiye's Constitutional Court and Council of State have been subjects of ongoing discussion, particularly regarding the appointment of judges and the handling of politically sensitive cases.",
    keywords: ["judiciary", "courts", "rule of law", "independence", "constitutional court"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "tr-004",
    country: "TR",
    title: "Kurdish Policy and Political Representation",
    summary:
      "The legal and political status of Kurdish political parties, language rights, and the approach to resolving the long-running conflict in southeastern Türkiye remain contested policy areas. Different parties hold substantially different positions on these questions.",
    keywords: ["Kurdish", "HDP", "minority rights", "language", "political representation"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "tr-005",
    country: "TR",
    title: "EU Relations",
    summary:
      "Türkiye has been an EU candidate since 1999, though accession negotiations have been effectively frozen. Relations cover trade, migration cooperation, and security. The conditions under which negotiations might resume are a matter of ongoing diplomatic discussion.",
    keywords: ["EU", "accession", "European Union", "diplomacy", "trade"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];
