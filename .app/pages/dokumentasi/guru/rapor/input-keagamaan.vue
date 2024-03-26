<script setup lang="ts">
import type { Toc } from '~/types'
definePageMeta({
  title: 'Input Keagamaan',
  description: 'Fitur input nilai keagamaan ini pada umumnya sama seperti fitur input nilai biasanya, namun ini lebih diperuntukkan untuk wali kelas dan mengisi nilai mata pelajaran agama.',
  layout: 'sidebar',
})
const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'input-nilai-keagamaan', level: 2, label: 'Input Nilai Keagamaan' },
]
const featuredVideos = [
  {
    id: 1,
    title: 'Input Nilai Keagamaan Rapor',
    slug: 'input-nilai-keagamaan',
    url: 'https://youtu.be/LYL3wv8--X8?si=sQkhWryL5KtoKq4M&t=192',
    cover: '/img/thumbnail/guru/Input Nilai Keagamaan Rapor.png',
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
                <span>Halaman Input Keagamaan</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Fitur input nilai keagamaan ini pada umumnya sama seperti fitur input nilai biasanya, namun ini lebih diperuntukkan untuk wali kelas dan mengisi nilai mata pelajaran agama.
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
