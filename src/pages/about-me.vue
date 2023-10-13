<template>
  <Head>
    <Meta name="author" content="Daniel López" />
    <Meta name="author" content="Daniel López" />
    <Meta
      name="description"
      content="Hola Soy Daniel Lopez, Ingeniero de Software y Desarrollador Frontend. Comparto contenido sobre JavaScript y todas las novedades en el desarrollo FrontEnd. He trabajado para varias compañias a nivel internacional, lo cual me ha permitido conocer personas maravillosas que han impulsado mi crecimiento personal y profesional."
    />
  </Head>
  <div class="about__container">
    <about-me></about-me>
    <about-skills></about-skills>
    <about-technology></about-technology>
    <about-experience></about-experience>
    <about-education></about-education>
    <about-interest></about-interest>
    <about-contact></about-contact>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sobre mí',
});
</script>

<style scoped lang="scss">
.about {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
