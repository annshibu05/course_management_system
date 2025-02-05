// src/controllers/profileController.js
import User from "../models/User.js";
import Course from "../models/Course.js";
import Certificate from "../models/Certificate.js";

// This endpoint returns a complete profile object for the logged-in user.
export const getProfile = async (req, res) => {
  try {
    // req.user is set by your auth middleware
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // For a student, augment the basic user info with additional fields.
    if (user.role === "student") {
      // Optionally, you can fetch additional data from the database.
      // For demonstration, we'll use dummy values for now.
      const studentProfile = {
        name: user.name,
        email: user.email,
        usn: user.usn || (user.email ? user.email.split('@')[0] : ""),
        phone: user.phone || "",
        profilePicture: user.profilePicture || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60",
        completedCourses: 5,       // dummy value or fetched from courses count
        certificates: [],          // dummy (or fetch certificate array)
        level: 2,                  // dummy value
        xp: 650,                   // dummy value
        role: user.role
      };
      return res.status(200).json(studentProfile);
    } else {
      // For faculty, return basic info.
      const facultyProfile = {
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        profilePicture: user.profilePicture || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60",
        role: user.role
      };
      return res.status(200).json(facultyProfile);
    }
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ message: "Server error while fetching profile", error: error.message });
  }
};
