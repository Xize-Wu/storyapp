import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password, application_message } = req.body;

    try {
      const createdUser = await prisma.users.create({
        data: {
          username,
          email,
          password,
          application_message,
        },
      });

      res.status(201).json({ message: 'User created successfully', user: createdUser });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          res.status(201).json({ message: 'Duplicate email address' });
        } else {
          res.status(201).json({ message: 'Invalid data provided' });
        }
      } else {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
