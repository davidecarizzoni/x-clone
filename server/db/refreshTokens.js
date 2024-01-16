import {prisma} from "~/server/db/index.js";

export const createRefreshToken = async (refreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken
  })
}
