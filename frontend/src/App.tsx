//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthOptions } from './components/auth/AuthOptions';
import { AuthForm } from './components/auth/AuthForm';
import  StudentDashboard  from './components/dashboard/StudentDashboard';
import { FacultyDashboard } from './components/dashboard/FacultyDashboard';
import { AvailableCourses } from './components/courses/AvailableCourses';
import { MyCourses } from './components/courses/MyCourses';
import { ProfilePage } from './components/profile/ProfilePage';
import { DashboardLayout } from './components/layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthOptions />} />
        
        {/* Login Routes */}
        <Route path="/login/student" element={
          <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=2940")',
            }}
          >
            <AuthForm type="login" role="student" />
          </div>
        } />
        <Route path="/login/faculty" element={
          <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=2940")',
            }}
          >
            <AuthForm type="login" role="faculty" />
          </div>
        } />
        
        {/* Register Routes */}
        <Route path="/register/student" element={
          <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=2940")',
            }}
          >
            <AuthForm type="register" role="student" />
          </div>
        } />
        <Route path="/register/faculty" element={
          <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501290741922-b56c0d0884af?q=80&w=2940")',
            }}
          >
            <AuthForm type="register" role="faculty" />
          </div>
        } />
        
        {/* Student Routes */}
        <Route path="/dashboard/student" element={
          <DashboardLayout>
            <StudentDashboard />
          </DashboardLayout>
        } />
        <Route path="/student/available-courses" element={
          <DashboardLayout>
            <AvailableCourses />
          </DashboardLayout>
        } />
        <Route path="/student/my-courses" element={
          <DashboardLayout>
            <MyCourses />
          </DashboardLayout>
        } />
        <Route path="/student/profile" element={<ProfilePage />} />
        
        {/* Faculty Routes */}
        <Route path="/dashboard/faculty" element={
          <DashboardLayout>
            <FacultyDashboard />
          </DashboardLayout>
        } />
        <Route path="/faculty/available-courses" element={
          <DashboardLayout>
            <AvailableCourses />
          </DashboardLayout>
        } />
        <Route path="/faculty/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;