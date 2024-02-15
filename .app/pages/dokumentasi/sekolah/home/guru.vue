<script setup lang="ts">
definePageMeta({
  title: 'Guru',
  description: 'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'sidebar',
})
const featuredVideos = [
  {
    id: 1,
    title: 'Halaman Fitur Kop Surat',
    slug: '',
    cover: '/img/illustrations/dashboards/video/1.png',
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
              class="pointer-events-none absolute -start-6 -top-6 sm:-start-12"
              src="/img/illustrations/placeholders/flat/chart-guy.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Halaman Guru</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Fitur Kop Surat Mischool memungkinkan pengguna untuk membuat
                  kop surat secara cepat dan disesuaikan dengan mudah di dalam
                  platform. Dengan kemampuan untuk menyesuaikan desainnya, fitur
                  ini sangat berguna untuk menciptakan header profesional yang
                  dapat digunakan dalam mencetak rapor dan surat.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-mischool" class="opacity-90">
            <span>Fitur Hamalan Guru</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai penggunaan fitur kop surat dapat
              dilihat pada video tutorial berikut
            </span>
          </BaseParagraph>
        </div>
        <NuxtLink
          to="https://tairo.cssninja.io/dashboards/soccer"
          target="_blank"
          class="col-span-2 md:col-span-1"
        >
          <div class="flex h-full flex-col">
            <div
              class="bg-muted-200 dark:bg-muted-800 group relative h-full w-full overflow-hidden rounded-2xl"
            >
              <img
                :src="'/img/illustrations/dashboards/video/6.png'"
                :alt="'idh'"
                class="w-full object-cover object-center"
              />
              <div
                class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"
              ></div>
              <div
                class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"
              >
                <div class="ptablet:p-10 p-6">
                  <NuxtLink
                    to="https://tairo.cssninja.io/dashboards/soccer"
                    target="_blank"
                    class="group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-xl transition-colors duration-300"
                  >
                    <Icon name="ic:round-play-arrow" class="h-6 w-6" />
                  </NuxtLink>
                </div>
                <div class="ptablet:p-10 p-6">
                  <NuxtLink
                    to="https://tairo.cssninja.io/dashboards/soccer"
                    target="_blank"
                  >
                    <BaseHeading
                      as="h6"
                      size="lg"
                      weight="bold"
                      lead="tight"
                      class="xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                    >
                      <span>Fitur Halaman Guru</span>
                    </BaseHeading>
                  </NuxtLink>
                  <div class="flex gap-3">
                    <div class="ms-auto">
                      <BaseTag color="primary" shape="full" size="sm">
                        <span>Tonton</span>
                      </BaseTag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </BaseCard>
    </div>
  </div>
</template>
