<script setup lang="ts">
definePageMeta({
  title: 'Preview',
  description:
    'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'landing',
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white pt-16">
    <LandingDemos :cta="false" />
    <LandingCta />
    <LandingFooter />
  </div>
</template>
