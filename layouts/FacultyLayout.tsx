import React, { useState } from 'react';
import MainLayout from './MainLayout';
import { useAuth } from '../auth/AuthContext';
import { Icons } from '../components/icons';
import Dashboard from '../pages/Dashboard';
import ArticulationMatrixPage from '../pages/ArticulationMatrixPage';
import MarksEntryPage from '../pages/MarksEntryPage';
import AttainmentReportPage from '../pages/AttainmentReportPage';
import CoPoAttainmentPage from '../pages/CoPoAttainmentPage';
import IndirectCoAttainmentPage from '../pages/IndirectCoAttainmentPage';

type FacultyPage = 'dashboard' | 'matrix' | 'marks' | 'reports' | 'attainment' | 'indirect-co';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
  { id: 'matrix', label: 'Articulation Matrix', icon: Icons.ArticulationMatrix },
  { id: 'marks', label: 'Marks Entry', icon: Icons.MarksEntry },
  { id: 'indirect-co', label: 'Indirect CO Attainment', icon: Icons.Syllabus },
  { id: 'attainment', label: 'CO-PO Attainment', icon: Icons.Target },
  { id: 'reports', label: 'Attainment Reports', icon: Icons.Reports },
];

const FacultyLayout = () => {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState<FacultyPage>('dashboard');
  
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'matrix':
        return <ArticulationMatrixPage />;
      case 'marks':
        return <MarksEntryPage />;
      case 'reports':
        return <AttainmentReportPage />;
      case 'attainment':
        return <CoPoAttainmentPage />;
      case 'indirect-co':
        return <IndirectCoAttainmentPage />;
      default:
        return <Dashboard />;
    }
  };
  
  if (!user) return null;

  return (
    <MainLayout
      user={user}
      navItems={navItems}
      activePageId={activePage}
      onNavItemClick={(id) => setActivePage(id as FacultyPage)}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default FacultyLayout;