import { Chapter, ChapterQuestion } from '../types/sst';

function cleanText(str: string, max = 135): string {
  if (!str) return '';
  const s = str.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  return s.slice(0, max - 3).trim() + '...';
}

function makeUniqueOptions(
  correct: string,
  distractors: string[],
  fallbackPool: string[]
): string[] {
  const opts = [cleanText(correct)];
  for (const d of distractors) {
    if (opts.length >= 4) break;
    const cleanD = cleanText(d);
    if (cleanD && !opts.includes(cleanD)) {
      opts.push(cleanD);
    }
  }
  let poolIdx = 0;
  while (opts.length < 4) {
    const fb = fallbackPool[poolIdx % fallbackPool.length];
    poolIdx++;
    if (!opts.includes(fb)) {
      opts.push(fb);
    }
  }
  return opts;
}

const SUBJECT_FALLBACKS: Record<string, string[]> = {
  history: [
    'A treaty governing archaeological excavation protocols.',
    'Royal decree regulating traditional maritime commerce.',
    'Standardization of imperial coinage across administrative districts.',
    'A documented record of agrarian land revenue assessment.',
  ],
  geography: [
    'Seasonal shift in regional barometric pressure systems.',
    'Classification of agro-climatic farming zones.',
    'Sedimentary deposition along riparian floodplains.',
    'Topographical contour surveying and catchment drainage mapping.',
  ],
  civics: [
    'Constitutional quorum requirement for legislative bills.',
    'Decentralized governance through municipal ward committees.',
    'Statutory oversight by independent audit commissions.',
    'Judicial precedent established by appellate courts.',
  ],
  economics: [
    'Macroeconomic equilibrium between aggregate demand and supply.',
    'Statutory liquidity reserve ratio mandated for commercial banking.',
    'Comparative advantage in secondary industrial manufacturing.',
    'Targeted public distribution of essential food grains.',
  ],
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

/**
 * Generates 4 tailored, syllabus-aligned multiple choice questions for a chapter
 * to ensure every chapter has maximum 5 quiz questions.
 */
export function getChapterExtraQuizzes(c: Chapter): ChapterQuestion[] {
  const extra: ChapterQuestion[] = [];
  const concepts = c.keyConcepts || [];
  const defs = c.definitions || [];
  const dates = c.importantDates || [];
  const golden = c.oneShotRevision?.goldenPoints || [];
  const pool = SUBJECT_FALLBACKS[c.subject] || SUBJECT_FALLBACKS.history;

  // Q2: Core Conceptual Understanding (Correct Answer: Option B, Index 1)
  const cTarget = concepts[0] || { term: c.title, explanation: c.overview };
  const q2Correct = cTarget.explanation;
  const q2Dist = [
    concepts.length > 1 ? concepts[1].explanation : pool[0],
    concepts.length > 2 ? concepts[2].explanation : (defs[0]?.definition || pool[1]),
    defs.length > 1 ? defs[1].definition : pool[2],
  ];
  const q2Raw = makeUniqueOptions(q2Correct, q2Dist, pool);
  // Put correct at index 1
  const q2Options = [q2Raw[1], q2Raw[0], q2Raw[2], q2Raw[3]];
  const q2CorrectIdx = 1;
  extra.push({
    id: `${c.id}-q2`,
    type: 'mcq',
    typeLabel: 'MCQ (1 Mark)',
    marks: 1,
    question: `Which of the following statements best explains the concept of "${cTarget.term}"?`,
    options: q2Options,
    correctOptionIndex: q2CorrectIdx,
    answer: `Option (${OPTION_LETTERS[q2CorrectIdx]}) ${q2Options[q2CorrectIdx]}`,
    explanation: `In this chapter, ${cTarget.term} is defined as: ${cTarget.explanation}`,
  });

  // Q3: Terminology / Definition Question (Correct Answer: Option C, Index 2)
  const dTarget = defs.length > 0 ? defs[0] : (concepts[1] || concepts[0]);
  const dTerm = dTarget.term;
  const q3Correct = 'definition' in dTarget ? dTarget.definition : dTarget.explanation;
  const q3Dist = [
    defs.length > 1 ? defs[1].definition : pool[0],
    concepts.length > 1 ? concepts[1].explanation : pool[1],
    pool[2],
  ];
  const q3Raw = makeUniqueOptions(q3Correct, q3Dist, pool);
  // Put correct at index 2
  const q3Options = [q3Raw[1], q3Raw[2], q3Raw[0], q3Raw[3]];
  const q3CorrectIdx = 2;
  extra.push({
    id: `${c.id}-q3`,
    type: 'mcq',
    typeLabel: 'MCQ (1 Mark)',
    marks: 1,
    question: `In the context of "${c.title}", what does the term "${dTerm}" specifically refer to?`,
    options: q3Options,
    correctOptionIndex: q3CorrectIdx,
    answer: `Option (${OPTION_LETTERS[q3CorrectIdx]}) ${q3Options[q3CorrectIdx]}`,
    explanation: `${dTerm}: ${q3Correct}`,
  });

  // Q4: Historical Date, Timeline Milestone or Key Feature (Correct Answer: Option A, Index 0)
  let q4Correct = '';
  let q4Dist: string[] = [];
  let q4Question = '';
  let q4Explanation = '';

  if (dates.length > 0) {
    const targetDate = dates[0];
    q4Correct = `${targetDate.event}${targetDate.significance ? ` (${targetDate.significance})` : ''}`;
    q4Dist = [
      dates.length > 1 ? `${dates[1].event}${dates[1].significance ? ` (${dates[1].significance})` : ''}` : pool[0],
      dates.length > 2 ? `${dates[2].event}${dates[2].significance ? ` (${dates[2].significance})` : ''}` : pool[1],
      pool[2],
    ];
    q4Question = `What key event or historical milestone is associated with ${targetDate.date} in this curriculum?`;
    q4Explanation = `Historical Milestone (${targetDate.date}): ${targetDate.event}. Significance: ${targetDate.significance || 'Key curriculum milestone'}`;
  } else {
    const fallbackConcept = concepts.length > 2 ? concepts[2] : (concepts[1] || cTarget);
    q4Correct = fallbackConcept.explanation;
    q4Dist = [pool[0], pool[1], pool[2]];
    q4Question = `Which of the following characteristics accurately describes "${fallbackConcept.term}"?`;
    q4Explanation = `${fallbackConcept.term}: ${fallbackConcept.explanation}`;
  }
  const q4Raw = makeUniqueOptions(q4Correct, q4Dist, pool);
  // Put correct at index 0
  const q4Options = [q4Raw[0], q4Raw[1], q4Raw[2], q4Raw[3]];
  const q4CorrectIdx = 0;
  extra.push({
    id: `${c.id}-q4`,
    type: 'mcq',
    typeLabel: 'MCQ (1 Mark)',
    marks: 1,
    question: q4Question,
    options: q4Options,
    correctOptionIndex: q4CorrectIdx,
    answer: `Option (${OPTION_LETTERS[q4CorrectIdx]}) ${q4Options[q4CorrectIdx]}`,
    explanation: q4Explanation,
  });

  // Q5: Exam Golden Point & Key Takeaway (Correct Answer: Option D, Index 3)
  const gTarget = golden.length > 0 ? golden[0] : (c.shortNotes?.[0]?.bullets?.[0] || c.overview);
  const q5Correct = gTarget;
  const q5Dist = [
    golden.length > 1 ? golden[1] : pool[0],
    golden.length > 2 ? golden[2] : pool[1],
    pool[3],
  ];
  const q5Raw = makeUniqueOptions(q5Correct, q5Dist, pool);
  // Put correct at index 3
  const q5Options = [q5Raw[1], q5Raw[2], q5Raw[3], q5Raw[0]];
  const q5CorrectIdx = 3;
  extra.push({
    id: `${c.id}-q5`,
    type: 'mcq',
    typeLabel: 'MCQ (1 Mark)',
    marks: 1,
    question: `Which of the following is highlighted as a core examination takeaway for "${c.title}"?`,
    options: q5Options,
    correctOptionIndex: q5CorrectIdx,
    answer: `Option (${OPTION_LETTERS[q5CorrectIdx]}) ${q5Options[q5CorrectIdx]}`,
    explanation: `Core chapter takeaway: ${gTarget}`,
  });

  return extra;
}
