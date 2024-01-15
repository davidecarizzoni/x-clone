import jwt from 'jsonwebtoken'

export const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
  const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
  return { accessToken, refreshToken }
}
