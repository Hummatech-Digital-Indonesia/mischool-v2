<script setup>
const colorMode = useColorMode()

const colorPreference = computed(() => {
  return colorMode.preference
})
</script>

<template>
  <svg
    viewBox="0 0 2303 611"
    fill="none"
    class="shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="2303" height="611" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_5516_5474"
          transform="matrix(0.000708215 0 0 0.00266943 0 -0.000517542)"
        />
      </pattern>
      <image
        id="image0_5516_5474"
        width="1412"
        height="375"
        :xlink:href="
          colorPreference == 'light'
            ? '/img/logos/logo-text.png'
            : '/img/logos/logo-text-dark.png'
        "
      />
    </defs>
  </svg>
</template>
