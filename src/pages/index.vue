<template>
  <div>
    <h1>gola</h1>
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

<style scoped></style>
