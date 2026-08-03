import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { blogPostSchema } from "@/validators/blogValidator";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

// PUT /api/admin/blogs/[id] - Update existing blog post
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const validatedData = blogPostSchema.partial().parse(body);

    const existing = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError("Blog post not found", 404);
    }

    const updatedBlog = await prisma.blogPost.update({
      where: { id },
      data: validatedData,
    });

    return apiSuccessResponse(updatedBlog, "Blog post updated successfully");
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE /api/admin/blogs/[id] - Delete a blog post
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const existing = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError("Blog post not found", 404);
    }

    await prisma.blogPost.delete({
      where: { id },
    });

    return apiSuccessResponse(null, "Blog post deleted successfully");
  } catch (error) {
    return handleApiError(error);
  }
}
