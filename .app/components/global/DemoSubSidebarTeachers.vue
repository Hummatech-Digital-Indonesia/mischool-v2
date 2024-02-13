<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/guru',
      },
    ],
  },
  {
    name: 'Rapor',
    children: [
      {
        name: 'Input Nilai',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor',
      },
      {
        name: 'Deskripsi Karakter',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor/deskripsi-karakter',
      },
      {
        name: 'History Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor/input-keagamaan',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian',
      },
      {
        name: 'Ulangan',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/ulangan',
      },
      {
        name: 'Ujian',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/ujian',
      },
      {
        name: 'Bank Soal',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/bank-soal',
      },
    ],
  },
  {
    name: 'E-Learning',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning',
      },
      {
        name: 'Kelas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning/daftar-tugas',
      },
    ],
  },
  {
    name: 'Jurnal',
    children: [
      {
        name: 'Jurnal',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/guru/jurnal',
      },
    ],
  },
  {
    name: 'Ekstrakurikuler',
    children: [
      {
        name: 'Ekstrakurikuler',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/guru/ekstrakurikuler',
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
