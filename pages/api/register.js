import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function getUsers() {
//   const users = await prisma.users.findMany();
//   return users;
// }

// export default async function handler(req, res) {
//   try {
//     const result = await getUsers();
//     res.status(200).json({ result });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
/*
username" varchar NOT NULL UNIQUE,
  "email" varchar NOT NULL UNIQUE,
  "password" varchar,
  "created_at" timestamp DEFAULT (now()),
  "application_message" text NOT NULL,
*/ 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username,
      email,
      password,
      application_message } = req.body;
      console.log(req.body)

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
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
