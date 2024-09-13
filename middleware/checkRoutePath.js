import { NextResponse } from "next/server";

function checkRoutePath(req) {
  console.log("Checking route path");

  const url = req.nextUrl.clone();
  const excludedRoutes = [
    "/api/user",
    "/api/signin",
    "/api/signup",
    "/api/authenticate",
  ];

  if (!excludedRoutes.includes(url.pathname)) {
    return NextResponse.json(
      { message: "Invalid route path!" },
      { status: 404 }
    );
  }

  return null;
}

export default checkRoutePath;
