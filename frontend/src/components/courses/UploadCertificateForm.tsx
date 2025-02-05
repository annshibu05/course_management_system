// // // // import React, { useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { X, Upload } from 'lucide-react';

// // // // interface UploadCertificateFormProps {
// // // //   course: {
// // // //     id: string;
// // // //     name: string;
// // // //     platform: string;
// // // //   };
// // // //   onClose: () => void;
// // // //   onSubmit: (certificateData: CertificateFormData) => void;
// // // // }

// // // // interface CertificateFormData {
// // // //   certificateLink: string;
// // // //   certificateFile: string;
// // // // }

// // // // export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
// // // //   course,
// // // //   onClose,
// // // //   onSubmit,
// // // // }) => {
// // // //   const [formData, setFormData] = useState<CertificateFormData>({
// // // //     certificateLink: '',
// // // //     certificateFile: '',
// // // //   });

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     onSubmit(formData);
// // // //     onClose();
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // //       <motion.div
// // // //         initial={{ opacity: 0, scale: 0.9 }}
// // // //         animate={{ opacity: 1, scale: 1 }}
// // // //         className="bg-white rounded-lg shadow-xl w-full max-w-md"
// // // //       >
// // // //         <div className="flex items-center justify-between p-6 border-b">
// // // //           <h3 className="text-xl font-semibold">Upload Certificate</h3>
// // // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // // //             <X className="h-5 w-5" />
// // // //           </button>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// // // //           <div className="mb-4">
// // // //             <p className="text-gray-600">
// // // //               Course: <span className="font-medium">{course.name}</span>
// // // //             </p>
// // // //             <p className="text-gray-600">
// // // //               Platform: <span className="font-medium">{course.platform}</span>
// // // //             </p>
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // //               Certificate Link
// // // //             </label>
// // // //             <input
// // // //               type="url"
// // // //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // // //               value={formData.certificateLink}
// // // //               onChange={(e) => setFormData({ ...formData, certificateLink: e.target.value })}
// // // //               placeholder="https://..."
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // //               Upload Certificate
// // // //             </label>
// // // //             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
// // // //               <div className="space-y-1 text-center">
// // // //                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
// // // //                 <div className="flex text-sm text-gray-600">
// // // //                   <label
// // // //                     htmlFor="file-upload"
// // // //                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
// // // //                   >
// // // //                     <span>Upload a file</span>
// // // //                     <input
// // // //                       id="file-upload"
// // // //                       name="file-upload"
// // // //                       type="file"
// // // //                       className="sr-only"
// // // //                       accept=".pdf,.jpg,.jpeg,.png"
// // // //                       onChange={(e) => {
// // // //                         const file = e.target.files?.[0];
// // // //                         if (file) {
// // // //                           // TODO: Handle file upload
// // // //                           setFormData({ ...formData, certificateFile: file.name });
// // // //                         }
// // // //                       }}
// // // //                     />
// // // //                   </label>
// // // //                   <p className="pl-1">or drag and drop</p>
// // // //                 </div>
// // // //                 <p className="text-xs text-gray-500">
// // // //                   PDF, PNG, JPG up to 10MB
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex justify-end space-x-4 mt-6">
// // // //             <button
// // // //               type="button"
// // // //               onClick={onClose}
// // // //               className="px-4 py-2 text-gray-600 hover:text-gray-800"
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // // //             >
// // // //               Upload
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { X, Upload } from 'lucide-react';

// // // interface UploadCertificateFormProps {
// // //   course: {
// // //     id: string;
// // //     title: string;
// // //     platform: string;
// // //   };
// // //   onClose: () => void;
// // //   onSubmit: (certificateData: FormData) => void;
// // // }

// // // interface CertificateFormData {
// // //   certificateLink: string;
// // //   certificateFile: File | null;
// // // }

// // // export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
// // //   course,
// // //   onClose,
// // //   onSubmit,
// // // }) => {
// // //   const [formData, setFormData] = useState<CertificateFormData>({
// // //     certificateLink: '',
// // //     certificateFile: null,
// // //   });

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!formData.certificateFile) {
// // //       alert("Please select a file to upload.");
// // //       return;
// // //     }
  
// // //     const data = new FormData();
// // //     data.append("name", course.title);
// // //     data.append("courseId", course.id);
// // //     data.append("certificate", formData.certificateFile);
  
// // //     onSubmit(data);
// // //     onClose();
// // //   };
  

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.9 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         className="bg-white rounded-lg shadow-xl w-full max-w-md"
// // //       >
// // //         <div className="flex items-center justify-between p-6 border-b">
// // //           <h3 className="text-xl font-semibold">Upload Certificate</h3>
// // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // //             <X className="h-5 w-5" />
// // //           </button>
// // //         </div>

// // //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// // //           <div className="mb-4">
// // //             <p className="text-gray-600">
// // //               Course: <span className="font-medium">{course.title}</span>
// // //             </p>
// // //             <p className="text-gray-600">
// // //               Platform: <span className="font-medium">{course.platform}</span>
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // //               Certificate Link
// // //             </label>
// // //             <input
// // //               type="url"
// // //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //               value={formData.certificateLink}
// // //               onChange={(e) => setFormData({ ...formData, certificateLink: e.target.value })}
// // //               placeholder="https://..."
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // //               Upload Certificate
// // //             </label>
// // //             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
// // //               <div className="space-y-1 text-center">
// // //                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
// // //                 <div className="flex text-sm text-gray-600">
// // //                   <label
// // //                     htmlFor="file-upload"
// // //                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
// // //                   >
// // //                     <span>Upload a file</span>
// // //                     <input
// // //                       id="file-upload"
// // //                       name="file-upload"
// // //                       type="file"
// // //                       className="sr-only"
// // //                       accept=".pdf,.jpg,.jpeg,.png"
// // //                       onChange={(e) => {
// // //                         const file = e.target.files?.[0];
// // //                         if (file) {
// // //                           setFormData({ ...formData, certificateFile: file });
// // //                         }
// // //                       }}
// // //                     />
// // //                   </label>
// // //                   <p className="pl-1">or drag and drop</p>
// // //                 </div>
// // //                 <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
// // //                 <p className="mt-2 text-sm text-gray-500">
// // //                   {formData.certificateFile ? `Selected file: ${formData.certificateFile.name}` : "No file selected"}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="flex justify-end space-x-4 mt-6">
// // //             <button
// // //               type="button"
// // //               onClick={onClose}
// // //               className="px-4 py-2 text-gray-600 hover:text-gray-800"
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // //             >
// // //               Upload
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };



// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { X, Upload } from 'lucide-react';

// // // interface UploadCertificateFormProps {
// // //   course: {
// // //     _id: string;  // Changed from id to _id to match MongoDB
// // //     title: string;
// // //     platform: string;
// // //   };
// // //   onClose: () => void;
// // //   onSubmit: (certificateData: FormData) => void;
// // // }

// // // interface CertificateFormData {
// // //   certificateLink: string;
// // //   certificateFile: File | null;
// // // }

// // // export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
// // //   course,
// // //   onClose,
// // //   onSubmit,
// // // }) => {
// // //   const [formData, setFormData] = useState<CertificateFormData>({
// // //     certificateLink: '',
// // //     certificateFile: null,
// // //   });

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!formData.certificateFile) {
// // //       alert("Please select a file to upload.");
// // //       return;
// // //     }
  
// // //     const data = new FormData();
// // //     data.append("name", course.title);
// // //     data.append("courseId", course._id); // Changed from id to _id
// // //     data.append("certificateFile", formData.certificateFile); // Changed from certificate to certificateFile
  
// // //     onSubmit(data);
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.9 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         className="bg-white rounded-lg shadow-xl w-full max-w-md"
// // //       >
// // //         <div className="flex items-center justify-between p-6 border-b">
// // //           <h3 className="text-xl font-semibold">Upload Certificate</h3>
// // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // //             <X className="h-5 w-5" />
// // //           </button>
// // //         </div>

// // //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// // //           <div className="mb-4">
// // //             <p className="text-gray-600">
// // //               Course: <span className="font-medium">{course.title}</span>
// // //             </p>
// // //             <p className="text-gray-600">
// // //               Platform: <span className="font-medium">{course.platform}</span>
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // //               Upload Certificate
// // //             </label>
// // //             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
// // //               <div className="space-y-1 text-center">
// // //                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
// // //                 <div className="flex text-sm text-gray-600">
// // //                   <label
// // //                     htmlFor="file-upload"
// // //                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
// // //                   >
// // //                     <span>Upload a file</span>
// // //                     <input
// // //                       id="file-upload"
// // //                       name="file-upload"
// // //                       type="file"
// // //                       className="sr-only"
// // //                       accept=".pdf,.jpg,.jpeg,.png"
// // //                       onChange={(e) => {
// // //                         const file = e.target.files?.[0];
// // //                         if (file) {
// // //                           setFormData({ ...formData, certificateFile: file });
// // //                         }
// // //                       }}
// // //                     />
// // //                   </label>
// // //                   <p className="pl-1">or drag and drop</p>
// // //                 </div>
// // //                 <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
// // //                 <p className="mt-2 text-sm text-gray-500">
// // //                   {formData.certificateFile ? `Selected file: ${formData.certificateFile.name}` : "No file selected"}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="flex justify-end space-x-4 mt-6">
// // //             <button
// // //               type="button"
// // //               onClick={onClose}
// // //               className="px-4 py-2 text-gray-600 hover:text-gray-800"
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// // //             >
// // //               Upload
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { X, Upload } from 'lucide-react';

// // interface UploadCertificateFormProps {
// //   course: {
// //     _id: string;
// //     title: string;
// //     platform: string;
// //   };
// //   onClose: () => void;
// //   onSubmit: (certificateData: FormData) => void;
// // }

// // interface CertificateFormData {
// //   certificateLink: string;
// //   certificateFile: File | null;
// // }

// // export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
// //   course,
// //   onClose,
// //   onSubmit,
// // }) => {
// //   const [formData, setFormData] = useState<CertificateFormData>({
// //     certificateLink: '',
// //     certificateFile: null,
// //   });

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!formData.certificateFile || !formData.certificateLink) {
// //       alert("Please provide both certificate file and URL");
// //       return;
// //     }
  
// //     const data = new FormData();
// //     data.append("name", course.title);
// //     data.append("courseId", course._id);
// //     data.append("certificateFile", formData.certificateFile);
// //     data.append("certificateLink", formData.certificateLink);
  
// //     onSubmit(data);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="bg-white rounded-lg shadow-xl w-full max-w-md"
// //       >
// //         {/* Form header */}
// //         <div className="flex items-center justify-between p-6 border-b">
// //           <h3 className="text-xl font-semibold">Upload Certificate</h3>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// //             <X className="h-5 w-5" />
// //           </button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// //           {/* Course details */}
// //           <div className="mb-4">
// //             <p className="text-gray-600">
// //               Course: <span className="font-medium">{course.title}</span>
// //             </p>
// //             <p className="text-gray-600">
// //               Platform: <span className="font-medium">{course.platform}</span>
// //             </p>
// //           </div>

// //           {/* Certificate URL field */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Certificate URL
// //             </label>
// //             <input
// //               type="url"
// //               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.certificateLink}
// //               onChange={(e) => setFormData({ ...formData, certificateLink: e.target.value })}
// //               placeholder="https://..."
// //               required
// //             />
// //           </div>

// //           {/* File upload section */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">
// //               Upload Certificate
// //             </label>
// //             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
// //               <div className="space-y-1 text-center">
// //                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
// //                 <div className="flex text-sm text-gray-600">
// //                   <label
// //                     htmlFor="file-upload"
// //                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
// //                   >
// //                     <span>Upload a file</span>
// //                     <input
// //                       id="file-upload"
// //                       name="file-upload"
// //                       type="file"
// //                       className="sr-only"
// //                       accept=".pdf,.jpg,.jpeg,.png"
// //                       onChange={(e) => {
// //                         const file = e.target.files?.[0];
// //                         if (file) {
// //                           setFormData({ ...formData, certificateFile: file });
// //                         }
// //                       }}
// //                     />
// //                   </label>
// //                   <p className="pl-1">or drag and drop</p>
// //                 </div>
// //                 <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
// //                 <p className="mt-2 text-sm text-gray-500">
// //                   {formData.certificateFile ? `Selected file: ${formData.certificateFile.name}` : "No file selected"}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Form actions */}
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
// //               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //             >
// //               Upload
// //             </button>
// //           </div>
// //         </form>
// //       </motion.div>
// //     </div>
// //   );
// // };


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { X, Upload } from 'lucide-react';

// interface UploadCertificateFormProps {
//   course: {
//     _id: string;
//     title: string;
//     platform: string;
//   };
//   onClose: () => void;
//   onSubmit: (certificateData: FormData) => void;
// }

// interface CertificateFormData {
//   certificateLink: string;
//   certificateFile: File | null;
// }

// export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
//   course,
//   onClose,
//   onSubmit,
// }) => {
//   const [formData, setFormData] = useState<CertificateFormData>({
//     certificateLink: '',
//     certificateFile: null,
//   });

//   const [uploadedCertificate, setUploadedCertificate] = useState<{
//     fileName: string;
//     fileUrl: string;
//   } | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.certificateFile || !formData.certificateLink) {
//       alert('Please provide both certificate file and URL');
//       return;
//     }

//     const data = new FormData();
//     data.append('name', course.title);
//     data.append('courseId', course._id);
//     data.append('certificateFile', formData.certificateFile);
//     data.append('certificateLink', formData.certificateLink);

//     onSubmit(data);

//     // Simulate backend response for uploaded file details
//     setUploadedCertificate({
//       fileName: formData.certificateFile.name,
//       fileUrl: formData.certificateLink,
//     });

//     // Reset file input after upload
//     setFormData((prev) => ({ ...prev, certificateFile: null }));
//   };

//   const handleRemoveCertificate = () => {
//     setUploadedCertificate(null);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-lg shadow-xl w-full max-w-md"
//       >
//         {/* Form header */}
//         <div className="flex items-center justify-between p-6 border-b">
//           <h3 className="text-xl font-semibold">Upload Certificate</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {/* Course details */}
//           <div className="mb-4">
//             <p className="text-gray-600">
//               Course: <span className="font-medium">{course.title}</span>
//             </p>
//             <p className="text-gray-600">
//               Platform: <span className="font-medium">{course.platform}</span>
//             </p>
//           </div>

//           {/* Certificate URL field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Certificate URL
//             </label>
//             <input
//               type="url"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.certificateLink}
//               onChange={(e) =>
//                 setFormData({ ...formData, certificateLink: e.target.value })
//               }
//               placeholder="https://..."
//               required
//             />
//           </div>

//           {/* Uploaded Certificate Display */}
//           {uploadedCertificate && (
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Uploaded Certificate
//               </label>
//               <div className="flex items-center space-x-4 mt-2">
//                 <a
//                   href={uploadedCertificate.fileUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   {uploadedCertificate.fileName}
//                 </a>
//                 <button
//                   type="button"
//                   onClick={handleRemoveCertificate}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Remove Certificate
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* File upload section */}
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Upload Certificate
//             </label>
//             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
//               <div className="space-y-1 text-center">
//                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                 <div className="flex text-sm text-gray-600">
//                   <label
//                     htmlFor="file-upload"
//                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
//                   >
//                     <span>Upload a file</span>
//                     <input
//                       id="file-upload"
//                       name="file-upload"
//                       type="file"
//                       className="sr-only"
//                       accept=".pdf,.jpg,.jpeg,.png"
//                       onChange={(e) => {
//                         const file = e.target.files?.[0];
//                         if (file) {
//                           setFormData({ ...formData, certificateFile: file });
//                         }
//                       }}
//                     />
//                   </label>
//                   <p className="pl-1">or drag and drop</p>
//                 </div>
//                 <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
//                 <p className="mt-2 text-sm text-gray-500">
//                   {formData.certificateFile
//                     ? `Selected file: ${formData.certificateFile.name}`
//                     : 'No file selected'}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Form actions */}
//           <div className="flex justify-end space-x-4 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Upload Certificate
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload } from 'lucide-react';

interface UploadCertificateFormProps {
  course: {
    _id: string;
    title: string;
    platform: string;
  };
  onClose: () => void;
  onSubmit: (certificateData: FormData) => Promise<void>;
}

interface CertificateFormData {
  certificateLink: string;
  certificateFile: File | null;
}

export const UploadCertificateForm: React.FC<UploadCertificateFormProps> = ({
  course,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CertificateFormData>({
    certificateLink: '',
    certificateFile: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.certificateFile && !formData.certificateLink) {
      alert('Please provide either a certificate file or a URL');
      return;
    }

    const data = new FormData();
    data.append('name', course.title);
    data.append('courseId', course._id);
    if (formData.certificateFile) data.append('certificateFile', formData.certificateFile);
    if (formData.certificateLink) data.append('certificateLink', formData.certificateLink);

    try {
      await onSubmit(data);  // Wait for the parent to complete the submission
      setFormData({ certificateLink: '', certificateFile: null });
      onClose();  // Only close after successful submission
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to upload certificate. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold">Upload Certificate</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">
              Course: <span className="font-medium">{course.title}</span>
            </p>
            <p className="text-gray-600">
              Platform: <span className="font-medium">{course.platform}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Certificate URL
            </label>
            <input
              type="url"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.certificateLink}
              onChange={(e) => setFormData({ ...formData, certificateLink: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Certificate
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setFormData(prev => ({ ...prev, certificateFile: file || null }));
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                <p className="mt-2 text-sm text-gray-500">
                  {formData.certificateFile
                    ? `Selected file: ${formData.certificateFile.name}`
                    : 'No file selected'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Upload Certificate
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};