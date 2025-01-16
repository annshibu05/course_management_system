import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import facultyroutes from "./routes/facultyRoutes.js";
import studentRoutes from "./routes/studentdashboardroutes.js";
import path from "path";
import { fileURLToPath } from "url";

connectDB();

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/faculty", facultyroutes);
app.use("/api/student", studentRoutes);
app.use(errorMiddleware);
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/uploads', express.static('uploads'));

export default app;
