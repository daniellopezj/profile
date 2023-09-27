<template>
  <div>
    <h1>proyectos</h1>
    <span class="projects__content">
      Aquí puedes encontrar proyectos personales y otros a nivel profesional en
      los que he participado
    </span>

    <div class="projects__list">
      <project-card
        v-for="project in data"
        :key="project.id"
        :project="project"
        @click="() => router.push(`projects/${project.slug}`)"
      ></project-card>
    </div>
    <div class="projects__github">
      <span>
        🚀 Puedes ver mas proyectos en
        <nuxt-link
          class="link"
          :to="'https://github.com/daniellopezj'"
          target="_blank"
        >
          GitHub
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/Projects.data';
import { Project } from '~/types/project.types';

useHead({
  title: 'Proyectos',
});

const data: Ref<Project[]> = ref(projects);
const router = useRouter();
</script>

<style scoped lang="scss">
.projects {
  &__description {
    display: flex;
  }

  &__github {
    display: flex;
    padding: 1rem;
    border-radius: 8px;
    background-color: rgba(var(--v-theme-textDark), 0.1);
    opacity: 0.9;
  }

  &__content {
    grid-template-columns: 1fr 1fr;
    border-left: 5px solid rgb(var(--v-theme-textDark));
    padding: 0 15px;
    display: flex;
    margin: 1rem 0;
    opacity: 0.9;
  }

  &__list {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
