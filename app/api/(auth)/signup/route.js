import User from "@/lib/model/userModel";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();
    const myPassword = "taki#07";

    const user = {
      firstname: "Arnulfo",
      lastname: "Caceres",
      email: "arn@test.com",
      password: myPassword,
    };

    const newUser = await User.create(user);

    return NextResponse.json(
      { message: "Successfully registered user!", user: newUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};
