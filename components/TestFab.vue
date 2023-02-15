<script lang="ts" setup>
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useDisplay } from "vuetify";
import type { Component } from "vue";

const props = defineProps<{
  rail: boolean;
  component?: Component;
}>();

const { xs, mobile } = useDisplay();
const open = ref(false);

gsap.registerPlugin(Flip);

const dialog = ref(false);
let lastState;

const openDialog = () => {
  const dialogContainer = document.querySelector(".dialog");
  const fab = document.querySelector(".fab");
  const state = Flip.getState(".fab, .dialog");

  if (dialog.value) {
    dialog.value = false;
  } else {
    dialog.value = true;
  }

  dialogContainer?.classList.toggle("active");
  fab?.classList.toggle("active");

  Flip.from(state, {
    duration: 0.3,
    fade: true,
    toggleClass: "flipping",
    ease: "power1.in",
  });
};
</script>

<template>
  <div
    :class="[xs ? 'ma-4' : 'my-4']"
    :style="[xs ? 'position: fixed; bottom: 0; right: 0' : '']"
  >
    <v-btn
      v-if="xs"
      data-flip-id="img"
      class="fab pa-0"
      size="56"
      @click="openDialog"
    >
      <Icon name="mdi:plus" size="24" />
    </v-btn>

    <v-btn
      v-if="mobile && !xs"
      class="fab pa-0 rounded-lg"
      rounded="lg"
      size="56"
      @click="dialog = true"
    >
      <Icon name="mdi:plus" size="24" />
    </v-btn>
    <v-btn
      v-if="!rail && !mobile"
      class="fab w-100 rounded-lg"
      rounded="0"
      @click="dialog = true"
    >
      <Icon name="mdi:plus" size="24" />
      Test
    </v-btn>

    <!-- button with animation -->
    <!--     <v-btn
      v-if="mobile && !xs"
      data-flip-id="img"
      class="fab pa-0 rounded-lg"
      rounded="lg"
      size="56"
      @click="openDialog"
    >
      <Icon name="mdi:plus" size="24" />
    </v-btn>
    <v-btn
      v-if="!rail && !mobile"
      data-flip-id="img"
      class="fab w-100 rounded-lg"
      rounded="0"
      @click="openDialog"
    >
      <Icon name="mdi:plus" size="24" />
      Test
    </v-btn> -->

    <v-dialog v-if="!xs" v-model="dialog">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div
      v-if="xs"
      class="bg-background w-screen h-screen dialog"
      style="position: fixed; top: 0; left: 0"
      data-flip-id="img"
    >
      <v-toolbar color="surface-variant">
        <v-btn icon dark @click.stop="openDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="dialog = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-container>
        <v-list lines="two" subheader>
          <v-list-subheader>User Controls</v-list-subheader>
          <v-list-item
            title="Content filtering"
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
          ></v-list-item>
          <v-list-item
            title="Password"
            subtitle="Require password for purchase or use password to restrict purchase"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list lines="two" subheader>
          <v-list-subheader>General</v-list-subheader>
          <v-list-item
            title="Notifications"
            subtitle="Notify me about updates to apps or games that I downloaded"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Sound"
            subtitle="Auto-update apps at any time. Data charges may apply"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Auto-add widgets"
            subtitle="Automatically add home screen widgets"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.fab {
  display: block;
  width: 56px;
  height: 56px;
}

.dialog {
  flex-shrink: 0;
  flex-grow: 0;
  height: 100%;
  display: none;
}
.dialog.active {
  display: block;
}
.fab.active {
  visibility: hidden;
}
.fab,
.fab.flipping {
  visibility: visible;
}
</style>
