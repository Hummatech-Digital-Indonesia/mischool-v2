<script setup lang="ts">
definePageMeta({
  title: 'Preview',
  description:
    'Jelajahi Fitur fitur dan halaman halaman kami.',
  layout: 'landing',
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white pt-16">
    <div class="my-10 grid flex-col justify-center items-center">
      <BaseCard rounded="md" shadow="flat" class="p-6 max-w-2xl">
        <BaseHeading as="h1" size="md" weight="semibold"
          class="text-muted-800 mb-2 dark:text-white flex justify-center items-center">
          Hubungi Kami
        </BaseHeading>
        <BaseInput rounded="md" label="Nama" placeholder="Nama Pengguna.." />
        <BaseInput rounded="md" label="Email" placeholder="example@email.com" />
        <BaseTextarea contrast="default-contrast" size="md" label="Pesan" rounded="md" placeholder="Tuliskan Pesan"
          color-focus />
        <BaseButton variant="solid" color="primary" class="w-full mt-2">
          Kirim
        </BaseButton>
      </BaseCard>
      <div class="grid grid-cols-12 max-w-2xl justify-center gap-2 my-2">
        <div class="col-span-6">
          <a href="https://wa.me/6282132560566">
            <BaseCard rounded="md" shadow="flat" class="p-6 flex justify-center w-full gap-2 items-center">
              <Icon name="ph:whatsapp-logo" class="h-7 w-7" />
              <BaseParagraph size="md" weight="semibold">
                (+62)82132560566
              </BaseParagraph>
            </BaseCard>
          </a>
        </div>
        <div class="col-span-6">
          <a href="mailto:mischool@hummatech.com">
            <BaseCard rounded="md" shadow="flat" class="p-6 flex justify-center w-full gap-2 items-center">
              <Icon name="ph:envelope" class="h-7 w-7" />
              <BaseParagraph size="md" weight="semibold">
                mischool@hummatech.com
                <!-- Perum Permata Regency 1 Blok 10 No. 28, Ngijo, Kec. Karangploso, Kab. Malang, 65152 -->
              </BaseParagraph>
            </BaseCard>
          </a>
        </div>
      </div>
      <BaseCard rounded="md" class="p-6 max-w-2xl flex justify-center items-center gap-2" shadow="flat">
        <Icon name="ph:map-pin" class="h-7 w-7" />
        <BaseParagraph size="md" weight="semibold">
          Perum Permata Regency 1 Blok 10 No. 28, Ngijo, Kec. Karangploso, Kab. Malang, 65152
        </BaseParagraph>
      </BaseCard>
    </div>

    <LandingFooter />
  </div>
</template>
