<script setup lang="ts">
import type { FeaturePackDetails, Feature } from '~/types'

interface Meta {
  code: number
  message: string | null
  status: 'success' | 'error'
}

interface FetchResponse {
  meta?: Meta
  data?: Feature[]
}

const { data: response } = useFetch<FetchResponse>(
  `${useApiUrl()}/feature-pack-home`,
)
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="min-h-screen w-screen text-center mt-16">
    <div class="mx-auto w-full max-w-7xl px-4">
      <BaseText
        class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >Fitur</BaseText
      >
      <BaseHeading
        as="h2"
        size="4xl"
        weight="light"
        lead="tight"
        class="text-muted-800 mx-auto mb-4 dark:text-white"
      >
        Fitur Fitur Mischool
      </BaseHeading>
      <BaseParagraph
        size="lg"
        class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
      >
        Mischool menghadirkan 6 fitur penting yang dirancang untuk meningkatkan
        pengalaman pendidikan Anda.
      </BaseParagraph>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <template
          v-for="(features, index) in response?.data"
          :key="features.id"
        >
          <Packages :feature="features" :number="index + 1" />
        </template>
      </div>
    </div>
  </div>
</template>
