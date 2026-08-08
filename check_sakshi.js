const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const sakshi = await prisma.placement.findMany({
    where: { name: { contains: 'Sakshi', mode: 'insensitive' } }
  });
  console.log('Sakshi records:', sakshi);
  await prisma.$disconnect();
}

check().catch(console.error);
