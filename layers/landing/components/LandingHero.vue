<script setup lang="ts">
const { y } = useNinjaWindowScroll()

const gaugePersonal = reactive(useGaugePersonal())

function useGaugePersonal() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    title: {
      text: undefined,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          margin: 0,
          size: '35%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }

  const series = ref([76])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div
    class="dark:to-muted-900 relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-transparent to-white"
  >
    <div class="gridlines absolute inset-x-0 z-10 -mt-8 py-20"></div>
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl"
      >
        <div
          class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
        ></div>
        <div
          class="dark:to-primary-600 from-primary-200 to-primary-400 h-24 bg-gradient-to-r blur-3xl"
        ></div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="relative z-30 pt-56 text-center">
        <BaseHeading
          as="h1"
          size="5xl"
          weight="light"
          lead="tight"
          class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
        >
          Selamat Datang Di
        </BaseHeading>
        <BaseHeading
          as="h1"
          size="5xl"
          weight="semibold"
          lead="tight"
          class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
        >
          <span class="text-primary-500 font-hairline underline-offset-4"
            >Mischool</span
          >
        </BaseHeading>

        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto my-12 max-w-2xl"
        >
          Sistem informasi manajemen sekolah berbasis web dan mobile yang
          membantu mengelola administrasi sekolah secara real-time dan
          terintegrasi.
        </BaseParagraph>
        <div class="flex items-center justify-center">
          <BaseButton
            shape="curved"
            color="primary"
            to="https://school.Mischool.id/register"
            shadow="hover"
            class="!h-12 w-44"
          >
            Daftar Sekarang
          </BaseButton>
        </div>
      </div>

      <!-- Components -->
      <!-- <LandingHeroMockup /> -->
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-dark.svg);
}
</style>
