import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { blogPostSchema } from "@/validators/blogValidator";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError } from "@/utils/errorHandler";

// GET /api/admin/blogs - List all blog posts
export async function GET() {
  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
    return apiSuccessResponse(blogs, "Blog posts retrieved successfully");
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/admin/blogs - Add new blog post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = blogPostSchema.parse(body);

    const newBlog = await prisma.blogPost.create({
      data: validatedData,
    });

    return apiSuccessResponse(newBlog, "Blog post created successfully", 201);
  } catch (error) {
    return handleApiError(error);
  }
}
