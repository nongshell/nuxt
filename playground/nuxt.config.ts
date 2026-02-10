export default defineNuxtConfig({
  modules: ['@antdv-next/nuxt'],
  devtools: { enabled: true },
  css: [
    '~/assets/entry.css',
  ],
  compatibilityDate: 'latest',
  antd: {
    icon: true,
  },
})
