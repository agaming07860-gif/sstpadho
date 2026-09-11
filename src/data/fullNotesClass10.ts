import { FULL_NOTES_CLASS_10_GEO } from './fullNotesClass10Geo';
import { FULL_NOTES_CLASS_10_CIV } from './fullNotesClass10Civ';
import { FULL_NOTES_CLASS_10_ECO } from './fullNotesClass10Eco';
import { DetailedSection, DefinitionItem, ImportantDate, ImportantPerson, ImportantFigure } from '../types/sst';

export interface ChapterEnrichment {
  shortNotes?: { title: string; bullets: string[] }[];
  detailedSections?: DetailedSection[];
  keyConcepts?: { term: string; explanation: string; examTip?: string }[];
  importantDates?: ImportantDate[];
  importantPeople?: ImportantPerson[];
  definitions?: DefinitionItem[];
  importantFigures?: ImportantFigure[];
  oneShotRevision?: {
    summary: string;
    goldenPoints: string[];
    mindMapSteps: string[];
    commonPitfalls: string[];
  };
}

export const FULL_NOTES_CLASS_10: Record<string, ChapterEnrichment> = {
  // ==========================================
  // HISTORY: India and the Contemporary World - II
  // ==========================================
  'c10-hist-ch1': {
    shortNotes: [
      {
        title: 'Frédéric Sorrieu’s Vision & The French Revolution',
        bullets: [
          'In 1848, French artist Frédéric Sorrieu created four prints depicting a world of "Democratic and Social Republics". First print shows peoples of Europe and America marching past the Statue of Liberty (holding Torch of Enlightenment and Charter of Rights of Man), with ruins of absolutist symbols on the ground.',
          'French Revolution (1789) introduced national sovereignty: concepts of "la patrie" (fatherland) and "le citoyen" (citizen); created new tricolor flag; replaced Estates General with elected National Assembly; established uniform laws, centralized administration, standardized weights and measures; abolished internal customs duties.',
        ],
      },
      {
        title: 'Napoleonic Code (1804) & The Conservative Order (1815)',
        bullets: [
          'Civil Code of 1804 (Napoleonic Code): Abolished all birth privileges, established equality before law, secured property rights, simplified administrative divisions, abolished feudal system, freed peasants from serfdom, removed guild restrictions.',
          'Battle of Waterloo (1815): Napoleon defeated by European powers (Britain, Russia, Prussia, Austria).',
          'Treaty of Vienna (1815): Hosted by Austrian Chancellor Duke Metternich. Restored Bourbon dynasty in France; created buffer states around French borders (Kingdom of Netherlands including Belgium in north, Genoa added to Piedmont in south); Prussia given western territories; Austria given northern Italy; German Confederation of 39 states left untouched.',
        ],
      },
      {
        title: 'The Revolutionaries & Unification of Italy and Germany',
        bullets: [
          'Giuseppe Mazzini: Italian revolutionary; founded secret societies "Young Italy" (Marseilles) and "Young Europe" (Berne); described by Metternich as "the most dangerous enemy of our social order".',
          '1848 Revolutions: Frankfurt Parliament in St. Paul’s Church drafted German constitution under constitutional monarchy; King Friedrich Wilhelm IV of Prussia rejected crown; parliament disbanded by troops.',
          'Unification of Germany (1866–1871): Led by Prussian Chief Minister Otto von Bismarck ("Blood and Iron" policy); won three wars in 7 years against Denmark, Austria, and France; King William I proclaimed German Emperor at Versailles (January 1871).',
          'Unification of Italy: Italy divided into 7 states (only Sardinia-Piedmont ruled by Italian dynasty under Victor Emmanuel II); Count Cavour forged diplomatic alliance with France to defeat Austria (1859); Giuseppe Garibaldi and his "Red Shirts" mobilized peasants in southern Italy (Two Sicilies); Victor Emmanuel II declared King of unified Italy (1861).',
          'Nationalism in Balkans: Balkan region under Ottoman Empire; inhabited by Slavs; intensely contested between Russia, Germany, Britain, and Austria-Hungary, sparking World War I.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. The Emergence of the Nation-State and the French Revolutionary Crucible',
        content: 'Throughout medieval and early modern Europe, political authority was vested in dynastic multi-ethnic empires rather than nation-states. The Habsburg Empire of Austria-Hungary, for example, ruled over a patchwork of diverse linguistic populations: German-speaking aristocrats in Bohemia, Italian speakers in Lombardy-Venetia, and Magyar speakers in Hungary. The French Revolution of 1789 shattered this dynastic model by transferring sovereignty from an absolutist monarch to a collective body of French citizens. To forge a cohesive national identity, the revolutionaries introduced deliberate institutional innovations: the ideological concepts of "la patrie" (the collective fatherland) and "le citoyen" (the equal citizen), a new tricolor flag replacing the royal banner, the composition of patriotic hymns (La Marseillaise), the centralized standardization of weights and measures, the abolition of internal customs tolls, and the promotion of Parisian French as the national language. While Napoleon Bonaparte subverted political democracy by crowning himself emperor in 1804, he codified and exported these revolutionary principles across conquered territories through the Civil Code of 1804 (Napoleonic Code). By dismantling feudal serfdom, abolishing guild monopolies, establishing legal equality, and guaranteeing private property rights, Napoleon modernized administrative structures across Switzerland, Germany, and Italy, turning French-occupied lands into laboratories of modern bourgeois governance.',
        keyTakeaway: 'The French Revolution replaced dynastic monarchies with citizen sovereignty, creating national identity through legal standardization, symbols, and the Napoleonic Code.',
        highlights: [
          'Multi-ethnic dynastic empires like the Habsburgs lacked shared cultural or linguistic bonds',
          'Revolutionaries forged national unity through "la patrie", "le citoyen", and standardized administration',
          'Napoleonic Code (1804) abolished feudalism, serfdom, and birth privileges across conquered Europe',
          'Standardized weights, measures, and free trade created the modern bourgeois economic framework',
        ],
      },
      {
        heading: '2. The Conservative Backlash (1815) and the Rise of Liberal-Nationalist Revolutionaries',
        content: 'Following Napoleon’s military defeat at Waterloo in 1815, representatives of the victorious European powers—Britain, Russia, Prussia, and Austria—assembled at the Congress of Vienna, presided over by Austrian Chancellor Duke Metternich. Guided by political conservatism, the Congress sought to reverse revolutionary disruptions and restore legitimate monarchies. The Bourbon dynasty was restored in France, while a network of defensive buffer states was engineered around French borders: the Kingdom of the Netherlands (absorbing Belgium) in the north, the Kingdom of Sardinia (absorbing Genoa) in the south, and Prussian territorial expansion along the Rhine. The German Confederation of 39 states established by Napoleon, however, remained untouched. To suppress revolutionary dissent, conservative regimes imposed draconian censorship on newspapers, political pamphlets, and theatrical plays. In response, liberal-nationalist opposition was forced underground into clandestine secret societies. The preeminent exemplar of this underground vanguard was Giuseppe Mazzini. Exiled for attempting an insurrection in Liguria, Mazzini founded "Young Italy" in Marseilles and "Young Europe" in Berne. Mazzini believed that God had intended nations to be the natural units of mankind, arguing that Italy could not remain a mosaic of petty principalities but must be forged into a singular, democratic republic. Metternich famously described Mazzini as "the most dangerous enemy of our social order".',
        keyTakeaway: 'The 1815 Congress of Vienna restored conservative monarchies, prompting underground secret societies led by figures like Giuseppe Mazzini to fight for unified democratic republics.',
        highlights: [
          'Congress of Vienna (1815) restored the Bourbon dynasty and created buffer states around France',
          'Conservative regimes enforced strict press censorship to eliminate revolutionary ideas',
          'Liberal nationalists formed underground societies like Mazzini’s "Young Italy" and "Young Europe"',
          'Metternich called Mazzini "the most dangerous enemy of our social order"',
        ],
      },
      {
        heading: '3. Architectural State-Building: The Unification of Germany, Italy, and the Balkan Crisis',
        content: 'By the mid-nineteenth century, the romantic ideals of popular democratic revolution were co-opted by state aristocracies to achieve national unification from above. In Germany, the liberal Frankfurt Parliament of 1848 failed when Prussian King Friedrich Wilhelm IV rejected the constitutional crown. Prussia subsequently assumed leadership of German unification, engineered not by popular assemblies but by Chief Minister Otto von Bismarck through a calculated policy of "Blood and Iron". Over seven years, Bismarck orchestrated three decisive wars against Denmark (1864), Austria (1866), and France (1870–71). In January 1871, inside the Hall of Mirrors at the Palace of Versailles, King William I of Prussia was proclaimed Kaiser of a unified German Empire. Simultaneously in Italy, Count Camillo de Cavour, Chief Minister of Sardinia-Piedmont, deployed elite diplomacy: securing an alliance with Napoleon III of France to defeat Austrian forces in 1859. Meanwhile, Giuseppe Garibaldi led his volunteer army of "Red Shirts" into the Kingdom of the Two Sicilies, winning peasant support to overthrow the Spanish Bourbon monarchs. In 1861, Victor Emmanuel II was proclaimed King of unified Italy. In the late nineteenth century, nationalism mutated into aggressive imperialism, most dangerously in the Balkans. As the Ottoman Empire collapsed, Slavic ethnic groups demanded independence, while rival Great Powers (Russia, Germany, Britain, and Austria-Hungary) competed for naval and territorial hegemony over the Balkan peninsula, creating the powder keg that ignited World War I in 1914.',
        keyTakeaway: 'Bismarck unified Germany through Prussian military power, while Cavour and Garibaldi unified Italy; Balkan nationalist rivalries ultimately triggered World War I.',
        highlights: [
          'Otto von Bismarck executed German unification through three victorious wars and "Blood and Iron"',
          'Kaiser William I was crowned Emperor of unified Germany at Versailles in January 1871',
          'Cavour’s diplomacy combined with Garibaldi’s Red Shirts to unify Italy under Victor Emmanuel II in 1861',
          'Balkan ethnic rivalries and Great Power imperial ambitions turned the region into the crucible of WWI',
        ],
      },
    ],
    keyConcepts: [
      { term: 'Nation-State', explanation: 'A state in which the majority of its citizens, and not only its rulers, develop a common sense of shared identity, history, and descent.' },
      { term: 'Zollverein', explanation: 'A customs union formed in 1834 at the initiative of Prussia, abolishing tariff barriers and reducing currencies from over thirty to two.' },
      { term: 'Allegory', explanation: 'The representation of an abstract idea (such as freedom, liberty, or nationhood) through a person or symbolic object (e.g., Marianne for France, Germania for Germany).' },
      { term: 'Balkans', explanation: 'A geographical region of southeastern Europe comprising modern Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia, and Montenegro, historically ruled by the Ottoman Empire.' },
    ],
    importantDates: [
      { date: '1789 CE', event: 'Outbreak of the French Revolution', significance: 'Transferred sovereignty from monarch to the people, creating the first modern nation-state.' },
      { date: '1804 CE', event: 'Promulgation of Napoleonic Code', significance: 'Abolished feudalism and established legal equality across French-dominated Europe.' },
      { date: '1815 CE', event: 'Battle of Waterloo & Congress of Vienna', significance: 'Defeat of Napoleon and restoration of conservative dynastic monarchies.' },
      { date: '1834 CE', event: 'Formation of Zollverein Customs Union', significance: 'Created economic unity across German states, paving the way for political unification.' },
      { date: '1861 CE', event: 'Proclamation of Unified Kingdom of Italy', significance: 'Victor Emmanuel II declared king following military campaigns of Cavour and Garibaldi.' },
      { date: 'January 1871 CE', event: 'Proclamation of the German Empire at Versailles', significance: 'Kaiser William I crowned emperor of a unified Germany orchestrated by Bismarck.' },
    ],
    importantPeople: [
      { name: 'Frédéric Sorrieu', role: 'French Romantic Artist', contribution: 'Visualized utopian prints in 1848 depicting a world of democratic, sovereign republics.' },
      { name: 'Otto von Bismarck', role: 'Chief Minister of Prussia', contribution: 'Architect of German unification through military victories and realpolitik diplomacy.' },
      { name: 'Count Camillo de Cavour', role: 'Chief Minister of Sardinia-Piedmont', contribution: 'Diplomatic genius who secured French alliance to defeat Austria and unify northern Italy.' },
      { name: 'Giuseppe Garibaldi', role: 'Italian Revolutionary General', contribution: 'Commanded the Expedition of the Thousand (Red Shirts), conquering southern Italy.' },
      { name: 'Duke Metternich', role: 'Austrian Chancellor', contribution: 'Presided over Congress of Vienna, orchestrating conservative anti-nationalist repression.' },
    ],
    definitions: [
      { term: 'Absolutist', definition: 'A system of rule with no constitutional or institutional restraints on royal authority, centralized, militarized, and repressive.', context: 'Political history' },
      { term: 'Liberalism', definition: 'Derived from Latin "liber" (free); an ideology advocating individual freedom, equality before law, representative government, and free markets.', context: 'Political ideology' },
      { term: 'Conservatism', definition: 'A political philosophy emphasizing the preservation of established traditional institutions: monarchy, church, social hierarchies, and property.', context: 'Political theory' },
    ],
    importantFigures: [
      {
        title: 'Comparative Analysis: Unification of Germany vs. Unification of Italy',
        description: 'Key leaders, political strategies, and historical pathways of 19th-century state building.',
        type: 'table',
        headers: ['Feature', 'Unification of Germany (1866–1871)', 'Unification of Italy (1859–1870)'],
        rows: [
          ['Leading State', 'Kingdom of Prussia', 'Kingdom of Sardinia-Piedmont'],
          ['Key Political Leader', 'Otto von Bismarck (Chief Minister)', 'Count Cavour (Chief Minister) & Giuseppe Garibaldi'],
          ['Crowned Monarch', 'Kaiser William I of Prussia (at Versailles)', 'King Victor Emmanuel II of Sardinia-Piedmont'],
          ['Strategic Method', '"Blood and Iron" military campaigns against 3 powers', 'Diplomatic alliance with France combined with popular guerilla uprising'],
          ['Enemy Empires Defeated', 'Denmark (1864), Austria (1866), France (1870–71)', 'Austrian Empire (in north) and Spanish Bourbon monarchy (in south)'],
          ['Role of Popular Volunteers', 'Minimal; executed strictly by Prussian military bureaucracy', 'Crucial; Garibaldi’s "Red Shirts" mobilized southern peasants'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Nationalism replaced Europe’s multi-ethnic dynastic empires with nation-states. Frédéric Sorrieu’s 1848 prints visualized a world of democratic republics. The 1789 French Revolution created national identity via "la patrie", "le citoyen", and standardized administration. Napoleon’s 1804 Civil Code abolished feudal privileges and established equality before law, but his defeat at Waterloo (1815) led to the conservative Congress of Vienna under Metternich, restoring Bourbon rule. Liberal nationalists fought back via secret societies like Mazzini’s "Young Italy". Unification of Germany (1871) was executed by Prussian Chief Minister Bismarck via "Blood and Iron" across three wars, crowning Kaiser William I at Versailles. Italy was unified (1861) through Cavour’s diplomacy and Garibaldi’s Red Shirts under Victor Emmanuel II. In late 19th century, romantic nationalism degraded into militaristic imperialism, turning the multi-ethnic Balkans into a geopolitical powder keg that triggered World War I in 1914.',
      goldenPoints: [
        'Frédéric Sorrieu visualized democratic republics in four prints in 1848.',
        'The Napoleonic Code (Civil Code of 1804) abolished birth privileges and secured property rights.',
        'The Congress of Vienna (1815) was hosted by Austrian Chancellor Duke Metternich.',
        'Zollverein was a customs union formed in 1834 at Prussia’s initiative, eliminating internal tariffs.',
        'Otto von Bismarck orchestrated German unification using a policy of "Blood and Iron".',
        'Kaiser William I was proclaimed Emperor of Germany at Versailles in January 1871.',
        'Count Cavour and Giuseppe Garibaldi led the unification of Italy under Victor Emmanuel II in 1861.',
        'Balkan nationalist rivalries among Slavs and Great Power imperialism sparked World War I.',
      ],
      mindMapSteps: [
        'Sorrieu’s Vision & French Revolution (1789): Birth of Sovereign Nation-State',
        'Napoleonic Era (1804) to Conservative Vienna Settlement (1815 Metternich)',
        'Underground Revolutionaries: Mazzini, Young Italy & 1848 Frankfurt Failure',
        'State-Led Unifications: Bismarck’s Germany (Versailles 1871) & Cavour/Garibaldi’s Italy (1861)',
        'Imperial Mutation: Allegories (Marianne/Germania) & Balkan Powder Keg Triggering WWI',
      ],
      commonPitfalls: [
        'Zollverein was NOT a political union; it was an economic customs union formed in 1834.',
        'Do not confuse Mazzini (revolutionary ideologue) with Cavour (diplomatic chief minister) or Garibaldi (military guerrilla general).',
        'Napoleon abolished democracy in France, but his administrative reforms (Napoleonic Code) were highly progressive and modernizing.',
      ],
    },
  },

  'c10-hist-ch2': {
    shortNotes: [
      {
        title: 'First World War, Rowlatt Act & Jallianwala Bagh',
        bullets: [
          'Impact of WWI: War expenditures led to custom duties increase, income tax introduction, forced recruitment of soldiers, and soaring prices (doubled between 1913 and 1918). Influenza epidemic and crop failure in 1920–21 killed 12 to 13 million people.',
          'Idea of Satyagraha: Mahatma Gandhi returned from South Africa in January 1915; championed Satyagraha (power of truth and non-violence). Early local successes: Champaran (Bihar, 1917) for indigo sharecroppers; Kheda (Gujarat, 1917) for revenue remission during crop failure; Ahmedabad (1918) for cotton mill workers’ wage hikes.',
          'Rowlatt Act (1919): Passed hurriedly by Imperial Legislative Council; empowered government to detain political prisoners without trial for up to two years.',
          'Jallianwala Bagh Massacre (13 April 1919): Peaceful crowd gathered in Amritsar to celebrate Baisakhi and protest arrests; General Dyer blocked exits and opened fire without warning, killing hundreds to "produce a moral effect and strike terror". Rabindranath Tagore renounced his knighthood in protest.',
        ],
      },
      {
        title: 'Khilafat & Non-Cooperation Movement (1920–1922)',
        bullets: [
          'Khilafat Issue: Harsh treaty imposed on Ottoman Sultan (Caliph/Khalifa); Muhammad Ali and Shaukat Ali formed Khilafat Committee in Bombay (March 1919); Gandhi saw this as an opportunity to unite Hindus and Muslims.',
          'Non-Cooperation Movement: Launched at Nagpur Congress (Dec 1920). Steps: Surrender of government titles, boycott of civil services, army, police, courts, legislative councils, schools, and foreign goods.',
          'Diverse Strands:',
          '- Middle-class in cities: Thousands of students left government schools; lawyers gave up practice; foreign cloth imports halved between 1921 and 1922 (₹102 crore to ₹57 crore). Slowed down because Khadi was expensive and Indian institutions were lacking.',
          '- Countryside (Awadh): Led by Baba Ramchandra (sanyasi, indentured laborer) against oppressive talukdars; demanded revenue reduction and abolition of begar; Oudh Kisan Sabha set up by Nehru and Baba Ramchandra.',
          '- Tribal Rebellion (Andhra Pradesh): Alluri Sitaram Raju led guerrilla warfare in Gudem Hills; claimed special healing and bullet-proof powers; inspired by Gandhi but advocated force; captured and executed in 1924.',
          '- Plantations (Assam): Inland Emigration Act of 1859 barred plantation workers from leaving tea gardens without permission; workers defied authorities to head home.',
          'Withdrawal: Chauri Chaura incident (Gorakhpur, UP, Feb 1922) where violent clash killed 22 policemen in a burnt station; Gandhi called off the movement.',
        ],
      },
      {
        title: 'Towards Civil Disobedience & Salt March (1930)',
        bullets: [
          'Swaraj Party: Formed within Congress by C.R. Das and Motilal Nehru to argue for entering legislative councils to oppose British policies from within.',
          'Simon Commission (1928): Indian Statutory Commission under Sir John Simon; had NO Indian members; greeted with black flags and slogans "Go Back Simon"; Lala Lajpat Rai died after brutal police lathi charge.',
          'Lahore Congress (Dec 1929): Presided over by Jawaharlal Nehru; formalized demand for "Purna Swaraj" (Complete Independence); 26 January 1930 celebrated as Independence Day.',
          'Salt March (Dandi March): Gandhi sent 11 demands to Viceroy Irwin; Irwin refused; Gandhi marched 240 miles from Sabarmati Ashram to Dandi with 78 volunteers (12 March to 6 April 1930); broke salt law by manufacturing salt from seawater; triggered nationwide Civil Disobedience Movement.',
        ],
      },
      {
        title: 'Round Table Conferences, Poona Pact & Limits',
        bullets: [
          'Gandhi-Irwin Pact (March 1931): Gandhi called off Civil Disobedience, agreed to attend Second Round Table Conference in London; government agreed to release political prisoners. London talks broke down.',
          'Poona Pact (Sept 1932): Signed between Mahatma Gandhi and Dr. B.R. Ambedkar; granted reserved seats in provincial and central legislative councils to Depressed Classes (Scheduled Castes), voted by general electorate.',
          'Limits of Civil Disobedience: Dalit participation was limited; Muslim organizations remained lukewarm due to growing communal rift after non-cooperation; industrial workers stayed distant except in Nagpur.',
          'Sense of Collective Belonging: Created through cultural processes: Bankim Chandra Chattopadhyay wrote "Vande Mataram" and created image of Bharat Mata (painted by Abanindranath Tagore); folk revival by Natesa Sastri in Madras; tricolor swaraj flags (Gandhi designed 8-lotus spinning wheel flag in 1921).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. The Crucible of Mass Nationalism: Satyagraha, the Rowlatt Black Act, and the Jallianwala Bagh Outrage',
        content: 'The First World War (1914–1918) generated profound structural economic distress across colonial India. War financing forced the British Raj to introduce income tax, dramatically raise customs tariffs, and execute forced recruitment in rural villages to supply soldiers for European battlefields. Between 1913 and 1918, essential food prices doubled, followed by devastating crop failures and the lethal global influenza pandemic of 1920–21, which claimed an estimated 12 to 13 million Indian lives. Into this cauldron of desperation arrived Mohandas Karamchand Gandhi from South Africa in January 1915, bearing a revolutionary philosophy: Satyagraha. Satyagraha asserted that if the cause was just and rooted in truth, physical force was unnecessary to defeat an oppressor; truth would triumph through the non-violent suffering of the satyagrahi. Gandhi demonstrated this philosophy through targeted local interventions: Champaran (Bihar, 1917) supporting indigo sharecroppers against European planters; Kheda (Gujarat, 1917) demanding revenue remission during crop failure; and Ahmedabad (1918) organizing textile mill workers for wage hikes. Emboldened, Gandhi launched a nationwide satyagraha in 1919 against the draconian Rowlatt Act, which authorized detention of political activists for up to two years without judicial trial. The protest culminated in tragic catastrophe on 13 April 1919 at Jallianwala Bagh in Amritsar. A peaceful gathering celebrating Baisakhi and protesting the arrest of leaders Dr. Saifuddin Kitchlew and Dr. Satyapal was trapped when Brigadier-General Reginald Dyer sealed the narrow alleyway and ordered troops to open fire without warning. Hundreds of men, women, and children were slaughtered, an atrocity Dyer unrepentantly defended as necessary to "strike terror" into Indian minds, fundamentally severing any moral legitimacy the British Empire claimed to possess.',
        keyTakeaway: 'War inflation and the Rowlatt Act galvanized mass resistance, which erupted into national outrage after General Dyer’s Jallianwala Bagh massacre.',
        highlights: [
          'WWI war loans, custom duties, and forced recruitment triggered immense popular misery',
          'Satyagraha was pioneered locally in Champaran (1917), Kheda (1917), and Ahmedabad (1918)',
          'The Rowlatt Act (1919) authorized imprisonment of Indian activists without trial for two years',
          'Jallianwala Bagh massacre (13 April 1919) shattered faith in British justice, prompting Tagore to renounce his knighthood',
        ],
      },
      {
        heading: '2. The Anatomy of Non-Cooperation: Cities, Peasant Jacqueries, and Tribal Insurgency',
        content: 'To channel mass fury, Gandhi aligned the nationalist struggle with the Khilafat Movement led by the Ali brothers (Muhammad and Shaukat Ali), seeking to unite Hindus and Muslims against imperial perfidy. At the Nagpur Congress in December 1920, the Non-Cooperation Movement was adopted. Gandhi argued that British rule was established and sustained solely through Indian cooperation; if Indians refused cooperation, British rule would collapse within a year. The movement unfolded across diverse geographic and social terrains. In urban centres, middle-class youth boycotted government schools, lawyers abandoned courts, and foreign cloth was burned in massive bonfires, causing imports to plunge from ₹102 crore to ₹57 crore. However, urban boycott slowed because handcrafted khadi was too expensive for the poor, and alternative Indian universities and courts were lacking. In the agrarian countryside of Awadh, the movement was transformed by Baba Ramchandra—a sanyasi who had worked as an indentured laborer in Fiji. Leading peasants against extortionate rents, arbitrary evictions (bedakhli), and unpaid forced labor (begar) demanded by talukdars, Ramchandra organized the "Oudh Kisan Sabha" alongside Jawaharlal Nehru. In the forested Gudem Hills of Andhra Pradesh, Alluri Sitaram Raju led a violent guerrilla war against British forest laws that barred tribals from grazing cattle or collecting fuel wood. Claiming miraculous healing powers and bullet immunity, Raju praised Gandhi and encouraged khadi but insisted India could only be liberated through armed force, raiding police stations until his capture and execution in 1924. Tragically, when a mob set fire to a police station at Chauri Chaura in February 1922, killing 22 policemen, Gandhi unilaterally aborted the movement, insisting the masses were not yet trained in non-violence.',
        keyTakeaway: 'Non-Cooperation united cities, Awadh peasants (Baba Ramchandra), and Andhra tribals (Alluri Sitaram Raju), but was called off after the Chauri Chaura violence in 1922.',
        highlights: [
          'Gandhi united Khilafat and nationalist causes to forge historic Hindu-Muslim solidarity',
          'Urban foreign cloth imports halved, but movement slowed due to expensive khadi and lack of Indian schools',
          'Baba Ramchandra mobilized Awadh peasants against talukdars and illegal begar (forced labor)',
          'Alluri Sitaram Raju led tribal guerrilla warfare in Andhra Pradesh before being captured and executed in 1924',
        ],
      },
      {
        heading: '3. The Salt March, the Dynamics of Civil Disobedience, and the Contested Limits of National Unity',
        content: 'Following the boycott of the all-British Simon Commission in 1928 and the historic declaration of "Purna Swaraj" (Complete Independence) at the Lahore Congress of 1929 presided over by Jawaharlal Nehru, Gandhi initiated the Civil Disobedience Movement in 1930. Choosing salt—an essential commodity consumed equally by the richest landlord and the poorest peasant—Gandhi turned an everyday staple into a powerful symbol of imperial oppression. On 12 March 1930, Gandhi marched 240 miles from Sabarmati Ashram to the coastal village of Dandi with 78 chosen volunteers, reaching the Arabian Sea on 6 April to break the salt monopoly by boiling seawater. Unlike Non-Cooperation (which urged citizens to refuse cooperation), Civil Disobedience explicitly commanded citizens to break colonial laws. Peasants refused to pay chowkidari taxes, forest dwellers violated British reservation laws, and women picketed liquor shops in unprecedented numbers. However, the movement faced sharp internal boundaries. Dr. B.R. Ambedkar clashed fiercely with Gandhi at the Second Round Table Conference, demanding separate electorates for the Depressed Classes (Dalits). Gandhi undertook a fast-unto-death in Yerwada Jail, arguing separate electorates would permanently fracture Hindu society. The compromise Poona Pact of September 1932 resolved the crisis by granting reserved legislative seats for Depressed Classes within a general electorate. Simultaneously, many Muslim organizations remained distant, alienated after the collapse of Khilafat and fearful that majority rule would result in Hindu domination. Despite these fractures, national unity was woven through cultural symbols: Bankim Chandra’s hymn "Vande Mataram", Abanindranath Tagore’s iconic visual painting of Bharat Mata as an ascetic goddess, and Gandhi’s tricolor Swaraj flag featuring the spinning wheel.',
        keyTakeaway: 'The Salt March sparked nationwide Civil Disobedience; internal fractures over caste (Poona Pact) and religion were balanced by unifying cultural icons like Bharat Mata and the tricolor flag.',
        highlights: [
          'Lahore Congress (1929) under Nehru declared Purna Swaraj; celebrated 26 Jan 1930 as Independence Day',
          'Dandi March (12 March to 6 April 1930) broke the colonial salt monopoly, sparking Civil Disobedience',
          'Poona Pact (1932) resolved Gandhi-Ambedkar dispute by providing reserved seats for Dalits in general electorate',
          'National identity was unified culturally through Bharat Mata paintings, Vande Mataram, and the tricolor flag',
        ],
      },
    ],
    keyConcepts: [
      { term: 'Satyagraha', explanation: 'A philosophy of non-violent resistance developed by Mahatma Gandhi, relying on the moral force of truth and soul-force to convert the oppressor.' },
      { term: 'Rowlatt Act', explanation: 'Imperial legislation of 1919 authorizing detention of political prisoners without judicial trial or representation for up to two years.' },
      { term: 'Purna Swaraj', explanation: 'Resolution passed at the Lahore Session of the Indian National Congress in December 1929 declaring complete independence from British colonial rule.' },
      { term: 'Poona Pact', explanation: 'The 1932 agreement between Gandhi and Ambedkar granting reserved seats to Depressed Classes (Scheduled Castes) in legislative councils via a joint electorate.' },
    ],
    importantDates: [
      { date: 'January 1915 CE', event: 'Mahatma Gandhi Returns to India', significance: 'Arrived from South Africa, initiating mass-based non-violent nationalist struggles.' },
      { date: '13 April 1919 CE', event: 'Jallianwala Bagh Massacre in Amritsar', significance: 'General Dyer opened fire on unarmed civilians, destroying faith in British justice.' },
      { date: 'December 1920 CE', event: 'Nagpur Congress Session', significance: 'Formally adopted the Non-Cooperation Movement under Mahatma Gandhi.' },
      { date: 'February 1922 CE', event: 'Chauri Chaura Incident', significance: 'Violent clash in Gorakhpur resulting in police deaths; prompted Gandhi to halt Non-Cooperation.' },
      { date: 'December 1929 CE', event: 'Lahore Session of Congress', significance: 'Presided by Jawaharlal Nehru; adopted the resolution of Purna Swaraj.' },
      { date: '12 March – 6 April 1930 CE', event: 'The Historic Dandi Salt March', significance: 'Gandhi marched 240 miles to Dandi, breaking the salt law and initiating Civil Disobedience.' },
      { date: 'September 1932 CE', event: 'Signing of the Poona Pact', significance: 'Settled electoral representation for Depressed Classes between Gandhi and Dr. Ambedkar.' },
    ],
    importantPeople: [
      { name: 'Mahatma Gandhi', role: 'Leader of National Freedom Movement', contribution: 'Championed Satyagraha, Non-Cooperation, Civil Disobedience, and the Salt March.' },
      { name: 'Dr. B.R. Ambedkar', role: 'Architect of Dalit Rights & Constitution', contribution: 'Organized Depressed Classes Association (1930) and signed Poona Pact (1932).' },
      { name: 'Baba Ramchandra', role: 'Peasant Movement Leader in Awadh', contribution: 'Former indentured laborer who mobilized peasants against talukdars and illegal begar.' },
      { name: 'Alluri Sitaram Raju', role: 'Tribal Revolutionary Leader', contribution: 'Led armed guerrilla rebellion in Andhra’s Gudem Hills against colonial forest reservations.' },
      { name: 'Abanindranath Tagore', role: 'Renowned Painter', contribution: 'Painted the iconic image of Bharat Mata as an ascetic, serene, and divine figure.' },
    ],
    definitions: [
      { term: 'Begar', definition: 'Forced unpaid labor that villagers were compelled to provide to landlords or colonial authorities without any remuneration.', context: 'Agrarian feudalism' },
      { term: 'Boycott', definition: 'The refusal to deal with or associate with people, participate in activities, or buy foreign goods as a form of non-violent political protest.', context: 'Nationalist tactics' },
      { term: 'Civil Disobedience', definition: 'The active, professed refusal of citizens to obey certain laws, demands, or commands of an occupying government or authority.', context: 'Political protest' },
    ],
    importantFigures: [
      {
        title: 'Contrast: Non-Cooperation Movement (1920–22) vs. Civil Disobedience Movement (1930–34)',
        description: 'Comparison of objectives, participant scope, methods, and legal dimensions of Gandhian mass campaigns.',
        type: 'table',
        headers: ['Parameter', 'Non-Cooperation Movement (1920–1922)', 'Civil Disobedience Movement (1930–1934)'],
        rows: [
          ['Primary Objective', 'Redress of Punjab wrongs, support for Khilafat, and Swaraj within British Empire', 'Achievement of Purna Swaraj (Complete Independence)'],
          ['Underlying Action', 'Refusing cooperation with colonial institutions and boycotting British products', 'Actively breaking and violating colonial laws (salt monopoly, forest laws, taxes)'],
          ['Trigger Event', 'Rowlatt Act, Jallianwala Bagh massacre, and dismemberment of Ottoman Caliphate', 'Rejection of Gandhi’s 11 demands and British salt tax monopoly'],
          ['Participation of Women', 'Limited primarily to boycotting foreign cloth and promoting domestic charkha spinning', 'Massive; thousands of women picketed foreign cloth/liquor shops and went to prison'],
          ['Muslim Participation', 'Extremely high due to formal partnership with Khilafat leadership (Ali brothers)', 'Significantly lower; communal mistrust widened after the collapse of Khilafat'],
          ['Conclusion / Withdrawal', 'Abruptly called off by Gandhi after the violent Chauri Chaura incident in Feb 1922', 'Suspended after Gandhi-Irwin Pact (1931), restarted, and gradually lost momentum by 1934'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'WWI created severe economic distress (inflation, taxes, forced recruitment) in India. Gandhi returned from South Africa in 1915, deploying Satyagraha in Champaran (1917), Kheda (1917), and Ahmedabad (1918). Nationwide anger against the Rowlatt Act (1919) led to the Jallianwala Bagh massacre on 13 April 1919 by General Dyer. Gandhi partnered with the Khilafat Movement (Ali brothers) to launch the Non-Cooperation Movement (1920) boycotting British schools, courts, and textiles. The movement spread to Awadh peasants (Baba Ramchandra) and Andhra tribals (Alluri Sitaram Raju), but was aborted after the Chauri Chaura violence in 1922. The 1928 Simon Commission was boycotted. Lahore Congress (1929) declared Purna Swaraj. Gandhi led the 240-mile Salt March to Dandi in 1930, launching Civil Disobedience where laws were broken. Clashes with Ambedkar over separate electorates were settled by the 1932 Poona Pact granting reserved seats in joint electorates. Collective belonging was cultivated through Bankim Chandra’s "Vande Mataram", Abanindranath Tagore’s Bharat Mata, and the tricolor Swaraj flag.',
      goldenPoints: [
        'Mahatma Gandhi returned to India from South Africa in January 1915.',
        'Early Satyagraha campaigns: Champaran (1917, indigo), Kheda (1917, revenue), Ahmedabad (1918, mill wages).',
        'Rowlatt Act (1919) allowed detention of political suspects without trial for two years.',
        'General Dyer ordered the Jallianwala Bagh massacre in Amritsar on 13 April 1919.',
        'Non-Cooperation Movement was adopted at the Nagpur Congress in December 1920 and called off after Chauri Chaura (1922).',
        'Purna Swaraj resolution was passed at the Lahore Congress in December 1929 under Jawaharlal Nehru.',
        'Gandhi launched Civil Disobedience with the 240-mile Dandi Salt March (12 March – 6 April 1930).',
        'Poona Pact (1932) between Gandhi and Ambedkar granted reserved seats for Dalits in general electorates.',
      ],
      mindMapSteps: [
        'Post-WWI Crisis & Gandhian Satyagraha: Champaran, Kheda, Ahmedabad & Rowlatt Black Act',
        'Jallianwala Bagh Massacre (13 April 1919) & Khilafat Alliance',
        'Non-Cooperation Movement (1920-22): Urban Boycott, Awadh Peasants & Tribal Guerrillas → Chauri Chaura Halt',
        'Simon Boycott (1928) & Lahore Purna Swaraj Declaration (1929)',
        'Dandi Salt March (1930) & Civil Disobedience → Gandhi-Irwin Pact & Poona Pact (1932)',
      ],
      commonPitfalls: [
        'Non-Cooperation meant refusing to cooperate with the government; Civil Disobedience meant actively BREAKING colonial laws.',
        'The Poona Pact did NOT grant separate electorates to Dalits; it granted reserved seats in a JOINT electorate.',
        'Alluri Sitaram Raju was inspired by Gandhi’s message of khadi, but opposed non-violence, insisting that liberation required force.',
      ],
    },
  },

  'c10-hist-ch3': {
    shortNotes: [
      {
        title: 'Pre-Modern World, Silk Routes & Conquest by Disease',
        bullets: [
          'Global Interconnectedness: Long history of trade, migration, capital flows, and cultural exchange. Cowrie shells (money) from Maldives traveled to China and West Africa.',
          'Silk Routes: Vast network linking Asia with Europe and North Africa; transported Chinese silk and pottery, Indian textiles and spices westward; returned precious metals (gold, silver) eastward.',
          'Food Travels: Noodles became spaghetti in Italy; Arab travelers took pasta to 5th-century Sicily; Columbus introduced common foods (potatoes, maize, tomatoes, chilies, sweet potatoes) to Europe from Americas.',
          'Irish Potato Famine (1845–1849): Ireland’s poorest peasants were so dependent on potatoes that when a fungal blight destroyed the crop, over 1 million people starved to death.',
          'Conquest by Disease: European conquest of Americas was decided not by guns, but by germs (Smallpox). Native Americans had no biological immunity due to long isolation; smallpox decimated entire native communities, clearing the path for Spanish conquistadors.',
        ],
      },
      {
        title: 'The Nineteenth Century (1815–1914): Three Global Flows',
        bullets: [
          'Three Flows of International Exchange: 1. Flow of Trade (goods like wheat, cloth); 2. Flow of Labour (migration of workers); 3. Flow of Capital (short and long-term investments).',
          'Corn Laws in Britain: Tariffs restricting food grain imports to protect British landlords. Industrialists and urban dwellers forced their abolition. Abolition led to cheap food imports, British agriculture collapsing, and millions migrating to cities or overseas (America, Australia).',
          'Global Agricultural Economy: World transformed by refrigerated ships (allowed transport of frozen meat from America and Australasia to Europe, making meat affordable for working classes), railways, and telegraphs.',
          'Colonialism & Rinderpest (Cattle Plague) in Africa (1890s): Rinderpest arrived via infected cattle imported from British Asia; swept through Africa killing 90% of cattle. Devastated African livelihoods, forcing pastoralists into wage labor in European gold and diamond mines.',
          'Indentured Labour Migration: Contract laborers recruited to work on plantations in Caribbean (Trinidad, Guyana, Suriname), Mauritius, and Fiji. Described by Hugh Tinker as "a new system of slavery". Chutney music and Hosay festival in Trinidad reflect blended cultural fusion.',
          'Indian Bankers Abroad: Shikaripuri shroffs and Nattukottai Chettiars financed export agriculture in Central and Southeast Asia; Hyderabadi Sindhi traders operated worldwide beyond European colonies.',
        ],
      },
      {
        title: 'Inter-War Economy, Great Depression & Bretton Woods',
        bullets: [
          'First World War (1914–18): First industrial war; deployed machine guns, tanks, poison gas; Britain borrowed heavily from US banks; US transformed from international debtor to world creditor.',
          'Great Depression (1929–mid 1930s): Caused by agricultural overproduction (glut of grain, collapsing prices) and withdrawal of US foreign loans (Wall Street Crash Oct 1929). US banking system collapsed; thousands of banks went bankrupt.',
          'Impact on India: Agricultural prices crashed by 50% (jute prices fell 60%); peasants fell deeply into debt; India exported enormous amounts of gold ("distress gold") which helped finance Britain’s recovery.',
          'Bretton Woods Conference (July 1944 in New Hampshire, USA): Designed to establish post-war economic stability and full employment.',
          '- Established Bretton Woods Twins: International Monetary Fund (IMF, to deal with external surpluses/deficits) and World Bank (IBRD, to finance post-war reconstruction).',
          '- Fixed Exchange Rate System: National currencies pegged to US Dollar, and Dollar pegged to gold at $35 per ounce.',
          '- Decolonization & Group of 77 (G-77): Developing nations did not benefit from Western boom; formed G-77 demanding New International Economic Order (NIEO) for real control over raw materials and fair prices.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. The Pre-Modern Global Crucible: Silk Routes, Transcontinental Crops, and Biological Warfare',
        content: 'Globalization is not exclusively a modern phenomenon. For millennia, human civilizations have been intricately entangled through the movement of traders, pilgrims, priests, soldiers, and refugees. Long-distance Silk Routes knit together the vast geographic expanse of Afro-Eurasia, stretching from Xi’an in imperial China across the high passes of Central Asia into Damascus, Alexandria, Rome, and Venice. Along these maritime and overland arteries flowed Chinese raw silk, celadon porcelain, Indian calicoes, and Malabar black pepper, in return for Roman gold, Venetian glass, and bullion. Concurrently, food crops crossed oceans. When Christopher Columbus stumbled upon the Americas in 1492, he inadvertently unlocked an immense reservoir of indigenous American domestications: potatoes, maize, tomatoes, chilies, pineapples, and groundnuts. The humble potato transformed European demography, providing cheap, dense carbohydrates that sustained the exploding urban working class of industrializing Europe. Conversely, catastrophic reliance on this single monoculture led to the Irish Potato Famine of 1845–1849, during which a devastating fungal blight (Phytophthora infestans) liquidated potato crops, starving one million impoverished Irish tenant farmers and forcing two million to emigrate. In the sixteenth century, European penetration of the Americas was decided not by firearms or Spanish steel armor, but by deadly biological contagion. Having existed in biological isolation from Afro-Eurasia for twelve millennia, native American populations possessed zero immunological resistance to European pathogens. Once introduced by Spanish conquistadors, smallpox raced ahead of marching armies, killing up to ninety percent of native populations, collapsing the Inca and Aztec empires and paving the way for European colonial hegemony.',
        keyTakeaway: 'Ancient Silk Routes facilitated trade and crop exchanges (potatoes, maize), while European colonization was achieved through biological contagion (smallpox) decimating immunologically naive indigenous Americans.',
        highlights: [
          'Overland and maritime Silk Routes linked China, India, and the Middle East with Europe',
          'Post-1492 Columbian Exchange introduced potatoes, tomatoes, maize, and chilies to Eurasia',
          'Irish Potato Famine (1845–1849) starved 1 million people due to extreme monoculture reliance',
          'Smallpox wiped out up to 90% of native Americans, acting as the ultimate weapon of conquest',
        ],
      },
      {
        heading: '2. The Imperial World Economy (1815–1914): Free Trade, Indentured Slavery, and the Rinderpest Catastrophe',
        content: 'During the long nineteenth century (1815–1914), the Industrial Revolution in Britain reconstituted the globe into a singular, highly integrated imperial economy organized around three foundational flows: the flow of trade (manufactured consumer goods and raw agricultural commodities), the flow of labor (migratory working masses), and the flow of capital (financial investments and loans). In Britain, population growth and urbanization initially led to the enactment of the "Corn Laws", which levied steep import tariffs on foreign grain to protect the profits of wealthy landed aristocrats. However, surging food prices sparked fierce protests from urban factory workers and industrial magnates, culminating in the abolition of the Corn Laws. The resulting influx of cheap Russian, American, and Australian wheat caused British agricultural prices to collapse, bankrupting domestic farms and driving millions of rural laborers into industrial city slums or overseas colonies. To transport bulky commodities across continents, technological revolutions were unleashed: steamships cut ocean voyage times, continental railway networks penetrated the interiors of North America and the Russian steppes, and refrigerated cargo ships (perfected in the 1870s) allowed perishable chilled meat to be transported from Argentina and New Zealand to London butcher shops, turning meat into an everyday staple of the European working-class diet. Yet this global prosperity was underwritten by brutal colonial subjugation. In Africa in the 1890s, European colonizers introduced cattle infected with Rinderpest (cattle plague), which swept across the continent like wildfire, eradicating ninety percent of indigenous cattle herds. Deprived of their traditional pastoral livelihoods, Africans were forced into wage labor in European gold and diamond mines. Simultaneously, in India and China, the colonial state recruited millions of impoverished peasants under deceptive indentured contracts to labor on tropical sugar, rubber, and tea plantations in the Caribbean, Mauritius, Ceylon, and Fiji—an exploitative bonded system historians categorize as a modern reincarnation of slavery.',
        keyTakeaway: 'The 19th-century economy combined free-market flows and technological breakthroughs (refrigerated ships, railways) with colonial dispossession, rinderpest cattle devastation in Africa, and indentured labor.',
        highlights: [
          'Abolition of Corn Laws dismantled British farming, triggering mass migration to cities and colonies',
          'Refrigerated ships allowed transatlantic meat transport, lowering living costs for European workers',
          'Rinderpest plague (1890s) wiped out 90% of African cattle, forcing pastoralists into colonial wage labor',
          'Indentured labor migration transported millions of Indians to Caribbean and Pacific plantations under bonded servitude',
        ],
      },
      {
        heading: '3. Inter-War Turmoil, the Great Depression of 1929, and the Architecture of Bretton Woods',
        content: 'The First World War permanently crippled the Victorian global economic order. As the first total industrial conflict, it required the mobilization of machine guns, fighter aircraft, and chemical weapons, transforming Britain from the world’s leading creditor into a debtor nation, while the United States emerged as the global financial superpower. In 1929, this brittle post-war edifice collapsed into the Great Depression. The catastrophe stemmed from two structural vulnerabilities: acute agricultural overproduction (which flooded markets, driving grain prices to historical lows and bankrupting farmers) and the sudden contraction of American foreign loans following the catastrophic Wall Street stock market crash of October 1929. American banks collapsed by the thousands, recalling loans worldwide and imposing prohibitive import tariffs (Smoot-Hawley Tariff), dragging global trade into a death spiral. In India, the depression devastated the agrarian interior: wheat prices plunged fifty percent, and raw jute prices dropped sixty percent, ruining Bengali cultivators. To survive crushing colonial revenue demands, Indian peasants sold their family jewelry and heirlooms, turning India into a massive exporter of precious gold ("distress gold") that ironically stabilized the British pound sterling. To prevent a recurrence of economic anarchy after World War II, global leaders convened at Bretton Woods, New Hampshire, in July 1944. The conference created the "Bretton Woods Twins": the International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (World Bank). The framework established a fixed exchange rate system, pegging national currencies to the US Dollar, which in turn was convertible to gold at thirty-five dollars per ounce. However, because the IMF and World Bank remained dominated by Western veto powers, newly independent developing nations organized the Group of 77 (G-77) in the 1960s, demanding a New International Economic Order (NIEO) based on sovereign control over natural resources and equitable terms of global trade.',
        keyTakeaway: 'The 1929 Great Depression caused agricultural collapses and global bank runs; post-WWII reconstruction established the Bretton Woods twins (IMF, World Bank) and fixed exchange rates, later contested by the G-77.',
        highlights: [
          'First World War transformed the United States from an international debtor into the world’s financial creditor',
          'The Great Depression was caused by agricultural overproduction and the collapse of US foreign credit',
          'Indian peasants survived the crisis by liquidating family gold, which stabilized the British economy',
          'Bretton Woods Conference (1944) created the IMF, World Bank, and the gold-pegged US dollar exchange system',
        ],
      },
    ],
    keyConcepts: [
      { term: 'Columbian Exchange', explanation: 'The widespread transfer of plants, animals, culture, human populations, communicable diseases, and ideas between the Americas and Afro-Eurasia following Columbus’s 1492 voyages.' },
      { term: 'Corn Laws', explanation: 'British tariff laws restricting foreign grain imports, abolished in 1846 following urban protests, inaugurating an era of global free trade.' },
      { term: 'Rinderpest', explanation: 'A catastrophic viral cattle disease that swept across Africa in the 1890s, decimating 90% of livestock and subordinating the indigenous labor force.' },
      { term: 'Bretton Woods Twins', explanation: 'The International Monetary Fund (IMF) and the World Bank (IBRD), established at the 1944 Bretton Woods conference to regulate post-war international finance.' },
    ],
    importantDates: [
      { date: '1492 CE', event: 'Christopher Columbus Lands in the Americas', significance: 'Initiated transcontinental biological and economic globalization.' },
      { date: '1845–1849 CE', event: 'The Great Irish Potato Famine', significance: 'Fungal blight wiped out potato crops, resulting in over 1 million starvation deaths.' },
      { date: '1890s CE', event: 'Rinderpest Plague Sweeps Africa', significance: 'Killed 90% of cattle and enabled European colonial subjugation of African labor.' },
      { date: 'October 1929 CE', event: 'Wall Street Crash in the United States', significance: 'Triggered the worldwide Great Depression lasting through the 1930s.' },
      { date: 'July 1944 CE', event: 'Bretton Woods Conference (New Hampshire)', significance: 'Established the IMF, World Bank, and post-war international monetary order.' },
    ],
    importantPeople: [
      { name: 'Christopher Columbus', role: 'Genoese Navigator', contribution: 'Reached the Americas in 1492, triggering the global Columbian Exchange of crops and diseases.' },
      { name: 'Hernán Cortés', role: 'Spanish Conquistador', contribution: 'Conquered the Aztec Empire, leveraging smallpox contagion to crush native resistance.' },
      { name: 'John Maynard Keynes', role: 'British Economist', contribution: 'Key architect of the 1944 Bretton Woods system designed to ensure post-war full employment.' },
    ],
    definitions: [
      { term: 'Indentured Labour', definition: 'A bonded laborer under legal contract to work for a specific employer for a fixed number of years to pay off travel passage, food, and lodging costs.', context: 'Colonial labor history' },
      { term: 'Tariff', definition: 'A tax or customs duty levied on imported goods at the point of entry into a country to protect domestic manufacturers.', context: 'International trade' },
      { term: 'New International Economic Order (NIEO)', definition: 'A set of trade proposals championed by developing nations (G-77) in the 1970s demanding fair commodity prices and sovereign control over resources.', context: 'Global development' },
    ],
    importantFigures: [
      {
        title: 'Chronological Milestones in Modern Global Economic Integration',
        description: 'Key phases, defining dynamics, and institutional milestones of global connectivity.',
        type: 'table',
        headers: ['Historical Era', 'Key Geographic Flows', 'Dominant Economic Characteristic', 'Major Global Institutional Consequence'],
        rows: [
          ['Pre-Modern (Pre-1500)', 'Silk routes: Asia, Europe, North Africa', 'Luxury goods (silk, spices) and food crop transmissions', 'Interconnection of ancient Eurasian empires; Columbian Exchange'],
          ['19th Century (1815–1914)', 'Global flows: Trade, indentured labor, capital', 'Abolition of Corn Laws, steamships, refrigerated transport', 'Subjugation of colonies; extraction of raw materials for European factories'],
          ['Inter-War Era (1914–1939)', 'War loans, agricultural crashes, financial panic', 'Great Depression (1929), collapse of international trade and banks', 'Fallout in colonies (gold drain from India); rise of economic protectionism'],
          ['Post-WWII Era (1944 Onwards)', 'Capital investment, industrial reconstruction, FDI', 'Bretton Woods system: fixed exchange rates pegged to US dollar', 'Creation of IMF, World Bank; emergence of G-77 demanding NIEO'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Globalization has ancient roots: Silk Routes linked Afro-Eurasia with trade in silk, spices, and porcelain, while food crops (potatoes, maize, chilies) crossed oceans following Columbus’s 1492 voyages. European conquest of the Americas succeeded through smallpox biological contagion. In the 19th century (1815–1914), three global flows emerged: goods, labor, and capital. Britain abolished the Corn Laws, ushering in global food imports supported by railways and refrigerated ships. Colonialism exploited the periphery: the 1890s Rinderpest cattle plague decimated 90% of African livestock, forcing locals into mine labor, while indentured Indian labor was shipped to Caribbean plantations. WWI made the US the world’s creditor. The 1929 Great Depression (triggered by agricultural overproduction and the Wall Street crash) plunged Indian crop prices by 50%, forcing peasants to export distress gold. The July 1944 Bretton Woods Conference established the IMF and World Bank to maintain post-war monetary stability with dollar-pegged exchange rates, later contested by the G-77 developing nations seeking a New International Economic Order (NIEO).',
      goldenPoints: [
        'The ancient Silk Routes connected Asia with Europe and northern Africa.',
        'Potatoes, maize, tomatoes, and chilies were introduced to Europe from the Americas by Columbus.',
        'Smallpox acted as the decisive weapon of Spanish conquest in the Americas due to lack of native immunity.',
        'The Irish Potato Famine of 1845–1849 killed 1 million people due to potato crop failure.',
        'Corn Laws were British tariffs restricting grain imports; their repeal inaugurated free agricultural trade.',
        'Rinderpest virus wiped out 90% of African cattle in the 1890s, forcing Africans into European wage labor.',
        'The Wall Street Crash of October 1929 triggered the Great Depression, slashing Indian wheat prices by 50%.',
        'The Bretton Woods Conference (1944) established the IMF and World Bank with fixed exchange rates.',
      ],
      mindMapSteps: [
        'Pre-Modern Web: Silk Routes & Columbian Food Exchange + Smallpox Conquest of the Americas',
        '19th-Century Flows: Trade, Indentured Labor, Capital + Abolition of Corn Laws & Refrigerated Ships',
        'Colonial Trauma: African Rinderpest Plague (90% Cattle Loss) & Indentured Caribbean Plantations',
        'Inter-War Breakdown: WWI US Creditor Shift & 1929 Great Depression (Agricultural Collapse & Gold Drain)',
        'Post-War Governance: Bretton Woods Conference (1944) → IMF, World Bank & G-77 NIEO Resistance',
      ],
      commonPitfalls: [
        'The Corn Laws were tariffs designed to RESTRICT grain imports to keep food prices high for British landlords, not to make food cheap.',
        'Rinderpest was an animal disease affecting cattle, not a human epidemic.',
        'The Bretton Woods system was based on FIXED exchange rates pegged to the US dollar, which was pegged to gold.',
      ],
    },
  },

  'c10-hist-ch4': {
    shortNotes: [
      {
        title: 'Proto-Industrialisation & The Factory System',
        bullets: [
          'Proto-Industrialisation: Phase of industrialization before factories emerged; decentralized production in the countryside; merchant capitalists supplied raw wool/cotton to peasant households who spun and wove cloth in their cottages; coordinated via London as a finishing center.',
          'Coming Up of the Factory: First factories arose in England in the 1730s; cotton was the leading industrial sector; Richard Arkwright created the cotton mill, bringing machinery and workers together under one roof for centralized supervision.',
          'Pace of Industrial Change: Industrialization was not instant. Cotton and metal (iron and steel) were the dynamic industries, but over 80% of total workforce remained in traditional non-mechanized workshops well into the mid-19th century.',
        ],
      },
      {
        title: 'Hand Labour, Steam Power & The Plight of Workers',
        bullets: [
          'Why Victorians Preferred Hand Labour: Aristocrats and bourgeoisie preferred hand-made goods because they symbolized refinement, unique design, and superior finish; machines made uniform products for colonial export; labour was abundant and wages were low, making expensive steam engines uneconomical for seasonal industries (gas works, breweries, printing).',
          'Steam Engine: Patented by James Watt (1781), improving Thomas Newcomen’s engine; manufactured by Matthew Boulton; industrialists were slow to adopt it due to frequent breakdowns and costly repairs.',
          'Life of Industrial Workers: Abundant rural labor flooded industrial cities; jobs required personal connections; workers slept in night refuges or under bridges; seasonal layoffs left workers destitute; introduction of the Spinning Jenny (invented by James Hargreaves in 1764) sparked violent attacks by women spinners who feared unemployment.',
        ],
      },
      {
        title: 'Industrialisation in the Colonies: The Indian Textile Crisis',
        bullets: [
          'Pre-Colonial Indian Textiles: Indian fine cotton and silk dominated international markets from Southeast Asia to the Middle East; Armenian and Persian merchants financed inland trade; Surat and Hoogly were flourishing banking ports.',
          'East India Company Monopolies: Replaced old merchant networks with appointed paid agents called "Gomasthas" to supervise weavers, collect cloth, and inspect quality; introduced advance loan system (peasant accepted advances and could not sell to any other merchant); led to harsh floggings of weavers, migration, and abandonment of looms.',
          'Manchester Comes to India: British textile manufacturers persuaded government to impose tariffs on Indian textiles entering Britain and eliminate duties on British cloth entering India; Indian domestic and export markets flooded with cheap machine-made Manchester cloth; Indian hand-weavers suffered catastrophic decline.',
        ],
      },
      {
        title: 'Early Indian Industrialists & The Market for Goods',
        bullets: [
          'Early Indian Entrepreneurs: Made fortunes in China opium trade or raw cotton export to Britain: Dwarkanath Tagore (Bengal), Dinshaw Petit and Jamsetjee Nusserwanjee Tata (Bombay), Seth Hukumchand (Marwari who set up first Indian jute mill in Calcutta, 1917), G.D. Birla.',
          'Peculiarities of Industrial Growth: British Managing Agencies (Bird Heiglers & Co., Andrew Yule) controlled finance; Indian entrepreneurs initially set up cotton spinning mills producing yarn exported to China; Swadeshi Movement (1905) boycotted foreign cloth, prompting Indian mills to switch from yarn to cloth weaving.',
          'WWI Turning Point: British mills diverted to wartime military production; imports into India crashed; Indian factories supplied jute bags, cloth for uniforms, tents, and boots; Indian industrial production surged and captured domestic markets.',
          'Creating Markets for Goods: Manufacturers deployed Advertisements, Illustrated Calendars (hung in poor tea shops and homes), and Product Labels featuring Indian gods and goddesses (Krishna, Saraswati) or historic royalty to build consumer trust and make foreign goods seem Indian.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. Deconstructing Proto-Industrialisation and the Emergence of the Centralized Factory System',
        content: 'Historical narratives of industrialization often equate the Industrial Revolution exclusively with smoky urban factory chimneys and humming steam engines. Modern economic historians, however, identify an extensive preceding phase termed "Proto-Industrialisation". During the seventeenth and eighteenth centuries, European merchant capitalists in cities faced strict urban craft guilds that controlled production monopolies, fixed raw material prices, and barred new entrants. To circumvent guild restrictions, merchants migrated to the rural countryside, providing advance cash and raw wool to peasant households. Smallholder farming families—whose minuscule agricultural plots could no longer generate subsistence incomes—eagerly took up carding, spinning, weaving, and dyeing in their cottages. This decentralized rural production chain operated like an interconnected proto-assembly line: merchants purchased wool from staplers, distributed it to rural spinners, passed yarn to village weavers, carried woven cloth to fullers, and transported it to dyers, with London functioning as the global finishing and marketing hub. In the 1730s, the first urban factories began appearing in England, exploding in number after Richard Arkwright invented the mechanized cotton mill. The cotton mill transformed production: replacing dispersed cottage handcraft with heavy water-powered machinery, concentrating the entire production sequence—from raw cotton ginning to final cloth weaving—under a single factory roof, enabling industrial owners to enforce rigid workplace discipline, standardized quality control, and strict labor supervision.',
        keyTakeaway: 'Proto-industrialization was a decentralized rural cottage manufacturing system run by merchant capital, later replaced by Arkwright’s centralized urban factory mill.',
        highlights: [
          'Proto-industrialization allowed merchants to bypass restrictive urban guild monopolies',
          'Rural peasant households supplemented inadequate agrarian incomes through home-based spinning and weaving',
          'London functioned as the international finishing hub for rural proto-industrial cloth',
          'Richard Arkwright’s cotton mill brought machines and labor together under centralized factory supervision',
        ],
      },
      {
        heading: '2. The Technology Paradox: Hand Labour, Steam Power, and the Everyday Precarity of Victorian Workers',
        content: 'Despite the mythological status of the steam engine in Victorian lore, industrial machinery was adopted at a remarkably gradual, uneven pace. James Watt patented an improved version of Thomas Newcomen’s steam engine in 1781, manufactured in partnership with industrialist Matthew Boulton. Yet across Britain, only about 321 steam engines were operational by the early nineteenth century. Industrialists hesitated to invest in steam power because early engines were prone to frequent catastrophic mechanical explosions, replacement parts were astronomical in cost, and maintenance engineers were scarce. Furthermore, in nineteenth-century Britain, labor was super-abundant. Impoverished rural migrants flooded industrial cities looking for employment, driving wages down. For industries subject to seasonal cycles—such as urban gas works (active in winter), breweries (busy during winter holidays), printing presses (producing Christmas editions), and ship repair yards—hiring cheap seasonal manual laborers was far more profitable than purchasing expensive fixed-capital machinery that would lie idle for half the year. Additionally, the British aristocratic elite valued bespoke, hand-crafted merchandise: hand-carved furniture and tailored woolens possessed intricate geometric patterns and artistic variations that standardized machines could not replicate. Standardized factory goods were destined purely for colonial mass export. For the human working class, this era was defined by severe vulnerability. Job access depended entirely on personal village kinship networks; rural arrivals without contacts slept in squalid night refuges or damp arches under bridges. Because machinery directly threatened their subsistence, workers retaliated: the introduction of James Hargreaves’s multi-spindle Spinning Jenny in 1764 provoked riots by female cottage spinners, who stormed workshops to smash the mechanical contraptions.',
        keyTakeaway: 'Victorian capitalists favored cheap manual labor over costly, breakdown-prone steam engines for seasonal trades and bespoke aristocratic goods, while workers rioted against labor-displacing machines.',
        highlights: [
          'Early steam engines were expensive, prone to breakdowns, and adopted slowly across industry',
          'Abundant manual labor made seasonal human hiring cheaper than heavy machine investment',
          'Victorian elites preferred hand-made goods for their artistic refinement and unique quality',
          'Introduction of the Spinning Jenny sparked violent machine-wrecking riots by displaced women spinners',
        ],
      },
      {
        heading: '3. Colonial De-Industrialisation, the Rise of Indian Mill Barons, and the Marketing of Swadeshi Goods',
        content: 'Before British industrial supremacy, India was the undisputed textile manufacturing workshop of the world. Indian superfine muslins, calicoes, and chintzes enjoyed global dominance, sustained by complex merchant credit networks operating through vibrant trading ports like Surat in Gujarat and Hoogly in Bengal. As the East India Company consolidated political power following the 1765 Treaty of Allahabad, it systematically dismantled this indigenous merchant ecosystem. The Company appointed paid supervisory agents called "Gomasthas" who deployed sepoys to inspect cloth, enforce production quotas, and advance credit to weavers. Under the Company’s coercive contract system, weavers who took advances were legally barred from selling to rival French or Dutch traders; those who missed deadlines were publicly flogged and imprisoned, forcing thousands of weavers to desert their ancestral villages and abandon their looms. The death blow arrived in the early nineteenth century when Lancashire and Manchester mill lobbies pressured the British parliament to impose prohibitive import duties on Indian textiles while forcing the colonial administration in India to abolish tariffs on British cotton imports. Within decades, cheap, machine-made Manchester textiles flooded Indian bazaars, collapsing domestic textile production. Out of this devastation, however, an indigenous industrial bourgeoisie arose in the mid-nineteenth century, accumulating capital through the British-controlled opium trade with China and raw cotton exports. Visionary entrepreneurs like Dwarkanath Tagore in Bengal, Jamsetjee Nusserwanjee Tata and Dinshaw Petit in Bombay, and Seth Hukumchand in Calcutta established modern cotton spinning and jute mills. When the Swadeshi Movement erupted in 1905, nationalistic boycotts of foreign cloth compelled Indian industrialists to shift from spinning yarn for export to weaving finished cloth for domestic consumers. To capture markets, industrialists pioneered sophisticated marketing campaigns: printing vibrant illustrated calendars hung in common tea shops, and affixing product labels bearing images of Hindu deities (Krishna, Saraswati) or historical royalty, embedding the consumption of Indian-made goods into the cultural fabric of national pride.',
        keyTakeaway: 'British colonial policies destroyed Indian handloom supremacy through gomastha coercion and tariff manipulation, but pioneering Indian entrepreneurs built modern mills and leveraged Swadeshi marketing to capture domestic markets.',
        highlights: [
          'East India Company deployed coercive Gomasthas to monopolize handloom production and crush independent weavers',
          'Manchester machine-made cotton flooded India tariff-free, causing catastrophic colonial de-industrialization',
          'Indian industrialists (Tatas, Petits, Hukumchand) accumulated capital through China trade and built modern mills',
          'Swadeshi boycotts (1905) and deity-stamped product labels turned domestic manufacturing into an act of patriotism',
        ],
      },
    ],
    keyConcepts: [
      { term: 'Proto-Industrialisation', explanation: 'The historical phase of decentralized industrial production prior to modern urban factories, where merchant capitalists coordinated rural cottage manufacturing.' },
      { term: 'Gomastha', explanation: 'A designated paid agent of the British East India Company whose task was to supervise Indian handloom weavers, collect supplies, and examine cloth quality.' },
      { term: 'Spinning Jenny', explanation: 'A multi-spindle spinning machine invented by James Hargreaves in 1764 that dramatically accelerated yarn production, provoking labor unrest.' },
      { term: 'Managing Agencies', explanation: 'European commercial firms (e.g., Bird Heiglers & Co., Andrew Yule) that mobilized capital, established joint-stock companies, and dominated industrial production in colonial India.' },
    ],
    importantDates: [
      { date: '1730s CE', event: 'Earliest Factories Established in England', significance: 'Initiated the transition from cottage production to centralized mechanical mills.' },
      { date: '1764 CE', event: 'James Hargreaves Invents Spinning Jenny', significance: 'Multiplied thread spinning output, provoking resistance from traditional hand spinners.' },
      { date: '1781 CE', event: 'James Watt Patents the Steam Engine', significance: 'Refined Newcomen’s design, creating reliable mechanical rotary power for modern industry.' },
      { date: '1854 CE', event: 'First Modern Cotton Textile Mill in Bombay', significance: 'Established by Cowasjee Nanabhoy Davar, marking the birth of Indian mechanized textile industry.' },
      { date: '1905 CE', event: 'Launch of the Swadeshi Movement', significance: 'Boycotted foreign goods, stimulating demand for Indian handloom and mill-made cloth.' },
      { date: '1917 CE', event: 'First Indian Jute Mill Established in Calcutta', significance: 'Built by Seth Hukumchand, challenging European monopoly over jute processing.' },
    ],
    importantPeople: [
      { name: 'Richard Arkwright', role: 'English Industrialist & Inventor', contribution: 'Created the mechanized cotton mill, centralizing spinning operations under one factory roof.' },
      { name: 'James Watt', role: 'Scottish Mechanical Engineer', contribution: 'Patented the rotary steam engine (1781), providing mechanical motive power to factories.' },
      { name: 'Dwarkanath Tagore', role: 'Pioneering Indian Industrialist', contribution: 'Invested fortunes made in China trade into modern mining, banking, and shipping enterprises in Bengal.' },
      { name: 'Jamsetjee Nusserwanjee Tata', role: 'Industrial Visionary', contribution: 'Founded Tata Iron and Steel Company (TISCO) at Jamshedpur (1907) and modern textile mills.' },
      { name: 'Seth Hukumchand', role: 'Marwari Industrial Pioneer', contribution: 'Established the first indigenous Indian jute mill in Calcutta in 1917.' },
    ],
    definitions: [
      { term: 'Stapler', definition: 'A merchant who sorts and grades wool according to the length and quality of its natural fiber before it is spun.', context: 'Textile production' },
      { term: 'Fuller', definition: 'A textile worker who cleans, thickens, and processes raw woven cloth by gathering and pressing it.', context: 'Proto-industrial trades' },
      { term: 'Carding', definition: 'The mechanical or manual process in which raw cotton or wool fibers are untangled and prepared prior to spinning.', context: 'Textile manufacturing' },
    ],
    importantFigures: [
      {
        title: 'Contrast: Cottage Proto-Industrial Production vs. Urban Mechanized Factory System',
        description: 'Organizational, technological, and social parameters of the two historical industrial models.',
        type: 'table',
        headers: ['Parameter', 'Proto-Industrial Cottage System', 'Mechanized Factory System (Post-1780s)'],
        rows: [
          ['Location of Production', 'Dispersed rural agrarian peasant cottages and workshops', 'Centralized multi-story urban mills located in industrial cities'],
          ['Motive Power Used', 'Human muscle power, supplemented by simple wooden spinning wheels', 'Water wheels and coal-fired James Watt rotary steam engines'],
          ['Capital & Control', 'Merchant capitalists supplied raw materials; peasants owned their homes', 'Mill owners owned the factory building, machinery, and production tools'],
          ['Workforce Structure', 'Entire peasant farming family participated flexibly alongside farm work', 'Individual wage laborers subject to rigid clock-time and harsh factory discipline'],
          ['Supervision & Quality', 'Decentralized; difficult for merchant to inspect hundreds of cottages', 'Centralized; intensive daily supervision, quality control, and uniform standards'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Industrialization began before factories via "Proto-Industrialisation"—a decentralized rural cottage system where urban merchant capitalists bypassed guild monopolies by supplying raw wool/cotton to rural peasants coordinated through London as a finishing center. In the 1730s, factories emerged, culminating in Richard Arkwright’s cotton mill which brought machines and workers under one roof. Victorian industrialists initially preferred cheap hand labor over expensive, breakdown-prone steam engines for seasonal trades and bespoke aristocratic goods. The introduction of machines like Hargreaves’s Spinning Jenny (1764) sparked worker riots. In colonial India, pre-colonial fine handlooms dominated global trade until the East India Company used coercive Gomasthas to monopolize output. British tariffs on Indian cloth and duty-free import of Manchester machine cotton flooded Indian bazaars, crushing native handweavers. Pioneering Indian entrepreneurs (Dwarkanath Tagore, Jamsetjee Tata, Seth Hukumchand) built modern textile and jute mills using capital accumulated in the China opium and raw cotton trade. The 1905 Swadeshi movement and WWI supply shortages enabled Indian mills to capture the domestic market, leveraging advertisements and deity-stamped product labels to cultivate brand loyalty.',
      goldenPoints: [
        'Proto-industrialization refers to the phase of industrialization before factories emerged, based in rural cottages.',
        'Richard Arkwright invented the mechanized cotton mill, centralizing production under one roof.',
        'James Watt patented the improved rotary steam engine in 1781 in partnership with Matthew Boulton.',
        'The Spinning Jenny, invented by James Hargreaves in 1764, caused riots by women spinners fearing job loss.',
        'Gomasthas were paid agents of the East India Company who coerced Indian weavers and enforced output quotas.',
        'The first modern Indian cotton textile mill was established in Bombay in 1854.',
        'Seth Hukumchand set up the first Indian-owned jute mill in Calcutta in 1917.',
        'Indian manufacturers used calendars and images of gods (Krishna, Saraswati) on product labels to market Swadeshi goods.',
      ],
      mindMapSteps: [
        'Proto-Industrial Web: Rural Peasant Cottages, Merchant Capital & London Finishing Hub',
        'Arkwright’s Factory System & Technology Hesitation: High Steam Engine Costs vs Cheap Manual Labor',
        'Workers’ Agonies: Tramping, Slum Night Refuges & Spinning Jenny Riots',
        'Colonial De-Industrialisation: Coercive Gomasthas & Manchester Machine-Made Flood',
        'Indian Industrial Renaissance: China Trade Fortunes (Tatas, Hukumchand), Swadeshi Push & Deity-Branded Marketing',
      ],
      commonPitfalls: [
        'Factories did NOT instantly replace hand labor; well into the mid-19th century, less than 20% of workers were in mechanized factories.',
        'The East India Company’s Gomasthas were not traditional Indian moneylenders; they were direct, salaried company appointees with coercive police backing.',
        'The Swadeshi Movement shifted Indian textile production from spinning export yarn to weaving domestic cloth.',
      ],
    },
  },
  ...FULL_NOTES_CLASS_10_GEO,
  ...FULL_NOTES_CLASS_10_CIV,
  ...FULL_NOTES_CLASS_10_ECO,
};
