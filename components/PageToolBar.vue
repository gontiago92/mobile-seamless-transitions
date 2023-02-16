<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
import { useDisplay } from "vuetify";

const { xs } = useDisplay();
defineProps<{
  canGoBack?: boolean;
  pageTitle: string;
}>();
const listItemSelected = useStorage("listItemSelected", localStorage);

const goBack = () => {
  listItemSelected.value.state = false;
  listItemSelected.value.item = undefined;
  listItemSelected.value.title = undefined;
  navigateTo("/users");
  //$router.go(-1)
};
</script>

<template>
  <v-card v-if="!xs" elevation="0" class="container">
    <v-toolbar class="bg-transparent">
      <v-btn v-if="canGoBack" @click="goBack" icon>
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
</template>

<style scoped>
.container {
  background: rgba(var(--v-theme-surface-tint), 0.08);
}
</style>
