import { Chapter } from '../types/sst';

export const CHAPTERS_CLASS_10_MORE: Chapter[] = [
  // ==========================================
  // CLASS 10 - HISTORY - CHAPTER 3
  // ==========================================
  {
    id: 'c10-hist-ch3',
    classLevel: 10,
    subject: 'history',
    chapterNumber: 3,
    title: 'The Making of a Global World',
    subtitle: 'Pre-modern Silk Routes, Conquest & Disease (Smallpox), Great Depression (1929), Bretton Woods System',
    overview: 'Human societies have steadily become more interlinked through migration, trade, and cultural exchange. From ancient Silk Routes and biological warfare (Smallpox in America) to the devastating Great Depression and the Bretton Woods financial institutions (IMF and World Bank).',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Pre-Modern World & Silk Routes',
        bullets: [
          'Silk Routes linked vast regions of Asia with Europe and northern Africa; Chinese silk, pottery, Indian textiles and spices traveled west; precious metals (gold, silver) flowed east.',
          'Food Travels: Spaghetti and noodles traveled from China to Italy; potatoes, maize, tomatoes, and chillies were introduced to Europe from the Americas by Christopher Columbus.',
          'Conquest, Disease and Trade: European colonization of the Americas succeeded primarily due to deadly germs (Smallpox) to which indigenous populations had no biological immunity.',
        ],
      },
      {
        title: 'The Nineteenth Century (1815-1914)',
        bullets: [
          'Three flows of international economic exchange: Flow of trade (goods like cloth and wheat), Flow of labor (migration of indentured labor), Flow of capital (investments).',
          'Corn Laws in Britain: Imposed tariffs on food imports; their abolition allowed cheaper food into Britain, driving farmers into cities and factories.',
          'Rinderpest (Cattle Plague) in Africa (1890s): Killed 90% of African cattle, destroying local livelihood and forcing Africans into wage labor in European gold and diamond mines.',
          'Indentured Labour Migration: Millions of Indian and Chinese laborers recruited under bonded contracts to work on Caribbean, Mauritian, and Fijian plantations (described as "new system of slavery").',
        ],
      },
      {
        title: 'The Great Depression (1929) and Bretton Woods',
        bullets: [
          'Great Depression caused by agricultural overproduction (collapsing prices) and withdrawal of US foreign loans following the Wall Street Crash (October 1929).',
          'Impact on India: Wheat prices fell by 50%; peasants suffered more than urban dwellers; India became an exporter of precious gold.',
          'Bretton Woods Conference (July 1944 in New Hampshire, USA): Established the International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (World Bank) to maintain post-war economic stability based on fixed exchange rates pegged to the US Dollar.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Smallpox Was More Lethal than Guns in Conquering the Americas',
        content: 'When Spanish conquistadors led by Hernán Cortés arrived in the Americas, their most devastating weapon was not military guns or steel armor, but the smallpox virus they carried on their persons. Because of the long historical isolation of the American continents from Afro-Eurasia, native Americans possessed zero biological immunity to European diseases. Once introduced, smallpox spread rapidly ahead of the Spanish conquistadors, killing entire communities and dissolving tribal political structures before a single gun was fired.',
        keyTakeaway: 'Biological contagion acted as the decisive weapon of European colonization in the New World.',
      },
    ],
    keyConcepts: [
      { term: 'Indentured Labour', explanation: 'A bonded laborer under contract to work for a specific employer for a fixed period of time to pay off their passage to a new country.' },
      { term: 'Bretton Woods Twins', explanation: 'The International Monetary Fund (IMF) and the World Bank, established at the 1944 Bretton Woods Conference to govern post-war global finance.' },
    ],
    importantDates: [
      { date: '1890s', event: 'Rinderpest outbreak in Africa', significance: 'Killed 90% of cattle and subjugated African labor.' },
      { date: 'October 1929', event: 'Wall Street Crash', significance: 'Triggered the worldwide Great Depression.' },
      { date: 'July 1944', event: 'Bretton Woods Conference', significance: 'Created IMF and World Bank.' },
    ],
    importantPeople: [
      { name: 'Christopher Columbus', role: 'Explorer', contribution: 'Accidentally discovered the Americas, initiating transatlantic exchange of crops, peoples, and diseases.' },
      { name: 'John Maynard Keynes', role: 'Economist', contribution: 'Influenced the architectural design of the post-war Bretton Woods economic order.' },
    ],
    definitions: [
      { term: 'Tariff', definition: 'A tax or customs duty imposed by a government on goods imported into or exported from a country.', context: 'International trade.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Global interconnectedness evolved via Silk Routes and the Columbian exchange (potatoes, smallpox germs). In the 19th century, Corn Laws were repealed, Rinderpest devastated Africa, and indentured labor was exported to plantations. The 1929 Wall Street Crash caused the Great Depression. In 1944, the Bretton Woods conference established the IMF and World Bank.',
      goldenPoints: ['Smallpox wiped out whole native American populations who lacked immunity.', 'The IMF and World Bank are known as the Bretton Woods Twins.'],
      mindMapSteps: ['Pre-modern Silk Routes & Germ Warfare → 19th Century Flows of Trade, Labor & Rinderpest → Great Depression of 1929 → Bretton Woods Twins (1944)'],
      commonPitfalls: ['The Great Depression originated in the United States in 1929, but devastated global trade and agriculture.'],
    },
    flashcards: [
      { id: 'fc-10-h3-1', front: 'Which two global financial institutions are known as the "Bretton Woods Twins"?', back: 'The International Monetary Fund (IMF) and the World Bank.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c10-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year did the worldwide Great Depression begin following the Wall Street Crash?',
        options: ['1914', '1919', '1929', '1944'],
        correctOptionIndex: 2,
        answer: 'Option (C) 1929',
      },
    ],
  },
  {
    id: 'c10-hist-ch4',
    classLevel: 10,
    subject: 'history',
    chapterNumber: 4,
    title: 'Print Culture and the Modern World',
    subtitle: 'Gutenberg Press, Martin Luther & Protestant Reformation, Print Revolution, Vernacular Press Act (1878)',
    overview: 'From early woodblock printing in China, Japan, and Korea to Johannes Gutenberg’s movable metal type press in 15th-century Germany, print culture stimulated public debate, the Protestant Reformation, the French Revolution, and anti-colonial nationalism in India.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Print Revolution in Europe',
        bullets: [
          'Origins: Hand printing developed in China (accordion book); Marco Polo brought woodblock printing knowledge to Europe from China in 1295.',
          'Johannes Gutenberg: Invented the movable mechanical printing press at Mainz, Germany in the 1430s; first printed book was the Bible (180 copies in 3 years).',
          'Protestant Reformation (1517): Martin Luther wrote "Ninety-Five Theses" criticizing corrupt Roman Catholic practices; posted on Wittenberg church door; translated New Testament sold 5,000 copies in weeks; Luther declared: "Printing is the ultimate gift of God and the greatest one."',
          'The Reading Mania: Chapbooks sold by pedlars (chapmen) for a penny; libraries opened for peasants and artisans.',
        ],
      },
      {
        title: 'Print and the French Revolution',
        bullets: [
          'Print popularized ideas of Enlightenment thinkers (Voltaire, Rousseau) emphasizing reason over tradition and dogma.',
          'Created a public culture of dialogue and debate where royalty and religious authority were openly satirized in cartoons and caricatures.',
        ],
      },
      {
        title: 'India and the World of Print',
        bullets: [
          'Portuguese Jesuit missionaries brought first printing press to Goa in mid-16th century; first book printed in Konkani in 1674.',
          'James Augustus Hickey began publishing Bengal Gazette in 1780 ("a commercial paper open to all, but influenced by none").',
          'Raja Rammohan Roy published "Sambad Kaumudi" (1821); orthodox Hindus countered with "Samachar Chandrika".',
          'Vernacular Press Act (1878): Modelled on Irish Press Laws; passed by Lord Lytton giving government tyrannical rights to censor and seize vernacular printing presses.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Martin Luther Hailed the Printing Press',
        content: 'Before the printing press, religious doctrine was mediated strictly through the Catholic clerical hierarchy, who controlled hand-copied Latin manuscripts and dictated scriptural interpretations to an illiterate public. When Martin Luther composed his "Ninety-Five Theses" challenging indulgences and papal infallibility in 1517, printed copies were translated from Latin into the vernacular German and distributed across Europe within weeks. Millions of ordinary people could read the scriptures directly in their mother tongue, breaking the monopoly of Rome and sparking the Protestant Reformation.',
        keyTakeaway: 'Print democratized scriptural interpretation, dismantling ecclesiastical monopoly.',
      },
    ],
    keyConcepts: [
      { term: 'Protestant Reformation', explanation: 'A 16th-century religious movement to reform the Catholic Church, catalyzed by Martin Luther’s printed Ninety-Five Theses.' },
      { term: 'Vernacular Press Act (1878)', explanation: 'A colonial censorship law enacted by Lord Lytton empowering the British administration to confiscate printing presses of critical vernacular newspapers.' },
    ],
    importantDates: [
      { date: '1448', event: 'Gutenberg perfects movable printing press', significance: 'Commenced the European Print Revolution with the Gutenberg Bible.' },
      { date: '1517', event: 'Martin Luther posts Ninety-Five Theses', significance: 'Ignited the Protestant Reformation.' },
      { date: '1780', event: 'Hickey’s Bengal Gazette published', significance: 'India’s first printed newspaper.' },
      { date: '1878', event: 'Vernacular Press Act passed', significance: 'Colonial state attempts to suppress nationalist regional press.' },
    ],
    importantPeople: [
      { name: 'Johannes Gutenberg', role: 'German Inventor', contribution: 'Developed the movable metal type mechanical printing press in Mainz.' },
      { name: 'Martin Luther', role: 'Religious Reformer', contribution: 'Sparked the Protestant Reformation using printed German vernacular scriptures.' },
      { name: 'James Augustus Hickey', role: 'Journalist & Publisher', contribution: 'Founded the Bengal Gazette, India’s first newspaper.' },
    ],
    definitions: [
      { term: 'Chapbook', definition: 'Small pocket-sized booklets sold by traveling pedlars (chapmen) for a penny in 16th-18th century Europe.', context: 'Popular literacy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Printing originated in China with woodblocks and reached Europe via Marco Polo (1295). Gutenberg invented movable metal type in the 1430s. Martin Luther’s Ninety-Five Theses (1517) sparked the Protestant Reformation. Print catalyzed the French Revolution through rationalist critiques. In India, Hickey’s Bengal Gazette appeared in 1780, followed by Rammohan Roy’s Sambad Kaumudi, prompting the repressive Vernacular Press Act of 1878.',
      goldenPoints: ['Martin Luther said: "Printing is the ultimate gift of God and the greatest one."', 'The Vernacular Press Act of 1878 was modeled on the Irish Press Laws.'],
      mindMapSteps: ['Chinese Woodblocks → Gutenberg Movable Type (1430s) → Martin Luther & Protestant Reformation → French Revolution Public Sphere → Hickey & 1878 Vernacular Press Act'],
      commonPitfalls: ['The first printing press in India arrived in Goa with Portuguese Jesuit priests, not with the British.'],
    },
    flashcards: [
      { id: 'fc-10-h4-1', front: 'In which city did Johannes Gutenberg develop the first movable type printing press?', back: 'Mainz, Germany.', category: 'location' },
    ],
    questions: [
      {
        id: 'c10-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which colonial law passed in 1878 was modeled on the Irish Press Laws to censor Indian regional newspapers?',
        options: ['The Rowlatt Act', 'The Vernacular Press Act', 'The Arms Act', 'The Sedition Act'],
        correctOptionIndex: 1,
        answer: 'Option (B) The Vernacular Press Act (1878)',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - GEOGRAPHY - CHAPTER 2
  // ==========================================
  {
    id: 'c10-geo-ch2',
    classLevel: 10,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Forest and Wildlife Resources',
    subtitle: 'Biodiversity, IUCN Categories, Joint Forest Management (JFM), Sacred Groves, Project Tiger (1973)',
    overview: 'India is home to nearly 8% of the world’s recorded biological species. Explore the causes of habitat destruction, IUCN species classification, community-led conservation movements (Chipko, Beej Bachao Andolan), and state initiatives like Project Tiger and Joint Forest Management.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Flora, Fauna, and IUCN Categories',
        bullets: [
          'India possesses over 81,000 species of fauna and 47,000 species of flora.',
          'IUCN Categories: (1) Normal species (sal, pine, rodents); (2) Endangered species (black buck, crocodile, Indian wild ass, lion-tailed macaque); (3) Vulnerable species (blue sheep, Asiatic elephant, Gangetic dolphin); (4) Rare species (Himalayan brown bear, desert fox); (5) Endemic species (Andaman teal, Nicobar pigeon); (6) Extinct species (Asiatic cheetah, pink-headed duck).',
        ],
      },
      {
        title: 'Causes of Depletion & Conservation Programs',
        bullets: [
          'Depletion causes: Colonial commercial forestry, expansion of agriculture, river valley projects (over 5,000 sq km submerged for Narmada Sagar), mining (Buxa tiger reserve threatened by dolomite mining).',
          'Wildlife Protection Act (1972): Established protected lists, banned hunting, and set up national parks and sanctuaries.',
          'Project Tiger (1973): One of the most successful wildlife conservation efforts in the world; established tiger reserves like Corbett (Uttarakhand), Sundarbans (West Bengal), Bandhavgarh (MP), Sariska (Rajasthan), Manas (Assam), Periyar (Kerala).',
        ],
      },
      {
        title: 'Community Conservation & Sacred Groves',
        bullets: [
          'Bhairodev Dakav ‘Sonchuri’: Villagers of 5 villages in Alwar (Rajasthan) declared 1,200 hectares of forest as sanctuary, framing their own rules prohibiting hunting.',
          'Chipko Movement: In Himalayas; villagers hugged trees to resist commercial loggers.',
          'Sacred Groves: Virgin forests protected by tribal societies as abode of deities (Mundas and Santhals worship Mahua and Kadamba; Bishnois in Rajasthan protect blackbucks and nilgai).',
          'Joint Forest Management (JFM): First resolution passed by Odisha in 1988; local village communities manage degraded forests in return for non-timber forest produce.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Cultural Philosophy of Sacred Groves',
        content: 'Long before modern environmental legislation existed, indigenous communities in India conserved biodiverse habitats through religious reverence. Known as Sacred Groves or "Baniyo", these are pristine patches of virgin forest left completely undisturbed by human axes because they are considered sacred sanctuaries of local patron spirits. Communities believe that cutting even a single branch invites divine wrath, thereby preserving endangered medicinal herbs, old-growth timber, and rare bird species that have vanished from surrounding developed lands.',
        keyTakeaway: 'Sacred Groves preserve rare biodiversity through indigenous spiritual stewardship.',
      },
    ],
    keyConcepts: [
      { term: 'Joint Forest Management (JFM)', explanation: 'A collaborative program between state forest departments and local village institutions to protect and regenerate degraded forests.' },
      { term: 'Endemic Species', explanation: 'Plant or animal species that are found exclusively in a particular geographical area and nowhere else in the world.' },
    ],
    importantDates: [
      { date: '1972', event: 'Wildlife Protection Act enacted', significance: 'National legislative umbrella for wildlife conservation.' },
      { date: '1973', event: 'Launch of Project Tiger', significance: 'Pioneering carnivore conservation initiative in Corbett National Park.' },
      { date: '1988', event: 'First formal state resolution for JFM in Odisha', significance: 'Institutionalized community-state participatory forestry.' },
    ],
    importantPeople: [
      { name: 'Sunderlal Bahuguna', role: 'Environmentalist', contribution: 'Spearheaded the Himalayan Chipko Movement to save alpine forests.' },
    ],
    definitions: [
      { term: 'Biodiversity', definition: 'The immense variety of plant and animal life living in a particular habitat or on Earth as an interconnected web.', context: 'Ecology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India hosts 8% of global biodiversity. IUCN classifies species into Endangered, Vulnerable, Rare, Endemic, and Extinct. Conservation is governed by the 1972 Wildlife Act and 1973 Project Tiger. Communities actively protect nature through Chipko, Sacred Groves, Bishnoi animal protection, and Joint Forest Management (Odisha 1988).',
      goldenPoints: ['Project Tiger was launched in 1973.', 'Odisha was the first Indian state to pass the Joint Forest Management (JFM) resolution in 1988.'],
      mindMapSteps: ['IUCN 6 Species Categories → Habitat Depletion Factors → 1972 Wildlife Act & Project Tiger (1973) → Community Action: Chipko, Sacred Groves & JFM'],
      commonPitfalls: ['The Asiatic cheetah was declared extinct in India in 1952.'],
    },
    flashcards: [
      { id: 'fc-10-g2-1', front: 'Which Indian state passed the first formal resolution for Joint Forest Management (JFM) in 1988?', back: 'Odisha.', category: 'location' },
    ],
    questions: [
      {
        id: 'c10-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year was Project Tiger launched in India to protect the dwindling Bengal tiger population?',
        options: ['1952', '1972', '1973', '1988'],
        correctOptionIndex: 2,
        answer: 'Option (C) 1973',
      },
    ],
  },
  {
    id: 'c10-geo-ch3',
    classLevel: 10,
    subject: 'geography',
    chapterNumber: 3,
    title: 'Water Resources',
    subtitle: 'Water Scarcity, Multipurpose River Valley Projects (Dams as "Temples of Modern India"), Rainwater Harvesting (Rooftop, Tankas, Guls)',
    overview: 'Water is a renewable yet finite resource facing acute stress from population growth, industrial pollution, and commercial irrigation. Examine Jawaharlal Nehru’s vision of multipurpose river valley projects, environmental controversies (Narmada Bachao Andolan), and traditional rainwater harvesting techniques.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Water Scarcity and Multipurpose River Projects',
        bullets: [
          'Water scarcity is driven by overexploitation, unequal access, industrial discharge, and chemical fertilizer runoff.',
          'Jawaharlal Nehru proclaimed multipurpose dams as the "Temples of Modern India", believing they would integrate agricultural expansion with village industrial growth.',
          'Functions of Dams: Hydroelectric power, irrigation, flood control, fish breeding, inland navigation, and recreation.',
        ],
      },
      {
        title: 'Criticism & Environmental Movements',
        bullets: [
          'Ecological problems: Submergence of fertile floodplains and forests, sedimentation at reservoir bottoms causing rocky river beds, destruction of fish breeding habitats.',
          'Social injustice: Displacement of tribal communities and local farmers without fair compensation.',
          'Social Movements: Narmada Bachao Andolan (against Sardar Sarovar Dam in Gujarat) and Tehri Dam Andolan (in Uttarakhand).',
          'Inter-state water disputes: Krishna-Godavari dispute (between Maharashtra, Karnataka, and Andhra Pradesh) and Kaveri dispute (Karnataka and Tamil Nadu).',
        ],
      },
      {
        title: 'Traditional Rainwater Harvesting Systems',
        bullets: [
          'Guls or Kuls: Diversion channels built in Western Himalayas for agricultural irrigation.',
          'Rooftop Rainwater Harvesting: Common in Rajasthan; rainwater collected via pipes into underground storage rooms called "Tankas" built inside homes.',
          'Khadins and Johads: Rain-fed storage structures built in arid agricultural fields of Jaisalmer.',
          'Bamboo Drip Irrigation: 200-year-old traditional system in Meghalaya where stream water is transported through bamboo pipes to irrigate betel leaf plants.',
          'Tamil Nadu: First state in India to make rooftop rainwater harvesting compulsory for all houses across the state by law.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Nehru Called Dams the "Temples of Modern India"',
        content: 'Following independence in 1947, India faced two urgent crises: chronic food deficits requiring costly wheat imports, and a lack of electrical power to industrialize. Jawaharlal Nehru championed monumental multipurpose river valley projects like the Bhakra Nangal Dam on the Sutlej river. He famously declared them the "temples of modern India" because he believed they symbolized national self-reliance, engineering prowess, and the harmonious integration of agricultural prosperity with rapid industrial manufacturing.',
        keyTakeaway: 'Nehru viewed multipurpose dams as the developmental engines uniting agriculture and industry.',
      },
    ],
    keyConcepts: [
      { term: 'Multipurpose River Project', explanation: 'A large dam project designed to serve multiple developmental objectives simultaneously, including irrigation, hydroelectricity, and flood control.' },
      { term: 'Bamboo Drip Irrigation', explanation: 'An ingenious two-century-old indigenous irrigation method in Meghalaya using bamboo pipes to drip water onto crops.' },
    ],
    importantDates: [
      { date: '2001', event: 'Tamil Nadu mandates rooftop rainwater harvesting', significance: 'First state to enact compulsory legal rooftop water harvesting.' },
    ],
    importantPeople: [
      { name: 'Jawaharlal Nehru', role: 'First Prime Minister of India', contribution: 'Coined the term "Temples of Modern India" for multipurpose dams.' },
      { name: 'Medha Patkar', role: 'Social Activist', contribution: 'Founded the Narmada Bachao Andolan to fight for the rights of displaced tribals.' },
    ],
    definitions: [
      { term: 'Tanka', definition: 'An underground concrete or stone cistern built inside houses in arid Rajasthan to store pristine drinking rainwater.', context: 'Hydrology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Water is renewable but stressed by pollution and overextraction. Nehru called dams the "Temples of Modern India", but they caused ecological damage and tribal displacement (Narmada Bachao Andolan). Traditional solutions include Himalayan Kuls, Rajasthan Tankas/Khadins, and Meghalaya Bamboo Drip Irrigation. Tamil Nadu mandates rooftop harvesting by law.',
      goldenPoints: ['Tamil Nadu is the first state in India to make rooftop rainwater harvesting legally compulsory.', 'Jawaharlal Nehru described multipurpose dams as the "Temples of Modern India".'],
      mindMapSteps: ['Water Scarcity Causes → Multipurpose Dams & Nehru’s Vision → Ecological & Displacement Criticisms → Rainwater Harvesting (Tankas, Kuls, Bamboo Drip)'],
      commonPitfalls: ['Rainwater collected in underground tankas in Rajasthan is called "Palar Pani" and is considered the purest form of natural drinking water.'],
    },
    flashcards: [
      { id: 'fc-10-g3-1', front: 'Which Indian state made rooftop rainwater harvesting compulsory for all houses by law?', back: 'Tamil Nadu.', category: 'location' },
    ],
    questions: [
      {
        id: 'c10-g3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which northeastern state is the 200-year-old bamboo drip irrigation system practiced to water crops?',
        options: ['Assam', 'Meghalaya', 'Tripura', 'Manipur'],
        correctOptionIndex: 1,
        answer: 'Option (B) Meghalaya',
      },
    ],
  },
  {
    id: 'c10-geo-ch4',
    classLevel: 10,
    subject: 'geography',
    chapterNumber: 4,
    title: 'Agriculture',
    subtitle: 'Cropping Seasons (Rabi, Kharif, Zaid), Food & Cash Crops, Green Revolution, Bhoodan-Gramdan Movement',
    overview: 'Agriculture is the backbone of the Indian economy, employing over 50% of the workforce. Explore the three distinct cropping seasons, geographical requirements of food and cash crops, institutional and technological reforms, and Vinoba Bhave’s bloodless revolution.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Three Cropping Seasons in India',
        bullets: [
          '1. Rabi: Sown in winter (Oct-Dec) and harvested in summer (April-June); major crops: Wheat, barley, peas, gram, mustard; success helped by winter western disturbances (Mahawat) in Punjab/Haryana.',
          '2. Kharif: Sown with arrival of monsoon (June-July) and harvested in autumn (Sept-Oct); major crops: Rice (paddy), maize, jowar, bajra, tur, moong, cotton, jute, groundnut.',
          '3. Zaid: Short cropping season during summer months between Rabi and Kharif; crops: Watermelon, muskmelon, cucumber, vegetables, and fodder.',
        ],
      },
      {
        title: 'Major Crops and Requirements',
        bullets: [
          'Rice: Staple food crop of India; Kharif crop; requires temperature >25°C, rainfall >100 cm, clayey alluvial soil; leading states: West Bengal, UP, Punjab.',
          'Wheat: Second most important cereal; Rabi crop; requires cool growing season, bright sunshine at ripening, 50-75 cm rainfall; Punjab, Haryana, UP.',
          'Millets: Coarse grains with high nutritional value; Jowar (Maharashtra), Bajra (Rajasthan), Ragi (Karnataka, rich in iron and calcium).',
          'Tea: Beverage plantation crop; requires warm and moist frost-free climate, well-drained deep fertile soil rich in humus; Assam, Darjeeling, Tamil Nadu.',
          'Coffee: Cultivated in Nilgiri hills (Karnataka, Kerala, Tamil Nadu); famous variety: Arabica brought from Yemen.',
        ],
      },
      {
        title: 'Institutional and Technological Reforms',
        bullets: [
          'Abolition of Zamindari, collectivization and consolidation of land holdings (Chakbandi).',
          'Green Revolution (HYV seeds, chemical fertilizers, tubewells) and White Revolution (Operation Flood).',
          'Kisan Credit Card (KCC) and Personal Accident Insurance Scheme (PAIS); Minimum Support Price (MSP) announced by government.',
          'Bhoodan-Gramdan Movement: Initiated by Acharya Vinoba Bhave at Pochampally (Andhra Pradesh/Telangana) in 1951; voluntary donation of land by zamindars to landless laborers, known as the "Bloodless Revolution".',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Bhoodan-Gramdan "Bloodless Revolution"',
        content: 'While giving a speech at Pochampally in 1951, Acharya Vinoba Bhave was asked by landless Dalit villagers for 80 acres of land so they could feed their families. Suddenly, wealthy landlord Shri Ram Chandra Reddy stood up and offered 80 acres of his personal estate to be distributed among them. Inspired by this voluntary act, Vinoba Bhave embarked on a nationwide walking pilgrimage (Padayatra). Many landlords donated portions of their land (Bhoodan) and even whole villages (Gramdan), demonstrating that equitable land redistribution was possible through moral persuasion rather than violent class warfare.',
        keyTakeaway: 'Vinoba Bhave’s Bhoodan movement proved ethical land reform could occur through moral persuasion.',
      },
    ],
    keyConcepts: [
      { term: 'Minimum Support Price (MSP)', explanation: 'A guaranteed floor price declared by the government before sowing seasons to ensure farmers do not suffer losses due to market price crashes.' },
      { term: 'Bhoodan-Gramdan', explanation: 'A voluntary land redistribution movement initiated by Vinoba Bhave in 1951, widely described as the Bloodless Revolution.' },
    ],
    importantDates: [
      { date: '1951', event: 'Vinoba Bhave launches Bhoodan Movement', significance: 'Voluntary land gifting begins at Pochampally.' },
      { date: '1960s', event: 'Green Revolution introduced', significance: 'HYV seeds and fertilizers boost wheat and rice production in Punjab and Haryana.' },
    ],
    importantPeople: [
      { name: 'Vinoba Bhave', role: 'Spiritual Disciple of Gandhi', contribution: 'Spearheaded the Bhoodan-Gramdan movement.' },
      { name: 'Dr. M.S. Swaminathan', role: 'Father of Indian Green Revolution', contribution: 'Introduced Mexican semi-dwarf wheat varieties to India.' },
    ],
    definitions: [
      { term: 'Horticulture', definition: 'The intensive commercial cultivation of fruits, vegetables, and ornamental plants for food and economic markets.', context: 'Agricultural science.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Agriculture encompasses 3 seasons: Rabi (winter wheat), Kharif (monsoon paddy), and Zaid (summer melon). Major staples are Rice (>100 cm rain), Wheat, Millets, and cash crops like Tea (Assam), Coffee (Arabica in Nilgiris), and Cotton. Modernization was driven by the Green Revolution, MSP, and Vinoba Bhave’s Bhoodan "Bloodless Revolution" in 1951.',
      goldenPoints: ['Vinoba Bhave started the Bhoodan movement at Pochampally in 1951.', 'India’s coffee cultivation began with the Arabica variety brought from Yemen.'],
      mindMapSteps: ['Cropping Seasons (Rabi, Kharif, Zaid) → Major Food Crops (Rice, Wheat, Millets) → Plantation Crops (Tea, Coffee) → Reforms & Bhoodan-Gramdan'],
      commonPitfalls: ['Rabi crops are sown in winter and harvested in summer; Kharif crops are sown with the monsoon and harvested in autumn.'],
    },
    flashcards: [
      { id: 'fc-10-g4-1', front: 'Where did Acharya Vinoba Bhave begin the historic Bhoodan Movement in 1951?', back: 'Pochampally (Andhra Pradesh, now Telangana).', category: 'location' },
    ],
    questions: [
      {
        id: 'c10-g4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which variety of coffee, originally brought from Yemen, is widely cultivated in the Nilgiri hills of India?',
        options: ['Robusta', 'Arabica', 'Liberica', 'Excelsa'],
        correctOptionIndex: 1,
        answer: 'Option (B) Arabica',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - CIVICS - CHAPTER 2
  // ==========================================
  {
    id: 'c10-civ-ch2',
    classLevel: 10,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Federalism',
    subtitle: 'Coming Together vs Holding Together, 3 Legislative Lists (Union, State, Concurrent), Linguistic States, 1992 Decentralisation',
    overview: 'Federalism divides governmental power between a central authority and constituent units. Understand the difference between "Coming Together" and "Holding Together" federations, the Three Legislative Lists of the Indian Constitution, Centre-State coalition dynamics, and the historic 73rd and 74th Constitutional Amendments of 1992.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'What is Federalism? Two Routes of Formation',
        bullets: [
          'Federalism: System of governance where power is divided between a central authority and various constituent units (provinces/states).',
          'Two routes: (1) "Coming Together" Federations: Independent states pool sovereignty while retaining identity to increase security (USA, Switzerland, Australia); all constituent units usually have equal power; (2) "Holding Together" Federations: A large country divides power between national government and constituent states (India, Spain, Belgium); Central government tends to be more powerful.',
        ],
      },
      {
        title: 'Three Legislative Lists in the Indian Constitution',
        bullets: [
          'Union List (97+ subjects): National importance requiring uniform policy (Defence, Foreign Affairs, Banking, Currency, Communications); only Union Parliament can enact laws.',
          'State List (66 subjects): State and local importance (Police, Trade, Commerce, Agriculture, Irrigation); only State Legislatures can enact laws.',
          'Concurrent List (47 subjects): Common interest to both Union and States (Education, Forests, Trade Unions, Marriage, Adoption); both can make laws; if conflict occurs, Union law prevails.',
          'Residuary Subjects: Matters not included in any of the three lists, such as Computer Software and Cyber Law; Parliament has exclusive power to legislate.',
        ],
      },
      {
        title: 'Decentralisation & 73rd/74th Amendments (1992)',
        bullets: [
          'A major constitutional decentralisation step was taken in 1992:',
          '1. Mandatory to hold regular elections to local government bodies.',
          '2. Seats reserved in elected bodies for SCs, STs, and OBCs.',
          '3. At least one-third (33%) of all positions reserved for women.',
          '4. State Election Commission created in each state to conduct panchayat and municipal elections.',
          '5. State governments required to share certain powers and revenues with local bodies.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How Coalition Politics Strengthened Indian Federalism Post-1990',
        content: 'For four decades after independence, the same political party ruled at the Centre and in most states. When regional parties won state elections, the ruling Central party frequently dismissed state governments by misusing Article 356 (President’s Rule). After 1990, the rise of regional political parties in several states ended single-party dominance in Lok Sabha, ushering in the era of Coalition Governments. National parties were forced to form alliances with regional parties, creating mutual respect for state autonomy and a culture of power sharing, fortified by a landmark Supreme Court judgment that made arbitrary dismissal of state governments difficult.',
        keyTakeaway: 'The post-1990 coalition era reinforced constitutional autonomy for regional state governments.',
      },
    ],
    keyConcepts: [
      { term: 'Concurrent List', explanation: 'A constitutional list of subjects on which both the Central Parliament and State Legislatures can legislate, with Union law taking precedence in conflicts.' },
      { term: 'Decentralisation', explanation: 'The delegation of administrative decision-making, legislative power, and fiscal resources from Central and State governments to local village and municipal bodies.' },
    ],
    importantDates: [
      { date: '1992', event: '73rd and 74th Constitutional Amendments passed', significance: 'Constitutionalized rural Panchayati Raj and urban Municipalities.' },
      { date: '1956', event: 'States Reorganisation Act implemented', significance: 'Created linguistic states across India.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Residuary Powers', definition: 'Legislative jurisdiction over any subject matter not explicitly enumerated in the Union, State, or Concurrent Lists, vesting exclusively in the Union Parliament.', context: 'Constitutional law.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Federalism divides powers between Centre and States. India is a "Holding Together" federation. Powers are distributed across Union, State, Concurrent, and Residuary lists. Post-1990 coalition politics cemented state autonomy. The 1992 Amendments mandated regular local elections, 33% reservation for women, and independent State Election Commissions.',
      goldenPoints: ['Computer software and cyber laws fall under Residuary Powers of the Union Parliament.', 'At least one-third (33%) of all seats in local bodies are reserved for women under the 1992 amendments.'],
      mindMapSteps: ['Federalism Definition → Coming Together (USA) vs Holding Together (India) → 3 Legislative Lists & Residuary → 1992 Decentralisation & 33% Women Reservation'],
      commonPitfalls: ['If there is a conflict between the Central government and a State on a Concurrent List subject, the Union law prevails.'],
    },
    flashcards: [
      { id: 'fc-10-c2-1', front: 'What percentage of seats are constitutionally reserved for women in local bodies under the 1992 decentralization amendments?', back: 'At least one-third (33%) of all seats.', category: 'fact' },
    ],
    questions: [
      {
        id: 'c10-c2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under which constitutional list does "Cyber Law and Computer Software" fall in India?',
        options: ['Union List', 'State List', 'Concurrent List', 'Residuary Subjects'],
        correctOptionIndex: 3,
        answer: 'Option (D) Residuary Subjects (vested in the Union Parliament)',
      },
    ],
  },
  {
    id: 'c10-civ-ch3',
    classLevel: 10,
    subject: 'civics',
    chapterNumber: 3,
    title: 'Political Parties',
    subtitle: 'Functions of Parties, Two-Party vs Multi-Party Systems, National Parties (BJP, INC, AAP), Challenges & Anti-Defection Law',
    overview: 'Political parties are the most visible institutions of a democracy. Explore the functions of parties, why modern democracies cannot exist without them, criteria for National vs State parties, internal challenges (dynastic succession, money power), and constitutional anti-defection reforms.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Why Do We Need Political Parties? Core Functions',
        bullets: [
          'A political party is a group of people who come together to contest elections and hold power in the government.',
          'Three components: The Leaders, The Active Members, and The Followers.',
          'Key Functions: (1) Contest elections; (2) Put forward different policies and programs; (3) Make laws on the legislative floor; (4) Form and run government; (5) Play the role of Opposition, questioning government failures; (6) Shape public opinion; (7) Provide citizens access to government machinery and welfare schemes.',
        ],
      },
      {
        title: 'Party Systems & Criteria for Recognition',
        bullets: [
          'One-Party System: Only one party permitted to control power (China’s Communist Party; not democratic).',
          'Two-Party System: Power alternates between two major parties (USA: Democrats and Republicans; UK: Conservatives and Labour).',
          'Multi-Party System: Several parties compete and have a reasonable chance of coming to power through alliances (India: NDA, UPA).',
          'National Party Criteria (Election Commission): Must secure at least 6% of total votes in Lok Sabha elections or Assembly elections in 4 states, AND win at least 4 seats in the Lok Sabha.',
          'State Party Criteria: Must secure at least 6% of total votes in State Legislative Assembly election AND win at least 2 seats.',
        ],
      },
      {
        title: 'Four Challenges and Legal Reforms',
        bullets: [
          'Challenges: (1) Lack of internal democracy (power concentrated in one or two leaders); (2) Dynastic succession (top posts controlled by single family); (3) Growing role of money and muscle power; (4) Lack of meaningful choices for voters (parties have similar economic policies).',
          'Reforms: Anti-Defection Law (52nd Amendment) disqualifies legislators who change parties after winning elections; Supreme Court mandated affidavits disclosing criminal records and property; Election Commission mandated organizational elections and income tax returns.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Democracies Cannot Function Without Political Parties',
        content: 'Imagine a democracy without political parties: every single candidate contesting elections would be independent. Consequently, no candidate could make any unified policy promise to the whole nation. The newly elected parliament would be fragmented, with representatives accountable only to their immediate local constituency. No single leader could take responsibility for how the country as a whole should be governed, making collective executive governance impossible.',
        keyTakeaway: 'Political parties aggregate diverse local demands into national policy programs.',
      },
    ],
    keyConcepts: [
      { term: 'Anti-Defection Law', explanation: 'A constitutional law (52nd Amendment) that disqualifies an elected MP or MLA from holding legislative office if they defect to another political party.' },
      { term: 'Affidavit', explanation: 'A signed formal written statement submitted to an election returning officer declaring a candidate’s criminal cases, educational qualifications, and assets.' },
    ],
    importantDates: [
      { date: '1985', event: 'Anti-Defection Act enacted (52nd Amendment)', significance: 'Curbed political party defection (Aaya Ram, Gaya Ram culture).' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Partisan', definition: 'A person who is strongly committed to a party, group, or faction, characterized by an inability to take a balanced view on an issue.', context: 'Political behavior.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Political parties contest elections, craft policies, and run governments. Democracies use one-party, two-party, or multi-party coalition models. The Election Commission recognizes National Parties (>6% votes in 4 states + 4 Lok Sabha seats). Challenges include dynastic succession, money power, and weak internal democracy, counteracted by the Anti-Defection Law and mandatory wealth affidavits.',
      goldenPoints: ['To be recognized as a National Party, a party must win at least 4 seats in the Lok Sabha in addition to 6% votes in 4 states.', 'The Anti-Defection Law was introduced via the 52nd Constitutional Amendment in 1985.'],
      mindMapSteps: ['Definition & 7 Key Functions → 3 Party Systems (One, Two, Multi-party) → National vs State Recognition Thresholds → 4 Challenges & Anti-Defection Reforms'],
      commonPitfalls: ['The Anti-Defection Law disqualifies legislators who vote against their party whip or switch parties, not those expelled by their party.'],
    },
    flashcards: [
      { id: 'fc-10-c3-1', front: 'What is the minimum number of Lok Sabha seats a party must win to be recognized as a National Party in India?', back: 'At least 4 seats in the Lok Sabha (plus 6% of votes in four states).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c10-c3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which constitutional amendment introduced the Anti-Defection Law in India in 1985?',
        options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '73rd Amendment'],
        correctOptionIndex: 2,
        answer: 'Option (C) 52nd Constitutional Amendment (1985)',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - ECONOMICS - CHAPTER 2
  // ==========================================
  {
    id: 'c10-eco-ch2',
    classLevel: 10,
    subject: 'economics',
    chapterNumber: 2,
    title: 'Sectors of the Indian Economy',
    subtitle: 'Primary, Secondary, Tertiary Sectors, Disguised Unemployment, Organised vs Unorganised, MGNREGA 2005',
    overview: 'Economic activities are categorized into Primary, Secondary, and Tertiary sectors. Explore how the Tertiary service sector became the largest contributor to Indian GDP, why agriculture still suffers from Disguised Unemployment, the vulnerability of the Unorganised sector, and the transformative impact of MGNREGA 2005.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Three Economic Sectors & Historical Shift',
        bullets: [
          'Primary Sector: Exploitation of natural resources (agriculture, fishing, dairy, mining, forestry).',
          'Secondary Sector: Transformation of natural products into manufactured goods via industrial processing (factories, brick kilns, textiles).',
          'Tertiary Sector (Services): Generates services that aid production (transport, storage, banking, telecom, IT, education, hospitals).',
          'Historical Shift: Initially Primary was dominant; industrialisation made Secondary dominant in Europe; in India, Tertiary sector has grown to become the largest contributor to GDP (>50%), but has failed to generate enough jobs.',
        ],
      },
      {
        title: 'Employment Share and Disguised Unemployment',
        bullets: [
          'Mismatch: Tertiary sector produces over 55% of GDP but employs barely 30% of workers. Primary sector employs over 44% of workforce but produces under 15% of GDP.',
          'Disguised Unemployment (Underemployment): A situation where more people are engaged in an activity than required (e.g., all 5 members of a peasant family working on a small farm plot that requires only 2). If 3 are removed, agricultural output does not drop at all; their marginal productivity is zero.',
        ],
      },
      {
        title: 'Organised vs Unorganised Sectors & MGNREGA',
        bullets: [
          'Organised Sector: Registered with government; complies with Factories Act, Minimum Wages Act; job security, fixed working hours, paid leave, provident fund, medical benefits.',
          'Unorganised Sector: Small scattered units outside government control; low wages, irregular employment, no job security, no paid leave or healthcare; vulnerable to exploitation.',
          'MGNREGA 2005 (Mahatma Gandhi National Rural Employment Guarantee Act): Guarantees 100 days of wage employment in a year to every rural household whose adult members volunteer to do unskilled manual work; if government fails within 15 days, it must pay an Unemployment Allowance ("Right to Work").',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Disguised Unemployment is Chronic in Indian Agriculture',
        content: 'Disguised unemployment occurs when individuals appear visibly employed, yet their contribution to aggregate output is zero. In rural India, rapid population growth combined with inadequate manufacturing and service job creation in towns means rural youth cannot find alternative employment. Consequently, all family members crowd onto small inherited landholdings, dividing tasks that could easily be handled by fewer hands. Because workers cannot move to productive industrial jobs, their economic output remains masked, lowering rural per capita income.',
        keyTakeaway: 'In disguised unemployment, workers are visibly occupied but have zero marginal productivity.',
      },
    ],
    keyConcepts: [
      { term: 'Disguised Unemployment', explanation: 'A form of underemployment where more workers are employed in a task than are necessary, such that removing surplus workers does not reduce total output.' },
      { term: 'MGNREGA 2005', explanation: 'A landmark social security law guaranteeing 100 days of statutory wage employment per year to rural households seeking unskilled manual work.' },
    ],
    importantDates: [
      { date: '2005', event: 'MGNREGA enacted by Parliament', significance: 'Operationalized the constitutional Right to Work in rural India.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Gross Domestic Product (GDP)', definition: 'The total monetary value of all final goods and services produced within the geographic borders of a country in a given financial year.', context: 'Macroeconomics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The economy divides into Primary, Secondary, and Tertiary sectors. In India, the Tertiary sector produces >55% of GDP, but agriculture employs >44% of workers, creating chronic Disguised Unemployment. The Organised sector offers job security, while the Unorganised sector lacks protections. MGNREGA 2005 provides a statutory guarantee of 100 days of paid unskilled manual work in rural areas.',
      goldenPoints: ['Under MGNREGA 2005, the government guarantees 100 days of wage employment to rural households.', 'In disguised unemployment, the marginal productivity of extra workers is zero.'],
      mindMapSteps: ['Primary, Secondary & Tertiary Definitions → GDP vs Employment Share Mismatch → Disguised Unemployment Explained → Organised vs Unorganised & MGNREGA 2005'],
      commonPitfalls: ['Under MGNREGA, if the government fails to provide employment within 15 days of application, it must pay an Unemployment Allowance.'],
    },
    flashcards: [
      { id: 'fc-10-e2-1', front: 'How many days of guaranteed wage employment are promised per year under MGNREGA 2005?', back: '100 days of wage employment.', category: 'fact' },
    ],
    questions: [
      {
        id: 'c10-e2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under MGNREGA 2005, within how many days must employment be provided to an applicant before an unemployment allowance becomes mandatory?',
        options: ['7 days', '15 days', '30 days', '60 days'],
        correctOptionIndex: 1,
        answer: 'Option (B) 15 days',
      },
    ],
  },
  {
    id: 'c10-eco-ch3',
    classLevel: 10,
    subject: 'economics',
    chapterNumber: 3,
    title: 'Money and Credit',
    subtitle: 'Barter System, Currency & Demand Deposits, Cheques, Formal vs Informal Credit, Self-Help Groups (SHGs)',
    overview: 'Money acts as an indispensable medium of exchange, eliminating the double coincidence of wants. Examine currency, bank demand deposits, collateral requirements, the dangers of debt traps in informal lending, and the microfinance revolution of Self-Help Groups (SHGs).',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Money as Medium of Exchange & Modern Forms',
        bullets: [
          'Barter system required "Double Coincidence of Wants" (what a person desires to sell is exactly what the other wishes to buy); money acts as an intermediate medium of exchange.',
          'Modern Currency: Paper notes and coins; unlike gold or silver, they have no intrinsic value of their own, but are authorized as legal tender by the Reserve Bank of India on behalf of the Central Government.',
          'Demand Deposits: Deposits in bank accounts that can be withdrawn on demand; banks pay interest; payments can be settled directly using Cheques without cash.',
        ],
      },
      {
        title: 'Loan Activities of Banks & Terms of Credit',
        bullets: [
          'Banks keep about 15% of deposits as cash to meet daily depositor withdrawals, and lend the remaining 85% to borrowers at higher interest rates.',
          'Terms of Credit: (1) Interest rate; (2) Collateral (an asset the borrower owns, such as land, house, vehicle, or fixed deposit, which the lender can seize if loan is defaulted); (3) Documentation required; (4) Mode of repayment.',
          'Debt Trap: When high interest rates in informal lending push a borrower into a vicious cycle where repayment requires selling productive land.',
        ],
      },
      {
        title: 'Formal vs Informal Credit & Self-Help Groups (SHGs)',
        bullets: [
          'Formal Sector: Commercial banks and cooperatives; supervised by RBI; low interest rates; require collateral.',
          'Informal Sector: Moneylenders, traders, relatives; no supervisory body; charge exorbitant interest rates (up to 60-120% per year); rich urban households get 85% formal loans, while 85% of poor rural households depend on informal loans.',
          'Self-Help Groups (SHGs): 15-20 rural women pool small savings (₹25-100/month); members take small emergency loans at low interest; group takes collective bank loan without collateral; builds women’s financial independence.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How Self-Help Groups Overcome the Collateral Hurdle for the Poor',
        content: 'One of the primary reasons poor rural villagers are shut out of commercial banks is the absence of collateral—they do not own registered land titles or formal property deeds to pledge as security. Self-Help Groups (SHGs) solve this institutional failure through group solidarity. In an SHG of 15 to 20 rural women, the group assumes collective responsibility for loan repayment. If any single member defaults, the entire group follows up and covers the shortfall. Because of this social collateral and reliable track record, commercial banks lend directly to SHGs without requiring physical asset collateral.',
        keyTakeaway: 'SHGs substitute social peer accountability for physical asset collateral.',
      },
    ],
    keyConcepts: [
      { term: 'Collateral', explanation: 'An asset that the borrower owns (such as land, house, vehicle, livestock) and pledges to a lender as a guarantee until the loan is repaid.' },
      { term: 'Self-Help Group (SHG)', explanation: 'A community-based association of 15-20 poor rural members, primarily women, who pool their small savings to provide low-interest loans and access bank credit.' },
    ],
    importantDates: [
      { date: '1976', event: 'Grameen Bank of Bangladesh founded', significance: 'Prof. Muhammad Yunus pioneers microcredit for the poor, winning Nobel Peace Prize in 2006.' },
    ],
    importantPeople: [
      { name: 'Muhammad Yunus', role: 'Nobel Peace Laureate', contribution: 'Pioneered Grameen Bank microcredit, inspiring the global SHG movement.' },
    ],
    definitions: [
      { term: 'Cheque', definition: 'A negotiable paper instructing a bank to pay a specific sum from the account holder’s balance to the person in whose name the paper is issued.', context: 'Banking.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Money eliminates the double coincidence of wants. Modern money includes RBI-backed fiat currency and demand deposits. Terms of credit require collateral, interest, and documentation. While the rich access low-interest formal loans supervised by the RBI, the poor face exploitative informal moneylenders. Self-Help Groups (SHGs) provide microcredit without collateral, fostering women’s empowerment.',
      goldenPoints: ['The Reserve Bank of India supervises the functioning of formal sources of loans in India.', 'In an SHG, 15 to 20 members pool savings to secure bank credit without individual collateral.'],
      mindMapSteps: ['Barter & Double Coincidence of Wants → Modern Currency & Cheques → Terms of Credit & Collateral → Formal (RBI) vs Informal Lending → Self-Help Groups (SHGs)'],
      commonPitfalls: ['The informal credit sector (moneylenders) has no regulatory body to oversee its lending practices or cap interest rates.'],
    },
    flashcards: [
      { id: 'fc-10-e3-1', front: 'Which regulatory authority supervises the functioning of formal banks in India?', back: 'The Reserve Bank of India (RBI).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c10-e3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is an asset that a borrower pledges to a lender as a security guarantee until the loan is repaid called?',
        options: ['Demand Deposit', 'Collateral', 'Investment', 'Credit Score'],
        correctOptionIndex: 1,
        answer: 'Option (B) Collateral',
      },
    ],
  },
];
