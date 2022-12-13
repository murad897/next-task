import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//   const token = request.headers.get("Authentication");
//   if (token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   } else {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
}

export const config = {
  matcher: ["/"],
};
