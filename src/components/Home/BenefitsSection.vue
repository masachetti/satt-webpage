<script setup lang="ts">
import {
  Clock,
  PiggyBank,
  Wifi,
  Rocket,
  Headset,
  Gamepad2,
} from "lucide-vue-next";
import { CircleArrowDown } from "lucide-vue-next";
import Button from "@/components/common/Button.vue";
import SectionContainer from "@/components/common/SectionContainer.vue";
import { vZoomIn } from "@/lib/zoom_in_transition";
</script>
<template>
  <SectionContainer class="relative pb-14">
    <ul
      v-zoom-in
      class="flex items-center text-white px-5 py-10 absolute bg-primary w-full h-44 top-0 -translate-y-1/3 rounded-2xl"
    >
      <li
        class="flex items-center gap-3 border-r-gray-400 border-r pr-3 h-full"
      >
        <Clock :size="80" class="mb-10"></Clock>
        <div>
          <p class="text-lg font-semibold">Instalação imediata</p>
          <p class="text-wrap">Suporte técnico especializado.</p>
        </div>
      </li>
      <li
        class="flex items-center gap-3 border-r-gray-400 border-r pr-3 h-full ml-3"
      >
        <PiggyBank :size="80" class="fill-white mb-10"></PiggyBank>
        <div>
          <p class="text-lg font-semibold">Custo benefício</p>
          <p class="text-wrap">Planos e preços que cabem no seu bolso</p>
        </div>
      </li>
      <li
        class="flex items-center gap-3 border-r-gray-400 border-r pr-3 h-full ml-3"
      >
        <Rocket :size="80" class="fill-white mb-10"></Rocket>
        <div>
          <p class="text-lg font-semibold">Internet Fibra Óptica</p>
          <p class="text-wrap">Ultra velocidade para você curtir o melhor.</p>
        </div>
      </li>
      <li class="flex items-center gap-3 h-full ml-3">
        <Wifi :size="80" class="mb-10"></Wifi>
        <div>
          <p class="text-lg font-semibold">Wi-Fi turbo grátis</p>
          <p class="text-wrap">Velocidade máxima para sua conexão.</p>
        </div>
      </li>
    </ul>
    <div class="mt-40 flex flex-col items-center justify-between md:flex-row">
      <div
        v-zoom-in
        class="ml-10 text-primary uppercase font-medium flex flex-col items-center md:items-start"
      >
        <h1 class="text-3xl">Nossas</h1>
        <h1 class="text-5xl">Vantagens</h1>
        <Button class="font-normal px-8 py-3 my-8">
          <template #icon>
            <CircleArrowDown :size="18"></CircleArrowDown>
          </template>
          Ver planos
        </Button>
      </div>
      <ul class="grid grid-cols-1 gap-3 w-full md:w-fit md:grid-cols-3">
        <li class="benefit-card" v-zoom-in>
          <Clock :size="50" class="text-primary"></Clock>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Instalação Imediata
          </p>
        </li>
        <li class="benefit-card" v-zoom-in>
          <PiggyBank :size="50" class="text-primary fill-primary"></PiggyBank>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Custo benefício
          </p>
        </li>
        <li class="benefit-card" v-zoom-in>
          <Wifi :size="50" class="text-primary"></Wifi>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Wi-Fi turbo grátis
          </p>
        </li>
        <li class="benefit-card" v-zoom-in>
          <Rocket :size="50" class="text-primary fill-primary"></Rocket>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Internet Fibra Óptica
          </p>
        </li>
        <li class="benefit-card" v-zoom-in>
          <Headset :size="50" class="text-primary"></Headset>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Atendimento especializado
          </p>
        </li>
        <li class="benefit-card" v-zoom-in>
          <Gamepad2 :size="50" class="text-primary"></Gamepad2>
          <p
            class="w-4/6 text-wrap text-lg text-center md:text-sm md:font-semibold"
          >
            Internet para games
          </p>
        </li>
      </ul>
    </div>
  </SectionContainer>
</template>

<style scoped>
.benefit-card {
  @apply md:max-w-32 lg:max-w-40 h-40 w-full border-2 border-primary rounded-2xl flex flex-col items-center justify-center gap-4 text-wrap;
}
</style>
