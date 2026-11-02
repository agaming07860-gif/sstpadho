import { Chapter } from '../types/sst';
import { FULL_NOTES_CLASS_8 } from './fullNotesClass8';

const RAW_CHAPTERS_CLASS_8: Chapter[] = [
  // ==========================================
  // HISTORY: Our Pasts - III
  // ==========================================
  {
    id: 'c8-hist-ch1',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 1,
    title: 'How, When and Where',
    subtitle: 'James Mill’s Periodisation, Colonial Archives, Surveys, and What Official Records Do Not Tell',
    overview: 'History is not just a memorisation of dates of royal battles. This chapter examines how colonial historian James Mill biased history into religious periods, how British survey archives recorded administration, and why subaltern voices were omitted.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'James Mill and the Periodisation of Indian History',
        bullets: [
          'In 1817, James Mill (Scottish economist and philosopher) published "A History of British India".',
          'Divided Indian history into three periods: Hindu, Muslim, and British.',
          'Claimed all Asian societies were at a lower level of civilization than Europe; portrayed British rule as an era of enlightenment and progress, ignoring the diversity of faiths in ancient and medieval India.',
          'Historians today classify history as Ancient, Medieval, and Modern (Colonial).',
        ],
      },
      {
        title: 'Colonial Archives and Detailed Surveys',
        bullets: [
          'British believed the act of writing was crucial; every instruction, plan, policy decision, and treaty was meticulously recorded.',
          'Set up record rooms attached to all administrative institutions (Collectorate, Commissioner’s office, Secretariats) and established Archives and National Museums.',
          'Surveys: Extensive revenue surveys conducted in villages to map topography, soil quality, flora, fauna, and local cropping history.',
        ],
      },
      {
        title: 'What Official Records Do Not Tell',
        bullets: [
          'Official records reflect what colonial officials thought, were interested in, and wished to preserve.',
          'They hide the experiences, suffering, and perspectives of ordinary tribals, peasants, mine workers, and the urban poor.',
          'To understand popular history, we must turn to diaries, accounts of pilgrims, vernacular newspapers, autobiographies, and folk songs.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Mill’s Periodisation is Deeply Flawed',
        content: 'James Mill divided Indian history into Hindu, Muslim, and British periods based solely on the religion of the dominant rulers. This classification is fundamentally misleading because: (1) A variety of faiths existed simultaneously during these periods—not all rulers in ancient India were Hindu (e.g. Ashoka was Buddhist, Harshavardhana patronized Buddhism); (2) It ignores the lives and beliefs of millions of ordinary people who were not defined merely by the monarch’s faith; (3) It implies that the pre-colonial era was backward, despotic, and static, which is historically false.',
        keyTakeaway: 'Periodising history purely on rulers’ religions erases diversity and justifies colonial domination.',
      },
    ],
    keyConcepts: [
      { term: 'Colonisation', explanation: 'The subjugation of one country by another, leading to wide-ranging political, economic, social, and cultural changes.' },
      { term: 'Calligrapher', explanation: 'A skilled artist who specializes in the art of beautiful, stylized handwriting used in official manuscripts before printing.' },
    ],
    importantDates: [
      { date: '1817', event: 'James Mill publishes "A History of British India"', significance: 'Introduced Hindu, Muslim, British historical periodisation.' },
    ],
    importantPeople: [
      { name: 'James Mill', role: 'Scottish Philosopher', contribution: 'Advocated British imperial dominance over India in his three-volume history.' },
    ],
    definitions: [
      { term: 'National Archives of India', definition: 'The official institution established in New Delhi in the 1920s to preserve government records and historical papers.', context: 'Historical source.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'James Mill biased history into Hindu, Muslim, and British epochs. Modern historians use Ancient, Medieval, and Colonial. British kept meticulous written records in archives and conducted revenue surveys. However, official records hide the voices of peasants, which must be recovered through diaries and vernacular literature.',
      goldenPoints: ['James Mill divided Indian history into three periods: Hindu, Muslim, and British in 1817.', 'The National Archives of India was located in New Delhi.'],
      mindMapSteps: ['James Mill’s Periodisation & Critique → Colonial Passion for Writing & Archives → Systematic Revenue Surveys → What Official Records Hide'],
      commonPitfalls: ['Do not assume colonial official documents provide an unbiased account of peasant life.'],
    },
    flashcards: [
      { id: 'fc-8-h1-1', front: 'In which year did James Mill publish "A History of British India"?', back: '1817.', category: 'date' },
    ],
    questions: [
      {
        id: 'c8-h1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who divided Indian history into three distinct periods: Hindu, Muslim, and British?',
        options: ['Lord Macaulay', 'James Mill', 'Robert Clive', 'Warren Hastings'],
        correctOptionIndex: 1,
        answer: 'Option (B) James Mill (1817)',
      },
    ],
  },
  {
    id: 'c8-hist-ch2',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 2,
    title: 'From Trade to Territory',
    subtitle: 'East India Company, Battle of Plassey (1757), Battle of Buxar (1764), Subsidiary Alliance, and Doctrine of Lapse',
    overview: 'The English East India Company arrived as a humble trading enterprise chartered by Queen Elizabeth I. Through military victories at Plassey and Buxar, the Subsidiary Alliance system, and Dalhousie’s Doctrine of Lapse, it seized political control over India.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'The Battle of Plassey (1757) and Buxar (1764)',
        bullets: [
          'In 1600, East India Company acquired royal charter giving exclusive monopoly on English trade with East.',
          'Battle of Plassey (23 June 1757): Sirajuddaulah, Nawab of Bengal, marched on Calcutta; Robert Clive bribed Mir Jafar (commander-in-chief) to betray Sirajuddaulah; first major military victory of the Company in India.',
          'Battle of Buxar (1764): Mir Qasim defeated; Mughal Emperor Shah Alam II granted the Diwani (right to collect revenue) of Bengal, Bihar, and Orissa to the Company in 1765.',
        ],
      },
      {
        title: 'Methods of Colonial Expansion',
        bullets: [
          'Subsidiary Alliance (Lord Wellesley): Indian rulers forbidden from maintaining independent armed forces; had to pay for Company troops; if ruler failed to pay, part of territory annexed (e.g. Awadh and Hyderabad).',
          'Tipu Sultan "Tiger of Mysore": Resisted British expansion; modernized army with French help; killed in Fourth Anglo-Mysore War at Seringapatam (1799).',
          'Doctrine of Lapse (Lord Dalhousie): If an Indian ruler died without a natural male heir, his kingdom "lapsed" into British territory; annexed Satara (1848), Sambalpur (1850), Udaipur (1852), Nagpur (1853), Jhansi (1854), and Awadh (1856 on pretext of misgovernment).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How the Diwani of Bengal Revolutionized Company Finances',
        content: 'Before 1765, the East India Company had to import gold and silver bullion from Britain to buy Indian textiles and spices because Britain had no manufactured goods to sell in India. The grant of Diwani by the Mughal emperor in 1765 fundamentally changed this. The Company now collected the vast revenues of Bengal, which were used to purchase Indian silk and cotton for export, maintain Company armies, and finance wars of conquest across the subcontinent, without sending a single ounce of bullion from Britain.',
        keyTakeaway: 'The Diwani allowed the British to finance the conquest of India using India’s own tax revenues.',
      },
    ],
    keyConcepts: [
      { term: 'Diwani', explanation: 'The legal right granted to the East India Company in 1765 to administer civil justice and collect land revenues of Bengal, Bihar, and Orissa.' },
      { term: 'Subsidiary Alliance', explanation: 'A treaty system devised by Lord Wellesley whereby Indian rulers accepted British troops and diplomatic control in return for military protection.' },
      { term: 'Doctrine of Lapse', explanation: 'Lord Dalhousie’s annexation policy that extinguished states whose rulers died without natural male biological heirs.' },
    ],
    importantDates: [
      { date: '23 June 1757', event: 'Battle of Plassey', significance: 'Robert Clive defeats Sirajuddaulah through Mir Jafar’s betrayal.' },
      { date: '1764', event: 'Battle of Buxar', significance: 'Secures British dominance over northern India.' },
      { date: '1765', event: 'Grant of Diwani of Bengal', significance: 'Company gains independent tax revenue.' },
      { date: '1799', event: 'Death of Tipu Sultan', significance: 'Fall of Mysore at Seringapatam.' },
    ],
    importantPeople: [
      { name: 'Robert Clive', role: 'Company Commander & Governor', contribution: 'Won the Battle of Plassey and secured the Diwani of Bengal.' },
      { name: 'Tipu Sultan', role: 'Ruler of Mysore', contribution: 'Resisted British expansion; known as the Tiger of Mysore.' },
      { name: 'Lord Dalhousie', role: 'Governor-General (1848-1856)', contribution: 'Devised Doctrine of Lapse, annexing Jhansi, Satara, and Awadh.' },
    ],
    definitions: [
      { term: 'Nabob', definition: 'An anglicized word for Nawab, used in Britain to describe Company officials who returned from India with corruptly acquired fortunes.', context: 'British society.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'From a 1600 charter, the East India Company expanded via Plassey (1757) and Buxar (1764), gaining the Diwani of Bengal in 1765. Wellesley used the Subsidiary Alliance to subjugate Hyderabad and Awadh. Tipu Sultan fell in 1799. Dalhousie annexed states via the Doctrine of Lapse.',
      goldenPoints: ['Battle of Plassey was fought on 23 June 1757.', 'Under the Doctrine of Lapse, Satara (1848) and Jhansi (1854) were annexed.'],
      mindMapSteps: ['1600 Royal Charter → Battle of Plassey (1757) & Buxar (1764) → 1765 Diwani of Bengal → Subsidiary Alliance & Tipu Sultan → Doctrine of Lapse Annexations'],
      commonPitfalls: ['Awadh was annexed in 1856 on the pretext of "misgovernance", not under the Doctrine of Lapse.'],
    },
    flashcards: [
      { id: 'fc-8-h2-1', front: 'In which year was the decisive Battle of Plassey fought?', back: '23 June 1757.', category: 'date' },
    ],
    questions: [
      {
        id: 'c8-h2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which Governor-General introduced the controversial "Doctrine of Lapse"?',
        options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Cornwallis', 'Lord Hastings'],
        correctOptionIndex: 1,
        answer: 'Option (B) Lord Dalhousie',
      },
    ],
  },
  {
    id: 'c8-hist-ch3',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 3,
    title: 'Ruling the Countryside',
    subtitle: 'Permanent Settlement (1793), Mahalwari, Ryotwari (Munro), Commercial Crops, and The Blue Rebellion (Indigo)',
    overview: 'To extract steady land revenues and force Indian peasants to produce commercial export crops (indigo, opium, tea), the British devised three exploitative agrarian systems: Permanent Settlement, Mahalwari, and Ryotwari, sparking the dramatic 1859 Blue Rebellion.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Three Land Revenue Systems',
        bullets: [
          'Permanent Settlement (1793, Lord Cornwallis in Bengal): Revenue permanently fixed in cash; Rajas and Taluqdars recognized as Zamindars; peasants evicted if revenue defaulted; created parasitical landlord class.',
          'Mahalwari System (1822, Holt Mackenzie in North-Western Provinces/Punjab): Unit of assessment was village/estate ("Mahal"); revenue periodically revised; collected by village headman.',
          'Ryotwari (Munro) System (Thomas Munro in South India): Direct assessment on individual cultivating peasants ("Ryots"); high tax demands caused rural migration and famine.',
        ],
      },
      {
        title: 'Crops for Europe: Indigo and The Blue Rebellion (1859)',
        bullets: [
          'Indigo provided rich royal blue dye for European textile mills; Caribbean supplies collapsed, making Bengal indigo indispensable.',
          'Two cultivation systems: Nij (planters directly grew indigo on hired land with hired bullocks) and Ryoti (planters forced ryots into contracts with cash advances).',
          'Blue Rebellion (March 1859): Thousands of Bengal ryots refused to grow indigo, refused to pay rents, and attacked planters’ factories with spears and bows; women fought with pots and pans.',
          'Indigo Commission (1860) ruled that planters were coercive and declared that ryots could not be compelled to grow indigo.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Peasants Hated the Ryoti System of Indigo',
        content: 'Under the Ryoti system, British planters forced peasants to sign agreements (satta) or got village headmen to sign on their behalf. Those who signed received cash advances at low interest to cultivate indigo on at least 25% of their prime land. When the crop was delivered, the peasant received a paltry price and a new loan was thrust upon him, locking him in a debt trap. Furthermore, indigo had deep roots that exhausted soil nutrients, making it impossible to sow rice on that land afterwards.',
        keyTakeaway: 'Indigo cultivation stripped peasants of prime food-growing land and locked them into debt slavery.',
      },
    ],
    keyConcepts: [
      { term: 'Mahal', explanation: 'In British revenue records, a revenue estate which could be a single village or a cluster of villages.' },
      { term: 'Ryot', explanation: 'A peasant cultivator in South and Western India who entered into direct land tax settlements with the colonial state.' },
    ],
    importantDates: [
      { date: '1793', event: 'Permanent Settlement introduced in Bengal', significance: 'Lord Cornwallis fixes land revenue in perpetuity.' },
      { date: 'March 1859', event: 'Outbreak of the Blue Rebellion', significance: 'Bengal peasants triumph against European indigo planters.' },
    ],
    importantPeople: [
      { name: 'Lord Cornwallis', role: 'Governor-General', contribution: 'Introduced the Permanent Settlement in Bengal in 1793.' },
      { name: 'Thomas Munro', role: 'Governor of Madras', contribution: 'Devised the Ryotwari land revenue system in South India.' },
      { name: 'Dinabandhu Mitra', role: 'Bengali Playwright', contribution: 'Wrote the play "Nil Darpan" exposing planter atrocities.' },
    ],
    definitions: [
      { term: 'Vat', definition: 'A large fermenting or storage vessel used in indigo manufacturing factories.', context: 'Indigo processing.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'British revenue exploitation took three forms: Permanent Settlement (Cornwallis 1793), Mahalwari (Holt Mackenzie 1822), and Ryotwari (Munro). Peasants were forced into indigo cultivation (Nij vs Ryoti), resulting in the historic 1859 Blue Rebellion where peasants defeated planters.',
      goldenPoints: ['Permanent Settlement was introduced in Bengal by Lord Cornwallis in 1793.', 'The play "Nil Darpan" by Dinabandhu Mitra portrayed the plight of indigo cultivators.'],
      mindMapSteps: ['Permanent Settlement (1793) → Mahalwari vs Ryotwari → Indigo Demand & Ryoti Debt Trap → Blue Rebellion (1859) Victory'],
      commonPitfalls: ['In the Ryotwari system, the British dealt directly with the cultivating peasant (ryot), without zamindars.'],
    },
    flashcards: [
      { id: 'fc-8-h3-1', front: 'In which year did the famous Blue Rebellion of indigo ryots break out in Bengal?', back: 'March 1859.', category: 'date' },
    ],
    questions: [
      {
        id: 'c8-h3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who introduced the Mahalwari system of land revenue in the North-Western Provinces in 1822?',
        options: ['Lord Cornwallis', 'Holt Mackenzie', 'Thomas Munro', 'Lord Wellesley'],
        correctOptionIndex: 1,
        answer: 'Option (B) Holt Mackenzie',
      },
    ],
  },
  {
    id: 'c8-hist-ch4',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 4,
    title: 'When People Rebel: 1857 and After',
    subtitle: 'Revolt of 1857 (First War of Independence), Mangal Pandey, Bahadur Shah Zafar, Rani Lakshmibai, and Act of 1858',
    overview: 'In May 1857, sepoys at Meerut mutinied, sparked by greased cartridges. Uniting kings, queens, peasants, and zamindars, the rebellion marched to Delhi to crown Bahadur Shah Zafar, shaking the British Empire to its core.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Causes of the Revolt of 1857',
        bullets: [
          'Political: Dalhousie’s Doctrine of Lapse stripped royal families (Jhansi, Satara, Nagpur); Nana Saheb denied adoptive pension; Awadh annexed in 1856.',
          'Economic: Heavy land revenue, loss of zamindaris, ruined artisans and handicrafts.',
          'Religious & Social: Sati abolition and widow remarriage seen as foreign interference; Christian missionaries active; General Service Enlistment Act forced sepoys overseas (breaking caste taboo).',
          'Immediate Spark: New Enfield rifle cartridges greased with cow and pig fat, offending both Hindu and Muslim sepoys.',
        ],
      },
      {
        title: 'Outbreak and Key Leaders of the Revolt',
        bullets: [
          '29 March 1857: Mangal Pandey hanged at Barrackpore for attacking his officer.',
          '10 May 1857: Sepoys at Meerut mutinied, released comrades, marched to Delhi, and proclaimed aged Mughal Emperor Bahadur Shah Zafar as their supreme leader.',
          'Delhi: Bakht Khan commanded the troops.',
          'Kanpur: Nana Saheb (adopted son of Peshwa Baji Rao II) led the revolt.',
          'Lucknow: Birjis Qadr (son of Nawab Wajid Ali Shah) and Begum Hazrat Mahal.',
          'Jhansi: Rani Lakshmibai joined forces with Tantia Tope, fighting heroically.',
          'Bihar: 80-year-old Zamindar Kunwar Singh of Jagdishpur led the uprising.',
        ],
      },
      {
        title: 'Aftermath & Government of India Act (1858)',
        bullets: [
          'British Crown took direct control; East India Company’s rule ended.',
          'Secretary of State for India appointed in British Cabinet, assisted by India Council; Governor-General given title of Viceroy.',
          'Doctrine of Lapse abolished; rulers assured their territories would never be annexed; right to adopt heirs recognized.',
          'Reorganization of Army: Ratio of European soldiers increased; Gurkhas, Sikhs, and Pathans recruited instead of Awadh and Bihar sepoys.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Bahadur Shah Zafar’s Leadership Was Pivotal',
        content: 'Although Bahadur Shah Zafar was an aging and politically powerless Mughal emperor, the rebellion gained instant subcontinent-wide legitimacy when the Meerut sepoys crowned him Shahenshah-e-Hindustan. The Mughal dynasty had ruled India for centuries and was still seen by regional rajas and chieftains as the natural sovereign umbrella. When the Emperor wrote letters to all chiefs urging them to unite against the British, rebellion erupted simultaneously across northern and central India.',
        keyTakeaway: 'The Mughal mantle provided historical unity and constitutional legitimacy to disparate rebels.',
      },
    ],
    keyConcepts: [
      { term: 'Mutiny', explanation: 'A collective rebellion by soldiers or sailors against their commanding military officers.' },
      { term: 'Viceroy', explanation: 'A royal governor ruling a country as the direct personal representative of the British monarch (replacing Governor-General in 1858).' },
    ],
    importantDates: [
      { date: '29 March 1857', event: 'Mangal Pandey revolts at Barrackpore', significance: 'Hanged for attacking British officers.' },
      { date: '10 May 1857', event: 'Meerut Sepoy Mutiny', significance: 'Beginning of the nationwide uprising.' },
      { date: '1858', event: 'Government of India Act passed', significance: 'Rule transferred from Company to British Crown.' },
    ],
    importantPeople: [
      { name: 'Rani Lakshmibai', role: 'Queen of Jhansi', contribution: 'Martyred fighting British forces under Sir Hugh Rose.' },
      { name: 'Mangal Pandey', role: 'Sepoy of 34th Bengal Native Infantry', contribution: 'Pioneered individual defiance against greased cartridges.' },
      { name: 'Kunwar Singh', role: 'Zamindar of Jagdishpur (Bihar)', contribution: 'Led rebel forces in Bihar despite advanced age of 80.' },
    ],
    definitions: [
      { term: 'Firangis', definition: 'A derogatory term used by Indians to refer to foreign Britishers.', context: '1857 uprising.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Greased Enfield cartridges sparked the 1857 mutiny at Meerut. Rebels crowned Bahadur Shah Zafar in Delhi. Rani Lakshmibai, Nana Saheb, Hazrat Mahal, and Kunwar Singh led ferocious resistance. The British recaptured Delhi, exiled the emperor to Rangoon, and passed the 1858 Act transferring rule to the British Crown.',
      goldenPoints: ['The Revolt began on 10 May 1857 at Meerut.', 'The Government of India Act of 1858 abolished East India Company rule and made Queen Victoria Sovereign.'],
      mindMapSteps: ['Causes (Political, Religious, Greased Cartridges) → Meerut Outbreak (10 May) → Key Rebel Centers & Leaders → Suppression & Act of 1858 Reforms'],
      commonPitfalls: ['Rani Lakshmibai fought because her adopted son Anand Rao was denied the throne of Jhansi under the Doctrine of Lapse.'],
    },
    flashcards: [
      { id: 'fc-8-h4-1', front: 'From which military garrison town did the sepoys march to Delhi on 10 May 1857?', back: 'Meerut.', category: 'location' },
    ],
    questions: [
      {
        id: 'c8-h4-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who led the armed revolt against the British in Jagdishpur, Bihar during the 1857 uprising?',
        options: ['Nana Saheb', 'Kunwar Singh', 'Bakht Khan', 'Tantia Tope'],
        correctOptionIndex: 1,
        answer: 'Option (B) Kunwar Singh',
      },
    ],
  },
  {
    id: 'c8-hist-ch5',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 5,
    title: 'Women, Caste and Reform',
    subtitle: 'Raja Rammohan Roy & Sati Abolition (1829), Vidyasagar & Widow Remarriage, Jyotirao Phule (Gulamgiri), and Dr. B.R. Ambedkar',
    overview: 'In 19th-century India, child marriage, sati, purdah, female illiteracy, and caste untouchability were entrenched. Courageous social reformers used ancient texts, printed journals, and schools to spark a legislative revolution for equality.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Abolition of Sati and Widow Remarriage',
        bullets: [
          'Raja Rammohan Roy (Brahmo Samaj, 1828): Argued that ancient Sanskrit scriptures did not mandate burning widows alive; mobilized public opinion; Sati banned by law in 1829 under Lord William Bentinck.',
          'Ishwar Chandra Vidyasagar: Used ancient texts to argue that widows could remarry; British passed the Hindu Widows’ Remarriage Act of 1856; set up schools for girls in Calcutta.',
          'Veerasalingam Pantulu: Formed an association for widow remarriage in the Telugu-speaking areas of Madras Presidency.',
        ],
      },
      {
        title: 'Education for Women',
        bullets: [
          'Swami Dayanand Saraswati founded Arya Samaj in 1875, supporting girls’ schools and widow remarriage.',
          'Jyotirao and Savitribai Phule opened schools for lower-caste girls in Maharashtra.',
          'Begum Rokeya Sakhawat Hossain started schools for Muslim girls in Patna and Calcutta; wrote feminist satire "Sultana’s Dream" (1905).',
          'Tarabai Shinde wrote "Stripurushtulna" (1882) criticizing social inequalities between men and women.',
        ],
      },
      {
        title: 'Caste Reformers: Phule, Periyar, and Ambedkar',
        bullets: [
          'Jyotirao Phule: Founded Satyashodhak Samaj; wrote book "Gulamgiri" (1873) dedicating it to the American movement to abolish slavery; claimed Aryans were foreign conquerors who subjugated indigenous people.',
          'E.V. Ramasamy Naicker (Periyar): Founded Self-Respect Movement in Tamil Nadu; questioned orthodox religious scriptures (Manusmriti, Ramayana).',
          'Dr. B.R. Ambedkar: Led three famous Temple Entry Movements (1927-1935) at Mahad and Kalaram temple, asserting Dalits’ right to draw water and enter public temples.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Phule Dedicated "Gulamgiri" to the American Anti-Slavery Movement',
        content: 'In 1873, Jyotirao Phule wrote a searing critique of the caste system titled "Gulamgiri" (meaning slavery). Just ten years earlier, the American Civil War had ended, abolishing slavery and freeing millions of enslaved African Americans. Phule explicitly dedicated his book to those noble American reformers who fought for emancipation, drawing a conscious parallel between the oppression of Black slaves in America and the condition of low-caste Dalits in India.',
        keyTakeaway: 'Phule connected anti-caste resistance in India to global struggles against human enslavement.',
      },
    ],
    keyConcepts: [
      { term: 'Sati', explanation: 'The ancient practice of forcing or encouraging a Hindu widow to immolate herself on her husband’s funeral pyre, banned in 1829.' },
      { term: 'Satyashodhak Samaj', explanation: 'A truth-seeking association founded by Jyotirao Phule in Maharashtra to campaign for caste equality and lower-caste education.' },
    ],
    importantDates: [
      { date: '1829', event: 'Sati banned by law in India', significance: 'Championed by Raja Rammohan Roy under Lord William Bentinck.' },
      { date: '1856', event: 'Hindu Widows’ Remarriage Act passed', significance: 'Drafted following efforts of Ishwar Chandra Vidyasagar.' },
      { date: '1873', event: 'Jyotirao Phule writes "Gulamgiri"', significance: 'Milestone manifesto for caste equality.' },
      { date: '1927', event: 'Dr. B.R. Ambedkar leads Mahad Satyagraha', significance: 'Asserts untouchables’ right to drink water from public tanks.' },
    ],
    importantPeople: [
      { name: 'Raja Rammohan Roy', role: 'Father of Modern India', contribution: 'Abolished Sati and founded Brahmo Samaj.' },
      { name: 'Ishwar Chandra Vidyasagar', role: 'Scholar & Reformer', contribution: 'Legalized Hindu widow remarriage and pioneered girls’ schools.' },
      { name: 'Jyotirao Phule', role: 'Social Reformer', contribution: 'Championed lower-caste education and authored Gulamgiri.' },
      { name: 'Dr. B.R. Ambedkar', role: 'Architect of Constitution', contribution: 'Led temple entry movements and annihilated caste hierarchies.' },
    ],
    definitions: [
      { term: 'Self-Respect Movement', definition: 'A social reform movement launched by Periyar in Tamil Nadu to secure equal rights and dignity for non-Brahmins.', context: 'Anti-caste movements.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: '19th-century reformers challenged patriarchal and caste oppression: Rammohan Roy banned Sati (1829), Vidyasagar legalized widow remarriage (1856), Savitribai Phule built girls’ schools, and Tarabai Shinde wrote Stripurushtulna. Phule (Gulamgiri), Periyar, and Ambedkar (temple entry) fought caste oppression.',
      goldenPoints: ['Sati was abolished in 1829 during the governor-generalship of Lord William Bentinck.', 'Jyotirao Phule dedicated his book "Gulamgiri" (1873) to the American anti-slavery movement.'],
      mindMapSteps: ['Rammohan Roy & 1829 Sati Abolition → Vidyasagar & 1856 Widow Remarriage → Women’s Education Pioneers → Phule, Periyar & Ambedkar Anti-Caste Fights'],
      commonPitfalls: ['Ishwar Chandra Vidyasagar fought for widow remarriage, while Rammohan Roy fought primarily for the abolition of Sati.'],
    },
    flashcards: [
      { id: 'fc-8-h5-1', front: 'In which year was the practice of Sati legally abolished in India?', back: '1829 (under Lord William Bentinck).', category: 'date' },
    ],
    questions: [
      {
        id: 'c8-h5-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Who founded the Satyashodhak Samaj in Maharashtra to promote caste equality and education?',
        options: ['Dr. B.R. Ambedkar', 'Jyotirao Phule', 'Periyar E.V. Ramasamy', 'Swami Dayanand Saraswati'],
        correctOptionIndex: 1,
        answer: 'Option (B) Jyotirao Phule',
      },
    ],
  },
  {
    id: 'c8-hist-ch6',
    classLevel: 8,
    subject: 'history',
    chapterNumber: 6,
    title: 'The Making of the National Movement: 1870s-1947',
    subtitle: 'Congress (1885), Moderates & Radicals, Partition of Bengal (1905), Gandhi’s Arrival, Non-Cooperation, Civil Disobedience, Quit India',
    overview: 'The Indian National Congress unified diverse voices into a national liberation struggle. From Moderate petitions and Radical slogans ("Swaraj is my birthright") to Gandhi’s mass movements (Non-Cooperation, Dandi March, Quit India), India achieved freedom on 15 August 1947.',
    estimatedReadTime: '17 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Emergence of Nationalism and Indian National Congress (1885)',
        bullets: [
          'Arms Act (1878) and Vernacular Press Act (1878) infuriated educated Indians.',
          'Indian National Congress founded in Bombay in December 1885 with 72 delegates; key leaders: Dadabhai Naoroji (wrote "Poverty and Un-British Rule in India"), Pherozeshah Mehta, W.C. Bonnerjee, Dinshaw Wacha.',
          'Moderates (1885-1905): Wanted constitutional reforms, Indianisation of civil services, and reduction of military expenditure through petitions.',
          'Radicals ("Lal-Bal-Pal": Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal): Advocated mass strikes and boycott; Tilak roared: "Freedom is my birthright and I shall have it!"',
        ],
      },
      {
        title: 'Partition of Bengal (1905) & Swadeshi Movement',
        bullets: [
          'Viceroy Curzon partitioned Bengal in 1905 to divide Bengali Hindus and Muslims.',
          'Triggered massive Swadeshi Movement (known as Vande Mataram Movement in deltaic Andhra); boycott of British cloth and goods.',
        ],
      },
      {
        title: 'Mahatma Gandhi & Mass Mobilisation',
        bullets: [
          'Gandhi returned from South Africa in 1915; led localized Satyagrahas at Champaran (1917, indigo), Kheda (1918, peasant tax relief), and Ahmedabad (1918, mill workers).',
          'Rowlatt Satyagraha (1919) against detention without trial; followed by tragic Jallianwala Bagh Massacre (13 April 1919) by General Dyer.',
          'Non-Cooperation Movement (1920-1922): Surrendered titles, boycotted schools and courts, burnt foreign cloth; called off after violence at Chauri Chaura (1922).',
          'Civil Disobedience Movement (1930): Gandhi’s 240-mile Dandi Salt March (12 March to 6 April 1930) broke colonial salt tax monopoly.',
          'Quit India Movement (August 1942): Gandhi gave historic slogan "Do or Die"; mass strikes paralyzed British administration.',
          'India attained Independence on 15 August 1947 alongside the tragic partition into India and Pakistan.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why the Salt March Was a Masterstroke of Political Strategy',
        content: 'Salt was an everyday necessity used equally by the rich, the poor, Hindus, Muslims, and all communities. The British salt monopoly and salt tax hit the poorest households hardest. By choosing salt as the symbol of defiance, Mahatma Gandhi linked an abstract demand for political independence to a concrete, universal grievance felt in every kitchen across the nation. The 240-mile march from Sabarmati Ashram to Dandi captured international media attention and united the entire country.',
        keyTakeaway: 'The Salt Satyagraha weaponized an everyday kitchen staple to dismantle colonial moral authority.',
      },
    ],
    keyConcepts: [
      { term: 'Satyagraha', explanation: 'A philosophy of nonviolent civic resistance developed by Mahatma Gandhi, literally meaning "holding firmly to truth".' },
      { term: 'Swadeshi', explanation: 'A movement encouraging domestic manufacturing and self-reliance while boycotting British imported goods.' },
    ],
    importantDates: [
      { date: '1885', event: 'Indian National Congress formed in Bombay', significance: 'Founding of the premier national organisation.' },
      { date: '1905', event: 'Partition of Bengal by Lord Curzon', significance: 'Sparked nationwide Swadeshi Movement.' },
      { date: '13 April 1919', event: 'Jallianwala Bagh Massacre', significance: 'General Dyer opens fire on peaceful gathering in Amritsar.' },
      { date: '12 March 1930', event: 'Dandi March launched', significance: 'Gandhi begins Civil Disobedience by manufacturing salt.' },
      { date: 'August 1942', event: 'Quit India Movement launched', significance: 'Gandhi proclaims "Do or Die" at Gowalia Tank.' },
      { date: '15 August 1947', event: 'Indian Independence', significance: 'End of British colonial rule.' },
    ],
    importantPeople: [
      { name: 'Mahatma Gandhi', role: 'Father of the Nation', contribution: 'Pioneered nonviolent mass satyagraha, Dandi March, and Quit India.' },
      { name: 'Bal Gangadhar Tilak', role: 'Radical Nationalist Leader', contribution: 'Coined: "Freedom is my birthright and I shall have it!"' },
      { name: 'Subhas Chandra Bose', role: 'Supreme Commander, INA', contribution: 'Formed Indian National Army (Azad Hind Fauj) with slogan "Give me blood, and I shall give you freedom!"' },
    ],
    definitions: [
      { term: 'Purna Swaraj', definition: 'Complete, unconditional national independence, proclaimed at the Lahore Congress session in December 1929 under Jawaharlal Nehru.', context: 'National goals.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The Indian National Congress (1885) evolved from Moderate petitions to Radical mass agitation (Lal-Bal-Pal). The 1905 Partition of Bengal triggered Swadeshi. Gandhi transformed nationalism through Satyagraha (Champaran, Non-Cooperation, Dandi March, and Quit India 1942), achieving independence on 15 August 1947.',
      goldenPoints: ['Bal Gangadhar Tilak gave the slogan: "Freedom is my birthright and I shall have it!".', 'The historic Dandi Salt March took place from 12 March to 6 April 1930.'],
      mindMapSteps: ['INC Foundation (1885) → Moderates vs Radicals → Partition of Bengal & Swadeshi (1905) → Gandhi’s Satyagrahas (Champaran, Dandi, Quit India) → Freedom 1947'],
      commonPitfalls: ['Gandhi called off the Non-Cooperation Movement in February 1922 because of the violent incident at Chauri Chaura police station.'],
    },
    flashcards: [
      { id: 'fc-8-h6-1', front: 'Who gave the famous slogan "Freedom is my birthright and I shall have it!"?', back: 'Bal Gangadhar Tilak.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c8-h6-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'On what date did the tragic Jallianwala Bagh massacre take place in Amritsar?',
        options: ['10 May 1857', '13 April 1919', '12 March 1930', '8 August 1942'],
        correctOptionIndex: 1,
        answer: 'Option (B) 13 April 1919 (Baisakhi day)',
      },
    ],
  },

  // ==========================================
  // GEOGRAPHY: Resources and Development
  // ==========================================
  {
    id: 'c8-geo-ch1',
    classLevel: 8,
    subject: 'geography',
    chapterNumber: 1,
    title: 'Resources',
    subtitle: 'Types of Resources (Natural, Human Made, Human), Renewable vs Non-Renewable, Sustainable Development',
    overview: 'Anything that satisfies a human need is a resource. Utility and value transform natural substances into resources. Conserving resources through Sustainable Development balances development with environmental care.',
    estimatedReadTime: '13 min read',
    popular: true,
    shortNotes: [
      {
        title: 'What Makes a Substance a Resource?',
        bullets: [
          'Utility or usability gives an object value. Value means worth (economic value like gold/petroleum, or aesthetic value like a mountain landscape).',
          'Time and technology are two crucial factors that convert substances into resources (e.g. discovery of fire led to cooking; hydroelectricity technology transformed roaring rivers into energy).',
        ],
      },
      {
        title: 'Types of Resources',
        bullets: [
          'Natural Resources: Drawn from nature without much modification (air, water, soils, minerals). Divided into Renewable (solar, wind) and Non-Renewable (coal, petroleum, natural gas with limited stocks taking millions of years to form).',
          'Human-Made Resources: Natural substances transformed by human technology into bridges, roads, machines, vehicles.',
          'Human Resources: People themselves; their quantity and quality (education, health, skills) make them the greatest resource.',
        ],
      },
      {
        title: 'Sustainable Development & Conservation',
        bullets: [
          'Sustainable Development: Balancing the need to use resources and also conserve them for the future.',
          'Principles: Respect all forms of life, improve quality of human life, minimize depletion of natural resources, enable communities to care for their environment.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'The Three R’s of Resource Conservation',
        content: 'Resource conservation does not mean locking away resources from human use. It means using resources carefully and giving them time to get renewed. Every person can contribute by following the golden rule of the Three R’s: (1) Reduce consumption of non-essential items; (2) Recycle materials like paper, metals, and plastics; (3) Reuse containers, bags, and items instead of throwing them into landfills.',
        keyTakeaway: 'Conservation balances present utilization with intergenerational preservation.',
      },
    ],
    keyConcepts: [
      { term: 'Sustainable Development', explanation: 'Development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs.' },
      { term: 'Stock of Resource', explanation: 'The total amount of a specific natural resource available for human exploitation.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Human Resource Development', definition: 'Improving the quality of people’s skills and knowledge so that they are able to create more valuable resources.', context: 'Economics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Resources possess utility and value. They divide into Natural (Renewable vs Non-renewable), Human-made (roads, factories), and Human resources (skills and knowledge). Sustainable development balances current usage with conservation for future generations.',
      goldenPoints: ['Coal and petroleum are non-renewable resources because they take millions of years to form.', 'Sustainable development preserves resources for future generations.'],
      mindMapSteps: ['Utility & Value → Natural (Renewable/Non-renewable) → Human-Made & Human Resources → Sustainable Development & Conservation'],
      commonPitfalls: ['Wind and sunlight are inexhaustible renewable resources; coal and petroleum are finite non-renewable stocks.'],
    },
    flashcards: [
      { id: 'fc-8-g1-1', front: 'What is meant by "Sustainable Development"?', back: 'Carefully utilizing resources so that meeting present needs does not compromise the needs of future generations.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c8-g1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following is a non-renewable natural resource?',
        options: ['Solar energy', 'Wind power', 'Petroleum', 'Forest timber'],
        correctOptionIndex: 2,
        answer: 'Option (C) Petroleum (takes millions of years to form and has limited stock)',
      },
    ],
  },
  {
    id: 'c8-geo-ch2',
    classLevel: 8,
    subject: 'geography',
    chapterNumber: 2,
    title: 'Agriculture',
    subtitle: 'Primary Activities, Types of Farming (Subsistence vs Commercial), Major Crops, and Indian vs USA Farm',
    overview: 'Agriculture is a primary activity that includes growing crops, fruits, vegetables, flowers, and rearing livestock. Discover farming types (subsistence vs commercial), staple crops, and a comparative study between a small farm in India and an industrial farm in the USA.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Types of Farming',
        bullets: [
          'Subsistence Farming: Practiced to meet family needs with low technology and family labor. Primitive subsistence includes shifting cultivation (Jhumming) and nomadic herding. Intensive subsistence involves farming small plots with high labor and simple tools.',
          'Commercial Farming: Crops grown and animals reared for sale in markets with high capital and machines. Commercial grain (wheat, maize in temperate grasslands), Mixed farming (crops + livestock), and Plantations (single cash crop: tea, coffee, sugarcane, rubber).',
        ],
      },
      {
        title: 'Major Crops of the World',
        bullets: [
          'Rice: Staple food of tropical regions; requires high temperature, high humidity, rainfall >100 cm, alluvial clayey soil; China is leading producer, followed by India.',
          'Wheat: Requires moderate temperature, rainfall during growing season, bright sunshine at harvest; well-drained loamy soil; USA, Canada, Russia, India.',
          'Millets: Coarse grains; can grow on less fertile sandy soils with low rainfall (Jowar, Bajra, Ragi).',
          'Cotton: Requires high temperature, light rainfall, 210 frost-free days, black soil; China, USA, India.',
          'Jute ("Golden Fibre"): Grows on alluvial soil; high temperature, heavy rainfall; India and Bangladesh.',
        ],
      },
      {
        title: 'Comparative Study: A Farm in India vs A Farm in USA',
        bullets: [
          'Farm in India (Munna Lal in Ghazipur, UP): Small holding (1.5 hectares); rents tractor or uses bullocks; buys seeds from market; relies on tubewell irrigation; family provides labor; sells at village mandi.',
          'Farm in USA (Joe Horan in Iowa): Massive holding (300 hectares); uses satellite imagery, soil chemical lab analysis, GPS tractors, combined harvesters, threshers; stores grain in automated silos or sells to corporate agencies.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Jute is Called the "Golden Fibre"',
        content: 'Jute is known as the "golden fibre" because of its golden-brown lustrous color, high commercial value, and biodegradable strength. It requires high temperatures during growth, heavy rainfall, and humid tropical climates. It flourishes in the fertile flood plains where soils are renewed every year, primarily in the Ganga-Brahmaputra delta across West Bengal, Assam, and Bangladesh, serving as the world’s leading packaging material for gunny bags and ropes.',
        keyTakeaway: 'Jute is an eco-friendly biodegradable packaging fibre dominant in the Bengal delta.',
      },
    ],
    keyConcepts: [
      { term: 'Plantation Agriculture', explanation: 'A commercial farming system where a single cash crop (tea, coffee, rubber, sugarcane) is cultivated on a vast estate using large capital and migrant labor.' },
      { term: 'Shifting Cultivation', explanation: 'A slash-and-burn agricultural method where forest plots are cleared, ashes mixed with soil for farming, and abandoned when soil fertility declines.' },
    ],
    importantDates: [],
    importantPeople: [],
    definitions: [
      { term: 'Arable Land', definition: 'Land that is suitable for growing crops, defined by soil fertility and adequate water supply.', context: 'Agronomy.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Agriculture is a primary activity divided into Subsistence (intensive, primitive shifting) and Commercial (grain, mixed, plantations). Major crops: Rice (leading: China/India), Wheat, Cotton (black soil, 210 frost-free days), and Jute ("Golden Fibre"). A typical Indian farm is 1.5 hectares, while a US farm spans 300 hectares with satellite-guided tractors.',
      goldenPoints: ['Jute is known as the "Golden Fibre".', 'Cotton requires 210 frost-free days and black soil for optimal growth.'],
      mindMapSteps: ['Primary Activity & Arable Land → Subsistence vs Commercial Farming → Major Food & Fibre Crops → India (1.5 ha) vs USA (300 ha) Comparison'],
      commonPitfalls: ['Shifting cultivation is called Jhumming in North-East India, Milpa in Mexico, and Roca in Brazil.'],
    },
    flashcards: [
      { id: 'fc-8-g2-1', front: 'Which crop is widely known as the "Golden Fibre"?', back: 'Jute.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c8-g2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which of the following conditions is essential for the cultivation of cotton?',
        options: ['210 frost-free days and black soil', 'High rainfall and standing water', 'Extremely cold winters and snow', 'Acidic red laterite soil'],
        correctOptionIndex: 0,
        answer: 'Option (A) 210 frost-free days and black soil',
      },
    ],
  },
  {
    id: 'c8-geo-ch3',
    classLevel: 8,
    subject: 'geography',
    chapterNumber: 3,
    title: 'Industries',
    subtitle: 'Secondary Activity, Classification, Iron & Steel (Jamshedpur vs Pittsburgh), Cotton (Ahmedabad vs Osaka), IT (Bangalore vs Silicon Valley)',
    overview: 'Industry refers to economic activity that transforms raw materials into high-value finished goods. Explore manufacturing clusters through comparative studies: Iron & Steel in Jamshedpur vs Pittsburgh, Textiles in Ahmedabad vs Osaka, and IT in Bengaluru vs Silicon Valley.',
    estimatedReadTime: '15 min read',
    shortNotes: [
      {
        title: 'Classification of Industries',
        bullets: [
          'Raw Materials: Agro-based (food processing, cotton textiles), Mineral-based (iron and steel), Marine-based (fish oil), Forest-based (pulp, paper, pharmaceuticals).',
          'Size: Small-scale (cottage, basket-weaving, pottery; low capital) and Large-scale (automobiles, heavy machinery; high investment).',
          'Ownership: Private sector, Public sector (SAIL, BHEL), Joint sector (Maruti Udyog), Cooperative sector (Amul).',
        ],
      },
      {
        title: 'Iron and Steel: Jamshedpur vs Pittsburgh',
        bullets: [
          'Jamshedpur (India): TISCO founded by Jamsetji Tata in 1907 at Sakchi (Jharkhand) near Subarnarekha and Kharkai rivers; close to iron ore mines in Odisha/Singhbhum, coal from Jharia, limestone from Gangpur.',
          'Pittsburgh (USA): Important steel city in USA; coal locally available, iron ore shipped from Lake Superior (Minnesota) via Great Lakes water route.',
        ],
      },
      {
        title: 'Cotton Textiles: Ahmedabad vs Osaka',
        bullets: [
          'Ahmedabad (Manchester of India): First mill set up in 1859; situated in cotton-growing black soil tract of Gujarat; humid climate ideal for spinning; Sabarmati river water.',
          'Osaka (Manchester of Japan): Textile center in Japan; flat land for mills; Yodo river provides ample water; all raw cotton is imported from Egypt, USA, India; relies on high-quality sea exports.',
        ],
      },
      {
        title: 'Information Technology (IT): Bengaluru vs Silicon Valley',
        bullets: [
          'Bengaluru (Silicon Plateau): Capital of Karnataka; Deccan plateau offers pleasant mild climate year-round; largest cluster of engineering and educational colleges.',
          'Silicon Valley (California): Located near Santa Clara valley; close to major universities (Stanford); massive venture capital and advanced technology research.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Iron and Steel is Called the "Backbone of Modern Industry"',
        content: 'Almost everything we use is either made of iron or steel, or has been made with tools and machinery of these metals. Ships, trains, trucks, and automobiles are made largely of steel. Even the safety pins, needles, oil drilling equipment, and farm machinery rely on steel. Without iron and steel to manufacture machines, no other industrial manufacturing—from textile weaving to chemical refining—could exist.',
        keyTakeaway: 'Steel provides the essential capital machinery upon which all modern production depends.',
      },
    ],
    keyConcepts: [
      { term: 'Industrial System', explanation: 'A process consisting of inputs (raw materials, labor, power), processes (manufacturing operations), and outputs (finished product and revenue).' },
      { term: 'Smelting', explanation: 'The process of extracting a metal from its mineral ore by heating beyond the melting point in a blast furnace.' },
    ],
    importantDates: [
      { date: '1907', event: 'TISCO founded at Sakchi (Jamshedpur)', significance: 'First modern integrated iron and steel plant in India.' },
      { date: '1859', event: 'First textile mill in Ahmedabad established', significance: 'Transformed Ahmedabad into the Manchester of India.' },
    ],
    importantPeople: [
      { name: 'Jamsetji Tata', role: 'Pioneering Industrialist', contribution: 'Founded Tata Iron and Steel Company (TISCO) in Jamshedpur.' },
    ],
    definitions: [
      { term: 'Sunrise Industry', definition: 'Emerging industries that show rapid growth potential, such as Information Technology, wellness, and biotechnology.', context: 'Industrial economics.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Industries transform raw materials into finished goods. Iron & Steel is the industrial backbone (Jamshedpur vs Pittsburgh). Cotton textiles flourished in Ahmedabad ("Manchester of India") and Osaka ("Manchester of Japan"). The Information Technology sunrise industry links Bengaluru with California’s Silicon Valley.',
      goldenPoints: ['TISCO was established in 1907 at Sakchi (Jharkhand) by Jamsetji Tata.', 'Ahmedabad is known as the "Manchester of India" and Osaka as the "Manchester of Japan".'],
      mindMapSteps: ['Classification (Raw Material, Size, Ownership) → Iron & Steel (Jamshedpur vs Pittsburgh) → Textiles (Ahmedabad vs Osaka) → IT Sunrise Industry (Bengaluru vs Silicon Valley)'],
      commonPitfalls: ['Osaka produces world-class textiles but imports 100% of its raw cotton from overseas.'],
    },
    flashcards: [
      { id: 'fc-8-g3-1', front: 'Which Indian city is called the "Manchester of India" for its cotton textile mills?', back: 'Ahmedabad.', category: 'location' },
    ],
    questions: [
      {
        id: 'c8-g3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'In which year and place was the Tata Iron and Steel Company (TISCO) founded by Jamsetji Tata?',
        options: ['1859 in Ahmedabad', '1907 in Sakchi (Jamshedpur)', '1920 in Durgapur', '1947 in Rourkela'],
        correctOptionIndex: 1,
        answer: 'Option (B) 1907 in Sakchi (Jamshedpur)',
      },
    ],
  },

  // ==========================================
  // CIVICS: Social and Political Life - III
  // ==========================================
  {
    id: 'c8-civ-ch1',
    classLevel: 8,
    subject: 'civics',
    chapterNumber: 1,
    title: 'The Indian Constitution',
    subtitle: 'Need for a Constitution, Key Features: Federalism, Parliamentary Form, Separation of Powers, Fundamental Rights, Secularism',
    overview: 'A constitution lays out the fundamental principles and ideals according to which a nation is governed. Explore why democratic countries need a written constitution, and the five foundational pillars of the Indian constitutional architecture.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Why Does a Country Need a Constitution?',
        bullets: [
          '1. Lays out ideals that define the kind of country citizens aspire to live in (Nepal struggled through people’s movements from 1990 to 2006 to replace monarchy with a democratic constitution).',
          '2. Defines the nature of the country’s political system and who holds decision-making power.',
          '3. Prevents tyranny of the majority over minorities (protects minority rights).',
          '4. Protects us against ourselves—guards against impulsive decisions that could undermine democratic principles.',
        ],
      },
      {
        title: 'Five Key Features of the Indian Constitution',
        bullets: [
          '1. Federalism: Existence of more than one level of government (Centre, State, Panchayati Raj).',
          '2. Parliamentary Form of Government: Representatives elected directly by people through Universal Adult Suffrage; executive accountable to legislature.',
          '3. Separation of Powers: Three organs of state—Legislature (elected lawmakers), Executive (administer laws), and Judiciary (courts)—each checks and balances the others.',
          '4. Fundamental Rights: Conscience of the Constitution; protects citizens against arbitrary state action (Right to Equality, Freedom, Against Exploitation, Religious Freedom, Cultural & Educational Rights, Constitutional Remedies).',
          '5. Secularism: State does not officially promote any one religion as the state religion.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Separation of Powers is Essential in a Democracy',
        content: 'According to the Constitution, there are three organs of the State: the Legislature (our elected representatives who enact laws), the Executive (ministers and civil servants who implement laws and run government departments), and the Judiciary (the independent system of courts that interprets laws and delivers justice). To prevent the misuse of power by any one organ, the Constitution mandates that each organ exercises distinct powers, acting as a reciprocal check and balance on the other two.',
        keyTakeaway: 'Separation of powers creates a system of mutual checks and balances to prevent authoritarian tyranny.',
      },
    ],
    keyConcepts: [
      { term: 'Federalism', explanation: 'A system of government in which power is divided between a central national authority and constituent political units (states and local bodies).' },
      { term: 'Secularism', explanation: 'A constitutional principle where the state maintains strict neutrality and does not promote any one religion as official.' },
    ],
    importantDates: [
      { date: '26 Jan 1950', event: 'Indian Constitution enters into force', significance: 'India becomes a sovereign democratic Republic.' },
    ],
    importantPeople: [
      { name: 'Dr. B.R. Ambedkar', role: 'Father of Indian Constitution', contribution: 'Chaired the Drafting Committee and championed fundamental rights.' },
    ],
    definitions: [
      { term: 'Polity', definition: 'A society that has an organized political structure and system of governance.', context: 'Political science.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'A Constitution sets national ideals, restrains majoritarian abuse, and organizes power. The Indian Constitution rests on five pillars: Federalism, Parliamentary Government, Separation of Powers (Legislature, Executive, Judiciary), Fundamental Rights, and Secularism.',
      goldenPoints: ['Nepal transitioned from absolute monarchy to a democratic constitution in 2006.', 'Fundamental Rights are referred to as the "Conscience of the Indian Constitution".'],
      mindMapSteps: ['Why Constitutions Matter (Nepal Case) → 5 Pillars: Federalism, Parliament, Separation of Powers, Rights, Secularism → Balance of Power'],
      commonPitfalls: ['Do not confuse "State" (the political entity representing sovereign citizens) with "government" (the elected administration in power).'],
    },
    flashcards: [
      { id: 'fc-8-c1-1', front: 'What are the three organs of the state under the Indian Constitution?', back: '1. Legislature, 2. Executive, 3. Judiciary.', category: 'concept' },
    ],
    questions: [
      {
        id: 'c8-c1-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'What is the division of governance power between the Centre, the States, and local Panchayats called?',
        options: ['Secularism', 'Federalism', 'Monarchy', 'Bicameralism'],
        correctOptionIndex: 1,
        answer: 'Option (B) Federalism',
      },
    ],
  },
  {
    id: 'c8-civ-ch2',
    classLevel: 8,
    subject: 'civics',
    chapterNumber: 2,
    title: 'Judiciary',
    subtitle: 'Independent Judiciary, Structure of Courts (Supreme, High, Subordinate), Appellate System, and Public Interest Litigation (PIL)',
    overview: 'The Judiciary is the guardian of the Constitution and fundamental rights. Operating independently of the Legislature and Executive, its hierarchical structure ensures justice from district subordinate courts up to the Supreme Court of India.',
    estimatedReadTime: '14 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Role of the Judiciary & Judicial Independence',
        bullets: [
          'Functions: Dispute Resolution (between citizens, citizens & government, two states, Centre & State); Judicial Review (striking down unconstitutional laws); Enforcing Fundamental Rights (Article 32).',
          'Independent Judiciary: Judges appointed with minimal political interference; difficult to remove (impeachment requires 2/3rd majority in both houses of Parliament); judges free to rule against government without fear.',
        ],
      },
      {
        title: 'Structure of Courts and the Appellate System',
        bullets: [
          'Pyramid structure: Supreme Court (apex, headed by Chief Justice of India in New Delhi) → High Courts (state level) → Subordinate/District Courts.',
          'Appellate System: A person can appeal to a higher court if they believe that the judgment passed by the lower court is not just (e.g. State of Delhi vs Laxman Kumar dowry death case).',
        ],
      },
      {
        title: 'Criminal vs Civil Law & PIL (Public Interest Litigation)',
        bullets: [
          'Criminal Law: Deals with conduct defined as offences (theft, murder, harassment); starts with FIR to police; court can sentence accused to jail.',
          'Civil Law: Deals with harm or injury to rights of individuals (rent disputes, divorce, land sale); petition filed by affected party; court awards relief/compensation.',
          'Public Interest Litigation (PIL): Devised by Supreme Court in early 1980s; allows any individual or organization to file a case in High Court or Supreme Court on behalf of oppressed groups whose rights are violated (even a telegram was treated as a PIL).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'How PIL Democratized Access to Justice',
        content: 'For decades, vast numbers of poor, illiterate Indians found it impossible to access courts because legal procedures involved enormous amounts of paperwork, money, and time. In the early 1980s, Chief Justice P.N. Bhagwati and Justice V.R. Krishna Iyer introduced Public Interest Litigation (PIL). Under PIL, the court simplified procedural rules so that any citizen or public-spirited NGO could file a petition on behalf of bonded laborers, prisoners held without trial, or children denied school meals. Through PIL, the Supreme Court declared that the Right to Life (Article 21) includes the Right to Food and Clean Water.',
        keyTakeaway: 'PIL dismantled procedural technicalities so the poorest citizens could access constitutional justice.',
      },
    ],
    keyConcepts: [
      { term: 'Judicial Review', explanation: 'The supreme power of the Judiciary to invalidate any legislation or executive act if it violates the basic structure of the Constitution.' },
      { term: 'Appellate System', explanation: 'A judicial system wherein a party dissatisfied with a trial court ruling has the right to appeal to a superior court.' },
      { term: 'Public Interest Litigation (PIL)', explanation: 'A legal mechanism enabling any citizen to petition the Supreme Court or High Courts to protect the constitutional rights of disadvantaged groups.' },
    ],
    importantDates: [
      { date: '28 Jan 1950', event: 'Supreme Court of India established', significance: 'Succeeded the Federal Court of India.' },
      { date: 'Early 1980s', event: 'Introduction of PIL by Supreme Court', significance: 'Revolutionized public access to justice.' },
    ],
    importantPeople: [
      { name: 'P.N. Bhagwati', role: 'Former Chief Justice of India', contribution: 'Pioneered Public Interest Litigation (PIL) in India.' },
    ],
    definitions: [
      { term: 'Acquittal', definition: 'A court finding that the person accused is not guilty of the criminal charges brought against them.', context: 'Criminal law.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'Judiciary resolves disputes, reviews unconstitutional laws, and protects rights. Independence is safeguarded through difficult impeachment procedures. A pyramid structure (District → High Court → Supreme Court) supports appeals. PILs created in the 1980s opened court doors to the poor and established Right to Food and Water under Article 21.',
      goldenPoints: ['The Supreme Court was established on 28 January 1950.', 'Public Interest Litigation (PIL) was introduced in the early 1980s to expand access to justice.'],
      mindMapSteps: ['Functions of Judiciary & Independence → Pyramid Hierarchy & Appellate System → Civil vs Criminal Law → PIL & Right to Life'],
      commonPitfalls: ['Criminal cases start with a police FIR, whereas civil lawsuits are filed directly by the affected parties in court.'],
    },
    flashcards: [
      { id: 'fc-8-c2-1', front: 'When was the Supreme Court of India officially established in New Delhi?', back: '28 January 1950.', category: 'date' },
    ],
    questions: [
      {
        id: 'c8-c2-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Under which legal mechanism can an ordinary citizen file a petition in the Supreme Court on behalf of underprivileged groups whose rights are violated?',
        options: ['Habeas Corpus', 'Public Interest Litigation (PIL)', 'Civil Injunction', 'Summary Trial'],
        correctOptionIndex: 1,
        answer: 'Option (B) Public Interest Litigation (PIL)',
      },
    ],
  },
  {
    id: 'c8-civ-ch3',
    classLevel: 8,
    subject: 'civics',
    chapterNumber: 3,
    title: 'Law and Social Justice',
    subtitle: 'Bhopal Gas Tragedy (1984), UCIL Negligence, Minimum Wages Act, Child Labour, and Right to Clean Environment',
    overview: 'Unchecked pursuit of profit leads corporations to cut safety standards and exploit workers. The horrific 1984 Bhopal Gas Tragedy revealed how weak regulatory enforcement harmed thousands, forcing the Supreme Court to recognize a clean environment as part of Article 21.',
    estimatedReadTime: '14 min read',
    shortNotes: [
      {
        title: 'The Bhopal Gas Tragedy (2 December 1984)',
        bullets: [
          'Union Carbide Corporation (UCIL, an American multinational) pesticide plant in Bhopal leaked deadly Methyl Isocyanate (MIC) gas.',
          'Over 8,000 innocent people died within three days; hundreds of thousands crippled with blindness, respiratory, and genetic disorders.',
          'Why did UCIL set up in India? Cheap labor, lower safety standards, and weak government enforcement compared to plants in the USA.',
          'UCIL deliberately cut costs: reduced maintenance staff, turned off refrigeration, and used faulty safety valves.',
        ],
      },
      {
        title: 'Workers’ Worth & Enforcement of Safety Laws',
        bullets: [
          'High unemployment in India means one worker can easily replace another; lives treated as disposable.',
          'Government inspectors failed to enforce safety laws, allowing dangerous chemical plants to operate in densely populated residential areas.',
          'Minimum Wages Act: Mandates that wages must not fall below a specified statutory minimum to prevent exploitation by employers.',
        ],
      },
      {
        title: 'New Laws for Environmental Protection',
        bullets: [
          'In 1984, India had few laws protecting the environment; polluters treated air and water as free dumping grounds.',
          'Supreme Court rulings (e.g. Subhash Kumar vs State of Bihar, 1991): Right to Life under Article 21 is a fundamental right that includes the right to enjoy pollution-free water and air.',
          'Polluter Pays Principle: Polluter must bear financial responsibility for cleaning up environmental damage.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Multinational Corporations Set Up Hazardous Plants in Developing Nations',
        content: 'Multinational corporations (MNCs) often relocate high-risk manufacturing operations from Western countries to developing nations like India for three reasons: (1) Immense availability of cheap manual labor with low wage expectations; (2) Minimal expenditure on housing, protective gear, and medical benefits for workers; (3) Lax environmental regulations and corrupt or absent safety inspections. At UCIL’s sister plant in West Virginia, USA, computerized warning systems were mandatory, whereas in Bhopal, manual alarms were disconnected to save money.',
        keyTakeaway: 'Economic vulnerability forces developing countries into compromising human safety for foreign capital.',
      },
    ],
    keyConcepts: [
      { term: 'Minimum Wages Act', explanation: 'A protective law enacted by government ensuring that workers receive a statutory minimum wage that is revised periodically.' },
      { term: 'Polluter Pays Principle', explanation: 'A legal doctrine holding that companies or individuals who produce pollution must bear the cost of managing and mitigating environmental harm.' },
    ],
    importantDates: [
      { date: '2 Dec 1984', event: 'Bhopal Gas Tragedy', significance: 'World’s worst industrial disaster; MIC gas leaks from UCIL.' },
      { date: '1986', event: 'Environment (Protection) Act passed', significance: 'Comprehensive environmental safety legislation enacted in response to Bhopal.' },
      { date: '2006', event: 'Child Labour (Prohibition) Act amended', significance: 'Banned employment of children in domestic work, dhabas, and tea stalls.' },
    ],
    importantPeople: [],
    definitions: [
      { term: 'Methyl Isocyanate (MIC)', definition: 'A highly toxic, volatile chemical compound used in pesticide manufacture that caused the catastrophic Bhopal disaster.', context: 'Industrial chemistry.' },
    ],
    importantFigures: [],
    oneShotRevision: {
      summary: 'The 1984 Bhopal Gas Tragedy (UCIL MIC gas leak) exposed corporate cost-cutting and regulatory failure. High unemployment devalued labor. In response, India tightened safety laws, revised Minimum Wages, and the Supreme Court affirmed that Article 21 (Right to Life) guarantees pollution-free air and water.',
      goldenPoints: ['Methyl Isocyanate (MIC) gas leaked from the Union Carbide pesticide factory in Bhopal on 2 Dec 1984.', 'Article 21 was expanded by the Supreme Court to include the right to a clean, healthy environment.'],
      mindMapSteps: ['Bhopal Disaster (2 Dec 1984) → Corporate Cost-Cutting & Cheap Labor → Minimum Wages Act → Environmental Law & Article 21'],
      commonPitfalls: ['The Bhopal gas leak occurred on the night of 2 December 1984, involving the multinational corporation Union Carbide.'],
    },
    flashcards: [
      { id: 'fc-8-c3-1', front: 'Which toxic gas leaked during the tragic 1984 Bhopal Gas Disaster?', back: 'Methyl Isocyanate (MIC).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c8-c3-q1',
        type: 'mcq',
        typeLabel: 'MCQ (1 Mark)',
        marks: 1,
        question: 'Which fundamental right under the Indian Constitution was interpreted by the Supreme Court to include the right to clean water and pollution-free air?',
        options: ['Article 14 (Equality)', 'Article 19 (Freedom of Speech)', 'Article 21 (Right to Life)', 'Article 25 (Religious Freedom)'],
        correctOptionIndex: 2,
        answer: 'Option (C) Article 21 (Right to Life)',
      },
    ],
  },
];

export const CHAPTERS_CLASS_8: Chapter[] = RAW_CHAPTERS_CLASS_8.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_8[ch.id];
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

