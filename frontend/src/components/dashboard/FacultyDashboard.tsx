// // // // import React, { useState } from 'react';
// // // // //import { Search, User } from 'lucide-react';
// // // // import { Search } from 'lucide-react';

// // // // export const FacultyDashboard: React.FC = () => {
// // // //   const [searchTerm, setSearchTerm] = useState('');

// // // //   return (
// // // //     <div className="p-6">
// // // //       <div className="mb-6">
// // // //         <div className="relative">
// // // //           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search students..."
// // // //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div className="bg-white rounded-lg shadow-md">
// // // //         <div className="p-6">
// // // //           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
// // // //           <div className="text-gray-600 text-center py-8">
// // // //             No students registered yet
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// import React, { useEffect, useState } from 'react';
// import { Search } from 'lucide-react';
// import axios from 'axios';

// export const FacultyDashboard: React.FC = () => {
//   const [studentsData, setStudentsData] = useState<any[]>([]); // Initialize as an empty array
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudentsData = async () => {
//       try {
//         const response = await axios.get('/api/faculty/students-data');
//         if (Array.isArray(response.data)) {
//           setStudentsData(response.data);
//         } else {
//           console.error('Unexpected data format:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching students data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudentsData();
//   }, []);

//   const filteredStudents = studentsData.filter((student) =>
//     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="text-center py-8">
//         <p>Loading students data...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <div className="relative">
//           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search students..."
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-md">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
//           {filteredStudents.length > 0 ? (
//             <ul className="space-y-4">
//               {filteredStudents.map((student, index) => (
//                 <li key={index} className="flex items-center justify-between">
//                   <div>
//                     <p className="text-lg font-semibold">{student.student.name}</p>
//                     <p className="text-sm text-gray-500">{student.usn}</p>
//                   </div>
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                     View Details
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <div className="text-gray-600 text-center py-8">
//               No students found
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search } from 'lucide-react';

// // export const FacultyDashboard: React.FC = () => {
// //   const [studentsData, setStudentsData] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchStudentsData = async () => {
// //       try {
// //         const response = await axios.get('/api/faculty/students-data', {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`, // Pass the token
// //           },
// //         });
// //         setStudentsData(response.data);
// //         setLoading(false);
// //       } catch (err: any) {
// //         setError(err.response?.data?.message || 'Failed to fetch students data');
// //         setLoading(false);
// //       }
// //     };

// //     fetchStudentsData();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   const filteredStudents = studentsData.filter((student: any) =>
// //     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="p-6">
// //       <div className="mb-6">
// //         <div className="relative">
// //           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search students..."
// //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md">
// //         <div className="p-6">
// //           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
// //           {filteredStudents.length > 0 ? (
// //             <ul>
// //               {filteredStudents.map((student: any, index: number) => (
// //                 <li key={index} className="mb-4 border-b pb-2">
// //                   <h3 className="font-semibold text-lg">{student.student.name}</h3>
// //                   <p className="text-sm text-gray-600">USN: {student.usn}</p>
// //                   <div className="mt-2">
// //                     <strong>Courses:</strong>
// //                     <ul className="list-disc ml-5">
// //                       {student.courses.map((course: any, courseIndex: number) => (
// //                         <li key={courseIndex}>
// //                           <a
// //                             href={course.link}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-blue-500 underline"
// //                           >
// //                             {course.title}
// //                           </a>{' '}
// //                           ({course.platform})
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                   <div className="mt-2">
// //                     <strong>Certificates:</strong>
// //                     <ul className="list-disc ml-5">
// //                       {student.certificates.map((cert: any, certIndex: number) => (
// //                         <li key={certIndex}>
// //                           <a
// //                             href={cert.fileUrl}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-blue-500 underline"
// //                           >
// //                             {cert.name}
// //                           </a>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <div className="text-gray-600 text-center py-8">No students found</div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Search } from "lucide-react";

// // export const FacultyDashboard: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState<string>("");
// //   const [studentsData, setStudentsData] = useState<any[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchStudentsData = async () => {
// //       try {
// //         const response = await axios.get("/api/faculty/students-data", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         if (Array.isArray(response.data)) {
// //           setStudentsData(response.data);
// //         } else {
// //           console.error("Unexpected data format:", response.data);
// //           setError("Unexpected data format received from server.");
// //         }
// //       } catch (err: any) {
// //         console.error("Error fetching data:", err);
// //         setError(err.response?.data?.message || "Failed to fetch students data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchStudentsData();
// //   }, []);

// //   const filteredStudents = Array.isArray(studentsData)
// //     ? studentsData.filter((student: any) =>
// //         student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : [];

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-red-500">Error: {error}</div>;
// //   }

// //   return (
// //     <div className="p-6">
// //       <div className="mb-6">
// //         <div className="relative">
// //           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search students..."
// //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-lg shadow-md">
// //         <div className="p-6">
// //           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
// //           {filteredStudents.length > 0 ? (
// //             <div className="space-y-4">
// //               {filteredStudents.map((student: any) => (
// //                 <div
// //                   key={student.student._id}
// //                   className="border rounded-lg p-4 shadow-sm"
// //                 >
// //                   <h3 className="text-lg font-semibold">
// //                     {student.student.name} ({student.usn})
// //                   </h3>
// //                   <p className="text-gray-600">Email: {student.student.email}</p>
// //                   <p className="text-gray-600">
// //                     Registered Courses: {student.courses.length}
// //                   </p>
// //                   <p className="text-gray-600">
// //                     Certificates Uploaded: {student.certificates.length}
// //                   </p>
// //                   <div className="mt-4">
// //                     <button className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2 hover:bg-green-600">
// //                       Mark Verified
// //                     </button>
// //                     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
// //                       View Details
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="text-gray-600 text-center py-8">
// //               No students found
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };



import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";

export const FacultyDashboard: React.FC = () => {
  const [studentsData, setStudentsData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        console.log("Fetching students data..."); // Debug
        const response = await axios.get('/api/faculty/students-data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token if needed
          },
        });
  
        console.log("API Response:", response.data); // Debug
  
        if (Array.isArray(response.data)) {
          setStudentsData(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching students data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStudentsData();
  }, []);

  useEffect(() => {
    console.log("Updated studentsData:", studentsData);
  }, [studentsData]);
  

  const filteredStudents = studentsData.filter((student) =>
    student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Loading students data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
          {filteredStudents.length > 0 ? (
            <ul className="space-y-4">
              {filteredStudents.map((student, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{student.student.name}</p>
                    <p className="text-sm text-gray-500">{student.usn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Courses: {student.courses.length}
                    </p>
                    <p className="text-sm text-gray-600">
                      Certificates: {student.certificates.length}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600 text-center py-8">
              No students found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
