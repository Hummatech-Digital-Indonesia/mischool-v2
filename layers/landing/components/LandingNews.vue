<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Berita</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Berita Bulan Ini
        </BaseHeading>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard
          shape="curved"
          elevated-hover
          class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 motion-reduce:hover:shadow-none"
        >
          <div class="">
            <img
              src="/img/avatars/5.svg"
              class="h-full w-full rounded-md"
              alt=""
              srcset=""
            />
          </div>
          <div class="p-3">
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-100 mx-auto my-2"
            >
              Malang, 18 Juli 2023
            </BaseParagraph>
            <BaseHeading
              as="h2"
              size="lg"
              weight="light"
              lead="normal"
              class="mx-auto mb-4 font-bold text-black dark:text-white"
            >
              Kepsep SMKN 2 PENAJAM Pergi Mengunjungi SSB Persema Malang
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-700 dark:text-muted-100 mx-auto my-2"
            >
              Selamat datang di Galeri Kegiatan Alumni kami! Temukan warisan
              inspira....
            </BaseParagraph>
            <nuxt-link to="/news/detail">
              <BaseButton
                shape="curved"
                color="primary"
                shadow="hover"
                class="flex !h-12 w-48 justify-center"
                >Lihat Selengkapnya...</BaseButton
              >
            </nuxt-link>
          </div>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 motion-reduce:hover:shadow-none"
        >
          <div class="">
            <img
              src="/img/avatars/5.svg"
              class="h-full w-full rounded-md"
              alt=""
              srcset=""
            />
          </div>
          <div class="p-3">
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-100 mx-auto my-2"
            >
              Malang, 18 Juli 2023
            </BaseParagraph>
            <BaseHeading
              as="h2"
              size="lg"
              weight="light"
              lead="normal"
              class="mx-auto mb-4 font-bold text-black dark:text-white"
            >
              Kepsep SMKN 2 PENAJAM Pergi Mengunjungi SSB Persema Malang
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-700 dark:text-muted-100 mx-auto my-2"
            >
              Selamat datang di Galeri Kegiatan Alumni kami! Temukan warisan
              inspira....
            </BaseParagraph>
            <BaseButton
              shape="curved"
              color="primary"
              shadow="hover"
              class="flex !h-12 w-48 justify-center"
              >Lihat Selengkapnya...</BaseButton
            >
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
