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
        name: 'Dashboard',
        icon: 'ph:grid-four',
        to: '/dokumentasi/staff/pelanggaran/dashboard',
      },
      {
        name: 'Siswa',
        icon: 'ph:student',
        to: '/dokumentasi/staff/pelanggaran/siswa',
      },
      {
        name: 'Pelanggaran',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/staff/pelanggaran/pelanggaran',
      },
      {
        name: 'Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/staff/pelanggaran/perbaikan',
      },
      {
        name: 'Top Pelanggaran',
        icon: 'ph:warning-bold',
        to: '/dokumentasi/staff/pelanggaran/top-pelanggaran',
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
