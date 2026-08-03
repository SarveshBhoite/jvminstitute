import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken, ADMIN_AUTH_COOKIE } from "@/lib/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect all /api/admin/* endpoints EXCEPT /api/admin/auth/login
  if (pathname.startsWith("/api/admin/") && pathname !== "/api/admin/auth/login") {
    let token = req.cookies.get(ADMIN_AUTH_COOKIE)?.value;

    if (!token) {
      const authHeader = req.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Authentication token missing" },
        { status: 401 }
      );
    }

    const payload = await verifyAdminToken(token);
    if (!payload || !payload.adminId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Token invalid or expired" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*"],
};
