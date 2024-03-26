<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/siswa/docs',
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
        to: '/dokumentasi/siswa/pelanggaran/pelanggaran',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Ujian',
        icon: 'tabler:align-box-center-stretch',
        to: '/dokumentasi/siswa/ujian/ujian',
      },
    ],
  },
  {
    name: 'E-Learning',
    children: [
      {
        name: 'E-Learning',
        icon: 'ph:chalkboard-simple',
        to: '/dokumentasi/siswa/e-learning/e-learning',
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
