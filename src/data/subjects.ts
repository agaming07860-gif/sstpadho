import { SubjectKey, SubjectMeta } from '../types/sst';

export const SUBJECTS: Record<SubjectKey, SubjectMeta> = {
  history: {
    key: 'history',
    label: 'History',
    bookTitle: 'India and the Contemporary World / Our Pasts',
    colorName: 'amber',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    accentBg: 'bg-amber-500',
    accentBorder: 'border-amber-300',
    accentText: 'text-amber-700',
    iconName: 'Landmark',
    description: 'Explore historical movements, civilizations, revolutions, freedom struggles, and world-changing events.',
  },
  geography: {
    key: 'geography',
    label: 'Geography',
    bookTitle: 'Contemporary India / The Earth Our Habitat',
    colorName: 'emerald',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-800 dark:text-emerald-300',
    accentBg: 'bg-emerald-500',
    accentBorder: 'border-emerald-300',
    accentText: 'text-emerald-700',
    iconName: 'Globe2',
    description: 'Understand physical features, drainage systems, resources, climate, soils, agriculture, and industries.',
  },
  civics: {
    key: 'civics',
    label: 'Civics / Political Science',
    bookTitle: 'Democratic Politics / Social & Political Life',
    colorName: 'indigo',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    badgeText: 'text-indigo-800 dark:text-indigo-300',
    accentBg: 'bg-indigo-500',
    accentBorder: 'border-indigo-300',
    accentText: 'text-indigo-700',
    iconName: 'Scale',
    description: 'Learn constitutional design, democratic values, power sharing, federalism, rights, and political parties.',
  },
  economics: {
    key: 'economics',
    label: 'Economics',
    bookTitle: 'Understanding Economic Development',
    colorName: 'purple',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
    badgeText: 'text-purple-800 dark:text-purple-300',
    accentBg: 'bg-purple-500',
    accentBorder: 'border-purple-300',
    accentText: 'text-purple-700',
    iconName: 'TrendingUp',
    description: 'Analyze development indicators, sectors of economy, money and credit, globalization, and consumer welfare.',
  },
};

export const CLASS_LEVELS = [6, 7, 8, 9, 10, 11, 12] as const;

export const CLASS_DETAILS: Record<number, { title: string; subtitle: string; boards: string }> = {
  6: {
    title: 'Class 6 SST',
    subtitle: 'Our Pasts I • The Earth Our Habitat • Social & Political Life I',
    boards: 'NCERT / CBSE / State Boards',
  },
  7: {
    title: 'Class 7 SST',
    subtitle: 'Our Pasts II • Our Environment • Social & Political Life II',
    boards: 'NCERT / CBSE / State Boards',
  },
  8: {
    title: 'Class 8 SST',
    subtitle: 'Our Pasts III • Resources & Development • Social & Political Life III',
    boards: 'NCERT / CBSE / State Boards',
  },
  9: {
    title: 'Class 9 SST',
    subtitle: 'India & Contemporary World I • Contemporary India I • Democratic Politics I • Economics',
    boards: 'NCERT / CBSE / State Boards',
  },
  10: {
    title: 'Class 10 SST (Board Exam Hub)',
    subtitle: 'India & Contemporary World II • Contemporary India II • Democratic Politics II • Understanding Economic Development',
    boards: 'NCERT / CBSE Board Special',
  },
  11: {
    title: 'Class 11 Humanities / SST',
    subtitle: 'Themes in World History • Fundamentals of Physical Geography • Indian Constitution at Work',
    boards: 'Senior Secondary Electives',
  },
  12: {
    title: 'Class 12 Humanities / SST',
    subtitle: 'Themes in Indian History • Fundamentals of Human Geography • Contemporary World Politics',
    boards: 'Senior Secondary Board',
  },
};
