<script setup lang="ts">
definePageMeta({
  title: 'Pesanan Saya',
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
              class="pointer-events-none absolute -start-6 -top-14 sm:-start-12"
              src="/img/illustrations/placeholders/flat/placeholder-paypal.svg"
              alt="School Illustration"
            />
          </div>
          <div class="mt-10 grow sm:mt-0">
            <div class="text-center sm:text-left">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Halaman Pesanan Saya</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Di menu pesanan, Anda dapat melihat fitur-fitur yang telah
                  dibeli. Ada dua kolom di atas; yang pertama menunjukkan daftar
                  pembayaran berhasil atau menunggu pembayaran. Kolom kedua
                  memperlihatkan daftar pesanan berdasarkan urutan waktu,
                  termasuk yang terlama, terbaru, dan semua pesanan. Untuk
                  membuat pesanan baru, kita bisa ke Menu Fitur.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-Mischool" class="opacity-90">
            <span>Fitur Halaman Pesanan Saya</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai penggunaan halaman pesanan saya
              surat dapat dilihat pada video tutorial berikut
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
