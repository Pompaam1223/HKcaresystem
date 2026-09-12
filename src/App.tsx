import React, { useState } from 'react';
import { StudentCareProvider, useStudentCare } from './context/StudentCareContext';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { DashboardView } from './components/DashboardView';
import { ScreeningView } from './components/ScreeningView';
import { HomeVisitView } from './components/HomeVisitView';
import { StudentAnalysisView } from './components/StudentAnalysisView';
import { SDQView } from './components/SDQView';
import { ReferralView } from './components/ReferralView';
import { TrackingView } from './components/TrackingView';
import { StudentDirectoryView } from './components/StudentDirectoryView';
import { NewStudentModal } from './components/NewStudentModal';
import { StudentDetailModal } from './components/StudentDetailModal';
import { ReportModal } from './components/ReportModal';
import { LoginView } from './components/LoginView';
import { ChibiMascotFloating } from './components/ChibiMascotFloating';

const MainContent: React.FC = () => {
  const { activeTab, isAuthenticated, toastMessage } = useStudentCare();
  const [isNewStudentOpen, setIsNewStudentOpen] = useState(false);

  // If not logged in, render the login page
  if (!isAuthenticated) {
    return (
      <>
        <LoginView />
        {toastMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-slate-900/95 text-white text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in duration-200">
            <span>{toastMessage}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-blue-50/40 flex flex-col font-sans selection:bg-blue-200">
      {/* App Header & Top Filters */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-5 space-y-5">
        {/* Navigation Tabs */}
        <Navigation onOpenNewStudent={() => setIsNewStudentOpen(true)} />

        {/* Tab Content Routing */}
        <section className="transition-all duration-150">
          {activeTab === 'dashboard' && <DashboardView onOpenNewStudent={() => setIsNewStudentOpen(true)} />}
          {activeTab === 'screening' && <ScreeningView />}
          {activeTab === 'homevisit' && <HomeVisitView />}
          {activeTab === 'analysis' && <StudentAnalysisView />}
          {activeTab === 'sdq' && <SDQView />}
          {activeTab === 'referral' && <ReferralView />}
          {activeTab === 'tracking' && <TrackingView />}
          {activeTab === 'directory' && <StudentDirectoryView onOpenNewStudent={() => setIsNewStudentOpen(true)} />}
        </section>
      </main>

      {/* Floating Mascot Guide */}
      <ChibiMascotFloating />

      {/* Global Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 left-5 z-50 bg-slate-900/95 text-white text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in duration-200">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <NewStudentModal isOpen={isNewStudentOpen} onClose={() => setIsNewStudentOpen(false)} />
      <StudentDetailModal />
      <ReportModal />
    </div>
  );
};

export default function App() {
  return (
    <StudentCareProvider>
      <MainContent />
    </StudentCareProvider>
  );
}
