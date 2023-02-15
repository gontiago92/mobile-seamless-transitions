<script lang="ts" setup>
definePageMeta({
  layout: "material",
});

const { data, error } = await useFetch("https://dummyjson.com/users");
</script>

<template>
  <v-row>
    <v-col cols="4" class="pa-2">
      <v-card
        elevation="0"
        class="search rounded-pill mb-4 p-2 pl-2 d-flex justify-space-between align-center w-100"
        style="padding: 6px"
      >
        <v-btn variant="plain" size="36">
          <Icon
            v-if="xs"
            name="line-md:menu"
            size="24"
            @click="toggleNavigationDrawer"
          />
        </v-btn>
        <input
          type="text"
          placeholder="Search"
          class="px-4"
          style="outline: 0; width: 100%"
        />
        <v-avatar color="surface-tint" size="32"></v-avatar>
      </v-card>
      <v-card
        elevation="0"
        class="ma-0 pa-0"
        height="800"
        style="overflow: auto"
      >
        <v-list class="ma-0 pa-0">
          <v-card
            elevation="0"
            class="card mb-2"
            v-for="user in data.users"
            :to="`/users/${user.id}`"
            :title="`${user.firstName} ${user.lastName}`"
            :prepend-avatar="user.image"
          >
          </v-card>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="8" class="pa-2">
      <v-card
        elevation="0"
        class="card overflow-hidden h-100 flex flex-col pa-4"
      >
        <NuxtPage />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.card {
  background: rgba(var(--v-theme-surface-tint), 0.08);
}

.card:last-child {
  margin: 0;
}
</style>
