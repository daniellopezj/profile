<template>
  <div v-if="blogs">
    <h1>Blogs</h1>

    <div class="blogs__list">
      <blog-card
        v-for="blog in blogs"
        :key="blog._path"
        :blog="blog"
      ></blog-card>
      <!-- <project-card
        v-for="project in data"
        :key="project.id"
        :project="project"
        @click="() => router.push(`blogs/${project.slug}`)"
      ></project-card> -->
    </div>
  </div>
  <div v-else>cargando</div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
});

const { data: blogs } = useAsyncData('', () => {
  return queryContent('/').where({ status: 'public' }).find();
});
</script>

<style scoped lang="scss">
.blogs {
  &__description {
    display: flex;
  }

  &__github {
    display: flex;
    padding: 1rem;
    border-radius: 8px;
    background-color: rgba(var(--v-theme-textDark), 0.1);
    opacity: 0.9;
  }

  &__content {
    grid-template-columns: 1fr 1fr;
    border-left: 5px solid rgb(var(--v-theme-textDark));
    padding: 0 15px;
    display: flex;
    margin: 1rem 0;
    opacity: 0.9;
  }

  &__list {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
