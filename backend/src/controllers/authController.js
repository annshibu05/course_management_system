// const register = async (req, res) => {
//     const { name, email, password, role } = req.body;
//     const userExists = await User.findOne({ email });

//     if (userExists) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword, role });

//     // const token = jwt.sign({ id: user._id }, env.jwtSecret, { expiresIn: "30d" });
//     // res.status(201).json({ token });
// };
// const register = async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;

//         // Check if the user already exists
//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const user = await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             role: role || "faculty", // Default role to "user" if not provided
//         });
//         // Respond with success message and user details
//         res.status(201).json({
//             message: "User registered successfully",
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//                 createdAt: user.createdAt,
//                 updatedAt: user.updatedAt,
//             },
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error, please try again later" });
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//         const token = jwt.sign({ id: user._id }, env.jwtSecret, { expiresIn: "30d" });
//         res.json({ token });
//     } else {
//         res.status(401).json({ message: "Invalid email or password" });
//     }
// };

// export { register, login };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import env from "../config/env.js";
import { registerSchema, loginSchema } from "../utils/validation.js"; // Import Zod schemas

// Register controller
const register = async (req, res) => {
    try {
        // Validate the request body using Zod schema
        const validatedData = registerSchema.parse(req.body);
        const { name, email, password, role } = validatedData;

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || "faculty", // Default role to "faculty" if not provided
        });

        // Respond with success message and user details
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        });
    } catch (error) {
        // Handle Zod validation errors
        if (error.name === "ZodError") {
            return res.status(400).json({ errors: error.errors });
        }

        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};

// Login controller
const login = async (req, res) => {
    try {
        // Validate the request body using Zod schema
        const validatedData = loginSchema.parse(req.body);
        const { email, password } = validatedData;

        // Find the user by email
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            // Generate JWT
            const token = jwt.sign({ id: user._id }, env.jwtSecret, { expiresIn: "30d" });

            // Respond with the token
            res.json({ token });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        // Handle Zod validation errors
        if (error.name === "ZodError") {
            return res.status(400).json({ errors: error.errors });
        }

        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};

const profile = async (req, res) => {
    try {
        const userId = req.user.id; // `req.user` should be populated by auth middleware
        const user = await User.findById(userId).select("-password"); // Exclude password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};


// Add this new controller
const updateProfile = async (req, res) => {
    try {
      const userId = req.user.id;
      const updates = req.body;
  
      // Prevent email and role changes
      delete updates.email;
      delete updates.role;
  
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: updates },
        { new: true, runValidators: true }
      ).select("-password");
  
      res.json({
        message: "Profile updated successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
          profilePicture: user.profilePicture,
          usn: user.usn,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error, please try again later" });
    }
  };

export { register, login, profile, updateProfile};
