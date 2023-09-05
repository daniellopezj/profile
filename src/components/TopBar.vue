<template>
  <v-app-bar color="background" elevation="0" class="topbar__container">
    <div class="topbar__content">
      <NuxtLink class="topbar__container-name" :to="''">
        <v-img class="topbar__logo" src="/images/profile.png" alt="logo" />
        Daniel López
      </NuxtLink>
      <ul v-if="!mobile" class="topbar__navigation">
        <NuxtLink v-for="link in links" :key="link.id" :to="link.path">
          <li :class="{ topbar__active: link.id === activeLink }">
            {{ link.title }}
          </li>
        </NuxtLink>
      </ul>
      <v-btn
        aria-label="menu"
        :rounded="4"
        v-if="mobile"
        icon
        @click="toggleDrawer"
      >
        <v-icon :icon="mdiMenu"></v-icon>
      </v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    color="background"
    v-if="mobile"
    v-model="drawer"
    location="top"
    temporary
  >
    <ul class="topbar__navigation-small">
      <NuxtLink v-for="link in links" :key="link.id" :to="link.path">
        <li :class="{ topbar__active: link.id === activeLink }">
          {{ link.title }}
        </li>
      </NuxtLink>
    </ul>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import { mdiMenu } from '@mdi/js';

const route = useRoute();
const { mobile } = useDisplay();
const drawer = ref(false);

const links = [
  { id: 0, title: 'Inicio', path: '/' },
  { id: 1, title: 'Sobre mí', path: '/character' },
  { id: 2, title: 'Proyectos', path: '/projects' },
  { id: 3, title: 'Blog', path: '/location' },
  { id: 3, title: 'Contacto', path: '/location' },
];

const activeLink = computed(() => {
  const index = links.findIndex((i) => {
    // if (i.id > 0) {
    return route.path.includes(i.path);
    // }
  });
  return index !== -1 ? index : 0;
});

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style lang="scss">
.topbar {
  &__container {
    position: inherit !important;
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
    }
    li {
      cursor: pointer;
      font-weight: bold;
      opacity: 0.95;
      color: white;
    }
  }

  &__container-name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 1.1rem;
    font-weight: bold;
  }

  &__navigation-small {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    a {
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
    // border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
  }
  &__logo {
    width: 48px;
    border-radius: 50%;
    margin-left: 1rem;
    cursor: pointer;
  }
}

@media (max-width: 599px) {
  .topbar {
    &__active {
      opacity: 1;
      border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
    }
    &__theme {
      display: flex;
      justify-content: center;
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .topbar {
    &__active {
      opacity: 1;
      border-bottom: 2px solid rgba(var(--v-theme-textActive), 1);
    }
    &__theme {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
