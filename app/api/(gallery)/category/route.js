import getCurrentUser from "@/util/getCurrentUser";
import { NextResponse } from "next/server";
import User from "@/lib/model/userModel";
import Category from "@/lib/model/categoryModel";
import connectDB from "@/lib/db";

export const GET = async (req) => {
  try {
    await connectDB();
    const categories = await Category.find();
    if (!categories) {
      return NextResponse.json(
        { message: "No categories found." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Successfull!", data: { categories: categories } },
      { status: 500 }
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
    const currentUser = getCurrentUser(req);
    console.log("currentUser", currentUser);

    const body = await req.json();
    const { category } = body;

    if (!category) {
      return NextResponse.json(
        { message: "Category is required." },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findById(currentUser._id);

    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const categoryExists = await Category.checkExistingCategory(category);

    if (categoryExists) {
      return NextResponse.json(
        { message: "Category already exists!" },
        { status: 409 }
      );
    }

    const newCategory = await Category.create({
      category,
      user: user._id,
    });

    return NextResponse.json(
      {
        message: "Successfully post category!",
        data: { category: newCategory },
      },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};
