<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
import type { News } from 'types/news'
import type { Meta } from 'types'

definePageMeta({
  title: 'Berita',
  description: 'Baca Berita Berita Dari Kami.',
  layout: 'landing',
})

interface Response {
  meta: Meta
  data: {
    paginate: {
      current_page: number
      last_page: number
    }
    data: News[]
  }
}

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch {
    return 1
  }
})

const title = ref(route.query.title ? route.query.title as string : '')

const { data: news, pending } = await useFetch<Response>(
  `${useApiUrl()}/news`,
  {
    query: {
      page: currentPage,
      title: title,
    },
  },
)

watch(title, (title, previous) => {
    router.push({
      path: '',
      query: {
        title: title,
      },
    })
})


const total = computed(() => {
  if (news.value) {
    return news.value.data.paginate.last_page * 9
  } else {
    return 1
  }
})
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div>
    <div class="dark:bg-muted-900 bg-white py-24">
      <div class="mx-auto mt-16 w-full max-w-7xl px-4">
        <div class="w-full mb-4 flex justify-between">
          <BaseHeading
            as="h2"
            size="3xl"
            weight="semibold"
            lead="tight"
            class="text-muted-800 mb-4 dark:text-white block"
          >
            Berita 
          </BaseHeading>
          <BaseInput
            v-model="title"
            icon="lucide:search"
            placeholder="Search..."
            shape="full"
            :classes="{
              wrapper: 'w-64',
              input: 'h-12 !ps-12',
              icon: 'h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7',
            }"
          />
        </div>
        <div
          v-if="!pending"
          :class="news?.data.data.length != 0 ? 'md:grid-cols-2 lg:grid-cols-3' : ''"
          class="grid grid-cols-1 gap-5"
        >
          <template v-if="news?.data.data.length != 0">
            <LandingNewsCard v-for="item in news?.data.data" :news="item" />
          </template>
          <div v-else>
            <BasePlaceholderPage
              title="Berita tidak ditemukan."
              :subtitle="
                title
                  ? 'Sepertinya kami tidak dapat menemukan hasil yang cocok untuk istilah penelusuran Anda. Coba istilah pencarian lainnya.'
                  : 'Belum ada berita ditambahkan.'
              "
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
        <div
          v-else
          class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <BaseCard
            v-for="i in 3"
            shape="curved"
            elevated-hover
            class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 motion-reduce:hover:shadow-none"
          >
            <div>
              <BasePlaceload class="h-44 w-full rounded-md" />
            </div>
            <div class="p-3 w-full">
              <BasePlaceload class="h-4 my-2 rounded-md w-1/5" />
              <BasePlaceload class="h-4 my-2 rounded-md w-3/4" />
              <BasePlaceload class="h-4 my-2 rounded-md w-2/4" />
              <BasePlaceload class="h-16 my-3 rounded-md" />
              <BasePlaceload class="h-12 my-2 rounded-md w-2/4" />
            </div>
          </BaseCard>
        </div>
        <BasePagination
          class="mt-10"
          :item-per-page="9"
          :total-items="total"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="md"
        />
      </div>
    </div>
    <LandingFooter />
  </div>
</template>
