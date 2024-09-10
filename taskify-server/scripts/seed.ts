import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Do some prisma create or update in here
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
