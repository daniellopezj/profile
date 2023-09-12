<template>
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
