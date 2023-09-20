// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Daniel López | Frontend, JavaScript, vue, CSS ',
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
    '/': { ssr: true },
    '/about-me': { ssr: true },
    '/projects/**': { ssr: true },
    '/blog/**': { isr: true },
  },
  content: {
    highlight: {
      theme: 'dark-plus',
    },
  },
});
