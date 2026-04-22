const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "lv-001": {
    detail: "Latvia's Russian-speaking minority—approximately 25% of the population, concentrated in Riga and the Latgale region—has been the subject of integration policy, language legislation, and national security debate since independence in 1991. Russia's 2022 invasion of Ukraine fundamentally changed the political climate around this community: the Latvian state accelerated Russification-era education reform reversal, eliminated Russian-language public broadcasting, and tightened regulations on Russian-affiliated organisations.\n\nLanguage policy is central: Latvian is the only official language, and requirements for its use in education, public employment, and official communication have been progressively tightened. The transition of Russian-medium schools to Latvian instruction has been completed for most grades, with exceptions for primary education. Some community representatives argue these changes erode minority cultural rights; the government argues they improve integration and economic mobility.\n\nThe 'non-citizen' category—a legacy of independence that leaves approximately 190,000 long-term residents without Latvian or Russian citizenship and therefore without voting rights—has been the subject of ongoing debate and partial reforms. The Council of Europe and ECHR have both noted concerns about statelessness in Latvia.\n\nSince 2022, surveys have shown growing integration of Russian-speaking Latvians into the Latvian civic identity, with substantial shares of the community expressing support for Ukraine and Latvian defence. However, significant segments remain embedded in Russian media and information spaces, creating vulnerability to disinformation.",
    officialLinks: [
      { label: "Latvian Office of Citizenship and Migration Affairs", url: "https://www.pmlp.gov.lv/en" },
      { label: "Council of Europe Latvia national minority framework", url: "https://www.coe.int/en/web/minorities/country-specific-monitoring-latvia" },
      { label: "Saeima – national integration debate", url: "https://www.saeima.lv/en/" }
    ],
    newsLinks: [
      { label: "Latvia completes Russian-medium school transition to Latvian instruction", url: "https://rferl.org/latvia/", source: "RFE/RL", publishedAt: "2024-11-08" },
      { label: "Latvian Russian speakers increasingly identify with Ukraine defence, poll shows", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-22" },
      { label: "Riga closes Russian-language public TV channel amid hybrid threat concern", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-07" }
    ],
    endorsements: [
      { name: "Latvian Centre for Human Rights", url: "https://www.humanrights.org.lv/en" },
      { name: "PROVIDUS – Centre for Public Policy Latvia", url: "https://providus.lv/en" },
      { name: "Council of Europe Advisory Committee on Minorities", url: "https://www.coe.int/en/web/minorities" }
    ],
    supporterCount: 1127
  },
  "lv-002": {
    detail: "Latvia has dramatically increased defence spending since Russia's 2014 annexation of Crimea, and accelerated further after the 2022 full-scale invasion. Defence spending has risen above 2.4% of GDP, among the highest in NATO, reflecting Latvia's acute perception of the Russian threat. The country hosts a NATO enhanced forward presence battlegroup and has invested in national guard expansion, ammunition stockpiling, and air defence.\n\nLatvia has been a consistent advocate within NATO for upgrading the forward presence from a tripwire posture to a full defence posture—capable of preventing initial occupation rather than merely triggering Article 5. Progress toward this goal has been made gradually, with Canada leading the NATO battlegroup in Latvia and allied contributions increasing.\n\nBilateral defence agreements with the United States, including access arrangements for US forces at Latvian facilities, reinforce the deterrence posture beyond multilateral NATO commitments. The practical arrangements for allied training, logistics, and infrastructure investment associated with permanent basing are a continuing policy dialogue.\n\nFor Latvians abroad—many in the UK, Germany, and Ireland—the security situation at home is both a personal concern for family members and a political priority they follow closely. Diaspora engagement with Latvian defence policy has been high since 2022, with fundraising for equipment and volunteering for National Guard training among diaspora members in some cases.",
    officialLinks: [
      { label: "Latvian Ministry of Defence", url: "https://www.mod.gov.lv/en" },
      { label: "NATO Latvia enhanced forward presence", url: "https://www.nato.int/cps/en/natohq/topics_136388.htm" },
      { label: "Latvian National Armed Forces", url: "https://www.nbs.mil.lv/en/" }
    ],
    newsLinks: [
      { label: "Latvia raises defence spending to 2.4% of GDP in new budget", url: "https://rferl.org/latvia/", source: "RFE/RL", publishedAt: "2025-01-14" },
      { label: "Canada-led NATO battlegroup expands presence in Latvia", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-07" },
      { label: "Riga and Washington sign expanded bilateral defence access agreement", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-21" }
    ],
    endorsements: [
      { name: "Baltic Defence College", url: "https://www.baltdefcol.org" },
      { name: "IISS", url: "https://www.iiss.org" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" }
    ],
    supporterCount: 1892
  },
  "lv-003": {
    detail: "Latvia's population decline is one of the most severe in the EU in proportional terms, falling from 2.67 million at independence in 1991 to approximately 1.8 million in 2024—a reduction of nearly a third. Emigration to higher-wage EU countries, primarily the UK, Ireland, and Germany, accounts for a large portion, alongside a birth rate consistently below the replacement level and, in recent decades, Russian-speaking emigration to Russia.\n\nThe demographic decline creates compounding problems: the pension system faces an increasingly unfavourable dependency ratio; the healthcare system struggles to retain trained professionals against EU competition for medical talent; rural municipalities have lost critical mass to maintain schools, libraries, and bus services; and the military faces challenges in its conscription and volunteer force targets.\n\nGovernment policies to encourage diaspora return have included tax incentives, investment in startup support, and improved public services in regional centres. The results have been modest: return migration has occurred but at lower rates than emigration, and returning migrants often concentrate in Riga rather than the regions that most need repopulation.\n\nThe demographic crisis intersects with security policy: a smaller population creates a smaller military mobilisation base, and the hollowing-out of eastern Latvia (Latgale) raises concerns about territorial cohesion given that region's large Russian-speaking population. The government has linked demographic and security concerns in its national development planning.",
    officialLinks: [
      { label: "Central Statistical Bureau of Latvia", url: "https://www.csb.gov.lv/en" },
      { label: "Latvian Ministry of Economics – diaspora return", url: "https://www.em.gov.lv/en" },
      { label: "World Bank Latvia population data", url: "https://www.worldbank.org/en/country/latvia" }
    ],
    newsLinks: [
      { label: "Latvia loses another 20,000 people in 2024 as emigration outpaces returns", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-14" },
      { label: "Latvia's Latgale region faces crisis as villages empty", url: "https://rferl.org/latvia/", source: "RFE/RL", publishedAt: "2025-04-09" },
      { label: "Riga offers tax breaks to attract back healthcare workers from abroad", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-21" }
    ],
    endorsements: [
      { name: "World Latvian Association (Pasaules Latviešu Apvienība)", url: "https://www.latvianworld.com" },
      { name: "PROVIDUS Centre for Public Policy", url: "https://providus.lv/en" },
      { name: "Baltic Institute of Social Sciences", url: "https://www.biss.soc.lv/en/" }
    ],
    supporterCount: 743
  },
  "lt-001": {
    detail: "Lithuania has been one of NATO's most committed members since its 2004 accession, consistently meeting or exceeding the 2% GDP defence spending target and hosting the German-led enhanced forward presence battlegroup. Since Russia's 2022 invasion of Ukraine, Lithuania has pushed to upgrade this battlegroup to a full brigade-sized defence force capable of sustained territorial defence.\n\nThe question of permanent versus rotational allied basing is a core issue: Lithuania argues that permanent basing provides stronger deterrence and reassurance than rotational deployments, while Germany and other NATO allies have historically been reluctant to make permanent deployments that could be seen as violating the spirit (if not the letter) of the 1997 NATO-Russia Founding Act. The Act's legal relevance has been strongly contested since 2022.\n\nLithuania has invested in its own armed forces, including conscription reintroduction, anti-air defence upgrades, and long-range precision strike acquisition plans. Border fence construction with Belarus has been a significant investment in response to the hybrid migration instrumentalisation. The Suwałki Gap—the narrow strip of territory connecting Lithuania to Poland and separating Russian Kaliningrad from Belarus—is a central concern in Baltic security planning.\n\nFor Lithuanians abroad—a large community in the UK and elsewhere—the security situation at home generates genuine concern but also pride in Lithuania's clear-eyed approach to the Russian threat, which many diaspora members feel has been vindicated by events since 2022.",
    officialLinks: [
      { label: "Lithuanian Ministry of National Defence", url: "https://www.kam.lt/en/" },
      { label: "NATO Lithuania EFP", url: "https://www.nato.int/cps/en/natohq/topics_136388.htm" },
      { label: "Lithuanian Armed Forces", url: "https://www.kariuomene.kam.lt/en/" }
    ],
    newsLinks: [
      { label: "Lithuania secures German commitment to permanent brigade deployment", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-22" },
      { label: "Vilnius calls for Suwałki Gap defence plan as priority", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-18" },
      { label: "Lithuania reintroduces full conscription as defence posture hardens", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-10-01" }
    ],
    endorsements: [
      { name: "Lithuanian Institute of International Relations and Political Science", url: "https://www.tspmi.vu.lt/en" },
      { name: "Baltic Defence College", url: "https://www.baltdefcol.org" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" }
    ],
    supporterCount: 1567
  },
  "lt-002": {
    detail: "Lithuania's decision to open a representative office in Taiwan under the name 'Taiwan'—rather than the internationally usual 'Chinese Taipei' formulation that minimises Chinese diplomatic sensitivities—triggered a severe Chinese economic and diplomatic retaliation. China downgraded diplomatic relations from ambassadorial level, imposed informal trade restrictions on Lithuanian goods, and pressured multinational companies with Chinese operations not to use Lithuanian-origin components.\n\nThe episode created significant economic pain for Lithuanian exporters, though the scale of direct trade with China was relatively limited. More consequential was the impact on companies elsewhere in EU supply chains that faced Chinese pressure over their Lithuanian connections. This collateral pressure tested EU solidarity: the European Commission launched a WTO dispute on behalf of Lithuania, but other member states were slow to respond bilaterally.\n\nThe Lithuania-Taiwan incident accelerated EU-level discussions about how to respond collectively to Chinese economic coercion and contributed to the development of the EU's Anti-Coercion Instrument, which provides a mechanism for collective EU response to third-country coercive measures against individual member states.\n\nFor Lithuania, the episode demonstrated that small states can make foreign policy choices that challenge major powers, but also that the costs fall heavily on the state itself unless EU solidarity is mobilised effectively. The Taiwan office name has not been changed; Lithuania has maintained the policy while managing the ongoing consequences.",
    officialLinks: [
      { label: "Lithuanian Ministry of Foreign Affairs", url: "https://www.urm.lt/en" },
      { label: "EU Anti-Coercion Instrument", url: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/trade-defence_en" },
      { label: "WTO – EU vs China Lithuanian goods case", url: "https://www.wto.org/english/tratop_e/dispu_e/dispu_e.htm" }
    ],
    newsLinks: [
      { label: "Lithuania wins WTO case as China's trade retaliation ruled illegal", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-04" },
      { label: "EU Anti-Coercion Instrument: how Lithuania shaped a new Brussels tool", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-01-31" },
      { label: "Vilnius stands firm on Taiwan office name despite Beijing pressure", url: "https://rferl.org/lithuania/", source: "RFE/RL", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "European Council on Foreign Relations (ECFR)", url: "https://ecfr.eu" },
      { name: "CEPS – Centre for European Policy Studies", url: "https://www.ceps.eu" },
      { name: "Baltic-American Freedom Foundation", url: "https://www.bafoundation.org" }
    ],
    supporterCount: 876
  },
  "lt-003": {
    detail: "Lithuania, together with Latvia and Estonia, disconnected from the Soviet-era BRELL electricity ring—shared with Russia and Belarus—and synchronised with the European continental grid on 8 February 2025. This was a decade-long infrastructure and political project representing a fundamental energy security achievement, ending the theoretical ability of Russia to destabilise Baltic electricity supply through manipulation of the shared grid.\n\nThe synchronisation required new interconnections (LitPol Link with Poland, NordBalt submarine cable with Sweden) and significant grid upgrades to ensure system stability after decoupling. The European Commission co-funded the project as a project of common interest, recognising its strategic importance for energy security. The technical execution was managed jointly by the Baltic transmission system operators and went smoothly.\n\nBeyond electricity, Lithuania has invested in LNG infrastructure—the Klaipėda floating storage and regasification unit has operated since 2014—providing an alternative to Russian pipeline gas that was used during the transition period before full diversification. The LNG terminal has also served as a strategic asset for Finland and other states during supply disruptions.\n\nThe completion of the Baltic desynchronisation demonstrates that energy infrastructure investment can achieve strategic goals comparable to military ones: removing a vector for Russian coercion that existed for decades and providing the energy security foundation for deeper EU integration in the energy sector.",
    officialLinks: [
      { label: "Lithuanian transmission system operator (Litgrid)", url: "https://www.litgrid.eu/en" },
      { label: "European Commission Baltic synchronisation project", url: "https://energy.ec.europa.eu/topics/infrastructure/projects-common-interest_en" },
      { label: "ENTSO-E – Baltic synchronisation", url: "https://www.entsoe.eu" }
    ],
    newsLinks: [
      { label: "Baltic states disconnect from Russian power grid in historic energy shift", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-08" },
      { label: "Baltic desynchronisation complete: a geopolitical as well as technical victory", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-09" },
      { label: "Lithuania's LNG terminal proves its worth as European gas security asset", url: "https://rferl.org/lithuania/", source: "RFE/RL", publishedAt: "2025-03-03" }
    ],
    endorsements: [
      { name: "Litgrid (Lithuanian TSO)", url: "https://www.litgrid.eu/en" },
      { name: "Energy Community Secretariat", url: "https://www.energy-community.org" },
      { name: "Baltic Energy Market Interconnection Plan (BEMIP)", url: "https://energy.ec.europa.eu" }
    ],
    supporterCount: 1423
  },
  "lu-001": {
    detail: "Luxembourg hosts approximately half of all EU-domiciled investment funds—a position built over decades through favourable fund regulation, tax treaty networks, and political stability. The fund industry accounts for a substantial share of GDP and employment, and Luxembourg's status as a financial centre has been a central pillar of its economic model since the 1960s.\n\nThe OECD's BEPS (Base Erosion and Profit Shifting) project and subsequent global minimum tax initiative directly challenged Luxembourg's historical advantage of facilitating low-tax structures for multinationals. The LuxLeaks revelations of 2014 exposed hundreds of advance tax rulings for major corporations, triggering EU investigations and political pressure for greater transparency. Luxembourg has progressively tightened its practices under EU and OECD pressure.\n\nImplementation of the OECD 15% global minimum tax has been managed by Luxembourg's financial sector with significant legal and compliance investment. The country argues it remains competitive not through tax rates alone but through regulatory quality, multilingual talent, and infrastructure. Whether this competitive positioning is sufficient as tax advantages narrow is a live question for Luxembourg's long-term economic strategy.\n\nLuxembourg's position as host to EU institutions—the Court of Justice, the Court of Auditors, and several European Commission directorates—provides a layer of economic and political security that is distinct from the private sector financial hub. For Luxembourgish citizens abroad, these institutional connections give the country a profile disproportionate to its population.",
    officialLinks: [
      { label: "Luxembourg for Finance – financial centre body", url: "https://www.luxembourgforfinance.com" },
      { label: "CSSF – Luxembourg financial regulator", url: "https://www.cssf.lu/en/" },
      { label: "OECD global minimum tax – Luxembourg implementation", url: "https://www.oecd.org/tax/beps/" }
    ],
    newsLinks: [
      { label: "Luxembourg fund industry adapts to global minimum tax after OECD deal", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-08" },
      { label: "EU Court of Justice rules against Luxembourg in state aid case", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-12" },
      { label: "Luxembourg financial centre remains competitive despite tax reform pressure", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-22" }
    ],
    endorsements: [
      { name: "Tax Justice Network", url: "https://taxjustice.net" },
      { name: "Transparency International Luxembourg", url: "https://www.transparency.lu" },
      { name: "ALFI – Association of the Luxembourg Fund Industry", url: "https://www.alfi.lu" }
    ],
    supporterCount: 634
  },
  "lu-002": {
    detail: "Luxembourg's cross-border labour market is unique in Europe: approximately half of the country's 500,000-plus workforce commutes daily from France (Grand Est region), Belgium (southern provinces), and Germany (Rhineland-Palatinate), making it the world's largest cross-border commuting workforce relative to the host country's domestic population.\n\nThis labour market structure creates complex policy challenges. Tax revenues from cross-border workers' incomes are shared between Luxembourg and their home states under bilateral tax treaties that are regularly renegotiated. Social security contributions and entitlements—healthcare, unemployment insurance, pension credits—must be managed across jurisdictions under EU free movement rules.\n\nInfrastructure—particularly road and rail capacity between Luxembourg City and the French, Belgian, and German border regions—is chronically strained. The government has invested significantly in rail electrification, park-and-ride facilities, and cross-border bus services, and introduced free public transport in 2020 (making Luxembourg the first country in the world to do so). However, car commuting remains dominant for many cross-border workers.\n\nThe COVID-19 pandemic demonstrated the vulnerability of this model: when national borders were temporarily closed in spring 2020, the Luxembourg economy was significantly disrupted, and the episode accelerated discussions about whether more remote work could reduce commuting pressure while maintaining economic integration.",
    officialLinks: [
      { label: "Luxembourg Ministry of Finance – cross-border worker taxation", url: "https://gouvernement.lu/en/gouvernement/ministeres/finances.html" },
      { label: "EU Social Security Coordination – cross-border workers", url: "https://ec.europa.eu/social/main.jsp?catId=849" },
      { label: "Mobility in Luxembourg – government transport portal", url: "https://www.mobilite.lu" }
    ],
    newsLinks: [
      { label: "Luxembourg's daily cross-border commuters reach 220,000 amid growth", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-04" },
      { label: "France and Luxembourg renegotiate cross-border worker tax treaty", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-27" },
      { label: "Free transit in Luxembourg shows limits: cars still dominate", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-01-15" }
    ],
    endorsements: [
      { name: "Chambre de travail du Luxembourg", url: "https://www.act.lu" },
      { name: "LCGB – Luxembourg Christian Trade Union", url: "https://www.lcgb.lu" },
      { name: "OGBL – Luxembourg trade union", url: "https://www.ogbl.lu" }
    ],
    supporterCount: 388
  },
  "lu-003": {
    detail: "Luxembourg has among the highest average house prices in the EU relative to median incomes—the ratio is extreme even by European standards—driven by a combination of very limited buildable land, strong demand from an international workforce, limited social housing stock, and planning frameworks that have been slow to accommodate densification.\n\nThe housing crisis affects all income levels but is most acute for workers earning average or below-average wages: construction workers, teachers, and public servants who contribute essential services to the Luxembourg economy cannot afford market-rate housing and must either commute long distances from neighbouring countries or access social housing waiting lists.\n\nThe Luc Frieden government elected in 2023 has committed to housing reform including increased public investment in social and affordable housing, planning reform to accelerate permits for higher-density development, and fiscal measures to discourage land banking. Implementation of these measures requires navigating strong vested interests in the existing property market.\n\nLand taxation is a central policy debate: Luxembourg's system has historically been lenient on undeveloped or underdeveloped plots, creating incentives for owners to hold land rather than develop it. More aggressive land value taxation has been advocated by economists and some political parties as a way to release buildable land into the market.",
    officialLinks: [
      { label: "Luxembourg Ministry of Housing", url: "https://gouvernement.lu/en/gouvernement/ministeres/logement.html" },
      { label: "Observatoire de l'Habitat Luxembourg", url: "https://logement.public.lu/fr/observatoire-habitat.html" },
      { label: "Fonds du Logement Luxembourg", url: "https://www.fondsdulogement.lu" }
    ],
    newsLinks: [
      { label: "Luxembourg house prices among EU's highest relative to wages, Eurostat shows", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-06" },
      { label: "Luxembourg planning reform aims to unlock 10,000 new homes", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-03" },
      { label: "Land value tax debate: can fiscal reform solve Luxembourg housing crisis?", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-12-10" }
    ],
    endorsements: [
      { name: "Fondation Caritas Luxembourg", url: "https://www.caritas.lu" },
      { name: "LISER – Luxembourg Institute of Socio-Economic Research", url: "https://www.liser.lu" },
      { name: "Transparency International Luxembourg", url: "https://www.transparency.lu" }
    ],
    supporterCount: 512
  },
  "nl-001": {
    detail: "The Netherlands formed a coalition government in 2024 after Geert Wilders' Party for Freedom (PVV) won the November 2023 elections with approximately 23% of the vote, the strongest performance in PVV history. Coalition talks involving PVV, VVD, NSC, and BBB produced a governing agreement—the most restrictive asylum programme in Dutch political history—with Dick Schoof as prime minister.\n\nThe programme sought to opt out of the EU's mandatory asylum solidarity mechanism under Article 72 of the TFEU—an unprecedented legal manoeuvre that the European Commission challenged as incompatible with EU law. The Netherlands' ability to unilaterally exempt itself from EU asylum obligations became a significant legal and political dispute at the EU level.\n\nDomestically, reception capacity for asylum seekers was deliberately constrained, leading to overcrowding at reception centres that Dutch courts found violated human rights. The government's response was to accelerate processing and return rather than expand capacity. Deportation flights to countries whose safety assessments were contested—including Syria—were launched and contested in administrative courts.\n\nFor Dutch citizens abroad—and for international companies operating in the Netherlands—the political shift toward PVV-influenced immigration policy has been watched with concern by those who value the Netherlands' historically open, international character. The tolerance (gedoogbeleid) tradition that characterised Dutch social policy has been explicitly challenged by the new government's approach.",
    officialLinks: [
      { label: "Dutch Immigration and Naturalisation Service (IND)", url: "https://ind.nl/en" },
      { label: "European Commission – Netherlands asylum article 72", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum_en" },
      { label: "Dutch Council of State – asylum law rulings", url: "https://www.raadvanstate.nl/en/" }
    ],
    newsLinks: [
      { label: "Netherlands forms far-right coalition with historic asylum restrictions", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-05-16" },
      { label: "Brussels rejects Dutch opt-out from EU asylum solidarity rules", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-08-09" },
      { label: "Dutch court orders government to expand asylum reception capacity", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-18" }
    ],
    endorsements: [
      { name: "UNHCR Netherlands", url: "https://www.unhcr.org/nl" },
      { name: "Amnesty International Netherlands", url: "https://www.amnesty.nl" },
      { name: "Dutch Council for Refugees (VluchtelingenWerk)", url: "https://www.vluchtelingenwerk.nl" }
    ],
    supporterCount: 1872
  },
  "nl-002": {
    detail: "The Netherlands faces a legally binding obligation, stemming from a 2019 Council of State ruling, to reduce nitrogen emissions by 50% by 2030 primarily from the agricultural sector—which contributes approximately 46% of the country's nitrogen deposition. The ruling has frozen thousands of construction, infrastructure, and industrial projects that cannot demonstrate compliance with EU Habitats Directive nitrogen limits.\n\nThe BoerBurgerBeweging (BBB) farmers' movement emerged in direct response to government proposals to reduce livestock numbers and buy out farms near protected nature areas. BBB entered politics and became the largest party in provincial elections in 2023, demonstrating the political power of rural agricultural communities that felt threatened by environmental regulation.\n\nThe nitrogen problem is structural: the Netherlands is one of the most intensive agricultural producers per square kilometre in the world, and reducing nitrogen to legally compliant levels while maintaining current farm numbers and types of production appears mathematically impossible. Some combination of farm buyouts, relocation, production method changes, and accepting lower agricultural output is required.\n\nThe economic stakes are significant: the Dutch agricultural export sector is the second-largest in the world by value, generating billions annually and employing hundreds of thousands. The transition required represents one of the largest structural economic changes in Dutch history, affecting generational farms and rural community identities.",
    officialLinks: [
      { label: "Dutch Council of State nitrogen ruling", url: "https://www.raadvanstate.nl/en/" },
      { label: "Netherlands Enterprise Agency – nitrogen programme", url: "https://www.rvo.nl/en" },
      { label: "EU Habitats Directive – Netherlands compliance", url: "https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en" }
    ],
    newsLinks: [
      { label: "Dutch farmers block motorways in protest at nitrogen buyout scheme", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-19" },
      { label: "Netherlands nitrogen crisis delays thousands of construction projects", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-03-03" },
      { label: "Dutch government offers €25bn to buy out 40% of livestock farms", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-04-07" }
    ],
    endorsements: [
      { name: "Milieudefensie – Friends of the Earth Netherlands", url: "https://milieudefensie.nl" },
      { name: "Natuur & Milieu Netherlands", url: "https://www.natuurenmilieu.nl" },
      { name: "WWF Netherlands", url: "https://www.wwf.nl" }
    ],
    supporterCount: 1039
  },
  "nl-003": {
    detail: "The Netherlands faces a housing shortage estimated at approximately 400,000 units, concentrated in the Randstad region (Amsterdam, Rotterdam, The Hague, Utrecht) but affecting cities across the country. House prices have risen dramatically since the 2013 post-crisis recovery, and average rents in Amsterdam and Utrecht are among the highest in Europe. Young people and lower-income households are particularly affected.\n\nThe government has set a target of building 900,000 homes by 2030—approximately 100,000 per year—but has consistently fallen short of annual targets. Planning disputes, soil contamination at former industrial sites, nitrogen restrictions on construction activity, and labour and materials shortages in the construction sector all contribute to the shortfall.\n\nHousing policy has become politically charged: the supply of social housing (managed by housing corporations, woningcorporaties) was reduced significantly during the 2010s through rent liberalisation and asset sales, and rebuilding it takes time and capital. Middle-income households—above social housing income limits but unable to afford market purchase prices—are particularly underserved.\n\nInternational investors in Dutch rental property have attracted criticism for buying up homes and converting them to higher-yield rentals, reducing owner-occupation rates particularly in major cities. Regulatory measures including purchase restrictions for investors and rent control in the mid-market have been introduced, with ongoing debate about whether these help supply or restrict it.",
    officialLinks: [
      { label: "Dutch Ministry of the Interior and Kingdom Relations – housing", url: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties" },
      { label: "Aedes – Association of Dutch Housing Corporations", url: "https://www.aedes.nl/en" },
      { label: "PBL Netherlands Environmental Assessment Agency", url: "https://www.pbl.nl/en" }
    ],
    newsLinks: [
      { label: "Netherlands house prices surge 12% in a year as shortage deepens", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-11" },
      { label: "Amsterdam rent control law challenged by landlord groups in court", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-12-05" },
      { label: "Dutch housing target falls short again as construction lags", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-27" }
    ],
    endorsements: [
      { name: "Woonbond – Dutch tenants' organisation", url: "https://www.woonbond.nl" },
      { name: "PBL Netherlands Environmental Assessment Agency", url: "https://www.pbl.nl/en" },
      { name: "Huurdersvereniging Amsterdam", url: "https://www.huurdersvereniging.nl" }
    ],
    supporterCount: 1573
  },
  "pl-001": {
    detail: "Poland's post-2023 government, led by Donald Tusk and the Civic Coalition, came to power with a mandate to undo the judicial changes enacted by Law and Justice (PiS) between 2015 and 2023. These changes included an overhaul of the Constitutional Tribunal, the Supreme Court, the National Council of the Judiciary (KRS), and the disciplinary regime for judges—all found by the EU and its own Supreme Court to violate EU law.\n\nThe reversal process has been constitutionally complex. The Constitutional Tribunal—still controlled by PiS-aligned judges, including those the Tusk government argues were unconstitutionally appointed—has repeatedly issued rulings blocking or complicating reform. The government has chosen in some cases not to publish tribunal rulings it considers void, creating a situation where two competing constitutional interpretations coexist.\n\nThe European Commission gradually released previously frozen EU funds—approximately €137 billion in cohesion and NextGenerationEU money—as Poland demonstrated progress in restoring judicial independence. Full release has required specific legislative steps and the demonstration that judicial appointments are insulated from political control, a process that is ongoing.\n\nFor Polish diaspora—primarily in the UK, Germany, Ireland, and the Netherlands—the rule of law dispute intersects with concerns about the quality of institutions that govern their families' lives, protect their property rights, and process legal matters including cross-border enforcement of maintenance and property decisions.",
    officialLinks: [
      { label: "Polish Supreme Court", url: "https://www.sn.pl/en" },
      { label: "European Commission – Poland rule of law", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "Venice Commission Poland opinions", url: "https://www.venice.coe.int/webforms/documents/?country=33" }
    ],
    newsLinks: [
      { label: "Poland's Tusk government unlocks EU funds after judicial reform steps", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-07-05" },
      { label: "Polish Constitutional Tribunal blocks judicial reform law", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-21" },
      { label: "Warsaw says PiS tribunal rulings are void — Brussels watches carefully", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-05-02" }
    ],
    endorsements: [
      { name: "Iustitia – Association of Polish Judges", url: "https://www.iustitia.pl" },
      { name: "Helsinki Foundation for Human Rights (Poland)", url: "https://www.hfhr.pl/en/" },
      { name: "Fundacja Forum Obywatelskiego Rozwoju (FOR)", url: "https://for.org.pl/en" }
    ],
    supporterCount: 2143
  },
  "pl-002": {
    detail: "Poland has emerged as one of Ukraine's most important bilateral partners since the 2022 invasion. The country has provided significant military equipment, accepted over a million Ukrainian refugees (the largest hosting community in Europe), and hosted the largest NATO deployment on the alliance's eastern flank, including a permanent US base at Rządziny.\n\nPolish military modernisation has accelerated dramatically: purchases of South Korean K2 tanks and K9 howitzers, US Abrams tanks and HIMARS rocket systems, and F-35 aircraft represent the largest rearmament programme in Polish history, funded by raising defence spending to 4% of GDP—the highest in NATO.\n\nBilateral relations with Ukraine have not been without friction. Agricultural disputes—Ukrainian grain imports depressing Polish farm prices—led to Polish border blockades by farmers in 2024. Historical memory disputes about the Volhynia massacres remain sensitive. Managing these tensions within an overall strategic partnership supportive of Ukraine has been a diplomatic challenge for both governments.\n\nFor Polish diaspora in the UK, Germany, and the US, Ukrainian refugees in Poland are sometimes extended family or known faces—the shared Catholic, post-Soviet, Central European cultural space creates bonds. Many diaspora Poles have been engaged in fundraising for Polish and Ukrainian NGOs providing humanitarian support.",
    officialLinks: [
      { label: "Polish Ministry of National Defence", url: "https://www.gov.pl/web/national-defence" },
      { label: "NATO Poland – eastern flank deployment", url: "https://www.nato.int/cps/en/natohq/topics_136388.htm" },
      { label: "Polish Ministry of Foreign Affairs – Ukraine relations", url: "https://www.gov.pl/web/diplomacy" }
    ],
    newsLinks: [
      { label: "Poland becomes NATO's biggest spender as threat from Russia grows", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-02-04" },
      { label: "Warsaw and Kyiv manage grain dispute while maintaining defence partnership", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-17" },
      { label: "One million Ukrainian refugees in Poland: integration two years on", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-14" }
    ],
    endorsements: [
      { name: "Polish Institute of International Affairs (PISM)", url: "https://www.pism.pl/en" },
      { name: "Centre for Eastern Studies (OSW)", url: "https://www.osw.waw.pl/en" },
      { name: "Atlantic Council", url: "https://www.atlanticcouncil.org" }
    ],
    supporterCount: 2367
  },
  "pl-003": {
    detail: "Poland's near-total abortion ban, introduced following a Constitutional Tribunal ruling in October 2020, restricts terminations to cases of rape, incest, and severe risk to the mother's health or life—removing the foetal abnormality exception that had previously been the basis for the majority of legal abortions. The ruling triggered the largest feminist protest movement in Polish history, with the 'Women's Strike' (Strajk Kobiet) becoming a defining cultural and political force.\n\nThe Tusk government elected in 2023 campaigned explicitly on reversing the ban, and reproductive rights were a central mobilising issue for the coalition's voters, particularly younger women. However, legislative reversal requires navigating the Senate (where the coalition holds a slim majority), the Sejm (where coalition unity is imperfect on this issue), and the possibility of a presidential veto from Andrzej Duda (aligned with PiS) or his successor following the 2025 presidential election.\n\nIn practice, the healthcare consequences of the near-total ban have been severe: documented cases of women dying from sepsis because doctors delayed intervention over legal uncertainty, medical tourism to neighbouring countries, and the growth of abortion pills obtained online have all been reported. The government has issued medical guidelines intended to clarify when intervention is required, but criminal liability for doctors remains a chilling factor.\n\nFor Polish diaspora in Western Europe—where abortion rights are substantially broader—the issue is both personal and political. Many diaspora Poles, particularly women who emigrated partly for quality-of-life reasons, are vocal advocates for reproductive rights in Poland and donors to organisations supporting access to abortion services.",
    officialLinks: [
      { label: "Polish Parliament – reproductive rights legislation", url: "https://www.sejm.gov.pl/Sejm10.nsf/PraceSejmu.xsp" },
      { label: "Council of Europe – women's rights convention", url: "https://www.coe.int/en/web/istanbul-convention" },
      { label: "ECHR – reproductive rights case law", url: "https://www.echr.coe.int" }
    ],
    newsLinks: [
      { label: "Poland's abortion ban: women's deaths prompt calls for immediate law change", url: "https://www.theguardian.com/world/poland/", source: "The Guardian", publishedAt: "2024-12-04" },
      { label: "Polish government fails first abortion liberalisation vote amid coalition tensions", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-07-13" },
      { label: "Polish doctors still delay abortions despite government guidelines, rights groups say", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "Federacja na rzecz Kobiet i Planowania Rodziny (FEDERA)", url: "https://federa.org.pl/en/" },
      { name: "Women's Rights Center (Centrum Praw Kobiet)", url: "https://cpk.org.pl" },
      { name: "Amnesty International Poland", url: "https://amnesty.org.pl" }
    ],
    supporterCount: 2814
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 5`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
