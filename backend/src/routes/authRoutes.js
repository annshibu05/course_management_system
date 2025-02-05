// import express from "express";
// import { register, login , profile} from "../controllers/authController.js";

// const router = express.Router();
// router.post("/register", register);
// router.post("/login", login);
// router.get('/profile', profile);
// export default router;


import express from "express";
import { register, login, profile, updateProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
// Add the new route
router.put("/profile", authMiddleware, updateProfile);

export default router;
