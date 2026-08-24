const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function importToTargetDb(targetConnectionString) {
  if (!targetConnectionString) {
    throw new Error('Please provide target database connection string as argument or set TARGET_DATABASE_URL');
  }

  const dumpPath = path.join(__dirname, 'database_full_backup.json');
  if (!fs.existsSync(dumpPath)) {
    throw new Error(`Backup file not found at: ${dumpPath}. Run export_db_dump.js first.`);
  }

  const dump = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));
  console.log(`🚀 Preparing import to Live Target Database...`);

  // Target Prisma Client instance
  const targetPrisma = new PrismaClient({
    datasources: {
      db: {
        url: targetConnectionString,
      },
    },
  });

  try {
    console.log('📌 Synchronizing Schema to Target Database...');
    // Connect & test
    await targetPrisma.$connect();
    console.log('✅ Connected to target database.');

    // Import Admins
    if (dump.admins && dump.admins.length > 0) {
      console.log(` importing ${dump.admins.length} admins...`);
      for (const item of dump.admins) {
        await targetPrisma.admin.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Users
    if (dump.users && dump.users.length > 0) {
      console.log(` importing ${dump.users.length} users...`);
      for (const item of dump.users) {
        await targetPrisma.user.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Courses
    if (dump.courses && dump.courses.length > 0) {
      console.log(` importing ${dump.courses.length} courses...`);
      for (const item of dump.courses) {
        await targetPrisma.course.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Events
    if (dump.events && dump.events.length > 0) {
      console.log(` importing ${dump.events.length} events...`);
      for (const item of dump.events) {
        await targetPrisma.event.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Placements
    if (dump.placements && dump.placements.length > 0) {
      console.log(` importing ${dump.placements.length} placements...`);
      for (const item of dump.placements) {
        await targetPrisma.placement.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Blog Posts
    if (dump.blogPosts && dump.blogPosts.length > 0) {
      console.log(` importing ${dump.blogPosts.length} blog posts...`);
      for (const item of dump.blogPosts) {
        await targetPrisma.blogPost.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Study Material Courses
    if (dump.studyMaterialCourses && dump.studyMaterialCourses.length > 0) {
      console.log(` importing ${dump.studyMaterialCourses.length} study material courses...`);
      for (const item of dump.studyMaterialCourses) {
        await targetPrisma.studyMaterialCourse.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Study Material Modules
    if (dump.studyMaterialModules && dump.studyMaterialModules.length > 0) {
      console.log(` importing ${dump.studyMaterialModules.length} study material modules...`);
      for (const item of dump.studyMaterialModules) {
        await targetPrisma.studyMaterialModule.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Lead Enquiries
    if (dump.leadEnquiries && dump.leadEnquiries.length > 0) {
      console.log(` importing ${dump.leadEnquiries.length} lead enquiries...`);
      for (const item of dump.leadEnquiries) {
        await targetPrisma.leadEnquiry.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    // Import Site Settings
    if (dump.siteSettings && dump.siteSettings.length > 0) {
      console.log(` importing ${dump.siteSettings.length} site settings...`);
      for (const item of dump.siteSettings) {
        await targetPrisma.siteSetting.upsert({
          where: { id: item.id },
          update: item,
          create: item,
        });
      }
    }

    console.log('🎉 SUCCESS: All database records transferred to Live target database seamlessly!');

  } catch (error) {
    console.error('❌ Error during import:', error);
  } finally {
    await targetPrisma.$disconnect();
  }
}

const targetUrl = process.argv[2] || process.env.TARGET_DATABASE_URL;
importToTargetDb(targetUrl);
