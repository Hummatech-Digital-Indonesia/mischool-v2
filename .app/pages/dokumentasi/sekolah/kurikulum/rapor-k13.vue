<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'Rapor K13',
  description: `Di fitur Rapor K13 ini, sekolah bisa mengatur berbagai hal mulai dari bobot nilai untuk rapor, deskripsi untuk nilai dan karakter yang dinilai.`,
  layout: 'sidebar',
})

const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'kelompok', level: 2, label: 'Kelompok Mata Pelajaran' },
  { id: 'setting', level: 2, label: 'Setting Deskripsi' },
  { id: 'karakter', level: 2, label: 'Karakter' },
  { id: 'bobot', level: 2, label: 'Bobot Nilai' },
]

const tutorials = [
  {
    id: 1,
    title: 'Kelompok Mata Pelajaran',
    slug: 'kelompok-mata-pelajaran',
    url: 'https://youtu.be/YbIAT1LBXEg?si=0qfUwhf80DQX6YbL',
    cover: '/img/thumbnail/sekolah/kelompok-mata-pelajaran.png',
  },
  {
    id: 2,
    title: 'Setting Deskripsi',
    slug: 'setting-deskripsi',
    url: 'https://youtu.be/IS1FCux9pm8?si=45gjlT_NQLEXK_gR',
    cover: '/img/thumbnail/sekolah/setting-deskripsi.png',
  },
  {
    id: 3,
    title: 'Karakter',
    slug: 'karakter',
    url: 'https://youtu.be/tZoBlkU8zzg?si=BxkxMmZYMVV7LnLW',
    cover: '/img/thumbnail/sekolah/karakter.png',
  },
  {
    id: 4,
    title: 'Bobot Nilai',
    slug: 'bobot-nilai',
    url: 'https://youtu.be/-uwoRFavW-Y?si=gFG_25CSiA9QUQcC',
    cover: '/img/thumbnail/sekolah/bobot-nilai.png',
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
                <span>Rapor K13</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Di fitur rapor k13 ini, sekolah bisa mengatur berbagai hal mulai dari bobot nilai untuk rapor, deskripsi untuk nilai dan karakter yang dinilai.
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
