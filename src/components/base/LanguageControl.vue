<template>
  <v-btn
    v-if="currentLocale"
    :key="`lang-button-${currentLocale}`"
    class="topbar__lang-button"
    :ripple="false"
    :aria-label="t('switchLanguage')"
    @click="switchLanguage"
  >
    <ClientOnly>
      <NuxtImg
        :key="`flag-${currentLocale}`"
        :src="
          currentLocale === 'es' ? '/images/flag-es.png' : '/images/flag-en.png'
        "
        aspect-ratio="16/9"
        :alt="t('switchLanguage')"
        class="flag-icon"
        width="24"
        height="24"
      />
    </ClientOnly>
    <span class="topbar__lang-key">{{ currentLocale.toLowerCase() }}</span>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { locale, t } = useI18n();
const language = useCookie('key_language');

const currentLocale = computed(() => locale.value);

const switchLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
  language.value = locale.value;
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

.topbar__lang-key {
  font-weight: bold !important;
}
</style>
