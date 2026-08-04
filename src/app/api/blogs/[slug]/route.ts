import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

export const dynamic = "force-dynamic";

// GET /api/blogs/[slug] - Get single blog post by slug
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const blog = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (!blog) {
      throw new ApiError("Blog post not found", 404);
    }

    return apiSuccessResponse(blog, "Blog post fetched successfully");
  } catch (error) {
    return handleApiError(error);
  }
}
