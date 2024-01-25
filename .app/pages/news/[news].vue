<script setup lang="ts">
    import type {Meta} from 'types'
    import type {News} from 'types/news'

    const route = useRoute()

    interface Response {
      meta : Meta
      data : News
    }

    const {data : news , error } = useFetch<Response>(`https://core.mischool.online/api/news/${route.params.news}`)

    if(error.value){
      throw createError({
        statusCode: 404,
        statusMessage: 'Halaman Tidak Ditemukan!'
      })
    }
</script>

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
              :src="news?.data.thumbnail"
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
              <p class="ml-1 mt-1">{{ news?.data.created_at }}</p>
            </BaseParagraph>
            <BaseHeading
              as="h2"
              size="lg"
              weight="light"
              lead="normal"
              class="mx-auto mb-4 font-bold text-black dark:text-white"
            >
              {{ news?.data.title }}
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-700 dark:text-muted-100 mx-auto my-2"
              v-html="news?.data.content"
            >
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
            Berita Lainnya
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
