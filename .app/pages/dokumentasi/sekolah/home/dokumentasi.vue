<script setup lang="ts">
import type { Toc } from '../../../../types'
const toc: Toc[] = [
  { id: 'fitur', level: 1, label: 'Fitur Akun Sekolah' },
  { id: 'fitur-dasar', level: 2, label: 'Fitur Dasar' },
  { id: 'kesiswaan', level: 2, label: 'Fitur Kesiswaan' },
  { id: 'kurikulum', level: 2, label: 'Fitur Kurikulum' },
  { id: 'absensi', level: 2, label: 'Fitur Absensi' },
  { id: 'ujian', level: 2, label: 'Fitur Ujian' },
]

const navigations = [
  {
    title: 'Fitur Dasar',
    id : 'fitur-dasar',
    items: [
      {
        name: 'Kop Surat Sekolah',
        icon: 'ph:envelope-simple-light',
        to: '/dokumentasi/sekolah/home/kop-surat',
      },
      {
        name: 'Data Pegawai',
        icon: 'tabler:users',
        to: '/dokumentasi/sekolah/home/pegawai',
      },
      {
        name: 'Data Guru',
        icon: 'tabler:users',
        to: '/dokumentasi/sekolah/home/guru',
      },
    ],
  },
  {
    title: 'Kesiswaan',
    id: 'kesiswaan',
    items: [
      {
        name: 'Siswa',
        icon: 'ph:student',
        to: '/dokumentasi/sekolah/kesiswaan/siswa',
      },
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:person-simple-run-light',
        to: '/dokumentasi/sekolah/kesiswaan/Ekstrakurikuler',
      },
      {
        name: 'Wali Murid',
        icon: 'ph:person-simple-light',
        to: '/dokumentasi/sekolah/kesiswaan/wali-murid',
      },
    ],
  },
  {
    title: 'Kurikulum',
    id:'kurikulum',
    items: [
      {
        name: 'Kelas',
        icon: 'ph:chalkboard-simple',
        to: '/dokumentasi/sekolah/kurikulum/kelas',
      },
      {
        name: 'Tingkatan Kelas',
        icon: 'ph:activity-light',
        to: '/dokumentasi/sekolah/kurikulum/tingkatan-kelas',
      },
      {
        name: 'Semester',
        icon: 'ph:bookmarks',
        to: '/dokumentasi/sekolah/kurikulum/semester',
      },
      {
        name: 'Mata Pelajaran',
        icon: 'ph:book',
        to: '/dokumentasi/sekolah/kurikulum/mata-pelajaran',
      },
      {
        name: 'Jam Pelajaran',
        icon: 'ph:book',
        to: '/dokumentasi/sekolah/kurikulum/jam-pelajaran',
      },
      {
        name: 'Bobot Nilai',
        icon: 'tabler:weight',
        to: '/dokumentasi/sekolah/kurikulum/bobot-nilai',
      },
      {
        name: 'Kelompok Pelajaran',
        icon: 'tabler:books',
        to: '/dokumentasi/sekolah/kurikulum/kelompok-pelajaran',
      },
      {
        name: 'Setting Deskripsi',
        icon: 'tabler:settings',
        to: '/dokumentasi/sekolah/kurikulum/setting-deskripsi',
      },
      {
        name: 'Karakter',
        icon: 'tabler:heart',
        to: '/dokumentasi/sekolah/kurikulum/karakter',
      },
      {
        name: 'Cetak Rapor',
        icon: 'tabler:printer',
        to: '/dokumentasi/sekolah/kurikulum/cetak-rapor',
      },
    ],
  },
  {
    title: 'Absensi',
    id:'absensi',
    items: [
      {
        name: 'Registrasi RFID',
        icon: 'tabler:cards',
        to: '/dokumentasi/sekolah/absensi/registrasi-rfid',
      },
      {
        name: 'Setting Jam',
        icon: 'tabler:clock-cog',
        to: '/dokumentasi/sekolah/absensi/setting-jam',
      },
      {
        name: 'Kehadiran',
        icon: 'tabler:checkup-list',
        to: '/dokumentasi/sekolah/absensi/kehadiran',
      },
      {
        name: 'Jurnal',
        icon: 'tabler:align-box-right-stretch',
        to: '/dokumentasi/sekolah/absensi/jurnal',
      },
    ],
  },
  {
    title: 'Ujian',
    id : 'ujian',
    items: [
      {
        name: 'Ujian',
        icon: 'mdi:folder-cog',
        to: '/dokumentasi/sekolah/ujian',
      },
      {
        name: 'Ujian Berlangsung',
        icon: 'mdi:folder-clock-outline',
        to: '/dokumentasi/sekolah/ujian/ujian-berlangsung',
      },
      {
        name: 'Ujian Selesai',
        icon: 'mdi:folder-check-outline',
        to: '/dokumentasi/sekolah/ujian/ujian-selesai',
      },
      {
        name: 'Bank Soal',
        icon: 'mdi:folder-file',
        to: '/dokumentasi/sekolah/ujian/bank-soal',
      },
    ],
  },
  {
    title: 'Paket Fitur',
    items: [
      {
        name: 'Fitur',
        icon: 'mdi:package-variant-closed',
        to: '/dokumentasi/sekolah/fitur',
      },
      {
        name: 'Paket Anda',
        icon: 'mdi:package-variant-closed-check',
        to: '/dokumentasi/sekolah/fitur/paket-anda',
      },
      {
        name: 'History',
        icon: 'ph:list-bullets-thin',
        to: '/dokumentasi/sekolah/fitur/history',
      },
      {
        name: 'Pesanan Anda',
        icon: 'ph:package-thin',
        to: '/dokumentasi/sekolah/fitur/pesanan-saya',
      },
    ],
  },
  {
    title: 'Pelanggaran',
    items: [
      {
        name: 'Pelanggaran',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/sekolah/pelanggaran',
      },
    ],
  },
  {
    title: 'Tambah Akun',
    items: [
      {
        name: 'Tambah Akun',
        icon: 'ph:user-plus',
        to: '/dokumentasi/sekolah/tambah-akun',
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
              class="pointer-events-none absolute -start-6 -top-16 sm:-start-12"
              src="/img/illustrations/placeholders/flat/placeholder-launch.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span
                  >Selamat Datang di Dokumentasi Akun Sekolah Mischool!</span
                >
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Dokumentasi ini memberikan panduan singkat untuk mengelola
                  akun sekolah Anda di Mischool. Pelajari cara mengatur profil,
                  manfaatkan fitur-fitur, dan pastikan keamanan akun. Semoga
                  dokumentasi ini membantu Anda memaksimalkan penggunaan akun
                  sekolah Mischool. Selamat menggunakan!
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <BaseHeading class="col-span-2" tag="h1">
          Fitur Akun Sekolah
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
