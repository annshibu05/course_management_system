// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { X } from 'lucide-react';

// interface AddCourseFormProps {
//   onClose: () => void;
//   onSubmit: (courseData: CourseFormData) => void;
// }

// interface CourseFormData {
//   name: string;
//   platform: string;
//   duration: string;
//   link: string;
//   fee: number;
// }

// export const AddCourseForm: React.FC<AddCourseFormProps> = ({ onClose, onSubmit }) => {
//   const [formData, setFormData] = useState<CourseFormData>({
//     name: '',
//     platform: '',
//     duration: '',
//     link: '',
//     fee: 0,
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-lg shadow-xl w-full max-w-md"
//       >
//         <div className="flex items-center justify-between p-6 border-b">
//           <h3 className="text-xl font-semibold">Add New Course</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Add Course
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };




import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface AddCourseFormProps {
  onClose: () => void;
  onCourseAdded: (courseData: any) => void; // Callback to refresh the course list after adding a course
}

interface CourseFormData {
  name: string;
  platform: string;
  duration: string;
  link: string;
  fee: number;
}

export const AddCourseForm: React.FC<AddCourseFormProps> = ({ onClose, onCourseAdded }) => {
  const [formData, setFormData] = useState<CourseFormData>({
    name: '',
    platform: '',
    duration: '',
    link: '',
    fee: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User is not authenticated');
      }

      // Send a POST request to the backend to add the course
      const response = await axios.post(
        'http://localhost:5000/api/courses',
        {
          title: formData.name,
          platform: formData.platform,
          duration: formData.duration,
          link: formData.link,
          fee: formData.fee,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Call the callback to refresh the course list
      onCourseAdded(response.data);
      onClose();
    } catch (error: any) {
      console.error('Error adding course:', error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || 'Failed to add course');
    } finally {
      setIsSubmitting(false);
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
          <h3 className="text-xl font-semibold">Add New Course</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Link</label>
            <input
              type="url"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fee (₹)</label>
            <input
              type="number"
              required
              min="0"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: Number(e.target.value) })}
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

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
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {isSubmitting ? 'Adding...' : 'Add Course'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
