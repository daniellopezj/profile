<template>
  <div class="social__container">
    <h2 class="mb-3">Puedes encontrarme en</h2>
    <div class="social__items">
      <v-btn
        aria-label="social-network"
        class="social__item-button"
        v-for="icon in icons"
        :key="icon.id"
        :prepend-icon="icon.icon"
        :href="icon.link"
        target="_blank"
        variant="outlined"
      >
        {{ icon.text }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';

const icons = ref([
  {
    id: 0,
    link: 'https://linkedin.com/in/daniel-lopezj/',
    icon: mdiLinkedin,
    text: 'LinkedIn',
  },
  {
    id: 1,
    link: 'https://github.com/daniellopezj',
    icon: mdiGithub,
    text: 'Github',
  },
  {
    id: 3,
    link: 'https://twitter.com/daniellopezj_',
    icon: mdiTwitter,
    text: 'twitter',
  },
]);
</script>

<style scoped lang="scss">
.social {
  &__items {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  &__item-button {
    border-radius: 8px;
    font-size: 0.9rem;
    opacity: 0.95;
    text-transform: capitalize;
  }
}
</style>
