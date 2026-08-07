const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const placements = await prisma.placement.findMany({
    orderBy: { createdAt: 'desc' }
  });
  console.log(`DB Count: ${placements.length} records in placements table.`);
  placements.slice(0, 10).forEach((p, i) => {
    console.log(`${i+1}. ${p.name} - ${p.company} - ${p.package}`);
  });
  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  prisma.$disconnect();
});
