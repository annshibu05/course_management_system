// import express from "express";
// import upload from "../middleware/fileUploadMiddleware.js";
// import { uploadCertificate, deleteCertificate } from "../controllers/certificateController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();
// router.use(authMiddleware);
// //router.post("/", uploadCertificate);
// router.post("/upload", authMiddleware, upload.single("certificate"), uploadCertificate);
// router.delete("/:id", authMiddleware, deleteCertificate);

// export default router;


import express from "express";
import upload from "../middleware/fileUploadMiddleware.js";
import { uploadCertificate, deleteCertificate } from "../controllers/certificateController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

// Upload certificate
router.post("/upload", upload.single("certificateFile"), uploadCertificate);

// Delete certificate
router.delete("/:id", deleteCertificate);

export default router;
