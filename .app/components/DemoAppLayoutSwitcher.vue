<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to load available layouts.
 * We also load colors from Tailwind and Shuriken UI.
 * We use the switchColorShades() function to dynamically change the colors.
 */

import colors from 'tailwindcss/colors'

const isSwitcherOpen = useState('switcher-open', () => false)
const currentPrimary = ref('main')
const currentMuted = ref('slate')

// Close the modal when the primary or muted color changes
watch([currentPrimary, currentMuted], closeModal)



const primaryPresets = [
  {
    name: 'main',
    label: 'Primary',
    shades: {
      50: '#EEECF9',
      100: '#DCD8F3',
      200: '#B6AEE5',
      300: '#9488D8',
      400: '#6E5DCB',
      500: '#5D87FF',
      600: '#4E6FDB',
      700: '#3E57B7',
      800: '#2F3F93',
      900: '#1F276F',
      950: '#080613',
    },
    class: 'bg-[#5D87FF]',
  },
  {
    name: 'blue',
    label: 'Blue',
    shades: colors.blue,
    class: 'bg-blue-500',
  },
  {
    name: 'sky',
    label: 'Sky',
    shades: colors.sky,
    class: 'bg-sky-500',
  },
  {
    name: 'purple',
    label: 'Purple',
    shades: colors.purple,
    class: 'bg-purple-500',
  },
  {
    name: 'violet',
    label: 'Violet',
    shades: colors.violet,
    class: 'bg-violet-500',
  },
  {
    name: 'lime',
    label: 'Lime',
    shades: colors.lime,
    class: 'bg-lime-500',
  },
  {
    name: 'teal',
    label: 'Teal',
    shades: colors.teal,
    class: 'bg-teal-500',
  },
  {
    name: 'emerald',
    label: 'Emerald',
    shades: colors.emerald,
    class: 'bg-emerald-500',
  },
  {
    name: 'rose',
    label: 'Rose',
    shades: colors.rose,
    class: 'bg-rose-500',
  },
  {
    name: 'pink',
    label: 'Pink',
    shades: colors.pink,
    class: 'bg-pink-500',
  },
  {
    name: 'yellow',
    label: 'Yellow',
    shades: colors.yellow,
    class: 'bg-yellow-500',
  },
  {
    name: 'orange',
    label: 'Orange',
    shades: colors.orange,
    class: 'bg-orange-500',
  }
] as const

const mutedPresets = [
  {
    name: 'gray',
    label: 'Gray',
    shades: colors.gray,
    class: 'bg-gray-300 dark:bg-gray-900',
  },
  {
    name: 'slate',
    label: 'Slate',
    shades: colors.slate,
    class: 'bg-slate-300 dark:bg-slate-900',
  },
  {
    name: 'stone',
    label: 'Stone',
    shades: colors.stone,
    class: 'bg-stone-300 dark:bg-stone-900',
  },
  {
    name: 'zinc',
    label: 'Zinc',
    shades: colors.zinc,
    class: 'bg-zinc-300 dark:bg-zinc-900',
  },
  {
    name: 'neutral',
    label: 'Neutral',
    shades: colors.neutral,
    class: 'bg-neutral-300 dark:bg-neutral-900',
  },
] as const

function closeModal() {
  isSwitcherOpen.value = false
}
function switchPrimary(color: (typeof primaryPresets)[number]) {
  currentPrimary.value = color.name
  switchColorShades('primary', color.shades)
}
function switchMuted(color: (typeof mutedPresets)[number]) {
  currentMuted.value = color.name
  switchColorShades('muted', color.shades)
}
</script>

<template>
  <TairoModal
    :open="isSwitcherOpen"
    size="sm"
    @close="isSwitcherOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3
          class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
        >
          Theme configuration
        </h3>

        <BaseButtonClose @click="closeModal" />
      </div>
    </template>

    <!-- Body -->
    <div
      class="px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col gap-4"
        >
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-white"
            >
              Color selection
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Make changes to the color palette
            </BaseParagraph>
          </div>
          <div class="space-y-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <div v-for="color in primaryPresets" :key="color.name">
                <button
                  type="button"
                  class="group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200"
                  @click="() => switchPrimary(color)"
                  :class="[
                    currentPrimary === color.name
                      ? 'ring-1 ring-primary-500 z-10 relative'
                      : 'ring-0',
                  ]"
                >
                  <span
                    class="block h-6 w-6 rounded-lg shrink-0"
                    :class="color.class"
                  ></span>
                  <BaseText size="sm">{{ color.label }}</BaseText>
                </button>
              </div>
            </div>
            <hr class="border-muted-200 dark:border-muted-700" />
            <div>
              <button
                type="button"
                class="group w-full flex items-center gap-3 p-2 rounded-lg"
              >
                <span
                  class="block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"
                ></span>
                <BaseText size="sm">Background shade</BaseText>
              </button>
              <div class="flex items-center px-2 pt-2">
                <BaseText size="xs" class="text-muted-400"
                  >Pick a shade</BaseText
                >
                <div class="ml-auto flex items-center justify-end gap-2">
                  <button
                    v-for="color in mutedPresets"
                    :key="color.name"
                    type="button"
                    class="block h-6 w-6 rounded-full"
                    :class="[
                      color.class,
                      currentMuted === color.name
                        ? 'ring-1 ring-primary-500'
                        : 'ring-0',
                    ]"
                    :data-nui-tooltip="color.label"
                    @click="() => switchMuted(color)"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TairoModal>
</template>
