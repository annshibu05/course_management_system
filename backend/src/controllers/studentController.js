// export const getStudentDashboard = async (req, res) => {
//     try {
//       const userId = req.user._id;
  
//       const courses = await Course.find({ user: userId });
//       const completed = courses.filter((course) => course.certificateUploaded).length;
//       const inProgress = courses.length - completed;
  
//       const recentActivity = await Activity.find({ user: userId })
//         .sort({ createdAt: -1 })
//         .limit(5);
  
//       res.status(200).json({
//         stats: {
//           registered: courses.length,
//           inProgress,
//           completed,
//         },
//         recentActivity: recentActivity.map((activity) => activity.description),
//       });
//     } catch (error) {
//       console.error('Error fetching student dashboard:', error.message);
//       res.status(500).json({ message: 'Server error while fetching dashboard' });
//     }
//   };
  



// controllers/studentController.js
//import Course from "../models/Course.js";

// export const getStudentStats = async (req, res) => {
//   try {
//     // Fetch the student's ID from the request (assuming authentication is implemented)
//     const userId = req.user.id;

//     // Fetch all courses for the student
//     const courses = await Course.find({ user: userId });

//     // Calculate stats
//     const registered = courses.length;
//     const inProgress = courses.filter(course => course.status === "inProgress").length;
//     const completed = courses.filter(course => course.status === "completed").length;

//     res.status(200).json({ registered, inProgress, completed });
//   } catch (error) {
//     console.error("Error fetching student stats:", error.message);
//     res.status(500).json({ message: "Server error fetching student stats" });
//   }
// };


// controllers/studentController.js
import Course from "../models/Course.js";

export const getStudentStats = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: "Invalid user data" });
    }

    const userId = req.user.id;
    const courses = await Course.find({ user: userId });

    const registered = courses.length;
    const inProgress = courses.filter((course) => !course.certificate).length;
    const completed = courses.filter((course) => course.certificate).length;

    res.status(200).json({ registered, inProgress, completed });
  } catch (error) {
    console.error("Error fetching student stats:", error.message);
    res.status(500).json({ message: "Server error fetching student stats" });
  }
};

