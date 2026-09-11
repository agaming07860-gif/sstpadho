import { Chapter } from '../types/sst';
import { FULL_NOTES_CLASS_12 } from './fullNotesClass12';

const RAW_CHAPTERS_CLASS_12: Chapter[] = [
  // ==========================================
  // HISTORY: Themes in Indian History
  // ==========================================
  {
    id: 'c12-hist-ch1',
    classLevel: 12,
    subject: 'history',
    chapterNumber: 1,
    title: 'Bricks, Beads and Bones',
    subtitle: 'The Harappan Civilisation (c. 2600-1900 BCE): Mohenjodaro, Citadel & Lower Town, Great Bath, Drainage, Seals, Decline',
    overview: 'The Mature Harappan Civilization flourished along the Indus valley over 4,500 years ago. Discover Mohenjodaro’s planned grid architecture, the Great Bath, underground drainage, bead-making at Chanhudaro, the undeciphered Harappan script, and theories explaining its collapse.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Settlement Layout: Citadel and Lower Town',
        bullets: [
          'Dual settlement division: (1) Citadel: Built on raised mud-brick platforms in the west; smaller area, fortified with walls; contained monumental public structures like the Great Bath and the Granary (Warehouse); (2) Lower Town: Much larger area in the east; residential quarters arranged along a strict gridiron pattern where streets intersected at right angles.',
          'Standardized baked bricks with a consistent ratio of 1:2:4 (thickness:width:length) used across all Harappan sites from Gujarat to Punjab.',
        ],
      },
      {
        title: 'The Great Bath and Advanced Drainage System',
        bullets: [
          'The Great Bath (Mohenjodaro): Rectangular tank in a courtyard surrounded by corridors; steps lead down from north and south; made watertight with gypsum mortar; meant for ritual purification bathing.',
          'Drainage System: Street drains were laid out first and houses built along them; household wastewater flowed into street drains covered with loose bricks or limestone slabs for periodic cleaning; drains had soak pits to collect solid silt.',
        ],
      },
      {
        title: 'Craft Production, Trade, and the Enigmatic Script',
        bullets: [
          'Chanhudaro: A tiny 7-hectare settlement dedicated entirely to craft production (bead-making, shell-cutting, metalworking, seal-making, weight-making).',
          'Harappan Script: Pictographic script written from right to left (evidenced by wider spacing on the right and cramping on the left); contains 375 to 400 signs; remains undeciphered.',
          'Trade: Imported copper from Khetri (Rajasthan) and Oman (Magan); lapis lazuli from Shortughai (Afghanistan); carnelian from Bharuch (Gujarat); Mesopotamian texts refer to Harappa as "Meluhha", a land of seafarers.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Engineering Brilliance of Harappan Underground Drains',
        content: 'One of the most distinctive hallmarks of Harappan urban planning was the carefully engineered subterranean drainage network. Every house had at least one wall bordering a public street so that domestic waste could drain directly into the city network. Main street channels were made of fired bricks set in mortar and covered with removable stone slabs for maintenance. Sumps or soak pits were placed at regular intervals to allow solid matter to settle, preventing blockages. The cleanliness and public hygiene of Harappan cities were millennia ahead of contemporary bronze-age Mesopotamia and Egypt.',
        keyTakeaway: 'The Harappan drainage network established a global benchmark for urban sanitation in antiquity.',
      },
    ],
    keyConcepts: [
      { term: 'Citadel', explanation: 'A fortified, elevated section of an ancient Indus city constructed on mud-brick platforms, housing monumental civic and religious structures.' },
      { term: 'Steatite', explanation: 'A soft, easily carved soapstone widely used by Harappan artisans to carve exquisite rectangular seals featuring animals and script.' },
    ],
    importantDates: [
      { date: 'c. 2600-1900 BCE', event: 'Mature Harappan Phase', significance: 'Peak urban phase of the Indus Valley Civilisation.' },
      { date: '1921', event: 'Daya Ram Sahni excavates Harappa', significance: 'Official archaeological discovery of the civilisation.' },
      { date: '1924', event: 'John Marshall announces discovery of Indus Civilisation', significance: 'Brought Harappan archaeology to the international stage.' },
    ],
    importantPeople: [
      { name: 'John Marshall', role: 'Director-General of ASI (1902-1928)', contribution: 'Officially announced the discovery of the Indus Valley Civilisation to the world in 1924.' },
      { name: 'R.E.M. Wheeler', role: 'Director-General of ASI (1944)', contribution: 'Introduced stratigraphic excavation techniques, correcting arbitrary horizontal trenching.' },
      { name: 'Daya Ram Sahni & R.D. Banerji', role: 'Pioneering Indian Archaeologists', contribution: 'Discovered seals at Harappa (1921) and Mohenjodaro (1922).' },
    ],
    definitions: [
      { term: 'Stratigraphy', definition: 'The archaeological study of sequential soil layers, where lower strata are generally older than upper strata.', context: 'Archaeological dating.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Mature Harappa (2600-1900 BCE) featured planned cities: Citadel (Great Bath, Granary) and Lower Town (grid layout, standardized 1:2:4 bricks, covered drains). Artisans at Chanhudaro crafted beads and steatite seals. They traded with Oman and Mesopotamia (Meluhha). The undeciphered script has 375-400 signs written right-to-left. By 1900 BCE, climate changes, floods, and drying rivers led to urban decline.',
      goldenPoints: ['Harappan script was written from right to left and contained 375 to 400 signs.', 'Chanhudaro was an exclusive 7-hectare industrial center for bead-making and shell crafts.'],
      mindMapSteps: ['Grid Layout & Dual Settlement (Citadel vs Lower Town) → The Great Bath & Underground Drains → Chanhudaro Craft Production & Steatite Seals → Meluhha Trade & 1900 BCE Collapse'],
      commonPitfalls: ['The Harappans knew bronze, copper, gold, and silver, but had no knowledge of iron.'],
    },
    flashcards: [
      { id: 'fc-12-h1-1', front: 'Which tiny 7-hectare Harappan site was devoted almost exclusively to craft production and bead-making?', back: 'Chanhudaro.', category: 'location' },
    ],
    questions: [
      {
        id: 'c12-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In ancient Mesopotamian texts, which name is believed to refer to the Harappan region?',
        options: ['Dilmun', 'Magan', 'Meluhha', 'Susa'],
        correctOptionIndex: 2,
        answer: 'Option (C) Meluhha',
      },
    ],
  },
  {
    id: 'c12-hist-ch2',
    classLevel: 12,
    subject: 'history',
    chapterNumber: 2,
    title: 'Kings, Farmers and Towns',
    subtitle: 'Early States & Economies (600 BCE - 600 CE): 16 Mahajanapadas, Magadha, Mauryan Empire, Ashoka’s Dhamma, and Inscriptions',
    overview: 'The sixth century BCE was a watershed era: the rise of 16 Mahajanapadas, early urban states, iron technology, and punch-marked coins. Explore the rise of Magadha, the Mauryan administrative empire under Chandragupta and Ashoka, and James Prinsep’s decipherment of Brahmi and Kharosthi.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Sixth Century BCE and 16 Mahajanapadas',
        bullets: [
          '6th century BCE marked second urbanisation: spread of iron tools, growth of towns, punch-marked silver/copper coins, and rise of heterodox religions (Buddhism, Jainism).',
          '16 Mahajanapadas: Early states; most were monarchies ruled by Rajas, but some were Ganas or Sanghas (oligarchies like Vajji, where power was shared by a council of chiefs).',
          'Dharmasutras: Composed by Brahmins; laid down norms for rulers, prescribing that kings should ideally be Kshatriyas and collect taxes (Bali, Bhaga) from peasants, artisans, and traders.',
        ],
      },
      {
        title: 'Why Magadha Became the Supreme Mahajanapada',
        bullets: [
          'Agricultural productivity: Fertile Ganga alluvial basin produced bumper crops.',
          'Iron ore mines: Rich iron deposits in Jharkhand enabled manufacture of superior agricultural tools and lethal weapons.',
          'Forests & War Elephants: Magadha forests provided timber and wild elephants, an essential component of the army.',
          'Rivers: Ganga and Son rivers provided cheap and convenient water transport and military communication.',
          'Strategic capitals: Rajagriha (surrounded by 5 protective hills) and later Pataliputra (commanding river routes).',
        ],
      },
      {
        title: 'The Mauryan Empire and Ashoka’s Dhamma',
        bullets: [
          'Founded by Chandragupta Maurya (321 BCE) with guidance of Chanakya (Kautilya, author of "Arthashastra"); Megasthenes (Greek ambassador) wrote "Indica".',
          'Ashoka: First ruler to inscribe messages on stone rocks and polished sandstone pillars across subcontinent.',
          'Ashoka’s Dhamma: Universal ethical code—respect for elders, kindness to servants/slaves, religious tolerance, and non-violence (Ahimsa); appointed special officials called Dhamma Mahamattas to spread it.',
          'James Prinsep (1838): Deciphered Brahmi and Kharosthi scripts, unlocking Ashoka’s edicts referring to king as "Devanampiya" (Beloved of the Gods) and "Piyadassi" (Pleasant to Behold).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'James Prinsep’s Decipherment of Brahmi and Kharosthi',
        content: 'For centuries, Ashoka’s pillar and rock edicts remained silent mysteries because nobody could read their ancient scripts. In 1838, James Prinsep, an officer in the mint of the East India Company, achieved a monumental breakthrough by deciphering the Brahmi script by meticulously comparing bilingual Indo-Greek coins bearing Greek and Brahmi letters. He recognized that the royal titles "Devanampiya" and "Piyadassi" matched descriptions of Emperor Ashoka found in Buddhist Sri Lankan chronicles (Dipavamsa and Mahavamsa), providing the chronological bedrock for early Indian history.',
        keyTakeaway: 'Prinsep’s 1838 decipherment unlocked ancient Indian epigraphy and anchored historical chronology.',
      },
    ],
    keyConcepts: [
      { term: 'Mahajanapada', explanation: 'One of the sixteen major regional monarchies and aristocratic oligarchies that flourished in northern and central India in the 6th century BCE.' },
      { term: 'Dhamma Mahamatta', explanation: 'Special high-ranking administrative officials appointed by Emperor Ashoka to travel across provinces propagating ethics and social welfare.' },
    ],
    importantDates: [
      { date: 'c. 321 BCE', event: 'Chandragupta Maurya establishes the Mauryan Empire', significance: 'First pan-Indian centralized empire.' },
      { date: '261 BCE', event: 'Kalinga War', significance: 'Horrific bloodshed causes Ashoka to renounce warfare and adopt Dhamma.' },
      { date: '1838 CE', event: 'James Prinsep deciphers Brahmi script', significance: 'Unlocks Ashokan inscriptions and ancient Indian history.' },
    ],
    importantPeople: [
      { name: 'Ashoka', role: 'Third Mauryan Emperor', contribution: 'Inscribed rock edicts promoting non-violence, ethical Dhamma, and religious harmony.' },
      { name: 'Kautilya (Chanakya)', role: 'Chief Advisor to Chandragupta', contribution: 'Authored the classic political and administrative treatise "Arthashastra".' },
      { name: 'James Prinsep', role: 'Epigraphist & Mint Official', contribution: 'Deciphered Brahmi and Kharosthi scripts in 1838.' },
    ],
    definitions: [
      { term: 'Epigraphy', definition: 'The scientific study, decipherment, and interpretation of ancient inscriptions engraved on durable surfaces like stone, rock, or copper.', context: 'Historical methodology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The 6th century BCE witnessed the 16 Mahajanapadas and second urbanisation. Magadha emerged supreme due to fertile plains, Jharkhand iron mines, forest elephants, and river communications. Chandragupta Maurya founded the empire (321 BCE); Ashoka renounced war after Kalinga (261 BCE) and inscribed Dhamma across India. James Prinsep deciphered Brahmi in 1838.',
      goldenPoints: ['James Prinsep deciphered Brahmi and Kharosthi in 1838.', 'Ashoka appointed special officers named Dhamma Mahamattas to spread moral ethics.'],
      mindMapSteps: ['6th Century BCE & 16 Mahajanapadas → 5 Reasons for Magadhan Dominance → Mauryan Administration (Arthashastra & Indica) → Ashoka’s Dhamma & Prinsep’s Decipherment'],
      commonPitfalls: ['Ashoka’s Dhamma was not a new religious doctrine; it was a universal moral code emphasizing tolerance, truthfulness, and non-violence.'],
    },
    flashcards: [
      { id: 'fc-12-h2-1', front: 'In which year did James Prinsep decipher the Brahmi and Kharosthi scripts?', back: '1838 CE.', category: 'date' },
    ],
    questions: [
      {
        id: 'c12-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following was an oligarchic Gana-Sangha state rather than a monarchy among the Mahajanapadas?',
        options: ['Magadha', 'Kosala', 'Vajji', 'Avanti'],
        correctOptionIndex: 2,
        answer: 'Option (C) Vajji',
      },
    ],
  },
  {
    id: 'c12-hist-ch3',
    classLevel: 12,
    subject: 'history',
    chapterNumber: 3,
    title: 'An Imperial Capital: Vijayanagara',
    subtitle: '14th-16th Century Karnataka: Harihara & Bukka (1336), Hampi, Krishnadeva Raya, Mahanavami Dibba, Battle of Talikota (1565)',
    overview: 'Founded in 1336 on the banks of the rocky Tungabhadra river, Vijayanagara ("City of Victory") was a magnificent medieval metropolis. Discover its fortified agricultural fields, the Kamalapuram water reservoir, Krishnadeva Raya’s architectural golden age, the Mahanavami Dibba platform, and the catastrophic Battle of Talikota in 1565.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Geographical Setting and Massive Fortifications',
        bullets: [
          'Founded in 1336 by two brothers, Harihara and Bukka, of the Sangama dynasty on the banks of the Tungabhadra.',
          'Water management: Situated in a natural granite bowl; river flows north-east; Hiriya canal diverted river water; massive Kamalapuram tank irrigated royal gardens.',
          'Seven rings of fortification: Persian ambassador Abdur Razzaq observed that walls encircled not just the city and palaces, but also agricultural fields and orchards, preventing starvation during long sieges.',
        ],
      },
      {
        title: 'The Golden Age of Krishnadeva Raya (1509-1529)',
        bullets: [
          'Belonged to Tuluva dynasty; expanded empire by defeating Sultan of Bijapur and Gajapatis of Orissa.',
          'Great builder: Constructed magnificent Gopurams (towering gateways) at Virupaksha temple, built Hazara Rama temple, and founded suburban township of Nagalapuram.',
          'Wrote landmark Telugu treatise on statecraft: "Amuktamalyada".',
        ],
      },
      {
        title: 'The Royal Centre and the Battle of Talikota (1565)',
        bullets: [
          'Royal Centre contained over 60 temples and 30 palace complexes; Lotus Mahal (council chamber), Elephant Stables, and the Mahanavami Dibba (massive 11,000 sq ft elevated platform used for the 10-day Dussehra festival).',
          'Nayakas (military commanders) and Amara-Nayaka system: Nayakas governed territories and sent annual tribute to Raya.',
          'Battle of Talikota (Rakshasi-Tangadi, 1565): Rama Raya pitted Deccan sultanates against each other; Bijapur, Golconda, and Ahmadnagar formed a grand alliance, crushed the Vijayanagara army, and thoroughly sacked the city of Hampi.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Vijayanagara Fortified Agricultural Fields Inside City Walls',
        content: 'Medieval sieges were designed to starve a defending population into unconditional surrender. Invading armies would encircle a fortress for months or even years, cutting off incoming food convoys until the defenders exhausted their grain stores. The Vijayanagara rulers anticipated this strategy by constructing enormous stone ramparts that enclosed vast agricultural fields, rice paddies, orchards, and stone-lined water canals within the fortified perimeter. Even during protracted sieges, the city could produce fresh grain and sustain its population indefinitely.',
        keyTakeaway: 'Fortifying agricultural fields within defensive walls neutralized siege starvation tactics.',
      },
    ],
    keyConcepts: [
      { term: 'Amara-Nayaka System', explanation: 'A major political innovation of Vijayanagara, derived from the Delhi Sultanate’s Iqta system, where military chiefs (Amara-Nayakas) were granted territories in exchange for maintaining troops.' },
      { term: 'Mahanavami Dibba', explanation: 'A massive 11,000-square-foot ceremonial granite platform in the Royal Centre where the king celebrated the ten-day Mahanavami (Navaratri) festival with feasts, wrestling, and tribute inspections.' },
    ],
    importantDates: [
      { date: '1336 CE', event: 'Harihara and Bukka found Vijayanagara', significance: 'Establishment of the southern empire.' },
      { date: '1509-1529 CE', event: 'Reign of Krishnadeva Raya', significance: 'Imperial zenith and cultural renaissance.' },
      { date: '1565 CE', event: 'Battle of Talikota (Rakshasi-Tangadi)', significance: 'Combined Deccan Sultanates crush Vijayanagara and destroy Hampi.' },
      { date: '1800 CE', event: 'Colin Mackenzie discovers Hampi ruins', significance: 'First systematic archaeological survey of Vijayanagara.' },
    ],
    importantPeople: [
      { name: 'Krishnadeva Raya', role: 'Greatest Vijayanagara Ruler', contribution: 'Expanded borders, patronized arts, built Hazara Rama temple, authored Amuktamalyada.' },
      { name: 'Colin Mackenzie', role: 'Engineer & First Surveyor-General', contribution: 'Discovered the ruins of Hampi in 1800 and mapped the site.' },
      { name: 'Abdur Razzaq', role: 'Persian Ambassador', contribution: 'Documented seven concentric rings of defensive walls enclosing city and fields.' },
    ],
    definitions: [
      { term: 'Yavana', definition: 'A Sanskrit term used for Greeks and other peoples who entered the Indian subcontinent from the north-west.', context: 'Epigraphy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Vijayanagara was founded in 1336 by Harihara and Bukka along the Tungabhadra. Abdur Razzaq noted 7 concentric walls enclosing fields and palaces. Krishnadeva Raya (1509-1529) achieved the imperial zenith, constructing temple Gopurams and authoring Amuktamalyada. The Amara-Nayaka system organized the military. In 1565, the combined Deccan Sultanates destroyed the city at the Battle of Talikota.',
      goldenPoints: ['Colin Mackenzie discovered the ruins of Hampi in 1800.', 'The Battle of Talikota took place in 1565, ending the imperial greatness of Vijayanagara.'],
      mindMapSteps: ['1336 Foundation by Harihara & Bukka → 7 Concentric Fortification Walls & Canals → Golden Reign of Krishnadeva Raya (1509-29) → Mahanavami Dibba Ceremonies → 1565 Talikota Defeat'],
      commonPitfalls: ['The Battle of Talikota is also referred to as the Battle of Rakshasi-Tangadi.'],
    },
    flashcards: [
      { id: 'fc-12-h3-1', front: 'In which year did the fateful Battle of Talikota (Rakshasi-Tangadi) occur?', back: '1565 CE.', category: 'date' },
    ],
    questions: [
      {
        id: 'c12-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who brought the ruins of Hampi to light in 1800 by conducting the first systematic survey?',
        options: ['Alexander Greenlaw', 'Colonel Colin Mackenzie', 'John Marshall', 'Sir Mortimer Wheeler'],
        correctOptionIndex: 1,
        answer: 'Option (B) Colonel Colin Mackenzie (1800)',
      },
    ],
  },
  {
    id: 'c12-hist-ch4',
    classLevel: 12,
    subject: 'history',
    chapterNumber: 4,
    title: 'Mahatma Gandhi and the Nationalist Movement',
    subtitle: 'Champaran (1917), Non-Cooperation (1920-22), Salt Satyagraha (1930), Round Table Conferences, Quit India (1942), and Partition',
    overview: 'Mahatma Gandhi transformed the elite Indian National Congress into a mass national liberation movement. From Champaran and Kheda to the Dandi Salt March and the 1942 Quit India call ("Do or Die"), trace the trajectory of India’s freedom struggle.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Return to India and Early Local Experiments',
        bullets: [
          'Gandhi returned to India in January 1915 from South Africa, where he had pioneered Satyagraha against racial discrimination.',
          'Gopal Krishna Gokhale advised him to spend his first year traveling across India to understand the people.',
          'Champaran (1917, Bihar): Campaigned for peasants forced to grow indigo under the exploitative Tinkathia system.',
          'Ahmedabad Mill Strike & Kheda Satyagraha (1918): Supported textile workers’ wages and peasant land revenue suspension during crop failure.',
        ],
      },
      {
        title: 'Non-Cooperation and the Khilafat Movement (1920-1922)',
        bullets: [
          'Rowlatt Act (1919) authorized detention without trial; followed by Jallianwala Bagh massacre (13 April 1919) by General Dyer.',
          'Gandhi united Non-Cooperation with the Khilafat movement (led by Ali brothers: Muhammad Ali and Shaukat Ali).',
          'Called for boycott of British schools, courts, titles, foreign cloth, and elections; abruptly suspended movement in February 1922 following violence at Chauri Chaura (Gorakhpur, UP) where 22 policemen were burnt alive.',
        ],
      },
      {
        title: 'Salt Satyagraha (1930), Round Table Conferences, and Quit India (1942)',
        bullets: [
          'Dandi March (12 March to 6 April 1930): Marched 240 miles from Sabarmati to Dandi to manufacture illegal salt; broke British tax monopoly; joined by Sarojini Naidu; sparked nationwide Civil Disobedience.',
          'Gandhi-Irwin Pact (March 1931): Civil Disobedience suspended; Gandhi attended Second Round Table Conference in London as sole Congress representative.',
          'Quit India Movement (August 1942): Following Cripps Mission failure, Gandhi launched movement from Gowalia Tank, Bombay, giving the historic mantra: "Do or Die".',
          'Achieved freedom on 15 August 1947, marred by tragic communal partition; Gandhi assassinated on 30 January 1948 by Nathuram Godse.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Gandhi Chose Salt to Galvanize the Entire Nation',
        content: 'Salt was an absolute biological necessity of daily survival for every Indian household—rich and poor, high-caste and Dalit, Hindu and Muslim alike. By maintaining a state monopoly on salt production and imposing a tax upon it, the colonial government struck at the most vulnerable domestic budgets. By marching 240 miles on foot to make salt from sea water at Dandi, Gandhi transformed a simple kitchen seasoning into a powerful metaphor for national self-reliance and civil defiance.',
        keyTakeaway: 'The Salt Satyagraha mobilized every household in India against colonial taxation.',
      },
    ],
    keyConcepts: [
      { term: 'Satyagraha', explanation: 'A philosophy of nonviolent resistance formulated by Mahatma Gandhi, based on the absolute moral power of truth and active soul-force.' },
      { term: 'Khilafat Movement', explanation: 'An agitation launched by Indian Muslims led by the Ali brothers to defend the spiritual authority of the Ottoman Caliph (Khalifa).' },
    ],
    importantDates: [
      { date: 'January 1915', event: 'Gandhi returns from South Africa', significance: 'Entry of Mahatma Gandhi into the Indian political arena.' },
      { date: '1917', event: 'Champaran Satyagraha', significance: 'Gandhi’s first successful Satyagraha in India.' },
      { date: '12 March 1930', event: 'Dandi March launched', significance: 'Beginning of the Civil Disobedience Movement.' },
      { date: '8 August 1942', event: 'Quit India Resolution passed', significance: 'Gandhi gives the historic call "Do or Die".' },
      { date: '30 January 1948', event: 'Assassination of Mahatma Gandhi', significance: 'Martyrdom of the Father of the Nation.' },
    ],
    importantPeople: [
      { name: 'Mahatma Gandhi', role: 'Leader of National Movement', contribution: 'Led Non-Cooperation, Civil Disobedience, and Quit India movements.' },
      { name: 'Sarojini Naidu', role: 'Poet & Freedom Fighter', contribution: 'Led the raid on Dharasana Salt Works alongside Gandhi.' },
      { name: 'Gopal Krishna Gokhale', role: 'Political Mentor to Gandhi', contribution: 'Advised Gandhi to tour the Indian countryside to understand rural realities.' },
    ],
    definitions: [
      { term: 'Harijan', definition: 'Meaning "children of God", a term used by Mahatma Gandhi to refer to members of the untouchable castes to affirm their dignity.', context: 'Social reform.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Gandhi returned to India in 1915 and led early satyagrahas in Champaran (1917), Kheda, and Ahmedabad (1918). He launched the Non-Cooperation-Khilafat movement (1920), calling it off after Chauri Chaura (1922). The 1930 Dandi Salt March initiated Civil Disobedience. In 1942, he launched Quit India with the slogan "Do or Die". India gained independence in 1947, followed by Gandhi’s assassination on 30 January 1948.',
      goldenPoints: ['Gandhi returned to India from South Africa in January 1915.', 'Gandhi gave the slogan "Do or Die" at the launch of the Quit India Movement in August 1942.'],
      mindMapSteps: ['1915 Return & Champaran/Kheda → Non-Cooperation & Chauri Chaura (1922) → Dandi Salt March (1930) → Quit India "Do or Die" (1942) → Independence & Martyrdom (1948)'],
      commonPitfalls: ['Gandhi attended ONLY the Second Round Table Conference in London (1931); the Congress boycotted the First and Third conferences.'],
    },
    flashcards: [
      { id: 'fc-12-h4-1', front: 'Which Round Table Conference did Mahatma Gandhi attend in London as the sole representative of the Congress?', back: 'The Second Round Table Conference (1931).', category: 'fact' },
    ],
    questions: [
      {
        id: 'c12-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year and place did Mahatma Gandhi lead his first successful Satyagraha in India against indigo exploitation?',
        options: ['1915 in Bombay', '1917 in Champaran (Bihar)', '1918 in Kheda', '1920 in Nagpur'],
        correctOptionIndex: 1,
        answer: 'Option (B) 1917 in Champaran (Bihar)',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY: Fundamentals of Human Geography
  // ==========================================
  {
    id: 'c12-geo-ch1',
    classLevel: 12,
    subject: 'geography',
    chapterNumber: 1,
    title: 'Human Geography: Nature and Scope',
    subtitle: 'Environmental Determinism, Possibilism, Neo-Determinism (Stop-and-Go by Griffith Taylor), Approaches to Human Geography',
    overview: 'Human geography studies the interrelationship between the physical environment and human society. Explore the conceptual evolution from Environmental Determinism (nature rules man) and Possibilism (man conquers nature) to Griffith Taylor’s sustainable Neo-Determinism.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Core Dichotomy: Determinism vs Possibilism',
        bullets: [
          'Environmental Determinism (Ratzel, Ellen Churchill Semple): Early stage of human history; low technological development; humans were passive agents dictated by the forces of nature ("naturalisation of humans").',
          'Possibilism (Paul Vidal de la Blache): As technology advanced, humans overcame environmental constraints, creating opportunities (air conditioning in deserts, bridges over oceans, satellite communication); "humanisation of nature".',
        ],
      },
      {
        title: 'Neo-Determinism or "Stop and Go Determinism"',
        bullets: [
          'Introduced by Australian geographer Griffith Taylor as a middle path (Madhyam Marg) between fatalistic Determinism and arrogant Possibilism.',
          'Traffic light analogy: A traffic policeman can pause or slow down the flow of traffic, but cannot alter its ultimate direction. Similarly, humans can develop nature only by obeying its physical laws.',
          'Warns against environmental destruction (greenhouse effect, ozone depletion, melting glaciers, soil erosion); champions sustainable development.',
        ],
      },
      {
        title: 'Schools of Thought in Human Geography (1970s)',
        bullets: [
          'Welfare / Humanistic School: Focused on social well-being of people (housing, health, education).',
          'Radical School (Marxian theory): Employed Marxist ideas to explain poverty, deprivation, and social inequality as structural outcomes of capitalism.',
          'Behavioural School: Laid emphasis on lived experience and perception of space based on ethnicity, race, and religion.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Logic of Griffith Taylor’s Neo-Determinism',
        content: 'Griffith Taylor demonstrated that neither absolute environmental tyranny nor reckless human conquest reflects ecological reality. Humans cannot create natural resources out of nothing—we can only accelerate, redirect, or slow down development within limits set by nature. If humanity attempts to build cities without water or expand emissions beyond planetary boundaries, nature responds with catastrophic droughts, desertification, and climatic heating. Thus, "Stop and Go Determinism" asserts: stop when nature flashes red, and proceed only when nature permits green.',
        keyTakeaway: 'Neo-determinism balances human development within ecological planetary limits.',
      },
    ],
    keyConcepts: [
      { term: 'Environmental Determinism', explanation: 'The philosophical doctrine that human actions, physical traits, and social developments are strictly determined by the natural environment.' },
      { term: 'Possibilism', explanation: 'The philosophical approach asserting that nature provides opportunities and human beings, through technology, choose their paths of development.' },
      { term: 'Neo-Determinism', explanation: 'Griffith Taylor’s concept of "Stop and Go Determinism" establishing that sustainable development requires humans to respect natural ecological boundaries.' },
    ],
    importantDates: [],
    importantPeople: [
      { name: 'Griffith Taylor', role: 'Australian Geographer', contribution: 'Introduced the concept of Neo-Determinism or "Stop and Go Determinism".' },
      { name: 'Friedrich Ratzel', role: 'Father of Modern Human Geography', contribution: 'Defined human geography as the synthetic study of relationships between human societies and Earth’s surface.' },
      { name: 'Paul Vidal de la Blache', role: 'French Geographer', contribution: 'Pioneered the school of Possibilism.' },
    ],
    definitions: [
      { term: 'Spatial Organisation', definition: 'The geographical arrangement and distribution of physical features, human activities, and infrastructure across space.', context: 'Geographic theory.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Human geography explores the human-nature relationship. Evolution moved from Environmental Determinism (nature dictates human society) to Possibilism (technology provides human choices). Griffith Taylor introduced Neo-Determinism ("Stop and Go"), emphasizing that development must obey nature’s laws to be sustainable. 1970s brought Welfare, Radical (Marxian), and Behavioural schools.',
      goldenPoints: ['Griffith Taylor introduced the concept of Neo-Determinism or "Stop and Go Determinism".', 'The Radical school of human geography applied Marxist theory to explain poverty and inequality.'],
      mindMapSteps: ['Definition of Human Geography → Environmental Determinism → Possibilism → Griffith Taylor’s Neo-Determinism → 1970s Welfare, Radical & Behavioural Schools'],
      commonPitfalls: ['Neo-determinism does not dismiss technology; it insists technology must operate within nature’s sustainable limits.'],
    },
    flashcards: [
      { id: 'fc-12-g1-1', front: 'Who introduced the concept of Neo-Determinism ("Stop and Go Determinism")?', back: 'Griffith Taylor.', category: 'person' },
    ],
    questions: [
      {
        id: 'c12-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which geographer formulated the concept of "Neo-Determinism" or "Stop and Go Determinism"?',
        options: ['Friedrich Ratzel', 'Ellen C. Semple', 'Griffith Taylor', 'Paul Vidal de la Blache'],
        correctOptionIndex: 2,
        answer: 'Option (C) Griffith Taylor',
      },
    ],
  },
  {
    id: 'c12-geo-ch2',
    classLevel: 12,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Human Development',
    subtitle: 'Growth vs Development, Dr. Mahbub-ul-Haq & Amartya Sen, 4 Pillars (Equity, Sustainability, Productivity, Empowerment), HDI',
    overview: 'Development is not simply an increase in GDP; it is the enlargement of human choices and freedom. Discover the human development paradigm pioneered by Dr. Mahbub-ul-Haq and Nobel Laureate Amartya Sen, the four pillars of development, and the calculation of the Human Development Index (HDI).',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Growth vs Development',
        bullets: [
          'Growth: Quantitative and value neutral; can be positive or negative (e.g. increase in population or GDP).',
          'Development: Qualitative change that is always value-positive; occurs only when positive growth is accompanied by an improvement in the quality of people’s lives.',
        ],
      },
      {
        title: 'Dr. Mahbub-ul-Haq, Amartya Sen, and Human Development',
        bullets: [
          'Dr. Mahbub-ul-Haq (Pakistani economist) introduced the Human Development concept in 1990 for UNDP; defined it as development that enlarges people’s choices and improves their lives.',
          'Prof. Amartya Sen: Capability Approach—freedom and expansion of human capabilities are the ultimate ends and means of development.',
          'Four Pillars of Human Development: (1) Equity (equal access to opportunities); (2) Sustainability (continuity in availability of opportunities across generations); (3) Productivity (human labor productivity via health and skills); (4) Empowerment (power to make choices through freedom and capabilities).',
        ],
      },
      {
        title: 'Measuring Human Development: The HDI',
        bullets: [
          'Human Development Index (HDI) scores countries on a scale of 0 to 1 based on three key dimensions:',
          '1. Health: Assessed by Life Expectancy at Birth.',
          '2. Education: Assessed by Expected Years of Schooling for children and Mean Years of Schooling for adults.',
          '3. Access to Resources: Measured by Gross National Income (GNI) per capita in Purchasing Power Parity (PPP) US dollars.',
          'Human Poverty Index (HPI) measures shortfalls in human development (non-income measure).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Gross National Income Alone is an Inadequate Measure of Progress',
        content: 'For decades, economists measured national progress solely through Gross National Product (GNP) and per capita income. However, a country can experience high oil revenues or rapid GDP expansion while its wealth is concentrated in an oligarchy, while infant mortality remains high and schools are underfunded (e.g., Equatorial Guinea). The Human Development paradigm shifted the focus from inanimate economic wealth to the living human being. Enlarging people’s real capabilities—to live long, healthy lives, be educated, and participate freely in community decisions—is the true purpose of development.',
        keyTakeaway: 'The HDI replaced income-only metrics with multidimensional capabilities: health, education, and purchasing power.',
      },
    ],
    keyConcepts: [
      { term: 'Capability Approach', explanation: 'Amartya Sen’s economic theory positing that human development should be assessed by the actual freedoms and capabilities people have to lead lives they value.' },
      { term: 'Purchasing Power Parity (PPP)', explanation: 'An economic metric that compares different countries’ currencies through a "basket of goods" approach to assess real living standards.' },
    ],
    importantDates: [
      { date: '1990', event: 'First Human Development Report published by UNDP', significance: 'Introduced the Human Development Index (HDI).' },
    ],
    importantPeople: [
      { name: 'Dr. Mahbub-ul-Haq', role: 'Pakistani Economist', contribution: 'Created the Human Development Index and drafted the 1990 UNDP Human Development Report.' },
      { name: 'Amartya Sen', role: 'Nobel Laureate in Economics', contribution: 'Pioneered the Capability Approach to human freedom and welfare economics.' },
    ],
    definitions: [
      { term: 'Empowerment', definition: 'The capacity and freedom of individuals and marginalized groups to make autonomous choices and influence decisions affecting their lives.', context: 'Development sociology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Growth is quantitative; Development is qualitative and expands human freedom. Dr. Mahbub-ul-Haq and Amartya Sen founded the Human Development paradigm in 1990. Four pillars: Equity, Sustainability, Productivity, Empowerment. The HDI ranks nations from 0 to 1 based on Health (Life Expectancy), Education (Mean/Expected schooling), and Resources (GNI per capita PPP).',
      goldenPoints: ['Dr. Mahbub-ul-Haq introduced the Human Development Index in the 1990 UNDP report.', 'The four pillars of human development are Equity, Sustainability, Productivity, and Empowerment.'],
      mindMapSteps: ['Growth (Quantitative) vs Development (Qualitative) → Mahbub-ul-Haq & Amartya Sen Capabilities → 4 Pillars (Equity, Sustainability, Productivity, Empowerment) → HDI 3 Metrics (Health, Education, Income)'],
      commonPitfalls: ['Economic growth can occur without development if the wealth does not translate into better healthcare, education, and equality.'],
    },
    flashcards: [
      { id: 'fc-12-g2-1', front: 'Which two economists pioneered the Human Development concept and index for the UNDP in 1990?', back: 'Dr. Mahbub-ul-Haq and Prof. Amartya Sen.', category: 'person' },
    ],
    questions: [
      {
        id: 'c12-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following is NOT one of the four foundational pillars of Human Development?',
        options: ['Equity', 'Sustainability', 'Industrialization', 'Empowerment'],
        correctOptionIndex: 2,
        answer: 'Option (C) Industrialization (The four pillars are Equity, Sustainability, Productivity, and Empowerment)',
      },
    ],
  },

  // ==========================================
  // POLITICAL SCIENCE: Contemporary World Politics
  // ==========================================
  {
    id: 'c12-pol-ch1',
    classLevel: 12,
    subject: 'civics',
    chapterNumber: 1,
    title: 'The End of Bipolarity',
    subtitle: 'Collapse of Soviet Union (1991), Fall of Berlin Wall (1989), Gorbachev (Glasnost & Perestroika), Shock Therapy, and Post-Communist Regimes',
    overview: 'The fall of the Berlin Wall in November 1989 marked the collapse of the socialist bloc. Examine Mikhail Gorbachev’s reforms (Glasnost and Perestroika), the sudden disintegration of the USSR in December 1991, the painful economic "Shock Therapy", and the emergence of a unipolar world.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Soviet System and Mikhail Gorbachev',
        bullets: [
          'Soviet System: Centered around state ownership of production and the monopoly of the Communist Party; guaranteed employment, subsidized healthcare, and social security; lacked democracy and freedom of speech; stifled by bureaucracy.',
          'Mikhail Gorbachev (General Secretary in 1985): Attempted to modernize USSR through "Perestroika" (economic restructuring) and "Glasnost" (political openness).',
          'Reforms unleashed democratic nationalist uprisings across Eastern Europe and Soviet republics.',
        ],
      },
      {
        title: 'Disintegration of the USSR (December 1991)',
        bullets: [
          '9 November 1989: The Berlin Wall, symbolizing the Cold War divide, was torn down by ordinary citizens.',
          'August 1991: Failed hardline Communist military coup against Gorbachev; Boris Yeltsin emerged as popular hero defending democracy.',
          'December 1991: Under Yeltsin, Russia, Ukraine, and Belarus declared that the Soviet Union was disbanded.',
          'Commonwealth of Independent States (CIS) formed; Russia accepted as the legal successor state inheriting the USSR’s UN Security Council permanent seat and nuclear arsenal.',
        ],
      },
      {
        title: 'Shock Therapy and Its Painful Consequences',
        bullets: [
          'Shock Therapy: A sudden, painful transition from a socialist planned economy to free-market capitalism advised by the IMF and World Bank.',
          'Consequences: Privatization led to the "largest garage sale in history" as state industrial enterprises were auctioned for pennies; value of ruble plummeted; hyperinflation wiped out savings; food shortages; rise of the Russian mafia; social safety net dismantled.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Shock Therapy Caused the "Largest Garage Sale in History"',
        content: 'Under IMF-directed Shock Therapy, the Russian government abruptly dismantled state price controls and privatized approximately 15,000 state-owned industrial enterprises virtually overnight. Every citizen was distributed privatization vouchers. Because of severe food scarcity and hyperinflation, impoverished citizens sold their vouchers on the black market to criminal syndicates and oligarchs. Valuable state industrial assets built over decades were auctioned off at 10-15% of their true value to politically connected elites, triggering economic devastation and inequality.',
        keyTakeaway: 'Unregulated Shock Therapy destroyed state industries and produced corporate oligarchies.',
      },
    ],
    keyConcepts: [
      { term: 'Glasnost', explanation: 'Mikhail Gorbachev’s policy of political openness and freedom of speech introduced in the Soviet Union in the late 1980s.' },
      { term: 'Perestroika', explanation: 'The economic restructuring and decentralization program initiated by Gorbachev to revitalize the stagnant Soviet economy.' },
      { term: 'Shock Therapy', explanation: 'A painful model of transition from authoritarian socialism to free-market capitalism administered to post-Soviet states by the IMF and World Bank.' },
    ],
    importantDates: [
      { date: '9 Nov 1989', event: 'Fall of the Berlin Wall', significance: 'Symbolic collapse of the Cold War Iron Curtain.' },
      { date: '25 Dec 1991', event: 'Gorbachev resigns; USSR dissolved', significance: 'Official end of the Soviet Union and Cold War bipolarity.' },
    ],
    importantPeople: [
      { name: 'Mikhail Gorbachev', role: 'Last President of USSR', contribution: 'Introduced Glasnost and Perestroika; ended the Cold War peacefully.' },
      { name: 'Boris Yeltsin', role: 'First President of Russian Federation', contribution: 'Led resistance to August 1991 coup and disbanded the Soviet Union.' },
    ],
    definitions: [
      { term: 'Bipolarity', definition: 'An international system characterized by the dominance of two rival superpower blocs (the US and USSR during the Cold War).', context: 'International relations.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Soviet system provided state welfare but lacked democratic freedom. In 1985, Gorbachev introduced Glasnost and Perestroika, catalyzing democratization. The Berlin Wall fell in Nov 1989. In Dec 1991, Russia, Ukraine, and Belarus dissolved the USSR. Russia inherited the UN Security Council seat. IMF "Shock Therapy" led to economic collapse and the "largest garage sale in history", leaving the US as the lone superpower.',
      goldenPoints: ['The Berlin Wall fell on 9 November 1989.', 'Boris Yeltsin became the first elected President of the Russian Federation.'],
      mindMapSteps: ['Soviet System & Stagnation → Gorbachev’s Glasnost & Perestroika → Fall of Berlin Wall (1989) → Dec 1991 Dissolution of USSR → Shock Therapy Crisis'],
      commonPitfalls: ['Shock Therapy was not a military strategy; it was an abrupt economic model converting socialist planned economies to market capitalism.'],
    },
    flashcards: [
      { id: 'fc-12-p1-1', front: 'On what exact date was the historic Berlin Wall breached by ordinary citizens?', back: '9 November 1989.', category: 'date' },
    ],
    questions: [
      {
        id: 'c12-p1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which country inherited the permanent seat of the Soviet Union in the United Nations Security Council after its disintegration in 1991?',
        options: ['Ukraine', 'Belarus', 'Russian Federation', 'Kazakhstan'],
        correctOptionIndex: 2,
        answer: 'Option (C) Russian Federation',
      },
    ],
  },
  {
    id: 'c12-pol-ch2',
    classLevel: 12,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Challenges of Nation Building',
    subtitle: 'Partition of India (1947), Integration of 565 Princely States (Sardar Patel), Hyderabad, Kashmir, Manipur, States Reorganisation Act 1956',
    overview: 'Independence in August 1947 was born amidst the tragic communal bloodbath of Partition. Discover the three monumental challenges of nation-building, Sardar Vallabhbhai Patel’s integration of 565 princely states, and the linguistic reorganization of states under the 1956 Act.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Three Challenges on 14-15 August 1947',
        bullets: [
          'Nehru’s famous speech: "Tryst with Destiny" delivered to the Constituent Assembly at midnight.',
          'Three primary challenges: (1) Shape a united nation accommodating unprecedented continental diversity; (2) Establish a functional democracy based on representative parliamentary institutions; (3) Ensure the development and well-being of the entire society, especially the poor.',
        ],
      },
      {
        title: 'Partition: Displacement and Rehabilitation',
        bullets: [
          'Two-Nation Theory (propounded by Muslim League): Claimed India consisted of two separate nations (Hindus and Muslims), demanding Pakistan.',
          'Tragic Partition: 80 lakh people forced to flee across newly drawn border (Radcliffe Line); between 5 to 10 lakh people slaughtered in communal violence; horrific sexual violence against women.',
        ],
      },
      {
        title: 'Integration of 565 Princely States & Linguistic Reorganisation',
        bullets: [
          'British declared that with the lapse of paramountcy, 565 princely states became legally independent and free to join India, Pakistan, or remain independent.',
          'Sardar Vallabhbhai Patel ("Iron Man of India"): Used diplomatic statesmanship and firm resolve to persuade rulers to sign the "Instrument of Accession".',
          'Difficult cases: Junagadh (plebiscite), Hyderabad (Nizam’s Razakars suppressed by Operation Polo in Sept 1948), Kashmir (Maharaja Hari Singh signed Instrument of Accession in Oct 1947 after Pakistani tribal invasion), Manipur (Bodhachandra Singh held first election based on Universal Adult Suffrage in June 1948).',
          'Linguistic Reorganisation: Potti Sreeramulu died after 56-day hunger strike, forcing the creation of Andhra State in 1952; States Reorganisation Commission (SRC) appointed in 1953; States Reorganisation Act 1956 created 14 states and 6 union territories on linguistic lines.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Sardar Patel’s Integration Statesmanship',
        content: 'When the British announced that paramountcy would lapse, India faced the existential threat of balkanization into hundreds of independent kingdoms. Sardar Vallabhbhai Patel, assisted by V.P. Menon, tackled the crisis through three core principles: (1) The people of most princely states clearly desired to join the Indian Union; (2) The Indian government was willing to be flexible and accommodate regional autonomy through privy purses; (3) The strategic unity and consolidation of national borders was paramount. Through firm persuasion, Patel integrated almost all 565 states before 15 August 1947.',
        keyTakeaway: 'Patel prevented the balkanization of India by securing the accession of 565 princely states.',
      },
    ],
    keyConcepts: [
      { term: 'Instrument of Accession', explanation: 'The legal document signed by the rulers of princely states agreeing to accede to the Dominion of India on defense, external affairs, and communications.' },
      { term: 'States Reorganisation Act 1956', explanation: 'A parliamentary act based on the Fazal Ali Commission recommendations that redrew Indian state boundaries along linguistic lines, creating 14 states and 6 UTs.' },
    ],
    importantDates: [
      { date: '14-15 Aug 1947', event: 'Independence and Partition of India', significance: 'Birth of independent India and Pakistan.' },
      { date: 'September 1948', event: 'Operation Polo in Hyderabad', significance: 'Military action integrates Hyderabad into the Indian Union.' },
      { date: 'December 1952', event: 'Creation of Andhra State', significance: 'First linguistic state created following Potti Sreeramulu’s fast.' },
      { date: '1956', event: 'States Reorganisation Act passed', significance: 'Creation of 14 states and 6 union territories.' },
    ],
    importantPeople: [
      { name: 'Sardar Vallabhbhai Patel', role: 'Deputy Prime Minister & Home Minister', contribution: 'Unified 565 princely states into the Indian Union (Iron Man of India).' },
      { name: 'Potti Sreeramulu', role: 'Gandhian Freedom Fighter', contribution: 'Undertook a 56-day hunger strike resulting in the creation of Andhra Pradesh.' },
    ],
    definitions: [
      { term: 'Privy Purse', definition: 'A grant of money guaranteed to royal families of former princely states in exchange for surrendering their ruling powers, abolished in 1971.', context: 'Post-independence politics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Independent India faced 3 challenges: unity, democracy, and welfare. Partition resulted in communal violence and displacement. Sardar Patel integrated 565 princely states via the Instrument of Accession (Hyderabad, Junagadh, Kashmir, Manipur). Potti Sreeramulu’s fast led to Andhra in 1952; the States Reorganisation Act 1956 established 14 states and 6 UTs along linguistic lines.',
      goldenPoints: ['Manipur was the first part of India to hold an election based on Universal Adult Franchise in June 1948.', 'The States Reorganisation Act was passed in 1956, creating 14 states and 6 Union Territories.'],
      mindMapSteps: ['1947 Nehru Tryst with Destiny & 3 Challenges → Partition Bloodbath & Refugee Crisis → Patel Integrates 565 Princely States → Potti Sreeramulu Fast & 1956 Linguistic States Act'],
      commonPitfalls: ['The States Reorganisation Commission (SRC) recommended linguistic states, rejecting the fear that linguistic boundaries would break national unity.'],
    },
    flashcards: [
      { id: 'fc-12-p2-1', front: 'Which part of India was the first to hold an election based on Universal Adult Franchise in June 1948?', back: 'Manipur.', category: 'location' },
    ],
    questions: [
      {
        id: 'c12-p2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Following the recommendation of the States Reorganisation Commission, how many states and union territories were created in 1956?',
        options: ['12 States and 4 UTs', '14 States and 6 UTs', '28 States and 8 UTs', '16 States and 3 UTs'],
        correctOptionIndex: 1,
        answer: 'Option (B) 14 States and 6 Union Territories (1956)',
      },
    ],
  },

  // ==========================================
  // ECONOMICS: Introductory Macroeconomics
  // ==========================================
  {
    id: 'c12-eco-ch1',
    classLevel: 12,
    subject: 'economics',
    chapterNumber: 1,
    title: 'National Income Accounting',
    subtitle: 'Circular Flow of Income, GDP, GNP, NNP, Factor Cost vs Market Price, Three Methods of Measurement (Value Added, Income, Expenditure)',
    overview: 'National Income measures the total economic performance and production of a country. Explore the circular flow of income between households and firms, the distinctions between GDP, GNP, and NNP, and the three standardized calculation methods.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Circular Flow of Income in a Two-Sector Economy',
        bullets: [
          'Two sectors: Households (owners of factors of production: land, labor, capital, enterprise) and Firms (producers of goods and services).',
          'Real Flow: Households supply factor services to firms; firms supply finished goods and services to households.',
          'Money Flow: Firms pay factor payments (rent, wages, interest, profit) to households; households pay consumption expenditure to firms.',
          'Fundamental identity: Total Production = Total Income = Total Expenditure.',
        ],
      },
      {
        title: 'National Income Aggregates and Formulas',
        bullets: [
          'Gross Domestic Product (GDP): Total money value of all final goods and services produced within the domestic territory of a country during a year.',
          'GNP = GDP + NFIA (Net Factor Income from Abroad).',
          'NNP (Net National Product) = GNP - Depreciation (Consumption of Fixed Capital).',
          'National Income (NNP at Factor Cost / NNP_FC) = NNP_MP - NIT (Net Indirect Taxes = Indirect Taxes - Subsidies).',
          'Nominal GDP (evaluated at current prices) vs Real GDP (evaluated at base year constant prices; true indicator of economic growth).',
          'GDP Deflator = (Nominal GDP / Real GDP) * 100.',
        ],
      },
      {
        title: 'Three Methods of Measuring National Income',
        bullets: [
          '1. Value Added Method (Product Method): GVA_MP = Value of Output (Sales + Change in Stock) - Intermediate Consumption; prevents the error of Double Counting.',
          '2. Income Method: Sum of Factor Incomes = Compensation of Employees + Operating Surplus (Rent + Royalty + Interest + Profit) + Mixed Income of Self-Employed.',
          '3. Expenditure Method: GDP_MP = Private Final Consumption Expenditure (C) + Government Final Consumption Expenditure (G) + Gross Domestic Capital Formation (I) + Net Exports (X - M).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Real GDP is Superior to Nominal GDP as an Indicator of Welfare',
        content: 'Nominal GDP measures the monetary value of current output evaluated at prevailing market prices. If a country experiences severe inflation while actual physical production remains flat or declines, Nominal GDP will still register an artificial increase. Conversely, Real GDP measures physical output evaluated at constant base-year prices, neutralizing the distortion of inflation. Therefore, an increase in Real GDP reflects an actual expansion in the physical basket of goods and services available to society, making it the only scientifically valid metric of economic growth.',
        keyTakeaway: 'Real GDP strips out inflationary distortions, measuring true physical production growth.',
      },
    ],
    keyConcepts: [
      { term: 'Intermediate Consumption', explanation: 'The expenditure incurred by firms on raw materials and non-factor inputs that are completely used up in the production process during a year.' },
      { term: 'Double Counting', explanation: 'The error of counting the value of a commodity more than once at various intermediate stages of production, artificially inflating national income.' },
    ],
    importantDates: [],
    importantPeople: [
      { name: 'Simon Kuznets', role: 'Nobel Laureate in Economics', contribution: 'Pioneered standard modern methods of National Income Accounting.' },
    ],
    definitions: [
      { term: 'GDP Deflator', definition: 'A comprehensive measure of inflation calculated as the ratio of Nominal GDP to Real GDP multiplied by 100.', context: 'Macroeconomics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'National Income equates Production, Income, and Expenditure. Aggregates: GDP_MP + NFIA = GNP_MP; GNP - Depreciation = NNP_MP; NNP_MP - NIT = NNP_FC (National Income). Three measurement methods: Value Added (Value of Output - Intermediate Cost), Income (Compensation + Operating Surplus + Mixed Income), and Expenditure (C + I + G + X - M). Real GDP isolates physical growth from inflation.',
      goldenPoints: ['National Income is formally defined as Net National Product at Factor Cost (NNP_FC).', 'The problem of Double Counting is resolved by counting only final goods or calculating Value Added at each stage.'],
      mindMapSteps: ['Circular Flow (Real vs Money Flow) → Aggregates Conversion (Gross/Net, Domestic/National, MP/FC) → 3 Methods (Value Added, Income, Expenditure) → Nominal vs Real GDP & Deflator'],
      commonPitfalls: ['Transfer payments (pensions, scholarships, pocket money) are unearned receipts and are strictly excluded from national income calculations.'],
    },
    flashcards: [
      { id: 'fc-12-e1-1', front: 'What is the formal economic definition of National Income?', back: 'Net National Product at Factor Cost (NNP_FC).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c12-e1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following items is strictly EXCLUDED when computing National Income by the Income Method?',
        options: ['Wages and salaries in cash', 'Old-age retirement pension for services rendered', 'Old-age welfare transfer pension', 'Operating surplus profits'],
        correctOptionIndex: 2,
        answer: 'Option (C) Old-age welfare transfer pension (transfer payments involve no factor production and are excluded)',
      },
    ],
  },
  {
    id: 'c12-eco-ch2',
    classLevel: 12,
    subject: 'economics',
    chapterNumber: 2,
    title: 'Money and Banking',
    subtitle: 'Functions of Money, Commercial Banks & Credit Creation (Money Multiplier), RBI Functions, Repo Rate, Reverse Repo, CRR, SLR',
    overview: 'Money overcomes the double coincidence of wants inherent in barter economies. Discover the modern fiat money supply (M1, M2, M3, M4), how commercial banks create credit through fractional reserves, and how the Reserve Bank of India controls liquidity via monetary policy.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Barter System and Functions of Money',
        bullets: [
          'Barter system suffered from fundamental limitations: lack of double coincidence of wants, absence of common measure of value, difficulty of deferred payments, and lack of store of value.',
          'Functions of Money: (1) Primary: Medium of Exchange and Measure of Value (Unit of Account); (2) Secondary: Standard of Deferred Payments and Store of Value.',
          'Money Supply Measures: M1 = Currency held by public + Demand deposits of commercial banks + Other deposits with RBI; M1 is the most liquid measure.',
        ],
      },
      {
        title: 'Credit Creation by Commercial Banks',
        bullets: [
          'Commercial banks create credit by lending out fractional shares of primary cash deposits.',
          'Legal Reserve Ratio (LRR): Fraction of deposits banks are legally required to keep as cash reserves (consisting of CRR + SLR).',
          'Money Multiplier = 1 / LRR. Total Credit Created = Initial Deposit * (1 / LRR).',
          'Example: If initial deposit is ₹1,000 and LRR is 10% (0.1), total credit created in the banking system is ₹1,000 * 10 = ₹10,000.',
        ],
      },
      {
        title: 'Central Bank (RBI) and Monetary Policy Tools',
        bullets: [
          'RBI established on 1 April 1935; sole authority to issue currency notes (except ₹1 note/coins issued by Ministry of Finance); Banker to Government; Banker’s Bank and Lender of Last Resort.',
          'Quantitative Credit Control Tools: (1) Repo Rate: Rate at which RBI lends short-term funds to commercial banks against government securities (raising repo rate reduces money supply to curb inflation); (2) Reverse Repo Rate: Rate at which RBI absorbs excess liquidity from banks; (3) Cash Reserve Ratio (CRR): Percentage of net demand deposits banks must keep as cash with RBI; (4) Statutory Liquidity Ratio (SLR): Percentage of deposits banks must keep with themselves in liquid assets (gold, govt securities).',
          'Qualitative Credit Control Tools: Margin requirements, moral suasion, selective credit controls.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How the Repo Rate Controls National Inflation',
        content: 'The Repo Rate (Repurchase Rate) is the benchmark interest rate at which the Reserve Bank of India lends short-term liquidity to commercial banks. When the economy experiences high inflation caused by excessive demand, the RBI raises the repo rate. Borrowing from the central bank becomes costlier for commercial banks, prompting them to increase their own lending interest rates on home loans, business loans, and consumer credit. Higher borrowing costs discourage private borrowing and investments, reducing aggregate demand and dampening inflationary pressure.',
        keyTakeaway: 'Raising the repo rate increases commercial interest rates, cooling borrowing and inflation.',
      },
    ],
    keyConcepts: [
      { term: 'Money Multiplier', explanation: 'The degree to which the banking system can expand the money supply through the credit creation process, calculated as 1 divided by the Legal Reserve Ratio (1/LRR).' },
      { term: 'Cash Reserve Ratio (CRR)', explanation: 'The statutory minimum percentage of total customer deposits that commercial banks must maintain in cash reserves with the Central Bank.' },
    ],
    importantDates: [
      { date: '1 April 1935', event: 'Reserve Bank of India established', significance: 'Founded under the Reserve Bank of India Act 1934 in Calcutta.' },
      { date: '1969', event: 'Nationalisation of 14 major commercial banks', significance: 'State control over banking credit deployment.' },
    ],
    importantPeople: [
      { name: 'Dr. C.D. Deshmukh', role: 'First Indian Governor of RBI', contribution: 'Guided the Reserve Bank through post-independence transition.' },
    ],
    definitions: [
      { term: 'Fiat Money', definition: 'Currency that has no intrinsic value of its own (unlike gold or silver coins) but is established as legal tender by government decree.', context: 'Monetary theory.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Money eliminates barter’s double coincidence problem. Functions: Medium of exchange, Unit of account, Store of value, Standard of deferred payments. M1 is currency + demand deposits. Commercial banks multiply deposits (Money Multiplier = 1/LRR). The Reserve Bank of India controls liquidity via Repo Rate, Reverse Repo, CRR, SLR, Open Market Operations, and Margin Requirements.',
      goldenPoints: ['Money Multiplier formula is 1 / LRR.', 'The Reserve Bank of India was established on 1 April 1935.'],
      mindMapSteps: ['Barter Deficiencies & 4 Functions of Money → M1 Money Supply → Fractional Reserve Banking & Credit Multiplier (1/LRR) → RBI Quantitative (Repo, CRR, SLR) & Qualitative Tools'],
      commonPitfalls: ['The Reserve Bank of India issues all paper banknotes in India, except the ₹1 note which is signed and issued by the Finance Secretary of India.'],
    },
    flashcards: [
      { id: 'fc-12-e2-1', front: 'If the Legal Reserve Ratio (LRR) is 20%, what is the value of the Money Multiplier?', back: '5 (calculated as 1 / 0.20 = 5).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c12-e2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'If the Legal Reserve Ratio (LRR) is fixed at 10%, what will be the total credit created by the banking system from an initial primary deposit of ₹5,000?',
        options: ['₹5,000', '₹25,000', '₹50,000', '₹500,000'],
        correctOptionIndex: 2,
        answer: 'Option (C) ₹50,000 (Formula: Initial Deposit * (1 / LRR) = 5000 * (1 / 0.1) = ₹50,000)',
      },
    ],
  },
];

export const CHAPTERS_CLASS_12: Chapter[] = RAW_CHAPTERS_CLASS_12.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_12[ch.id];
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
