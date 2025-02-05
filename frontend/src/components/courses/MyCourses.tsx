// // // // // import React, { useState } from 'react';
// // // // // import { motion } from 'framer-motion';
// // // // // import { Plus, Edit2, Trash2, Upload } from 'lucide-react';
// // // // // import { AddCourseForm } from './AddCourseForm';
// // // // // import { UploadCertificateForm } from './UploadCertificateForm';
// // // // // import { EditCourseForm } from './EditCourseForm';

// // // // // export const MyCourses: React.FC = () => {
// // // // //   const [showAddForm, setShowAddForm] = useState(false);
// // // // //   const [showUploadForm, setShowUploadForm] = useState(false);
// // // // //   const [showEditForm, setShowEditForm] = useState(false);
// // // // //   const [selectedCourse, setSelectedCourse] = useState<any>(null);
// // // // //   const [courses, setCourses] = useState(() => {
// // // // //     const savedCourses = localStorage.getItem('userCourses');
// // // // //     return savedCourses ? JSON.parse(savedCourses) : [];
// // // // //   });

// // // // //   const handleAddCourse = (courseData: any) => {
// // // // //     const newCourses = [...courses, { id: Date.now().toString(), ...courseData }];
// // // // //     setCourses(newCourses);
// // // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // // //   };

// // // // //   const handleEditCourse = (courseId: string, updatedData: any) => {
// // // // //     const newCourses = courses.map((course) => 
// // // // //       course.id === courseId ? { ...course, ...updatedData } : course
// // // // //     );
// // // // //     setCourses(newCourses);
// // // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // // //   };

// // // // //   const handleDeleteCourse = (id: string) => {
// // // // //     const newCourses = courses.filter(course=> course.id !== id);
// // // // //     setCourses(newCourses);
// // // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // // //   };

// // // // //   const handleUploadCertificate = (courseId: string, certificateData: any) => {
// // // // //     const newCourses = courses.map(course => 
// // // // //       course.id === courseId 
// // // // //         ? { ...course, ...certificateData }
// // // // //         : course
// // // // //     );
// // // // //     setCourses(newCourses);
// // // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-2xl font-bold">My Courses</h2>
// // // // //         <motion.button
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //           onClick={() => setShowAddForm(true)}
// // // // //           className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // // //         >
// // // // //           <Plus className="h-5 w-5" />
// // // // //           <span>Add Course</span>
// // // // //         </motion.button>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {courses.map((course) => (
// // // // //           <motion.div
// // // // //             key={course.id}
// // // // //             layout
// // // // //             className="bg-white rounded-lg shadow-md p-6"
// // // // //           >
// // // // //             <div className="flex justify-between items-start mb-4">
// // // // //               <h3 className="text-lg font-semibold">{course.name}</h3>
// // // // //               <div className="flex space-x-2">
// // // // //                 <button 
// // // // //                   onClick={() => {
// // // // //                     setSelectedCourse(course);
// // // // //                     setShowEditForm(true);
// // // // //                   }}
// // // // //                   className="text-gray-400 hover:text-blue-600"
// // // // //                 >
// // // // //                   <Edit2 className="h-5 w-5" />
// // // // //                 </button>
// // // // //                 <button 
// // // // //                   onClick={() => handleDeleteCourse(course.id)}
// // // // //                   className="text-gray-400 hover:text-red-600"
// // // // //                 >
// // // // //                   <Trash2 className="h-5 w-5" />
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <div className="space-y-2 text-gray-600">
// // // // //               <p>Platform: {course.platform}</p>
// // // // //               <p>Duration: {course.duration}</p>
// // // // //               <p>Fee: ₹{course.fee}</p>
// // // // //               <a 
// // // // //                 href={course.link}
// // // // //                 target="_blank"
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="text-blue-600 hover:underline"
// // // // //               >
// // // // //                 Course Link
// // // // //               </a>
// // // // //             </div>

// // // // //             {!course.certificateLink && (
// // // // //               <motion.button
// // // // //                 whileHover={{ scale: 1.02 }}
// // // // //                 onClick={() => {
// // // // //                   setSelectedCourse(course);
// // // // //                   setShowUploadForm(true);
// // // // //                 }}
// // // // //                 className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-700"
// // // // //               >
// // // // //                 <Upload className="h-4 w-4" />
// // // // //                 <span>Upload Certificate</span>
// // // // //               </motion.button>
// // // // //             )}
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {showAddForm && (
// // // // //         <AddCourseForm
// // // // //           onClose={() => setShowAddForm(false)}
// // // // //           onSubmit={handleAddCourse}
// // // // //         />
// // // // //       )}

// // // // //       {showEditForm && selectedCourse && (
// // // // //         <EditCourseForm
// // // // //           course={selectedCourse}
// // // // //           onClose={() => {
// // // // //             setShowEditForm(false);
// // // // //             setSelectedCourse(null);
// // // // //           }}
// // // // //           onSubmit={(data) => {
// // // // //             handleEditCourse(selectedCourse.id, data);
// // // // //             setShowEditForm(false);
// // // // //             setSelectedCourse(null);
// // // // //           }}
// // // // //         />
// // // // //       )}

// // // // //       {showUploadForm && selectedCourse && (
// // // // //         <UploadCertificateForm
// // // // //           course={selectedCourse}
// // // // //           onClose={() => {
// // // // //             setShowUploadForm(false);
// // // // //             setSelectedCourse(null);
// // // // //           }}
// // // // //           onSubmit={(data) => handleUploadCertificate(selectedCourse.id, data)}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // import React, { useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Plus, Edit2, Trash2, Upload } from 'lucide-react';
// // // // import { AddCourseForm } from './AddCourseForm';
// // // // import { UploadCertificateForm } from './UploadCertificateForm';
// // // // import { EditCourseForm } from './EditCourseForm';

// // // // export const MyCourses: React.FC = () => {
// // // //   const [showAddForm, setShowAddForm] = useState(false);
// // // //   const [showUploadForm, setShowUploadForm] = useState(false);
// // // //   const [showEditForm, setShowEditForm] = useState(false);
// // // //   const [selectedCourse, setSelectedCourse] = useState<any>(null);
// // // //   const [courses, setCourses] = useState(() => {
// // // //     const savedCourses = localStorage.getItem('userCourses');
// // // //     return savedCourses ? JSON.parse(savedCourses) : [];
// // // //   });

// // // //   const handleAddCourse = (courseData: any) => {
// // // //     const newCourses = [...courses, { id: Date.now().toString(), ...courseData }];
// // // //     setCourses(newCourses);
// // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // //   };

// // // //   const handleEditCourse = (courseId: string, updatedData: any) => {
// // // //     const newCourses = courses.map((course: { id: string; }) => 
// // // //       course.id === courseId ? { ...course, ...updatedData } : course
// // // //     );
// // // //     setCourses(newCourses);
// // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // //   };

// // // //   const handleDeleteCourse = (id: any) => {
// // // //     const newCourses = courses.filter((course: { id: string; }) => course.id !== id);
// // // //     setCourses(newCourses);
// // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // //   };

// // // //   const handleUploadCertificate = (courseId: string, certificateData: any) => {
// // // //     const newCourses = courses.map((course: { id: string; }) => 
// // // //       course.id === courseId 
// // // //         ? { ...course, ...certificateData }
// // // //         : course
// // // //     );
// // // //     setCourses(newCourses);
// // // //     localStorage.setItem('userCourses', JSON.stringify(newCourses));
// // // //   };

// // // //   return (
// // // //     <div className="p-6">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-2xl font-bold">My Courses</h2>
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => setShowAddForm(true)}
// // // //           className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // //         >
// // // //           <Plus className="h-5 w-5" />
// // // //           <span>Add Course</span>
// // // //         </motion.button>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {courses.map((course: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; platform: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; fee: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; link: string | undefined; certificateLink: any; }) => (
// // // //           <motion.div
// // // //             key={course.id}
// // // //             layout
// // // //             className="bg-white rounded-lg shadow-md p-6"
// // // //           >
// // // //             <div className="flex justify-between items-start mb-4">
// // // //               <h3 className="text-lg font-semibold">{course.name}</h3>
// // // //               <div className="flex space-x-2">
// // // //                 <button 
// // // //                   onClick={() => {
// // // //                     setSelectedCourse(course);
// // // //                     setShowEditForm(true);
// // // //                   }}
// // // //                   className="text-gray-400 hover:text-blue-600"
// // // //                 >
// // // //                   <Edit2 className="h-5 w-5" />
// // // //                 </button>
// // // //                 <button 
// // // //                   onClick={() => handleDeleteCourse(course.id)}
// // // //                   className="text-gray-400 hover:text-red-600"
// // // //                 >
// // // //                   <Trash2 className="h-5 w-5" />
// // // //                 </button>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="space-y-2 text-gray-600">
// // // //               <p>Platform: {course.platform}</p>
// // // //               <p>Duration: {course.duration}</p>
// // // //               <p>Fee: ₹{course.fee}</p>
// // // //               <a 
// // // //                 href={course.link}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="text-blue-600 hover:underline"
// // // //               >
// // // //                 Course Link
// // // //               </a>
// // // //             </div>

// // // //             {!course.certificateLink && (
// // // //               <motion.button
// // // //                 whileHover={{ scale: 1.02 }}
// // // //                 onClick={() => {
// // // //                   setSelectedCourse(course);
// // // //                   setShowUploadForm(true);
// // // //                 }}
// // // //                 className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-700"
// // // //               >
// // // //                 <Upload className="h-4 w-4" />
// // // //                 <span>Upload Certificate</span>
// // // //               </motion.button>
// // // //             )}
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {showAddForm && (
// // // //         <AddCourseForm
// // // //           onClose={() => setShowAddForm(false)}
// // // //           onSubmit={handleAddCourse}
// // // //         />
// // // //       )}

// // // //       {showEditForm && selectedCourse && (
// // // //         <EditCourseForm
// // // //           course={selectedCourse}
// // // //           onClose={() => {
// // // //             setShowEditForm(false);
// // // //             setSelectedCourse(null);
// // // //           }}
// // // //           onSubmit={(data) => {
// // // //             handleEditCourse(selectedCourse.id, data);
// // // //             setShowEditForm(false);
// // // //             setSelectedCourse(null);
// // // //           }}
// // // //         />
// // // //       )}

// // // //       {showUploadForm && selectedCourse && (
// // // //         <UploadCertificateForm
// // // //           course={selectedCourse}
// // // //           onClose={() => {
// // // //             setShowUploadForm(false);
// // // //             setSelectedCourse(null);
// // // //           }}
// // // //           onSubmit={(data) => handleUploadCertificate(selectedCourse.id, data)}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };



// // // import React, { useState, useEffect } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Plus, Edit2, Trash2, Upload } from 'lucide-react';
// // // import { AddCourseForm } from './AddCourseForm';
// // // import { UploadCertificateForm } from './UploadCertificateForm';
// // // import { EditCourseForm } from './EditCourseForm';

// // // export const MyCourses: React.FC = () => {
// // //   const [showAddForm, setShowAddForm] = useState(false);
// // //   const [showUploadForm, setShowUploadForm] = useState(false);
// // //   const [showEditForm, setShowEditForm] = useState(false);
// // //   const [selectedCourse, setSelectedCourse] = useState<any>(null);
// // //   const [courses, setCourses] = useState<any[]>([]);

// // //   // Fetch courses from the backend
// // //   const fetchCourses = async () => {
// // //     try {
// // //       const response = await fetch('/api/courses', {
// // //         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
// // //       });
// // //       const data = await response.json();
// // //       setCourses(data);
// // //     } catch (error) {
// // //       console.error('Error fetching courses:', error);
// // //     }
// // //   };

// // //   // Add a new course
// // //   const handleAddCourse = async (courseData: any) => {
// // //     try {
// // //       const response = await fetch('/api/courses', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// // //         },
// // //         body: JSON.stringify(courseData),
// // //       });

// // //       if (response.ok) {
// // //         const newCourse = await response.json();
// // //         setCourses((prev) => [...prev, newCourse]);
// // //       } else {
// // //         console.error('Error adding course');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error adding course:', error);
// // //     }
// // //   };

// // //   // Edit an existing course
// // //   const handleEditCourse = async (courseId: string, updatedData: any) => {
// // //     try {
// // //       const response = await fetch(`/api/courses/${courseId}`, {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
// // //         },
// // //         body: JSON.stringify(updatedData),
// // //       });

// // //       if (response.ok) {
// // //         const updatedCourse = await response.json();
// // //         setCourses((prev) =>
// // //           prev.map((course) => (course.id === courseId ? updatedCourse : course))
// // //         );
// // //       } else {
// // //         console.error('Error updating course');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error updating course:', error);
// // //     }
// // //   };

// // //   // Delete a course
// // //   const handleDeleteCourse = async (courseId: string) => {
// // //     try {
// // //       const response = await fetch(`/api/courses/${courseId}`, {
// // //         method: 'DELETE',
// // //         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
// // //       });

// // //       if (response.ok) {
// // //         setCourses((prev) => prev.filter((course) => course.id !== courseId));
// // //       } else {
// // //         console.error('Error deleting course');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error deleting course:', error);
// // //     }
// // //   };

// // //   // Upload a certificate
// // //   const handleUploadCertificate = (courseId: string, certificateData: any) => {
// // //     // Certificate upload logic here (if required)
// // //   };

// // //   useEffect(() => {
// // //     fetchCourses();
// // //   }, []);

// // //   return (
// // //     <div className="p-6">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="text-2xl font-bold">My Courses</h2>
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={() => setShowAddForm(true)}
// // //           className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // //         >
// // //           <Plus className="h-5 w-5" />
// // //           <span>Add Course</span>
// // //         </motion.button>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {courses.map((course) => (
// // //           <motion.div key={course.id} layout className="bg-white rounded-lg shadow-md p-6">
// // //             <div className="flex justify-between items-start mb-4">
// // //               <h3 className="text-lg font-semibold">{course.title}</h3>
// // //               <div className="flex space-x-2">
// // //                 <button
// // //                   onClick={() => {
// // //                     setSelectedCourse(course);
// // //                     setShowEditForm(true);
// // //                   }}
// // //                   className="text-gray-400 hover:text-blue-600"
// // //                 >
// // //                   <Edit2 className="h-5 w-5" />
// // //                 </button>
// // //                 <button
// // //                   onClick={() => handleDeleteCourse(course.id)}
// // //                   className="text-gray-400 hover:text-red-600"
// // //                 >
// // //                   <Trash2 className="h-5 w-5" />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div className="space-y-2 text-gray-600">
// // //               <p>Platform: {course.platform}</p>
// // //               <p>Duration: {course.duration}</p>
// // //               <p>Fee: ₹{course.fee}</p>
// // //               <a
// // //                 href={course.link}
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-blue-600 hover:underline"
// // //               >
// // //                 Course Link
// // //               </a>
// // //             </div>

// // //             {!course.certificateLink && (
// // //               <motion.button
// // //                 whileHover={{ scale: 1.02 }}
// // //                 onClick={() => {
// // //                   setSelectedCourse(course);
// // //                   setShowUploadForm(true);
// // //                 }}
// // //                 className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-700"
// // //               >
// // //                 <Upload className="h-4 w-4" />
// // //                 <span>Upload Certificate</span>
// // //               </motion.button>
// // //             )}
// // //           </motion.div>
// // //         ))}
// // //       </div>

// // //       {showAddForm && (
// // //         <AddCourseForm
// // //           onClose={() => setShowAddForm(false)}
// // //           onCourseAdded={(courseData: any) => {
// // //             handleAddCourse(courseData);
// // //             setShowAddForm(false);
// // //           }}
// // //         />
// // //       )}

// // //       {showEditForm && selectedCourse && (
// // //         <EditCourseForm
// // //           course={selectedCourse}
// // //           onClose={() => {
// // //             setShowEditForm(false);
// // //             setSelectedCourse(null);
// // //           }}
// // //           onSubmit={(data) => {
// // //             handleEditCourse(selectedCourse.id, data);
// // //             setShowEditForm(false);
// // //             setSelectedCourse(null);
// // //           }}
// // //         />
// // //       )}

// // //       {showUploadForm && selectedCourse && (
// // //         <UploadCertificateForm
// // //           course={selectedCourse}
// // //           onClose={() => {
// // //             setShowUploadForm(false);
// // //             setSelectedCourse(null);
// // //           }}
// // //           onSubmit={(data) => handleUploadCertificate(selectedCourse.id, data)}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { motion } from 'framer-motion';
// // import { X } from 'lucide-react';

// // interface AddCourseFormProps {
// //   onClose: () => void;
// //   onCourseAdded: (courseData: any) => void; // Corrected callback type
// // }

// // interface CourseFormData {
// //   name: string;
// //   platform: string;
// //   duration: string;
// //   link: string;
// //   fee: number;
// // }

// // export const AddCourseForm: React.FC<AddCourseFormProps> = ({ onClose, onCourseAdded }) => {
// //   const [formData, setFormData] = useState<CourseFormData>({
// //     name: '',
// //     platform: '',
// //     duration: '',
// //     link: '',
// //     fee: 0,
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setErrorMessage('');

// //     try {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         throw new Error('User is not authenticated');
// //       }

// //       // Send a POST request to the backend to add the course
// //       const response = await axios.post(
// //         '/api/courses',
// //         {
// //           title: formData.name,
// //           platform: formData.platform,
// //           duration: formData.duration,
// //           link: formData.link,
// //           fee: formData.fee,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       // Call the callback to refresh the course list with the added course
// //       onCourseAdded(response.data);
// //       onClose();
// //     } catch (error: any) {
// //       console.error('Error adding course:', error.response?.data?.message || error.message);
// //       setErrorMessage(error.response?.data?.message || 'Failed to add course');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="bg-white rounded-lg shadow-xl w-full max-w-md"
// //       >
// //         <div className="flex items-center justify-between p-6 border-b">
// //           <h3 className="text-xl font-semibold">Add New Course</h3>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// //             <X className="h-5 w-5" />
// //           </button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
// //             <input
// //               type="text"
// //               required
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.name}
// //               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
// //             <select
// //               required
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.platform}
// //               onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
// //             >
// //               <option value="">Select Platform</option>
// //               <option value="Coursera">Coursera</option>
// //               <option value="Udemy">Udemy</option>
// //               <option value="Infosys Springboard">Infosys Springboard</option>
// //               <option value="Scaler">Scaler</option>
// //               <option value="NPTEL">NPTEL</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
// //             <input
// //               type="text"
// //               required
// //               placeholder="e.g., 8 weeks"
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.duration}
// //               onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Course Link</label>
// //             <input
// //               type="url"
// //               required
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.link}
// //               onChange={(e) => setFormData({ ...formData, link: e.target.value })}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Fee (₹)</label>
// //             <input
// //               type="number"
// //               required
// //               min="0"
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.fee}
// //               onChange={(e) => setFormData({ ...formData, fee: Number(e.target.value) })}
// //             />
// //           </div>

// //           {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

// //           <div className="flex justify-end space-x-4 mt-6">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="px-4 py-2 text-gray-600 hover:text-gray-800"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               disabled={isSubmitting}
// //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //             >
// //               {isSubmitting ? 'Adding...' : 'Add Course'}
// //             </button>
// //           </div>
// //         </form>
// //       </motion.div>
// //     </div>
// //   );
// // };




// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Plus, Edit2, Trash2, Upload } from 'lucide-react';
// import { AddCourseForm } from './AddCourseForm';
// import { UploadCertificateForm } from './UploadCertificateForm';
// import { EditCourseForm } from './EditCourseForm';

// export const MyCourses: React.FC = () => {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showUploadForm, setShowUploadForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState<any>(null);
//   const [courses, setCourses] = useState<any[]>([]);
//   //const [loading, setLoading] = useState(true);

//   // Fetch courses from the backend
//   const fetchCourses = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/courses', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       const data = await response.json();
//       setCourses(data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

  // // Add a new course
  // const handleAddCourse = async (courseData: any) => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/courses', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //       body: JSON.stringify(courseData),
  //     });

  //     if (response.ok) {
  //       const newCourse = await response.json();
  //       setCourses((prev) => [...prev, newCourse]);
  //     } else {
  //       console.error('Error adding course');
  //     }
  //   } catch (error) {
  //     console.error('Error adding course:', error);
  //   }
  // };

//   // Edit an existing course
//   const handleEditCourse = async (courseId: string, updatedData: any) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(updatedData),
//       });

//       if (response.ok) {
//         const {course: updatedCourse } = await response.json();
//         setCourses((prev) =>
//           prev.map((course) => (course._id === courseId ? updatedCourse : course))
//         );
//       } else {
//         const errorData = await response.json();
//         console.error('Error updating course:', errorData.message || response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   // Delete a course
//   const handleDeleteCourse = async (courseId: string) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });

//       if (response.ok) {
//         setCourses((prev) => prev.filter((course) => course.id !== courseId));
//       } else {
//         console.error('Error deleting course');
//       }
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   // Upload a certificate
//   const handleUploadCertificate = (courseId: string, certificateData: any) => {
//     // Certificate upload logic here
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">My Courses</h2>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setShowAddForm(true)}
//           className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           <Plus className="h-5 w-5" />
//           <span>Add Course</span>
//         </motion.button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <motion.div key={course.id} layout className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => {
//                     setSelectedCourse(course);
//                     setShowEditForm(true);
//                   }}
//                   className="text-gray-400 hover:text-blue-600"
//                 >
//                   <Edit2 className="h-5 w-5" />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteCourse(course.id)}
//                   className="text-gray-400 hover:text-red-600"
//                 >
//                   <Trash2 className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-2 text-gray-600">
//               <p>Platform: {course.platform}</p>
//               <p>Duration: {course.duration}</p>
//               <p>Fee: ₹{course.fee}</p>
//               <a
//                 href={course.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Course Link
//               </a>
//             </div>

//             {!course.certificateLink && (
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 onClick={() => {
//                   setSelectedCourse(course);
//                   setShowUploadForm(true);
//                 }}
//                 className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-700"
//               >
//                 <Upload className="h-4 w-4" />
//                 <span>Upload Certificate</span>
//               </motion.button>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {showAddForm && (
//         <AddCourseForm
//           onClose={() => setShowAddForm(false)}
//           onCourseAdded={(courseData: any) => {
//             handleAddCourse(courseData);
//             setShowAddForm(false);
//           }}
//         />
//       )}

//       {showEditForm && selectedCourse && (
//         <EditCourseForm
//           course={selectedCourse}
//           onClose={() => {
//             setShowEditForm(false);
//             setSelectedCourse(null);
//           } }
//           onSubmit={(data: any) => {
//             handleEditCourse(selectedCourse.id, data);
//             setShowEditForm(true);
//             setSelectedCourse(courses);
//           } }       />
//       )}

//       {showUploadForm && selectedCourse && (
//         <UploadCertificateForm
//           course={selectedCourse}
//           onClose={() => {
//             setShowUploadForm(false);
//             setSelectedCourse(null);
//           }}
//           onSubmit={(data) => handleUploadCertificate(selectedCourse.id, data)}
//         />
//       )}
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Upload } from 'lucide-react';
import { AddCourseForm } from './AddCourseForm';
import { UploadCertificateForm } from './UploadCertificateForm';
import { EditCourseForm } from './EditCourseForm';

export const MyCourses: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);

  // Fetch courses from the backend
  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Add a new course

    const handleAddCourse = async (courseData: any) => {
      try {
        const response = await fetch('http://localhost:5000/api/courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(courseData),
        });
  
        if (response.ok) {
          await fetchCourses();
          const newCourse = await response.json();
          setCourses((prev) => [...prev, newCourse]);
          
        } else {
          console.error('Error adding course');
        }
        await fetchCourses();
      } catch (error) {
        console.error('Error adding course:', error);
      }
    };
  
  // Edit an existing course
  const handleEditCourse = async (courseId: string, updatedData: any) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        setCourses((prev) =>
          prev.map((course) => (course._id === courseId ? { ...course, ...updatedCourse } : course))
        );
        await fetchCourses();
        setShowEditForm(false);
        setSelectedCourse(null);
      } else {
        const errorData = await response.json();
        console.error('Error updating course:', errorData.message || response.statusText);
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  // Delete a course
  const handleDeleteCourse = async (courseId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (response.ok) {
        setCourses((prev) => prev.filter((course) => course._id !== courseId));
      } else {
        console.error('Error deleting course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUploadCertificate = async (courseId: string, certificateData: FormData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/certificates/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          // Don't set Content-Type header when sending FormData
        },
        body: certificateData,
      });
  
      if (response.ok) {
        const updatedCertificate = await response.json();
        console.log("Upload successful:", updatedCertificate);
        alert("Certificate uploaded successfully.");
        setCourses((prev) =>
          prev.map((course) =>
            course._id === courseId ? { 
              ...course, 
              certificateLink: updatedCertificate.fileUrl,
              certificateId: updatedCertificate._id // Store the certificate ID for deletion
            } : course
          )
        );
        await fetchCourses();
        setShowUploadForm(false);
        setSelectedCourse(null);
      } else {
        console.error("Failed to upload certificate. Status:", response.status);
        const errorDetails = await response.text();
        console.error("Error details:", errorDetails);
        alert("Failed to upload certificate.");
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred while uploading the certificate.");
    }
  };

  const handleDeleteCertificate = async (certificateId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/certificates/${certificateId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
  
      if (response.ok) {
        alert("Certificate deleted successfully.");
        await fetchCourses();
      } else {
        console.error("Error deleting certificate.");
      }
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };
  
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Courses</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add Course</span>
        </motion.button>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <motion.div key={course._id} layout className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowEditForm(true);
                  }}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className="text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-gray-600">
              <p>Platform: {course.platform}</p>
              <p>Duration: {course.duration}</p>
              <p>Fee: ₹{course.fee}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Course Link
              </a>
            </div>

            {/* Certificate Actions */}
            {course.certificateLink ? (
              <div className="mt-4 space-y-2">
                <a
                  href={`http://localhost:5000/uploads/${course.certificateLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  View Certificate
                </a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleDeleteCertificate(course.certificateId)}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Certificate</span>
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedCourse(course);
                  setShowUploadForm(true);
                }}
                className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-700"
              >
                <Upload className="h-4 w-4" />
                <span>Upload Certificate</span>
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>


        
      {/* Modals for Add, Edit, and Upload */}
      {showAddForm && (
        <AddCourseForm
          onClose={() => setShowAddForm(false)}
          onCourseAdded={(courseData: any) => {
            handleAddCourse(courseData);
            setShowAddForm(false);
          }}
        />
      )}

      {showEditForm && selectedCourse && (
        <EditCourseForm
          course={selectedCourse}
          onClose={() => {
            setShowEditForm(false);
            setSelectedCourse(null);
          }}
          onSubmit={(data: any) => {
            handleEditCourse(selectedCourse._id, data);
          }}
        />
      )}

      {showUploadForm && selectedCourse && (
        <UploadCertificateForm
          course={selectedCourse}
          onClose={() => {
            setShowUploadForm(false);
            setSelectedCourse(null);
          }}
          onSubmit={(formData: FormData) => handleUploadCertificate(selectedCourse._id, formData)}
        />
      )}
    </div>
  );
};
