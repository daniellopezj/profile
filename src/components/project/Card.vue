<template>
  <div class="project-card__container">
    <div class="project-card__container-image">
      <NuxtImg
        class="project-card__image"
        aspect-ratio="16/9"
        :quality="100"
        :src="`${project.image}`"
        :alt="project.title"
      />
    </div>
    <div class="project-card__body">
      <span class="project-card__title">{{ project.title }}</span>
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
    padding: 0.5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 2fr;
  }
  &__container:hover {
    transform: scale(1.01);
    transition: all 0.5s;
    background-color: rgb(255, 255, 255, 0.1);
  }
  &__container:not(:hover) {
    animation: removeAnimation 0.5s ease-in-out;
  }

  &__description {
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    opacity: 0.85;
  }

  &__container-image {
    display: flex;
    height: 150px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: bold;
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

@keyframes removeAnimation {
  0% {
    transform: scale(1.005);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 599px) {
  .project-card {
    &__container {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
      height: auto;
      padding: 0;
    }
    &__image {
      width: 100%;
      height: 180px;
      min-height: 150px;
      max-height: 100%;
    }
    &__title {
      font-size: 1.1rem;
    }
    &__body {
      padding: 0;
    }
    &__read-more {
      opacity: 0.8;
    }
  }
}
</style>
