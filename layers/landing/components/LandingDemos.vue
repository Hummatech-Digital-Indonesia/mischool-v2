<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import type { RouteRecordName } from 'vue-router'

interface Pages {
  name?: RouteRecordName
  preview?: {
    title: string
    description: string
    categories?: string[]
    isDashboard?: number
    src: string
    order?: number
    params?: Record<string, string>
  }
}

const props = withDefaults(
  defineProps<{
    limit?: number
    cta?: boolean
  }>(),
  {
    limit: undefined,
    cta: true,
  },
)

const { data: demoPages } = useFetch<Pages[]>('/api/demo-pages')

const selectedFeature = ref<string>('')
const features = ref<string[]>([
  'Absensi',
  'E-Learning',
  'Rapor',
  'Ujian',
  'Buku Tamu',
  'Pelanggaran',
])

const filteredDemos = computed(() => {
  if (selectedFeature.value.length === 0) {
    //@ts-ignore
    return demoPages.value.filter((page) => page.preview?.isDashboard === 1)
  }

  //@ts-ignore
  return demoPages.value.filter(
    (page) => page.preview?.categories?.includes(selectedFeature.value),
  )
})
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Preview Halaman</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          {{ features.length }} Fitur Luar Biasa
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          platform pendidikan yang membawa {{ features.length }} fitur andalan
          untuk memperkaya pengalaman belajar. Di dalamnya, Anda akan menemukan
          solusi lengkap untuk mendukung keberhasilan proses pendidikan
        </BaseParagraph>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <!-- Col -->
        <div
          class="ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"
        >
          <ul class="space-y-3 lg:sticky lg:top-28">
            <li class="capitalize">
              <BaseRadio
                v-model="selectedFeature"
                value=""
                color="primary"
                label="Semua"
              />
            </li>
            <li v-for="feature in features" :key="feature" class="capitalize">
              <BaseRadio
                v-model="selectedFeature"
                :value="feature"
                color="primary"
                :label="feature"
              />
            </li>
          </ul>
        </div>
        <!-- Col -->
        <div class="ltablet:col-span-10 col-span-12 lg:col-span-10">
          <div class="grid gap-8 sm:grid-cols-2">
            <template
              v-for="page in filteredDemos.slice(0, props.limit)"
              :key="page.name"
            >
              <LandingDemoLink :name="page.name" :preview="page.preview" />
            </template>
          </div>

          <div v-if="props.cta" class="mt-24 flex items-center justify-center">
            <BaseButton
              shape="curved"
              color="primary"
              flavor="outline"
              to="/demo"
              >Lihat Semua Demo</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
