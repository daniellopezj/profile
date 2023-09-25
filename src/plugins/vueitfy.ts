import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import {
  VApp,
  VContainer,
  VIcon,
  VImg,
  VBtn,
  VFooter,
  VAppBar,
  VNavigationDrawer,
} from 'vuetify/components';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customDark',
      themes: {
        customDark: {
          dark: true,
          colors: {
            background: '#202225',
            second: '#fbd065',
            textDark: '#bf8415',
            surface: '#FFFFFF',
            primary: '#FF293B',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#FF0000',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
    },
    components: {
      VApp,
      VContainer,
      VIcon,
      VImg,
      VBtn,
      VFooter,
      VAppBar,
      VNavigationDrawer,
    },
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
