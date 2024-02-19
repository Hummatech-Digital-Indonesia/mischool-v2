<script setup lang="ts">
definePageMeta({
  title: 'History',
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
                <span>Halaman History</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-80">
                <span>
                  Pada fitur ini, pengguna dapat melihat riwayat paket yang
                  telah berhasil dia transaksikan dan paket yang sudah dapat
                  digunakan. Di halaman ini, pengguna juga dapat mencetak
                  riwayat paket dengan menyesuaikan waktu pembelian paket yang
                  diinginkan. Fitur ini dilengkapi dengan kolom keterangan
                  lengkap paket, termasuk nama sekolah, jenis paket yang dibeli,
                  cara pembayaran, harga paket, kode transaksi, dan tanggal
                  pembelian.
                </span>
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
      <BaseCard class="col-span-2 mt-16 p-4 grid grid-cols-2 gap-2" id="fitur">
        <div class="col-span-2 md:col-span-1">
          <BaseHeading tag="h1" id="apa-itu-AcsSchool" class="opacity-90">
            <span>Fitur Halaman History</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="opacity-80 mt-3">
            <span>
              Penjelasan lebih detail mengenai penggunaan fitur history dapat
              dilihat pada video tutorial berikut
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
