import { NextResponse } from "next/server";

// 同源請求
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["http://localhost:3000"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  console.log(allowedOrigins);
  const { pathname, origin } = new URL(request.url);
  console.log("middleware request", pathname, request.method, origin);
  if (pathname.startsWith("/api/home")) {
    // return NextResponse.redirect(new URL("/home", request.url));
  }
  if (origin && !allowedOrigins.includes(origin)) {
    return new Response("Not allowed", { status: 403 });
  }
  // return new Response("Hello, Next.js!");
}

export const config = {
  matcher: "/api/:path*",
};
