<template>
  <div class="project__container" v-if="project">
    <div>
      <h1>{{ project.title }}</h1>
      <span class="project__description" v-html="project.description" />
    </div>
    <NuxtImg
      class="project__image"
      loading="lazy"
      aspect-ratio="16/9"
      :src="project.image"
      width="900"
      :alt="project.title"
    />
    <div>
      <h2>💻Tecnologías utilizadas</h2>
      <div class="project__list-skills">
        <span v-for="skill in project.skills" class="project__skill">
          {{ skill }}
        </span>
      </div>
    </div>
    <div>
      <h2>✨ ¿Qué he aprendido?</h2>
      <ul>
        <li
          class="project__achievement"
          v-html="achievement"
          v-for="achievement in project.achievements"
        ></li>
      </ul>
    </div>
    <div class="project__links">
      <base-item-link
        v-for="(link, index) in project.link"
        :key="index"
        :link="link"
      />
    </div>
  </div>
  <div v-else>no hay info</div>
</template>

<script setup lang="ts">
import { projects } from '@/data/Projects.data';
import { Project } from '~/types/project.types';

const route = useRoute();
const project: Ref<Project | undefined> = ref(undefined);

project.value = projects.find((i) => i.slug === route.params.slug);

useHead({
  title: 'Proyectos',
});
</script>

<style scoped lang="scss">
.project {
  &__container {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }

  &__description {
    opacity: 0.85;
  }

  &__image {
    margin: auto;
    display: flex;
    width: 700px;
  }

  &__list-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__skill {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    background: rgba(var(--v-theme-textDark), 0.6);
    border-radius: 5px;
    color: #ffffff;
  }

  &__links {
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
  }

  &__achievement {
    opacity: 0.85;
    margin-bottom: 4px;
  }
}

@media (max-width: 599px) {
  .project {
    &__image {
      margin: auto;
      display: flex;
      width: 100%;
    }
  }
}
</style>
