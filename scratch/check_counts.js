const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const counts = {
    users: await prisma.user.count(),
    courses: await prisma.course.count(),
    enrollments: await prisma.enrollment.count(),
    events: await prisma.event.count(),
    placements: await prisma.placement.count(),
    blogPosts: await prisma.blogPost.count(),
    studyMaterials: await prisma.studyMaterial.count(),
    leads: await prisma.leadEnquiry.count(),
    admins: await prisma.admin.count(),
    siteSettings: await prisma.siteSetting.count(),
    studyMaterialCourses: await prisma.studyMaterialCourse.count(),
    studyMaterialModules: await prisma.studyMaterialModule.count(),
    studyCourseAccesses: await prisma.studyCourseAccess.count(),
  };
  console.log('CURRENT_DATABASE_COUNTS:', JSON.stringify(counts, null, 2));
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
