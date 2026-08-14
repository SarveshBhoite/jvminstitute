const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const placements = await prisma.placement.findMany();
  
  const getPackageNumeric = (pkgStr) => {
    if (!pkgStr) return 0;
    const match = String(pkgStr).match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const sorted = [...placements].sort((a, b) => getPackageNumeric(b.package) - getPackageNumeric(a.package));

  console.log('TOP 5 HIGHEST PACKAGES IN DB:');
  sorted.slice(0, 10).forEach(p => {
    console.log(` - ${p.name}: ${p.package} (${p.company}) [Parsed: ${getPackageNumeric(p.package)}]`);
  });

  await prisma.$disconnect();
}

main().catch(console.error);
