<script lang="ts" setup>
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
</script>

<template>
  <div v-if="!mobile" class="h-100 d-flex align-center justify-center">
    <h2>Select an item from the list</h2>
  </div>
</template>

<style scoped></style>
