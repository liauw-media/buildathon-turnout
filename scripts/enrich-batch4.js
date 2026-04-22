const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "de-001": {
    detail: "Germany's Energiewende—the managed transition away from both nuclear and fossil fuels toward renewables—is one of the most ambitious energy transformation projects in the world. The final nuclear phase-out, completed in April 2023, removed approximately 6% of electricity generation capacity. Simultaneously, the end of affordable Russian pipeline gas following the 2022 invasion of Ukraine created a supply and price crisis that required emergency LNG contracts and reduced industrial output.\n\nGermany's electricity prices became among the highest in the developed world for industrial consumers, generating significant competitiveness concerns in energy-intensive sectors such as chemicals (BASF), steel (ThyssenKrupp), and automotive manufacturing. Several companies announced restructuring, overseas investment shifts, or permanent capacity reductions, sparking debate about whether the Energiewende was causing lasting deindustrialisation.\n\nRenewable expansion has accelerated following the 2022 energy crisis: solar additions reached record levels in 2023 and 2024, wind permitting was streamlined, and onshore wind development was partially revived after years of local opposition. But grid infrastructure—the transmission capacity to move northern wind power to southern industrial demand—remains insufficient, and storage solutions are embryonic.\n\nThe political debate involves fundamental trade-offs between climate ambition, industrial competitiveness, energy affordability for households, and the timeline of transition. No simple solution is available, and the governing coalition has managed these tensions with significant internal disagreement, particularly between the SPD (more sympathetic to industry), the Greens (more focused on rapid transition), and—in the previous coalition—the FDP (more focused on market mechanisms).",
    officialLinks: [
      { label: "German Federal Ministry for Economic Affairs and Climate Action", url: "https://www.bmwk.de/Navigation/EN/Home/home.html" },
      { label: "Federal Network Agency (Bundesnetzagentur)", url: "https://www.bundesnetzagentur.de/EN/Home/home_node.html" },
      { label: "Fraunhofer ISE – energy data Germany", url: "https://energy-charts.info" }
    ],
    newsLinks: [
      { label: "Germany's Energiewende: record solar additions but grid bottlenecks persist", url: "https://www.reuters.com/business/energy/", source: "Reuters", publishedAt: "2025-01-16" },
      { label: "BASF expands in US as German energy costs bite into competitiveness", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-20" },
      { label: "Berlin targets 80% renewable electricity share by 2030 amid industrial pressure", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-08" }
    ],
    endorsements: [
      { name: "Agora Energiewende", url: "https://www.agora-energiewende.de/en/" },
      { name: "German Institute for Economic Research (DIW)", url: "https://www.diw.de/en" },
      { name: "BDEW – German Association of Energy and Water Industries", url: "https://www.bdew.de/en" }
    ],
    supporterCount: 2789
  },
  "de-002": {
    detail: "Germany's military and financial support for Ukraine, which began hesitantly with the provision of 5,000 helmets in early 2022, has grown to become one of the largest bilateral aid packages after the United States. The country has delivered Leopard tanks, air defence systems including IRIS-T and Patriot batteries, and billions in financial assistance. However, decisions on certain weapons—including long-range Taurus cruise missiles—have remained politically contested and, as of mid-2025, undelivered.\n\nThe legacy of Germany's post-war pacifist culture—embedded in the Basic Law, the 2+4 Treaty, and decades of foreign policy doctrine—has made each escalatory weapons decision a major political event. Chancellor Scholz's caution on certain decisions generated criticism both domestically and from European partners, while his supporters argued he was carefully managing escalation risk.\n\nDefence spending reached 2% of NATO's GDP target in 2024, partly through the use of a €100 billion special defence fund created outside the constitutional debt brake. The future of this fund and the sustainability of higher defence spending within Germany's fiscal constraints are ongoing policy questions, particularly given the constitutional court ruling that complicated the fund's continuation.\n\nFor the German diaspora—one of the largest in the world—Ukraine policy has generated significant debate in countries where large Ukrainian communities also reside, including the US, UK, and Australia. German-origin voters in these countries have sometimes been vocal about both the pace and the limits of German support.",
    officialLinks: [
      { label: "German Ministry of Defence", url: "https://www.bundeswehr.de/en" },
      { label: "German Federal Government Ukraine aid tracker", url: "https://www.bundesregierung.de/breg-en/news/ukraine-aid" },
      { label: "Bundestag – defence committee", url: "https://www.bundestag.de/en" }
    ],
    newsLinks: [
      { label: "Germany delivers Patriot battery to Ukraine in expanded air defence push", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-24" },
      { label: "Berlin rejects Taurus transfer again amid Scholz caution on escalation", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-06" },
      { label: "Germany's defence budget hits 2% NATO target for first time since Cold War", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-13" }
    ],
    endorsements: [
      { name: "German Council on Foreign Relations (DGAP)", url: "https://dgap.org/en" },
      { name: "Stiftung Wissenschaft und Politik (SWP)", url: "https://www.swp-berlin.org/en/" },
      { name: "IISS", url: "https://www.iiss.org" }
    ],
    supporterCount: 2418
  },
  "de-003": {
    detail: "The Alternative für Deutschland (AfD) was founded in 2013 as a eurosceptic party protesting the eurozone bailouts, but progressively radicalised on migration, Islam, and opposition to liberal democratic norms. By 2024 it had become the second-largest party in national polls and the most-voted party in several eastern state elections in Thuringia and Saxony.\n\nGermany's domestic intelligence service (BfV) classified the entire AfD as a confirmed right-wing extremist organisation in 2021, a ruling upheld by the administrative courts, though still subject to legal challenge. This classification enables more intensive surveillance and has fuelled debate about whether a formal ban proceeding should be initiated—a provision available under the Basic Law but rarely used and requiring a high legal threshold.\n\nThe mainstream parties have maintained a cordon sanitaire against governing coalitions with the AfD at federal level, but some eastern state governments have depended on AfD support to pass legislation, eroding the cordon in practice. The CDU/CSU's position on how strictly to maintain the firewall has been a source of internal debate.\n\nFor German diaspora, the AfD's international positioning—including statements sympathetic to Russian positions, questioning of US alliance commitments, and opposition to German Ukraine aid—has created concern in countries directly affected by Russian aggression. German communities in Ukraine or with Ukrainian family connections have been particularly critical of the party's foreign policy stances.",
    officialLinks: [
      { label: "German Federal Office for the Protection of the Constitution (BfV)", url: "https://www.verfassungsschutz.de/EN/Home/home_node.html" },
      { label: "Bundestag AfD faction", url: "https://www.bundestag.de/en" },
      { label: "Venice Commission – German party law", url: "https://www.venice.coe.int/webforms/documents/?country=13" }
    ],
    newsLinks: [
      { label: "German court upholds AfD extremist classification by intelligence service", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-05-13" },
      { label: "AfD leads polls in Saxony and Thuringia ahead of state elections", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-08-12" },
      { label: "Bundestag debates AfD ban as party continues to rise in polls", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-01-28" }
    ],
    endorsements: [
      { name: "Amadeu Antonio Foundation (countering far right)", url: "https://www.amadeu-antonio-stiftung.de" },
      { name: "Friedrich Ebert Stiftung", url: "https://www.fes.de/en/" },
      { name: "Democracy Reporting International", url: "https://democracy-reporting.org" }
    ],
    supporterCount: 3124
  },
  "gr-001": {
    detail: "Greece's decade of austerity—driven by conditions attached to three successive EU-IMF bailout programmes totalling over €260 billion—reshaped the country's economy, public sector, and social fabric. The measures included severe pension cuts, public wage reductions, privatisations, and reform of labour markets and tax administration. The human cost included significant increases in poverty, healthcare access problems, and sustained emigration.\n\nBy 2022–2025, the Greek economy had returned to growth, achieving primary budget surpluses, reduced debt servicing costs (aided by historically low eurozone interest rates), and record tourist arrivals. The government of Prime Minister Mitsotakis has projected fiscal responsibility and received positive assessments from the European Commission and credit rating agencies.\n\nLong-term structural challenges remain. Greece's public debt-to-GDP ratio is the highest in the EU, over 160%, though debt servicing costs are manageable due to the extended maturity profile of official creditors. Investment levels remain below pre-crisis levels in many sectors; the education system faces resource constraints; and the demographic base of the economy has been diminished by sustained emigration.\n\nGreek diaspora communities—large in Australia, the US, Germany, and the UK—maintained remittances during the crisis years and have been closely engaged with developments at home. Many diaspora members who left during the crisis have mixed feelings about returning given persistently lower wages than in their countries of residence.",
    officialLinks: [
      { label: "Greek Ministry of Finance", url: "https://www.minfin.gr/web/guest" },
      { label: "European Commission Greece economic overview", url: "https://economy-finance.ec.europa.eu/economic-and-fiscal-policy-coordination/eu-economic-governance-monitoring-prevention-correction/european-semester/country-specific-information/greece_en" },
      { label: "Bank of Greece", url: "https://www.bankofgreece.gr/en" }
    ],
    newsLinks: [
      { label: "Greece exits EU enhanced surveillance as economy strengthens", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-19" },
      { label: "Athens achieves investment grade credit rating for first time since crisis", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2023-10-05" },
      { label: "Greece's tourism boom masks underlying productivity challenges", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-06-07" }
    ],
    endorsements: [
      { name: "Dianeosis – Greek Research and Policy Institute", url: "https://www.dianeosis.org/en" },
      { name: "IOBE – Foundation for Economic and Industrial Research", url: "https://iobe.gr/en" },
      { name: "Oxfam Greece", url: "https://www.oxfam.org/en/greece" }
    ],
    supporterCount: 1432
  },
  "gr-002": {
    detail: "Greece has been at the frontline of irregular migration into the EU for over a decade, with the Aegean islands—particularly Lesvos, Chios, and Samos—serving as primary entry points for migrants crossing from Turkey. The EU-Turkey Statement of 2016 significantly reduced crossings, but arrivals have remained significant and fluctuate with conditions in Turkey and origin countries.\n\nPushback operations in the Aegean Sea—summary returns of migrants to Turkish waters by Greek coast guard or other forces, often involving allegations of violence—have been documented by NGOs, journalists, and the European Parliament. The European Commission has expressed concern and sought assurances about compliance with EU and international law; Greece has contested the characterisations.\n\nReception conditions, particularly on the islands during peak arrivals, have been severely criticised by UNHCR, Médecins Sans Frontières, and other organisations. The Moria camp fire of 2020, which displaced 13,000 migrants, was a significant flashpoint. Subsequent investment in new closed reception facilities has improved some conditions but raised concerns about restrictions on movement.\n\nThe EU's Pact on Migration and Asylum, which came into force in 2024, includes mandatory solidarity mechanisms intended to reduce the burden on frontline states. Whether these mechanisms will materially change the distribution of responsibilities—and reduce political pressure on Greece to manage arrivals unilaterally—is a central question for EU migration governance.",
    officialLinks: [
      { label: "UNHCR Greece", url: "https://www.unhcr.org/greece" },
      { label: "European Asylum Support Office (EUAA) Greece operations", url: "https://euaa.europa.eu/asylum-trends/greece" },
      { label: "EU Pact on Migration and Asylum", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/pact-migration-and-asylum_en" }
    ],
    newsLinks: [
      { label: "HRW documents systematic Greek pushbacks in Aegean Sea", url: "https://www.hrw.org/europe/", source: "Human Rights Watch", publishedAt: "2025-04-14" },
      { label: "EU Pact on Asylum enters force: what changes for frontline states", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-06-13" },
      { label: "New Aegean island reception centres draw rights group criticism", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-07" }
    ],
    endorsements: [
      { name: "UNHCR Greece", url: "https://www.unhcr.org/greece" },
      { name: "Greek Council for Refugees", url: "https://www.gcr.gr/en/" },
      { name: "Médecins Sans Frontières – Greece", url: "https://www.msf.org" }
    ],
    supporterCount: 1847
  },
  "gr-003": {
    detail: "Greece's surveillance scandal—centred on the use of Predator spyware to monitor politicians, journalists, and business figures—became one of the most significant political crises in years for a country already carrying significant democratic institutions concerns. Evidence published in 2022 and subsequently confirmed by investigations showed that phones of SYRIZA leader Nikos Androulakis, journalist Thanasis Koukakis, and others had been infected with the commercial spyware.\n\nThe government's initial denials gave way to partial acknowledgements. A parliamentary investigative committee was established but produced divided reports along partisan lines. The European Parliament's PEGA committee, investigating Pegasus and equivalent spyware across EU states, examined Greece as a priority case and found serious failures of oversight and accountability.\n\nGreece's intelligence services operate with limited parliamentary oversight compared to most EU states, and the legal framework governing their activities has been criticised as inadequate. The ADAE—the authority responsible for communications privacy—had limited resources and insufficient powers to investigate the full scope of surveillance.\n\nFor Greek civil society and journalism, the surveillance scandal reinforced concerns about the environment for investigative reporting. Greece ranks last in the EU on Reporters Without Borders' press freedom index, and the combination of surveillance, defamation lawsuits (SLAPP cases), and economic pressure on independent media creates structural challenges for accountability journalism.",
    officialLinks: [
      { label: "European Parliament PEGA committee report", url: "https://www.europarl.europa.eu/committees/en/pega/home" },
      { label: "ADAE – Hellenic Authority for Communication Security and Privacy", url: "https://www.adae.gr" },
      { label: "Hellenic Parliament investigative committee", url: "https://www.hellenicparliament.gr/en/Koinovouleftikes-Epitropes/Diarkeis-Epitropes/" }
    ],
    newsLinks: [
      { label: "Greece's Predator scandal: European Parliament probe finds accountability failures", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2023-05-08" },
      { label: "Greek opposition leader's phone found infected with Predator spyware", url: "https://www.theguardian.com/world/greece/", source: "The Guardian", publishedAt: "2022-09-26" },
      { label: "Greece remains bottom of EU press freedom rankings", url: "https://rsf.org/en/country/greece", source: "Reporters Without Borders", publishedAt: "2025-05-03" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Homo Digitalis (Greek digital rights NGO)", url: "https://www.homodigitalis.gr/en" },
      { name: "Access Now", url: "https://www.accessnow.org" }
    ],
    supporterCount: 1634
  },
  "hu-001": {
    detail: "Hungary's dispute with the European Commission over EU funds represents the most far-reaching application of the bloc's rule of law conditionality mechanism since its introduction. The Commission has frozen approximately €20 billion in cohesion and recovery funds, citing concerns about judicial independence, academic freedom, anti-corruption frameworks, and conflicts of interest in procurement.\n\nThe Hungarian government, under Prime Minister Viktor Orbán, has characterised the fund freeze as political interference in national sovereignty and has sought to link its compliance on certain EU foreign policy decisions—particularly Ukraine aid—to progress on funds. The Commission has rejected this linkage, and the dispute has played out across multiple Council votes on Ukraine-related measures.\n\nSome funds have been conditionally released following Hungarian legal reforms on anti-corruption bodies, asset declarations for public officials, and procurement oversight. Civil society groups and MEPs from the EPP and other groups have challenged the Commission's assessment that the reforms are substantive enough to justify fund releases.\n\nFor Hungarians living abroad—primarily in Germany, the UK, and Austria—the rule of law dispute affects both the practical question of EU infrastructure investment at home and the broader question of Hungary's long-term place in the EU. Younger Hungarians in particular cite governance concerns as a reason for not returning.",
    officialLinks: [
      { label: "European Commission – Hungary rule of law conditionality", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "EU Court of Justice Hungary cases", url: "https://curia.europa.eu/juris/liste.jsf?language=en&jur=C" },
      { label: "Hungarian Government – EU affairs", url: "https://euinfo.kormany.hu/en" }
    ],
    newsLinks: [
      { label: "EU unlocks part of frozen Hungary funds after anti-corruption reforms", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-19" },
      { label: "Budapest conditionality dispute: billions still blocked despite court wins", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-02-24" },
      { label: "Hungary challenges EU fund freeze at European Court of Justice", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-04-10" }
    ],
    endorsements: [
      { name: "Hungarian Helsinki Committee", url: "https://helsinki.hu/en/" },
      { name: "Transparency International Hungary", url: "https://transparency.hu" },
      { name: "TASZ – Hungarian Civil Liberties Union", url: "https://tasz.hu/en/" }
    ],
    supporterCount: 2147
  },
  "hu-002": {
    detail: "Hungary's media environment has been fundamentally transformed since 2010. The consolidation of over 500 media outlets under the Central European Press and Media Foundation (KESMA)—controlled by businesspeople closely aligned with the ruling Fidesz party—created a dominant pro-government media ecosystem that operates across television, radio, and print without commercial competition.\n\nPublic service media in Hungary—including national television channels MTI and M1—have been criticised for broadcasting content indistinguishable from government propaganda, with minimal coverage of opposition activities or critical reporting on government decisions. The Media Council, which regulates broadcasting, is dominated by Fidesz-aligned members and has not challenged KESMA or government-aligned outlets.\n\nIndependent journalism survives in Hungary primarily through digital outlets including Telex, Direkt36, and Magyar Hang, which reach significant online audiences despite not having access to the print and broadcast advertising market dominated by government-connected advertisers. These outlets face structural funding challenges and, in some cases, legal pressures from officials.\n\nThe European Commission's annual rule of law reports specifically flag Hungary's media pluralism as a concern, and the EU's new Media Freedom Act—adopted in 2024—was designed partly with Hungary's media environment in mind. Whether the Act's provisions can be effectively enforced against a member state whose government controls the regulatory apparatus is an open question.",
    officialLinks: [
      { label: "Hungarian National Media and Communications Authority (NMHH)", url: "https://english.nmhh.hu" },
      { label: "European Commission Hungary Rule of Law report", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "RSF Hungary country page", url: "https://rsf.org/en/country/hungary" }
    ],
    newsLinks: [
      { label: "Hungary's KESMA media empire expands as independent outlets struggle", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-07" },
      { label: "EU Media Freedom Act: can Brussels protect Hungarian journalists?", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-10-24" },
      { label: "Magyar Hang editor faces defamation lawsuit after critical government coverage", url: "https://rsf.org/en/country/hungary", source: "Reporters Without Borders", publishedAt: "2025-01-20" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "MÉRTÉK Media Monitor Hungary", url: "https://mertek.eu/en" },
      { name: "European Federation of Journalists (EFJ)", url: "https://europeanjournalists.org" }
    ],
    supporterCount: 1863
  },
  "hu-003": {
    detail: "Hungary has adopted the most distinctive position within the EU on Ukraine, repeatedly obstructing or delaying collective measures including military aid packages, financial assistance, and EU accession support. Prime Minister Orbán has visited Moscow, met President Putin, and publicly proposed a ceasefire on terms that would leave Russia in control of occupied Ukrainian territory—positions diverging sharply from the consensus of EU and NATO partners.\n\nThe government's rationale combines strategic neutralism (arguing that Ukraine cannot win and that prolonging the war serves US rather than European interests), economic pragmatism (Hungary's reliance on Russian energy imports and ongoing TurkStream gas deliveries), and domestic political positioning (Fidesz's voter base includes significant anti-war sentiment).\n\nThe institutional consequences have been significant: Hungary's qualified majority voting blocking of some measures has been circumvented through European Peace Facility mechanism amendments, bilateral aid pledges by other member states, and EU article processes that exclude Hungary when unanimity cannot be reached. The friction has generated calls to reform EU decision-making on foreign policy to reduce unanimity requirements.\n\nFor Hungarians living in other EU states—particularly in countries that border Ukraine and are strongly pro-Ukraine—Orbán's position has created social and reputational consequences. Hungarian communities in Germany, Austria, and the UK sometimes find themselves in awkward positions vis-à-vis Ukrainian colleagues and neighbours.",
    officialLinks: [
      { label: "Hungarian Ministry of Foreign Affairs and Trade", url: "https://mfa.gov.hu/eng" },
      { label: "EU Council – Ukraine support measures", url: "https://www.consilium.europa.eu/en/policies/ukraine-support/" },
      { label: "NATO Hungary", url: "https://www.nato.int/cps/en/natohq/topics_50083.htm" }
    ],
    newsLinks: [
      { label: "Orbán visits Moscow, breaking EU consensus on isolating Putin", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-07-05" },
      { label: "Hungary blocks EU military aid for Ukraine at Foreign Affairs Council", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-14" },
      { label: "Other EU states route Ukraine aid around Budapest's vetoes", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-03-06" }
    ],
    endorsements: [
      { name: "Hungarian Helsinki Committee", url: "https://helsinki.hu/en/" },
      { name: "European Council on Foreign Relations", url: "https://ecfr.eu" },
      { name: "TASZ – Hungarian Civil Liberties Union", url: "https://tasz.hu/en/" }
    ],
    supporterCount: 2534
  },
  "ie-001": {
    detail: "Ireland's housing crisis is driven by a structural deficit of supply relative to population growth, which has been consistent since approximately 2012 and has worsened as economic growth attracted immigration and the population has grown faster than housing completions. Rents in Dublin and other cities are among the highest in the EU relative to local wages, and first-time buyer affordability has deteriorated significantly.\n\nThe supply-side constraints are complex: planning delays and appeals, construction sector cost inflation, labour shortages in the building trades, land banking by large owners, and restrictive height and density limits in many local authority areas all contribute. The government has set targets to build 33,000 homes annually through 2030 but has consistently fallen short of earlier equivalent targets.\n\nSocial and affordable housing provision collapsed during the austerity years and has not been rebuilt: the waiting list for social housing exceeds 60,000 households, and the cost rental sector—designed to offer below-market rents for working households—is still in its early stages. Institutional investment in private rental housing has been controversial, with debate about whether large landlords are competing with households for properties or adding supply that otherwise would not be built.\n\nThe housing crisis is reshaping Irish politics: new parties including People Before Profit and Social Democrats have made housing a central issue, and the governing Fianna Fáil–Fine Gael coalition has faced sustained pressure to implement more radical interventions. For the Irish diaspora—a million or more potential returnees who have left primarily for affordability reasons—housing is often the decisive factor in whether they consider returning.",
    officialLinks: [
      { label: "Irish Department of Housing, Local Government and Heritage", url: "https://www.gov.ie/en/organisation/department-of-housing-local-government-and-heritage/" },
      { label: "Housing Agency Ireland", url: "https://www.housingagency.ie" },
      { label: "Residential Tenancies Board", url: "https://www.rtb.ie" }
    ],
    newsLinks: [
      { label: "Ireland falls short of housing targets again as costs rise", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-19" },
      { label: "Dublin rents reach new record, pricing out young workers", url: "https://www.theguardian.com/world/ireland/", source: "The Guardian", publishedAt: "2025-04-17" },
      { label: "Irish housing: new government promises most ambitious build programme yet", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-23" }
    ],
    endorsements: [
      { name: "Threshold – Irish housing charity", url: "https://www.threshold.ie" },
      { name: "Focus Ireland", url: "https://www.focusireland.ie" },
      { name: "NESC – National Economic and Social Council Ireland", url: "https://www.nesc.ie" }
    ],
    supporterCount: 2187
  },
  "ie-002": {
    detail: "Ireland's 12.5% corporate tax rate, maintained since 1999, has attracted the European headquarters of major US technology and pharmaceutical companies, making Ireland the largest per-capita recipient of US foreign direct investment in the world. Apple, Google, Meta, Microsoft, and dozens of pharmaceutical multinationals have significant Irish operations, and a small number of companies account for a disproportionate share of corporate tax revenues.\n\nThe OECD global minimum tax agreement—setting a minimum effective rate of 15% for large multinationals—was implemented in EU law through a directive and has been transposed in Ireland. The Irish government accepted the change as unavoidable given its international commitments, while working to ensure that the transition maintains Ireland's attractiveness as a location for substance-based investment.\n\nThe concentration risk in Ireland's tax base is a significant fiscal vulnerability: if a small number of very large companies were to relocate or restructure, Irish public finances could face a significant shortfall. Windfall corporate tax receipts in recent years have exceeded forecasts dramatically, partly reflecting profit-shifting patterns that may not be permanent.\n\nBrexit created both challenges and opportunities for Ireland: the loss of common UK-EU market access pushed some financial services operations to Dublin, adding to the concentration in financial sector employment, while the Northern Ireland Protocol (now Windsor Framework) created unique challenges in managing the Irish border and the island's economic integrity.",
    officialLinks: [
      { label: "Irish Revenue Commissioners", url: "https://www.revenue.ie/en/corporate/index.aspx" },
      { label: "Irish Department of Finance – fiscal assessment", url: "https://www.gov.ie/en/organisation/department-of-finance/" },
      { label: "IDA Ireland – inward investment", url: "https://www.idaireland.com" }
    ],
    newsLinks: [
      { label: "Ireland implements 15% minimum corporate tax as OECD deal takes effect", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-01-01" },
      { label: "Ireland's corporate tax windfall raises sustainability questions", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-03-14" },
      { label: "Dublin's multinational dependency: risks and rewards of the Irish model", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-22" }
    ],
    endorsements: [
      { name: "TASC – Think tank for Action on Social Change", url: "https://www.tasc.ie" },
      { name: "Irish Fiscal Advisory Council", url: "https://www.fiscalcouncil.ie" },
      { name: "IBEC – Irish Business and Employers Confederation", url: "https://www.ibec.ie" }
    ],
    supporterCount: 1124
  },
  "ie-003": {
    detail: "Ireland experienced the fastest population growth in the EU in the 2020s, driven by a combination of economic immigration, return migration of the Irish diaspora, and the arrival of Ukrainian refugees. Net immigration peaked at over 100,000 in a single year, creating significant demands on housing, healthcare, and social services that outpaced provision.\n\nThe accommodation of Ukrainian refugees—Ireland accepted over 100,000, the highest per-capita intake in the EU—required emergency use of holiday villages, empty accommodation, and eventually military facilities. The integration of new arrivals with support from existing ethnic minority communities was broadly successful in urban areas but generated tensions in some smaller communities where the pace of change was particularly rapid.\n\nAnti-immigration protests—including arson attacks on planned asylum seeker accommodation facilities—reflected a radicalisation of a minority of the population that found expression partly through social media networks and was linked to international far-right actors. The government's response focused on communications and on addressing the accommodation shortage that had fuelled some of the tension.\n\nThe political consequences were significant: immigration rose to be the top concern in opinion polls for the first time, influencing the coalition government's immigration policy decisions and the rise of new populist voices in the 2024 local and European elections. The established parties have sought to tighten migration management without ceding ground to far-right narratives.",
    officialLinks: [
      { label: "Irish Immigration Service (IPAS)", url: "https://www.gov.ie/en/organisation/international-protection-office/" },
      { label: "UNHCR Ireland", url: "https://www.unhcr.org/ie" },
      { label: "Irish Refugee Council", url: "https://www.irishrefugeecouncil.ie" }
    ],
    newsLinks: [
      { label: "Ireland records highest immigration rate in EU as arrivals accelerate", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-11-07" },
      { label: "Arson attacks on asylum accommodation facilities prompt Dublin security review", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-05-14" },
      { label: "Ireland tightens asylum rules as immigration rises up political agenda", url: "https://www.theguardian.com/world/ireland/", source: "The Guardian", publishedAt: "2025-02-28" }
    ],
    endorsements: [
      { name: "Irish Refugee Council", url: "https://www.irishrefugeecouncil.ie" },
      { name: "Immigrant Council of Ireland", url: "https://www.immigrantcouncil.ie" },
      { name: "UNHCR Ireland", url: "https://www.unhcr.org/ie" }
    ],
    supporterCount: 1653
  },
  "it-001": {
    detail: "Italy's public debt, at approximately 140% of GDP, is the largest in absolute terms in the EU and among the highest as a proportion of GDP. Servicing this debt consumes a significant share of public revenue, crowding out investment in infrastructure, education, and healthcare. Italian bond yields are consistently higher than comparable eurozone sovereigns, reflecting investor uncertainty about long-term sustainability.\n\nManaging the debt within EU fiscal rules—which require Italy to reduce its structural deficit and put debt on a downward path—while also funding the public services that Italian voters expect is the central challenge of Italian economic policy. The revised EU fiscal framework adopted in 2023 provides more flexibility for high-debt countries with adjustment plans, but Italy must demonstrate credible commitment to consolidation.\n\nThe Meloni government has maintained broadly orthodox fiscal commitments while seeking to protect some redistributive and social spending priorities. Tensions have arisen between EU fiscal expectations and domestic political promises, particularly on tax cuts, pension provisions, and infrastructure for the south (Mezzogiorno).\n\nFor Italians abroad—estimated at over five million, with communities in Germany, Argentina, Switzerland, and the UK—the health of the Italian economy determines both the welfare of family members at home and the attractiveness of potential return. Italian diaspora communities often include both those who left during the post-2008 years of economic stagnation and those who maintain strong business and cultural ties.",
    officialLinks: [
      { label: "Italian Ministry of Economy and Finance", url: "https://www.mef.gov.it/en/index.html" },
      { label: "European Commission Italy economic oversight", url: "https://economy-finance.ec.europa.eu/economic-and-fiscal-policy-coordination/eu-economic-governance-monitoring-prevention-correction/european-semester/country-specific-information/italy_en" },
      { label: "Bank of Italy – public debt data", url: "https://www.bancaditalia.it/statistiche/index.html" }
    ],
    newsLinks: [
      { label: "Italy's public debt hits new high as growth remains sluggish", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-02-11" },
      { label: "Brussels pushes Rome on fiscal consolidation path amid debt concerns", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-07" },
      { label: "Italy's Meloni balances austerity demands with welfare commitments", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-15" }
    ],
    endorsements: [
      { name: "Istituto Bruno Leoni", url: "https://www.brunoleoni.it" },
      { name: "CGIL – Italian General Confederation of Labour (social dimension)", url: "https://www.cgil.it" },
      { name: "Fondazione GIMBE – healthcare spending analysis", url: "https://www.fondazionegimbe.it" }
    ],
    supporterCount: 1387
  },
  "it-002": {
    detail: "Italy receives the majority of migrants crossing the central Mediterranean from Libya and Tunisia, with arrivals reaching over 150,000 in some years. The management of these arrivals—rescue at sea, reception on land, processing of asylum claims, integration of those granted protection, and return of those denied—is politically the most contentious domestic policy area in Italy.\n\nThe Meloni government has pursued a strategy of bilateral agreements with transit and origin countries—including the controversial Tunisia deal and an Albanian offshore processing arrangement—to reduce arrivals before they reach Italian waters. Critics including UNHCR and human rights groups have raised concerns about conditions in partner countries and whether returned individuals receive adequate protection.\n\nThe Albania deal, under which Italy would process some asylum claims in Albanian facilities, has been challenged in Italian courts, with the Court of Cassation initially blocking transfers and the government subsequently seeking to override judicial scrutiny through legislation designating certain countries as 'safe'. The legal battles have created a constitutional confrontation over the separation of powers.\n\nBurden-sharing with other EU member states—distributing asylum seekers across the EU rather than concentrating responsibility on frontline states—has been the centrepiece of Italy's EU-level agenda. The 2024 Pact on Migration includes mandatory solidarity but at a scale that falls well short of Italian requests. The gap between Italian expectations and EU political willingness to redistribute has been a persistent source of frustration for successive Italian governments.",
    officialLinks: [
      { label: "Italian Ministry of Interior – immigration", url: "https://www.interno.gov.it/it/temi/immigrazione-e-asilo" },
      { label: "UNHCR Italy", url: "https://www.unhcr.org/it" },
      { label: "EU Pact on Migration and Asylum", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/pact-migration-and-asylum_en" }
    ],
    newsLinks: [
      { label: "Italy-Albania migrant deal halted by courts in constitutional clash", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-10-19" },
      { label: "Rome announces expanded Tunisia deal to reduce Mediterranean crossings", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-11" },
      { label: "EU migration pact enters force: Italy presses for more solidarity", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-06-20" }
    ],
    endorsements: [
      { name: "UNHCR Italy", url: "https://www.unhcr.org/it" },
      { name: "Medici Senza Frontiere (MSF) Italy", url: "https://www.medicisenzafrontiere.it" },
      { name: "Associazione per gli Studi Giuridici sull'Immigrazione (ASGI)", url: "https://www.asgi.it" }
    ],
    supporterCount: 2243
  },
  "it-003": {
    detail: "Italy was allocated approximately €191 billion—the largest share of any EU member state—from the NextGenerationEU recovery fund under its National Recovery and Resilience Plan (PNRR). The funds are divided between grants and loans and are conditional on meeting specific reform and investment milestones over the 2021–2026 period.\n\nImplementation has been challenging. Milestone compliance has required continuous monitoring and, in some cases, renegotiation with the European Commission. The absorption of actual spending—as opposed to milestone certification—has been slower than planned, with particular delays in digital, infrastructure, and green economy projects. Administrative capacity at the regional and local level, particularly in southern Italy, is a significant bottleneck.\n\nThe Mezzogiorno—Italy's historically under-developed south—was intended to receive a disproportionate share of PNRR investment to address regional disparities. In practice, the distribution of actual projects between north and south has been contested, with some analyses suggesting that northern regions with stronger administrative capacity have moved faster in accessing funds.\n\nThe risk of having to return funds to Brussels—if milestones are not met or spending cannot be certified—is a live concern. The Commission and the Italian government have had ongoing negotiations about the pace and conditions of disbursement, and some milestone targets have been adjusted in the process. The PNRR's success or failure will significantly shape Italy's economic trajectory through the end of the decade.",
    officialLinks: [
      { label: "Italian Government – PNRR portal", url: "https://www.governo.it/it/dipartimenti/dipartimento-per-le-politiche-di-coesione-e-il-sud/20518" },
      { label: "European Commission – Italy PNRR assessment", url: "https://commission.europa.eu/business-economy-euro/economic-recovery/recovery-and-resilience-facility_en" },
      { label: "Corte dei Conti Italy – PNRR audit", url: "https://www.corteconti.it" }
    ],
    newsLinks: [
      { label: "Italy secures latest PNRR tranche after milestone renegotiation", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-28" },
      { label: "Rome's PNRR absorption problem: north moves faster than south", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-05-16" },
      { label: "EU recovery fund: Italy's implementation scrutinised by Brussels auditors", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-25" }
    ],
    endorsements: [
      { name: "OpenPNRR – civic monitoring platform", url: "https://openpnrr.it" },
      { name: "SVIMEZ – Association for the Development of Industry in the South", url: "https://www.svimez.info" },
      { name: "Italian Court of Auditors (Corte dei Conti)", url: "https://www.corteconti.it" }
    ],
    supporterCount: 876
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 4`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
