<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo.title}`
      : `${app.tairo.title}`
  },
  htmlAttrs: {
    lang: 'id',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content: () =>
        route.meta.description ?? '. Sistem Manajemen Sekolah Terbaik',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@hummatech',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `/img/logos/logo.png`,
    },
  ],
})
</script>

<template>
  <div>
    <!-- 
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <DemoAppSearch />
    <!-- 
      Global app layout switcher
      @see .demo/components/DemoAppLayoutSwitcher.vue
    -->
    <DemoAppLayoutSwitcher />

    <!-- 
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <VueAxePopup />

    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
