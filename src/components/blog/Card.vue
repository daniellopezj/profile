<template>
  <div class="blog__header">
    <div>
      <v-img
        class="blog__header-icon"
        :src="blog?.icon"
        alt="profile"
        width="100"
        height="100"
      />
    </div>
    <div class="blog__header-content">
      <h2>{{ blog?.title }}</h2>
      <div class="blog__header-items">
        <span class="blog__date">{{ blog?.date }}</span>
        <span class="blog__time">{{ blog?.time }}</span>
      </div>
      <div class="blog__tags">
        <span class="blog__tag" v-for="tag in blog?.tags">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps({
  blog: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
}
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
