<template>
  <div>
    <h2>📚 Formación académica</h2>
    <div class="about-education__content">
      <div
        class="about-education__item"
        v-for="(education, index) in Educations"
        :key="index"
      >
        <span class="about-education__dates">
          {{ education.date }}
        </span>
        <h3>{{ education.title }}</h3>
        <span class="about-education__description">
          {{ education.institute }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Educations } from '@/data/Personal.data';
</script>

<style scoped lang="scss">
.about-education {
  &__item {
    margin: 1rem 0;
  }

  &__dates {
    opacity: 0.75;
    font-style: italic;
  }

  &__description {
    opacity: 0.65;
    font-size: 0.9rem;
  }
}
</style>
