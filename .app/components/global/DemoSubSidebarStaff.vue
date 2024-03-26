<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/staff/docs',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Pelanggaran',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/staff/pelanggaran/pelanggaran',
      },
    ],
  },
  {
    name: 'Ekstrakurikuler',
    children: [
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:person-simple-run-light',
        to: '/dokumentasi/staff/ekstrakurikuler',
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
