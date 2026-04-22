export type PersonaMeta = {
  commitId: string;
  displayName: string;
  blurb: string;
  accent: "amber" | "emerald" | "rose" | "zinc" | "indigo" | "sky";
};

export const DEMO_PERSONAS: PersonaMeta[] = [
  {
    commitId: "persona-mt-london",
    displayName: "Maria from Malta (London)",
    blurb: "Must travel home to vote — tight deadline and rising flight prices.",
    accent: "rose",
  },
  {
    commitId: "persona-ch-berlin",
    displayName: "Lukas from Switzerland (Berlin)",
    blurb: "E-voting from anywhere + 4 quarterly referendums per year.",
    accent: "emerald",
  },
  {
    commitId: "persona-de-paris",
    displayName: "Sophie from Germany (Paris)",
    blurb: "Postal ballot secured — registered and travel planned.",
    accent: "sky",
  },
  {
    commitId: "persona-fr-montreal",
    displayName: "Élise from France (Montréal)",
    blurb: "Consulate appointment needed — transatlantic time pressure.",
    accent: "sky",
  },
  {
    commitId: "persona-ir-stockholm",
    displayName: "Shirin from Iran (Stockholm)",
    blurb: "No free vote possible — committed to solidarity and visibility.",
    accent: "zinc",
  },
  {
    commitId: "persona-ru-vilnius",
    displayName: "Aleksei from Russia (Vilnius)",
    blurb: "Exile anti-war dissident — democratic solidarity, not regime vote.",
    accent: "zinc",
  },
  {
    commitId: "persona-by-warsaw",
    displayName: "Alena from Belarus (Warsaw)",
    blurb: "Exile since 2020 — supporting Tsikhanouskaya-era opposition.",
    accent: "zinc",
  },
  {
    commitId: "persona-tr-cologne",
    displayName: "Deniz from Türkiye (Cologne)",
    blurb: "Must book a consulate appointment for the overseas voting window.",
    accent: "amber",
  },
];

export function findPersona(commitId: string): PersonaMeta | undefined {
  return DEMO_PERSONAS.find((p) => p.commitId === commitId);
}
