<script setup lang="ts">
definePageMeta({
  title: 'Cetak Rapor',
  description: 'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'sidebar',
})
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
              src="/img/illustrations/placeholders/flat/placeholder-projects-dark.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Halaman Cetak Rapor</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Di halaman cetak rapor terdapat fitur pencarian untuk mencari
                  kelas yang kita inginkan dan terdapat opsi untuk memilih tahun
                  ajaran. di bagian kelas terdapat tombol masuk kelas jika
                  menekan tombol masuk kelas user akan masuk ke kelas yang di
                  pilih. Di bagian kelsa yang di pilih terdapat dua fitur opsi,
                  yakni opsi untuk memilih semester dan periode. Jika ingin
                  mencetak rapor user harus mengisikan tanggal untuk mencetak
                  rapor
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-Mischool" class="opacity-90">
            <span>Fitur Halaman Cetak Rapor</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai penggunaan fitur halaman cetak
              rapor dapat dilihat pada video tutorial berikut
            </span>
          </BaseParagraph>
        </div>
        <TutorialVideo
          url="https://tairo.cssninja.io/dashboards/soccer"
          src="/img/illustrations/dashboards/video/6.png"
        />
      </BaseCard>
    </div>
  </div>
</template>
