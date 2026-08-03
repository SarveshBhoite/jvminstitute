import { NextRequest, NextResponse } from "next/server";
import { adminLoginSchema } from "@/validators/adminAuthValidator";
import { AdminAuthService } from "@/services/adminAuthService";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError } from "@/utils/errorHandler";
import { ADMIN_AUTH_COOKIE } from "@/lib/jwt";

export const dynamic = "force-dynamic";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = adminLoginSchema.parse(body);

    const { admin, token } = await AdminAuthService.login(validatedData);

    const response = apiSuccessResponse(
      { admin, token },
      "Admin login successful",
      200
    );

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: ADMIN_AUTH_COOKIE,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
