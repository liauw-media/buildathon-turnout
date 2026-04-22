// Consulate data for Moldovan, Romanian, Georgian, and Turkish missions
// in the cities present in our seed data. Addresses are plausible for a demo.

export type Consulate = {
  city: string;
  address: string;
  phone?: string;
};

export const CONSULATES: Record<string, Consulate[]> = {
  MD: [
    {
      city: "Berlin",
      address: "Gotlandstraße 16, 10439 Berlin, Germany",
      phone: "+49 30 446 879 30",
    },
    {
      city: "Milan",
      address: "Via Vittor Pisani 26, 20124 Milan, Italy",
      phone: "+39 02 670 7236",
    },
    {
      city: "Paris",
      address: "1 Rue de la Paix, 75001 Paris, France",
      phone: "+33 1 40 07 10 96",
    },
    {
      city: "Madrid",
      address: "Calle Serrano 100, 28006 Madrid, Spain",
      phone: "+34 91 577 4800",
    },
    {
      city: "Bucharest",
      address: "Strada Muzelor 11, Sector 1, Bucharest, Romania",
      phone: "+40 21 230 0474",
    },
    {
      city: "London",
      address: "5 Dolphin Square, Edith Grove, London SW10 0QP, UK",
      phone: "+44 20 7581 3452",
    },
    {
      city: "Cologne",
      address: "Gotlandstraße 16, 10439 Berlin, Germany", // fallback: Berlin embassy
      phone: "+49 30 446 879 30",
    },
    {
      city: "Rotterdam",
      address: "Gotlandstraße 16, 10439 Berlin, Germany", // fallback: Berlin embassy
      phone: "+49 30 446 879 30",
    },
    {
      city: "Frankfurt",
      address: "Gotlandstraße 16, 10439 Berlin, Germany",
      phone: "+49 30 446 879 30",
    },
    {
      city: "Vienna",
      address: "Löwelstraße 18/7, 1010 Vienna, Austria",
      phone: "+43 1 890 3706",
    },
    {
      city: "Lisbon",
      address: "Rua Prior do Crato 12, 1250-123 Lisbon, Portugal",
      phone: "+351 21 796 9240",
    },
    {
      city: "Dublin",
      address: "1 Dolphin House, South Frederick Street, Dublin 2, Ireland",
      phone: "+353 1 661 8138",
    },
    {
      city: "Prague",
      address: "Václavské náměstí 41, 110 00 Prague 1, Czechia",
      phone: "+420 224 228 906",
    },
    {
      city: "Brussels",
      address: "Avenue des Arts 46, 1000 Brussels, Belgium",
      phone: "+32 2 732 9659",
    },
    {
      city: "Athens",
      address: "Vassilissis Sofias 83, 11521 Athens, Greece",
      phone: "+30 210 770 9020",
    },
    {
      city: "Hamburg",
      address: "Gotlandstraße 16, 10439 Berlin, Germany", // fallback
      phone: "+49 30 446 879 30",
    },
    {
      city: "Stockholm",
      address: "Karlavägen 20, 114 31 Stockholm, Sweden",
      phone: "+46 8 783 0070",
    },
    {
      city: "Rome",
      address: "Via Vittor Pisani 26, 20124 Milan, Italy", // fallback: Milan
      phone: "+39 02 670 7236",
    },
  ],

  RO: [
    {
      city: "Berlin",
      address: "Dorotheenstraße 62–66, 10117 Berlin, Germany",
      phone: "+49 30 212 3620",
    },
    {
      city: "Milan",
      address: "Via Monte Rosa 6, 20149 Milan, Italy",
      phone: "+39 02 465 1294",
    },
    {
      city: "Paris",
      address: "5 Rue de l'Exposition, 75007 Paris, France",
      phone: "+33 1 47 05 10 46",
    },
    {
      city: "Madrid",
      address: "Calle Núñez de Balboa 35 bis, 28001 Madrid, Spain",
      phone: "+34 91 435 4536",
    },
    {
      city: "Bucharest",
      address: "Aleea Alexandru 24, Sector 1, 011824 Bucharest, Romania",
      phone: "+40 21 210 6482",
    },
    {
      city: "London",
      address: "Arundel House, 4 Palace Green, London W8 4QD, UK",
      phone: "+44 20 7937 9666",
    },
    {
      city: "Cologne",
      address: "Humboldtstraße 32, 40237 Düsseldorf, Germany", // nearest consulate
      phone: "+49 211 680 9696",
    },
    {
      city: "Rotterdam",
      address: "Buitenhof 36–38, 2513 AH The Hague, Netherlands",
      phone: "+31 70 354 0858",
    },
    {
      city: "Frankfurt",
      address: "Humboldtstraße 32, 40237 Düsseldorf, Germany",
      phone: "+49 211 680 9696",
    },
    {
      city: "Vienna",
      address: "Prinz-Eugen-Straße 60, 1040 Vienna, Austria",
      phone: "+43 1 505 3227",
    },
    {
      city: "Lisbon",
      address: "Alameda das Linhas de Torres 58, 1750-148 Lisbon, Portugal",
      phone: "+351 21 757 3545",
    },
    {
      city: "Dublin",
      address: "26 Waterloo Road, Dublin 4, Ireland",
      phone: "+353 1 668 1085",
    },
    {
      city: "Prague",
      address: "Nerudova 5, 118 00 Prague 1, Czechia",
      phone: "+420 257 533 005",
    },
    {
      city: "Brussels",
      address: "Rue Gabrielle 93, 1180 Brussels, Belgium",
      phone: "+32 2 344 2808",
    },
    {
      city: "Athens",
      address: "Emm. Benaki 7, Psychiko, 15452 Athens, Greece",
      phone: "+30 210 671 2879",
    },
    {
      city: "Hamburg",
      address: "Humboldtstraße 32, 40237 Düsseldorf, Germany",
      phone: "+49 211 680 9696",
    },
    {
      city: "Stockholm",
      address: "Linnégatan 10, 114 47 Stockholm, Sweden",
      phone: "+46 8 440 0340",
    },
    {
      city: "Rome",
      address: "Via Nicola Tartaglia 36, 00197 Rome, Italy",
      phone: "+39 06 806 8951",
    },
  ],

  GE: [
    {
      city: "Berlin",
      address: "Rauchstraße 11, 10787 Berlin, Germany",
      phone: "+49 30 484 930 0",
    },
    {
      city: "Milan",
      address: "Via Vittor Pisani 12, 20124 Milan, Italy",
      phone: "+39 02 897 5621",
    },
    {
      city: "Paris",
      address: "104 Avenue Raymond Poincaré, 75116 Paris, France",
      phone: "+33 1 45 02 16 16",
    },
    {
      city: "Madrid",
      address: "Calle General Díaz Porlier 5, 28001 Madrid, Spain",
      phone: "+34 91 576 7522",
    },
    {
      city: "Bucharest",
      address: "Strada Popa Tatu 30, Sector 1, Bucharest, Romania",
      phone: "+40 21 231 0085",
    },
    {
      city: "London",
      address: "4 Russell Gardens, London W14 8EZ, UK",
      phone: "+44 20 7603 7799",
    },
    {
      city: "Cologne",
      address: "Rauchstraße 11, 10787 Berlin, Germany", // fallback
      phone: "+49 30 484 930 0",
    },
    {
      city: "Rotterdam",
      address: "Tobias Asserlaan 8, 2517 KC The Hague, Netherlands",
      phone: "+31 70 358 7564",
    },
    {
      city: "Frankfurt",
      address: "Rauchstraße 11, 10787 Berlin, Germany",
      phone: "+49 30 484 930 0",
    },
    {
      city: "Vienna",
      address: "Dütschgasse 27, 1190 Vienna, Austria",
      phone: "+43 1 403 9595",
    },
    {
      city: "Lisbon",
      address: "Av. da República 56, 1069-213 Lisbon, Portugal",
      phone: "+351 21 796 0040",
    },
    {
      city: "Dublin",
      address: "Rauchstraße 11, 10787 Berlin, Germany", // fallback
      phone: "+49 30 484 930 0",
    },
    {
      city: "Prague",
      address: "Mánesova 5, 120 00 Prague 2, Czechia",
      phone: "+420 222 514 222",
    },
    {
      city: "Brussels",
      address: "Avenue Molière 368, 1050 Brussels, Belgium",
      phone: "+32 2 345 4064",
    },
    {
      city: "Athens",
      address: "Anagnostopoulou 11, 10673 Athens, Greece",
      phone: "+30 210 363 0820",
    },
    {
      city: "Hamburg",
      address: "Rauchstraße 11, 10787 Berlin, Germany", // fallback
      phone: "+49 30 484 930 0",
    },
    {
      city: "Stockholm",
      address: "Linnégatan 10, 114 47 Stockholm, Sweden",
      phone: "+46 8 440 9900",
    },
    {
      city: "Rome",
      address: "Viale Parioli 32, 00197 Rome, Italy",
      phone: "+39 06 807 6200",
    },
  ],

  TR: [
    {
      city: "Berlin",
      address: "Tiergartenstraße 19–21, 10785 Berlin, Germany",
      phone: "+49 30 275 8500",
    },
    {
      city: "Milan",
      address: "Via Antonio Besozzi 6, 20122 Milan, Italy",
      phone: "+39 02 760 6083",
    },
    {
      city: "Paris",
      address: "16 Avenue de Lamballe, 75016 Paris, France",
      phone: "+33 1 53 92 71 12",
    },
    {
      city: "Madrid",
      address: "Rafael Calvo 18, 28010 Madrid, Spain",
      phone: "+34 91 319 8064",
    },
    {
      city: "Bucharest",
      address: "Calea Dorobanților 24, Sector 1, Bucharest, Romania",
      phone: "+40 21 211 6830",
    },
    {
      city: "London",
      address: "Rutland Lodge, Rutland Gardens, London SW7 1BW, UK",
      phone: "+44 20 7589 0360",
    },
    {
      city: "Cologne",
      address: "Humboldtstraße 26, 40237 Düsseldorf, Germany",
      phone: "+49 211 610 4460",
    },
    {
      city: "Rotterdam",
      address: "Tobias Asserlaan 14, 2517 KC The Hague, Netherlands",
      phone: "+31 70 360 4912",
    },
    {
      city: "Frankfurt",
      address: "Zeppelinallee 38, 60487 Frankfurt am Main, Germany",
      phone: "+49 69 900 0990",
    },
    {
      city: "Vienna",
      address: "Prinz-Eugen-Straße 40, 1040 Vienna, Austria",
      phone: "+43 1 505 7381",
    },
    {
      city: "Lisbon",
      address: "Av. das Descobertas 22, 1400-092 Lisbon, Portugal",
      phone: "+351 21 301 8980",
    },
    {
      city: "Dublin",
      address: "11 Clyde Road, Ballsbridge, Dublin 4, Ireland",
      phone: "+353 1 668 5240",
    },
    {
      city: "Prague",
      address: "Pevnostní 9, 162 00 Prague 6, Czechia",
      phone: "+420 224 311 402",
    },
    {
      city: "Brussels",
      address: "Rue Montoyer 4, 1000 Brussels, Belgium",
      phone: "+32 2 513 4095",
    },
    {
      city: "Athens",
      address: "Vassilissis Georgios II 8, 10674 Athens, Greece",
      phone: "+30 210 724 5915",
    },
    {
      city: "Hamburg",
      address: "Feldbrunnenstraße 64, 20148 Hamburg, Germany",
      phone: "+49 40 414 7070",
    },
    {
      city: "Stockholm",
      address: "Dag Hammarskjölds väg 12, 115 27 Stockholm, Sweden",
      phone: "+46 8 663 8088",
    },
    {
      city: "Rome",
      address: "Palazzo Lancellotti, Piazza Farnese 44, 00186 Rome, Italy",
      phone: "+39 06 446 9471",
    },
  ],
};

/**
 * Returns the consulate entry for `countryCode` in `city`.
 * Falls back to the first consulate listed for that country if city not found.
 */
export function findConsulate(
  countryCode: string,
  city: string,
): Consulate | undefined {
  const list = CONSULATES[countryCode];
  if (!list || list.length === 0) return undefined;
  return list.find((c) => c.city.toLowerCase() === city.toLowerCase()) ?? list[0];
}
