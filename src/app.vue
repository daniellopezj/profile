<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const language = useCookie<string | null>('key_language', {
  maxAge: 60 * 60 * 24 * 30,
  default: () => null,
});
const { locale } = useI18n();

onBeforeMount(() => {
  if (process.client) {
    if (!language.value) {
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      const supportedLangs = ['en', 'es'];
      const selectedLang = supportedLangs.includes(browserLang)
        ? browserLang
        : 'en';
      language.value = selectedLang; // guarda en la cookie
      locale.value = selectedLang;
    } else {
      locale.value = language.value;
    }
  }
});
</script>
