const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "cy-001": {
    detail: "The division of Cyprus since 1974 remains the longest-standing partition within the EU. The Republic of Cyprus, the internationally recognised state, controls the south; the northern third is administered by the Turkish Cypriot authorities as the Turkish Republic of Northern Cyprus, recognised only by Turkey. The UN Buffer Zone, monitored by UNFICYP, separates the two communities.\n\nReunification talks have been attempted multiple times under UN auspices, most recently in the 2017 Crans-Montana summit which collapsed over security guarantees and the role of Turkey as a guarantor power. The key sticking points remain: the withdrawal of Turkish troops, the future of the settler population that has arrived from mainland Turkey since 1974, property restitution for Greek Cypriot displaced persons, and the constitutional model for a reunited federal state.\n\nThe EU membership status of Cyprus complicates matters: EU law is suspended in the north pending a settlement, but a reunified Cyprus would need to integrate the northern part into the EU legal framework. This creates incentives for both sides—EU citizenship and access are attractive to Turkish Cypriots—but also political complications regarding Turkey's own EU relations.\n\nProperty rights are among the most emotional dimensions for diaspora Greek Cypriots: tens of thousands of families were displaced from their properties in 1974 and have been seeking restitution, compensation, or recognition of their rights for five decades. The European Court of Human Rights has ruled that Cyprus (and Turkey) bear obligations in this regard.",
    officialLinks: [
      { label: "UNFICYP – UN Peacekeeping Force in Cyprus", url: "https://unficyp.unmissions.org" },
      { label: "ECHR Cyprus v. Turkey judgment", url: "https://www.echr.coe.int" },
      { label: "Republic of Cyprus – Reunification", url: "https://www.pio.gov.cy" }
    ],
    newsLinks: [
      { label: "UN resumes informal Cyprus reunification talks after years of deadlock", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-08" },
      { label: "Cyprus property dispute reaches European courts for displaced families", url: "https://www.theguardian.com/world/cyprus/", source: "The Guardian", publishedAt: "2024-11-19" },
      { label: "Turkish Cypriots vote in presidential poll amid reunification debate", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-16" }
    ],
    endorsements: [
      { name: "UNFICYP", url: "https://unficyp.unmissions.org" },
      { name: "Home for Cooperation (H4C) Cyprus", url: "https://home4cooperation.info" },
      { name: "Cyprus Community Media Centre", url: "https://www.ccmccy.org" }
    ],
    supporterCount: 1892
  },
  "cy-002": {
    detail: "Cyprus operated the EU's largest citizenship-by-investment programme by volume and value until investigative journalism by Al Jazeera in October 2020 exposed the programme's vulnerabilities, showing officials apparently willing to facilitate passports for individuals with criminal records. The revelations triggered a parliamentary investigation, the resignation of senior officials, and the suspension of the programme by the government.\n\nThe legal and reputational fallout continued: the European Parliament established a committee of inquiry on golden passports, the European Commission maintained infringement proceedings, and individual cases of passport holders subsequently linked to financial crime or sanctions evasion attracted international attention. The transparency of who received passports and on what basis remains a contentious issue.\n\nCyprus's financial services sector—dependent partly on its role as a hub for Russian and Ukrainian capital, structuring entities, and holding companies—has faced broader regulatory pressure. Anti-money-laundering compliance requirements have tightened significantly, and Cyprus has worked to improve its FATF ratings.\n\nThe episode raised questions about Cyprus's regulatory culture and whether the political economy of a small state heavily reliant on financial services revenue creates structural incentives to be permissive on due diligence. For the Cypriot diaspora and EU citizens generally, the scandal reinforced concerns about the integrity of EU citizenship and the quality of member-state oversight.",
    officialLinks: [
      { label: "Republic of Cyprus – Ministry of Interior passports", url: "https://www.moi.gov.cy" },
      { label: "European Commission infringement Cyprus golden passports", url: "https://commission.europa.eu/law/law-making-process/applying-eu-law/infringement-procedure_en" },
      { label: "FATF Cyprus mutual evaluation", url: "https://www.fatf-gafi.org/en/countries/detail/Cyprus.html" }
    ],
    newsLinks: [
      { label: "Cyprus suspends golden passport programme after Al Jazeera exposé", url: "https://www.theguardian.com/world/cyprus/", source: "The Guardian", publishedAt: "2020-11-01" },
      { label: "EU Parliament: Cyprus golden passport scheme must not return", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-22" },
      { label: "Cyprus banks tighten AML after years of regulatory scrutiny", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-12-04" }
    ],
    endorsements: [
      { name: "Transparency International EU", url: "https://transparency.eu" },
      { name: "OCCRP (Organised Crime and Corruption Reporting Project)", url: "https://www.occrp.org" },
      { name: "Global Financial Integrity", url: "https://gfintegrity.org" }
    ],
    supporterCount: 743
  },
  "cy-003": {
    detail: "Significant natural gas discoveries in Cyprus's exclusive economic zone—including the Aphrodite field discovered in 2011 and subsequent discoveries including Calypso—have created both economic opportunity and geopolitical tension. Turkey disputes Cyprus's claimed EEZ boundaries, arguing that Turkish Cypriots and Turkey itself have rights over the resources, and has conducted drilling in areas that Cyprus and the EU consider illegal.\n\nDevelopment of the Aphrodite field has been delayed by commercial and political factors: LNG export routes depend on regional pipeline or floating LNG infrastructure, and the optimal commercialisation path has been the subject of prolonged negotiation between the licence holders, the Republic of Cyprus, Israel (which has adjacent gas fields), and potential buyers in Europe seeking to diversify away from Russian gas.\n\nThe post-2022 European push for LNG diversification from Russia gave fresh urgency to Eastern Mediterranean gas development, with European Commission officials visiting the region and the EU funding feasibility studies for East-Med pipeline routes. However, the US effectively discouraged the East-Med pipeline on geopolitical grounds related to Turkey and Greece-Turkey relations.\n\nFor Cyprus, the gas question interacts directly with the reunification issue: a federal solution would presumably require agreement on how resource revenues would be shared, and the prospect of substantial energy wealth has both increased the stakes of reunification and complicated the positions of various parties.",
    officialLinks: [
      { label: "Cyprus Ministry of Energy – hydrocarbon licensing", url: "https://www.meci.gov.cy/energy" },
      { label: "European Commission – Eastern Mediterranean energy", url: "https://energy.ec.europa.eu/topics/international-energy-cooperation/eu-energy-relations-energy-community-and-neighbouring-countries_en" },
      { label: "UNCLOS maritime boundary framework", url: "https://www.un.org/depts/los/index.htm" }
    ],
    newsLinks: [
      { label: "Aphrodite gas field development deal signed as Europe seeks alternatives to Russia", url: "https://www.reuters.com/business/energy/", source: "Reuters", publishedAt: "2025-01-14" },
      { label: "Turkey's drilling in Cypriot EEZ continues despite EU condemnation", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-28" },
      { label: "Cyprus, Israel and Greece deepen energy corridor talks", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-07" }
    ],
    endorsements: [
      { name: "ELIAMEP – Hellenic Foundation for European & Foreign Policy", url: "https://www.eliamep.gr" },
      { name: "International Crisis Group – Eastern Mediterranean", url: "https://www.crisisgroup.org" },
      { name: "CEPS (Centre for European Policy Studies)", url: "https://www.ceps.eu" }
    ],
    supporterCount: 612
  },
  "cz-001": {
    detail: "Czechia has been among the most active EU member states in supporting Ukraine since Russia's full-scale invasion in February 2022, reflecting both historical memory of Soviet occupation and proximity to the conflict. The country has provided significant quantities of artillery ammunition, armoured vehicles, and financial assistance, while integrating the largest per-capita wave of Ukrainian refugees among EU states.\n\nThe government's 'Czech ammunition initiative'—coordinating European procurement of artillery shells from non-EU suppliers and delivering them to Ukraine—was a significant diplomatic achievement in 2024, filling a gap when EU ammunition production expansion was insufficient. The initiative demonstrated Czech diplomatic entrepreneurialism on a pan-European scale.\n\nDefence spending has risen substantially, with Czechia committing to meet and exceed the NATO 2% GDP target. The modernisation of the Czech armed forces, including new fighter jet procurement (F-35s replacing Soviet-era aircraft), armoured vehicle programmes, and air defence systems, involves significant industrial and budgetary decisions.\n\nFor the Czech diaspora—smaller than some Eastern European communities but present across EU states and North America—Ukraine support reflects both solidarity and strategic self-interest: Czechia's own security depends on the integrity of the Eastern European security order that Russian aggression challenges.",
    officialLinks: [
      { label: "Czech Ministry of Defence", url: "https://www.army.cz/en/ministry-of-defence" },
      { label: "NATO Czech Republic member page", url: "https://www.nato.int/cps/en/natohq/topics_49127.htm" },
      { label: "Czech Ministry of Foreign Affairs – Ukraine", url: "https://www.mzv.cz/jnp/en" }
    ],
    newsLinks: [
      { label: "Czech ammunition initiative delivers shells to Ukraine after EU shortfall", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-06-17" },
      { label: "Prague commits to 2.5% GDP defence spending in NATO response", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-21" },
      { label: "One million Ukrainian refugees in Czechia reshape public services debate", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-09" }
    ],
    endorsements: [
      { name: "Czech Association for International Affairs (AMO)", url: "https://www.amo.cz/en/" },
      { name: "European Council on Foreign Relations", url: "https://ecfr.eu" },
      { name: "IISS – International Institute for Strategic Studies", url: "https://www.iiss.org" }
    ],
    supporterCount: 1478
  },
  "cz-002": {
    detail: "Czechia has made nuclear energy a centrepiece of its energy security and decarbonisation strategy, investing in expansion of the Dukovany plant and initiating a tender process for new units at Dukovany and potentially Temelín. The decision to select Westinghouse (US) as the preferred supplier for the Dukovany expansion, announced in 2024, was explicitly framed as a geopolitical choice, excluding Russia's Rosatom and reducing dependency on Russian nuclear technology.\n\nThe coal phase-out timeline has been progressively brought forward as EU carbon pricing has made coal uneconomical, with most Czech coal mines and power stations expected to close by 2033. Managing the regional transition in North Bohemia and North Moravia—where coal has been the dominant industry for generations—requires significant social and economic investment.\n\nThe nuclear expansion is expensive and will not deliver new capacity until the late 2030s at earliest. In the interim, Czechia remains dependent on coal for baseload electricity and on gas for heating, creating continued exposure to energy price volatility. Managing this transition gap while meeting EU climate targets is the central energy policy challenge.\n\nSome environmental groups contest nuclear expansion on cost and safety grounds, while others in the broader green transition debate accept nuclear as a necessary component of low-carbon electricity. The debate cuts across conventional political lines, with support for nuclear found across the political spectrum.",
    officialLinks: [
      { label: "Czech State Office for Nuclear Safety", url: "https://www.sujb.cz/en/nuclear-safety" },
      { label: "Czech Ministry of Industry and Trade – energy", url: "https://www.mpo.cz/en/" },
      { label: "European Commission – Czech Republic energy strategy", url: "https://energy.ec.europa.eu/topics/energy-strategy/national-energy-and-climate-plans-necps_en" }
    ],
    newsLinks: [
      { label: "Czechia picks Westinghouse for Dukovany nuclear expansion", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-07-05" },
      { label: "Czech coal phase-out accelerates as carbon price bites", url: "https://www.reuters.com/business/energy/", source: "Reuters", publishedAt: "2025-02-28" },
      { label: "Prague battles to balance nuclear plans with EU renewable targets", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-14" }
    ],
    endorsements: [
      { name: "Cenia – Czech Environmental Information Agency", url: "https://www.cenia.cz/en" },
      { name: "Greenpeace Czech Republic", url: "https://www.greenpeace.org/czech/" },
      { name: "World Nuclear Association", url: "https://www.world-nuclear.org" }
    ],
    supporterCount: 834
  },
  "cz-003": {
    detail: "The political career of Andrej Babiš—founder of the ANO movement, two-time Prime Minister, and billionaire media owner—became a lightning rod for debates about conflicts of interest, democratic accountability, and the resilience of Czech institutions. His 2024 criminal conviction for fraud related to EU subsidy applications for his Stork Nest farm became final, though the case dragged through multiple legal stages over years.\n\nANO's political success despite the criminal charges demonstrated the limits of formal accountability in a polarised electoral environment: a significant share of Czech voters viewed the proceedings as political persecution rather than legitimate prosecution. This dynamic—where judicial proceedings against political figures become themselves a source of political identity—is a recurring challenge in Central European democracies.\n\nMedia ownership by political figures was a central concern: Babiš owned the two largest Czech daily newspapers during much of his time in government, raising structural conflicts of interest regardless of specific editorial decisions. The Czech media ownership landscape has shifted since, but the episode prompted broader debates about regulatory frameworks for political figures owning media.\n\nFor Czech civil society, the Babiš era highlighted both the vulnerability of democratic norms to a well-resourced political entrepreneur and the resilience that civic mobilisation, a functioning electoral system, and independent courts can provide. The 2021 election that removed him from power was framed by many observers as a test of democratic resilience that Czechia passed.",
    officialLinks: [
      { label: "Czech Supreme Court – case registry", url: "https://www.nsoud.cz/en/" },
      { label: "Czech Republic Supreme Audit Office", url: "https://www.nku.cz/en/" },
      { label: "OLAF – European Anti-Fraud Office (Stork Nest investigation)", url: "https://anti-fraud.ec.europa.eu/index_en" }
    ],
    newsLinks: [
      { label: "Czech court convicts Babiš in EU subsidy fraud case", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-09-03" },
      { label: "ANO comeback: Babiš leads polls despite criminal conviction", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-07-11" },
      { label: "Czech media ownership rules tightened after Babiš controversy", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-06" }
    ],
    endorsements: [
      { name: "Transparency International Czech Republic", url: "https://www.transparency.cz" },
      { name: "Czech Pirate Party (transparency advocacy)", url: "https://www.pirati.cz" },
      { name: "STAN – civic democratic movement", url: "https://www.starostove-a-nezavisli.cz" }
    ],
    supporterCount: 921
  },
  "dk-001": {
    detail: "Denmark has developed one of the most restrictive immigration and asylum policy frameworks in the EU, often positioning itself at the hardest end of debates within the Council. The country has introduced measures including the 'jewellery law' allowing seizure of assets from asylum seekers, deportation agreements with Rwanda-inspired frameworks, and offshore processing proposals that have attracted attention across Europe.\n\nThe bipartisan consensus for restrictive policies is notably broad: Social Democrats, who dominate the centre-left, have adopted positions on migration closer to what would elsewhere be associated with the centre-right, arguing that social cohesion and the sustainability of the welfare state require tight control of immigration and strong integration requirements. This consensus insulates migration policy from the usual left-right political competition.\n\nHuman rights organisations including the Danish Refugee Council and Amnesty International Denmark have challenged specific measures before Danish courts and through international bodies, arguing that some policies violate the 1951 Refugee Convention and ECHR obligations. Several cases have been won by applicants, though the government has responded by seeking legislative adjustments rather than fundamental policy shifts.\n\nFor the Danish diaspora—primarily in Germany, Norway, and across the EU—the global reputation of Danish migration policy creates a complex identity position. Many Danes abroad are themselves beneficiaries of the free movement that integration policy at home is sometimes seen as contrasting with.",
    officialLinks: [
      { label: "Danish Immigration Service (Udlændingestyrelsen)", url: "https://www.nyidanmark.dk/en-GB" },
      { label: "Danish Refugee Appeals Board", url: "https://fln.dk/en" },
      { label: "UNHCR Denmark", url: "https://www.unhcr.org/denmark.html" }
    ],
    newsLinks: [
      { label: "Denmark's Social Democrats maintain hardline asylum stance into new term", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-19" },
      { label: "UNHCR criticises Denmark's Rwanda-inspired offshore asylum plan", url: "https://www.theguardian.com/world/denmark/", source: "The Guardian", publishedAt: "2024-11-12" },
      { label: "Danish court rules against deportation in refugee family case", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-22" }
    ],
    endorsements: [
      { name: "Danish Refugee Council", url: "https://drc.ngo/about-drc/where-we-work/europe/denmark/" },
      { name: "Amnesty International Denmark", url: "https://www.amnesty.dk" },
      { name: "UNHCR Denmark", url: "https://www.unhcr.org/denmark.html" }
    ],
    supporterCount: 1127
  },
  "dk-002": {
    detail: "Denmark's June 2022 referendum on abolishing the EU defence opt-out—approved by approximately 67% of voters—came directly in the wake of Russia's February invasion of Ukraine and marked a historic shift in Danish security policy. For thirty years, Denmark had been the only EU member state formally excluded from EU defence cooperation, including the European Defence Agency and the Permanent Structured Cooperation (PESCO) framework.\n\nIntegration into EU defence structures has proceeded, including Danish participation in PESCO projects, contributions to EU military missions, and alignment with EU defence industrial policy. The practical implications of full participation have become clearer: Danish companies can now access EU defence fund grants, and Danish troops can participate in EU-commanded operations.\n\nNATO remains the primary framework for Denmark's security thinking, and Danish defence spending has been raised to meet the 2% GDP commitment. The government has commissioned major defence investment packages focusing on the Baltic Sea, Bornholm island's military posture, and long-range precision strike capabilities.\n\nGreenland's security has gained new prominence following discussions—including public comments by the US administration—about Greenlandic sovereignty and strategic control of the Arctic. Denmark has committed additional defence investment for Greenland and the Faroe Islands, and the debate about Greenland's future status has intersected with broader Arctic security considerations.",
    officialLinks: [
      { label: "Danish Ministry of Defence", url: "https://www.fmn.dk/en/" },
      { label: "European Defence Agency – Denmark", url: "https://eda.europa.eu/who-we-are/member-states/denmark" },
      { label: "NATO Denmark", url: "https://www.nato.int/cps/en/natohq/topics_52090.htm" }
    ],
    newsLinks: [
      { label: "Denmark votes to end EU defence opt-out in historic referendum", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2022-06-02" },
      { label: "Denmark boosts Greenland military spending amid sovereignty debate", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-04" },
      { label: "Copenhagen raises defence budget above 2% of GDP to hit NATO target", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-05-18" }
    ],
    endorsements: [
      { name: "Danish Institute for International Studies (DIIS)", url: "https://www.diis.dk/en" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" },
      { name: "CEPS – Centre for European Policy Studies", url: "https://www.ceps.eu" }
    ],
    supporterCount: 1041
  },
  "dk-003": {
    detail: "Denmark adopted the world's first carbon tax on agricultural livestock emissions in 2024, a landmark policy that requires farmers to pay a levy on methane and nitrous oxide from cattle, pigs, and other livestock from 2030. The tax is designed to reduce Denmark's emissions from agriculture—which accounts for approximately 25% of national greenhouse gas output—and help meet the country's binding 2030 and 2050 climate targets.\n\nThe agricultural sector was deeply involved in the negotiation of the tax's design, and the government sought to ensure the competitiveness impact was managed through partial tax offsets, green transition support, and a longer phase-in than environmental groups had requested. Farmer organisations accepted the framework in principle, though many individual farmers have expressed concern about its economic impact.\n\nThe policy is being watched across Europe and globally as a test case for whether agricultural emissions can be priced without triggering political backlash comparable to the French gilets jaunes movement or the Dutch farmers' protests. Denmark's broad political consensus—including farm sector participation in the design—may be a unique enabling condition.\n\nBeyond the carbon tax, Denmark's ambitious biodiversity and rewetting targets for former agricultural land are creating additional tensions with the farm sector. The government aims to remove significant areas from production for nature restoration, creating competing claims on land use that are contested at local and national levels.",
    officialLinks: [
      { label: "Danish Ministry of Food, Agriculture and Fisheries", url: "https://www.fvm.dk/en/" },
      { label: "Danish Energy Agency – climate targets", url: "https://ens.dk/en" },
      { label: "European Commission – Danish National Energy and Climate Plan", url: "https://energy.ec.europa.eu/topics/energy-strategy/national-energy-and-climate-plans-necps_en" }
    ],
    newsLinks: [
      { label: "Denmark introduces world's first carbon tax on farming emissions", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-06-26" },
      { label: "Danish farmers brace for livestock carbon levy impact", url: "https://www.reuters.com/business/environment/", source: "Reuters", publishedAt: "2025-02-03" },
      { label: "Copenhagen's farm climate policy watched as global blueprint", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-29" }
    ],
    endorsements: [
      { name: "Danish Society for Nature Conservation (DN)", url: "https://www.dn.dk" },
      { name: "WWF Denmark", url: "https://www.wwf.dk" },
      { name: "Green transition Denmark (GreenDenmark)", url: "https://www.stateofgreen.com" }
    ],
    supporterCount: 678
  },
  "ee-001": {
    detail: "Estonia's digital governance model—built around the X-Road data exchange platform, digital identity, e-residency, and online public services—is internationally recognised as a benchmark for public sector digitisation. Citizens can access nearly all government services online, sign documents digitally, vote online in national elections, and interact with public authorities without physical presence.\n\nThe security of this digital infrastructure is a continuous concern. Estonia experienced significant DDoS attacks in 2007—attributed to Russian state or state-linked actors in the context of the Bronze Soldier relocation controversy—which shaped subsequent investment in cyber resilience. NATO's Cooperative Cyber Defence Centre of Excellence (CCDCOE), headquartered in Tallinn, reflects Estonia's role as a leading voice on cyber defence policy.\n\nThe e-Residency programme, launched in 2014, allows non-residents to establish and manage EU-based digital businesses using Estonian digital infrastructure. It has attracted over 100,000 e-residents and generated significant corporate tax revenue, though debates about its actual economic development impact versus administrative overhead continue.\n\nFor Estonian diaspora—concentrated in Finland, the UK, Sweden, and the United States—digital services mean they can vote online, access government services, and maintain business ties without returning in person. This model is increasingly cited as a template for how diaspora engagement can be maintained and deepened through technology.",
    officialLinks: [
      { label: "Republic of Estonia e-Governance Academy", url: "https://ega.ee/en/" },
      { label: "Estonian Information System Authority (RIA)", url: "https://www.ria.ee/en" },
      { label: "NATO CCDCOE Tallinn", url: "https://ccdcoe.org" }
    ],
    newsLinks: [
      { label: "Estonia's e-governance model spreads to Eastern Europe via EU partnerships", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-14" },
      { label: "Tallinn cyber centre warns of Russian hybrid operations targeting Baltic states", url: "https://rferl.org/estonia/", source: "RFE/RL", publishedAt: "2025-01-28" },
      { label: "E-Residency hits 110,000 milestone as Estonia eyes global digital state", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-11" }
    ],
    endorsements: [
      { name: "e-Governance Academy Estonia", url: "https://ega.ee/en/" },
      { name: "NATO CCDCOE", url: "https://ccdcoe.org" },
      { name: "Access Now (digital rights)", url: "https://www.accessnow.org" }
    ],
    supporterCount: 1643
  },
  "ee-002": {
    detail: "Estonia's security posture has been shaped by the reality of sharing a 329-kilometre border with Russia and the historical experience of Soviet occupation from 1940–1991. Russia's 2022 invasion of Ukraine confirmed Estonian threat assessments that had long warned of Russian revisionism, and Estonia has been among the most vocal advocates within NATO and the EU for maximum support for Ukraine and maximum deterrence against Russia.\n\nEstonia spends over 2.3% of GDP on defence—well above the NATO target—and has hosted enhanced forward presence NATO battlegroups since 2017. The Estonian position has consistently been that forward presence should be upgraded from a tripwire to a full defence force capable of preventing rather than only triggering Article 5 obligations. Progress toward this goal has been made after 2022, with increased Allied contributions to the battlegroup.\n\nIntelligence assessments published annually by the Estonian Foreign Intelligence Service (EFIS) on Russian intentions and capabilities have become reference documents in European security debates, valued for their directness and analytical quality. The 2024 assessment explicitly addressed the risk of military action against NATO territory within the next decade under certain scenarios.\n\nFor Estonians living abroad—who are eligible to vote online and maintain strong civic connections to home—Russia's aggression is experienced as both a geopolitical and personal concern. Family members still resident in Estonia, particularly in the Russian-speaking northeast, are directly in any potential conflict zone.",
    officialLinks: [
      { label: "Estonian Ministry of Defence", url: "https://www.kaitseministeerium.ee/en" },
      { label: "Estonian Foreign Intelligence Service annual report", url: "https://www.valisluureamet.ee/en" },
      { label: "NATO Estonia enhanced forward presence", url: "https://www.nato.int/cps/en/natohq/topics_136388.htm" }
    ],
    newsLinks: [
      { label: "Estonia calls for NATO to adopt full defence posture on eastern flank", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-12" },
      { label: "Estonian intelligence: Russia could test NATO within decade", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-18" },
      { label: "Tallinn pushes allies to increase Baltic forward presence troops", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-03" }
    ],
    endorsements: [
      { name: "International Centre for Defence and Security (ICDS) Estonia", url: "https://icds.ee" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" },
      { name: "IISS", url: "https://www.iiss.org" }
    ],
    supporterCount: 1834
  },
  "ee-003": {
    detail: "Approximately 25% of Estonia's population is Russian-speaking, primarily concentrated in the northeastern Ida-Viru county and parts of Tallinn. This community's integration into Estonian civic life has been a persistent policy challenge since independence in 1991, shaped by language requirements for citizenship, education policy, and access to public employment.\n\nSince Russia's 2022 invasion of Ukraine, the integration debate has taken on acute national security dimensions. The government has accelerated the transition of Russian-medium schools to Estonian-language instruction, citing both integration and security rationale. The decision has been contested by some Russian-speaking community representatives, who argue it erodes minority cultural rights, while Estonian authorities argue it improves long-term integration and economic mobility.\n\nThe European Court of Human Rights and the Framework Convention for the Protection of National Minorities have both provided relevant legal standards for minority rights in Estonia. Estonia argues its policies comply with international law; minority rights organisations have called for greater flexibility and community consultation.\n\nA significant portion of Estonia's Russian-speaking population holds stateless 'alien passports' or has acquired Estonian or Russian citizenship over the decades since independence. The status of these communities in the event of security escalation, and their access to accurate information given Russian state media restrictions, are active policy concerns addressed partly through dedicated public broadcaster programming in Russian.",
    officialLinks: [
      { label: "Estonian Integration Foundation", url: "https://www.integratsioon.ee/en" },
      { label: "Council of Europe Framework Convention for National Minorities – Estonia", url: "https://www.coe.int/en/web/minorities/country-specific-monitoring-estonia" },
      { label: "ERR – Estonian Public Broadcasting Russian service", url: "https://rus.err.ee" }
    ],
    newsLinks: [
      { label: "Estonia completes transition of Russian-medium schools to Estonian instruction", url: "https://rferl.org/estonia/", source: "RFE/RL", publishedAt: "2025-01-05" },
      { label: "Ida-Viru county faces identity debate as schools switch language", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-03" },
      { label: "Estonia's Russian minority cautiously backs Ukraine defence, survey shows", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-09" }
    ],
    endorsements: [
      { name: "Estonian Human Rights Centre", url: "https://humanrights.ee/en/" },
      { name: "Council of Europe – Advisory Committee on Framework Convention", url: "https://www.coe.int/en/web/minorities" },
      { name: "Legal Information Centre for Human Rights (Estonia)", url: "https://www.lichr.ee/en" }
    ],
    supporterCount: 891
  },
  "fi-001": {
    detail: "Finland's accession to NATO on 4 April 2023, ending 75 years of military non-alignment, was one of the most significant security decisions in post-war European history. The decision was driven overwhelmingly by Russia's invasion of Ukraine, which shifted Finnish public opinion from minority to majority support for NATO membership within months.\n\nFinland now shares NATO's longest border with Russia—1,340 kilometres—and has moved from carefully hedged neutrality to full integration into Alliance defence planning, including hosting of Allied forces and participation in NATO command structures. The government has commissioned new military infrastructure, updated its host nation support arrangements, and accelerated force development.\n\nThe domestic political consensus around NATO membership was remarkably broad: the formal application was supported by the governing coalition and major opposition parties, with the main voices against membership coming from the Left Alliance and, initially, some Social Democrats—though even these voices moderated after the invasion. Finland's public debate on security had been more frank about Russian threat than most EU states for decades, giving the population a clearer framework for interpreting events in 2022.\n\nRelations with Russia are now zero: the land border has been closed to most travellers, Russian tourism has ceased, and Finland has expelled Russian intelligence operatives and closed its extensive border crossing infrastructure. The economic impact has been significant but manageable; the political consensus is that security benefits outweigh economic costs.",
    officialLinks: [
      { label: "Finnish Ministry of Defence", url: "https://www.defmin.fi/en" },
      { label: "NATO Finland accession", url: "https://www.nato.int/cps/en/natohq/topics_188060.htm" },
      { label: "Finnish Border Guard", url: "https://www.raja.fi/en" }
    ],
    newsLinks: [
      { label: "Finland joins NATO, completing historic shift from neutrality", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-04-04" },
      { label: "Helsinki extends Russia border closure as security concerns remain", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-20" },
      { label: "Finland buys F-35 jets and expands Baltic Sea defence posture post-NATO", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-17" }
    ],
    endorsements: [
      { name: "Finnish Institute of International Affairs (FIIA)", url: "https://www.fiia.fi/en/" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" },
      { name: "IISS", url: "https://www.iiss.org" }
    ],
    supporterCount: 2143
  },
  "fi-002": {
    detail: "Finland's welfare state—among the most comprehensive in the world—faces structural fiscal pressures from an ageing population, falling birth rates, rising pension and long-term care costs, and sluggish economic growth. The current centre-right Orpo government, which took office in 2023, has pursued significant spending cuts as part of a fiscal consolidation package that has been the most controversial domestic political story of recent years.\n\nThe cuts have affected unemployment benefits, housing support, student assistance, and social services, drawing sustained opposition from trade unions, the political left, and civil society organisations that argue the reforms disproportionately harm lower-income groups while leaving capital taxation relatively unchanged. The government argues that structural reform is necessary to maintain long-term welfare state sustainability.\n\nLabour market reforms—reducing employment protection, extending probationary periods, and weakening collective bargaining in some sectors—have been part of the package, reflecting the government's view that labour market flexibility is necessary for employment growth. Strikes and industrial action in 2024 were among the largest in Finnish labour history.\n\nFinland's fiscal challenge is genuinely difficult: the dependency ratio is worsening, productivity growth is modest, and public debt—low by European standards historically—has been rising. The Nordic model as Finland has practised it requires either higher tax revenues, lower spending, or significant productivity growth to be sustainable. All three involve distributional trade-offs that are the substance of current political debate.",
    officialLinks: [
      { label: "Finnish Ministry of Finance", url: "https://vm.fi/en/frontpage" },
      { label: "Kela – Social Insurance Institution of Finland", url: "https://www.kela.fi/web/en" },
      { label: "Finnish Centre for Pensions", url: "https://www.etk.fi/en/" }
    ],
    newsLinks: [
      { label: "Finland's biggest strike in decades hits government welfare reform plans", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-02-01" },
      { label: "Helsinki welfare cuts pass parliament after bitter debate", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-04-15" },
      { label: "Finland's ageing population crisis accelerates as birth rate hits record low", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-30" }
    ],
    endorsements: [
      { name: "STTK – Finnish Confederation of Professionals", url: "https://www.sttk.fi/en/" },
      { name: "Kalevi Sorsa Foundation", url: "https://sorsafoundation.fi/en/" },
      { name: "Finnish Institute for Health and Welfare (THL)", url: "https://thl.fi/en" }
    ],
    supporterCount: 1264
  },
  "fi-003": {
    detail: "Finland's centre-right government has tightened immigration policy significantly since 2023, including restricting family reunification rights for international protection recipients, raising income requirements, and taking measures to limit the use of asylum at the Russian land border. The border closure followed incidents in autumn 2023 in which Russia was accused of facilitating—or at least tolerating—large numbers of migrants crossing into Finland at designated crossing points, in what Finnish authorities characterised as an instrumentalisation of migration as a hybrid warfare tool.\n\nThe legal basis of some measures has been challenged domestically. The Finnish Constitution guarantees the right to apply for asylum, and the government acknowledged it was operating in a legal grey zone when it effectively stopped accepting asylum applications at land border crossings. Emergency legislation was enacted to provide a clearer legal basis, with the Council of Europe and UNHCR both raising concerns.\n\nFamily reunification restrictions have been challenged by human rights organisations as disproportionate and inconsistent with Finland's international obligations under the UN Convention on the Rights of the Child and the ECHR. Administrative courts have in some cases overturned individual decisions.\n\nThe political dynamics in Finland have been complicated by the involvement of the Finns Party in the governing coalition: the party's immigration platform was a central element of the coalition agreement, creating pressure on the government to maintain a distinctly restrictive profile even as legal challenges accumulate.",
    officialLinks: [
      { label: "Finnish Immigration Service (Migri)", url: "https://migri.fi/en/frontpage" },
      { label: "UNHCR Finland", url: "https://www.unhcr.org/fi" },
      { label: "Finnish Border Guard – Russia border closure", url: "https://www.raja.fi/en" }
    ],
    newsLinks: [
      { label: "Finland closes Russia border crossings to asylum seekers amid hybrid threat", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-11-29" },
      { label: "Council of Europe calls on Helsinki to review pushback legislation", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-07-04" },
      { label: "Finnish court overturns family reunification refusal in rights case", url: "https://rferl.org/finland/", source: "RFE/RL", publishedAt: "2025-02-24" }
    ],
    endorsements: [
      { name: "Refugee Advice Centre Finland", url: "https://pakolaisneuvonta.fi/en/" },
      { name: "UNHCR Finland", url: "https://www.unhcr.org/fi" },
      { name: "Amnesty International Finland", url: "https://www.amnesty.fi" }
    ],
    supporterCount: 1089
  },
  "fr-001": {
    detail: "France's 2023 pension reform, raising the statutory retirement age from 62 to 64, became the defining domestic political crisis of Macron's second term. Unable to secure a parliamentary majority—including among members of his own coalition—the government used Article 49.3 of the French Constitution to pass the legislation without a vote. This procedural choice, while legal, was seen by many as illegitimate given the scale of opposition.\n\nThe reform triggered the longest and broadest wave of strikes and demonstrations France had seen in decades, involving transportation workers, teachers, energy workers, and the major trade union federations in coordinated national action days. Polls consistently showed majority public opposition to the reform throughout the legislative process and after.\n\nThe constitutional and institutional questions raised by the pension crisis have outlasted the immediate dispute. France's hung parliament—where no bloc commands a majority following the 2024 legislative elections—has made governance by constitutional bypass mechanisms more frequent, raising questions about the Fifth Republic's suitability for conditions of sustained parliamentary fragmentation.\n\nFor French diaspora—one of the largest in the world, with major communities across Europe, North America, and the Francophone world—pension rights have practical stakes. Many diaspora members are covered by both French and host-country pension systems under bilateral social security agreements, and changes to French pension rules affect their eventual entitlements.",
    officialLinks: [
      { label: "French National Assembly – pension reform legislation", url: "https://www.assemblee-nationale.fr" },
      { label: "French Ministry of Labour – pension system", url: "https://www.travail-emploi.gouv.fr" },
      { label: "Conseil d'Etat – constitutional review", url: "https://www.conseil-etat.fr/en" }
    ],
    newsLinks: [
      { label: "France passes pension reform via constitutional bypass amid mass protests", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-03-17" },
      { label: "French workers strike again over Macron's retirement age change", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2023-04-06" },
      { label: "Two years on: France's pension reform still bitterly contested", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-03-17" }
    ],
    endorsements: [
      { name: "CGT (Confédération générale du travail)", url: "https://www.cgt.fr" },
      { name: "CFDT – French Democratic Confederation of Labour", url: "https://www.cfdt.fr" },
      { name: "Conseil économique, social et environnemental (CESE)", url: "https://www.lecese.fr" }
    ],
    supporterCount: 2341
  },
  "fr-002": {
    detail: "France's constitutional principle of laïcité—state neutrality in religious matters and the separation of churches from public institutions—is interpreted more strictly than comparable principles in most other liberal democracies. Applied since 1905, it has been progressively expanded in scope and applied to new questions, including the wearing of religious symbols by public servants, students, and increasingly in public spaces generally.\n\nThe most contentious recent applications include restrictions on the wearing of the abaya (full-length Islamic dress) in schools, the burkini debate at public pools and beaches, and the application of laïcité to sports contexts including the 2024 Paris Olympics. Critics—including UN human rights bodies—argue that restrictions have been applied disproportionately to Muslims and constitute indirect discrimination.\n\nProponents argue that laïcité protects individual freedom against religious pressure, ensures a neutral public space for all citizens, and maintains the conditions for social cohesion in a diverse society. The definition of what constitutes a 'religious sign' and what counts as a 'public' versus 'private' space are contested at the level of administrative law and political debate.\n\nFor French diaspora—particularly those in more religiously diverse Western countries—the laïcité debate often generates questions about whether French approaches to religious accommodation are compatible with liberal pluralism as practised elsewhere. Community organisations in the diaspora sometimes take positions that diverge from the dominant French political consensus.",
    officialLinks: [
      { label: "French Ministry of National Education – laïcité guidelines", url: "https://www.education.gouv.fr" },
      { label: "Observatoire de la laïcité", url: "https://www.gouvernement.fr/la-laicite-en-questions" },
      { label: "Conseil d'Etat – laïcité opinions", url: "https://www.conseil-etat.fr/en" }
    ],
    newsLinks: [
      { label: "France bans abaya in schools as laïcité debate intensifies", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-08-29" },
      { label: "UN experts criticise France's religious symbol restrictions as discriminatory", url: "https://www.theguardian.com/world/france/", source: "The Guardian", publishedAt: "2024-10-15" },
      { label: "Paris Olympics reopens debate over Muslim athletes and laïcité", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-07-28" }
    ],
    endorsements: [
      { name: "Ligue des droits de l'Homme (LDH)", url: "https://www.ldh-france.org" },
      { name: "Human Rights Watch – France", url: "https://www.hrw.org/europe/western-europe/france" },
      { name: "CCIF (Collectif contre l'islamophobie en France)", url: "https://www.islamophobie.net" }
    ],
    supporterCount: 1734
  },
  "fr-003": {
    detail: "The 2024 snap legislative elections called by President Macron produced a three-bloc parliament—Macron's centrist coalition, the left-wing New Popular Front (NFP), and Marine Le Pen's National Rally bloc—in which no grouping commands a majority. The resulting hung parliament has produced successive short-lived governments unable to pass budgets or implement coherent programmes, generating what political scientists have described as a quasi-constitutional crisis.\n\nThe Fifth Republic's institutional architecture was designed for conditions of executive dominance: the presidency holds extensive powers, including appointment of the prime minister, control of foreign and defence policy, and dissolution of the National Assembly. These powers work smoothly when the president commands a parliamentary majority, but create severe friction under cohabitation or minority government conditions.\n\nThe debate about constitutional reform—ranging from proposals for proportional representation that would 'normalise' fragmentation to more radical ideas about moving to a Sixth Republic with greater parliamentary sovereignty—has been given new urgency by the 2024 experience. However, constitutional reform in France requires either a referendum or a three-fifths majority of parliament, making it difficult under current fragmentation.\n\nFor French citizens abroad—over a million registered as overseas voters, with considerably more eligible—the political crisis affects consular services, policy continuity on bilateral agreements, and the international image of France. The contrast with political stability in neighbouring Germany (after coalition formation) and Spain generates particular comment.",
    officialLinks: [
      { label: "French National Assembly", url: "https://www.assemblee-nationale.fr" },
      { label: "French Senate", url: "https://www.senat.fr" },
      { label: "Conseil constitutionnel (Constitutional Council)", url: "https://www.conseil-constitutionnel.fr/en" }
    ],
    newsLinks: [
      { label: "France's hung parliament produces third government in a year", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-01-12" },
      { label: "No majority in sight as French political fragmentation deepens", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-17" },
      { label: "Macron's Fifth Republic faces governance crisis after failed snap election gamble", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-07-09" }
    ],
    endorsements: [
      { name: "Fondation Jean Jaurès", url: "https://www.jean-jaures.org" },
      { name: "Institut Jacques Delors", url: "https://institutdelors.eu" },
      { name: "Sciences Po – CEVIPOF", url: "https://www.sciencespo.fr/cevipof" }
    ],
    supporterCount: 1523
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 3`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
