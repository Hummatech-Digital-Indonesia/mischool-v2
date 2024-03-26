<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'Jadwal Pelajaran',
  description: ` Dalam fitur jadwal pelajaran, sebagai admin, Anda dapat
                  menambahkan jadwal pelajaran dengan menentukan waktu mulai dan
                  selesai untuk setiap hari dalam seminggu. Anda juga dapat
                  mengedit jadwal pelajaran jika ada perubahan.`,
  layout: 'sidebar',
})

const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'jam-pelajaran', level: 2, label: 'Jam Pelajaran' },
  { id: 'jadwal-pelajaran', level: 2, label: 'Jadwal Pelajaran' },
]

const tutorials = [
  {
    id: 1,
    title: 'Tutorial Halaman Jam Pelajaran',
    slug: 'jam-pelajaran',
    url: 'https://youtu.be/Grg8WeAo8QQ?si=OahigxZql-d2eEb1',
    cover: '/img/thumbnail/sekolah/jam-pelajaran.png',
  },
  {
    id: 2,
    title: 'Tutorial Halaman Jadwal Pelajaran',
    slug: 'jadwal-pelajaran',
    url: 'https://youtu.be/Grg8WeAo8QQ?si=OahigxZql-d2eEb1&t=146',
    cover: '/img/thumbnail/sekolah/jam-pelajaran.png',
  }
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
                <span>Halaman Jam Pelajaran</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Dalam fitur jam pelajaran, sebagai admin, Anda dapat
                  menambahkan jadwal pelajaran dengan menentukan waktu mulai dan
                  selesai untuk setiap hari dalam seminggu. Anda juga dapat
                  mengedit jadwal pelajaran jika ada perubahan.
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





