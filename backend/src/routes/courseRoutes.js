import express from "express";
import {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse,
  }  from "../controllers/courseController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(authMiddleware);
// router.get("/", getCourses);
// router.post("/", addCourse);
// router.put("/courses/:id", updateCourse);
// router.delete("/courses/:id", deleteCourse);

router.get("/", authMiddleware, getCourses);
router.post("/", authMiddleware, addCourse);
router.put("/:id", authMiddleware, updateCourse);
router.delete("/:id", authMiddleware, deleteCourse);

export default router;
