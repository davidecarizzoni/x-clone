import jwt from 'jsonwebtoken'

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  })
}

export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: '1d',
  })
}

export const generateTokens = ({ id: userId }) => {
  const accessToken = generateAccessToken(userId)
  const refreshToken = generateRefreshToken(userId)
  return { accessToken, refreshToken }
}

export const sendRefreshToken = (event, token) => {
  console.debug({event})
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true
  })
}
