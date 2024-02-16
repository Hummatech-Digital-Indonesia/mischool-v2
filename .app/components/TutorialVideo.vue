<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    url: string
    src: string
    title?: string
  }>(),
  {
    title: 'video tutorial',
  },
)
</script>

<template>
  <NuxtLink :to="$props.url" target="_blank" class="col-span-2 md:col-span-1">
    <div class="flex h-full flex-col">
      <div
        class="bg-muted-200 dark:bg-muted-800 group relative h-full w-full overflow-hidden rounded-2xl"
      >
        <img
          :src="$props.src"
          :alt="$props.title"
          class="w-full object-cover object-center"
        />
        <div
          class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"
        ></div>
        <div
          class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"
        >
          <div class="ptablet:p-10 p-6">
            <NuxtLink
              :to="$props.url"
              target="_blank"
              class="group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-xl transition-colors duration-300"
            >
              <Icon name="ic:round-play-arrow" class="h-6 w-6" />
            </NuxtLink>
          </div>
          <div class="ptablet:p-10 p-6">
            <NuxtLink :to="$props.url" target="_blank">
              <BaseHeading
                as="h6"
                size="lg"
                weight="bold"
                lead="tight"
                class="xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              >
                <span>{{ props.title }}</span>
              </BaseHeading>
            </NuxtLink>
            <div class="flex gap-3">
              <div class="ms-auto">
                <BaseTag color="primary" shape="full" size="sm">
                  <span>Tonton</span>
                </BaseTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
