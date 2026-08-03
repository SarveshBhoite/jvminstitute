import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError } from "@/utils/errorHandler";

// GET /api/blogs - Get all published blog posts for public view
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("query");

    const where: any = {};

    if (category && category !== "All Blogs") {
      where.category = category;
    }

    if (query) {
      where.OR = [
        { title: { contains: query, mode: "insensitive" } },
        { excerpt: { contains: query, mode: "insensitive" } },
        { tags: { contains: query, mode: "insensitive" } },
      ];
    }

    const blogs = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return apiSuccessResponse(blogs, "Blogs fetched successfully");
  } catch (error) {
    return handleApiError(error);
  }
}
