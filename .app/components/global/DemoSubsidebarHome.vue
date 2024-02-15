<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Home',
        icon: 'ph:house',
        to: '/docs',
      },
    ],
  },
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
