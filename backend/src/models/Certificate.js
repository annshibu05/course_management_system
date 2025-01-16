import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fileUrl: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export default mongoose.model("Certificate", certificateSchema);
