<template>
  <div class="about-skills__container">
    <h2>🎖 Skills</h2>
    <ul>
      <li
        class="about-skills__skill"
        v-html="skill"
        v-for="skill in Skills"
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Skills } from '@/data/Personal.data';
</script>

<style scoped lang="scss">
.about-skills {
  &__skill {
    opacity: 0.85;
    margin-bottom: 6px;
  }
}
</style>
