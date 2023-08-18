<template>
  <div>
    <!-- <ContentDoc /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const post = ref(null);

// onMounted(async () => {
//   const posts = await $context('blog-1.md')
//     .only(['title', 'image', 'tags', 'slug'])
//     .sortBy('createdAt', 'desc')
//     .fetch();
// });
</script>

<style scoped></style>
