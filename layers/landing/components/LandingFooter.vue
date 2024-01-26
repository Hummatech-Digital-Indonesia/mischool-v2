<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white px-5 py-3"
  >
    <div
      class="grid w-full grid-cols-1 gap-6 p-[3rem] md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="">
        <TairoLogoText
          class="text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0"
        />
        <p class="my-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vehicula lacus massa, a finibus urna hendrerit fringilla. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec vitae augue egestas, commodo orci eu, tempus lectus.
          Sed accumsan efficitur justo id mollis.
        </p>
        <div class="flex">
          <Icon class="mx-3 text-[#5D87FF]" name="mdi:facebook" />
          <Icon class="mx-3 text-[#5D87FF]" name="mdi:twitter" />
          <Icon class="mx-3 text-[#5D87FF]" name="mdi:instagram" />
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
              <p class="w-[31rem]">Hummasoft.tech@gmail.com</p>
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
        <div class="">
          <BaseList class="mt-2">
            <li class="text-black">E-Learning</li>
            <li class="text-black">Pelanggaran</li>
            <li class="text-black">Rapot</li>
            <li class="text-black">Absensi</li>
            <li class="text-black">Ujian</li>
          </BaseList>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-base">2023 Hummatech All Rights Reseresed</p>
      <p class="text-base text-[#5D87FF]">Copyright By Hummatech</p>
    </div>
  </footer>
</template>
