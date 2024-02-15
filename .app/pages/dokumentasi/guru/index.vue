<script setup lang="ts">
import type { Toc } from '../../../../types'
const toc: Toc[] = [
  { id: 'fitur', level: 1, label: 'Fitur Akun Guru' },
  { id: 'fitur-rapor', level: 2, label: 'Fitur Rapor' },
  { id: 'fitur-ujian', level: 2, label: 'Fitur Ujian' },
  { id: 'e-learning', level: 2, label: 'Fitur E-learning' },
  { id: 'fitur-jurnal', level: 2, label: 'Fitur jurnal' },
  { id: 'fitur-ekstrakurikuler', level: 2, label: 'Fitur ekstrakurikuler' },
]

const navigations = [
  {
    title: 'Fitur rapor',
    id: 'fitur-rapor',
    items: [
      {
        name: 'Input Nilai',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor',
      },
      {
        name: 'Deskripsi Karakter',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor/deskripsi-karakter',
      },
      {
        name: 'History Perbaikan',
        icon: 'ph:list-checks',
        to: '/dokumentasi/guru/rapor/input-keagamaan',
      },
    ],
  },

  {
    title: 'E-learning',
    id: 'e-learning',
    items: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning',
      },
      {
        name: 'Kelas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning/kelas',
      },
      {
        name: 'Daftar Tugas',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/e-learning/daftar-tugas',
      },
    ],
  },
  {
    title: 'Fitur Jurnal',
    id: 'fitur-jurnal',
    items: [
      {
        name: 'Jurnal',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/guru/jurnal',
      },
    ],
  },
  {
    title: 'Fitur Ekstrakurikuler',
    id: 'fitur-ekstrakurikuler',
    items: [
      {
        name: 'Ekstrakurikuler',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/guru/ekstrakurikuler',
      },
    ],
  },
  {
    title: 'Fitur Ujian',
    id: 'fitur-ujian',
    items: [
      {
        name: 'Dashboard',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian',
      },
      {
        name: 'Ulangan',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/ulangan',
      },
      {
        name: 'Ujian',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/ujian',
      },
      {
        name: 'Bank Soal',
        icon: 'ph:table-duotone',
        to: '/dokumentasi/guru/ujian/bank-soal',
      },
    ],
  },
]
</script>

<template>
  <div class="w-full grid grid-cols-6">
    <div class="col-span-4 lg:col-span-3 grid grid-cols-2">
      <div class="col-span-2">
        <div
          class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
        >
          <div class="relative h-[168px] w-[280px] shrink-0">
            <img
              class="pointer-events-none absolute -start-6 -top-10 sm:-start-12"
              src="/img/illustrations/placeholders/flat/chart-guy.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Selamat Datang di Dokumentasi Akun Guru Mischool!</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Dokumentasi ini memberikan panduan singkat untuk mengelola
                  akun guru Anda di Mischool. Pelajari cara mengatur profil,
                  manfaatkan fitur-fitur, dan pastikan keamanan akun. Semoga
                  dokumentasi ini membantu Anda memaksimalkan penggunaan akun
                  guru Mischool. Selamat menggunakan!
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <BaseHeading class="col-span-2" tag="h1"> Fitur Akun Guru </BaseHeading>
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
  </div>
</template>
