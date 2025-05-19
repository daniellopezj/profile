<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const language = useCookie('key_language', {
  maxAge: 60 * 60 * 24 * 30,
  default: () => 'es',
});
const i18n = useI18n();

onBeforeMount(() => {
  if (process.client) {
    if (!language.value) {
      language.value = navigator.language.split('-')[0];
      if (['en', 'es'].includes(language.value)) {
        i18n.locale.value = language.value;
      } else {
        i18n.locale.value = 'en';
      }
    } else {
      i18n.locale.value = language.value;
    }
  }
});
</script>
