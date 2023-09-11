<template>
  <div class="about-tech__container">
    <h2>💻 Tecnologias</h2>
    <div class="about-tech__skills">
      <span v-for="tech in Technologies" class="about-tech__skill">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Technologies } from '@/data/Personal.data';
</script>

<style scoped lang="scss">
.about-tech {
  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__skill {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: rgba(var(--v-theme-textDark), 0.6);
    border-radius: 5px;
    color: #ffffff;
  }
}
</style>
