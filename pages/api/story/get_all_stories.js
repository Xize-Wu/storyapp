import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function get_all_stories(req, res) {
  if (req.method === 'GET') {
    try {
      const stories = await prisma.stories.findMany({
        include: {
          user: {
            select: {
              username: true
            }
          }
        }
      });

      res.status(200).json(stories);
    } catch (error) {
      console.error('Error fetching stories:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
}
