import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/study-materials/courses/[slug]/modules - Add or Update Module
export async function POST(req: Request, { params }: { params: { slug: string } }) {
  try {
    const courseIdOrSlug = params.slug;
    const body = await req.json();
    const { moduleId, moduleNumber, title, description, contentHtml, readTime } = body;

    if (!title || !contentHtml) {
      return NextResponse.json({ success: false, message: "Module title and HTML content are required" }, { status: 400 });
    }

    // Resolve course ID if slug passed
    let courseId = courseIdOrSlug;
    if (!courseIdOrSlug.startsWith("cl") && !courseIdOrSlug.startsWith("cm")) {
      const course = await prisma.studyMaterialCourse.findUnique({ where: { slug: courseIdOrSlug } });
      if (course) courseId = course.id;
    }


    const moduleSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    let moduleRecord;

    if (moduleId) {
      // Update existing module
      moduleRecord = await prisma.studyMaterialModule.update({
        where: { id: moduleId },
        data: {
          moduleNumber: parseInt(moduleNumber) || 1,
          slug: moduleSlug,
          title,
          description: description || "",
          contentHtml,
          readTime: readTime || "10 min read",
        }
      });
    } else {
      // Create new module
      moduleRecord = await prisma.studyMaterialModule.create({
        data: {
          courseId,
          moduleNumber: parseInt(moduleNumber) || 1,
          slug: moduleSlug,
          title,
          description: description || "",
          contentHtml,
          readTime: readTime || "10 min read",
        }
      });
    }

    return NextResponse.json({ success: true, data: moduleRecord });
  } catch (error: any) {
    console.error("Failed to save module:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to save module" }, { status: 500 });
  }
}

// DELETE /api/study-materials/courses/[id]/modules?moduleId=xxx - Delete module
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const moduleId = searchParams.get("moduleId");

    if (!moduleId) {
      return NextResponse.json({ success: false, message: "moduleId is required" }, { status: 400 });
    }

    await prisma.studyMaterialModule.delete({ where: { id: moduleId } });
    return NextResponse.json({ success: true, message: "Module deleted successfully" });
  } catch (error: any) {
    console.error("Failed to delete module:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to delete module" }, { status: 500 });
  }
}
