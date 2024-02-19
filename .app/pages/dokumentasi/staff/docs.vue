<script setup lang="ts">
import type { Toc } from '../../../types'

const toc: Toc[] = [
  { id: 'selamat-datang', level: 1, label: 'Selamat Datang' },
  { id: 'apa-itu-Mischool', level: 1, label: 'Apa itu Mischool?' },
  { id: 'jelajahi-lebih-dalam', level: 1, label: 'Jelajahi lebih dalam' },
]

const roles = [
  {
    name: 'Sekolah',
    icon: 'ph:house',
    background: '/img/illustrations/dashboards/hobbies/Sekolah.png',
    to: '/dokumentasi/sekolah/home/dokumentasi',
  },
  {
    name: 'Guru',
    icon: 'ph:house',
    background: '/img/illustrations/dashboards/hobbies/Guru.png',
    to: '/dokumentasi/sekolah/home/dokumentasi',
  },
  {
    name: 'Siswa',
    icon: 'ph:house',
    background: '/img/illustrations/dashboards/hobbies/Siswa.png',
    to: '/dokumentasi/sekolah/home/dokumentasi',
  },
  {
    name: 'Staff',
    icon: 'ph:house',
    background: '/img/illustrations/dashboards/hobbies/Staff.png',
    to: '/dokumentasi/sekolah/home/dokumentasi',
  },
]
</script>

<template>
  <div class="w-full grid grid-cols-4">
    <div class="col-span-4 lg:col-span-3 grid grid-cols-2">
      <div class="col-span-2">
        <div
          class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
        >
          <div class="relative h-[168px] w-[280px] shrink-0">
            <img
              class="pointer-events-none absolute -start-6 -top-16 sm:-start-12"
              src="/img/illustrations/placeholders/flat/placeholder-launch.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading
                tag="h1"
                id="selamat-datang"
                class="text-white opacity-90"
              >
                <span>Selamat Datang di Dokumentasi Mischool!</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Selamat datang di Dokumentasi Mischool! Temukan panduan
                  lengkap untuk mengoptimalkan penggunaan Mischool dalam
                  manajemen sekolah Anda. Dengan informasi mendalam dan panduan
                  praktis, kami siap membantu meningkatkan efisiensi pengelolaan
                  sekolah. Jelajahi dokumentasi ini, dan jika ada pertanyaan,
                  tim dukungan kami siap membantu. Terima kasih telah memilih
                  Mischool sebagai solusi terpercaya untuk sekolah Anda!
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-Mischool" class="opacity-90">
            <span>Apa Itu Mischool!</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Mischool adalah sebuah platform manajemen sekolah yang canggih,
              dirancang untuk memberikan solusi terpadu dalam mengelola berbagai
              aspek kegiatan sekolah. Dengan Mischool, pengguna dapat mengakses
              fitur-fitur seperti manajemen siswa, penjadwalan, pelaporan, dan
              lainnya, yang bertujuan untuk meningkatkan efisiensi operasional
              dan pengalaman pembelajaran.
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
                      <span>Apa itu Mischool?</span>
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
      <BaseCard class="col-span-2 grid grid-cols-12 w-full gap-2 p-4 mt-8">
        <BaseHeading
          tag="h1"
          id="jelajahi-lebih-dalam"
          class="opacity-90 col-span-12 mt-2 mb-4"
        >
          <span>Jelajahi dokumentasi lebih dalam dokumentasi kami.</span>
        </BaseHeading>
        <!-- Grid item -->
        <div
          class="col-span-12 md:col-span-6"
          v-for="(role, i) in roles"
          :key="i"
        >
          <NuxtLink
            :to="role.to"
            class="group relative flex w-full flex-col overflow-hidden rounded-2xl"
          >
            <img
              class="h-80 w-full object-cover object-center"
              :src="role.background"
              :alt="role.name"
            />
            <div
              class="bg-muted-900 absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"
            ></div>
            <div
              class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between p-6"
            >
              <div class="flex items-center justify-between">
                <h3
                  class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {{ role.name }}
                </h3>
                <Icon
                  :name="role.icon"
                  class="h-5 w-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </div>
              <div class="flex items-center justify-between">
                <h3
                  class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Baca Dokumentasi
                </h3>
                <Icon
                  name="lucide:arrow-right"
                  class="h-4 w-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </BaseCard>
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <TairoToc :toc="toc" />
    </div>
  </div>
</template>
