export type ClassLevel = 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type SubjectKey = 'history' | 'geography' | 'civics' | 'economics';

export type QuestionType = 
  | 'mcq' 
  | 'vsa' 
  | 'sa' 
  | 'la' 
  | 'ar' 
  | 'case' 
  | 'map' 
  | 'pyq';

export interface SubjectMeta {
  key: SubjectKey;
  label: string;
  bookTitle: string;
  colorName: string;
  badgeBg: string;
  badgeText: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  iconName: string;
  description: string;
}

export interface DetailedSection {
  heading: string;
  content: string;
  keyTakeaway?: string;
  highlights?: string[];
}

export interface ImportantDate {
  date: string;
  event: string;
  significance: string;
}

export interface ImportantPerson {
  name: string;
  role: string;
  contribution: string;
}

export interface DefinitionItem {
  term: string;
  definition: string;
  context: string;
  explanation?: string;
}

export interface ImportantFigure {
  title: string;
  description: string;
  type: 'flowchart' | 'table' | 'statistic';
  steps?: string[];
  headers?: string[];
  rows?: string[][];
  stats?: { label: string; value: string; detail?: string }[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: 'date' | 'definition' | 'concept' | 'location' | 'fact' | 'person';
}

export interface ChapterQuestion {
  id: string;
  type: QuestionType;
  typeLabel: string;
  marks: number;
  year?: string;
  question: string;
  casePassage?: string;
  assertion?: string;
  reason?: string;
  options?: string[];
  correctOptionIndex?: number;
  answer: string;
  explanation?: string;
  keyPointsToScore?: string[];
}

export interface Chapter {
  id: string;
  classLevel: ClassLevel;
  subject: SubjectKey;
  chapterNumber: number;
  title: string;
  subtitle: string;
  overview: string;
  estimatedReadTime: string;
  popular?: boolean;
  shortNotes: {
    title: string;
    bullets: string[];
  }[];
  detailedSections: DetailedSection[];
  keyConcepts: {
    term: string;
    explanation: string;
    examTip?: string;
  }[];
  importantDates: ImportantDate[];
  importantPeople: ImportantPerson[];
  definitions: DefinitionItem[];
  importantFigures: ImportantFigure[];
  mapLocations?: string[];
  oneShotRevision: {
    summary: string;
    goldenPoints: string[];
    mindMapSteps: string[];
    commonPitfalls: string[];
  };
  flashcards: Flashcard[];
  questions: ChapterQuestion[];
}

export interface MapLocation {
  id: string;
  name: string;
  category: 'rivers' | 'mountains' | 'soil' | 'agriculture' | 'industries' | 'minerals' | 'ports' | 'history';
  state: string;
  x: number; // percentage 0 - 100 on India SVG map
  y: number; // percentage 0 - 100 on India SVG map
  description: string;
  examSignificance: string;
  relatedChapter?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  numericYear: number;
  era: 'indian_freedom' | 'world_history' | 'medieval_ancient';
  title: string;
  description: string;
  significance: string;
  relatedClass: ClassLevel;
  subject: SubjectKey;
}

export interface UserProgress {
  completedChapterIds: string[];
  quizScores: Record<string, { score: number; total: number; date: string }>;
  bookmarkedChapterIds: string[];
  bookmarkedQuestionIds: string[];
}
