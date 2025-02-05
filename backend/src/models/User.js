// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["student", "faculty"], default: "student" },
//     //usn: { type: String }, // For students
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);


// models/User.js

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, default: "John Doe" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "faculty"], default: "faculty" },
    phone: { type: String, default: "" },
    profilePicture: { 
      type: String, 
      default: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60"
    },
    usn: { type: String, default: "" } // Only for students
  }, { timestamps: true });

  export default mongoose.model("User", userSchema);