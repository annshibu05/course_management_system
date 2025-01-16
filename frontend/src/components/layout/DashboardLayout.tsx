import React, { useState } from 'react';
import { Sidebar } from '../navigation/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`p-6 ml-0 pt-20 ${userData.role === 'faculty' ? 'faculty-dashboard' : ''}`}>
        {children}
      </div>
    </div>
  );
};