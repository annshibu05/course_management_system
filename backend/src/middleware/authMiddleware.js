import jwt from "jsonwebtoken";
import User from "../models/User.js";
import env from "../config/env.js";

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Not authorized" });

    try {
        const decoded = jwt.verify(token, env.jwtSecret);
        req.user = await User.findById(decoded.id).select("-password");
        console.log("Authenticated User:", req.user); // Debug log
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        res.status(401).json({ message: "Token invalid" });
    }
};

export default authMiddleware;
