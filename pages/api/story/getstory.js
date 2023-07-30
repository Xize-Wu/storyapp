import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getStory(req, res) {
  if (req.method === 'GET') {
  const s_id = parseInt(req.body.storyid)
  console.log(s_id)
  try {
    const story = await prisma.stories.findFirst({
      where: { id: 1 },
      select: {
          user_id:true,
          created_at:true,
          title:true,
          content:true,
          parent_comments:true,
          user:{
            select : {username:true}
          }
        }
      })
// console.log(story);
res.status(200).json({ story })

    }catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' }); // Sending an error response
}
  } 

}
