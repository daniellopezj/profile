<template>
  <footer color="background" class="appfooter__container">
    <div class="appfooter__content">
      <span class="pr-1">
        © {{ new Date().getFullYear() }} | Daniel López 💻
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.appfooter {
  &__container {
    height: 64px !important;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    opacity: 0.85;
  }
  &__content {
    margin: 0 auto;
  }

  &__social-button {
    margin-right: 3px;
  }
  &__social-button:hover {
    opacity: 0.6;
  }
}
</style>
