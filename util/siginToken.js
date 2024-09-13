import { SignJWT } from "jose";

export const authenticateUser = async (userId) => {
  // Create a new JWT token
  const token = await new SignJWT({ id: userId }) // Set payload with user id
    .setProtectedHeader({ alg: "HS256" }) // Specify the algorithm
    .setIssuedAt() // Set the issued at time
    .setExpirationTime(process.env.JWT_EXPIRES_IN) // Set expiration time
    .sign(new TextEncoder().encode(process.env.JWT_SECRET)); // Sign the token with your secret

  return token;
};
