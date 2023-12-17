<script setup lang="ts">
interface Data {
  school: number
  teacher: number
  student: number
}

interface Meta {
  code: number
  message: string | null
  status: 'success' | 'error'
}

interface FetchResponse {
  meta: Meta
  data: Data
}

//@ts-ignore
// eslint-disable-next-line prettier-vue/prettier
const { data: response } = useFetch<FetchResponse>(`${useApiUrl()}/landing-page`)
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >PENGGUNA</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Pengguna Mischool
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Jumlah pengguna Mischool terus meningkat setiap tahunnya, menunjukkan
          bahwa Mischool merupakan sebuah solusi yang tepat untuk pengelolaan
          sekolah. Mischool dapat membantu sekolah untuk meningkatkan efisiensi
          dan efektivitas pengelolaan sekolah, meningkatkan kualitas
          pembelajaran, dan meningkatkan keterjangkauan pendidikan.
        </BaseParagraph>
      </div>
      <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="Sekolah"
          icon="ic:baseline-business"
          to="/documentation/setup"
          color="indigo"
          :count="response?.data.school ? response.data.school : 0"
        >
          Mischool telah dipilih
          {{ response?.data.school ? response.data.school : 0 }} sekolah ,
          menjadi mitra terpercaya dalam mendorong efisiensi dan inovasi dalam
          manajemen sekolah.
        </LandingLayersBox>
        <LandingLayersBox
          title="Guru"
          icon="ic:sharp-person"
          to="/documentation/tailwindcss"
          color="purple"
          :count="response?.data.teacher ? response.data.teacher : 0"
        >
          {{ response?.data.teacher ? response.data.teacher : 0 }} guru telah
          bergabung dengan Mischool untuk mendukung proses pengajaran dan
          meningkatkan kualitas pembelajaran.
        </LandingLayersBox>
        <LandingLayersBox
          title="Siswa"
          icon="bi:mortarboard-fill"
          to="/documentation/reference"
          :count="response?.data.student ? response.data.student : 0"
        >
          {{ response?.data.student ? response.data.student : 0 }} siswa telah
          merasakan manfaat pendekatan terintegrasi MiSchool, mendapatkan
          pengalaman pendidikan yang lebih baik dan terfokus.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>

