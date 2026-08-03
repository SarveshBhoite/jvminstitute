import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { signAdminToken, AdminJwtPayload } from "@/lib/jwt";
import { ApiError } from "@/utils/errorHandler";
import { AdminLoginInput } from "@/validators/adminAuthValidator";

export class AdminAuthService {
  /**
   * Authenticates Admin with email and password
   */
  static async login(input: AdminLoginInput) {
    const { email, password } = input;

    const admin = await prisma.admin.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!admin) {
      throw new ApiError("Invalid email or password", 401);
    }

    if (!admin.isActive) {
      throw new ApiError("Admin account is disabled. Contact system administrator", 403);
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new ApiError("Invalid email or password", 401);
    }

    const payload: AdminJwtPayload = {
      adminId: admin.id,
      email: admin.email,
      role: admin.role,
    };

    const token = await signAdminToken(payload);

    const { password: _, ...adminProfile } = admin;

    return {
      admin: adminProfile,
      token,
    };
  }

  /**
   * Fetches Admin Profile by ID (excluding password hash)
   */
  static async getProfile(adminId: string) {
    const admin = await prisma.admin.findUnique({
      where: { id: adminId },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!admin) {
      throw new ApiError("Admin account not found", 404);
    }

    if (!admin.isActive) {
      throw new ApiError("Admin account is disabled", 403);
    }

    return admin;
  }
}
