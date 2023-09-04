// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Daniel López',
      titleTemplate: '%s - Daniel López',
    },
  },
  modules: ['@nuxt/content'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': process.env.NUXT_DEBUG || false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/styles.scss";',
          charset: false,
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  buildDir: '.nuxt/nuxt',
  modules: ['@nuxt/content'],
  routeRules: {
    '/**': { static: true, ssr: false },
  },
});
