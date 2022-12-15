import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const verify = request.cookies.get("token");
  const url = request.url;

  if (!verify?.value && url.includes("/products")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (verify?.value && url.includes("/login")) {
    return NextResponse.redirect(new URL("/products", request.url));
  } else if (verify?.value && url.includes("/register")) {
    return NextResponse.redirect(new URL("/products", request.url));
  } else if (!verify?.value && url.includes("/product/create")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
