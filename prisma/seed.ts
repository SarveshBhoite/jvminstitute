import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting database seeding...");

  const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL || "admin@jvminstitute.com";
  const defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || "Admin@JVM2026!";
  const defaultAdminName = process.env.DEFAULT_ADMIN_NAME || "JVM Super Admin";

  const passwordHash = await bcrypt.hash(defaultAdminPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { email: defaultAdminEmail.toLowerCase().trim() },
    update: {
      fullName: defaultAdminName,
      password: passwordHash,
      role: "SUPER_ADMIN",
      isActive: true,
    },
    create: {
      fullName: defaultAdminName,
      email: defaultAdminEmail.toLowerCase().trim(),
      password: passwordHash,
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });

  console.log("✅ Seed completed successfully!");
  console.log(`👤 Admin Account: ${admin.email}`);
  console.log(`🔑 Role: ${admin.role}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
