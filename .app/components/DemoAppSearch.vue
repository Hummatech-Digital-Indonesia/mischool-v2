<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const isMacLike = useIsMacLike()
const isOpen = useState('search-open', () => false)
const search = ref('')

onKeyStroke('k', (event) => {
  const modifier = isMacLike.value ? event.metaKey : event.ctrlKey
  if (modifier) {
    event.preventDefault()

    isOpen.value = !isOpen.value
  }
})

const router = useRouter()
const demoPages = computed(() => {
  if (!search.value) return []

  const match: RouteRecordRaw[] = []
  const searchRe = new RegExp(search.value, 'i')

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        traverseRoutes(route.children)
      } else if (route.path.includes(':')) {
        // skip dynamic route
        continue
      } else if (
        route.meta?.title &&
        searchRe.test(route.meta?.title)
      ) {
        match.push(route)
      } else if (
        route.meta?.description &&
        searchRe.test(route.meta?.description)
      ) {
        match.push(route)
      }
    }
  }

  traverseRoutes(router.options.routes)

  return match.slice(0, 6)
})

const demoPagesResults = computed(() => {
  const max = 6 - Math.min(0, 3)
  return demoPages.value?.slice(0, max)
})

const hasResult = computed(() =>
  Boolean(demoPagesResults.value?.length),
)

function onClick() {
  isOpen.value = false
}

const metaKey = useMetaKey()
</script>

<template>
  <div>
    <TairoModal
      :classes="{
        wrapper: '!items-start pt-20',
        dialog: 'p-3 rounded-xl',
      }"
      :open="isOpen"
      size="md"
      @close="isOpen = false"
    >
      <BaseFocusLoop next-keys="ArrowDown" prev-keys="ArrowUp">
        <div class="px-2 pb-2">
          <BaseInput
            type="search"
            shape="curved"
            icon="lucide:search"
            v-model="search"
            placeholder="Ex: button or analytics..."
            v-focus
            color-focus
          >
            <template #label>
              <span class="flex w-full justify-between">
                <span>Search</span>
                <span v-if="hasResult" class="text-xs opacity-60">
                  navigate with <kbd>↑</kbd> and <kbd>↓</kbd>
                </span>
                <span v-else-if="!search" class="text-xs opacity-60">
                  press <kbd>{{ metaKey }}</kbd> + <kbd>k</kbd> to open
                </span>
              </span>
            </template>
          </BaseInput>
        </div>
        <div v-if="demoPagesResults?.length">
          <div class="px-3 pt-2">
            <span
              class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
            >
              Dokumentasi
            </span>
          </div>
          <ul>
            <li v-for="page in demoPagesResults" :key="page?.name" class="">
              <DemoAppSearchResult
                :to="{
                  name: page?.name as string,
                }"
                :search="search"
                :title="page?.meta?.title"
                :subtitle="page?.meta?.description"
                @click.passive="onClick"
              />
            </li>
          </ul>
        </div>
      </BaseFocusLoop>
      <div class="flex flex-col items-center py-3 text-center">
        <div class="scale-[0.8]">
          <BaseText size="xs" weight="medium" class="text-muted-400"
            >Search by</BaseText
          >
          <TairoLogoText class="text-muted-400 mx-auto w-20" />
        </div>
      </div>
    </TairoModal>
  </div>
</template>
