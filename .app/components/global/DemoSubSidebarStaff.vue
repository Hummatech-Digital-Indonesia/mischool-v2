<script setup lang="ts">
const navigation = [
  {
    name: 'Dokumentasi',
    to: '/dokumentasi/staff',
  },
  {
    name: 'Pelanggaran',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran',
      },
      {
        name: 'Siswa',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran/siswa',
      },
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran/pelanggaran',
      },
      {
        name: 'Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran/perbaikan',
      },
      {
        name: 'Top Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran/top-pelanggaran',
      },
    ],
  },
  {
    name: 'Ekstrakurikuler',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
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
