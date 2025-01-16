import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface EditCourseFormProps {
  course: any;
  onClose: () => void;
  onSubmit: (courseData: any) => void;
}

export const EditCourseForm: React.FC<EditCourseFormProps> = ({
  course,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    duration: '',
    link: '',
    fee: '',
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || '',
        platform: course.platform || '',
        duration: course.duration || '',
        link: course.link || '',
        fee: course.fee || '',
      });
    }
  }, [course]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold">Edit Course</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform
            </label>
            <select
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
            >
              <option value="">Select Platform</option>
              <option value="Coursera">Coursera</option>
              <option value="Udemy">Udemy</option>
              <option value="Infosys Springboard">Infosys Springboard</option>
              <option value="Scaler">Scaler</option>
              <option value="NPTEL">NPTEL</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              required
              placeholder="e.g., 8 weeks"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Link
            </label>
            <input
              type="url"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fee (₹)
            </label>
            <input
              type="number"
              required
              min="0"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: String(e.target.value) })}
            />
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
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { X } from 'lucide-react';
// import axios from 'axios';

// interface EditCourseFormProps {
//   course: {
//     id: string;
//     name: string;
//     platform: string;
//     duration: string;
//     link: string;
//     fee: number;
//   };
//   token: string; // Authorization token
//   onClose: () => void; // Function to close the modal
//   onSuccess: () => void; // Callback to refresh the course list or handle success
// }

// export const EditCourseForm: React.FC<EditCourseFormProps> = ({
//   course,
//   token,
//   onClose,
//   onSuccess,
// }) => {
//   const [formData, setFormData] = useState(course);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // API call to update the course
//       await axios.put(
//         `http://localhost:5000/api/courses/${course.id}`, // Replace `course.id` with the actual course ID
//         {
//           title: formData.name,
//           platform: formData.platform,
//           duration: formData.duration,
//           link: formData.link,
//           fee: formData.fee,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       onSuccess(); // Trigger the success callback (e.g., refresh the course list)
//       onClose(); // Close the modal
//     } catch (err) {
//       setError('Failed to update the course. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-lg shadow-xl w-full max-w-md"
//       >
//         <div className="flex items-center justify-between p-6 border-b">
//           <h3 className="text-xl font-semibold">Edit Course</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Course Name
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Platform
//             </label>
//             <select
//               required
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.platform}
//               onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
//             >
//               <option value="">Select Platform</option>
//               <option value="Coursera">Coursera</option>
//               <option value="Udemy">Udemy</option>
//               <option value="Infosys Springboard">Infosys Springboard</option>
//               <option value="Scaler">Scaler</option>
//               <option value="NPTEL">NPTEL</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Duration
//             </label>
//             <input
//               type="text"
//               required
//               placeholder="e.g., 8 weeks"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.duration}
//               onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Course Link
//             </label>
//             <input
//               type="url"
//               required
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.link}
//               onChange={(e) => setFormData({ ...formData, link: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Fee (₹)
//             </label>
//             <input
//               type="number"
//               required
//               min="0"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.fee}
//               onChange={(e) => setFormData({ ...formData, fee: Number(e.target.value) })}
//             />
//           </div>

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
//               disabled={loading}
//               className={`px-4 py-2 rounded-lg ${
//                 loading
//                   ? 'bg-blue-400 text-white'
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               }`}
//             >
//               {loading ? 'Saving...' : 'Save Changes'}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };
