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
    const apiUrl = getUrl(req, "/api/authenticate");

    const result = await axios.post(apiUrl, { token });

    console.log("result.data: ", result.data);

    req.currentUser = await result.data;

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export default protectRoute;
