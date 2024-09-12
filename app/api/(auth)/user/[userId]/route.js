import { NextResponse } from "next/server";
import User from "@/lib/model/userModel";
import connectDB from "@/lib/db";
import { Types } from "mongoose";

export const PATCH = async (req, context) => {
  try {
    const { userId } = context.params;
    const body = await req.json();
    await connectDB();
    if (!userId) {
      return NextResponse.json(
        { message: "ID user is not found!" },
        { status: 404 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstname: body.firstname, lastname: body.lastname },
      { new: true }
    );
    return NextResponse.json(
      { message: "Successfully updated user!", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};
