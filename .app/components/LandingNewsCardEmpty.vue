<!-- eslint-disable prettier-vue/prettier -->
<template>
  <BaseCard
    shape="curved"
    elevated-hover
    class="dark:!bg-muted-900 motion-safe:hover:!border-primary-500 relative z-10 motion-reduce:hover:shadow-none"
  >
    <div class="">
      <img
        src="/img/illustrations/system/404-1.svg"
        class="h-full w-full rounded-md"
        alt=""
        srcset=""
      />
    </div>
    <div class="p-3">
      <BaseHeading
        as="h2"
        size="lg"
        weight="light"
        lead="normal"
        class="mx-auto mb-4 font-bold text-black dark:text-white"
      >
       Belum ada berita!
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-700 dark:text-muted-100 mx-auto my-2"
      >
        Belum ada berita ditambahkan
      </BaseParagraph>
    </div>
  </BaseCard>
</template>