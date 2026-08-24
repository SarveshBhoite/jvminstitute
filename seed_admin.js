const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seedAdminCredentials() {
  const email = process.env.DEFAULT_ADMIN_EMAIL || "infojvminstitute@gmail.com";
  const rawPassword = process.env.DEFAULT_ADMIN_PASSWORD || "Jvm123";
  const fullName = process.env.DEFAULT_ADMIN_NAME || "JVM Super Admin";

  console.log(`Seeding Admin user: ${email}...`);

  const passwordHash = await bcrypt.hash(rawPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: {
      password: passwordHash,
      fullName,
      isActive: true,
      role: "SUPER_ADMIN",
    },
    create: {
      email,
      password: passwordHash,
      fullName,
      isActive: true,
      role: "SUPER_ADMIN",
    },
  });

  console.log(`✅ Successfully seeded Admin account: ${admin.email}`);
  await prisma.$disconnect();
}

seedAdminCredentials().catch((err) => {
  console.error("Admin Seed Error:", err);
  prisma.$disconnect();
  process.exit(1);
});
