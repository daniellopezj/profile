<template>
  <div class="home__container">
    <home-about></home-about>
    <home-project-list></home-project-list>
    <base-social></base-social>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layoyt: 'public',
});
</script>

<style scoped lang="scss">
.home {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 599px) {
  .home {
    &__container {
      gap: 1.5rem;
    }
  }
}
</style>
