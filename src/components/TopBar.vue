<template>
  <v-app-bar color="background" class="topbar__container">
    <div class="topbar__content">
      <NuxtLink class="topbar__container-name" :to="'/'">
        <NuxtImg
          class="topbar__logo"
          loading="lazy"
          aspect-ratio="16/9"
          src="/images/logo.png"
          alt="logo"
          sizes="32px"
        />
        Daniel López
      </NuxtLink>
      <ul v-if="smAndUp" class="topbar__navigation">
        <li v-for="link in links" :key="link.id">
          <NuxtLink :to="link.path">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
      <v-btn
        aria-label="menu"
        :rounded="4"
        v-if="!smAndUp"
        icon
        @click="toggleDrawer"
      >
        <v-icon :icon="mdiMenu"></v-icon>
      </v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    color="background"
    v-if="!smAndUp"
    v-model="drawer"
    location="top"
    class="topbar__small-drawer"
  >
    <ul class="topbar__navigation-small">
      <li v-for="link in links" :key="link.id">
        <NuxtLink :to="link.path">
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import { mdiMenu } from '@mdi/js';

const { smAndUp } = useDisplay();
const drawer = ref(false);

const links = [
  { id: 0, title: 'Inicio', path: '/' },
  { id: 1, title: 'Sobre mí', path: '/about-me' },
  { id: 2, title: 'Proyectos', path: '/projects' },
  { id: 3, title: 'Blog', path: '/blog/' },
];

const height = computed(() => {
  if (drawer.value) {
    return '48px';
  }
  return '0px';
});

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style lang="scss">
.topbar {
  &__container {
    position: relative !important;
    box-shadow: none !important;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: $max-width;
    margin: auto;
    align-items: center;
  }
  &__navigation {
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none !important;
      color: white;
    }
    li {
      cursor: pointer;
      font-weight: bold;
      opacity: 0.95;
      color: white;
    }
    li:hover {
      a {
        color: rgba(var(--v-theme-second));
      }
    }
  }

  &__container-name {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  &__navigation-small {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    a {
      color: white;
      text-decoration: none !important;
    }
    li {
      padding: 0.5rem;
      text-align: end;
      font-weight: bold;
      opacity: 0.95;
      color: white;
    }
  }
  &__active {
    opacity: 1;
    color: rgba(var(--v-theme-textActive), 1);
  }

  &__logo {
    width: 32px;
    height: 32px;
    max-width: 100%;
    max-height: 100%;
    margin-left: 1rem;
    cursor: pointer;
  }
}

@media (max-width: 599px) {
  .topbar {
    &__small-drawer {
      height: fit-content !important;
      top: v-bind(height) !important;
    }
    &__logo {
      border-radius: 50%;
      margin-left: 1rem;
      cursor: pointer;
    }

    &__container-name {
      gap: 0.5rem;
      font-size: 1rem;
    }
  }
}
</style>
