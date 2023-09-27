<template>
  <div class="home__container">
    <home-about></home-about>
    <home-blog-list :blogs="blogs"></home-blog-list>
    <home-project-list></home-project-list>
    <base-social></base-social>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Daniel López | Frontend, JavaScript, vue, CSS',
});
definePageMeta({
  layoyt: 'public',
});

const { data: blogs } = useAsyncData('', () => {
  return queryContent('/').where({ status: 'public' }).find();
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
