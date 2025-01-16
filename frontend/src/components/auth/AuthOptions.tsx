import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

export const AuthOptions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940")',
      }}
    >
      <div className="w-full max-w-md space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Course Management System</h1>
        
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/login/student')}
            className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <GraduationCap className="h-5 w-5" />
            <span>Login as Student</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/login/faculty')}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Login as Faculty</span>
          </motion.button>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-700">Don't have an account?</p>
          <div className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/register/student')}
              className="text-blue-600 hover:underline"
            >
              Student Sign Up
            </motion.button>
            <span className="text-gray-400">|</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/register/faculty')}
              className="text-green-600 hover:underline"
            >
              Faculty Sign Up
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};