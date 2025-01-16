// // import Course from "../models/Course.js";

// // const getCourses = async (req, res) => {
// //     const courses = await Course.find({ user: req.user._id });
// //     res.json(courses);
// // };

// // const addCourse = async (req, res) => {
// //     const { title, platform, link } = req.body;
// //     const course = await Course.create({ title, platform, link, user: req.user._id });
// //     res.status(201).json(course);
// // };

// // export { getCourses, addCourse };


// import Course from "../models/Course.js";

// // Get all courses for the logged-in user
// const getCourses = async (req, res) => {
//     try {
//         const courses = await Course.find({ user: req.user.id });
//         res.json(courses);
//     } catch (error) {
//         console.error("Error fetching courses:", error.message);
//         res.status(500).json({ message: "Server error while fetching courses" });
//     }
// };

// // Add a new course for the logged-in user
// const addCourse = async (req, res) => {
//     try {
//         const { title, platform, link } = req.body;

//         if (!title || !platform) {
//             return res.status(400).json({ message: "Title and platform are required" });
//         }

//         const course = await Course.create({ 
//             title, 
//             platform, 
//             link, 
//             user: req.user.id 
//         });

//         res.status(201).json({
//             message: "Course added successfully",
//             course,
//         });
//     } catch (error) {
//         console.error("Error adding course:", error.message);
//         res.status(500).json({ message: "Server error while adding the course" });
//     }
// };

// export { getCourses, addCourse };


import Course from "../models/Course.js";

// Get all courses for the logged-in user
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user.id });
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    res.status(500).json({ message: "Server error while fetching courses" });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  try {
    const { title, platform, link, duration, fee } = req.body;

    if (!title || !platform || !duration || fee === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = await Course.create({
      title,
      platform,
      link,
      duration,
      fee,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Course added successfully",
      course,
    });
  } catch (error) {
    console.error("Error adding course:", error.message);
    res.status(500).json({ message: "Server error while adding the course" });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, platform, link, duration, fee } = req.body;

    const course = await Course.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, platform, link, duration, fee },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error("Error updating course:", error.message);
    res.status(500).json({ message: "Server error while updating the course" });
  }
};

// const updateCourse = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { title, platform, link, duration, fee } = req.body;

//         const updatedCourse = await Course.findByIdAndUpdate(
//             id,
//             { title, platform, link, duration, fee },
//             { new: true } // Return the updated document
//         );

//         if (!updatedCourse) {
//             return res.status(404).json({ message: "Course not found" });
//         }

//         res.status(200).json({
//             message: "Course updated successfully",
//             course: updatedCourse,
//         });
//     } catch (error) {
//         console.error("Error updating course:", error.message);
//         res.status(500).json({ message: "Server error while updating the course" });
//     }
// };

// Delete a course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findOneAndDelete({ _id: id, user: req.user.id });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error.message);
    res.status(500).json({ message: "Server error while deleting the course" });
  }
};

export { getCourses, addCourse, updateCourse, deleteCourse };
