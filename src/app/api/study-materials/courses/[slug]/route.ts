import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT /api/study-materials/courses/[slug] - Update course
export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  try {
    const courseIdOrSlug = params.slug;
    const body = await req.json();
    const { title, description, subject, badge, price, freeModulesCount, coverImage, isPublished } = body;

    const course = await prisma.studyMaterialCourse.update({
      where: courseIdOrSlug.startsWith("cl") || courseIdOrSlug.startsWith("cm")
        ? { id: courseIdOrSlug }
        : { slug: courseIdOrSlug },
      data: {
        title,
        description,
        subject,
        badge,
        price: parseFloat(price),
        freeModulesCount: parseInt(freeModulesCount),
        coverImage,
        isPublished: isPublished !== undefined ? Boolean(isPublished) : true,
      }
    });

    return NextResponse.json({ success: true, data: course });
  } catch (error: any) {
    console.error("Failed to update course:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to update course" }, { status: 500 });
  }
}

// DELETE /api/study-materials/courses/[slug] - Delete course
export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  try {
    const courseIdOrSlug = params.slug;
    
    if (courseIdOrSlug.startsWith("cl") || courseIdOrSlug.startsWith("cm")) {
      await prisma.studyMaterialCourse.delete({ where: { id: courseIdOrSlug } });
    } else {
      await prisma.studyMaterialCourse.delete({ where: { slug: courseIdOrSlug } });
    }

    return NextResponse.json({ success: true, message: "Course deleted successfully" });
  } catch (error: any) {
    console.error("Failed to delete course:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to delete course" }, { status: 500 });
  }
}

