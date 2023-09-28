<template>
  <v-app>
    <TopBar />
    <v-container class="main__container">
      <div class="error__content">
        <span class="error__big-text">
          Oops! No encontramos la pagína que buscas
        </span>

        <NuxtImg
          class="error__image"
          loading="lazy"
          aspect-ratio="16/9"
          src="/images/not_found.gif"
          alt="logo"
          sizes="350px xs:100% md:350px "
        />
        <span class="error__small-text">Pero puedes seguir aprendiendo 👇</span>
      </div>
      <home-blog-list :blogs="blogs"></home-blog-list>
    </v-container>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const { data: blogs } = useAsyncData('', () => {
  return queryContent('blog').where({ status: 'public' }).limit(3).find();
});
</script>
<style lang="scss" scoped>
.main__container {
  max-width: $max-width;
  min-height: 90vh;
}
.error {
  &__content {
    margin: 2rem auto;
    padding: 0 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &__image {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }

  &__big-text {
    font-size: 2rem;
    font-weight: bolder;
  }

  &__title {
    text-transform: uppercase;
  }
  &__description {
    display: block;
    max-width: 70%;
    margin: 0 auto;
  }
}

@media (max-width: 599px) {
  .error {
    &__content {
      margin: 2rem auto;
      padding: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    &__image {
      margin: 0 auto;
      max-width: 100%;
      max-height: 100%;
    }

    &__big-text {
      font-size: 2rem;
      font-weight: bolder;
    }

    &__title {
      text-transform: uppercase;
    }
    &__description {
      display: block;
      max-width: 70%;
      margin: 0 auto;
    }
  }
}
</style>
