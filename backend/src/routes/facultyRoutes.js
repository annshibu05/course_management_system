// import express from "express";
// import { getAllStudentsData } from "../controllers/facultyController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Faculty-only route to get all students' data
// router.get("/students-data", authMiddleware, getAllStudentsData);

// export default router;



import express from "express";
import { getAllStudentsData } from "../controllers/facultyController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to get all students' data
router.get("/students-data", authMiddleware, getAllStudentsData);

export default router;
