// // Authentication utilities
// export const validateEmail = (email: string, role: 'student' | 'faculty'): boolean => {
//   if (role === 'student') {
//     return email.startsWith('1by') && email.endsWith('@bmsit.in');
//   }
//   return email.endsWith('@bmsit.in');
// };

// export const registerUser = (userData: any) => {
//   const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
//   existingUsers.push(userData);
//   localStorage.setItem('users', JSON.stringify(existingUsers));
//   localStorage.setItem('currentUser', JSON.stringify(userData));
// };

// export const loginUser = (email: string, password: string): boolean => {
//   const users = JSON.parse(localStorage.getItem('users') || '[]');
//   const user = users.find((u: any) => u.email === email && u.password === password);
  
//   if (user) {
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     return true;
//   }
//   return false;
// };



import axios from "axios";

// Base URL for API
const API_BASE_URL = "http://localhost:5000/api/auth"; // Update if different

// Validate email based on the role
export const validateEmail = (email: string, role: "student" | "faculty"): boolean => {
    //const studentRegex = /^[1-9][a-zA-Z]{2}[0-9][a-zA-Z]{7}@bmsit\.in$/; // Example format: 1byXXXXXX@bmsit.in
    const studentRegex = /^1by[0-9]{2}[a-z]{2}[0-9]{3}@bmsit\.in$/;
    const facultyRegex = /^[a-zA-Z]+@bmsit\.in$/;
    return role === "student" ? studentRegex.test(email) : facultyRegex.test(email);
};

// Register user
export const registerUser = async (userData: any): Promise<void> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        console.log("User registered successfully:", response.data);
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
};

// Login user
export const loginUser = async (email: string, password: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        const { token } = response.data;
        localStorage.setItem("token", token); // Save token to localStorage
        return token;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

// Fetch user profile
export const getUserProfile = async (): Promise<any> => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.user;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to fetch profile");
    }
};
