// import { z } from "zod";

// // Schema for user registration
// export const registerSchema = z.object({
//     name: z.string().min(1, "Name is required"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     role: z.enum(["student", "faculty"]).optional(),
// });

// // Schema for user login
// export const loginSchema = z.object({
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
// });

// // Schema for adding a course
// export const courseSchema = z.object({
//     title: z.string().min(1, "Title is required"),
//     platform: z.string().min(1, "Platform is required"),
//     link: z.string().url("Invalid URL").optional(),
// });

// // Schema for uploading a certificate
// export const certificateSchema = z.object({
//     name: z.string().min(1, "Certificate name is required"),
//     courseId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ID"),
// });









import { z } from "zod";

// Schema for user registration
export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
        .string()
        .email("Invalid email address")
        .refine(
            (email) =>
                email.endsWith("@bmsit.in") &&
                (email.startsWith("1by") || !email.startsWith("1by")),
            {
                message:
                    "For students, the email should start with '1by' and end with '@bmsit.in'. Faculty emails should end with '@bmsit.in'.",
            }
        ),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["student", "faculty"]).optional(),
});

// Schema for user login
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for adding a course
export const courseSchema = z.object({
    title: z.string().min(1, "Title is required"),
    platform: z.string().min(1, "Platform is required"),
    link: z.string().url("Invalid URL").optional(),
});

// Schema for uploading a certificate
export const certificateSchema = z.object({
    name: z.string().min(1, "Certificate name is required"),
    courseId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid course ID"),
});
