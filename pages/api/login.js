import { PrismaClient } from '@prisma/client';
import { serialize } from 'cookie';

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const {email, password} = req.body;

    try {
      const newLogin = await prisma.users.findFirst({
        where: {email,password},
        select: {username: true}, 
      });
      
      const cookie = serialize("username", newLogin.username, {
        httpOnly: false,
        path: "/",
      });
      res.setHeader("Set-Cookie", cookie);
    
      res.status(201).json({ message: 'Login attempt received', user: newLogin.username });
    } catch (error) {
      console.error(error);
    }
  }}