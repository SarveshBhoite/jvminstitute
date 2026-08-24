import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/admin/leads - Fetch all website lead enquiries
export async function GET() {
  try {
    const leads = await prisma.leadEnquiry.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ success: true, data: leads });
  } catch (error: any) {
    console.error("Failed to fetch lead enquiries:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to fetch leads" }, { status: 500 });
  }
}
