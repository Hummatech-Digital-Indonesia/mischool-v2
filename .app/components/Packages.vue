<script setup lang="ts">
import type { FeaturePackDetails, Feature } from '~/types'

const props = defineProps<{
  feature: Feature
  number: number
}>()

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const endPeriod = props.feature.discount
  ? calculateDayDifference(props.feature.discount.end_discount)
  : null
function calculateDayDifference(dateString: string) {
  const date = dateString.split('-')
  const year = parseInt(date[0])
  const month = parseInt(date[1]) - 1
  const day = parseInt(date[2])

  // Create a Date object for the input date
  const inputDate = new Date(year, month, day)

  // Create a Date object for today's date
  const today = new Date()

  // Calculate the difference in milliseconds between the two dates
  const timeDifference = today.getTime() - inputDate.getTime()

  // Convert the time difference to days
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  return dayDifference
}
</script>

<template>
  <BaseCard
    shape="rounded"
    class="flex flex-col pb-2 h-full overflow-y-auto flex-1 max-w-[90vw]"
  >
    <div class="p-6 pb-1">
      <BaseHeading
        as="h3"
        size="sm"
        weight="bold"
        lead="tight"
        class="text-muted-800 mb-2 dark:text-white"
      >
        Paket
      </BaseHeading>
      <BaseHeading
        as="h3"
        size="md"
        weight="bold"
        class="text-primary-500 mb-2"
      >
        {{ props.feature.name }}
      </BaseHeading>
      <div v-if="props.feature.discount" class="flex flex-col">
        <div class="w-full mt-3 mb-5 flex justify-center items-center gap-4">
          <BaseText
            size="sm"
            weight="extrabold"
            class="text-primary-500 line-through"
            >Rp {{ formatPrice(props.feature.discount.price) }}
          </BaseText>
          <BaseTag
            class="h-fit"
            size="sm"
            rounded="lg"
            shape="full"
            color="warning"
          >
            Diskon {{ props.feature.discount.discount }} %</BaseTag
          >
        </div>
        <!-- <span v-if="endPeriod && endPeriod > 0" class="text-xs"
          >Berakhir dalam {{ endPeriod }} hari</span
        >
        <span v-else class="text-xs">Berakhir hari ini</span> -->
      </div>
      <BaseText size="xl" weight="bold" class="mt-4 text-primary-500"
        >Rp{{ formatPrice(props.feature.price) }}/
        <span class="text-md">bln</span>
      </BaseText>

      <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-200 my-3">
        {{ props.feature.description }}
      </BaseParagraph>

      <BaseButton class="w-full mb-4" color="primary" shape="rounded"
        >Beli Sekarang</BaseButton
      >

      <div
        class="w-full border-b-[2px] border-muted-500 dark:border-muted-300"
      ></div>

      <BaseHeading
        as="h3"
        size="sm"
        weight="semibold"
        lead="tight"
        class="text-muted-800 text-start my-2 dark:text-white"
      >
        Fitur Unggulan
      </BaseHeading>
    </div>
    <template
      v-for="(featurePackDetail, index) in props.feature.feature_pack_details"
      :key="featurePackDetail.id"
    >
      <div
        :class="index % 2 == 0 ? 'bg-slate-100 dark:bg-muted-700' : ''"
        class="w-full items-center flex py-1 rounded-md"
      >
        <svg
          class="ml-6 mx-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="30" fill="#4bd37b" />
          <path fill="#fff" d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z" />
        </svg>
        <BaseText
          size="sm"
          class="text-start text-muted-500 dark:text-muted-300"
          weight="semibold"
          >{{ featurePackDetail.item }}</BaseText
        >
      </div>
    </template>
    <div class="px-6 w-full mt-auto">
      <div
        class="w-full border-b-[2px] mt-3 mb-2 border-muted-500 dark:border-muted-300"
      ></div>
    </div>
  </BaseCard>
</template>
