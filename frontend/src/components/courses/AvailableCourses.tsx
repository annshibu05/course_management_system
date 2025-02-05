import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Book, Monitor, GraduationCap, Code, Database } from 'lucide-react';

const platforms = [
  {
    name: 'Coursera',
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100",
    url: 'https://www.coursera.org',
    description: 'Access world-class courses from top universities and companies.',
  },
  {
    name: 'Udemy',
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100",
    url: 'https://www.udemy.com',
    description: 'Learn on-demand with expert-led video courses.',
  },
  {
    name: 'Infosys Springboard',
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100",
    url: 'https://infyspringboard.onwingspan.com',
    description: 'Digital learning platform by Infosys for skill development.',
  },
  {
    name: 'Scaler',
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100",
    url: 'https://www.scaler.com',
    description: 'Structured learning paths for tech professionals.',
  },
  {
    name: 'NPTEL',
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100",
    url: 'https://nptel.ac.in',
    description: 'Free online courses from IITs and IISc.',
  },
];

// export const AvailableCourses: React.FC = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Available Learning Platforms</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {platforms.map((platform) => (
//           <motion.a
//             key={platform.name}
//             href={platform.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.02 }}
//             className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-start justify-between">
//               <h3 className="text-lg font-semibold">{platform.name}</h3>
//               <ExternalLink className="h-5 w-5 text-gray-400" />
//             </div>
//             <p className="mt-2 text-gray-600">{platform.description}</p>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// };

export const AvailableCourses: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learning Platforms</h1>
          <p className="text-xl text-gray-600">Explore knowledge from world-class platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, rotate: -2 }}
              className={`block p-8 rounded-2xl shadow-lg ${platform.color} hover:shadow-xl transition-all group`}
            >
              <div className="mb-6">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  {platform.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{platform.name}</h3>
              <p className="text-gray-600 mb-6">{platform.description}</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="mr-2">Explore Platform</span>
                <ExternalLink className="h-5 w-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};