<template>
  <Head>
    <Meta name="author" content="Daniel López" />
    <Meta name="twitter:card" content="summary_large_image" />
  </Head>
  <div v-if="blog">
    <div class="blog__header">
      <div class="blog__header-image">
        <NuxtImg
          class="blog__header-icon"
          :src="blog?.icon"
          alt="profile"
          width="100"
          height="100"
        />
      </div>
      <div class="blog__header-content">
        <h1>{{ blog?.title }}</h1>
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
    <ContentRenderer class="blog__content-doc" :value="blog" />
    <div class="blog__share-twitter">
      <a
        class="blog__share-twitter-button"
        :href="`https://twitter.com/intent/tweet?text=${blog?.title}  @daniellopezj_ &url=${baseUrl}/blog/${route.params.slug}`"
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Compartir en twitter</span>
        <v-icon class="blog__share-twitter-icon" :icon="mdiTwitter"></v-icon>
      </a>
    </div>
  </div>
  <div v-else>cargando</div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { mdiTwitter } from '@mdi/js';

const route = useRoute();
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

const blog: Ref<ParsedContent | null> = ref(null);

const fetchContent = async () => {
  return queryContent('/blog')
    .where({ _path: `/blog/${route.params.slug as string}` })
    .findOne();
};

const data = await fetchContent();
if (!data) {
  throw showError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
blog.value = data;

useHead({
  title: blog.value?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: blog.value?.description,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: blog.value?.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: blog.value?.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: blog.value?.image,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://daniellopezj.com/blog/${route.params.slug}`,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: blog.value?.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: blog.value?.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: blog.value?.image,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: `https://daniellopezj.com/blog/${route.params.slug}`,
    },
  ],
});
</script>

<style scoped lang="scss">
.blog {
  &__header {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    align-items: center;

    &-icon {
      border-radius: 8px;
    }
    &-content {
      h1 {
        margin: 0;
      }
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

  &__share-twitter {
    bottom: 20px;
    left: 0;
    display: flex;
    position: fixed;
    right: 0;
    width: 100%;
    justify-content: center;
    z-index: 1;
    &-button {
      text-decoration: none;
      background: #fff;
      border-radius: 32px;
      bottom: 0;
      box-shadow: rgba(100, 110, 140, 0.4) 0 6px 21px 2px;
      display: flex;
      font-size: 14px;
      font-weight: 500;
      padding: 8px 16px;
      color: black;
      transition: all 0.3s ease-in-out;
    }
    &-button:hover {
      transform: translateY(-10px);
    }

    &-button:not(:hover) {
      animation: removeAnimation 0.3s ease-in-out;
    }
    &-icon {
      margin-left: 0.5rem;
      color: #1da1f2;
    }
  }
}

@keyframes removeAnimation {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 599px) {
  .blog {
    &__header {
      align-items: center;
      margin-bottom: 1.5rem;
      &-image {
        display: none;
      }
      &-content {
        h1 {
          font-size: 1.75rem;
          margin: 0;
        }
      }
      &-items {
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
      }
    }
  }
}
</style>
