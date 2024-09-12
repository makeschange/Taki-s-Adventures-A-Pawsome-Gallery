import { NextResponse } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req) {
  console.log("url:", req.method);

  return NextResponse.next();
}
