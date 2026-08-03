import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Events
  await prisma.event.deleteMany();
  await prisma.event.createMany({
    data: [
      {
        slug: "enterprise-pyspark-kafka-databricks",
        title: "Enterprise Data Streaming with PySpark, Apache Kafka & Databricks",
        category: "upcoming",
        date: "Aug 15, 2026",
        time: "06:00 PM - 08:30 PM IST",
        mode: "JVM Pune Campus & Online",
        speakerName: "Rahul Deshmukh",
        speakerRole: "Principal Data Architect",
        speakerCompany: "Tier-1 Cloud Enterprise",
        speakerAvatar: "/place1.png",
        description: "Learn how to architect end-to-end real-time data streaming pipelines using PySpark Structured Streaming, Apache Kafka topics, and Delta Lake on Databricks with hands-on code walkthrough.",
        tags: ["PySpark", "Apache Kafka", "Databricks", "Data Streaming", "Delta Lake"],
        seatsTotal: 250,
        seatsFilled: 218,
        isFeatured: true,
      },
      {
        slug: "snowflake-modern-data-warehousing",
        title: "Snowflake Modern Data Warehousing & Zero-Copy Cloning Masterclass",
        category: "upcoming",
        date: "Aug 22, 2026",
        time: "11:00 AM - 01:30 PM IST",
        mode: "Virtual (Zoom Live)",
        speakerName: "Priya Sharma",
        speakerRole: "Senior Snowflake Consultant",
        speakerCompany: "Global Tech Solutions",
        speakerAvatar: "/place2.png",
        description: "Master Snowflake virtual warehouses, Micro-partitioning, Time Travel, Dynamic Tables, and Cost Optimization strategies used by Fortune 500 companies.",
        tags: ["Snowflake", "Data Warehousing", "SQL", "Cloud Data", "Time Travel"],
        seatsTotal: 300,
        seatsFilled: 245,
      },
      {
        slug: "jvm-tech-a-thon-2026",
        title: "JVM Tech-a-Thon 2026: 48-Hour National Data Engineering Hackathon",
        category: "hackathon",
        date: "Sep 05 - Sep 07, 2026",
        time: "Starts 06:00 PM IST",
        mode: "Hybrid",
        speakerName: "JVM Technical Board",
        speakerRole: "Hackathon Jury & Mentors",
        speakerCompany: "JVM Institute",
        speakerAvatar: "/jvm logo.jpeg",
        description: "Compete against India's top tech talent to build high-scale analytics engines & GenAI RAG applications. Prize Pool worth ₹1,00,000 + direct interview calls!",
        tags: ["Hackathon", "PySpark", "GenAI", "SQL", "AWS", "Snowflake"],
        seatsTotal: 500,
        seatsFilled: 380,
      },
    ],
  });

  // Seed Placements
  await prisma.placement.deleteMany();
  await prisma.placement.createMany({
    data: [
      {
        name: "Siddharth Bhoite",
        domain: "Data Engineering",
        placedRole: "Associate Data Engineer",
        company: "TCS",
        package: "8.5 LPA",
        hike: "140% Hike",
        image: "/place1.png",
        skills: "PySpark, Databricks, SQL",
        category: "data_engineering",
      },
      {
        name: "Priya Sharma",
        domain: "PySpark & Big Data",
        placedRole: "Big Data PySpark Engineer",
        company: "Infosys",
        package: "10.2 LPA",
        hike: "160% Hike",
        image: "/place2.png",
        skills: "PySpark, Hadoop, AWS",
        category: "pyspark_bigdata",
      },
    ],
  });

  // Seed Courses
  await prisma.course.deleteMany();
  await prisma.course.createMany({
    data: [
      {
        slug: "data-engineering-master-program",
        title: "Data Engineering Master Program (PySpark & Databricks)",
        shortDescription: "Complete hands-on Data Engineering course covering Python, SQL, PySpark, Databricks, Snowflake & AWS.",
        fullDescription: "Master real-time data streaming, cloud data warehousing, and ETL pipeline building with 100% placement support.",
        duration: "6 Months",
        mode: "Online & Classroom (Karve Nagar, Pune)",
        fullFee: 45000,
        advanceFee: 5000,
        isFeatured: true,
      },
    ],
  });

  // Seed Default Admin Account
  const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL || "admin@jvminstitute.com";
  const defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD || "Admin@JVM2026!";
  const defaultAdminName = process.env.DEFAULT_ADMIN_NAME || "JVM Super Admin";

  const hashedDefaultPassword = await bcrypt.hash(defaultAdminPassword, 10);

  await prisma.admin.upsert({
    where: { email: defaultAdminEmail.toLowerCase().trim() },
    update: {
      password: hashedDefaultPassword,
      fullName: defaultAdminName,
      role: "SUPER_ADMIN",
      isActive: true,
    },
    create: {
      email: defaultAdminEmail.toLowerCase().trim(),
      password: hashedDefaultPassword,
      fullName: defaultAdminName,
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
