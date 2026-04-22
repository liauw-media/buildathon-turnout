const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "is-001": {
    detail: "The Reykjanes Peninsula in southwestern Iceland entered a new era of volcanic activity in 2021 after approximately 800 years of dormancy on that particular volcanic system. Since then, multiple eruptions have occurred, with the most dramatic in 2024 destroying homes and infrastructure in the town of Grindavík. Residents have been evacuated and returned multiple times as lava flows approached and in some cases reached community infrastructure.\n\nThe volcanic eruptions also threatened the Svartsengi geothermal power plant, which supplies hot water and electricity to the Reykjanes Peninsula including the international airport at Keflavík and the Blue Lagoon geothermal spa. Protective barriers were constructed around the plant, and a temporary halt to Blue Lagoon operations cost the tourism economy significantly.\n\nGovernment response has focused on emergency housing for displaced Grindavík residents, geological monitoring and early warning systems, and the difficult question of whether to invest in permanent protective infrastructure or assist residents who choose not to return. The legal and ethical framework for climate-related and geological displacement—still emerging in international and domestic law—is being tested in the Icelandic context.\n\nThe ongoing volcanic risk has prompted wider Icelandic debate about land use planning on geologically active land, the resilience of critical infrastructure, and insurance and compensation frameworks for repeated disasters. The eruptions have also generated significant scientific interest internationally, with Iceland's geological institutions contributing to global research on volcanic hazard management.",
    officialLinks: [
      { label: "Icelandic Meteorological Office – volcanic monitoring", url: "https://www.vedur.is/english" },
      { label: "Icelandic Disaster Relief Authority (Almannavarnir)", url: "https://www.almannavarnir.is/english/" },
      { label: "Icelandic Parliament – volcanic response committee", url: "https://www.althingi.is/english/" }
    ],
    newsLinks: [
      { label: "Lava destroys homes in Grindavík as Iceland volcano erupts again", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-01-15" },
      { label: "Iceland evacuates Grindavík for fourth time as new eruption threatens town", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-21" },
      { label: "Iceland debates permanent evacuation as Reykjanes peninsula remains active", url: "https://www.theguardian.com/world/iceland/", source: "The Guardian", publishedAt: "2025-03-08" }
    ],
    endorsements: [
      { name: "Nordic Volcanological Center (NordVulk)", url: "https://nordvulk.hi.is" },
      { name: "Icelandic Red Cross", url: "https://www.raudikrossinn.is/in-english" },
      { name: "UNDRR – UN Disaster Risk Reduction", url: "https://www.undrr.org" }
    ],
    supporterCount: 1143
  },
  "is-002": {
    detail: "Iceland's fisheries management system—based on Individual Transferable Quotas (ITQs) introduced in the 1980s—has been internationally recognised as a successful model for preventing overfishing. By capping total allowable catch for each species based on scientific assessment and distributing tradeable quotas to vessel operators, the system has maintained fish stocks at sustainable levels for decades, a significant achievement compared to the collapsed fisheries of Newfoundland or the North Sea.\n\nHowever, the ITQ system has generated persistent social and political controversy. Quota ownership has become highly concentrated among large fishing companies and investment funds, with small coastal communities losing the fishing rights that historically sustained them. The market value of quota licenses has made them effectively privatised assets, with the resource rent captured by licence holders rather than shared broadly.\n\nDebates about whether Iceland should introduce a resource rent tax on fishing—similar to the Norwegian model for oil—have intensified given the extreme wealth concentration among quota holders and the continuing decline of small fishing communities. Several referendums and legislative proposals have been contested, with the fishing industry lobby effectively blocking major changes.\n\nAccess to EU markets—Iceland is in the EEA but not the EU and has no Common Fisheries Policy obligations—gives Icelandic fishers preferential access terms, and Brexit created some additional complexity for the UK market where Icelandic fisheries exports are significant. The Cod Wars of the 1970s remain a cultural touchstone in Icelandic debates about fisheries sovereignty.",
    officialLinks: [
      { label: "Icelandic Fisheries Directorate", url: "https://www.fiskistofa.is/english/" },
      { label: "Marine Research Institute Iceland (HI)", url: "https://www.hafogvatn.is/en" },
      { label: "EEA Agreement – fisheries chapter", url: "https://www.efta.int/eea/eea-agreement" }
    ],
    newsLinks: [
      { label: "Iceland quota owners reject resource rent tax for third year running", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-17" },
      { label: "Capelin quota set to zero as stock fails to meet threshold in Iceland waters", url: "https://www.theguardian.com/world/iceland/", source: "The Guardian", publishedAt: "2025-02-01" },
      { label: "Coastal communities demand quota reform as big companies consolidate", url: "https://swissinfo.ch/eng/", source: "SWI swissinfo.ch", publishedAt: "2024-11-25" }
    ],
    endorsements: [
      { name: "WWF Iceland", url: "https://www.wwf.is" },
      { name: "Coastal Fisheries Alliance Iceland", url: "https://www.hafogvatn.is/en" },
      { name: "ICES – International Council for the Exploration of the Sea", url: "https://www.ices.dk" }
    ],
    supporterCount: 487
  },
  "is-003": {
    detail: "Iceland applied for EU membership in 2009, driven primarily by the economic crisis triggered by the banking system collapse of 2008, which devastated the krona and created severe balance of payments pressures. Membership in the eurozone was seen as a potential stabiliser. However, as the economy recovered—faster than most—and EU membership talks began in 2010, public and political support eroded.\n\nThe 2013 centre-right government suspended the membership talks and Iceland has not resumed them. The central obstacle is fisheries: Iceland's relationship with fishing is constitutional and cultural—fishing sovereignty drove the Cod Wars with the UK—and the Common Fisheries Policy, which would require Iceland to share access to its extraordinarily rich waters with EU vessels, is considered politically unacceptable by most of the population.\n\nIceland's EEA membership gives it access to the EU Single Market for most purposes without submitting to the Common Fisheries Policy. This 'almost member' status has been pragmatically satisfactory, though it means Iceland has no vote on EU Single Market rules that it must nonetheless implement. The digital single market, financial services regulation, and data protection rules all apply to Iceland with no Icelandic representation in their drafting.\n\nThe debate about whether to resume EU membership talks occasionally surfaces—triggered by external shocks or political shifts—but remains a minority position. Iceland's economic resilience, strong sovereign wealth position (compared to 2009), and continued fisheries importance make membership significantly less attractive than it appeared during the crisis years.",
    officialLinks: [
      { label: "Icelandic Ministry of Foreign Affairs – EU relations", url: "https://www.government.is/ministries/ministry-for-foreign-affairs/" },
      { label: "EEA Agreement – EFTA", url: "https://www.efta.int/eea" },
      { label: "Icelandic Parliament (Althingi) – EU membership debate records", url: "https://www.althingi.is/english/" }
    ],
    newsLinks: [
      { label: "Iceland's EU membership debate resurfaces as new party calls for talks", url: "https://rferl.org/", source: "RFE/RL", publishedAt: "2025-01-30" },
      { label: "EEA working well for Iceland, survey finds, as EU membership support stays low", url: "https://swissinfo.ch/eng/", source: "SWI swissinfo.ch", publishedAt: "2024-12-09" },
      { label: "Iceland and EU clash over Svalbard fishing rights and EEA boundaries", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "Icelandic European Movement", url: "https://www.evropa.is/english/" },
      { name: "CEPS – Centre for European Policy Studies", url: "https://www.ceps.eu" },
      { name: "EFTA Secretariat", url: "https://www.efta.int" }
    ],
    supporterCount: 392
  },
  "ua-001": {
    detail: "Russia's full-scale invasion of Ukraine, launched on 24 February 2022, is the largest military conflict in Europe since World War II. Over three years of combat have produced catastrophic human and material costs: civilian casualties in the hundreds of thousands, the displacement of over six million Ukrainians abroad and millions more internally, and destruction of infrastructure, housing, energy systems, and industrial capacity estimated at hundreds of billions of dollars.\n\nReconstruction planning has been a major international undertaking involving the World Bank, European Commission, and international donors. The Ukraine Recovery Conference process has identified priority sectors—energy infrastructure, housing, transport—and debated governance mechanisms for aid to reduce corruption risk. The total reconstruction need has been estimated at over $500 billion, far exceeding committed international support.\n\nAccountability for war crimes is being pursued through multiple mechanisms: the International Criminal Court has issued arrest warrants including for President Putin for the deportation of Ukrainian children; the UN General Assembly voted to establish a register of damages; and international discussions continue about a special tribunal for the crime of aggression. Evidence collection by Ukrainian prosecutors, international NGOs, and forensic experts is ongoing.\n\nFor the Ukrainian diaspora—dramatically expanded by the 2022 refugee wave—the war is an immediate family experience, not a distant political issue. Diaspora Ukrainians in Poland, Germany, the Czech Republic, and across Europe are engaged in fundraising, volunteering, advocacy, and, in many cases, maintaining cross-border family ties with people in active combat zones.",
    officialLinks: [
      { label: "Ukrainian Government reconstruction portal", url: "https://www.kmu.gov.ua/en" },
      { label: "International Criminal Court – Ukraine situation", url: "https://www.icc-cpi.int/ukraine" },
      { label: "Ukraine Recovery Conference", url: "https://urc2024.gov.ua" }
    ],
    newsLinks: [
      { label: "Ukraine war enters fourth year with no ceasefire in sight", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-02-24" },
      { label: "EU launches Ukraine reconstruction bank with €5bn initial capitalisation", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-09" },
      { label: "ICC expands Ukraine war crimes investigation to naval incidents", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-03-18" }
    ],
    endorsements: [
      { name: "Razom for Ukraine", url: "https://www.razomforukraine.org" },
      { name: "Ukraine Crisis Media Center", url: "https://uacrisis.org/en" },
      { name: "Amnesty International Ukraine", url: "https://www.amnesty.org.ua/en/" }
    ],
    supporterCount: 3187
  },
  "ua-002": {
    detail: "Ukraine formally opened EU accession negotiations in June 2024—an extraordinary development given that a country is ordinarily expected to be at peace before beginning the accession process. The EU's decision to open talks despite the ongoing war reflected both the political commitment to Ukraine's European future and the strategic logic that EU integration provides an anchor for Ukrainian reforms regardless of the war's outcome.\n\nThe accession process requires Ukraine to reform across all 35 chapters of EU law: anti-corruption, judiciary, public administration, competition, environment, agriculture, and all areas of EU legislation. The European Commission's progress reports have noted significant legislative advances, particularly in anti-corruption institutions, but also persistent gaps in implementation and rule of law effectiveness.\n\nThe most politically sensitive aspects of Ukraine's accession for existing EU member states include: agricultural market access (Ukraine is a major grain and oilseed producer, and unrestricted access would significantly affect EU farm prices, triggering Polish and Romanian farmers' protests); budget implications (Ukraine would be a large net recipient of EU structural and cohesion funds); and the time pressure from Ukrainian society's expectations.\n\nFor the Ukrainian diaspora in Europe—well over a million people, predominantly women and children who left since 2022—EU accession is both a political priority and a personal stake. Many diaspora Ukrainians hope that accession will normalise their status and create a stable foundation for eventually returning home.",
    officialLinks: [
      { label: "European Commission Ukraine accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/ukraine_en" },
      { label: "Ukrainian Ministry of European Integration", url: "https://www.kmu.gov.ua/en" },
      { label: "EU-Ukraine Association Agreement", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/1947/ukraine_en" }
    ],
    newsLinks: [
      { label: "EU opens accession negotiations with Ukraine at historic summit", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-06-25" },
      { label: "Commission praises Ukraine anti-corruption progress but flags gaps", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-14" },
      { label: "Poland's farmers block Ukraine grain as accession tensions rise", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-11" }
    ],
    endorsements: [
      { name: "Ukrainian Institute for the Future", url: "https://ukraine-future.org/en" },
      { name: "Transparency International Ukraine", url: "https://ti-ukraine.org/en/" },
      { name: "Open Society European Policy Institute", url: "https://www.opensocietyfoundations.org/voices/european-policy" }
    ],
    supporterCount: 2634
  },
  "ua-003": {
    detail: "Ukraine's mobilisation policy—governing who must serve, who can be exempted, and under what conditions conscripts can be called up—has been a source of persistent domestic tension throughout the war. The government raised the mobilisation age from 27 to 25 in 2024, tightened exemptions for certain categories of workers, and introduced stricter enforcement of military registration requirements.\n\nCriticism of the mobilisation system has come from multiple directions: from those who argue it falls unevenly on lower-income Ukrainians with less ability to secure exemptions or evade enforcement; from businesses concerned about the loss of essential workers; and from communities in western Ukraine that feel the burden of casualties has been disproportionately concentrated in certain regions.\n\nElections have been suspended under martial law provisions—there was no presidential election in March 2024 when one would ordinarily have been due. The Ukrainian government and its supporters argue that elections during wartime would be logistically impossible, would benefit Russian disinformation efforts, and would divert resources from defence. Critics, including some in the democratic opposition, argue that the absence of elections creates a democratic legitimacy question, though most Western partners have not pressed the point.\n\nCivil liberties under martial law—including restrictions on movement, assembly, and press access to certain military information—are managed by a government that has broadly maintained media freedom and permitted criticism while imposing restrictions justified by security. The balance between wartime necessity and democratic values is a continuous policy challenge.",
    officialLinks: [
      { label: "Ukrainian Parliament (Verkhovna Rada)", url: "https://www.rada.gov.ua/en" },
      { label: "Venice Commission opinions on Ukraine wartime measures", url: "https://www.venice.coe.int/webforms/documents/?country=48" },
      { label: "OSCE Special Monitoring Mission reports on Ukraine", url: "https://www.osce.org/ukraine-smm" }
    ],
    newsLinks: [
      { label: "Ukraine lowers mobilisation age as military manpower shortage bites", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-04-03" },
      { label: "Kyiv defends election postponement under martial law", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-07" },
      { label: "Corruption in military exemption system angers Ukrainian public", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-01-14" }
    ],
    endorsements: [
      { name: "Transparency International Ukraine", url: "https://ti-ukraine.org/en/" },
      { name: "Centre UA – Ukrainian civil society", url: "https://centreua.org/en" },
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" }
    ],
    supporterCount: 1687
  },
  "rs-001": {
    detail: "Serbia has been an official EU candidate since 2012 and began formal accession negotiations in 2014, but progress has slowed considerably since then. The EU has identified progress on Chapters 23 (judiciary and fundamental rights) and 24 (justice, freedom, security) as gating conditions for advancing in other areas—a 'new methodology' introduced in 2020 that was intended to front-load rule of law requirements.\n\nThe obstacles are substantial: the European Commission's annual progress reports consistently note insufficient judicial independence, continued concentration of media in government-aligned ownership, inadequate anti-corruption enforcement, and insufficient protection of civil society. Serbia's position on Kosovo—refusing to recognise Kosovo's independence—is not formally a membership condition but creates diplomatic difficulty, and the EU-mediated Brussels Dialogue on normalisation of Serbia-Kosovo relations has produced agreements that both sides accuse each other of failing to implement.\n\nSerbia's foreign policy—maintaining close ties with Russia and China while officially pursuing EU membership—has created growing friction. President Vučić attended Putin's inauguration while simultaneously attending EU summits; Serbian officials have maintained economic and energy ties with Russia despite EU pressure to align with sanctions. The EU has made clear that association with Russia is incompatible with accession progress.\n\nFor the Serbian diaspora—large communities in Germany, Switzerland, Austria, and overseas—the EU accession question is often framed in terms of normalcy, prosperity, and the ability to travel freely rather than through an ideological lens. Practical EU integration benefits are highly valued by diaspora Serbs who experience them daily.",
    officialLinks: [
      { label: "European Commission Serbia enlargement page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/serbia_en" },
      { label: "Serbian Government EU integration office", url: "https://www.euintegrations.gov.rs/en" },
      { label: "EU-mediated Belgrade-Pristina dialogue", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/1898/pristina-belgrade-dialogue_en" }
    ],
    newsLinks: [
      { label: "EU tells Serbia to choose: align with Russia or advance in accession", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-18" },
      { label: "Serbia's EU accession stalls as rule of law benchmarks unmet", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-08" },
      { label: "Belgrade-Pristina dialogue resumes with EU mediation after year-long hiatus", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-03" }
    ],
    endorsements: [
      { name: "Beogradski centar za bezbednosnu politiku (BCSP)", url: "https://www.bezbednost.org" },
      { name: "Transparency Serbia", url: "https://www.transparentnost.org.rs/en" },
      { name: "European Movement in Serbia", url: "https://emins.org" }
    ],
    supporterCount: 1432
  },
  "rs-002": {
    detail: "The status of Kosovo—which declared independence in 2008 following a period of UN administration after the 1999 NATO intervention—remains the central unresolved issue in Balkan regional politics. Serbia does not recognise Kosovo's independence, describing it as an illegally seceded province. Over 100 countries, including the US and most EU members, recognise Kosovo; five EU states (Spain, Slovakia, Romania, Greece, Cyprus) do not, complicating EU-level positions.\n\nEU-mediated dialogue between Belgrade and Pristina has produced a series of agreements—the 2013 Brussels Agreement on normalisation of relations, the 2023 Ohrid Agreement path—that have been inadequately implemented by both sides. The establishment of the Association of Serb-majority Municipalities in Kosovo (agreed in 2013 but not implemented) remains a flashpoint, with Pristina concerned that it would create a parallel governance structure, and Belgrade insisting on its creation as a condition for progress.\n\nThe northern Kosovo municipalities—with Serb-majority populations—have been the site of armed incidents, boycotts of Kosovo institutions, and tensions with KFOR (NATO's Kosovo force). Pristina's imposition of Kosovo license plates, restrictions on Serbian dinar use, and elections in the north have all created crises that required international management.\n\nFor the Serbian diaspora and the Kosovo Serb community specifically, the resolution of status is both a political principle and a practical matter affecting property rights, movement, civil status recognition, and daily security.",
    officialLinks: [
      { label: "EU-mediated Pristina-Belgrade Dialogue", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/1898/pristina-belgrade-dialogue_en" },
      { label: "KFOR – NATO Kosovo Force", url: "https://jfcbs.nato.int/kfor" },
      { label: "ICJ Advisory Opinion on Kosovo Declaration of Independence", url: "https://www.icj-cij.org/case/141" }
    ],
    newsLinks: [
      { label: "Kosovo-Serbia tensions flare in north as license plate standoff continues", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-08" },
      { label: "Ohrid Agreement on Kosovo-Serbia normalisation lacks implementation", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-17" },
      { label: "KFOR bolsters northern Kosovo presence after armed incidents", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-24" }
    ],
    endorsements: [
      { name: "International Crisis Group – Balkans", url: "https://www.crisisgroup.org/europe-central-asia/balkans" },
      { name: "Centre for Humanitarian Dialogue", url: "https://www.hdcentre.org" },
      { name: "OSCE Mission in Kosovo", url: "https://www.osce.org/kosovo" }
    ],
    supporterCount: 1187
  },
  "rs-003": {
    detail: "Serbia's press freedom record has deteriorated significantly according to international indices, with RSF and Freedom House both rating it poorly among EU candidate countries. The media environment is characterised by a dominant pro-government tabloid press, television channels with close ties to the ruling SNS party, and self-censorship among journalists working in outlets dependent on government advertising or regulatory favour.\n\nThe November 2023 train station roof collapse in Novi Sad—which killed fifteen people and was linked to rushed renovation work contracted to connected companies—triggered the largest sustained protest movement Serbia had seen in years. Protestors demanded accountability for the deaths and linked them to corruption in public contracting. The protests continued into 2025, and the handling of media coverage of both the disaster and the protests became itself a press freedom issue.\n\nInvestigative journalists and anti-corruption reporters face systematic harassment including defamation suits (SLAPP cases), smear campaigns in tabloid media, and in some cases physical threats. The NUNS (Independent Journalists Association) and SAFEJOURNALISTS network have documented dozens of incidents annually. Serbia has been specifically cited in EU anti-SLAPP directive debates.\n\nFor diaspora Serbs—many of whom access a mix of Serbian, Austrian, German, or Swiss media depending on country of residence—the media environment at home is experienced partly through social media and partly through the accounts of journalists and civil society figures who maintain international contact. The credibility of Serbian public information is a recurring concern in diaspora political discussions.",
    officialLinks: [
      { label: "NUNS – Independent Association of Journalists Serbia", url: "https://www.nuns.rs" },
      { label: "RSF Serbia country page", url: "https://rsf.org/en/country/serbia" },
      { label: "European Commission Serbia Rule of Law Report 2024", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/serbia_en" }
    ],
    newsLinks: [
      { label: "Serbia's Novi Sad disaster protests continue into 2025 as accountability elusive", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-14" },
      { label: "Serbian investigative journalist harassed after corruption exposé", url: "https://rsf.org/en/country/serbia", source: "Reporters Without Borders", publishedAt: "2025-02-11" },
      { label: "EU flags media freedom backsliding in Serbia's accession progress report", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-10-30" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "NUNS – Independent Journalists Serbia", url: "https://www.nuns.rs" },
      { name: "CRTA – Centre for Research, Transparency and Accountability Serbia", url: "https://www.crta.rs" }
    ],
    supporterCount: 1534
  },
  "al-001": {
    detail: "Albania opened formal EU accession negotiations in July 2022, following a lengthy pre-accession period during which the EU insisted on a unique 'vetting' process: a comprehensive re-examination of all judges and prosecutors by independent international bodies to identify and remove those with unexplained wealth, criminal connections, or professional misconduct. The vetting process dismissed approximately 60% of those examined, a striking demonstration of the depth of systemic corruption.\n\nThe accession negotiations cover 35 chapters and will require years of legislative alignment and implementation. The European Commission's progress reports have credited Albania with reform momentum, particularly in the justice system, while flagging persistent concerns about organised crime prosecution, the seizure of criminal assets, and the environment for civil society and independent media.\n\nOrganised crime—particularly cannabis production in the Valbonë Valley and other areas, cocaine trafficking, and money laundering through construction and real estate—has been a defining challenge for Albania's EU aspirations. The EU-Albania readmission agreement and joint criminal networks investigations with Europol demonstrate the security dimension of accession.\n\nFor Albanian diaspora—very large communities in Italy, Greece, Germany, the UK, and the US—EU accession would transform their situation dramatically: Albanian citizens would gain free movement rights across the EU, eliminating visa requirements and opening professional mobility. This prospect is a powerful incentive for diaspora engagement in Albanian accession politics.",
    officialLinks: [
      { label: "European Commission Albania accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/albania_en" },
      { label: "Independent Qualification Commission (vetting body Albania)", url: "https://www.kpk.al/en" },
      { label: "Albanian Ministry for Europe and Foreign Affairs", url: "https://punetejashtme.gov.al/en/" }
    ],
    newsLinks: [
      { label: "Albania opens EU accession chapters after judicial vetting milestone", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-10-15" },
      { label: "EU praises Albanian judiciary reform but presses on organised crime", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-11" },
      { label: "Albania and Italy launch joint operation against drug trafficking network", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-22" }
    ],
    endorsements: [
      { name: "Albanian Helsinki Committee", url: "https://www.ahc.org.al" },
      { name: "Transparency International Albania", url: "https://www.transparency.org.al" },
      { name: "BIRN Albania (Balkan Investigative Reporting Network)", url: "https://birn.eu.com/our-work/albania/" }
    ],
    supporterCount: 1843
  },
  "al-002": {
    detail: "Albania has experienced continuous emigration since the fall of communism in 1991, with the total diaspora estimated at 1.5 to 2 million people—more than half the remaining domestic population. Major waves left for Italy and Greece in the early 1990s, and more recently for Germany, the UK, and other EU states. The emigration is broadly bi-directional with seasonal return, but permanent settlement abroad is the norm for many.\n\nThe recent acceleration—sometimes called 'brain drain 2.0'—involves younger, more educated Albanians seeking opportunities in Germany, which has active bilateral labour agreements, and in the UK and Nordic countries. Doctors, nurses, engineers, and teachers leaving in large numbers has created service provision crises in healthcare and education in Albania.\n\nRemittances from the diaspora—estimated at over €1 billion annually—constitute a significant share of Albanian GDP and fund a substantial portion of household consumption, particularly in rural areas. The remittance economy has also driven some inflation and real estate price increases in Tirana.\n\nGovernment policies to manage emigration and encourage return include bilateral labour agreements that facilitate legal migration channels (with the theory that legal channels reduce irregular migration and strengthen ties), investment incentives for diaspora businesses, and educational programmes to improve skill matching. EU accession—which would allow free movement—is paradoxically expected to both accelerate emigration in the short term and create conditions for eventual return as Albania develops.",
    officialLinks: [
      { label: "Albanian Ministry of Diaspora", url: "https://diaspora.gov.al/en" },
      { label: "World Bank Albania migration data", url: "https://www.worldbank.org/en/country/albania" },
      { label: "IOM Albania", url: "https://albania.iom.int/en" }
    ],
    newsLinks: [
      { label: "Albania's hospitals face collapse as doctors emigrate to Germany", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-01" },
      { label: "Albanian diaspora remittances surpass €1 billion for third year", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-14" },
      { label: "Albania signs labour agreement with Germany to manage skilled emigration", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-19" }
    ],
    endorsements: [
      { name: "Albanian Center for Population and Development", url: "https://www.acpd.al" },
      { name: "IOM Albania", url: "https://albania.iom.int/en" },
      { name: "Caritas Albania", url: "https://www.caritas.al" }
    ],
    supporterCount: 1287
  },
  "al-003": {
    detail: "Albania's elections have been assessed by OSCE/ODIHR monitoring missions as procedurally improving but still affected by significant problems: vote buying through cash or social benefit promises, abuse of state administrative resources for campaign purposes, voter intimidation in rural areas, and a media environment heavily biased toward one or another political camp. These observations have been consistent across municipal and parliamentary elections in recent years.\n\nReducing electoral irregularities is a specific EU accession benchmark for Albania under Chapter 23, meaning that electoral reform has international consequences beyond domestic democratic quality. The Central Election Commission (CEC) has received technical assistance and has improved administrative processes, but the underlying political culture of patron-client relationships in voting remains difficult to change through procedural reform alone.\n\nThe dominant political competition—between the ruling Socialist Party (PS) led by Prime Minister Rama and the Democratic Party (PD), itself divided into competing factions—has produced a polarised environment in which mutual accusations of electoral manipulation are routine. The PD's internal division, including a legal dispute about party leadership and assets, has been partly adjudicated by courts in ways that opposition figures allege were politically influenced.\n\nFor Albanian civil society and for diaspora Albanians watching the home political scene, credible elections are both a precondition for EU accession and a measure of whether the political system is genuinely reforming or maintaining the appearance of reform while preserving old power structures.",
    officialLinks: [
      { label: "OSCE/ODIHR Albania election observation reports", url: "https://www.osce.org/odihr/elections/albania" },
      { label: "Albanian Central Election Commission (KQZ)", url: "https://www.kqz.gov.al/en/" },
      { label: "EU Progress Report Albania – electoral chapter", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/albania_en" }
    ],
    newsLinks: [
      { label: "ODIHR notes progress but flags vote buying in Albania municipal elections", url: "https://www.osce.org/odihr/elections/albania", source: "OSCE/ODIHR", publishedAt: "2025-05-15" },
      { label: "Albania PD party split heads to court in legal dispute over leadership", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-12-04" },
      { label: "Civil society demands Albanian election law reform ahead of 2025 vote", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-27" }
    ],
    endorsements: [
      { name: "OSCE/ODIHR", url: "https://www.osce.org/odihr/elections" },
      { name: "BIRN Albania", url: "https://birn.eu.com/our-work/albania/" },
      { name: "Albanian Helsinki Committee", url: "https://www.ahc.org.al" }
    ],
    supporterCount: 674
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 8`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
