import { NextResponse } from "next/server";
import User from "@/lib/model/userModel";
import connectDB from "@/lib/db";

export const GET = async (req) => {
  console.log("request user: ", req.currentUser);

  try {
    await connectDB();
    const user = await User.find();
    return NextResponse.json(
      { message: "Success", user: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json(
      { message: "Successfully create user!", user: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};
