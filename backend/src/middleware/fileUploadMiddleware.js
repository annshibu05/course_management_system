// // import multer from "multer";
// // import path from "path";

// // // Set storage engine
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, "uploads/"); // Folder to store uploads
// //     },
// //     filename: (req, file, cb) => {
// //         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //         cb(null, uniqueSuffix + path.extname(file.originalname));
// //     },
// // });

// // // File filter
// // const fileFilter = (req, file, cb) => {
// //     if (file.mimetype === "application/pdf") {
// //         cb(null, true); // Accept only PDF files
// //     } else {
// //         cb(new Error("Only PDF files are allowed"), false);
// //     }
// // };

// // // Initialize multer
// // const upload = multer({ 
// //     storage, 
// //     fileFilter, 
// //     limits: { fileSize: 2 * 1024 * 1024 } // Limit file size to 2MB
// // });

// // export default upload;


import multer from "multer";
import path from "path";

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the `uploads` folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Ensure unique filenames
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

export default upload;



// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Directory to save files
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
// }).single("certificate"); // Ensure this matches the field name sent in formData

// // Route for uploading certificates
// app.post("/api/certificates/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ success: false, message: err.message });
//     }

//     // Save certificate details to the database
//     const { name, courseId } = req.body;
//     const fileUrl = `/uploads/${req.file.filename}`;

//     // Example: Save to database (replace with your database logic)
//     Certificate.create({ name, courseId, fileUrl })
//       .then((certificate) => res.json({ success: true, certificate }))
//       .catch((error) =>
//         res.status(500).json({ success: false, message: "Database error", error })
//       );
//   });
// });


// export default upload;