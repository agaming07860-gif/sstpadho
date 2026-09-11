import React, { createContext, useContext, useEffect, useState } from 'react';
import { ClassLevel, SubjectKey, UserProgress } from '../types/sst';

interface ProgressContextType {
  progress: UserProgress;
  activeClass: ClassLevel;
  setActiveClass: (c: ClassLevel) => void;
  toggleChapterCompleted: (chapterId: string) => void;
  isChapterCompleted: (chapterId: string) => boolean;
  saveQuizScore: (chapterId: string, score: number, total: number) => void;
  toggleBookmarkChapter: (chapterId: string) => void;
  isChapterBookmarked: (chapterId: string) => boolean;
  toggleBookmarkQuestion: (questionId: string) => void;
  isQuestionBookmarked: (questionId: string) => boolean;
  resetProgress: () => void;
}

const STORAGE_KEY = 'sst_study_hub_progress_v1';
const CLASS_STORAGE_KEY = 'sst_study_hub_active_class_v1';

const defaultProgress: UserProgress = {
  completedChapterIds: ['c10-hist-ch1'], // sample 1 completed to show dashboard richness immediately
  quizScores: {
    'c10-hist-ch1': { score: 4, total: 5, date: new Date().toISOString() },
  },
  bookmarkedChapterIds: ['c10-hist-ch2'],
  bookmarkedQuestionIds: ['c10-h1-q4'],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  const [activeClass, setActiveClassState] = useState<ClassLevel>(() => {
    try {
      const saved = localStorage.getItem(CLASS_STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if ([6, 7, 8, 9, 10, 11, 12].includes(parsed)) {
          return parsed as ClassLevel;
        }
      }
      return 10; // Default to Class 10 (most popular Board Exam level)
    } catch {
      return 10;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress', e);
    }
  }, [progress]);

  const setActiveClass = (cls: ClassLevel) => {
    setActiveClassState(cls);
    try {
      localStorage.setItem(CLASS_STORAGE_KEY, cls.toString());
    } catch (e) {
      console.error('Failed to persist active class', e);
    }
  };

  const toggleChapterCompleted = (chapterId: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedChapterIds.includes(chapterId);
      const newCompleted = isCompleted
        ? prev.completedChapterIds.filter((id) => id !== chapterId)
        : [...prev.completedChapterIds, chapterId];
      return { ...prev, completedChapterIds: newCompleted };
    });
  };

  const isChapterCompleted = (chapterId: string) => {
    return progress.completedChapterIds.includes(chapterId);
  };

  const saveQuizScore = (chapterId: string, score: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: { score, total, date: new Date().toISOString() },
      },
    }));
  };

  const toggleBookmarkChapter = (chapterId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedChapterIds.includes(chapterId);
      return {
        ...prev,
        bookmarkedChapterIds: isBookmarked
          ? prev.bookmarkedChapterIds.filter((id) => id !== chapterId)
          : [...prev.bookmarkedChapterIds, chapterId],
      };
    });
  };

  const isChapterBookmarked = (chapterId: string) => {
    return progress.bookmarkedChapterIds.includes(chapterId);
  };

  const toggleBookmarkQuestion = (questionId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedQuestionIds.includes(questionId);
      return {
        ...prev,
        bookmarkedQuestionIds: isBookmarked
          ? prev.bookmarkedQuestionIds.filter((id) => id !== questionId)
          : [...prev.bookmarkedQuestionIds, questionId],
      };
    });
  };

  const isQuestionBookmarked = (questionId: string) => {
    return progress.bookmarkedQuestionIds.includes(questionId);
  };

  const resetProgress = () => {
    setProgress({
      completedChapterIds: [],
      quizScores: {},
      bookmarkedChapterIds: [],
      bookmarkedQuestionIds: [],
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        activeClass,
        setActiveClass,
        toggleChapterCompleted,
        isChapterCompleted,
        saveQuizScore,
        toggleBookmarkChapter,
        isChapterBookmarked,
        toggleBookmarkQuestion,
        isQuestionBookmarked,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
