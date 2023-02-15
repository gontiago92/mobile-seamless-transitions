<script lang="ts" setup>
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { Component } from "vue";
import { useDisplay } from "vuetify";

const props = defineProps<{
  rail: boolean;
  component?: Component;
}>();

const { xs, mobile } = useDisplay();
const open = ref(false);

gsap.registerPlugin(Flip);

const activate = () => {
  open.value = true;
  const fullSize = document.querySelector(".dialog"),
    thumbnail = document.querySelector(".fab");

  const state = Flip.getState(".fab, .dialog");

  console.log(state);

  fullSize?.classList.toggle("active");
  thumbnail?.classList.toggle("active");

  Flip.from(state, {
    duration: 0.3,
    fade: true,
    absolute: true,
    toggleClass: "flipping",
    ease: "power1.in",
    zIndex: 50,
    nested: true,
    scale: true,
  });
};
const width = computed(() => {
  if (mobile && props.rail && !xs) {
    return 56 + "px";
  } else {
    return 100 + "%";
  }
});
</script>

<template>
  <!--   <div
    :class="{ 'mb-16': !xs }"
    :style="[
      xs ? 'position: fixed; right: 16px; bottom: 16px; z-index: 50' : '',
    ]"
  >
   <button
      @click="activate"
          class="fab bg-[#004c69] text-[#c4e7ff] shadow-lg w-14 h-14 flex items-center justify-center rounded-xl"
          data-flip-id="fab"      :class="{'active': open}">

    <Icon name="mdi:pencil" size="20" />
  </button> --

    <div
      style="z-index: 50; height: 56px"
      :style="[`width: ${width};`]"
      class="rounded-lg"
    >
      <v-btn
        v-if="mobile && rail"
        icon="mdi-plus"
        @click="activate"
        rounded="xl"
        size="56"
        class="fab"
        data-flip-id="fab"
      ></v-btn>
      <v-btn
        v-if="!rail || !mobile"
        prepend-icon="mdi-plus"
        @click="activate"
        rounded="lg"
        height="56"
        class="fab w-100"
        data-flip-id="fab"
      >
        Ajouter
      </v-btn>
    </div>

    <transition>
      <div class="dialog bg-background" data-flip-id="fab">
        <div class="bg-white p-4">
          <button
            @click="activate"
            class="rounded-full bg-white w-8 h-8 text-black"
          >
            <Icon name="mdi:close" size="20" />
          </button>
        </div>
        <div>efwfwefewfwe</div>
      </div>
    </transition>
  </div> -->

  <v-dialog
    v-model="open"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        icon="mdi-plus"
        rounded="xl"
        size="56"
        v-bind="props"
      />
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="open = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="open = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
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
          <template v-slot:prepend> htrhtr </template>
        </v-list-item>
        <v-list-item
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
        >
          <template v-slot:prepend> htrhtr </template>
        </v-list-item>
        <v-list-item
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
        >
          <template v-slot:prepend> fewfe </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<style>
.dialog {
  cursor: pointer;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  z-index: 30;
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

.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
