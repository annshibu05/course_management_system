// // import React from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Menu, X, BookOpen, Library, User, LogOut } from 'lucide-react';
// // import { Link, useNavigate, useLocation } from 'react-router-dom';

// // interface SidebarProps {
// //   isOpen: boolean;
// //   toggleSidebar: () => void;
// // }

// // export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
// //   const isStudent = userData.role === 'student';
// //   const basePath = `/dashboard/${isStudent ? 'student' : 'faculty'}`;

// //   const handleLogout = () => {
// //     localStorage.removeItem('currentUser');
// //     navigate('/');
// //   };

// //   return (
// //     <>
// //       {/* Hamburger Button */}
// //       <button
// //         onClick={toggleSidebar}
// //         className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
// //       >
// //         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //       </button>

// //       {/* Overlay */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={toggleSidebar}
// //             className="fixed inset-0 bg-black bg-opacity-50 z-40"
// //           />
// //         )}
// //       </AnimatePresence>

// //       {/* Sidebar */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ x: -300 }}
// //             animate={{ x: 0 }}
// //             exit={{ x: -300 }}
// //             className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
// //           >
// //             <div className="p-6 space-y-6">
// //               <h2 className="text-2xl font-bold text-gray-800 mb-8">Menu</h2>
              
// //               <nav className="space-y-4">
// //                 <Link
// //                   to={`${basePath}/available-courses`}
// //                   className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
// //                 >
// //                   <BookOpen className="h-5 w-5" />
// //                   <span>Available Courses</span>
// //                 </Link>

// //                 {isStudent && (
// //                   <Link
// //                     to={`${basePath}/my-courses`}
// //                     className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
// //                   >
// //                     <Library className="h-5 w-5" />
// //                     <span>My Courses</span>
// //                   </Link>
// //                 )}

// //                 <Link
// //                   to={`${basePath}/profile`}
// //                   className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
// //                 >
// //                   <User className="h-5 w-5" />
// //                   <span>Profile</span>
// //                 </Link>

// //                 <button
// //                   onClick={handleLogout}
// //                   className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors w-full"
// //                 >
// //                   <LogOut className="h-5 w-5" />
// //                   <span>Logout</span>
// //                 </button>
// //               </nav>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };




// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, BookOpen, Library, User, LogOut, Grid } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   const navigate = useNavigate();
//   //const location = useLocation();
//   const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
//   const isStudent = userData.role === 'student';
//   const basePath = `/dashboard/${isStudent ? 'student' : 'faculty'}`;
//   //const basePath = `/${isStudent ? 'student' : 'faculty'}`;

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     navigate('/');
//   };
  
//   return (
//     <>
//       {/* Hamburger Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </button>

//       {/* Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={toggleSidebar}
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           />
//         )}
//       </AnimatePresence>

//       {/* Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: -300 }}
//             animate={{ x: 0 }}
//             exit={{ x: -300 }}
//             className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
//           >
//             <div className="p-6 space-y-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-8">Menu</h2>
              
//               <nav className="space-y-4">
//                 {/* Dashboard Link */}
//                 <Link
//                   to={`${basePath}`}
//                   className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <Grid className="h-5 w-5" />
//                   <span>Dashboard</span>
//                 </Link>

//                 <Link
//                   to={`${basePath}/available-courses`}
//                   className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <BookOpen className="h-5 w-5" />
//                   <span>Available Courses</span>
//                 </Link>

//                 {isStudent && (
//                   <Link
//                     to={`${basePath}/my-courses`}
//                     className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     <Library className="h-5 w-5" />
//                     <span>My Courses</span>
//                   </Link>
//                 )}

//                 <Link
//                   to={`${basePath}/profile`}
//                   className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   <User className="h-5 w-5" />
//                   <span>Profile</span>
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors w-full"
//                 >
//                   <LogOut className="h-5 w-5" />
//                   <span>Logout</span>
//                 </button>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Library, User, LogOut, Grid, ClipboardList } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role"); // Get role.

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("role"); // Remove role from localStorage.
    navigate("/");
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
          >
            <div className="p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Menu</h2>

              <nav className="space-y-4">
                {userRole === "student" && (
                  <>
                    <Link
                      to="/dashboard/student"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Grid className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>

                    <Link
                      to="/student/available-courses"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <BookOpen className="h-5 w-5" />
                      <span>Available Courses</span>
                    </Link>

                    <Link
                      to="/student/my-courses"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Library className="h-5 w-5" />
                      <span>My Courses</span>
                    </Link>
                    {/* Student Profile */}
                    <Link
                      to="/student/profile"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                  </>
                )}

                {userRole === "faculty" && (
                  <>
                    <Link
                      to="/dashboard/faculty"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Grid className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>

                    <Link
                      to="/faculty/profile"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </Link>

                    <Link
                      to="/faculty/available-courses"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ClipboardList className="h-5 w-5" />
                      <span>Available Courses</span>
                    </Link>
                  </>
                )}

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors w-full"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
