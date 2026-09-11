import React, { useState, useEffect } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar, ActiveView } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ClassDashboard } from './components/ClassDashboard';
import { ChapterView } from './components/ChapterView';
import { QuestionBankView } from './components/QuestionBankView';
import { MapLabView } from './components/MapLabView';
import { TimelineView } from './components/TimelineView';
import { RevisionModeView } from './components/RevisionModeView';
import { ProgressDashboardView } from './components/ProgressDashboardView';
import { HighYieldFolderView } from './components/HighYieldFolderView';
import { SearchModal } from './components/SearchModal';
import { PrintNotesModal } from './components/PrintNotesModal';
import { Footer } from './components/Footer';
import { Chapter, ClassLevel } from './types/sst';
import { CHAPTERS_DATA } from './data/chaptersData';

function MainApp() {
  const { activeClass, setActiveClass } = useProgress();
  const [currentView, setCurrentView] = useState<ActiveView>('home');
  const [viewHistory, setViewHistory] = useState<ActiveView[]>([]);
  const [activeChapter, setActiveChapter] = useState<Chapter>(CHAPTERS_DATA[0]);
  const [chapterTargetTab, setChapterTargetTab] = useState<'notes' | 'revision' | 'questions' | 'quiz'>('notes');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [printModalOpen, setPrintModalOpen] = useState(false);
  const [chapterToPrint, setChapterToPrint] = useState<Chapter | null>(null);

  // Backward navigation handler (Backspace action)
  const handleGoBack = () => {
    // If a modal is open, backspace/back closes the modal first
    if (searchModalOpen) {
      setSearchModalOpen(false);
      return;
    }
    if (printModalOpen) {
      setPrintModalOpen(false);
      return;
    }

    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory((prev) => prev.slice(0, -1));
      setCurrentView(prevView);
    } else {
      // Default logical fallbacks
      if (currentView === 'chapter') {
        setCurrentView('class');
      } else if (currentView !== 'home') {
        setCurrentView('home');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Cmd+K or Ctrl+K for search, and Backspace for back navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
        return;
      }

      // Backspace key navigation (when not typing in an input or textarea)
      if (e.key === 'Backspace') {
        const target = e.target as HTMLElement;
        const isEditable =
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable;

        if (!isEditable) {
          // Check if we can go back or are in a sub-view
          if (currentView !== 'home' || searchModalOpen || printModalOpen || viewHistory.length > 0) {
            e.preventDefault();
            handleGoBack();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, viewHistory, searchModalOpen, printModalOpen]);

  // Scroll to top when view changes
  const handleNavigate = (view: ActiveView) => {
    if (view !== currentView) {
      setViewHistory((prev) => [...prev, currentView]);
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectClass = (cls: ClassLevel) => {
    setActiveClass(cls);
    if (currentView !== 'class') {
      setViewHistory((prev) => [...prev, currentView]);
      setCurrentView('class');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (
    chapter: Chapter,
    targetTab: 'notes' | 'revision' | 'questions' | 'quiz' = 'notes'
  ) => {
    setActiveChapter(chapter);
    setChapterTargetTab(targetTab);
    if (currentView !== 'chapter') {
      setViewHistory((prev) => [...prev, currentView]);
      setCurrentView('chapter');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrintModal = (chapter: Chapter) => {
    setChapterToPrint(chapter);
    setPrintModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      {/* Global Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onBack={handleGoBack}
        canGoBack={viewHistory.length > 0 || currentView !== 'home'}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentView === 'home' && (
          <HomePage
            onSelectClass={handleSelectClass}
            onSelectChapter={handleSelectChapter}
            onNavigateMapLab={() => handleNavigate('map-lab')}
            onNavigateTimeline={() => handleNavigate('timeline')}
            onNavigateQuestionBank={() => handleNavigate('question-bank')}
            onNavigateRevision={() => handleNavigate('revision')}
            onNavigateHighYield={() => handleNavigate('high-yield')}
            onOpenSearch={() => setSearchModalOpen(true)}
          />
        )}

        {currentView === 'class' && (
          <ClassDashboard
            classLevel={activeClass}
            onSelectChapter={handleSelectChapter}
            onNavigateClass={handleSelectClass}
            onNavigateHighYield={() => handleNavigate('high-yield')}
            onBack={handleGoBack}
          />
        )}

        {currentView === 'chapter' && (
          <ChapterView
            chapter={activeChapter}
            initialTab={chapterTargetTab}
            onBack={handleGoBack}
            onSelectAnotherChapter={handleSelectChapter}
            onOpenPrintModal={handleOpenPrintModal}
          />
        )}

        {currentView === 'question-bank' && <QuestionBankView onBack={handleGoBack} />}

        {currentView === 'map-lab' && <MapLabView onBack={handleGoBack} />}

        {currentView === 'timeline' && <TimelineView onBack={handleGoBack} />}

        {currentView === 'revision' && <RevisionModeView onBack={handleGoBack} />}

        {currentView === 'high-yield' && (
          <HighYieldFolderView
            onSelectChapter={handleSelectChapter}
            onBack={handleGoBack}
            onNavigateClass={handleSelectClass}
          />
        )}

        {currentView === 'progress' && (
          <ProgressDashboardView
            onSelectChapter={handleSelectChapter}
            onBack={handleGoBack}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectChapter={handleSelectChapter}
      />

      {/* Printable Notes Modal */}
      <PrintNotesModal
        chapter={chapterToPrint || activeChapter}
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />

      {/* Footer */}
      <Footer onSelectClass={handleSelectClass} onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <MainApp />
    </ProgressProvider>
  );
}
