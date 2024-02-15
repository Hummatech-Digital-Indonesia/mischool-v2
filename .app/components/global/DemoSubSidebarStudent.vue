<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/siswa',
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
        // icon: 'tabler:message-report',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/siswa/pelanggaran',
      },
      {
        name: 'History Pelanggaran',
        // icon: 'ph:list-bullets-thin',
        icon: 'ic:sharp-history',
        to: '/dokumentasi/siswa/pelanggaran/history-pelanggaran',
      },
      {
        name: 'History Perbaikan',
        icon: 'ic:sharp-manage-history',
        // icon: 'tabler:browser-check',
        to: '/dokumentasi/siswa/pelanggaran/history-perbaikan',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Ujian',
        icon: 'mdi:folder-cog',
        to: '/dokumentasi/siswa/ujian',
      },
      {
        name: 'Ulangan',
        icon: 'tabler:align-box-center-stretch',
        to: '/dokumentasi/siswa/ujian/ulangan',
      },
    ],
  },
  {
    name: 'E-Learning',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:grid-four',
        to: '/dokumentasi/siswa/e-learning',
      },
      {
        name: 'Kelas',
        icon: 'ph:chalkboard-simple',
        to: '/dokumentasi/siswa/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'tabler:clipboard-list',
        to: '/dokumentasi/siswa/e-learning/daftar-tugas',
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
