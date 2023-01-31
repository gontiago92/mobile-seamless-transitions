<script lang="ts" setup>

definePageMeta({
  layout: "material"
})


const { data, error } = await useFetch("https://dummyjson.com/products")

</script>

<template>
  <div  class="overflow-hidden h-full flex flex-col pb-6">
    <page-tool-bar />

    <div class="overflow-auto">
      <NuxtLink :to="`/products/${product.id}`" v-for="product in data.products" class="flex justify-between px-4 py-2 border-b border-[#20333e] overflow-hidden last:border-none hover:bg-[#20333e] ease-in duration-300">
        <div class="flex gap-4">
          <div class="max-w-[200px]">
            <img class="object-fit w-full" :src="product.thumbnail" />
          </div>
          <div>
            <h3 class="text-xl font-semibold">{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <Icon name="mdi:chevron-right" size="24"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>


</style>
