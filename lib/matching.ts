import type { Commit } from "./types";

export type MockMember = {
  id: string;
  displayName: string; // "Maria P."
  initials: string;    // "MP"
  distanceMock: string;
  matchTier: 1 | 2 | 3; // 1=same city, 2=same residence country, 3=same origin country
};

function nameToInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function displayName(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${first} ${lastInitial}.`;
}

function distanceMockForTier(tier: 1 | 2 | 3): string {
  switch (tier) {
    case 1:
      return "in your city";
    case 2:
      return "same metro";
    case 3:
      return "~80 km away";
  }
}

export function findGroup(user: Commit, allCommits: Commit[]): MockMember[] {
  const others = allCommits.filter((c) => c.id !== user.id);

  // Tier 1: same origin country AND same city
  const tier1 = others.filter(
    (c) =>
      c.country === user.country &&
      c.city.toLowerCase() === user.city.toLowerCase(),
  );

  // Tier 2: same origin country AND same residence country (but different city)
  const tier2 = others.filter(
    (c) =>
      c.country === user.country &&
      c.residenceCountry?.toLowerCase() === user.residenceCountry?.toLowerCase() &&
      c.city.toLowerCase() !== user.city.toLowerCase(),
  );

  // Tier 3: same origin country only
  const tier3 = others.filter(
    (c) =>
      c.country === user.country &&
      c.residenceCountry?.toLowerCase() !== user.residenceCountry?.toLowerCase(),
  );

  const toMember = (c: Commit, tier: 1 | 2 | 3): MockMember => ({
    id: c.id,
    displayName: displayName(c.name),
    initials: nameToInitials(c.name),
    distanceMock: distanceMockForTier(tier),
    matchTier: tier,
  });

  const candidates: MockMember[] = [
    ...tier1.map((c) => toMember(c, 1)),
    ...tier2.map((c) => toMember(c, 2)),
    ...tier3.map((c) => toMember(c, 3)),
  ];

  // Return 2–4 members, preferring higher tiers
  return candidates.slice(0, 4);
}
