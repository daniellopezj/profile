<template>
  <div class="about__container">
    <h1 class="about__title">{{ t('about.title') }}</h1>
    <div class="about__content">
      <div>
        <p>
          {{ t('about.paragraph1.before') }}
          <span class="highlight-word">
            {{ t('about.paragraph1.highlight') }}
          </span>
          {{ t('about.paragraph1.after') }}
        </p>
        <p>
          {{ t('about.paragraph2.before') }}
          <span class="highlight-word">
            {{ t('about.paragraph2.highlight') }}
          </span>
          {{ t('about.paragraph2.after') }}
        </p>
        <p>
          {{ t('about.paragraph3.before') }}
          <span class="highlight-word">
            {{ t('about.paragraph3.highlight') }}
          </span>
          {{ t('about.paragraph3.after') }}
          <NuxtLink
            class="link"
            to="https://www.linkedin.com/company/kiteris"
            target="_blank"
          >
            {{ t('about.paragraph3.company') }}
          </NuxtLink>
          {{ t('about.paragraph3.location') }}
        </p>
      </div>
      <h1 class="about__small-title">{{ t('about.smallTitle') }}</h1>
      <div class="about__container-image">
        <NuxtImg
          class="about__image"
          loading="lazy"
          aspect-ratio="16/9"
          src="/images/profile.webp"
          alt="profile"
          width="150"
          height="150"
          sizes="xs:120px sm:120px md:150px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n();
</script>

<style scoped lang="scss">
.about {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__content {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    border-left: 5px solid rgb(var(--v-theme-textDark));
    padding: 0 15px;
  }

  &__container-image {
    margin: auto;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    border: 4px solid rgb(var(--v-theme-second));
  }

  &__small-title {
    display: none;
  }
}

@media (max-width: 599px) {
  .about {
    &__content {
      display: flex;
      flex-direction: column-reverse;
      border-left: none;
      padding: 0;
      gap: 0;
    }

    &__container-image {
      margin: initial;
      width: 120px;
    }

    &__image {
      border: initial;
      border: 2px solid rgb(var(--v-theme-second));
      margin-bottom: 1rem;
    }

    &__title {
      display: none;
    }

    &__small-title {
      font-size: 1.75rem;
      display: initial;
    }
  }
}
</style>
