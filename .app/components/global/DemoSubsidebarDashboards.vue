<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Kop Surat',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-1',
      },
      {
        name: 'Pegawai',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-2',
      },
      {
        name: 'Guru',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
    ],
  },
  {
    name: 'Kesiswaan',
    children: [
      {
        name: 'Siswa',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-1',
      },
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-2',
      },
      {
        name: 'Wali Murid',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
    ],
  },
  {
    name: 'Kurikulum',
    children: [
      {
        name: 'Kelas',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-1',
      },
      {
        name: 'Tingkatan Kelas',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-2',
      },
      {
        name: 'Semester',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
      {
        name: 'Mata Pelajaran',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
      {
        name: 'Jam Pelajaran',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
      {
        name: 'Jadwal Pelajaran',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
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
