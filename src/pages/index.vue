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

onMounted(async () => {
  // const contentQuery = queryContent('').findOne;
  // console.log(contentQuery);
  // const { data } = await useAsyncData('', () => {
  //   return queryContent('/').only(['title']).findOne();
  // });
  // console.log(data.value);
  // const posts = await useAsyncData()
  //   .only(['title', 'image', 'tags', 'slug'])
  //   .sortBy('createdAt', 'desc')
  //   .fetch();
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
</style>
