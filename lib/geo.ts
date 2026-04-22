// Real-world coordinates for every city present in the seed data (data/commits.json).
// All coordinates are approximate city-center lat/lng.
export const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  Berlin: { lat: 52.52, lng: 13.405 },
  Milan: { lat: 45.464, lng: 9.19 },
  Paris: { lat: 48.856, lng: 2.352 },
  Madrid: { lat: 40.416, lng: -3.703 },
  Bucharest: { lat: 44.432, lng: 26.103 },
  London: { lat: 51.507, lng: -0.128 },
  Cologne: { lat: 50.938, lng: 6.96 },
  Rotterdam: { lat: 51.924, lng: 4.477 },
  Frankfurt: { lat: 50.11, lng: 8.682 },
  Vienna: { lat: 48.208, lng: 16.373 },
  Lisbon: { lat: 38.716, lng: -9.139 },
  Dublin: { lat: 53.333, lng: -6.249 },
  Prague: { lat: 50.075, lng: 14.438 },
  Brussels: { lat: 50.851, lng: 4.352 },
  Athens: { lat: 37.984, lng: 23.728 },
  Hamburg: { lat: 53.55, lng: 9.993 },
  Stockholm: { lat: 59.333, lng: 18.065 },
  Rome: { lat: 41.9, lng: 12.496 },
};

/**
 * Returns the base city name (the portion before any ", Country" suffix)
 * that can be used to look up CITY_COORDS.
 */
export function cityKey(cityWithCountry: string): string {
  return cityWithCountry.split(",")[0].trim();
}
