import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "jvm-institute-super-secret-jwt-key-2026-production";
const secretKey = new TextEncoder().encode(JWT_SECRET);

export interface AdminJwtPayload {
  adminId: string;
  email: string;
  role: string;
  [key: string]: any;
}

export const ADMIN_AUTH_COOKIE = "jvm_admin_token";

export async function signAdminToken(
  payload: AdminJwtPayload,
  expiresIn: string = "7d"
): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey);
}

export async function verifyAdminToken(token: string): Promise<AdminJwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as unknown as AdminJwtPayload;
  } catch (error) {
    return null;
  }
}
