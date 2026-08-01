import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/study-materials - Retrieve study materials from PostgreSQL
export async function GET() {
  try {
    const materials = await prisma.studyMaterial.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, materials });
  } catch (error: any) {
    console.error("Error fetching study materials:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch study materials" },
      { status: 500 }
    );
  }
}
