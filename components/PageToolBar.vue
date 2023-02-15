<script lang="ts" setup>
defineProps<{
  canGoBack?: boolean;
  pageTitle: string;
}>();
</script>

<template>
  <v-card elevation="0" class="container">
    <v-toolbar class="bg-transparent">
      <v-btn v-if="canGoBack" @click="$router.go(-1)" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <!--   <v-card
    elevation="0"
    class="py-4 px-6 d-flex container items-center justify-space-between"
  >
  
    <div class="d-flex">
      <button
        v-if="canGoBack"
        @click="$router.go(-1)"
        class="bg-[#7cd0ff] text-white w-10 h-10 flex items-center justify-center rounded-full"
      >
        <Icon name="mdi:arrow-left" size="20" />
      </button>

      <h1 class="text-2xl">Page Title</h1>
    </div>

    <div class="tools bg-red">icons</div>
        <v-card elevation="0" class="container pa-8">
      <v-card elevation="0" class="container">fewfewfew</v-card></v-card
    > 
  </v-card> -->
</template>

<style scoped>
.container {
  background: rgba(var(--v-theme-surface-tint), 0.08);
}
</style>
