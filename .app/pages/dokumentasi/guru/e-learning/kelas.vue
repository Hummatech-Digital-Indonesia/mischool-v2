<script setup lang="ts">
definePageMeta({
  title: 'Kelas',
  description: 'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'sidebar',
})

const featuredVideos = [
  {
    id: 1,
    title: 'Tutorial Masuk Kelas E-Learning',
    slug: '',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    cover: '/img/dokumentasi/guru/Tutorial Masuk Kelas E-Learning.png',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 1,
    title: 'Menambah Pertemuan E-Learning',
    slug: '',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    cover: '/img/dokumentasi/guru/Menambah Pertemuan E-Learning.png',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 1,
    title: 'Tutorial lihat detail pertemuan dan tambah materi E-Learning',
    slug: '',
    url: 'https://tairo.cssninja.io/dashboards/soccer',
    cover:
      '/img/dokumentasi/guru/Tutorial lihat detail pertemuan dan tambah materi E-Learning.png',
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
    title: 'How to think a mobile app landing page design',
    slug: '',
    cover: '/img/illustrations/dashboards/video/6.png',
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
    <div class="col-span-4 lg:col-span-5 grid grid-cols-2">
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
                <span>Halaman Kelas</span>
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
      <BaseCard
        class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2"
        v-for="video in featuredVideos"
        :id="'fitur' + video.id"
      >
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-mischool" class="opacity-90">
            <span>{{ video.title }}</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai
              {{ video.title }} dapat dilihat pada video tutorial berikut
            </span>
          </BaseParagraph>
        </div>
        <TutorialVideo
          class="w-10/12 m-auto"
          :url="video.url"
          :src="video.cover"
          :title="video.title"
        />
      </BaseCard>
    </div>
  </div>
</template>
