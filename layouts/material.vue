<script lang="ts" setup>
import { useTheme, useDisplay } from "vuetify";

const { xs, mobile } = useDisplay();
//const theme = ref('dark')
const theme = useTheme();

const router = useRouter();
const drawer = ref(false);
const rail = ref(true);

//const toggleTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");

const navLinks = computed(() =>
  router
    .getRoutes()
    .filter((route) => route.meta.nav && !route.path?.includes("tenant"))
);

const toggleNavigationDrawer = () => {
  if (xs.value) {
    drawer.value = !drawer.value;
  }

  if (mobile.value && !xs.value) {
    rail.value = !rail.value;
  }
  console.log("here");
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :rail="mobile && !xs && rail"
      :permanent="!xs"
      rail-width="80"
      class="py-6 px-3"
      border="0"
    >
      <div
        class="d-flex w-100"
        :class="[
          mobile && !xs && rail ? 'justify-center' : 'justify-space-between',
        ]"
        style="white-space: nowrap"
      >
        <transition name="textSlide" mode="out-in">
          <h3 v-if="!rail || !mobile || xs">Management Tool</h3>
        </transition>
        <Icon
          v-if="rail && mobile && !xs"
          name="line-md:menu"
          size="24"
          class="mb-4"
          @click="toggleNavigationDrawer"
        />
        <Icon
          v-if="!rail || !mobile || xs"
          name="line-md:menu-unfold-left"
          size="24"
          class="mb-4"
          @click="toggleNavigationDrawer"
        />
      </div>

      <TestFab v-if="!xs" />

      <v-list v-if="!$route.path.includes('tenants')" density="compact" nav>
        <template v-for="routeLink in navLinks" :key="routeLink.name">
          <v-list-item
            v-if="!routeLink.meta.nav.children"
            :value="routeLink.name"
            active-color="primary"
            rounded="0"
            class="rounded-pill"
            :to="routeLink.path"
          >
            <template #prepend>
              <Icon
                class="mr-4"
                :name="routeLink.meta.nav.icon ?? 'mdi:plus'"
                size="24"
              />
            </template>
            <v-list-item-title>
              <span class="text-capitalize">
                {{ routeLink.meta.nav.title }}
              </span>
            </v-list-item-title>
          </v-list-item>
          <v-list-group
            v-if="routeLink.meta.nav.children"
            :to="routeLink.path"
            :value="routeLink.name"
            class="mb-1"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="routeLink.meta.nav.title"
                rounded="xl"
                active-color="primary"
              >
                <template #prepend>
                  <Icon name="dashicons:embed-generic" class="mr-4" />
                </template>
              </v-list-item>
            </template>
            <v-list-item
              v-for="childLink in routeLink.meta.nav.children"
              :key="childLink.title"
              :title="childLink.title"
              :to="childLink.path"
              rounded="xl"
              active-color="primary"
            >
              <template #prepend>
                <Icon
                  :name="childLink.icon ?? 'dashicons:embed-generic'"
                  class="mr-4"
                />
              </template>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
      <v-btn @click="toggleTheme">theme</v-btn>
    </v-navigation-drawer>

    <v-app-bar v-if="false">
      <template #prepend>
        <v-btn variant="plain" size="24">
          <Icon name="line-md:menu" size="24" @click="drawer = true" />
        </v-btn>
      </template>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main class="w-100 h-100 py-4 bg-background">
      <v-card class="mr-4 pa-4 h-100" elevation="0" rounded="xl">
        <slot />
        <!--      <v-row>
          <template v-for="n in 4" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="12" sm="6" md="4">
              <v-card
                color="surface-variant"
                height="150"
                elevation="0"
              ></v-card>
            </v-col>
          </template>
        </v-row> -->
      </v-card>
    </v-main>
    <TestFab v-if="xs" />
  </v-app>
</template>

<style>
.search {
  background: rgba(var(--v-theme-primary), 0.05);
}

::placeholder {
  color: rgba(var(--v-theme-primary), 0.7);
}

.textSlide-enter-active,
.textSlide-leave-active {
  transition: opacity 0.3s linear;
}
.textSlide-enter-from,
.textSlide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.router-link-active {
  @apply bg-[#494264] text-[#e7deff];
}

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transition: all 0.4s ease-in;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}
</style>
