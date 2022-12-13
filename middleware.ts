import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.headers.entries);
  const token = request.headers.get("Authorization");
  if (token) {
    return NextResponse.redirect(new URL("/products", request.url));
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/products"],
};
