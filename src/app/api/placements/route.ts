import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/placements - Retrieve student placements from PostgreSQL
export async function GET() {
  try {
    const placements = await prisma.placement.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, placements });
  } catch (error: any) {
    console.error("Error fetching placements:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch placements" },
      { status: 500 }
    );
  }
}
