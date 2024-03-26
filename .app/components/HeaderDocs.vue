<!-- eslint-disable prettier-vue/prettier -->
<script setup lang="ts">
const isSearchOpen = useState('search-open', () => false)
const router = useRouter()
const metaKey = useMetaKey()
</script>

<template>
  <div class="w-full grid grid-cols-4 mb-6">
    <div class="flex w-full justify-end lg:col-span-3 col-span-4">
      <BaseInput
        icon="lucide:search"
        size="md"
        @click="isSearchOpen = true"
        rounded="md"
        readonly
        placeholder="Search"
      />
    </div>
    <div class="flex w-full justify-end col-span-1">
      <BaseButton to="/" color="primary">
        <Icon name="lucide:arrow-left" class="me-1 size-4" />
        <span>Kembali</span>
      </BaseButton>
    </div>
  </div>
</template>
