import { FULL_NOTES_CLASS_10 } from './fullNotesClass10';
import { Chapter } from '../types/sst';
import { CHAPTERS_CLASS_10_MORE } from './chaptersClass10More';

const BASE_CHAPTERS_10: Chapter[] = [
  // ==========================================
  // CLASS 10 - HISTORY - CHAPTER 1
  // ==========================================
  {
    id: 'c10-hist-ch1',
    classLevel: 10,
    subject: 'history',
    chapterNumber: 1,
    title: 'The Rise of Nationalism in Europe',
    subtitle: 'From Frédéric Sorrieu’s Utopian Vision to the Nation-States of 19th Century Europe',
    overview: 'During the nineteenth century, nationalism emerged as a force which brought about sweeping changes in the political and mental world of Europe. The end result of these changes was the emergence of the nation-state in place of the multi-national dynastic empires of Europe.',
    estimatedReadTime: '18 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Frédéric Sorrieu & His 1848 Vision',
        bullets: [
          'In 1848, French artist Frédéric Sorrieu prepared a series of four prints visualising a world made up of "democratic and social Republics".',
          'The first print shows people of Europe and America marching past the Statue of Liberty, holding the Torch of Enlightenment and Charter of the Rights of Man.',
          'Shattered remains of absolutist institutions lie scattered on the foreground; Christ, saints, and angels gaze upon the scene symbolising fraternity.',
        ],
      },
      {
        title: 'The French Revolution & Idea of the Nation (1789)',
        bullets: [
          'Introduced ideas of "la patrie" (the fatherland) and "le citoyen" (the citizen) emphasizing equal rights under a constitution.',
          'Replaced the royal standard with a new French tricolour flag; Estates General renamed National Assembly.',
          'Adopted uniform weights and measures, abolished internal customs duties, and promoted French as the common national language.',
        ],
      },
      {
        title: 'Civil Code of 1804 (Napoleonic Code)',
        bullets: [
          'Did away with all privileges based on birth, established equality before law, and secured the right to property.',
          'Simplified administrative divisions, abolished feudal system, and freed peasants from serfdom and manorial dues.',
          'Guild restrictions were removed in towns; transport and communication systems were improved.',
        ],
      },
      {
        title: 'Unification of Italy & Germany',
        bullets: [
          'Germany: King William I of Prussia crowned Emperor at Versailles in 1871 after three wars over seven years orchestrated by Chief Minister Otto von Bismarck.',
          'Italy: Divided into 7 states; Giuseppe Mazzini formed Young Italy; Count Cavour formed alliances; Giuseppe Garibaldi led the Expedition of the Thousand (Red Shirts); Victor Emmanuel II declared King in 1861.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. The Aristocracy and the New Middle Class',
        content: 'Socially and politically, a landed aristocracy was the dominant class on the continent. They spoke French for diplomacy and owned estates in both countryside and town-houses. However, numerically they were a small group. In Western and parts of Central Europe, the growth of industrial production and trade led to the emergence of commercial classes and a new middle class: industrialists, businessmen, and professionals. It was among these educated, liberal middle classes that ideas of national unity following the abolition of aristocratic privileges gained popularity.',
        keyTakeaway: 'The industrial revolution in England and Western Europe gave birth to the working class and liberal middle class who spearheaded nationalist demands.',
        highlights: [
          'Liberalism derived from Latin "liber" meaning free',
          'Economic liberalism: freedom of markets and abolition of state-imposed tariffs',
          '1834: Customs union called Zollverein formed at the initiative of Prussia to remove trade barriers',
        ],
      },
      {
        heading: '2. A New Conservatism after 1815 & The Congress of Vienna',
        content: 'Following the defeat of Napoleon in 1815, European governments were driven by a spirit of conservatism. Conservatives believed that established, traditional institutions of state and society—like the monarchy, the Church, social hierarchies, property, and the family—should be preserved. In 1815, representatives of the European powers—Britain, Russia, Prussia, and Austria—who had collectively defeated Napoleon, met at Vienna to draw up a settlement for Europe hosted by the Austrian Chancellor Duke Metternich.',
        keyTakeaway: 'The Bourbon dynasty was restored to power in France, and a series of buffer states were set up on French boundaries to prevent future French expansion.',
        highlights: [
          'Kingdom of the Netherlands including Belgium was set up in the north',
          'Genoa was added to Piedmont in the south',
          'Prussia was given important new territories on its western frontiers',
          'German confederation of 39 states created by Napoleon was left untouched',
        ],
      },
      {
        heading: '3. Visualising the Nation: Allegories of Marianne and Germania',
        content: 'Artists in the eighteenth and nineteenth centuries personified nations as female figures. The female form that was chosen to personify the nation did not stand for any particular woman in real life; rather it sought to give the abstract idea of the nation a concrete form. In France she was christened Marianne, a popular Christian name, which underlined the idea of a people’s nation. Her characteristics were drawn from Liberty and the Republic—the red cap, the tricolour, the cockade. In Germany, Germania became the allegory of the German nation, wearing a crown of oak leaves as the German oak stands for heroism.',
        keyTakeaway: 'Female allegories became public symbols of national unity that common citizens could easily recognize and rally behind.',
      },
    ],
    keyConcepts: [
      {
        term: 'Liberalism',
        explanation: 'Derived from Latin root "liber", meaning free. Politically, it emphasized the concept of government by consent, end of autocracy and clerical privileges, a constitution, and representative government through parliament.',
        examTip: 'Remember to distinguish between Political Liberalism (rule of law, representative govt) and Economic Liberalism (freedom of markets, removal of tariffs).',
      },
      {
        term: 'Zollverein',
        explanation: 'A customs union formed in 1834 at the initiative of Prussia and joined by most German states. It abolished tariff barriers and reduced the number of currencies from over thirty to two.',
        examTip: 'Often asked in 1-mark and 3-mark questions as the economic precursor to political unification of Germany.',
      },
      {
        term: 'Balkan Nationalism',
        explanation: 'A region of geographical and ethnic variation comprising modern-day Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia, and Montenegro. The spread of romantic nationalism and disintegration of Ottoman Empire turned it into an explosive powder keg.',
        examTip: 'Connect Balkan rivalries directly with Big Power rivalry leading up to the First World War in 1914.',
      },
    ],
    importantDates: [
      { date: '1789', event: 'Outbreak of the French Revolution', significance: 'First clear expression of modern nationalism based on sovereignty of people.' },
      { date: '1797', event: 'Napoleon invades Italy', significance: 'Napoleonic wars begin across the European continent.' },
      { date: '1804', event: 'Napoleonic Civil Code established', significance: 'Abolished feudalism and birth privileges, established equality before law.' },
      { date: '1815', event: 'Battle of Waterloo & Congress of Vienna', significance: 'Defeat of Napoleon; conservative monarchical order restored by Metternich.' },
      { date: '1821', event: 'Greek War of Independence begins', significance: 'Greek nationalists supported by West Europeans and poets like Lord Byron; Treaty of Constantinople 1832 recognized Greece as an independent nation.' },
      { date: '1848', event: 'Revolutions across Europe & Frankfurt Parliament', significance: 'Middle-class liberals draft a constitution for a unified Germany; rejected by Prussian King Friedrich Wilhelm IV.' },
      { date: '1861', event: 'Victor Emmanuel II proclaimed King of United Italy', significance: 'Completion of major phase of Italian unification.' },
      { date: '1871', event: 'German Empire proclaimed at Hall of Mirrors, Versailles', significance: 'Kaiser William I of Prussia declared Emperor of unified Germany.' },
    ],
    importantPeople: [
      { name: 'Giuseppe Mazzini', role: 'Italian Revolutionary & Thinker', contribution: 'Founded Young Italy (Marseilles) and Young Europe (Berne). Believed God had intended nations to be the natural units of mankind. Metternich described him as "the most dangerous enemy of our social order".' },
      { name: 'Count Camillo de Cavour', role: 'Chief Minister of Sardinia-Piedmont', contribution: 'Neither a revolutionary nor a democrat; through a tactful diplomatic alliance with France engineered the defeat of Austrian forces in 1859.' },
      { name: 'Giuseppe Garibaldi', role: 'Hero of the Red Shirts', contribution: 'Led the Expedition of the Thousand into Southern Italy and the Kingdom of Two Sicilies in 1860, winning peasant support to drive out Spanish rulers.' },
      { name: 'Otto von Bismarck', role: 'Architect of German Unification', contribution: 'Prussian Chief Minister who followed the policy of "Blood and Iron", fighting three victorious wars against Denmark, Austria, and France over seven years.' },
    ],
    definitions: [
      { term: 'Absolutist', definition: 'Literally, a government or system of rule that has no restraints on the power exercised; in history, centralized, militarized, and repressive monarchies.', context: 'Describing pre-1789 European monarchies.' },
      { term: 'Utopian', definition: 'A vision of a society that is so ideal that it is unlikely to actually exist.', context: 'Frédéric Sorrieu’s peaceful vision of democratic republics.' },
      { term: 'Plebiscite', definition: 'A direct vote by which all the people of a region are asked to accept or reject a proposal.', context: 'Used by Ernest Renan in defining a true nation.' },
      { term: 'Suffrage', definition: 'The constitutional or legal right to vote in political elections.', context: 'Initially granted only to property-owning men in revolutionary France.' },
    ],
    importantFigures: [
      {
        title: 'Stages of German Unification (1864 - 1871)',
        description: 'Flowchart of Bismarck’s three wars under the leadership of Prussia.',
        type: 'flowchart',
        steps: [
          '1848: Failure of Frankfurt Parliament (King of Prussia rejects liberal crown)',
          '1862: Otto von Bismarck appointed Prussian Chief Minister (Policy of Blood & Iron)',
          '1864: Danish War (Prussia & Austria defeat Denmark; Schleswig-Holstein acquired)',
          '1866: Austro-Prussian Seven Weeks War (Prussia decisively defeats Austria at Sadowa)',
          '1870-71: Franco-Prussian War (France defeated at Sedan; Paris captured)',
          'January 18, 1871: Proclamation of German Empire in the Hall of Mirrors at Versailles',
        ],
      },
      {
        title: 'Comparison: Marianne vs Germania',
        description: 'Visual attributes and meanings of the two female allegories.',
        type: 'table',
        headers: ['Attribute / Feature', 'Marianne (France)', 'Germania (Germany)'],
        rows: [
          ['Name Origin', 'Popular Christian name representing people’s nation', 'Personification of the German cultural sphere'],
          ['Headgear', 'Red Phrygian cap (Liberty) & Cockade', 'Crown of Oak Leaves (stands for German heroism)'],
          ['Symbol of Strength', 'Tricolour flag & Republic symbols', 'Sword (readiness to fight) & Breastplate with eagle'],
          ['Peace / New Era', 'Olive branch around sword', 'Rays of the rising sun (beginning of a new era)'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Nationalism transformed Europe from dynastic empires into sovereign nation-states. It started with the French Revolution of 1789, spread across Europe via Napoleon, experienced conservative backlash in 1815 (Metternich), saw middle-class revolutions in 1830 and 1848, culminated in Italian unification (Cavour, Mazzini, Garibaldi) and German unification (Bismarck), and finally degenerated into imperialist rivalries in the Balkans sparking World War I.',
      goldenPoints: [
        'French Revolution introduced "la patrie" & "le citoyen" + tricolour flag + abolition of internal customs.',
        'Napoleonic Code 1804 eliminated feudal privileges and secured property rights, but lacked political freedom.',
        '1815 Vienna Congress was hosted by Metternich to restore Bourbon monarchy and establish buffer states around France.',
        'Zollverein (1834 customs union) created economic nationalism which unified German states economically before political unification.',
        'Otto von Bismarck used three wars in 7 years (Denmark, Austria, France) to crown Kaiser William I at Versailles in 1871.',
      ],
      mindMapSteps: [
        '1789 French Revolution → Idea of Sovereign Citizen',
        '1804 Napoleonic Reforms across conquered Europe',
        '1815 Treaty of Vienna → Conservative Monarchy Restored',
        '1830 & 1848 Liberal Uprisings + Frankfurt Assembly',
        '1859-1870 Italian Unification under Victor Emmanuel II',
        '1864-1871 German Unification under Prussian Leadership',
        '1871-1914 Balkan Crisis & Outbreak of World War I',
      ],
      commonPitfalls: [
        'Do not confuse the Frankfurt Parliament (1848 liberal attempt) with the Proclamation of German Empire at Versailles (1871 military triumph).',
        'Remember that Count Cavour was from Sardinia-Piedmont, not the Papal States or Kingdom of Two Sicilies.',
        'Greek independence was finalized by the Treaty of Constantinople (1832), not the Treaty of Vienna (1815).',
      ],
    },
    flashcards: [
      { id: 'fc-1', front: 'What was the Zollverein and when was it formed?', back: 'A customs union formed in 1834 at the initiative of Prussia, joined by most German states. It abolished tariff barriers and reduced currencies from 30+ to 2.', category: 'concept' },
      { id: 'fc-2', front: 'Who said: "When France sneezes, the rest of Europe catches cold"?', back: 'Austrian Chancellor Duke Metternich, referring to the contagious nature of French revolutionary uprisings.', category: 'concept' },
      { id: 'fc-3', front: 'What was the Treaty of Constantinople of 1832?', back: 'The international treaty that recognized Greece as an independent nation, ending Ottoman rule.', category: 'date' },
      { id: 'fc-4', front: 'Name the three leaders key to the unification of Italy.', back: '1. Giuseppe Mazzini (ideological founder)\n2. Count Camillo de Cavour (diplomatic statesman)\n3. Giuseppe Garibaldi (military leader of Red Shirts)', category: 'concept' },
      { id: 'fc-5', front: 'What does the crown of oak leaves worn by Germania signify?', back: 'Heroism, as the German oak tree is traditionally considered a symbol of strength and valor.', category: 'definition' },
    ],
    questions: [
      {
        id: 'c10-h1-q1',
        type: 'mcq',
        typeLabel: 'Multiple Choice Question',
        marks: 1,
        year: 'CBSE 2023',
        question: 'Which of the following treaties recognized Greece as an independent nation?',
        options: ['Treaty of Versailles', 'Treaty of Vienna (1815)', 'Treaty of Constantinople (1832)', 'Treaty of Frankfurt'],
        correctOptionIndex: 2,
        answer: 'Option (C) Treaty of Constantinople (1832)',
        explanation: 'The Greek War of Independence (1821–1832) mobilized nationalist feelings across Europe. By the Treaty of Constantinople of 1832, Greece was formally recognized as an independent nation.',
      },
      {
        id: 'c10-h1-q2',
        type: 'vsa',
        typeLabel: 'Very Short Answer',
        marks: 1,
        year: 'CBSE 2020',
        question: 'What was the main aim of the French revolutionaries in 1789?',
        answer: 'The main aim of the French revolutionaries was to create a collective identity among the French people by abolishing monarchy and establishing a sovereign nation where citizens possessed equal rights under a common constitution.',
        keyPointsToScore: ['Creation of collective national identity (la patrie, le citoyen)', 'Sovereignty transferred from monarch to a body of citizens'],
      },
      {
        id: 'c10-h1-q3',
        type: 'sa',
        typeLabel: 'Short Answer (3 Marks)',
        marks: 3,
        year: 'CBSE 2022',
        question: 'Explain any three provisions of the Civil Code of 1804 (Napoleonic Code).',
        answer: 'The Civil Code of 1804, usually known as the Napoleonic Code, brought revolutionary administrative reforms:\n1. Abolition of Privileges: It did away with all privileges based on birth and established equality before the law.\n2. Right to Property: It secured the fundamental right to private property for citizens.\n3. Feudal Reforms: It abolished the feudal system, freed peasants from serfdom and manorial dues, and removed urban guild restrictions while improving transport and communication networks.',
        keyPointsToScore: ['Abolition of privileges based on birth', 'Equality before law and property rights', 'Abolition of feudal system, serfdom and guild restrictions'],
      },
      {
        id: 'c10-h1-q4',
        type: 'la',
        typeLabel: 'Long Answer (5 Marks)',
        marks: 5,
        year: 'CBSE 2023',
        question: 'Describe the process of Unification of Germany under the leadership of Otto von Bismarck.',
        answer: 'The unification of Germany was achieved through a calculated diplomatic and military process led by Prussia:\n1. Failure of 1848 Liberal Effort: Middle-class Germans tried to unite the different regions of the German confederation into a nation-state governed by an elected parliament in 1848 (Frankfurt Parliament), but were repressed by the monarchy and military.\n2. Prussian Leadership: Prussia took on the leadership of the movement for national unification. Its Chief Minister, Otto von Bismarck, was the architect of this process, operating with the help of the Prussian army and bureaucracy (Policy of "Blood and Iron").\n3. Three Decisive Wars: Over seven years, Prussia fought three wars with Denmark (1864), Austria (1866), and France (1870–71)—all ending in decisive Prussian victory.\n4. Completion of Unification: These victories completed the process of unification and established Prussian dominance over Central Europe.\n5. Proclamation at Versailles: On January 18, 1871, an assembly comprising princes of German states, army representatives, and Bismarck gathered in the unheated Hall of Mirrors at Versailles to proclaim the new German Empire headed by Kaiser William I of Prussia.',
        keyPointsToScore: ['1848 Frankfurt Assembly context', 'Bismarck and Blood & Iron doctrine', 'Three wars over 7 years (Denmark, Austria, France)', 'Coronation of Kaiser William I at Versailles (1871)'],
      },
      {
        id: 'c10-h1-q5',
        type: 'ar',
        typeLabel: 'Assertion & Reason',
        marks: 1,
        year: 'CBSE Sample Paper',
        assertion: 'In 1834, a customs union or Zollverein was formed at the initiative of Prussia.',
        reason: 'The union abolished tariff barriers and reduced the number of currencies from over thirty to two, creating a unified economic territory.',
        question: 'Evaluate the Assertion (A) and Reason (R):',
        options: [
          'Both A and R are true and R is the correct explanation of A.',
          'Both A and R are true but R is not the correct explanation of A.',
          'A is true but R is false.',
          'A is false but R is true.',
        ],
        correctOptionIndex: 0,
        answer: 'Option (A) Both A and R are true and R is the correct explanation of A.',
        explanation: 'Zollverein was initiated by Prussia to harness economic interest to national unification. Removing tariffs and reducing currencies allowed free movement of goods, people, and capital.',
      },
      {
        id: 'c10-h1-q6',
        type: 'case',
        typeLabel: 'Case-Based Question (4 Marks)',
        marks: 4,
        year: 'CBSE 2024 Practice',
        casePassage: 'Nationalism, aligned with imperialism, led Europe to disaster in 1914. But meanwhile, many countries in the world which had been colonized by the European powers in the nineteenth century began to oppose imperial domination. The anti-colonial movements that developed everywhere were nationalist, in the sense that they all struggled to form independent nation-states, and were inspired by a sense of collective national unity, forged in confrontation with imperialism. European ideas of nationalism were nowhere replicated, for people everywhere developed their own specific variety of nationalism. But the idea that societies should be organized into "nation-states" came to be accepted as natural and universal.',
        question: 'Read the source above and answer:\n1. How did nationalism lead Europe to disaster in 1914?\n2. What was the common characteristic of anti-colonial movements outside Europe?\n3. Explain how nationalism in colonized countries differed from European nationalism.',
        answer: '1. By the last quarter of the 19th century, nationalism lost its idealistic liberal-democratic sentiment and became a narrow creed with aggressive military rivalry, particularly in the Balkans, culminating in World War I in 1914.\n2. Anti-colonial movements were united by their collective struggle to overthrow foreign imperialist domination and establish sovereign, independent nation-states.\n3. European nationalism became linked with aggressive imperialism and territorial expansion over others, whereas colonized nations developed defensive anti-imperialist nationalism centered on liberation, social justice, and self-determination.',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - HISTORY - CHAPTER 2
  // ==========================================
  {
    id: 'c10-hist-ch2',
    classLevel: 10,
    subject: 'history',
    chapterNumber: 2,
    title: 'Nationalism in India',
    subtitle: 'Satyagraha, Non-Cooperation, Civil Disobedience, and the Collective Imagination of Bharat Mata',
    overview: 'In India, as in Vietnam and many other colonies, the growth of modern nationalism is intimately connected to the anti-colonial movement. People began discovering their unity in the process of their struggle with colonialism. Mahatma Gandhi channeled varied grievances into a mass movement for Purna Swaraj.',
    estimatedReadTime: '20 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Idea of Satyagraha & Early Experiments',
        bullets: [
          'Satyagraha emphasized the power of truth and the need to search for truth. Non-violent appeal to the conscience of the oppressor.',
          '1917 Champaran (Bihar): Against the oppressive indigo plantation system.',
          '1917 Kheda (Gujarat): Supporting peasants unable to pay revenue due to crop failure and plague.',
          '1918 Ahmedabad (Gujarat): Organizing cotton mill workers demanding a 35% wage hike.',
        ],
      },
      {
        title: 'Rowlatt Act & Jallianwala Bagh (1919)',
        bullets: [
          'Rowlatt Act (1919) gave government enormous powers to repress political activities and allowed detention of political prisoners without trial for two years.',
          'April 13, 1919: General Dyer blocked exit points of Jallianwala Bagh in Amritsar and opened fire on peaceful gathering celebrating Baisakhi and protesting arrests.',
        ],
      },
      {
        title: 'Non-Cooperation Movement (1920–1922)',
        bullets: [
          'Gandhi wrote in "Hind Swaraj" (1909) that British rule was established and survived in India with the cooperation of Indians; if Indians refused to cooperate, British rule would collapse.',
          'Surrender of titles, boycott of civil services, army, police, courts, legislative councils, schools, and foreign goods.',
          'Called off in February 1922 after the Chauri Chaura incident where 22 policemen were burnt inside a police station.',
        ],
      },
      {
        title: 'Salt March & Civil Disobedience Movement (1930)',
        bullets: [
          'Gandhi sent an 11-point ultimatum to Viceroy Lord Irwin demanding abolition of the salt tax.',
          'March 12, 1930: Gandhi set out from Sabarmati Ashram with 78 trusted volunteers, walked 240 miles to Dandi in 24 days, and manufactured salt on April 6, 1930.',
          'Unlike Non-Cooperation, Civil Disobedience asked people not only to refuse cooperation but also to break colonial laws.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. Differing Strands within the Movement',
        content: 'The Non-Cooperation-Khilafat Movement began in January 1921. Various social groups participated in this movement, each with its own specific aspiration. All of them responded to the call of Swaraj, but the term meant different things to different people:\n\n• In the Cities: Middle-class participation started with students leaving government-controlled schools, lawyers giving up practice, and foreign cloth boycotted. Foreign cloth imports halved between 1920 and 1921 (value dropping from Rs 102 crore to Rs 57 crore). However, the movement slowed down because Khadi was more expensive than mill-made cloth and alternative Indian educational institutions were slow to come up.\n\n• In the Countryside (Awadh): Led by Baba Ramchandra (a sanyasi who had been an indentured laborer in Fiji). Peasants fought against talukdars and landlords who demanded exorbitant rents and begar (unpaid forced labor). Jawaharlal Nehru helped set up the Oudh Kisan Sabha in October 1920.\n\n• Tribal Peasants (Gudem Hills, Andhra Pradesh): Led by Alluri Sitaram Raju who claimed special astrological powers. Tribal peasants launched militant guerrilla warfare against forest laws that prevented them from entering reserved forests to graze cattle or collect firewood.',
        keyTakeaway: 'Swaraj had diverse interpretations: for peasants it meant reduction of revenue and begar; for tribals it meant freedom to enter forests.',
      },
      {
        heading: '2. The Sense of Collective Belonging',
        content: 'Nationalism spreads when people begin to believe that they are all part of the same nation, when they discover some unity that binds them together. This sense of collective belonging came partly through the experience of united struggles. But there were also a variety of cultural processes through which nationalism captured people’s imagination:\n\n1. Image of Bharat Mata: First created by Bankim Chandra Chattopadhyay who wrote "Vande Mataram" in his novel Anandamath (1870s). In 1905, Abanindranath Tagore painted his famous portrait of Bharat Mata depicted as an ascetic figure—calm, composed, divine, and spiritual.\n2. Reviving Indian Folklore: In Bengal, Rabindranath Tagore collected ballads and nursery rhymes; in Madras, Natesa Sastri published a massive four-volume collection of Tamil folk tales, "The Folklore of Southern India".\n3. Icons and Flags: During the Swadeshi movement in Bengal, a tricolour flag (red, green, yellow) with eight lotuses representing eight British provinces and a crescent moon representing Hindus and Muslims was designed. In 1921, Gandhiji designed the Swaraj Flag (red, green, white) with a spinning wheel in the centre.\n4. Reinterpretation of History: Nationalists wrote about ancient India’s glorious achievements in art, architecture, science, mathematics, religion, and trade before colonial decline.',
        keyTakeaway: 'Cultural symbols, folklore revival, flags, and reinterpreted history were as powerful as political boycotts in forging Indian nationhood.',
      },
    ],
    keyConcepts: [
      {
        term: 'Satyagraha',
        explanation: 'A novel method of mass agitation based on truth and non-violence. It asserts that if the cause is true and the fight is against injustice, physical force is unnecessary; the oppressor can be persuaded through suffering to see the truth.',
        examTip: 'Remember the 3 early Satyagrahas in chronological order: Champaran (1917), Kheda (1917), Ahmedabad (1918).',
      },
      {
        term: 'Purna Swaraj',
        explanation: 'Complete Independence. Formally adopted at the Lahore Congress Session in December 1929 presided over by Jawaharlal Nehru, fixing January 26, 1930 as Independence Day.',
        examTip: 'This is why January 26 was later chosen as India’s Republic Day.',
      },
      {
        term: 'Poona Pact (September 1932)',
        explanation: 'Pact between Mahatma Gandhi and Dr. B.R. Ambedkar. It gave Depressed Classes (Scheduled Castes) reserved seats in provincial and central legislative councils, but they were to be voted in by the general electorate rather than separate electorates.',
        examTip: 'Crucial question on how dalit participation and separate electorates were negotiated.',
      },
    ],
    importantDates: [
      { date: 'January 1915', event: 'Mahatma Gandhi returns to India from South Africa', significance: 'Introduced the successful technique of Satyagraha to the Indian freedom struggle.' },
      { date: '1917', event: 'Champaran Satyagraha in Bihar', significance: 'First peasant struggle led by Gandhi against oppressive indigo planters.' },
      { date: 'April 13, 1919', event: 'Jallianwala Bagh Massacre in Amritsar', significance: 'General Dyer opens fire on unarmed peaceful crowd, shocking the nation.' },
      { date: 'December 1920', event: 'Nagpur Congress Session', significance: 'Non-Cooperation Movement program was formally adopted by the Indian National Congress.' },
      { date: 'February 1922', event: 'Chauri Chaura Incident', significance: 'Violent clash in Gorakhpur leads Gandhi to abruptly withdraw the Non-Cooperation Movement.' },
      { date: 'December 1929', event: 'Lahore Congress Session', significance: 'Demand for "Purna Swaraj" (Complete Independence) passed under Jawaharlal Nehru.' },
      { date: 'April 6, 1930', event: 'Dandi Salt March concludes', significance: 'Gandhi makes salt at Dandi beach, inaugurating the Civil Disobedience Movement.' },
      { date: 'March 1931', event: 'Gandhi-Irwin Pact', significance: 'Gandhi agreed to suspend Civil Disobedience and participate in the Second Round Table Conference in London.' },
      { date: 'September 1932', event: 'Poona Pact signed', significance: 'Agreement between Gandhi and Ambedkar on reserved seats for Depressed Classes.' },
      { date: 'August 1942', event: 'Quit India Movement launched', significance: 'Gandhi gave the historic call of "Do or Die" demanding immediate British withdrawal.' },
    ],
    importantPeople: [
      { name: 'Mahatma Gandhi', role: 'Father of the Nation', contribution: 'Pioneered Satyagraha, mobilized nationwide mass movements (Non-Cooperation, Civil Disobedience, Quit India).' },
      { name: 'Dr. B.R. Ambedkar', role: 'Leader of Depressed Classes Association', contribution: 'Championed dalit rights, demanded separate electorates at Round Table Conferences, signed Poona Pact with Gandhi in 1932.' },
      { name: 'Jawaharlal Nehru', role: 'President of Lahore Congress (1929)', contribution: 'Moved the historic Purna Swaraj resolution; mobilized peasants in Awadh through Oudh Kisan Sabha.' },
      { name: 'Alluri Sitaram Raju', role: 'Tribal Guerrilla Leader in Gudem Hills (A.P.)', contribution: 'Inspired by Gandhiji to wear Khadi and give up drinking, but advocated armed guerrilla warfare to achieve freedom.' },
      { name: 'Bankim Chandra Chattopadhyay', role: 'Nationalist Writer & Poet', contribution: 'Composed "Vande Mataram" in the 1870s as a hymn to the motherland; included in his novel Anandamath.' },
    ],
    definitions: [
      { term: 'Begar', definition: 'Forced labor that villagers and peasants were compelled to do for landlords or the state without any payment.', context: 'Fought against by Baba Ramchandra in Awadh.' },
      { term: 'Boycott', definition: 'The refusal to deal and associate with people, or participate in activities, or buy and use things; usually a form of political protest.', context: 'Core strategy of Non-Cooperation and Swadeshi.' },
      { term: 'Picketing', definition: 'A form of demonstration or protest by which people block the entrance to a shop, factory, or office.', context: 'Women picketed foreign liquor and cloth shops during Civil Disobedience.' },
    ],
    importantFigures: [
      {
        title: 'Comparison: Non-Cooperation Movement (1920) vs Civil Disobedience (1930)',
        description: 'Key differences between the two nationwide campaigns led by Mahatma Gandhi.',
        type: 'table',
        headers: ['Parameter', 'Non-Cooperation Movement (1920-22)', 'Civil Disobedience Movement (1930-34)'],
        rows: [
          ['Objective', 'Attain Swaraj within the British Empire through non-violent non-cooperation', 'Attain complete Purna Swaraj and break unjust British laws'],
          ['Scope of Action', 'Refusal to cooperate with colonial government and boycott institutions', 'Refusal of cooperation PLUS deliberate violation of colonial laws (e.g. Salt Law)'],
          ['Peasant Issues', 'Focused on reduction of rent and begar', 'Refusal to pay land revenue and chaukidari taxes'],
          ['Muslim Participation', 'Very high due to Khilafat alliance with Ali Brothers', 'Lukewarm due to alienation of Muslim League after mid-1920s'],
          ['Women Participation', 'Limited largely to symbolic support in homes', 'Large-scale active participation: picketing, marching, going to jail'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Nationalism in India grew as an anti-colonial movement led by Mahatma Gandhi. Through early regional Satyagrahas (Champaran, Kheda, Ahmedabad), the Rowlatt Satyagraha, the unified Non-Cooperation-Khilafat movement, and the dramatic Salt March launching Civil Disobedience, millions of peasants, tribals, workers, students, and women participated. Cultural anchors like the image of Bharat Mata, national flags, Vande Mataram, and folklore helped forge an enduring national identity.',
      goldenPoints: [
        'Gandhian Satyagraha is based on truth and non-violence without malice toward the oppressor.',
        'Jallianwala Bagh massacre (April 13, 1919) led to Rabindranath Tagore renouncing his knighthood.',
        'Non-Cooperation was formally adopted at Nagpur Session (Dec 1920) and suspended after Chauri Chaura (Feb 1922).',
        'Salt was chosen by Gandhi because it was consumed by rich and poor alike, making British salt tax the most oppressive tax.',
        'Poona Pact (1932) resolved the crisis of separate electorates by providing reserved seats for Depressed Classes within general electorates.',
      ],
      mindMapSteps: [
        '1915 Gandhi Returns → 1917-18 Local Satyagrahas',
        '1919 Rowlatt Act → April 13 Jallianwala Bagh',
        '1920 Nagpur Session → Non-Cooperation & Khilafat Movement',
        '1922 Chauri Chaura → Movement Called Off',
        '1929 Lahore Session → Demand for Purna Swaraj',
        '1930 Dandi Salt March → Civil Disobedience Movement',
        '1931 Gandhi-Irwin Pact → 1932 Poona Pact',
      ],
      commonPitfalls: [
        'Do not confuse the 1920 Nagpur Session (adoption of Non-Cooperation) with the 1929 Lahore Session (Purna Swaraj).',
        'In Civil Disobedience, people were breaking colonial laws; in Non-Cooperation, they were merely refusing to cooperate.',
        'Baba Ramchandra led the peasant movement in Awadh (UP), while Alluri Sitaram Raju led the tribal movement in Gudem Hills (Andhra Pradesh).',
      ],
    },
    flashcards: [
      { id: 'fc-ind-1', front: 'Why did Mahatma Gandhi select salt as a symbol of protest?', back: 'Salt was an essential item of food consumed by both rich and poor alike. The tax on salt and government monopoly over its production revealed the most oppressive face of British rule.', category: 'concept' },
      { id: 'fc-ind-2', front: 'Where did the historic Jallianwala Bagh massacre take place?', back: 'Amritsar, Punjab on April 13, 1919 under the orders of Brigadier-General Reginald Dyer.', category: 'location' },
      { id: 'fc-ind-3', front: 'Who authored the hymn "Vande Mataram"?', back: 'Bankim Chandra Chattopadhyay in the 1870s, later included in his novel Anandamath.', category: 'concept' },
      { id: 'fc-ind-4', front: 'What was the outcome of the Poona Pact of September 1932?', back: 'It gave Depressed Classes reserved seats in provincial and central legislatures, but voted by the joint general electorate instead of separate electorates.', category: 'date' },
    ],
    questions: [
      {
        id: 'c10-h2-q1',
        type: 'mcq',
        typeLabel: 'Multiple Choice Question',
        marks: 1,
        year: 'CBSE 2023',
        question: 'Under whose presidency was the resolution for "Purna Swaraj" passed at the Lahore Congress Session in 1929?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose', 'Motilal Nehru'],
        correctOptionIndex: 1,
        answer: 'Option (B) Jawaharlal Nehru',
        explanation: 'In December 1929, under the presidency of Jawaharlal Nehru, the Lahore Congress formalized the demand of "Purna Swaraj" or complete independence for India.',
      },
      {
        id: 'c10-h2-q2',
        type: 'vsa',
        typeLabel: 'Very Short Answer',
        marks: 1,
        year: 'CBSE 2021',
        question: 'Why did Gandhiji decide to withdraw the Non-Cooperation Movement in 1922?',
        answer: 'Gandhiji withdrew the Non-Cooperation Movement in February 1922 due to the violent incident at Chauri Chaura (Gorakhpur, UP), where a peaceful crowd turned violent and burned a police station with 22 policemen inside. Gandhiji felt satyagrahis needed further training in non-violence.',
      },
      {
        id: 'c10-h2-q3',
        type: 'sa',
        typeLabel: 'Short Answer (3 Marks)',
        marks: 3,
        year: 'CBSE 2022',
        question: 'Explain the role of women in the Civil Disobedience Movement of 1930.',
        answer: 'Women participated on a massive scale during the Civil Disobedience Movement:\n1. Participation in Protests: Thousands of women came out of their homes during Gandhiji’s Salt March to listen to him, participate in protest marches, and manufacture salt.\n2. Picketing: Women actively picketed foreign cloth shops and liquor shops across towns and cities.\n3. Imprisonment: In urban areas from high-caste families and in rural areas from rich peasant households, women saw service to the nation as a sacred duty and courageously went to jail.',
      },
      {
        id: 'c10-h2-q4',
        type: 'la',
        typeLabel: 'Long Answer (5 Marks)',
        marks: 5,
        year: 'CBSE 2023',
        question: 'How did cultural processes and symbols contribute to the growth of nationalism in India?',
        answer: 'Nationalism captured the imagination of Indians through powerful cultural processes:\n1. Image of Bharat Mata: The identity of India came to be visually associated with the image of Bharat Mata. Bankim Chandra Chattopadhyay created the first image and composed Vande Mataram. Abanindranath Tagore painted Bharat Mata as an ascetic, divine figure radiating composure and wisdom.\n2. Revival of Indian Folklore: Nationalists toured villages to record folk songs and legends to preserve national heritage. Rabindranath Tagore in Bengal and Natesa Sastri in Madras ("The Folklore of Southern India") led this revival.\n3. National Flags as Symbols of Defiance: During the Swadeshi movement, a tricolour flag with eight lotuses was designed. Later, in 1921, Gandhiji designed the Swaraj flag with a spinning wheel representing self-reliance; carrying it aloft became a symbol of defiance.\n4. Reinterpretation of History: British historians depicted Indians as backward and incapable of self-governance. Indian nationalists responded by writing about the glorious ancient past of India in art, science, mathematics, medicine, and philosophy, urging pride in national heritage.',
      },
      {
        id: 'c10-h2-q5',
        type: 'map',
        typeLabel: 'Map-Based Question (2 Marks)',
        marks: 2,
        year: 'CBSE Board Exam Specimen',
        question: 'On an outline map of India, locate and label:\n(A) The place where Indian National Congress session was held in September 1920.\n(B) The place where Mahatma Gandhi broke the Salt Law in 1930.',
        answer: '(A) Calcutta (Kolkata), West Bengal (Special Congress session where resolution for Non-Cooperation was mooted).\n(B) Dandi, coastal Gujarat (where Gandhiji concluded the 240-mile Salt March on April 6, 1930).',
        keyPointsToScore: ['Accurate marking of Calcutta on Bengal coast', 'Accurate marking of Dandi on Gujarat coast'],
      },
    ],
  },

  // ==========================================
  // CLASS 10 - GEOGRAPHY - CHAPTER 1
  // ==========================================
  {
    id: 'c10-geo-ch1',
    classLevel: 10,
    subject: 'geography',
    chapterNumber: 1,
    title: 'Resources and Development',
    subtitle: 'Resource Planning, Land Utilization, Soil Classification, and Sustainable Conservation',
    overview: 'Everything available in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible and culturally acceptable, can be termed as a Resource. Interdependence between nature, technology, and institutions transforms materials into resources.',
    estimatedReadTime: '16 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Classification of Resources',
        bullets: [
          'On basis of Origin: Biotic (living organisms, forests, fauna) and Abiotic (rocks, metals).',
          'On basis of Exhaustibility: Renewable (solar, wind, water, forests) and Non-Renewable (fossil fuels, minerals).',
          'On basis of Ownership: Individual (plots, houses), Community (grazing grounds, parks), National (all minerals, water within 12 nautical miles), International (oceanic resources beyond 200 nautical miles of Exclusive Economic Zone).',
          'On basis of Status of Development: Potential (wind in Rajasthan/Gujarat), Developed (surveyed and quantified), Stock (water as H2 + O2 but lacking technology), Reserves (subset of stock usable with present technology).',
        ],
      },
      {
        title: 'Resource Planning in India (3 Essential Steps)',
        bullets: [
          'Step 1: Identification and inventory of resources across regions (surveying, mapping, qualitative and quantitative estimation).',
          'Step 2: Evolving a planning structure endowed with appropriate technology, skill, and institutional set-up.',
          'Step 3: Matching the resource development plans with overall national development plans.',
        ],
      },
      {
        title: 'Major Soil Types of India',
        bullets: [
          'Alluvial Soil: Most widespread and fertile; Northern plains and eastern coastal deltas; rich in potash, phosphoric acid, lime; Bangar (old) and Khadar (new).',
          'Black Soil (Regur): Formed by lava flows in Deccan Trap (Maharashtra, Gujarat, MP); ideal for growing cotton; rich in calcium carbonate, magnesium, potash; develops deep cracks in summer.',
          'Red and Yellow Soil: Develops on crystalline igneous rocks in low rainfall areas of eastern and southern Deccan; reddish due to iron diffusion; yellow when hydrated.',
          'Laterite Soil: Formed under high temperature and heavy rainfall (intense leaching); acidic (pH < 6.0); found in Karnataka, Kerala, TN; ideal for cashew nuts and tea/coffee.',
          'Arid Soil: Sandy texture and saline nature; lacks humus and moisture; found in Western Rajasthan.',
          'Forest/Mountain Soil: Loamy and silty in valley sides and coarse grained in upper slopes; acidic with low humus in snow-covered areas.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: '1. Sustainable Development & Rio Earth Summit 1992',
        content: 'Indiscriminate exploitation of resources has led to global ecological crises such as global warming, ozone layer depletion, environmental pollution, and land degradation. Sustainable economic development means "development that takes place without damaging the environment, and development in the present should not compromise with the needs of the future generations." In June 1992, more than 100 heads of states met in Rio de Janeiro, Brazil, for the first International Earth Summit. They signed the Declaration on Global Climatic Change and Biological Diversity and endorsed Agenda 21 to combat environmental damage, poverty, and disease through global cooperation.',
        keyTakeaway: 'Agenda 21 advocates that every local government should draw its own local Agenda 21 to address environmental sustainability.',
      },
      {
        heading: '2. Land Degradation and Conservation Measures',
        content: 'At present, there are about 130 million hectares of degraded land in India (28% forest degraded, 56% water eroded, remainder saline and wind eroded). Human causes vary regionally:\n• Mining and Quarrying: Deep scars and over-burdening left abandoned in Jharkhand, Chhattisgarh, MP, and Odisha.\n• Overgrazing: Main cause of land degradation in Gujarat, Rajasthan, MP, and Maharashtra.\n• Over-irrigation: Leads to waterlogging resulting in increased salinity and alkalinity in Punjab, Haryana, and Western UP.\n• Mineral Processing: Grinding of limestone for cement industry generates massive dust that retards water infiltration into soil.\n\nConservation Solutions: Afforestation, proper management of grazing, planting shelter belts of trees, stabilization of sand dunes by growing thorny bushes, and proper discharge and treatment of industrial effluents.',
        keyTakeaway: 'Region-specific causes require tailored remedies: shelter belts in arid Rajasthan, drainage management in irrigated Punjab.',
      },
    ],
    keyConcepts: [
      {
        term: 'Khadar vs Bangar',
        explanation: 'Khadar is new alluvial soil deposited by annual floods, finer in texture and more fertile. Bangar is older alluvial soil found above flood plains containing calcareous deposits called kankar nodules.',
        examTip: 'High-frequency 2-mark comparison question in board exams.',
      },
      {
        term: 'Exclusive Economic Zone (EEZ)',
        explanation: 'The oceanic area extending up to 200 nautical miles from the coast where a coastal nation has sole rights over marine resources. Oceanic resources beyond 200 nautical miles belong to open ocean and require international authorization.',
        examTip: 'India has been given the right to mine manganese nodules from the bed of the Indian Ocean from that area beyond EEZ.',
      },
      {
        term: 'Gully Erosion & Badlands',
        explanation: 'Running water cuts through clayey soils and makes deep channels as gullies. The land becomes unfit for cultivation and is known as badland. In the Chambal basin, such lands are called ravines.',
        examTip: 'Remember Chambal basin = Ravines / Gully Erosion.',
      },
    ],
    importantDates: [
      { date: 'June 1992', event: 'First UN Earth Summit in Rio de Janeiro, Brazil', significance: 'Adoption of Agenda 21 for 21st century sustainable development.' },
      { date: '1968', event: 'Club of Rome advocates resource conservation', significance: 'First systematic international advocacy for limiting resource depletion.' },
      { date: '1974', event: 'Schumacher publishes "Small is Beautiful"', significance: 'Presented Gandhian philosophy of resource conservation: "There is enough for everybody’s need and not for anybody’s greed".' },
      { date: '1987', event: 'Brundtland Commission Report', significance: 'Introduced the concept of Sustainable Development and published "Our Common Future".' },
    ],
    importantPeople: [
      { name: 'Mahatma Gandhi', role: 'Philosopher on Resource Conservation', contribution: 'Famously proclaimed: "There is enough for everybody\'s need and not for anybody\'s greed." Opposed mass production and favored production by the masses.' },
      { name: 'E.F. Schumacher', role: 'Economist & Author', contribution: 'Wrote "Small is Beautiful", popularizing Gandhian conservation ethics worldwide.' },
    ],
    definitions: [
      { term: 'Net Sown Area', definition: 'The physical extent of land on which crops are sown and harvested in a given year.', context: 'Accounts for about 54% of total reported area in India.' },
      { term: 'Current Fallow', definition: 'Land left uncultivated for one or less than one agricultural year to regain fertility naturally.', context: 'Distinguished from other fallow land left uncultivated for 1 to 5 years.' },
      { term: 'Sheet Erosion', definition: 'Water flows as a broad sheet down a slope and washes away the top fertile layer of soil over large areas.', context: 'Common type of water erosion.' },
      { term: 'Strip Cropping', definition: 'Large fields divided into strips; strips of grass are left to grow between the crops to break the force of the wind.', context: 'Method of soil conservation in windy plains.' },
    ],
    importantFigures: [
      {
        title: 'Comparison of Soil Types in India',
        description: 'Key characteristics, distribution, and suitable crops.',
        type: 'table',
        headers: ['Soil Type', 'Formation / Minerals', 'Regions / States', 'Major Crops'],
        rows: [
          ['Alluvial Soil', 'Deposited by Indus, Ganga, Brahmaputra; rich in potash, lime', 'Northern plains, Gujarat, Eastern coastal deltas', 'Wheat, Paddy, Sugarcane, Pulses'],
          ['Black / Regur Soil', 'Weathering of basaltic lava; high clay content, moisture retentive', 'Maharashtra, Saurashtra, Malwa, MP, Chhattisgarh', 'Cotton, Soybean, Tobacco, Millets'],
          ['Red & Yellow Soil', 'Diffusion of iron in crystalline igneous rocks; porous', 'Odisha, Chhattisgarh, Southern Ganga plain, Western Ghats', 'Groundnut, Pulses, Millets, Rice'],
          ['Laterite Soil', 'Intense leaching due to heavy rains; acidic; poor humus', 'Karnataka, Kerala, Tamil Nadu, Meghalaya hills', 'Cashew nuts, Tea, Coffee, Rubber'],
          ['Arid Soil', 'Sandy, saline, low moisture; high kankar layer at depth', 'Western Rajasthan, parts of Haryana and Punjab', 'Barley, Jowar, Bajra (with irrigation)'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Resources are technologically accessible, economically viable, and culturally acceptable nature assets. Classification spans origin, exhaustibility, ownership, and status. Sustainable development (Rio 1992, Agenda 21) requires multi-step resource planning. Land degradation affects 130 million hectares in India due to mining, overgrazing, and over-irrigation. India’s six major soils (Alluvial, Black, Red-Yellow, Laterite, Arid, Forest) require conservation techniques like contour ploughing, terrace farming, and shelter belts.',
      goldenPoints: [
        'Gandhian view: Over-exploitation is driven by greedy individuals and modern exploitative technology.',
        'Total geographical area of India is 3.28 million sq km, but land use reporting data is available for only 93%.',
        'National Forest Policy (1952) aims at 33% forest area for ecological equilibrium (India currently has ~24%).',
        'Alluvial soil covers the entire northern plains and coastal deltas.',
        'Contour ploughing: Ploughing along contour lines decelerates water flow down slopes.',
      ],
      mindMapSteps: [
        'Resource Concept & Classification',
        'Resource Planning (Survey → Plan → National Alignment)',
        'Land Degradation Causes (Mining, Overgrazing, Waterlogging)',
        'Conservation Techniques (Terrace, Contour, Shelter Belts)',
        'Classification of 6 Soils & Their Crop Suitability',
      ],
      commonPitfalls: [
        'Do not mix up Khadar (new, fertile) with Bangar (old, kankar-rich). Remember: Khadar is Khad (fertilizer/fertile)!',
        'Over-irrigation causes soil salinity in Punjab and Haryana; do not write "overgrazing" for Punjab.',
      ],
    },
    flashcards: [
      { id: 'fc-g1', front: 'What is the percentage of desired forest area according to the National Forest Policy (1952)?', back: '33% of total geographical area (essential for maintaining ecological balance).', category: 'concept' },
      { id: 'fc-g2', front: 'Name two methods of soil conservation in hilly and mountainous regions.', back: '1. Terrace farming / Terrace cultivation\n2. Contour ploughing', category: 'concept' },
      { id: 'fc-g3', front: 'Which soil is famously known as "Regur Soil" and what crop is it best suited for?', back: 'Black Soil; ideal for growing Cotton (hence also called Black Cotton Soil).', category: 'definition' },
      { id: 'fc-g4', front: 'Where was the first International Earth Summit held in 1992?', back: 'Rio de Janeiro, Brazil (attended by over 100 heads of state).', category: 'location' },
    ],
    questions: [
      {
        id: 'c10-g1-q1',
        type: 'mcq',
        typeLabel: 'Multiple Choice Question',
        marks: 1,
        year: 'CBSE 2023',
        question: 'Which of the following is the main cause of land degradation in Punjab and Haryana?',
        options: ['Intensive cultivation', 'Deforestation', 'Over-irrigation', 'Overgrazing'],
        correctOptionIndex: 2,
        answer: 'Option (C) Over-irrigation',
        explanation: 'Over-irrigation in Punjab and Haryana causes waterlogging which leads to increased salinity and alkalinity in the soil, rendering it degraded.',
      },
      {
        id: 'c10-g1-q2',
        type: 'sa',
        typeLabel: 'Short Answer (3 Marks)',
        marks: 3,
        year: 'CBSE 2021',
        question: 'Differentiate between Bangar and Khadar soils on any three points.',
        answer: '1. Age: Bangar is old alluvial soil deposited further away from the river bed, while Khadar is new alluvial soil deposited on the flood plains during annual floods.\n2. Texture & Composition: Bangar contains higher concentration of calcareous kankar nodules and is coarser, whereas Khadar has much finer particles.\n3. Fertility: Khadar is constantly renewed by river floods and is more fertile than Bangar, making it ideal for intensive cultivation.',
      },
      {
        id: 'c10-g1-q3',
        type: 'la',
        typeLabel: 'Long Answer (5 Marks)',
        marks: 5,
        year: 'CBSE 2022',
        question: 'Explain the three stages of resource planning in India. Why is resource planning essential in a country like India?',
        answer: 'Resource planning is a complex process that involves three stages:\n1. Identification and Inventory: Involves surveying, mapping, qualitative and quantitative estimation and measurement of resources across all regions of the country.\n2. Evolving a Planning Structure: Endowed with appropriate technology, skill, and institutional set-up for implementing resource development plans.\n3. National Harmonization: Matching the resource development plans with overall national development plans and priorities.\n\nNeed for Resource Planning in India:\n• Enormous Diversity: Some regions are rich in certain resources but deficient in others (e.g. Jharkhand and Odisha have abundant minerals and coal, but lack infrastructure; Arunachal Pradesh has abundant water resources, but lacks infrastructural development).\n• Self-sufficiency & Equity: Ladakh is rich in cultural heritage, but deficient in water, infrastructure, and vital minerals. A balanced resource plan at national, state, regional, and local levels ensures equitable development and prevents regional disparity.',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - CIVICS - CHAPTER 1
  // ==========================================
  {
    id: 'c10-civ-ch1',
    classLevel: 10,
    subject: 'civics',
    chapterNumber: 1,
    title: 'Power Sharing',
    subtitle: 'The Belgian Model, Sri Lankan Majoritarianism, and Forms of Democratic Power Sharing',
    overview: 'Power sharing is the very spirit of democracy. This chapter examines how Belgium and Sri Lanka handled ethnic diversity differently: one through negotiation and accommodation, the other through majoritarian dominance leading to civil war.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Ethnic Composition of Belgium & Sri Lanka',
        bullets: [
          'Belgium: 59% Dutch-speaking (Flemish region), 40% French-speaking (Wallonia), 1% German-speaking. In capital Brussels: 80% French, 20% Dutch.',
          'Sri Lanka: 74% Sinhala speakers (mostly Buddhist), 18% Tamil speakers (13% Sri Lankan Tamils, 5% Indian Tamils - Hindu and Muslim), 7% Christians (both Sinhala and Tamil).',
        ],
      },
      {
        title: 'Sri Lanka: Majoritarianism in Action',
        bullets: [
          '1956 Act recognized Sinhala as the sole official language, disregarding Tamil.',
          'Preferential policies favored Sinhala applicants for university positions and government jobs.',
          'State pledged to foster Buddhism; Tamils felt alienated leading to demands for independent Tamil Eelam and a brutal Civil War.',
        ],
      },
      {
        title: 'Belgium: Accommodation Model (1970–1993)',
        bullets: [
          'Equal number of Dutch and French-speaking ministers in the central government.',
          'State governments are not subordinate to the central government.',
          'Brussels has a separate government with equal representation for both linguistic communities.',
          'Third tier: "Community Government" elected by people belonging to one language community (Dutch, French, German) with powers regarding cultural, educational, and language issues.',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why is Power Sharing Desirable?',
        content: 'Two sets of reasons favor power sharing in a democracy:\n\n1. Prudential Reasons: Power sharing reduces the possibility of conflict between social groups. Since social conflict often leads to violence and political instability, power sharing ensures the stability of political order. Tyranny of the majority is not just oppressive for the minority; it often ruins the majority as well.\n\n2. Moral Reasons: Power sharing is the very spirit of democracy. A democratic rule involves sharing power with those affected by its exercise, and who have to live with its effects. People have a right to be consulted on how they are to be governed. A legitimate government is one where citizens, through participation, acquire a stake in the system.',
        keyTakeaway: 'Prudential reasons emphasize that power sharing will bring out better outcomes; moral reasons emphasize the intrinsic value of the act of power sharing.',
      },
      {
        heading: 'Forms of Power Sharing in Modern Democracies',
        content: 'Power is shared in contemporary democracies in four distinct ways:\n1. Horizontal Distribution: Power shared among different organs of government—legislature, executive, and judiciary. This allows different organs placed at the same level to exercise different powers, establishing a system of checks and balances.\n2. Vertical Distribution (Federal Government): Power shared among governments at different levels—a general central government for the entire country and governments at the provincial or regional level.\n3. Power Sharing Among Social Groups: Power shared among different religious and linguistic groups, such as "Community Government" in Belgium or reserved constituencies for women and backward classes in India.\n4. Power Sharing Among Political Parties & Pressure Groups: Coalition governments formed when no single party secures a majority, ensuring multiple interests find representation.',
        keyTakeaway: 'Checks and balances ensure no organ can exercise unlimited power.',
      },
    ],
    keyConcepts: [
      {
        term: 'Majoritarianism',
        explanation: 'A belief that the majority community should be able to rule a country in whichever way it wants, by disregarding the wishes and needs of the minority.',
        examTip: 'Always cite Sri Lanka as the textbook example of failed majoritarianism.',
      },
      {
        term: 'Checks and Balances',
        explanation: 'A system where each organ of government checks the others, resulting in a balance of power among various institutions (Legislature makes laws, Executive enforces them, Judiciary reviews them).',
        examTip: 'Contrasted with vertical distribution where central laws overrule state laws in union matters.',
      },
      {
        term: 'Community Government',
        explanation: 'A unique Belgian government elected by people belonging to one language group—Dutch, French, or German—irrespective of where they live, with powers over culture, education, and language.',
        examTip: 'Belgium amended its constitution four times between 1970 and 1993 to enable this.',
      },
    ],
    importantDates: [
      { date: '1948', event: 'Sri Lanka gains independence', significance: 'Democratically elected Sinhala leaders adopted majoritarian policies.' },
      { date: '1956', event: 'Sri Lanka Official Language Act passed', significance: 'Sinhala made the sole official language, triggering Tamil alienation.' },
      { date: '1970–1993', event: 'Belgium Constitution amended four times', significance: 'Created innovative accommodation model avoiding ethnic conflict.' },
      { date: '2009', event: 'End of Sri Lankan Civil War', significance: 'Brutal war ended after killing thousands and causing economic devastation.' },
    ],
    importantPeople: [
      { name: 'Leaders of Belgium (1970-1993)', role: 'Constitutional Reformers', contribution: 'Crafted equal central representation, autonomous regional governments, and community councils.' },
    ],
    definitions: [
      { term: 'Ethnic', definition: 'A social division based on shared culture. People belonging to the same ethnic group believe in their common descent because of similarities of physical type, culture, or both.', context: 'Describing linguistic divisions in Belgium and Sri Lanka.' },
      { term: 'Civil War', definition: 'A violent conflict between opposing groups within a country that becomes so intense that it appears like a war.', context: 'Sri Lankan conflict between LTTE and government forces.' },
      { term: 'Prudential', definition: 'Based on prudence, or on careful calculation of gains and losses. Prudential reasons stress that power sharing produces superior real-world outcomes.', context: 'Prudential vs moral arguments for democracy.' },
    ],
    importantFigures: [
      {
        title: 'Forms of Power Sharing in Democracies',
        description: 'Matrix breakdown of the four major arrangements.',
        type: 'table',
        headers: ['Arrangement', 'Distribution Axis', 'Key Institutions Involved', 'Real-World Example'],
        rows: [
          ['Horizontal Division', 'Same level (Separation of Powers)', 'Legislature, Executive, Judiciary', 'Indian System of Checks & Balances'],
          ['Vertical Division', 'Hierarchical levels (Federalism)', 'Union / Central, State, Local Panchayats', 'Federal system of India, USA, Canada'],
          ['Social Groups', 'Linguistic / Religious communities', 'Minority councils, reserved seats', 'Belgian Community Government; Reserved seats in India'],
          ['Political Parties & Pressure Groups', 'Multi-party alliances & coalitions', 'Ruling coalitions, trade unions, farmer lobbies', 'UPA, NDA, and European multi-party coalitions'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Power sharing avoids tyranny of majority and ensures democratic legitimacy. Belgium accommodated linguistic diversity (equal ministers, Brussels autonomy, community govt) and chose Brussels as EU headquarters. Sri Lanka adopted Sinhala majoritarianism (1956 language act, university bias, state patronage to Buddhism), sparking a 25-year civil war. Power sharing is justified prudentially (stability) and morally (spirit of democracy) across horizontal, vertical, social, and political party axes.',
      goldenPoints: [
        'Belgium amended its constitution 4 times between 1970 and 1993.',
        'Brussels has 80% French and 20% Dutch, inverse to the country’s 59% Dutch and 40% French.',
        'Prudential reasons calculate gains/losses to avoid conflict; moral reasons focus on the intrinsic nature of democracy.',
        'System of checks and balances belongs to Horizontal power sharing.',
      ],
      mindMapSteps: [
        'Ethnic Reality: Belgium vs Sri Lanka',
        'Two Divergent Approaches: Accommodation vs Majoritarianism',
        'Outcomes: European Union HQ in Brussels vs Civil War in Sri Lanka',
        'Two Justifications: Prudential vs Moral Reasons',
        'Four Modern Forms: Horizontal, Vertical, Social Groups, Coalition Parties',
      ],
      commonPitfalls: [
        'Do not confuse horizontal distribution (equal level, checks and balances) with vertical distribution (federal levels: central vs state).',
        'Sinhala speakers constitute 74% and Sri Lankan Tamils 13% (not 18%—total Tamils are 18% including Indian Tamils).',
      ],
    },
    flashcards: [
      { id: 'fc-civ-1', front: 'Why did the European Union choose Brussels as its headquarters?', back: 'Because of Belgium’s exemplary success in peacefully accommodating diverse linguistic and cultural communities without conflict.', category: 'concept' },
      { id: 'fc-civ-2', front: 'What is the main difference between prudential and moral reasons for power sharing?', back: 'Prudential reasons stress that power sharing will bring out better outcomes (peace, stability), whereas moral reasons emphasize the intrinsic value of power sharing as the spirit of democracy.', category: 'definition' },
      { id: 'fc-civ-3', front: 'What was the Sri Lankan Official Language Act of 1956?', back: 'An Act passed by the Sri Lankan parliament recognizing Sinhala as the only official language, completely disregarding the Tamil language.', category: 'date' },
    ],
    questions: [
      {
        id: 'c10-c1-q1',
        type: 'mcq',
        typeLabel: 'Multiple Choice Question',
        marks: 1,
        year: 'CBSE 2023',
        question: 'Which of the following is an example of horizontal sharing of power?',
        options: [
          'Power sharing between Union and State governments',
          'Power sharing between Legislature, Executive, and Judiciary',
          'Power sharing between Community government and Central government',
          'Power sharing between different political parties in a coalition',
        ],
        correctOptionIndex: 1,
        answer: 'Option (B) Power sharing between Legislature, Executive, and Judiciary',
        explanation: 'Horizontal power sharing places different organs of government at the same level so they can check one another, creating a system of checks and balances.',
      },
      {
        id: 'c10-c1-q2',
        type: 'sa',
        typeLabel: 'Short Answer (3 Marks)',
        marks: 3,
        year: 'CBSE 2021',
        question: 'Describe any three elements of the Belgian model of power sharing.',
        answer: '1. Equal Representation in Centre: The Constitution prescribes that the number of Dutch and French-speaking ministers shall be equal in the central government.\n2. State Autonomy: Many powers of the central government have been given to state governments of the two regions. The state governments are not subordinate to the central government.\n3. Separate Government for Brussels & Community Government: Brussels has a separate government with equal representation for both communities. A third tier called "Community Government" is elected by members of each linguistic group to manage education, culture, and language matters.',
      },
    ],
  },

  // ==========================================
  // CLASS 10 - ECONOMICS - CHAPTER 1
  // ==========================================
  {
    id: 'c10-eco-ch1',
    classLevel: 10,
    subject: 'economics',
    chapterNumber: 1,
    title: 'Development',
    subtitle: 'National Income, Per Capita Income, Human Development Index (HDI), and Sustainability',
    overview: 'What development means can vary for different persons and what may be development for one may not be development for another; it may even be destructive for the other. This chapter examines economic growth versus human development indicators like life expectancy, literacy, and infant mortality.',
    estimatedReadTime: '15 min read',
    popular: true,
    shortNotes: [
      {
        title: 'Core Development Principles',
        bullets: [
          'Different people have different developmental goals (e.g. landless rural laborer seeks more days of work and better wages; prosperous Punjab farmer seeks higher support price for crops).',
          'What may be development for one may be destructive for another (e.g. constructing a large dam provides electricity for industrialists but submerges land and displaces local tribal communities).',
          'Income is not the only goal: people also desire freedom, security, respect, equal treatment, and clean environment.',
        ],
      },
      {
        title: 'Measuring National Development (World Bank Criterion)',
        bullets: [
          'World Bank uses Per Capita Income (Average Income = Total National Income / Total Population) in its World Development Reports.',
          'High-income countries (2019): GNI per capita of US$ 49,300 per annum and above.',
          'Low-income countries: GNI per capita of US$ 2,500 or less.',
          'India falls in the category of low-middle-income countries because its per capita income in 2019 was US$ 6,700 per annum.',
        ],
      },
      {
        title: 'Human Development Report (UNDP Criterion)',
        bullets: [
          'United Nations Development Programme (UNDP) publishes Human Development Index (HDI) comparing countries on three dimensions:',
          '1. Educational level of the people (Mean years of schooling & Expected years of schooling).',
          '2. Health status (Life Expectancy at birth).',
          '3. Per capita income (calculated in purchasing power parity US$).',
        ],
      },
    ],
    detailedSections: [
      {
        heading: 'Why Per Capita Income Alone is Inadequate',
        content: 'Per capita income is a useful average, but it hides disparities. For example, consider two countries A and B with 5 citizens each:\n• Country A incomes: Rs 9,500, Rs 10,500, Rs 9,800, Rs 10,000, Rs 10,200 (Average = Rs 10,000).\n• Country B incomes: Rs 500, Rs 500, Rs 500, Rs 500, Rs 48,000 (Average = Rs 10,000).\nWhile both have the exact same per capita income, Country A has equitable distribution, whereas Country B has extreme poverty with one super-rich citizen. Furthermore, money cannot buy a pollution-free environment, protection from infectious diseases, peace of mind, or freedom from discrimination. Kerala has a lower per capita income than Haryana, but has a vastly superior Human Development record because of adequate provision of basic health and educational facilities.',
        keyTakeaway: 'Non-material factors like education, healthcare, public distribution system, and clean environment are vital for true quality of life.',
      },
    ],
    keyConcepts: [
      {
        term: 'Infant Mortality Rate (IMR)',
        explanation: 'Indicates the number of children that die before completing one year of age as a proportion of 1,000 live children born in that particular year.',
        examTip: 'High IMR reflects poor healthcare and sanitation.',
      },
      {
        term: 'Literacy Rate',
        explanation: 'Measures the proportion of literate population in the 7-and-above age group.',
        examTip: 'Standard NCERT definition: Must specify the "7-and-above" age threshold.',
      },
      {
        term: 'Net Attendance Ratio',
        explanation: 'The total number of children of age group 14 and 15 years attending school as a percentage of total number of children in the same age group.',
        examTip: 'Key indicator of youth retention in secondary education.',
      },
      {
        term: 'Body Mass Index (BMI)',
        explanation: 'Calculated by dividing weight in kilograms by the square of height in meters (kg/m²). If BMI < 18.5, person is undernourished; if BMI > 25, person is overweight.',
        examTip: 'Used in nutrition evaluation questions.',
      },
    ],
    importantDates: [
      { date: '1990', event: 'First Human Development Report launched by UNDP', significance: 'Pioneered by economists Mahbub ul Haq and Amartya Sen.' },
    ],
    importantPeople: [
      { name: 'Dr. Amartya Sen & Dr. Mahbub ul Haq', role: 'Nobel Laureate Economists', contribution: 'Formulated the Human Development Index (HDI) shifting global focus from GDP to human capability and well-being.' },
    ],
    definitions: [
      { term: 'Per Capita Income', definition: 'Total income of the country divided by its total population, also called average income.', context: 'World Bank classification metric.' },
      { term: 'Sustainable Development', definition: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.', context: 'Groundwater depletion and crude oil reserves depletion.' },
    ],
    importantFigures: [
      {
        title: 'Comparison: Haryana vs Kerala vs Bihar (Selected Indicators)',
        description: 'Demonstrating why income alone does not reflect true human development.',
        type: 'table',
        headers: ['State', 'Per Capita Income (INR)', 'Infant Mortality Rate (per 1000)', 'Literacy Rate (%)', 'Net Attendance Ratio (%)'],
        rows: [
          ['Haryana', 'Rs 2,36,147 (High)', '30 (Moderate)', '82%', '61%'],
          ['Kerala', 'Rs 2,04,105 (Moderate)', '10 (Very Low)', '94% (Highest)', '83% (Highest)'],
          ['Bihar', 'Rs 40,982 (Low)', '32 (High)', '62% (Lowest)', '43% (Lowest)'],
        ],
      },
    ],
    oneShotRevision: {
      summary: 'Development goals are diverse and sometimes conflicting. Money/Income is essential but insufficient; non-material goals (freedom, health, dignity, education) are equally critical. World Bank compares countries purely via Per Capita Income (World Development Reports), while UNDP uses HDI (Health/Life Expectancy + Education + Standard of Living). Sustainability of development warns against depleting groundwater and fossil fuels.',
      goldenPoints: [
        'Developmental goals of different people can be conflicting (dam builders vs displaced tribals).',
        'Average income hides income inequalities and distribution disparities.',
        'Kerala performs better than Haryana despite lower per capita income due to robust public healthcare and education.',
        'Crude oil reserves in the world are estimated to last barely 50 years at current rates of consumption.',
      ],
      mindMapSteps: [
        'Diverse Development Goals (Material vs Non-Material)',
        'Per Capita Income: World Bank Criterion & Limitations',
        'UNDP Criterion: HDI (Income + Health + Education)',
        'State Comparison: Haryana, Kerala, Bihar',
        'Sustainability: Groundwater & Non-renewable Fuel Exhaustion',
      ],
      commonPitfalls: [
        'Do not define Literacy Rate without mentioning "in the 7 and above age group".',
        'Do not confuse World Bank’s report (World Development Report - only per capita income) with UNDP’s report (Human Development Report - HDI).',
      ],
    },
    flashcards: [
      { id: 'fc-eco-1', front: 'What is the formula for calculating Body Mass Index (BMI)?', back: 'BMI = Weight in kg / (Height in meters)²', category: 'definition' },
      { id: 'fc-eco-2', front: 'Why does Kerala have a lower infant mortality rate than Haryana despite lower per capita income?', back: 'Because Kerala has adequate provision of basic health and educational facilities and an efficient Public Distribution System (PDS).', category: 'concept' },
    ],
    questions: [
      {
        id: 'c10-e1-q1',
        type: 'mcq',
        typeLabel: 'Multiple Choice Question',
        marks: 1,
        year: 'CBSE 2023',
        question: 'Which organization publishes the Human Development Report?',
        options: ['World Bank', 'United Nations Development Programme (UNDP)', 'International Monetary Fund (IMF)', 'World Health Organization (WHO)'],
        correctOptionIndex: 1,
        answer: 'Option (B) United Nations Development Programme (UNDP)',
        explanation: 'UNDP publishes the Human Development Report which compares nations on health, education, and per capita income.',
      },
      {
        id: 'c10-e1-q2',
        type: 'sa',
        typeLabel: 'Short Answer (3 Marks)',
        marks: 3,
        year: 'CBSE 2020',
        question: '"Money in your pocket cannot buy all the goods and services that you may need to live well." Justify this statement with examples.',
        answer: 'Money or per capita income alone cannot guarantee a good quality of life because:\n1. Pollution-free Environment: Money cannot buy you an unpolluted environment or ensure that you get unadulterated medicines unless you can afford to migrate to a community that already has all these things.\n2. Protection from Infectious Diseases: Money cannot protect you from infectious diseases like COVID-19 or dengue unless the whole community takes preventive steps.\n3. Non-Material Values: Money cannot buy freedom, respect, equal treatment, peace, security, or an uncorrupt society, all of which are vital ingredients of human well-being.',
      },
    ],
  },
];

const RAW_ALL_CHAPTERS_10: Chapter[] = [
  ...BASE_CHAPTERS_10,
  ...CHAPTERS_CLASS_10_MORE,
];

export const CHAPTERS_CLASS_10: Chapter[] = RAW_ALL_CHAPTERS_10.map((ch) => {
  const enrichment = FULL_NOTES_CLASS_10[ch.id];
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


