import { NextResponse } from "next/server";

export function middleware(request: Request) {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/"],
};
