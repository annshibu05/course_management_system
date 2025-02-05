// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Book, Activity, Award } from 'lucide-react';

// // // export const StudentDashboard: React.FC = () => {
// // //   const stats = {
// // //     registered: 0,
// // //     inProgress: 0,
// // //     completed: 0,
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // //         <motion.div
// // //           whileHover={{ scale: 1.02 }}
// // //           className="bg-white p-6 rounded-lg shadow-md"
// // //         >
// // //           <Book className="h-8 w-8 text-blue-500 mb-2" />
// // //           <h3 className="text-lg font-semibold">Registered Courses</h3>
// // //           <p className="text-3xl font-bold text-blue-600">{stats.registered}</p>
// // //         </motion.div>

// // //         <motion.div
// // //           whileHover={{ scale: 1.02 }}
// // //           className="bg-white p-6 rounded-lg shadow-md"
// // //         >
// // //           <Activity className="h-8 w-8 text-yellow-500 mb-2" />
// // //           <h3 className="text-lg font-semibold">In Progress</h3>
// // //           <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
// // //         </motion.div>

// // //         <motion.div
// // //           whileHover={{ scale: 1.02 }}
// // //           className="bg-white p-6 rounded-lg shadow-md"
// // //         >
// // //           <Award className="h-8 w-8 text-green-500 mb-2" />
// // //           <h3 className="text-lg font-semibold">Completed</h3>
// // //           <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
// // //         </motion.div>
// // //       </div>

// // //       <div className="bg-white rounded-lg shadow-md p-6">
// // //         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
// // //         <div className="text-gray-600 text-center py-8">
// // //           No recent activity
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };




// // import React, { useEffect, useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Book, Activity, Award } from 'lucide-react';
// // import axios from 'axios';

// // interface CourseStats {
// //   registered: number;
// //   inProgress: number;
// //   completed: number;
// // }

// // export const StudentDashboard: React.FC = () => {
// //   const [stats, setStats] = useState<CourseStats>({
// //     registered: 0,
// //     inProgress: 0,
// //     completed: 0,
// //   });
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchStats = async () => {
// //       try {
// //         setIsLoading(true);
// //         setError(null);
// //         axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
// //         const response = await axios.get("/api/student/stats");
// //         setStats(response.data);
// //       } catch (err: any) {
// //         setError(err.response?.data?.message || "Error fetching stats");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchStats();
// //   }, []);

// //   if (isLoading) {
// //     return <div className="text-center py-8">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-center py-8 text-red-600">{error}</div>;
// //   }

// //   return (
// //     <div>
// //       {/* Stats Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
// //           <Book className="h-8 w-8 text-blue-500 mb-2" />
// //           <h3 className="text-lg font-semibold">Registered Courses</h3>
// //           <p className="text-3xl font-bold text-blue-600">{stats.registered}</p>
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
// //           <Activity className="h-8 w-8 text-yellow-500 mb-2" />
// //           <h3 className="text-lg font-semibold">In Progress</h3>
// //           <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
// //         </motion.div>
// //         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
// //           <Award className="h-8 w-8 text-green-500 mb-2" />
// //           <h3 className="text-lg font-semibold">Completed</h3>
// //           <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
// //         </motion.div>
// //       </div>

// //       {/* Recent Activity Placeholder */}
// //       <div className="bg-white rounded-lg shadow-md p-6">
// //         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
// //         <div className="text-gray-600 text-center py-8">No recent activity</div>
// //       </div>
// //     </div>
// //   );
// // };


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Book, Activity, Award } from "lucide-react";

// const StudentDashboard: React.FC = () => {
//   const [stats, setStats] = useState({
//     registered: 0,
//     inProgress: 0,
//     completed: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStudentStats = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await axios.get("/api/studentdashboard/stats", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         console.log("API Response:", response.data);
//         //const { registered, inProgress, completed } = response.data;
//         const { totalRegistered: registered, coursesInProgress: inProgress, completedCourses: completed } = response.data;
//         setStats({ registered, inProgress, completed });
//       } catch (err) {
//         console.error("Error fetching student stats:", err);
//         setError("Failed to fetch student stats. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudentStats();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="bg-white p-6 rounded-lg shadow-md"
//         >
//           <Book className="h-8 w-8 text-blue-500 mb-2" />
//           <h3 className="text-lg font-semibold">Registered Courses</h3>
//           <p className="text-3xl font-bold text-blue-600">{stats.registered || 0}</p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="bg-white p-6 rounded-lg shadow-md"
//         >
//           <Activity className="h-8 w-8 text-yellow-500 mb-2" />
//           <h3 className="text-lg font-semibold">In Progress</h3>
//           <p className="text-3xl font-bold text-yellow-600">
//             {stats.inProgress || 0  }
//           </p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="bg-white p-6 rounded-lg shadow-md"
//         >
//           <Award className="h-8 w-8 text-green-500 mb-2" />
//           <h3 className="text-lg font-semibold">Completed</h3>
//           <p className="text-3xl font-bold text-green-600">{stats.completed || 0}</p>
//         </motion.div>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
//         <div className="text-gray-600 text-center py-8">
//           {stats.registered === 0
//             ? "No activity yet."
//             : "Keep going! Your progress is being tracked."}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Book, Activity, Award, Rocket, TrendingUp } from "lucide-react";

interface CourseStats {
  totalRegistered: number;
  coursesInProgress: number;
  completedCourses: number;
  activityLog: any[];
}

const StudentDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    registered: 0,
    inProgress: 0,
    completed: 0,
  });
  const [recentActivity, setRecentActivity] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentStats = async () => {
      try {
        setLoading(true);
        setError(null);
        // Use an absolute URL to ensure the request reaches the backend correctly.
        const response = await axios.get("http://localhost:5000/api/student/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response:", response.data); // Debug the response

        const {
          totalRegistered,
          coursesInProgress,
          completedCourses,
          activityLog,
        } = response.data as CourseStats;

        setStats({
          registered: totalRegistered,
          inProgress: coursesInProgress,
          completed: completedCourses,
        });

        // Generate recent activity messages
        const activityMessages = activityLog.map((activity: any) => {
          const date = new Date(activity.date).toLocaleDateString();
          if (activity.type === "registration") {
            return `Registered for ${activity.courseTitle} on ${date}`;
          } else if (activity.type === "certificate_upload") {
            return `Uploaded certificate for ${activity.courseTitle} on ${date}`;
          } else if (activity.type === "course_completion") {
            return `Completed ${activity.courseTitle} on ${date} 🎉`;
          }
          return "";
        });
        setRecentActivity(activityMessages);
      } catch (err: any) {
        console.error("Error fetching student stats:", err.response || err.message);
        setError("Failed to fetch student stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentStats();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading your dashboard...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

//   return (
//     <div className="p-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
//           <Book className="h-8 w-8 text-blue-500 mb-2" />
//           <h3 className="text-lg font-semibold">Registered Courses</h3>
//           <p className="text-3xl font-bold text-blue-600">{stats.registered}</p>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
//           <Activity className="h-8 w-8 text-yellow-500 mb-2" />
//           <h3 className="text-lg font-semibold">In Progress</h3>
//           <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-lg shadow-md">
//           <Award className="h-8 w-8 text-green-500 mb-2" />
//           <h3 className="text-lg font-semibold">Completed</h3>
//           <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
//         </motion.div>
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
//         {recentActivity.length > 0 ? (
//           <div className="space-y-4">
//             {recentActivity.map((activity, index) => (
//               <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
//                 {activity.includes("Registered") && <span>🕒</span>}
//                 {activity.includes("Uploaded") && <span>📤</span>}
//                 {activity.includes("Completed") && <span>🎉</span>}
//                 <p className="text-gray-700">{activity}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-gray-600 text-center py-8">No recent activity</div>
//         )}
//       </div>
//     </div>
//   );
// };
return (
  <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-blue-600">{stats.registered}</p>
              <h3 className="text-lg font-semibold">Registered Courses</h3>
            </div>
            <div className="p-4 bg-blue-100 rounded-xl">
              <Book className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-500">
            {/* <TrendingUp className="h-4 w-4 mr-2" />
            <span>+12% from last month</span> */}
          </div>
        </motion.div>

        <motion.div 
  whileHover={{ scale: 1.02 }}
  className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-yellow-500"
>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
      <h3 className="text-lg font-semibold">Courses in Progress</h3>
    </div>
    <div className="p-4 bg-yellow-100 rounded-xl">
      <Activity className="h-8 w-8 text-yellow-600" />
    </div>
  </div>
  <div className="mt-4 flex items-center text-sm text-yellow-500">
    {/* <TrendingUp className="h-4 w-4 mr-2" />
    <span>+8% from last month</span> */}
  </div>
</motion.div>

<motion.div 
  whileHover={{ scale: 1.02 }}
  className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500"
>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
      <h3 className="text-lg font-semibold">Completed Courses</h3>
    </div>
    <div className="p-4 bg-green-100 rounded-xl">
      <Award className="h-8 w-8 text-green-600" />
    </div>
  </div>
  <div className="mt-4 flex items-center text-sm text-green-500">
    {/* <TrendingUp className="h-4 w-4 mr-2" />
    <span>+15% from last month</span> */}
  </div>
</motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <Rocket className="h-8 w-8 text-purple-600" />
        </div>
        
        {recentActivity.length > 0 ? (
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start p-6 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                  {activity.includes("Registered") && <Book className="h-6 w-6 text-purple-600" />}
                  {activity.includes("Uploaded") && <Activity className="h-6 w-6 text-blue-600" />}
                  {activity.includes("Completed") && <Award className="h-6 w-6 text-green-600" />}
                </div>
                <p className="text-gray-700 text-lg">{activity}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-400">
            <p className="text-xl">No recent activity yet</p>
            <p className="mt-2">Start learning to see your progress here!</p>
          </div>
        )}
      </motion.div>
    </div>
  </div>
);
}

export default StudentDashboard;
