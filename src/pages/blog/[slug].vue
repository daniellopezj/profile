<template>
  <div v-if="blog">
    <div class="blog__header">
      <div>
        <v-img
          class="blog__header-icon"
          :src="blog.icon"
          alt="profile"
          width="100"
          height="100"
        />
      </div>
      <div class="blog__header-content">
        <h1>{{ blog.title }}</h1>
        <div class="blog__header-items">
          <span class="blog__date">{{ blog.date }}</span>
          <span class="blog__time">{{ blog.time }}</span>
        </div>
        <div class="blog__tags">
          <span class="blog__tag" v-for="tag in blog.tags">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <ContentDoc class="blog__content-doc" :path="blog._path" />
  </div>
  <div v-else>cargando</div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const blog: Ref<ParsedContent | null> = ref(null);
const route = useRoute();

onBeforeMount(async () => {
  const { data } = useAsyncData('', () => {
    return queryContent('/')
      .where({ _path: `/${route.params.slug as string}` })
      .find();
  });

  watch(
    () => data.value,
    (newVal) => {
      if (newVal) {
        blog.value = newVal[0];
        useContentHead(blog.value);
        useHead({
          title: blog.value.title,
        });
      }
    },
  );
});
</script>

<style scoped lang="scss">
.blog {
  &__header {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    &-icon {
      border-radius: 8px;
    }
    &-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
    }
    &-items {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }

  &__tags {
    display: flex;
    gap: 1rem;
  }
  &__tag {
    background-color: rgb(255, 255, 255, 0.9);
    color: black;
    padding: 0 6px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  &__date {
    color: rgba(var(--v-theme-second));
    font-size: 0.95rem;
  }
  &__time {
    opacity: 0.65;
    font-size: 0.85rem;
  }
}
</style>
