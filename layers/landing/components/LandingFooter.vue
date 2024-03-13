<script setup lanh="ts">
let a = 10;
let b = 20;

const total = a + b;
</script>

<template>
  <footer
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative mx-auto max-w-7xl border-t bg-white px-5 py-3"
  >
    <div
      class="grid w-full grid-cols-1 gap-16 p-[3rem] md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="sm:col-span-1 md:col-span-2 lg:col-span-1">
        <TairoLogoText
          class="text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0"
        />
        <p class="my-2 text-sm">
          Management Information System for School Sistem informasi manajemen
          sekolah berbasis web dan mobile yang membantu mengelola administrasi
          sekolah secara real-time dan terintegrasi.
        </p>
        <div class="flex">
          <Icon class="mx-3 text-3xl text-[#5D87FF]" name="mdi:facebook" />
          <Icon class="mx-3 text-3xl text-[#5D87FF]" name="mdi:twitter" />
          <Icon class="mx-3 text-3xl text-[#5D87FF]" name="mdi:instagram" />
        </div>
      </div>
      <div class="">
        <BaseHeading>Alamat</BaseHeading>
        <div class="alamat">
          <div class="">
            <div class="mt-2 flex">
              <Icon
                class="mr-1 mt-1 w-[45px] text-[#5D87FF]"
                name="material-symbols:location-on-rounded"
              />
              <p class="">
                Perum Permata Regency 1 Blok 10 no 28 Ngijo Karangploso Malang
              </p>
            </div>
            <div class="mt-2 flex">
              <Icon
                class="mr-1 mt-1 w-[45px] text-[#5D87FF]"
                name="mdi:email-open"
              />
              <p class="w-[31rem]">mischooldev@gmail.com</p>
            </div>
            <div class="mt-2 flex">
              <Icon
                class="mr-1 mt-1 w-[45px] text-[#5D87FF]"
                name="mdi:phone"
              />
              <p class="w-[31rem]">(+62)82132560566</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <BaseHeading>Fitur</BaseHeading>
        <div>
          <BaseList class="mt-2">
            <li class="text-black dark:text-white">E-Learning</li>
            <li class="text-black dark:text-white">Pelanggaran</li>
            <li class="text-black dark:text-white">Rapot</li>
            <li class="text-black dark:text-white">Absensi</li>
            <li class="text-black dark:text-white">Ujian</li>
            <li class="text-black dark:text-white">Buku tamu</li>
          </BaseList>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-base">2023 Mischool All Rights Reseresed</p>
      <p class="text-base text-[#5D87FF]">Copyright By Hummatech</p>
    </div>
  </footer>
</template>
