import {createUser} from "~/server/db/users.js";
import {userTransformer} from "~/server/transformers/user.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {
    username,
    surname,
    email,
    password,
    repeatPassword,
    name
  } = body

  if(!username || !email || !password || !repeatPassword || !name || !surname) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid params'
    }))
  }

  if(password !== repeatPassword) {
    return sendError(event, {
      statusCode: 400,
      statusMessage: 'Password and repeat password must be the same'
    })
  }

  const user = await createUser({
    username,
    email,
    password,
    name,
    surname,
    profileImage: 'https://picsum.photos/200'
  })

  return {
    user: userTransformer(user)
  }
})
