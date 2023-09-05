<template>
  <div>
    <h1>proyectos</h1>
    <span class="projects__content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ad
      dolore est obcaecati repellat ea ab magnam enim eveniet reiciendis ut
      optio hic, nulla deserunt, nesciunt consequatur, soluta assumenda
      reprehenderit.
    </span>

    <div class="projects__list">
      <project-card
        v-for="project in data"
        :project="project"
        :key="project.id"
      ></project-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/Projects.data';
import { Project } from '~/types/project.types';
const data: Ref<Project[]> = ref(projects);
</script>

<style scoped lang="scss">
.projects {
  &__description {
    display: flex;
  }

  &__content {
    grid-template-columns: 1fr 1fr;
    border-left: 5px solid rgb(var(--v-theme-second));
    padding: 0 15px;
    display: flex;
    font-size: 18px;
    margin: 1rem 0;
  }

  &__list {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
