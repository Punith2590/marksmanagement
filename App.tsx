import React from 'react';
import { useAuth } from './auth/AuthContext';
import LoginPage from './pages/LoginPage';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import AdminDashboard from './pages/AdminDashboard';
import FacultyLayout from './layouts/FacultyLayout';

const App = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <LoginPage />;
  }

  switch (user.role) {
    case 'superadmin':
      return <SuperAdminDashboard />;
    case 'admin':
      return <AdminDashboard />;
    case 'faculty':
      return <FacultyLayout />;
    default:
      // Fallback to login page if role is unknown
      return <LoginPage />;
  }
};

export default App;
