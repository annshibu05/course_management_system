// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Camera, Mail, Phone, Award, Edit } from 'lucide-react';
// // import { DashboardLayout } from '../layout/DashboardLayout';
// // import { EditProfileForm } from './EditProfileForm';

// // export const ProfilePage: React.FC = () => {
// //   const [showEditForm, setShowEditForm] = useState(false);
// //   const userData = JSON.parse(localStorage.getItem('userData') || '{}');
// //   const isStudent = userData.role === 'student';
// //   const [profileData, setProfileData] = useState({
// //     name: 'John Doe',
// //     usn: userData.usn || '',
// //     email: userData.email || '',
// //     phone: '',
// //     completedCourses: 5,
// //     profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60',
// //   });

  
// // const handleUpdateProfile = (newData: any) => {
// //     setProfileData({ ...profileData, ...newData });
// //     localStorage.setItem('userData', JSON.stringify({ ...userData, ...newData }));
// //     setShowEditForm(false);
// //   };

// //   return (
// //     <DashboardLayout>
// //       <div className="max-w-4xl mx-auto">
// //         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //           {/* Cover Photo */}
// //           <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
// //           {/* Profile Info */}
// //           <div className="relative px-6 pb-6">
// //             {/* Profile Picture */}
// //             <div className="relative -mt-24 mb-4">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="relative inline-block"
// //               >
// //                 <img
// //                   src={profileData.profilePicture}
// //                   alt="Profile"
// //                   className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
// //                 />
// //                 <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
// //                   <Camera className="h-4 w-4" />
// //                 </button>
// //               </motion.div>
// //             </div>

// //             {/* Edit Profile Button */}
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               onClick={() => setShowEditForm(true)}
// //               className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //             >
// //               <Edit className="h-4 w-4" />
// //               <span>Edit Profile</span>
// //             </motion.button>

// //             {/* User Info */}
// //             <div className="space-y-4">
// //               <div>
// //                 <h1 className="text-2xl font-bold">{profileData.name}</h1>
// //                 {isStudent && <p className="text-gray-600">{profileData.usn}</p>}
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div className="flex items-center space-x-2 text-gray-600">
// //                   <Mail className="h-5 w-5" />
// //                   <span>{profileData.email || 'Email not provided'}</span>
// //                 </div>
// //                 <div className="flex items-center space-x-2 text-gray-600">
// //                   <Phone className="h-5 w-5" />
// //                   <span>{profileData.phone || 'Add phone number'}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Badges - Only for students */}
// //             {isStudent && (
// //               <div className="mt-8">
// //                 <h2 className="text-xl font-semibold mb-4">Achievements</h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <motion.div
// //                     whileHover={{ scale: 1.02 }}
// //                     className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
// //                   >
// //                     <div className="flex items-center space-x-3">
// //                       <Award className="h-6 w-6 text-purple-600" />
// //                       <div>
// //                         <h3 className="font-semibold">Course Champion</h3>
// //                         <p className="text-sm text-gray-600">Completed 5+ courses</p>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {showEditForm && (
// //         <EditProfileForm
// //           profileData={profileData}
// //           onClose={() => setShowEditForm(false)}
// //           onSubmit={handleUpdateProfile}
// //           isStudent={isStudent}
// //         />
// //       )}
// //     </DashboardLayout>
// //   );
// // };



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Camera, Mail, Phone, Award, Edit, Star, Trophy, Zap, Book, FileText } from 'lucide-react';
// import { DashboardLayout } from '../layout/DashboardLayout';
// import { EditProfileForm } from './EditProfileForm';
// import Confetti from 'react-confetti';

// export const ProfilePage: React.FC = () => {
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const userData = JSON.parse(localStorage.getItem('userData') || '{}');
//   const isStudent = userData.role === 'student';

//   const [profileData, setProfileData] = useState({
//     name:'John Doe',
//     usn: userData.usn || '',
//     email: '',
//     phone: '',
//     profilePicture: userData.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60',
//     completedCourses: 5,
//     certificates: 3,
//     level: 2,
//     xp: 650,
//   });

//   // Mock data for demonstration
//   const achievements = [
//     { type: 'courses', count: 5, label: 'Course Explorer', icon: <Book /> },
//     { type: 'certificates', count: 3, label: 'Certification Pro', icon: <FileText /> },
//     { type: 'streak', count: 7, label: 'Learning Streak', icon: <Zap /> },
//   ];

//   const handleUpdateProfile = (newData: any) => {
//     setProfileData({ ...profileData, ...newData });
//     localStorage.setItem('userData', JSON.stringify({ ...userData, ...newData }));
//     setShowEditForm(false);
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 3000);
//   };

//   // XP progress calculations
//   const xpForNextLevel = 1000;
//   const xpProgress = (profileData.xp / xpForNextLevel) * 100;

//   return (
//     <DashboardLayout>
//       {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Animated Cover Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative h-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-2xl shadow-xl"
//         >
//           <div className="absolute bottom-4 right-4 flex items-center space-x-2">
//             <Trophy className="h-6 w-6 text-yellow-400" />
//             <span className="text-white font-semibold">Level {profileData.level}</span>
//           </div>
//         </motion.div>

//         {/* Profile Card */}
//         <div className="relative -mt-16 px-6">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="group relative inline-block"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-40 transition"></div>
//             <img
//               src={profileData.profilePicture}
//               alt="Profile"
//               className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
//             />
//             <button className="absolute bottom-2 right-2 p-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110">
//               <Camera className="h-4 w-4" />
//             </button>
//           </motion.div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowEditForm(true)}
//             className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-white text-purple-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <Edit className="h-4 w-4" />
//             <span>Edit Profile</span>
//           </motion.button>
//         </div>

//         {/* Profile Content */}
//         <div className="space-y-8 py-6">
//           {/* User Info Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="bg-white rounded-2xl p-6 shadow-lg"
//           >
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
//             {isStudent && <p className="text-purple-600 font-medium">{profileData.usn}</p>}
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//               <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                 <Mail className="h-5 w-5 text-purple-600" />
//                 <span className="text-gray-700">{profileData.email || 'Email not provided'}</span>
//               </div>
              
//               <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                 <Phone className="h-5 w-5 text-purple-600" />
//                 <span className="text-gray-700">{profileData.phone || 'Add phone number'}</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Progress Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-6 rounded-2xl shadow-lg"
//             >
//               <h2 className="text-xl font-bold mb-4">Learning Progress</h2>
//               <div className="relative w-full h-3 bg-gray-200 rounded-full mb-2">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${xpProgress}%` }}
//                   transition={{ duration: 1 }}
//                 />
//               </div>
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>{profileData.xp} XP</span>
//                 <span>{xpForNextLevel - profileData.xp} XP to next level</span>
//               </div>
//             </motion.div>

//             {/* Badges Section */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-6 rounded-2xl shadow-lg"
//             >
//               <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {achievements.map((achievement, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -5 }}
//                     className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center space-x-3"
//                   >
//                     <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
//                       {achievement.icon}
//                     </div>
//                     <div>
//                       <p className="font-semibold">{achievement.label}</p>
//                       <p className="text-sm text-gray-600">{achievement.count}+</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Certificates Gallery */}
//           {isStudent && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="bg-white p-6 rounded-2xl shadow-lg"
//             >
//               <h2 className="text-xl font-bold mb-4">Certificates Collection</h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {Array.from({ length: profileData.certificates }).map((_, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     className="relative aspect-video bg-purple-100 rounded-xl overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
//                     <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm">
//                       <FileText className="h-5 w-5 text-purple-600" />
//                       <p className="text-sm font-medium mt-1">Certificate #{index + 1}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//                 {profileData.certificates === 0 && (
//                   <div className="col-span-full text-center py-8 text-gray-500">
//                     No certificates yet. Start learning!
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           )}

//           {/* Floating Achievements */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <motion.div
//               whileHover={{ rotate: 3 }}
//               className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl"
//             >
//               <div className="flex items-center space-x-3">
//                 <Star className="h-8 w-8" />
//                 <div>
//                   <p className="text-2xl font-bold">{profileData.completedCourses}</p>
//                   <p className="text-sm">Courses Completed</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               whileHover={{ rotate: -3 }}
//               className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl"
//             >
//               <div className="flex items-center space-x-3">
//                 <Award className="h-8 w-8" />
//                 <div>
//                   <p className="text-2xl font-bold">{profileData.certificates}</p>
//                   <p className="text-sm">Certificates Earned</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl"
//             >
//               <div className="flex items-center space-x-3">
//                 <Zap className="h-8 w-8" />
//                 <div>
//                   <p className="text-2xl font-bold">{profileData.level}</p>
//                   <p className="text-sm">Learning Level</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {showEditForm && (
//         <EditProfileForm
//           profileData={profileData}
//           onClose={() => setShowEditForm(false)}
//           onSubmit={handleUpdateProfile}
//           isStudent={isStudent}
//         />
//       )}
//     </DashboardLayout>
//   );
// };


// src/components/profile/ProfilePage.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Phone, Award, Edit, Star, Trophy, Zap, Book, FileText } from 'lucide-react';
import Confetti from 'react-confetti';
import { DashboardLayout } from '../layout/DashboardLayout';
import { EditProfileForm } from './EditProfileForm';
import axios from 'axios';

export const ProfilePage: React.FC = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch profile data from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        // Response expected to be a plain object with profile fields
        setProfileData(response.data);
        localStorage.setItem('userData', JSON.stringify(response.data));
      } catch (err: any) {
        console.error("Error fetching profile data:", err.response?.data || err.message);
        setError("Failed to fetch profile data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = (newData: any) => {
    const updatedData = { ...profileData, ...newData };
    setProfileData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    setShowEditForm(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    // Optionally, you could call a backend update endpoint here.
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">Loading profile...</div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="text-center py-8 text-red-600">{error}</div>
      </DashboardLayout>
    );
  }

  // Determine role from profileData
  const isStudent = profileData.role === 'student';

  // Calculate XP progress if student
  const xpForNextLevel = 1000;
  const xpProgress = isStudent && profileData.xp ? (profileData.xp / xpForNextLevel) * 100 : 0;

  // Mock achievements for students (or fetch them from backend)
  const achievements = isStudent
    ? [
        { type: 'courses', count: profileData.completedCourses || 0, label: 'Course Explorer', icon: <Book /> },
        { type: 'certificates', count: profileData.certificates ? profileData.certificates.length : 0, label: 'Certification Pro', icon: <FileText /> },
        { type: 'streak', count: profileData.streak || 0, label: 'Learning Streak', icon: <Zap /> },
      ]
    : [];

  // Render Student Detailed View if role is student; otherwise, a simple faculty view
  return (
    <DashboardLayout>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      {isStudent ? (
        // Detailed Student Profile View
        <div className="max-w-6xl mx-auto px-4">
          {/* Animated Cover Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-2xl shadow-xl"
          >
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold">Level {profileData.level}</span>
            </div>
          </motion.div>

          {/* Profile Card */}
          <div className="relative -mt-16 px-6">
            <motion.div whileHover={{ scale: 1.05 }} className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-40 transition"></div>
              <img
                src={profileData.profilePicture}
                alt="Profile"
                className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110">
                <Camera className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowEditForm(true)}
              className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-white text-purple-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </motion.button>
          </div>

          {/* Profile Content */}
          <div className="space-y-8 py-6">
            {/* User Info Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
              <p className="text-purple-600 font-medium">{profileData.usn}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{profileData.email || 'Email not provided'}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{profileData.phone || 'Add phone number'}</span>
                </div>
              </div>
            </motion.div>

            {/* Progress Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Learning Progress</h2>
                <div className="relative w-full h-3 bg-gray-200 rounded-full mb-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{profileData.xp} XP</span>
                  <span>{xpForNextLevel - profileData.xp} XP to next level</span>
                </div>
              </motion.div>

              {/* Achievements Section */}
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div key={index} whileHover={{ y: -5 }} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        {achievement.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{achievement.label}</p>
                        <p className="text-sm text-gray-600">{achievement.count}+</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Certificates Gallery
            {isStudent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h2 className="text-xl font-bold mb-4">Certificates Collection</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {profileData.certificates && profileData.certificates.length > 0 ? (
                    profileData.certificates.map((cert: any, index: number) => (
                      <motion.div
                        key={cert._id || index}
                        whileHover={{ scale: 1.05 }}
                        className="relative aspect-video bg-purple-100 rounded-xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm">
                          <FileText className="h-5 w-5 text-purple-600" />
                          <p className="text-sm font-medium mt-1">Certificate #{index + 1}</p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8 text-gray-500">
                      No certificates yet. Start learning!
                    </div>
                  )}
                </div>
              </motion.div>
            )} */}

            {/* Floating Achievements for Students */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ rotate: 3 }} className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8" />
                  <div>
                    <p className="text-2xl font-bold">{profileData.completedCourses}</p>
                    <p className="text-sm">Courses Completed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div whileHover={{ rotate: -3 }} className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8" />
                  <div>
                    <p className="text-2xl font-bold">{profileData.certificates ? profileData.certificates.length : 0}</p>
                    <p className="text-sm">Certificates Earned</p>
                  </div>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8" />
                  <div>
                    <p className="text-2xl font-bold">{profileData.level}</p>
                    <p className="text-sm">Learning Level</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        // Simple Faculty View
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="relative px-6 pb-6">
              <div className="relative -mt-24 mb-4">
                <motion.div whileHover={{ scale: 1.05 }} className="relative inline-block">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowEditForm(true)}
                className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </motion.button>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-5 w-5" />
                    <span>{profileData.email || 'Email not provided'}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <span>{profileData.phone || 'Phone not provided'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default ProfilePage;
