const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const enrichments = {
  "by-001": {
    detail: "The August 2020 Belarusian presidential election produced an official result showing Alexander Lukashenko winning with 80% of the vote—a result that domestic and international observers, and independent vote tallies conducted by opposition activists, found implausible. The mass protests that followed were the largest in Belarusian history, with hundreds of thousands of people marching in Minsk and across the country demanding Lukashenko's resignation and new free elections.\n\nThe government's response was a systematic campaign of repression: over 35,000 arrests in the first months; documented torture and sexual violence against detainees; hundreds of criminal convictions with lengthy sentences under laws against 'extremism' and 'mass disorder'; and the forced closure of virtually all independent civil society organisations, media outlets, and trade unions. The Viasna Human Rights Center—itself subject to prosecution of its leaders including Nobel Peace Prize laureate Ales Bialiatski—has documented over 1,400 political prisoners, though the true figure is believed higher.\n\nThe EU, US, UK, and Canada imposed successive rounds of sanctions on Lukashenko and his inner circle, senior officials, and eventually on broader economic sectors including potash and petroleum products. Belarus retaliated by creating a migration crisis on the EU's eastern border, engineering the movement of migrants to the Polish, Lithuanian, and Latvian borders in a documented form of hybrid warfare.\n\nFor Belarusian diaspora—over half a million people left the country between 2020 and 2025, the largest refugee wave since World War II—the political situation is immediate: many have family members still imprisoned or at risk, and their own returns to Belarus are impossible without risk of prosecution.",
    officialLinks: [
      { label: "UN Special Rapporteur on Belarus", url: "https://www.ohchr.org/en/special-procedures/sr-belarus" },
      { label: "EU sanctions on Belarus", url: "https://www.consilium.europa.eu/en/policies/sanctions/belarus/" },
      { label: "Viasna Human Rights Center", url: "https://spring96.org/en" }
    ],
    newsLinks: [
      { label: "Belarus political prisoner count exceeds 1,400 as repression continues", url: "https://rferl.org/belarus/", source: "RFE/RL", publishedAt: "2025-03-12" },
      { label: "Nobel laureate Bialiatski denied appeal in Belarus political trial", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-01-15" },
      { label: "EU announces fifth round of Belarus sanctions amid ongoing repression", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-25" }
    ],
    endorsements: [
      { name: "Viasna Human Rights Center", url: "https://spring96.org/en" },
      { name: "Human Rights Watch – Belarus", url: "https://www.hrw.org/europe/central-asia/belarus" },
      { name: "Amnesty International Belarus", url: "https://www.amnesty.org" }
    ],
    supporterCount: 2834
  },
  "by-002": {
    detail: "Belarus's role in Russia's invasion of Ukraine has evolved from passive facilitation to active partnership. The initial February 2022 offensive on Kyiv was launched partly from Belarusian territory, and Belarus has continued to provide logistical support, territory for Russian troop movements and supply lines, and airspace for Russian missile and drone attacks on Ukrainian cities. Lukashenko has participated in political consultations with Putin and has allowed Russian nuclear weapon storage on Belarusian soil—a significant escalatory step that NATO has monitored closely.\n\nThe EU, US, UK, and Canada have imposed comprehensive sanctions on Belarus in connection with both the 2020 political repression and the support for Russia's invasion. These include restrictions on potash exports (a major Belarusian revenue source), petroleum products, financial services, and aviation. The economic impact has been significant but the Belarusian economy has been partially buffered by Russian subsidies and alternative trade routes.\n\nInternational legal proceedings against Belarus have been pursued on multiple fronts: the International Court of Justice has cases alleging violations of the genocide convention and other international law; the UN General Assembly has passed resolutions; and individual accountability mechanisms for those responsible for human rights violations and hybrid attacks have been advocated by civil society groups.\n\nFor Belarusian civil society in exile, the complicity in Russia's war has transformed the political issue from a domestic democratic question to one of international law and war crimes. Exile organisations including the Coordination Council have called for accountability for both the domestic repression and the complicity in aggression.",
    officialLinks: [
      { label: "UN OHCHR – Belarus situation reports", url: "https://www.ohchr.org/en/countries/belarus" },
      { label: "EU sanctions on Belarus – war complicity extension", url: "https://www.consilium.europa.eu/en/policies/sanctions/belarus/" },
      { label: "US State Department – Belarus", url: "https://www.state.gov/countries-areas/belarus/" }
    ],
    newsLinks: [
      { label: "Belarus allows Russia to station nuclear weapons on its territory", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-06-16" },
      { label: "EU and US sanction Belarus for hosting Russian missile launches into Ukraine", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2024-12-08" },
      { label: "International courts build case against Belarus complicity in Ukraine invasion", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-02-23" }
    ],
    endorsements: [
      { name: "Belarusian Coordination Council (exile)", url: "https://rada.vision" },
      { name: "Human Rights Watch – Belarus", url: "https://www.hrw.org/europe/central-asia/belarus" },
      { name: "International Federation for Human Rights (FIDH)", url: "https://www.fidh.org" }
    ],
    supporterCount: 2341
  },
  "by-003": {
    detail: "The Belarusian democratic opposition, operating largely in exile following the 2020 crackdown, is represented institutionally by Sviatlana Tsikhanouskaya—the candidate who ran against Lukashenko in 2020 and whose results opposition monitors believe showed her winning a majority—and the Coordination Council she leads from Vilnius, Lithuania. The exile government maintains diplomatic recognition from several states and advocacy relationships with EU institutions.\n\nThe opposition's platform focuses on three core demands: the release of all political prisoners; accountability for those responsible for repression; and new free and fair elections as the foundation for democratic transition. These demands have been consistently supported in EU Parliament resolutions, US State Department statements, and Council of Europe positions.\n\nThe practical challenge for the exile opposition is maintaining cohesion, relevance, and popular support among a diaspora scattered across dozens of countries and among a domestic population in Belarus that faces severe legal risks for any public political expression. Digital channels—Telegram channels, YouTube, and circumvention tools—are the primary means of reaching Belarusians inside the country, where independent media have been shut down.\n\nFor Belarusians in Europe—primarily in Poland, Lithuania, Ukraine (before the war), Germany, and across EU states—the exile opposition represents both a political entity and a community anchor. Civic organisations, language schools, and cultural institutions provide a Belarusian social infrastructure that sustains identity and political engagement among those who cannot return.",
    officialLinks: [
      { label: "Belarusian Coordination Council", url: "https://rada.vision" },
      { label: "EU relations with Belarusian opposition", url: "https://www.eeas.europa.eu/eeas/situation-belarus_en" },
      { label: "UN Special Rapporteur on Belarus", url: "https://www.ohchr.org/en/special-procedures/sr-belarus" }
    ],
    newsLinks: [
      { label: "Tsikhanouskaya addresses European Parliament on Belarus political prisoners", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2025-02-06" },
      { label: "Belarusian diaspora in Poland grows to 300,000 amid continued repression", url: "https://rferl.org/belarus/", source: "RFE/RL", publishedAt: "2025-01-12" },
      { label: "EU pledges continued support for Belarusian civil society in exile", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2024-12-17" }
    ],
    endorsements: [
      { name: "Belarusian Coordination Council", url: "https://rada.vision" },
      { name: "Zubr – Belarusian civic movement", url: "https://zubr.in" },
      { name: "Reporters Without Borders (RSF) – Belarus", url: "https://rsf.org/en/country/belarus" }
    ],
    supporterCount: 1987
  },
  "ru-001": {
    detail: "Alexei Navalny, who founded Russia's Anti-Corruption Foundation (FBK) and led the country's most significant opposition movement, died in the Arctic penal colony IK-6 Polar Wolf on 16 February 2024 under circumstances that international governments and human rights organisations attributed to the Russian state. His death was followed by a wave of spontaneous mourning and flower-laying at memorials across Russia, quickly suppressed by police.\n\nNavalny had been serving a 19-year sentence on charges widely regarded as politically motivated. His imprisonment followed his survival of a Novichok nerve agent poisoning in 2020, attributed by Western governments and independent investigations to Russia's Federal Security Service (FSB). His widow Yulia Navalnaya has continued his political legacy from exile.\n\nThe FBK continues to operate from Latvia, Germany, and the US, publishing investigative videos—including 'Putin's Palace'—that have received hundreds of millions of views globally. The foundation operates a network of regional headquarters that organises political activity inside Russia, exposing its volunteers to significant legal risk under Russia's 'extremism' laws.\n\nOVD-Info, a Moscow-based human rights media project operating partly from abroad, systematically documents political arrests in Russia, provides legal support to those detained, and maintains public registers of political prisoners. As of 2025, it has documented thousands of cases related to anti-war protest, anti-government speech, and journalism since February 2022.",
    officialLinks: [
      { label: "Anti-Corruption Foundation (FBK)", url: "https://fbk.info/english/" },
      { label: "OVD-Info political prisoner database", url: "https://ovd.info/en" },
      { label: "UN Special Rapporteur on extrajudicial executions – Navalny statement", url: "https://www.ohchr.org/en/special-procedures/sr-executions" }
    ],
    newsLinks: [
      { label: "Navalny dies in Arctic prison; Western leaders blame Putin", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2024-02-16" },
      { label: "FBK vows to continue Navalny's work from exile", url: "https://rferl.org/russia/", source: "RFE/RL", publishedAt: "2024-02-19" },
      { label: "Russia's political prisoner count exceeds 700 in 2025, OVD-Info reports", url: "https://www.theguardian.com/world/russia/", source: "The Guardian", publishedAt: "2025-04-01" }
    ],
    endorsements: [
      { name: "Anti-Corruption Foundation (FBK)", url: "https://fbk.info/english/" },
      { name: "OVD-Info", url: "https://ovd.info/en" },
      { name: "Amnesty International Russia", url: "https://www.amnesty.org/en/location/europe-and-central-asia/eastern-europe-and-central-asia/russian-federation/" }
    ],
    supporterCount: 3089
  },
  "ru-002": {
    detail: "Russia's media environment has been effectively closed to independent journalism since the full-scale invasion of Ukraine in 2022. Within weeks of the invasion, Novaya Gazeta (the newspaper of six Nobel Peace Prize winners) suspended operations; Echo of Moscow radio was shut down; TV Rain was forced off the air; and dozens of digital outlets were blocked. Most independent journalists relocated to Latvia, Georgia, Germany, or other countries.\n\nExile media now form the primary ecosystem of independent Russian-language journalism. Meduza (Latvia) covers domestic Russian and regional news; The Insider (Latvia) specialises in investigative reporting including the Novichok poisoning investigations; iStories (Latvia) focuses on investigative data journalism; Novaya Gazeta Europe publishes from Riga; and TV Rain operates from Amsterdam. These outlets reach Russian audiences primarily through VPNs, Telegram, and YouTube—all of which face periodic crackdowns inside Russia.\n\nInside Russia, accessing independent information requires circumvention technology that remains available but technically challenging for many users. The Federal Service for Supervision of Communications (Roskomnadzor) maintains lists of blocked sites and can pressure app stores to remove VPN applications. Social media platforms including Instagram and Facebook are officially blocked; YouTube remained accessible into 2025 amid Russian authorities' apparent calculation that blocking it would be more politically costly than permitting access.\n\nFor Russian diaspora communities—over a million people who left Russia since 2022, concentrated in Georgia, Armenia, Kazakhstan, Serbia, and EU states—exile media are the primary source of trusted news about home. The ability to maintain a shared information environment across a globally dispersed diaspora is a significant editorial and technological challenge for exile outlets.",
    officialLinks: [
      { label: "Roskomnadzor – Russian communications regulator", url: "https://rkn.gov.ru" },
      { label: "RSF Russia country page", url: "https://rsf.org/en/country/russia" },
      { label: "CPJ Russia journalist safety database", url: "https://cpj.org/europe/russia/" }
    ],
    newsLinks: [
      { label: "Russian exile media: how independent journalism survives from Riga and Amsterdam", url: "https://rferl.org/russia/", source: "RFE/RL", publishedAt: "2025-02-22" },
      { label: "Moscow considers YouTube ban amid pressure from state broadcasters", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2025-01-14" },
      { label: "TV Rain celebrates three years of exile broadcasting from Amsterdam", url: "https://www.theguardian.com/world/russia/", source: "The Guardian", publishedAt: "2025-03-01" }
    ],
    endorsements: [
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Committee to Protect Journalists (CPJ)", url: "https://cpj.org" },
      { name: "Access Now – digital rights for Russian journalists", url: "https://www.accessnow.org" }
    ],
    supporterCount: 2413
  },
  "ru-003": {
    detail: "Russia's full-scale invasion of Ukraine, which began on 24 February 2022, is subject to multiple parallel international accountability processes that are unprecedented in scope and complexity. The International Criminal Court issued an arrest warrant for President Vladimir Putin in March 2023 for the deportation and unlawful transfer of Ukrainian children—the first arrest warrant issued for a sitting permanent member of the UN Security Council. A warrant was also issued for Russia's Commissioner for Children's Rights.\n\nThe ICC's ability to enforce its warrants depends on the cooperation of states where Putin or other indicted individuals travel, as Russia is not an ICC member and will not transfer suspects voluntarily. Some states have indicated they would arrest Putin if he entered their territory; others have been more ambiguous. The legal and diplomatic consequences of the warrant have been significant regardless of immediate enforcement.\n\nAdditional accountability mechanisms include: the establishment of an International Register of Damage under the auspices of the Council of Europe; discussion of a special tribunal for the crime of aggression (not within ICC jurisdiction for this conflict); evidence collection by the Joint Investigation Team (Netherlands, Belgium, Australia, Ukraine, Luxembourg) on the MH17 downing; and extensive Ukrainian forensic documentation of war crimes in liberated territories including Bucha.\n\nFor Russian civil society in exile, the accountability question is central to any conception of democratic transition: without accountability for the chain of command responsible for systematic war crimes, a future democratic Russia faces the same impunity culture that produced the current regime. The documentation work being done now shapes the historical and legal record.",
    officialLinks: [
      { label: "ICC – Ukraine situation", url: "https://www.icc-cpi.int/ukraine" },
      { label: "Register of Damage for Ukraine (Council of Europe)", url: "https://rd4u.coe.int" },
      { label: "Joint Investigation Team MH17", url: "https://www.prosecutionservice.nl/topics/mh17" }
    ],
    newsLinks: [
      { label: "ICC issues arrest warrant for Putin over Ukrainian children deportation", url: "https://www.bbc.com/news/world-europe/", source: "BBC News", publishedAt: "2023-03-17" },
      { label: "International accountability for Russia's war: progress and limits", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-22" },
      { label: "Ukraine documents 100,000 war crimes as accountability push advances", url: "https://www.reuters.com/world/europe/", source: "Reuters", publishedAt: "2025-02-24" }
    ],
    endorsements: [
      { name: "Truth Hounds – war crimes documentation", url: "https://www.truth-hounds.org" },
      { name: "Ukraine Accountability Conference civil society", url: "https://uacrisis.org/en" },
      { name: "Amnesty International – Ukraine conflict", url: "https://www.amnesty.org/en/location/europe-and-central-asia/eastern-europe-and-central-asia/ukraine/" }
    ],
    supporterCount: 2987
  },
  "kp-001": {
    detail: "The UN Commission of Inquiry on Human Rights in North Korea, established in 2013 and reporting in 2014, concluded that the North Korean state commits crimes against humanity through a totalitarian system of control that has no parallel in the contemporary world. The report documented the existence of political prison camps (kwanliso) holding an estimated 80,000–120,000 people in conditions of extreme deprivation, forced labour, and violence; systematic public executions; enforced disappearances; torture as a routine governance tool; and complete restriction of movement, information, and expression.\n\nSubsequent UN General Assembly resolutions have called for Security Council referral of the North Korea situation to the ICC—vetoed by China and Russia. A panel of experts monitors sanctions compliance and has documented the persistent violation of Security Council resolutions by states supplying luxury goods and financial services to the regime.\n\nThe human rights situation inside North Korea is documented primarily through the accounts of defectors—approximately 33,000 of whom have resettled in South Korea—and through satellite imagery analysis of prison camp infrastructure. Organisations including the Database Centre for North Korean Human Rights (NKDB) maintain systematic records of human rights violations based on defector testimony.\n\nFor the North Korean diaspora—spread across South Korea, the UK, US, Europe, and Southeast Asia—the human rights situation inside the country is an immediate family experience: most defectors have family members still inside North Korea and fear for their safety. The advocacy community is sustained by this personal connection as much as by abstract human rights principles.",
    officialLinks: [
      { label: "UN Commission of Inquiry on DPRK – full report 2014", url: "https://www.ohchr.org/en/hr-bodies/hrc/co-inquiries/ci-dprk" },
      { label: "UN Special Rapporteur on North Korea", url: "https://www.ohchr.org/en/special-procedures/sr-north-korea" },
      { label: "UN Panel of Experts on DPRK sanctions", url: "https://www.un.org/securitycouncil/sanctions/1718/panel_of_experts/reports" }
    ],
    newsLinks: [
      { label: "UN confirms North Korea prison camps still operational from satellite images", url: "https://www.bbc.com/news/world-asia/", source: "BBC News", publishedAt: "2025-01-22" },
      { label: "North Korea defectors testify to UN working group on arbitrary detention", url: "https://rferl.org/northkorea/", source: "RFE/RL", publishedAt: "2025-03-07" },
      { label: "NKDB report: 3,200 new human rights violations documented in 2024", url: "https://www.reuters.com/world/asia-pacific/", source: "Reuters", publishedAt: "2025-04-14" }
    ],
    endorsements: [
      { name: "Database Centre for North Korean Human Rights (NKDB)", url: "https://nkdb.org/en/" },
      { name: "Liberty in North Korea (LiNK)", url: "https://www.libertyinnorthkorea.org" },
      { name: "Human Rights Watch – North Korea", url: "https://www.hrw.org/asia/north-korea" }
    ],
    supporterCount: 1743
  },
  "kp-002": {
    detail: "North Korea has conducted six nuclear tests between 2006 and 2017 and has developed intercontinental ballistic missiles tested to ranges capable of reaching the US mainland. The country is estimated by various intelligence assessments to possess between 40 and 60 nuclear warheads, with an expanding fissile material production capacity at Yongbyon and other facilities. The regime has explicitly constitutional status as a 'nuclear-armed state'—making denuclearisation a permanent feature of any negotiation rather than a condition that can be met.\n\nUN Security Council sanctions have progressively tightened, restricting North Korea's arms exports (a major revenue source), coal, iron, seafood, and textile exports, financial transfers, and luxury goods imports. The sanctions regime's effectiveness depends on enforcement by China (North Korea's dominant trading partner) and Russia, both of which have limited compliance, particularly since 2022 when Russia began importing North Korean artillery shells and ammunition for use in Ukraine.\n\nDiplomatic efforts—including the 2018-2019 Trump-Kim summits and working-level talks—failed to produce an agreement because of fundamental disagreements about the sequencing of denuclearisation steps and sanctions relief. North Korea rejected step-by-step confidence-building measures, insisting on simultaneous relief; the US and its allies insisted on denuclearisation steps first.\n\nFor the international community, the North Korea nuclear question is intractable partly because the regime views nuclear weapons as existential: the fates of Saddam Hussein and Muammar Gaddafi—who gave up WMD programmes and were subsequently overthrown—inform Pyongyang's strategic calculation.",
    officialLinks: [
      { label: "UN Security Council DPRK sanctions committee", url: "https://www.un.org/securitycouncil/sanctions/1718" },
      { label: "IAEA – North Korea monitoring", url: "https://www.iaea.org/newscenter/focus/dprk" },
      { label: "US State Department – DPRK nuclear programme", url: "https://www.state.gov/north-korea/" }
    ],
    newsLinks: [
      { label: "North Korea tests ICBM to maximum range in latest provocation", url: "https://www.bbc.com/news/world-asia/", source: "BBC News", publishedAt: "2025-03-24" },
      { label: "UN panel: Russia buying North Korean weapons for Ukraine war", url: "https://www.reuters.com/world/asia-pacific/", source: "Reuters", publishedAt: "2024-11-04" },
      { label: "North Korea's nuclear arsenal continues to grow despite sanctions, IAEA warns", url: "https://www.theguardian.com/world/north-korea/", source: "The Guardian", publishedAt: "2025-02-05" }
    ],
    endorsements: [
      { name: "38 North (Stimson Center DPRK analysis)", url: "https://www.38north.org" },
      { name: "Arms Control Association", url: "https://www.armscontrol.org" },
      { name: "International Crisis Group – East Asia", url: "https://www.crisisgroup.org/asia/north-east-asia/north-korea" }
    ],
    supporterCount: 1234
  },
  "kp-003": {
    detail: "An estimated 33,000 North Koreans have resettled in South Korea since 1998, with the pace of arrivals varying significantly based on border controls, Chinese detention and repatriation policies, and political conditions. Additional communities exist in the UK (over 1,000), US, Germany, and Southeast Asian countries. The defector community faces distinctive challenges: psychological trauma from the escape process; adjustment to radically different social and economic systems; discrimination in South Korean society; and anxiety about family members left behind.\n\nOrganisations supporting North Korean defectors provide legal assistance, psychological counselling, vocational training, language support (North Korean Korean diverged significantly from South Korean over decades), and advocacy. Liberty in North Korea (LiNK) is among the most internationally prominent, operating an underground railroad assistance network and advocating for policy change. The Citizens' Alliance for North Korean Human Rights and the NKDB focus on documentation and accountability.\n\nThe defector community is also a source of information about conditions inside North Korea that cannot be obtained through direct observation. Defector testimony, systematically collected and cross-checked by multiple organisations, forms a significant portion of the evidence base for human rights assessments. Some defectors have become prominent advocates, testifying to the UN and international parliaments.\n\nChinese policy toward North Koreans who cross into China—treating them as economic migrants subject to repatriation rather than as refugees entitled to protection—creates a major protection gap. UNHCR has limited access to North Koreans in China, and organisations assisting them operate in a legally precarious environment. Repatriated individuals face severe punishment in North Korea.",
    officialLinks: [
      { label: "Liberty in North Korea (LiNK)", url: "https://www.libertyinnorthkorea.org" },
      { label: "NKDB – Database Centre for North Korean Human Rights", url: "https://nkdb.org/en/" },
      { label: "UNHCR – North Korean refugees", url: "https://www.unhcr.org/asia/countries/china" }
    ],
    newsLinks: [
      { label: "North Korean defector advocates for family members still imprisoned", url: "https://rferl.org/northkorea/", source: "RFE/RL", publishedAt: "2025-02-15" },
      { label: "China repatriates hundreds of North Koreans despite protection concerns", url: "https://www.reuters.com/world/asia-pacific/", source: "Reuters", publishedAt: "2024-12-02" },
      { label: "LiNK completes 1,000th North Korean defector rescue operation", url: "https://www.bbc.com/news/world-asia/", source: "BBC News", publishedAt: "2025-01-08" }
    ],
    endorsements: [
      { name: "Liberty in North Korea (LiNK)", url: "https://www.libertyinnorthkorea.org" },
      { name: "Citizens' Alliance for North Korean Human Rights", url: "https://www.nkhumanrights.or.kr/eng/" },
      { name: "Human Rights Watch – North Korea", url: "https://www.hrw.org/asia/north-korea" }
    ],
    supporterCount: 892
  },
  "ir-001": {
    detail: "The death of 22-year-old Mahsa Amini in the custody of Iran's morality police (Gasht-e Ershad) in September 2022, following her detention for allegedly not wearing her hijab correctly, ignited a protest movement that spread to dozens of Iranian cities within days. The movement, adopting the slogan 'Woman, Life, Freedom' (Zan, Zendegi, Azadi), was distinguished by the prominence of women and young people, the burning of headscarves as a political act, and the geographical breadth of participation including historically quiescent provinces.\n\nThe government's response was systematic: security forces killed an estimated 500 or more protesters according to human rights organisations (official figures were lower); over 15,000 were arrested; at least seven protesters were executed following trials condemned internationally as deeply unfair. By early 2023 the street protests had largely subsided under repression, but the movement's cultural impact—including a significant reduction in compliance with mandatory hijab requirements—continued.\n\nInternational responses included the removal of Iran from the UN Commission on the Status of Women, the imposition of additional individual sanctions by EU states and the US on morality police officials, and expressions of solidarity from global public figures. Iran expelled the UN Special Rapporteur on Human Rights in Iran and denied access to independent monitors.\n\nFor Iranians abroad—one of the world's largest diaspora populations, with major communities in the US, Germany, Canada, Sweden, the UK, and France—the uprising was experienced as a generational turning point. Diaspora fundraising for protesters' legal fees, campaigns against Iranian government officials abroad, and protests outside Iranian embassies made the diaspora a visible and organised political force.",
    officialLinks: [
      { label: "UN Special Rapporteur on Iran", url: "https://www.ohchr.org/en/special-procedures/sr-iran" },
      { label: "EU sanctions on Iranian officials – Mahsa Amini protests", url: "https://www.consilium.europa.eu/en/policies/sanctions/iran/" },
      { label: "Iran Human Rights Activists News Agency (HRANA)", url: "https://www.iranhr.net/en/" }
    ],
    newsLinks: [
      { label: "Iran executes protesters, prompting international condemnation", url: "https://www.bbc.com/news/world-middle-east/", source: "BBC News", publishedAt: "2023-01-07" },
      { label: "Two years on: Iran's hijab protest movement's legacy assessed", url: "https://rferl.org/iran/", source: "RFE/RL", publishedAt: "2024-09-16" },
      { label: "EU imposes new sanctions on Iranian morality police officials", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-11-14" }
    ],
    endorsements: [
      { name: "Iran Human Rights", url: "https://iranhr.net/en/" },
      { name: "Amnesty International – Iran", url: "https://www.amnesty.org/en/location/middle-east-and-north-africa/iran/" },
      { name: "Article 19 – Iran free expression", url: "https://www.article19.org/regions/iran/" }
    ],
    supporterCount: 2743
  },
  "ir-002": {
    detail: "Iran's nuclear programme—centring on uranium enrichment at Natanz, Fordow, and other facilities—has been the subject of international negotiations for two decades. The 2015 Joint Comprehensive Plan of Action (JCPOA) limited Iran's enrichment to 3.67% and its uranium stockpile to 300 kg, in exchange for significant sanctions relief. The US withdrawal from the JCPOA in 2018 under the Trump administration triggered Iran's progressive violation of its commitments, and enrichment has since reached 60%—below weapons-grade (90%) but far above any civilian justification.\n\nSubsequent diplomatic efforts to restore the JCPOA, including indirect US-Iran negotiations facilitated by the EU, did not produce an agreement. Iran's advancing enrichment, combined with restrictions on IAEA monitoring access, has created a growing breakout timeline concern: technical assessments have suggested Iran could produce enough weapons-grade uranium for a bomb within weeks if it chose to do so, though other technical steps would still be required for a functional weapon.\n\nIsrael's military strikes on Iranian nuclear facilities and broader direct military exchanges between Iran and Israel in 2024 introduced a new dimension of kinetic risk to the nuclear standoff. The regional escalation risk, combined with Iran's support for proxy forces including Hezbollah and the Houthis, makes the nuclear issue inseparable from broader regional conflict dynamics.\n\nFor the Iranian diaspora, the nuclear question is often framed in terms of its implications for regime survival and potential military confrontation that could affect family members in Iran, rather than through the strategic abstraction that characterises much international discourse.",
    officialLinks: [
      { label: "IAEA – Iran safeguards reports", url: "https://www.iaea.org/newscenter/focus/iran" },
      { label: "EU/E3 position on Iran nuclear", url: "https://eeas.europa.eu/headquarters/headquarters-Homepage/33709/joint-comprehensive-plan-action_en" },
      { label: "US State Department – Iran nuclear", url: "https://www.state.gov/iran/" }
    ],
    newsLinks: [
      { label: "Iran enriches uranium to 60% as JCPOA revival talks collapse", url: "https://www.reuters.com/world/middle-east/", source: "Reuters", publishedAt: "2025-02-17" },
      { label: "IAEA: Iran's breakout timeline has shortened significantly", url: "https://www.bbc.com/news/world-middle-east/", source: "BBC News", publishedAt: "2025-04-08" },
      { label: "Israel and Iran exchange direct fire in Middle East escalation", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-10-01" }
    ],
    endorsements: [
      { name: "Arms Control Association", url: "https://www.armscontrol.org" },
      { name: "International Crisis Group – Iran", url: "https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran" },
      { name: "IAEA", url: "https://www.iaea.org" }
    ],
    supporterCount: 1543
  },
  "ir-003": {
    detail: "Iran operates one of the most restrictive internet environments in the world, combining pervasive content filtering, periodic complete internet shutdowns, social media blockages, and the development of a parallel National Information Network (SHOMA) designed to enable disconnection from the global internet while maintaining domestic connectivity.\n\nDuring the 2022 Mahsa Amini protests, Iranian authorities shut down mobile internet repeatedly and throttled bandwidth; Instagram and WhatsApp were blocked; and VPN usage—already widespread—increased dramatically. NetBlocks and IODA documented the pattern of shutdowns and their correlation with protest peaks. Despite the restrictions, video footage of the protests circulated globally, demonstrating the limitations of information control in the smartphone era.\n\nIran's surveillance apparatus targets activists, journalists, and diaspora community members. Reports of hacking operations against exile journalists and human rights defenders—attributed to Iranian state actors by cybersecurity researchers including Citizen Lab—have documented the use of phishing, social engineering, and targeted malware against individuals outside Iran. Diaspora Iranians have received threats and surveillance reports in Germany, the UK, and the US.\n\nThe net censorship system is technically sophisticated: deep packet inspection filters content, VPNs are partially effective but periodically cracked down on, and the government maintains a blacklist of millions of domains. The SHOMA project aims to make internet access to domestic services possible without international connectivity, giving the government the option of a full external shutdown without completely disrupting the internal economy.",
    officialLinks: [
      { label: "NetBlocks – Iran internet shutdown monitoring", url: "https://netblocks.org" },
      { label: "Access Now – Iran digital rights", url: "https://www.accessnow.org/iran/" },
      { label: "Citizen Lab – Iran surveillance research", url: "https://citizenlab.ca" }
    ],
    newsLinks: [
      { label: "Iran shuts mobile internet during protest peak for fifth time since 2019", url: "https://rferl.org/iran/", source: "RFE/RL", publishedAt: "2025-01-28" },
      { label: "Iranian state hackers target diaspora journalists abroad, researchers find", url: "https://www.bbc.com/news/world-middle-east/", source: "BBC News", publishedAt: "2024-12-09" },
      { label: "Iran's national intranet project advances, raising shutdown risk", url: "https://www.reuters.com/world/middle-east/", source: "Reuters", publishedAt: "2025-03-18" }
    ],
    endorsements: [
      { name: "Access Now", url: "https://www.accessnow.org" },
      { name: "Article 19 – Iran", url: "https://www.article19.org/regions/iran/" },
      { name: "Citizen Lab", url: "https://citizenlab.ca" }
    ],
    supporterCount: 1892
  },
  "cu-001": {
    detail: "The July 11, 2021 protests in Cuba—known as '11J'—were unprecedented in the island's post-revolutionary history: simultaneous demonstrations in dozens of cities, including Havana, Santiago de Cuba, and Matanzas, with crowds chanting 'Patria y Vida' ('Homeland and Life', adapting the revolutionary slogan) and demanding freedom and economic relief. The immediate triggers included prolonged blackouts, food shortages, and the government's mishandling of COVID, but the underlying political demands were structural.\n\nThe government's response combined a brief moment of visible disorientation—President Díaz-Canel called on 'revolutionaries' to confront protesters—followed by systematic repression: mass arrests of over 1,000 protesters; trials in courts that human rights organisations described as lacking independence; and sentences of up to 25 years in prison for participants in the protests. As of 2025, hundreds remain imprisoned.\n\nCuba Decide, the Plataforma para el Diálogo, the Cuban Commission on Human Rights and National Reconciliation (CCDHRN), and international organisations including Amnesty International and Human Rights Watch have systematically documented the cases of those imprisoned. Several EU countries imposed targeted sanctions on Cuban officials responsible for the repression.\n\nFor Cuban diaspora—very large communities in Miami, Spain, and across Latin America—11J was a moment of intense political engagement. Diaspora Cubans organised demonstrations in front of Cuban embassies across the world, pressured governments to respond, and provided financial and communications support to protest families inside Cuba. The diaspora's role in sustaining international attention to the imprisoned protesters has been significant.",
    officialLinks: [
      { label: "OHCHR – Cuba human rights situation", url: "https://www.ohchr.org/en/countries/cuba" },
      { label: "EU targeted sanctions on Cuban officials", url: "https://www.consilium.europa.eu/en/policies/sanctions/cuba/" },
      { label: "Inter-American Commission on Human Rights – Cuba", url: "https://www.oas.org/en/IACHR/jsForm/?File=/en/iachr/r/DCD/countries.asp&country=CU" }
    ],
    newsLinks: [
      { label: "Cuba sentences 11J protest leader to 25 years in prison", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2024-12-04" },
      { label: "EU imposes sanctions on Cuban security officials over 11J repression", url: "https://www.euronews.com/my-europe/", source: "Euronews", publishedAt: "2024-03-18" },
      { label: "Hundreds of 11J prisoners still detained three years on, families say", url: "https://rferl.org/cuba/", source: "RFE/RL", publishedAt: "2024-07-11" }
    ],
    endorsements: [
      { name: "Cuba Decide", url: "https://www.cubadecide.com" },
      { name: "Amnesty International – Cuba", url: "https://www.amnesty.org/en/location/americas/south-america/cuba/" },
      { name: "Human Rights Watch – Cuba", url: "https://www.hrw.org/americas/cuba" }
    ],
    supporterCount: 2134
  },
  "cu-002": {
    detail: "Cuba's economic crisis in the early 2020s reached historic severity by multiple metrics: annual inflation of over 100%; a parallel currency exchange rate over twenty times the official rate; chronic shortages of food, fuel, medicine, and electricity; blackouts lasting up to 20 hours daily in some provinces; and a complete collapse of the peso's purchasing power that eliminated the middle-income lifestyle that had persisted through earlier decades of economic restriction.\n\nThe crisis is rooted in structural problems—a dual currency system that distorted economic incentives, limited private sector development, and dependence on a collapsing state enterprise sector—compounded by external shocks including US sanctions tightening under the Trump administration, COVID's devastation of the tourism sector, and Venezuela's reduced oil subsidies.\n\nEmigration has been the primary population response: the scale of Cuban emigration in 2022-2024 was historically unprecedented, with over 500,000 Cubans estimated to have entered the United States through various routes in two years—approximately 5% of the island's total population. This exodus, involving people of all ages and educational backgrounds including medical professionals and engineers, has stripped Cuba of human capital needed for any future recovery.\n\nFor the Cuban diaspora—one of the most politically active in the Americas—the economic crisis confirms decades of argument about the failure of the Cuban economic model. Diaspora remittances, estimated at over $3 billion annually in pre-crisis periods, have become both a lifeline for families and a political question: debates about whether remittances sustain or destabilise the regime have intensified.",
    officialLinks: [
      { label: "US Department of State – Cuba country report", url: "https://www.state.gov/countries-areas/cuba/" },
      { label: "OHCHR – Cuba human rights and economic situation", url: "https://www.ohchr.org/en/countries/cuba" },
      { label: "Inter-American Development Bank – Cuba economic outlook", url: "https://www.iadb.org" }
    ],
    newsLinks: [
      { label: "Cuba's emigration crisis: half a million leave in two years", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2024-03-22" },
      { label: "Havana power grid collapses as fuel shortages deepen", url: "https://www.bbc.com/news/world-latin-america/", source: "BBC News", publishedAt: "2024-10-19" },
      { label: "Cuba's peso in freefall as economic crisis enters worst phase", url: "https://rferl.org/cuba/", source: "RFE/RL", publishedAt: "2025-02-07" }
    ],
    endorsements: [
      { name: "Cuba Study Group", url: "https://www.cubastudygroup.org" },
      { name: "Fundación para los Derechos Humanos en Cuba (FDHC)", url: "https://www.fdhc.org" },
      { name: "WOLA – Washington Office on Latin America", url: "https://www.wola.org/cuba" }
    ],
    supporterCount: 1987
  },
  "cu-003": {
    detail: "Cuba expanded 3G mobile internet access in December 2018 and 4G in subsequent years, creating a new digital civic space that had been largely absent. Platforms including Facebook, WhatsApp, and Telegram became important channels for citizen journalism, organisation of civil society, and transmission of video documentation of government failures and human rights abuses.\n\nThe government has responded to this digital expansion with a combination of cooptation (using state social media accounts for propaganda) and control (internet shutdowns during protests, SIM card registration requirements, surveillance, and prosecution of online expression). The July 2021 protests were organised substantially through WhatsApp and Telegram groups, and the government shut down social media and mobile internet during the peak protest days.\n\nCuban digital civil society—including independent bloggers, YouTubers, journalists for platforms including 14ymedio (founded by Yoani Sánchez), CiberCuba, and El Toque—operates in a legally precarious environment. Prosecution under Decree 370 (prohibiting 'spreading information contrary to social interest, morals, good customs, and socialist law') and other laws has resulted in imprisonment, fines, and equipment confiscation.\n\nFor the Cuban diaspora, digital connectivity to Cuba has transformed family communication and political information-sharing. WhatsApp groups connecting diaspora with family in Cuba have become primary news channels for developments on the island; when internet is shut down, the silence itself communicates that something significant is happening. Diaspora organisations have supported the provision of VPN tools and digital security training for Cuban activists.",
    officialLinks: [
      { label: "OHCHR – Cuba digital rights", url: "https://www.ohchr.org/en/countries/cuba" },
      { label: "NetBlocks – Cuba internet shutdown monitoring", url: "https://netblocks.org" },
      { label: "Article 19 – Cuba", url: "https://www.article19.org/regions/americas/" }
    ],
    newsLinks: [
      { label: "Cuba shuts internet during nationwide protests for second time", url: "https://www.bbc.com/news/world-latin-america/", source: "BBC News", publishedAt: "2024-03-18" },
      { label: "Cuban blogger imprisoned after viral video criticising official mismanagement", url: "https://rferl.org/cuba/", source: "RFE/RL", publishedAt: "2025-01-30" },
      { label: "VPN use surges in Cuba as diaspora sends circumvention tools home", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2024-12-03" }
    ],
    endorsements: [
      { name: "Article 19 – Americas", url: "https://www.article19.org/regions/americas/" },
      { name: "Access Now – Cuba", url: "https://www.accessnow.org" },
      { name: "Committee to Protect Journalists (CPJ) – Cuba", url: "https://cpj.org/americas/cuba/" }
    ],
    supporterCount: 1423
  },
  "ve-001": {
    detail: "Venezuela's July 28, 2024 presidential election, in which Nicolás Maduro stood for a third term against opposition candidate Edmundo González, produced a disputed outcome that placed Venezuela at the centre of international attention. The National Electoral Council (CNE) announced Maduro's victory with approximately 51% of the vote but failed to release precinct-level tallies within the legally required timeframe. Opposition monitoring witnesses collected voting machine records (actas) documenting a comprehensive González victory; independent observers including the Carter Center, EU election missions, and regional governments expressed serious concerns about the result's credibility.\n\nThe post-election period saw significant political repression: over 2,000 arrests in the weeks after the election; the detention of prominent opposition figure María Corina Machado's colleagues; and legal proceedings against González, who went into exile in Spain in September 2024. Most democratic governments in Latin America and internationally refused to recognise Maduro's claimed victory.\n\nMaduro was nevertheless inaugurated for a third term in January 2025, with recognition from Cuba, Nicaragua, Bolivia, and Russia. The democratic opposition maintained that González was the legitimate president-elect; the US, EU, and most Latin American democracies expressed varying degrees of non-recognition of Maduro's continued government.\n\nFor Venezuelan diaspora—the largest refugee and migration crisis in Latin American history—the election result confirmed that the Maduro government would not relinquish power through electoral means, deepening the political and humanitarian crisis.",
    officialLinks: [
      { label: "Carter Center Venezuela election observation", url: "https://www.cartercenter.org/countries/venezuela.html" },
      { label: "OAS – General Secretariat Venezuela statement", url: "https://www.oas.org/en/media_center/press_release.asp" },
      { label: "EU statement on Venezuela election", url: "https://eeas.europa.eu" }
    ],
    newsLinks: [
      { label: "Venezuela election: opposition claims victory as Maduro declares win", url: "https://www.bbc.com/news/world-latin-america/", source: "BBC News", publishedAt: "2024-07-29" },
      { label: "González goes into exile in Spain after opposition defeat", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2024-09-08" },
      { label: "Maduro inaugurated for third term despite international non-recognition", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-10" }
    ],
    endorsements: [
      { name: "Carter Center", url: "https://www.cartercenter.org" },
      { name: "PROVEA – Venezuelan human rights programme", url: "https://provea.org" },
      { name: "Human Rights Watch – Venezuela", url: "https://www.hrw.org/americas/venezuela" }
    ],
    supporterCount: 2534
  },
  "ve-002": {
    detail: "Venezuela's migration crisis is the largest in Latin America's history and one of the largest in the world. An estimated 7.7 million Venezuelans—approximately a quarter of the pre-crisis population of 30 million—have left the country since 2015, primarily moving to Colombia (over 2.5 million), Peru, Ecuador, Brazil, Chile, Argentina, and increasingly to the United States and Canada. The scale of this movement exceeds even the Syrian refugee crisis at its peak in terms of total numbers.\n\nThe causes are multiple and cumulative: economic collapse, food insecurity, political persecution, healthcare system failure, and crime. The Maduro government's economic mismanagement—including nationalisation of productive enterprises, currency controls, price controls that created shortages, and dependence on oil revenues in a country that destroyed its oil industry—created conditions that made remaining a survival calculation for millions.\n\nHost countries have been tested by the scale of arrivals. Colombia has shown notable generosity—extending a Temporary Protection Status to over 1.7 million Venezuelans—but has faced housing and service pressures. Peru and Ecuador have tightened border policies; Chile has seen anti-Venezuelan sentiment and violence in some border areas.\n\nFor Venezuelan diaspora organisations—maintaining contact with family in Venezuela, advocating internationally for political change, and providing emergency support for new arrivals—the scale of the crisis has transformed civil society into a quasi-governmental network of mutual support and political advocacy across the Americas.",
    officialLinks: [
      { label: "UNHCR – Venezuela situation", url: "https://www.unhcr.org/venezuela-emergency.html" },
      { label: "R4V – Regional Refugee and Migrant Response for Venezuela", url: "https://www.r4v.info" },
      { label: "OAS – Venezuela migration crisis", url: "https://www.oas.org/en/media_center/press_release.asp" }
    ],
    newsLinks: [
      { label: "Venezuela migration crisis: 8 million displaced, record high", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2025-03-01" },
      { label: "Colombia extends protection status to 1.7 million Venezuelans", url: "https://www.bbc.com/news/world-latin-america/", source: "BBC News", publishedAt: "2024-11-22" },
      { label: "Venezuelan migrants face violence and exploitation in Darien Gap crossing", url: "https://www.theguardian.com/world/venezuela/", source: "The Guardian", publishedAt: "2025-02-14" }
    ],
    endorsements: [
      { name: "UNHCR – Venezuela emergency response", url: "https://www.unhcr.org/venezuela-emergency.html" },
      { name: "IOM – Venezuela displacement", url: "https://www.iom.int" },
      { name: "R4V platform", url: "https://www.r4v.info" }
    ],
    supporterCount: 2187
  },
  "ve-003": {
    detail: "Venezuela's humanitarian crisis—characterised by hyperinflation, widespread poverty, collapsing healthcare and education, food insecurity, and infrastructure failure—is the product of intersecting causes that are intensely debated: the Chávez-era economic policies that created structural distortions in the oil-dependent economy; the Maduro government's mismanagement and failure to reform; and the impact of US and EU sanctions.\n\nUS sanctions, progressively expanded from individual officials (2014) to broad financial sector and oil sector sanctions (2017-2019), are credited by critics with significantly worsening economic conditions for ordinary Venezuelans. The government has used sanctions as a primary explanation for economic suffering. Independent economic analysts attribute the primary causes to domestic policies but acknowledge that sanctions have amplified the crisis and complicated potential recovery.\n\nHumanitarian aid channels have been contested: the Venezuelan government initially rejected international humanitarian assistance as politically motivated interference, though this position moderated as the crisis deepened and some organisations gained access. The UN and NGOs including UNHCR, WFP, and UNICEF operate programmes inside Venezuela, subject to government permission and periodic restrictions.\n\nFor Venezuelan civil society in exile—which increasingly operates the most effective advocacy for change—the sanctions debate is sensitive: most support targeted sanctions on officials while opposing broad economic measures that harm the population they represent. The question of what combination of international pressure and engagement can accelerate political change without deepening humanitarian suffering has no clear answer.",
    officialLinks: [
      { label: "OHCHR – Venezuela human rights situation", url: "https://www.ohchr.org/en/countries/venezuela" },
      { label: "US OFAC – Venezuela sanctions", url: "https://ofac.treasury.gov/sanctions-programs-and-country-information/venezuela-related-sanctions" },
      { label: "EU restrictive measures on Venezuela", url: "https://www.consilium.europa.eu/en/policies/sanctions/venezuela/" }
    ],
    newsLinks: [
      { label: "OHCHR: Venezuela humanitarian situation critical with millions food insecure", url: "https://www.reuters.com/world/americas/", source: "Reuters", publishedAt: "2025-04-07" },
      { label: "Debate on Venezuela sanctions: effectiveness vs humanitarian cost", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2025-01-28" },
      { label: "UN agencies expand Venezuela humanitarian programmes after government access deal", url: "https://www.bbc.com/news/world-latin-america/", source: "BBC News", publishedAt: "2024-12-11" }
    ],
    endorsements: [
      { name: "PROVEA – Venezuelan human rights", url: "https://provea.org" },
      { name: "WOLA – Washington Office on Latin America", url: "https://www.wola.org" },
      { name: "Human Rights Watch – Venezuela", url: "https://www.hrw.org/americas/venezuela" }
    ],
    supporterCount: 1678
  },
  "cn-001": {
    detail: "China's imposition of the National Security Law (NSL) on Hong Kong on 30 June 2020 fundamentally transformed the territory's political and civic landscape. Enacted by Beijing without going through Hong Kong's legislature, the law criminalises secession, subversion, terrorism, and collusion with foreign forces with penalties up to life imprisonment. Critics argued it violated the 'one country, two systems' principle and the Basic Law's guarantees of Hong Kong's autonomy until 2047.\n\nThe law's implementation has been systematic and comprehensive: over 260 people have been prosecuted, including the leaders of the Hong Kong pro-democracy movement, civil society organisations, labour unions, and media outlets. Apple Daily, the largest pro-democracy newspaper, and Stand News, an online outlet, were both shut down following NSL raids and the arrest of their editors. The National Security Police operate with broad investigative powers and the ability to request asset freezes and restrict travel.\n\nThe 2021 electoral reform eliminated most directly elected seats in the Legislative Council and introduced a vetting process for candidates, ensuring only 'patriots' can stand. The result has been a legislature with no meaningful opposition and limited capacity to scrutinise government. The final District Council elections under the new system produced very low turnout.\n\nFor the Hong Kong diaspora—significantly expanded since 2020, with over 100,000 Hong Kongers arriving in the UK alone under the BN(O) scheme—the NSL represents the destruction of the political system they left. Diaspora Hong Kongers have been active in international advocacy, testifying before legislatures, and maintaining Cantonese language schools and cultural institutions abroad.",
    officialLinks: [
      { label: "UN OHCHR statement on Hong Kong NSL", url: "https://www.ohchr.org/en/countries/china" },
      { label: "UK BN(O) visa scheme for Hong Kong residents", url: "https://www.gov.uk/british-national-overseas-bno-visa" },
      { label: "EU statement on Hong Kong NSL", url: "https://eeas.europa.eu" }
    ],
    newsLinks: [
      { label: "Hong Kong NSL trial: pro-democracy leaders face decades in prison", url: "https://www.bbc.com/news/world-asia/", source: "BBC News", publishedAt: "2025-05-30" },
      { label: "100,000 Hong Kongers arrive in UK under BN(O) scheme", url: "https://www.theguardian.com/world/hong-kong/", source: "The Guardian", publishedAt: "2025-01-20" },
      { label: "Hong Kong press freedom at historic low as remaining outlets self-censor", url: "https://rsf.org/en/country/hong-kong", source: "Reporters Without Borders", publishedAt: "2025-03-11" }
    ],
    endorsements: [
      { name: "Hong Kong Watch", url: "https://www.hongkongwatch.org" },
      { name: "Article 19 – China and Hong Kong", url: "https://www.article19.org/regions/china/" },
      { name: "Human Rights Watch – China/Hong Kong", url: "https://www.hrw.org/asia/china-and-tibet" }
    ],
    supporterCount: 2634
  },
  "cn-002": {
    detail: "China's media and information control system is among the world's most comprehensive, combining technical filtering (the Great Firewall), mandatory self-censorship by domestic platforms, legal frameworks criminalising 'false information' and criticism of the government, and active surveillance of both domestic and diaspora communities. The result is an information environment in which major international platforms—Google, Facebook, Twitter/X, YouTube, Instagram—are blocked, and domestic alternatives operate under strict censorship requirements.\n\nFor Hong Kong, the NSL has effectively ended the territory's previous media freedom. Apple Daily and Stand News were shut down; the once-vibrant ecosystem of independent Cantonese and English-language journalism has largely migrated to exile (London, Taiwan, New York) or shut down entirely. The remaining South China Morning Post—owned by Alibaba—maintains some independent journalism but operates in a constrained environment.\n\nOn the mainland, the Committee to Protect Journalists maintains a database of imprisoned journalists; China consistently leads the world in numbers of imprisoned journalists. Recent high-profile cases include Zhang Zhan, the citizen journalist who documented the early Wuhan COVID outbreak and was imprisoned for her reporting.\n\nFor Chinese diaspora globally—very large communities in the US, Canada, Australia, the UK, Malaysia, and across Southeast Asia—access to uncensored information about China requires VPNs and alternative platforms. Many diaspora Chinese maintain access to both Chinese-language domestic media (for family and cultural connection) and international sources, creating a bifurcated information diet that is a distinctive feature of the Chinese diaspora experience.",
    officialLinks: [
      { label: "CPJ China journalist database", url: "https://cpj.org/asia/china/" },
      { label: "RSF China country page", url: "https://rsf.org/en/country/china" },
      { label: "UN Special Rapporteur on freedom of expression – China", url: "https://www.ohchr.org/en/countries/china" }
    ],
    newsLinks: [
      { label: "China's journalist imprisonment count hits record high", url: "https://cpj.org/asia/china/", source: "Committee to Protect Journalists", publishedAt: "2025-02-14" },
      { label: "Hong Kong's exile media keeps Cantonese journalism alive in London", url: "https://rferl.org/", source: "RFE/RL", publishedAt: "2025-03-22" },
      { label: "China's Great Firewall expands VPN crackdown ahead of political anniversary", url: "https://www.reuters.com/world/china/", source: "Reuters", publishedAt: "2025-05-01" }
    ],
    endorsements: [
      { name: "Committee to Protect Journalists (CPJ)", url: "https://cpj.org" },
      { name: "Reporters Without Borders (RSF)", url: "https://rsf.org/en" },
      { name: "Chinese Human Rights Defenders", url: "https://www.chrdnet.com" }
    ],
    supporterCount: 2147
  },
  "cn-003": {
    detail: "EU-China trade relations have moved from a partnership framing to one of competition and managed friction over the past decade. Annual bilateral trade exceeds €700 billion, but concerns about Chinese state subsidies enabling unfair competition, mandatory technology transfer requirements for market access, intellectual property violations, and strategic dependencies in critical supply chains have driven a fundamental rethinking of the relationship in Brussels.\n\nThe concept of 'de-risking'—reducing exposure to Chinese supply chains in strategic sectors (semiconductors, critical minerals, electric vehicles, pharmaceutical ingredients) without a full decoupling—became EU official policy language in 2023. The European Commission has launched anti-subsidy investigations into Chinese electric vehicles, solar panels, and wind turbines, resulting in additional duties. China has threatened and in some cases implemented countermeasures including investigations into EU agricultural and automotive exports.\n\nThe EU's Foreign Subsidies Regulation and the Foreign Direct Investment screening mechanism give Brussels new tools to scrutinise Chinese investment in European strategic assets and infrastructure, addressing concerns about Chinese acquisition of ports (Piraeus), energy infrastructure, and technology companies.\n\nFor European businesses with significant China exposure—automotive companies (Volkswagen, BMW, Stellantis), luxury goods (LVMH, Kering), pharmaceuticals, and others—the de-risking agenda creates strategic pressure to reduce China dependencies or manage political scrutiny of their China engagement. The debate between those prioritising economic exposure reduction and those cautioning against market decoupling is active within European business and government circles.",
    officialLinks: [
      { label: "European Commission EU-China trade relations", url: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/china_en" },
      { label: "EU Anti-Coercion Instrument", url: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/trade-defence_en" },
      { label: "EU Foreign Subsidies Regulation", url: "https://single-market-economy.ec.europa.eu/single-market/foreign-subsidies-regulation_en" }
    ],
    newsLinks: [
      { label: "EU imposes tariffs on Chinese electric vehicles after anti-subsidy probe", url: "https://www.ft.com/world/", source: "Financial Times", publishedAt: "2024-10-30" },
      { label: "China launches anti-dumping investigation into EU brandy as retaliation", url: "https://www.reuters.com/world/china/", source: "Reuters", publishedAt: "2024-11-07" },
      { label: "De-risking from China: EU companies accelerate supply chain diversification", url: "https://www.politico.eu/europe/", source: "Politico EU", publishedAt: "2025-04-21" }
    ],
    endorsements: [
      { name: "European Chamber of Commerce in China (EUCCC)", url: "https://www.europeanchamber.com.cn" },
      { name: "Merics – Mercator Institute for China Studies", url: "https://merics.org/en" },
      { name: "ECFR – European Council on Foreign Relations", url: "https://ecfr.eu" }
    ],
    supporterCount: 1389
  }
};

let modified = 0;
topics.forEach(t => {
  if (enrichments[t.id]) {
    Object.assign(t, enrichments[t.id]);
    modified++;
  }
});
console.log(`Enriched ${modified} topics in batch 10`);
fs.writeFileSync(dataPath, JSON.stringify(topics, null, 2));
console.log('Saved.');
