import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Coursera',
    url: 'https://www.coursera.org',
    description: 'Access world-class courses from top universities and companies.',
  },
  {
    name: 'Udemy',
    url: 'https://www.udemy.com',
    description: 'Learn on-demand with expert-led video courses.',
  },
  {
    name: 'Infosys Springboard',
    url: 'https://infyspringboard.onwingspan.com',
    description: 'Digital learning platform by Infosys for skill development.',
  },
  {
    name: 'Scaler',
    url: 'https://www.scaler.com',
    description: 'Structured learning paths for tech professionals.',
  },
  {
    name: 'NPTEL',
    url: 'https://nptel.ac.in',
    description: 'Free online courses from IITs and IISc.',
  },
];

export const AvailableCourses: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Available Learning Platforms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">{platform.name}</h3>
              <ExternalLink className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-gray-600">{platform.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};