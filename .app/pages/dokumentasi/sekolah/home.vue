<script setup lang="ts">
definePageMeta({
  title: 'Dokumentasi Sekolah',
  description: 'Jelajahi Fitur fitur dan halaman halaman kami.',
})
import type { Toc } from '../../../types';
const toc : Toc[] = [
    { id: '1', level: 1, label: 'Chapter 1' },
    { id: '2', level: 1, label: 'Chapter 2' },
    { id: '3', level: 2, label: 'Section 1.1' },
    { id: '4', level: 2, label: 'Section 1.2' },
    { id: '5', level: 2, label: 'Section 2.1' },
]
</script>

<template>
  <div class="w-full grid grid-cols-4">
    <div class="col-span-4 lg:col-span-3">
      Testing
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <TairoToc :toc="toc" />
    </div>
  </div>
</template>
