<template>
  <div class="about__container">
    <h1 class="about__title">Ingeniero de Software</h1>
    <div class="about__content">
      <div>
        <p>
          ¡Hola! 👋 Mi nombre es Daniel López,
          <span class="highlight-word">ingeniero de software</span>
          con mas de 4 años de experiencia en el mundo de la programación.
        </p>
        <p>
          Mi especialidad es el desarrollo
          <span class="highlight-word">frontend</span>
          y me dedico a crear contenido sobre programación y desarrollo web.
        </p>
        <p>
          Además, trabajo de forma remota como
          <span class="highlight-word">Senior Frontend Engineer</span>
          en
          <nuxt-link
            class="link"
            to="https://www.linkedin.com/company/kiteris"
            target="_blank"
          >
            Kiteris,
          </nuxt-link>
          una empresa de España.
        </p>
      </div>
      <h1 class="about__small-title">Ingeniero de Software</h1>
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

<script setup lang="ts"></script>

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
