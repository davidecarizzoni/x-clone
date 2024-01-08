// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      title: 'X Clone'
    }
  },
  headlessui: {
    prefix: 'Headless'
  }
})
