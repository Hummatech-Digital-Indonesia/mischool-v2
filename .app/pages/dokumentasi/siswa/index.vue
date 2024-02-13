<script setup lang="ts">
import type { Toc } from '../../../../types'
const toc: Toc[] = [
  { id: 'fitur', level: 1, label: 'Fitur Akun Siswa' },
  { id: 'fitur-pelanggaran', level: 2, label: 'Fitur Pelanggaran' },
  { id: 'e-learning', level: 2, label: 'Fitur E-learning' },
  { id: 'ujian', level: 2, label: 'Fitur Ujian' },
]

const navigations = [
  {
    title: 'Fitur Pelanggaran',
    id: 'fitur-pelanggaran',
    items: [
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran',
      },
      {
        name: 'History Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran/history-pelanggaran',
      },
      {
        name: 'History Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/siswa/pelanggaran/history-perbaikan',
      },
    ],
  },

  {
    title: 'e-learning',
    id: 'e-learning',
    items: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/e-learning',
      },
      {
        name: 'Kelas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/e-learning/daftar-tugas',
      },
    ],
  },
  {
    title: 'Ujian',
    id: 'Ujian',
    items: [
      {
        name: 'Ujian',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/ujian',
      },
      {
        name: 'Ulangan',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/siswa/ujian/ulangan',
      },
    ],
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
              class="pointer-events-none absolute -start-4 -top-2 sm:-start-12"
              src="/img/illustrations/placeholders/flat/placeholder-courses.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Selamat Datang di Dokumentasi Akun Siswa Mischool!</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Dokumentasi ini memberikan panduan singkat untuk mengelola
                  akun siswa Anda di Mischool. Pelajari cara mengatur profil,
                  manfaatkan fitur-fitur, dan pastikan keamanan akun. Semoga
                  dokumentasi ini membantu Anda memaksimalkan penggunaan akun
                  siswa Mischool. Selamat menggunakan!
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <BaseHeading class="col-span-2" tag="h1">
          Fitur Akun Siswa
        </BaseHeading>
        <div
          v-for="(navigation, i) in navigations"
          :key="i"
          class="col-span-2 lg:col-span-1 mb-4"
        >
          <div class="my-4">
            <BaseHeading
              as="h2"
              size="lg"
              weight="semibold"
              lead="tight"
              :id="navigation.id"
              class="text-muted-800 dark:text-white"
            >
              <span>{{ navigation.title }}</span>
            </BaseHeading>
          </div>
          <!-- List -->
          <div class="space-y-2">
            <!-- List item -->
            <BaseCard
              v-for="(item, j) in navigation.items"
              :key="j"
              shape="curved"
              class="flex items-center gap-3 p-3"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                :class="getRandomColor()"
              >
                <Icon :name="item.icon" class="h-5 w-5" />
              </div>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ item.name }}</span>
                </BaseHeading>
              </div>
              <div class="ms-auto flex items-center">
                <NuxtLink :to="item.to">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="h-5 w-5" />
                  </BaseButtonIcon>
                </NuxtLink>
              </div>
            </BaseCard>
          </div>
        </div>
      </BaseCard>
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <TairoToc :toc="toc" />
    </div>
  </div>
</template>
