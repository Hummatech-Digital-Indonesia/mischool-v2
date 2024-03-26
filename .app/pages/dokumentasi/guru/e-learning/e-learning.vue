<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'E-Learning',
  description: `di fitur E-Learning, sebagai guru kamu dapat membuat pertemuan,
                  tugas dan materi serta melihat pengumpulan tugas.`,
  layout: 'sidebar',
})

const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'halaman-dashboard', level: 2, label: 'Halaman Dashboard' },
  { id: 'menambah-pertemuan', level: 2, label: 'Menambah Pertemuan' },
  { id: 'menambah-materi', level: 2, label: 'Menambah Materi' },
  { id: 'menambah-tugas', level: 2, label: 'Menambah Tugas' },
  { id: 'masuk-kelas', level: 2, label: 'Masuk Kelas' },
  { id: 'daftar-tugas', level: 2, label: 'Daftar Tugas' },
]

const tutorials = [
  {
    id: 1,
    title: 'Halaman Dashboard',
    slug: 'halaman-dashboard',
    url: 'https://youtu.be/lVU7vBvotoE?si=LOH4BS7YaMWt56KD',
    cover: '/img/thumbnail/guru/Halaman Dashboard E-Learning.png',
  },
  {
    id: 2,
    title: 'Menambah Pertemuan',
    slug: 'menambah-pertemuan',
    url: 'https://youtu.be/lVU7vBvotoE?si=EV7eYZ07YBPvhU2b&t=59',
    cover: '/img/thumbnail/guru/menambah-pertemuan.png',
  },
  {
    id: 3,
    title: 'Menambah Materi',
    slug: 'menambah-materi',
    url: 'https://youtu.be/lVU7vBvotoE?si=EV7eYZ07YBPvhU2b&t=108',
    cover: '/img/thumbnail/guru/menambah-materi.png',
  },
  {
    id: 4,
    title: 'Menambah Tugas',
    slug: 'menambah-tugas',
    url: 'https://youtu.be/lVU7vBvotoE?si=EV7eYZ07YBPvhU2b&t=147',
    cover: '/img/thumbnail/guru/menambah-tugas.png',
  },
  {
    id: 5,
    title: 'Masuk Kelas',
    slug: 'masuk-kelas',
    url: 'https://youtu.be/lVU7vBvotoE?si=EV7eYZ07YBPvhU2b&t=217',
    cover: '/img/thumbnail/guru/masuk-kelas.png',
  },
  {
    id: 6,
    title: 'Daftar Tugas',
    slug: 'daftar-tugas',
    url: 'https://youtu.be/lVU7vBvotoE?si=EV7eYZ07YBPvhU2b&t=217',
    cover: '/img/thumbnail/guru/daftar-tugas.png',
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
                <span>Fitur E-Learning</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  di fitur E-Learning, sebagai guru kamu dapat melihat tugas dan
                  materi serta mengumpulkan tugas.
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
          <BaseParagraph size="sm" class="opacity-80 col-span-2">
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
