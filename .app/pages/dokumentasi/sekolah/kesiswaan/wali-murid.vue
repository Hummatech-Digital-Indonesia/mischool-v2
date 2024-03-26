<script setup lang="ts">
import type { Toc } from '~/types'

definePageMeta({
  title: 'Wali Murid',
  description: `  pada fitur wali murid ini kita bisa melihat data wali murdi
                  siswa yang sudah terdaftar pada sistem Mischool. tidak hanya
                  itu, kita juga bisa menambahkan data wali murid seacra manual
                  dan juga secara cepat. karna pada halaman ini juga disediakan
                  format excel khusus agar memudahkan admin sekolah untuk
                  menambahkan data.`,
  layout: 'sidebar',
})

const toc: Toc[] = [
  { id: 'tutorial', level: 1, label: 'Tutorial' },
  { id: 'wali-murid', level: 2, label: 'Wali Murid' },
]

const tutorials = [
  {
    id: 1,
    title: 'Tutorial Halaman Wali Murid',
    slug: 'wali-murid',
    url: 'https://youtu.be/MH0Nrmi1TKQ?si=wL0I7RHKb-RQ0KFg',
    cover: '/img/thumbnail/sekolah/wali-murid.png',
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
                <span>Halaman Wali Murid</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  pada fitur wali murid ini kita bisa melihat data wali murdi
                  siswa yang sudah terdaftar pada sistem Mischool. tidak hanya
                  itu, kita juga bisa menambahkan data wali murid seacra manual
                  dan juga secara cepat. karna pada halaman ini juga disediakan
                  format excel khusus agar memudahkan admin sekolah untuk
                  menambahkan data
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


