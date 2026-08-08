const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateSakshi() {
  const updated = await prisma.placement.updateMany({
    where: { name: 'Sakshi' },
    data: {
      image: '/placements/Sakshi.png'
    }
  });
  console.log('Updated Sakshi records:', updated.count);
  await prisma.$disconnect();
}

updateSakshi().catch(console.error);
