const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function seed() {
  console.log("Reading clean_placements_seed.json...");
  const placements = JSON.parse(fs.readFileSync('clean_placements_seed.json', 'utf-8'));
  
  // Sort descending by package_num
  placements.sort((a, b) => (b.package_num || 0) - (a.package_num || 0));

  console.log(`Deleting existing placements...`);
  await prisma.placement.deleteMany({});

  console.log(`Inserting ${placements.length} placements...`);
  
  const records = placements.map(p => ({
    name: p.name,
    domain: p.domain || "Data Engineering",
    placedRole: p.role || "Data Engineer",
    company: p.company || "MNC",
    package: p.package_formatted || `${p.package_num} LPA`,
    image: p.image || "/place1.png",
    skills: p.skills || "SQL, Python, PySpark, Cloud Data Engineering",
    category: p.category || "data_engineering",
    isFeatured: p.package_num >= 13.0,
    testimonial: p.review || "Excellent training and placement support at JVM Institute.",
  }));

  await prisma.placement.createMany({
    data: records
  });

  const count = await prisma.placement.count();
  console.log(`Successfully seeded ${count} placements into the database!`);
  
  // Print Top 10
  const top10 = await prisma.placement.findMany({
    take: 10
  });
  console.log("\nTop Seeding Order (Highest Package First):");
  records.slice(0, 10).forEach((r, i) => {
    console.log(`${i+1}. ${r.name} | ${r.company} | ${r.package} | ${r.placedRole}`);
  });

  await prisma.$disconnect();
}

seed().catch(err => {
  console.error("Seeding Error:", err);
  prisma.$disconnect();
  process.exit(1);
});
