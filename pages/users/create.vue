<script lang="ts" setup>
definePageMeta({
  layout: "material",
});
</script>

<template>
  <div class="overflow-hidden h-100 bg-red flex flex-col pb-6">
    <page-tool-bar />

    <div
      class="p-3 text-white flex items-center justify-between border-b border--white"
    >
      <router-link to="/users" class="text-white">Back</router-link>

      <h1 class="font-bold">Header</h1>
    </div>
  </div>
</template>

<style scoped></style>
