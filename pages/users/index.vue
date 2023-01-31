<script lang="ts" setup>

definePageMeta({
  layout: "material"
})


const { data, error } = await useFetch("https://dummyjson.com/users")

</script>

<template>
  <div  class="overflow-hidden h-full flex flex-col pb-6">
    <page-tool-bar />

    <div class="overflow-auto">
      <NuxtLink :to="`/users/${user.id}`" v-for="user in data.users" class="flex justify-between px-4 py-2 border-b border-[#20333e] overflow-hidden last:border-none hover:bg-[#20333e] ease-in duration-300">
        <div class="flex gap-4">
          <div class="max-w-[100px]">
            <img class="object-fit w-full" :src="user.image" />
          </div>
          <div>
            <h3 class="text-xl font-semibold">{{ user.firstName }} {{ user.lastName }}</h3>
            <h4 class="text-lg">{{ user.email }}</h4>
            <p>{{ user.address.address}}</p>
          </div>
        </div>
        <Icon name="mdi:chevron-right" size="24"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>


</style>
