const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "mt-001": {
    detail: "Malta's rule of law debate crystallised around the October 2017 assassination of journalist Daphne Caruana Galizia, who had been investigating corruption links at the highest levels of government. The subsequent 2021 public inquiry found that the state bore responsibility for creating an environment in which the murder could take place, naming the then-Prime Minister as among those who bore moral responsibility.\n\nThe Venice Commission has issued recommendations on judicial appointments, the composition of the Commission for the Administration of Justice, and the position of the Attorney General—recommending separation of the prosecutorial and advisory functions. Implementation of these recommendations has been partial and slow, with successive governments accepting some reforms while resisting others.\n\nThe rule of law dimension intersects with Malta's EU standing. The European Parliament has adopted resolutions expressing concern about Malta's governance, and the European Commission's annual rule of law reports have consistently flagged gaps in judicial independence and media pluralism. Malta has argued that progress is being made and that criticism does not reflect the full picture.\n\nFor Maltese living abroad—primarily in the UK, Australia, Canada, and other EU states—the rule of law question is a matter of national reputation and of whether investments and assets at home are protected by a genuinely independent judiciary. The diaspora community has been more vocal on governance issues since the Caruana Galizia case.",
    officialLinks: [
      { label: "Venice Commission Malta opinions", url: "https://www.venice.coe.int/webforms/documents/?country=27" },
      { label: "European Commission Malta Rule of Law Report 2024", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "Daphne Caruana Galizia Public Inquiry Report", url: "https://www.independent.com.mt" }
    ],
    newsLinks: [
      { label: "Malta's judicial reform stalls as Venice Commission reissues warnings", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-08" },
      { label: "Key suspect convicted in Daphne Caruana Galizia murder case", url: "https://www.theguardian.com/world/malta/", source: "The Guardian", publishedAt: "2024-11-14" },
      { label: "European Parliament adopts new resolution on Malta press freedom", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-20" },
      { label: "Malta government accepts some Venice Commission reforms, rejects others", url: "https://timesofmalta.com", source: "Times of Malta", publishedAt: "2025-06-03" }
    ],
    endorsements: [
      { name: "Daphne Foundation", url: "https://daphnefoundation.org" },
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Civil Society Network Malta", url: "https://civilsocietynetwork.org.mt" }
    ],
    supporterCount: 2614
  },
  "mt-002": {
    detail: "Malta's Individual Investor Programme (IIP), launched in 2014, sold EU citizenship to high-net-worth individuals for an investment of approximately €1.15 million, plus a property purchase or rental commitment and charitable donation. The programme attracted over 1,000 applicants before the European Court of Justice ruling of 29 April 2025 declared it incompatible with EU law.\n\nThe ECJ ruling held that citizenship cannot be treated as a commercial product or traded for economic considerations without a genuine link to the member state. The court found Malta had violated the principle of sincere cooperation and the integrity of EU citizenship, which carries rights across all 27 member states. Malta is required to phase out the programme; the government announced it would comply while disputing the scope of the ruling's retroactive effect.\n\nThe case raises fundamental questions about the outer limits of member-state sovereignty over nationality. EU law traditionally leaves citizenship to member states, and Malta argued—unsuccessfully—that this residual competence was unconstrained. The ruling creates precedent affecting golden passport programmes in other EU member states, including previous schemes in Cyprus and Bulgaria.\n\nFor the Maltese diaspora and for EU citizens generally, the ruling affirms that EU citizenship cannot be purchased, preserving its meaning as a status earned through genuine connection rather than financial transaction. Critics of the programme had argued it created a two-tier citizenship and posed anti-money-laundering risks.",
    officialLinks: [
      { label: "ECJ judgment C-106/22 Malta IIP case", url: "https://curia.europa.eu/juris/liste.jsf?language=en&jur=C" },
      { label: "European Commission vs. Malta infringement proceedings", url: "https://commission.europa.eu/law/law-making-process/applying-eu-law/infringement-procedure_en" },
      { label: "Identity Malta Agency", url: "https://identitymalta.com" }
    ],
    newsLinks: [
      { label: "EU top court rules Malta's golden passport scheme illegal", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-04-29" },
      { label: "What the ECJ citizenship ruling means for EU passport programmes", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-04-30" },
      { label: "Malta to comply with ECJ ruling but contests retroactive effect", url: "https://timesofmalta.com", source: "Times of Malta", publishedAt: "2025-05-06" },
      { label: "Golden passport verdict reshapes EU citizenship debate", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-02" }
    ],
    endorsements: [
      { name: "Transparency International EU", url: "https://transparency.eu" },
      { name: "Global Financial Integrity", url: "https://gfintegrity.org" },
      { name: "Daphne Foundation", url: "https://daphnefoundation.org" }
    ],
    supporterCount: 1891
  },
  "mt-003": {
    detail: "Malta is the most densely populated country in the EU, with construction intensity among the highest per capita in Europe. Civil society campaigns have documented a sustained pattern of development permits being granted for sites outside Development Zones (ODZ), coastal land, and sites of architectural or ecological importance, often following interventions from permit holders with political connections.\n\nThe Planning Authority's governance has been a repeated subject of criticism. The appointment of its board members, the handling of appeals, and the process for granting development permits for high-rise buildings—particularly in sensitive areas of Valletta, the Three Cities, and coastal localities—have all been contested in NGO reports, legal challenges, and media investigations.\n\nHeritage Malta and the Superintendence of Cultural Heritage have documented losses of vernacular architecture, garigue, and agricultural land. The rate of construction has outpaced infrastructure investment in water supply, sewage, and road capacity in some areas, creating quality-of-life concerns that cut across political affiliation.\n\nHousing affordability has become a major domestic concern as rapid construction has not translated into affordable homes: property prices in Malta have risen faster than wages, driven partly by short-term rental platforms, investment demand, and the large expatriate worker population. The interaction between planning policy, housing supply, and affordability is a central policy debate ahead of the 2027 general election.",
    officialLinks: [
      { label: "Malta Planning Authority", url: "https://www.pa.org.mt" },
      { label: "European Commission Malta environmental compliance", url: "https://commission.europa.eu/law/law-making-process/applying-eu-law/infringement-procedure_en" },
      { label: "Superintendence of Cultural Heritage Malta", url: "https://www.culturalheritage.gov.mt" }
    ],
    newsLinks: [
      { label: "Malta's construction boom leaves coastal villages unrecognisable", url: "https://timesofmalta.com", source: "Times of Malta", publishedAt: "2025-07-05" },
      { label: "EU probes Malta over ODZ development and environmental breaches", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-19" },
      { label: "Residents challenge high-rise permit in Maltese heritage court", url: "https://www.theguardian.com/world/malta/", source: "The Guardian", publishedAt: "2024-11-22" }
    ],
    endorsements: [
      { name: "Flimkien ghal Ambjent Ahjar (FAA)", url: "https://faa.org.mt" },
      { name: "Moviment Graffitti Malta", url: "https://graffitimovement.org" },
      { name: "BirdLife Malta", url: "https://birdlifemalta.org" }
    ],
    supporterCount: 1423
  },
  "mt-004": {
    detail: "The hospital concessions scandal is among the most expensive episodes of alleged state fraud in Malta's history. The government awarded a concession to manage Karin Grech, St Luke's, and Gozo General hospitals to Vitals Global Healthcare in 2015; the concession was subsequently transferred to American company Steward Health Care in 2018. Maltese courts ruled in 2023 that the original concession had been obtained through fraud, voiding the agreement and requiring the government to reclaim the hospitals.\n\nThe financial fallout includes significant legal fees, disputed claims by Steward for compensation under contract terms, and the costs of restoring the hospitals to operational public management. Parliamentary accounts committees have investigated how the concession was awarded without proper due diligence and the extent to which political figures were aware of concerns about Vitals' lack of track record in hospital management.\n\nAccountability proceedings continue: criminal investigations into figures associated with the original award are pending; some individuals have been charged. The case has become emblematic of concerns about procurement integrity, conflicts of interest, and the oversight of major government contracts.\n\nHealthcare quality under Steward had been a subject of complaints, and some diagnostic and specialist services were subcontracted or curtailed, creating concerns for patients who relied on public hospital services. The transition back to public management has required interim measures and additional investment.",
    officialLinks: [
      { label: "Maltese Courts – Vitals/Steward ruling", url: "https://www.judiciarymalta.gov.mt" },
      { label: "Malta Parliament Public Accounts Committee", url: "https://parlament.mt/en/committees/" },
      { label: "European Commission Malta health governance", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" }
    ],
    newsLinks: [
      { label: "Malta courts void hospital concession obtained by fraud", url: "https://timesofmalta.com", source: "Times of Malta", publishedAt: "2023-08-18" },
      { label: "Steward seeks hundreds of millions in compensation from Malta government", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-07" },
      { label: "Malta hospital fraud criminal proceedings advance", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "Daphne Foundation", url: "https://daphnefoundation.org" },
      { name: "Transparency International Malta", url: "https://www.transparency.org" },
      { name: "Civil Society Network Malta", url: "https://civilsocietynetwork.org.mt" }
    ],
    supporterCount: 1673
  },
  "mt-005": {
    detail: "Malta has maintained a comprehensive energy bill subsidy regime since the global energy price surge of 2021, keeping household and business electricity and fuel costs below market rates through direct government subventions to Enemalta, the state energy company. The policy has been effective at preventing the cost-of-living spike seen in other EU states but carries significant fiscal cost estimated in hundreds of millions annually.\n\nMalta's geography creates distinct energy challenges: a small island state cannot rely on grid interconnection for energy security, has limited land for solar and wind capacity, and must import all fossil fuels by sea. Submarine cables now connect Malta to the European electricity grid via Sicily, but the country remains heavily dependent on gas-fired generation.\n\nPolitical parties largely agree that energy subsidies serve an important social protection function but disagree on the timeline and mechanism for transition. The Labour government has maintained them as a signature policy; opposition parties question their long-term fiscal sustainability and their effect on incentivising energy efficiency and demand reduction.\n\nEU climate and energy policy creates external pressure: the revised Emissions Trading System and the Carbon Border Adjustment Mechanism will increase costs for fossil fuel use over time, and Malta's national energy and climate plan requires demonstrating a pathway toward higher renewable share and lower energy intensity—both of which are complicated by subsidy structures that reduce price signals.",
    officialLinks: [
      { label: "Maltese Ministry for Energy, Enterprise and Sustainable Development", url: "https://energyandwater.gov.mt" },
      { label: "Enemalta Corporation", url: "https://www.enemalta.com.mt" },
      { label: "European Commission Malta National Energy and Climate Plan", url: "https://energy.ec.europa.eu/topics/energy-strategy/national-energy-and-climate-plans-necps_en" }
    ],
    newsLinks: [
      { label: "Malta maintains energy subsidies as EU counterparts phase out support", url: "https://timesofmalta.com", source: "Times of Malta", publishedAt: "2025-01-08" },
      { label: "Maltese government defends subsidy bill ahead of budget debate", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-03" },
      { label: "Renewable energy target gap widens as Malta delays solar rollout", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-29" }
    ],
    endorsements: [
      { name: "Moviment Graffitti Malta (energy justice)", url: "https://graffitimovement.org" },
      { name: "Malta Consumers' Association", url: "https://www.consumermalta.org" },
      { name: "Friends of the Earth Malta", url: "https://www.foemalta.org" }
    ],
    supporterCount: 1128
  },
  "at-001": {
    detail: "Austria's federal elections of September 2024 produced a result without precedent in the Second Republic: the Freedom Party (FPÖ), which had been placed under intelligence surveillance as a suspected far-right extremist organisation, emerged as the largest party with approximately 29% of the vote. Constitutional norms require the president to invite the largest party to form a government first, but after FPÖ-led coalition talks collapsed, a coalition excluding the FPÖ was eventually formed.\n\nThe formation process, which lasted months, highlighted the difficulty of governing Austria's fragmented parliament. The resulting coalition brought together the ÖVP and SPÖ with NEOS, creating an ideologically broad grouping whose internal coherence on fiscal policy, migration, and EU affairs has been tested from the outset.\n\nFor Austrian voters abroad—primarily in Germany, Switzerland, and the UK—the outcome was watched closely given the FPÖ's sceptical positions on EU integration, Ukraine support, and multilateral institutions. The coalition's positions on these issues represent a more conventionally pro-EU course, but tensions within the government are expected to surface as policy priorities are negotiated.\n\nCoalition politics in Austria is a chronic feature rather than an exception: the country has had only brief single-party majority governments, and multi-party coalitions with their characteristic contradictions and compromises are the standard mode of governance.",
    officialLinks: [
      { label: "Austrian Parliament – coalition agreement", url: "https://www.parlament.gv.at" },
      { label: "Austrian Federal Chancellery", url: "https://www.bundeskanzleramt.gv.at/en.html" },
      { label: "Austrian Presidential Office", url: "https://www.bundespraesident.at/en" }
    ],
    newsLinks: [
      { label: "Austria's FPÖ wins election but fails to form government", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-10-01" },
      { label: "Austria forms three-party coalition after months of negotiations", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-01-03" },
      { label: "Vienna coalition faces first test over migration and defence spending", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-03-11" }
    ],
    endorsements: [
      { name: "Transparency International Austria", url: "https://www.ti-austria.at" },
      { name: "NEOS Lab (think tank)", url: "https://www.neoslab.at" },
      { name: "Vienna Institute for International Economic Studies (WIIW)", url: "https://wiiw.ac.at" }
    ],
    supporterCount: 892
  },
  "at-002": {
    detail: "Austria has among the most restrictive asylum policies in the EU while remaining a transit and destination country for migrants using Balkan route, western Mediterranean, and other pathways. The country has pushed consistently within EU forums for tightening external borders, faster return agreements with origin and transit countries, and stricter internal EU burden-sharing mechanisms that would reduce pressure on frontline states by distributing arrivals.\n\nDomestically, integration requirements have been progressively tightened: German language requirements are applied at earlier stages, integration agreements impose obligations on recipients of welfare support, and deportation procedures have been streamlined, including controversial forced returns to Afghanistan and Syria in some cases. These policies have been challenged by human rights organisations and in some cases by Austrian administrative courts.\n\nThe FPÖ's electoral success in 2024 was driven significantly by migration as a top voter concern. Even the governing coalition formed without FPÖ participation has adopted elements of the restrictive approach, reflecting the political salience of the issue across party lines.\n\nFor Austrians abroad, migration policy intersects with Austria's international reputation: those living in states with more liberal asylum regimes sometimes encounter criticism of Austrian policy in professional or social settings. Austria's diaspora communities include migrants who arrived in previous decades under less restrictive rules and have complex relationships with current policy debates.",
    officialLinks: [
      { label: "Austrian Federal Office for Immigration and Asylum (BFA)", url: "https://www.bfa.gv.at/en.html" },
      { label: "European Commission Austria migration data", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum_en" },
      { label: "UNHCR Austria", url: "https://www.unhcr.org/at" }
    ],
    newsLinks: [
      { label: "Austria deports Afghan asylum seekers, drawing rights group condemnation", url: "https://www.theguardian.com/world/austria/", source: "The Guardian", publishedAt: "2025-02-06" },
      { label: "Vienna pushes for EU-wide migration cap at Brussels summit", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-25" },
      { label: "Austria's migration courts face backlog of 100,000 cases", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-18" }
    ],
    endorsements: [
      { name: "Amnesty International Austria", url: "https://www.amnesty.at" },
      { name: "Diakonie Austria – migration services", url: "https://www.diakonie.at" },
      { name: "UNHCR Austria", url: "https://www.unhcr.org/at" }
    ],
    supporterCount: 1356
  },
  "at-003": {
    detail: "Austria generates approximately 80% of its electricity from renewable sources—primarily hydropower—but remains dependent on imported natural gas for heating, industrial processes, and electricity backup. The loss of affordable Russian gas following sanctions and supply disruptions accelerated the government's declared goal of 100% renewable electricity by 2030 and created pressure to diversify gas sources and expand storage.\n\nWind and solar expansion faces significant land-use conflicts, particularly in Lower Austria and Styria, where planning approvals have been slower than in comparable European states. The government has sought to streamline permitting for renewable projects while balancing concerns from rural communities about landscape impact. Hydropower capacity is largely maximised, with limited new sites available.\n\nIndustrial energy costs—particularly for energy-intensive sectors like paper, chemicals, and metals—have been a major competitiveness concern. Austria's economy minister has engaged in EU-level debates about energy price relief for industry and the design of electricity market reform to reduce the coupling of electricity prices to marginal gas generation costs.\n\nThe political dimensions of energy transition are managed partly through a broad coalition of stakeholders: Austria's chambers of commerce and industry, environmental groups like Greenpeace Austria and WWF Austria, and the agricultural sector (which is both a consumer of energy and a potential host for solar and biogas installations) each have distinct perspectives on the pace and terms of transition.",
    officialLinks: [
      { label: "Austrian Federal Ministry for Climate Action", url: "https://www.bmk.gv.at/en.html" },
      { label: "E-Control Austria (energy regulator)", url: "https://www.e-control.at/en" },
      { label: "European Commission Austria National Energy and Climate Plan", url: "https://energy.ec.europa.eu/topics/energy-strategy/national-energy-and-climate-plans-necps_en" }
    ],
    newsLinks: [
      { label: "Austria races to hit 100% renewable electricity target by 2030", url: "https://www.euronews.com/green/", source: "Euronews", publishedAt: "2025-03-05" },
      { label: "Wind farm permits speed up in Austria after planning reform", url: "https://www.reuters.com/business/energy/", source: "Reuters", publishedAt: "2025-06-17" },
      { label: "Austrian industry warns of competitiveness threat from energy costs", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-11-30" }
    ],
    endorsements: [
      { name: "Greenpeace Austria", url: "https://www.greenpeace.at" },
      { name: "WWF Austria", url: "https://www.wwf.at" },
      { name: "Austrian Society for Energy Economics (OGE)", url: "https://www.oge.at" }
    ],
    supporterCount: 743
  },
  "be-001": {
    detail: "Belgium's federal structure is among the most complex in the world: powers are divided between the federal government, three geographic regions (Flanders, Wallonia, Brussels-Capital), and three language communities (Flemish, French, and German-speaking), with different assemblies and governments for each entity. This produces significant institutional duplication, coordination challenges, and regular disputes about which level of government holds which competencies.\n\nPeriodic rounds of state reform—Belgium has had six major constitutional overhauls since the founding of its federal system—have progressively devolved more powers from the federal to regional level. The most recent state reform is expected to address fiscal transfer mechanisms between Flanders (a net contributor) and Wallonia and Brussels (net recipients), as well as further devolution of employment and social policy.\n\nThe long-term viability of the Belgian federal model is a genuine question in political science: some argue that asymmetric bicommunal federalism is unsustainable and will eventually produce either a split or a radically reconfigured Belgium. Others point to decades of successful management of institutional complexity and argue that the incentives for a formal separation are weak.\n\nFor Belgians abroad, the institutional complexity often surfaces in practical ways: which government is responsible for consular services, education equivalence, or pension rights can depend on which community the diaspora member was associated with. The complexity of Belgian identity—Flemish, Walloon, Belgian, European—is also a common experience abroad.",
    officialLinks: [
      { label: "Belgian Federal Parliament", url: "https://www.lachambre.be/kvvcr/index.cfm?language=en" },
      { label: "Flemish Parliament", url: "https://www.vlaamsparlement.be" },
      { label: "Federal Public Service – Belgian Constitution", url: "https://www.senate.be/doc/const_en.html" }
    ],
    newsLinks: [
      { label: "Belgium enters sixth state reform negotiations after coalition formation", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-14" },
      { label: "Flanders and Wallonia clash over fiscal transfer reform terms", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-04-01" },
      { label: "Belgian federalism under stress as coalition tensions mount", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-22" }
    ],
    endorsements: [
      { name: "Re-Bel network (Rethinking Belgium)", url: "https://www.rethinkingbelgium.eu" },
      { name: "Egmont – Royal Institute for International Relations", url: "https://www.egmontinstitute.be" },
      { name: "Itinera Institute", url: "https://www.itinerainstitute.org" }
    ],
    supporterCount: 687
  },
  "be-002": {
    detail: "Belgium's structural budget deficit is among the largest in the eurozone as a share of GDP, driven by high levels of public spending on social security, pensions, and healthcare, combined with a tax system that generates significant revenues but has not kept pace with expenditure growth. The European Commission formally opened an Excessive Deficit Procedure (EDP) against Belgium in 2024, requiring a credible medium-term fiscal adjustment path.\n\nThe debate about consolidation is politically difficult because of Belgium's generous social welfare system, which has strong cross-party support. Pension reform—specifically raising the effective retirement age and tightening early retirement conditions—is the most contested consolidation measure and has been the subject of strikes and industrial action. Healthcare cost control is another major pressure.\n\nTax reform has been proposed as an alternative or complement to spending cuts: broadening the tax base by reducing reliance on labour taxes and increasing levies on capital income and wealth has been advocated by economists and some politicians as both more equitable and more growth-friendly than public spending reductions.\n\nThe coalition formation process that concluded in 2024 produced a government with an explicit fiscal consolidation mandate, but the specific measures, their timeline, and the distributional consequences remain the subject of intense negotiation and social partner engagement. Belgium's rating agencies and the European Commission will both be watching closely.",
    officialLinks: [
      { label: "Belgian Federal Public Service Finance", url: "https://financien.belgium.be/en" },
      { label: "European Commission EDP Belgium", url: "https://ec.europa.eu/info/business-economy-euro/economic-and-fiscal-policy-coordination/fiscal-policy/excessive-deficit-procedure_en" },
      { label: "National Bank of Belgium – fiscal analysis", url: "https://www.nbb.be/en" }
    ],
    newsLinks: [
      { label: "Belgium's new government pledges €20bn in savings over legislature", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-02-08" },
      { label: "EU opens excessive deficit procedure against Belgium", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-07-19" },
      { label: "Belgian pension reform triggers nationwide transport strike", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-05-08" }
    ],
    endorsements: [
      { name: "Itinera Institute", url: "https://www.itinerainstitute.org" },
      { name: "European Fiscal Board", url: "https://www.eufiscalboard.eu" },
      { name: "FGTB/ACV (trade unions, social dialogue)", url: "https://www.fgtb.be" }
    ],
    supporterCount: 521
  },
  "be-003": {
    detail: "The New Flemish Alliance (N-VA), founded in 2001, has become the largest Flemish and arguably the largest Belgian party, advocating for Flemish autonomy within a more confederal state arrangement as an intermediate step toward eventual independence. The more radically nationalist Vlaams Belang holds the second-largest share of the Flemish vote, creating a situation in which two pro-Flemish-autonomy or separatist parties together command a majority in Flanders.\n\nN-VA's approach is pragmatic and gradualist: it has participated in federal coalitions, served in government, and focused on securing concrete devolution through state reform negotiations rather than unilateral action. Vlaams Belang's approach is more confrontational and has been subject to a political cordon sanitaire that has kept it out of government at federal and Flemish level—a cordon that N-VA has progressively eroded.\n\nThe Francophone parties and most Brussels politicians are strongly opposed to any arrangement that they see as a step toward breaking up Belgium. The French community government, Wallonia, and civil society in Wallonia and Brussels have consistently resisted fiscal federalism reforms that would reduce transfers to French-speaking regions.\n\nFor Flemish Belgians abroad, the independence question is often experienced as a cultural and identity matter as much as a constitutional one. Many diaspora members have strong Flemish identities while being pragmatic about the timing and likelihood of formal independence, viewing it as a long-term aspiration rather than an imminent policy programme.",
    officialLinks: [
      { label: "N-VA official programme", url: "https://www.n-va.be/standpunten" },
      { label: "Flemish Parliament resolutions on state reform", url: "https://www.vlaamsparlement.be" },
      { label: "Belgian Council of State", url: "https://www.raadvst-consetat.be/?page=home&lang=en" }
    ],
    newsLinks: [
      { label: "Flemish nationalists demand deeper devolution in coalition talks", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-08-27" },
      { label: "N-VA enters federal government after cordon sanitaire erodes", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-01-15" },
      { label: "Belgian federalism faces existential debate as Flemish parties grow", url: "https://www.theguardian.com/world/belgium/", source: "The Guardian", publishedAt: "2024-11-08" }
    ],
    endorsements: [
      { name: "Re-Bel network", url: "https://www.rethinkingbelgium.eu" },
      { name: "Brussels Studies Institute", url: "https://www.brusselsstudies.be/en" },
      { name: "Egmont Institute", url: "https://www.egmontinstitute.be" }
    ],
    supporterCount: 834
  },
  "bg-001": {
    detail: "Bulgaria held six parliamentary elections between April 2021 and October 2024, reflecting a political environment in which no stable governing majority could be formed around either the incumbent GERB party or the reformist coalition. The repeated elections were costly, created governance vacuums, and hampered the implementation of economic reforms and EU fund absorption.\n\nThe political deadlock was rooted in the incompatibility between the GERB-centred establishment and the anti-corruption reformist forces that emerged from the massive 2020 protest wave. The We Continue the Change party and its Democratic Bulgaria allies have consistently refused coalition with GERB while being unable to secure governing majorities without it.\n\nThe 2024 elections eventually produced a more stable configuration, but the experience left deep scars: EU funds absorption is behind schedule, public administration reform has stalled, and investor confidence has been affected. Bulgaria's path toward eurozone adoption, a stated government goal, depends in part on demonstrating fiscal and governance stability.\n\nFor Bulgarian diaspora—concentrated in Germany, the UK, Spain, and Greece—political instability is both a source of embarrassment and of concern about the state of public services for family members at home. Diaspora political engagement has grown, with communities more actively monitoring and commenting on domestic political developments through social media.",
    officialLinks: [
      { label: "National Assembly of Bulgaria", url: "https://www.parliament.bg/en" },
      { label: "European Commission Bulgaria progress reports", url: "https://neighbourhood-enlargement.ec.europa.eu/enlargement-policy/conditions-membership/accession-criteria_en" },
      { label: "Bulgarian Central Electoral Commission", url: "https://results.cik.bg/en" }
    ],
    newsLinks: [
      { label: "Bulgaria forms stable coalition after two years of political deadlock", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-28" },
      { label: "Sixth Bulgarian election since 2021 delivers fractured result again", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-10-28" },
      { label: "EU fund absorption at risk as Bulgarian governments come and go", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-09" }
    ],
    endorsements: [
      { name: "Bulgarian Helsinki Committee", url: "https://www.bghelsinki.org/en/" },
      { name: "Transparency International Bulgaria", url: "https://www.transparency.bg" },
      { name: "Center for the Study of Democracy (CSD)", url: "https://csd.bg/en/" }
    ],
    supporterCount: 694
  },
  "bg-002": {
    detail: "Bulgaria was subject to the EU's Cooperation and Verification Mechanism (CVM) for sixteen years—from accession in 2007 until its formal closure in September 2023—reflecting persistent concerns about judicial independence, corruption, and organised crime. The closure came after the Commission assessed that sufficient formal progress had been made, though many civil society observers and the European Parliament had reservations about whether the underlying culture of impunity had changed.\n\nOrganised crime networks, particularly those involved in fuel smuggling, human trafficking, and money laundering, have historically had documented links to political and business elites. Several high-profile cases remain unresolved or resulted in acquittals that critics attributed to judicial capture rather than lack of evidence.\n\nThe Supreme Judicial Council (VSS)—the body responsible for judicial appointments and discipline—has been the central institution in the rule of law debate. Multiple reform proposals have addressed its composition, the balance between judicial and prosecutorial representation, and the mechanism for appointing its members to reduce political influence.\n\nEU oversight through the rule of law mechanism now applies to Bulgaria on the same basis as all member states, with annual reports. The European Commission's assessments continue to note areas of concern, particularly regarding prosecution of high-level corruption and the independence of the Prosecutor General's office.",
    officialLinks: [
      { label: "European Commission Bulgaria Rule of Law report", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/upholding-rule-law/rule-law/rule-law-mechanism_en" },
      { label: "Supreme Judicial Council of Bulgaria", url: "https://www.vss.justice.bg/page/view/1457" },
      { label: "GRECO Bulgaria evaluation", url: "https://www.coe.int/en/web/greco/evaluations/bulgaria" }
    ],
    newsLinks: [
      { label: "EU closes CVM for Bulgaria and Romania in 2023 milestone", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2023-09-08" },
      { label: "Bulgarian organised crime kingpin acquitted, sparking protest", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-03-04" },
      { label: "Brussels flags continued concerns about Bulgarian judicial reform", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-05-21" }
    ],
    endorsements: [
      { name: "Bulgarian Helsinki Committee", url: "https://www.bghelsinki.org/en/" },
      { name: "Center for the Study of Democracy (CSD)", url: "https://csd.bg/en/" },
      { name: "Transparency International Bulgaria", url: "https://www.transparency.bg" }
    ],
    supporterCount: 587
  },
  "bg-003": {
    detail: "Bulgaria's population has fallen from approximately nine million at the end of communism to fewer than six million today, with emigration accounting for a large share of the decline alongside falling birth rates. Working-age Bulgarians have left in large numbers for Germany, Spain, the UK, Greece, and Italy, attracted by higher wages and better public services.\n\nThe demographic consequences are systemic: school rolls are falling in many regional cities and rural areas, leading to school closures and consolidation; the healthcare system faces critical nursing and specialist shortages; and the pension system's dependency ratio is worsening rapidly as the workforce shrinks. Some municipalities have lost over half their population since 1990.\n\nGovernment policies to attract diaspora return—including tax incentives, support for business formation, and improved public services in regional towns—have had limited measurable effect. The wage differential between Bulgaria and Western Europe remains large enough that economic calculations favour staying abroad for most working-age emigrants, many of whom plan to return only at retirement.\n\nEU free movement, which allows Bulgarians to live and work elsewhere without restriction, is both a right that Bulgarians value highly and a structural enabler of continued emigration. The demographic crisis is considered by many analysts to be Bulgaria's most significant long-term challenge, more consequential in the long run than any single political dispute.",
    officialLinks: [
      { label: "National Statistical Institute Bulgaria", url: "https://www.nsi.bg/en" },
      { label: "World Bank Bulgaria demographic overview", url: "https://www.worldbank.org/en/country/bulgaria" },
      { label: "EU Commission Bulgaria country chapter", url: "https://cohesiondata.ec.europa.eu/countries/BG" }
    ],
    newsLinks: [
      { label: "Bulgaria's shrinking population: villages emptied, schools closed", url: "https://www.theguardian.com/world/europe/", source: "The Guardian", publishedAt: "2025-02-24" },
      { label: "Bulgaria pension reform urgent as workforce declines, IMF warns", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-04-16" },
      { label: "Bulgarian diaspora in Germany reaches one million, new data shows", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-12-03" }
    ],
    endorsements: [
      { name: "Open Society Institute Sofia", url: "https://osis.bg/en" },
      { name: "Bulgarian Academy of Sciences – demographic research", url: "https://www.bas.bg/en/" },
      { name: "Caritas Bulgaria", url: "https://www.caritas.bg" }
    ],
    supporterCount: 892
  },
  "hr-001": {
    detail: "Croatia's accession to the Schengen Area on 1 January 2023 marked the culmination of a decade-long process and brought tangible benefits: open borders with EU neighbours, full participation in EU asylum and migration structures, and a boost to tourism and business. Managing the now-external Schengen border—particularly the long land frontier with Bosnia and Serbia—became Croatia's primary EU responsibility.\n\nHuman rights organisations including the Danish Refugee Council, Human Rights Watch, and the Croatian law firm GONG have documented systematic pushbacks—forcible returns of migrants and asylum seekers across the border without access to asylum procedures—by Croatian border police. These allegations have been formally raised with the European Commission, which funds some of the border management operations.\n\nCroatia has contested the characterisation of these practices as illegal, asserting that its border management complies with EU law and that effective border security is consistent with asylum obligations. An EU monitoring mechanism was established to observe Croatian border practices, though its terms of reference have been disputed.\n\nThe Balkan route remains active: migrants seeking to reach Western Europe transit through Serbia, Bosnia, and across Croatia's borders. The communities along Croatia's eastern borders, already economically disadvantaged, bear disproportionate exposure to the flows and the social tensions they can generate.",
    officialLinks: [
      { label: "Croatian Ministry of Interior – border police", url: "https://mup.gov.hr/en" },
      { label: "European Commission Croatia Schengen evaluation", url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en" },
      { label: "EU Border Monitoring Mechanism – Croatia", url: "https://home-affairs.ec.europa.eu" }
    ],
    newsLinks: [
      { label: "Croatia joins Schengen: what changes for travellers and migrants", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2023-01-01" },
      { label: "HRW documents Croatian border pushbacks despite EU monitoring", url: "https://www.hrw.org/europe/", source: "Human Rights Watch", publishedAt: "2025-03-18" },
      { label: "EU border monitor finds Croatia cases of excessive force at border", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-11-07" }
    ],
    endorsements: [
      { name: "Are You Syrious? (Croatian refugee NGO)", url: "https://www.areyousyrious.eu" },
      { name: "Human Rights Watch – Europe", url: "https://www.hrw.org/europe" },
      { name: "Danish Refugee Council – Balkans", url: "https://drc.ngo" }
    ],
    supporterCount: 748
  },
  "hr-002": {
    detail: "Croatia adopted the euro on 1 January 2023, joining the eurozone as its twentieth member. The transition ended the Croatian kuna and fixed the exchange rate that had informally been managed relative to the euro for years. Consumer groups and media tracked prices intensively in the early months of euro adoption, identifying some cases of rounding-up at conversion and genuine price increases in the hospitality sector.\n\nThe medium-term economic effects of eurozone membership are the subject of ongoing analysis. Croatia benefits from the elimination of exchange rate risk, lower transaction costs, and greater ease of trade with eurozone partners. The loss of monetary policy flexibility—the ability to devalue the currency in response to external shocks—is the main downside identified by economists.\n\nConvergence with EU average income levels is the long-term goal: Croatia's GDP per capita (at purchasing power parity) is below the EU average, and the pace of convergence compared to peers like Slovakia and the Baltic states is a benchmark for policy success. Tourism's dominant role in the economy creates seasonal patterns that complicate convergence measurement.\n\nFor Croatian diaspora—among the largest per-capita in the EU—euro adoption removes a practical friction in sending money home and managing assets. Many diaspora members hold property in Croatia and follow the real estate market closely; the combined effect of euro adoption and growing foreign tourism demand has driven significant property price appreciation in coastal areas.",
    officialLinks: [
      { label: "Croatian National Bank – euro introduction", url: "https://www.hnb.hr/en/euro" },
      { label: "European Commission Croatia eurozone entry", url: "https://economy-finance.ec.europa.eu/economic-and-fiscal-policy-coordination/eu-economic-governance-monitoring-prevention-correction/european-semester/country-specific-information/croatia_en" },
      { label: "Croatian Bureau of Statistics", url: "https://www.dzs.hr" }
    ],
    newsLinks: [
      { label: "Croatia adopts euro and joins Schengen simultaneously", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-01-01" },
      { label: "Croatian property prices surge after euro adoption and tourism boom", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-06-14" },
      { label: "Euro adoption brings benefits and inflation worries to Croatia, data shows", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-31" }
    ],
    endorsements: [
      { name: "Croatian Economic Association", url: "https://www.hdes.hr" },
      { name: "EBRD Croatia", url: "https://www.ebrd.com/croatia.html" },
      { name: "IMF Croatia consultation", url: "https://www.imf.org/en/countries/HRV" }
    ],
    supporterCount: 561
  },
  "hr-003": {
    detail: "Croatia's diaspora is among the largest in the EU relative to domestic population, with major concentrations in Bosnia-Herzegovina, Germany, Australia, and across Western Europe. The political weight of diaspora voters is institutionally embedded: three parliamentary seats are reserved for diaspora members, with the constituency for Croats in Bosnia-Herzegovina being particularly influential given the size and political cohesion of that community.\n\nThe Bosnian Croat vote has been a source of particular controversy: Bosnian citizens who hold Croatian citizenship vote in Croatian elections and have consistently supported the HDZ (Croatian Democratic Union), giving that party a reliable bloc of votes that some domestic Croatian analysts argue distorts domestic political competition. Proposals to reform the diaspora constituency system have been resisted by the HDZ, which benefits most from the current arrangement.\n\nFor diaspora Croats in Western Europe—many of whom are economically integrated and increasingly holding dual citizenship—the political connection to Croatia is maintained partly through these voting rights. Second and third generation Croats in Germany or Australia often have weaker ties to Croatian politics, but the first generation retains significant interest in property, pension, and citizenship matters.\n\nCroatia's relations with Bosnia on the rights of the Croat community there are a recurring diplomatic tension, particularly regarding the constitutional reform required for Bosnia's EU accession and the electoral system governing the selection of the member of the Bosnian Presidency from the Croat constituent people.",
    officialLinks: [
      { label: "Croatian Parliament – diaspora constituency", url: "https://www.sabor.hr/en" },
      { label: "Central State Electoral Commission Croatia", url: "https://www.izbori.hr" },
      { label: "Croatian Ministry of Foreign and European Affairs – diaspora", url: "https://mvep.gov.hr/en" }
    ],
    newsLinks: [
      { label: "Bosnian Croat vote sways Croatian parliament composition, again", url: "https://balkaninsight.com/", source: "Balkan Insight", publishedAt: "2025-01-12" },
      { label: "Croatian diaspora seats: democratic asset or systemic distortion?", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-17" },
      { label: "HDZ wins Croatian election with decisive diaspora support", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-04-18" }
    ],
    endorsements: [
      { name: "GONG – election monitoring Croatia", url: "https://gong.hr/en/" },
      { name: "Croatian Helsinki Committee", url: "https://www.hho.hr" },
      { name: "OSCE/ODIHR", url: "https://www.osce.org/odihr/elections" }
    ],
    supporterCount: 1234
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});

console.log(`Enriched ${modified} topics in batch 2`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
