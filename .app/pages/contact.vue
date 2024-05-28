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
    <div class="my-10">
      <div class="flex flex-col items-center justify-center">
        <BaseCard rounded="md" shadow="flat" class="p-6 max-w-2xl">
          <BaseHeading as="h1" size="lg" weight="semibold"
            class="flex items-center justify-center text-muted-800 mb-2 dark:text-white">
            Hubungi Kami
          </BaseHeading>
          <BaseInput rounded="md" label="Name" placeholder="Nama.." weight="semibold" />
          <BaseInput rounded="md" label="Email" placeholder="pengguna@email.com" />
          <BaseTextarea label="Pesan" rounded="md" placeholder="Tuliskan pesan.." size="md" autogrow />
          <BaseButton variant="solid" color="primary" class="w-full my-3">
            Kirim
          </BaseButton>
        </BaseCard>

        <div class="flex gap-3 my-3 max-w-2xl">
              <BaseCard rounded="md" class="p-6 flex justify-center items-center max-w-xl" shadow="flat">
                <BaseParagraph size="md" weight="semibold">
                  <Icon name="ph:whatsapp-logo" />
                  0851-7677-7785
                </BaseParagraph>
              </BaseCard>
              <BaseCard rounded="md" class="p-6 flex justify-center items-center max-w-xl" shadow="flat">
                <BaseParagraph size="md" weight="semibold">
                  <Icon name="ph:envelope" />
                  info@hummatech.com
                </BaseParagraph>
              </BaseCard>
        </div>
        <BaseCard rounded="md" class="p-6 max-w-2xl flex justify-center" shadow="flat">
          <BaseParagraph size="md" weight="semibold">
            <Icon name="ph:map-pin" />
            Perum Permata Regency 1 Blok 10 No. 28, Ngijo, Kec. Karangploso, Kab. Malang, 65152
          </BaseParagraph>
        </BaseCard>
      </div>
    </div>
    <LandingFooter />
  </div>
</template>
