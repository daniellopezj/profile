<template>
  <v-btn
    :aria-label="link.text"
    role="link"
    class="item-link__btn"
    :prepend-icon="link.icon"
    :href="link.link"
    target="_blank"
    variant="outlined"
  >
    {{ link.text }}
  </v-btn>
</template>

<script setup lang="ts">
import { LinkItem } from '~/types/project.types';

defineProps({
  link: {
    type: Object as PropType<LinkItem>,
    required: true,
  },
});
</script>

<style lang="scss">
.item-link__btn {
  border-radius: 8px;
  font-size: 0.9rem;
  opacity: 0.95;
  text-transform: capitalize;
}

.item-link__btn:hover {
  .v-btn__overlay {
    background-color: rgb(255, 255, 255, 0.2);
  }
}
</style>
