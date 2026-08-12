import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/study-materials/courses - Public list of courses
export async function GET() {
  try {
    const courses = await prisma.studyMaterialCourse.findMany({
      where: { isPublished: true },
      include: {
        modules: {
          select: {
            id: true,
            moduleNumber: true,
            slug: true,
            title: true,
            description: true,
            readTime: true,
            contentHtml: true,
          },
          orderBy: { moduleNumber: "asc" }
        }
      },
      orderBy: { createdAt: "asc" }
    });

    return NextResponse.json({ success: true, data: courses });
  } catch (error) {
    console.error("Failed to fetch study courses:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch study courses" }, { status: 500 });
  }
}

// POST /api/study-materials/courses - Admin create course
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, subject, badge, price, freeModulesCount, coverImage } = body;

    if (!title || !description) {
      return NextResponse.json({ success: false, message: "Title and description are required" }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const course = await prisma.studyMaterialCourse.create({
      data: {
        title,
        slug,
        description,
        subject: subject || "Data Engineering",
        badge: badge || "Popular",
        price: parseFloat(price) || 499,
        freeModulesCount: parseInt(freeModulesCount) || 1,
        coverImage: coverImage || "/course.jpg",
        isPublished: true,
      }
    });

    return NextResponse.json({ success: true, data: course });
  } catch (error: any) {
    console.error("Failed to create study course:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to create course" }, { status: 500 });
  }
}
