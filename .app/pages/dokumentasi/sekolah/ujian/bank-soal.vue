<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'Cetak Rapor',
  description: `Di halaman bank soal user dapat memilih kelas dan juga
                  meilahat soal dari beberapa mata pelajaran. Dengan menekan
                  tombol lihat soal. Di halaman lihat soal user dapat melihat
                  beberpa soal yang berhubungan dengan mata pelajaran yang di
                  pilih.`,
  layout: 'sidebar',
})

const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'ujian', level: 2, label: 'Bank Soal' },
]

const tutorials = [
  {
    id: 1,
    title: 'Tutorial Halaman Bank Soal',
    slug: 'ujian',
    url: 'https://youtu.be/o86uD1aZGK8?si=zJ1Aqk-li4OUJA58',
    cover: '/img/thumbnail/sekolah/bank-soal.png',
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
                <span>Halaman Bank Soal</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Di halaman bank soal user dapat memilih kelas dan juga
                  meilahat soal dari beberapa mata pelajaran. Dengan menekan
                  tombol lihat soal. Di halaman lihat soal user dapat melihat
                  beberpa soal yang berhubungan dengan mata pelajaran yang di
                  pilih.
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



