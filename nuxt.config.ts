// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      title: 'X Clone',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
      ]
    },
  },
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  }
})
