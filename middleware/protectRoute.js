import { NextResponse } from "next/server";
import axios from "axios";
import getUrl from "@/util/getUrl";
import { jwtVerify } from "jose";

async function protectRoute(req) {
  let token;
  if (
    req.headers.get("authorization") &&
    req.headers.get("authorization").startsWith("Bearer")
  ) {
    token = req.headers.get("authorization").split(" ")[1];
  }

  if (!token) {
    return NextResponse.json({ message: "No token sent!" }, { status: 401 });
  }

  try {
    const result = await axios.post(`${req.nextUrl.origin}/api/authenticate`, {
      token,
    });

    req.currentUser = await result.data;

    const response = NextResponse.next();

    response.cookies.set("user", JSON.stringify(result.data), {
      httpOnly: true,
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export default protectRoute;
