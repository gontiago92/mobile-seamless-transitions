<script lang="ts" setup>
const route = useRoute()
definePageMeta({
  layout: "material"
})

const { data: user, error } = await useFetch(`https://dummyjson.com/users/${route.params.id}`)

</script>

<template>
  <div  class="overflow-hidden h-full flex flex-col pb-6">
    <page-tool-bar can-go-back  />

    <div class="overflow-auto">

      <img class="w-[200px] object-fit" :src="user.image" alt="">

      <div class="p-4 flex justify-between">
        <div>
          <h2 class="text-3xl">{{ user.firstName }} {{ user.lastName }}</h2>
          <p>{{ user.email }}</p>
        </div>
        <h3 class="text-xl font-semibold">{{ user.phone }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
