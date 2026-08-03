import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { placementSchema } from "@/validators/placementValidator";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError } from "@/utils/errorHandler";

export const dynamic = "force-dynamic";


// GET /api/admin/placements - List all placements
export async function GET() {
  try {
    const placements = await prisma.placement.findMany({
      orderBy: { createdAt: "desc" },
    });
    return apiSuccessResponse(placements, "Placements retrieved successfully");
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/admin/placements - Add new placed student
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = placementSchema.parse(body);

    const newPlacement = await prisma.placement.create({
      data: validatedData,
    });

    return apiSuccessResponse(newPlacement, "Placed student added successfully", 201);
  } catch (error) {
    return handleApiError(error);
  }
}
