export const userTransformer = (user) => {
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    name: user.name,
    surname: user.surname,
    profileImage: user.profileImage,
  }
}
