import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

export const dynamic = "force-dynamic";

// PUT /api/admin/placements/[id] - Update a placement record
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    const existing = await prisma.placement.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError("Placement record not found", 404);
    }

    const updatedPlacement = await prisma.placement.update({
      where: { id },
      data: {
        name: body.name,
        domain: body.domain,
        placedRole: body.placedRole,
        company: body.company,
        package: body.package,
        skills: body.skills,
        image: body.image,
        category: body.category,
        isFeatured: Boolean(body.isFeatured),
        testimonial: body.testimonial,
      },
    });

    return apiSuccessResponse(updatedPlacement, "Placement record updated successfully");
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE /api/admin/placements/[id] - Delete a placement record
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const existing = await prisma.placement.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError("Placement record not found", 404);
    }

    await prisma.placement.delete({
      where: { id },
    });

    return apiSuccessResponse(null, "Placement record deleted successfully");
  } catch (error) {
    return handleApiError(error);
  }
}
