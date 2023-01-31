<script lang="ts" setup>

defineProps<{
  canGoBack?: boolean
}>()

</script>

<template>
  <div class="py-4 px-6 flex gap-4 items-center justify-between">
    <div class="flex gap-4 items-center">
      <button v-if="canGoBack" @click="$router.go(-1)" class="bg-[#7cd0ff] text-white w-10 h-10 flex items-center justify-center rounded-full">
        <Icon name="mdi:arrow-left" size="20" />
      </button>

      <h1 class="text-2xl">Page Title</h1>
    </div>

    <div class="tools">
      icons
    </div>
  </div>
</template>

<style scoped></style>
