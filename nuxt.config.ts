export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      title: 'Daniel López | Frontend, JavaScript, vue, CSS ',
      script: [
        {
          // src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
          // 'data-name': 'BMC-Widget',
          // 'data-cfasync': 'false',
          // 'data-id': 'daniellopezj',
          // 'data-description': 'Support me on Buy me a coffee!',
          // 'data-color': '#bf8415',
          // 'data-position': 'Right',
          // 'data-x_margin': '18',
          // 'data-y_margin': '18',
          // defer: true,
        },
      ],
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    ['@nuxtjs/robots', { configPath: '~/config/robots.config' }],
    'nuxt-simple-sitemap',
  ],
  site: {
    url: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000',
  },
  build: {
    transpile: ['vuetify'],
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  image: {
    presets: {
      thumbnail: {
        modifiers: {
          width: 100,
          height: 100,
        },
      },
    },
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
    // '/**': { static: true, ssr: false },
  },
  content: {
    highlight: {
      theme: 'dark-plus',
    },
  },
});
