const whitelist = [
  '/login',
]

const isLogged = true
export default defineNuxtRouteMiddleware((to, from) => {
  if (!isLogged) {
    if (whitelist.includes(to.path)) { return }
    if (to.path !== whitelist[0]) {
      return navigateTo(whitelist[0])
    }
  }
})
