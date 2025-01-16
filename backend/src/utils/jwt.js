import jwt from "jsonwebtoken";
import env from "../config/env.js";

/**
 * Generates a JWT for the user.
 * @param {Object} payload - Data to encode in the token (e.g., user ID).
 * @param {string} expiresIn - Expiry time for the token (default: "30d").
 * @returns {string} - The signed JWT.
 */
export const generateToken = (payload, expiresIn = "30d") => {
    return jwt.sign(payload, env.jwtSecret, { expiresIn });
};

/**
 * Verifies a JWT and decodes its payload.
 * @param {string} token - The JWT to verify.
 * @returns {Object} - The decoded payload if valid.
 * @throws {Error} - If the token is invalid or expired.
 */
export const verifyToken = (token) => {
    return jwt.verify(token, env.jwtSecret);
};
