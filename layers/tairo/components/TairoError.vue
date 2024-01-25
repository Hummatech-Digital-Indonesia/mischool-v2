<script setup lang="ts">
const props = defineProps<{
  error: any
}>()

const title = computed(() => {
  if (props.error?.statusCode === 401) {
    return 'Tidak Diizinkan'
  }

  if (props.error?.statusCode === 404) {
    return 'Halaman Tidak Ditemukan'
  }

  return 'Ups! Ada yang tidak beres'
})

const description = computed(() => {
  if (props.error?.statusCode === 401) {
    return 'Kamu tidak diperbolehkan mengakses halaman ini.'
  }

  if (props.error?.statusCode === 404) {
    return 'Kami tidak dapat menemukan halaman yang Anda cari, harap hubungi developer sistem atau coba lagi nanti.'
  }

  return 'Telah terjadi kesalahan. Jika masalah terus berlanjut, hubungi developer sistem atau coba lagi nanti.'
})

const app = useAppConfig()
const handleError = () => clearError({ redirect: '/' })
const retry = () => clearError()

// Show/hide demo stack trace
const showStackTrace = ref(true)
</script>

<template>
  <div class="pb-16">
    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      image-size="md"
      class="relative !items-end"
    >
      <template #image>
        <component
          :is="resolveComponentOrNative(app.tairo.error.logo.component)"
          v-if="app.tairo.error?.logo?.component"
          v-bind="app.tairo.error.logo.props"
        ></component>
      </template>

      <div class="mt-4">
        <div
          class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"
        >
          <span>{{ props.error?.statusCode }}</span>
        </div>
        <div
          class="mx-auto flex w-full max-w-xs items-center justify-center gap-2"
        >
          <BaseButton
            shape="curved"
            class="mx-auto !h-12 w-full max-w-[160px] items-center gap-2"
            @click="handleError"
          >
            <Icon name="feather:arrow-left" />
            Back to home
          </BaseButton>
          <DevOnly>
            <BaseButton
              color="muted"
              shape="curved"
              class="mx-auto !h-12 w-full max-w-[160px]"
              @click="retry"
            >
              <Icon name="feather:refresh-cw" class="h-3 w-3" />
              <span>Clear Error</span>
            </BaseButton>
          </DevOnly>
        </div>
      </div>
    </BasePlaceholderPage>
  </div>
</template>

<style>
.stack {
  @apply text-sm;
}
.stack.internal {
  @apply opacity-100 ps-4 text-xs;
}
</style>
