// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Book, Activity, Award } from 'lucide-react';

// // export const StudentDashboard: React.FC = () => {
// //   const stats = {
// //     registered: 0,
// //     inProgress: 0,
// //     completed: 0,
// //   };

// //   return (
// //     <div>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         <motion.div
// //           whileHover={{ scale: 1.02 }}
// //           className="bg-white p-6 rounded-lg shadow-md"
// //         >
// //           <Book className="h-8 w-8 text-blue-500 mb-2" />
// //           <h3 className="text-lg font-semibold">Registered Courses</h3>
// //           <p className="text-3xl font-bold text-blue-600">{stats.registered}</p>
// //         </motion.div>

// //         <motion.div
// //           whileHover={{ scale: 1.02 }}
// //           className="bg-white p-6 rounded-lg shadow-md"
// //         >
// //           <Activity className="h-8 w-8 text-yellow-500 mb-2" />
// //           <h3 className="text-lg font-semibold">In Progress</h3>
// //           <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
// //         </motion.div>

// //         <motion.div
// //           whileHover={{ scale: 1.02 }}
// //           className="bg-white p-6 rounded-lg shadow-md"
// //         >
// //           <Award className="h-8 w-8 text-green-500 mb-2" />
// //           <h3 className="text-lg font-semibold">Completed</h3>
// //           <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
// //         </motion.div>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md p-6">
// //         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
// //         <div className="text-gray-600 text-center py-8">
// //           No recent activity
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };




// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Book, Activity, Award } from 'lucide-react';
// import axios from 'axios';

// interface CourseStats {
//   registered: number;
//   inProgress: number;
//   completed: number;
// }

// export const StudentDashboard: React.FC = () => {
//   const [stats, setStats] = useState<CourseStats>({
//     registered: 0,
//     inProgress: 0,
//     completed: 0,
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);
//         axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
//         const response = await axios.get("/api/student/stats");
//         setStats(response.data);
//       } catch (err: any) {
//         setError(err.response?.data?.message || "Error fetching stats");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (isLoading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-600">{error}</div>;
//   }

//   return (
//     <div>
//       {/* Stats Section */}
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

//       {/* Recent Activity Placeholder */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
//         <div className="text-gray-600 text-center py-8">No recent activity</div>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Book, Activity, Award } from "lucide-react";

const StudentDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    registered: 0,
    inProgress: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("/api/studentdashboard/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response:", response.data);
        //const { registered, inProgress, completed } = response.data;
        const { totalRegistered: registered, coursesInProgress: inProgress, completedCourses: completed } = response.data;
        setStats({ registered, inProgress, completed });
      } catch (err) {
        console.error("Error fetching student stats:", err);
        setError("Failed to fetch student stats. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <Book className="h-8 w-8 text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold">Registered Courses</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.registered || 0}</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <Activity className="h-8 w-8 text-yellow-500 mb-2" />
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {stats.inProgress || 0  }
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <Award className="h-8 w-8 text-green-500 mb-2" />
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-3xl font-bold text-green-600">{stats.completed || 0}</p>
        </motion.div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="text-gray-600 text-center py-8">
          {stats.registered === 0
            ? "No activity yet."
            : "Keep going! Your progress is being tracked."}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
