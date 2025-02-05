// // // import User from "../models/User.js";
// // // import Course from "../models/Course.js";
// // // import Certificate from "../models/Certificate.js";

// // // // Get all students' data, their courses, and certificates
// // // export const getAllStudentsData = async (req, res) => {
// // //     try {
// // //         // Ensure the user has the faculty role
// // //         if (req.user.role !== "faculty") {
// // //             return res.status(403).json({ message: "Access forbidden: Faculty only" });
// // //         }

// // //         // Fetch all students
// // //         const students = await User.find({ role: "student" }).select("name email");

// // //         // Fetch courses and certificates for each student
// // //         const studentData = await Promise.all(
// // //             students.map(async (student) => {
// // //                 const courses = await Course.find({ user: student._id }).select("title platform link");
// // //                 const certificates = await Certificate.find({ user: student._id }).select("name fileUrl");
// // //                 const usn = await student.email.split('@')[0];
// // //                 return {
// // //                     student,
// // //                     usn,
// // //                     courses,
// // //                     certificates,
// // //                 };
// // //             })
// // //         );

// // //         res.status(200).json(studentData);
// // //     } catch (error) {
// // //         console.error("Error fetching students' data:", error.message);
// // //         res.status(500).json({ message: "Server error while fetching students' data" });
// // //     }
// // // };


// // import User from "../models/User.js";
// // import Course from "../models/Course.js";
// // import Certificate from "../models/Certificate.js";

// // export const getAllStudentsData = async (req, res) => {
// //   try {
// //     // Check if the user has the faculty role
// //     if (!req.user || req.user.role !== "faculty") {
// //       return res.status(403).json({ message: "Access forbidden: Faculty only" });
// //     }

// //     // Fetch all students
// //     const students = await User.find({ role: "student" }).select("name email");

// //     // Fetch courses and certificates for each student
// //     const studentData = await Promise.all(
// //       students.map(async (student) => {
// //         const courses = await Course.find({ user: student._id }).select("title platform link status");
// //         const certificates = await Certificate.find({ user: student._id }).select("name fileUrl");
// //         const usn = student.email.split("@")[0];

// //         return {
// //           student,
// //           usn,
// //           courses,
// //           certificates,
// //         };
// //       })
// //     );

// //     res.status(200).json(studentData);
// //   } catch (error) {
// //     console.error("Error fetching students' data:", error.message);
// //     res.status(500).json({ message: "Server error while fetching students' data" });
// //   }
// // };

// export const getAllStudentsData = async (req, res) => {
//   try {
//     if (!req.user || req.user.role !== "faculty") {
//       return res.status(403).json({ message: "Access forbidden: Faculty only" });
//     }

//     const students = await User.find({ role: "student" })
//       .select("name email")
//       .lean(); // Add .lean() for better performance

//     const studentData = await Promise.all(
//       students.map(async (student) => {
//         const [courses, certificates] = await Promise.all([
//           Course.find({ user: student._id }).select("title platform link status"),
//           Certificate.find({ user: student._id }).select("name fileUrl")
//         ]);

//         return {
//           student: {
//             _id: student._id,
//             name: student.name,
//             email: student.email
//           },
//           usn: student.email.split("@")[0],
//           courses,
//           certificates
//         };
//       })
//     );

//     res.status(200).json(studentData);
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ 
//       message: "Server error",
//       error: error.message // Include error details for debugging
//     });
//   }
// };

import User from "../models/User.js";
import Course from "../models/Course.js";
import Certificate from "../models/Certificate.js";


export const getAllStudentsData = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "faculty") {
      return res.status(403).json({ message: "Access forbidden: Faculty only" });
    }

    const students = await User.find({ role: "student" })
      .select("name email")
      .lean(); // Add .lean() for better performance

    const studentData = await Promise.all(
      students.map(async (student) => {
        const [courses, certificates] = await Promise.all([
          Course.find({ user: student._id }).select("title platform link status"),
          Certificate.find({ user: student._id }).select("name fileUrl")
        ]);

        return {
          student: {
            _id: student._id,
            name: student.name,
            email: student.email
          },
          usn: student.email.split("@")[0],
          courses,
          certificates
        };
      })
    );

    res.status(200).json(studentData);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ 
      message: "Server error",
      error: error.message // Include error details for debugging
    });
  }
};