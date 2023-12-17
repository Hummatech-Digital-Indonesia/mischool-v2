<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

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

const selectedCategory = ref('')

const router = useRouter()

const demoPages = computed(() => {
  const match: RouteRecordRaw[] = []

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        // recurse
        traverseRoutes(route.children)
      } else if (
        route.path.includes(':') &&
        Array.isArray(route.meta?.preview)
      ) {
        match.push(route)
      } else if (!route.path.includes(':') && route.meta?.preview) {
        // has preview data
        match.push(route)
      }
    }
  }

  // start on top route
  traverseRoutes(router.options.routes)

  return match.sort((a, b) => {
    if (a.meta?.preview?.order === undefined) return 0
    if (b.meta?.preview?.order === undefined) return 0
    if (a.meta.preview?.order < b.meta.preview?.order) return -1
    if (a.meta.preview?.order > b.meta.preview?.order) return 1
    return 0
  })
})
const selectedFeature = ref<string>('')
const features = ref<string[]>([
  'Absensi',
  'E-Learning',
  'Rapor',
  'Ujian',
  'Buku Tamu',
  'Pelanggaran',
])
const categories = computed(() => {
  const categories = new Set<string>()

  function extractPreview(preview: any) {
    if (!preview) {
      return
    }
    if (Array.isArray(preview)) {
      for (const item of preview) {
        extractPreview(item)
      }
      return
    }
    if (!preview.categories) {
      return
    }
    if (!Array.isArray(preview.categories)) {
      return
    }
    for (const category of preview.categories) {
      categories.add(category)
    }
  }

  for (const route of demoPages.value) {
    extractPreview(route.meta?.preview)
  }
  return Array.from(categories).sort((a, b) => {
    return a.localeCompare(b)
  })
})

const filteredDemos = computed(() => {
  if (selectedCategory.value.length === 0) {
    return demoPages.value
  }

  function filterPreview(preview: any) {
    if (!preview) {
      return false
    }
    if (Array.isArray(preview)) {
      for (const item of preview) {
        if (filterPreview(item)) {
          return true
        }
      }
      return false
    }
    if (!preview.categories) {
      return false
    }
    if (!Array.isArray(preview.categories)) {
      return false
    }
    return preview.categories.some((category: string) =>
      selectedCategory.value.includes(category),
    )
  }

  return demoPages.value.filter((page) => {
    return filterPreview(page.meta?.preview)
  })
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Demo Halaman</BaseText
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
              <LandingDemoLink
                v-if="!Array.isArray(page.meta?.preview)"
                :name="page.name"
                :preview="page.meta?.preview"
              />
              <template v-else>
                <LandingDemoLink
                  v-for="preview in page.meta?.preview"
                  :key="preview.title"
                  :name="page.name"
                  :preview="preview"
                />
              </template>
            </template>
          </div>

          <div v-if="props.cta" class="mt-24 flex items-center justify-center">
            <BaseButton
              shape="curved"
              color="primary"
              flavor="outline"
              to="/demos"
              >View All {{ demoPages.length }} Demos</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
