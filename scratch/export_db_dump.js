const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function exportDatabase() {
  console.log('📦 Exporting all database records...');
  
  const dump = {
    exportTimestamp: new Date().toISOString(),
    users: await prisma.user.findMany(),
    courses: await prisma.course.findMany(),
    enrollments: await prisma.enrollment.findMany(),
    events: await prisma.event.findMany(),
    placements: await prisma.placement.findMany(),
    blogPosts: await prisma.blogPost.findMany(),
    studyMaterials: await prisma.studyMaterial.findMany(),
    materialPurchases: await prisma.materialPurchase.findMany(),
    referralPayouts: await prisma.referralPayout.findMany(),
    leadEnquiries: await prisma.leadEnquiry.findMany(),
    admins: await prisma.admin.findMany(),
    siteSettings: await prisma.siteSetting.findMany(),
    studyMaterialCourses: await prisma.studyMaterialCourse.findMany(),
    studyMaterialModules: await prisma.studyMaterialModule.findMany(),
    studyCourseAccesses: await prisma.studyCourseAccess.findMany(),
  };

  const backupPath = path.join(__dirname, 'database_full_backup.json');
  fs.writeFileSync(backupPath, JSON.stringify(dump, null, 2));

  console.log(`✅ Complete database dump saved to: ${backupPath}`);
  console.log('Record Summary:');
  Object.keys(dump).forEach((key) => {
    if (Array.isArray(dump[key])) {
      console.log(` - ${key}: ${dump[key].length} records`);
    }
  });

  await prisma.$disconnect();
}

exportDatabase().catch((e) => {
  console.error('Export Error:', e);
  process.exit(1);
});
