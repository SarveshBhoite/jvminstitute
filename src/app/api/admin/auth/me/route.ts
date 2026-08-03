import { NextRequest } from "next/server";
import { verifyAdminToken, ADMIN_AUTH_COOKIE } from "@/lib/jwt";
import { AdminAuthService } from "@/services/adminAuthService";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

export const dynamic = "force-dynamic";


export async function GET(req: NextRequest) {
  try {
    // Check HTTP-only cookie first, then Authorization Bearer header
    let token = req.cookies.get(ADMIN_AUTH_COOKIE)?.value;

    if (!token) {
      const authHeader = req.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (!token) {
      throw new ApiError("Unauthorized access. Token missing", 401);
    }

    const payload = await verifyAdminToken(token);
    if (!payload || !payload.adminId) {
      throw new ApiError("Invalid or expired authentication token", 401);
    }

    const adminProfile = await AdminAuthService.getProfile(payload.adminId);

    return apiSuccessResponse(adminProfile, "Admin profile retrieved successfully");
  } catch (error) {
    return handleApiError(error);
  }
}
