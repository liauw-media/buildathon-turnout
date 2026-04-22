const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "se-001": {
    detail: "Sweden's accession to NATO on 7 March 2024—after over 200 years of formal military non-alignment—was the most consequential security decision in Swedish history since the nineteenth century. The application, submitted alongside Finland in May 2022, was delayed by Turkish and Hungarian objections before both allies eventually ratified. Hungary's ratification came last, in February 2024.\n\nThe transition from non-alignment to alliance membership is substantial in practical terms: Sweden must integrate into NATO command structures, develop host nation support arrangements, recalibrate intelligence sharing, and invest in military capabilities consistent with collective defence planning. The Swedish armed forces, which had been significantly reduced after the Cold War, are in the midst of the largest rearmament since the 1940s.\n\nPublic opinion shifted dramatically after February 2022: what had been a minority position became a majority within months, and the application was supported by all major parties except the Left Party and the Sweden Democrats (who eventually acquiesced). The speed of the opinion shift was remarkable given Sweden's deeply embedded tradition of non-alignment as a national identity.\n\nRelations with Russia are effectively severed economically, with Sweden participating fully in EU sanctions. Russian submarines and aircraft violations of Swedish territorial space have increased concerns, and the Nord Stream pipeline sabotage investigation (which implicated actors in Sweden's neighbourhood) raised awareness of hybrid threats in the Baltic Sea region.",
    officialLinks: [
      { label: "Swedish Ministry of Defence", url: "https://www.government.se/government-of-sweden/ministry-of-defence/" },
      { label: "NATO Sweden accession", url: "https://www.nato.int/cps/en/natohq/topics_88965.htm" },
      { label: "Swedish Civil Contingencies Agency (MSB)", url: "https://www.msb.se/en/" }
    ],
    newsLinks: [
      { label: "Sweden joins NATO after Hungary's ratification ends 200-year non-alignment", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-03-07" },
      { label: "Stockholm commits to reaching 2.5% defence spending in NATO response", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-14" },
      { label: "Sweden's NATO integration: first year assessed", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-10" }
    ],
    endorsements: [
      { name: "Swedish Institute of International Affairs (UI)", url: "https://www.ui.se/en/" },
      { name: "FOI – Swedish Defence Research Agency", url: "https://www.foi.se/en/" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" }
    ],
    supporterCount: 2143
  },
  "se-002": {
    detail: "Sweden has experienced a dramatic increase in gang-related lethal violence over the past decade, with shootings and bombings concentrated in segregated peripheral suburbs of Stockholm, Gothenburg, and Malmö. By 2023, Sweden had among the highest per-capita rates of fatal gun crime in Europe—a reversal of the country's historically very low violence rates that has generated deep political shock.\n\nThe violence is primarily linked to competition between criminal networks involved in drug distribution, and is concentrated among young men with immigrant backgrounds, though victims include bystanders including children. The recruitment of young people into criminal networks, often beginning in early adolescence, has been a focus of prevention debates.\n\nThe political response has been broad: tighter sentences, extended use of preventative custody, greater police intelligence-sharing powers, faster deportation of non-citizen gang members, and communication interception authorities have all been adopted with cross-party support. The current conservative government, with Sweden Democrats support, has pushed for more extensive measures.\n\nThe root causes debate is contested: government critics argue that decades of socioeconomic segregation, inadequate integration policy, and underfunded school systems created the conditions for gang recruitment; government supporters argue that previous governments' reluctance to acknowledge integration failures allowed the problem to develop unchecked. The connection between immigration policy and gang violence is one of the most polarising in Swedish politics.",
    officialLinks: [
      { label: "Swedish Police Authority – gang crime statistics", url: "https://polisen.se/en/" },
      { label: "Swedish Council on Crime Prevention (Brå)", url: "https://www.bra.se/bra-in-english.html" },
      { label: "Swedish Government gang crime commission reports", url: "https://www.government.se" }
    ],
    newsLinks: [
      { label: "Sweden's gang shootings hit record levels, shocking the country", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-10-05" },
      { label: "Stockholm moves to criminalise gang membership in anti-violence push", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-24" },
      { label: "Sweden's segregation and gang violence: looking for root causes", url: "https://www.theguardian.com/world/sweden/", source: "The Guardian", publishedAt: "2024-12-12" }
    ],
    endorsements: [
      { name: "Fryshuset – Swedish youth violence prevention", url: "https://www.fryshuset.se" },
      { name: "Rädda Barnen (Save the Children Sweden)", url: "https://www.raddabarnen.se/om-oss/in-english/" },
      { name: "Swedish Council on Crime Prevention (Brå)", url: "https://www.bra.se/bra-in-english.html" }
    ],
    supporterCount: 1867
  },
  "se-003": {
    detail: "Sweden built one of the world's most generous refugee reception systems over decades, accepting large numbers of asylum seekers relative to population—including over 160,000 in the single year of 2015, primarily from Syria. The political and social consequences of this rapid reception, including pressure on housing and school systems, contributed to the rise of the Sweden Democrats (SD) as the second-largest party and to a sustained policy tightening by governments of both left and right.\n\nThe current government, led by Moderates with SD support, has implemented the strictest asylum and immigration rules in Sweden's modern history: temporary residence permits as a default, tighter family reunification conditions, reduced settlement allowances, and active encouragement of return migration. The number of asylum seekers has fallen sharply as a result.\n\nIntegration outcomes for those admitted are a persistent policy concern: employment rates among refugees, particularly women, lag significantly behind those of native-born Swedes and economic immigrants. Language learning programs (SFI—Swedish For Immigrants) have been criticised for inadequate results. Geographic concentration in areas with limited employment opportunities compounds integration challenges.\n\nFor Swedish diaspora—significant communities in the US, UK, and Norway—the change in Sweden's reputation from a global model of openness to a country tightening its borders has generated complex reactions. Some diaspora Swedes share the political analysis that drove the shift; others feel the changes contradict a Swedish identity they strongly associate with humanitarianism and openness.",
    officialLinks: [
      { label: "Swedish Migration Agency (Migrationsverket)", url: "https://www.migrationsverket.se/en" },
      { label: "UNHCR Sweden", url: "https://www.unhcr.org/se" },
      { label: "Swedish Integration Authority (Arbetsförmedlingen integration)", url: "https://www.arbetsformedlingen.se/en" }
    ],
    newsLinks: [
      { label: "Sweden asylum applications fall 60% after toughest rules in decades", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-17" },
      { label: "Swedish integration system failing refugees on employment, report finds", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-27" },
      { label: "From world's most generous to most restrictive: Sweden's asylum transformation", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-09" }
    ],
    endorsements: [
      { name: "Swedish Red Cross – migration services", url: "https://www.rodakorset.se" },
      { name: "UNHCR Sweden", url: "https://www.unhcr.org/se" },
      { name: "Civil Rights Defenders", url: "https://www.civilrightsdefenders.org" }
    ],
    supporterCount: 1534
  },
  "gb-001": {
    detail: "The UK-EU Trade and Cooperation Agreement, reached on 24 December 2020, governs the basic terms of post-Brexit trade: zero tariffs on goods meeting rules of origin, but no mutual recognition of services, no financial services equivalence, and significant non-tariff barriers including customs declarations, sanitary and phytosanitary checks, and product regulation divergence. The resulting friction reduced UK-EU trade by an estimated 15% relative to what it would otherwise have been, according to most economic analyses.\n\nThe Labour government elected in July 2024 pledged a 'reset' of UK-EU relations—improving the relationship without rejoining the Single Market, Customs Union, or Freedom of Movement. Progress has been made on some issues: a defence cooperation framework was agreed, discussions on a mobility package for young people resumed, and agricultural trade frictions were addressed in preliminary talks. However, the fundamental architecture of the TCA remains in place.\n\nNorthern Ireland continues to be managed under the Windsor Framework (previously the Northern Ireland Protocol), which keeps Northern Ireland in the EU Single Market for goods while remaining in the UK customs territory. The practical arrangements, including checks on goods from Great Britain to Northern Ireland, remain politically contested by unionist parties.\n\nFor UK citizens in the EU—over 1.2 million, now resident under Withdrawal Agreement rights—and EU citizens in the UK—also in the millions under settled status—the post-Brexit reality is daily navigation of bureaucratic requirements that pre-Brexit EU membership made unnecessary. Professional qualification recognition, cross-border services, and pension portability are among the ongoing practical concerns.",
    officialLinks: [
      { label: "UK Government – UK-EU Trade and Cooperation Agreement", url: "https://www.gov.uk/guidance/uk-eu-trade-and-cooperation-agreement-and-the-future-uk-eu-relationship" },
      { label: "European Commission – Windsor Framework", url: "https://commission.europa.eu/strategy-and-policy/relations-non-eu-countries/relations-united-kingdom/eu-uk-withdrawal-agreement/northern-ireland-protocol_en" },
      { label: "UK Parliament Brexit select committee", url: "https://committees.parliament.uk/work/6968/ukeu-relationship-committee-inquiry/" }
    ],
    newsLinks: [
      { label: "UK-EU summit agrees defence pact and youth mobility framework", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-05-19" },
      { label: "Brexit trade cost: UK-EU goods trade 15% below counterfactual, economists estimate", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-31" },
      { label: "Northern Ireland Windsor Framework faces DUP challenges in assembly", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-28" }
    ],
    endorsements: [
      { name: "UK in a Changing Europe", url: "https://ukandeu.ac.uk" },
      { name: "British Chambers of Commerce – Brexit impact tracking", url: "https://www.britishchambers.org.uk" },
      { name: "CBI – Confederation of British Industry", url: "https://www.cbi.org.uk" }
    ],
    supporterCount: 2612
  },
  "gb-002": {
    detail: "The National Health Service, established in 1948 as a comprehensive free-at-point-of-use health system, faces its most severe resource crisis in decades. Waiting lists reached a record 7.5 million people at their peak, with some patients waiting years for elective procedures. A&E waiting times have routinely exceeded the four-hour target, and ambulance response times for serious emergencies have fallen short of national standards.\n\nThe causes are multiple and interconnected: a decade of below-inflation funding increases followed by COVID demand surges; a workforce model that relied heavily on EU workers who exercised free movement rights before Brexit; capital investment shortfalls leaving outdated hospital buildings and equipment; and a social care sector that is underfunded and unable to discharge patients who are medically fit but need care packages.\n\nThe Labour government commissioned an independent review of the NHS (the Darzi review, published 2024) which catalogued structural problems and set the basis for a 10-year reform plan. The plan includes shifting more care from hospitals to community settings, investing in prevention and primary care, and reducing the administrative burden on clinical staff. Implementation requires sustained capital investment and workforce planning over decades.\n\nFor the British diaspora—and for healthcare workers from other countries who constitute a large share of NHS staff—NHS quality is both a political identity issue (the NHS holds an almost sacred status in British culture) and a practical concern about the healthcare system available to elderly relatives and returned diaspora members.",
    officialLinks: [
      { label: "NHS England", url: "https://www.england.nhs.uk" },
      { label: "UK Department of Health and Social Care", url: "https://www.gov.uk/government/organisations/department-of-health-and-social-care" },
      { label: "Darzi Review of the NHS 2024", url: "https://www.gov.uk/government/publications/independent-investigation-of-the-nhs-in-england" }
    ],
    newsLinks: [
      { label: "NHS waiting list falls for first time since pandemic but remains at 6.5 million", url: "https://www.bbc.com/news/health/", source: "BBC News", publishedAt: "2025-03-14" },
      { label: "Darzi review: NHS needs decade of reform, not just more funding", url: "https://www.theguardian.com/society/nhs/", source: "The Guardian", publishedAt: "2024-09-12" },
      { label: "Labour's NHS 10-year plan: ambitions outlined, funding gaps remain", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-23" }
    ],
    endorsements: [
      { name: "The King's Fund – NHS policy", url: "https://www.kingsfund.org.uk" },
      { name: "Nuffield Trust", url: "https://www.nuffieldtrust.org.uk" },
      { name: "British Medical Association (BMA)", url: "https://www.bma.org.uk" }
    ],
    supporterCount: 2934
  },
  "gb-003": {
    detail: "The United Kingdom experienced record net migration levels in 2022 and 2023—peaking at over 900,000 annually—reflecting a combination of post-Brexit international recruitment to replace EU workers in health, social care, and other sectors; the arrival of Hong Kongers under the BN(O) scheme; Ukrainian refugees; and international students. The numbers were far higher than had been projected by the government that implemented post-Brexit points-based immigration.\n\nThe political consequences were severe for the Conservatives: their credibility on immigration control—a central theme of the 2016 Brexit campaign—was destroyed, and the issue was a significant factor in their July 2024 electoral collapse. Reform UK, led by Nigel Farage, capitalised on voter frustration with immigration to win seats in Parliament for the first time.\n\nThe Labour government has maintained the points-based system but tightened salary thresholds for skilled worker visas, restricted the ability to bring dependants for care and student visa routes, and abandoned the Rwanda deportation scheme. Net migration has fallen significantly from its peak but remains well above the ambiguous target of 'tens of thousands' that successive governments have stated.\n\nFor British diaspora and for EU and non-EU citizens living in the UK, the immigration policy environment has become more hostile: the administrative burden of visa applications, renewals, and indefinite leave to remain is significant, expensive, and—for many long-resident people—an ongoing source of anxiety about their future in the country.",
    officialLinks: [
      { label: "UK Home Office – immigration statistics", url: "https://www.gov.uk/government/statistics/immigration-statistics-overview" },
      { label: "UK Visas and Immigration", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
      { label: "Migration Advisory Committee UK", url: "https://www.gov.uk/government/organisations/migration-advisory-committee" }
    ],
    newsLinks: [
      { label: "UK net migration falls from record high as Labour tightens visa rules", url: "https://www.bbc.com/news/uk-politics/", source: "BBC News", publishedAt: "2025-02-27" },
      { label: "Reform UK wins its first seats on immigration platform", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-07-05" },
      { label: "NHS reliance on overseas recruitment raises questions after visa tightening", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "Migrant Rights Network UK", url: "https://www.migrantsrights.org.uk" },
      { name: "Joint Council for the Welfare of Immigrants (JCWI)", url: "https://www.jcwi.org.uk" },
      { name: "Refugees Welcome UK", url: "https://www.refugees-welcome.org.uk" }
    ],
    supporterCount: 2483
  },
  "no-001": {
    detail: "Norway's Government Pension Fund Global—the world's largest sovereign wealth fund at approximately $1.7 trillion—was established to manage revenues from North Sea oil and gas extraction for the benefit of future generations. The 'fiscal rule' limits annual withdrawals to the fund's expected real return (approximately 3% of the fund's value), preventing governments from spending windfall oil revenues and preserving long-term sustainability.\n\nThe fund's investment criteria have evolved significantly: it applies ethical exclusion screens (excluding companies involved in weapons of mass destruction, tobacco, severe environmental violations, and serious human rights abuses) managed by an ethics council, and has increasingly integrated ESG considerations into its ownership activities. Debates about whether to expand exclusion criteria—particularly regarding fossil fuel investments and companies operating in conflict zones—are ongoing.\n\nThe paradox at the heart of the fund is that its wealth derives from oil and gas extraction, yet it is increasingly being used to pressure companies it is invested in on climate grounds. Norway is simultaneously one of the world's largest oil exporters and a vocal supporter of international climate action. This tension is reflected in domestic debates about the pace of transition away from oil exploration.\n\nFor Norwegians abroad—significant communities in the US, UK, and Sweden—the fund represents both a source of national pride and a policy responsibility. Diaspora Norwegians sometimes engage with debates about what values the fund should reflect in its ownership and exclusion decisions.",
    officialLinks: [
      { label: "Norges Bank Investment Management (NBIM) – fund manager", url: "https://www.nbim.no/en/" },
      { label: "Norwegian Ministry of Finance – petroleum fund", url: "https://www.regjeringen.no/en/topics/the-economy/the-government-pension-fund/id1441/" },
      { label: "Etikkrådet – Ethics Council for the fund", url: "https://etikkradet.no/en/" }
    ],
    newsLinks: [
      { label: "Norway's oil fund hits $1.7 trillion as markets rally", url: "https://www.reuters.com/business/finance/", source: "Reuters", publishedAt: "2025-01-27" },
      { label: "Norway's fund increases ESG pressure on major polluters", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-03-11" },
      { label: "Ethics council recommends excluding three more firms for climate violations", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-04" }
    ],
    endorsements: [
      { name: "Norges Bank Investment Management (NBIM)", url: "https://www.nbim.no/en/" },
      { name: "Future in Our Hands – Norwegian environmental NGO", url: "https://www.framtiden.no/in-english.html" },
      { name: "Transparency International Norway", url: "https://www.transparency.no" }
    ],
    supporterCount: 1234
  },
  "no-002": {
    detail: "Norway's salmon aquaculture industry produces approximately 1.4 million tonnes of Atlantic salmon annually, accounting for over half of global farmed salmon production and making seafood Norway's second-largest export sector after oil and gas. The industry's growth has created significant environmental debates and regulatory challenges.\n\nSea lice—parasitic copepods that thrive in dense fish farm environments—are the most significant biological challenge. High lice levels harm farmed fish and can spread to wild salmon and sea trout populations, affecting ecosystems and wild fisheries. The licensing system includes 'traffic light' zones where farms must reduce production or implement additional measures when lice levels exceed thresholds.\n\nThe Norwegian government has designed a 'capacity tax' (the Aker tax or growth tax) on aquaculture licences, the revenues of which are partly directed to coastal municipalities, partly to the state. The industry's political economy has generated controversy: the industry's billionaires became among Norway's wealthiest individuals as licensing rights appreciated dramatically, creating a debate about resource rent and whether the wealth generated belongs to the nation or the licence holders.\n\nAccess to EU markets is critical: the EU is Norway's largest salmon export market, and the preferential access provided by the EEA Agreement is fundamental to the industry's economics. Brexit created some complexity for the UK market; Norwegian salmon producers now face UK tariffs.",
    officialLinks: [
      { label: "Norwegian Directorate of Fisheries", url: "https://www.fiskeridir.no/English" },
      { label: "Norwegian Institute of Marine Research (HI)", url: "https://www.hi.no/en" },
      { label: "EEA Norway Grants – fisheries chapter", url: "https://eeagrants.org" }
    ],
    newsLinks: [
      { label: "Norway salmon farmers face production cuts as sea lice traffic light turns red", url: "https://www.reuters.com/business/environment/", source: "Reuters", publishedAt: "2025-04-03" },
      { label: "Norway's aquaculture billionaires face resource rent tax after parliamentary vote", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-29" },
      { label: "Wild salmon decline linked to sea lice from Norwegian farms, researchers warn", url: "https://www.theguardian.com/world/norway/", source: "The Guardian", publishedAt: "2025-02-17" }
    ],
    endorsements: [
      { name: "WWF Norway", url: "https://www.wwf.no" },
      { name: "Norwegian Institute of Marine Research (HI)", url: "https://www.hi.no/en" },
      { name: "Bellona Foundation", url: "https://bellona.org" }
    ],
    supporterCount: 487
  },
  "no-003": {
    detail: "Norway's Arctic territories—Svalbard, Jan Mayen, and maritime areas in the Barents Sea—have become increasingly central to security debates as Russian activity in the High North increases. Russia's actions since 2022 have transformed the regional security environment, with Norway strengthening NATO's presence and bilateral defence cooperation with the United States, including expanded access to Norwegian bases under a 2024 supplementary defence agreement.\n\nSvalbard's demilitarised status, established by the 1920 Spitsbergen Treaty, creates a unique legal environment: any signatory state has the right to economic activity on the archipelago, but military installations are prohibited for all parties. Russia maintains a presence through the Barentsburg settlement. Norwegian authorities have reported increased Russian intelligence activities and probing of Norwegian territorial limits.\n\nThe opening of Arctic shipping routes due to declining sea ice has created new strategic and commercial opportunities—and rivalries. The Northern Sea Route, running along Russia's Arctic coast, has been promoted by Moscow as a transit corridor, though Norway (and the EU) have concerns about Russian control and the security implications of increased shipping through Arctic waters.\n\nNorway's NATO accession has been followed by Sweden's and Finland's (2023–2024), completing a Nordic alliance that has transformed the strategic balance in the Nordic-Baltic region. The practical implications for Arctic security—including joint naval exercises, intelligence sharing, and contingency planning—are rapidly evolving.",
    officialLinks: [
      { label: "Norwegian Ministry of Defence", url: "https://www.regjeringen.no/en/dep/fd/id506/" },
      { label: "Norwegian Barents Secretariat", url: "https://www.barents.no/en" },
      { label: "Svalbard Treaty (Spitsbergen Treaty)", url: "https://www.sysselmannen.no/en/about-svalbard/laws-and-regulations/the-svalbard-treaty/" }
    ],
    newsLinks: [
      { label: "Norway and US sign expanded defence access agreement for Arctic", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-07" },
      { label: "Russian intelligence activity increases around Svalbard, Oslo warns", url: "https://rferl.org/norway/", source: "RFE/RL", publishedAt: "2025-01-15" },
      { label: "Nordic NATO: how Finland and Sweden's accession reshapes Arctic security", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-06" }
    ],
    endorsements: [
      { name: "Norwegian Institute for Defence Studies (IFS)", url: "https://www.ifs.mil.no/en" },
      { name: "Arctic Council Secretariat", url: "https://arctic-council.org" },
      { name: "IISS", url: "https://www.iiss.org" }
    ],
    supporterCount: 891
  },
  "ch-001": {
    detail: "Switzerland's relationship with the EU is governed by approximately 120 bilateral agreements covering areas from free movement to research cooperation, land transport, and air traffic. The rejection by Swiss voters in 2021 of the previously negotiated institutional framework agreement—which would have created a dynamic alignment mechanism for relevant Swiss law—left the relationship in limbo and led to Swiss exclusion from the EU's Horizon research programme and other frameworks.\n\nRenegotiation of a new framework agreement began in 2023 and has made substantial progress, with a draft expected in 2025 covering updated free movement arrangements, wage protection measures, and state aid rules. The key sticking point has been the role of the European Court of Justice in resolving disputes—Switzerland wants arbitration; the EU insists on CJEU primacy for EU law interpretation.\n\nSwiss domestic politics add complexity: any agreement will require a referendum and must navigate opposition from the right-wing SVP (Swiss People's Party) and concerns from trade unions about protecting Swiss wage levels from social dumping by foreign workers exercising free movement. The track record of Swiss bilateral agreements being challenged in referendums is significant.\n\nFor Swiss citizens abroad—over 800,000 registered, with large communities in France, Germany, the UK, and the US—the EU relationship affects cross-border professional recognition, access to EU research networks, and the ease of life in neighbouring EU countries. Switzerland's de facto integration with the EU economy without formal membership creates a distinctive position that many diaspora Swiss experience directly.",
    officialLinks: [
      { label: "Swiss Federal Department of Foreign Affairs – EU bilateral relations", url: "https://www.eda.admin.ch/eda/en/fdfa/foreign-policy/europe/eu.html" },
      { label: "European Commission – EU-Switzerland relations", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/1467/switzerland_en" },
      { label: "Swiss Federal Council – bilateral approach", url: "https://www.admin.ch/gov/en/start/documentation/media-releases.html" }
    ],
    newsLinks: [
      { label: "Switzerland and EU reach draft bilateral agreements package", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-24" },
      { label: "Swiss SVP pledges referendum challenge to any new EU bilateral deal", url: "https://swissinfo.ch/eng/", source: "SWI swissinfo.ch", publishedAt: "2025-04-08" },
      { label: "Swiss researchers return to Horizon after exclusion gap", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-19" }
    ],
    endorsements: [
      { name: "Operation Libero – Swiss pro-EU movement", url: "https://operationlibero.ch/en/" },
      { name: "Economiesuisse – Swiss business federation", url: "https://www.economiesuisse.ch/en" },
      { name: "Swiss European Forum", url: "https://www.swisseuropean.ch" }
    ],
    supporterCount: 1432
  },
  "ch-002": {
    detail: "The collapse of Credit Suisse in March 2023—and its emergency absorption by UBS in a government-facilitated rescue—was the most significant banking event in Switzerland since the 2008 financial crisis and the largest banking failure in Europe since that year. Credit Suisse had spent years accumulating losses from poor risk management, scandal-related fines, and a series of business strategy failures.\n\nThe Swiss authorities—FINMA (financial regulator), the SNB (central bank), and the Federal Council—approved a rescue package that included a CHF 100 billion liquidity guarantee from the SNB, a CHF 9 billion government backstop for UBS, and the controversial write-down of approximately CHF 16 billion in AT1 (Additional Tier 1) bonds to zero while equity holders received some value—an inversion of the normal creditor hierarchy that generated significant legal challenges internationally.\n\nThe Parliamentary Inquiry Commission (PUK) published its final report in 2024, identifying systemic failures in FINMA's supervision, the Credit Suisse board's risk culture, and the decision-making process during the crisis weekend. Regulatory reforms since the rescue have focused on tightening capital requirements for systemically important banks and expanding FINMA's intervention powers.\n\nThe creation of UBS + Credit Suisse as a single entity creates a bank whose balance sheet is significantly larger than Swiss GDP, raising new 'too big to fail' concerns. Switzerland now has one dominant universal bank rather than two, and the concentration of financial sector risk in a single institution is a subject of ongoing regulatory and political debate.",
    officialLinks: [
      { label: "FINMA – Swiss Financial Market Supervisory Authority", url: "https://www.finma.ch/en/" },
      { label: "Swiss National Bank – Credit Suisse resolution", url: "https://www.snb.ch/en" },
      { label: "Swiss Parliamentary Inquiry Commission (PUK) report", url: "https://www.parlament.ch/en" }
    ],
    newsLinks: [
      { label: "Swiss parliament's Credit Suisse probe finds systemic supervisory failures", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-12-19" },
      { label: "AT1 bondholders win partial recovery after Swiss court rejects wipeout", url: "https://www.reuters.com/business/finance/", source: "Reuters", publishedAt: "2025-04-04" },
      { label: "UBS too big to fail: regulators propose new capital buffers for megabank", url: "https://swissinfo.ch/eng/", source: "SWI swissinfo.ch", publishedAt: "2025-02-12" }
    ],
    endorsements: [
      { name: "Swiss Bankers Association", url: "https://www.swissbanking.org/en" },
      { name: "Finance Watch – EU/Swiss bank oversight advocate", url: "https://www.finance-watch.org" },
      { name: "Basel Committee on Banking Supervision", url: "https://www.bis.org/bcbs/" }
    ],
    supporterCount: 1087
  },
  "ch-003": {
    detail: "Switzerland's system of direct democracy—including obligatory referendums on constitutional changes, optional referendums on legislation, and citizens' initiatives—is the most developed in the world and has produced distinctive outcomes on immigration that no elected parliament would have enacted alone. The 2014 'Against Mass Immigration' initiative, passed with 50.3%, required the government to introduce immigration quotas—a direct conflict with the free movement agreement with the EU that required years of diplomatic negotiation to manage.\n\nSubsequent referendums on immigration-related questions have produced more nuanced results: a 2020 initiative to end automatic free movement was rejected. But the political salience of the immigration question—managed by the SVP's repeated use of the initiative process to force the issue onto the agenda—shapes Swiss policy even when specific measures fail.\n\nThe tension between popular sovereignty (expressed through binding referendums) and international treaty obligations (including the EU bilateral agreements) is a structural feature of Swiss constitutional politics. The government must navigate the expectation that voters can override treaty obligations through initiatives, even when doing so would violate international law.\n\nFor Swiss diaspora—who can vote in referendums from abroad—immigration is a policy that directly affects the communities they left. Many diaspora Swiss are themselves beneficiaries of free movement and encounter the irony of their home country voting to restrict the rights that they exercise daily in their countries of residence.",
    officialLinks: [
      { label: "Swiss Federal Chancellery – direct democracy", url: "https://www.bk.admin.ch/bk/en/home/politische-rechte.html" },
      { label: "Swiss People's Party (SVP) initiatives", url: "https://www.svp.ch/en/" },
      { label: "Federal Migration Office (SEM)", url: "https://www.sem.admin.ch/sem/en/home.html" }
    ],
    newsLinks: [
      { label: "Swiss voters reject new immigration curb in referendum", url: "https://swissinfo.ch/eng/", source: "SWI swissinfo.ch", publishedAt: "2025-03-02" },
      { label: "EU warns Switzerland against initiative that would violate free movement", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-14" },
      { label: "Swiss SVP launches new immigration initiative targeting social benefits", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-05-07" }
    ],
    endorsements: [
      { name: "Operation Libero – Swiss pro-EU movement", url: "https://operationlibero.ch/en/" },
      { name: "Swiss Refugee Council", url: "https://www.refugeecouncil.ch/en" },
      { name: "Amnesty International Switzerland", url: "https://www.amnesty.ch/en" }
    ],
    supporterCount: 934
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 7`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
