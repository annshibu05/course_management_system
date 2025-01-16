// routes/studentdashboardroutes.js
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getStudentStats } from "../controllers/studentController.js";

const router = express.Router();

// Route to fetch student stats
router.get("/stats", authMiddleware, getStudentStats);

export default router;
