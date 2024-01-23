<!-- eslint-disable prettier-vue/prettier -->
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
          Detail Berita
        </BaseHeading>
      </div>
      <div class="grid grid-cols-2 gap-5 lg:grid-cols-3">
        <BaseCard
          shape="curved"
          elevated-hover
          class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 col-span-2 p-5 motion-reduce:hover:shadow-none"
        >
          <div class="">
            <img
              src="/img/detail-news.png"
              class="h-full w-full rounded-md"
              alt=""
              srcset=""
            />
          </div>
          <div class="">
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-100 mx-auto my-2 flex"
            >
              <Icon class="h-6 w-6" name="ph:calendar" />
              <p class="ml-1 mt-1">Malang, 18 Juli 2023</p>
            </BaseParagraph>
            <BaseHeading
              as="h2"
              size="lg"
              weight="light"
              lead="normal"
              class="mx-auto mb-4 font-bold text-black dark:text-white"
            >
              MISCHOOL PROMO PADA TANGGAL 23 - 28 JANUARI 2024 DAN SEGERA CEK
              BERITA BERIKUT
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-700 dark:text-muted-100 mx-auto my-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              lectus neque, scelerisque et purus et, pharetra maximus sapien.
              Quisque at leo massa. Quisque euismod vitae sapien sit amet
              pharetra. Aenean nulla ipsum, volutpat ac ante a, iaculis cursus
              nisi. Donec porttitor, eros hendrerit dignissim malesuada, enim
              risus iaculis est, id maximus odio libero eu nulla. Morbi sed
              nulla ex. Proin et blandit diam. Cras tincidunt nunc a tincidunt
              tempor. Quisque eget nibh luctus, condimentum tellus quis, dapibus
              leo. Nullam id congue purus, in elementum nulla. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam convallis dictum
              nibh, non sagittis eros gravida id. Aenean scelerisque auctor sem,
              at auctor nulla imperdiet pharetra. Curabitur lacus magna, sodales
              sed ante a, aliquet tempor ligula. Aliquam consectetur felis
              risus, vitae ultricies tellus tristique a. Curabitur et massa
              urna. Nullam aliquet ultrices diam, sed eleifend est rhoncus
              scelerisque. Duis interdum nunc quis posuere ornare. Mauris id
              erat ut magna congue mollis et ut massa. Duis at ex sit amet augue
              interdum porttitor. Sed nec ipsum et dolor egestas pellentesque id
              eu velit. Quisque congue tellus tortor, id viverra tortor iaculis
              volutpat. Sed sodales placerat ante non venenatis. Vestibulum
              fermentum, tellus viverra lobortis cursus, arcu quam bibendum
              dolor, sit amet feugiat libero tortor at lorem. Praesent porta est
              at dapibus pharetra. Ut a lectus sit amet magna sagittis tempor.
              Donec lacinia iaculis nibh, id posuere neque. Nullam aliquet est
              nec aliquet commodo. Duis gravida quam eu mi convallis ultrices.
              Ut quis sagittis risus. Suspendisse nec libero nunc. Vestibulum
              pharetra ipsum sed vestibulum ullamcorper.
            </BaseParagraph>
          </div>
        </BaseCard>
        <div class="col-span-2 gap-3 lg:col-span-1">
          <BaseHeading
            as="h2"
            size="4xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mx-auto mb-4 dark:text-white"
          >
            Berita Terbaru
          </BaseHeading>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
            <BaseCard
              shape="curved"
              elevated-hover
              class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 my-3 motion-reduce:hover:shadow-none"
            >
              <div class="">
                <img
                  src="/img/detail-news.png"
                  class="h-full w-full rounded-md"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="p-2">
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-100 mx-auto my-2 flex"
                >
                  <p class="ml-1 mt-1">Malang, 18 Juli 2023</p>
                </BaseParagraph>
                <BaseHeading
                  as="h2"
                  size="lg"
                  weight="light"
                  lead="normal"
                  class="mx-auto mb-4 font-bold text-black dark:text-white"
                >
                  MISCHOOL PROMO PADA TANGGAL 23 - 28 JANUARI 2024 DAN SEGERA
                  CEK BERITA BERIKUT
                </BaseHeading>
                <BaseButton class="mb-4 w-full" color="primary" shape="rounded"
                  >Lihat Selengkapnya...</BaseButton
                >
              </div>
            </BaseCard>
            <BaseCard
              shape="curved"
              elevated-hover
              class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 my-3 motion-reduce:hover:shadow-none"
            >
              <div class="">
                <img
                  src="/img/detail-news.png"
                  class="h-full w-full rounded-md"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="p-2">
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-100 mx-auto my-2 flex"
                >
                  <p class="ml-1 mt-1">Malang, 18 Juli 2023</p>
                </BaseParagraph>
                <BaseHeading
                  as="h2"
                  size="lg"
                  weight="light"
                  lead="normal"
                  class="mx-auto mb-4 font-bold text-black dark:text-white"
                >
                  MISCHOOL PROMO PADA TANGGAL 23 - 28 JANUARI 2024 DAN SEGERA
                  CEK BERITA BERIKUT
                </BaseHeading>
                <BaseButton class="mb-4 w-full" color="primary" shape="rounded"
                  >Lihat Selengkapnya...</BaseButton
                >
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
