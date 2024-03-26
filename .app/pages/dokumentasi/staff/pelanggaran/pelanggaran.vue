<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'Pelanggaran',
  description: `Fitur Pelanggaran Mischool memungkinkan staff untuk
                  memberi poin pelanggaran pada siswa, mengkonfirmasi perbaikan, dan mengecek riwayat perbaikan.`,
  layout: 'sidebar',
})
const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'menambah-poin', level: 2, label: 'Menambah Poin' },
  { id: 'menambah-poin-perbaikan', level: 2, label: 'Menambah Poin Perbaikan' },
  { id: 'cek-perbaikan', level: 2, label: 'Mengecek Riwayat Perbaikan' },
  { id: 'cek-pelanggaran', level: 2, label: 'Mengecek Riwayat Pelanggaran' },
  { id: 'cek-top', level: 2, label: 'Mengecek Top Pelanggaran' },
]
const tutorials = [
  {
    id: 1,
    title: 'Menambah Poin',
    slug: 'menambah-poin',
    url: 'https://youtu.be/XwDg4yeoEhE?si=xDzmZkDPZrSxZYva',
    cover: '/img/thumbnail/staff/menambah-poin.png',
  },
  {
    id: 2,
    title: 'Menambah Poin Perbaikan',
    slug: 'menambah-poin-perbaikan',
    url: 'https://youtu.be/XwDg4yeoEhE?si=xDzmZkDPZrSxZYva&t=75',
    cover: '/img/thumbnail/staff/menambah-poin-perbaikan.png',
  },
  {
    id: 3,
    title: 'Mengecek Riwayat Perbaikan',
    slug: 'cek-perbaikan',
    url: 'https://youtu.be/XwDg4yeoEhE?si=xDzmZkDPZrSxZYva&t=159',
    cover: '/img/thumbnail/staff/mengecek-riwayat-perbaikan.png',
  },
  {
    id: 4,
    title: 'Mengecek Riwayat Pelanggaran',
    slug: 'cek-pelanggaran',
    url: 'https://youtu.be/XwDg4yeoEhE?si=l6vhEknLuUjUp3yA&t=223',
    cover: '/img/thumbnail/staff/mengecek-riwayat-pelanggaran.png',
  },
  {
    id: 5,
    title: 'Mengecek Top Pelanggaran',
    slug: 'cek-top',
    url: 'https://youtu.be/XwDg4yeoEhE?si=l6vhEknLuUjUp3yA&t=267',
    cover: '/img/thumbnail/staff/mengecek-top-pelanggaran.png',
  },
]
</script>

<template>
  <div class="w-full grid grid-cols-4">
    <HeaderDocs class="col-span-4" />
    <div class="col-span-4 lg:col-span-3 grid grid-cols-2">
      <div class="col-span-2">
        <div
          class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
        >
          <div class="relative h-[168px] w-[280px] shrink-0">
            <img
              class="pointer-events-none absolute -start-6 -top-3 sm:-start-12"
              src="/img/illustrations/placeholders/flat/placeholder-projects.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Fitur Pelanggaran</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Fitur Pelanggaran Mischool memungkinkan staff untuk memberi
                  poin pelanggaran pada siswa, mengkonfirmasi perbaikan, dan
                  mengecek riwayat perbaikan.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 col-span-2 grid lg:grid-cols-2 gap-4" id="tutorial">
        <BaseCard
          class="p-4 grid grid-cols-1"
          v-for="video in tutorials"
          :id="video.slug"
        >
          <BaseHeading tag="h1" class="opacity-90 col-span-2">
            <span>{{ video.title }}</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3 col-span-2">
            <span>
              Penjelasan lebih detail mengenai
              {{ video.title }} dapat dilihat pada video tutorial berikut
            </span>
          </BaseParagraph>
          <TutorialVideo
            class="mt-10"
            :url="video.url"
            :src="video.cover"
            :title="video.title"
          />
        </BaseCard>
      </div>
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <TairoToc :toc="toc" />
    </div>
  </div>
</template>
