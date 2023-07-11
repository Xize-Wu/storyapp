import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const {email, password} = req.body;
      console.log(req.body)

    try {
      const newLogin = await prisma.users.findFirst({
        where: {email,password},
        select: {username: true}, 
      });
      console.log(newLogin);
      res.status(201).json({ message: 'Login attempt received', user: newLogin.username });
    } catch (error) {
      console.error(error);
    }
  }}