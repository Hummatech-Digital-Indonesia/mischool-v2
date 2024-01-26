<script setup lang="ts">
import type { Meta } from 'types'
import type { News } from 'types/news'

const route = useRoute()

interface Response {
  meta: Meta
  data: News
}

interface OtherNews {
  meta: Meta
  data: News[]
}

const { data: news, error } = useFetch<Response>(
  `https://core.mischool.online/api/news/${route.params.news}`,
)

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Halaman Tidak Ditemukan!',
  })
}

const { data: otherNews } = useFetch<OtherNews>(
  `https://core.mischool.online/api/other-news`,
)

    definePageMeta({
      title: 'Berita',
      description: 'Berita Dari Mischool',
      breadcrumb: {
        label: 'Mischool',
      },
      layout: 'empty',
    })
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Berita</BaseText
        >
      </div>
      <div class="flex justify-between">
        <div class="">
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
        <div class="">
          <NuxtLink to="/">
            <BaseButton
              shape="curved"
              color="primary"
              shadow="hover"
              class="flex !h-12 w-36 justify-center"
              ><Icon
                class="text-white block text-2xl mr-3"
                name="mdi:arrow-left-thin"
              />
              Kembali</BaseButton
            >
          </NuxtLink>
        </div>
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
              weight="light"
              lead="normal"
              class="text-muted-500 dark:text-muted-100 mx-auto my-2 flex"
            >
              <Icon class="h-6 w-6" name="ph:calendar" />
              <p class="ml-1 mt-1 font-semibold">{{ news?.data.created_at }}</p>
            </BaseParagraph>
            <BaseHeading
              class="mx-auto mb-4 font-bold text-black dark:text-white"
              >{{ news?.data.title }}</BaseHeading
            >
            <div
              class="text-muted-700 dark:text-muted-100 mx-auto my-2"
              v-html="news?.data.content"
            ></div>
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
            <template v-if="otherNews?.data.length">
              <LandingNewsCard
                v-for="item in otherNews?.data"
                :key="item.id"
                :news="item"
              />
            </template>
            <LandingNewsCardEmpty v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
