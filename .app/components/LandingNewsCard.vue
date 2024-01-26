<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import type { News } from 'types/news'

const props = defineProps<{
  news: News
}>()
</script>
<template>
  <BaseCard
    shape="curved"
    elevated-hover
    class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 motion-reduce:hover:shadow-none"
  >
    <div class="">
      <img
        :src="props.news.thumbnail"
        class="h-full w-full rounded-md"
        alt=""
        srcset=""
      />
    </div>
    <div class="p-3 flex flex-col">
      <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-100 my-2">
        {{ props.news.created_at }}
      </BaseParagraph>
      <BaseHeading
        as="h2"
        size="lg"
        weight="light"
        lead="normal"
        class="mb-4 font-bold text-black dark:text-white"
      >
        {{ props.news.title }}
      </BaseHeading>
      <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-100 my-2">
        {{ $props.news.short_description }}
      </BaseParagraph>
      <NuxtLink :to="`/berita/${$props.news.slug}`">
        <BaseButton
          shape="curved"
          color="primary"
          shadow="hover"
          class="flex !h-12 w-48 justify-center"
          >Lihat Selengkapnya...</BaseButton
        >
      </NuxtLink>
    </div>
  </BaseCard>
</template>
