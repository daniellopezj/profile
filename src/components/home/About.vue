<template>
  <div class="about__container">
    <h1>Ingeniero de Software</h1>
    <div class="about__content">
      <div>
        <p class="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias rem
          voluptatum adipisci eum eos? Blanditiis temporibus, voluptatibus ea
          harum cupiditate ipsum delectus saepe aliquid reprehenderit debitis!
          Repellendus, soluta error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias rem
          voluptatum adipisci eum eos? Blanditiis temporibus, voluptatibus ea
          harum cupiditate ipsum delectus saepe aliquid reprehenderit debitis!
          Repellendus, soluta error.
        </p>
      </div>
      <div class="about__container-image">
        <v-img class="about__image" src="/images/profile.png" alt="logo" />
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
    border-left: 5px solid rgb(var(--v-theme-second));
    padding: 15px;
    font-size: 18px;
  }

  &__container-image {
    margin: auto;
  }

  &__image {
    width: 240px;
    border-radius: 50%;
    border: 4px solid rgb(var(--v-theme-second));
  }
}
</style>
