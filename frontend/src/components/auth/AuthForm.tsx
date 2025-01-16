// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { User, Mail, Lock, UserCheck, ArrowLeft } from 'lucide-react';
// // import { validateEmail, registerUser, loginUser } from '../../utils/auth';

// // interface AuthFormProps {
// //   type: 'login' | 'register';
// //   role: 'student' | 'faculty';
// // }

// // export const AuthForm: React.FC<AuthFormProps> = ({ type, role }) => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] =  useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //   });
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!validateEmail(formData.email, role)) {
// //       setError('Invalid email format!');
// //       return;
// //     }

// //     if (type === 'register') {
// //       if (formData.password !== formData.confirmPassword) {
// //         setError('Passwords do not match!');
// //         return;
// //       }

// //       const userData = {
// //         name: formData.name,
// //         email: formData.email,
// //         password: formData.password,
// //         role,
// //         usn: role === 'student' ? formData.email.split('@')[0] : undefined,
// //       };

// //       registerUser(userData);
// //       navigate(`/login/${role}`);
// //     } else {
// //         const anca = await loginUser(formData.email, formData.password)
// //         localStorage.setItem("role", role); // Save role.
// //       if ( anca) {
// //         navigate(role === 'student' ? '/dashboard/student' : '/dashboard/faculty');
// //       } else {
// //         setError('Invalid email or password!');
// //       }
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
// //     >
// //       <motion.button
// //         whileHover={{ scale: 1.05 }}
// //         onClick={() => navigate('/')}
// //         className="mb-6 flex items-center text-gray-600 hover:text-gray-800"
// //       >
// //         <ArrowLeft className="h-4 w-4 mr-2" />
// //         Back
// //       </motion.button>

// //       <h2 className="text-3xl font-bold text-center mb-8">
// //         {type === 'login' ? 'Login' : 'Register'} as {role}
// //       </h2>

// //       {error && (
// //         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
// //           {error}
// //         </div>
// //       )}
      
// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         {type === 'register' && (
// //           <div className="relative">
// //             <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //             <input
// //               type="text"
// //               placeholder="Full Name"
// //               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.name}
// //               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //               required
// //             />
// //           </div>
// //         )}

// //         <div className="relative">
// //           <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //           <input
// //             type="email"
// //             placeholder={`${role === 'student' ? '1byXXXXXX' : 'faculty'}@bmsit.in`}
// //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //             value={formData.email}
// //             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //             required
// //           />
// //         </div>

// //         <div className="relative">
// //           <Lock className="absolute left-3 top-3 h-5 w-5 textF-gray-400" />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //             value={formData.password}
// //             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //             required
// //           />
// //         </div>

// //         {type === 'register' && (
// //           <div className="relative">
// //             <UserCheck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //             <input
// //               type="password"
// //               placeholder="Confirm Password"
// //               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// //               value={formData.confirmPassword}
// //               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
// //               required
// //             />
// //           </div>
// //         )}

// //         <motion.button
// //           whileHover={{ scale: 1.02 }}
// //           whileTap={{ scale: 0.98 }}
// //           className={`w-full py-2 rounded-lg text-white transition-colors ${
// //             role === 'student' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
// //           }`}
// //           type="submit"
// //         >
// //           {type === 'login' ? 'Login' : 'Register'}
// //         </motion.button>

// //         {type === 'login' && (
// //           <p className="text-center text-gray-600">
// //             Don't have an account?{' '}
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               onClick={() => navigate(`/register/${role}`)}
// //               className={`font-medium hover:underline ${
// //                 role === 'student' ? 'text-blue-600' : 'text-green-600'
// //               }`}
// //             >
// //               Sign up
// //             </motion.button>
// //           </p>
// //         )}
// //       </form>
// //     </motion.div>
// //   );
// // };



// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { User, Mail, Lock, UserCheck, ArrowLeft } from "lucide-react";
// // // import { validateEmail, registerUser, loginUser } from "../../utils/auth";

// // // interface AuthFormProps {
// // //     type: "login" | "register";
// // //     role: "student" | "faculty";
// // // }

// // // export const AuthForm: React.FC<AuthFormProps> = ({ type, role }) => {
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({
// // //         name: "",
// // //         email: "",
// // //         password: "",
// // //         confirmPassword: "",
// // //     });
// // //     const [error, setError] = useState("");

// // //     const handleSubmit = async (e: React.FormEvent) => {
// // //         e.preventDefault();
// // //         setError("");

// // //         if (!validateEmail(formData.email, role)) {
// // //             setError("Invalid email format!");
// // //             return;
// // //         }

// // //         try {
// // //             if (type === "register") {
// // //                 if (formData.password !== formData.confirmPassword) {
// // //                     setError("Passwords do not match!");
// // //                     return;
// // //                 }

// // //                 const userData = {
// // //                     name: formData.name,
// // //                     email: formData.email,
// // //                     password: formData.password,
// // //                     role,
// // //                     usn: role === "student" ? formData.email.split("@")[0] : undefined,
// // //                 };

// // //                 await registerUser(userData);
// // //                 navigate(`/login/${role}`);
// // //             } else {
// // //                 const token = await loginUser(formData.email, formData.password);
// // //                 console.log("Login successful, token:", token);
// // //                 navigate(role === "student" ? "/dashboard/student" : "/dashboard/faculty");
// // //             }
// // //         } catch (err: any) {
// // //             setError(err.message);
// // //         }
// // //     };

// // //     return (
// // //         <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
// // //         >
// // //             <motion.button
// // //                 whileHover={{ scale: 1.05 }}
// // //                 onClick={() => navigate("/")}
// // //                 className="mb-6 flex items-center text-gray-600 hover:text-gray-800"
// // //             >
// // //                 <ArrowLeft className="h-4 w-4 mr-2" />
// // //                 Back
// // //             </motion.button>

// // //             <h2 className="text-3xl font-bold text-center mb-8">
// // //                 {type === "login" ? "Login" : "Register"} as {role}
// // //             </h2>

// // //             {error && (
// // //                 <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
// // //                     {error}
// // //                 </div>
// // //             )}

// // //             <form onSubmit={handleSubmit} className="space-y-6">
// // //                 {type === "register" && (
// // //                     <div className="relative">
// // //                         <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //                         <input
// // //                             type="text"
// // //                             placeholder="Full Name"
// // //                             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //                             value={formData.name}
// // //                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // //                             required
// // //                         />
// // //                     </div>
// // //                 )}

// // //                 <div className="relative">
// // //                     <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //                     <input
// // //                         type="email"
// // //                         placeholder={`${role === "student" ? "1byXXXXXX" : "faculty"}@bmsit.in`}
// // //                         className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //                         value={formData.email}
// // //                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // //                         required
// // //                     />
// // //                 </div>

// // //                 <div className="relative">
// // //                     <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //                     <input
// // //                         type="password"
// // //                         placeholder="Password"
// // //                         className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //                         value={formData.password}
// // //                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // //                         required
// // //                     />
// // //                 </div>

// // //                 {type === "register" && (
// // //                     <div className="relative">
// // //                         <UserCheck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //                         <input
// // //                             type="password"
// // //                             placeholder="Confirm Password"
// // //                             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
// // //                             value={formData.confirmPassword}
// // //                             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
// // //                             required
// // //                         />
// // //                     </div>
// // //                 )}

// // //                 <motion.button
// // //                     whileHover={{ scale: 1.02 }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                     className={`w-full py-2 rounded-lg text-white transition-colors ${
// // //                         role === "student" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
// // //                     }`}
// // //                     type="submit"
// // //                 >
// // //                     {type === "login" ? "Login" : "Register"}
// // //                 </motion.button>

// // //                 {type === "login" && (
// // //                     <p className="text-center text-gray-600">
// // //                         Don't have an account?{" "}
// // //                         <motion.button
// // //                             whileHover={{ scale: 1.05 }}
// // //                             onClick={() => navigate(`/register/${role}`)}
// // //                             className={`font-medium hover:underline ${
// // //                                 role === "student" ? "text-blue-600" : "text-green-600"
// // //                             }`}
// // //                         >
// // //                             Sign up
// // //                         </motion.button>
// // //                     </p>
// // //                 )}
// // //             </form>
// // //         </motion.div>
// // //     );
// // // };


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { User, Mail, Lock, UserCheck, ArrowLeft } from 'lucide-react';
// import { validateEmail, registerUser, loginUser } from '../../utils/auth';

// interface AuthFormProps {
//   type: 'login' | 'register';
//   role: 'student' | 'faculty';
// }

// export const AuthForm: React.FC<AuthFormProps> = ({ type, role }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     // Validate email format
//     if (!validateEmail(formData.email, role)) {
//       setError('Invalid email format!');
//       return;
//     }

//     if (type === 'register') {
//       // Validate passwords
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match!');
//         return;
//       }

//       const userData = {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         role,
//         usn: role === 'student' ? formData.email.split('@')[0] : undefined,
//       };

//       try {
//         await registerUser(userData); // Assume `registerUser` handles API errors
//         navigate(`/login/${role}`);
//       } catch (err) {
//         setError('Failed to register. Please try again.');
//       }
//     } else {
//       try {
//         const token = await loginUser(formData.email, formData.password); 
//         if (token) { // If token exists, login was successful
//             localStorage.setItem('role', role); // Save role in localStorage
//             localStorage.setItem('token', token); // Save the token in localStorage
//             navigate(role === 'student' ? '/dashboard/student' : '/dashboard/faculty');
//           } else {
//             setError('Invalid email or password!');
//           }
//         } catch (err) {
//           setError('Login failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
//     >
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={() => navigate('/')}
//         className="mb-6 flex items-center text-gray-600 hover:text-gray-800"
//       >
//         <ArrowLeft className="h-4 w-4 mr-2" />
//         Back
//       </motion.button>

//       <h2 className="text-3xl font-bold text-center mb-8">
//         {type === 'login' ? 'Login' : 'Register'} as {role}
//       </h2>

//       {error && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {type === 'register' && (
//           <div className="relative">
//             <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />
//           </div>
//         )}

//         <div className="relative">
//           <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//           <input
//             type="email"
//             placeholder={`${role === 'student' ? '1byXXXXXX' : 'faculty'}@bmsit.in`}
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </div>

//         <div className="relative">
//           <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//         </div>

//         {type === 'register' && (
//           <div className="relative">
//             <UserCheck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//               required
//             />
//           </div>
//         )}

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className={`w-full py-2 rounded-lg text-white transition-colors ${
//             role === 'student' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
//           }`}
//           type="submit"
//         >
//           {type === 'login' ? 'Login' : 'Register'}
//         </motion.button>

//         {type === 'login' && (
//           <p className="text-center text-gray-600">
//             Don't have an account?{' '}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate(`/register/${role}`)}
//               className={`font-medium hover:underline ${
//                 role === 'student' ? 'text-blue-600' : 'text-green-600'
//               }`}
//             >
//               Sign up
//             </motion.button>
//           </p>
//         )}
//       </form>
//     </motion.div>
//   );
// };


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, UserCheck, ArrowLeft } from 'lucide-react';
import { validateEmail, registerUser, loginUser } from '../../utils/auth';

interface AuthFormProps {
  type: 'login' | 'register';
  role: 'student' | 'faculty';
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, role }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading

    try {
      // Validate email format
      if (!validateEmail(formData.email, role)) {
        setError('Invalid email format!');
        setLoading(false);
        return;
      }

      if (type === 'register') {
        // Validate passwords
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match!');
          setLoading(false);
          return;
        }

        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role,
          usn: role === 'student' ? formData.email.split('@')[0] : undefined,
        };

        await registerUser(userData); // Call the API to register
        navigate(`/login/${role}`); // Redirect to login after registration
      } else {
        const token = await loginUser(formData.email, formData.password); // Call API to login
        if (token) {
          localStorage.setItem('role', role); // Save role in localStorage
          localStorage.setItem('token', token); // Save the token in localStorage
          navigate(role === 'student' ? '/dashboard/student' : '/dashboard/faculty'); // Redirect based on role
        } else {
          setError('Invalid email or password!');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate('/')}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </motion.button>

      <h2 className="text-3xl font-bold text-center mb-8">
        {type === 'login' ? 'Login' : 'Register'} as {role}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'register' && (
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder={`${role === 'student' ? '1byXXXXXX' : 'faculty'}@bmsit.in`}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        {type === 'register' && (
          <div className="relative">
            <UserCheck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2 rounded-lg text-white transition-colors ${
            role === 'student' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Processing...' : type === 'login' ? 'Login' : 'Register'}
        </motion.button>

        {type === 'login' && (
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/register/${role}`)}
              className={`font-medium hover:underline ${
                role === 'student' ? 'text-blue-600' : 'text-green-600'
              }`}
            >
              Sign up
            </motion.button>
          </p>
        )}
      </form>
    </motion.div>
  );
};
