<template>
  <Head>
    <Meta name="author" content="Daniel López" />
  </Head>
  <div v-if="blogs">
    <h1>Últimos Artículos</h1>

    <div class="blogs__list">
      <blog-card
        v-for="blog in blogs"
        :key="blog._path"
        :blog="blog"
      ></blog-card>
    </div>
  </div>
  <div v-else>cargando</div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
});

const { data: blogs } = useAsyncData('', () => {
  return queryContent('blog').where({ status: 'public' }).find();
});
</script>

<style scoped lang="scss">
.blogs {
  &__list {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 599px) {
  .blogs {
    &__list {
      margin: 2rem 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
}
</style>
