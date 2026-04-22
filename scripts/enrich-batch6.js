const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "pt-001": {
    detail: "Portugal's housing crisis, concentrated in Lisbon, Porto, and the Algarve, has been driven by a combination of tourism demand, foreign property investment, digital nomad migration, and historically weak housing supply. Rents in Lisbon have more than doubled in a decade, displacing long-term residents to peripheral areas and contributing to urban gentrification. A 'Golden Visa' program attracting non-EU investment into property was suspended in 2023 as part of the government's housing response.\n\nThe government launched 'Mais Habitação' (More Housing) in 2023, combining rent controls, landlord incentives for long-term contracts, conversion of public buildings to housing, and social housing investment. The effectiveness of these measures—and whether they address the structural supply deficit or merely redistribute existing stock—is actively debated by economists, landlord associations, and tenant groups.\n\nPortugal's fiscal consolidation progress gave the government some fiscal space to invest in housing, but the scale of public investment required to close the supply gap is significant. EU funds, including cohesion and NextGenerationEU resources, have been partially directed toward social housing and urban regeneration, but administrative absorption capacity remains a constraint.\n\nFor Portuguese diaspora—among the largest per-capita in Europe, with major communities in France, Switzerland, the UK, and Luxembourg—property ownership in Portugal is both an investment and a connection to home. Rising property prices have made the dream of returning to a owned home in Portugal increasingly difficult for those earning diaspora incomes, while simultaneously increasing the paper value of properties already held by older diaspora generations.",
    officialLinks: [
      { label: "Portuguese Institute for Housing and Urban Rehabilitation (IHRU)", url: "https://www.ihru.pt/en" },
      { label: "Mais Habitação programme", url: "https://www.portugal.gov.pt/en" },
      { label: "Banco de Portugal – housing market analysis", url: "https://www.bportugal.pt/en" }
    ],
    newsLinks: [
      { label: "Lisbon rents fall slightly as housing law takes effect but experts sceptical", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-24" },
      { label: "Portugal's golden visa suspension: impact on property investment assessed", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-18" },
      { label: "Porto residents protest as tourism pushes rents beyond reach", url: "https://www.theguardian.com/world/portugal/", source: "The Guardian", publishedAt: "2025-04-05" }
    ],
    endorsements: [
      { name: "Habita – housing rights association Portugal", url: "https://habita.info" },
      { name: "DECO – Portuguese Consumer Defence Association", url: "https://www.deco.proteste.pt" },
      { name: "Amnesty International Portugal", url: "https://www.amnesty.pt" }
    ],
    supporterCount: 1743
  },
  "pt-002": {
    detail: "Portugal's political crisis of 2023 developed from corruption investigations—the Influencer case—that linked individuals close to the government of António Costa with alleged influence-peddling in lithium mining and green hydrogen concession decisions. Costa resigned despite not being a direct suspect, triggering early elections that produced a narrow victory for the centre-right Democratic Alliance (AD) under Luís Montenegro.\n\nThe Montenegro government, operating as a minority, faced its own political turbulence: a confidence motion in early 2025, triggered by questions about the prime minister's consulting activities and perceived conflicts of interest, produced a political crisis. The episode reinforced the sense that Portuguese politics has a systemic corruption problem that crosses party lines.\n\nAnticorruption prosecutors—the Central Investigation and Prosecution Department (DCIAP) and the Corruption Prevention Council (CPC)—have been central actors in the political drama. Debates about prosecutorial independence, the duration of investigations, and whether asset freezes and prosecutions are proportionate have been aired both in political forums and in legal challenges.\n\nFor Portuguese civil society and diaspora, the corruption scandals reinforce ambivalence about whether governance at home meets the standards they experience in their countries of residence. Portugal's otherwise strong economic performance and tourism success makes the governance deficit more jarring.",
    officialLinks: [
      { label: "Portuguese Assembleia da República", url: "https://www.parlamento.pt/en" },
      { label: "DCIAP – Central Investigation Department (Portugal)", url: "https://www.ministeriopublico.pt" },
      { label: "GRECO Portugal evaluation", url: "https://www.coe.int/en/web/greco/evaluations/portugal" }
    ],
    newsLinks: [
      { label: "Portugal's PM Costa resigns amid corruption probe linked to his circle", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-11-08" },
      { label: "Montenegro faces confidence vote over consulting conflict of interest", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-13" },
      { label: "Portugal's anti-corruption record improves but political scandals continue", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-22" }
    ],
    endorsements: [
      { name: "Transparency International Portugal", url: "https://transparencia.pt" },
      { name: "Conselho de Prevenção da Corrupção (CPC)", url: "https://www.cpc.tcontas.pt" },
      { name: "GRECO (Council of Europe)", url: "https://www.coe.int/en/web/greco" }
    ],
    supporterCount: 1087
  },
  "pt-003": {
    detail: "Portugal has one of the world's largest diasporas relative to domestic population: over 2.3 million Portuguese citizens live abroad, primarily in France (700,000+), Switzerland, the UK, Luxembourg, the US, and Brazil. This represents nearly a quarter of the total citizen population, making the diaspora's political and economic weight enormous.\n\nDiaspora remittances—consistently above €3 billion annually—are a significant macroeconomic flow that supports household consumption and investment in Portugal, particularly in interior and northern regions where employment opportunities are weaker. The counterpart is a long-term brain drain: emigration of educated professionals has been a structural feature of the Portuguese economy for decades.\n\nPolitical representation of the diaspora is achieved through four dedicated parliamentary seats: two elected by Portuguese in Europe and two by Portuguese in other regions. Voting by mail is available, and consular services have been progressively improved. Diaspora voters have historically shown different preferences from the domestic electorate on some issues, and their turnout has been lower.\n\nReturn migration has been a policy priority but with limited success: government programmes including fiscal incentives for returning emigrants have generated criticism for their design (particularly tax advantages that create competitive distortions) and limited uptake. Housing affordability in Lisbon and Porto has been cited as a key barrier to return by diaspora communities in France and Switzerland.",
    officialLinks: [
      { label: "Portuguese Ministry of Foreign Affairs – Communities Abroad", url: "https://www.comunidades.gov.pt" },
      { label: "SGMAI – Portuguese Directorate-General for Internal Administration", url: "https://www.sg.mai.gov.pt" },
      { label: "National Electoral Commission – overseas voting", url: "https://www.cne.pt" }
    ],
    newsLinks: [
      { label: "Portuguese diaspora in France exceeds 700,000 – largest community abroad", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-10" },
      { label: "Return migrant tax breaks draw criticism for creating two-tier system", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-07" },
      { label: "Portugal's diaspora remittances hit record €3.8bn as emigrants thrive abroad", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-19" }
    ],
    endorsements: [
      { name: "Conselho das Comunidades Portuguesas", url: "https://www.comunidades.gov.pt/ccp" },
      { name: "AGIR – Association for Emigrant Integration and Return", url: "https://www.agir.pt" },
      { name: "Observatório da Emigração", url: "https://observatorioemigracao.pt/np4/home.html" }
    ],
    supporterCount: 2031
  },
  "sk-001": {
    detail: "Slovakia under Prime Minister Robert Fico, who returned to power in October 2023, has adopted one of the most conspicuously divergent positions from the EU consensus on Ukraine. Fico has visited Moscow, met Putin, argued publicly that Ukraine cannot win the war, opposed EU military aid, and blocked certain Slovak state contributions to Ukraine support—while maintaining Slovakia's NATO membership and formal EU commitments.\n\nFico was shot and critically wounded in May 2024 by a gunman who later stated political motivations connected to Fico's policies. The attempted assassination intensified polarisation: government supporters blamed opposition politicians and civil society for creating a climate of hatred; critics warned the government was exploiting the shooting to delegitimise political opposition.\n\nSlovakia's position creates friction within the Visegrád Group (V4) and with immediate neighbours: Czechia, Poland, and the Baltic states are strong Ukraine supporters, while Fico's position is aligned more closely with Orbán's Hungary. The divergence is stark within a regional grouping that was previously more cohesive on security matters.\n\nFor Slovak diaspora—concentrated in the UK, Czech Republic, Austria, and Germany—Fico's foreign policy generates mixed reactions. Some diaspora Slovaks share scepticism about Ukraine support; others are embarrassed by Slovakia's international positioning and concerned about the rule of law trajectory at home.",
    officialLinks: [
      { label: "Slovak Ministry of Foreign Affairs", url: "https://www.mzv.sk/en/ministry" },
      { label: "NATO Slovakia", url: "https://www.nato.int/cps/en/natohq/topics_50105.htm" },
      { label: "EU Council – Slovakia participation in Ukraine decisions", url: "https://www.consilium.europa.eu" }
    ],
    newsLinks: [
      { label: "Slovakia's Fico visits Moscow as EU allies condemn the trip", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-07-26" },
      { label: "Slovak PM Fico shot in assassination attempt, survives", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-05-15" },
      { label: "Bratislava's pro-Russia stance isolates Slovakia within NATO's eastern flank", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-01-29" }
    ],
    endorsements: [
      { name: "Slovak Foreign Policy Association", url: "https://www.sfpa.sk/en/" },
      { name: "European Council on Foreign Relations", url: "https://ecfr.eu" },
      { name: "Slovak Governance Institute", url: "https://www.governance.sk" }
    ],
    supporterCount: 2134
  },
  "sk-002": {
    detail: "Slovakia has experienced a significant deterioration in rule of law and press freedom indicators since Robert Fico returned to power in 2023. The government moved quickly to dismantle or defund anti-corruption bodies built under previous governments, including the Special Prosecutor's Office, which had been investigating corruption among politically connected individuals.\n\nThe European Commission's rule of law report for 2024 flagged concerns about the independence of the prosecution, media freedom, and the appointments process for key constitutional and judicial bodies. Freedom House downgraded Slovakia's democratic score, and Reporters Without Borders noted a worsening press freedom environment with increased political pressure on public broadcasters.\n\nThe shooting of Fico in May 2024 created a political atmosphere in which criticism of the government was increasingly framed as dangerous or illegitimate. Restrictions on NGO funding were proposed in a manner critics compared to Hungary's approach, though implementation has faced legal challenges.\n\nFor Slovak civil society—particularly the investigative journalism community that gained prominence after the murders of journalist Ján Kuciak and his fiancée in 2018—the current government represents a direct threat to the institutional progress made in response to that crisis. International press freedom organisations including RSF have closely monitored the situation.",
    officialLinks: [
      { label: "European Commission Slovakia Rule of Law Report 2024", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "Slovak Special Prosecutor's Office (abolished 2024)", url: "https://www.gov.sk" },
      { label: "RSF Slovakia", url: "https://rsf.org/en/country/slovakia" }
    ],
    newsLinks: [
      { label: "Slovakia abolishes Special Prosecutor's Office in rule of law reversal", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-04-03" },
      { label: "EU flags deepening Slovakia press freedom concerns", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-10-14" },
      { label: "Slovak civil society mobilises against NGO funding restrictions", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-07" }
    ],
    endorsements: [
      { name: "VIA IURIS – Slovak rule of law NGO", url: "https://viaiuris.sk/en/" },
      { name: "Amnesty International Slovakia", url: "https://www.amnesty.sk" },
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" }
    ],
    supporterCount: 1623
  },
  "sk-003": {
    detail: "Slovakia has become a leading car manufacturing country in per-capita terms, hosting major Volkswagen, Stellantis (Peugeot-Citroën), and Kia plants. The automotive sector accounts for a disproportionate share of industrial output and exports. This concentration creates vulnerability to sector-wide shifts, including the European transition to electric vehicles and potential changes in automotive trade policy.\n\nRegional disparities are stark. Western Slovakia—anchored by Bratislava and its industrial belt—has per-capita income and employment rates comparable to Austrian regions across the border. Eastern Slovakia, particularly the Prešov and Košice regions, has significantly higher unemployment, lower wages, and weaker public services. Roma communities, concentrated in eastern Slovakia, face extreme socioeconomic exclusion that has resisted decades of policy interventions.\n\nThe Slovak government has sought EU cohesion funds to address regional disparities, but absorption has been hampered by administrative capacity constraints and governance concerns that have made Brussels scrutinise Slovak fund usage carefully. Infrastructure investment—particularly rail connections between eastern Slovakia and Bratislava—is among the most frequently cited regional development needs.\n\nThe transition to electric vehicles presents a structural risk: Slovak automotive plants produce primarily internal combustion engine vehicles, and the retooling required for EV production is capital-intensive. Volkswagen's Bratislava plant has announced EV investments, but the timeline and scale of transition across the sector remain uncertain.",
    officialLinks: [
      { label: "Slovak Investment and Trade Development Agency (SARIO)", url: "https://www.sario.sk/en" },
      { label: "European Commission Slovakia cohesion data", url: "https://cohesiondata.ec.europa.eu/countries/SK" },
      { label: "Slovak Ministry of Finance – regional disparities", url: "https://www.mfsr.sk/en/" }
    ],
    newsLinks: [
      { label: "Slovakia's automotive sector braces for EV transition as EU mandate approaches", url: "https://www.reuters.com/business/autos-transportation/", source: "Reuters", publishedAt: "2025-03-14" },
      { label: "Eastern Slovakia unemployment rate double western level – EU data", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-12-08" },
      { label: "Roma communities remain excluded from Slovak economic growth, NGOs warn", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-05-05" }
    ],
    endorsements: [
      { name: "Člověk v tísni (People in Need) Slovakia", url: "https://www.clovekvtisni.sk/en" },
      { name: "ERRC – European Roma Rights Centre", url: "https://www.errc.org" },
      { name: "Slovak Governance Institute", url: "https://www.governance.sk" }
    ],
    supporterCount: 692
  },
  "si-001": {
    detail: "Slovenia's April 2022 parliamentary elections represented a decisive pivot: Robert Golob's liberal Gibanje Svoboda party won over a third of votes and formed a three-party coalition displacing Janez Janša's SDS. The transition addressed concerns that Janša's government had undermined judicial independence, politicised public institutions, and diverted COVID relief funds in questionable ways—concerns that had attracted EU and civil society criticism during his term.\n\nThe transition restored Slovenia's public broadcaster (RTV Slovenia) to more independent governance after contested management changes under Janša. The government also addressed EU concerns about the national anti-corruption commission and the positions of several government-connected public officials, unlocking previously frozen EU funds.\n\nSlovenia's democratic quality indicators—press freedom, judicial independence, civil society space—improved measurably in Commission assessments after 2022. However, the Gibanje Svoboda-led government faces its own challenges: coalition management, economic headwinds, and the 2023 floods that created significant fiscal demands.\n\nFor Slovenes abroad—primarily in Germany, Austria, and Switzerland—the democratic reversal and subsequent restoration is watched as evidence of the fragility of democratic institutions in small Central European states, but also of their resilience when voters actively choose course correction.",
    officialLinks: [
      { label: "Slovenian National Assembly", url: "https://www.dz-rs.si/wps/portal/Home/en" },
      { label: "European Commission Slovenia Rule of Law Report", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "RTV Slovenia – public broadcaster governance", url: "https://www.rtvslo.si/strani/rtv-slovenija/180" }
    ],
    newsLinks: [
      { label: "Slovenia elects liberal Golob in landslide, ousting Janša's government", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2022-04-25" },
      { label: "Slovenia restores RTV independence after contested governance changes", url: "https://rsf.org/en/country/slovenia", source: "Reporters Without Borders", publishedAt: "2023-06-12" },
      { label: "EU lifts concerns about Slovenia rule of law in 2024 report", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-07-24" }
    ],
    endorsements: [
      { name: "Transparency International Slovenia", url: "https://www.transparency.si" },
      { name: "Amnesty International Slovenia", url: "https://www.amnesty.si" },
      { name: "Peace Institute Slovenia", url: "https://www.mirovni-institut.si/en/" }
    ],
    supporterCount: 743
  },
  "si-002": {
    detail: "Slovenia's advocacy for Western Balkans EU enlargement has been consistent across governments, reflecting both geographic proximity—Slovenia borders Croatia (EU) and shares regions historically linked to Yugoslav successor states—and a strategic interest in regional stability. Ljubljana has repeatedly argued that EU membership prospects are the most effective tool for anchoring Balkan democracies and preventing capture by Russia or China.\n\nProgress in Western Balkans enlargement has been slower than Ljubljana advocates. While Albania and North Macedonia opened formal accession negotiations in 2022, Serbia's negotiations have effectively stalled over rule of law concerns and Kosovo relations, and Bosnia's path remains complicated by its constitutional structure and secessionist tensions in Republika Srpska.\n\nMigration management at Slovenia's borders—particularly with Croatia and through the Balkan route—has been a recurring domestic challenge. While Croatia's Schengen accession in 2023 moved the external EU border south, Slovenia remains a transit country for irregular migration and has dealt with accommodation and processing demands that exceed dedicated infrastructure.\n\nFor Slovenia's foreign policy, Western Balkans engagement is partly a legacy of Yugoslav-era connections and partly a practical security interest: instability or authoritarian consolidation in neighbouring states has direct spillover effects for Slovenia's economy, migration flows, and energy infrastructure.",
    officialLinks: [
      { label: "Slovenian Ministry of Foreign Affairs – Balkans", url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-foreign-affairs/" },
      { label: "European Commission Western Balkans enlargement", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/western-balkans_en" },
      { label: "UNHCR Slovenia", url: "https://www.unhcr.org/si" }
    ],
    newsLinks: [
      { label: "Ljubljana pushes EU enlargement as regional stability priority", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-06" },
      { label: "Slovenia joins enlargement advocates pushing for accelerated Balkans process", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-04-17" },
      { label: "Migrant arrivals at Slovenia border increase as Balkan route stays active", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-03" }
    ],
    endorsements: [
      { name: "CEI – Central European Initiative", url: "https://www.cei.int" },
      { name: "Peace Institute Slovenia", url: "https://www.mirovni-institut.si/en/" },
      { name: "ECFR – European Council on Foreign Relations", url: "https://ecfr.eu" }
    ],
    supporterCount: 541
  },
  "si-003": {
    detail: "The August 2023 floods in Slovenia were the worst natural disaster in the country's recorded history. Triggered by extreme rainfall events over two days, the floods and landslides caused an estimated €500 million in damage, killed at least six people, and devastated communities in Carinthia, Savinja, and other river valleys. Major infrastructure including roads, bridges, and a national motorway section was damaged or destroyed.\n\nThe reconstruction programme required EU state aid approval for exceptional public support and drew on EU Solidarity Fund resources. The scale of the response tested Slovenia's public administration and emergency management systems, and the European Commission fast-tracked some procedural requirements to allow faster public investment.\n\nThe floods accelerated domestic debate about climate adaptation infrastructure: levee improvements, flood plains management, construction restrictions in flood-risk zones, and the sustainability of some communities in the most vulnerable valleys are now active policy questions rather than hypothetical ones. Insurance penetration for flood risk is lower than optimal, creating significant public sector liability.\n\nSlovenia's climate strategy calls for net-zero emissions by 2050 and significant renewable expansion, with the floods adding urgency to both mitigation (reducing future risk by limiting warming) and adaptation (living with the consequences of warming already locked in). The interaction between climate investment and infrastructure reconstruction has shaped the government's NextGenerationEU spending priorities.",
    officialLinks: [
      { label: "Slovenian Environment Agency – flood data", url: "https://www.arso.gov.si/en/" },
      { label: "EU Solidarity Fund – Slovenia flood allocation", url: "https://commission.europa.eu/strategy-and-policy/eu-budget/long-term-eu-budget/2021-2027/flexibility-and-special-instruments/eu-solidarity-fund_en" },
      { label: "Slovenian Disaster Relief Fund", url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-natural-resources-and-spatial-planning/" }
    ],
    newsLinks: [
      { label: "Devastating floods hit Slovenia: worst disaster in modern history", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-08-06" },
      { label: "EU Solidarity Fund provides €400m for Slovenian flood recovery", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-02-14" },
      { label: "Slovenia rebuilds after floods but climate adaptation plan still lacking, experts say", url: "https://www.reuters.com/business/environment/", source: "Reuters", publishedAt: "2024-11-08" }
    ],
    endorsements: [
      { name: "Umanotera – Slovenian environmental foundation", url: "https://www.umanotera.org/en" },
      { name: "WWF Adria – Western Balkans and Slovenia", url: "https://www.wwfadria.org" },
      { name: "IPCC Working Group II (climate adaptation)", url: "https://www.ipcc.ch" }
    ],
    supporterCount: 892
  },
  "es-001": {
    detail: "Spain's 2024 amnesty law—formally the 'Organic Law for the Normalisation of the Institutional, Political and Social Situation in Catalonia'—was the most controversial piece of legislation in Spanish politics in years. Passed with the support of pro-independence Catalan parties whose votes Pedro Sánchez needed to maintain his government, it granted amnesty to those involved in the 2017 independence referendum and subsequent events, covering acts related to the referendum, the October 2017 unilateral independence declaration, and subsequent protest activity.\n\nThe constitutionality of the law was challenged before the Constitutional Court, which examined whether a legislature could amnesty acts that had been subject to criminal prosecution and whether the law was consistent with principles of equality before the law and judicial independence. The court's deliberations continued into 2025, with a decision pending.\n\nFor Catalan independence parties, the amnesty enabled the return of exiled political figures—including former regional president Carles Puigdemont, who had been in Belgium since 2017. The political calculation was that normalisation of the situation would enable a new round of negotiation about Catalonia's status, including a possible agreed referendum. For the PP, Vox, and much of the Spanish political mainstream, the amnesty represented a capitulation to secessionism that violated equal treatment of citizens under the law.\n\nThe amnesty debate intersects with deeper questions about how to manage territorial diversity in a state with strong regional identities and where the democratic legitimacy of existing constitutional arrangements is contested by significant parts of the population.",
    officialLinks: [
      { label: "Spanish Constitutional Court", url: "https://www.tribunalconstitucional.es/en" },
      { label: "Spanish Congress of Deputies – amnesty law", url: "https://www.congreso.es/en" },
      { label: "Venice Commission – amnesty law compatibility", url: "https://www.venice.coe.int/webforms/documents/?country=38" }
    ],
    newsLinks: [
      { label: "Spain's amnesty law passes amid fierce opposition and protests", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-05-30" },
      { label: "Puigdemont returns to Spain after amnesty takes effect", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-08-08" },
      { label: "Spanish Constitutional Court examines amnesty law's legal basis", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-17" }
    ],
    endorsements: [
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" },
      { name: "Amnesty International Spain", url: "https://www.amnesty.es" },
      { name: "International Federation for Human Rights (FIDH)", url: "https://www.fidh.org" }
    ],
    supporterCount: 2341
  },
  "es-002": {
    detail: "Spain's 2021 labour market reform, introduced by royal decree under the Pedro Sánchez government with trade union support (and initially without employer agreement), constituted one of the most significant changes to Spanish employment law in decades. The reform reversed key elements of the 2012 reform under Mariano Rajoy, restoring the primacy of sectoral collective bargaining over firm-level agreements, restricting the use of temporary contracts, and strengthening workers' rights.\n\nThe reform achieved its headline goal: the share of temporary contracts in Spanish employment fell dramatically from approximately 26% to below 15% within two years, as employers converted precarious relationships to permanent or fixed-term contracts compliant with the new rules. This convergence toward EU norms was acknowledged positively by the European Commission and IMF.\n\nHowever, youth unemployment remains structurally high by EU standards, running consistently above 25% even in a period of overall employment growth. The causes—school-to-work transition failures, geographic mismatches between young workers and job opportunities, qualification mismatches—are not directly addressed by the reform's focus on contract type.\n\nFor Spanish diaspora—particularly in Germany, the UK, France, and Latin America—labour market quality is a direct personal experience: many left partly because Spanish labour market precarity made accumulating savings and stable careers difficult. The reform's results are followed with genuine interest by potential returnees assessing whether conditions have improved enough to justify returning.",
    officialLinks: [
      { label: "Spanish Ministry of Labour and Social Economy", url: "https://www.mites.gob.es/en/index.htm" },
      { label: "Spanish State Employment Service (SEPE)", url: "https://www.sepe.es/HomeSepe/que-es-el-sepe/english-web.html" },
      { label: "European Commission Spain labour market assessment", url: "https://economy-finance.ec.europa.eu/economic-and-fiscal-policy-coordination/eu-economic-governance-monitoring-prevention-correction/european-semester/country-specific-information/spain_en" }
    ],
    newsLinks: [
      { label: "Spain's temporary contract share halves after labour reform", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-02-09" },
      { label: "Youth unemployment persists in Spain despite labour market gains", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-10" },
      { label: "IMF credits Spain labour reform for improving job quality", url: "https://www.imf.org/en/countries/ESP", source: "IMF", publishedAt: "2024-11-21" }
    ],
    endorsements: [
      { name: "CCOO – Comisiones Obreras (largest Spanish trade union)", url: "https://www.ccoo.es" },
      { name: "UGT – General Union of Workers Spain", url: "https://www.ugt.es" },
      { name: "INJUVE – Youth Institute Spain", url: "https://www.injuve.es" }
    ],
    supporterCount: 1432
  },
  "es-003": {
    detail: "Spain's Housing Law of 2023 (Ley por el Derecho a la Vivienda) introduced the EU's most comprehensive rent control framework: in declared 'stressed rental markets'—areas where rent has increased by more than 3% above CPI in five years or where rental costs exceed 30% of average household income—landlords are restricted in raising rents beyond the limits set by a national reference index.\n\nImplementation has been uneven: the law requires regional governments to formally declare stressed markets, and several regions governed by the PP refused to activate the mechanism, creating a patchwork of application across Spain. Catalonia, which had its own rent control law struck down by the Constitutional Court in 2021, implemented the national law's measures in Barcelona.\n\nThe empirical debate is active: proponents point to rent stabilisation in areas where the law has been applied; critics argue the freeze reduces rental supply as landlords withdraw properties or convert them to other uses (tourism apartments, owner occupation), ultimately worsening availability. International economic literature is divided on rent control's supply effects.\n\nFor Spanish diaspora members who own property in Spain—often inherited or purchased as an investment—the regulatory environment created by rent control and restrictions on tourist apartment licences affects asset values and rental income. This creates a diaspora constituency concerned about property rights that does not map neatly onto the domestic political debate about housing affordability.",
    officialLinks: [
      { label: "Spanish Ministry of Housing", url: "https://www.mitma.gob.es/vivienda" },
      { label: "Spanish Housing Law 2023 text", url: "https://www.boe.es" },
      { label: "Spanish Constitutional Court housing rulings", url: "https://www.tribunalconstitucional.es/en" }
    ],
    newsLinks: [
      { label: "Spain's rent control: early data shows stabilisation in Barcelona but not Madrid", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-24" },
      { label: "Landlords in Spain convert rentals to tourist apartments after rent cap", url: "https://www.theguardian.com/world/spain/", source: "The Guardian", publishedAt: "2025-03-28" },
      { label: "Spanish regions split on activating housing law's rent control provisions", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-15" }
    ],
    endorsements: [
      { name: "Associació de Propietaris de Catalunya (landlord perspective)", url: "https://www.apc.cat" },
      { name: "Sindicat de Llogateres (tenant unions)", url: "https://www.sindicatdellogateres.org" },
      { name: "Observatorio Metropolitano de Madrid", url: "https://www.observatoriometropolitano.org" }
    ],
    supporterCount: 1823
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 6`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
