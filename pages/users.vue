<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
import { useDisplay } from "vuetify";
const { xs, mobile, mdAndUp, smAndUp, mdAndDown } = useDisplay();

definePageMeta({
  layout: "material",
});

const { data, error } = await useFetch("https://dummyjson.com/users");

//const listItemSelected = useListState();

const listItemSelected = useStorage("listItemSelected", {
  item: undefined,
  state: false,
  title: "",
});

const selectItem = (user) => {
  listItemSelected.value = {
    state: true,
    item: user,
    title: user.firstName,
  };
};

const getMobile = computed(() => mobile.value);
//[mobile ? 12 : 4]
//[mobile && listItemSelected.state ? 12 : 8]
</script>

<template>
  <div class="h-100 d-flex flex-column">
    <v-row class="ma-0 pa-0 h-100">
      <transition name="slide-fade">
        <v-col
          :cols="12"
          md="4"
          class="px-3 h-100"
          v-if="!listItemSelected.state || mdAndUp"
        >
          <!--       State : {{ listItemSelected }}
      <v-btn @click="listItemSelected = !listItemSelected">toggle state</v-btn> -->
          <v-card elevation="0" class="bg-transparent h-100 d-flex flex-column">
            <!-- Search bar -->
            <div
              class="search rounded-pill mb-4 py-2 px-2 d-flex justify-space-between align-center w-100"
              style="height: 56px"
            >
              <v-btn variant="plain" size="36">
                <Icon
                  class="on-surface"
                  name="mdi:magnify"
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
            </div>
            <!-- List Items -->

            <v-list class="ma-0 pa-0 bg-transparent">
              <v-card
                elevation="0"
                class="card listItem"
                :class="{ active: listItemSelected.item?.id === user.id }"
                v-for="user in data.users"
                :to="`/users/${user.id}`"
                :title="`${user.firstName} ${user.lastName}`"
                :prepend-avatar="user.image"
                @click="selectItem(user)"
              >
              </v-card>
            </v-list>
          </v-card>
        </v-col>
      </transition>
      <v-col :cols="12" md="8" class="h-100">
        <transition name="slide-fade">
          <v-card
            v-if="mdAndUp || listItemSelected.state"
            elevation="0"
            class="card overflow-hidden h-100 flex flex-col pa-4"
          >
            <NuxtPage />
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.card {
  background: rgba(var(--v-theme-surface-tint), 0.08);
}
.card.active {
  background: rgba(var(--v-theme-primary), 0.2);
}
.listItem {
  margin-bottom: 8px;
}
.listItem:last-child {
  margin-bottom: 0px;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
