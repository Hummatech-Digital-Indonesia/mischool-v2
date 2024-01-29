<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import type { News } from 'types/news'
import type { Meta } from 'types'

interface Response {
  meta: Meta
  data: News[]
}

const { data: news } = useFetch<Response>(`${useApiUrl()}/latest-news`)
</script>

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
          Berita Terbaru
        </BaseHeading>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="news?.data.length">
          <LandingNewsCard v-for="item in news?.data" :news="item" />
        </template>
        <div v-else class="col-span-3">
          <BasePlaceholderPage
            title="Berita tidak ditemukan."
            subtitle="Belum ada berita ditambahkan"
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
      </div>
    </div>
  </div>
</template>
