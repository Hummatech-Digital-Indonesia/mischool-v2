<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/guru/docs',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Rapor',
    children: [
      {
        name: 'Input Nilai',
        icon: 'ph:list-plus-bold',
        to: '/dokumentasi/guru/rapor/input-nilai',
      },
      {
        name: 'Deskripsi Karakter',
        icon: 'ph:chalkboard-teacher-duotone',
        to: '/dokumentasi/guru/rapor/deskripsi-karakter',
      },
      {
        name: 'Input Keagamaan',
        icon: 'ic:sharp-manage-history',
        to: '/dokumentasi/guru/rapor/input-keagamaan',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:grid-four',
        to: '/dokumentasi/guru/ujian/dashboard',
      },
      {
        name: 'Ulangan',
        icon: 'tabler:align-box-center-stretch',
        to: '/dokumentasi/guru/ujian/ulangan',
      },
      {
        name: 'Setting',
        icon: 'mdi:folder-cog',
        to: '/dokumentasi/guru/ujian/setting',
      },
      {
        name: 'Bank Soal',
        icon: 'mdi:folder-file',
        to: '/dokumentasi/guru/ujian/bank-soal',
      },
    ],
  },
  {
    name: 'E-Learning',
    children: [
      {
        name: 'Dashboard',
        icon: 'ph:grid-four',
        to: '/dokumentasi/guru/e-learning/dashboard',
      },
      {
        name: 'Kelas',
        icon: 'ph:chalkboard-simple',
        to: '/dokumentasi/guru/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'tabler:clipboard-list',
        to: '/dokumentasi/guru/e-learning/daftar-tugas',
      },
    ],
  },
  {
    name: 'Jurnal',
    children: [
      {
        name: 'Jurnal',
        icon: 'tabler:align-box-right-stretch',
        to: '/dokumentasi/guru/jurnal',
      },
    ],
  },
  {
    name: 'Ekstrakurikuler',
    children: [
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:person-simple-run-light',
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
