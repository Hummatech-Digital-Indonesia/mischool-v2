<script setup lang="ts">
definePageMeta({
  title: 'Sistem Manajemen Sekolah',
  description:
    'Mischool adalah platform manajemen sekolah yang memberikan solusi terbaik untuk administrasi dan komunikasi antara sekolah, siswa, dan orang tua.',
  breadcrumb: {
    label: 'Mischool',
  },
  layout: 'landing',
})
</script>

<template>
  <div class="dark:bg-muted-900">
    <LandingHero />
    <!-- <LandingPackages /> -->
    <!-- <LandingCustomizer /> -->
    <LandingFeatures />
    <LandingPackages />
    <LandingDemos :limit="12" />
    <LandingLayers />
    <LandingNews />
    <!-- <LandingCta /> -->
    <LandingContent />
    <LandingFooter />
  </div>
</template>
