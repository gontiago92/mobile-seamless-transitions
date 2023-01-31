<script lang="ts" setup>
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

const open = ref(false)

gsap.registerPlugin(Flip);


const activate = () => {
  open.value = true
  const fullSize = document.querySelector(".dialog"),
      thumbnail = document.querySelector(".fab");

  const state = Flip.getState(".fab, .dialog");

  console.log(state)

  fullSize?.classList.toggle("active");
  thumbnail?.classList.toggle("active");

  Flip.from(state, {
    duration: 0.3,
    fade: true,
    absolute: true,
    toggleClass: "flipping",
    ease: "power1.inOut"
  });

};


</script>

<template>
<div>
  <button
      @click="activate"
          class="fab bg-[#004c69] text-[#c4e7ff] shadow-lg w-14 h-14 flex items-center justify-center rounded-xl"
          data-flip-id="fab"      :class="{'active': open}">

    <Icon name="mdi:pencil" size="20" />
  </button>


  <transition>
    <div  class="dialog fixed w-full h-full top-0 left-0 bg-[#191c1e] text-[#e1e2e5]" data-flip-id="fab"  >
      <div class="bg-[#41484d] p-4">
        <button @click="activate" class="rounded-full bg-white w-8 h-8 text-black">
          <Icon name="mdi:close" size="20" />
        </button>
      </div>
      <div>

        efwfwefewfwe
      </div>
    </div>
  </transition>

</div>
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
}
.dialog.active {
  display: block;
}
.fab.active {
  visibility: hidden;

}
.fab, .fab.flipping {
  visibility: visible;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;

}
</style>
