<script lang="ts" setup>
const preview = ref(false);
</script>

<template>
  <div class="bg-emerald-500">
    <div class="page">
      <h1 class="mb-4 text-2xl">Post #{{ $route.params.id }}</h1>

      <p>lorem</p>

      <div
        class="w-full flex items-center gap-4 ease-in duration-300 bg-red-500 p-2"
      >
        <img
          class="w-[100px]"
          src="https://wallpaperaccess.com/full/430660.jpg"
          alt=""
        />

        <div>
          <h3 class="text-xl">Title</h3>
          <p>lorem fw efr ewfewf ewfe</p>
        </div>
      </div>

      <NuxtLink
        to="/products"
        class="bg-blue-500 px-4 py-2 rounded shadow text-white"
      >
        Go back
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
