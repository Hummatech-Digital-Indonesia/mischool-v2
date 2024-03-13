
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    icon: string
    count: number
    to?: string
  }>(),
  {
    to: '/',
  },
)
</script>

<template>
  <NuxtLink :to="props.to" class="relative rounded-xl">
    <BaseCard
      shape="curved"
      elevated-hover
      class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 p-5 motion-reduce:hover:shadow-none"
    >
      <div
        class="relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden"
      >
        <div
          class="nui-mask nui-mask-hexed relative mb-2 flex size-[84px] shrink-0 items-center justify-center"
        >
          <div
            class="from-primary-100 to-primary-500 dark:from-primary-800 motion-safe:animate-spin-slow absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr blur-sm motion-safe:transition-all motion-safe:duration-200"
          ></div>
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[80px] items-center justify-center bg-white"
          >
            <Icon :name="props.icon" class="text-primary-500 size-7" />
          </div>
        </div>
        <div
          class="dark:bg-muted-900 absolute -right-4 bottom-0 h-full w-24 scale-105 bg-white blur-lg"
        ></div>
      </div>
      <div>
        <BaseHeading
          as="h3"
          size="xl"
          weight="light"
          lead="tight"
          class="text-primary-500 mx-auto text-center"
        >
          <BaseText weight="bold" class="mx-2" size="2xl">{{ props.count }}</BaseText>
          <BaseText class="text-muted-800 dark:text-white" weight="semibold">{{
            props.title
          }}</BaseText>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-100 mx-auto my-2"
        >
          <slot></slot>
        </BaseParagraph>
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}
</style>
