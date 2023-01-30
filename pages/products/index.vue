<script lang="ts" setup></script>

<template>
  <div class="bg-amber-500 shadow-xl">
    <div class="page">
      <h1 class="mb-4 text-2xl">Products</h1>

      <div class="flex gap-4">
        <NuxtLink
          to="/"
          class="bg-blue-500 px-4 py-2 rounded shadow text-white"
        >
          Back to home
        </NuxtLink>
        <NuxtLink
          to="/products/1"
          class="bg-blue-500 px-4 py-2 rounded shadow text-white"
        >
          To Product 1
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
