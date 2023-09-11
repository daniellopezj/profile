<template>
  <v-app>
    <TopBar />

    <v-container class="main-container">
      <slot />
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-container {
  max-width: $max-width;
  min-height: 95vh;
}
</style>
