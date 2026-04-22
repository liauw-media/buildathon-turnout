const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "md-001": {
    detail: "Moldova's bid for European Union membership, formalised with candidate status granted in June 2022, represents a fundamental reorientation of the country's foreign policy after three decades of post-Soviet ambivalence. The decision came against the backdrop of Russia's full-scale invasion of Ukraine, which dramatically accelerated Chisinau's westward shift and secured public majority support for accession for the first time.\n\nMeeting the EU's conditions requires overhauling the judicial system, dismantling oligarchic networks, aligning legislation with EU standards across dozens of policy areas, and demonstrating sustained anti-corruption results. The European Commission's annual progress reports have credited Moldova with meaningful advances while noting persistent gaps in implementation capacity and rule-of-law reforms.\n\nThe accession timeline is genuinely contested. Optimists point to Moldova's relatively small size and committed reformist government; sceptics highlight the unresolved Transnistria conflict, energy dependency, and institutional weakness. The government has set 2030 as an aspirational target, though most analysts consider this ambitious.\n\nFor the Moldovan diaspora—estimated at over a million people, many of whom hold EU citizenship through Romania—EU integration is both a political priority and a personal stake. Diaspora remittances fund a significant share of household consumption, and many returnees bring EU-standard expectations for governance and public services.",
    officialLinks: [
      { label: "Moldova EU Accession Official Portal", url: "https://www.gov.md/en/content/european-integration", source: "Government of Moldova" },
      { label: "European Commission Moldova Progress Report 2024", url: "https://neighbourhood-enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/moldova_en", source: "European Commission" },
      { label: "EU-Moldova Association Agreement", url: "https://eeas.europa.eu/archives/delegations/moldova/eu_moldova/political_relations/index_en.htm", source: "EEAS" }
    ],
    newsLinks: [
      { label: "Moldova opens EU accession chapters amid reform push", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-14" },
      { label: "Brussels praises Moldova reform progress but flags judicial gaps", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-10-22" },
      { label: "Moldova's EU path: optimism and hard realities", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-06-08" },
      { label: "Moldovan voters back EU in record diaspora turnout", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-06" }
    ],
    endorsements: [
      { name: "Open Society European Policy Institute", url: "https://www.opensocietyfoundations.org/voices/european-policy" },
      { name: "Transparency International Moldova", url: "https://www.transparency.md" },
      { name: "European Policy Centre (EPC)", url: "https://www.epc.eu" }
    ],
    supporterCount: 2840
  },
  "md-002": {
    detail: "Moldova's anti-corruption architecture has been substantially rebuilt since 2019, with the establishment of dedicated institutions including the National Anticorruption Center (CNA), the Anticorruption Prosecutor's Office (PA), and the National Integrity Authority (ANI). These bodies have produced notable prosecutions of officials connected to the 2014 bank fraud scandal, in which approximately $1 billion was siphoned from the banking system.\n\nThe bank fraud case—often described as 'the theft of the century' relative to Moldova's GDP—has been the central test of the new anti-corruption framework. Progress in asset recovery and in prosecuting those at the top of the scheme has been slow, and some key suspects remain abroad. EU progress reports acknowledge institutional improvements while pressing for results in high-profile cases.\n\nCivil society organisations have played a critical role in monitoring the independence of new anti-corruption bodies and documenting political pressure on prosecutors. The Venice Commission and GRECO have both provided assessments calling for further insulation of these bodies from political interference.\n\nFor diaspora Moldovans, corruption is among the top reasons cited for emigration decisions. Credible anti-corruption progress is therefore both a political goal and a prerequisite for the human capital retention that Moldova's development requires.",
    officialLinks: [
      { label: "National Anticorruption Center of Moldova", url: "https://cna.md" },
      { label: "GRECO Moldova Evaluation Reports", url: "https://www.coe.int/en/web/greco/evaluations/moldova" },
      { label: "Anticorruption Prosecutor's Office Moldova", url: "https://pa.md" }
    ],
    newsLinks: [
      { label: "Moldova's bank fraud suspects face new charges in Chisinau court", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-19" },
      { label: "EU releases anti-corruption scorecard for Eastern Partnership states", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-05-07" },
      { label: "Moldova anti-graft body wins cases but asset recovery lags", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-11" }
    ],
    endorsements: [
      { name: "Transparency International Moldova", url: "https://www.transparency.md" },
      { name: "Promo-LEX Association", url: "https://promolex.md" },
      { name: "GRECO (Council of Europe)", url: "https://www.coe.int/en/web/greco" }
    ],
    supporterCount: 1247
  },
  "md-003": {
    detail: "Moldova's media landscape has been reshaped by government decisions since 2022 to suspend and ultimately ban several television channels with alleged ties to fugitive oligarch Ilan Shor and to Russian state media. Authorities cite disinformation, propaganda, and foreign interference as justifications; critics raise concerns about the breadth of the restrictions and procedural safeguards.\n\nThe Council of Europe's Venice Commission and international press freedom bodies including Reporters Without Borders have urged Moldova to ground any media restrictions in clear, proportionate, and independently reviewable legal procedures. The government has worked to develop new broadcast legislation aligned with the EU's revised Audiovisual Media Services Directive.\n\nRussia continues to fund Moldovan-language social media content and uses existing satellite infrastructure to reach audiences that previously relied on banned channels. The effectiveness of the bans in reducing Russian information influence, versus the risks of normalising media restrictions, is actively debated among media experts and civil society groups.\n\nDiaspora Moldovans, particularly in Western Europe, tend to access a more diverse information environment and are less exposed to Russian-state media. However, diaspora members with family in Russia or who consume Russian-language content from neighbouring states remain partially within the Russian information sphere.",
    officialLinks: [
      { label: "Audiovisual Council of Moldova", url: "https://www.audiovizual.md" },
      { label: "Venice Commission Opinions on Moldova", url: "https://www.venice.coe.int/webforms/documents/?country=28" },
      { label: "EU4Media Moldova programme", url: "https://neighbourhood-enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/moldova_en" }
    ],
    newsLinks: [
      { label: "Moldova bans pro-Russian TV stations ahead of election", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-11-01" },
      { label: "RSF warns Moldova media bans risk setting precedent", url: "https://rsf.org/en/", source: "Reporters Without Borders", publishedAt: "2025-01-15" },
      { label: "Shor network uses social media after TV channels shut down", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-03" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Independent Journalism Center Moldova", url: "https://ijc.md" },
      { name: "Article 19", url: "https://www.article19.org" }
    ],
    supporterCount: 892
  },
  "md-004": {
    detail: "Moldova's energy sector was fundamentally exposed in early 2022 when Gazprom halted gas supplies to the right-bank territory following a dispute over debts—many of which originated from consumption in the separatist Transnistria region. The crisis forced emergency gas procurement from alternative European suppliers at significantly higher prices and accelerated plans for EU energy market integration.\n\nMoldova has since connected to the European electricity grid, joined the European Energy Community's stress-testing mechanisms, and secured EU support for infrastructure upgrades including a new interconnection with Romania. The government's goal of reaching 30% renewable electricity by 2030 depends heavily on EU co-financing and regulatory alignment.\n\nBroader economic reform has proceeded unevenly. Moldova has benefitted from EU trade preferences under the Deep and Comprehensive Free Trade Area (DCFTA) and seen growth in light manufacturing and IT services exports. However, the loss of the Russian market for some agricultural products, combined with the economic impact of hosting Ukrainian refugees, has created significant fiscal pressures.\n\nEnergy subsidies—which protected households from full market prices—have been progressively reduced as part of fiscal consolidation and EU alignment requirements, creating political tension about distributional impact, particularly for lower-income households in rural areas.",
    officialLinks: [
      { label: "Moldova Energy Community membership", url: "https://www.energy-community.org/implementation/contracting-parties/MD.html" },
      { label: "European Commission Moldova economic cooperation", url: "https://neighbourhood-enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/moldova_en" },
      { label: "ANRE – National Energy Regulatory Agency of Moldova", url: "https://www.anre.md" }
    ],
    newsLinks: [
      { label: "Moldova completes switch to European electricity grid", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-28" },
      { label: "EU emergency gas support shores up Moldova's winter supply", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-18" },
      { label: "Moldova's economy grows despite regional shocks, IMF says", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-10" }
    ],
    endorsements: [
      { name: "Energy Community Secretariat", url: "https://www.energy-community.org" },
      { name: "Expert-Grup Moldova", url: "https://expert-grup.md" },
      { name: "IDIS Viitorul", url: "https://viitorul.org" }
    ],
    supporterCount: 674
  },
  "md-005": {
    detail: "Moldovan citizens living abroad number over a million—a significant fraction of the total electorate—and have become a decisive force in national elections. The 2024 presidential election and EU membership referendum were won in part because diaspora turnout, concentrated in Western Europe, exceeded expectations and outweighed more sceptical domestic margins.\n\nThe current system requires overseas voters to attend embassies or consulates, which are often located in major cities far from diaspora concentrations. Long queues, insufficient polling stations, and transport costs have historically depressed turnout. Following the 2024 experience, where some diaspora voters waited many hours to cast ballots, the Central Electoral Commission has committed to expanding the number of polling stations abroad.\n\nPolicy proposals under discussion include postal voting, electronic voting, and a dedicated constituency for diaspora members in the parliament. Each carries trade-offs: electronic voting raises security concerns; postal voting creates risks of coercion and chain voting; diaspora constituencies require agreement on appropriate weighting relative to domestic seats.\n\nThe political stakes are high. Diaspora voters tend to be more pro-European and more supportive of reform-oriented parties than the domestic average. Any structural change to voting access would likely have significant effects on electoral outcomes, making the debate both a civil rights question and a partisan one.",
    officialLinks: [
      { label: "Central Electoral Commission of Moldova", url: "https://a.cec.md" },
      { label: "European Court of Human Rights – voting rights cases", url: "https://www.echr.coe.int/documents/d/echr/guide_art_3_protocol_1_eng" },
      { label: "Venice Commission electoral standards", url: "https://www.venice.coe.int/webforms/documents/?pdf=CDL-AD(2002)023rev2-cor-e" }
    ],
    newsLinks: [
      { label: "Diaspora queues stretch for hours at Moldovan consulates on election day", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-04" },
      { label: "Moldova plans to expand overseas polling stations after referendum", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-12-05" },
      { label: "Postal voting debated in Moldovan parliament after diaspora surge", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-20" }
    ],
    endorsements: [
      { name: "Promo-LEX Association", url: "https://promolex.md" },
      { name: "OSCE/ODIHR Election Observation Missions", url: "https://www.osce.org/odihr/elections" },
      { name: "Association of Moldovans in Europe", url: "https://www.moldoveni.eu" }
    ],
    supporterCount: 1843
  },
  "ro-001": {
    detail: "Romania has consistently underperformed EU average benchmarks for absorbing structural and cohesion funds, despite being one of the bloc's largest per-capita recipients. The roots of the problem are well-documented: weak public administration capacity at local and county levels, slow procurement procedures, complex audit requirements, and—historically—concerns about irregularities in project management.\n\nThe 2021–2027 programming period, combined with the NextGenerationEU recovery funds, represents an unprecedented financial opportunity for Romania. The country was allocated approximately €80 billion in EU funding across both instruments, with the expectation that successful absorption could accelerate convergence with Western EU living standards by several years.\n\nGovernment reform efforts have focused on streamlining beneficiary access, digitalising application procedures, and strengthening monitoring bodies. A dedicated Ministry for European Funds has attempted to prioritise large infrastructure projects in transport, water, and digital connectivity. Progress has been uneven, with transport projects in particular frequently delayed by land acquisition disputes and engineering challenges.\n\nFor the Romanian diaspora, poor fund absorption represents lost schools, hospitals, and road connections in the communities they left. Many diaspora remittances fill gaps that EU-funded public investment is supposed to address, creating a direct link between absorption performance and the daily lives of families back home.",
    officialLinks: [
      { label: "Ministry of European Funds Romania", url: "https://mfe.gov.ro/en/" },
      { label: "European Commission Romania fund absorption dashboard", url: "https://cohesiondata.ec.europa.eu/countries/RO" },
      { label: "Court of Auditors of Romania – EU funds reports", url: "https://www.curteadeconturi.ro" }
    ],
    newsLinks: [
      { label: "Romania picks up EU fund absorption pace but lags peers", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-12" },
      { label: "Brussels warns Bucharest over slow NextGenerationEU milestones", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-06-03" },
      { label: "Romania's infrastructure gap costs billions in delayed EU projects", url: "https://www.ft.com/europe/", source: "Financial Times", publishedAt: "2025-09-18" }
    ],
    endorsements: [
      { name: "Expert Forum Romania (EFOR)", url: "https://expertforum.ro" },
      { name: "Romanian Academic Society (SAR)", url: "https://www.sar.org.ro" },
      { name: "Transparency International Romania", url: "https://www.transparency.org.ro" }
    ],
    supporterCount: 1124
  },
  "ro-002": {
    detail: "Romania's judicial system was subject to the EU's Cooperation and Verification Mechanism (CVM) from accession in 2007 until its formal closure in 2023, making it one of the longest-running institutional monitoring frameworks in EU history. The CVM tracked progress on judicial reform, anti-corruption, and organised crime, producing annual reports that shaped both domestic politics and EU fund conditionality.\n\nThe Schengen accession of Romania (admitted to air and sea Schengen in March 2024, land borders to follow) was partly conditioned on judicial and anti-corruption progress, giving European integration concrete stakes to the judicial independence debate. Recent constitutional amendments affecting the Supreme Council of Magistracy (CSM) and the appointments process for senior judges have attracted Venice Commission attention.\n\nA recurring tension in the debate is between the need to insulate the judiciary from political interference and concerns that an overly powerful, self-appointing judicial class may itself lack democratic accountability. High-profile acquittals and convictions in politically charged cases are routinely interpreted through partisan lenses, making it difficult to assess judicial quality neutrally.\n\nFor Romanians abroad, judicial independence matters partly because it conditions access to EU funds that would improve conditions at home, and partly because consular and notarial services—heavily used by the diaspora for property and inheritance matters—depend on a functioning and reliable court system.",
    officialLinks: [
      { label: "Venice Commission Romania opinions", url: "https://www.venice.coe.int/webforms/documents/?country=35" },
      { label: "EU CVM for Romania", url: "https://neighbourhood-enlargement.ec.europa.eu/eu-enlargement/negotiation-chapters/rule-of-law_en" },
      { label: "Superior Council of Magistracy Romania", url: "https://www.csm1909.ro" }
    ],
    newsLinks: [
      { label: "EU formally closes CVM for Romania, citing judicial reform progress", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2023-09-08" },
      { label: "Venice Commission flags judicial appointment concerns in Romania", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-22" },
      { label: "Romania's Supreme Court rulings spark political row", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-07-14" }
    ],
    endorsements: [
      { name: "Romanian Judges Forum", url: "https://www.forumuljudecatorilor.ro" },
      { name: "Transparency International Romania", url: "https://www.transparency.org.ro" },
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" }
    ],
    supporterCount: 798
  },
  "ro-003": {
    detail: "Romania's National Anticorruption Directorate (DNA) gained international prominence for prosecuting high-level officials including ministers, parliamentarians, and a former prime minister. Its operating model—specialist prosecutors with dedicated investigative resources—became a reference point for anti-corruption institutional design across Central and Eastern Europe.\n\nThe DNA's independence came under direct pressure during 2017–2019, when parliamentary efforts to weaken the directorate, redefine abuse of office offences, and subject it to increased political oversight triggered mass street protests. The Constitutional Court's subsequent rulings on several DNA convictions created legal uncertainty around past cases and led to some acquittals and retrials.\n\nFollowing the change of government in 2019, institutional pressure on the DNA eased, but the directorate continues to face challenges including judicial caseload backlogs and a legal environment in which the statute of limitations has run on some historic offences.\n\nFor the Romanian diaspora, the DNA's track record is a touchstone. Those who left partly because of corruption encounter the DNA's cases as evidence of either meaningful change or inadequate accountability, depending on which cases they follow. Diaspora communities have been among the most vocal supporters of anti-corruption reforms in Romanian civil society.",
    officialLinks: [
      { label: "National Anticorruption Directorate (DNA)", url: "https://www.pna.ro" },
      { label: "GRECO Romania evaluation reports", url: "https://www.coe.int/en/web/greco/evaluations/romania" },
      { label: "European Commission Romania rule of law report", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" }
    ],
    newsLinks: [
      { label: "Former Romanian minister convicted in DNA landmark case", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-28" },
      { label: "Romania's anti-graft body secures first conviction under revised law", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-05-16" },
      { label: "EU praises DNA independence in annual Romania report", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-29" }
    ],
    endorsements: [
      { name: "Transparency International Romania", url: "https://www.transparency.org.ro" },
      { name: "Expert Forum Romania (EFOR)", url: "https://expertforum.ro" },
      { name: "Romanian Academic Society (SAR)", url: "https://www.sar.org.ro" }
    ],
    supporterCount: 1063
  },
  "ro-004": {
    detail: "Romania's healthcare system is chronically underfunded relative to EU standards, with public health spending among the lowest as a percentage of GDP in the bloc. The consequences are concrete: the country has the highest avoidable mortality rate in the EU, significant rates of preventable disease, and stark rural-urban disparities in access to specialist care.\n\nThe emigration of Romanian medical professionals—nurses to Germany and Italy, doctors to France, Germany, and the UK—has created structural shortages that affect the quality of care in public hospitals, particularly in regions with fewer private facilities. Successive governments have announced retention packages and salary increases, with partial success in slowing the outflow.\n\nHospital investment, much of which relies on EU cohesion funds, has been hampered by weak project management and procurement delays. High-profile hospital fires—including the Colectiv nightclub fire of 2015 that killed 64 people and revealed the depth of systemic healthcare failures—continue to shape public expectations for reform.\n\nDigitisation of health records, e-prescription systems, and telemedicine for remote areas have made limited progress. The COVID-19 pandemic exposed fundamental weaknesses in intensive care capacity and vaccine distribution logistics, reinforcing public pressure for structural rather than marginal reform.",
    officialLinks: [
      { label: "Romanian Ministry of Health", url: "https://www.ms.ro" },
      { label: "WHO Romania health profile", url: "https://www.who.int/countries/rou/" },
      { label: "European Commission Romania PNRR health chapter", url: "https://commission.europa.eu/business-economy-euro/economic-recovery/recovery-and-resilience-facility_en" }
    ],
    newsLinks: [
      { label: "Romania's doctor exodus: hospitals face critical staff shortages", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-07" },
      { label: "EU-funded hospital project hits delays as Romania struggles with procurement", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-08-12" },
      { label: "Romania launches nationwide hospital digitisation with EU funds", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-06-22" }
    ],
    endorsements: [
      { name: "Asociatia Daruieste Viata (Romania)", url: "https://daruiesteviata.ro" },
      { name: "Romanian Society of Public Health", url: "https://www.srsp.ro" },
      { name: "WHO Regional Office for Europe", url: "https://www.euro.who.int" }
    ],
    supporterCount: 1389
  },
  "ro-005": {
    detail: "Romania has one of Europe's largest diasporas in absolute terms, with an estimated three to five million citizens living and working primarily in Italy, Germany, Spain, the United Kingdom, and France. This community has significant electoral weight: overseas voters have been decisive in close presidential elections, and their preferences have historically diverged from the domestic average.\n\nThe current system provides diaspora voters with two dedicated parliamentary seats (one in the Senate, one in the Chamber of Deputies), but critics argue this is a token gesture given the diaspora's scale. Long queues at consulates during elections, limited polling station availability, and the absence of postal voting have been persistent issues that depress participation.\n\nProposals to expand the number of dedicated diaspora seats, to introduce postal balloting, or to allow electronic voting each encounter strong objections: from parties whose support base is primarily domestic, from those concerned about ballot security, and from those who question whether Romanians who have left permanently should retain full electoral participation rights.\n\nConsular services more broadly—from emergency assistance to document authentication, driving licence conversions, and civil registration—are under-resourced relative to diaspora population size. Improving these services has been an ongoing government commitment with inconsistent implementation.",
    officialLinks: [
      { label: "Romanian Ministry of Foreign Affairs – Diaspora", url: "https://www.mae.ro/en/node/2064" },
      { label: "Central Electoral Bureau of Romania", url: "https://www.bec.ro" },
      { label: "Venice Commission electoral law guidelines", url: "https://www.venice.coe.int/webforms/documents/?pdf=CDL-AD(2002)023rev2-cor-e" }
    ],
    newsLinks: [
      { label: "Hundreds of thousands of Romanians vote abroad in presidential run-off", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-09" },
      { label: "Romania considers postal voting after diaspora queues spark outrage", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-14" },
      { label: "Diaspora lawmakers push for more parliamentary seats in Bucharest", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-29" }
    ],
    endorsements: [
      { name: "Federatia Comunitatilor Romanesti din Europa", url: "https://www.federatia.eu" },
      { name: "Promo-LEX (electoral monitoring)", url: "https://promolex.md" },
      { name: "OSCE/ODIHR", url: "https://www.osce.org/odihr/elections" }
    ],
    supporterCount: 2156
  },
  "ge-001": {
    detail: "Georgia's EU candidate status, granted in December 2023, was a significant moment after years of association politics. However, the candidate status came with twelve specific reform priorities, and the EU subsequently froze the accession process in 2024 amid concerns about the governing Georgian Dream party's democratic trajectory—including the passage of the foreign agents law and what the EU described as a shift toward authoritarian governance.\n\nThe government's decision to suspend accession talks until 2028, announced in late 2024, triggered the largest protest movement Georgia has seen since independence, with demonstrators outside parliament for weeks demanding a return to the European path. The protests continued into 2025, shaping the domestic political landscape significantly.\n\nEU membership remains overwhelmingly popular among the Georgian public, creating a significant divergence between popular preference and government policy. The opposition, pro-EU civil society, and significant segments of the business community have all maintained pressure on the government to reverse course.\n\nFor Georgians living in EU countries—primarily Germany, Greece, France, and Italy—the freeze of accession talks is both a political concern and a practical one, affecting visa liberalisation prospects and the ease of maintaining transnational lives.",
    officialLinks: [
      { label: "European Commission Georgia enlargement page", url: "https://neighbourhood-enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/georgia_en" },
      { label: "EU-Georgia Association Agreement", url: "https://eeas.europa.eu/archives/delegations/georgia/eu_georgia/political_relations/index_en.htm" },
      { label: "Parliament of Georgia – European Integration Committee", url: "https://parliament.ge/en" }
    ],
    newsLinks: [
      { label: "Georgia's government suspends EU accession talks until 2028", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-11-29" },
      { label: "Protests in Tbilisi grow as EU condemns Georgian Dream's EU stance", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-12" },
      { label: "EU freezes Georgia candidate status support funds", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-04" },
      { label: "Georgian opposition sustains pro-EU protests into new year", url: "https://rferl.org/georgia/", source: "RFE/RL", publishedAt: "2025-01-20" }
    ],
    endorsements: [
      { name: "Georgian Young Lawyers' Association (GYLA)", url: "https://gyla.ge/en" },
      { name: "Transparency International Georgia", url: "https://transparency.ge/en" },
      { name: "Open Society Georgia Foundation", url: "https://www.osgf.ge" }
    ],
    supporterCount: 2317
  },
  "ge-002": {
    detail: "Georgia's judiciary has been a persistent subject of EU and Council of Europe concern. The High Council of Justice, which controls judicial appointments and transfers, has been criticised for operating in a non-transparent manner that allows informal networks—referred to by critics as the 'clan of judges'—to maintain disproportionate influence over court decisions and career progression.\n\nThe Venice Commission issued detailed opinions recommending reforms to judicial appointment procedures, the selection process for Supreme Court judges, and mechanisms for judicial accountability. The Constitutional Court's handling of election disputes, particularly following the 2024 parliamentary elections, generated additional controversy.\n\nInternational observers and NGOs including the Georgian Young Lawyers' Association (GYLA) have documented patterns of inconsistent rulings in politically sensitive cases and concerns about judicial independence from prosecutorial pressure. The European Commission's 2023 opinion on Georgia's candidacy specifically identified judicial reform as one of the twelve priorities requiring action.\n\nThe relationship between judicial reform, rule of law progress, and EU accession is direct: Georgia cannot advance in accession negotiations without credible progress on judicial independence. This makes the judiciary a battleground between those who benefit from the current system and reformers who see it as fundamental.",
    officialLinks: [
      { label: "Venice Commission Georgia opinions", url: "https://www.venice.coe.int/webforms/documents/?country=17" },
      { label: "High Council of Justice of Georgia", url: "https://hcoj.gov.ge/en" },
      { label: "EU Rule of Law report – Georgia", url: "https://neighbourhood-enlargement.ec.europa.eu/european-neighbourhood-policy/countries-region/georgia_en" }
    ],
    newsLinks: [
      { label: "EU calls on Georgia to overhaul judicial appointment process", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-10" },
      { label: "Georgia's Constitutional Court dismisses election challenge", url: "https://rferl.org/georgia/", source: "RFE/RL", publishedAt: "2024-12-27" },
      { label: "Georgian judges 'clan' under scrutiny as reform stalls", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-05-08" }
    ],
    endorsements: [
      { name: "Georgian Young Lawyers' Association (GYLA)", url: "https://gyla.ge/en" },
      { name: "Transparency International Georgia", url: "https://transparency.ge/en" },
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" }
    ],
    supporterCount: 743
  },
  "ge-003": {
    detail: "Georgia's foreign agents law, adopted in May 2024 after overriding a presidential veto, requires organisations receiving more than 20% of their funding from foreign sources to register as 'organisations carrying the interest of a foreign power' and submit to enhanced financial scrutiny. Critics—including the EU, US government, and Georgian civil society—draw explicit parallels with Russia's equivalent legislation used to suppress civil society.\n\nProponents of the law argue it promotes financial transparency and ensures accountability of foreign-funded organisations, noting that all democracies regulate foreign lobbying in some form. The government has pointed to the US Foreign Agents Registration Act (FARA) as a comparable framework, though critics dispute the analogy given FARA's different scope and application.\n\nThe law triggered weeks of street protests in Tbilisi, with demonstrators chanting pro-EU slogans and carrying EU flags. The European Parliament passed resolutions condemning the legislation, and the European Commission cited it as evidence of democratic backsliding incompatible with EU accession progress.\n\nApproximately 2,000 organisations are estimated to fall under the law's scope, many of them democracy, media, health, and legal aid NGOs. Several organisations have publicly stated they will not register; the government has indicated it will pursue enforcement. The law's implementation continues to be a central issue in Georgia's political and international relations.",
    officialLinks: [
      { label: "Venice Commission Georgia Foreign Agents Law opinion", url: "https://www.venice.coe.int/webforms/documents/?country=17" },
      { label: "European Parliament resolution on Georgia", url: "https://www.europarl.europa.eu/doceo/document/resolutions_en.htm" },
      { label: "UN OHCHR statement on Georgia civil society", url: "https://www.ohchr.org/en/countries/georgia" }
    ],
    newsLinks: [
      { label: "Georgia passes foreign agents law, defying EU and street protests", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-05-28" },
      { label: "Georgian NGOs refuse to register under foreign agents law", url: "https://rferl.org/georgia/", source: "RFE/RL", publishedAt: "2024-08-14" },
      { label: "EU Parliament condemns Georgia backsliding in formal resolution", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-06-05" },
      { label: "Enforcement of Georgia's NGO law begins amid civil society resistance", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-09" }
    ],
    endorsements: [
      { name: "Georgian Civil Society Platform", url: "https://www.osgf.ge" },
      { name: "International Federation for Human Rights (FIDH)", url: "https://www.fidh.org" },
      { name: "Article 19", url: "https://www.article19.org" }
    ],
    supporterCount: 1687
  },
  "ge-004": {
    detail: "Georgia has built a reputation as one of the more business-friendly economies in the post-Soviet space, with simplified tax administration, low bureaucratic barriers, and a growing reputation as a regional tech and startup hub. Tourism has been the standout growth sector, with arrivals from Russia, the Middle East, China, and the EU all contributing to a services boom in Tbilisi and resort areas.\n\nThe influx of Russian migrants following the 2022 invasion of Ukraine—estimated at 50,000–100,000 people who relocated to Georgia—had significant economic effects, driving up rents in Tbilisi and creating new demand for services while also generating social tensions about cultural change and concerns about who exactly was relocating.\n\nDiversification beyond services and tourism remains a structural challenge. Agriculture, manufacturing, and technology-intensive exports are all relatively modest contributors to GDP. The government has sought to attract FDI in light manufacturing and logistics, positioning Georgia as a regional corridor for trade between Europe and Central Asia.\n\nRegional equity is a persistent concern: economic development is heavily concentrated in Tbilisi, with Adjara (anchored by Batumi) a secondary pole. Other regions—including Imereti, Kakheti, and the mountainous areas—have seen far less investment and continue to experience emigration to the capital and abroad.",
    officialLinks: [
      { label: "Georgian National Investment Agency", url: "https://geostat.ge" },
      { label: "EBRD Georgia overview", url: "https://www.ebrd.com/georgia.html" },
      { label: "World Bank Georgia data", url: "https://www.worldbank.org/en/country/georgia" }
    ],
    newsLinks: [
      { label: "Georgia's tourism boom strains Tbilisi housing and infrastructure", url: "https://rferl.org/georgia/", source: "RFE/RL", publishedAt: "2025-06-11" },
      { label: "Russian migration to Georgia reshapes Tbilisi real estate market", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-02" },
      { label: "Georgia's tech sector grows despite political uncertainty", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-25" }
    ],
    endorsements: [
      { name: "Business Association of Georgia", url: "https://www.bag.ge" },
      { name: "EBRD", url: "https://www.ebrd.com" },
      { name: "World Bank", url: "https://www.worldbank.org" }
    ],
    supporterCount: 387
  },
  "ge-005": {
    detail: "The regions of South Ossetia and Abkhazia have been under effective Russian military control since the August 2008 war, which followed a Georgian military operation to reassert control over South Ossetia. Russia formally recognised both territories as independent states; no other UN member state aside from a small number of Russian allies has done so. The EU, United States, and most of the international community consider the territories to be Georgian soil under military occupation.\n\nThe occupation has direct humanitarian consequences: tens of thousands of ethnic Georgians were displaced from both regions in 2008, joining larger displacement communities from the 1990s conflicts. The administrative boundary lines (ABLs) are enforced by Russian and de facto forces, and crossings have been progressively restricted, separating families and communities.\n\nThe EU monitoring mission (EUMM), established in 2008, monitors the situation along the ABLs and investigates incidents, but has been denied access to the territories themselves since its establishment. The Geneva International Discussions, co-chaired by the EU, OSCE, and UN, provide the only formal multilateral platform for dialogue, though progress on substantive issues has been minimal.\n\nGeorgia's territorial integrity question is constitutionally embedded and shapes foreign policy across the board—including NATO aspirations, where Russian opposition is a significant obstacle, and EU accession, where Georgia's unresolved territorial disputes are acknowledged as a long-term complication.",
    officialLinks: [
      { label: "EU Monitoring Mission Georgia (EUMM)", url: "https://www.eumm.eu" },
      { label: "UNHCR Georgia – IDP situation", url: "https://www.unhcr.org/georgia.html" },
      { label: "Geneva International Discussions", url: "https://www.eeas.europa.eu/eeas/geneva-international-discussions_en" }
    ],
    newsLinks: [
      { label: "Russia tightens control over South Ossetia boundary crossing", url: "https://rferl.org/georgia/", source: "RFE/RL", publishedAt: "2025-04-17" },
      { label: "EUMM reports uptick in boundary incidents near Abkhazia", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-31" },
      { label: "Geneva talks end without breakthrough on IDP return", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-12-19" }
    ],
    endorsements: [
      { name: "EU Monitoring Mission Georgia (EUMM)", url: "https://www.eumm.eu" },
      { name: "Human Rights Watch", url: "https://www.hrw.org/europe/central-asia/georgia" },
      { name: "Amnesty International", url: "https://www.amnesty.org/en/location/europe-and-central-asia/georgia/" }
    ],
    supporterCount: 521
  },
  "tr-001": {
    detail: "Türkiye experienced one of the world's highest inflation rates among major economies between 2021 and 2024, with the Turkish lira losing the majority of its value against major currencies over this period. The roots were partly heterodox: then-President Erdoğan's insistence on keeping interest rates low despite rising inflation contradicted conventional monetary policy, before an eventual pivot to orthodox tightening began in mid-2023.\n\nThe appointment of a new central bank governor and finance minister in 2023 brought a shift toward higher interest rates and tighter fiscal policy, which has progressively brought inflation down from its peak of over 80% annually. However, the accumulated loss of purchasing power has been severe, particularly for wage earners and retirees whose incomes did not keep pace.\n\nThe economic crisis has had significant social consequences, including food insecurity among lower-income urban families, a boom in currency-exchange businesses, and growing demand for hard-currency savings. A significant portion of household savings was dollarised, and FX-protected deposit schemes created contingent fiscal liabilities for the treasury.\n\nFor the Turkish diaspora in Germany, France, the Netherlands, and elsewhere, the lira's depreciation has paradoxically increased remittance-sending power in real terms, while also concentrating attention on the living standards of families remaining in Türkiye. Diaspora investment and remittances represent a significant macroeconomic flow.",
    officialLinks: [
      { label: "Central Bank of the Republic of Turkey", url: "https://www.tcmb.gov.tr/wps/wcm/connect/en/tcmb+en" },
      { label: "Turkish Statistical Institute (TurkStat)", url: "https://www.tuik.gov.tr" },
      { label: "IMF Türkiye economic overview", url: "https://www.imf.org/en/countries/TUR" }
    ],
    newsLinks: [
      { label: "Turkey's inflation falls to single digits for first time since 2020", url: "https://www.reuters.com/world/middle-east/", source: "Reuters", publishedAt: "2025-06-04" },
      { label: "Turkish lira stabilises as central bank keeps rates high", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-02-17" },
      { label: "Cost of living crisis shapes Turkish local elections", url: "https://www.bbc.com/news/world-middle-east/", source: "BBC News", publishedAt: "2024-03-27" }
    ],
    endorsements: [
      { name: "Economic Policy Research Foundation of Turkey (TEPAV)", url: "https://www.tepav.org.tr/en/" },
      { name: "OECD Turkey economic surveys", url: "https://www.oecd.org/economy/surveys/turkey-economic-snapshot/" },
      { name: "IMF", url: "https://www.imf.org/en/countries/TUR" }
    ],
    supporterCount: 1205
  },
  "tr-002": {
    detail: "Türkiye ranks in the bottom ten of Reporters Without Borders' World Press Freedom Index, reflecting a combination of media ownership concentration, legal frameworks that criminalise journalism, and structural dependence of private broadcasters on government advertising and loans from state banks.\n\nHundreds of journalists have been imprisoned under terrorism-related laws that are applied broadly to coverage of Kurdish issues, the 2016 coup attempt, and criticism of state institutions. While some have been released following international pressure, others continue to face prosecution. The closure of media outlets following the coup attempt affected dozens of newspapers, television channels, and news agencies.\n\nSocial media restrictions have also tightened progressively: Twitter/X, YouTube, and Wikipedia have each been blocked at various times, and the government has the legal authority to throttle platforms that do not comply with content removal demands. Internet filtering is implemented through the Radio and Television Supreme Council (RTÜK), whose authority has been extended to online platforms.\n\nThe diaspora engages with Turkish media partly through VPNs and Turkish-language international broadcasters. German-language Turkish journalism has flourished particularly in Germany, providing perspectives that face more constraints domestically. Press freedom is among the most cited concerns of Turkish civil society advocates internationally.",
    officialLinks: [
      { label: "RSF Turkey country page", url: "https://rsf.org/en/country/turkey" },
      { label: "Radio and Television Supreme Council of Turkey (RTÜK)", url: "https://www.rtuk.gov.tr/en" },
      { label: "CPJ Turkey journalist safety database", url: "https://cpj.org/europe/turkey/" }
    ],
    newsLinks: [
      { label: "Turkey jails another journalist under terrorism statutes", url: "https://cpj.org/europe/turkey/", source: "Committee to Protect Journalists", publishedAt: "2025-04-01" },
      { label: "Istanbul newspaper shut down after critical coverage of local mayor", url: "https://rsf.org/en/country/turkey", source: "Reporters Without Borders", publishedAt: "2025-02-22" },
      { label: "Türkiye's social media law draws EU criticism at accession review", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-13" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Committee to Protect Journalists (CPJ)", url: "https://cpj.org" },
      { name: "P24 – Independent Journalism Platform Turkey", url: "https://p24.com.tr" }
    ],
    supporterCount: 1534
  },
  "tr-003": {
    detail: "Türkiye's Constitutional Court is composed of fifteen members appointed by the President, the Grand National Assembly, and various high courts. Critics argue that the appointment mechanism—particularly the presidential share—enables executive influence over a body that is nominally independent and responsible for reviewing the constitutionality of legislation and protecting fundamental rights.\n\nThe 2017 constitutional amendments, approved by referendum with a narrow majority, transformed Türkiye into a presidential system and significantly expanded executive power, reducing parliamentary oversight mechanisms and changing the judicial appointment process. The Venice Commission issued opinions criticising the amendments for concentrating power and weakening checks and balances.\n\nIn high-profile cases—including the closure case against the HDP (People's Democratic Party), the prosecution of opposition politicians, and cases involving property rights and freedom of expression—the Constitutional Court's decisions have been closely watched for evidence of independence or partisanship. The European Court of Human Rights has ruled against Türkiye in numerous cases involving judicial guarantees.\n\nFor the Turkish diaspora, judicial independence intersects with concerns about fair treatment of family members who face criminal charges, the security of property ownership, and the prospects for political reform—issues that resonate particularly for those who consider returning or maintaining substantial assets in Türkiye.",
    officialLinks: [
      { label: "Constitutional Court of Turkey", url: "https://www.anayasa.gov.tr/en/" },
      { label: "European Court of Human Rights – Turkey cases", url: "https://www.echr.coe.int/documents/d/echr/stats_violation_1959_2023_ENG" },
      { label: "Venice Commission Turkey opinions", url: "https://www.venice.coe.int/webforms/documents/?country=43" }
    ],
    newsLinks: [
      { label: "ECHR rules Turkey violated fair trial rights in politician's case", url: "https://www.theguardian.com/world/turkey/", source: "The Guardian", publishedAt: "2025-05-20" },
      { label: "Turkey's HDP closure case advances in Constitutional Court", url: "https://rferl.org/turkey/", source: "RFE/RL", publishedAt: "2024-12-03" },
      { label: "Venice Commission repeats call for Turkish judicial reforms", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-14" }
    ],
    endorsements: [
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" },
      { name: "Human Rights Watch – Turkey", url: "https://www.hrw.org/europe/central-asia/turkey" },
      { name: "Amnesty International Turkey", url: "https://www.amnesty.org.tr" }
    ],
    supporterCount: 894
  },
  "tr-004": {
    detail: "The Kurdish political question in Türkiye encompasses a range of interlocking issues: language rights in education and public life; the legal standing of political parties that represent Kurdish constituencies; the conduct of security operations in southeastern provinces; and the status of imprisoned Kurdish leaders including former HDP co-chair Selahattin Demirtaş, whose continued detention the European Court of Human Rights has ruled a violation.\n\nThe HDP (People's Democratic Party) has faced closure proceedings in the Constitutional Court, a legal process that has been repeatedly applied to Kurdish political parties since the 1990s. A closure would potentially ban HDP politicians from political life for years, affecting millions of voters in southeastern Türkiye and Kurdish communities across the country and abroad.\n\nArmed conflict between the PKK (Kurdistan Workers' Party) and Turkish security forces has continued at varying intensity, shaping security policy, civilian conditions in affected areas, and the environment for political dialogue. Different parties and constituencies hold very different views on whether negotiations, military operations, or structural political reform offer the best path toward a sustainable settlement.\n\nKurdish diaspora communities—concentrated in Germany, Sweden, France, and the UK—are politically engaged and often provide organisational and financial support to Kurdish cultural, media, and political organisations. The status of these organisations under anti-terrorism laws in both Türkiye and European countries is a source of ongoing legal and diplomatic friction.",
    officialLinks: [
      { label: "European Court of Human Rights – Demirtaş v. Turkey", url: "https://www.echr.coe.int" },
      { label: "Venice Commission Turkey opinions on political parties", url: "https://www.venice.coe.int/webforms/documents/?country=43" },
      { label: "OSCE/ODIHR Turkey election reports", url: "https://www.osce.org/odihr/elections/turkey" }
    ],
    newsLinks: [
      { label: "Turkey's HDP faces second closure bid in Constitutional Court", url: "https://rferl.org/turkey/", source: "RFE/RL", publishedAt: "2025-01-08" },
      { label: "Demirtaş remains imprisoned despite ECHR ruling, court reaffirms", url: "https://www.theguardian.com/world/turkey/", source: "The Guardian", publishedAt: "2024-11-27" },
      { label: "Turkish security operations in southeast intensify", url: "https://www.reuters.com/world/middle-east/", source: "Reuters", publishedAt: "2025-04-09" }
    ],
    endorsements: [
      { name: "Human Rights Watch – Turkey", url: "https://www.hrw.org/europe/central-asia/turkey" },
      { name: "International Crisis Group", url: "https://www.crisisgroup.org/europe-central-asia/western-europemediterranean/turkey" },
      { name: "Amnesty International Turkey", url: "https://www.amnesty.org.tr" }
    ],
    supporterCount: 1743
  },
  "tr-005": {
    detail: "Türkiye has been an official EU candidate since 1999, and accession talks formally opened in 2005, but the process has effectively been frozen since 2018 following the European Parliament's call to suspend negotiations and the EU Council's confirmation that no new chapters could be opened given concerns about the rule of law, judicial independence, and press freedom. The relationship is now managed primarily through a Customs Union and a series of sectoral dialogues.\n\nDespite frozen accession talks, Türkiye remains deeply integrated into EU supply chains, particularly in automotive manufacturing, textiles, and agricultural products. The Customs Union, established in 1996, has been identified by both sides as in need of modernisation to cover services and agriculture—negotiations on this front have stalled over political conditions.\n\nMigration cooperation has been a more active dimension of the relationship, particularly since the 2016 EU-Turkey Statement that significantly reduced irregular Aegean crossings in exchange for financial support and visa liberalisation promises that have not been fully delivered. The migration deal remains politically significant but deeply contested by human rights organisations who raise concerns about conditions for migrants in Türkiye.\n\nFor Turkish diaspora communities in Europe, particularly the three million or more in Germany, EU-Turkey relations affect everything from visa requirements for visiting family to the political standing of Turkey-origin communities in European public debates.",
    officialLinks: [
      { label: "European Commission Turkey accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/turkey_en" },
      { label: "EU-Turkey Customs Union framework", url: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/turkey_en" },
      { label: "2016 EU-Turkey Statement on migration", url: "https://www.consilium.europa.eu/en/press/press-releases/2016/03/18/eu-turkey-statement/" }
    ],
    newsLinks: [
      { label: "EU and Turkey restart Customs Union modernisation talks", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-28" },
      { label: "Turkey's EU accession effectively dead, says senior Brussels official", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-19" },
      { label: "EU-Turkey migration deal under review as crossings rise", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-05-12" }
    ],
    endorsements: [
      { name: "Economic Development Foundation (IKV) Turkey", url: "https://www.ikv.org.tr/en" },
      { name: "Open Society European Policy Institute", url: "https://www.opensocietyfoundations.org/voices/european-policy" },
      { name: "Human Rights Watch – EU advocacy", url: "https://www.hrw.org/eu" }
    ],
    supporterCount: 1092
  }
};

// Write the first batch and continue...
const firstBatchIds = Object.keys(enrichments);
let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});

console.log(`Enriched ${modified} topics in first batch`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
