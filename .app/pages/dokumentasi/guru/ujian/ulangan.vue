<script setup lang="ts">
import type { Toc } from '~/types'
const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'menambahkan-ujian', level: 2, label: 'Menambahkan Ulangan' },
  { id: 'cara-mengedit-ulangan', level: 2, label: 'Mengedit Ulangan' },
  {
    id: 'melihat-menambahkan-soal-ulangan',
    level: 2,
    label: 'Lihat & Tambah Soal Ulangan',
  },
  {
    id: 'cara-menghapus-soal-ulangan',
    level: 2,
    label: 'Menghapus Soal Ulangan',
  },
]
definePageMeta({
  title: 'Ulangan',
  description: 'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'sidebar',
})

const featuredVideos = [
  {
    id: 1,
    title: 'Cara Menambahkan Ulangan',
    slug: 'menambahkan-ujian',
    cover: '/img/dokumentasi/guru/Cara Menambahkan Ulangan Baru.png',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 2,
    title: 'Cara Mengedit Ulangan',
    slug: 'cara-mengedit-ulangan',
    cover: '/img/dokumentasi/guru/Cara Mengedit Ulangan.png',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 3,
    title: 'Melihat dan Menambah Soal Ulangan',
    slug: 'melihat-menambahkan-soal-ulangan',
    cover: '/img/dokumentasi/guru/Melihat dan Menambah Soal Ulangan.png',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 4,
    title: 'Cara Menghapus Soal Ulangan',
    slug: 'cara-menghapus-soal-ulangan',
    cover: '/img/dokumentasi/guru/Cara Menghapus Soal Ulangan.png',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
]
const videos = [
  {
    id: 6,
    title: 'Melihat dan Menambah Soal Ulangan',
    slug: '',
    cover: '/img/dokumentasi/guru/Melihat dan Menambah Soal Ulangan.png',
    uploaded: '7 hours ago',
    category: 'Frontend',
    author: {
      name: 'Alan Skelli',
      avatar: '/img/avatars/11.svg',
    },
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
                <span>Halaman Ulangan</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Fitur Deskripsi Karakter Mischool memungkinkan pengguna untuk
                  membuat deskripsi karakter secara cepat dan disesuaikan dengan
                  mudah di dalam platform. Dengan kemampuan untuk menyesuaikan
                  desainnya, fitur ini sangat berguna untuk menciptakan header
                  profesional yang dapat digunakan dalam mencetak rapor dan
                  surat.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 col-span-2 grid lg:grid-cols-2 gap-4" id="tutorial">
        <BaseCard
          class="p-4 grid grid-cols-1"
          v-for="video in featuredVideos"
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
