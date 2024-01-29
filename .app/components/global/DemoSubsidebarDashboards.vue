<script setup lang="ts">
const navigation = [
  {
    name: 'Dokumentasi',
    to: '/dokumentasi',
  },
  // {
  //   divider: true,
  // },

]
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <TairoSubsidebarMenu :navigation="navigation" />
  </TairoSubsidebar>
</template>
