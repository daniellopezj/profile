<template>
  <div class="social__container">
    <h2>Puedes encontrarme en</h2>
    <div class="social__items">
      <base-item-link
        v-for="(link, index) in links"
        :key="index"
        :link="link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';
import { LinkItem } from '~/types/project.types';

const links: Ref<LinkItem[]> = ref([
  {
    link: 'https://linkedin.com/in/daniel-lopezj/',
    icon: mdiLinkedin,
    text: 'LinkedIn',
  },
  {
    link: 'https://github.com/daniellopezj',
    icon: mdiGithub,
    text: 'GitHub',
  },
  {
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
