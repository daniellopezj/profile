<template>
  <div class="project-list__container">
    <h2>Último proyecto</h2>
    <div class="project-list__items">
      <project-card
        @click="() => router.push(`projects/${data.slug}`)"
        :project="data"
      ></project-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/Projects.data';
const router = useRouter();

const data = ref(projects[0]);
</script>

<style scoped lang="scss"></style>
