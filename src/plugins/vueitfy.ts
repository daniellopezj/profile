import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { ThemeDefinition, createVuetify } from 'vuetify';

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    surface: '#FFFFFF',
    primary: '#FF293B',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#FF0000',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    // customvalidatecontrol: '#03DAC6'
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customDark',
      themes: {
        customDark,
      },
    },
    ssr: false,
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});

// export default createVuetify({
//   theme: {
//     themes: {
//       dark: {
//         colors: {
//           primary: '#000000',
//           navigationDrawer: '#000000',
//           secondary: '#000000',
//           iconMode: '#FFF9C4',
//           textActive: '#19F1FF',
//           episodeCard: '#1e1b63',
//           locationCard: '#267b5e',
//         },
//       },
//     },
//     defaultTheme: 'dark',
//   },
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: {
//       mdi,
//     },
//   },
// });
