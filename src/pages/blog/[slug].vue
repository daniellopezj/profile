<template>
  <div v-if="post">
    blog
    <ContentRendererMarkdown :value="post" />
    <!-- {{ post }} -->
    <!-- <ContentDoc /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let post: Ref<unknown | null> = ref(null);

onBeforeMount(async () => {
  const { data } = await useAsyncData('', () =>
    queryContent('/blog-1').findOne(),
  );
  post.value = data.value;
  // console.log(inQuery.value);
  // const { data: inQuery } = await useAsyncData('in', () => {
  //   return queryContent('/').where({ title: 'blog-1' }).find();
  // });
});
</script>

<style scoped></style>
