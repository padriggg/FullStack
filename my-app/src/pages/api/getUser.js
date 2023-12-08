// api/users.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();

    res.status(200).json({ data: allUsers });
  } catch (e) {
    console.log(e);
  }
};
