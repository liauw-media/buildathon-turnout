import type { CountryRules } from "./types";

// Mocked registration rules for diaspora scenarios.
// Dates are set relative to the hackathon "today" (2026-04-22) to create a believable timeline.
// For authoritarian regimes, steps reflect the product's democratic solidarity framing
// rather than functional overseas voting procedures.
export const COUNTRIES: CountryRules[] = [
  // ── FEATURED COUNTRY ────────────────────────────────────────────────────────
  {
    code: "MT",
    name: "Malta",
    flag: "🇲🇹",
    nextElection: {
      label: "General Elections",
      date: "2027-04-10",
    },
    registrationDeadline: "2027-03-15",
    registrationUrl: "https://electoral.gov.mt/",
    steps: [
      {
        title: "Update your address at the Electoral Office",
        detail:
          "Maltese citizens living abroad must keep a valid Maltese address on the electoral register. Overseas voting by proxy or post is not available, so most Maltese abroad must travel home to vote.",
      },
      {
        title: "Plan travel back to Malta for election day",
        detail:
          "Polling stations only operate in Malta. Book flights early as demand spikes around elections and prices rise significantly in the weeks before polling day.",
      },
      {
        title: "Confirm your polling district",
        detail:
          "Check electoral.gov.mt for your assigned polling district before traveling. Bring your valid Maltese ID card on election day — no other document is accepted at the polling booth.",
      },
    ],
    requiredDocuments: [
      "Valid Maltese ID card (Karta ta' l-Identità)",
      "Current electoral register entry",
    ],
    votingAccessibility: "travel",
    region: "eu",
  },

  // ── EXISTING COUNTRIES (unchanged) ──────────────────────────────────────────
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
    votingAccessibility: "consulate",
    region: "europe",
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
    votingAccessibility: "postal",
    region: "eu",
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
    votingAccessibility: "consulate",
    region: "europe",
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
    votingAccessibility: "consulate",
    region: "europe",
  },

  // ── EU MEMBER STATES (alphabetical by name) ──────────────────────────────────
  {
    code: "AT",
    name: "Austria",
    flag: "🇦🇹",
    nextElection: {
      label: "Federal Council Elections",
      date: "2027-09-26",
    },
    registrationDeadline: "2027-08-31",
    registrationUrl: "https://www.bmi.gv.at/412/Europawahlen/",
    steps: [
      {
        title: "Register for overseas postal voting (Briefwahl)",
        detail:
          "Austrian citizens abroad can request a postal ballot by applying to their local municipality of last residence in Austria or to the nearest Austrian embassy.",
      },
      {
        title: "Submit your postal ballot application in time",
        detail:
          "Applications must reach the electoral authority at least three weeks before election day. Early application is strongly recommended to allow for postal transit time.",
      },
      {
        title: "Return your completed ballot by deadline",
        detail:
          "The sealed ballot envelope must arrive at the designated Austrian authority by election day. Overseas voters are responsible for factoring in international postage times.",
      },
    ],
    requiredDocuments: ["Valid Austrian passport or national ID", "Postal ballot application form"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "BE",
    name: "Belgium",
    flag: "🇧🇪",
    nextElection: {
      label: "Federal Parliamentary Elections",
      date: "2027-05-16",
    },
    registrationDeadline: "2027-04-04",
    registrationUrl: "https://elections.fgov.be/",
    steps: [
      {
        title: "Register with your consulate or embassy",
        detail:
          "Belgian citizens residing abroad must register in the Consular Register (Registre des Belges à l'étranger) to be eligible to vote overseas.",
      },
      {
        title: "Choose your voting method",
        detail:
          "You may vote in person at your consulate, grant a proxy to a trusted person in Belgium, or request postal voting depending on your country of residence.",
      },
      {
        title: "Receive and return your ballot",
        detail:
          "If using postal voting, ensure your completed ballot is returned before the deadline indicated on the envelope.",
      },
    ],
    requiredDocuments: [
      "Valid Belgian identity card or passport",
      "Consular registration confirmation",
    ],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "BG",
    name: "Bulgaria",
    flag: "🇧🇬",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-03-28",
    },
    registrationDeadline: "2027-03-07",
    registrationUrl: "https://www.cik.bg/en",
    steps: [
      {
        title: "Check the diaspora electoral register",
        detail:
          "Bulgarian citizens abroad can verify their registration on the Central Electoral Commission (CIK) website using their personal identification number.",
      },
      {
        title: "Vote at your nearest Bulgarian diplomatic mission",
        detail:
          "Polling stations are established at Bulgarian embassies and consulates abroad. Check the CIK website for locations and opening hours.",
      },
      {
        title: "Bring valid travel documents",
        detail:
          "Present your Bulgarian passport or valid Bulgarian national ID card at the polling station.",
      },
    ],
    requiredDocuments: ["Valid Bulgarian passport or national ID card"],
    votingAccessibility: "consulate",
    region: "eu",
  },
  {
    code: "HR",
    name: "Croatia",
    flag: "🇭🇷",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-06-06",
    },
    registrationDeadline: "2027-05-09",
    registrationUrl: "https://www.izbori.hr/",
    steps: [
      {
        title: "Register for overseas voting",
        detail:
          "Croatian citizens living abroad can register to vote through the State Electoral Commission portal or at a Croatian consulate at least 30 days before the election.",
      },
      {
        title: "Vote at a Croatian consulate or embassy",
        detail:
          "Croatia provides polling stations at diplomatic missions abroad during election periods. Check izbori.hr for your nearest location.",
      },
      {
        title: "Bring your Croatian identity documents",
        detail:
          "A valid Croatian passport or national ID card is required. Documents must be valid on election day.",
      },
    ],
    requiredDocuments: ["Valid Croatian passport or ID card"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "CY",
    name: "Cyprus",
    flag: "🇨🇾",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-05-31",
    },
    registrationDeadline: "2026-05-01",
    registrationUrl: "https://www.moi.gov.cy/moi/elections.nsf",
    steps: [
      {
        title: "Verify your electoral registration",
        detail:
          "Cypriot citizens must be registered on the electoral roll. Overseas Cypriots can check and update their registration through the Ministry of Interior's online portal.",
      },
      {
        title: "Apply for overseas voting at your consulate",
        detail:
          "Cyprus allows overseas voting at consular offices for parliamentary elections. Submit your application to vote abroad at least 30 days before polling day.",
      },
      {
        title: "Cast your ballot at the consular polling station",
        detail:
          "Bring your Cypriot ID card or passport. Only Cypriot national documents are accepted.",
      },
    ],
    requiredDocuments: ["Valid Cypriot identity card or passport"],
    votingAccessibility: "consulate",
    region: "eu",
  },
  {
    code: "CZ",
    name: "Czechia",
    flag: "🇨🇿",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-10-09",
    },
    registrationDeadline: "2026-09-08",
    registrationUrl: "https://www.volby.cz/",
    steps: [
      {
        title: "Apply for overseas voting at your embassy",
        detail:
          "Czech citizens abroad may vote at Czech embassies during the two-day election window. Contact your local Czech diplomatic mission to confirm polling station details.",
      },
      {
        title: "Confirm you are on the special electoral roll",
        detail:
          "Request to be placed on the special overseas electoral roll (zvláštní seznam) held at your embassy at least 40 days before election day.",
      },
      {
        title: "Vote in person at the embassy",
        detail:
          "Czechia does not currently offer postal voting. You must attend in person with a valid Czech travel document.",
      },
    ],
    requiredDocuments: ["Valid Czech passport"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    nextElection: {
      label: "General Elections",
      date: "2027-11-07",
    },
    registrationDeadline: "2027-10-10",
    registrationUrl: "https://www.retsinformation.dk/eli/lta/2018/261",
    steps: [
      {
        title: "Apply for postal voting from abroad",
        detail:
          "Danish citizens residing outside Denmark can apply for a postal ballot at their local Danish municipality of registration or via their nearest consulate.",
      },
      {
        title: "Receive and complete your postal ballot",
        detail:
          "Ballot materials are sent to your overseas address. Follow the instructions carefully to ensure your vote is valid.",
      },
      {
        title: "Return the ballot in time",
        detail:
          "Your completed postal ballot must be received by the municipal authority before polls close on election day.",
      },
    ],
    requiredDocuments: ["Valid Danish passport or national ID card", "Postal voting application"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "EE",
    name: "Estonia",
    flag: "🇪🇪",
    nextElection: {
      label: "Parliamentary Elections (Riigikogu)",
      date: "2027-03-07",
    },
    registrationDeadline: "2027-02-21",
    registrationUrl: "https://www.valimised.ee/en",
    steps: [
      {
        title: "Use Estonia's e-voting system",
        detail:
          "Estonia is a pioneer in internet voting. Estonian citizens with a valid ID card and card reader (or Mobile-ID) can vote online from anywhere in the world during the advance voting period.",
      },
      {
        title: "Set up your digital identity tools",
        detail:
          "Ensure your ID card certificate is activated and valid, or that your Mobile-ID or Smart-ID account is current. The National Electoral Committee provides setup guides at valimised.ee.",
      },
      {
        title: "Vote during the advance e-voting window",
        detail:
          "Internet voting is open for seven days before election day. You may change your vote during this period; only the last vote cast is counted.",
      },
    ],
    requiredDocuments: [
      "Valid Estonian ID card with activated certificates",
      "Card reader, Mobile-ID, or Smart-ID",
    ],
    votingAccessibility: "evoting",
    region: "eu",
  },
  {
    code: "FI",
    name: "Finland",
    flag: "🇫🇮",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-04-18",
    },
    registrationDeadline: "2027-03-14",
    registrationUrl: "https://vaalit.fi/en/home",
    steps: [
      {
        title: "Request advance voting outside Finland",
        detail:
          "Finnish citizens abroad can vote in advance at designated embassies, consulates, and other official locations during the advance voting period (typically 11 days before election day).",
      },
      {
        title: "Find your nearest advance voting location",
        detail:
          "Check vaalit.fi for the list of overseas advance polling places, including honorary consulates in countries with no Finnish embassy.",
      },
      {
        title: "Present valid Finnish ID",
        detail:
          "A Finnish passport or identity card valid on the day of voting is required. The voter must be on the Finnish population register.",
      },
    ],
    requiredDocuments: ["Valid Finnish passport or national identity card"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    nextElection: {
      label: "Presidential Elections",
      date: "2027-04-25",
    },
    registrationDeadline: "2027-03-21",
    registrationUrl: "https://www.service-public.fr/particuliers/vosdroits/N47",
    steps: [
      {
        title: "Register on the electoral rolls",
        detail:
          "French citizens living abroad must register either with their municipality in France (via mairie.fr) or on the consular electoral roll at their local French consulate (registration consulaire).",
      },
      {
        title: "Choose your voting method",
        detail:
          "You can vote in person at your consulate, by proxy (procuration), or — for residents in some countries — at a designated embassy polling station. France does not yet offer universal postal voting for nationals abroad.",
      },
      {
        title: "Confirm your polling station and schedule",
        detail:
          "Overseas polling stations may open a day before domestic polling day. Check the Ministry of Foreign Affairs website for your specific location and hours.",
      },
    ],
    requiredDocuments: ["Valid French passport or national identity card", "Electoral registration proof"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    nextElection: {
      label: "Federal Elections (Bundestag)",
      date: "2029-09-28",
    },
    registrationDeadline: "2029-09-07",
    registrationUrl: "https://www.bundeswahlleiter.de/en/",
    steps: [
      {
        title: "Apply for inclusion in the voter register",
        detail:
          "German citizens who have been residing abroad for fewer than 25 years and who previously had a principal residence in Germany can apply to their last home municipality (Wohnsitzgemeinde) to be included in the electoral register.",
      },
      {
        title: "Request a postal ballot (Briefwahl)",
        detail:
          "After being registered, apply for an absentee ballot (Briefwahlunterlagen) from your municipality. Ballots can be requested online, by letter, or via proxy.",
      },
      {
        title: "Return the completed ballot before election day",
        detail:
          "The sealed ballot envelope must arrive at the municipal authority by 6 pm on election day (domestic Germany time). Factor in international mail transit times.",
      },
    ],
    requiredDocuments: [
      "Valid German passport or national identity card",
      "Application for electoral register inclusion",
    ],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "GR",
    name: "Greece",
    flag: "🇬🇷",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-05-30",
    },
    registrationDeadline: "2027-04-30",
    registrationUrl: "https://www.ypes.gr/en/",
    steps: [
      {
        title: "Register as an overseas voter",
        detail:
          "Greek citizens living abroad can register to vote from their place of residence by submitting an application to the Ministry of Interior at least 30 days before the election.",
      },
      {
        title: "Vote by postal ballot or at a consulate",
        detail:
          "Greece introduced postal voting for overseas citizens. Alternatively, vote in person at a Greek consulate or embassy during the designated overseas polling period.",
      },
      {
        title: "Return postal ballot before the deadline",
        detail:
          "Completed ballots must be received by the designated Greek authority by election day. Postmark-only returns are not accepted.",
      },
    ],
    requiredDocuments: ["Valid Greek passport or national identity card", "Overseas voter registration confirmation"],
    votingAccessibility: "consulate",
    region: "eu",
  },
  {
    code: "HU",
    name: "Hungary",
    flag: "🇭🇺",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-04-12",
    },
    registrationDeadline: "2026-03-15",
    registrationUrl: "https://www.valasztas.hu/en_US/web/national-election-office/home",
    steps: [
      {
        title: "Apply for postal ballot if eligible",
        detail:
          "Hungarian citizens who live abroad and have their permanent address outside Hungary may apply for a postal ballot. Applications are submitted to the National Election Office (NVI).",
      },
      {
        title: "Receive and complete your ballot",
        detail:
          "Ballot materials are sent to your registered overseas address. Follow the enclosed instructions to mark and seal your ballot correctly.",
      },
      {
        title: "Return the ballot before election day",
        detail:
          "The sealed ballot must arrive at the NVI no later than election day. Early posting is strongly recommended given international mail timelines.",
      },
    ],
    requiredDocuments: ["Valid Hungarian passport or identity card", "Postal ballot application"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    nextElection: {
      label: "General Elections",
      date: "2027-11-14",
    },
    registrationDeadline: "2027-10-17",
    registrationUrl: "https://www.checktheregister.ie/",
    steps: [
      {
        title: "Check your registration status",
        detail:
          "Irish citizens must be registered on the electoral register. Overseas Irish citizens can apply for postal or proxy voting if they are registered at an Irish address.",
      },
      {
        title: "Apply for postal or proxy voting",
        detail:
          "Irish citizens living abroad can apply to vote by post or by proxy through their local constituency returning officer. Applications must be submitted well in advance.",
      },
      {
        title: "Note: No general overseas polling stations",
        detail:
          "Ireland does not operate consular polling stations abroad. Citizens abroad must arrange postal or proxy voting, or travel home to vote in person.",
      },
    ],
    requiredDocuments: ["Valid Irish passport or public services card", "Electoral registration confirmation"],
    votingAccessibility: "travel",
    region: "eu",
  },
  {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    nextElection: {
      label: "General Elections",
      date: "2027-06-13",
    },
    registrationDeadline: "2027-05-16",
    registrationUrl: "https://www.interno.gov.it/it/temi/elezioni-e-strumenti-di-democrazia-diretta",
    steps: [
      {
        title: "Register on the AIRE (Registro degli Italiani Residenti all'Estero)",
        detail:
          "Italian citizens residing abroad for more than 12 months must register on the AIRE to be entitled to vote by post or at consular polling stations.",
      },
      {
        title: "Receive your postal ballot package",
        detail:
          "AIRE-registered voters receive ballot materials by post at their registered foreign address. Check that your address is current with your Italian consulate.",
      },
      {
        title: "Return the completed ballot by the deadline",
        detail:
          "Follow the instructions enclosed with your ballot. The sealed envelope must reach the consular office by the date indicated on the materials.",
      },
    ],
    requiredDocuments: ["Valid Italian passport or identity card", "AIRE registration"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "LV",
    name: "Latvia",
    flag: "🇱🇻",
    nextElection: {
      label: "Parliamentary Elections (Saeima)",
      date: "2026-10-04",
    },
    registrationDeadline: "2026-09-06",
    registrationUrl: "https://www.cvk.lv/en",
    steps: [
      {
        title: "Register to vote from abroad",
        detail:
          "Latvian citizens can register to vote at an overseas polling station through the Central Election Commission (CVK) portal at least 30 days before the election.",
      },
      {
        title: "Find your designated polling station",
        detail:
          "Latvian embassies and consulates serve as overseas polling stations. The CVK website lists all locations globally.",
      },
      {
        title: "Vote in person on election day",
        detail:
          "Present your Latvian passport or identity card. Latvia does not currently offer overseas postal voting for parliamentary elections.",
      },
    ],
    requiredDocuments: ["Valid Latvian passport or national identity card"],
    votingAccessibility: "consulate",
    region: "eu",
  },
  {
    code: "LT",
    name: "Lithuania",
    flag: "🇱🇹",
    nextElection: {
      label: "Parliamentary Elections (Seimas)",
      date: "2028-10-08",
    },
    registrationDeadline: "2028-09-10",
    registrationUrl: "https://www.vrk.lt/en",
    steps: [
      {
        title: "Apply to vote at an overseas polling station",
        detail:
          "Lithuanian citizens abroad may vote at diplomatic missions. Register your intention to vote through the VRK (Central Electoral Commission) portal before the deadline.",
      },
      {
        title: "Locate your assigned diplomatic mission",
        detail:
          "Polling stations are organised at Lithuanian embassies and consulates. Where no diplomatic mission exists, the VRK designates honorary consulates.",
      },
      {
        title: "Cast your ballot in person",
        detail:
          "Bring a valid Lithuanian passport or identity document. Lithuania also runs internet voting for citizens with digital certificates.",
      },
    ],
    requiredDocuments: ["Valid Lithuanian passport or national identity card"],
    votingAccessibility: "consulate",
    region: "eu",
  },
  {
    code: "LU",
    name: "Luxembourg",
    flag: "🇱🇺",
    nextElection: {
      label: "General Elections",
      date: "2028-10-08",
    },
    registrationDeadline: "2028-09-10",
    registrationUrl: "https://elections.public.lu/en.html",
    steps: [
      {
        title: "Register as a voter if residing abroad",
        detail:
          "Luxembourgish citizens living abroad must apply to their commune of registration in Luxembourg to be included on the electoral roll for overseas voting.",
      },
      {
        title: "Request a postal ballot (vote par correspondance)",
        detail:
          "Overseas Luxembourgish voters can request a postal ballot from their commune. Apply at least three weeks before election day.",
      },
      {
        title: "Return the completed ballot on time",
        detail:
          "Sealed ballots must reach the designated commune before polls close on election day. Factor in international postage delays.",
      },
    ],
    requiredDocuments: ["Valid Luxembourgish passport or national identity card", "Postal ballot application"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    nextElection: {
      label: "House of Representatives (Tweede Kamer) Elections",
      date: "2027-11-28",
    },
    registrationDeadline: "2027-10-31",
    registrationUrl: "https://www.rijksoverheid.nl/onderwerpen/verkiezingen",
    steps: [
      {
        title: "Register for overseas voting",
        detail:
          "Dutch citizens living abroad can register as overseas voters with the municipality of The Hague (the registration municipality for all Dutch abroad) by submitting a registration form.",
      },
      {
        title: "Choose proxy voting or postal ballot",
        detail:
          "Netherlands offers proxy voting (machtiging) or, in certain circumstances, voting at a Dutch consulate. Postal voting is not universally available; proxy is the most common route for overseas voters.",
      },
      {
        title: "Arrange your proxy or consular vote in time",
        detail:
          "Proxy arrangements must be completed before election day. Contact your nearest Dutch consulate for consular voting details.",
      },
    ],
    requiredDocuments: ["Valid Dutch passport or identity card", "Overseas voter registration form"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "PL",
    name: "Poland",
    flag: "🇵🇱",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-10-10",
    },
    registrationDeadline: "2027-09-12",
    registrationUrl: "https://www.gov.pl/web/premier/wybory",
    steps: [
      {
        title: "Apply to vote at a Polish consulate",
        detail:
          "Polish citizens abroad can apply to be added to the overseas electoral roll maintained at their local Polish consulate or embassy. Apply at least 5 days before polling day.",
      },
      {
        title: "Request a postal ballot (głosowanie korespondencyjne)",
        detail:
          "Overseas Polish citizens may request postal ballots through the consulate. Applications should be submitted as early as possible to allow time for the ballot to be sent and returned.",
      },
      {
        title: "Vote in person or return your postal ballot",
        detail:
          "In-person voting at the consulate is available during the election period. Postal ballots must reach the consulate before polls close.",
      },
    ],
    requiredDocuments: ["Valid Polish passport", "Application for the overseas electoral roll"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "PT",
    name: "Portugal",
    flag: "🇵🇹",
    nextElection: {
      label: "Legislative Elections",
      date: "2027-03-28",
    },
    registrationDeadline: "2027-02-28",
    registrationUrl: "https://www.eleicoes.mai.gov.pt/",
    steps: [
      {
        title: "Register with a Portuguese consulate",
        detail:
          "Portuguese citizens living abroad for more than 6 months should be registered with their local consulate. Consular registration automatically confers overseas voter status.",
      },
      {
        title: "Receive your postal ballot",
        detail:
          "Portugal sends postal ballots to registered overseas voters automatically. Ensure your address at the consulate is current before the registration deadline.",
      },
      {
        title: "Return the completed ballot by the deadline",
        detail:
          "Sealed ballots must reach the consulate by the date specified on the materials. Late-arriving ballots cannot be counted.",
      },
    ],
    requiredDocuments: ["Valid Portuguese passport or citizen card", "Consular registration confirmation"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "SK",
    name: "Slovakia",
    flag: "🇸🇰",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-09-27",
    },
    registrationDeadline: "2026-09-06",
    registrationUrl: "https://volby.statistics.sk/",
    steps: [
      {
        title: "Apply to vote at a Slovak diplomatic mission",
        detail:
          "Slovak citizens abroad can apply to vote at the nearest Slovak embassy or consulate by contacting the mission and requesting inclusion on its electoral roll.",
      },
      {
        title: "Vote in person at the embassy",
        detail:
          "Slovakia requires in-person voting at diplomatic missions for elections to the National Council. Check your nearest mission's opening hours for election day.",
      },
      {
        title: "Bring valid Slovak travel documents",
        detail:
          "Present a valid Slovak passport or national identity card. Documents must be valid on the day of voting.",
      },
    ],
    requiredDocuments: ["Valid Slovak passport or national identity card"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "SI",
    name: "Slovenia",
    flag: "🇸🇮",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-11-15",
    },
    registrationDeadline: "2026-10-18",
    registrationUrl: "https://www.dvk-rs.si/en/",
    steps: [
      {
        title: "Register for overseas voting with your diplomatic mission",
        detail:
          "Slovenian citizens abroad can apply to vote at a Slovenian embassy or consulate. Submit your request to the relevant mission at least 30 days before the election.",
      },
      {
        title: "Confirm your polling station details",
        detail:
          "The State Electoral Commission (DVK) lists approved overseas polling stations on its website. Confirm the address and schedule before travelling to vote.",
      },
      {
        title: "Vote in person on election day",
        detail:
          "Present your Slovenian ID card or passport at the polling station. Slovenia also allows postal voting in limited circumstances; contact your embassy for details.",
      },
    ],
    requiredDocuments: ["Valid Slovenian identity card or passport"],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    nextElection: {
      label: "General Elections",
      date: "2027-12-05",
    },
    registrationDeadline: "2027-11-07",
    registrationUrl: "https://www.infoelectoral.mir.es/",
    steps: [
      {
        title: "Register on the CERA (Censo Electoral de Residentes Ausentes)",
        detail:
          "Spanish citizens residing abroad must be registered on the overseas electoral census (CERA). Registration is done through your consulate — those already consularly registered are usually enrolled automatically.",
      },
      {
        title: "Request your postal ballot (voto por correo)",
        detail:
          "Overseas voters vote by post. Request your ballot materials from the Spanish Electoral Office (Oficina del Censo Electoral) or your consulate after the election is called.",
      },
      {
        title: "Return the completed ballot before the deadline",
        detail:
          "Completed ballots must reach the designated consular or electoral authority by the date stated on the materials. Use tracked mail where possible.",
      },
    ],
    requiredDocuments: [
      "Valid Spanish passport or national identity document (DNI)",
      "CERA registration",
    ],
    votingAccessibility: "postal",
    region: "eu",
  },
  {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    nextElection: {
      label: "General Elections (Riksdag)",
      date: "2026-09-13",
    },
    registrationDeadline: "2026-08-16",
    registrationUrl: "https://www.val.se/in-english.html",
    steps: [
      {
        title: "Check you are on the electoral register",
        detail:
          "Swedish citizens abroad remain on the electoral register if they were registered in Sweden at some point. Check your status at val.se or contact Skatteverket (the Tax Agency).",
      },
      {
        title: "Vote in advance at a Swedish embassy or consulate",
        detail:
          "The Election Authority (Valmyndigheten) designates overseas advance polling stations at embassies and consulates. These are open during the advance voting period (around 18 days before election day).",
      },
      {
        title: "Bring valid identification",
        detail:
          "Present a Swedish passport, national ID card, or another accepted photo ID. Check val.se for the current list of accepted documents.",
      },
    ],
    requiredDocuments: ["Valid Swedish passport or national identity card"],
    votingAccessibility: "postal",
    region: "eu",
  },

  // ── NON-EU EUROPEAN COUNTRIES ────────────────────────────────────────────────
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    nextElection: {
      label: "General Election",
      date: "2029-05-06",
    },
    registrationDeadline: "2029-04-14",
    registrationUrl: "https://www.gov.uk/register-to-vote",
    steps: [
      {
        title: "Register as an overseas voter",
        detail:
          "UK citizens living abroad can register as overseas electors at gov.uk/register-to-vote. Since 2023, the 15-year overseas voter rule has been abolished — any UK citizen who has previously been registered in the UK is eligible.",
      },
      {
        title: "Apply for a postal or proxy vote",
        detail:
          "Overseas voters must use postal or proxy voting. Apply for your chosen method at the same time as registering. Proxy voting is useful when postal delivery times are uncertain.",
      },
      {
        title: "Ensure your registration is renewed annually",
        detail:
          "Overseas voter registration must be renewed each year (or every three years if registering under the new rules). Check your registration status before each election.",
      },
    ],
    requiredDocuments: [
      "Valid UK passport or other proof of British citizenship",
      "Previous UK address details",
    ],
    votingAccessibility: "postal",
    region: "europe",
  },
  {
    code: "NO",
    name: "Norway",
    flag: "🇳🇴",
    nextElection: {
      label: "Storting Elections",
      date: "2029-09-09",
    },
    registrationDeadline: "2029-08-12",
    registrationUrl: "https://www.valg.no/en/",
    steps: [
      {
        title: "Check your voter registration status",
        detail:
          "Norwegian citizens registered in the National Registry (Folkeregisteret) are automatically added to the electoral roll. Citizens who have emigrated must check whether they remain registered.",
      },
      {
        title: "Request advance voting from abroad",
        detail:
          "Norwegian embassies and consulates accept advance votes. You can also submit an advance vote by post through your nearest Norwegian diplomatic mission.",
      },
      {
        title: "Vote during the advance voting window",
        detail:
          "Advance voting typically opens several weeks before election day. Contact your Norwegian embassy for exact dates and location.",
      },
    ],
    requiredDocuments: ["Valid Norwegian passport or national ID card"],
    votingAccessibility: "postal",
    region: "europe",
  },
  {
    code: "CH",
    name: "Switzerland",
    flag: "🇨🇭",
    nextElection: {
      label: "Federal Council Elections (National Council)",
      date: "2027-10-17",
    },
    registrationDeadline: "2027-09-26",
    registrationUrl: "https://www.bk.admin.ch/bk/en/home/politische-rechte/auslandschweizer.html",
    steps: [
      {
        title: "Register with the Swiss representation abroad",
        detail:
          "Swiss citizens living abroad must register with their local Swiss embassy or consulate to be included on the overseas electoral roll (Auslandschweizer-Stimmregister).",
      },
      {
        title: "Receive and complete postal ballot materials",
        detail:
          "Switzerland exclusively uses postal voting for overseas citizens. Ballot materials are sent 3–4 weeks before the vote to your registered address abroad.",
      },
      {
        title: "Return the ballot to your Swiss representation or canton",
        detail:
          "Sealed ballots must reach the designated authority by the deadline. Some embassies collect ballots directly; others require mailing to the relevant Swiss canton.",
      },
    ],
    requiredDocuments: [
      "Valid Swiss passport or identity card",
      "Registration with the Swiss representation",
    ],
    votingAccessibility: "evoting",
    region: "europe",
    additionalVotes: [
      { label: "Federal referendums (June round)", date: "2026-06-14" },
      { label: "Federal referendums (September round)", date: "2026-09-27" },
      { label: "Federal referendums (November round)", date: "2026-11-29" },
    ],
  },
  {
    code: "IS",
    name: "Iceland",
    flag: "🇮🇸",
    nextElection: {
      label: "Parliamentary Elections (Althingi)",
      date: "2027-04-25",
    },
    registrationDeadline: "2027-03-28",
    registrationUrl: "https://www.landskjor.is/english/",
    steps: [
      {
        title: "Verify your electoral eligibility",
        detail:
          "Icelandic citizens who have resided abroad for more than seven years must re-register their intent to vote with the National Electoral Commission to remain eligible.",
      },
      {
        title: "Apply for advance voting at an Icelandic embassy",
        detail:
          "Icelandic embassies and consulates accept advance votes during the advance polling period, which typically begins about 4 weeks before election day.",
      },
      {
        title: "Vote in person at the embassy",
        detail:
          "Bring your valid Icelandic passport. Iceland does not offer postal voting for overseas citizens in most elections.",
      },
    ],
    requiredDocuments: ["Valid Icelandic passport"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "UA",
    name: "Ukraine",
    flag: "🇺🇦",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-10-31",
    },
    registrationDeadline: "2027-10-03",
    registrationUrl: "https://www.cvk.gov.ua/en/",
    steps: [
      {
        title: "Register at your nearest Ukrainian diplomatic mission",
        detail:
          "Ukrainian citizens abroad can vote at Ukrainian embassies and consulates. Register with your diplomatic mission and check the Central Election Commission website for your nearest polling station.",
      },
      {
        title: "Bring valid Ukrainian identity documents",
        detail:
          "A valid Ukrainian passport (biometric or earlier format) is required. Internal passports are accepted in some cases — check with your consulate.",
      },
      {
        title: "Vote on election day at the consular polling station",
        detail:
          "Arrive within the designated voting hours. Ukraine does not currently offer postal or electronic voting for overseas citizens.",
      },
    ],
    requiredDocuments: ["Valid Ukrainian passport (internal or international)"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "RS",
    name: "Serbia",
    flag: "🇷🇸",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-04-04",
    },
    registrationDeadline: "2027-03-07",
    registrationUrl: "https://www.rik.parlament.gov.rs/",
    steps: [
      {
        title: "Request overseas voter status",
        detail:
          "Serbian citizens living abroad can apply for overseas voter status with the Republic Electoral Commission (RIK). Applications can be submitted through Serbian embassies and consulates.",
      },
      {
        title: "Vote at your nearest Serbian diplomatic mission",
        detail:
          "Polling stations are established at Serbian embassies and consulates for parliamentary elections. Check the RIK website for the list of locations.",
      },
      {
        title: "Present a valid Serbian travel document",
        detail:
          "Bring your Serbian passport on election day. Serbian national ID cards issued for use abroad may also be accepted — confirm with your consulate.",
      },
    ],
    requiredDocuments: ["Valid Serbian passport"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "AL",
    name: "Albania",
    flag: "🇦🇱",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-04-25",
    },
    registrationDeadline: "2027-03-28",
    registrationUrl: "https://www.kqz.gov.al/en/",
    steps: [
      {
        title: "Register with the Central Election Commission (KQZ)",
        detail:
          "Albanian citizens abroad can register to vote through the KQZ portal or at their nearest Albanian diplomatic mission. The registration window typically closes 30 days before the election.",
      },
      {
        title: "Verify the overseas polling station list",
        detail:
          "Albania has been expanding its network of overseas polling stations at embassies and consulates. Check the KQZ website for the location nearest to you.",
      },
      {
        title: "Vote in person at the designated polling station",
        detail:
          "Bring a valid Albanian passport or identity card. Albania is exploring postal voting but it is not universally available — confirm your options with your consulate.",
      },
    ],
    requiredDocuments: ["Valid Albanian passport or national identity card"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "MK",
    name: "North Macedonia",
    flag: "🇲🇰",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2026-05-03",
    },
    registrationDeadline: "2026-04-05",
    registrationUrl: "https://www.sec.mk/en/",
    steps: [
      {
        title: "Apply to vote at a Macedonian embassy",
        detail:
          "North Macedonian citizens living abroad can vote at designated polling stations at diplomatic missions. Contact your nearest embassy to confirm participation.",
      },
      {
        title: "Confirm your voter registration",
        detail:
          "Check that you are on the State Election Commission (SEC) voter list. Registration can be verified through the SEC website using your national ID number.",
      },
      {
        title: "Vote in person on election day",
        detail:
          "Present your North Macedonian passport or national ID card at the embassy polling station within the designated voting hours.",
      },
    ],
    requiredDocuments: ["Valid North Macedonian passport or national identity card"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "BA",
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    nextElection: {
      label: "General Elections",
      date: "2026-10-04",
    },
    registrationDeadline: "2026-08-06",
    registrationUrl: "https://www.izbori.ba/Default.aspx?langTag=en-US",
    steps: [
      {
        title: "Register for overseas voting with the Central Election Commission",
        detail:
          "BiH citizens living abroad must submit an application for overseas voting to the Central Election Commission (CIK). The application can be submitted via the CIK online portal or at a diplomatic mission.",
      },
      {
        title: "Choose to vote by post or at an embassy",
        detail:
          "Bosnia and Herzegovina offers postal voting for overseas citizens. You may also vote in person at designated diplomatic missions where polling stations are established.",
      },
      {
        title: "Return your postal ballot on time",
        detail:
          "Postal ballots must reach the CIK by the stated deadline. Early posting is strongly recommended given international mail variability.",
      },
    ],
    requiredDocuments: ["Valid BiH passport or identity document", "Overseas voter registration confirmation"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "ME",
    name: "Montenegro",
    flag: "🇲🇪",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2028-06-11",
    },
    registrationDeadline: "2028-05-14",
    registrationUrl: "https://www.dik.co.me/en/",
    steps: [
      {
        title: "Register to vote from abroad",
        detail:
          "Montenegrin citizens residing abroad can apply to vote through the State Election Commission (DIK) or at a Montenegrin diplomatic mission. Apply at least 30 days before the election.",
      },
      {
        title: "Vote at a diplomatic mission",
        detail:
          "Polling stations are set up at Montenegrin embassies and consulates abroad. Check the DIK website for the full list of overseas polling locations.",
      },
      {
        title: "Bring valid identity documents",
        detail:
          "Present your Montenegrin passport or biometric identity card. Documents must be valid on election day.",
      },
    ],
    requiredDocuments: ["Valid Montenegrin passport or national identity card"],
    votingAccessibility: "consulate",
    region: "europe",
  },
  {
    code: "XK",
    name: "Kosovo",
    flag: "🇽🇰",
    nextElection: {
      label: "Parliamentary Elections",
      date: "2027-02-07",
    },
    registrationDeadline: "2026-12-10",
    registrationUrl: "https://www.kqz-ks.org/en/",
    steps: [
      {
        title: "Register with the Central Election Commission (KQZ)",
        detail:
          "Kosovar citizens living abroad can register to vote with the KQZ. Registration must be completed well before the election; the KQZ runs registration drives at Kosovar diplomatic missions.",
      },
      {
        title: "Vote by postal ballot",
        detail:
          "Kosovo offers postal voting for the diaspora. Request your ballot through the KQZ portal after completing your overseas registration. Kosovo has one of the highest diaspora voter participation rates in the region.",
      },
      {
        title: "Return your ballot before the deadline",
        detail:
          "Completed postal ballots must reach the KQZ office by the date specified on your ballot materials. Factor in international postage times.",
      },
    ],
    requiredDocuments: ["Valid Kosovo passport or identity card"],
    votingAccessibility: "postal",
    region: "europe",
  },

  // ── AUTHORITARIAN AND NON-DEMOCRATIC REGIMES ────────────────────────────────
  // For these countries, overseas voting in meaningful competitive elections is not possible.
  // Turnout reframes the experience as democratic solidarity: committing to stay informed,
  // support exile organizations, and signal attention to human rights and democratic norms.
  {
    code: "BY",
    name: "Belarus",
    flag: "🇧🇾",
    nextElection: {
      label: "Presidential Elections (scheduled)",
      date: "2026-08-09",
    },
    registrationDeadline: "2026-07-09",
    registrationUrl: "https://bysol.org/en/",
    steps: [
      {
        title: "Note: No competitive overseas voting is available",
        detail:
          "Belarusian elections since 2020 have not met international democratic standards. The Lukashenko government does not offer credible diaspora voting. Any official process would not constitute a free and fair vote.",
      },
      {
        title: "Connect with exile organizations and the democratic opposition",
        detail:
          "The BYSOL Foundation, Viasna Human Rights Center, and the Coordination Council of the Belarusian democratic opposition are active civil society actors supporting Belarusians abroad and political prisoners at home.",
      },
      {
        title: "Sign the diaspora solidarity pledge and amplify attention",
        detail:
          "Visible commitments by diaspora communities abroad draw international attention to democratic aspirations inside Belarus. Engage with platforms tracking political prisoners and supporting free media.",
      },
    ],
    requiredDocuments: [
      "Belarusian passport or travel document (for consular engagement with democratic groups)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "RU",
    name: "Russia",
    flag: "🇷🇺",
    nextElection: {
      label: "Presidential Elections (scheduled)",
      date: "2030-03-15",
    },
    registrationDeadline: "2030-02-14",
    registrationUrl: "https://ovdinfo.org/en/",
    steps: [
      {
        title: "Note: No free and fair elections currently operate",
        detail:
          "Russian elections under the current administration do not meet international standards for competitiveness or fairness. Independent candidates and parties face systematic legal and physical obstacles. Many civic actors have been imprisoned or forced into exile.",
      },
      {
        title: "Stay connected with independent monitoring and exile media",
        detail:
          "OVD-Info tracks political detentions and repression in Russia. Meduza, iStories, and The Insider are independent Russian-language outlets operating in exile. The Anti-Corruption Foundation (FBK) continues advocacy following Alexei Navalny's death.",
      },
      {
        title: "Support democratic solidarity networks",
        detail:
          "Russian diaspora civic organizations operate across Europe and beyond. Engaging with exile civil society, attending solidarity events, and tracking human rights developments keeps pressure on democratic accountability.",
      },
    ],
    requiredDocuments: [
      "Russian passport or other travel document (for engagement with diaspora organizations)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "KP",
    name: "North Korea",
    flag: "🇰🇵",
    nextElection: {
      label: "Supreme People's Assembly (scheduled)",
      date: "2027-03-08",
    },
    registrationDeadline: "2027-02-08",
    registrationUrl: "https://www.nkhumanrights.or.kr/eng/",
    steps: [
      {
        title: "There is no free overseas vote for North Korean citizens",
        detail:
          "The Democratic People's Republic of Korea does not hold competitive elections. Supreme People's Assembly votes report near-100% turnout for a single-candidate slate; voting is a mandatory ritual rather than a meaningful political act.",
      },
      {
        title: "Stay connected with exile and defector support organizations",
        detail:
          "NK Human Rights (Seoul) and Liberty in North Korea (LiNK) support North Korean defectors and document conditions inside the country. The Database Center for North Korean Human Rights (NKDB) maintains comprehensive rights records.",
      },
      {
        title: "Sign the diaspora solidarity pledge",
        detail:
          "The North Korean diaspora is small and dispersed. Visible solidarity commitments by members of the Korean and broader democratic diaspora contribute to international attention on human rights conditions in the DPRK.",
      },
    ],
    requiredDocuments: [
      "Travel document or refugee status document (for engagement with support organizations)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "IR",
    name: "Iran",
    flag: "🇮🇷",
    nextElection: {
      label: "Presidential Elections (scheduled)",
      date: "2028-06-18",
    },
    registrationDeadline: "2028-05-20",
    registrationUrl: "https://www.iranhumanrights.org/",
    steps: [
      {
        title: "Note: Elections are structurally constrained",
        detail:
          "Iranian elections allow candidates only after vetting by the Guardian Council, which has disqualified thousands of reformist and moderate candidates. Diaspora engagement with official electoral processes does not reflect a free vote.",
      },
      {
        title: "Connect with human rights and civil society organizations",
        detail:
          "Iran Human Rights (IHRNGO), Amnesty International's Iran team, and the Abdorrahman Boroumand Center document executions, political imprisonment, and the suppression of protest movements including the Woman, Life, Freedom uprising.",
      },
      {
        title: "Amplify solidarity and support free media",
        detail:
          "Iran International, BBC Persian, and Radio Farda provide independent journalism. Diaspora visibility around key moments — including protest anniversaries — maintains international attention on internal conditions.",
      },
    ],
    requiredDocuments: [
      "Iranian passport or travel document (for consular engagement)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "CU",
    name: "Cuba",
    flag: "🇨🇺",
    nextElection: {
      label: "National Assembly Elections (scheduled)",
      date: "2028-01-15",
    },
    registrationDeadline: "2027-12-15",
    registrationUrl: "https://www.hrw.org/americas/cuba",
    steps: [
      {
        title: "Note: Cuba's single-party system does not offer competitive elections",
        detail:
          "Cuba's National Assembly elections involve candidates pre-approved by the Cuban Communist Party. Independent candidates are not permitted. The electoral process does not meet international standards for pluralism.",
      },
      {
        title: "Connect with civil society and exile organizations",
        detail:
          "Las Damas de Blanco advocate for political prisoners and their families. The Cuban Commission for Human Rights and National Reconciliation (CCDHRN) documents repression. 14ymedio provides independent Cuban journalism.",
      },
      {
        title: "Engage with diaspora advocacy",
        detail:
          "The Cuban diaspora — particularly in the United States, Spain, and Latin America — is among the most politically engaged in the world. Solidarity commitments by diaspora communities contribute to international pressure for democratic reform.",
      },
    ],
    requiredDocuments: [
      "Cuban passport (for consular engagement with diaspora organizations)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "VE",
    name: "Venezuela",
    flag: "🇻🇪",
    nextElection: {
      label: "Presidential Elections (next cycle)",
      date: "2031-07-20",
    },
    registrationDeadline: "2031-06-20",
    registrationUrl: "https://www.hrw.org/americas/venezuela",
    steps: [
      {
        title: "Context: The 2024 presidential election outcome is disputed",
        detail:
          "Independent observers and the Venezuelan opposition dispute the official results of the July 2024 presidential election. The Carter Center and other monitors found the results lack transparency. Diaspora voting registration and access have been severely restricted by the CNE.",
      },
      {
        title: "Connect with opposition and rights organizations",
        detail:
          "Provea, COFAVIC, and Foro Penal document human rights conditions and political prisoners in Venezuela. VPI TV and Efecto Cocuyo provide independent journalism. The opposition coordination platform offers diaspora engagement resources.",
      },
      {
        title: "Support the Venezuelan diaspora civic network",
        detail:
          "With over seven million Venezuelans displaced, diaspora civic engagement spans dozens of countries. Solidarity pledges and participation in diaspora networks sustain democratic pressure and document conditions for accountability processes.",
      },
    ],
    requiredDocuments: [
      "Venezuelan passport or identity document (for diaspora organization engagement)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
  {
    code: "CN",
    name: "China (Hong Kong diaspora)",
    flag: "🇨🇳",
    nextElection: {
      label: "National People's Congress Elections (scheduled)",
      date: "2028-03-05",
    },
    registrationDeadline: "2028-02-05",
    registrationUrl: "https://hongkongwatch.org/",
    steps: [
      {
        title: "Note: No competitive overseas voting exists for PRC or HK citizens",
        detail:
          "China's National People's Congress is elected through a structured indirect process with no competitive multi-party element. Hong Kong's Legislative Council was restructured in 2021 to limit directly elected seats; the 2023 District Council elections saw record-low turnout under a new vetting system.",
      },
      {
        title: "Connect with Hong Kong diaspora and rights organizations",
        detail:
          "Hong Kong Watch and the Hong Kong Democracy Council track rights conditions, prosecutions under the National Security Law, and the situation of political prisoners. Article 23 watch groups document new legislation's impact on civil liberties.",
      },
      {
        title: "Engage with exile media and solidarity networks",
        detail:
          "Stand News, now operating in exile as Citizen News, and Hong Kong Free Press continue independent journalism. Diaspora Hongkongers have established civic associations across the UK, Canada, Australia, and Europe — engagement supports sustained international attention.",
      },
    ],
    requiredDocuments: [
      "HKSAR passport, BN(O) passport, or PRC travel document (for diaspora organization engagement)",
    ],
    votingAccessibility: "none",
    region: "authoritarian",
  },
];

export function getCountry(code: string): CountryRules | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
