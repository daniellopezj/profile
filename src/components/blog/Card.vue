<template>
  <div class="blog__header" @click="navigateTo(`${blog._path}`)">
    <div>
      <NuxtImg
        class="blog__header-icon"
        :src="blog?.icon"
        alt="profile"
        width="80"
        height="80"
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
    cursor: pointer;
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    &-icon {
      border-radius: 8px;
    }
    &-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      h2 {
        font-size: 1.25rem;
      }
    }
    &-items {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }
  &__header:hover {
    transform: scale(1.01);
    transition: all 0.4s;
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 8px;
  }
  &__header:not(:hover) {
    animation: removeAnimation 0.3s ease-in-out;
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

@keyframes removeAnimation {
  0% {
    transform: scale(1.005);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 599px) {
  .blog {
    &__header {
      align-items: center;
      &-icon {
        width: 60px !important;
        height: 60px !important;
        > img {
          border-radius: 8px;
        }
      }
      &-content {
        h2 {
          font-size: 1.15rem;
        }
      }
      &-items {
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
      }
    }
    &__tags {
      display: flex;
      gap: 1rem;
    }

    &__time {
      opacity: 0.65;
      font-size: 0.85rem;
    }
  }
}
</style>
