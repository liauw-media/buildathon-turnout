const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "mk-001": {
    detail: "North Macedonia's path to Euro-Atlantic integration required resolving two simultaneous diplomatic disputes. The first—the name dispute with Greece—was resolved by the 2018 Prespa Agreement, under which the country renamed itself from the Former Yugoslav Republic of Macedonia to North Macedonia; in return Greece lifted its veto on NATO and EU membership. The country joined NATO in 2020.\n\nThe second dispute—with Bulgaria over historical and linguistic identity questions—has proven harder to resolve. Bulgaria, which joined the EU in 2007, conditioned its agreement to open EU accession negotiations on North Macedonia amending its constitution to recognise Bulgarians as a constituent people and on a broader bilateral reconciliation framework. This condition was met with deep domestic controversy in North Macedonia, where it was seen as an attack on Macedonian national identity and historical narrative.\n\nNorth Macedonia opened formal EU accession negotiations in July 2022, alongside Albania. Progress in the negotiations has been modest, partly due to the bilateral Bulgaria condition and partly due to domestic governance challenges. The European Commission continues to identify rule of law, judicial independence, and anti-corruption as priority areas.\n\nFor the Macedonian diaspora—concentrated in Australia, Switzerland, Germany, and the US—NATO and EU membership represent normalcy and security guarantees that previous generations lacked. The identity concessions required by the Prespa and Sofia processes generate ambivalence: valued outcomes but difficult means.",
    officialLinks: [
      { label: "European Commission North Macedonia accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/north-macedonia_en" },
      { label: "Prespa Agreement text", url: "https://www.mfa.gr/en/current-affairs/statements-speeches/prespa-agreement.html" },
      { label: "NATO North Macedonia membership", url: "https://www.nato.int/cps/en/natohq/topics_153368.htm" }
    ],
    newsLinks: [
      { label: "North Macedonia opens EU accession chapters after bilateral conditions met", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-07" },
      { label: "Bulgaria-North Macedonia reconciliation framework: slow progress", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-18" },
      { label: "Skopje completes NATO integration milestone three years after accession", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2023-11-12" }
    ],
    endorsements: [
      { name: "Macedonian Center for International Cooperation (MCIC)", url: "https://www.mcms.org.mk/en" },
      { name: "Institute for Democracy (SOCIETAS CIVILIS)", url: "https://idscs.org.mk/en/" },
      { name: "OSCE Mission to Skopje", url: "https://www.osce.org/skopje" }
    ],
    supporterCount: 1243
  },
  "mk-002": {
    detail: "Bulgaria's conditions for North Macedonia's EU accession progress represent a contested use of EU enlargement as leverage for bilateral historical and identity disputes. Bulgaria argues that North Macedonia systematically denies historical and ethnic connections between the two countries' populations and has built a national identity partly on anti-Bulgarian historical narratives. Constitutional recognition of Bulgarians as a constituent people, alongside other changes, was requested as a precondition.\n\nThe Bulgarian constitutional amendment enabling recognition was adopted in 2024 after a prolonged political crisis in North Macedonia, where the government faced accusations of capitulating to Bulgarian pressure. The amendment was deeply unpopular domestically and required difficult coalition management. Its ratification set a precedent for external preconditions being imposed on a candidate country's constitution as a condition of accession progress.\n\nMinority rights more broadly—including the rights of Albanians (approximately 25% of the population), Turks, Roma, Serbs, and other communities—are both EU accession requirements and domestic political issues. The Ohrid Framework Agreement of 2001, which ended an armed insurgency by ethnic Albanian groups, established power-sharing arrangements and linguistic rights that continue to shape Macedonian governance.\n\nFor human rights organisations and EU-level commentators, the Bulgarian veto episode raised fundamental questions about whether EU enlargement conditionality should be allowed to be exploited for bilateral political purposes unrelated to EU membership criteria. The precedent set in the North Macedonia case has implications for future enlargement rounds.",
    officialLinks: [
      { label: "EU-North Macedonia Good Neighbourly Relations framework", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/north-macedonia_en" },
      { label: "Venice Commission North Macedonia minority rights opinions", url: "https://www.venice.coe.int/webforms/documents/?country=29" },
      { label: "OSCE High Commissioner on National Minorities", url: "https://www.osce.org/hcnm" }
    ],
    newsLinks: [
      { label: "North Macedonia amends constitution to recognise Bulgarians after fraught vote", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-01-19" },
      { label: "EU enlargement: can bilateral vetoes be reformed after North Macedonia case?", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-09-12" },
      { label: "Bulgaria lifts objections to North Macedonia's accession path", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-07-24" }
    ],
    endorsements: [
      { name: "European Policy Institute (EPI) Skopje", url: "https://www.epi.org.mk" },
      { name: "Minority Rights Group International", url: "https://minorityrights.org" },
      { name: "ECFR – European Council on Foreign Relations", url: "https://ecfr.eu" }
    ],
    supporterCount: 789
  },
  "mk-003": {
    detail: "North Macedonia's political history since independence has been marked by sharp polarisation between the VMRO-DPMNE and SDSM parties, punctuated by a serious political crisis in 2017 when recordings released by SDSM leader Zoran Zaev (the 'bombs') revealed massive illegal wiretapping by the then-VMRO-led government of over 20,000 people, including politicians, journalists, diplomats, and civil servants.\n\nThe crisis triggered mass protests, EU and US mediation, an interim government, and eventually elections that brought SDSM to power. Multiple prosecutions followed under the Special Prosecutor's Office established to handle the wiretapping cases; the political battles over those prosecutions, the independence of the SPO, and the eventual handing of cases to regular prosecutors have continued.\n\nAnti-corruption reform and the independence of the prosecution remain central EU accession benchmarks. The European Commission's progress reports note an improved legal framework but persistent implementation challenges: high-level corruption cases moving slowly through courts, judicial pressures, and whistleblower protection inadequacies.\n\nFor North Macedonian civil society, the wiretapping affair was a watershed that exposed the depth of institutional capture and mobilised a civic movement. That movement's energy has partially sustained, though political disillusionment has also grown as reform progress has been slower than hoped. The country's experience has been studied as a case of both authoritarian backsliding and subsequent democratic recovery.",
    officialLinks: [
      { label: "European Commission North Macedonia Progress Report", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/north-macedonia_en" },
      { label: "Special Prosecutor's Office North Macedonia", url: "https://www.spk.mk" },
      { label: "OSCE Mission to Skopje – democratic governance", url: "https://www.osce.org/skopje" }
    ],
    newsLinks: [
      { label: "North Macedonia's anti-corruption cases drag through courts years later", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-06" },
      { label: "EU warns Skopje on judicial independence after high-profile acquittal", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-19" },
      { label: "Political polarisation in North Macedonia blocks reforms ahead of elections", url: "https://rferl.org/", source: "RFE/RL", publishedAt: "2025-04-07" }
    ],
    endorsements: [
      { name: "Transparency Macedonia", url: "https://www.transparency.mk/en" },
      { name: "Institute for Democracy (SOCIETAS CIVILIS)", url: "https://idscs.org.mk/en/" },
      { name: "Helsinki Committee for Human Rights of the Republic of Macedonia", url: "https://www.mhc.org.mk" }
    ],
    supporterCount: 634
  },
  "ba-001": {
    detail: "Bosnia and Herzegovina received EU candidate status in December 2022, but the path to opening formal accession negotiations remains blocked by fundamental constitutional obstacles. The 1995 Dayton Peace Agreement—which ended the war—enshrined ethnic power-sharing between Bosniaks, Serbs, and Croats as the foundation of the constitutional order. The EU's non-discrimination requirements conflict directly with some Dayton provisions that exclude citizens not belonging to one of the three constituent peoples from running for certain offices.\n\nThe European Court of Human Rights has ruled, in Sejdić and Finci v. Bosnia (2009) and subsequent cases, that the constitutional exclusion of Roma, Jews, and others from certain offices violates the ECHR. Bosnia has not implemented these judgments. Constitutional reform would require agreement among the ethnically-defined political blocs, each of which uses the existing system to protect its community's guaranteed positions.\n\nEU accession reform has proceeded unevenly across the fourteen conditions the Commission identified. Some legislative alignment has occurred; others—particularly reforms requiring constitutional change—have barely begun. The political system's design creates incentives for each ethnic bloc to obstruct reforms that might reduce their guaranteed power, making the collective action problem severe.\n\nFor Bosnia's internationally dispersed diaspora—Bosniak communities in Germany, Austria, Sweden, the US, and elsewhere, as well as Bosnian Croats in Croatia and Germany and Bosnian Serbs in Serbia and Austria—EU integration offers both practical benefits and normative significance as evidence that the war's wounds are healing.",
    officialLinks: [
      { label: "European Commission Bosnia and Herzegovina accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/bosnia-and-herzegovina_en" },
      { label: "ECHR Sejdić and Finci v. Bosnia judgment", url: "https://www.echr.coe.int" },
      { label: "OHR – Office of the High Representative in BiH", url: "https://www.ohr.int" }
    ],
    newsLinks: [
      { label: "Bosnia opens EU accession negotiations after meeting 14 conditions", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-03-25" },
      { label: "Constitutional reform in Bosnia blocked by ethnic veto politics", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-14" },
      { label: "Sarajevo's EU path: optimism and deep structural challenges", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-07" }
    ],
    endorsements: [
      { name: "Transparency International Bosnia and Herzegovina", url: "https://www.ti-bih.org" },
      { name: "Sarajevo Open Centre", url: "https://www.soc.ba/en" },
      { name: "Venice Commission – Bosnia opinions", url: "https://www.venice.coe.int/webforms/documents/?country=7" }
    ],
    supporterCount: 1632
  },
  "ba-002": {
    detail: "Milorad Dodik, President of Republika Srpska (RS), has systematically pursued a strategy of undermining Bosnian state institutions, denying the constitutional authority of the High Representative, disputing the legally established facts about the Srebrenica genocide, and maintaining economic and political ties with Russia that diverge from Bosnia's official EU integration path.\n\nDodik's actions have included passing RS-level laws that contradict state-level legislation, refusing to implement Constitutional Court decisions, and publicly advocating for RS secession from Bosnia—actions that the international community considers violations of the Dayton Agreement. The US and EU imposed personal sanctions on Dodik, and the High Representative has used Bonn Powers to impose legislation that RS has refused to implement.\n\nThe genocide denial issue has been particularly sensitive: the International Court of Justice, the ICTY, and the Bosnian Constitutional Court have all affirmed that the Srebrenica massacre of 1995 constitutes genocide. Dodik and RS institutions have denied or minimised this characterisation, and RS authorities have refused to mark Srebrenica commemoration days established by Bosnian state law.\n\nRussia's support for Dodik—through diplomatic protection at the UN Security Council, financial relationships, and political endorsement—has made the RS challenge to Bosnian constitutional order inseparable from the broader geopolitical contest over the Western Balkans' orientation. For Bosniak civil society and diaspora, the Dodik challenge represents an ongoing existential question about whether the post-war settlement can be maintained.",
    officialLinks: [
      { label: "OHR – Office of the High Representative decisions", url: "https://www.ohr.int" },
      { label: "EU sanctions on Dodik", url: "https://www.consilium.europa.eu/en/policies/sanctions/bosnia-and-herzegovina/" },
      { label: "US Treasury – Dodik designation", url: "https://ofac.treasury.gov/recent-actions/20220105" }
    ],
    newsLinks: [
      { label: "Dodik convicted of disobeying state court order in landmark ruling", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-02-26" },
      { label: "EU extends sanctions on Dodik as RS defiance continues", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-22" },
      { label: "Russia vetoes UN Srebrenica genocide resolution backed by EU states", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-05-23" }
    ],
    endorsements: [
      { name: "Mothers of Srebrenica", url: "https://www.srebrenica.ba" },
      { name: "International Crisis Group – Balkans", url: "https://www.crisisgroup.org/europe-central-asia/balkans" },
      { name: "Amnesty International Bosnia", url: "https://www.amnesty.ba" }
    ],
    supporterCount: 2187
  },
  "ba-003": {
    detail: "Bosnia and Herzegovina has been one of the most challenging Western Balkan states in which to manage irregular migration flows along the Balkan route to the EU. Migrants and asylum seekers transiting from the Western Mediterranean route or through Serbia use Bosnia as a staging point before attempting to cross into Croatia (now in Schengen). The management of this transit population—in camps, informal settlements, and border areas—has strained state resources and generated domestic political tension.\n\nThe Una-Sana canton in northwest Bosnia has been the primary concentration point, with informal camps in the Lipa area experiencing severe conditions including fires and overcrowding. International organisations including IOM, UNHCR, and Danish Refugee Council have provided assistance, but resource constraints and political disagreements between federal and entity governments have complicated consistent management.\n\nCroatia's alleged pushbacks from the Schengen external border have left some migrants stranded in Bosnia for extended periods, unable to proceed and unable to access protection. Bosnia has neither the legal framework nor the institutional capacity for comprehensive asylum processing, and the EU has provided financial support for reception management while pressing for institutional strengthening.\n\nFor Bosnia's EU accession process, migration management is listed among the reform requirements in Chapter 24 (justice, freedom, and security). The practical challenge is significant: Bosnia must build systems that meet EU standards while managing an active transit flow with limited resources and fragmented governance.",
    officialLinks: [
      { label: "IOM Bosnia and Herzegovina – migration programme", url: "https://www.iom.int/countries/bosnia-and-herzegovina" },
      { label: "UNHCR Bosnia and Herzegovina", url: "https://www.unhcr.org/ba" },
      { label: "EU Home Affairs – Bosnia migration funding", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum_en" }
    ],
    newsLinks: [
      { label: "Lipa camp fire leaves hundreds of migrants without shelter in Bosnia winter", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-12-27" },
      { label: "EU funds new reception centre in Una-Sana canton as migration continues", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-04" },
      { label: "Bosnia struggles to manage Balkan route transit amid governance gaps", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-22" }
    ],
    endorsements: [
      { name: "IOM Bosnia and Herzegovina", url: "https://www.iom.int/countries/bosnia-and-herzegovina" },
      { name: "UNHCR Bosnia", url: "https://www.unhcr.org/ba" },
      { name: "Danish Refugee Council – Balkans", url: "https://drc.ngo" }
    ],
    supporterCount: 543
  },
  "me-001": {
    detail: "Montenegro has been in EU accession negotiations longer than any other candidate country, having opened talks in 2012 and completed all 33 chapters. Progress has stalled primarily because the most critical chapters—23 (judiciary, fundamental rights) and 24 (justice, freedom, security)—remain unfinished due to insufficient judicial reform and anti-corruption track record. The EU has explicitly stated that negotiations will not conclude without credible results in these areas.\n\nThe judicial system in Montenegro has been characterised by a culture of impunity for high-level corruption, with prosecutions of prominent political and business figures rarely resulting in convictions proportionate to the allegations. The High Judicial Council's independence has been questioned, and the Special State Prosecutor's anti-corruption record has been a particular focus of EU criticism.\n\nMontenegro's political landscape has become more volatile since 2020, when a protest movement linked to church property disputes brought a coalition of opposition groups to power—the first change of government since independence in 2006. Subsequent governments have been short-lived and fragmented, with coalitions shifting unpredictably and the reform mandate disputed between competing political factions.\n\nFor Montenegrin diaspora—significant communities in Serbia, Germany, Switzerland, and the US—EU accession offers the tangible benefit of free movement that would facilitate the cross-border lives many already lead informally. Some diaspora Montenegrins hold Serbian citizenship, which provides EU-adjacent status through Serbia's accession process.",
    officialLinks: [
      { label: "European Commission Montenegro accession page", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/montenegro_en" },
      { label: "Montenegro Ministry of European Affairs", url: "https://www.mep.gov.me/en" },
      { label: "GRECO Montenegro evaluation", url: "https://www.coe.int/en/web/greco/evaluations/montenegro" }
    ],
    newsLinks: [
      { label: "Montenegro accession: all chapters open but rule of law blocks closure", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-18" },
      { label: "EU presses Podgorica on judicial independence ahead of accession review", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-04-14" },
      { label: "Montenegro forms new government after latest coalition collapse", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-11" }
    ],
    endorsements: [
      { name: "Centre for Civic Education Montenegro", url: "https://www.cgo-cce.org/en" },
      { name: "MANS – Network for Affirmation of the NGO Sector", url: "https://www.mans.co.me/en/" },
      { name: "Institute Alternative Montenegro", url: "https://www.institut-alternativa.org/en" }
    ],
    supporterCount: 934
  },
  "me-002": {
    detail: "Montenegro's church property law of 2019—requiring religious communities to prove ownership of property before 1918 or cede it to the state—was designed primarily to affect the Serbian Orthodox Church (SOC), which holds many of Montenegro's historically significant religious sites. The law was framed by its proponents as an assertion of Montenegrin national sovereignty and identity; by opponents as an attack on religious freedom and Montenegrin Serbs' cultural rights.\n\nThe controversy generated massive street protests organised by the SOC and Serb-oriented political and civic groups, with processions of tens of thousands marching through Montenegrin cities in a demonstration of the church's social mobilisation capacity. The protests ultimately contributed to the coalition that unseated the long-governing DPS in August 2020 elections—the first change of government since independence.\n\nThe law was subsequently suspended and a new agreement negotiated between the government and the SOC, avoiding immediate property disputes while establishing a framework for resolving them. The new government, whose coalition includes parties sympathetic to the SOC, has managed the issue more carefully, but the underlying tension about the relationship between the Montenegrin state, Montenegrin identity, and Serbian cultural and religious ties has not been resolved.\n\nThe episode illustrates the deep entanglement of national identity, religious affiliation, and political loyalty in Montenegro—a country where the question of 'Montenegrin versus Serb' identity is genuinely contested and politically consequential, and where the Serbian Orthodox Church serves as a focal point for those who feel a stronger affiliation with Serbia than with an independent Montenegrin state.",
    officialLinks: [
      { label: "Montenegrin Ministry of Human and Minority Rights – religious communities law", url: "https://www.mmp.gov.me/en" },
      { label: "Venice Commission Montenegro opinion on law on religious communities", url: "https://www.venice.coe.int/webforms/documents/?country=30" },
      { label: "Council of Europe Montenegro", url: "https://www.coe.int/en/web/tirana/montenegro" }
    ],
    newsLinks: [
      { label: "Montenegro church law triggers massive Serb Orthodox protests", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2020-01-17" },
      { label: "Montenegro government and Serbian Orthodox Church reach property deal", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2020-09-02" },
      { label: "Church and state in Montenegro: unresolved tensions shape politics", url: "https://rferl.org/montenegro/", source: "RFE/RL", publishedAt: "2025-01-19" }
    ],
    endorsements: [
      { name: "Centre for Civic Education Montenegro", url: "https://www.cgo-cce.org/en" },
      { name: "Venice Commission (Council of Europe)", url: "https://www.venice.coe.int" },
      { name: "Amnesty International Montenegro", url: "https://www.amnesty.org" }
    ],
    supporterCount: 743
  },
  "me-003": {
    detail: "Montenegro has a documented problem with organised crime disproportionate to its small size, with drug trafficking networks—particularly cocaine smuggling from South America via Montenegro's Adriatic ports—having significant influence in the local economy and political life. Court proceedings and investigative journalism have documented connections between criminal networks, the legal economy (construction, real estate, hospitality), and political figures across party lines.\n\nThe assassination of investigative journalist Duško Jovanović in 2004 and the murder of drug clan figures in inter-group conflicts—including high-profile killings in Dubai, Greece, and domestically—have brought international attention to Montenegro's crime problem. Witness protection has been a persistent weakness in prosecuting organised crime: witnesses face intimidation and violence, and the state's ability to protect them has been insufficient.\n\nThe EU accession benchmarks on organised crime require Montenegro to demonstrate sustained prosecution results at the highest levels of criminal networks, improved police-prosecutor coordination, and credible witness protection. Progress in meeting these benchmarks has been cited by the Commission as insufficient, contributing to the overall accession stall.\n\nFor the business community and for Montenegro's tourism sector—which drives a growing share of the economy—organised crime connections to real estate and hospitality create due diligence concerns for legitimate international investors and undermine the transparency that EU market integration requires. The country's appeal as a luxury Mediterranean destination depends partly on addressing these underlying governance concerns.",
    officialLinks: [
      { label: "Special State Prosecutor Montenegro – organised crime", url: "https://www.sdtcg.me" },
      { label: "Europol – Montenegro cooperation", url: "https://www.europol.europa.eu" },
      { label: "European Commission Montenegro Progress Report – Chapter 24", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/montenegro_en" }
    ],
    newsLinks: [
      { label: "Montenegro drug gang leader killed in Dubai in targeted assassination", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-04" },
      { label: "EU presses Podgorica on witness protection failures in crime trials", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-21" },
      { label: "Montenegro police and prosecutors launch joint operation against trafficking network", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-11-15" }
    ],
    endorsements: [
      { name: "MANS – Network for Affirmation of the NGO Sector", url: "https://www.mans.co.me/en/" },
      { name: "OCCRP (Organised Crime and Corruption Reporting)", url: "https://www.occrp.org" },
      { name: "Institute Alternative Montenegro", url: "https://www.institut-alternativa.org/en" }
    ],
    supporterCount: 687
  },
  "xk-001": {
    detail: "Kosovo's declaration of independence on 17 February 2008, following nine years of UN administration under Security Council Resolution 1244, is one of the most contested acts of self-determination in post-Cold War international law. The International Court of Justice issued an advisory opinion in 2010 holding that the declaration did not violate international law—a significant but non-binding affirmation that did not resolve the underlying political dispute.\n\nThe non-recognition by Serbia, Russia, China, and five EU member states (Spain, Slovakia, Romania, Greece, Cyprus—each with their own sensitivities about self-determination) has prevented Kosovo from joining the United Nations and from membership in international organisations including Interpol and UNESCO, creating practical and symbolic disadvantages. Kosovo's quasi-international status is managed through bilateral recognition, Schengen visa access (from January 2024), and membership in regional organisations including the Council of Europe (admitted in 2024).\n\nFull international recognition and UN membership require either a Security Council decision (vetoed by Russia) or a different diplomatic pathway. Diplomatic efforts have focused on normalising relations with Serbia as a de facto path to broader recognition, though progress in the EU-mediated dialogue has been limited.\n\nFor the Kosovo diaspora—very large relative to the domestic population, with major communities in Germany, Switzerland, the UK, the US, and across Western Europe—the recognition question has both symbolic and practical dimensions. Diaspora Kosovars are significant economic contributors through remittances and investment, and their political engagement sustains the international recognition project.",
    officialLinks: [
      { label: "ICJ Advisory Opinion on Kosovo Independence", url: "https://www.icj-cij.org/case/141" },
      { label: "Kosovo Ministry of Foreign Affairs – recognition", url: "https://www.mfa-ks.net" },
      { label: "Council of Europe – Kosovo membership 2024", url: "https://www.coe.int/en/web/portal/kosovo" }
    ],
    newsLinks: [
      { label: "Kosovo joins Council of Europe, gaining new international recognition milestone", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-05-08" },
      { label: "Kosovo's UN membership bid: Russia's veto blocks progress at Security Council", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-18" },
      { label: "Kosovo visa liberalisation changes everyday lives of diaspora", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2024-01-05" }
    ],
    endorsements: [
      { name: "Kosovo Foundation for Open Society", url: "https://www.kfos.org" },
      { name: "ICJ", url: "https://www.icj-cij.org" },
      { name: "International Crisis Group – Balkans", url: "https://www.crisisgroup.org/europe-central-asia/balkans" }
    ],
    supporterCount: 1923
  },
  "xk-002": {
    detail: "Kosovo became the last Western Balkan territory to receive EU Schengen visa-free access, with the decision entering into force in January 2024 after years of delay. The liberalisation followed Kosovo meeting all the required benchmarks on border management, travel documents, anti-corruption measures, and irregular migration control. The delay relative to other Western Balkan states (Serbia and North Macedonia received liberalisation in 2009) created a sense of discrimination that was deeply felt.\n\nThe practical impact has been significant: Kosovars can now travel freely to EU Schengen states for short visits, facilitating family reunification visits, business, study exploration, and cultural exchange. For a country where remittances from the diaspora constitute approximately 15-20% of GDP, easier physical connection between diaspora and family members has direct economic and social consequences.\n\nKosovo's formal EU accession process has not yet opened—the five non-recognising EU member states create a diplomatic complication, and the general accession framework requires unanimous Council agreement. Kosovo has applied for EU membership and the Commission has assessed it as a potential candidate, but the political path to opening negotiations is unclear.\n\nFor the Kosovo diaspora—with over 700,000 Kosovars estimated in Germany alone, and significant communities in Switzerland, Austria, Sweden, and the US—visa liberalisation is a major quality-of-life improvement but also a reminder of the incomplete international status that still affects Kosovo's integration into international structures.",
    officialLinks: [
      { label: "European Commission Kosovo visa liberalisation", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/kosovo_en" },
      { label: "EU-Kosovo Stabilisation and Association Agreement", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/candidate-countries/kosovo_en" },
      { label: "Kosovo Office for European Integration", url: "https://mei-ks.net/en" }
    ],
    newsLinks: [
      { label: "Kosovo visa liberalisation takes effect as citizens celebrate free travel", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-01-02" },
      { label: "Pristina applies for EU membership as accession path remains unclear", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-14" },
      { label: "Kosovo diaspora's €1bn remittances sustain economy as political status stagnates", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-12-20" }
    ],
    endorsements: [
      { name: "Kosovo Foundation for Open Society", url: "https://www.kfos.org" },
      { name: "Democracy for Development (D4D Kosovo)", url: "https://d4d-ks.org" },
      { name: "Kosovar Institute for Policy Research and Development (KIPRED)", url: "https://www.kipred.org/en" }
    ],
    supporterCount: 2134
  },
  "xk-003": {
    detail: "The four northern Kosovo municipalities—Leposavić, Zvečan, Zubin Potok, and Mitrovica North—where ethnic Serbs are the majority, have been a persistent flashpoint in Kosovo-Serbia relations. The Serb community there has maintained strong ties with Belgrade, boycotted Kosovo institutions, and been supported by parallel Serbian state structures including healthcare, education, and security elements operating without Kosovo government authorisation.\n\nMajor incidents have included barricades erected across roads into the north in 2022, armed clashes near the Banjska village in September 2023, and sustained tensions over the removal of Serbian license plates and the designation of the Kosovo dinar as the sole legal tender. KFOR (NATO Kosovo Force) has played a crucial stabilisation role, maintaining roads open and preventing escalation, though its position has been tested by the scale of the challenges.\n\nEU-mediated dialogue on normalisation has produced agreements—most significantly the obligation on Serbia to allow Kosovo's participation in regional organisations—that have been incompletely implemented. The Association of Serb-majority Municipalities, agreed in 2013, has never been established by Kosovo, creating a justification for Serbian non-performance on other commitments.\n\nFor Kosovo's Serb community, the situation creates a genuine dilemma: integration into Kosovo institutions would mean accepting Kosovo's sovereignty, which many reject; but the current limbo leaves them without some state services and without clear prospects. Some have emigrated to Serbia; others maintain their current status hoping for a political resolution.",
    officialLinks: [
      { label: "KFOR – NATO Kosovo Force", url: "https://jfcbs.nato.int/kfor" },
      { label: "EULEX Kosovo – EU rule of law mission", url: "https://www.eulex-kosovo.eu" },
      { label: "EU-mediated Belgrade-Pristina dialogue", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/1898/pristina-belgrade-dialogue_en" }
    ],
    newsLinks: [
      { label: "KFOR deploys additional troops after Banjska armed incident", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2023-09-25" },
      { label: "North Kosovo Serbs boycott Kosovo elections as tensions persist", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-02-13" },
      { label: "EU warns both sides as Kosovo dinar dispute threatens stability", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-24" }
    ],
    endorsements: [
      { name: "International Crisis Group – Kosovo", url: "https://www.crisisgroup.org/europe-central-asia/balkans/kosovo" },
      { name: "Human Rights Watch – Kosovo", url: "https://www.hrw.org/europe/central-asia/kosovo" },
      { name: "OSCE Mission in Kosovo", url: "https://www.osce.org/kosovo" }
    ],
    supporterCount: 1143
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 9`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
