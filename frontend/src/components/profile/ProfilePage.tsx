import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Phone, Award, Edit } from 'lucide-react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { EditProfileForm } from './EditProfileForm';

export const ProfilePage: React.FC = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  const isStudent = userData.role === 'student';

  const [profileData, setProfileData] = useState({
    name: userData.name || '',
    usn: userData.usn || '',
    email: userData.email || '',
    phone: userData.phone || '',
    completedCourses: 5,
    profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60',
  });

  const handleUpdateProfile = (newData: any) => {
    setProfileData({ ...profileData, ...newData });
    localStorage.setItem('userData', JSON.stringify({ ...userData, ...newData }));
    setShowEditForm(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            {/* Profile Picture */}
            <div className="relative -mt-24 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative inline-block"
              >
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
                  <Camera className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

            {/* Edit Profile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowEditForm(true)}
              className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </motion.button>

            {/* User Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                {isStudent && <p className="text-gray-600">{profileData.usn}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>{profileData.phone || 'Add phone number'}</span>
                </div>
              </div>
            </div>

            {/* Badges - Only for students */}
            {isStudent && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Course Champion</h3>
                        <p className="text-sm text-gray-600">Completed 5+ courses</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showEditForm && (
        <EditProfileForm
          profileData={profileData}
          onClose={() => setShowEditForm(false)}
          onSubmit={handleUpdateProfile}
          isStudent={isStudent}
        />
      )}
    </DashboardLayout>
  );
};