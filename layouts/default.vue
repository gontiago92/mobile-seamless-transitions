<script lang="ts" setup></script>

<template>
  <div>
    <slot />
  </div>
</template>

<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.4s linear;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  width: 100%;
}

.page-right-leave-active:after {
  content: "";
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-leave-to:after,
.page-right-enter-from:after {
  content: "";
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}
</style>
