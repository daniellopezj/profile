// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Daniel López',
      script: [
        {
          src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
          'data-name': 'BMC-Widget',
          'data-cfasync': 'false',
          'data-id': 'daniellopezj',
          'data-description': 'Support me on Buy me a coffee!',
          'data-message': '',
          'data-color': '#bf8415',
          'data-position': 'Right',
          'data-x_margin': '18',
          'data-y_margin': '18',
        },
      ],
      // titleTemplate: '%s - Daniel López',
    },
  },
  modules: ['@nuxt/content'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/styles.scss";',
          charset: false,
        },
      },
    },
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  routeRules: {
    '/**': { static: true, ssr: false },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
});
