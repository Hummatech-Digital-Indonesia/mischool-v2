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
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 8.25V11.25C7.5 12.0456 7.81607 12.8087 8.37868 13.3713C8.94129 13.9339 9.70435 14.25 10.5 14.25C11.2956 14.25 12.0587 13.9339 12.6213 13.3713C13.1839 12.8087 13.5 12.0456 13.5 11.25V8.25H22.5V11.25C22.5 12.0456 22.8161 12.8087 23.3787 13.3713C23.9413 13.9339 24.7044 14.25 25.5 14.25C26.2956 14.25 27.0587 13.9339 27.6213 13.3713C28.1839 12.8087 28.5 12.0456 28.5 11.25V8.25C29.6935 8.25 30.8381 8.72411 31.682 9.56802C32.5259 10.4119 33 11.5565 33 12.75V15.75H3V12.75C3 11.5565 3.47411 10.4119 4.31802 9.56802C5.16193 8.72411 6.30653 8.25 7.5 8.25ZM33 18.75V27.75C33 28.9435 32.5259 30.0881 31.682 30.932C30.8381 31.7759 29.6935 32.25 28.5 32.25H7.5C6.30653 32.25 5.16193 31.7759 4.31802 30.932C3.47411 30.0881 3 28.9435 3 27.75L3 18.75H33ZM25.5 3.75C25.8978 3.75 26.2794 3.90804 26.5607 4.18934C26.842 4.47064 27 4.85218 27 5.25V11.25C27 11.6478 26.842 12.0294 26.5607 12.3107C26.2794 12.592 25.8978 12.75 25.5 12.75C25.1022 12.75 24.7206 12.592 24.4393 12.3107C24.158 12.0294 24 11.6478 24 11.25V5.25C24 4.85218 24.158 4.47064 24.4393 4.18934C24.7206 3.90804 25.1022 3.75 25.5 3.75V3.75ZM10.5 3.75C10.8978 3.75 11.2794 3.90804 11.5607 4.18934C11.842 4.47064 12 4.85218 12 5.25V11.25C12 11.6478 11.842 12.0294 11.5607 12.3107C11.2794 12.592 10.8978 12.75 10.5 12.75C10.1022 12.75 9.72064 12.592 9.43934 12.3107C9.15804 12.0294 9 11.6478 9 11.25V5.25C9 4.85218 9.15804 4.47064 9.43934 4.18934C9.72064 3.90804 10.1022 3.75 10.5 3.75V3.75Z"
                  fill="#525252"
                />
              </svg>
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
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-1">
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
