import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function get_all_stories(req, res) {
  if (req.method === 'GET') {
    try {
      const rows = await prisma.stories.findMany();
      res.status(200).json(rows)
    } catch (error) {
      console.error('Error fetching rows:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  
  }
}
