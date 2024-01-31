<script setup lang="ts">
import type { Toc } from 'types'
definePageMeta({
  title: 'Sistem Manajemen Sekolah',
  description:
    'Mischool adalah platform manajemen sekolah yang memberikan solusi terbaik untuk administrasi dan komunikasi antara sekolah, siswa, dan orang tua.',
  breadcrumb: {
    label: 'Mischool',
  },
})

const toc : Toc[] = [
    { id: '1', level: 1, label: 'Chapter 1' },
    { id: '2', level: 1, label: 'Chapter 2' },
    { id: '3', level: 2, label: 'Section 1.1' },
    { id: '4', level: 2, label: 'Section 1.2' },
    { id: '5', level: 2, label: 'Section 2.1' },
]
</script>

<template>
  <TairoToc :toc="toc" />
</template>
