import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

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
