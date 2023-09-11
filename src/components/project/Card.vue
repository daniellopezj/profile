<template>
  <div class="project-card__container">
    <div class="project-card__container-image">
      <v-img
        class="project-card__image"
        aspect-ratio="16/9"
        cover
        :src="project.image"
      ></v-img>
    </div>
    <div class="project-card__body">
      <h4>{{ project.title }}</h4>
      <span
        class="project-card__description"
        v-html="project.description"
      ></span>

      <span class="project-card__read-more">
        👉
        <span>Ver más</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '@/types/project.types';

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.project-card {
  &__container {
    cursor: pointer;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr;
  }
  &__container:hover {
    opacity: 0.85;
    // filter: brightness(1.01);
  }

  &__description {
    max-height: 3em; /* Adjust the height as needed */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to limit to */
    -webkit-box-orient: vertical;
    opacity: 0.85;
  }

  &__container-image {
    display: flex;
  }

  &__image {
    border-radius: 8px;
    height: 150px;
  }

  &__body {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  &__read-more {
    opacity: 0.8;
    span {
      text-decoration: underline;
    }
  }
}
</style>
