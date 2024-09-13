import { NextResponse } from "next/server";
import protectRoute from "./middleware/protectRoute";
import checkRoutePath from "./middleware/checkRoutePath";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req) {
  const url = req.nextUrl.clone();

  // check if the route path matches
  const notFoundRoute = checkRoutePath(req);
  if (notFoundRoute) {
    return notFoundRoute;
  }

  // Only protect route tha is not /api/signin
  if (url.pathname !== "/api/signin" && url.pathname !== "/api/authenticate") {
    return protectRoute(req);
  }

  return NextResponse.next();
}
