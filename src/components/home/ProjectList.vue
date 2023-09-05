<template>
  <div class="project-list__container">
    <h2 class="mb-3">Ultimo proyecto</h2>
    <div class="project-list__items">
      <project-card :project="data"></project-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/Projects.data';

const data = ref(projects[0]);
</script>

<style scoped lang="scss"></style>
