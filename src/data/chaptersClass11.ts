import { FULL_NOTES_CLASS_11 } from './fullNotesClass11';
import { Chapter } from '../types/sst';

const RAW_CHAPTERS_CLASS_11: Chapter[] = [
  // ==========================================
  // HISTORY: Themes in World History
  // ==========================================
  {
    id: 'c11-hist-ch1',
    classLevel: 11,
    subject: 'history',
    chapterNumber: 1,
    title: 'Writing and City Life',
    subtitle: 'Mesopotamia (Tigris & Euphrates), Cuneiform Script, Urbanisation of Uruk and Ur, Epic of Gilgamesh',
    overview: 'Urban civilization began in Mesopotamia (modern Iraq) between the fertile Tigris and Euphrates rivers. Explore the architectural marvel of temples (Ziggurats), the decipherment of wedge-shaped Cuneiform tablets, and the urban layouts of Uruk, Ur, and Babylon.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Mesopotamian Geography and Agriculture',
        bullets: [
          'Mesopotamia ("land between the rivers", Greek): Modern Republic of Iraq situated between Tigris and Euphrates.',
          'Southern region was desert, but annual river floods deposited mineral-rich silt; Euphrates split into small distributaries functioning as natural irrigation channels for wheat, barley, and peas.',
          'Division: Southern part called Sumer and Akkad (later Babylonia); Northern high plains called Assyria.',
        ],
      },
      {
        title: 'The Development of Writing (Cuneiform)',
        bullets: [
          'The first Mesopotamian tablets were written around 3200 BCE, containing picture signs and numbers.',
          'Cuneiform script: Derived from Latin "cuneus" (wedge) and "forma" (shape). Scribes pressed the wedge-shaped end of a reed stylus into wet clay tablets, which were then baked hard in the sun.',
          'Writing was used for keeping accounts, transferring land property, legal contracts, codifying laws (King Hammurabi’s Code), and preserving literature.',
        ],
      },
      {
        title: 'Urban Life: Ur, Uruk, and the Epic of Gilgamesh',
        bullets: [
          'Temples (Ziggurats) were centers of urban economic life, dedicated to Inanna (Goddess of Love and War) and Ur (Moon God).',
          'Ur town planning: Narrow, winding streets without systematic drainage; wheeled carts could not enter; sweepings thrown into street, raising street levels over centuries.',
          'Epic of Gilgamesh: World’s first epic hero; king of Uruk who journeyed to seek immortality after his friend Enkidu died, taking pride in Uruk’s baked-brick city walls.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Process and Craft of Mesopotamian Clay Tablets',
        content: 'Writing in ancient Mesopotamia was a specialized, laborious craft. A scribe would knead moist clay, flatten it into a palm-sized tablet, and carefully smoothen its surfaces. Before the clay dried and hardened, the scribe rapidly pressed cuneiform signs into the moist surface using the sharp-edged corner of a reed stylus. Once dry, no new wedge sign could be added or modified. Each transaction, deed, or royal dispatch required an entirely fresh tablet, producing hundreds of thousands of preserved archaeological records.',
        keyTakeaway: 'Wet-clay Cuneiform tablets formed permanent, tamper-proof administrative and historical records.',
      },
    ],
    keyConcepts: [
      { term: 'Cuneiform', explanation: 'A system of writing characterized by wedge-shaped impressions made on wet clay tablets, invented in ancient Sumer.' },
      { term: 'Ziggurat', explanation: 'A massive stepped temple tower constructed in ancient Mesopotamian cities as an earthly residence for patron deities.' },
    ],
    importantDates: [
      { date: 'c. 3200 BCE', event: 'First written clay tablets appear in Mesopotamia', significance: 'Beginning of recorded human writing.' },
      { date: 'c. 2000 BCE', event: 'Epic of Gilgamesh composed on twelve tablets', significance: 'Oldest known literary masterpiece.' },
    ],
    importantPeople: [
      { name: 'Gilgamesh', role: 'Legendary King of Uruk', contribution: 'Protagonist of the twelve-tablet Mesopotamian epic on mortality and civilization.' },
      { name: 'Hammurabi', role: 'King of Babylon', contribution: 'Codified 282 legal laws inscribed on a basalt stele.' },
    ],
    definitions: [
      { term: 'Stela', definition: 'An upright stone slab bearing an inscribed surface or sculptured relief, serving as a monument or legal code.', context: 'Archaeology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Mesopotamia (Tigris and Euphrates) birthed urbanism, writing (Cuneiform wedge script on clay), and monumental temple-cities (Uruk, Ur). Temples (Ziggurats) controlled trade and storage. King Hammurabi codified laws, while the Epic of Gilgamesh immortalized human mortality and city pride.',
      goldenPoints: ['Cuneiform is derived from Latin "cuneus", meaning wedge.', 'Mesopotamian writing was inscribed with a reed stylus on damp clay tablets.'],
      mindMapSteps: ['Tigris & Euphrates Floods → Temple Urbanisation (Uruk & Ur) → Cuneiform Reed-Clay Script → Hammurabi & Gilgamesh Epic'],
      commonPitfalls: ['Mesopotamian cities like Ur did not have straight, grid-planned streets; roads were narrow, crooked, and unpaved.'],
    },
    flashcards: [
      { id: 'fc-11-h1-1', front: 'What does the word "Cuneiform" literally mean?', back: 'Wedge-shaped (from Latin "cuneus" = wedge, and "forma" = shape).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Between which two major river systems did ancient Mesopotamian civilization flourish?',
        options: ['Nile and Congo', 'Tigris and Euphrates', 'Indus and Saraswati', 'Danube and Rhine'],
        correctOptionIndex: 1,
        answer: 'Option (B) Tigris and Euphrates (modern Iraq)',
      },
    ],
  },
  {
    id: 'c11-hist-ch2',
    classLevel: 11,
    subject: 'history',
    chapterNumber: 2,
    title: 'An Empire Across Three Continents',
    subtitle: 'The Roman Empire, Senate & Principate, Pax Romana, Constantine & Christianisation, Slavery and Late Antiquity',
    overview: 'The Roman Empire encircled the Mediterranean Sea ("Mare Nostrum"), uniting parts of Europe, North Africa, and West Asia. Examine Augustus’s Principate, urban administration, the brutal institution of slavery, and Constantine’s Christian transformation.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Geographical Spread and Three Main Players',
        bullets: [
          'Boundaries: Rhine and Danube in the north, Sahara Desert in the south, Atlantic Ocean in the west, and Euphrates River in the east.',
          'The Mediterranean Sea was the heart of the Roman Empire, often called "our sea" (Mare Nostrum).',
          'Three main players in imperial governance: The Emperor, the Senate (body of aristocracy/patricians), and the Army (paid professional force with 25-year minimum service).',
        ],
      },
      {
        title: 'The Principate, Pax Romana, and Slavery',
        bullets: [
          'Augustus established the Principate in 27 BCE, ruling as "Princeps" (first citizen) to preserve the illusion of the Republic.',
          'Pax Romana (Roman Peace): Two centuries of economic prosperity, trade in amphorae (wine/olive oil), and monumental architecture (Colosseum, aqueducts).',
          'Slavery: Slaves were treated as economic property ("instrumentum vocale" - talking tools); used in silver mines, olive presses, and gladiatorial arenas.',
        ],
      },
      {
        title: 'Late Antiquity and Constantine',
        bullets: [
          'Emperor Diocletian (284-305 CE): Reorganized empire into smaller administrative units and fortified borders.',
          'Emperor Constantine: Made Christianity the official state religion; created a second capital at Byzantium (renamed Constantinople / modern Istanbul); introduced the stable gold coin "Solidus" (4.5 grams of pure gold).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Three-Way Balance of Power in Rome',
        content: 'Political stability in imperial Rome depended on a delicate equilibrium among three institutions: (1) The Emperor, who held supreme executive authority; (2) The Senate, which represented the wealthy landowning elite whose cooperation was required to avoid civil war; and (3) The standing professional Army. Unlike modern conscript armies, Roman soldiers served for 25 paid years. If emperors failed to pay bonuses, the army frequently mutinied and deposed rulers, making military loyalty the ultimate determinant of imperial survival.',
        keyTakeaway: 'The Roman Empire survived through the tripartite balance of Emperor, Senate, and professional Army.',
      },
    ],
    keyConcepts: [
      { term: 'Principate', explanation: 'The political regime established by Augustus in 27 BCE that maintained Republican forms while consolidating autocratic power in the Princeps.' },
      { term: 'Solidus', explanation: 'A pure gold coin weighing 4.5 grams introduced by Emperor Constantine that remained the benchmark currency for centuries.' },
    ],
    importantDates: [
      { date: '27 BCE', event: 'Augustus establishes the Principate', significance: 'Transition from Roman Republic to Roman Empire.' },
      { date: '330 CE', event: 'Constantine dedicates Constantinople', significance: 'Shift of imperial center to the Eastern Roman (Byzantine) capital.' },
    ],
    importantPeople: [
      { name: 'Augustus (Octavian)', role: 'First Roman Emperor', contribution: 'Founded the Principate and initiated Pax Romana.' },
      { name: 'Constantine the Great', role: 'Roman Emperor', contribution: 'Legalized Christianity and founded Constantinople.' },
    ],
    definitions: [
      { term: 'Amphora', definition: 'A tall ancient Mediterranean ceramic container with two handles used to transport wine, olive oil, and garum.', context: 'Roman commerce.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Roman Empire spanned Europe, West Asia, and North Africa across the Mediterranean ("Mare Nostrum"). Augustus initiated the Principate (27 BCE) and Pax Romana. Power rested on the Emperor, Senate, and professional standing army. Constantine later Christianized the empire, minted the gold Solidus, and founded Constantinople.',
      goldenPoints: ['Augustus ruled as "Princeps" (leading citizen) rather than king to placate the Roman Senate.', 'The Solidus was a gold coin weighing 4.5 grams introduced by Constantine.'],
      mindMapSteps: ['Mediterranean Empire (Mare Nostrum) → Emperor, Senate, Standing Army → Slavery & Economic Trade → Constantine, Solidus & Constantinople'],
      commonPitfalls: ['The Roman army was a paid professional standing army with a 25-year service term, not a citizen militia.'],
    },
    flashcards: [
      { id: 'fc-11-h2-1', front: 'What was the weight of the gold "Solidus" coin introduced by Constantine?', back: '4.5 grams of pure gold.', category: 'fact' },
    ],
    questions: [
      {
        id: 'c11-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which Roman emperor made Christianity the official state religion and established the capital Constantinople?',
        options: ['Julius Caesar', 'Augustus', 'Trajan', 'Constantine'],
        correctOptionIndex: 3,
        answer: 'Option (D) Constantine',
      },
    ],
  },
  {
    id: 'c11-hist-ch3',
    classLevel: 11,
    subject: 'history',
    chapterNumber: 3,
    title: 'Paths to Modernisation',
    subtitle: 'East Asia: Japan (Meiji Restoration, Zaibatsu, Militarism) vs China (Opium Wars, Sun Yat-sen, Mao Zedong, Cultural Revolution)',
    overview: 'In the 19th and 20th centuries, Japan and China confronted aggressive Western imperialist intrusion through contrasting paths: Japan modernized rapidly through state-led industrial capitalism (Meiji Restoration), while China underwent a radical communist revolution under Mao Zedong.',
    estimatedReadTime: '18 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Japan: The Meiji Restoration and Industrialization',
        bullets: [
          'In 1853, Commodore Matthew Perry arrived in Tokyo Bay with US gunboats demanding trade concessions, ending 250 years of Tokugawa isolation (sakoku).',
          'Meiji Restoration (1868): Emperor restored to power; feudal domains abolished; modern banking, universal schooling, and conscript military instituted.',
          'Slogan: "Fukoku Kyohei" (Rich Country, Strong Army); created zaibatsu (giant family-owned financial conglomerates like Mitsubishi, Sumitomo).',
          'Defeated China (1894-95) and Russia (1904-05); industrialized rapidly, but aggressive militarism culminated in World War II atomic devastation.',
        ],
      },
      {
        title: 'China: From Dynastic Collapse to Revolution',
        bullets: [
          'Opium Wars (1839-42, 1856-60): Britain defeated Qing dynasty, forcing Treaty of Nanking and cession of Hong Kong.',
          'Dr. Sun Yat-sen: Father of modern China; proposed Three Principles ("San Min Chu-i": Nationalism, Democracy, Socialism); established Republic in 1911.',
          'Chiang Kai-shek (Kuomintang / KMT): Militarized state; retreated to Taiwan in 1949 after civil war.',
          'Mao Zedong & Chinese Communist Party (CCP): Mobilized peasantry; survived 6,000-mile Long March (1934-35); founded People’s Republic of China on 1 October 1949; launched Great Leap Forward (1958) and Cultural Revolution (1966-76).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Contrasting Modernization Models: Japan vs China',
        content: 'Japan avoided colonial subjugation by undertaking defensive modernization from above: retaining the Emperor as an ideological unifying symbol, adopting Western industrial technology, building trans-national railways, and exporting silk and electronics while building a lethal military. China, burdened by imperial decay and Western gunboat treaties, could not modernize within the old framework. Instead, China required two successive revolutions—the 1911 nationalist overthrow of the Qing and the 1949 peasant-based Communist revolution—to achieve sovereign national unity.',
        keyTakeaway: 'Japan modernized through imperial capitalist statecraft; China through revolutionary peasant mobilisation.',
      },
    ],
    keyConcepts: [
      { term: 'Meiji Restoration', explanation: 'The 1868 political transformation in Japan that dismantled the Tokugawa Shogunate and restored imperial rule to pursue rapid Westernization.' },
      { term: 'Long March', explanation: 'A grueling 6,000-mile tactical retreat undertaken by the Chinese Red Army under Mao Zedong (1934-1935) to escape encirclement by Kuomintang forces.' },
    ],
    importantDates: [
      { date: '1868', event: 'Meiji Restoration in Japan', significance: 'Beginning of rapid industrial modernization and military reform.' },
      { date: '1911', event: 'Chinese Revolution', significance: 'Dr. Sun Yat-sen overthrows the Qing dynasty and establishes a Republic.' },
      { date: '1 October 1949', event: 'Proclamation of People’s Republic of China', significance: 'Mao Zedong establishes Communist rule in Beijing.' },
    ],
    importantPeople: [
      { name: 'Dr. Sun Yat-sen', role: 'Father of Modern China', contribution: 'Articulated the Three Principles: Nationalism, Democracy, and Socialism.' },
      { name: 'Mao Zedong', role: 'Chairman, Chinese Communist Party', contribution: 'Led the Long March and established the People’s Republic of China.' },
    ],
    definitions: [
      { term: 'Zaibatsu', definition: 'Large Japanese business conglomerates controlled by powerful family dynasties that dominated the economy before World War II.', context: 'Japanese capitalism.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Facing Western imperialism, Japan modernized via the 1868 Meiji Restoration under the slogan "Rich Country, Strong Army" (Fukoku Kyohei), building zaibatsu conglomerates. China faced Opium Wars, imperial collapse (1911 Sun Yat-sen Republic), and a peasant revolution under Mao Zedong, culminating in the 1949 Communist Republic.',
      goldenPoints: ['Japan’s Meiji motto was "Fukoku Kyohei" (Rich Country, Strong Army).', 'Mao Zedong founded the People’s Republic of China on 1 October 1949.'],
      mindMapSteps: ['Commodore Perry & Meiji Restoration (1868) → Japanese Industrial Zaibatsu → Chinese Opium Wars & 1911 Republic → Mao’s Long March & 1949 Revolution'],
      commonPitfalls: ['Sun Yat-sen articulated the Three Principles, but Chiang Kai-shek succeeded him as leader of the Kuomintang.'],
    },
    flashcards: [
      { id: 'fc-11-h3-1', front: 'What were Dr. Sun Yat-sen’s Three Principles (San Min Chu-i)?', back: 'Nationalism (Minzu), Democracy (Minquan), and People’s Livelihood/Socialism (Minsheng).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year was the Meiji Restoration established in Japan, restoring the Emperor and modernizing the state?',
        options: ['1853', '1868', '1911', '1945'],
        correctOptionIndex: 1,
        answer: 'Option (B) 1868',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY: Physical Geography & India
  // ==========================================
  {
    id: 'c11-geo-ch1',
    classLevel: 11,
    subject: 'geography',
    chapterNumber: 1,
    title: 'The Origin and Evolution of the Earth',
    subtitle: 'Big Bang Theory, Nebular Hypothesis, Continental Drift (Wegener), Sea Floor Spreading, and Plate Tectonics',
    overview: 'How did the Universe and our planet form? Unpack Edwin Hubble’s expanding universe, the Big Bang theory, Alfred Wegener’s Continental Drift (Pangaea/Panthalassa), and the modern theory of Plate Tectonics driving earthquakes and mountain-building.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Origin of the Universe and Solar System',
        bullets: [
          'Nebular Hypothesis (Immanuel Kant & Laplace): Planets formed out of a cloud of material associated with a youthful, slowly rotating sun.',
          'Big Bang Theory (Expanding Universe Hypothesis, Edwin Hubble 1920): 13.7 billion years ago, a tiny singularity exploded; universe continues expanding.',
          'Formation of planets occurred roughly 4.6 billion years ago from planetesimals coalescing into larger bodies.',
        ],
      },
      {
        title: 'Continental Drift Theory (Alfred Wegener, 1912)',
        bullets: [
          'Postulated that 200 million years ago, all continents formed a single supercontinent called Pangaea ("all earth"), surrounded by a mega-ocean Panthalassa.',
          'Pangaea split into Laurasia (north) and Gondwanaland (south); Tethys sea separated them.',
          'Evidence: Jigsaw fit of Atlantic coastlines (South America and Africa), identical Permian fossil Glossopteris across southern continents, Mesosaurus fossils, and tillite glacial deposits.',
        ],
      },
      {
        title: 'Plate Tectonics Theory (McKenzie, Parker, Morgan, 1967)',
        bullets: [
          'Earth’s lithosphere is divided into 7 major and several minor rigid plates floating over asthenosphere.',
          'Plate Boundaries: (1) Divergent (constructive, Mid-Atlantic Ridge where new oceanic crust is created); (2) Convergent (destructive, ocean-continent or continent-continent like Indo-Eurasian collision raising Himalayas); (3) Transform (conservative, plates slide horizontally, e.g. San Andreas Fault).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Plate Tectonic Mechanism of the Himalayas',
        content: 'Roughly 225 million years ago, India was a large island situated off the Australian coast in the southern hemisphere. As Pangaea fragmented, the Indian plate began its northward drift toward the Eurasian plate at speeds up to 15 cm/year. The intervening Tethys ocean crust subducted beneath Eurasia. Approximately 40-50 million years ago, continental collision occurred. Because both continental crusts were buoyant and low in density, neither could subduct into the mantle; instead, sediments of the Tethys sea buckled and folded upward, forming the young fold mountain range of the Himalayas, which continues to rise today.',
        keyTakeaway: 'The Himalayas were formed by continent-continent collision between the Indian and Eurasian plates.',
      },
    ],
    keyConcepts: [
      { term: 'Pangaea', explanation: 'The ancient supercontinent that existed during the late Paleozoic and early Mesozoic eras before breaking into modern continents.' },
      { term: 'Subduction Zone', explanation: 'A convergent boundary where one tectonic plate sinks beneath another into the Earth’s mantle, often forming deep ocean trenches.' },
    ],
    importantDates: [
      { date: '13.7 billion years ago', event: 'The Big Bang', significance: 'Origin of matter, energy, space, and time.' },
      { date: '1912', event: 'Alfred Wegener proposes Continental Drift', significance: 'First comprehensive theory of mobile continents.' },
    ],
    importantPeople: [
      { name: 'Alfred Wegener', role: 'German Meteorologist', contribution: 'Formulated the Continental Drift Theory with paleoclimatic evidence.' },
      { name: 'Edwin Hubble', role: 'American Astronomer', contribution: 'Discovered that the universe is expanding via galactic red-shift.' },
    ],
    definitions: [
      { term: 'Tillite', definition: 'Sedimentary rock formed by the direct lithification of glacial drift deposits, proving historic ice ages.', context: 'Paleogeology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Universe began 13.7 billion years ago with the Big Bang; planets formed 4.6 billion years ago. Wegener proposed that Pangaea fragmented via Continental Drift (evidenced by jigsaw fits, Glossopteris fossils, tillite). Plate Tectonics explains Divergent (ridges), Convergent (Himalayas), and Transform boundaries.',
      goldenPoints: ['The Big Bang occurred approximately 13.7 billion years ago.', 'Glossopteris and Mesosaurus fossils provided empirical evidence for Wegener’s Continental Drift.'],
      mindMapSteps: ['Big Bang (13.7 Ga) & Solar System (4.6 Ga) → Wegener’s Pangaea & Panthalassa → Evidences of Drift → 3 Plate Boundaries (Divergent, Convergent, Transform)'],
      commonPitfalls: ['Wegener thought continents plowed through oceanic crust, whereas Plate Tectonics proves that lithospheric plates carry both continents and oceans.'],
    },
    flashcards: [
      { id: 'fc-11-g1-1', front: 'What was the single mega-ocean surrounding Pangaea called?', back: 'Panthalassa.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who proposed the Continental Drift Theory in 1912?',
        options: ['Harry Hess', 'Alfred Wegener', 'Arthur Holmes', 'Edwin Hubble'],
        correctOptionIndex: 1,
        answer: 'Option (B) Alfred Wegener',
      },
    ],
  },
  {
    id: 'c11-geo-ch2',
    classLevel: 11,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Atmospheric Circulation and Weather Systems',
    subtitle: 'Coriolis Force, Pressure Belts, Hadley & Ferrel Cells, Jet Streams, Tropical Cyclones vs Temperate Cyclones',
    overview: 'Differential solar heating and the Earth’s rotation drive global atmospheric circulation. Understand the Coriolis deflection, the three-cell global model (Hadley, Ferrel, Polar), high-altitude Jet Streams, and the destructive genesis of Tropical Cyclones over warm oceans.',
    estimatedReadTime: '16 min read',
    shortNotes: [
      {
        title: 'Forces Affecting Atmospheric Motion',
        bullets: [
          'Pressure Gradient Force: Pressure differences generate wind; drives air from high pressure to low pressure perpendicular to isobars.',
          'Coriolis Force: Caused by Earth’s rotation; deflects winds to the right in the Northern Hemisphere and to the left in the Southern Hemisphere (Ferrel’s Law); zero at the equator, maximum at the poles.',
          'Geostrophic Wind: When pressure gradient force and Coriolis force balance each other in upper atmosphere, winds blow parallel to isobars.',
        ],
      },
      {
        title: 'Global Atmospheric Cells and Jet Streams',
        bullets: [
          'Hadley Cell: Warm air rises at Equator (ITCZ), flows poleward, sinks at Subtropical High (30° N/S).',
          'Ferrel Cell: Middle-latitude circulation between 30° and 60°.',
          'Polar Cell: Sinks at cold poles, flows toward sub-polar lows.',
          'Jet Streams: Narrow bands of high-speed winds (150-400 km/h) meandering in upper troposphere (Subtropical Westerly Jet and Polar Jet).',
        ],
      },
      {
        title: 'Tropical Cyclones',
        bullets: [
          'Violent storms originating over warm tropical oceans (sea surface temperature > 27°C).',
          'Conditions for formation: Presence of Coriolis force to create rotation, small variation in vertical wind speed, pre-existing low-pressure area.',
          'Eye of Cyclone: Calm central area with subsiding warm air and clear skies; surrounded by the terrifying Eye Wall of cumulonimbus clouds and torrential rain.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Tropical Cyclones Do Not Form at the Equator',
        content: 'Even though equatorial oceans possess the warmest surface water temperatures on the planet (well above the 27°C threshold), tropical cyclones never form between 0° and 5° latitude on either side of the equator. This is because the Coriolis force is proportional to the sine of the latitude. At the equator (latitude 0°), the Coriolis parameter is exactly zero. Without Coriolis deflection, inflowing air rushes straight into the low-pressure depression and fills it immediately, preventing the storm from developing the necessary circular cyclonic spin.',
        keyTakeaway: 'Zero Coriolis force at the equator prevents the rotational vortex required for tropical cyclones.',
      },
    ],
    keyConcepts: [
      { term: 'Coriolis Force', explanation: 'An apparent inertial force resulting from the Earth’s rotation that deflects moving air masses to the right in the Northern Hemisphere and left in the Southern.' },
      { term: 'Eye of the Cyclone', explanation: 'A central region of calm winds, low barometric pressure, and clear skies located at the center of a mature tropical cyclone.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Isobar', definition: 'An imaginary line drawn on a weather map connecting points having equal atmospheric barometric pressure.', context: 'Meteorology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Atmospheric circulation is governed by Pressure Gradient, Frictional, and Coriolis forces (Ferrel’s law: right deflection in North, left in South). Tri-cellular circulation consists of Hadley, Ferrel, and Polar cells. Tropical cyclones require sea surface temperatures >27°C and Coriolis force, featuring a calm central Eye.',
      goldenPoints: ['Coriolis force is zero at the Equator and maximum at the geographic poles.', 'Tropical cyclones require sea surface temperatures of at least 27°C.'],
      mindMapSteps: ['Pressure Gradient vs Coriolis Force → Hadley, Ferrel & Polar Cells → Jet Streams in Upper Troposphere → Tropical Cyclone Eye & Eye Wall'],
      commonPitfalls: ['Cyclones rotate counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere.'],
    },
    flashcards: [
      { id: 'fc-11-g2-1', front: 'Why can tropical cyclones never form at the Equator?', back: 'Because the Coriolis force is zero at the Equator, preventing the development of a rotational vortex.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the minimum sea surface temperature required for the genesis and development of a tropical cyclone?',
        options: ['15°C', '20°C', '27°C', '35°C'],
        correctOptionIndex: 2,
        answer: 'Option (C) 27°C',
      },
    ],
  },

  // ==========================================
  // POLITICAL SCIENCE: Indian Constitution at Work
  // ==========================================
  {
    id: 'c11-pol-ch1',
    classLevel: 11,
    subject: 'civics',
    chapterNumber: 1,
    title: 'Constitution: Why and How?',
    subtitle: 'Functions of a Constitution, Constituent Assembly, Objective Resolution, and Sources of Indian Constitution',
    overview: 'A constitution enables coordination among diverse citizens, specifies who holds decision-making authority, and places limits on state power. Examine how the Constituent Assembly drafted India’s foundational charter, guided by Nehru’s Objective Resolution and global borrowings.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Functions of a Constitution',
        bullets: [
          '1. Provides basic rules that allow minimal coordination and trust among members of a diverse society.',
          '2. Specifies who has the power to make decisions in society and how government will be constituted.',
          '3. Sets limits on what a government can impose on its citizens (protects fundamental liberties).',
          '4. Enables government to fulfill aspirations of a society and create conditions for a just society (Directive Principles).',
          '5. Expresses the fundamental identity of a people (political and moral identity).',
        ],
      },
      {
        title: 'Making of the Constituent Assembly',
        bullets: [
          'Elected indirectly by Provincial Legislative Assemblies under the Cabinet Mission Plan (1946).',
          'First meeting on 9 December 1946; Dr. Sachchidananda Sinha was temporary President; Dr. Rajendra Prasad elected permanent President; Dr. B.R. Ambedkar chaired Drafting Committee.',
          '13 December 1946: Jawaharlal Nehru introduced historic "Objectives Resolution" defining the aspirations and framework of the Republic.',
          'Took 2 years, 11 months, and 18 days to complete; adopted on 26 November 1949; came into effect on 26 January 1950.',
        ],
      },
      {
        title: 'Major Borrowings from Global Constitutions',
        bullets: [
          'British: First-Past-The-Post electoral system, Parliamentary form, Rule of Law, Speaker.',
          'Irish: Directive Principles of State Policy (DPSP).',
          'French: Principles of Liberty, Equality, and Fraternity.',
          'United States: Fundamental Rights, Judicial Review, Independence of Judiciary.',
          'Canadian: Quasi-federal structure with a strong Centre, residual powers.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Principle of Deliberation in the Constituent Assembly',
        content: 'The legitimacy of the Indian Constitution stems from its method of creation: deep, democratic deliberation. The Constituent Assembly debated every single clause with reasoned argument. Members did not vote merely along narrow personal or sectional interests; instead, they justified their positions using national interest and universal human values. Only one single provision was passed without any debate or disagreement: the introduction of Universal Adult Franchise, giving every adult Indian the right to vote regardless of caste, sex, wealth, or educational status.',
        keyTakeaway: 'Universal Adult Franchise was the only constitutional provision passed without dissent.',
      },
    ],
    keyConcepts: [
      { term: 'Objectives Resolution', explanation: 'The historic resolution moved by Jawaharlal Nehru in 1946 that outlined the philosophical foundations and goals of the Indian Constitution.' },
      { term: 'Universal Adult Franchise', explanation: 'The democratic principle granting the right to vote to all adult citizens without distinction of property, literacy, or background.' },
    ],
    importantDates: [
      { date: '9 Dec 1946', event: 'First meeting of Constituent Assembly', significance: 'Commencement of constitutional drafting.' },
      { date: '26 Nov 1949', event: 'Constitution adopted', significance: 'Celebrated as Constitution Day (Samvidhan Divas).' },
      { date: '26 Jan 1950', event: 'Constitution comes into force', significance: 'Celebrated as Republic Day of India.' },
    ],
    importantPeople: [
      { name: 'Dr. B.R. Ambedkar', role: 'Chairman, Drafting Committee', contribution: 'Crafted constitutional safeguards for equality and liberty.' },
      { name: 'Dr. Rajendra Prasad', role: 'President, Constituent Assembly', contribution: 'Presided over debates and signed the final constitutional document.' },
      { name: 'Jawaharlal Nehru', role: 'First Prime Minister', contribution: 'Moved the historic Objectives Resolution in 1946.' },
    ],
    definitions: [
      { term: 'Quasi-Federal', definition: 'A federal system having strong unitary characteristics, concentrating dominant financial and administrative powers in the Central government.', context: 'Constitutional law.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'A constitution establishes social coordination, limits state power, and fulfills collective aspirations. The Constituent Assembly (1946-1949) drafted the charter under Dr. Ambedkar and Dr. Rajendra Prasad, inspired by Nehru’s Objectives Resolution. It creatively borrowed ideas: Parliamentary rule (UK), Fundamental Rights (USA), DPSP (Ireland), and Federalism (Canada).',
      goldenPoints: ['Universal Adult Franchise was the only provision adopted by the Constituent Assembly without debate.', 'Constitution Day is celebrated on 26 November every year.'],
      mindMapSteps: ['5 Core Functions → Constituent Assembly & 1946 Objectives Resolution → 2 Years 11 Months Deliberation → International Constitutional Borrowings'],
      commonPitfalls: ['The Constitution was adopted on 26 November 1949, but came into full effect on 26 January 1950.'],
    },
    flashcards: [
      { id: 'fc-11-p1-1', front: 'Which sole provision was passed in the Constituent Assembly without any debate?', back: 'The introduction of Universal Adult Franchise.', category: 'fact' },
    ],
    questions: [
      {
        id: 'c11-p1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'From which country’s constitution was the concept of Directive Principles of State Policy (DPSP) borrowed?',
        options: ['United States', 'Ireland', 'France', 'Canada'],
        correctOptionIndex: 1,
        answer: 'Option (B) Ireland',
      },
    ],
  },
  {
    id: 'c11-pol-ch2',
    classLevel: 11,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Rights in the Indian Constitution',
    subtitle: 'Fundamental Rights (Part III), Writs (Habeas Corpus, Mandamus), Directive Principles (DPSP), and Kesavananda Bharati Case',
    overview: 'Fundamental Rights in Part III of the Constitution protect individual liberties against legislative or executive overreach. Discover the six broad rights, the five constitutional writs enforceable under Article 32, and the dynamic tension between Rights and Directive Principles.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Six Fundamental Rights (Part III)',
        bullets: [
          '1. Right to Equality (Articles 14-18): Equality before law, prohibition of discrimination, equality of opportunity, abolition of untouchability and titles.',
          '2. Right to Freedom (Articles 19-22): 6 freedoms under Art 19 (speech, assembly, association, movement, residence, profession); protection against arbitrary arrest and detention.',
          '3. Right against Exploitation (Articles 23-24): Prohibition of human trafficking, forced labor (begar), and child labor in hazardous factories.',
          '4. Right to Freedom of Religion (Articles 25-28): Freedom of conscience and profession of faith.',
          '5. Cultural and Educational Rights (Articles 29-30): Minorities’ right to conserve culture and establish educational institutions.',
          '6. Right to Constitutional Remedies (Article 32): Described by Dr. Ambedkar as the "Heart and Soul of the Constitution".',
        ],
      },
      {
        title: 'Five Types of Writs (Article 32 & 226)',
        bullets: [
          'Habeas Corpus ("to have the body"): Court orders that an arrested person be produced before it; sets them free if arrest is unlawful.',
          'Mandamus ("we command"): Order issued to a public official or body to perform a legal public duty they failed to perform.',
          'Prohibition: Higher court prevents lower court from exceeding its jurisdiction.',
          'Quo-Warranto ("by what authority"): Inquires into legality of a person holding a public office.',
          'Certiorari: Higher court orders lower court to transfer a pending matter to it.',
        ],
      },
      {
        title: 'Directive Principles (DPSP) and Kesavananda Bharati Case (1973)',
        bullets: [
          'DPSP (Part IV): Moral guidelines for establishing a welfare socialist state; non-justiciable (cannot be enforced by courts).',
          'Fundamental Rights are justiciable; in case of conflict, Kesavananda Bharati Case (1973) established the "Basic Structure Doctrine"—Parliament cannot destroy basic constitutional structure.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Article 32 is the "Heart and Soul" of the Constitution',
        content: 'Declaring fundamental rights on paper is meaningless unless citizens possess a swift and guaranteed mechanism to enforce them when violated by the state. Article 32 provides the Right to Constitutional Remedies. Under this article, any citizen whose fundamental rights are infringed can directly approach the Supreme Court of India without climbing the lower appellate court ladder. The Supreme Court has the mandatory power to issue prerogative writs to safeguard the citizen, which is why Dr. Ambedkar deemed it the indispensable core of the charter.',
        keyTakeaway: 'Article 32 gives citizens direct access to the Supreme Court to enforce fundamental rights.',
      },
    ],
    keyConcepts: [
      { term: 'Habeas Corpus', explanation: 'A judicial writ requiring an arrested person to be brought before a court, securing freedom against illegal detention.' },
      { term: 'Basic Structure Doctrine', explanation: 'A landmark constitutional principle declared in 1973 holding that Parliament cannot amend the essential framework of the Constitution.' },
    ],
    importantDates: [
      { date: '1973', event: 'Kesavananda Bharati Judgment', significance: 'Supreme Court establishes the historic Basic Structure Doctrine.' },
      { date: '1978', event: '44th Constitutional Amendment', significance: 'Removed the Right to Property from Fundamental Rights.' },
    ],
    importantPeople: [
      { name: 'Dr. B.R. Ambedkar', role: 'Architect of Rights', contribution: 'Designated Article 32 as the heart and soul of the Constitution.' },
    ],
    definitions: [
      { term: 'Begar', definition: 'Forced labor extracted from an individual without payment of fair statutory wages, prohibited under Article 23.', context: 'Constitutional prohibitions.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Part III guarantees 6 Fundamental Rights. Article 32 (Right to Constitutional Remedies) provides 5 writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, and Certiorari. DPSP in Part IV guides welfare policies. The Kesavananda Bharati Case (1973) established the Basic Structure Doctrine.',
      goldenPoints: ['Dr. Ambedkar called Article 32 the "Heart and Soul of the Constitution".', 'The Right to Property was removed from Fundamental Rights by the 44th Amendment in 1978.'],
      mindMapSteps: ['6 Fundamental Rights (Arts 14-32) → Article 32 & 5 Prerogative Writs → Part IV Directive Principles → 1973 Basic Structure Doctrine'],
      commonPitfalls: ['Directive Principles are non-justiciable; you cannot file a writ petition in court to enforce a DPSP.'],
    },
    flashcards: [
      { id: 'fc-11-p2-1', front: 'Which writ literally translates from Latin as "to have the body"?', back: 'Habeas Corpus.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-p2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which constitutional amendment removed the Right to Property from the list of Fundamental Rights in 1978?',
        options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '86th Amendment'],
        correctOptionIndex: 1,
        answer: 'Option (B) 44th Constitutional Amendment (1978)',
      },
    ],
  },

  // ==========================================
  // ECONOMICS: Indian Economic Development
  // ==========================================
  {
    id: 'c11-eco-ch1',
    classLevel: 11,
    subject: 'economics',
    chapterNumber: 1,
    title: 'Indian Economy on the Eve of Independence',
    subtitle: 'Colonial Stagnation, Drain of Wealth, Ruined Handicrafts, Zamindari Exploitation, and Demographic Profile (1921)',
    overview: 'Two centuries of British colonial rule transformed India from an exporter of world-renowned textiles into a raw material feeder for British mills. Discover the ruin of traditional handicrafts, agrarian impoverishment under Zamindari, and the drain of wealth analyzed by Dadabhai Naoroji.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Agricultural Stagnation & Land Settlement',
        bullets: [
          'Over 85% of India’s population lived in villages and depended directly on agriculture.',
          'Stagnation caused by Zamindari system (especially in Bengal): Zamindars extracted maximum rent without investing in irrigation or soil improvement.',
          'Commercialisation of agriculture: Forced cultivation of cash crops (indigo, cotton, jute) left peasants vulnerable to market price crashes and chronic food shortages.',
        ],
      },
      {
        title: 'De-industrialization and the Decline of Handicrafts',
        bullets: [
          'De-industrialization: Destruction of world-famous Indian handicrafts (e.g. Dacca Muslin) through two-way discriminatory tariffs.',
          'Discriminatory tariff policy: Free export of raw materials from India to Britain and tariff-free import of British machine-made textiles; heavy duties imposed on Indian handmade exports.',
          'Modern industrial sector was negligible; only cotton textiles (in Maharashtra/Gujarat) and jute mills (in Bengal); TISCO set up in 1907.',
        ],
      },
      {
        title: 'Drain of Wealth and Demographic Indicators',
        bullets: [
          'Dadabhai Naoroji coined "Drain of Wealth": India’s foreign trade generated large export surpluses, but this gold was siphoned away to pay for colonial administrative salaries, British wars, and home charges.',
          'Demographic Profile: 1921 was the "Year of the Great Divide" (mortality rate dropped, population grew continuously); in 1947, infant mortality was 218 per thousand, life expectancy was only 32 years, and female literacy was barely 7%.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why 1921 is Called the "Year of the Great Divide"',
        content: 'Before 1921, India was in the first stage of demographic transition, characterized by both high birth rates and fluctuating high death rates caused by frequent famines, cholera, and the 1918 influenza epidemic. Consequently, India’s population growth was erratic and sometimes declined. After 1921, death rates began a sustained decline due to improved sanitation and famine relief, while birth rates remained high. India transitioned into the second demographic stage of sustained, accelerating population growth, making 1921 the decisive historical demographic divide.',
        keyTakeaway: '1921 marks the transition to sustained, accelerating population growth in modern Indian history.',
      },
    ],
    keyConcepts: [
      { term: 'Drain of Wealth', explanation: 'The unrequited transfer of economic resources and export surpluses from India to Great Britain without adequate economic return.' },
      { term: 'Discriminatory Tariff Policy', explanation: 'A colonial trade strategy imposing zero duty on British manufactured imports into India while taxing Indian exports.' },
    ],
    importantDates: [
      { date: '1907', event: 'Establishment of TISCO', significance: 'First private Indian modern steel manufacturing plant.' },
      { date: '1921', event: 'The Year of the Great Divide', significance: 'Turning point in Indian demographic transition.' },
    ],
    importantPeople: [
      { name: 'Dadabhai Naoroji', role: 'Grand Old Man of India', contribution: 'Calculated first national income estimate and authored Drain of Wealth theory.' },
      { name: 'V.K.R.V. Rao', role: 'Renowned Economist', contribution: 'Made the most scientifically rigorous estimate of colonial national income.' },
    ],
    definitions: [
      { term: 'Commercialisation of Agriculture', definition: 'The shift from cultivating subsistence food crops for family consumption to cultivating cash crops for sale in international markets.', context: 'Colonial agrarian economics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'On the eve of independence (1947), the Indian economy was stagnant and depleted. British rule de-industrialized handicrafts via discriminatory tariffs, exploited agriculture through Zamindari, and engineered a Drain of Wealth (Dadabhai Naoroji). In 1947, life expectancy was 32 years and infant mortality was 218/1000. 1921 stands as the Year of the Great Divide.',
      goldenPoints: ['1921 is celebrated as the "Year of the Great Divide" in Indian demographic history.', 'Life expectancy at independence in 1947 was approximately 32 years.'],
      mindMapSteps: ['Agricultural Stagnation & Zamindari → Handicraft Ruin & Two-Way Tariffs → Drain of Wealth (Naoroji) → Demographic Collapse & 1921 Divide'],
      commonPitfalls: ['India had a large export trade surplus under the British, but it did not benefit India; the gold surplus was drained away to finance British imperial administrative and war costs.'],
    },
    flashcards: [
      { id: 'fc-11-e1-1', front: 'Which year is termed the "Year of the Great Divide" in Indian demographic history?', back: '1921.', category: 'date' },
    ],
    questions: [
      {
        id: 'c11-e1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Whose estimate of colonial national income and per capita income was considered the most significant and scientifically sound by economists?',
        options: ['Dadabhai Naoroji', 'William Digby', 'Findlay Shirras', 'Dr. V.K.R.V. Rao'],
        correctOptionIndex: 3,
        answer: 'Option (D) Dr. V.K.R.V. Rao',
      },
    ],
  },
  {
    id: 'c11-eco-ch2',
    classLevel: 11,
    subject: 'economics',
    chapterNumber: 2,
    title: 'Economic Reforms Since 1991: LPG',
    subtitle: 'Liberalisation, Privatisation, Globalisation, Balance of Payments Crisis 1991, IMF/World Bank, and WTO',
    overview: 'In 1991, India faced an acute balance of payments crisis with foreign exchange reserves barely sufficient for two weeks of imports. Guided by Finance Minister Dr. Manmohan Singh and Prime Minister P.V. Narasimha Rao, India unleashed historic LPG structural reforms.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Crisis of 1991 and IMF Bailout',
        bullets: [
          'Causes: High fiscal deficit, gulf war oil price surge, depleting forex reserves ($1 billion, barely enough for 2 weeks of imports), inflation touching 17%.',
          'India pledged 67 tonnes of gold reserves to Bank of England and Union Bank of Switzerland to avoid default.',
          'Approached World Bank (IBRD) and IMF; secured $7 billion loan under conditionality of opening the economy and ending the License-Permit Raj.',
        ],
      },
      {
        title: 'The LPG Reforms Triad',
        bullets: [
          '1. Liberalisation: Abolished industrial licensing for almost all sectors (except hazardous chemicals, defense, liquor, tobacco); financial sector reforms (entry of private and foreign banks); tax reductions and simplification.',
          '2. Privatisation: Disinvestment of public sector enterprises (PSUs); granted functional autonomy to profit-making PSUs categorized as Maharatna, Navratna, and Miniratna.',
          '3. Globalisation: Integrated Indian economy with the world; slashed import duties; rupee devalued by ~19% and made partially convertible on current account; allowed Foreign Direct Investment (FDI) and Foreign Institutional Investment (FII).',
        ],
      },
      {
        title: 'Appraisal of Reforms and the WTO',
        bullets: [
          'Successes: GDP growth surged above 7-8%; forex reserves grew to over $600 billion; India emerged as global IT/BPO powerhouse.',
          'Failures: Agriculture neglected (growth fell below 3%, public investment declined); industrial growth volatile due to cheap imports; jobless growth with widening economic inequality.',
          'World Trade Organisation (WTO, established 1995): Replaced GATT; India became founding member, advocating fair agricultural trade rules.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Agriculture Was Left Behind in the 1991 Reforms',
        content: 'While the 1991 economic reforms revolutionized services, banking, telecom, and automotive manufacturing, the agricultural sector was largely overlooked. First, public investment in irrigation, rural power, and agrarian infrastructure was drastically cut to reduce the central fiscal deficit. Second, fertilizer and power subsidies were rolled back, raising input costs for farmers. Third, trade liberalisation removed import quantitative restrictions on agricultural commodities, exposing small Indian cultivators to competition from subsidized multinational agribusinesses, triggering the agrarian distress of the late 1990s.',
        keyTakeaway: 'The 1991 reforms catalyzed services and industry while cutting public capital in agriculture.',
      },
    ],
    keyConcepts: [
      { term: 'Disinvestment', explanation: 'The sale of government-owned equity shares in public sector enterprises to private investors or the public to raise revenue and improve efficiency.' },
      { term: 'Outsourcing', explanation: 'A business practice where a company contracts out services (e.g. IT, customer support) to specialized third-party firms overseas, where India excelled.' },
    ],
    importantDates: [
      { date: 'July 1991', event: 'New Economic Policy (LPG) announced', significance: 'Structural transformation of the Indian economy.' },
      { date: '1995', event: 'WTO established', significance: 'India becomes a founding member of the World Trade Organisation.' },
    ],
    importantPeople: [
      { name: 'Dr. Manmohan Singh', role: 'Finance Minister in 1991', contribution: 'Architect of India’s landmark economic liberalisation reforms.' },
      { name: 'P.V. Narasimha Rao', role: 'Prime Minister in 1991', contribution: 'Provided political leadership to steer India through the balance of payments crisis.' },
    ],
    definitions: [
      { term: 'Quantitative Restrictions (QRs)', definition: 'Quotas and quantitative limits placed on the maximum physical volume of specific goods that can be imported into a country.', context: 'International trade.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'In 1991, depleted forex reserves and fiscal deficit forced India to borrow from IMF/World Bank, pledging gold. Under Rao and Singh, India enacted Liberalisation (abolishing licenses), Privatisation (PSU disinvestment), and Globalisation (slashing tariffs, attracting FDI). This drove 7-8% GDP growth and IT exports, though agriculture saw declining public investment.',
      goldenPoints: ['The 1991 New Economic Policy centered on Liberalisation, Privatisation, and Globalisation (LPG).', 'The World Trade Organisation (WTO) was founded in 1995 as the successor to GATT.'],
      mindMapSteps: ['1991 Forex Crisis & IMF Loan → Liberalisation (License Raj Abolition) → Privatisation & Navratnas → Globalisation & FDI Surges → WTO Integration'],
      commonPitfalls: ['Rupee convertibility was implemented on the Current Account, but India maintains calibrated restrictions on the Capital Account.'],
    },
    flashcards: [
      { id: 'fc-11-e2-1', front: 'What does the acronym "LPG" stand for in the context of the 1991 reforms?', back: 'Liberalisation, Privatisation, and Globalisation.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c11-e2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which international organization replaced the General Agreement on Tariffs and Trade (GATT) in 1995?',
        options: ['IMF', 'World Bank', 'World Trade Organisation (WTO)', 'UNCTAD'],
        correctOptionIndex: 2,
        answer: 'Option (C) World Trade Organisation (WTO)',
      },
    ],
  },
];


export const CHAPTERS_CLASS_11: Chapter[] = RAW_CHAPTERS_CLASS_11.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_11[ch.id];
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
