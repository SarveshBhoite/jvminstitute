import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/study-materials/access-check
export async function POST(req: Request) {
  try {
    const { courseId, accessKey, accessCode, userEmailPhone } = await req.json();

    if (!courseId) {
      return NextResponse.json({ success: false, message: "Course ID required" }, { status: 400 });
    }

    // 1. Check direct accessKey match in DB
    if (accessKey) {
      const access = await prisma.studyCourseAccess.findFirst({
        where: {
          courseId,
          accessKey,
        }
      });

      if (access) {
        return NextResponse.json({ success: true, isUnlocked: true, accessCode: access.accessCode });
      }
    }

    // 2. Check 6-digit access code or email/phone restoration query
    if (accessCode || userEmailPhone) {
      const access = await prisma.studyCourseAccess.findFirst({
        where: {
          courseId,
          OR: [
            accessCode ? { accessCode: accessCode.trim() } : {},
            userEmailPhone ? { userEmail: userEmailPhone.trim().toLowerCase() } : {},
            userEmailPhone ? { userPhone: userEmailPhone.trim() } : {},
          ]
        }
      });

      if (access) {
        return NextResponse.json({
          success: true,
          isUnlocked: true,
          accessCode: access.accessCode,
          restoredAccessKey: access.accessKey, // Allow client to save to local storage
        });
      }
    }

    return NextResponse.json({ success: true, isUnlocked: false });
  } catch (error: any) {
    console.error("Access check error:", error);
    return NextResponse.json({ success: false, message: "Failed to verify access" }, { status: 500 });
  }
}
