import User from "@/lib/model/userModel";
import { authenticateUser } from "@/util/siginToken";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    // check email and password
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password is required!" },
        { status: 404 }
      );
    }
    await connectDB();

    // check email if existing
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json(
        { message: "It seems that you have use  an incorrect email." },
        { status: 404 }
      );
    }

    // confirm password
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "It seems that you have use  an incorrect password." },
        { status: 404 }
      );
    }

    // send response to user
    const token = await authenticateUser(user._id);
    return NextResponse.json(
      { message: "Successfully login!", token },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};
