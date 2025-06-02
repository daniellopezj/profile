<template>
  <div>
    <h1>Sobre mí</h1>
    <p>
      ¡Hola! Mi nombre es
      <strong>Daniel López</strong>
      . Naci hace 27 años en Tunja (Colombia). Estudié
      <nuxt-link
        class="link"
        :to="'https://www.uptc.edu.co/sitio/portal/'"
        target="_blank"
      >
        Ingenieria de Sistemas y computación en la UPTC.
      </nuxt-link>
      Trabajé para varias compañias a nivel internacional en diferentes
      proyectos, los cuales me han permitido conocer personas maravillosas que
      han impulsado mi crecimiento personal y profesional.
    </p>
    <p>
      Disfruto crear software, en especial la parte
      <span class="highlight-word">Frontend.</span>
      Cuento con más de 5 años de experiencia en el mundo de la programación.
    </p>
    <p>
      Tener
      <span class="highlight-word">curiosidad constante</span>
      es una habilidad que he desarrollado con el paso de los años, y esto me ha
      permitido
      <span class="highlight-word">
        aprender a profundidad sobre las tecnologías en las que trabajo.
      </span>
      Siempre tengo buena disposición para desarrollar nuevas habilidades y
      afrontar desafíos que se presentan en el camino.
    </p>
    <div class="about-me__container-image">
      <NuxtImg
        class="about-me__image"
        src="/images/personal.webp"
        width="600"
        alt="view in city"
        sizes="sm:300px md:600px"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about-me {
  &__container-image {
    display: flex;
    margin: auto;
  }
  &__image {
    margin: auto;
    display: flex;
    width: 600px;
    height: 800px;
  }
}

@media (max-width: 599px) {
  .about-me {
    &__container-image {
      margin: initial;
    }
    &__image {
      margin: auto;
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
