<script setup lang="ts">
definePageMeta({
  title: 'Mata Pelajaran',
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
                <span>Halaman Mata Pelajaran</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Dalam fitur Mata Pelajaran, pengguna bisa menambahkan mata
                  pelajaran umum serta mata pelajaran keagamaan sesuai dengan
                  kepercayaan masing-masing. Selain itu, pengguna juga dapat
                  mengedit dan menghapus mata pelajaran. Perbedaan antara mata
                  pelajaran umum dan keagamaan terlihat di pojok kanan atas, di
                  mana pelajaran keagamaan akan menampilkan agamanya.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-mischool" class="opacity-90">
            <span>Fitur Halaman Mata Pelajaran</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai penggunaan fitur mata pelajaran
              dapat dilihat pada video tutorial berikut
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
