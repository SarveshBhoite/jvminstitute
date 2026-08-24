import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/admin/unlocks - Get all course purchases / unlocks
export async function GET() {
  try {
    const unlocks = await prisma.studyCourseAccess.findMany({
      include: {
        course: {
          select: {
            title: true,
            slug: true,
            price: true,
            subject: true,
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ success: true, data: unlocks });
  } catch (error: any) {
    console.error("Failed to fetch course unlocks:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to fetch course unlocks" }, { status: 500 });
  }
}
