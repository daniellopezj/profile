<template>
  <v-footer color="background" class="appfooter__container">
    <div class="appfooter__content">
      <span class="pr-1">© {{ new Date().getFullYear() }} | Daniel López</span>
      <v-btn
        aria-label="social-network"
        class="appfooter__social-button"
        v-for="icon in icons"
        :key="icon.id"
        :icon="icon.icon"
        variant="text"
        size="small"
        :href="icon.link"
        target="_blank"
      ></v-btn>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiLinkedin, mdiGithub } from '@mdi/js';

const icons = ref([
  {
    id: 0,
    link: 'https://linkedin.com/in/daniel-lopezj/',
    icon: mdiLinkedin,
  },
  {
    id: 1,
    link: 'https://github.com/daniellopezj',
    icon: mdiGithub,
  },
]);
</script>

<style scoped lang="scss">
.appfooter {
  &__container {
    height: 64px !important;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    opacity: 0.85;
  }
  &__content {
    margin: 0 auto;
  }

  &__social-button {
    margin-right: 3px;
  }
  &__social-button:hover {
    opacity: 0.6;
  }
}
</style>
