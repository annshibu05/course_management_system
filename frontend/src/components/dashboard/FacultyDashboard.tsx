// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Search } from "lucide-react";
// // // // // import axios from "axios";
// // // // // import { Dialog } from "@headlessui/react";
// // // // // import { X } from "lucide-react";

// // // // // interface StudentDetailsModalProps {
// // // // //   student: any;
// // // // //   onClose: () => void;
// // // // // }

// // // // // const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
// // // // //   const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

// // // // //   return (
// // // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // // //       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
// // // // //         <div className="flex justify-between items-center p-6 border-b">
// // // // //           <Dialog.Title className="text-xl font-semibold">
// // // // //             {student.student.name}'s Details
// // // // //           </Dialog.Title>
// // // // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // // // //             <X className="h-6 w-6" />
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="p-6">
// // // // //           <div className="flex space-x-4 mb-6">
// // // // //             <button
// // // // //               onClick={() => setActiveTab('courses')}
// // // // //               className={`px-4 py-2 ${
// // // // //                 activeTab === 'courses' 
// // // // //                   ? 'bg-blue-600 text-white' 
// // // // //                   : 'bg-gray-100 text-gray-700'
// // // // //               } rounded-lg`}
// // // // //             >
// // // // //               Courses ({student.courses.length})
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab('certificates')}
// // // // //               className={`px-4 py-2 ${
// // // // //                 activeTab === 'certificates' 
// // // // //                   ? 'bg-blue-600 text-white' 
// // // // //                   : 'bg-gray-100 text-gray-700'
// // // // //               } rounded-lg`}
// // // // //             >
// // // // //               Certificates ({student.certificates.length})
// // // // //             </button>
// // // // //           </div>

// // // // //           {activeTab === 'courses' ? (
// // // // //             <div className="space-y-4">
// // // // //               {student.courses.map((course: any, index: number) => (
// // // // //                 <div key={index} className="p-4 border rounded-lg">
// // // // //                   <h3 className="font-semibold text-lg">{course.title}</h3>
// // // // //                   <div className="mt-2 grid grid-cols-2 gap-4">
// // // // //                     <div>
// // // // //                       <p className="text-sm text-gray-600">
// // // // //                         Platform: {course.platform}
// // // // //                       </p>
// // // // //                       <p className="text-sm text-gray-600">
// // // // //                         Status: {course.status}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <a
// // // // //                         href={course.link}
// // // // //                         target="_blank"
// // // // //                         rel="noopener noreferrer"
// // // // //                         className="text-blue-600 hover:underline"
// // // // //                       >
// // // // //                         Course Link
// // // // //                       </a>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="space-y-4">
// // // // //               {student.certificates.map((cert: any, index: number) => (
// // // // //                 <div key={index} className="p-4 border rounded-lg">
// // // // //                   <div className="flex justify-between items-center">
// // // // //                     <div>
// // // // //                       <h3 className="font-semibold">{cert.name}</h3>
// // // // //                       <a
// // // // //                         href={cert.fileUrl.startsWith('http') 
// // // // //                           ? cert.fileUrl 
// // // // //                           : `http://localhost:5000/${cert.fileUrl}`}
// // // // //                         target="_blank"
// // // // //                         rel="noopener noreferrer"
// // // // //                         className="text-blue-600 hover:underline"
// // // // //                       >
// // // // //                         View Certificate
// // // // //                       </a>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export const FacultyDashboard: React.FC = () => {
// // // // //   const [studentsData, setStudentsData] = useState<any[]>([]);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState<string | null>(null);
// // // // //   const [selectedStudent, setSelectedStudent] = useState<any>(null);

// // // // //   useEffect(() => {
// // // // //     const fetchStudentsData = async () => {
// // // // //       try {
// // // // //         const response = await axios.get('http://localhost:5000/api/faculty/students-data', {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// // // // //           },
// // // // //         });

// // // // //         // Check response structure
// // // // //         console.log("API Response:", response.data);
        
// // // // //         if (response.data && Array.isArray(response.data)) {
// // // // //           setStudentsData(response.data);
// // // // //         } else {
// // // // //           setError("Unexpected data format received from server");
// // // // //         }
// // // // //       } catch (error: any) {
// // // // //         setError(error.response?.data?.message || "Failed to fetch students data");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchStudentsData();
// // // // //   }, []);

// // // // //   const filteredStudents = studentsData.filter((student) =>
// // // // //     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="text-center py-8">
// // // // //         <p>Loading students data...</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="text-center py-8">
// // // // //         <p className="text-red-600">{error}</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <div className="mb-6">
// // // // //         <div className="relative">
// // // // //           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search students..."
// // // // //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // // // //             value={searchTerm}
// // // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="bg-white rounded-lg shadow-md">
// // // // //         <div className="p-6">
// // // // //           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
// // // // //           {filteredStudents.length > 0 ? (
// // // // //             <ul className="space-y-4">
// // // // //               {filteredStudents.map((student, index) => (
// // // // //                 <li key={index} className="flex items-center justify-between">
// // // // //                   <div>
// // // // //                     <p className="text-lg font-semibold">{student.student.name}</p>
// // // // //                     <p className="text-sm text-gray-500">{student.usn}</p>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <p className="text-sm text-gray-600">
// // // // //                       Courses: {student.courses.length}
// // // // //                     </p>
// // // // //                     <p className="text-sm text-gray-600">
// // // // //                       Certificates: {student.certificates.length}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                   <button 
// // // // //                     onClick={() => setSelectedStudent(student)}
// // // // //                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // // //                   >
// // // // //                     View Details
// // // // //                   </button>
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           ) : (
// // // // //             <div className="text-gray-600 text-center py-8">
// // // // //               No students found
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // import React, { useEffect, useState } from "react";
// // // // import { Search, X } from "lucide-react";
// // // // import axios from "axios";
// // // // import { Dialog } from "@headlessui/react";

// // // // interface StudentDetailsModalProps {
// // // //   student: any;
// // // //   onClose: () => void;
// // // // }

// // // // const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
// // // //   const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // //       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
// // // //         <div className="flex justify-between items-center p-6 border-b">
// // // //           <Dialog.Title className="text-xl font-semibold">
// // // //             {student.student.name}'s Details
// // // //           </Dialog.Title>
// // // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // // //             <X className="h-6 w-6" />
// // // //           </button>
// // // //         </div>

// // // //         <div className="p-6">
// // // //           <div className="flex space-x-4 mb-6">
// // // //             <button
// // // //               onClick={() => setActiveTab('courses')}
// // // //               className={`px-4 py-2 ${
// // // //                 activeTab === 'courses' 
// // // //                   ? 'bg-blue-600 text-white' 
// // // //                   : 'bg-gray-100 text-gray-700'
// // // //               } rounded-lg`}
// // // //             >
// // // //               Courses ({student.courses.length})
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setActiveTab('certificates')}
// // // //               className={`px-4 py-2 ${
// // // //                 activeTab === 'certificates' 
// // // //                   ? 'bg-blue-600 text-white' 
// // // //                   : 'bg-gray-100 text-gray-700'
// // // //               } rounded-lg`}
// // // //             >
// // // //               Certificates ({student.certificates.length})
// // // //             </button>
// // // //           </div>

// // // //           {activeTab === 'courses' ? (
// // // //             <div className="space-y-4">
// // // //               {student.courses.map((course: any, index: number) => (
// // // //                 <div key={index} className="p-4 border rounded-lg">
// // // //                   <h3 className="font-semibold text-lg">{course.title}</h3>
// // // //                   <div className="mt-2 grid grid-cols-2 gap-4">
// // // //                     <div>
// // // //                       <p className="text-sm text-gray-600">
// // // //                         Platform: {course.platform}
// // // //                       </p>
// // // //                       <p className="text-sm text-gray-600">
// // // //                         Status: {course.status}
// // // //                       </p>
// // // //                     </div>
// // // //                     <div>
// // // //                       <a
// // // //                         href={course.link}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                         className="text-blue-600 hover:underline"
// // // //                       >
// // // //                         Course Link
// // // //                       </a>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ) : (
// // // //             <div className="space-y-4">
// // // //               {student.certificates.map((cert: any, index: number) => (
// // // //                 <div key={index} className="p-4 border rounded-lg">
// // // //                   <div className="flex justify-between items-center">
// // // //                     <div>
// // // //                       <h3 className="font-semibold">{cert.name}</h3>
// // // //                       <a
// // // //                         href={cert.fileUrl.startsWith('http') 
// // // //                           ? cert.fileUrl 
// // // //                           : `http://localhost:5000/${cert.fileUrl}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                         className="text-blue-600 hover:underline"
// // // //                       >
// // // //                         View Certificate
// // // //                       </a>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export const FacultyDashboard: React.FC = () => {
// // // //   const [studentsData, setStudentsData] = useState<any[]>([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const [selectedStudent, setSelectedStudent] = useState<any>(null);

// // // //   useEffect(() => {
// // // //     const fetchStudentsData = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:5000/api/faculty/students-data', {
// // // //           headers: {
// // // //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// // // //           },
// // // //         });

// // // //         if (response.data && Array.isArray(response.data)) {
// // // //           setStudentsData(response.data);
// // // //         } else {
// // // //           setError("Unexpected data format received from server");
// // // //         }
// // // //       } catch (error: any) {
// // // //         setError(error.response?.data?.message || "Failed to fetch students data");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchStudentsData();
// // // //   }, []);

// // // //   const filteredStudents = studentsData.filter((student) =>
// // // //     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="text-center py-8">
// // // //         <p>Loading students data...</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="text-center py-8">
// // // //         <p className="text-red-600">{error}</p>
// // // //       </div>
// // // //     );
// // // //   }

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
// // // //           {filteredStudents.length > 0 ? (
// // // //             <ul className="space-y-4">
// // // //               {filteredStudents.map((student, index) => (
// // // //                 <li key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
// // // //                   <div>
// // // //                     <p className="text-lg font-semibold">{student.student.name}</p>
// // // //                     <p className="text-sm text-gray-500">{student.usn}</p>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="text-right">
// // // //                       <p className="text-sm text-gray-600">
// // // //                         Courses: {student.courses.length}
// // // //                       </p>
// // // //                       <p className="text-sm text-gray-600">
// // // //                         Certificates: {student.certificates.length}
// // // //                       </p>
// // // //                     </div>
// // // //                     <button 
// // // //                       onClick={() => setSelectedStudent(student)}
// // // //                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// // // //                     >
// // // //                       View Details
// // // //                     </button>
// // // //                   </div>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           ) : (
// // // //             <div className="text-gray-600 text-center py-8">
// // // //               No students found
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {selectedStudent && (
// // // //         <StudentDetailsModal
// // // //           student={selectedStudent}
// // // //           onClose={() => setSelectedStudent(null)}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };



// // // import React, { useEffect, useState } from "react";
// // // import { Search, X } from "lucide-react";
// // // import axios from "axios";
// // // import { Dialog } from "@headlessui/react";

// // // interface StudentDetailsModalProps {
// // //   student: any;
// // //   onClose: () => void;
// // // }

// // // const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
// // //   const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

// // //   if (!student) return null;

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // //       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
// // //         <div className="flex justify-between items-center p-6 border-b">
// // //           <Dialog.Title className="text-xl font-semibold">
// // //             {student.student?.name || 'Student Details'}
// // //           </Dialog.Title>
// // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // //             <X className="h-6 w-6" />
// // //           </button>
// // //         </div>

// // //         <div className="flex-1 overflow-y-auto p-6">
// // //           <div className="flex space-x-4 mb-6">
// // //             <button
// // //               onClick={() => setActiveTab('courses')}
// // //               className={`px-4 py-2 ${
// // //                 activeTab === 'courses' 
// // //                   ? 'bg-blue-600 text-white' 
// // //                   : 'bg-gray-100 text-gray-700'
// // //               } rounded-lg transition-colors`}
// // //             >
// // //               Courses ({student.courses?.length || 0})
// // //             </button>
// // //             <button
// // //               onClick={() => setActiveTab('certificates')}
// // //               className={`px-4 py-2 ${
// // //                 activeTab === 'certificates' 
// // //                   ? 'bg-blue-600 text-white' 
// // //                   : 'bg-gray-100 text-gray-700'
// // //               } rounded-lg transition-colors`}
// // //             >
// // //               Certificates ({student.certificates?.length || 0})
// // //             </button>
// // //           </div>

// // //           {activeTab === 'courses' ? (
// // //             <div className="space-y-4">
// // //               {student.courses?.length > 0 ? (
// // //                 student.courses.map((course: any, index: number) => (
// // //                   <div key={index} className="p-4 border rounded-lg">
// // //                     <h3 className="font-semibold text-lg">{course.title || 'Untitled Course'}</h3>
// // //                     <div className="mt-2 grid grid-cols-2 gap-4">
// // //                       <div>
// // //                         <p className="text-sm text-gray-600">
// // //                           Platform: {course.platform || 'N/A'}
// // //                         </p>
// // //                         {/* Removed status display */}
// // //                       </div>
// // //                       <div>
// // //                         {course.link && (
// // //                           <a
// // //                             href={course.link}
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-blue-600 hover:underline"
// // //                           >
// // //                             Course Link
// // //                           </a>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <div className="text-center py-4 text-gray-500">
// // //                   No courses registered
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ) : (
// // //             <div className="space-y-4">
// // //               {student.certificates?.length > 0 ? (
// // //                 student.certificates.map((cert: any, index: number) => (
// // //                   <div key={index} className="p-4 border rounded-lg">
// // //                     <div className="flex justify-between items-center">
// // //                       <div>
// // //                         <h3 className="font-semibold">{cert.name || 'Unnamed Certificate'}</h3>
// // //                         {cert.fileUrl && (
// // //                           <a
// // //                             // Fixed certificate URL handling
// // //                             href={cert.fileUrl.startsWith('http') 
// // //                               ? cert.fileUrl 
// // //                               : `http://localhost:5000/${cert.fileUrl.replace(/\\/g, '/')}`}
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-blue-600 hover:underline"
// // //                           >
// // //                             View Certificate
// // //                           </a>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <div className="text-center py-4 text-gray-500">
// // //                   No certificates available
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export const FacultyDashboard: React.FC = () => {
// // //   const [studentsData, setStudentsData] = useState<any[]>([]);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [selectedStudent, setSelectedStudent] = useState<any>(null);

// // //   useEffect(() => {
// // //     const fetchStudentsData = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/api/faculty/students-data', {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// // //           },
// // //         });

// // //         if (response.data && Array.isArray(response.data)) {
// // //           setStudentsData(response.data);
// // //         } else {
// // //           setError("Unexpected data format received from server");
// // //         }
// // //       } catch (error: any) {
// // //         setError(error.response?.data?.message || "Failed to fetch students data");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchStudentsData();
// // //   }, []);

// // //   const filteredStudents = studentsData.filter((student) =>
// // //     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   if (loading) {
// // //     return (
// // //       <div className="text-center py-8">
// // //         <p>Loading students data...</p>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="text-center py-8">
// // //         <p className="text-red-600">{error}</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-6">
// // //       <div className="mb-6">
// // //         <div className="relative">
// // //           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //           <input
// // //             type="text"
// // //             placeholder="Search students..."
// // //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="bg-white rounded-lg shadow-md">
// // //         <div className="p-6">
// // //           <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
// // //           {filteredStudents.length > 0 ? (
// // //             <ul className="space-y-4">
// // //               {filteredStudents.map((student, index) => (
// // //                 <li key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
// // //                   <div>
// // //                     <p className="text-lg font-semibold">{student.student.name}</p>
// // //                     <p className="text-sm text-gray-500">{student.usn}</p>
// // //                   </div>
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="text-right">
// // //                       <p className="text-sm text-gray-600">
// // //                         Courses: {student.courses.length}
// // //                       </p>
// // //                       <p className="text-sm text-gray-600">
// // //                         Certificates: {student.certificates.length}
// // //                       </p>
// // //                     </div>
// // //                     <button 
// // //                       onClick={() => setSelectedStudent(student)}
// // //                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// // //                     >
// // //                       View Details
// // //                     </button>
// // //                   </div>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           ) : (
// // //             <div className="text-gray-600 text-center py-8">
// // //               No students found
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {selectedStudent && (
// // //         <StudentDetailsModal
// // //           student={selectedStudent}
// // //           onClose={() => setSelectedStudent(null)}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // import React, { useEffect, useState } from "react";
// // import { Search, X } from "lucide-react";
// // import axios from "axios";
// // import { Dialog } from "@headlessui/react";
// // import { ErrorBoundary } from "react-error-boundary";

// // interface StudentDetailsModalProps {
// //   student: any;
// //   onClose: () => void;
// // }

// // const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
// //   return (
// //     <div role="alert" className="p-4 bg-red-100 text-red-700 rounded-lg">
// //       <p>Something went wrong:</p>
// //       <pre className="mt-2">{error.message}</pre>
// //       <button 
// //         onClick={resetErrorBoundary}
// //         className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// //       >
// //         Try again
// //       </button>
// //     </div>
// //   );
// // };

// // const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
// //   const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

// //   // Debugging: Log the student data
// //   console.log("Selected Student Data:", student);

// //   if (!student) {
// //     console.error("No student data provided to modal");
// //     return null;
// //   }

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
// //         <div className="flex justify-between items-center p-6 border-b">
// //           <Dialog.Title className="text-xl font-semibold">
// //             {student.student?.name || 'Student Details'}
// //           </Dialog.Title>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// //             <X className="h-6 w-6" />
// //           </button>
// //         </div>

// //         <div className="flex-1 overflow-y-auto p-6">
// //           <div className="flex space-x-4 mb-6">
// //             <button
// //               onClick={() => setActiveTab('courses')}
// //               className={`px-4 py-2 ${
// //                 activeTab === 'courses' 
// //                   ? 'bg-blue-600 text-white' 
// //                   : 'bg-gray-100 text-gray-700'
// //               } rounded-lg transition-colors`}
// //             >
// //               Courses ({student.courses?.length || 0})
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('certificates')}
// //               className={`px-4 py-2 ${
// //                 activeTab === 'certificates' 
// //                   ? 'bg-blue-600 text-white' 
// //                   : 'bg-gray-100 text-gray-700'
// //               } rounded-lg transition-colors`}
// //             >
// //               Certificates ({student.certificates?.length || 0})
// //             </button>
// //           </div>

// //           {activeTab === 'courses' ? (
// //             <div className="space-y-4">
// //               {student.courses?.length > 0 ? (
// //                 student.courses.map((course: any, index: number) => (
// //                   <div key={index} className="p-4 border rounded-lg">
// //                     <h3 className="font-semibold text-lg">{course.title || 'Untitled Course'}</h3>
// //                     <div className="mt-2 grid grid-cols-2 gap-4">
// //                       <div>
// //                         <p className="text-sm text-gray-600">
// //                           Platform: {course.platform || 'N/A'}
// //                         </p>
// //                       </div>
// //                       <div>
// //                         {course.link && (
// //                           <a
// //                             href={course.link}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="text-blue-600 hover:underline"
// //                           >
// //                             Course Link
// //                           </a>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="text-center py-4 text-gray-500">
// //                   No courses registered
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="space-y-4">
// //               {student.certificates?.length > 0 ? (
// //                 student.certificates.map((cert: any, index: number) => (
// //                   <div key={index} className="p-4 border rounded-lg">
// //                     <div className="flex justify-between items-center">
// //                       <div>
// //                         <h3 className="font-semibold">{cert.name || 'Unnamed Certificate'}</h3>
// //                         {cert.fileUrl && (
// //                           <a
// //                           href={cert.fileUrl?.startsWith('http') 
// //                             ? cert.fileUrl 
// //                             : `http://localhost:5000/${cert.fileUrl?.replace(/\\/g, '/')}`}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="text-blue-600 hover:underline"
// //                           onClick={(e) => {
// //                             if (!cert.fileUrl) {
// //                               e.preventDefault();
// //                               alert("Certificate URL is missing");
// //                             }
// //                           }}
// //                         >
// //                           View Certificate
// //                         </a>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="text-center py-4 text-gray-500">
// //                   No certificates available
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export const FacultyDashboard: React.FC = () => {
// //   const [studentsData, setStudentsData] = useState<any[]>([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [selectedStudent, setSelectedStudent] = useState<any>(null);

// //   useEffect(() => {
// //     const fetchStudentsData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/faculty/students-data', {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// //           },
// //         });

// //         console.log("API Response:", response.data); // Debugging

// //         if (response.data && Array.isArray(response.data)) {
// //           setStudentsData(response.data);
// //         } else {
// //           setError("Unexpected data format received from server");
// //         }
// //       } catch (error: any) {
// //         console.error("API Error:", error); // Debugging
// //         setError(error.response?.data?.message || "Failed to fetch students data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchStudentsData();
// //   }, []);

// //   const filteredStudents = studentsData.filter((student) =>
// //     student.student.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   if (loading) {
// //     return (
// //       <div className="text-center py-8">
// //         <p>Loading students data...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="text-center py-8">
// //         <p className="text-red-600">{error}</p>
// //       </div>
// //     );
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
// //             <ul className="space-y-4">
// //               {filteredStudents.map((student, index) => (
// //                 <li key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
// //                   <div>
// //                     <p className="text-lg font-semibold">{student.student.name}</p>
// //                     <p className="text-sm text-gray-500">{student.usn}</p>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <div className="text-right">
// //                       <p className="text-sm text-gray-600">
// //                         Courses: {student.courses.length}
// //                       </p>
// //                       <p className="text-sm text-gray-600">
// //                         Certificates: {student.certificates.length}
// //                       </p>
// //                     </div>
// //                     <button 
// //                       onClick={() => setSelectedStudent(student)}
// //                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //                     >
// //                       View Details
// //                     </button>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <div className="text-gray-600 text-center py-8">
// //               No students found
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {selectedStudent && (
// //         <StudentDetailsModal
// //           student={selectedStudent}
// //           onClose={() => setSelectedStudent(null)}
// //         />
// //       )}
// //     </div>
// //   );
// // };


// import React, { useEffect, useState } from "react";
// import { Search, X } from "lucide-react";
// import axios from "axios";
// import { Dialog } from "@headlessui/react";

// interface StudentDetailsModalProps {
//   student: any;
//   onClose: () => void;
// }

// const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
//   const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
//         <div className="flex justify-between items-center p-6 border-b">
//           <Dialog.Title className="text-xl font-semibold">
//             {student.student.name}'s Details
//           </Dialog.Title>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="flex space-x-4 mb-6">
//             <button
//               onClick={() => setActiveTab('courses')}
//               className={`px-4 py-2 ${
//                 activeTab === 'courses' 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-gray-100 text-gray-700'
//               } rounded-lg`}
//             >
//               Courses ({student.courses.length})
//             </button>
//             <button
//               onClick={() => setActiveTab('certificates')}
//               className={`px-4 py-2 ${
//                 activeTab === 'certificates' 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-gray-100 text-gray-700'
//               } rounded-lg`}
//             >
//               Certificates ({student.certificates.length})
//             </button>
//           </div>

//           {activeTab === 'courses' ? (
//             <div className="space-y-4">
//               {student.courses.map((course: any, index: number) => (
//                 <div key={index} className="p-4 border rounded-lg">
//                   <h3 className="font-semibold text-lg">{course.title}</h3>
//                   <div className="mt-2 grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-600">
//                         Platform: {course.platform}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Status: {course.status}
//                       </p>
//                     </div>
//                     <div>
//                       <a
//                         href={course.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline"
//                       >
//                         Course Link
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {student.certificates.map((cert: any, index: number) => (
//                 <div key={index} className="p-4 border rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="font-semibold">{cert.name}</h3>
//                       <a
//                         href={cert.fileUrl.startsWith('http') 
//                           ? cert.fileUrl 
//                           : `http://localhost:5000/${cert.fileUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline"
//                       >
//                         View Certificate
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const FacultyDashboard: React.FC = () => {
//   const [studentsData, setStudentsData] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedStudent, setSelectedStudent] = useState<any>(null);

//   useEffect(() => {
//     const fetchStudentsData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/faculty/students-data', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });

//         if (response.data && Array.isArray(response.data)) {
//           setStudentsData(response.data);
//         } else {
//           setError("Unexpected data format received from server");
//         }
//       } catch (error: any) {
//         setError(error.response?.data?.message || "Failed to fetch students data");
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

//   if (error) {
//     return (
//       <div className="text-center py-8">
//         <p className="text-red-600">{error}</p>
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
//                 <li key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
//                   <div>
//                     <p className="text-lg font-semibold">{student.student.name}</p>
//                     <p className="text-sm text-gray-500">{student.usn}</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="text-right">
//                       <p className="text-sm text-gray-600">
//                         Courses: {student.courses.length}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Certificates: {student.certificates.length}
//                       </p>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedStudent(student)}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       View Details
//                     </button>
//                   </div>
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

//       {selectedStudent && (
//         <StudentDetailsModal
//           student={selectedStudent}
//           onClose={() => setSelectedStudent(null)}
//         />
//       )}
//     </div>
//   );
// };



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Award, BarChart, Book, Search, User } from "lucide-react";
import StudentDetailsModal from "./StudentDetailsModal";
import { motion } from "framer-motion";

export const FacultyDashboard: React.FC = () => {
  const [studentsData, setStudentsData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/faculty/students-data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (Array.isArray(response.data)) {
          setStudentsData(response.data);
        } else {
          setError("Unexpected data format received from server");
        }
      } catch (error: any) {
        setError(error.response?.data?.message || "Failed to fetch students data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentsData();
  }, []);

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

  // return (
  //   <div className="p-6">
  //     {/* Search */}
  //     <div className="mb-6">
  //       <div className="relative">
  //         <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
  //         <input
  //           type="text"
  //           placeholder="Search students..."
  //           className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
  //           value={searchTerm}
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //         />
  //       </div>
  //     </div>

  //     {/* Students List */}
  //     <div className="bg-white rounded-lg shadow-md">
  //       <div className="p-6">
  //         <h2 className="text-2xl font-bold mb-4">Students Overview</h2>
  //         {filteredStudents.length > 0 ? (
  //           <ul className="space-y-4">
  //             {filteredStudents.map((student) => (
  //               <li
  //                 key={student.student._id}
  //                 className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
  //               >
  //                 <div>
  //                   <p className="text-lg font-semibold">{student.student.name}</p>
  //                   <p className="text-sm text-gray-500">{student.usn}</p>
  //                 </div>
  //                 <div className="flex items-center gap-4">
  //                   <div className="text-right">
  //                     <p className="text-sm text-gray-600">
  //                       Courses: {student.courses.length}
  //                     </p>
  //                     <p className="text-sm text-gray-600">
  //                       Certificates: {student.certificates.length}
  //                     </p>
  //                   </div>
  //                   <button
  //                     onClick={() => setSelectedStudent(student)}
  //                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  //                   >
  //                     View Details
  //                   </button>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         ) : (
  //           <div className="text-gray-600 text-center py-8">No students found</div>
  //         )}
  //       </div>
  //     </div>
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-12 pr-6 py-3.5 border-0 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Student Overview</h2>
              <div className="flex items-center space-x-4">
                <Award className="h-6 w-6 text-purple-600" />
                <span className="text-lg font-semibold">{studentsData.length} Students</span>
              </div>
            </div>

            {filteredStudents.length > 0 ? (
              <div className="space-y-6">
                {filteredStudents.map((student) => (
                  <motion.div
                    key={student.student._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group relative p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                          {student.student.name[0]}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{student.student.name}</h3>
                          <p className="text-gray-600">{student.usn}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="flex items-center space-x-2 text-blue-600">
                            <Book className="h-5 w-5" />
                            <span className="font-semibold">{student.courses.length}</span>
                          </div>
                          <span className="text-sm text-gray-500">Courses</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-2 text-purple-600">
                            <BarChart className="h-5 w-5" />
                            <span className="font-semibold">{student.certificates.length}</span>
                          </div>
                          <span className="text-sm text-gray-500">Certificates</span>
                        </div>
                        <button
                          onClick={() => setSelectedStudent(student)}
                          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500">
                <User className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-xl">No students found</p>
              </div>
            )}
          </div>
        </motion.div>


      {/* Modal for student details */}
      {selectedStudent && (
        <StudentDetailsModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
    </div>
  );
};

//export default FacultyDashboard;
