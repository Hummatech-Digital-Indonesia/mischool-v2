<script setup lang="ts">
const navigation = [
  {
    name: 'Dokumentasi',
    to: '/dokumentasi/siswa',
  },
  {
    name: 'Pelanggaran',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran',
      },
      {
        name: 'History Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran/history-pelanggaran',
      },
      {
        name: 'History Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran/history-perbaikan',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Ujian',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/ujian',
      },
      {
        name: 'Ulangan',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/ujian/ulangan',
      },
    ],
  },
  {
    name: 'E-Learning',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/e-learning',
      },
      {
        name: 'Kelas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'ph:table-duotone',
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
