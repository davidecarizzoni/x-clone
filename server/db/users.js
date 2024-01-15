import { prisma } from "~/server/db/index.js";
import bcrypt from 'bcrypt';

export const createUser = (userData) => {
  return prisma.user.create({
    data: {
      ...userData,
      password: bcrypt.hashSync(userData.password, 10)
    },
  })
}

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email
    }
  })
}
