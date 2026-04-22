import type { Commit } from "./types";

export type MockMember = {
  id: string;
  /** Emoji avatar stable-hashed from the commit id — no identifying info. */
  avatar: string;
  /** Privacy-first label — no names, no initials. E.g. "Fellow voter · Berlin". */
  displayName: string;
  /** City only — coarse location, no street/address. */
  city: string;
  distanceMock: string;
  matchTier: 1 | 2 | 3;
};

const AVATAR_POOL = [
  "🦊",
  "🦉",
  "🌿",
  "🐝",
  "🪻",
  "🌻",
  "🐢",
  "🦋",
  "🌸",
  "🐙",
  "🌊",
  "🪷",
  "🐞",
  "🍀",
  "🎋",
];

/**
 * Stable hash → emoji avatar. Same commit id always gets the same emoji,
 * so switching personas doesn't shuffle the group's visual identity.
 */
function avatarFor(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return AVATAR_POOL[Math.abs(h) % AVATAR_POOL.length];
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

  // Tier 2: same origin country AND same residence country (different city)
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
    avatar: avatarFor(c.id),
    displayName: "Fellow voter",
    city: c.city,
    distanceMock: distanceMockForTier(tier),
    matchTier: tier,
  });

  const candidates: MockMember[] = [
    ...tier1.map((c) => toMember(c, 1)),
    ...tier2.map((c) => toMember(c, 2)),
    ...tier3.map((c) => toMember(c, 3)),
  ];

  return candidates.slice(0, 4);
}
