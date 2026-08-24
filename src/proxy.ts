import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, isValidSessionValue } from "@/lib/portal-auth";

// Chequeo optimista (solo lee la cookie, sin BD) en cada request a /portal/*.
// El chequeo "seguro" vive en (shell)/layout.tsx vía requirePortalSession().
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/portal/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (isValidSessionValue(session)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/portal/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/portal/:path*"],
};
