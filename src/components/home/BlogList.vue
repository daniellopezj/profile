<template>
  <div class="project-list__container">
    <h2>Últimos artículos</h2>
    <div class="project-list__items">
      <blog-card
        v-for="blog in blogs"
        :key="blog._path"
        :blog="blog"
      ></blog-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps({
  blogs: {
    type: Array as PropType<ParsedContent[] | null>,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
