import {findUserByEmail} from "~/server/db/users.js";
import {userTransformer} from "~/server/transformers/user.js";
import bcrypt from "bcrypt";
import {generateTokens, sendRefreshToken} from "~/server/utils/jwt.js";
import {createRefreshToken} from "~/server/db/refreshTokens.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {email, password} = body

  if(!email || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Password and email are required'
    }))
  }

  // check if user exists
  const user = await findUserByEmail(email)
  if (!user) {
    return sendError(event, createError({
      statusCode: 404,
      statusMessage: 'User not found'
    }))
  }

  // check if password is correct
  const hasSamePassword = bcrypt.compareSync(password, user?.password)
  if (!hasSamePassword) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Authentication failed'
    }))
  }

  // generate token
  const { accessToken, refreshToken } = generateTokens(user)

  // save refresh token
  await createRefreshToken({
    token: refreshToken,
    userId: user?.id
  })

  // add http only cookie
  sendRefreshToken(event, refreshToken)

  return {
    accessToken,
    refreshToken,
    user: userTransformer(user)
  }

})
