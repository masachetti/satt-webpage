<script setup lang="ts">
import { Wifi, Star, CloudDownload, CloudUpload } from "lucide-vue-next";
import Button from "@/components/common/Button.vue";
import SectionContainer from "@/components/common/SectionContainer.vue";
import { vZoomIn } from "@/components/lib/zoom_in_transition";
</script>
<template>
  <SectionContainer
    class="flex flex-col items-center gap-14"
    variant="with-background-color"
  >
    <p class="text-wrap text-5xl w-96 text-center" v-zoom-in>
      NOSSOS PLANOS MAIS PEDIDOS
    </p>

    <div class="flex gap-4">
      <div
        v-zoom-in
        class="card_shadow flex flex-col items-center rounded-lg border-gray-700 overflow-hidden"
      >
        <div class="py-4 px-16 bg-white flex justify-center">
          <p class="text-5xl text-primary font-bold text-center w-1/2">
            100 MEGA
          </p>
        </div>
        <div class="w-full flex flex-col items-center gap-10 py-6">
          <div class="relative">
            <span class="absolute top-0 right-full text-lg">R$</span>
            <span class="text-5xl mx-1">99</span>
            <span class="absolute text-lg top-0 left-full">90</span>
            <span class="absolute text-lg text-nowrap bottom-0 left-full">
              /mês</span
            >
          </div>
          <ul
            class="flex flex-col gap-4 items-center [&>li]:flex [&>li]:gap-4 [&>li]:items-center"
          >
            <li>
              <Wifi :size="28"></Wifi>
              <span>Wi-fi 5G Incluso</span>
            </li>
            <li>
              <Star :size="28" class="fill-white"></Star>
              <span>Suporte Premium</span>
            </li>
            <li>
              <CloudDownload :size="28"></CloudDownload>
              <span>100 Mega de Download</span>
            </li>
            <li>
              <CloudUpload :size="28"></CloudUpload>
              <span>50 Mega de Upload</span>
            </li>
          </ul>
          <Button>Contratar Agora</Button>
        </div>
      </div>
      <div
        v-zoom-in
        class="card_shadow flex flex-col items-center rounded-lg border-gray-700 overflow-hidden"
      >
        <div class="py-4 px-16 bg-white flex justify-center">
          <p class="text-5xl text-primary font-bold text-center w-1/2">
            300 MEGA
          </p>
        </div>
        <div class="w-full flex flex-col items-center gap-10 py-6">
          <div class="relative">
            <span class="absolute top-0 right-full text-lg">R$</span>
            <span class="text-5xl mx-1">99</span>
            <span class="absolute text-lg top-0 left-full">90</span>
            <span class="absolute text-lg text-nowrap bottom-0 left-full">
              /mês</span
            >
          </div>
          <ul
            class="flex flex-col gap-4 items-center [&>li]:flex [&>li]:gap-4 [&>li]:items-center"
          >
            <li>
              <Wifi :size="28"></Wifi>
              <span>Wi-fi 5G Incluso</span>
            </li>
            <li>
              <Star :size="28" class="fill-white"></Star>
              <span>Suporte Premium</span>
            </li>
            <li>
              <CloudDownload :size="28"></CloudDownload>
              <span>300 Mega de Download</span>
            </li>
            <li>
              <CloudUpload :size="28"></CloudUpload>
              <span>150 Mega de Upload</span>
            </li>
          </ul>
          <Button>Contratar Agora</Button>
        </div>
      </div>
      <div
        v-zoom-in
        class="card_shadow flex flex-col items-center rounded-lg border-gray-700 overflow-hidden"
      >
        <div class="py-4 px-16 bg-white flex justify-center">
          <p class="text-5xl text-primary font-bold text-center w-1/2">
            500 MEGA
          </p>
        </div>
        <div class="w-full flex flex-col items-center gap-10 py-6">
          <div class="relative">
            <span class="absolute top-0 right-full text-lg">R$</span>
            <span class="text-5xl mx-1">99</span>
            <span class="absolute text-lg top-0 left-full">90</span>
            <span class="absolute text-lg text-nowrap bottom-0 left-full">
              /mês</span
            >
          </div>
          <ul
            class="flex flex-col gap-4 items-center [&>li]:flex [&>li]:gap-4 [&>li]:items-center"
          >
            <li>
              <Wifi :size="28"></Wifi>
              <span>Wi-fi 5G Incluso</span>
            </li>
            <li>
              <Star :size="28" class="fill-white"></Star>
              <span>Suporte Premium</span>
            </li>
            <li>
              <CloudDownload :size="28"></CloudDownload>
              <span>500 Mega de Download</span>
            </li>
            <li>
              <CloudUpload :size="28"></CloudUpload>
              <span>250 Mega de Upload</span>
            </li>
          </ul>
          <Button>Contratar Agora</Button>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.card_shadow {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
