<template>
  <v-btn
    class="topbar__lang-button"
    :ripple="false"
    :aria-label="t('switchLanguage')"
    @click="switchLanguage"
  >
    <NuxtImg
      aspect-ratio="16/9"
      :src="`/images/flag-${currentLocale}.png`"
      :alt="t('switchLanguage')"
      class="flag-icon"
      width="24"
      height="24"
    />
    <span class="topbar__lang-key">{{ currentLocale.toLowerCase() }}</span>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { locale, t } = useI18n();

const currentLocale = computed(() => locale.value);

const switchLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>

<style lang="scss">
.topbar__lang-button {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  .v-btn__content {
    display: flex;
    gap: 4px;
    text-transform: lowercase;
    align-items: center;
    font-weight: bold !important;
  }
}

.topbar__lang-key{
  font-weight: bold !important;
}
</style>
