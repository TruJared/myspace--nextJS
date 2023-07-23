const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      image:
        "https://picsum.photos/seed/c8d99ccf-4b95-4cd3-bbcf-a959589e8366/400.webp",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      image:
        "https://picsum.photos/seed/8b1ffe6b-0b38-4219-bfe0-094c72db4c57/400.webp",
    },
  });

  const charlie = await prisma.user.upsert({
    where: { email: "charlie@prisma.io" },
    update: {},
    create: {
      email: "charlie@prisma.io",
      name: "Charlie",
      image: "/mememan.png",
    },
  });

  const david = await prisma.user.upsert({
    where: { email: "david@prisma.io" },
    update: {},
    create: {
      email: "david@prisma.io",
      name: "David",
      image: "/mememan.png",
    },
  });

  const emma = await prisma.user.upsert({
    where: { email: "emma@prisma.io" },
    update: {},
    create: {
      email: "emma@prisma.io",
      name: "Emma",
      image: "/mememan.png",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
