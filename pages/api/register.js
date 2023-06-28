import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export default async function handler(req, res) {
  try {
    const result = await getUsers();
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
