import { prisma } from "~/server/db/index.js";

export const createUser = (userData) => {
  return prisma.user.create({
    data: userData,
  })
}
