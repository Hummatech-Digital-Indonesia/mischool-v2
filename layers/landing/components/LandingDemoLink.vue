<script setup lang="ts">
import { ref } from 'vue'

import type { RouteRecordName } from 'vue-router'

const props = defineProps<{
  name?: RouteRecordName
  preview?: {
    title: string
    description: string
    categories?: string[]
    src: string
    order?: number
    params?: Record<string, string>
  }
}>()

const isModal3XlOpen = ref(false)
</script>

<template>
  <NuxtLink to="" class="group relative block">
    <div>
      <img
        class="border-muted-200 block rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75"
        :src="props.preview?.src"
        :alt="`Mischool - ${props.preview?.title}`"
        height="271"
        width="487"
        sizes="sm:100vw md:50vw lg:974px"
      />
      <div class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]">
        <BaseCard shape="curved" class="flex items-center p-4" elevated>
          <div>
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              lead="none"
              class="text-muted-800 mx-auto dark:text-white"
              >{{ props.preview?.title }}</BaseHeading
            >
            <BaseText size="xs" class="text-muted-500 dark:text-muted-400">{{
              props.preview?.description
            }}</BaseText>
          </div>
          <div
            class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"
            style="cursor: pointer"
            @click="isModal3XlOpen = true"
          >
            <Icon
              name="ic:outline-remove-red-eye"
              class="h-4 w-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
            />
          </div>
        </BaseCard>
      </div>
    </div>
  </NuxtLink>
  <!-- Modal component -->
  <TairoModal :open="isModal3XlOpen" size="3xl" @close="isModal3XlOpen = false">
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
        >
          {{ props.preview?.title }}
        </h3>

        <BaseButtonClose @click="isModal3XlOpen = false" />
      </div>
    </template>
    <!-- Body -->
    <div class="p-4 md:p-0">
      <div class="mx-auto w-full max-w-2xl text-center">
        <div class="size-44 relative mx-auto mb-4 flex">
          <img
            :src="props.preview?.src"
            :alt="`Mischool - ${props.preview?.title}`"
            class=""
          />
        </div>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal3XlOpen = false"> Tutup </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>
