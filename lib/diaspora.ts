import type { CountryRules } from "./types";

/**
 * Country codes that represent authoritarian regimes where "The Fifth X"
 * framing is inappropriate — replaced with "The X Diaspora in Exile".
 */
const AUTHORITARIAN_CODES = new Set(["KP", "RU", "IR", "CU", "VE", "CN", "BY"]);

/**
 * Local-language "Fifth [Country]" variants for select countries where they
 * feel natural alongside English-language product copy.
 */
const SPECIAL_CASES: Record<string, string> = {
  FR: "La Cinquième France",
  IT: "La Quinta Italia",
  ES: "La Quinta España",
  DE: "Das Fünfte Deutschland",
  PT: "O Quinto Portugal",
  CH: "The Fifth Switzerland",
};

/**
 * Returns the evocative "Fifth [Country]" moniker for a country's diaspora community.
 * Uses local-language variants where they feel natural in English demo copy,
 * falls back to "The Fifth {name}" otherwise.
 *
 * For authoritarian regimes returns "The {name} Diaspora in Exile" instead.
 */
export function fifthOf(country: CountryRules): string {
  try {
    if (AUTHORITARIAN_CODES.has(country.code)) {
      return `The ${country.name} Diaspora in Exile`;
    }
    if (SPECIAL_CASES[country.code] !== undefined) {
      return SPECIAL_CASES[country.code]!;
    }
    return `The Fifth ${country.name}`;
  } catch {
    return "The Diaspora";
  }
}

/**
 * Short explainer string about what committing to Turnout means — for reuse across pages.
 */
export const PERMANENT_COMMITMENT_COPY: {
  headline: string;
  body: string;
} = {
  headline: "One commit, every election",
  body: "Your commitment is permanent — not tied to a single vote. Once you're in, Turnout tracks every election for your country and sends timely nudges. No re-registration, no drop-off between election cycles.",
};
