<template>
  <Head>
    <Title>Daniel López | Frontend, JavaScript, vue, CSS</Title>
    <Meta name="author" content="Daniel López" />
    <Meta
      name="description"
      content="Comparto contenido sobre JavaScript y todas las novedades en el desarrollo FrontEnd"
    />
    <Meta
      property="og:title"
      content="Daniel López | Frontend, JavaScript, vue, CSS"
    />
    <Meta
      property="og:description"
      content="Comparto contenido sobre JavaScript y todas las novedades en el desarrollo FrontEnd"
    />
    <Meta
      property="og:image"
      content="https://daniellopezj.com/images/main.webp"
    />
    <Meta property="og:url" content="https://daniellopezj.com/" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta
      name="twitter:title"
      content="Daniel López | Frontend, JavaScript, vue, CSS"
    />
    <Meta
      name="twitter:description"
      content="Comparto contenido sobre JavaScript y todas las novedades en el desarrollo FrontEnd"
    />
    <Meta
      name="twitter:image"
      content="https://daniellopezj.com/images/main.webp"
    />
    <Meta name="twitter:url" content="https://daniellopezj.com/" />
    <meta
      name="keywords"
      content="JavaScript, css, vue, nuxt, frontend, programación, desarrollo web"
    />
  </Head>
  <div class="home__container">
    <home-about></home-about>
    <home-blog-list :blogs="blogs"></home-blog-list>
    <home-project-list></home-project-list>
    <base-social></base-social>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Daniel López | Frontend, JavaScript, vue, CSS',
  link: [
    {
      rel: 'canonical',
      href: 'https://daniellopezj.com/',
    },
  ],
});

definePageMeta({
  layoyt: 'public',
});

const { data: blogs } = useAsyncData('', () => {
  return queryContent('blog').where({ status: 'public' }).limit(5).find();
});
</script>

<style scoped lang="scss">
.home {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 599px) {
  .home {
    &__container {
      gap: 1rem;
    }
  }
}
</style>
