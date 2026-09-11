import { Chapter } from '../types/sst';
import { FULL_NOTES_CLASS_6 } from './fullNotesClass6';

const RAW_CHAPTERS_CLASS_6: Chapter[] = [
  // ==========================================
  // HISTORY: Our Pasts - I
  // ==========================================
  {
    id: 'c6-hist-ch1',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 1,
    title: 'What, Where, How and When?',
    subtitle: 'Finding Out About the Past, River Valleys, Manuscripts, Inscriptions, and Dates (BC/AD/BCE/CE)',
    overview: 'History tells us about the life of ancient hunter-gatherers, the earliest farmers on the banks of rivers like Narmada, Indus, and Ganga, and how manuscripts and inscriptions reveal our collective heritage.',
    estimatedReadTime: '12 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Where Did People Live in Ancient Times?',
        bullets: [
          'Banks of River Narmada: Skilled hunter-gatherers lived here for hundreds of thousands of years gathering roots, fruits, and hunting animals.',
          'Sulaiman and Kirthar Hills (North-West): People first began to grow crops like wheat and barley about 8,000 years ago; domesticated sheep, goats, and cattle.',
          'Garo Hills (North-East) & Vindhyas: Areas where agriculture developed; rice was first grown north of the Vindhyas.',
          'Banks of River Ganga & its tributary Son: Great kingdom of Magadha developed south of the Ganga.',
        ],
      },
      {
        title: 'Names of the Land & Sources of History',
        bullets: [
          'India: Derived from Indus (Sindhu in Sanskrit); Iranians and Greeks called it "Hindos" or "Indos".',
          'Bharat: Mentioned in Rigveda for a group of people living in the north-west.',
          'Manuscripts: Hand-written records on palm leaves or birch bark (Himalayas); mostly in Sanskrit, Prakrit, and Tamil.',
          'Inscriptions: Writings on hard surfaces like stone or metal; preserved royal edicts (e.g. Ashoka).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Manuscripts vs Inscriptions',
        content: 'Manuscripts were written by hand on specially prepared palm leaves or birch bark found in the Himalayas. Many were destroyed by insects or damp, but thousands survive in temples and monasteries. Inscriptions, by contrast, are engraved on hard, durable surfaces like rocks, pillars, and copper plates. Kings used inscriptions so that their orders, victories, and gifts could be read and obeyed for centuries.',
        keyTakeaway: 'Inscriptions provide durable, tamper-evident historical evidence compared to fragile palm leaves.',
      },
    ],
    keyConcepts: [
      { term: 'Archaeology', explanation: 'The study of human history and prehistory through the excavation of sites and analysis of artifacts, bones, and monuments.' },
      { term: 'Decipherment', explanation: 'The process of reading and understanding ancient scripts and languages that are no longer in common use (e.g., Rosetta Stone).' },
    ],
    importantDates: [
      { date: '8000 BCE', event: 'Beginning of agriculture', significance: 'Wheat and barley cultivated in Sulaiman and Kirthar hills.' },
      { date: '2500 BCE', event: 'First cities emerge on Indus', significance: 'Harappan civilization flourishes.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Manuscript', definition: 'A book or document written by hand, derived from Latin "manu" meaning hand.', context: 'Historical source.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Early humans lived along the Narmada, Sulaiman-Kirthar hills, and Ganga. We reconstruct the past using archaeology, manuscripts on birch bark, and stone inscriptions. Dates count backwards from Christ (BCE) or forward (CE).',
      goldenPoints: ['Rice was first grown to the north of the Vindhya mountains.', 'Magadha was the first powerful kingdom in the Ganga valley.'],
      mindMapSteps: ['Where early humans settled → Name of India/Bharat → Manuscripts & Inscriptions → Deciphering the Past'],
      commonPitfalls: ['Do not confuse BCE (Before Common Era) with CE (Common Era).'],
    },
    flashcards: [
      { id: 'fc-6-h1-1', front: 'Where was rice first grown in ancient India?', back: 'North of the Vindhya mountains.', category: 'location' },
    ],
    questions: [
      {
        id: 'c6-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'On what material were ancient Indian manuscripts primarily written?',
        options: ['Clay bricks', 'Palm leaves and birch bark', 'Parchment paper', 'Steel plates'],
        correctOptionIndex: 1,
        answer: 'Option (B) Palm leaves and birch bark',
      },
    ],
  },
  {
    id: 'c6-hist-ch2',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 2,
    title: 'From Hunting-Gathering to Growing Food',
    subtitle: 'Stone Age, Bhimbetka Cave Paintings, Discovery of Fire, Domestication, and Mehrgarh',
    overview: 'How early humans transitioned from nomadic hunter-gatherers during the Palaeolithic age to settled agriculturalists and pastoralists in the Neolithic village of Mehrgarh.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Hunter-Gatherers & The Stone Age',
        bullets: [
          'Hunter-gatherers moved constantly for food, water, and seasonal animal migrations.',
          'Palaeolithic (Old Stone Age: 2 million to 12,000 years ago): Pebble and flake tools; discovery of fire at Kurnool caves.',
          'Mesolithic (Middle Stone Age: 12,000 to 10,000 years ago): Microliths (tiny stone tools fixed on bone or wood handles).',
          'Neolithic (New Stone Age: from 10,000 years ago): Polished stone tools, pottery, settled farming.',
        ],
      },
      {
        title: 'Settled Life at Mehrgarh and Burzahom',
        bullets: [
          'Mehrgarh (near Bolan Pass, Pakistan): One of the earliest villages where people grew barley, wheat, and reared sheep/goats; rectangular mud-brick houses and burial sites with animals.',
          'Burzahom (Kashmir): Pit-houses dug into the ground with steps leading into them to survive freezing cold.',
          'Bhimbetka (Madhya Pradesh): Famous for rock shelters with natural cave paintings of animals, hunting, and dancing.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Process of Domestication',
        content: 'Domestication was a gradual process that began about 12,000 years ago. People selected plants that yielded large grains, had strong stalks, and were not prone to diseases. They also selected gentle animals for breeding. Over generations, domesticated plants and animals became distinct from wild ones—for instance, teeth and horns of wild animals are much larger than those of domesticated ones. Dog was the first animal to be tamed, followed by sheep and goats.',
        keyTakeaway: 'Domestication fundamentally altered human diet, biology, and lifestyle.',
      },
    ],
    keyConcepts: [
      { term: 'Microliths', explanation: 'Tiny, sharp stone tools developed in the Mesolithic period, often attached to bone or wooden handles to make saws and sickles.' },
      { term: 'Pit-houses', explanation: 'Underground dwelling pits excavated by Neolithic people at Burzahom (Kashmir) with steps to provide shelter from freezing weather.' },
    ],
    importantDates: [
      { date: '12,000 years ago', event: 'Climate warmed & grasslands emerged', significance: 'Beginning of the Mesolithic period.' },
      { date: '10,000 years ago', event: 'Beginning of Neolithic period', significance: 'First settled agricultural villages like Mehrgarh.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Domestication', definition: 'The process in which people grow plants and look after animals, selecting non-violent species for breeding.', context: 'Neolithic revolution.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Palaeolithic hunter-gatherers used crude stone tools and discovered fire at Kurnool. Climate warming in the Mesolithic led to microliths. In the Neolithic, humans domesticated plants and animals, built pit-houses at Burzahom, painted caves at Bhimbetka, and farmed at Mehrgarh.',
      goldenPoints: ['The first animal to be tamed was the wild ancestor of the dog.', 'Bhimbetka rock shelters in MP have world-famous prehistoric cave paintings.'],
      mindMapSteps: ['Palaeolithic Hunter-Gatherers → Fire & Cave Art → Mesolithic Grasslands → Neolithic Farming at Mehrgarh'],
      commonPitfalls: ['Burzahom is in Kashmir (known for pit-houses), whereas Mehrgarh is near the Bolan Pass in modern Pakistan.'],
    },
    flashcards: [
      { id: 'fc-6-h2-1', front: 'Which was the earliest domesticated animal by humans?', back: 'The wild ancestor of the dog, followed by sheep and goat.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Pit-houses dug into the ground for cold weather shelter were discovered at which Neolithic site?',
        options: ['Mehrgarh', 'Burzahom', 'Kurnool', 'Inamgaon'],
        correctOptionIndex: 1,
        answer: 'Option (B) Burzahom',
      },
    ],
  },
  {
    id: 'c6-hist-ch3',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 3,
    title: 'In the Earliest Cities',
    subtitle: 'The Indus Valley Civilization (Harappa, Mohenjodaro, Lothal, Kalibangan, Dholavira)',
    overview: 'Discovered in the 1920s, Harappa and Mohenjodaro revealed an urban Bronze Age civilization with grid town planning, covered drainage systems, the Great Bath, and maritime dockyards.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Town Planning & Architecture',
        bullets: [
          'Cities divided into two parts: Citadel (higher, smaller, western side with public buildings) and Lower Town (larger, eastern side for residential houses).',
          'Baked bricks laid in interlocking pattern, lasting over 4,000 years.',
          'The Great Bath at Mohenjodaro: Lined with bricks, coated with plaster, made water-tight with natural tar; steps on two sides.',
          'Drainage System: Covered street drains with gentle slopes; inspection holes at intervals connected to individual houses.',
        ],
      },
      {
        title: 'Life in the Harappan Cities',
        bullets: [
          'Rulers planned construction; scribes wrote on seals; craftspersons made terracotta toys, beads, and bronze tools.',
          'Imported raw materials: Copper from Rajasthan and Oman, Tin from Afghanistan, Gold from Karnataka, Precious stones from Gujarat.',
        ],
      },
      {
        title: 'Dholavira and Lothal in Gujarat',
        bullets: [
          'Dholavira (Rann of Kutch): Divided into three parts (unlike other 2-part cities), each surrounded by massive stone walls; huge white stone inscription found.',
          'Lothal (Gulf of Khambat): Brick dockyard where sea-going boats loaded and unloaded goods; bead-making workshop and seals discovered.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Mysterious Decline of the Harappan Cities',
        content: 'Around 3,900 years ago (1900 BCE), a major transformation began. People stopped living in many cities; writing, seals, and special weights were abandoned; garbage piled up in Mohenjodaro’s streets and the drainage system broke down. Historians suggest several causes: drying up of rivers, deforestation to fuel brick kilns, overgrazing, catastrophic floods, or rulers losing political control. Many residents migrated east and south to new settlements.',
        keyTakeaway: 'Sophisticated urban systems can collapse when ecological or administrative equilibrium breaks.',
      },
    ],
    keyConcepts: [
      { term: 'Citadel', explanation: 'The elevated western section of Harappan cities containing public administrative buildings and the Great Bath.' },
      { term: 'Dockyard', explanation: 'A massive brick basin at Lothal where boats entered from the river channel for trade cargo.' },
    ],
    importantDates: [
      { date: '2600 BCE', event: 'Mature Harappan urban phase', significance: 'Grid town planning, seals, and covered drainage.' },
      { date: '1900 BCE', event: 'Decline of Harappan cities', significance: 'Abandonment of major Indus urban centers.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Seal', definition: 'An engraved stone stamp containing Harappan script and animal motifs used to stamp clay tags on trade packages.', context: 'Commerce.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Harappa and Mohenjodaro featured two-part cities (Citadel and Lower Town), the waterproof Great Bath, and covered brick drainage. Raw materials were traded across regions. Lothal had a sea dockyard, and Dholavira had a unique 3-part stone layout before collapsing around 1900 BCE.',
      goldenPoints: ['Lothal in Gujarat had a tidal brick dockyard for maritime commerce.', 'Dholavira was uniquely divided into three fortified sections.'],
      mindMapSteps: ['Discovery of Harappa → Citadel vs Lower Town → Great Bath & Drains → Trade & Crafts → Mystery of Collapse'],
      commonPitfalls: ['Dholavira was divided into three parts, unlike most Harappan cities which had two parts.'],
    },
    flashcards: [
      { id: 'fc-6-h3-1', front: 'Where was the famous brick dockyard of the Indus Valley Civilization located?', back: 'At Lothal, on the Sabarmati river in Gujarat.', category: 'location' },
    ],
    questions: [
      {
        id: 'c6-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'The famous "Great Bath" was discovered in which ancient Indus city?',
        options: ['Harappa', 'Mohenjodaro', 'Kalibangan', 'Lothal'],
        correctOptionIndex: 1,
        answer: 'Option (B) Mohenjodaro',
      },
    ],
  },
  {
    id: 'c6-hist-ch4',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 4,
    title: 'What Books and Burials Tell Us',
    subtitle: 'The Four Vedas, Rigveda Hymns, Megaliths of Inamgaon & Brahmagiri',
    overview: 'The Rigveda provides a window into early Indo-Aryan society, deities (Agni, Indra, Soma), cattle raids, and tribal rajans, while megalithic stone burials illuminate South Indian burial customs and social status.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'The Four Vedas and the Rigveda',
        bullets: [
          'Four Vedas: Rigveda, Samaveda, Yajurveda, Atharvaveda.',
          'Rigveda: Oldest Veda (composed ~3,500 years ago); contains over 1,000 hymns (Suktas = "well-said") in praise of gods like Agni (fire), Indra (warrior), and Soma (sacred plant).',
          'Composed in Vedic Sanskrit; recited and memorized orally for centuries before being written down.',
        ],
      },
      {
        title: 'Society in Rigvedic Times',
        bullets: [
          'Two main social groups: Brahmins (performed rituals) and Rajans (tribal leaders who led in battles; did not have standing armies or palaces).',
          'People were referred to collectively as Jana or Vish (e.g., Puru jana, Bharat jana, Yadu jana).',
          'Battles fought for cattle, land, water, and captives; captured wealth distributed among priests, leaders, and common people.',
        ],
      },
      {
        title: 'Megaliths & Burials at Brahmagiri and Inamgaon',
        bullets: [
          'Megaliths ("big stones"): Stone boulders arranged to mark burial sites in the Deccan, South India, and North-East (~3,000 years ago).',
          'Brahmagiri: One skeleton found buried with 33 gold beads, 2 stone beads, 4 copper bangles; others with only few clay pots (revealing social inequality).',
          'Inamgaon (on river Ghod): Adults buried in pit-graves with heads pointing north; one large four-legged clay jar burial in courtyard.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'What Megaliths Reveal About Social Differences',
        content: 'Archaeologists believe that objects found with a skeleton belonged to the deceased. At Brahmagiri, one skeleton was buried with 33 gold beads, 4 copper bangles, and a conch shell, whereas other skeletons had only a few earthen pots. This difference suggests social inequality—some people were wealthy chiefs, while others were poor followers. Family burials were marked by stone circles (port-holes) where bodies of the same family were placed one after another over time.',
        keyTakeaway: 'Burial goods provide archaeologists direct evidence of social stratification in prehistoric societies.',
      },
    ],
    keyConcepts: [
      { term: 'Megalith', explanation: 'Massive stone boulders deliberately placed above graves to mark burial sites in ancient South India.' },
      { term: 'Sukta', explanation: 'A hymn in the Rigveda, literally meaning "well-said", composed in honor of divine deities.' },
    ],
    importantDates: [
      { date: '1500 BCE', event: 'Composition of the Rigveda', significance: 'Earliest literature of the Indo-Aryan period.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Port-hole', definition: 'A circular entrance in a megalithic cist grave through which bodies of other family members could be added later.', context: 'Megalithic burials.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Rigveda (1,000 hymns to Agni, Indra, Soma) shows an oral society based on cattle, horses, and tribal assemblies. Megalithic burials across South India (Brahmagiri, Inamgaon) used stone circles and grave goods that reveal distinct social inequalities.',
      goldenPoints: ['Rigveda is the oldest of the four Vedas, composed in Vedic Sanskrit.', 'At Brahmagiri, a chief was buried with 33 gold beads and 4 copper bangles.'],
      mindMapSteps: ['The 4 Vedas → Rigveda Hymns & Deities → Social Groups (Jana/Vish) → Megaliths & Grave Goods'],
      commonPitfalls: ['Rigvedic "rajans" did not possess standing armies or magnificent palaces; they were tribal war chieftains.'],
    },
    flashcards: [
      { id: 'fc-6-h4-1', front: 'Which is the oldest Veda, composed about 3,500 years ago?', back: 'The Rigveda.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following was NOT one of the three principal deities praised in the Rigveda?',
        options: ['Agni', 'Indra', 'Soma', 'Vishnu'],
        correctOptionIndex: 3,
        answer: 'Option (D) Vishnu (Agni, Indra, and Soma were the three primary deities in the Rigveda)',
      },
    ],
  },
  {
    id: 'c6-hist-ch5',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 5,
    title: 'Kingdoms, Kings and an Early Republic',
    subtitle: 'Ashvamedha Horse Sacrifice, Janapadas, Mahajanapadas, Magadha, and Vajji (Gana/Sangha)',
    overview: 'Around 2,500 years ago, small tribal janapadas consolidated into 16 powerful mahajanapadas. Fortified cities, standing armies, and regular agricultural taxes emerged, exemplified by the monarchical empire of Magadha and the aristocratic republic of Vajji.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'Ashvamedha & Janapadas to Mahajanapadas',
        bullets: [
          'Ashvamedha (Horse Sacrifice): A royal horse let loose to wander; kings who allowed it to pass accepted the sacrifice king’s supremacy; crowned as a powerful raja.',
          'Janapada: Literally "the land where the jana set its foot and settled down".',
          'Mahajanapadas: Larger, fortified kingdoms (around 500 BCE); maintained standing armies paid regular salaries via punch-marked coins.',
          'Taxes: 1/6th of agricultural produce called "Bhaga" (share); taxes on crafts, herders, and trade.',
        ],
      },
      {
        title: 'Magadha: The Most Powerful Mahajanapada',
        bullets: [
          'Natural advantages: Ganga and Son rivers provided water, transport, and fertile alluvium; iron ore mines in Jharkhand for making weapons; forests supplied elephants for army.',
          'Famous ambitious rulers: Bimbisara and his son Ajatasattu; later Mahapadma Nanda who conquered up to the north-west.',
          'Capitals: First Rajagriha (Rajgir), later shifted to Pataliputra (Patna).',
        ],
      },
      {
        title: 'Vajji: An Early Republic (Gana or Sangha)',
        bullets: [
          'Vajji (capital Vaishali) was a Gana/Sangha ruled not by one king, but by an assembly of thousands of men (each called raja).',
          'Decisions taken through open debate and consensus; women, slaves (dasas), and hired workers (kammakaras) were excluded from assemblies.',
          'Buddha and Mahavira both belonged to ganas.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Monarchy (Magadha) vs Republic (Vajji)',
        content: 'While Magadha was a hereditary, highly centralized monarchy where an individual king commanded royal armies and collected taxes through appointed officers, the Vajji confederacy was a republic (Gana or Sangha). In Vajji, power was shared by many rajas who met in assemblies, debated state policy, and resolved issues through consensus or voting. Ajatasattu sent his minister Vassakara to consult the Buddha on how to conquer Vajji; Buddha replied that Vajji could not be defeated as long as its rajas held full and frequent assemblies and respected traditional laws.',
        keyTakeaway: 'The Gana-Sangha model of Vajji pioneered deliberative republican governance in ancient India.',
      },
    ],
    keyConcepts: [
      { term: 'Bhaga', explanation: 'The tax on agricultural crops, fixed at one-sixth (1/6th) of total harvest produce, collected by kings of Mahajanapadas.' },
      { term: 'Sangha', explanation: 'An organization or assembly of equals who took collective governance decisions through debate (as in Vajji).' },
    ],
    importantDates: [
      { date: '500 BCE', event: 'Rise of 16 Mahajanapadas', significance: 'Transition to fortified urban kingdoms and regular taxation.' },
    ],
    importantPeople: [
      { name: 'Bimbisara', role: 'King of Magadha', contribution: 'Expanded Magadha through matrimonial alliances and conquests.' },
      { name: 'Ajatasattu', role: 'King of Magadha', contribution: 'Fortified Pataliputra and waged wars against the Vajji confederacy.' },
    ],
    definitions: [
      { term: 'Mahajanapada', definition: 'One of the sixteen major fortified kingdoms and republics that flourished in northern India around 600–300 BCE.', context: 'Ancient state formation.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'From tribal janapadas arose 16 fortified mahajanapadas supported by agricultural taxes (Bhaga 1/6th) and iron weapons. Magadha became the supreme empire due to rivers, iron, and elephants. Vajji flourished as an early democratic republic (Gana/Sangha) with collective decision-making.',
      goldenPoints: ['Bhaga was the agricultural tax fixed at 1/6th of crop production.', 'Capitals of Magadha were first Rajagriha and later Pataliputra.'],
      mindMapSteps: ['Ashvamedha & Janapadas → 16 Mahajanapadas & Taxation → Magadha’s Natural Strengths → Vajji Republic (Sangha)'],
      commonPitfalls: ['Do not confuse Rajagriha (earliest capital) with Pataliputra (later capital of Magadha).'],
    },
    flashcards: [
      { id: 'fc-6-h5-1', front: 'What was the regular agricultural tax called in ancient Mahajanapadas?', back: 'Bhaga (share), fixed at 1/6th of total crop produce.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following was a republic (Gana or Sangha) rather than a monarchy?',
        options: ['Magadha', 'Kosala', 'Vajji', 'Avanti'],
        correctOptionIndex: 2,
        answer: 'Option (C) Vajji (with capital at Vaishali)',
      },
    ],
  },
  {
    id: 'c6-hist-ch6',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 6,
    title: 'New Questions and Ideas',
    subtitle: 'Gautama Buddha, Upanishads, Jainism (Vardhamana Mahavira), and the Sangha',
    overview: 'As kingdoms grew, thoughtful seekers questioned ritual sacrifices and explored the meaning of life, suffering, and rebirth, giving rise to Buddhism, Jainism, and the philosophical wisdom of the Upanishads.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Gautama Buddha and Buddhism',
        bullets: [
          'Siddhartha Gautama, born into the Shakya Gana (~2,500 years ago); left palace in search of truth.',
          'Attained enlightenment under a peepal tree at Bodh Gaya (Bihar); gave first sermon at Sarnath near Varanasi.',
          'Taught Four Noble Truths: Life is full of sorrow (dukkha) caused by craving (tanha); overcome via the Eightfold Path of moderation; emphasized ahimsa (non-violence).',
          'Taught in Prakrit so ordinary people could understand.',
        ],
      },
      {
        title: 'The Upanishads',
        bullets: [
          'Part of later Vedic texts; literally means "approaching and sitting near" a guru to learn secret truths.',
          'Explored the individual soul (Atman) and universal soul (Brahman); believed they were ultimately one.',
          'Thinkers were mostly brahmins and rajas, with rare exceptions like Gargi (famous woman thinker) and Satyakama Jabala (son of a slave woman Jabali).',
        ],
      },
      {
        title: 'Vardhamana Mahavira and Jainism',
        bullets: [
          '24th Tirthankara of the Jainas, belonging to Jnatrika kshatriya clan of Vajji Sangha.',
          'Taught strict ahimsa: "All beings long to live; to all things life is dear." Strict truth, non-stealing, and celibacy.',
          'Mainly supported by traders; farmers found it harder to follow because they had to kill crop pests.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Story of Kisa Gotami',
        content: 'When Kisa Gotami’s only son died, she wandered the streets weeping, asking for medicine to revive him. A kind man took her to the Buddha. The Buddha said: "Bring me a handful of mustard seeds from a house where no one has died." She went from house to house, but everywhere people told her: "The dead are many, but the living few." Through this compassionate lesson, Kisa Gotami realized that death is universal and grief can only be eased through acceptance.',
        keyTakeaway: 'The Buddha taught philosophical acceptance through everyday compassionate experiences.',
      },
    ],
    keyConcepts: [
      { term: 'Tanha', explanation: 'Thirst or insatiable craving for worldly pleasures and material possessions, identified by Buddha as the root cause of sorrow.' },
      { term: 'Ahimsa', explanation: 'The philosophical principle of absolute non-injury and non-violence toward all living beings, central to Jainism and Buddhism.' },
      { term: 'Upanishad', explanation: 'Ancient Sanskrit texts recording philosophical dialogues between teachers and students exploring Atman and Brahman.' },
    ],
    importantDates: [
      { date: '563 BCE', event: 'Birth of Siddhartha Gautama', significance: 'Founder of Buddhism.' },
    ],
    importantPeople: [
      { name: 'Gautama Buddha', role: 'Founder of Buddhism', contribution: 'Delivered first sermon at Sarnath; taught Eightfold Path.' },
      { name: 'Vardhamana Mahavira', role: '24th Jaina Tirthankara', contribution: 'Popularized Jainism and doctrine of extreme ahimsa.' },
      { name: 'Gargi', role: 'Vedic Woman Scholar', contribution: 'Participated in intellectual debates in King Janaka’s court.' },
    ],
    definitions: [
      { term: 'Tirthankara', definition: 'A spiritual teacher in Jainism who has conquered worldly passions and created a crossing across the ocean of rebirth.', context: 'Jainism.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Dissatisfaction with caste rituals led to Buddha teaching the Middle Path in Prakrit at Sarnath. Upanishadic sages debated Atman and Brahman. Mahavira taught strict non-violence (Ahimsa) in Jainism. Both religions rejected caste hierarchy and established Sanghas for monks and nuns.',
      goldenPoints: ['Buddha attained enlightenment at Bodh Gaya and gave his first sermon at Sarnath.', 'Buddha and Mahavira taught in Prakrit, the language of the common people.'],
      mindMapSteps: ['Life of Buddha & Bodh Gaya → Four Noble Truths → Upanishads (Atman/Brahman) → Mahavira & Jainism → The Sangha'],
      commonPitfalls: ['Buddha delivered his first sermon at Sarnath, not at Bodh Gaya (where he attained enlightenment).'],
    },
    flashcards: [
      { id: 'fc-6-h6-1', front: 'Where did the Buddha preach his very first sermon?', back: 'At Sarnath near Varanasi.', category: 'location' },
    ],
    questions: [
      {
        id: 'c6-h6-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which language did Gautama Buddha and Mahavira preach their doctrines to ordinary people?',
        options: ['Sanskrit', 'Prakrit', 'Pali', 'Tamil'],
        correctOptionIndex: 1,
        answer: 'Option (B) Prakrit (the everyday spoken language of the common masses)',
      },
    ],
  },
  {
    id: 'c6-hist-ch7',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 7,
    title: 'Ashoka, the Emperor Who Gave Up War',
    subtitle: 'The Mauryan Empire, Chanakya, Kalinga War, Ashoka’s Dhamma, and Inscriptions',
    overview: 'Founded by Chandragupta Maurya with the wisdom of Chanakya, the Mauryan Empire spanned from modern Afghanistan to South India. Ashoka was the first emperor in world history to renounce conquest after witnessing the slaughter of the Kalinga War.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Mauryan Empire and Chandragupta Maurya',
        bullets: [
          'Founded by Chandragupta Maurya over 2,300 years ago, aided by mentor Chanakya (Kautilya), who wrote the political treatise Arthashastra.',
          'Three great Mauryan emperors: Chandragupta → son Bindusara → grandson Ashoka.',
          'Capitals & key trade nodes: Pataliputra (imperial capital), Taxila (gateway to Central Asia), Ujjain (route from north to south).',
        ],
      },
      {
        title: 'The Kalinga War: The Great Turning Point',
        bullets: [
          'Kalinga was ancient coastal Odisha. Ashoka fought a bloody war to conquer it.',
          'Over 100,000 people killed, 150,000 captured as prisoners, and countless died of disease.',
          'Overcome with deep remorse and sorrow, Ashoka swore never to wage war again, choosing "Dhamma-vijaya" (conquest through righteousness) instead.',
        ],
      },
      {
        title: 'Ashoka’s Dhamma & Royal Inscriptions',
        bullets: [
          'Dhamma did not involve worship of gods or animal sacrifices; inspired by Buddha’s moral teachings: respect parents, be gentle to slaves, show tolerance to all religions.',
          'Appointed special moral officers called Dhamma Mahamattas to travel and teach dhamma.',
          'Engraved edicts on rocks and polished stone pillars in Prakrit using Brahmi script; built roads, wells, and rest-houses.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How an Empire Differs from a Kingdom',
        content: 'Empires are much larger than kingdoms and need to be protected by massive armies, requiring much larger revenues and resources. Consequently, emperors need a large network of tax-collecting officials rather than relying on occasional tributary gifts. In the Mauryan Empire, the area around capital Pataliputra was under direct imperial control with spies reporting on governors, while distant provinces like Taxila and Ujjain were governed by royal princes as provincial governors.',
        keyTakeaway: 'Empires require standing armies, bureaucratic revenue machinery, and imperial communication highways.',
      },
    ],
    keyConcepts: [
      { term: 'Dhamma', explanation: 'The Prakrit word for Dharma, signifying moral duty, universal compassion, non-violence, and tolerance advocated by Ashoka.' },
      { term: 'Dhamma Mahamattas', explanation: 'Special imperial officers appointed by Emperor Ashoka to travel from village to village spreading ethical teachings.' },
    ],
    importantDates: [
      { date: '261 BCE', event: 'Kalinga War', significance: 'Ashoka renounces violence and adopts Buddhism/Dhamma.' },
    ],
    importantPeople: [
      { name: 'Ashoka', role: 'Mauryan Emperor', contribution: 'Adopted Dhamma, engraved pillar edicts, sent peace missions across Asia.' },
      { name: 'Chanakya (Kautilya)', role: 'Philosopher and Statesman', contribution: 'Guided Chandragupta Maurya and wrote the Arthashastra.' },
      { name: 'Megasthenes', role: 'Greek Ambassador', contribution: 'Sent by Seleucus Nicator to Pataliputra; wrote eyewitness account Indika.' },
    ],
    definitions: [
      { term: 'Tribute', definition: 'Payments collected not on a regular fixed basis like taxes, but more or less willingly when people gave various items.', context: 'Forest tracts in Mauryan empire.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Chandragupta Maurya founded the empire with Chanakya’s guidance (Arthashastra). Ashoka conquered Kalinga in 261 BCE, but the horrific bloodshed led him to embrace non-violence, inscribe moral edicts across India in Brahmi script, and appoint Dhamma Mahamattas.',
      goldenPoints: ['Ashoka’s Lion Capital at Sarnath is our national emblem.', 'Ashoka’s inscriptions were written in Prakrit language using the Brahmi script.'],
      mindMapSteps: ['Chandragupta & Chanakya → Mauryan Administration → Kalinga War Horror → Ashoka’s Dhamma & Edicts'],
      commonPitfalls: ['Ashoka’s dhamma was not a new formal religion; it was a universal moral code of compassion and tolerance.'],
    },
    flashcards: [
      { id: 'fc-6-h7-1', front: 'Which bloody war caused Emperor Ashoka to renounce violence forever?', back: 'The Kalinga War in 261 BCE.', category: 'date' },
    ],
    questions: [
      {
        id: 'c6-h7-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who was the Greek ambassador sent to Chandragupta Maurya’s court in Pataliputra?',
        options: ['Fa-Xian', 'Megasthenes', 'Xuan Zang', 'Al-Biruni'],
        correctOptionIndex: 1,
        answer: 'Option (B) Megasthenes',
      },
    ],
  },
  {
    id: 'c6-hist-ch8',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 8,
    title: 'Vital Villages, Thriving Towns',
    subtitle: 'Iron Tools, Irrigation, Village Society (Vellalar, Uzhavar), Craft Guilds (Shrenis), and Arikamedu',
    overview: 'From 2,500 years ago, iron axes cleared dense forests and iron ploughshares boosted agriculture, supported by royal irrigation canals. Prosperous villages fueled vibrant craft guilds and coastal trading ports like Arikamedu.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Agricultural Expansion: Iron & Irrigation',
        bullets: [
          'Iron tools (axes, ploughshares) became widespread around 2,500 years ago, drastically multiplying crop yields.',
          'Kings invested in artificial irrigation systems: canals, wells, tanks, and artificial lakes.',
        ],
      },
      {
        title: 'Village Society in North and South India',
        bullets: [
          'Tamil Region (South): Large landowners were called Vellalar; ordinary ploughmen were Uzhavar; landless labourers and slaves were Kadaisiyar and Adimai.',
          'Northern Villages: Village headman was Grama Bhojaka (often the largest landowner, collected taxes, acted as judge/policeman); independent small farmers were Grihapatis; landless workers were Dasa Karmakaras.',
        ],
      },
      {
        title: 'Cities, Shrenis, and Port of Arikamedu',
        bullets: [
          'Northern Black Polished Ware (NBPW): Fine glossy pottery manufactured in northern India.',
          'Shrenis: Guilds of craftspersons and merchants that procured raw materials, trained workers, distributed products, and served as banks.',
          'Arikamedu (Puducherry): Ancient coastal port where Roman amphorae (wine/oil jars), stamped red-glazed Arretine pottery, and Roman coins were discovered.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'What Shrenis (Guilds) Did',
        content: 'Shrenis were associations formed by craftspersons and merchants. Craft shrenis organized training, procured raw materials, and distributed finished products. Merchant shrenis organized trade caravans and sea voyages. Shrenis also functioned as banks where wealthy people deposited money; part of the interest was used to support religious institutions like Buddhist monasteries and Hindu temples.',
        keyTakeaway: 'Shrenis provided commercial stability and banking infrastructure in ancient India.',
      },
    ],
    keyConcepts: [
      { term: 'Shrenis', explanation: 'Guilds or associations of craftspersons and merchants that regulated trades, maintained quality, and operated as banks.' },
      { term: 'Northern Black Polished Ware (NBPW)', explanation: 'A fine, glossy, jet-black pottery style characteristic of the second urbanisation in ancient northern India.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Grama Bhojaka', definition: 'The hereditary village headman in ancient northern India, who was the largest landowner and tax-collector.', context: 'Rural hierarchy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Iron ploughshares and artificial irrigation boosted agriculture. Village society stratified into Vellalars and Uzhavars in the South, and Grama Bhojakas in the North. Craft guilds (Shrenis) acted as commercial banks. Arikamedu in Puducherry was an active Indo-Roman trading emporium.',
      goldenPoints: ['Arikamedu was an ancient Roman trading port near Puducherry.', 'In Tamil country, large landowners were called Vellalar.'],
      mindMapSteps: ['Iron Tools & Canals → Village Hierarchy (North & South) → Shrenis & Banking → Arikamedu Roman Trade'],
      commonPitfalls: ['Grama Bhojaka was a hereditary post, not an elected village official.'],
    },
    flashcards: [
      { id: 'fc-6-h8-1', front: 'What were craft and merchant guilds called in ancient India?', back: 'Shrenis.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h8-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which ancient coastal site in Puducherry was an Indo-Roman trade emporium where Roman amphorae were excavated?',
        options: ['Arikamedu', 'Lothal', 'Mamallapuram', 'Kaveripattinam'],
        correctOptionIndex: 0,
        answer: 'Option (A) Arikamedu',
      },
    ],
  },
  {
    id: 'c6-hist-ch9',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 9,
    title: 'Traders, Kings and Pilgrims',
    subtitle: 'Sangam Trade (Muvendar), Silk Route, Kushanas, Kanishka, Mahayana Buddhism, and Chinese Pilgrims',
    overview: 'South Indian spices (black pepper "black gold") sailed to Rome, while Central Asian rulers like the Kushanas controlled the lucrative Silk Route. Kanishka patronized Mahayana Buddhism and Chinese pilgrims traveled to Nalanda.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'Trade & The Muvendar in South India',
        bullets: [
          'South India was famous for gold, spices (especially pepper, known in the Roman empire as "black gold"), and precious stones.',
          'Muvendar: Tamil word meaning three chiefs: the Cholas, Cheras, and Pandyas (flourished ~2,300 years ago).',
          'Each chief had two power centers: one inland and one on the coast (e.g., Puhar/Kaveripattinam port of Cholas, Madurai of Pandyas).',
          'Did not collect regular taxes; demanded tributes and redistributed wealth to poets and soldiers.',
        ],
      },
      {
        title: 'The Silk Route and the Kushanas',
        bullets: [
          'Silk was invented in China ~7,000 years ago; secret guarded for centuries; overland route named the Silk Route.',
          'Kushanas (ruled Central Asia and NW India ~2,000 years ago) controlled a branch of the Silk Route, earning massive transit tolls; issued famous gold coins.',
          'Most famous Kushana ruler was Kanishka (~78 CE), who convened the 4th Buddhist Council in Kashmir.',
        ],
      },
      {
        title: 'Spread of Mahayana Buddhism & Pilgrims',
        bullets: [
          'Mahayana Buddhism introduced two new features: Statues of Buddha carved (Mathura and Taxila schools) and belief in Bodhisattvas (compassionate enlightened beings who stayed in world to help others).',
          'Spread to Central Asia, China, Korea, Japan, and Theravada Buddhism to Sri Lanka, Myanmar, Thailand.',
          'Famous Chinese Buddhist pilgrims: Fa-Xian (visited during Chandragupta II), Xuan Zang and I-Qing (studied at Nalanda University in Bihar).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Nalanda: The World’s Greatest Buddhist University',
        content: 'Xuan Zang and other Chinese pilgrims spent years studying at Nalanda in Bihar, the most famous Buddhist monastery and seat of learning of the time. Xuan Zang recorded that the teachers were men of the highest talent, rules were strict, and students had to answer difficult questions from the gatekeeper before being allowed entry. Seven or eight out of ten failed to gain admission, proving the university’s rigorous academic standards.',
        keyTakeaway: 'Nalanda was an international center of rigorous intellectual and philosophical inquiry.',
      },
    ],
    keyConcepts: [
      { term: 'Muvendar', explanation: 'A Tamil term meaning "three chiefs", referring to the rulers of the Chola, Chera, and Pandya dynasties in Sangam literature.' },
      { term: 'Bodhisattva', explanation: 'In Mahayana Buddhism, an enlightened person who postpones their own nirvana out of compassion to save other suffering beings.' },
    ],
    importantDates: [
      { date: '78 CE', event: 'Accession of King Kanishka', significance: 'Marks beginning of Shaka era and patronized Mahayana Buddhism.' },
    ],
    importantPeople: [
      { name: 'Kanishka', role: 'Kushana Emperor', contribution: 'Convened the Buddhist Council and controlled the Silk Route.' },
      { name: 'Ashvaghosha', role: 'Buddhist Poet', contribution: 'Composed the Buddhacharita biography of Buddha in Sanskrit.' },
      { name: 'Xuan Zang', role: 'Chinese Scholar-Pilgrim', contribution: 'Studied at Nalanda and translated Buddhist scriptures into Chinese.' },
    ],
    definitions: [
      { term: 'Black Gold', definition: 'The Roman term for Indian black pepper, highly prized in Mediterranean cuisine and medicine.', context: 'Roman maritime trade.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Muvendar (Cholas, Cheras, Pandyas) controlled South Indian trade in black pepper ("black gold"). The Kushanas and Kanishka controlled the Silk Route and minted gold coins. Kanishka held the Buddhist Council, encouraging Mahayana Buddhism and Bodhisattva worship. Chinese pilgrims (Fa-Xian, Xuan Zang) flocked to Nalanda.',
      goldenPoints: ['Black pepper was so valued in the Roman empire that it was called "black gold".', 'Ashvaghosha composed the Buddhacharita, the earliest Sanskrit biography of the Buddha.'],
      mindMapSteps: ['South India Trade & Muvendar → The Silk Route & Kushanas → Rise of Mahayana & Bodhisattvas → Chinese Pilgrims at Nalanda'],
      commonPitfalls: ['Theravada Buddhism became dominant in Sri Lanka and SE Asia, while Mahayana spread to China, Korea, and Japan.'],
    },
    flashcards: [
      { id: 'fc-6-h9-1', front: 'What spice from South India was referred to as "black gold" by the Romans?', back: 'Black pepper.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h9-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who composed the famous Sanskrit biography of the Buddha titled "Buddhacharita"?',
        options: ['Kalidasa', 'Ashvaghosha', 'Banabhatta', 'Harishena'],
        correctOptionIndex: 1,
        answer: 'Option (B) Ashvaghosha',
      },
    ],
  },
  {
    id: 'c6-hist-ch10',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 10,
    title: 'New Empires and Kingdoms',
    subtitle: 'Guptas, Samudragupta’s Prashasti (Allahabad Pillar), Harshavardhana, Pallavas, and Chalukyas',
    overview: 'After the Kushanas, the Gupta dynasty ushered in a golden era of literature, science, and imperial prashastis. Simultaneously, King Harshavardhana ruled Kannauj, while the Pallavas of Kanchipuram and Chalukyas of Vatapi dominated the Deccan.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'The Guptas and Samudragupta’s Prashasti',
        bullets: [
          'Prashasti: Sanskrit word meaning "in praise of". Court poets composed panegyrics praising rulers.',
          'Harishena, court poet of Samudragupta, composed famous inscription on the Ashokan pillar at Prayagraj (Allahabad).',
          'Samudragupta was described as a fierce warrior who defeated 9 rulers of Aryavarta (annexed directly), 12 rulers of Dakshinapatha (tributaries reinstated after surrender), and frontier tribal states.',
          'Chandragupta II (Vikramaditya): Overcame the Shakas; his court was adorned with poet Kalidasa and astronomer Aryabhata.',
        ],
      },
      {
        title: 'Harshavardhana and the Harshacharita',
        bullets: [
          'Ruled from Kannauj ~1,400 years ago; court poet Banabhatta wrote his biography "Harshacharita" in Sanskrit.',
          'Conquered Magadha and Bengal, but when he tried to cross the Narmada to march into the Deccan, he was stopped and defeated by Chalukya king Pulakeshin II.',
        ],
      },
      {
        title: 'Pallavas and Chalukyas of the Deccan',
        bullets: [
          'Pallavas: Capital at Kanchipuram, stretching to the Kaveri delta; constructed magnificent shore temples and rathas at Mahabalipuram.',
          'Chalukyas: Centered around Raichur Doab; capital at Vatapi (Badami); greatest king was Pulakeshin II (praised by court poet Ravikirti).',
          'Local assemblies: Sabha (assembly of brahmin landowners), Ur (village assembly of non-brahmins), and Nagaram (organization of merchants).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Four Categories of Rulers in Samudragupta’s Inscription',
        content: 'Harishena classified Samudragupta’s campaigns into four distinct political policies: (1) Rulers of Aryavarta: Nine kings uprooted and their kingdoms made part of the Gupta empire; (2) Rulers of Dakshinapatha: Twelve kings who surrendered after defeat and were permitted to rule again as tributaries; (3) Inner circle of frontier states (Assam, Coastal Bengal, Nepal): Paid tributes and obeyed royal orders; (4) Outlying rulers (descendants of Kushanas and Shakas, ruler of Sri Lanka): Submitted and offered daughters in marriage.',
        keyTakeaway: 'Gupta imperial policy balanced direct annexation in the core with indirect tribute on the periphery.',
      },
    ],
    keyConcepts: [
      { term: 'Prashasti', explanation: 'A ceremonial Sanskrit inscription composed in eulogistic praise of a king’s military conquests and virtues.' },
      { term: 'Sabha', explanation: 'A village assembly composed exclusively of brahmin landowners that functioned through sub-committees managing irrigation and temples.' },
    ],
    importantDates: [
      { date: '320 CE', event: 'Beginning of the Gupta Era', significance: 'Chandragupta I adopts title of Maharajadhiraja.' },
      { date: '606-647 CE', event: 'Reign of King Harshavardhana', significance: 'Imperial consolidation in northern India centered at Kannauj.' },
    ],
    importantPeople: [
      { name: 'Samudragupta', role: 'Gupta Emperor', contribution: 'Called the "Napoleon of India" for his vast military conquests recorded on the Allahabad pillar.' },
      { name: 'Harshavardhana', role: 'King of Thanesar & Kannauj', contribution: 'Patron of Nalanda; subject of Banabhatta’s Harshacharita.' },
      { name: 'Pulakeshin II', role: 'Chalukya King', contribution: 'Defeated Harshavardhana on the banks of the Narmada.' },
    ],
    definitions: [
      { term: 'Sandhi-vigrahika', definition: 'Minister of war and peace in the Gupta administrative administration.', context: 'Gupta bureaucracy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Harishena’s Allahabad pillar prashasti glorifies Samudragupta’s conquests across Aryavarta and Dakshinapatha. Chandragupta II patronized Kalidasa and Aryabhata. Harshavardhana ruled Kannauj but was checked by Chalukya Pulakeshin II on the Narmada. Pallavas and Chalukyas governed with local Sabhas and Urs.',
      goldenPoints: ['Harishena was the court poet of Samudragupta who composed the Allahabad Pillar inscription.', 'Pulakeshin II stopped Harshavardhana from marching across the Narmada river.'],
      mindMapSteps: ['Guptas & Samudragupta’s Prashasti → Chandragupta II & Arts → Harshavardhana & Banabhatta → Pallavas, Chalukyas & Sabhas'],
      commonPitfalls: ['Pulakeshin II defeated Harshavardhana, not the other way around.'],
    },
    flashcards: [
      { id: 'fc-6-h10-1', front: 'Which Chalukya ruler defeated King Harshavardhana on the banks of River Narmada?', back: 'Pulakeshin II.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h10-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who composed the famous Allahabad Pillar Prashasti praising the conquests of Samudragupta?',
        options: ['Banabhatta', 'Kalidasa', 'Harishena', 'Ravikirti'],
        correctOptionIndex: 2,
        answer: 'Option (C) Harishena',
      },
    ],
  },
  {
    id: 'c6-hist-ch11',
    classLevel: 6,
    subject: 'history',
    chapterNumber: 11,
    title: 'Buildings, Paintings and Books',
    subtitle: 'Iron Pillar of Mehrauli, Stupas at Sanchi, Monolithic Temples, Ajanta Murals, Epics (Silappadikaram, Ramayana), Aryabhata',
    overview: 'Ancient Indian metallurgy, stupa architecture (Sanchi), rock-cut shrines (Mahabalipuram, Ajanta), Sanskrit and Tamil epics, and mathematical breakthroughs by Aryabhata illustrate a brilliant cultural zenith.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Metallurgy and the Iron Pillar at Mehrauli',
        bullets: [
          'Iron Pillar at Mehrauli (Delhi): 7.2 m high, weighs over 3 tonnes; erected during Chandragupta II (~1,500 years ago); has not rusted despite centuries of exposure.',
        ],
      },
      {
        title: 'Stupas and Hindu Rock-Cut Temples',
        bullets: [
          'Stupas (mound): Central relic casket containing bodily remains or gems of Buddha/disciples; surrounded by circumambulatory path (pradakshina patha) and stone railings (vedika); Sanchi and Amaravati.',
          'Early Hindu Temples: Built with Garbhagriha (sanctum sanctorum where deity image was installed), Shikhara (tower above garbhagriha), and Mandapa (assembly hall).',
          'Monolithic rathas at Mahabalipuram carved out of single gigantic rocks.',
        ],
      },
      {
        title: 'Ajanta Paintings, Epics, and Aryabhata',
        bullets: [
          'Ajanta (Maharashtra): Buddhist cave monasteries painted with vibrant Jataka murals in torchlight.',
          'Tamil Epics: Silappadikaram (composed by Ilango Adigal, story of Kovalan and Kannagi) and Manimekalai (by Sattanar).',
          'Sanskrit Epics: Mahabharata (attributed to Vyasa, includes Bhagavad Gita) and Ramayana (by Valmiki).',
          'Aryabhata: Mathematician and astronomer who wrote Aryabhatiyam; stated that day and night are caused by earth’s rotation on its axis; invented accurate value of pi and formula for circle area.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Architecture of an Ancient Hindu Temple',
        content: 'Early Hindu temples (like Bhitargaon in UP and Deogarh) were designed around three essential architectural elements: (1) Garbhagriha: A small sacred room where the image of the chief deity (Vishnu, Shiva, or Durga) was installed and where priests performed rituals; (2) Shikhara: A tall spire or tower built on top of the garbhagriha to mark it as a sacred landmark; (3) Mandapa: A spacious hall in front of the sanctum where worshippers gathered for prayers.',
        keyTakeaway: 'The Garbhagriha represents the divine womb and heart of Hindu temple architecture.',
      },
    ],
    keyConcepts: [
      { term: 'Relic Casket', explanation: 'A small container placed at the center of a stupa containing bodily relics (teeth, bone, ashes) or precious stones of the Buddha or disciples.' },
      { term: 'Garbhagriha', explanation: 'The innermost sacred chamber of a Hindu temple housing the idol of the primary presiding deity.' },
    ],
    importantDates: [],
    importantPeople: [
      { name: 'Aryabhata', role: 'Astronomer & Mathematician', contribution: 'Proved Earth rotates on its axis and developed scientific explanation for eclipses.' },
      { name: 'Ilango Adigal', role: 'Tamil Poet', contribution: 'Composed the great Tamil tragic epic Silappadikaram.' },
    ],
    definitions: [
      { term: 'Pradakshina Patha', definition: 'The circular pathway around a Buddhist stupa used by devotees for clockwise devotional walking meditation.', context: 'Stupa layout.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The rust-proof Mehrauli Iron Pillar highlights metallurgy. Stupas (Sanchi) sheltered relic caskets, while temples featured garbhagrihas, shikharas, and mandapas. Ajanta caves preserve brilliant murals. Literature reached heights with Silappadikaram, Mahabharata, and Aryabhata’s astronomy.',
      goldenPoints: ['The Iron Pillar at Mehrauli was erected over 1,500 years ago during the reign of Chandragupta II.', 'Aryabhata stated that day and night are caused by the rotation of the earth on its axis.'],
      mindMapSteps: ['Iron Pillar Metallurgy → Stupas & Garbhagriha → Ajanta Murals → Epics (Silappadikaram) → Aryabhata’s Science'],
      commonPitfalls: ['The Garbhagriha is the innermost room of the temple, while the Mandapa is the front assembly hall.'],
    },
    flashcards: [
      { id: 'fc-6-h11-1', front: 'Who composed the famous Tamil epic Silappadikaram?', back: 'Ilango Adigal.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-h11-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the innermost sacred room in a Hindu temple where the deity’s idol is placed called?',
        options: ['Mandapa', 'Shikhara', 'Garbhagriha', 'Pradakshina'],
        correctOptionIndex: 2,
        answer: 'Option (C) Garbhagriha',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY: The Earth: Our Habitat
  // ==========================================
  {
    id: 'c6-geo-ch1',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 1,
    title: 'The Earth in the Solar System',
    subtitle: 'Celestial Bodies, Constellations, The Sun, Planets, Earth, Moon, Asteroids, and Meteoroids',
    overview: 'Our planet Earth is the third planet from the Sun and the only known home of life. Discover the solar family, planetary orbits, moon phases, and cosmic debris in our Milky Way galaxy.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Celestial Bodies & Constellations',
        bullets: [
          'Celestial Bodies: The Sun, Moon, stars, and all shining objects in the night sky. Stars have their own heat and light (the Sun is a star).',
          'Constellations: Recognisable patterns formed by groups of stars (e.g. Ursa Major / Great Bear, Saptarishi / Seven Sages).',
          'Pole Star: Indicates the north direction; always remains in the same position in the sky.',
        ],
      },
      {
        title: 'The Solar System & Eight Planets',
        bullets: [
          'Solar System: The Sun, eight planets, satellites, asteroids, and meteoroids.',
          'Eight planets in order from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. ("My Very Efficient Mother Just Served Us Nuts").',
          'Venus is considered "Earth’s-twin" because its size and shape are very similar to Earth.',
        ],
      },
      {
        title: 'Earth, Moon, and Asteroids',
        bullets: [
          'Earth: Third nearest planet to Sun, fifth largest; flattened at poles (shape is a Geoid = "earth-like shape"); called "Blue Planet" (2/3 surface water).',
          'Moon: Earth’s only natural satellite; diameter is 1/4th of Earth; 3,84,400 km away; takes ~27 days to orbit and rotate on its axis (only one side visible to us).',
          'Asteroid Belt: Found between the orbits of Mars and Jupiter; Meteoroids are small pieces of rocks moving around Sun.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Earth is a Unique Planet',
        content: 'Earth is the only known planet that supports life because: (1) It is at the optimal distance from the Sun—neither too hot nor too cold; (2) It has liquid water and air, essential for survival; (3) The air has life-supporting oxygen gas; (4) The atmosphere contains an ozone blanket that shields life from harmful solar ultraviolet radiation.',
        keyTakeaway: 'The precise combination of liquid water, breathable oxygen, and moderate temperature makes Earth the Blue Planet.',
      },
    ],
    keyConcepts: [
      { term: 'Geoid', explanation: 'A sphere flattened at the poles and bulging slightly at the equator, describing the exact physical shape of the Earth.' },
      { term: 'Asteroids', explanation: 'Numerous tiny rocky bodies orbiting the Sun, concentrated between the orbits of Mars and Jupiter.' },
    ],
    importantDates: [
      { date: '21 July 1969', event: 'Neil Armstrong lands on the Moon', significance: 'First human to set foot on the lunar surface.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Satellite', definition: 'A celestial or artificial body orbiting a planet or larger body.', context: 'Solar system.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Sun, 8 planets, satellites, asteroids (between Mars and Jupiter), and meteoroids form the Solar System. Earth is a geoid-shaped Blue Planet supporting life. Venus is Earth’s twin, and the Moon orbits Earth in 27 days.',
      goldenPoints: ['The asteroid belt lies between the orbits of Mars and Jupiter.', 'Earth’s true geometric shape is described as a Geoid.'],
      mindMapSteps: ['Stars & Constellations (Pole Star) → 8 Planets & Venus Twin → Earth the Blue Geoid → Moon Phases & Asteroids'],
      commonPitfalls: ['Pluto was demoted to a "dwarf planet" by the International Astronomical Union in 2006.'],
    },
    flashcards: [
      { id: 'fc-6-g1-1', front: 'Which planet is called Earth’s twin due to its similar size and shape?', back: 'Venus.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Between which two planets is the asteroid belt located?',
        options: ['Earth and Mars', 'Mars and Jupiter', 'Jupiter and Saturn', 'Mercury and Venus'],
        correctOptionIndex: 1,
        answer: 'Option (B) Mars and Jupiter',
      },
    ],
  },
  {
    id: 'c6-geo-ch2',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Globe: Latitudes and Longitudes',
    subtitle: 'Equator, Tropic of Cancer & Capricorn, Heat Zones (Torrid, Temperate, Frigid), Prime Meridian, Time Zones',
    overview: 'A globe is a true miniature model of the Earth. A grid of imaginary horizontal lines (latitudes) and vertical lines (longitudes) pinpoints any location on Earth and calculates local time across global time zones.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Parallels of Latitude and Four Important Parallels',
        bullets: [
          'Equator (0°): Divides Earth into Northern and Southern Hemispheres; latitude measures distance north or south of Equator (0° to 90° at poles).',
          'Tropic of Cancer: 23½° N in Northern Hemisphere.',
          'Tropic of Capricorn: 23½° S in Southern Hemisphere.',
          'Arctic Circle: 66½° N; Antarctic Circle: 66½° S.',
        ],
      },
      {
        title: 'Three Heat Zones of the Earth',
        bullets: [
          'Torrid Zone: Between Tropic of Cancer and Tropic of Capricorn; mid-day sun is exactly overhead at least once a year; receives maximum heat.',
          'Temperate Zones: Between Tropics and Polar Circles (23½° to 66½° in both hemispheres); sun never shines directly overhead; moderate temperatures.',
          'Frigid Zones: Beyond Arctic and Antarctic Circles (66½° to 90°); sun does not rise far above horizon; extremely cold.',
        ],
      },
      {
        title: 'Meridians of Longitude and Time Calculation',
        bullets: [
          'Prime Meridian (0° Longitude): Passes through Greenwich (Royal Observatory, London); divides Earth into Eastern and Western Hemispheres.',
          'Earth rotates 360° in 24 hours = 15° per hour = 1° every 4 minutes.',
          'Places east of Greenwich are ahead of GMT; places west are behind GMT.',
          'Indian Standard Time (IST): 82°30’ E passing through Mirzapur (UP) is +5 hours 30 minutes ahead of GMT.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why We Have Standard Time',
        content: 'Different places on different meridians have different local times. For instance, in India, there is a time difference of about 1 hour and 45 minutes between Dwarka in Gujarat and Dibrugarh in Assam. If every town set clocks to its own local noon, train timetables and flights would be chaotic. Therefore, nations select a central meridian to serve as their standard time. In India, 82°30’ E is the Standard Meridian.',
        keyTakeaway: 'Standard meridians eliminate logistical chaos across vast continental landmasses.',
      },
    ],
    keyConcepts: [
      { term: 'Torrid Zone', explanation: 'The tropical zone between 23½° N and 23½° S that receives direct overhead sunlight and maximum solar radiation.' },
      { term: 'Prime Meridian', explanation: 'The 0° meridian of longitude passing through Greenwich, England, serving as the international baseline for time calculation.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Grid', definition: 'The criss-cross network formed by parallels of latitude and meridians of longitude used to locate points on a map or globe.', context: 'Cartography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Latitudes (Equator, Tropics at 23½°, Polar Circles at 66½°) delineate the Torrid, Temperate, and Frigid heat zones. Longitudes (Prime Meridian at Greenwich 0°) determine time: 1 degree equals 4 minutes of solar rotation. India’s standard time is 82°30’ E (GMT + 5:30).',
      goldenPoints: ['The mid-day sun is overhead at least once a year in the Torrid Zone.', 'Earth rotates 1 degree of longitude every 4 minutes.'],
      mindMapSteps: ['Equator & Latitudes → 3 Heat Zones → Prime Meridian & Longitudes → Calculating Time (1° = 4 min)'],
      commonPitfalls: ['Latitudes are parallel circles that never meet; longitudes are equal semicircles that converge at the poles.'],
    },
    flashcards: [
      { id: 'fc-6-g2-1', front: 'How many minutes does Earth take to rotate through 1 degree of longitude?', back: '4 minutes (360 degrees in 24 hours).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the latitude value of the Tropic of Capricorn?',
        options: ['23½° N', '23½° S', '66½° N', '66½° S'],
        correctOptionIndex: 1,
        answer: 'Option (B) 23½° S',
      },
    ],
  },
  {
    id: 'c6-geo-ch3',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 3,
    title: 'Motions of the Earth',
    subtitle: 'Rotation (Day & Night), Revolution (Seasons), Circle of Illumination, Solstices, and Equinoxes',
    overview: 'The Earth has two basic motions: Rotation on its tilted axis causes day and night every 24 hours, while Revolution around the Sun in an elliptical orbit creates the four seasons.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Rotation & Circle of Illumination',
        bullets: [
          'Rotation: The movement of Earth on its axis once every 24 hours (Earthday); creates day and night.',
          'Axis of the Earth makes an angle of 66½° with its orbital plane.',
          'Circle of Illumination: The imaginary circle that divides day from night on the globe; does not coincide with the tilted axis.',
        ],
      },
      {
        title: 'Revolution & Leap Year',
        bullets: [
          'Revolution: Movement of Earth around Sun in an elliptical orbit; takes 365¼ days (365 days and 6 hours).',
          'Six surplus hours saved every year are added to make one extra day (24 hours) every four years in February (29 days = Leap Year of 366 days).',
        ],
      },
      {
        title: 'Solstices and Equinoxes',
        bullets: [
          'Summer Solstice (21 June): Northern Hemisphere tilted towards Sun; Tropic of Cancer receives direct rays; longest day and shortest night in Northern Hemisphere.',
          'Winter Solstice (22 December): Southern Hemisphere tilted towards Sun; Tropic of Capricorn receives direct rays; summer in Southern Hemisphere (Christmas celebrated in summer in Australia).',
          'Equinox (21 March & 23 September): Direct rays of Sun fall on Equator; entire Earth experiences equal days and equal nights.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Seasons Occur',
        content: 'Seasons change because of two combined factors: (1) The revolution of the Earth around the Sun, and (2) The fixed tilt of the Earth’s axis at 66½° to its orbital plane. As Earth orbits the Sun, one hemisphere tilts toward the Sun (receiving more direct rays and longer daylight hours = Summer), while the other tilts away (receiving slanted rays and shorter days = Winter). Without axial tilt, there would be no seasons on Earth.',
        keyTakeaway: 'The 66½° orbital tilt drives the annual rhythm of global seasons.',
      },
    ],
    keyConcepts: [
      { term: 'Circle of Illumination', explanation: 'The circular boundary line dividing the illuminated day side of Earth from the dark night side.' },
      { term: 'Equinox', explanation: 'The two days of the year (21 March and 23 September) when sunlight falls directly on the Equator and day and night are equal worldwide.' },
    ],
    importantDates: [
      { date: '21 June', event: 'Summer Solstice', significance: 'Longest day in the Northern Hemisphere.' },
      { date: '22 December', event: 'Winter Solstice', significance: 'Longest day in the Southern Hemisphere.' },
      { date: '21 March & 23 Sept', event: 'Equinoxes', significance: 'Equal day and night globally.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Leap Year', definition: 'A calendar year with 366 days instead of 365, occurring every 4 years to absorb the 6 extra orbital hours.', context: 'Calendars.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Rotation (24 hours) produces day and night separated by the Circle of Illumination. Revolution (365¼ days) along with the 66½° orbital tilt produces seasons: Summer Solstice (21 June), Winter Solstice (22 Dec), and Equinoxes (21 March and 23 Sept).',
      goldenPoints: ['Christmas is celebrated during summer season in Australia.', 'On 21 March and 23 September (Equinox), days and nights are of equal length everywhere.'],
      mindMapSteps: ['Rotation & Circle of Illumination → Revolution & Leap Year → Summer & Winter Solstices → Equinoxes'],
      commonPitfalls: ['The Circle of Illumination does not coincide with Earth’s tilted rotational axis.'],
    },
    flashcards: [
      { id: 'fc-6-g3-1', front: 'On which date does the Summer Solstice occur in the Northern Hemisphere?', back: '21 June (longest day and shortest night).', category: 'date' },
    ],
    questions: [
      {
        id: 'c6-g3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'On which two days do the direct rays of the Sun fall vertically on the Equator resulting in equal days and nights everywhere?',
        options: ['21 June & 22 Dec', '21 March & 23 Sept', '22 Dec & 21 March', '21 June & 23 Sept'],
        correctOptionIndex: 1,
        answer: 'Option (B) 21 March & 23 September (Equinoxes)',
      },
    ],
  },
  {
    id: 'c6-geo-ch4',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 4,
    title: 'Maps',
    subtitle: 'Types of Maps (Physical, Political, Thematic), Three Components (Distance, Direction, Symbols)',
    overview: 'A map is a representation of the Earth’s surface drawn on a flat surface according to scale. Mastering distance (scale), direction (cardinal points), and conventional symbols transforms maps into essential navigation tools.',
    estimatedReadTime: '12 min read',
    shortNotes: [
      {
        title: 'Three Types of Maps',
        bullets: [
          'Physical (Relief) Maps: Show natural features of the Earth: mountains, plateaus, plains, rivers, oceans.',
          'Political Maps: Show cities, towns, villages, states, and countries with international and provincial boundaries.',
          'Thematic Maps: Focus on specific themes: road maps, rainfall maps, forest distribution, minerals.',
        ],
      },
      {
        title: 'Three Components of Maps',
        bullets: [
          '1. Distance & Scale: Ratio between actual distance on ground and distance shown on map (Small scale for continents, Large scale for village guide maps).',
          '2. Direction: Four cardinal points (North, South, East, West) and four intermediate directions (NE, SE, SW, NW); found using a magnetic compass.',
          '3. Symbols & Colours: International conventional symbols (Blue for water, Brown for mountains, Yellow for plateau, Green for plains).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Sketch vs Plan',
        content: 'A sketch is a drawing mainly based on memory and spot observation without scale, used to guide someone to a location. A plan, on the other hand, is a precise drawing of a small area drawn to a large scale (e.g. the length and breadth of rooms in a building architect’s blueprint).',
        keyTakeaway: 'A sketch is scale-free and informal; a plan is mathematically exact at large scale.',
      },
    ],
    keyConcepts: [
      { term: 'Scale', explanation: 'The ratio between the actual ground distance and the corresponding distance represented on a map.' },
      { term: 'Cardinal Points', explanation: 'The four principal compass directions: North, South, East, and West.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Conventional Symbols', definition: 'Standardized universal signs, letters, shades, and colors agreed internationally to represent features on maps.', context: 'Cartography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Maps are classified into Physical, Political, and Thematic. Every map relies on three components: Distance (Scale), Direction (Cardinal points and Compass), and Conventional Symbols (colors: blue for water, brown for hills, green for vegetation).',
      goldenPoints: ['Blue color on maps conventionally represents water bodies.', 'A compass needle always points toward the North-South direction.'],
      mindMapSteps: ['Physical, Political, Thematic Maps → Distance & Scale → Direction & Cardinal Points → Symbols & Colors'],
      commonPitfalls: ['Large scale maps show small areas in great detail, whereas small scale maps show large continents with less detail.'],
    },
    flashcards: [
      { id: 'fc-6-g4-1', front: 'What color is conventionally used to represent water bodies on maps?', back: 'Blue color.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-g4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which type of map shows natural features such as mountains, rivers, and plateaus?',
        options: ['Political map', 'Thematic map', 'Physical map', 'Cadastral map'],
        correctOptionIndex: 2,
        answer: 'Option (C) Physical map',
      },
    ],
  },
  {
    id: 'c6-geo-ch5',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 5,
    title: 'Major Domains of the Earth',
    subtitle: 'Lithosphere (7 Continents), Hydrosphere (5 Oceans), Atmosphere (5 Layers), and Biosphere',
    overview: 'The Earth is the only planet with a life-supporting biosphere created by the intersection of three physical domains: the solid rocky Lithosphere, the vast water Hydrosphere, and the gaseous Atmosphere.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Lithosphere and Seven Continents',
        bullets: [
          'Lithosphere: Solid portion of Earth consisting of crustal rocks and thin soil layers.',
          'Highest peak is Mt. Everest (8,848 m); deepest point is Mariana Trench in Pacific (11,022 m).',
          'Seven Continents (largest to smallest): Asia (largest, 1/3 land area, Tropic of Cancer passes), Africa (Equator, Tropics pass; Nile river, Sahara desert), North America (joined to South America via Isthmus of Panama), South America (Andes mountain chain, Amazon river), Antarctica (South Pole, frozen ice cap, research stations Maitri & Bharati), Europe, Australia (island continent).',
        ],
      },
      {
        title: 'Hydrosphere and Five Oceans',
        bullets: [
          '71% of Earth is water, but 97% is saline ocean water; only ~2.8% is freshwater (locked in glaciers/groundwater).',
          'Five Oceans: Pacific (largest, circular, Mariana Trench), Atlantic (‘S’ shaped, highly indented coast ideal for natural harbors/trade), Indian (only ocean named after a country), Southern, Arctic.',
        ],
      },
      {
        title: 'Atmosphere & Biosphere',
        bullets: [
          'Atmosphere extends up to 1,600 km; 78% Nitrogen, 21% Oxygen, 1% Carbon dioxide/Argon.',
          'Five atmospheric layers: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.',
          'Biosphere: Narrow contact zone of land, water, and air where all plant and animal life exists.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Isthmus vs Strait',
        content: 'An Isthmus is a narrow strip of land joining two large landmasses (e.g. Isthmus of Panama joining North and South America). A Strait, by contrast, is a narrow passage of water connecting two large water bodies like seas and oceans (e.g. Palk Strait between India and Sri Lanka connecting the Bay of Bengal to the Gulf of Mannar).',
        keyTakeaway: 'An isthmus connects two lands; a strait connects two seas.',
      },
    ],
    keyConcepts: [
      { term: 'Biosphere', explanation: 'The narrow life-supporting zone on Earth where the lithosphere, hydrosphere, and atmosphere interact.' },
      { term: 'Isthmus', explanation: 'A narrow strip of land with water on both sides that connects two larger land areas (e.g., Panama).' },
    ],
    importantDates: [
      { date: '1953', event: 'First ascent of Mt. Everest', significance: 'Edmund Hillary and Tenzing Norgay reach summit (8,848 m).' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Strait', definition: 'A narrow navigable channel of water that connects two larger bodies of water.', context: 'Maritime geography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Earth has four domains: Lithosphere (7 continents, Mt. Everest & Mariana Trench), Hydrosphere (5 oceans: Pacific, Atlantic S-shaped, Indian), Atmosphere (78% N2, 21% O2 in 5 layers), and the life-supporting Biosphere.',
      goldenPoints: ['Mariana Trench in the Pacific Ocean is the deepest place on Earth (11,022 metres).', 'Atlantic Ocean has an ‘S’ shape with highly indented commercial coastlines.'],
      mindMapSteps: ['Lithosphere (7 Continents) → Hydrosphere (5 Oceans) → Atmosphere (Gases & 5 Layers) → Biosphere Life Zone'],
      commonPitfalls: ['Do not confuse an isthmus (strip of land) with a strait (strip of water).'],
    },
    flashcards: [
      { id: 'fc-6-g5-1', front: 'What is the deepest known trench on Earth?', back: 'Mariana Trench in the Pacific Ocean (11,022 metres deep).', category: 'location' },
    ],
    questions: [
      {
        id: 'c6-g5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which continent is completely surrounded by water and called an "Island Continent"?',
        options: ['Antarctica', 'Australia', 'Europe', 'South America'],
        correctOptionIndex: 1,
        answer: 'Option (B) Australia',
      },
    ],
  },
  {
    id: 'c6-geo-ch6',
    classLevel: 6,
    subject: 'geography',
    chapterNumber: 6,
    title: 'Our Country - India',
    subtitle: 'Locational Setting, 28 States & 8 UTs, Physical Divisions (Himalayas, Northern Plains, Peninsular Plateau, Coasts, Islands)',
    overview: 'India is a vast country of immense geographical diversity, extending from the snow-capped Himalayas in the north to the Indian Ocean in the south, flanked by the Arabian Sea and Bay of Bengal.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Location & Extent of India',
        bullets: [
          'Area: 3.28 million sq km; Kashmir to Kanyakumari is ~3,200 km; Arunachal Pradesh to Kuchchh is ~2,900 km.',
          'Latitudes: 8°4’ N to 37°6’ N; Longitudes: 68°7’ E to 97°25’ E; Tropic of Cancer (23°30’ N) passes through middle.',
          'Seven land neighbours: Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, Myanmar; sea neighbours Sri Lanka and Maldives.',
        ],
      },
      {
        title: 'Major Physical Divisions of India',
        bullets: [
          'The Himalayas ("abode of snow"): Great Himalaya (Himadri), Middle Himalaya (Himachal), Outer Himalaya (Shiwalik).',
          'Northern Indian Plains: South of Himalayas, level and flat, formed by alluvium deposited by Indus, Ganga, Brahmaputra.',
          'Great Indian Desert: Dry, hot, sandy stretch in western India with sparse vegetation.',
          'Peninsular Plateau: Triangular shape south of northern plains; rich in coal and iron; surrounded by Western Ghats (continuous) and Eastern Ghats (broken).',
          'Islands: Lakshadweep (coral islands in Arabian Sea) and Andaman & Nicobar (volcanic peaks in Bay of Bengal).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Coral Islands: Lakshadweep',
        content: 'Corals are the hard calcium skeletons of tiny marine polyps. When living polyps die, their hard skeletons remain. Other polyps grow on top of the hard mass, growing higher and higher over centuries to form coral reefs and coral islands. Lakshadweep in the Arabian Sea off the coast of Kerala is a famous archipelago of coral islands.',
        keyTakeaway: 'Lakshadweep islands are biogenic landforms created entirely by coral polyps.',
      },
    ],
    keyConcepts: [
      { term: 'Alluvial Deposits', explanation: 'Very fine silt and clay soils brought by perennial river systems and deposited in river basins and flood plains.' },
      { term: 'Delta', explanation: 'A triangular deposit of sediment at the mouth of a river where it enters the sea (e.g. Sundarbans Delta).' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Peninsula', definition: 'A piece of land surrounded by water on three sides (e.g., the Indian Peninsula).', context: 'Physical geography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'India covers 3.28 million sq km with 28 states and 8 UTs. Physiography includes the Himalayas (Himadri, Himachal, Shiwalik), fertile Northern Plains, Peninsular Plateau with Western/Eastern Ghats, Thar desert, and Lakshadweep (coral) / Andaman-Nicobar islands.',
      goldenPoints: ['Sundarbans is the world’s largest and fastest-growing mangrove delta.', 'Lakshadweep islands are coral islands located in the Arabian Sea.'],
      mindMapSteps: ['Location & Neighbours → Himalayan Ranges → Northern River Plains → Peninsular Plateau & Ghats → Desert, Coasts & Islands'],
      commonPitfalls: ['Western Ghats are continuous and higher, whereas Eastern Ghats are broken and discontinuous.'],
    },
    flashcards: [
      { id: 'fc-6-g6-1', front: 'What type of islands are the Lakshadweep islands in the Arabian Sea?', back: 'Coral islands formed by the calcified skeletons of marine polyps.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-g6-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which is the oldest mountain range in India?',
        options: ['Himalayas', 'Western Ghats', 'Aravalli Hills', 'Vindhyas'],
        correctOptionIndex: 2,
        answer: 'Option (C) Aravalli Hills',
      },
    ],
  },

  // ==========================================
  // CIVICS: Social and Political Life - I
  // ==========================================
  {
    id: 'c6-civ-ch1',
    classLevel: 6,
    subject: 'civics',
    chapterNumber: 1,
    title: 'Understanding Diversity',
    subtitle: 'Unity in Diversity, Case Studies: Ladakh (Desert Cold) vs Kerala (Spice Coast)',
    overview: 'Diversity means recognizing and celebrating differences in regional backgrounds, languages, religions, and traditions. The contrasting case studies of cold mountain Ladakh and tropical coastal Kerala demonstrate how geography and history shape Indian culture.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'What is Diversity?',
        bullets: [
          'People look different, speak different languages, eat different foods, celebrate different festivals, and follow different religions.',
          'Diversity enriches life by introducing different stories, cuisines, and cultural viewpoints.',
        ],
      },
      {
        title: 'Comparison: Ladakh vs Kerala',
        bullets: [
          'Ladakh: Cold desert in Jammu & Kashmir (now UT); very little agriculture; people rear pashmina goats to produce valuable pashmina wool; drink yak milk, eat cheese and meat; Buddhism and Islam; Tibetan national epic Kesar Saga sung by both.',
          'Kerala: Coastal state in southwest India; surrounded by sea and hills; famous for spices (pepper, cloves, cardamoms) attracting Jewish, Arab, and European traders; St. Thomas brought Christianity; fishing nets called cheena-vala and frying pans called cheenachatti; Onam boat race.',
        ],
      },
      {
        title: 'Unity in Diversity',
        bullets: [
          'Term coined by Jawaharlal Nehru in his book "Discovery of India".',
          'During India’s freedom struggle, people of all religions, regions, and castes united against British colonial rule.',
          'Jallianwala Bagh massacre song was sung by both Hindus and Muslims honoring shared sacrifices.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Both Ladakh and Kerala Attracted Similar Traders',
        content: 'Though Ladakh is a high-altitude cold desert and Kerala is a tropical coastal paradise, both experienced similar historical cultural influences. Arab and Chinese traders influenced both regions: in Kerala, Chinese fishing nets (cheena-vala) and utensils (cheenachatti) took root, while Ladakh became known as "Little Tibet" through Chinese Central Asian silk caravans. Historical trade routes intertwined diverse foreign influences with regional Indian roots.',
        keyTakeaway: 'Geography determines the products (wool vs spices), but history binds communities together.',
      },
    ],
    keyConcepts: [
      { term: 'Unity in Diversity', explanation: 'The concept coined by Nehru signifying that India’s strength lies in its ability to embrace pluralistic regional and cultural differences.' },
      { term: 'Pashmina Wool', explanation: 'Extremely fine, warm wool collected from mountain goats in Ladakh, woven into costly Kashmiri shawls.' },
    ],
    importantDates: [],
    importantPeople: [
      { name: 'Jawaharlal Nehru', role: 'First Prime Minister of India', contribution: 'Coined the famous phrase "Unity in Diversity" in "The Discovery of India".' },
    ],
    definitions: [
      { term: 'Cheena-vala', definition: 'Chinese-style fishing nets used by coastal fishermen in Kerala, reflecting ancient maritime links with China.', context: 'Cultural syncretism.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Diversity reflects regional, linguistic, and cultural richness. Ladakh (pashmina wool, cold desert, Kesar Saga) contrasts with Kerala (spices, fishing nets, Onam). Both regions absorbed Arab and Chinese influences. Nehru articulated India’s collective resilience as "Unity in Diversity".',
      goldenPoints: ['Jawaharlal Nehru coined the phrase "Unity in Diversity".', 'Cheena-vala are traditional fishing nets used in Kerala of Chinese origin.'],
      mindMapSteps: ['Meaning of Diversity → Ladakh Case Study → Kerala Case Study → Freedom Struggle & Unity in Diversity'],
      commonPitfalls: ['Diversity is not inequality; diversity refers to cultural/regional differences, while inequality refers to unequal access to resources.'],
    },
    flashcards: [
      { id: 'fc-6-c1-1', front: 'Who coined the phrase "Unity in Diversity" to describe India?', back: 'Pt. Jawaharlal Nehru in his book "The Discovery of India".', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-c1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which wool obtained from goats in Ladakh is used to weave famous, expensive Kashmiri shawls?',
        options: ['Shahtoosh', 'Pashmina', 'Angora', 'Merino'],
        correctOptionIndex: 1,
        answer: 'Option (B) Pashmina',
      },
    ],
  },
  {
    id: 'c6-civ-ch2',
    classLevel: 6,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Diversity and Discrimination',
    subtitle: 'Prejudice, Stereotypes, Caste System, Dr. B.R. Ambedkar’s Experience, and Constitutional Equality',
    overview: 'When differences are met with bias, prejudice and stereotypes emerge, leading to discrimination and untouchability. Dr. B.R. Ambedkar fought for Dalit rights, ensuring our Constitution guarantees equality before law.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Prejudice and Stereotypes',
        bullets: [
          'Prejudice: Judging other people negatively or seeing them as inferior without knowing them.',
          'Stereotype: Fixing people into one rigid image (e.g., "boys don’t cry", "girls are emotional", "disabled people are helpless").',
          'Stereotypes prevent us from seeing individuals with their own unique talents and qualities.',
        ],
      },
      {
        title: 'Discrimination & The Caste System',
        bullets: [
          'Discrimination happens when people act on prejudices and treat others unfavorably.',
          'Caste system classified occupations into a hierarchical ladder: "Untouchables" (Dalits) forced into menial jobs and barred from temples, village wells, and classrooms.',
          'Dr. B.R. Ambedkar experienced caste humiliation at age 9 at Koregaon station when station master refused help on learning his caste.',
        ],
      },
      {
        title: 'Striving for Equality in the Constitution',
        bullets: [
          'Preamble and Fundamental Rights declare all citizens equal before law.',
          'Untouchability abolished by law (Article 17).',
          'People are free to choose their occupation and practice any religion without state discrimination.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Dr. Ambedkar’s Early Encounter with Discrimination',
        content: 'In 1901, nine-year-old Bhimrao Ambedkar and his brothers traveled to Koregaon in Maharashtra to meet their father. They waited for hours at the railway station. When the station master politely asked who they were, young Bhimrao innocently replied that they were Mahars (an untouchable community). The station master stood stunned in sudden disgust and walked away. Even bullock-cart drivers refused to carry them for double fare, fearing contamination. This early experience made Ambedkar dedicate his life to destroying caste oppression.',
        keyTakeaway: 'Prejudice dehumanizes individuals and creates artificial barriers to dignity.',
      },
    ],
    keyConcepts: [
      { term: 'Stereotype', explanation: 'A widely held but fixed and oversimplified image or idea of a particular type of person or group.' },
      { term: 'Dalit', explanation: 'A term meaning "broken" preferred by members of Scheduled Castes to describe their social and historical oppression.' },
    ],
    importantDates: [],
    importantPeople: [
      { name: 'Dr. B.R. Ambedkar', role: 'Father of Indian Constitution', contribution: 'Fought for Dalit rights and drafted the egalitarian Indian Constitution.' },
    ],
    definitions: [
      { term: 'Prejudice', definition: 'A preconceived opinion or judgment that is not based on reason or actual experience.', context: 'Social psychology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Prejudice and stereotypes foster discrimination. Caste hierarchy treated Dalits as untouchables. Dr. B.R. Ambedkar fought against caste indignity. The Indian Constitution abolished untouchability and guarantees equality, secularism, and freedom of occupation.',
      goldenPoints: ['Dalit is a self-chosen term meaning "broken".', 'Article 17 of the Constitution abolished untouchability in all forms.'],
      mindMapSteps: ['Prejudice & Stereotype Definitions → Caste Hierarchy & Untouchability → Ambedkar’s Koregaon Experience → Constitutional Guarantees'],
      commonPitfalls: ['Prejudice is an internal attitude, while discrimination is an overt action based on prejudice.'],
    },
    flashcards: [
      { id: 'fc-6-c2-1', front: 'What does the term "Dalit" literally mean?', back: '"Broken", referring to communities historically oppressed by the caste system.', category: 'definition' },
    ],
    questions: [
      {
        id: 'c6-c2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under which article of the Indian Constitution was the practice of untouchability abolished?',
        options: ['Article 14', 'Article 17', 'Article 21', 'Article 25'],
        correctOptionIndex: 1,
        answer: 'Option (B) Article 17',
      },
    ],
  },
  {
    id: 'c6-civ-ch3',
    classLevel: 6,
    subject: 'civics',
    chapterNumber: 3,
    title: 'What is Government?',
    subtitle: 'Functions of Government, Levels (Local, State, National), Laws, Monarchy vs Democracy, Suffrage Movement',
    overview: 'Every country needs a government to make decisions, maintain law and order, protect borders, and provide public welfare. Explore the three levels of government and how the women’s suffrage movement secured voting rights.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'What Does a Government Do?',
        bullets: [
          'Makes decisions on infrastructure: building roads, schools, railways, water supply.',
          'Maintains law and order and protects national borders.',
          'Organizes disaster relief during earthquakes, floods, and tsunamis.',
          'Enforces laws: court system resolves disputes and punishes offenders.',
        ],
      },
      {
        title: 'Three Levels of Government',
        bullets: [
          '1. Local Level: Village, town, or locality (Gram Panchayat, Municipal Corporation).',
          '2. State Level: Covers an entire state (e.g. Haryana, Assam government).',
          '3. National Level: Central government governing the entire country from New Delhi.',
        ],
      },
      {
        title: 'Forms of Government & Women’s Suffrage',
        bullets: [
          'Democratic Government: Rulers elected by citizens; government accountable to people.',
          'Monarchy: King/Queen has decision power; not accountable to citizens.',
          'Universal Adult Franchise: All adult citizens have right to vote without discrimination.',
          'Women’s Suffrage Movement: Women in UK and USA fought courageously for voting rights; American women won vote in 1920, British women in 1928.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Women’s Suffrage Movement',
        content: 'Nowhere in the world have governments willingly shared power with ordinary citizens. In Europe and the USA, women and the poor had to struggle to participate in government. During World War I, when men were off fighting, women were called upon to do work previously considered men’s work. Seeing women manage factories and public offices disproved male stereotypes. Women chained themselves to railings, went on hunger strikes, and held rallies until American women won voting rights in 1920 and British women in 1928.',
        keyTakeaway: 'Voting rights were won through persistent, courageous civil struggle.',
      },
    ],
    keyConcepts: [
      { term: 'Universal Adult Franchise', explanation: 'The democratic principle granting every adult citizen (18+ years in India) the right to vote regardless of gender, wealth, or caste.' },
      { term: 'Suffrage', explanation: 'The right to vote in political elections.' },
    ],
    importantDates: [
      { date: '1920', event: 'Women granted voting rights in USA', significance: '19th Amendment passed.' },
      { date: '1928', event: 'Women granted equal voting rights in UK', significance: 'Representation of the People Act.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Monarchy', definition: 'A form of government with a hereditary monarch (king or queen) as the head of state.', context: 'Political systems.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Government maintains law, borders, and public services across three levels: Local, State, and National. Democracies derive authority from Universal Adult Franchise, whereas monarchies are hereditary. Women won voting rights through the hard-fought Suffrage Movement.',
      goldenPoints: ['Universal Adult Franchise gives every adult citizen the right to vote.', 'American women won the right to vote in 1920; British women in 1928.'],
      mindMapSteps: ['Roles of Government → 3 Levels (Local, State, National) → Democracy vs Monarchy → Women’s Suffrage Movement'],
      commonPitfalls: ['In ancient Athens or early America, only property-owning men could vote; universal franchise is a modern achievement.'],
    },
    flashcards: [
      { id: 'fc-6-c3-1', front: 'In which year did women in the United States secure the right to vote?', back: '1920 (via the 19th Constitutional Amendment).', category: 'date' },
    ],
    questions: [
      {
        id: 'c6-c3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the system where all adult citizens have the right to vote called?',
        options: ['Monarchy', 'Universal Adult Franchise', 'Aristocracy', 'Limited Suffrage'],
        correctOptionIndex: 1,
        answer: 'Option (B) Universal Adult Franchise',
      },
    ],
  },
  {
    id: 'c6-civ-ch4',
    classLevel: 6,
    subject: 'civics',
    chapterNumber: 4,
    title: 'Panchayati Raj',
    subtitle: 'Gram Sabha, Gram Panchayat, Sarpanch, Block Level (Panchayat Samiti), and Zila Parishad',
    overview: 'Panchayati Raj is the foundation of grassroots local self-government in rural India. Through the open democratic forum of the Gram Sabha, villagers question elected Panchs, approve welfare budgets, and solve village water issues.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Gram Sabha vs Gram Panchayat',
        bullets: [
          'Gram Sabha: A general body meeting of all adults (18+ years) living in the village area; approves village development plans, monitors expenditures, and prevents corruption.',
          'Gram Panchayat: Executive body of elected representatives (Ward Panchs and Sarpanch/Panchayat President) elected for 5 years.',
          'Panchayat Secretary: Government-appointed official (not elected) who calls meetings and keeps records of proceedings.',
        ],
      },
      {
        title: 'Three Tiers of Panchayati Raj',
        bullets: [
          '1. Village Level: Gram Panchayat.',
          '2. Block Level: Janpad Panchayat or Panchayat Samiti (groups several Gram Panchayats).',
          '3. District Level: Zila Parishad (makes developmental plans for entire district, distributes state funds).',
        ],
      },
      {
        title: 'Sources of Funds for Gram Panchayat',
        bullets: [
          'Collection of taxes on houses, market sites, and village fairs.',
          'Government scheme funds received through Zila Parishad and Panchayat Samiti.',
          'Donations for community works.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Gram Sabha is Crucial for Village Democracy',
        content: 'The Gram Sabha is the key factor in making the Gram Panchayat play its role and be responsible. It is the place where all plans for the work of the Gram Panchayat are placed before the people. The Gram Sabha prevents the Panchayat from misusing village funds or favoring particular individuals. It keeps an eye on the elected representatives and makes them accountable to the people who elected them.',
        keyTakeaway: 'The Gram Sabha is direct participatory democracy in action.',
      },
    ],
    keyConcepts: [
      { term: 'Gram Sabha', explanation: 'The general assembly of all registered adult voters (18+) in a village that oversees the elected Gram Panchayat.' },
      { term: 'Sarpanch', explanation: 'The elected village council president who heads the Gram Panchayat.' },
    ],
    importantDates: [
      { date: '1992', event: '73rd Constitutional Amendment Act', significance: 'Gave constitutional status and 3-tier structure to Panchayati Raj.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Panchayat Secretary', definition: 'A state civil servant appointed by the government to maintain records and administer Gram Sabha meetings.', context: 'Rural administration.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Panchayati Raj operates in 3 tiers: Gram Panchayat (village), Panchayat Samiti (block), and Zila Parishad (district). The Gram Sabha holds elected Ward Panchs and Sarpanches accountable. The Panchayat Secretary is an appointed government officer.',
      goldenPoints: ['The Gram Sabha is direct democracy where all adult villagers participate.', 'Panchayat Secretary is appointed by the government, not elected by villagers.'],
      mindMapSteps: ['Gram Sabha (All Voters) → Gram Panchayat (Ward Panchs & Sarpanch) → 3 Tiers (Village, Block, District) → Funding Sources'],
      commonPitfalls: ['Panchayat members are elected, but the Panchayat Secretary is a government-appointed civil servant.'],
    },
    flashcards: [
      { id: 'fc-6-c4-1', front: 'Who is eligible to be a member of the Gram Sabha in a village?', back: 'Any adult resident aged 18 years or older who is registered on the electoral roll.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-c4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who calls the meetings of the Gram Sabha and Gram Panchayat and keeps records of proceedings?',
        options: ['Sarpanch', 'Ward Panch', 'Panchayat Secretary', 'District Collector'],
        correctOptionIndex: 2,
        answer: 'Option (C) Panchayat Secretary (appointed by the government)',
      },
    ],
  },
  {
    id: 'c6-civ-ch5',
    classLevel: 6,
    subject: 'civics',
    chapterNumber: 5,
    title: 'Rural Administration',
    subtitle: 'Police Station (SHO), Land Disputes, Patwari (Lekhpal), Tehsildar, and Hindu Succession Amendment Act (2005)',
    overview: 'With over 6 lakh villages in India, maintaining law, resolving land boundary disputes, and updating land records is handled by the Police (SHO), the Patwari, and revenue officers like Tehsildars under progressive laws like HSAA 2005.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Role of the Police & FIR',
        bullets: [
          'Every police station has an area that comes under its control.',
          'Victims must register complaints at their designated local station; Station House Officer (SHO) writes the First Information Report (FIR).',
        ],
      },
      {
        title: 'Measuring Land and Maintaining Records: The Patwari',
        bullets: [
          'Patwari (also called Lekhpal, Kanungo, or Village Officer): Measures agricultural fields, maintains Khasra register and village boundary maps.',
          'Organizes collection of land revenue from farmers and provides information to the government about crops grown.',
        ],
      },
      {
        title: 'Tehsildar & Hindu Succession Amendment Act (2005)',
        bullets: [
          'Districts are subdivided into tehsils or talukas; District Collector heads the district, assisted by Tehsildars (Revenue Officers) who supervise Patwaris and hear land disputes.',
          'Hindu Succession Amendment Act (2005): Previously, only sons inherited ancestral agricultural land. Under the new law, sons, daughters, and mothers get an equal share in the family land.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Hindu Succession Amendment Act (2005) is Historic',
        content: 'Until 2005, Hindu women were denied property rights in agricultural land. When a father died, his land was divided exclusively among his sons. The Hindu Succession Amendment Act of 2005 abolished this gender discrimination across all states and Union Territories. Daughters, sons, and mothers are now legally recognized as equal co-heirs. This allows widowed mothers and unmarried or divorced daughters economic security and independence.',
        keyTakeaway: 'HSAA 2005 established gender equality in ancestral land inheritance.',
      },
    ],
    keyConcepts: [
      { term: 'Khasra Record', explanation: 'An official land register maintained by the Patwari recording plot numbers, field boundaries, crop details, and owner names.' },
      { term: 'Patwari', explanation: 'A village administrative official responsible for surveying agricultural land, maintaining ownership registers, and collecting land revenue.' },
    ],
    importantDates: [
      { date: '2005', event: 'Hindu Succession Amendment Act passed', significance: 'Gave daughters equal shares in ancestral property.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Tehsildar', definition: 'A revenue administrative officer in charge of a sub-district (tehsil) who supervises Patwaris and resolves land disputes.', context: 'District revenue.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Rural law and order is maintained by the Police Station (SHO). Patwaris maintain Khasra land registers and collect land taxes under the supervision of Tehsildars. The Hindu Succession Amendment Act (2005) granted women equal inheritance rights in family agricultural land.',
      goldenPoints: ['Patwari maintains the Khasra land and crop records of villages.', 'Hindu Succession Amendment Act 2005 gave women equal share in ancestral land.'],
      mindMapSteps: ['Police & FIR → Patwari’s Land Records (Khasra) → Tehsildar Supervision → HSAA 2005 Women’s Rights'],
      commonPitfalls: ['Patwaris do not resolve legal land ownership disputes in court; that power rests with Tehsildars and civil courts.'],
    },
    flashcards: [
      { id: 'fc-6-c5-1', front: 'What revolutionary change did the Hindu Succession Amendment Act (2005) bring for women?', back: 'It gave daughters, sons, and mothers an equal share in ancestral agricultural land.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c6-c5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who maintains the Khasra land records and measures agricultural fields in rural areas?',
        options: ['Sarpanch', 'Patwari (Lekhpal)', 'SHO', 'District Collector'],
        correctOptionIndex: 1,
        answer: 'Option (B) Patwari (Lekhpal)',
      },
    ],
  },
];

export const CHAPTERS_CLASS_6: Chapter[] = RAW_CHAPTERS_CLASS_6.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_6[ch.id];
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

