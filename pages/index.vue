<script lang="ts" setup>
definePageMeta({
  layout: "material"
})
</script>

<template>

    <div class="page w-full">

      <page-tool-bar />

      <h1 class="mb-4 text-2xl">Testing </h1>
      <NuxtLink
        to="/products"
        class="bg-blue-500 px-4 py-2 rounded shadow text-white"
      >
        To Products
      </NuxtLink>
    </div>

</template>

<style scoped></style>
