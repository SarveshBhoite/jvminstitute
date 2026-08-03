import { NextRequest } from "next/server";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError } from "@/utils/errorHandler";
import { ADMIN_AUTH_COOKIE } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const response = apiSuccessResponse(null, "Admin logged out successfully", 200);

    // Clear HTTP-only cookie
    response.cookies.set({
      name: ADMIN_AUTH_COOKIE,
      value: "",
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
