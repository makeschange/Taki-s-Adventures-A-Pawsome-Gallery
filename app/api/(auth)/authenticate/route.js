import User from "@/lib/model/userModel";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { jwtVerify } from "jose";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { message: "You are not logged in!" },
        { status: 401 }
      );
    }

    await connectDB();

    try {
      const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secretKey);

      // Check if user exists in the database by their ID from the token payload.
      const currentUser = await User.findById(payload.id);

      if (!currentUser) {
        return NextResponse.json(
          { message: "No user belongs to this token!" },
          { status: 404 }
        );
      }

      return NextResponse.json(currentUser);
    } catch (error) {
      return NextResponse.json({ message: "Invalid Token!" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching..", error: error.message },
      { status: 500 }
    );
  }
};
