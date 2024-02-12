<script setup lang="ts">
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
  <div class="w-full grid grid-cols-5">
    <div class="col-spans-5 lg:col-spans-4">
      Testing
    </div>
    <div class="hidden lg:block lg:col-spans-1">
      <TairoToc :toc="toc" />
    </div>
  </div>
</template>
