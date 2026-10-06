import { Chapter } from '../types/sst';
import { CHAPTERS_CLASS_6 } from './chaptersClass6';
import { CHAPTERS_CLASS_7 } from './chaptersClass7';
import { CHAPTERS_CLASS_8 } from './chaptersClass8';
import { CHAPTERS_CLASS_9 } from './chaptersClass9';
import { CHAPTERS_CLASS_10 } from './chaptersClass10';
import { CHAPTERS_CLASS_11 } from './chaptersClass11';
import { CHAPTERS_CLASS_12 } from './chaptersClass12';
import { getChapterExtraQuizzes } from './extraChapterQuizzes';

export {
  CHAPTERS_CLASS_6,
  CHAPTERS_CLASS_7,
  CHAPTERS_CLASS_8,
  CHAPTERS_CLASS_9,
  CHAPTERS_CLASS_10,
  CHAPTERS_CLASS_11,
  CHAPTERS_CLASS_12,
};

const RAW_ALL_CHAPTERS: Chapter[] = [
  ...CHAPTERS_CLASS_6,
  ...CHAPTERS_CLASS_7,
  ...CHAPTERS_CLASS_8,
  ...CHAPTERS_CLASS_9,
  ...CHAPTERS_CLASS_10,
  ...CHAPTERS_CLASS_11,
  ...CHAPTERS_CLASS_12,
];

// Ensure every chapter has maximum 5 quiz questions (MCQs)
export const CHAPTERS_DATA: Chapter[] = RAW_ALL_CHAPTERS.map((ch) => {
  const existingMcqs = ch.questions.filter((q) => q.type === 'mcq' && q.options);
  const otherQuestions = ch.questions.filter((q) => q.type !== 'mcq');
  const needed = Math.max(0, 5 - existingMcqs.length);
  const extraMcqs = getChapterExtraQuizzes(ch).slice(0, needed);
  const combinedMcqs = [...existingMcqs, ...extraMcqs].slice(0, 5);

  return {
    ...ch,
    questions: [...combinedMcqs, ...otherQuestions],
  };
});
