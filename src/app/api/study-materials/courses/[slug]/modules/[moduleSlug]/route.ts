import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/study-materials/courses/[slug]/modules/[moduleSlug]
export async function GET(
  req: Request,
  { params }: { params: { slug: string; moduleSlug: string } }
) {
  try {
    const { slug, moduleSlug } = params;
    const { searchParams } = new URL(req.url);
    const accessKey = searchParams.get("accessKey");

    // 1. Fetch course info
    const course = await prisma.studyMaterialCourse.findUnique({
      where: { slug },
      include: {
        modules: {
          orderBy: { moduleNumber: "asc" }
        }
      }
    });

    if (!course) {
      return NextResponse.json({ success: false, message: "Course not found" }, { status: 404 });
    }

    // 2. Find target module by slug or fallback number
    const targetModule = course.modules.find(
      (m: any) => m.slug === moduleSlug || m.moduleNumber.toString() === moduleSlug
    ) || course.modules[0];

    if (!targetModule) {
      return NextResponse.json({ success: false, message: "Module not found" }, { status: 404 });
    }

    const moduleNumber = targetModule.moduleNumber;

    // 3. Check if module is within free threshold
    const isFree = moduleNumber <= course.freeModulesCount;

    if (isFree) {
      return NextResponse.json({
        success: true,
        isLocked: false,
        course: {
          id: course.id,
          title: course.title,
          slug: course.slug,
          price: course.price,
          freeModulesCount: course.freeModulesCount,
          modulesCount: course.modules.length,
          allModules: course.modules.map((m: any) => ({
            id: m.id,
            moduleNumber: m.moduleNumber,
            slug: m.slug || m.moduleNumber.toString(),
            title: m.title,
            description: m.description,
            readTime: m.readTime,
            isFree: m.moduleNumber <= course.freeModulesCount
          }))
        },
        module: targetModule
      });
    }

    // 4. Paid module: check database for accessKey unlock
    let isUnlocked = false;

    if (accessKey) {
      const access = await prisma.studyCourseAccess.findFirst({
        where: {
          courseId: course.id,
          accessKey,
        }
      });
      if (access) {
        isUnlocked = true;
      }
    }

    if (isUnlocked) {
      return NextResponse.json({
        success: true,
        isLocked: false,
        course: {
          id: course.id,
          title: course.title,
          slug: course.slug,
          price: course.price,
          freeModulesCount: course.freeModulesCount,
          modulesCount: course.modules.length,
          allModules: course.modules.map((m: any) => ({
            id: m.id,
            moduleNumber: m.moduleNumber,
            slug: m.slug || m.moduleNumber.toString(),
            title: m.title,
            description: m.description,
            readTime: m.readTime,
            isFree: m.moduleNumber <= course.freeModulesCount
          }))
        },
        module: targetModule
      });
    }

    // Locked response: return metadata only, lock contentHtml
    return NextResponse.json({
      success: true,
      isLocked: true,
      course: {
        id: course.id,
        title: course.title,
        slug: course.slug,
        price: course.price,
        freeModulesCount: course.freeModulesCount,
        modulesCount: course.modules.length,
        allModules: course.modules.map((m: any) => ({
          id: m.id,
          moduleNumber: m.moduleNumber,
          slug: m.slug || m.moduleNumber.toString(),
          title: m.title,
          description: m.description,
          readTime: m.readTime,
          isFree: m.moduleNumber <= course.freeModulesCount
        }))
      },
      module: {
        id: targetModule.id,
        moduleNumber: targetModule.moduleNumber,
        slug: targetModule.slug || targetModule.moduleNumber.toString(),
        title: targetModule.title,
        description: targetModule.description,
        readTime: targetModule.readTime,
        contentHtml: null // Hidden due to lock
      }
    });

  } catch (error: any) {
    console.error("Failed to load module reader content:", error);
    return NextResponse.json({ success: false, message: "Error loading module" }, { status: 500 });
  }
}

