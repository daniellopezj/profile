// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Daniel López',
      titleTemplate: '%s - Daniel López',
    },
  },
  // modules: ['@nuxt/content'],
  devtools: { enabled: true },
  srcDir: 'src/',
  buildDir: '.nuxt/nuxt',
  modules: ['@nuxt/content'],
  routeRules: {
    '/**': { static: true, ssr: false },
  },
});
