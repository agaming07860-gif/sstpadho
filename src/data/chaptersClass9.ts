import { Chapter } from '../types/sst';
import { FULL_NOTES_CLASS_9 } from './fullNotesClass9';

const RAW_CHAPTERS_CLASS_9: Chapter[] = [
  // ==========================================
  // HISTORY
  // ==========================================
  {
    id: 'c9-hist-ch1',
    classLevel: 9,
    subject: 'history',
    chapterNumber: 1,
    title: 'The French Revolution',
    subtitle: 'Estate Society, Storming of Bastille, Declaration of Rights, Reign of Terror, and Legacy',
    overview: 'On 14 July 1789, the fortress-prison Bastille was stormed, marking the birth of the French Revolution. The revolution overturned the ancient feudal order, introduced universal principles of liberty, equality, and fraternity, and reshaped modern global politics.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'French Society in Late 18th Century',
        bullets: [
          'Divided into Three Estates: 1st (Clergy), 2nd (Nobility), 3rd (Peasants, merchants, artisans, lawyers).',
          'Only the Third Estate paid taxes (Tithe to church, Taille direct to state, indirect taxes on salt/tobacco).',
          'Subsistence crisis triggered by population increase (23M to 28M) and bad harvest driving up bread prices.',
        ],
      },
      {
        title: 'Outbreak of the Revolution (1789)',
        bullets: [
          'May 5, 1789: Louis XVI calls Estates General; Third Estate demands one vote per member, walks out, and takes the Tennis Court Oath (June 20).',
          'July 14, 1789: Angry crowds storm and demolish the Bastille prison in Paris.',
          'August 4, 1789: National Assembly abolishes feudal privileges and tithes.',
        ],
      },
      {
        title: 'Constitutional Monarchy to Reign of Terror',
        bullets: [
          '1791 Constitution: Created constitutional monarchy with Declaration of the Rights of Man and Citizen.',
          '1792: Monarchy abolished, France declared a Republic.',
          '1793-1794: Reign of Terror under Maximilien Robespierre; guillotine used against political enemies.',
          '1804: Napoleon Bonaparte crowns himself Emperor of France.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Declaration of the Rights of Man and Citizen',
        content: 'Drafted in 1791, the Declaration proclaimed natural and inalienable rights: right to life, freedom of speech, freedom of opinion, and equality before the law. The source of all sovereignty resided in the nation rather than an absolute monarch.',
        keyTakeaway: 'Transformed royal subjects into sovereign democratic citizens with fundamental human rights.',
      },
    ],
    keyConcepts: [
      { term: 'Reign of Terror', explanation: 'Period (1793-1794) under Robespierre characterized by drastic price controls, rationing, and execution of political dissenters via the guillotine.' },
      { term: 'Jacobins & Sans-culottes', explanation: 'Radical political club of Paris artisans, shoemakers, and workers who wore long trousers without knee-breeches to signify equality.' },
    ],
    importantDates: [
      { date: '14 July 1789', event: 'Storming of the Bastille', significance: 'Symbolic destruction of absolute royal despotism.' },
      { date: '1791', event: 'French Constitution framed', significance: 'Established constitutional monarchy and rights of man.' },
      { date: '1793', event: 'Execution of Louis XVI', significance: 'France becomes a radical republic.' },
      { date: '1804', event: 'Napoleon crowns himself Emperor', significance: 'Modernizes European legal and administrative systems.' },
      { date: '1815', event: 'Battle of Waterloo', significance: 'Final defeat of Napoleon Bonaparte.' },
    ],
    importantPeople: [
      { name: 'Maximilien Robespierre', role: 'Jacobin Leader', contribution: 'Ruled France during the Reign of Terror enforcing radical equality.' },
      { name: 'Olympe de Gouges', role: 'Feminist Revolutionary', contribution: 'Wrote Declaration of the Rights of Woman and Citizen in 1791.' },
    ],
    definitions: [
      { term: 'Tithe', definition: 'A tax levied by the Church, equal to one-tenth of agricultural produce.', context: 'Pre-revolutionary France.' },
      { term: 'Taille', definition: 'A direct tax paid by the Third Estate to the royal treasury.', context: 'Ancien Régime taxation.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Feudal estate inequality and bread shortages triggered the 1789 revolution. The Third Estate formed the National Assembly, stormed the Bastille, enacted rights of man, executed Louis XVI, survived the Jacobin Reign of Terror, and paved the way for Napoleon.',
      goldenPoints: ['Only the Third Estate paid taxes in pre-revolutionary France.', 'Slavery in French colonies was finally abolished in 1848.'],
      mindMapSteps: ['Three Estates & Crisis → Estates General & Bastille → Constitutional Monarchy → Reign of Terror → Napoleon'],
      commonPitfalls: ['Remember that Napoleon crowned himself Emperor in 1804, not immediately in 1789.'],
    },
    flashcards: [
      { id: 'fc-9-h1-1', front: 'When was the Bastille prison stormed?', back: '14 July 1789 in Paris.', category: 'date' },
    ],
    questions: [
      {
        id: 'c9-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which estate in France was exempt from paying taxes?',
        options: ['Third Estate', 'First and Second Estates', 'Only Peasants', 'Merchants and Lawyers'],
        correctOptionIndex: 1,
        answer: 'Option (B) First and Second Estates',
      },
    ],
  },
  {
    id: 'c9-hist-ch2',
    classLevel: 9,
    subject: 'history',
    chapterNumber: 2,
    title: 'Socialism in Europe and the Russian Revolution',
    subtitle: 'Liberals, Radicals, Bolsheviks, 1905 Revolution, February & October 1917, Collectivisation',
    overview: 'The Russian Revolution of 1917 transformed the autocracy of Tsar Nicholas II into the world’s first socialist state under Vladimir Lenin and the Bolshevik Party, inspiring global communist movements.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Liberals, Radicals, and Conservatives',
        bullets: [
          'Liberals: Tolerant of all religions, opposed uncontrolled dynastic power, wanted elected parliament, but opposed universal adult franchise (favored voting only for property-owning men).',
          'Radicals: Supported government based on majority, wanted women’s voting rights, opposed privileges of great landowners.',
          'Conservatives: Accepted slow gradual change while respecting the past.',
        ],
      },
      {
        title: 'The 1905 Revolution & Bloody Sunday',
        bullets: [
          'On 22 January 1905, Father Gapon led workers to the Winter Palace demanding 8-hour workday and wage rise; Tsar’s police opened fire, killing over 100 workers ("Bloody Sunday").',
          'Tsar Nicholas II yielded to create an elected consultative parliament called the Duma, but dissolved it repeatedly.',
        ],
      },
      {
        title: '1917 Revolutions: February and October',
        bullets: [
          'February Revolution (1917): Bread shortages and mass strikes forced Tsar Nicholas II to abdicate on 2 March; Provisional Government formed under Kerensky.',
          'April Theses: Lenin returned from exile and demanded: War to end, Land to peasants, Banks nationalised.',
          'October Revolution (1917): Bolsheviks seized power under Lenin and Trotsky, establishing Soviet socialist rule.',
        ],
      },
      {
        title: 'Stalin and Collectivisation',
        bullets: [
          'Stalin took over after Lenin’s death; eliminated rich peasants (Kulaks) and forcibly merged individual holdings into collective farms (Kolkhoz).',
          'Famine of 1930-1933 killed over 4 million people due to resistance and harvest collapse.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Lenin’s April Theses',
        content: 'When Bolshevik leader Vladimir Lenin returned to Russia from exile in April 1917, he declared that the time had come for Soviets to take over power. He put forward three radical demands known as Lenin’s April Theses: (1) The war (WWI) be brought to a close; (2) Land be transferred to the peasants; (3) Banks be nationalised. He also argued that the Bolshevik Party rename itself the Communist Party.',
        keyTakeaway: 'The April Theses crystallized the socialist agenda for the October Revolution.',
      },
    ],
    keyConcepts: [
      { term: 'Kulaks', explanation: 'Well-to-do prosperous peasants in Russia targeted by Stalin during collectivisation.' },
      { term: 'Kolkhoz', explanation: 'Collective farms in the Soviet Union where peasants worked pooled land and shared produce.' },
    ],
    importantDates: [
      { date: '1905', event: 'Bloody Sunday in St Petersburg', significance: 'Sparked the 1905 Revolution and creation of the Duma.' },
      { date: 'March 1917', event: 'Tsar Nicholas II abdicates', significance: 'End of 300-year Romanov autocracy (February Revolution).' },
      { date: 'October 1917', event: 'Bolshevik uprising', significance: 'Lenin establishes first socialist government.' },
      { date: '1929', event: 'Stalin launches Collectivisation', significance: 'Forcible pooling of farmland into Kolkhoz.' },
    ],
    importantPeople: [
      { name: 'Vladimir Lenin', role: 'Bolshevik Leader', contribution: 'Led the October Revolution and issued April Theses.' },
      { name: 'Karl Marx', role: 'Socialist Philosopher', contribution: 'Authored Communist Manifesto, advocating overthrow of capitalism.' },
      { name: 'Joseph Stalin', role: 'Soviet General Secretary', contribution: 'Enforced collectivisation and rapid 5-year industrial plans.' },
    ],
    definitions: [
      { term: 'Duma', definition: 'The elected consultative parliament of Russia created by Tsar Nicholas II after the 1905 Revolution.', context: 'Russian politics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Industrial hardships and Tsarist autocracy spawned socialist thought (Marx, Engels). Bloody Sunday (1905) forced creation of the Duma. WWI devastating defeats led to the February 1917 abdication, followed by Lenin’s Bolshevik October Revolution and Stalin’s collectivisation.',
      goldenPoints: ['Lenin’s April Theses demanded ending war, land to peasants, and nationalisation of banks.', 'Bloody Sunday occurred on 22 January 1905.'],
      mindMapSteps: ['Socialist Ideas (Marx) → 1905 Bloody Sunday → Feb 1917 Fall of Tsar → Oct 1917 Bolshevik Seizure → Stalinist Kolkhoz'],
      commonPitfalls: ['Remember that February Revolution ousted the Tsar, while October Revolution brought the Bolsheviks to power.'],
    },
    flashcards: [
      { id: 'fc-9-h2-1', front: 'What were the three demands of Lenin’s April Theses?', back: '1. End participation in World War I, 2. Transfer land to peasants, 3. Nationalise banks.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who led the peaceful procession of workers to the Winter Palace on Bloody Sunday in 1905?',
        options: ['Vladimir Lenin', 'Father Gapon', 'Leon Trotsky', 'Alexander Kerensky'],
        correctOptionIndex: 1,
        answer: 'Option (B) Father Gapon',
      },
    ],
  },
  {
    id: 'c9-hist-ch3',
    classLevel: 9,
    subject: 'history',
    chapterNumber: 3,
    title: 'Nazism and the Rise of Hitler',
    subtitle: 'Weimar Republic, Great Depression, Nazi Worldview, Youth in Nazi Germany, Holocaust',
    overview: 'The trauma of defeat in World War I, the punitive Treaty of Versailles, and the 1929 economic collapse allowed Adolf Hitler and the Nazi Party to destroy the fragile Weimar democracy and establish a totalitarian racial state.',
    estimatedReadTime: '17 min read',
    shortNotes: [
      {
        title: 'Birth of the Weimar Republic & Versailles Treaty',
        bullets: [
          'Weimar Republic established in Germany after WWI defeat and Kaiser’s abdication in 1918.',
          'Treaty of Versailles (1919): Germany lost overseas colonies, 13% territory, 75% iron, 26% coal; forced to pay 6.6 billion pounds war reparations; demilitarized Rhineland.',
          'Weimar politicians mocked as "November Criminals".',
        ],
      },
      {
        title: 'Hitler’s Rise to Power',
        bullets: [
          'Hitler joined German Workers’ Party (1919), renaming it National Socialist German Workers’ Party (Nazi Party).',
          'Great Depression (1929) ruined Germany (6 million unemployed); Nazi votes jumped from 2.6% in 1928 to 37% in 1932.',
          'Hitler appointed Chancellor on 30 January 1933; Enabling Act of 3 March 1933 established totalitarian dictatorship.',
        ],
      },
      {
        title: 'The Nazi Worldview & Holocaust',
        bullets: [
          'Racial hierarchy: Nordic German Aryans at the top, Jews classified as "anti-race" at the lowest rung.',
          'Lebensraum: Geopolitical concept of living space through military conquest in the East.',
          'Genocide: Jews, Roma, handicapped, and political rivals exterminated in gas chambers (Auschwitz, Treblinka) in the Holocaust (6 million Jews murdered).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Youth and Education in Nazi Germany',
        content: 'Hitler believed that a strong Nazi society could be established only by teaching children Nazi ideology. Schools were "cleansed"—Jewish teachers dismissed. Textbooks were rewritten to justify racial science. Boys aged 10 joined Jungvolk, and at 14 joined Hitler Youth where they learned to worship war, glorify aggression, and hate Jews. At 18, they served in the Labour Service.',
        keyTakeaway: 'Totalitarian control extended into childhood indoctrination to build fanatical obedience.',
      },
    ],
    keyConcepts: [
      { term: 'Genocidal War', explanation: 'Mass murder of targeted groups of innocent civilians; the Nazi Holocaust targeting European Jews.' },
      { term: 'Enabling Act (1933)', explanation: 'Law that gave Hitler all powers to sideline parliament and rule by decree, establishing dictatorship in Germany.' },
    ],
    importantDates: [
      { date: '1919', event: 'Treaty of Versailles signed', significance: 'Harsh peace terms imposed on Germany.' },
      { date: '30 Jan 1933', event: 'Hitler appointed Chancellor', significance: 'Beginning of Nazi rule in Germany.' },
      { date: '1939', event: 'Germany invades Poland', significance: 'Outbreak of World War II.' },
      { date: '1945', event: 'Nazi defeat & Hitler’s suicide', significance: 'End of WWII in Europe.' },
    ],
    importantPeople: [
      { name: 'Adolf Hitler', role: 'Führer of Nazi Germany', contribution: 'Established Nazi totalitarian dictatorship and orchestrated the Holocaust.' },
      { name: 'Dr. Hjalmar Schacht', role: 'Economics Minister', contribution: 'Devised German economic recovery through state-funded public works (Autobahn, Volkswagen).' },
    ],
    definitions: [
      { term: 'Ghettoisation', definition: 'Compelling Jews to live in secluded, impoverished quarters behind barbed wire (e.g. Warsaw Ghetto).', context: 'Nazi persecution.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Weimar Republic was crippled by Versailles reparations and 1929 hyper-unemployment. Hitler exploited despair via fiery oratory, seized power through the 1933 Enabling Act, militarized society, pursued Lebensraum, and orchestrated the Holocaust.',
      goldenPoints: ['Enabling Act of March 3, 1933 gave Hitler dictatorial powers.', 'Hitler Youth enrolled German boys at age 14.'],
      mindMapSteps: ['Versailles Treaty Trauma → Weimar Crisis & 1929 Crash → Hitler’s Rise to Chancellor → Totalitarian Police State & Holocaust'],
      commonPitfalls: ['Do not confuse the Reichstag (German Parliament) with the Enabling Act (law that suspended Parliament).'],
    },
    flashcards: [
      { id: 'fc-9-h3-1', front: 'What was the Enabling Act of 1933 in Germany?', back: 'A law passed on 3 March 1933 that gave Hitler dictatorial powers to rule by decree without parliament.', category: 'date' },
    ],
    questions: [
      {
        id: 'c9-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'When did Hitler invade Poland, marking the beginning of World War II?',
        options: ['September 1938', 'September 1939', 'June 1941', 'May 1940'],
        correctOptionIndex: 1,
        answer: 'Option (B) September 1939',
      },
    ],
  },
  {
    id: 'c9-hist-ch4',
    classLevel: 9,
    subject: 'history',
    chapterNumber: 4,
    title: 'Forest Society and Colonialism',
    subtitle: 'Deforestation, Scientific Forestry, Dietrich Brandis, Bastar Rebellion, and Java Forest Laws',
    overview: 'Colonial empires exploited forests for shipbuilding and railway sleepers. By introducing "scientific forestry" and restricting tribal customary rights, colonial states provoked rebellions in Bastar (India) and Java (Indonesia).',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Why Deforestation Occurred under Colonial Rule',
        bullets: [
          'Royal Navy needed oak timber for ships after English oak forests depleted.',
          'Expansion of railways from 1850s required thousands of timber sleepers per mile of track.',
          'British encouraged commercial crops (tea, coffee, rubber, jute, cotton) to generate revenue.',
        ],
      },
      {
        title: 'Scientific Forestry & Dietrich Brandis',
        bullets: [
          'Dietrich Brandis, a German expert, was appointed first Inspector General of Forests in India in 1864.',
          'Set up Indian Forest Service (1864) and Imperial Forest Research Institute at Dehradun (1906).',
          'Scientific Forestry: Natural diverse forests cleared and replaced with one type of tree planted in straight rows (plantations).',
          '1878 Forest Act divided forests into Reserved, Protected, and Village forests; customary tribal rights extinguished.',
        ],
      },
      {
        title: 'Rebellion in Bastar (1910) & Java (Blandongdiensten)',
        bullets: [
          'Bastar (Central India): Dhurwas of Kanger forest led by Gunda Dhur rebelled in 1910 against forest reservation; message spread via mango boughs and red chillies.',
          'Java (Dutch East Indies): Dutch imposed Blandongdiensten (rent-free land on condition of providing free timber labor); Surontiko Samin led non-violent peasant resistance.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Impact of Forest Laws on Forest Dwellers',
        content: 'Villagers across the country were severely affected by the Forest Act of 1878. All their everyday practices—cutting wood for houses, grazing cattle, collecting fruits and roots, hunting and fishing—became illegal. They were forced to steal wood from forests, and if caught, were at the mercy of forest guards who demanded bribes. Traditional shifting cultivation was banned, displacing entire communities from their ancestral lands.',
        keyTakeaway: 'State conservation was essentially colonial commercial timber extraction.',
      },
    ],
    keyConcepts: [
      { term: 'Scientific Forestry', explanation: 'System of cutting natural forests and planting a single timber species in straight rows, cut and replanted periodically.' },
      { term: 'Sleepers', explanation: 'Wooden planks laid across railway tracks to hold the steel rails firmly in position.' },
    ],
    importantDates: [
      { date: '1864', event: 'Indian Forest Service set up', significance: 'Dietrich Brandis appointed first Inspector General.' },
      { date: '1878', event: 'Indian Forest Act amended', significance: 'Classified forests into Reserved, Protected, and Village.' },
      { date: '1910', event: 'Bastar Forest Rebellion', significance: 'Tribal uprising against British reservation policy.' },
    ],
    importantPeople: [
      { name: 'Dietrich Brandis', role: 'Inspector General of Forests', contribution: 'Introduced scientific forestry and forestry laws in India.' },
      { name: 'Gunda Dhur', role: 'Tribal Leader', contribution: 'Led the Bastar rebellion of 1910 against colonial timber reservation.' },
    ],
    definitions: [
      { term: 'Blandongdiensten', definition: 'System of Dutch colonial forced labor in Java where villagers were exempted from land rent in exchange for free timber cutting and haulage.', context: 'Indonesian colonial forestry.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Colonial railways and naval ships fueled massive deforestation. Dietrich Brandis founded the Indian Forest Service, enforcing "scientific forestry" and banning shifting cultivation. Tribals in Bastar (Gunda Dhur) and Java (Saminists) rebelled against eviction and forced timber labor.',
      goldenPoints: ['Imperial Forest Research Institute was set up at Dehradun in 1906.', 'In Bastar, messages of rebellion were sent using mango boughs and red chillies.'],
      mindMapSteps: ['Causes of Deforestation → Dietrich Brandis & 1878 Forest Act → Impact on Tribals → Bastar 1910 & Java Saminist Revolt'],
      commonPitfalls: ['Remember that "scientific forestry" was actually monoculture plantation farming, not ecological conservation.'],
    },
    flashcards: [
      { id: 'fc-9-h4-1', front: 'Who was appointed the first Inspector General of Forests in India?', back: 'Dietrich Brandis, a German forestry expert, in 1864.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year was the Imperial Forest Research Institute established at Dehradun?',
        options: ['1864', '1878', '1906', '1910'],
        correctOptionIndex: 2,
        answer: 'Option (C) 1906',
      },
    ],
  },
  {
    id: 'c9-hist-ch5',
    classLevel: 9,
    subject: 'history',
    chapterNumber: 5,
    title: 'Pastoralists in the Modern World',
    subtitle: 'Nomadic Herders, Pastoral Movements, Colonial Impact, and African Maasai Experience',
    overview: 'Pastoralists are people who move with herds of cattle, sheep, and goats to find fresh pastures. Modern borders, colonial grazing taxes, and wildlife reserves dramatically constrained their traditional mobility.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Pastoral Nomads in India',
        bullets: [
          'Gujjar Bakarwals of Jammu & Kashmir: Move between low hills of Shiwaliks in winter and high alpine meadows (Bugyals) in summer.',
          'Gaddis of Himachal Pradesh: Similar seasonal transhumance cycle between winter scrub forests and high summer pastures.',
          'Dhangars of Maharashtra: Stay in central plateau during monsoon growing bajra, then migrate to Konkan coastal tract after harvest.',
          'Raikas of Rajasthan: Combine camel and sheep rearing with monsoon cultivation in the Thar desert.',
        ],
      },
      {
        title: 'Colonial Rule and Pastoral Life',
        bullets: [
          'Waste Land Rules: Uncultivated land viewed as unproductive wasteland; handed to farmers, shrinking pastures.',
          'Forest Acts: Pastoralists barred from valuable timber forests; permits required with strict entry/exit dates.',
          'Criminal Tribes Act (1871): Classified nomadic communities as criminals by birth requiring police reporting.',
          'Grazing Tax: Every pastoralist had to pay tax per animal head to enter grazing tracts.',
        ],
      },
      {
        title: 'Pastoralism in Africa: The Maasai',
        bullets: [
          'Over 22 million people in Africa depend on pastoralism (Somali, Maasai, Bedouins, Tuaregs).',
          'Maasai lost 60% of pre-colonial land when British and German colonial powers drew borders in 1885.',
          'Creation of Game Reserves (Serengeti, Maasai Mara, Samburu) barred them from their prime seasonal grazing grounds, causing massive cattle starvation during droughts.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How Pastoralists Adapted to Modern Changes',
        content: 'Pastoralists did not passively surrender. They adapted through several strategies: (1) Reducing the size of their herds when pastures shrank; (2) Changing migratory routes and entering new geographical areas; (3) Buying land and settling down as cultivators or traders; (4) Combining wage labor with pastoral livestock breeding. Environmental scientists today recognize that pastoral nomadism is an ecologically sound, sustainable way of life in arid and mountainous zones.',
        keyTakeaway: 'Pastoral mobility is an ecological adaptation, not a backward way of life.',
      },
    ],
    keyConcepts: [
      { term: 'Bugyals', explanation: 'Vast, lush green high-altitude meadows in the Himalayas that flourish after snow melts in summer.' },
      { term: 'Criminal Tribes Act (1871)', explanation: 'Colonial law classifying many nomadic communities of craftsmen, traders, and pastoralists as criminals by birth.' },
    ],
    importantDates: [
      { date: '1871', event: 'Criminal Tribes Act passed in India', significance: 'Forced nomads into notified village settlements under police surveillance.' },
      { date: '1885', event: 'Partition of Maasailand', significance: 'International boundary between British Kenya and German Tanganyika cut grazing lands.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Bhabar', definition: 'Dry forested area below the foothills of Garhwal and Kumaon where Gujjar cattle herders winter.', context: 'Himalayan transhumance.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Pastoralists (Gujjar Bakarwals, Gaddis, Dhangars, Raikas) follow cyclical seasonal movements between pastures. Colonial rulers imposed Waste Land rules, Grazing Taxes, and the Criminal Tribes Act. In Africa, the Maasai were stripped of 60% of their land for game reserves.',
      goldenPoints: ['Criminal Tribes Act was enacted in 1871.', 'Bugyals are high-altitude summer alpine meadows in the Himalayas.'],
      mindMapSteps: ['Indian Pastoralists (Mountains, Plateaus, Deserts) → Colonial Restrictions & Grazing Tax → Maasai Land Loss in Africa → Modern Adaptations'],
      commonPitfalls: ['Do not confuse Gujjar Bakarwals (herders of J&K) with Dhangars (shepherds of Maharashtra).'],
    },
    flashcards: [
      { id: 'fc-9-h5-1', front: 'What are Bugyals?', back: 'Vast high-altitude alpine meadows in the Himalayas used by pastoralists for summer grazing.', category: 'definition' },
    ],
    questions: [
      {
        id: 'c9-h5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which pastoral community lives in the semi-arid central plateau of Maharashtra?',
        options: ['Gaddis', 'Gujjar Bakarwals', 'Dhangars', 'Raikas'],
        correctOptionIndex: 2,
        answer: 'Option (C) Dhangars',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY
  // ==========================================
  {
    id: 'c9-geo-ch1',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 1,
    title: 'India - Size and Location',
    subtitle: 'Latitudinal & Longitudinal Extent, Standard Meridian (82°30’ E), Coastline, and Neighbours',
    overview: 'India is one of the ancient civilizations in the world, occupying a central location at the head of the Indian Ocean, connecting East and West Asia through vital sea trade routes.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Location & Extent',
        bullets: [
          'Entirely in the Northern Hemisphere; Latitudes: 8°4’ N to 37°6’ N; Longitudes: 68°7’ E to 97°25’ E.',
          'Tropic of Cancer (23°30’ N) divides the country into almost two equal halves.',
          'Southernmost point of Indian Union was Indira Point (submerged during 2004 Tsunami).',
        ],
      },
      {
        title: 'Size & Standard Time',
        bullets: [
          'Total land area: 3.28 million sq km (2.4% of world total area; 7th largest country).',
          'Land boundary: 15,200 km; Total coastline (mainland + islands): 7,516.6 km.',
          'Time lag between Gujarat and Arunachal Pradesh is 2 hours; Standard Meridian of India (82°30’ E) passing through Mirzapur (UP) is taken as standard time (IST).',
        ],
      },
      {
        title: 'India and the World',
        bullets: [
          'Central location between East and West Asia; trans-Indian Ocean routes connect European markets with East Asia.',
          'Land neighbours: Pakistan & Afghanistan (NW), China, Nepal, Bhutan (North), Myanmar & Bangladesh (East), Sri Lanka & Maldives (South across Palk Strait).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why 82°30’ E is the Standard Meridian',
        content: 'From Gujarat to Arunachal Pradesh, there is a longitudinal extent of nearly 30 degrees. Since the earth rotates 360 degrees in 24 hours (1 degree every 4 minutes), this 30-degree span creates a 2-hour solar time difference. To avoid administrative confusion with train timings, flights, and broadcasts, the central longitude 82°30’ E passing through Mirzapur (UP) was adopted as the Indian Standard Time (IST), exactly 5 hours and 30 minutes ahead of GMT.',
        keyTakeaway: 'Standard Meridian harmonizes time across a continent-sized nation.',
      },
    ],
    keyConcepts: [
      { term: 'Standard Meridian of India', explanation: '82°30’ E passing through Mirzapur (Uttar Pradesh), setting Indian Standard Time (IST).' },
      { term: 'Palk Strait', explanation: 'A narrow channel of sea separating India from Sri Lanka, alongside the Gulf of Mannar.' },
    ],
    importantDates: [
      { date: '1869', event: 'Opening of Suez Canal', significance: 'Reduced distance between India and Europe by 7,000 km.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Subcontinent', definition: 'A large, distinct landmass that is part of a continent, geographically isolated by mountain ranges and oceans (Indian subcontinent).', context: 'Physical geography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India spans 8°4’ N to 37°6’ N and 68°7’ E to 97°25’ E with an area of 3.28 million sq km (7th largest). Standard time is based on 82°30’ E at Mirzapur. Central location in the Indian Ocean links Europe and East Asia.',
      goldenPoints: ['Opening of the Suez Canal in 1869 reduced sea distance from Europe by 7,000 km.', 'India has 7,516.6 km of coastline including island groups.'],
      mindMapSteps: ['Lat/Long Extent → Land/Sea Area → Standard Meridian (82°30’ E) → Strategic Maritime Location & Neighbours'],
      commonPitfalls: ['Indira Point is the southernmost point of the Indian Union (in Nicobar), while Kanyakumari is the southernmost tip of the mainland.'],
    },
    flashcards: [
      { id: 'fc-9-g1-1', front: 'What is the value of the Standard Meridian of India and where does it pass through?', back: '82°30’ E longitude, passing through Mirzapur in Uttar Pradesh.', category: 'location' },
    ],
    questions: [
      {
        id: 'c9-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'The Tropic of Cancer does NOT pass through which of the following states?',
        options: ['Rajasthan', 'Chhattisgarh', 'Odisha', 'Tripura'],
        correctOptionIndex: 2,
        answer: 'Option (C) Odisha',
      },
    ],
  },
  {
    id: 'c9-geo-ch2',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Physical Features of India',
    subtitle: 'Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, Islands',
    overview: 'India exhibits varied geological landscapes: young fold mountains of the Himalayas, fertile riverine Northern Plains, ancient stable Peninsular tableland, the Thar desert, coasts, and islands.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Himalayan Mountains',
        bullets: [
          'Geologically young fold mountains stretching 2,400 km from Indus to Brahmaputra.',
          'Three parallel ranges: Himadri (Great Himalayas, avg 6,000 m), Himachal (Lesser Himalayas, 3,700-4,500 m), Shiwaliks (outermost, 900-1,100 m).',
          'Duns: Longitudinal valleys between Himachal and Shiwaliks (Dehra Dun, Kotli Dun, Patli Dun).',
        ],
      },
      {
        title: 'The Northern Plains & Peninsular Plateau',
        bullets: [
          'Northern Plains: Formed by Indus, Ganga, Brahmaputra; 7 lakh sq km; divided into Bhabar (pebble belt), Terai (swampy jungle), Bhangar (old alluvium), Khadar (new fertile alluvium).',
          'Peninsular Plateau: Composed of crystalline igneous rocks; Central Highlands (Malwa) and Deccan Plateau (sloping eastward, edged by Western and Eastern Ghats).',
        ],
      },
      {
        title: 'Desert, Coasts, and Islands',
        bullets: [
          'Thar Desert: Undulating sandy plain with barchans (crescent dunes); Luni is only seasonal river.',
          'Coastal Plains: Western Coast (Konkan, Kannad, Malabar) and Eastern Coast (Northern Circar, Coromandel).',
          'Islands: Lakshadweep (coral origin in Arabian Sea) and Andaman & Nicobar (volcanic peaks in Bay of Bengal).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Western Ghats vs Eastern Ghats',
        content: 'Western Ghats form the continuous western edge of Deccan Plateau, can be crossed only via passes (Thal, Bhor, Pal Ghats), are higher (average 900-1600 m), and cause orographic rainfall; highest peak is Anamudi (2,695 m). Eastern Ghats are discontinuous and irregular, dissected by rivers draining into Bay of Bengal (Godavari, Krishna, Kaveri); average height 600 m; highest peak is Mahendragiri (1,501 m).',
        keyTakeaway: 'The Western Ghats are an unbroken ecological barrier causing heavy orographic monsoon rain.',
      },
    ],
    keyConcepts: [
      { term: 'Bhabar', explanation: 'A narrow 8-16 km belt parallel to Shiwalik slopes composed of pebbles where streams disappear underground.' },
      { term: 'Terai', explanation: 'A wet, swampy, and marshy forested zone south of Bhabar where underground streams re-emerge.' },
      { term: 'Barchans', explanation: 'Crescent-shaped sand dunes widespread in the Thar desert.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Doab', definition: 'Land between two rivers (Do = two, Ab = water).', context: 'Punjab plains.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India features six physiographic divisions: Himalayas (Himadri, Himachal, Shiwalik), Northern Plains (Bhabar, Terai, Bhangar, Khadar), ancient Peninsular Plateau, Thar Desert, Western/Eastern coastal plains, and Lakshadweep/Andaman-Nicobar Islands.',
      goldenPoints: ['Majuli in the Brahmaputra is the largest inhabited riverine island in the world.', 'Highest peak in the Western Ghats is Anamudi (2,695 m).'],
      mindMapSteps: ['Plate Tectonics → Himalayas 3 Ranges → Northern Plains 4 Belts → Plateau & Ghats → Desert, Coasts & Islands'],
      commonPitfalls: ['Kanchenjunga (8,598 m) is the highest peak in India; Mt Everest (8,848 m) lies in Nepal.'],
    },
    flashcards: [
      { id: 'fc-9-g2-1', front: 'What is the highest mountain peak in India?', back: 'Kanchenjunga in Sikkim (8,598 metres).', category: 'location' },
    ],
    questions: [
      {
        id: 'c9-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following ranges consists of famous hill stations like Shimla, Mussoorie, and Nainital?',
        options: ['Himadri', 'Himachal (Lesser Himalayas)', 'Shiwaliks', 'Purvanchal'],
        correctOptionIndex: 1,
        answer: 'Option (B) Himachal (Lesser Himalayas)',
      },
    ],
  },
  {
    id: 'c9-geo-ch3',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 3,
    title: 'Drainage',
    subtitle: 'Drainage Basins, Himalayan vs Peninsular Rivers, Lakes, and River Pollution',
    overview: 'The term drainage describes the river system of an area. India’s drainage systems divide into snow-fed perennial Himalayan rivers and rain-fed seasonal Peninsular rivers.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Himalayan vs Peninsular River Systems',
        bullets: [
          'Himalayan Rivers: Perennial (fed by rain and melting glaciers); long courses; perform intensive erosion and form deep gorges, meanders, and deltas (Indus, Ganga, Brahmaputra).',
          'Peninsular Rivers: Seasonal (dependent on rainfall); shallow graded valleys; shorter courses; flow east into Bay of Bengal (Mahanadi, Godavari, Krishna, Kaveri) except Narmada and Tapi which flow west into Arabian Sea creating estuaries.',
        ],
      },
      {
        title: 'Major Himalayan River Systems',
        bullets: [
          'Indus: Originates near Lake Mansarowar in Tibet; total length 2,900 km; tributaries Jhelum, Chenab, Ravi, Beas, Satluj; governed by Indus Water Treaty 1960.',
          'Ganga: Originates as Bhagirathi from Gangotri glacier; joined by Alaknanda at Devprayag; total length >2,500 km; joined by Yamuna, Ghaghara, Gandak, Kosi; forms Sundarbans delta with Brahmaputra.',
          'Brahmaputra: Originates in Tibet as Tsangpo; enters India in Arunachal Pradesh as Dihang; carries massive silt causing annual Assam floods.',
        ],
      },
      {
        title: 'Major Peninsular Rivers & Lakes',
        bullets: [
          'Godavari: Largest Peninsular river (1,500 km), known as Dakshin Ganga.',
          'Narmada & Tapi: Flow through rift valleys into Arabian Sea.',
          'Lakes: Wular Lake in J&K (largest freshwater lake of tectonic origin); Dal Lake; Chilika Lake in Odisha (largest salt water lake); Sambhar Lake in Rajasthan.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Role of Rivers & National River Conservation Plan (NRCP)',
        content: 'Rivers have been of fundamental importance throughout human history: water for domestic use, irrigation, navigation, and hydro-power. Growing industrial, municipal, and agricultural demand has degraded water quality. The Ganga Action Plan (GAP) launched in 1985 expanded into the National River Conservation Plan (NRCP) to set up sewage treatment plants, intercept toxic drains, and restore river ecology.',
        keyTakeaway: 'Economic development without wastewater treatment destroys aquatic life and river lifelines.',
      },
    ],
    keyConcepts: [
      { term: 'Water Divide', explanation: 'Any elevated area, such as a mountain or upland, that separates two drainage basins (e.g. Ambala separates Indus and Ganga basins).' },
      { term: 'Estuary', explanation: 'The tidal mouth of a large river where the tide meets the stream, formed by rivers lacking large sediment loads (Narmada, Tapi).' },
    ],
    importantDates: [
      { date: '1960', event: 'Indus Water Treaty signed', significance: 'India can use 20% of total discharge of Indus river system.' },
      { date: '1985', event: 'Ganga Action Plan (GAP) launched', significance: 'Pioneered river pollution cleanup in India.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Perennial River', definition: 'A river that has water flow throughout the year, fed by melting glaciers and seasonal rain.', context: 'Himalayan drainage.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Indian drainage comprises perennial Himalayan rivers (Indus, Ganga, Brahmaputra) and seasonal Peninsular rivers (Godavari, Mahanadi, Krishna, Kaveri, Narmada, Tapi). Lakes (Wular, Chilika) regulate flow and tourism. NRCP cleans polluted river basins.',
      goldenPoints: ['Godavari is known as Dakshin Ganga due to its length and basin area.', 'Wular Lake in Jammu and Kashmir is the largest freshwater lake in India.'],
      mindMapSteps: ['Water Divide Concept → Himalayan Systems (Indus, Ganga, Brahmaputra) → Peninsular Systems (East vs West Flowing) → Lakes & NRCP'],
      commonPitfalls: ['Narmada and Tapi flow west into the Arabian Sea and make estuaries, not deltas.'],
    },
    flashcards: [
      { id: 'fc-9-g3-1', front: 'Which river is known as the "Dakshin Ganga"?', back: 'Godavari (longest Peninsular river, ~1,500 km).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-g3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following rivers flows through a rift valley into the Arabian Sea?',
        options: ['Godavari', 'Krishna', 'Narmada', 'Mahanadi'],
        correctOptionIndex: 2,
        answer: 'Option (C) Narmada',
      },
    ],
  },
  {
    id: 'c9-geo-ch4',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 4,
    title: 'Climate',
    subtitle: 'Monsoon Mechanism, ITCZ, Jet Streams, El Niño, and the Four Indian Seasons',
    overview: 'India has a monsoon type of climate, characterized by a seasonal reversal in wind direction. The interplay of latitude, altitude, pressure, jet streams, and the Tibetan plateau shapes India’s climate.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Factors Affecting India’s Climate',
        bullets: [
          'Latitude: Tropic of Cancer divides tropical south from sub-tropical north.',
          'Altitude: Himalayas act as a barrier against frigid Central Asian winds, ensuring milder winters.',
          'Pressure and Winds: Inter-Tropical Convergence Zone (ITCZ), Subtropical Westerly Jet Streams, and Tropical Easterly Jet Streams.',
        ],
      },
      {
        title: 'Mechanism of the Indian Monsoon',
        bullets: [
          'Differential heating and cooling of land and water creates low pressure on land and high pressure over Indian Ocean.',
          'Shift of ITCZ in summer over the Ganga plain (monsoon trough).',
          'High pressure area east of Madagascar over south Indian Ocean drives moisture-laden winds.',
          'Tibetan plateau gets intensely heated, generating vertical air currents.',
          'Southern Oscillation & El Niño: Periodic warming of eastern Pacific ocean waters affects monsoon rainfall.',
        ],
      },
      {
        title: 'Four Seasons of India',
        bullets: [
          'Cold Weather Season (Winter: Dec-Feb): North-east trade winds; Western Cyclonic Disturbances bring vital winter rain (Mahawat) for Rabi crops.',
          'Hot Weather Season (Summer: March-May): Soaring temperatures; loo (hot dry winds); Kaal Baisakhi in Bengal; Mango showers in Kerala.',
          'Advancing Monsoon (Rainy Season: June-Sept): South-west monsoon splits into Arabian Sea branch and Bay of Bengal branch; Mawsynram receives world’s highest rainfall.',
          'Retreating Monsoon (Transition: Oct-Nov): Skies clear; temperature rises with high humidity ("October Heat"); cyclones hit Coromandel coast.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Monsoon as a Unifying Bond',
        content: 'Although diverse regional climatic variations exist, the seasonal cycle of the monsoon provides a rhythmic framework for the entire country. The agricultural calendar, festivals, landscapes, plant and animal life, and the life of millions of Indian farmers revolve around the arrival of the monsoon rains, binding the country from Kashmir to Kanyakumari.',
        keyTakeaway: 'The monsoon is India’s ultimate ecological and cultural unifying force.',
      },
    ],
    keyConcepts: [
      { term: 'Monsoon', explanation: 'Seasonal reversal in the direction of winds over a year, derived from the Arabic word mausim meaning season.' },
      { term: 'Loo', explanation: 'Strong, gusty, hot, dry winds blowing during the afternoon over north and north-western India in summer.' },
      { term: 'Mawsynram', explanation: 'A village in the southern ranges of Khasi Hills in Meghalaya that receives the highest average rainfall in the world.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Western Cyclonic Disturbance', definition: 'Weather phenomena of the winter months brought in by westerly jet streams from the Mediterranean Sea causing rain in northern plains.', context: 'Winter wheat crop.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Monsoon climate is governed by the seasonal wind reversal, ITCZ shift, heating of Tibetan plateau, and jet streams. Four seasons: Winter (Western disturbances), Summer (loo), Advancing Monsoon (SW winds, Mawsynram rainfall), and Retreating Monsoon (October heat).',
      goldenPoints: ['Mawsynram receives the highest average rainfall in the world.', 'Mahawat is the local term for winter rainfall crucial for Rabi wheat.'],
      mindMapSteps: ['Climatic Controls → Monsoon Mechanism (ITCZ, Madagascar, Tibet) → 4 Seasons → Unifying Bond'],
      commonPitfalls: ['Do not confuse Advancing Monsoon (South-West winds) with Retreating Monsoon (North-East winds bringing rain to Tamil Nadu coast).'],
    },
    flashcards: [
      { id: 'fc-9-g4-1', front: 'Which place on Earth receives the highest average rainfall?', back: 'Mawsynram in the Khasi Hills of Meghalaya, India.', category: 'location' },
    ],
    questions: [
      {
        id: 'c9-g4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What are the hot, dry winds blowing across the northern plains during summer afternoons called?',
        options: ['Kaal Baisakhi', 'Loo', 'Mango Showers', 'Chinook'],
        correctOptionIndex: 1,
        answer: 'Option (B) Loo',
      },
    ],
  },
  {
    id: 'c9-geo-ch5',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 5,
    title: 'Natural Vegetation and Wildlife',
    subtitle: 'Tropical Evergreen, Deciduous, Thorn, Montane, Mangrove Forests, National Parks, and Biosphere Reserves',
    overview: 'India is one of the 12 mega bio-diversity countries of the world. With about 47,000 plant species and 90,000 animal species, its varied relief, soils, and climate support diverse forest ecosystems.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Major Vegetation Types of India',
        bullets: [
          'Tropical Evergreen Forests: Rainfall >200 cm; Western Ghats, island groups, Assam; ebony, mahogany, rosewood, rubber; no definite leaf-shedding season.',
          'Tropical Deciduous (Monsoon) Forests: Most widespread (70-200 cm rainfall); shed leaves for 6-8 weeks in dry summer; Moist deciduous (Teak, Sal, Shisham, Sandalwood) & Dry deciduous (Peepal, Neem).',
          'Tropical Thorn Forests: Rainfall <70 cm; NW India (Gujarat, Rajasthan); acacias, palms, euphorbias, cacti; long roots, fleshy stems.',
          'Montane Forests: Altitude based; Wet temperate (1000-2000m: oak, chestnut); Temperate coniferous (1500-3000m: pine, deodar, silver fir); Alpine (above 3600m: junipers, birches).',
          'Mangrove (Tidal) Forests: Coastal areas influenced by tides; Sundari trees in Ganga-Brahmaputra delta (Sundarbans).',
        ],
      },
      {
        title: 'Wildlife & Conservation in India',
        bullets: [
          'Elephants in hot wet forests of Assam, Karnataka, Kerala; One-horned rhinos in swamps of Assam and West Bengal.',
          'Gir forest in Gujarat is the last remaining habitat of the Asiatic Lion.',
          'Tiger is found in MP, Sundarbans, and Himalayan foothills; India is only country with both lions and tigers.',
          '18 Biosphere Reserves set up (Sundarbans, Nanda Devi, Gulf of Mannar, Nilgiri part of UNESCO World Network).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Tropical Deciduous Forests are Most Widespread',
        content: 'Tropical Deciduous forests are commonly known as Monsoon Forests. They cover the largest geographical area across India where rainfall is between 70 cm and 200 cm. Trees shed their leaves for about six to eight weeks in dry summer to conserve moisture through transpiration. Teak is the most dominant commercial species, followed by Sal, Shisham, and Bamboo.',
        keyTakeaway: 'Seasonal leaf-shedding is an adaptive moisture-conservation strategy.',
      },
    ],
    keyConcepts: [
      { term: 'Virgin Vegetation (Flora & Fauna)', explanation: 'A plant community that has grown naturally without human aid and has been left undisturbed by humans for a long time.' },
      { term: 'Biosphere Reserve', explanation: 'A protected area designed to preserve biological diversity and genetic integrity of plants and animals while fostering sustainable human coexistence.' },
    ],
    importantDates: [
      { date: '1972', event: 'Wildlife Protection Act implemented in India', significance: 'Provides legal framework for national parks and sanctuaries.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Endemic (Indigenous) Species', definition: 'Plant or animal species which are purely native to India and not brought from outside.', context: 'Biodiversity.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India’s 5 forest types range from dense Evergreen and dominant Deciduous to Thorn, Montane, and tidal Mangroves. Rich wildlife (elephants, rhinos, lions, tigers) is safeguarded across 18 Biosphere Reserves and numerous National Parks.',
      goldenPoints: ['India is the only country in the world that has both tigers and lions in the wild.', 'Gir Forest in Gujarat is the last sanctuary of the Asiatic Lion.'],
      mindMapSteps: ['Bio-diversity Factors → 5 Forest Types → Wildlife Distribution → Conservation & Biosphere Reserves'],
      commonPitfalls: ['Tropical Deciduous forests are the most widespread in India, not Tropical Evergreen.'],
    },
    flashcards: [
      { id: 'fc-9-g5-1', front: 'Which is the natural habitat of the Asiatic Lion in India?', back: 'Gir Forest in Gujarat.', category: 'location' },
    ],
    questions: [
      {
        id: 'c9-g5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which is the most dominant commercial timber species of Tropical Deciduous forests?',
        options: ['Ebony', 'Teak', 'Mahogany', 'Rubber'],
        correctOptionIndex: 1,
        answer: 'Option (B) Teak',
      },
    ],
  },
  {
    id: 'c9-geo-ch6',
    classLevel: 9,
    subject: 'geography',
    chapterNumber: 6,
    title: 'Population',
    subtitle: 'Size and Distribution, Population Growth, Processes of Change, Age Composition, and NPP 2000',
    overview: 'People are the producers and consumers of Earth’s resources. Understanding population size, distribution, density, sex ratio, literacy, and age structure is essential for national socio-economic planning.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'Population Size and Density',
        bullets: [
          'According to 2011 Census, India’s population was 1,210.6 million (17.5% of world population) living on 2.4% of world land area.',
          'Uttar Pradesh is the most populous state (~200 million); Sikkim has only ~0.6 million.',
          'Population Density (persons per sq km): India average was 382 in 2011; Bihar has highest (1,106), Arunachal Pradesh lowest (17).',
        ],
      },
      {
        title: 'Three Processes of Population Change',
        bullets: [
          'Birth Rate: Number of live births per 1,000 persons in a year.',
          'Death Rate: Number of deaths per 1,000 persons in a year. The rapid decline in death rates with high birth rates caused rapid growth.',
          'Migration: Movement of people across regions; internal migration does not change size but changes distribution (rural to urban push-pull factors).',
        ],
      },
      {
        title: 'Sex Ratio, Literacy, & National Population Policy (NPP 2000)',
        bullets: [
          'Sex Ratio: Number of females per 1,000 males; was 943 females per 1,000 males in 2011.',
          'Literacy Rate (2011): 74.04% (82.14% for males, 65.46% for females).',
          'NPP 2000: Free and compulsory education up to age 14, reducing infant mortality to below 30 per 1000, universal immunisation, delaying marriage for girls.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Age Composition and Working Population',
        content: 'The population is categorized into three broad age groups: (1) Children (below 15 years): economically unproductive, requiring food, clothing, education; (2) Working Age (15-59 years): economically productive and biologically reproductive, forming India’s demographic dividend; (3) Aged (60+ years): can be economically productive through retirement, but health costs increase.',
        keyTakeaway: 'India’s large percentage in the working age group (15-59) provides a historic demographic dividend.',
      },
    ],
    keyConcepts: [
      { term: 'Demographic Dividend', explanation: 'Economic growth potential that results from shifts in a population’s age structure, mainly when the working-age share is larger than the dependent share.' },
      { term: 'Sex Ratio', explanation: 'The number of females per 1,000 males in the population.' },
    ],
    importantDates: [
      { date: '1872', event: 'First non-synchronous Census in India', significance: 'First complete Census conducted in 1881.' },
      { date: '2000', event: 'National Population Policy (NPP) launched', significance: 'Holistic reproductive health and child policy framework.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Census', definition: 'An official periodic count and demographic survey of the population, conducted every 10 years in India.', context: 'Demography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India holds 17.5% of world population with average density of 382 per sq km. Population change is determined by birth rate, death rate, and rural-to-urban migration. NPP 2000 focuses on health, immunisation, and adolescent welfare.',
      goldenPoints: ['Bihar has the highest population density (1,106 per sq km) while Arunachal Pradesh has the lowest (17).', 'Sex ratio in 2011 was 943 females per 1,000 males.'],
      mindMapSteps: ['Size & Density (2011 Census) → Birth, Death, Migration → Age Structure & Sex Ratio → NPP 2000 Objectives'],
      commonPitfalls: ['Do not confuse population growth rate (percentage increase) with absolute population increase.'],
    },
    flashcards: [
      { id: 'fc-9-g6-1', front: 'What was the average population density of India according to the 2011 Census?', back: '382 persons per square kilometre.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-g6-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which Indian state has the lowest population density according to Census 2011?',
        options: ['Mizoram', 'Sikkim', 'Arunachal Pradesh', 'Nagaland'],
        correctOptionIndex: 2,
        answer: 'Option (C) Arunachal Pradesh (17 persons/sq km)',
      },
    ],
  },

  // ==========================================
  // CIVICS / POLITICAL SCIENCE
  // ==========================================
  {
    id: 'c9-civ-ch1',
    classLevel: 9,
    subject: 'civics',
    chapterNumber: 1,
    title: 'What is Democracy? Why Democracy?',
    subtitle: 'Definition, Features, Arguments For & Against, Broader Meaning of Democracy',
    overview: 'Democracy is a form of government in which the rulers are elected by the people. This chapter develops a clear definition, examines real-world anti-democratic manipulations (Pakistan, China, Zimbabwe), and evaluates why democracy is the best political system.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Four Core Features of Democracy',
        bullets: [
          '1. Major decisions by elected leaders (In Pakistan under General Musharraf, elected representatives lacked final decision power; military held real authority).',
          '2. Free and fair electoral competition (In China, only Communist Party candidates can contest; in Mexico under PRI, elections were rigged for 70 years).',
          '3. One person, one vote, one value (In Saudi Arabia women could not vote until recently; in Estonia Russian minority face citizenship hurdles; in Fiji indigenous vote weighed more).',
          '4. Rule of law and respect for rights (In Zimbabwe, Robert Mugabe used state harassment and media censorship).',
        ],
      },
      {
        title: 'Arguments Against Democracy',
        bullets: [
          'Leaders keep changing leading to political instability.',
          'Democracy is all about political competition and power play; no scope for morality.',
          'Consultation with many people leads to delays in decision-making.',
          'Elected leaders do not always know the best interest of the people; leads to bad decisions.',
          'Leads to corruption as it is based on electoral competition.',
        ],
      },
      {
        title: 'Arguments For Democracy (Why Democracy?)',
        bullets: [
          'More accountable form of government (responds to citizens; 1958-61 China famine killed 30M, whereas India had no famine due to free press and democratic debate).',
          'Improves the quality of decision-making through discussion and deliberation.',
          'Provides a method to deal with differences and conflicts peacefully.',
          'Enhances the dignity of citizens: based on political equality where the poorest have same status as rich.',
          'Allows us to correct its own mistakes through public discussion and changing leaders.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Democracy Prevents Famines (The Amartya Sen Insight)',
        content: 'Economist Amartya Sen observed that China’s famine of 1958-1961 was the worst recorded famine in world history, killing nearly 30 million people. India’s economic condition was not much better than China’s at that time, yet India did not have a famine of that kind. Sen explains that this was due to different government policies: India had multi-party democracy, free press, and parliamentary opposition that forced the government to respond quickly to food scarcity, whereas the Chinese Communist government lacked opposition and free press to alert or criticize the leadership.',
        keyTakeaway: 'Democratic accountability saves human lives.',
      },
    ],
    keyConcepts: [
      { term: 'Democracy', explanation: 'A form of government in which rulers are elected by citizens through free, fair, and periodic elections.' },
      { term: 'Rule of Law', explanation: 'The principle that all people and institutions are subject to and accountable to law that is fairly applied and enforced.' },
    ],
    importantDates: [
      { date: '1999', event: 'General Pervez Musharraf military coup in Pakistan', significance: 'Overthrew democratic government.' },
    ],
    importantPeople: [
      { name: 'Dr. Amartya Sen', role: 'Nobel Economist', contribution: 'Demonstrated how democratic accountability prevents catastrophic famines.' },
    ],
    definitions: [
      { term: 'Coup', definition: 'The sudden, violent overthrow of an existing government by a small group, usually the military.', context: 'Pakistan under Musharraf.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Democracy requires elected rulers with final authority, free/fair elections, one person one vote, and rule of law. Despite delays and partisan friction, democracy is superior because it is accountable, improves decisions, resolves conflicts peacefully, and enhances citizen dignity.',
      goldenPoints: ['Democracy allows a society to correct its own mistakes publicly.', 'One person, one vote, one value ensures political equality.'],
      mindMapSteps: ['Simple Definition → 4 Critical Features → Arguments Against → Arguments For → Broader Meaning'],
      commonPitfalls: ['Holding elections does not automatically make a country democratic; elections must offer real choice and fair competition.'],
    },
    flashcards: [
      { id: 'fc-9-c1-1', front: 'What are the four essential features of a true democracy?', back: '1. Final decisions by elected leaders, 2. Free & fair elections, 3. One person one vote one value, 4. Rule of law and rights.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-c1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following is the most important argument in favour of democracy?',
        options: ['It is fast in decision-making', 'It enhances the dignity of citizens', 'It eliminates all economic inequality', 'It is free from political competition'],
        correctOptionIndex: 1,
        answer: 'Option (B) It enhances the dignity of citizens',
      },
    ],
  },
  {
    id: 'c9-civ-ch2',
    classLevel: 9,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Constitutional Design',
    subtitle: 'Apartheid in South Africa, Nelson Mandela, Making of the Indian Constitution, and Guiding Values',
    overview: 'A constitution is the supreme law of a country determining the rights of citizens and the structure of government. This chapter studies South Africa’s transition from racial apartheid to democracy and the making of India’s living Constitution.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Democratic Constitution in South Africa',
        bullets: [
          'Apartheid: System of racial segregation imposed by white minority; blacks denied voting rights, segregated in transport, schools, beaches.',
          'Nelson Mandela spent 28 years in prison (Robben Island) fighting apartheid through the African National Congress (ANC).',
          '26 April 1994: Apartheid ended; new flag hoisted; South Africa became a multi-racial rainbow democracy.',
        ],
      },
      {
        title: 'Why Do We Need a Constitution?',
        bullets: [
          'Generates a degree of trust and coordination necessary for different kinds of people to live together.',
          'Specifies how government will be constituted and who will have power to make decisions.',
          'Lays down limits on powers of government and guarantees rights of citizens.',
          'Expresses aspirations of people about creating a good society.',
        ],
      },
      {
        title: 'Making of the Indian Constitution',
        bullets: [
          'Drafted by Constituent Assembly elected in July 1946 (299 members); chaired by Dr. Rajendra Prasad; Drafting Committee headed by Dr. B.R. Ambedkar.',
          'Adopted on 26 November 1949; came into effect on 26 January 1950 (celebrated as Republic Day).',
          'Guiding values enshrined in the Preamble: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why We Accept the Constitution Today',
        content: 'Our Constitution was not subjected to a popular referendum, yet it commands universal acceptance because: (1) It did not reflect the views of its members alone, but represented a broad national consensus; (2) The Constituent Assembly represented people from all regions, religions, castes, and languages; (3) The Assembly worked in a transparent, deliberative, and consensus-driven manner over 114 days of debates, recording every word in 12 voluminous Constituent Assembly Debates.',
        keyTakeaway: 'The Indian Constitution was forged through painstaking consensus and moral authority.',
      },
    ],
    keyConcepts: [
      { term: 'Apartheid', explanation: 'An official policy of racial segregation and political discrimination against non-whites in South Africa.' },
      { term: 'Constituent Assembly', explanation: 'An assembly of elected representatives that drafts a constitution for a country.' },
      { term: 'Preamble', explanation: 'An introductory statement in a constitution stating its guiding philosophy, fundamental values, and primary objectives.' },
    ],
    importantDates: [
      { date: '26 April 1994', event: 'New democratic South Africa born', significance: 'End of apartheid regime.' },
      { date: '26 Nov 1949', event: 'Indian Constitution adopted', significance: 'Signed by members of Constituent Assembly.' },
      { date: '26 Jan 1950', event: 'Indian Constitution comes into effect', significance: 'India becomes a sovereign Republic.' },
    ],
    importantPeople: [
      { name: 'Nelson Mandela', role: 'Anti-Apartheid Leader', contribution: 'First Black President of democratic South Africa.' },
      { name: 'Dr. B.R. Ambedkar', role: 'Chairman of Drafting Committee', contribution: 'Architect of the Indian Constitution.' },
      { name: 'Dr. Rajendra Prasad', role: 'President of Constituent Assembly', contribution: 'Guided the deliberations of the Constituent Assembly.' },
    ],
    definitions: [
      { term: 'Sovereign', definition: 'People have supreme right to make decisions on internal as well as external matters; no external power can dictate to the government of India.', context: 'Preamble value.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'South Africa transitioned from brutal apartheid to an inclusive rainbow constitution under Nelson Mandela. India’s Constituent Assembly debated for three years under Dr. Ambedkar to craft a secular, democratic, sovereign constitution that balances state power and fundamental rights.',
      goldenPoints: ['Dr. B.R. Ambedkar served as Chairman of the Drafting Committee.', 'The Constitution was adopted on 26 Nov 1949 and enacted on 26 Jan 1950.'],
      mindMapSteps: ['South Africa Apartheid & Struggle → Why Constitutions Matter → Making of Indian Constitution → Preamble Philosophies'],
      commonPitfalls: ['Do not confuse adoption date (26 November 1949) with enforcement date (26 January 1950).'],
    },
    flashcards: [
      { id: 'fc-9-c2-1', front: 'Who was the Chairman of the Drafting Committee of the Indian Constitution?', back: 'Dr. B.R. Ambedkar.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-c2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'When did the Constitution of India come into legal effect?',
        options: ['15 August 1947', '26 November 1949', '26 January 1950', '30 January 1948'],
        correctOptionIndex: 2,
        answer: 'Option (C) 26 January 1950',
      },
    ],
  },
  {
    id: 'c9-civ-ch3',
    classLevel: 9,
    subject: 'civics',
    chapterNumber: 3,
    title: 'Electoral Politics',
    subtitle: 'Why Elections?, Reserved Constituencies, Voter Lists, Campaign Code of Conduct, and Election Commission',
    overview: 'Elections are the mechanism by which people choose their representatives at regular intervals and change them if they wish. Understanding constituency delimitation, the model code of conduct, and the independent Election Commission illuminates Indian democracy.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Why Do We Need Elections?',
        bullets: [
          'In modern large democracies, direct governance by all citizens is impossible; representatives are elected.',
          'Voters can choose who will make laws, who will form government, and which party’s policies will guide governance.',
          'Democratic elections require: universal voting rights, genuine choice of candidates, regular intervals, and free/fair voting.',
        ],
      },
      {
        title: 'System of Elections in India',
        bullets: [
          'Electoral Constituencies: Country divided into 543 Lok Sabha territorial constituencies; each elects one MP.',
          'Reserved Constituencies: To ensure weaker sections are represented, 84 seats are reserved for Scheduled Castes (SC) and 47 seats for Scheduled Tribes (ST) in Lok Sabha.',
          'Voters’ List (Electoral Roll): Prepared and updated continuously; all citizens aged 18+ have right to vote unless disqualified by courts.',
        ],
      },
      {
        title: 'Nomination & Model Code of Conduct',
        bullets: [
          'Minimum age to contest elections is 25 years; candidates must file affidavit detailing assets, debts, and criminal cases.',
          'Model Code of Conduct forbids: bribing or threatening voters, appealing to religion/caste, using government resources/vehicles for campaigns, spending over spending limit per constituency.',
        ],
      },
      {
        title: 'Independent Election Commission (EC)',
        bullets: [
          'Chief Election Commissioner (CEC) appointed by President but independent of government; cannot be easily removed.',
          'Powers: Controls entire election process, enforces Code of Conduct, orders repoll in case of rigging, commands government staff during elections.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Indian Elections are Free and Fair',
        content: 'Three tests confirm the fairness of Indian elections: (1) Independence of Election Commission: Enjoys the same judicial independence as the Supreme Court; (2) High Popular Participation: In India, the poor, illiterate, and underprivileged vote in larger proportions than rich and privileged sections (unlike the US); (3) Acceptance of Election Outcomes: Ruling parties routinely lose elections both in states and Centre; defeated candidates accept verdicts without violence.',
        keyTakeaway: 'The willingness of defeated incumbents to concede defeat proves electoral legitimacy.',
      },
    ],
    keyConcepts: [
      { term: 'Electoral Constituency', explanation: 'A specific geographical area whose registered voters elect a representative to a legislative body.' },
      { term: 'Model Code of Conduct', explanation: 'A set of norms and guidelines agreed to by all political parties and enforced by the Election Commission during elections.' },
    ],
    importantDates: [
      { date: '1950', event: 'Election Commission of India established', significance: 'Autonomous constitutional authority under Article 324.' },
    ],
    importantPeople: [
      { name: 'Sukumar Sen', role: 'First Chief Election Commissioner', contribution: 'Conducted India’s historic first general election in 1951-52.' },
    ],
    definitions: [
      { term: 'Incumbent', definition: 'The current holder of a political office or seat contesting for re-election.', context: 'Electoral turnover.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Elections operationalize representative democracy across 543 Lok Sabha constituencies with SC/ST reservations. The independent Election Commission enforces the Model Code of Conduct, ensuring high voter turnout and routine peaceful transfer of power.',
      goldenPoints: ['Minimum voting age is 18 years; minimum age to contest is 25 years.', 'There are 84 SC and 47 ST reserved seats in Lok Sabha.'],
      mindMapSteps: ['Why Elections? → Constituencies & Reserved Seats → Nomination & Campaign Code → Independent Election Commission'],
      commonPitfalls: ['Do not confuse the voting age requirement (18 years) with the candidate contesting age requirement (25 years).'],
    },
    flashcards: [
      { id: 'fc-9-c3-1', front: 'What is the minimum age required to contest Lok Sabha elections in India?', back: '25 years.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-c3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who appoints the Chief Election Commissioner of India?',
        options: ['Prime Minister', 'Chief Justice of India', 'President of India', 'Speaker of Lok Sabha'],
        correctOptionIndex: 2,
        answer: 'Option (C) President of India',
      },
    ],
  },
  {
    id: 'c9-civ-ch4',
    classLevel: 9,
    subject: 'civics',
    chapterNumber: 4,
    title: 'Working of Institutions',
    subtitle: 'Parliament (Lok Sabha vs Rajya Sabha), Political & Permanent Executive, Prime Minister, President, Judiciary',
    overview: 'Democracy is not just about choosing rulers; rulers must work with and within institutions. This chapter examines how major policy decisions (such as the Mandal Commission report) are enacted by Parliament, enforced by the Executive, and reviewed by the Judiciary.',
    estimatedReadTime: '16 min read',
    shortNotes: [
      {
        title: 'Major Policy Decisions: The Mandal Commission Example',
        bullets: [
          'Second Backward Classes Commission (Mandal Commission) recommended 27% reservation for Socially and Educationally Backward Classes (SEBC) in government jobs.',
          'Government issued Office Memorandum on 13 August 1990 implementing the policy.',
          'Supreme Court upheld the reservation in the Indira Sawhney case (1992) with condition that creamy layer be excluded.',
        ],
      },
      {
        title: 'Parliament: Lok Sabha vs Rajya Sabha',
        bullets: [
          'Parliament consists of President, Lok Sabha (House of the People), and Rajya Sabha (Council of States).',
          'Lok Sabha is more powerful: Money bills can originate only in Lok Sabha; Lok Sabha’s majority controls the Prime Minister and Council of Ministers through No-Confidence Motion; in joint sessions, Lok Sabha’s numerical majority prevails.',
        ],
      },
      {
        title: 'Political vs Permanent Executive',
        bullets: [
          'Political Executive: Elected leaders (Ministers) who take major policy decisions; accountable to people.',
          'Permanent Executive: Civil servants (IAS, IPS) appointed on long-term basis who assist political executive with administrative expertise.',
          'Minister has final say because in a democracy, the will of the people expressed through elected representatives is supreme.',
        ],
      },
      {
        title: 'Prime Minister, President, and Judiciary',
        bullets: [
          'Prime Minister is the real executive head; chairs Cabinet meetings; distributes portfolios.',
          'President is the nominal head of state; exercises executive powers on aid and advice of Council of Ministers.',
          'Judiciary: Independent and integrated (Supreme Court, High Courts, District Courts); acts as guardian of fundamental rights via judicial review.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Prime Minister is the Most Powerful Institution',
        content: 'As head of the government, the Prime Minister exercises vast powers: chairs cabinet meetings, coordinates the work of different departments, exercises general supervision of different ministries, and can dismiss ministers. If the Prime Minister resigns, the entire ministry resigns. In modern parliamentary democracies, prime ministers hold such pre-eminent authority that political scientists often describe parliamentary systems as "prime ministerial forms of government".',
        keyTakeaway: 'The Prime Minister is the pivot around whom the entire government machinery rotates.',
      },
    ],
    keyConcepts: [
      { term: 'Judicial Review', explanation: 'Power of the Supreme Court and High Courts to declare any law or executive order invalid if it violates the Constitution.' },
      { term: 'Office Memorandum', explanation: 'An official communication issued by a government authority stating its policy decision.' },
      { term: 'Public Interest Litigation (PIL)', explanation: 'A legal mechanism allowing any citizen to approach court if public interest is hurt by government actions.' },
    ],
    importantDates: [
      { date: '1979', event: 'Mandal Commission appointed', significance: 'Identified 27% quota for OBCs.' },
      { date: '1992', event: 'Indira Sawhney Judgement', significance: 'Supreme Court upheld 27% reservation excluding creamy layer.' },
    ],
    importantPeople: [
      { name: 'B.P. Mandal', role: 'Chairman, Second Backward Classes Commission', contribution: 'Authored landmark Mandal Commission Report.' },
    ],
    definitions: [
      { term: 'Cabinet', definition: 'The inner ring of senior ministers (about 20-25) in charge of major ministries who make top government decisions.', context: 'Executive.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Institutions prevent arbitrary rule. Parliament makes laws; Lok Sabha holds financial supremacy and removes governments via No-Confidence. Political executive makes policy decisions; permanent civil servants administer them. The Supreme Court reviews constitutionality through Judicial Review.',
      goldenPoints: ['Money bills can only be introduced in the Lok Sabha.', 'Judicial review allows the Supreme Court to strike down unconstitutional laws.'],
      mindMapSteps: ['Mandal Commission Case Study → Parliament (Lok Sabha vs Rajya Sabha) → Political vs Permanent Executive → Prime Minister vs President → Supreme Court'],
      commonPitfalls: ['Do not assume civil servants outrank ministers; civil servants advise, but elected ministers make the final political decision.'],
    },
    flashcards: [
      { id: 'fc-9-c4-1', front: 'Can a Money Bill be introduced in the Rajya Sabha?', back: 'No, a Money Bill can only be introduced in the Lok Sabha.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-c4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who exercises real executive power in the Indian political system?',
        options: ['President', 'Prime Minister and Council of Ministers', 'Chief Justice of India', 'Cabinet Secretary'],
        correctOptionIndex: 1,
        answer: 'Option (B) Prime Minister and Council of Ministers',
      },
    ],
  },
  {
    id: 'c9-civ-ch5',
    classLevel: 9,
    subject: 'civics',
    chapterNumber: 5,
    title: 'Democratic Rights',
    subtitle: 'Need for Rights, Six Fundamental Rights, PIL, and National Human Rights Commission (NHRC)',
    overview: 'Rights are reasonable claims of persons recognized by society and sanctioned by law. Through real-world abuses (Guantanamo Bay, Kosovo ethnic cleansing), this chapter examines the Six Fundamental Rights guaranteed by the Indian Constitution.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Life Without Rights: Three Real Case Studies',
        bullets: [
          'Guantanamo Bay: US military detained 600 people secretly without trial, denying access to lawyers or Geneva Convention.',
          'Kosovo: Milosevic’s Serbian government unleashed brutal ethnic cleansing against Kosovar Albanians.',
          'Saudi Arabia: Hereditary monarchy where citizens cannot form parties, women face severe legal guardianship, and no freedom of religion.',
        ],
      },
      {
        title: 'Six Fundamental Rights in the Indian Constitution',
        bullets: [
          '1. Right to Equality (Articles 14-18): Equality before law, abolition of untouchability (Art 17), abolition of titles, non-discrimination.',
          '2. Right to Freedom (Articles 19-22): Freedom of speech, assembly, association, movement, residence, and profession; protection from arbitrary arrest.',
          '3. Right against Exploitation (Articles 23-24): Prohibition of human trafficking, forced labor (begar), and child labor under age 14.',
          '4. Right to Freedom of Religion (Articles 25-28): Freedom to practice and propagate any religion; no religious tax.',
          '5. Cultural and Educational Rights (Articles 29-30): Minorities have right to conserve distinct language, script, and manage educational institutions.',
          '6. Right to Constitutional Remedies (Article 32): Dr. Ambedkar called this the "Heart and Soul of the Constitution"; enables citizens to approach Supreme Court directly via writs (Habeas Corpus, Mandamus, etc.) to enforce fundamental rights.',
        ],
      },
      {
        title: 'Expanding Scope of Rights & NHRC',
        bullets: [
          'Courts expanded rights: Right to Education (Article 21A), Right to Information, Right to Privacy.',
          'National Human Rights Commission (NHRC) set up in 1993 to investigate violations independently.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Article 32 is the Heart and Soul of the Constitution',
        content: 'Dr. B.R. Ambedkar called the Right to Constitutional Remedies (Article 32) the "heart and soul of the Constitution" because fundamental rights in a constitution are meaningless if there is no machinery to enforce them. Article 32 gives every citizen the right to move the Supreme Court directly if any of their fundamental rights are violated. The court can issue special orders known as writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) to protect citizens against state overreach.',
        keyTakeaway: 'Remedies make rights tangible rather than mere theoretical ideals.',
      },
    ],
    keyConcepts: [
      { term: 'Writs', explanation: 'Formal legal orders issued by the Supreme Court or High Courts commanding authorities to act or refrain from acting to protect fundamental rights.' },
      { term: 'Begar', explanation: 'Compulsory forced labor without wages, constitutionally banned under Article 23.' },
    ],
    importantDates: [
      { date: '1993', event: 'National Human Rights Commission (NHRC) established', significance: 'Monitors human rights violations across India.' },
      { date: '2002', event: '86th Constitutional Amendment', significance: 'Inserted Article 21A making free and compulsory education a fundamental right for children aged 6 to 14.' },
    ],
    importantPeople: [
      { name: 'Dr. B.R. Ambedkar', role: 'Architect of Constitution', contribution: 'Championed Article 32 as the guarantor of all democratic freedoms.' },
    ],
    definitions: [
      { term: 'Amnesty International', definition: 'An international non-governmental organization of volunteers who campaign for human rights worldwide.', context: 'Guantanamo Bay exposés.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Rights protect citizens against tyrannical state power (Guantanamo, Kosovo). India guarantees Six Fundamental Rights: Equality, Freedom, Against Exploitation, Religious Freedom, Minority Cultural Rights, and Constitutional Remedies (Article 32).',
      goldenPoints: ['Article 32 is called the "Heart and Soul of the Constitution".', 'Article 21A guarantees the Fundamental Right to Education for children aged 6-14.'],
      mindMapSteps: ['Why Rights Matter (Guantanamo, Kosovo) → Six Fundamental Rights (Arts 14-32) → Article 32 & Writs → Expanding Rights (RTI, Privacy, NHRC)'],
      commonPitfalls: ['Right to Property was originally a fundamental right, but was removed by the 44th Amendment in 1978 to become a legal right.'],
    },
    flashcards: [
      { id: 'fc-9-c5-1', front: 'Which Fundamental Right did Dr. B.R. Ambedkar call the "Heart and Soul of the Constitution"?', back: 'Right to Constitutional Remedies (Article 32).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-c5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under which article of the Indian Constitution is the abolition of untouchability enacted?',
        options: ['Article 14', 'Article 17', 'Article 19', 'Article 21'],
        correctOptionIndex: 1,
        answer: 'Option (B) Article 17',
      },
    ],
  },

  // ==========================================
  // ECONOMICS
  // ==========================================
  {
    id: 'c9-eco-ch1',
    classLevel: 9,
    subject: 'economics',
    chapterNumber: 1,
    title: 'The Story of Village Palampur',
    subtitle: 'Factors of Production, Farming in Palampur, Green Revolution, and Non-Farm Activities',
    overview: 'Palampur is an imaginary village that introduces basic economic concepts relating to production. It examines the four requirements for production (land, labor, physical capital, human capital) and contrast between traditional farming and modern agricultural inputs.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Four Factors of Production',
        bullets: [
          '1. Land: Fixed natural resource (75% of Palampur population depends on farming).',
          '2. Labour: Unskilled and skilled human effort; provided by small farmers or landless farm labourers.',
          '3. Physical Capital: Working capital (raw materials and money in hand used up in production) and Fixed capital (tools, machines, buildings used over many years).',
          '4. Human Capital: Knowledge and enterprise required to put together land, labour, and physical capital.',
        ],
      },
      {
        title: 'Farming in Palampur & Green Revolution',
        bullets: [
          'Multiple cropping: Growing more than one crop on a piece of land during the year (Jowar/Bajra in rainy season, Potato in between, Wheat in winter, Sugarcane).',
          'Modern farming: High Yielding Varieties (HYV) seeds, chemical fertilizers, tubewells, tractors, pesticides introduced during the Green Revolution of late 1960s.',
          'Negative impacts: Depletion of soil fertility, loss of groundwater from tubewell over-pumping.',
        ],
      },
      {
        title: 'Non-Farm Activities in Palampur (25% workforce)',
        bullets: [
          'Dairy: Selling milk to neighbouring large village Raiganj.',
          'Small-scale manufacturing: Crushing sugarcane with mechanical crushers into jaggery.',
          'Shopkeeping: Small general stores selling stationery, candles, toothpaste.',
          'Transport: Rickshawalas, tongas, jeep, truck, and tractor drivers connecting Palampur to towns.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How Farm Labourers and Small Farmers Struggle for Capital',
        content: 'Medium and large farmers have their own savings from farm sales, which they use as working capital for the next season. In contrast, small farmers (cultivating plots under 2 hectares like Savita) have no savings. To buy seeds, fertilizers, and repair tubewells, they must borrow money from village moneylenders or rich farmers at exorbitant interest rates (24% to 36%), trapping them in perpetual debt and forcing them to work as underpaid laborers.',
        keyTakeaway: 'Unequal land ownership concentrates capital in large farmers while keeping smallholders in debt.',
      },
    ],
    keyConcepts: [
      { term: 'Fixed Capital vs Working Capital', explanation: 'Fixed capital (tools, tractors, buildings) can be used repeatedly in production for many years; working capital (seeds, fertilizers, cash) is consumed in a single production cycle.' },
      { term: 'Multiple Cropping', explanation: 'Growing more than one crop on a single plot of land during a agricultural calendar year.' },
    ],
    importantDates: [
      { date: 'Late 1960s', event: 'Green Revolution introduced in India', significance: 'Punjab, Haryana, and Western UP adopted HYV seeds and modern machinery.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Yield', definition: 'Crop output measured on a given piece of land during a single season.', context: 'Farming metrics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Production requires Land, Labour, Physical Capital (fixed and working), and Human Capital. Palampur increased production through well-developed electric irrigation, multiple cropping, and Green Revolution HYV inputs, while non-farm activities (dairy, transport, jaggery) engage 25% of workers.',
      goldenPoints: ['Green Revolution introduced HYV seeds requiring heavy chemical fertilizers and irrigation.', 'Tools, machines, and buildings are examples of Fixed Capital.'],
      mindMapSteps: ['4 Factors of Production → Land is Fixed → Modern Farming & Green Revolution → Inequality & Non-Farm Activities'],
      commonPitfalls: ['Do not classify cash or raw materials as fixed capital; cash and raw seeds are working capital because they are used up.'],
    },
    flashcards: [
      { id: 'fc-9-e1-1', front: 'Name the four factors of production.', back: '1. Land, 2. Labour, 3. Physical Capital, 4. Human Capital.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-e1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following is an example of working capital in farming?',
        options: ['Tractor', 'Tubewell', 'Seeds and cash', 'Harvesting combine'],
        correctOptionIndex: 2,
        answer: 'Option (C) Seeds and cash',
      },
    ],
  },
  {
    id: 'c9-eco-ch2',
    classLevel: 9,
    subject: 'economics',
    chapterNumber: 2,
    title: 'People as Resource',
    subtitle: 'Human Capital, Education & Health (Sakal vs Vilas), Economic Activities, and Unemployment',
    overview: 'Population is an asset for the economy rather than a liability when investments are made in education, healthcare, and skills. Human capital is superior to physical and land capital because human beings put them to work.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Investment in Human Capital: Sakal vs Vilas',
        bullets: [
          'Sakal: Parents invested in his schooling and vocational computer degree; got job in private software firm with high salary, contributing to economic growth.',
          'Vilas: Father died; suffered from arthritis without medical care; remained illiterate selling fish like his mother with meagre earnings.',
          'Virtuous cycle: Educated parents invest heavily in children’s schooling, health, creating generational upward mobility.',
        ],
      },
      {
        title: 'Economic Activities by Men and Women',
        bullets: [
          'Market activities: Activities performed for pay or profit (e.g. teaching, farming for market, manufacturing).',
          'Non-market activities: Production for self-consumption (e.g. cooking, domestic household chores); domestic unpaid work of women is not accounted for in National Income.',
        ],
      },
      {
        title: 'Types of Unemployment in India',
        bullets: [
          'Seasonal Unemployment: Occurs when people cannot find jobs during certain months of the year (e.g. agricultural laborers between sowing and harvest).',
          'Disguised Unemployment: More people are engaged on a farm than required; removing surplus workers does not reduce output.',
          'Educated Unemployment: Matriculates, graduates, and post-graduates unable to find jobs in urban areas.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Government Initiatives in Education and Health',
        content: 'To build human capital, the Indian government launched major schemes:\n1. Sarva Shiksha Abhiyan: Flagship program providing elementary education to all children aged 6 to 14 years.\n2. Mid-Day Meal Scheme: Introduced to encourage attendance, reduce dropout rates, and improve the nutritional status of children.\n3. Navodaya Vidyalayas: Model schools established in each rural district for talented students.\n4. Health Infrastructure: Expansion of Primary Health Centres (PHCs) and Community Health Centres (CHCs) drastically reduced Infant Mortality Rate and increased Life Expectancy to over 69 years.',
        keyTakeaway: 'Public investments in schools and clinics build national productivity and reduce poverty.',
      },
    ],
    keyConcepts: [
      { term: 'Human Capital Formation', explanation: 'The process of acquiring and increasing the number of persons who have the skills, education, and experience essential for economic growth.' },
      { term: 'Disguised Unemployment', explanation: 'A situation where workers seem employed, but their removal has zero impact on aggregate production.' },
    ],
    importantDates: [
      { date: '2001', event: 'Sarva Shiksha Abhiyan launched', significance: 'Universalisation of elementary education.' },
      { date: '1995', event: 'Mid-Day Meal Scheme introduced', significance: 'Boosted school attendance and child nutrition.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Infant Mortality Rate', definition: 'The death of a child under one year of age per 1,000 live births.', context: 'Health indicator.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Investment in education and healthcare transforms population into productive human capital (Sakal vs Vilas). Economic activities divide into market and non-market sectors. India suffers from seasonal and disguised unemployment in rural areas, and educated unemployment in urban centers.',
      goldenPoints: ['Human capital is superior to land and physical capital because it can utilize them.', 'Mid-Day Meal Scheme was launched to improve attendance and nutritional levels.'],
      mindMapSteps: ['Human Capital Concept → Sakal vs Vilas Comparison → Economic Activities → Unemployment Types → Government Schemes'],
      commonPitfalls: ['Unpaid domestic work of homemakers is not counted in National Income or GDP.'],
    },
    flashcards: [
      { id: 'fc-9-e2-1', front: 'What is the primary aim of the Mid-Day Meal Scheme?', back: 'To encourage school attendance, reduce dropouts, and improve the nutritional status of school children.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c9-e2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which type of unemployment is predominantly found in rural agriculture where more people are employed than required?',
        options: ['Seasonal unemployment', 'Disguised unemployment', 'Educated unemployment', 'Frictional unemployment'],
        correctOptionIndex: 1,
        answer: 'Option (B) Disguised unemployment',
      },
    ],
  },
  {
    id: 'c9-eco-ch3',
    classLevel: 9,
    subject: 'economics',
    chapterNumber: 3,
    title: 'Poverty as a Challenge',
    subtitle: 'Poverty Line, Two Typical Cases, Social Exclusion, Vulnerability, Anti-Poverty Programmes',
    overview: 'In independent India, poverty is one of the most compelling challenges. Every fourth person in India is poor. This chapter studies the poverty line, vulnerability, interstate disparities, and major government poverty-alleviation programs.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Two Typical Cases of Poverty',
        bullets: [
          'Urban Case (Ram Saran): Daily wage flour mill worker in Ranchi earning Rs 1500/month; lives in a one-room rented shack with wife and 4 children; cannot afford doctor or school.',
          'Rural Case (Lakha Singh): Landless agricultural laborer in Meerut; does odd jobs earning Rs 50/day; family of 8 lives in kutcha hut, lacking soap and footwear.',
          'Dimensions of poverty: Hunger, lack of shelter, lack of clean water and sanitation, lack of medical care, feeling of helplessness.',
        ],
      },
      {
        title: 'Poverty Line Estimation in India',
        bullets: [
          'Minimum subsistence level: Nutritional requirement of 2,400 calories per person per day in rural areas and 2,100 calories in urban areas (higher calorie need in rural areas due to physical labor).',
          'Monetary threshold (2011-12 NITI Aayog / NSSO): Rs 816 per month per capita in rural areas; Rs 1,000 per month per capita in urban areas.',
          'World Bank standard: Extreme poverty defined as living on less than $2.15 per person per day (PPP).',
        ],
      },
      {
        title: 'Social Indicators: Social Exclusion and Vulnerability',
        bullets: [
          'Social Exclusion: Poor living only in a poor surrounding, excluded from enjoying social equality with better-off people (caste-based exclusion).',
          'Vulnerability: Greater probability of certain communities (SC, ST, widows, physically handicapped) becoming or remaining poor during natural disasters or health crises.',
        ],
      },
      {
        title: 'Government Anti-Poverty Measures',
        bullets: [
          'MGNREGA 2005: 100 days guaranteed wage employment for rural households (1/3 reserved for women).',
          'Prime Minister Rozgar Yojana (PMRY, 1993): Creating self-employment for educated unemployed youth.',
          'Pradhan Mantri Gramodaya Yojana (PMGY, 2000): Central assistance for basic rural health, education, shelter, and drinking water.',
          'Antyodaya Anna Yojana (AAY): Highly subsidized food grains (wheat at Rs 2/kg, rice at Rs 3/kg) for the poorest of the poor.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Interstate Disparities in Poverty Persist',
        content: 'Poverty is not uniform across Indian states. Bihar (33.7%) and Odisha (32.6%) remain the two poorest states in India. In contrast, states like Kerala, Punjab, Haryana, and Tamil Nadu have drastically reduced poverty through different successful strategies: (1) Punjab and Haryana through high agricultural growth rates; (2) Kerala through massive human resource investment in schools and healthcare; (3) West Bengal through land reform measures; (4) Tamil Nadu and Andhra Pradesh through efficient Public Distribution Systems (PDS).',
        keyTakeaway: 'Different states have eliminated poverty using tailored agricultural, educational, or welfare interventions.',
      },
    ],
    keyConcepts: [
      { term: 'Social Exclusion', explanation: 'A process through which individuals or groups are excluded from facilities, benefits, and opportunities that others enjoy.' },
      { term: 'Poverty Line', explanation: 'A benchmark level of income or expenditure required to fulfill basic minimum nutritional and living needs.' },
    ],
    importantDates: [
      { date: '2000', event: 'Antyodaya Anna Yojana (AAY) launched', significance: 'Special subsidized food grain scheme for bottom poorest families.' },
      { date: '2005', event: 'MGNREGA passed', significance: 'Guarantees 100 days of rural work.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Vulnerability', definition: 'The measure of risk of being exposed to poverty or hardship due to belonging to disadvantaged social or economic categories.', context: 'Poverty analysis.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Poverty is evaluated via calorie norms (2400 rural, 2100 urban) and per capita expenditure. Social exclusion and vulnerability disproportionately affect SC, ST, and female-headed households. Inter-state disparity shows Kerala (human capital) and Punjab (Green Revolution) outperforming Bihar and Odisha. Anti-poverty programs include MGNREGA and AAY.',
      goldenPoints: ['Rural calorie requirement is 2,400 calories/day while urban is 2,100 calories/day.', 'Antyodaya Anna Yojana serves the poorest of the poor.'],
      mindMapSteps: ['Case Studies & Dimensions → Calorie & Monetary Poverty Line → Social Exclusion & Vulnerability → Inter-State Disparities → Anti-Poverty Programmes'],
      commonPitfalls: ['Rural calorie norms (2,400) are higher than urban norms (2,100) because rural people do more strenuous physical manual labor.'],
    },
    flashcards: [
      { id: 'fc-9-e3-1', front: 'What is the accepted average calorie requirement per person per day in rural India?', back: '2,400 calories per person per day.', category: 'definition' },
    ],
    questions: [
      {
        id: 'c9-e3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Why is the calorie requirement higher in rural areas than in urban areas?',
        options: ['Rural people eat more grains', 'Rural people engage in more physical labour', 'Food is cheaper in rural areas', 'Rural areas have colder climate'],
        correctOptionIndex: 1,
        answer: 'Option (B) Rural people engage in more physical labour',
      },
    ],
  },
  {
    id: 'c9-eco-ch4',
    classLevel: 9,
    subject: 'economics',
    chapterNumber: 4,
    title: 'Food Security in India',
    subtitle: 'Dimensions of Food Security, Bengal Famine 1943, Buffer Stock, PDS, and Role of Cooperatives',
    overview: 'Food security means availability, accessibility, and affordability of food to all people at all times. India achieved self-sufficiency through the Green Revolution, maintained by buffer stocks and the Public Distribution System (PDS).',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Three Dimensions of Food Security',
        bullets: [
          '1. Availability: Food production within country + food imports + previous years’ stocks in government granaries.',
          '2. Accessibility: Food is within reach of every person without discrimination.',
          '3. Affordability: An individual has enough money to buy sufficient, safe, and nutritious food to meet dietary needs.',
        ],
      },
      {
        title: 'Why Food Security? The Bengal Famine (1943)',
        bullets: [
          'Most devastating famine in recorded Indian history; killed over 30 lakh (3 million) people in Bengal province.',
          'Agricultural laborers, fishermen, transport workers, and casual laborers were hardest hit by soaring rice prices.',
        ],
      },
      {
        title: 'Buffer Stock and Public Distribution System (PDS)',
        bullets: [
          'Buffer Stock: Stock of food grains (wheat and rice) procured by the government through Food Corporation of India (FCI) at pre-announced Minimum Support Price (MSP).',
          'Issue Price: Subsidized price at which food grains are released to poorer strata through Fair Price Shops (ration shops).',
          'Three types of ration cards: Antyodaya cards (poorest of poor), BPL cards (below poverty line), APL cards (above poverty line).',
        ],
      },
      {
        title: 'Role of Cooperatives in Food Security',
        bullets: [
          'Amul (Gujarat): White revolution, providing milk and dairy products nationwide.',
          'Mother Dairy (Delhi): Providing milk and vegetables at controlled prices.',
          'Academy of Development Science (ADS, Maharashtra): Facilitated grain banks in tribal regions.',
          'In Tamil Nadu, around 94% of all fair price shops are run by cooperatives.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The National Food Security Act (NFSA 2013)',
        content: 'Enacted in September 2013, the National Food Security Act provides for food and nutritional security by ensuring access to adequate quantity of quality food at affordable prices. It legally entitles up to 75% of the rural population and up to 50% of the urban population (covering roughly 67% of India’s total population) to receive subsidized food grains under Targeted PDS (rice at Rs 3/kg, wheat at Rs 2/kg, coarse grains at Rs 1/kg).',
        keyTakeaway: 'NFSA shifted food security from a discretionary welfare program to a justiciable legal right.',
      },
    ],
    keyConcepts: [
      { term: 'Minimum Support Price (MSP)', explanation: 'Pre-announced price declared by government prior to sowing season to encourage farmers and assure them of guaranteed purchase.' },
      { term: 'Buffer Stock', explanation: 'A reserve of food grains maintained by the Food Corporation of India to distribute in deficit areas and cushion harvest failures.' },
    ],
    importantDates: [
      { date: '1943', event: 'Bengal Famine', significance: 'Worst famine in Indian history killing 30 lakh people.' },
      { date: '2013', event: 'National Food Security Act (NFSA) enacted', significance: 'Provides legal food entitlements to 67% of Indian population.' },
    ],
    importantPeople: [
      { name: 'Dr. Verghese Kurien', role: 'Father of White Revolution', contribution: 'Engineered the Amul cooperative dairy model.' },
    ],
    definitions: [
      { term: 'Fair Price Shop', definition: 'A government-regulated ration shop that sells essential commodities (rice, wheat, sugar, kerosene) at subsidized issue prices.', context: 'PDS network.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Food security requires Availability, Accessibility, and Affordability. Food Corporation of India (FCI) procures buffer stock at MSP, distributed through Fair Price Shops via the Public Distribution System (PDS). Cooperatives (Amul, Mother Dairy) play a pivotal role. The 2013 NFSA guarantees subsidized grain to two-thirds of the population.',
      goldenPoints: ['In Tamil Nadu, about 94% of fair price shops are run by cooperatives.', 'Bengal Famine of 1943 was the most devastating famine in India, killing 3 million.'],
      mindMapSteps: ['3 Dimensions of Food Security → Bengal Famine Lessons → Buffer Stock & MSP → PDS Rationing System → Cooperatives & NFSA 2013'],
      commonPitfalls: ['Do not confuse Minimum Support Price (paid to farmers by FCI) with Issue Price (subsidized price paid by poor consumers at ration shops).'],
    },
    flashcards: [
      { id: 'fc-9-e4-1', front: 'What is the price at which the Food Corporation of India procures food grains from farmers?', back: 'Minimum Support Price (MSP).', category: 'definition' },
    ],
    questions: [
      {
        id: 'c9-e4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which state runs approximately 94% of its fair price shops through cooperatives?',
        options: ['Punjab', 'Tamil Nadu', 'Maharashtra', 'Gujarat'],
        correctOptionIndex: 1,
        answer: 'Option (B) Tamil Nadu',
      },
    ],
  },
];

export const CHAPTERS_CLASS_9: Chapter[] = RAW_CHAPTERS_CLASS_9.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_9[ch.id];
  if (!enrichment) return ch;
  return {
    ...ch,
    shortNotes: enrichment.shortNotes || ch.shortNotes,
    detailedSections: enrichment.detailedSections || ch.detailedSections,
    keyConcepts: enrichment.keyConcepts || ch.keyConcepts,
    importantDates: enrichment.importantDates || ch.importantDates,
    importantPeople: enrichment.importantPeople || ch.importantPeople,
    definitions: enrichment.definitions || ch.definitions,
    importantFigures: enrichment.importantFigures || ch.importantFigures,
    oneShotRevision: enrichment.oneShotRevision || ch.oneShotRevision,
  };
});
