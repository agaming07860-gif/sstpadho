import { Chapter } from '../types/sst';
import { FULL_NOTES_CLASS_7 } from './fullNotesClass7';

const RAW_CHAPTERS_CLASS_7: Chapter[] = [
  // ==========================================
  // HISTORY: Our Pasts - II
  // ==========================================
  {
    id: 'c7-hist-ch1',
    classLevel: 7,
    subject: 'history',
    chapterNumber: 1,
    title: 'Tracing Changes Through a Thousand Years',
    subtitle: 'Cartography (Al-Idrisi vs French Cartographer), Changing Terminologies (Hindustan, Foreigner), and Archives',
    overview: 'The thousand years between 700 and 1750 CE witnessed dramatic linguistic, technological (Persian wheel, spinning wheel), agricultural (potatoes, corn, tea), and political changes across the Indian subcontinent.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Cartography & Changing Meanings of Words',
        bullets: [
          'Al-Idrisi (Arab geographer, 1154 CE): South India was shown at the top, Sri Lanka at the top, place names in Arabic.',
          'French Cartographer (1720s): South India at the bottom; familiar coastline used by European sailors.',
          'Term "Hindustan": In 13th century (Minhaj-i-Siraj), meant Punjab, Haryana, and land between Ganga and Yamuna; Babur used it for geography and fauna; today it means the modern nation-state of India.',
          'Term "Foreigner" (Pardesi/Ajnabi): In medieval times, meant any stranger who appeared in a village; today means someone who is not an Indian.',
        ],
      },
      {
        title: 'New Technologies & Social Groups',
        bullets: [
          'Inventions: Persian wheel in irrigation, spinning wheel in weaving, firearms in combat.',
          'Crops: Potatoes, corn, chillies, tea, and coffee brought by travelers.',
          'Rajputs ("son of a ruler"): Emerged as prominent warrior group claiming Kshatriya status; other groups: Marathas, Sikhs, Jats, Ahoms, Kayasthas (scribes).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Jatis and Their Regulations',
        content: 'As society became more differentiated, people were grouped into jatis or sub-castes and ranked on the basis of their backgrounds and occupations. Ranks were not fixed permanently; they varied according to the power, influence, and resources controlled by members of the jati. Each jati framed its own rules and regulations to manage the conduct of its members, enforced by an assembly of elders called the Jati Panchayat.',
        keyTakeaway: 'Jati rules were fluid and local, enforced by autonomous Jati Panchayats alongside village councils.',
      },
    ],
    keyConcepts: [
      { term: 'Cartographer', explanation: 'A person who draws or produces maps.' },
      { term: 'Jati Panchayat', explanation: 'An assembly of elder members in a sub-caste responsible for enforcing customary rules and social conduct.' },
    ],
    importantDates: [
      { date: '1154 CE', event: 'Al-Idrisi creates world map', significance: 'Presents upside-down perspective of Indian subcontinent.' },
    ],
    importantPeople: [
      { name: 'Minhaj-i-Siraj', role: '13th-Century Chronicler', contribution: 'Used "Hindustan" for lands under Delhi Sultanate.' },
      { name: 'Ziyauddin Barani', role: '14th-Century Chronicler', contribution: 'Wrote two editions of Tarikh-i-Firuz Shahi.' },
    ],
    definitions: [
      { term: 'Archive', definition: 'A place where official historical documents and manuscripts are stored.', context: 'Historical source.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Medieval India (700-1750 CE) transformed through new technologies (Persian wheel, firearms), new foods (potatoes, chillies), and shifting words (Hindustan, foreigner). Rajputs rose to prominence while Jatis formed self-governing panchayats.',
      goldenPoints: ['Persian wheel was a major medieval technological breakthrough in irrigation.', 'Al-Idrisi’s map placed South India at the top where North India is expected.'],
      mindMapSteps: ['Cartography Changes → Shifting Terminologies → New Technologies & Foods → Rise of Rajputs & Jatis'],
      commonPitfalls: ['In the medieval period, a "foreigner" meant any outsider from a different village, not someone from another country.'],
    },
    flashcards: [
      { id: 'fc-7-h1-1', front: 'What did the word "foreigner" mean in the medieval period?', back: 'Any stranger who was not part of that village society or culture.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which 14th-century chronicler wrote his chronicle first in 1356 and another version two years later?',
        options: ['Al-Biruni', 'Ziyauddin Barani', 'Minhaj-i-Siraj', 'Amir Khusrau'],
        correctOptionIndex: 1,
        answer: 'Option (B) Ziyauddin Barani',
      },
    ],
  },
  {
    id: 'c7-hist-ch2',
    classLevel: 7,
    subject: 'history',
    chapterNumber: 2,
    title: 'New Kings and Kingdoms',
    subtitle: 'Tripartite Struggle, Cholas (Rajaraja I, Rajendra I), Brihadisvara Temple, Bronze Sculptures, and Chola Administration',
    overview: 'Between the 7th and 12th centuries, regional dynasties (Gurjara-Pratiharas, Rashtrakutas, Palas) fought over Kannauj. In the South, the Cholas built a maritime empire, bronze art masterpieces, and autonomous village assemblies.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Emergence of New Dynasties & Tripartite Struggle',
        bullets: [
          'Samantas: Subordinate landlords/warriors who gained power, declared themselves Maha-samanta, and overthrew overlords (e.g. Rashtrakuta chief Dantidurga performed Hiranya-garbha "golden womb" ritual to become Kshatriya).',
          'Tripartite Struggle: Centuries-long warfare between Gurjara-Pratiharas, Rashtrakutas, and Palas to control the prized city of Kannauj in the Ganga valley.',
        ],
      },
      {
        title: 'The Imperial Cholas (Tanjavur & Ganga Valley)',
        bullets: [
          'Vijayalaya captured Kaveri delta from Muttaraiyar and built Tanjavur city.',
          'Rajaraja I (985 CE): Reorganized administration; built magnificent Brihadisvara Temple at Tanjavur.',
          'Rajendra I: Led naval expeditions to Sri Lanka and SE Asia (Srivijaya); marched to Ganga and founded Gangaikondacholapuram.',
          'Chola Bronze Statues: Famous Nataraja cast using the lost-wax technique; among the finest in world art.',
        ],
      },
      {
        title: 'Chola Village Administration (Uttiramerur Inscription)',
        bullets: [
          'Ur: Settlement of peasant cultivators; Nadu: Group of villages that handled tax collection and justice.',
          'Sabha: Assembly of prominent brahmin landowners; divided into committees (irrigation, gardens, temples).',
          'Election by lottery: Names of eligible members written on palm-leaf tickets, put in an earthen pot, and drawn by a young boy.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Lost-Wax Technique in Chola Bronze Casting',
        content: 'Chola bronze sculptures were created using the "cire perdue" or lost-wax technique: (1) An image was first crafted in wax; (2) Covered with clay and allowed to dry in the sun; (3) Heated so the melted wax flowed out through a small hole; (4) Molten bronze poured in through the hole; (5) Once cooled, the clay cover was removed and the bronze idol carefully polished.',
        keyTakeaway: 'The lost-wax technique enabled intricate kinetic sculptures like the Dancing Shiva (Nataraja).',
      },
    ],
    keyConcepts: [
      { term: 'Tripartite Struggle', explanation: 'The prolonged conflict among the Gurjara-Pratihara, Rashtrakuta, and Pala dynasties for supremacy over Kannauj.' },
      { term: 'Lost-Wax Technique', explanation: 'A metallurgical method of casting hollow or solid bronze statues using wax models enclosed in clay moulds.' },
    ],
    importantDates: [
      { date: '985 CE', event: 'Rajaraja I ascends Chola throne', significance: 'Imperial expansion and construction of Tanjavur temple.' },
    ],
    importantPeople: [
      { name: 'Rajaraja I', role: 'Chola Emperor', contribution: 'Built Brihadisvara Temple and reorganized provincial administration.' },
      { name: 'Rajendra I', role: 'Chola Emperor', contribution: 'Conquered Sri Lanka, crossed Ganga, built Gangaikondacholapuram.' },
      { name: 'Dantidurga', role: 'Rashtrakuta Founder', contribution: 'Performed Hiranya-garbha ritual to establish Rashtrakuta dynasty.' },
    ],
    definitions: [
      { term: 'Brahmadeya', definition: 'Land gifted to Brahmins by kings, usually exempted from regular agricultural taxes.', context: 'Chola land grants.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Samantas overthrew overlords (Dantidurga). The Tripartite Struggle contested Kannauj. The Cholas (Rajaraja I, Rajendra I) dominated South India with naval expeditions, the Brihadisvara temple, lost-wax bronze sculptures, and democratic Sabha committees documented at Uttiramerur.',
      goldenPoints: ['Chola bronze sculptures (like Nataraja) were cast using the lost-wax technique.', 'Uttiramerur inscriptions describe the lottery system of electing Sabha committee members.'],
      mindMapSteps: ['Samantas & Tripartite Struggle → Chola Rise under Vijayalaya → Rajaraja & Rajendra I → Lost-Wax Bronzes & Sabha Administration'],
      commonPitfalls: ['Rajendra I built Gangaikondacholapuram, while Rajaraja I built the Brihadisvara temple at Tanjavur.'],
    },
    flashcards: [
      { id: 'fc-7-h2-1', front: 'Which method was used to create world-famous Chola bronze statues?', back: 'The lost-wax (cire perdue) casting technique.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which inscription provides detailed evidence of how Chola village Sabhas were organized and elected?',
        options: ['Aihole inscription', 'Allahabad pillar', 'Uttiramerur inscription', 'Mehrauli inscription'],
        correctOptionIndex: 2,
        answer: 'Option (C) Uttiramerur inscription (Tamil Nadu)',
      },
    ],
  },
  {
    id: 'c7-hist-ch3',
    classLevel: 7,
    subject: 'history',
    chapterNumber: 3,
    title: 'The Delhi Sultans',
    subtitle: 'Mamluk, Khalji, and Tughluq Dynasties, Raziyya Sultan, Alauddin Khalji’s Market Controls, Muhammad Tughluq',
    overview: 'Delhi became a major commercial and political capital under the Tomara Rajputs, Chauhans, and five dynasties of the Delhi Sultanate (1206-1526). Discover fortified garrison towns, the Iqtadari system, and administrative experiments of Alauddin Khalji and Muhammad Tughluq.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Dynasties of the Delhi Sultanate',
        bullets: [
          'Early Turkish Rulers (1206-1290): Qutbuddin Aibak, Iltutmish, Raziyya Sultan (first woman sultan, removed in 1240 because nobles resented female ruler), Balban.',
          'Khalji Dynasty (1290-1320): Alauddin Khalji expanded empire to South India.',
          'Tughluq Dynasty (1320-1414): Ghiyasuddin, Muhammad bin Tughluq, Firuz Shah Tughluq.',
          'Sayyid (1414-1451) and Lodi Dynasty (1451-1526): Ended with Babur defeating Ibrahim Lodi in 1526.',
        ],
      },
      {
        title: 'Administration & The Iqta System',
        bullets: [
          'Iqta: Land granted to military commanders (Iqtadars or Muqtis) in exchange for maintaining troops and collecting revenue.',
          'Bandagan: Special military slaves purchased and trained for high civil/military posts, preferred over untrustworthy noble families.',
          'Taxes: Kharaj (tax on cultivation, 50% of produce), tax on cattle, and tax on houses.',
        ],
      },
      {
        title: 'Alauddin Khalji vs Muhammad bin Tughluq',
        bullets: [
          'Alauddin Khalji: Fixed prices of all essential goods in Delhi; severe punishment for cheating weights; paid soldiers cash; successfully repulsed Mongol invasions.',
          'Muhammad bin Tughluq: Shifted capital to Daulatabad (disaster; forced people to walk 1500 km); introduced copper token currency (counterfeited everywhere); planned invasions of Transoxiana.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'From Garrison Town to Empire',
        content: 'In the early 13th century, Delhi Sultan control rarely went beyond heavily fortified towns occupied by garrisons. Controlling hinterlands—the adjacent lands that supplied goods and grain—was extremely difficult due to rebellion, war, and bad weather severing fragile communication routes. Consolidation occurred under Balban and aggressive expansion under Alauddin Khalji and Muhammad Tughluq, whose armies marched across South India, seizing gold, elephants, and horses.',
        keyTakeaway: 'The Sultanate evolved from isolated military garrisons to a centralized subcontinent-spanning empire.',
      },
    ],
    keyConcepts: [
      { term: 'Iqta', explanation: 'A territorial revenue assignment granted to a military commander (Muqti) in return for maintaining troops for the Sultan.' },
      { term: 'Kharaj', explanation: 'An agricultural land tax levied by the Delhi Sultans, amounting to about 50 percent of the peasant’s crop yield.' },
    ],
    importantDates: [
      { date: '1236 CE', event: 'Raziyya Sultan ascends throne', significance: 'First female monarch of the Delhi Sultanate.' },
      { date: '1526 CE', event: 'First Battle of Panipat', significance: 'Babur defeats Ibrahim Lodi; Mughal empire founded.' },
    ],
    importantPeople: [
      { name: 'Raziyya Sultan', role: 'Sultan of Delhi', contribution: 'Ruled with courage; chronicler Minhaj-i-Siraj noted she was more capable than all her brothers.' },
      { name: 'Alauddin Khalji', role: 'Khalji Sultan', contribution: 'Introduced strict market price regulations and defended against Mongol hordes.' },
      { name: 'Muhammad bin Tughluq', role: 'Tughluq Sultan', contribution: 'Visionary ruler known for controversial token currency and capital shift.' },
    ],
    definitions: [
      { term: 'Garrison Town', definition: 'A fortified settlement with soldiers stationed to defend a territory.', context: 'Sultanate military posts.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Delhi transformed from a garrison town into a vast Sultanate across 5 dynasties (Mamluk, Khalji, Tughluq, Sayyid, Lodi). Raziyya broke gender barriers. Muqtis collected revenue from Iqtas. Alauddin strictly controlled market prices, while Muhammad Tughluq experimented with token currency and capital relocation.',
      goldenPoints: ['Kharaj was agricultural tax equal to 50% of the harvest.', 'Token currency introduced by Muhammad bin Tughluq failed due to widespread counterfeiting.'],
      mindMapSteps: ['5 Sultanate Dynasties → Raziyya’s Reign → Iqta & Bandagan System → Alauddin’s Market Controls vs Tughluq’s Experiments'],
      commonPitfalls: ['Token currency under Muhammad Tughluq was made of cheap bronze/copper, not paper banknotes.'],
    },
    flashcards: [
      { id: 'fc-7-h3-1', front: 'In which year was Raziyya Sultan removed from the throne of Delhi?', back: '1240 CE.', category: 'date' },
    ],
    questions: [
      {
        id: 'c7-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which Delhi Sultan introduced strict market price controls on grain, cloth, and cattle in Delhi?',
        options: ['Balban', 'Alauddin Khalji', 'Muhammad bin Tughluq', 'Firuz Shah Tughluq'],
        correctOptionIndex: 1,
        answer: 'Option (B) Alauddin Khalji',
      },
    ],
  },
  {
    id: 'c7-hist-ch4',
    classLevel: 7,
    subject: 'history',
    chapterNumber: 4,
    title: 'The Mughal Empire',
    subtitle: 'Babur to Aurangzeb, Mansabdari System, Zabt & Zamindars, Akbar’s Sulh-i Kul, and Ain-i Akbari',
    overview: 'Ruling as descendants of Timur and Genghis Khan, the Mughals created an enduring pan-regional empire. Akbar’s brilliant administrative framework—Mansabdari, Zabt land revenue, and the universal peace philosophy of Sulh-i Kul—built the empire’s foundation.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Great Mughal Emperors',
        bullets: [
          'Babur (1526-1530): Defeated Ibrahim Lodi at Panipat (1526) and Rana Sanga at Khanwa (1527) using cannons and matchlocks.',
          'Humayun (1530-1556): Overthrown by Afghan Sher Shah Suri; recaptured Delhi in 1555.',
          'Akbar (1556-1605): Crowned at age 13; expanded empire across Gujarat, Bengal, Kashmir, Deccan; abolished Jizya; patronized arts.',
          'Jahangir (1605-1627) & Shah Jahan (1627-1658): Patronized painting and monumental architecture (Taj Mahal, Red Fort).',
          'Aurangzeb (1658-1707): Exhausted treasury in 25-year Deccan wars fighting the Marathas.',
        ],
      },
      {
        title: 'Mansabdari System & Zabt Revenue',
        bullets: [
          'Mansabdar: Individual holding a rank (mansab) determined by "Zat" (numerical rank deciding salary and status) and "Sawar" (number of cavalrymen required to maintain).',
          'Salaries paid through revenue assignments called "Jagirs" (similar to Iqtas, but mansabdars did not reside in or administer jagirs directly).',
          'Zabt System: Todar Mal (Akbar’s finance minister) carried out careful survey of crop yields and prices over 10 years (1570-1580); fixed cash revenue per bigha.',
        ],
      },
      {
        title: 'Akbar’s Sulh-i Kul (Universal Peace)',
        bullets: [
          'Akbar held philosophical debates at Ibadat Khana at Fatehpur Sikri with Muslim ulema, Hindu brahmins, Jesuit priests, and Zoroastrians.',
          'Formulated Sulh-i Kul (universal peace): An ethical system focused on honesty, justice, and peace rather than discrimination among religions.',
          'Abul Fazl wrote Akbar’s three-volume history: "Akbarnama" and "Ain-i Akbari".',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Akbarnama and the Ain-i Akbari',
        content: 'Abul Fazl wrote a three-volume history of Akbar’s reign titled "Akbarnama". The first volume dealt with Akbar’s ancestors; the second recorded the events of his reign; the third volume is the famous "Ain-i Akbari". It provides extraordinary statistical details on Akbar’s administration, army, household revenues, crops, yields, wages, and the religious traditions of the people of India.',
        keyTakeaway: 'The Ain-i Akbari is a masterpiece of administrative statistics and cultural documentation.',
      },
    ],
    keyConcepts: [
      { term: 'Mansabdar', explanation: 'A military or civil officer in the Mughal administrative hierarchy holding a ranked post determined by Zat and Sawar ratings.' },
      { term: 'Sulh-i Kul', explanation: 'Akbar’s state doctrine of "universal peace" advocating religious tolerance, justice, and harmony among all faiths.' },
    ],
    importantDates: [
      { date: '1526 CE', event: 'First Battle of Panipat', significance: 'Babur defeats Ibrahim Lodi.' },
      { date: '1556 CE', event: 'Second Battle of Panipat', significance: 'Akbar defeats Hemu.' },
    ],
    importantPeople: [
      { name: 'Akbar', role: 'Third Mughal Emperor', contribution: 'Formulated Mansabdari, abolished Jizya, pioneered Sulh-i Kul.' },
      { name: 'Todar Mal', role: 'Finance Minister', contribution: 'Designed the landmark Zabt land revenue assessment system.' },
      { name: 'Abul Fazl', role: 'Grand Vizier & Historian', contribution: 'Authored Akbarnama and Ain-i Akbari.' },
    ],
    definitions: [
      { term: 'Jagir', definition: 'A revenue assignment given to a Mughal Mansabdar in lieu of cash salary.', context: 'Mughal revenue.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'From Babur’s victory at Panipat (1526) to Akbar’s administrative zenith, the Mughals unified India. Akbar instituted Mansabdars (Zat/Sawar ranks), Jagirs, Todar Mal’s Zabt crop survey, and the tolerance doctrine of Sulh-i Kul, documented in Abul Fazl’s Ain-i Akbari.',
      goldenPoints: ['Zat determined the rank and salary of a Mansabdar in the Mughal hierarchy.', 'Sulh-i Kul was Akbar’s principle of universal peace and religious tolerance.'],
      mindMapSteps: ['Babur to Aurangzeb Lineage → Mansabdari (Zat & Sawar) → Todar Mal’s Zabt Revenue → Sulh-i Kul & Ain-i Akbari'],
      commonPitfalls: ['Mansabdars did not live in their Jagirs; revenue was collected for them by their servants while they served elsewhere.'],
    },
    flashcards: [
      { id: 'fc-7-h4-1', front: 'What did the term "Zat" indicate in the Mughal Mansabdari system?', back: 'The numerical value determining the rank, status, and salary of a Mansabdar.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who was Akbar’s revenue minister who carried out the 10-year agricultural survey for the Zabt system?',
        options: ['Abul Fazl', 'Birbal', 'Todar Mal', 'Bairam Khan'],
        correctOptionIndex: 2,
        answer: 'Option (C) Raja Todar Mal',
      },
    ],
  },
  {
    id: 'c7-hist-ch5',
    classLevel: 7,
    subject: 'history',
    chapterNumber: 5,
    title: 'Devotional Paths to the Divine',
    subtitle: 'Bhakti & Sufi Movements, Nayanars & Alvars, Shankara & Ramanuja, Basavanna’s Virashaivism, Kabir, Guru Nanak',
    overview: 'Between the 7th and 17th centuries, devotional saints rejected ritual caste divisions, singing soulful poetry in vernacular tongues. The Bhakti movement and Sufi silsilas embraced personal love of God accessible to everyone.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Nayanars, Alvars, Shankara, and Ramanuja',
        bullets: [
          'Nayanars (saints devoted to Shiva, 63 total) and Alvars (saints devoted to Vishnu, 12 total, including woman saint Andal); composed Divya Prabandham and Tevaram.',
          'Shankara (8th century, Kerala): Advocated Advaita (doctrine of non-dualism, oneness of individual soul with Brahman).',
          'Ramanuja (11th century, Tamil Nadu): Advocated Vishishtadvaita (qualified non-dualism; devotion through grace of Vishnu).',
        ],
      },
      {
        title: 'Virashaivism, Maharashtra Saints, and Mirabai',
        bullets: [
          'Basavanna’s Virashaivism (Karnataka, 12th century): Fought against caste inequality and idolatry via vachanas.',
          'Maharashtra Saints (Jnaneshwar, Namdev, Eknath, Tukaram): Centered around Vithoba temple at Pandharpur; rejected social discrimination.',
          'Mirabai: Rajput princess married into Mewar royal family; disciple of untouchable saint Ravidas; sang passionate bhajans to Lord Krishna.',
        ],
      },
      {
        title: 'Kabir and Guru Nanak',
        bullets: [
          'Kabir (15th-16th century, Varanasi): Weaved ideas into sakhis and pads; rejected both external Hindu ceremonies and Islamic orthodox rituals; taught formless Supreme God.',
          'Guru Nanak (1469-1539, Talwandi/Nankana Sahib): Preached worship of one God (Sat Nam); established common kitchen (Langar); succeeded by Guru Angad who created Gurmukhi script; teachings compiled into Guru Granth Sahib by Guru Arjan.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Sufis and the Chishti Silsila',
        content: 'Sufis were Muslim mystics who rejected outer ritualism and emphasized love, devotion to God, and compassion toward all human beings. They organized into orders or silsilas. The most influential order in India was the Chishti silsila, which included Khwaja Muinuddin Chishti of Ajmer, Qutbuddin Bakhtiyar Kaki of Delhi, Baba Farid of Punjab, Hazrat Nizamuddin Auliya of Delhi, and Bandanawaz Gisudaraz of Gulbarga. Their hospices (khanqahs) were open to people of all castes and creeds.',
        keyTakeaway: 'Khanqahs were inclusive spiritual centers of communal harmony.',
      },
    ],
    keyConcepts: [
      { term: 'Advaita', explanation: 'The philosophical doctrine of non-dualism taught by Shankara, asserting that the individual soul and the universal Brahman are one.' },
      { term: 'Langar', explanation: 'A community kitchen established by Guru Nanak where all people eat together regardless of caste, creed, or gender.' },
    ],
    importantDates: [
      { date: '1469 CE', event: 'Birth of Guru Nanak', significance: 'Founder of Sikhism.' },
      { date: '1604 CE', event: 'Guru Granth Sahib compiled', significance: 'Holy scripture of Sikhism compiled by Guru Arjan.' },
    ],
    importantPeople: [
      { name: 'Kabir', role: 'Mystic Poet', contribution: 'Exposed religious hypocrisy through vernacular couplets (Dohas).' },
      { name: 'Guru Nanak', role: 'First Sikh Guru', contribution: 'Established the ideals of Nam, Dan, and Isnan and the Langar.' },
      { name: 'Mirabai', role: 'Bhakti Saint', contribution: 'Composed devotional Krishna songs defying royal palace conventions.' },
    ],
    definitions: [
      { term: 'Khanqah', definition: 'A Sufi hospice or monastery where Sufi masters held spiritual assemblies and welcomed travelers.', context: 'Sufism.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Bhakti and Sufi movements swept medieval India. Nayanars (Shiva) and Alvars (Vishnu) started devotional poetry in South India. Shankara (Advaita) and Ramanuja debated philosophy. Kabir and Guru Nanak preached one formless God and social equality, while Chishti Sufis established inclusive khanqahs.',
      goldenPoints: ['Alvars were devoted to Vishnu and Nayanars were devoted to Shiva.', 'Guru Nanak introduced the practice of Langar (free common kitchen).'],
      mindMapSteps: ['Nayanars & Alvars → Shankara (Advaita) vs Ramanuja → Virashaivism & Maharashtra → Kabir & Guru Nanak → Chishti Sufis'],
      commonPitfalls: ['Shankara taught Advaita (non-dualism), while Ramanuja taught Vishishtadvaita (qualified non-dualism).'],
    },
    flashcards: [
      { id: 'fc-7-h5-1', front: 'Who compiled the Adi Granth (later Guru Granth Sahib) in 1604?', back: 'Guru Arjan, the fifth Sikh Guru.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-h5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which female Alvar saint is renowned for her devotional songs to Lord Vishnu compiled in the Divya Prabandham?',
        options: ['Mirabai', 'Andal', 'Akka Mahadevi', 'Janabai'],
        correctOptionIndex: 1,
        answer: 'Option (B) Andal',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY: Our Environment
  // ==========================================
  {
    id: 'c7-geo-ch1',
    classLevel: 7,
    subject: 'geography',
    chapterNumber: 1,
    title: 'Inside Our Earth',
    subtitle: 'Crust (Sial & Sima), Mantle, Core (Nife), Rock Cycle, Igneous, Sedimentary, and Metamorphic Rocks',
    overview: 'The Earth is like an onion made of concentric spherical layers: thin solid crust, semi-molten mantle, and dense molten iron-nickel core. Rocks continually transform through the dynamic Rock Cycle.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Concentric Layers of the Earth',
        bullets: [
          '1. Crust: Outermost, thinnest layer (~35 km on continents, ~5 km on ocean floors). Continental crust is SIAL (Silica + Alumina); Oceanic crust is SIMA (Silica + Magnesium).',
          '2. Mantle: Just beneath crust; extends to depth of 2,900 km.',
          '3. Core: Innermost layer; radius ~3,500 km; called NIFE (Nickel + Iron / Ferrous); extremely high temperature and pressure.',
        ],
      },
      {
        title: 'Three Types of Rocks',
        bullets: [
          '1. Igneous Rocks (Primary rocks, from Latin ignis = fire): Formed when molten magma cools. Intrusive (cools slowly deep inside, large grains: Granite) and Extrusive (magma cools rapidly on surface, fine grains: Basalt of Deccan plateau).',
          '2. Sedimentary Rocks (sedimentum = settle down): Formed by compressed layers of sediments; contain fossils of dead plants and animals (e.g., Sandstone).',
          '3. Metamorphic Rocks (metamorphose = change of form): Formed when igneous or sedimentary rocks change under intense heat and pressure (e.g. Clay changes to Slate, Limestone to Marble).',
        ],
      },
      {
        title: 'The Rock Cycle',
        bullets: [
          'Magma cools → Igneous rock → Eroded into sediments → Sedimentary rock → Intense heat/pressure → Metamorphic rock → Melts back into Magma.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Intrusive vs Extrusive Igneous Rocks',
        content: 'When molten lava erupts from volcanoes and cools rapidly on the Earth’s surface, it forms extrusive igneous rocks with very fine-grained crystalline structures, such as basalt (the Deccan Trap of western India is made of basalt). Conversely, when molten magma cools slowly deep inside the Earth’s crust, it forms intrusive igneous rocks with large, coarse crystals, such as granite (used in grinding stones and kitchen countertops).',
        keyTakeaway: 'Cooling speed dictates crystal size: fast surface cooling makes fine basalt; slow subsurface cooling makes coarse granite.',
      },
    ],
    keyConcepts: [
      { term: 'SIAL', explanation: 'The mineral constituents of the continental crust, primarily Silica (Si) and Alumina (Al).' },
      { term: 'Rock Cycle', explanation: 'The continuous geological process in which rocks change from one type to another under temperature, pressure, and weathering.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Fossils', definition: 'The preserved remains or impressions of dead plants and animals trapped within sedimentary rock layers.', context: 'Geology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Earth has 3 layers: Crust (Sial/Sima, 1% volume), Mantle (2900 km, 84% volume), and Core (Nife, 15% volume). Rocks cycle continuously: Igneous (Basalt/Granite), Sedimentary (Fossil-bearing Sandstone), and Metamorphic (Limestone into Marble).',
      goldenPoints: ['Sedimentary rocks are the only rocks that contain organic fossils.', 'Continental crust is SIAL (Silica + Alumina); oceanic crust is SIMA (Silica + Magnesium).'],
      mindMapSteps: ['Crust (Sial/Sima) → Mantle (2900 km) → Core (Nife) → 3 Rock Types → Rock Cycle Loop'],
      commonPitfalls: ['Limestone changes into Marble under metamorphism, while Clay changes into Slate.'],
    },
    flashcards: [
      { id: 'fc-7-g1-1', front: 'What minerals make up the Earth’s core (NIFE)?', back: 'Nickel (Ni) and Iron/Ferrous (Fe).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under intense heat and pressure, limestone transforms into which metamorphic rock?',
        options: ['Granite', 'Basalt', 'Marble', 'Slate'],
        correctOptionIndex: 2,
        answer: 'Option (C) Marble',
      },
    ],
  },
  {
    id: 'c7-geo-ch2',
    classLevel: 7,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Our Changing Earth',
    subtitle: 'Endogenic vs Exogenic Forces, Earthquakes & Volcanoes, Work of Rivers (Meanders, Ox-bow), Wind, and Glaciers',
    overview: 'The Earth’s crust moves on lithospheric plates driven by internal heat. Sudden endogenic forces trigger earthquakes and volcanoes, while slow exogenic forces of water, wind, and ice sculpt dramatic landforms.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'Endogenic vs Exogenic Forces',
        bullets: [
          'Endogenic Forces: Act in the interior of the Earth; cause sudden movements like earthquakes and volcanic eruptions, or slow mountain-building.',
          'Exogenic Forces: Work on the Earth’s surface; weathering and erosion by running water, wind, glaciers, and waves.',
          'Earthquake: Vibration caused by sudden plate movement; originates at Focus (interior source); point directly above on surface is Epicentre; measured on Richter scale using a Seismograph.',
        ],
      },
      {
        title: 'Work of a River',
        bullets: [
          'Waterfall: Formed when river tumbles at steep angle over hard rocks (Angel Falls in Venezuela is highest waterfall in world, 979 m).',
          'Meanders: Large twisting loops formed in plains due to continuous erosion and deposition.',
          'Ox-bow Lake: Cut-off lake formed when meander loop is sliced off during floods.',
          'Floodplains & Levees: Fertile flat land created by flood silt; raised natural banks are levees; river splits into distributaries forming a Delta.',
        ],
      },
      {
        title: 'Work of Wind and Glaciers',
        bullets: [
          'Wind (in Deserts): Mushroom rocks (eroded more at base than top); Sand dunes; Loess (fine yellow wind-blown dust, vast deposits in China).',
          'Glaciers ("rivers of ice"): Carve deep hollows that become mountain lakes; deposit glacial moraines.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How an Ox-bow Lake is Formed',
        content: 'As a river enters the plains, it twists and turns forming large bends known as meanders. Due to continuous erosion on the outer concave bank and deposition on the inner convex bank, the ends of the meander loop come closer and closer. In due course of time, especially during heavy flood season, the river cuts through the narrow neck of the loop and takes a straight course. The abandoned loop is cut off from the main river channel and forms an isolated crescent-shaped lake called an ox-bow lake.',
        keyTakeaway: 'Ox-bow lakes demonstrate continuous fluvial erosion and deposition across floodplains.',
      },
    ],
    keyConcepts: [
      { term: 'Epicentre', explanation: 'The location on the Earth’s surface directly above the earthquake’s focus, where damage is usually greatest.' },
      { term: 'Ox-bow Lake', explanation: 'A curved U-shaped lake formed when a wide meander of a river is cut off, creating a free-standing body of water.' },
    ],
    importantDates: [
      { date: '26 Jan 2001', event: 'Bhuj Earthquake in Gujarat', significance: '6.9 Richter scale earthquake caused massive destruction.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Mushroom Rock', definition: 'A rock in desert regions eroded by wind abrasion faster near the base than top, resembling a mushroom.', context: 'Aeolian landforms.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Earth’s surface changes through Endogenic (earthquakes, volcanoes) and Exogenic forces (water, wind, ice). Rivers create waterfalls, meanders, ox-bow lakes, levees, and deltas. Wind forms mushroom rocks and sand dunes. Glaciers leave moraines.',
      goldenPoints: ['Angel Falls in Venezuela is the highest waterfall in the world (979 m).', 'Earthquake intensity is measured on the Richter scale using a Seismograph.'],
      mindMapSteps: ['Endogenic vs Exogenic Forces → Earthquake Focus & Epicentre → River Work (Meanders & Ox-bows) → Desert Wind & Glaciers'],
      commonPitfalls: ['The Focus is inside the Earth where the earthquake begins; the Epicentre is the point directly above it on the Earth’s surface.'],
    },
    flashcards: [
      { id: 'fc-7-g2-1', front: 'What instrument is used to record and measure earthquakes?', back: 'A Seismograph (magnitude measured on the Richter scale).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following landforms is created by wind erosion in desert environments?',
        options: ['Ox-bow lake', 'Mushroom rock', 'Glacial moraine', 'Levee'],
        correctOptionIndex: 1,
        answer: 'Option (B) Mushroom rock',
      },
    ],
  },
  {
    id: 'c7-geo-ch3',
    classLevel: 7,
    subject: 'geography',
    chapterNumber: 3,
    title: 'Air',
    subtitle: 'Atmosphere Composition, Five Layers (Troposphere to Exosphere), Weather, Temperature, Pressure, and Winds',
    overview: 'Our planet is wrapped in a huge blanket of air called the atmosphere. Understand atmospheric composition, the five stratified layers protecting life, and how pressure differences drive global wind systems.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'Composition of the Atmosphere',
        bullets: [
          'Nitrogen (78%): Most plentiful gas; absorbed by bacteria in soil to nourish plants.',
          'Oxygen (21%): Second most plentiful; humans and animals breathe it; green plants produce it through photosynthesis.',
          'Carbon dioxide (0.03%): Creates greenhouse effect trapping heat; excess CO2 from fossil fuels causes Global Warming.',
          'Argon (0.93%) and other trace gases.',
        ],
      },
      {
        title: 'Five Layers of the Atmosphere',
        bullets: [
          '1. Troposphere: Lowest layer (avg height 13 km); contains 90% air mass; almost all weather phenomena (fog, rain, hailstorms) occur here.',
          '2. Stratosphere: Extends up to 50 km; free from clouds, ideal for flying aeroplanes; contains the vital Ozone layer shielding against UV rays.',
          '3. Mesosphere: Extends up to 80 km; meteorites burn up upon entering this layer.',
          '4. Thermosphere: 80 to 400 km; includes Ionosphere; temperature rises rapidly; reflects radio waves back to Earth.',
          '5. Exosphere: Outermost layer; extremely thin air; light gases like helium and hydrogen float into space.',
        ],
      },
      {
        title: 'Air Pressure and Winds',
        bullets: [
          'Air pressure: Highest at sea level, decreases with height; air moves from high pressure to low pressure areas.',
          'Three types of winds: Permanent winds (Trade winds, Westerlies, Easterlies), Seasonal winds (Monsoons in India), Local winds (Loo in northern India, sea breeze, land breeze).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Stratosphere is Ideal for Aeroplanes',
        content: 'The Stratosphere lies directly above the Troposphere, extending from roughly 13 km to 50 km above the Earth’s surface. It is completely free from water vapor, dust, and convective clouds that cause turbulence in the Troposphere. Because there are no storm clouds or unpredictable vertical wind updrafts, jet aeroplanes fly in the lower stratosphere for smooth, safe cruising.',
        keyTakeaway: 'Absence of convective clouds and turbulence makes the stratosphere the optimal cruising highway.',
      },
    ],
    keyConcepts: [
      { term: 'Greenhouse Effect', explanation: 'The trapping of reflected solar heat by atmospheric carbon dioxide, keeping the Earth warm enough to sustain life.' },
      { term: 'Ozone Layer', explanation: 'A protective layer in the Stratosphere that absorbs harmful ultraviolet (UV) radiation emitted by the Sun.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Insolation', definition: 'The incoming solar radiation intercepted and absorbed by the surface of the Earth.', context: 'Climatology.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Atmosphere contains 78% N2, 21% O2, and 0.03% CO2. Five layers: Troposphere (weather), Stratosphere (ozone, aeroplane flight), Mesosphere (meteorites burn), Thermosphere (radio reflection), and Exosphere. Air flows from High to Low pressure as permanent, seasonal, or local winds.',
      goldenPoints: ['The ozone layer is located in the Stratosphere.', 'All weather phenomena (rain, clouds, fog) occur exclusively in the Troposphere.'],
      mindMapSteps: ['Gas Composition (N2, O2, CO2) → 5 Layers & Functions → Insolation & Air Pressure → 3 Types of Winds'],
      commonPitfalls: ['Meteorites burn up in the Mesosphere, not in the Troposphere.'],
    },
    flashcards: [
      { id: 'fc-7-g3-1', front: 'In which atmospheric layer does the protective ozone layer reside?', back: 'The Stratosphere.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-g3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which atmospheric layer do meteorites burn up upon entering from outer space?',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
        correctOptionIndex: 2,
        answer: 'Option (C) Mesosphere',
      },
    ],
  },
  {
    id: 'c7-geo-ch4',
    classLevel: 7,
    subject: 'geography',
    chapterNumber: 4,
    title: 'Water',
    subtitle: 'Water Cycle, Salinity (Dead Sea), Waves (Tsunamis), Tides (Spring & Neap), Ocean Currents',
    overview: 'Water is continually recycled through evaporation, condensation, and precipitation. Explore the rhythmic movements of ocean waters—wind-driven surface waves, gravitational astronomical tides, and warm/cold ocean currents.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'The Water Cycle & Distribution of Water',
        bullets: [
          'Water Cycle (Hydrological Cycle): Sun’s heat causes evaporation → Water vapour cools and condenses into clouds → Precipitates as rain, snow, or sleet.',
          'Distribution: Oceans contain 97.3% (saline); Ice caps 2.0%; Groundwater 0.68%; Freshwater lakes 0.009%; Atmosphere 0.0019%; Rivers 0.0001%.',
          'Salinity: Amount of salt in grams present in 1,000 grams of water (average ocean salinity is 35 parts per thousand; Dead Sea in Israel has 340 ppt, swimmers can float).',
        ],
      },
      {
        title: 'Tides: Spring Tides and Neap Tides',
        bullets: [
          'Tides: Rhythmic rise and fall of ocean water twice in a day, caused by gravitational pull of Moon and Sun.',
          'Spring Tides (Highest tides): Occur during New Moon and Full Moon when Sun, Moon, and Earth are in a straight line.',
          'Neap Tides (Lowest tides): Occur during first and third quarter of moon when Sun and Moon pull at right angles.',
        ],
      },
      {
        title: 'Ocean Currents: Warm and Cold',
        bullets: [
          'Warm Ocean Currents: Originate near equator and move towards poles (e.g. Gulf Stream); bring warm temperatures to coastal lands.',
          'Cold Ocean Currents: Carry water from polar/higher latitudes to tropical latitudes (e.g. Labrador Current).',
          'Where warm and cold currents meet: Creates rich plankton feeding grounds, providing world’s best fishing grounds (e.g., coasts of Japan and eastern North America); also produces thick navigational fog.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Meeting of Warm and Cold Currents Creates Best Fishing Grounds',
        content: 'When warm currents (like the Gulf Stream or Kuroshio) meet cold currents (like the Labrador Current or Oyashio), the mixing of oxygen-rich cold polar water with nutrient-rich warm water creates ideal conditions for the explosive growth of plankton. Plankton is the primary food for marine fish, attracting massive schools of cod, herring, and salmon. Consequently, these convergent maritime zones—such as the Grand Banks off Newfoundland and the sea around Japan—are the most productive commercial fishing grounds on Earth.',
        keyTakeaway: 'Current mixing stimulates marine plankton blooms that support global commercial fisheries.',
      },
    ],
    keyConcepts: [
      { term: 'Spring Tide', explanation: 'An exceptionally high tide occurring at new and full moon when the gravitational pulls of the Sun and Moon reinforce each other.' },
      { term: 'Ocean Current', explanation: 'A continuous, directed horizontal movement of seawater generated by wind, Coriolis effect, temperature, and salinity differences.' },
    ],
    importantDates: [
      { date: '26 Dec 2004', event: 'Indian Ocean Tsunami', significance: '9.0 magnitude earthquake triggered massive waves devastating coastal Tamil Nadu, Andaman & Nicobar, and SE Asia.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Salinity', definition: 'The concentration of dissolved salts in water, expressed in parts per thousand (ppt).', context: 'Oceanography.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Water circulates via the hydrologic cycle (evaporation, condensation, precipitation). 97.3% is ocean salt water. Rhythmic ocean movements include wind-driven waves, gravitational tides (Spring in alignment, Neap at right angles), and currents (Gulf Stream warm, Labrador cold; their meeting fosters rich fisheries).',
      goldenPoints: ['Swimmers float effortlessly in the Dead Sea because of its 340 parts per thousand salinity.', 'Areas where warm and cold ocean currents meet provide the world’s best fishing grounds.'],
      mindMapSteps: ['Water Cycle & 97.3% Saline Distribution → Tsunami Waves → Spring vs Neap Tides → Warm vs Cold Currents & Fishing'],
      commonPitfalls: ['Spring tides happen during New Moon and Full Moon, not just in the spring season.'],
    },
    flashcards: [
      { id: 'fc-7-g4-1', front: 'What astronomical conditions create Spring Tides?', back: 'When the Sun, Moon, and Earth are aligned in a straight line (Full Moon and New Moon).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-g4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following is a warm ocean current?',
        options: ['Labrador Current', 'Gulf Stream', 'Canary Current', 'Oyashio Current'],
        correctOptionIndex: 1,
        answer: 'Option (B) Gulf Stream',
      },
    ],
  },

  // ==========================================
  // CIVICS: Social and Political Life - II
  // ==========================================
  {
    id: 'c7-civ-ch1',
    classLevel: 7,
    subject: 'civics',
    chapterNumber: 1,
    title: 'On Equality',
    subtitle: 'Universal Adult Franchise, Daily Inequalities (Kanta & Omprakash Valmiki), Mid-Day Meal, Rosa Parks & Civil Rights Act 1964',
    overview: 'Equality is the cornerstone of Indian democracy. Yet economic disparity, caste discrimination (Omprakash Valmiki’s experience), and racial injustice (Rosa Parks) show that the struggle for equality requires constant legal, educational, and social vigilance.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Political Equality vs Everyday Realities',
        bullets: [
          'Universal Adult Franchise: In polling queues, maid Kanta stands in the same line as her wealthy employer Jain Saheb, symbolizing political equality (one person, one vote).',
          'Daily inequality: When Kanta’s daughter falls sick, she has to borrow money from her employer and wait in a miserable line at an overcrowded government hospital.',
        ],
      },
      {
        title: 'Caste Discrimination: Omprakash Valmiki and the Ansaris',
        bullets: [
          'Omprakash Valmiki: Dalit writer who wrote autobiography "Joothan"; made to sweep the entire school playground for days by his headmaster instead of studying.',
          'The Ansaris: Dignified urban couple denied rented apartments because landlords made excuses upon hearing their Muslim surname.',
        ],
      },
      {
        title: 'Government Schemes & The Mid-Day Meal',
        bullets: [
          'Constitutional guarantees: Equality before law (Art 14), prohibition of discrimination (Art 15), equal opportunity, abolition of untouchability (Art 17).',
          'Mid-Day Meal Scheme: First introduced in Tamil Nadu in 2001; extended nationwide by Supreme Court; boosted attendance, reduced hunger, broke caste taboos (Dalit women hired to cook).',
          'Civil Rights Movement in USA: Rosa Parks refused to give her bus seat to a white man on 1 Dec 1955, sparking the movement that led to the Civil Rights Act of 1964.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Impact of the Mid-Day Meal Scheme',
        content: 'The Mid-Day Meal program produced three major social transformations: (1) More poor children enrolled in and regularly attended school, as parents were assured their children would receive a warm meal; (2) Caste prejudices were challenged because children of both upper and lower castes sat and ate together in the same room, and in many schools Dalit women were employed as cooks; (3) Maternal productivity improved because working mothers no longer had to interrupt their jobs to feed their children at noon.',
        keyTakeaway: 'The Mid-Day Meal scheme unified nutritional security, educational attendance, and social integration.',
      },
    ],
    keyConcepts: [
      { term: 'Universal Adult Franchise', explanation: 'The democratic right of all adult citizens to cast one vote of equal value in elections regardless of background.' },
      { term: 'Joothan', explanation: 'The autobiographical work of Dalit author Omprakash Valmiki detailing the painful caste indignities suffered during his school days.' },
    ],
    importantDates: [
      { date: '1 Dec 1955', event: 'Rosa Parks refuses to give up bus seat', significance: 'Ignited the American Civil Rights Movement.' },
      { date: '1964', event: 'Civil Rights Act passed in USA', significance: 'Prohibited racial, religious, and national origin discrimination.' },
      { date: '2001', event: 'Tamil Nadu introduces Mid-Day Meal', significance: 'First state to mandate cooked meals in all government primary schools.' },
    ],
    importantPeople: [
      { name: 'Omprakash Valmiki', role: 'Dalit Writer', contribution: 'Authored landmark autobiography "Joothan".' },
      { name: 'Rosa Parks', role: 'Civil Rights Activist', contribution: 'Sparked the Montgomery bus boycott in Alabama.' },
      { name: 'Dr. Martin Luther King Jr.', role: 'Civil Rights Leader', contribution: 'Led nonviolent crusade for African American equality.' },
    ],
    definitions: [
      { term: 'Civil Rights Movement', definition: 'A mass movement in the United States in the 1950s and 1960s demanding equal rights and an end to racial segregation for African Americans.', context: 'Democracy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Political equality (Universal Adult Franchise) contrasts with economic and social disparities (Kanta, Ansaris, Valmiki’s Joothan). Article 15 guarantees non-discrimination. The Mid-Day Meal (started in Tamil Nadu 2001) improved child attendance and broke caste barriers. Rosa Parks sparked the 1964 US Civil Rights Act.',
      goldenPoints: ['Tamil Nadu was the first state in India to introduce the Mid-Day Meal scheme.', 'Rosa Parks’ refusal on 1 Dec 1955 started the American Civil Rights Movement.'],
      mindMapSteps: ['Kanta at Polling Booth → Caste/Religious Prejudices (Valmiki, Ansaris) → Mid-Day Meal Scheme → Civil Rights Act 1964'],
      commonPitfalls: ['Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.'],
    },
    flashcards: [
      { id: 'fc-7-c1-1', front: 'Which Indian state was the first to introduce the Mid-Day Meal Scheme in 2001?', back: 'Tamil Nadu.', category: 'location' },
    ],
    questions: [
      {
        id: 'c7-c1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who wrote the famous autobiographical book "Joothan" describing school caste discrimination?',
        options: ['Dr. B.R. Ambedkar', 'Omprakash Valmiki', 'Jyotirao Phule', 'Periyar E.V. Ramasamy'],
        correctOptionIndex: 1,
        answer: 'Option (B) Omprakash Valmiki',
      },
    ],
  },
  {
    id: 'c7-civ-ch2',
    classLevel: 7,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Role of the Government in Health',
    subtitle: 'Public vs Private Healthcare (Hakim Sheik & Aman vs Ranjan), Kerala Experience, and Costa Rica Model',
    overview: 'Good health requires medical treatment, clean drinking water, sanitation, and nutrition. The stark contrast between overcrowded public hospitals and profit-driven private nursing homes highlights healthcare challenges in India.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Public vs Private Healthcare Services',
        bullets: [
          'Public Health Services: Run by the government from primary health centres (PHCs) in villages to district hospitals; low cost or free, but face long queues, staff shortages, and broken equipment (e.g. Hakim Sheik turned away by 8 state hospitals after train accident).',
          'Private Healthcare Services: Run by doctors and corporate hospitals; high cost, expensive diagnostic tests, focus on profit (Aman vs Ranjan case study).',
        ],
      },
      {
        title: 'The Kerala Experience (1996)',
        bullets: [
          'In 1996, the Kerala state government made a major change: 40% of the entire state budget was given to village Panchayats.',
          'Panchayats invested directly in clean drinking water, food rations, women’s development, and schools, leading to dramatic health improvements.',
        ],
      },
      {
        title: 'The Costa Rican Approach',
        bullets: [
          'Costa Rica (Central America) is considered one of the healthiest nations in Latin America.',
          'Constitutional decision taken decades ago not to maintain a military army; all saved military funds invested into healthcare, safe drinking water, sanitation, and housing.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Case of Hakim Sheik and Article 21',
        content: 'Hakim Sheik, a member of the Paschim Banga Khet Mazdoor Samity (PBKMS), accidentally fell off a running train in 1992 and suffered severe head injuries. He was taken to eight different government hospitals in Kolkata, but none admitted him—some lacked beds, others lacked specialized doctors or emergency equipment. He was forced to get treated at an expensive private hospital. He and PBKMS filed a case in the Supreme Court. The Court held that Article 21 guarantees the fundamental Right to Life, which includes the Right to Health, and ordered the West Bengal government to pay him compensation.',
        keyTakeaway: 'The Supreme Court ruled that the Right to Life includes timely medical care by state hospitals.',
      },
    ],
    keyConcepts: [
      { term: 'Public Health Service', explanation: 'A network of hospitals and clinics established and funded by the government through taxpayer revenues to serve all citizens.' },
      { term: 'Costa Rican Approach', explanation: 'A national policy of abolishing the military and directing national defence budgets into universal healthcare and education.' },
    ],
    importantDates: [
      { date: '1996', event: 'Kerala decentralizes 40% budget to Panchayats', significance: 'Pioneered community-led primary healthcare.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Medical Tourist', definition: 'A foreign patient traveling abroad to another country for specialized medical treatment at costs lower than in their homeland.', context: 'Healthcare industry.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Healthcare divides into under-resourced Public services and costly Private nursing homes. Hakim Sheik’s case established that Article 21 (Right to Life) includes emergency healthcare. Kerala devolved 40% of budget to Panchayats, while Costa Rica abolished its military to fund universal health.',
      goldenPoints: ['Article 21’s Right to Life includes the Right to Health according to the Supreme Court.', 'Costa Rica abolished its standing army to invest in universal healthcare.'],
      mindMapSteps: ['Public vs Private Healthcare → Hakim Sheik Supreme Court Ruling → Kerala 40% Budget Devolution → Costa Rica Model'],
      commonPitfalls: ['Public healthcare is paid for by taxpayer money, making timely care an entitlement, not charity.'],
    },
    flashcards: [
      { id: 'fc-7-c2-1', front: 'Which Central American country abolished its army to invest funds in public healthcare and education?', back: 'Costa Rica.', category: 'location' },
    ],
    questions: [
      {
        id: 'c7-c2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In 1996, what percentage of the state budget was devolved directly to village Panchayats in Kerala for health, water, and schools?',
        options: ['10%', '25%', '40%', '50%'],
        correctOptionIndex: 2,
        answer: 'Option (C) 40%',
      },
    ],
  },
  {
    id: 'c7-civ-ch3',
    classLevel: 7,
    subject: 'civics',
    chapterNumber: 3,
    title: 'How the State Government Works',
    subtitle: 'MLA, Electoral Constituencies, Ruling Party vs Opposition, Chief Minister, Legislative Assembly, and Press Conference',
    overview: 'Every state in India is divided into constituencies that elect Members of Legislative Assembly (MLAs). Explore how a majority party forms the cabinet under the Chief Minister, how debates unfold on the Assembly floor, and how government answers to the press.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Who is an MLA and How is Government Formed?',
        bullets: [
          'MLA (Member of the Legislative Assembly): Elected by registered voters of an electoral constituency for a 5-year term.',
          'Majority: The political party whose elected MLAs win more than half the seats in the state assembly forms the government (Ruling Party).',
          'The majority MLAs elect their leader who is appointed Chief Minister by the Governor; Chief Minister selects Ministers to run departments (Health, Education, PWD).',
          'All other elected MLAs form the Opposition.',
        ],
      },
      {
        title: 'A Debate in the Legislative Assembly',
        bullets: [
          'Legislative Assembly is the forum where MLAs from ruling and opposition parties debate state problems (water crisis, epidemic outbreaks).',
          'Opposition MLAs question the Minister on action taken; the Minister reassures the House and outlines government steps.',
          'Cabinet has collective responsibility; decisions must be approved by the entire Assembly.',
        ],
      },
      {
        title: 'Holding Government Accountable: Press Conference',
        bullets: [
          'Ministers hold Press Conferences where journalists ask probing questions; news reports inform the public.',
          'Government responds to public protests by sending medical teams, holding inquiries, and passing new laws.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Dual Role of an MLA',
        content: 'An MLA often wears two distinct hats: (1) As an MLA representing their local constituency, their duty is to voice the grievances of their local voters, demand funds for roads and hospitals, and question ministers on the floor of the House; (2) If the MLA is also appointed a Minister (e.g., Minister for Health or Education), they become an executive head responsible for running an entire statewide department and answering to the entire Legislative Assembly.',
        keyTakeaway: 'MLAs represent local legislative districts; ministers command statewide executive portfolios.',
      },
    ],
    keyConcepts: [
      { term: 'Constituency', explanation: 'A particular geographical area from which all registered voters choose their representative to a legislative body.' },
      { term: 'Ruling Party', explanation: 'The political party or coalition holding more than 50% of seats in the Legislative Assembly that forms the executive government.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Press Conference', definition: 'A meeting organized by government ministers with journalists where policies are announced and questions answered.', context: 'Media transparency.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'States are divided into constituencies where voters elect MLAs. The party winning >50% seats forms the government under the Chief Minister, appointed by the Governor. MLAs debate bills in the Legislative Assembly and address journalists at Press Conferences.',
      goldenPoints: ['The Governor of the state appoints the Chief Minister and Council of Ministers.', 'The political party winning more than half the total seats forms the ruling government.'],
      mindMapSteps: ['Constituencies & MLA Elections → Majority & Chief Minister Selection → Assembly Debates → Press Conference & Accountability'],
      commonPitfalls: ['The Governor is the nominal constitutional head of the state; the Chief Minister is the real political and executive head.'],
    },
    flashcards: [
      { id: 'fc-7-c3-1', front: 'Who appoints the Chief Minister of an Indian state?', back: 'The Governor of the state.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c7-c3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the group of elected representatives who meet in the Legislative Assembly to debate and enact state laws called?',
        options: ['Lok Sabha', 'Rajya Sabha', 'Vidhan Sabha (Legislative Assembly)', 'Zila Parishad'],
        correctOptionIndex: 2,
        answer: 'Option (C) Vidhan Sabha (Legislative Assembly)',
      },
    ],
  },
  {
    id: 'c7-civ-ch4',
    classLevel: 7,
    subject: 'civics',
    chapterNumber: 4,
    title: 'Struggles for Equality',
    subtitle: 'Tawa Matsya Sangh (TMS), Displaced Forest Dwellers, Right to Fish, and Cooperatives',
    overview: 'When displacement, privatization, or poverty threaten survival, ordinary citizens organize mass movements. The inspiring struggle of the Tawa Matsya Sangh in Madhya Pradesh shows how displaced tribals secured their livelihood through collective action.',
    estimatedReadTime: '13 min read',
    shortNotes: [
      {
        title: 'Displacement and Inequality',
        bullets: [
          'Dams, national parks, and urban expressways displace hundreds of thousands of forest dwellers and slum residents.',
          'Displaced people lose homes, ancestral livelihoods, and children’s schooling, receiving negligible compensation.',
        ],
      },
      {
        title: 'The Tawa Matsya Sangh (TMS) Struggle',
        bullets: [
          'Tawa Dam (built 1958-1978 in Hoshangabad, MP): Submerged huge forest areas, displacing thousands of villagers in the Satpura hills.',
          'In 1994, government gave fishing rights in Tawa reservoir to private contractors, who harassed locals and brought cheap outside labor.',
          'Villagers organized into Tawa Matsya Sangh (TMS), held rallies and chakka jams (road blockades).',
          'In 1996, MP government conceded; granted exclusive 5-year fishing lease to TMS cooperative; fishermen’s earnings increased threefold.',
        ],
      },
      {
        title: 'The Indian Constitution as a Living Document',
        bullets: [
          'Movements for equality constantly refer to the Indian Constitution to justify their demand for justice and dignity.',
          'Treating the Constitution as a living document means applying its principles of equality to everyday grassroots struggles.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Cooperatives Work: The TMS Model',
        content: 'By establishing a cooperative society, the Tawa Matsya Sangh did not simply fish; they managed the entire supply chain. The cooperative purchased the catch from members at a guaranteed fair price, established cold storage and transport trucks to carry fish directly to major city markets, and eliminated predatory middlemen. With profits retained inside the cooperative, TMS gave loans to members to repair nets and buy boats, proving that displaced communities can govern their resources with economic efficiency and ecological dignity.',
        keyTakeaway: 'Cooperatives eliminate exploitative middlemen and return economic sovereignty to producers.',
      },
    ],
    keyConcepts: [
      { term: 'Tawa Matsya Sangh (TMS)', explanation: 'A federation of fisherworker cooperatives in Madhya Pradesh that fought for the rights of displaced forest dwellers in the Tawa reservoir.' },
      { term: 'Living Document', explanation: 'A concept that the Constitution grows and responds to the real-life struggles of people for equality and dignity over time.' },
    ],
    importantDates: [
      { date: '1978', event: 'Tawa Dam completed', significance: 'Displaced thousands in Satpura hills of Madhya Pradesh.' },
      { date: '1996', event: 'Government grants fishing rights to TMS', significance: 'Landmark victory for displaced cooperative fisherworkers.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Chakka Jam', definition: 'A nonviolent protest tactic involving road blockades by demonstrators to halt vehicle traffic and demand government action.', context: 'Civil action.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Displacement due to dams deprives poor communities of livelihoods. Displaced villagers of Tawa Dam in MP organized the Tawa Matsya Sangh (TMS) to resist private contractors. In 1996, the government granted them exclusive fishing rights. The Constitution serves as a living document guiding citizens’ struggles for equality.',
      goldenPoints: ['Tawa Dam was built in the Satpura hills of Madhya Pradesh.', 'In 1996, the MP government handed over reservoir fishing rights to the Tawa Matsya Sangh.'],
      mindMapSteps: ['Dams & Displacement → Private Contractors in Tawa Reservoir → TMS Rallies & Chakka Jam → Cooperative Victory & Living Constitution'],
      commonPitfalls: ['The struggle was over reservoir fishing rights, not agricultural farming land.'],
    },
    flashcards: [
      { id: 'fc-7-c4-1', front: 'In which Indian state did the Tawa Matsya Sangh fight for displaced fisherfolk rights?', back: 'Madhya Pradesh (in the Tawa reservoir of Hoshangabad district).', category: 'location' },
    ],
    questions: [
      {
        id: 'c7-c4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Tawa Matsya Sangh is an organization fighting for the rights of displaced people from which dam project?',
        options: ['Sardar Sarovar Dam', 'Tawa Dam', 'Tehri Dam', 'Hirakud Dam'],
        correctOptionIndex: 1,
        answer: 'Option (B) Tawa Dam (in Madhya Pradesh)',
      },
    ],
  },
];

export const CHAPTERS_CLASS_7: Chapter[] = RAW_CHAPTERS_CLASS_7.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_7[ch.id];
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

