<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

interface FeaturePackDetails {
  id: number
  feature_pack_id: string
  item: string
}

interface Meta {
  code: number
  message: string | null
  status: 'success' | 'error'
}

interface Feature {
  id: string
  name: string
  price: number
  photo: string
  status: null | string
  description: string
  voucher: any[]
  discount: any[]
  feature_pack_details: FeaturePackDetails[]
}

interface FetchResponse {
  meta?: Meta
  data?: Feature[]
}

const { data: response } = useFetch<FetchResponse>(
  `${useApiUrl()}/feature-packs`,
)
</script>

<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="min-h-screen w-screen text-center mt-16">
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
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      :transition="500"
      class="max-w-[1200px] py-8 mx-auto"
    >
      <Slide v-for="(features,index) in response?.data" :key="features.id">
        <Packages :feature="features" :number="index + 1" class="flex" />
      </Slide>
    </Carousel>
  </div>
</template>

<!-- eslint-disable prettier-vue/prettier -->
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-30deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0);
}
</style>
