<script setup lang="ts">
import { CircleArrowRight, CircleArrowDown } from "lucide-vue-next";
import Button from "@/components/common/Button.vue";
import SectionContainer from "@/components/common/SectionContainer.vue";
import { vZoomIn } from "@/components/lib/zoom_in_transition";
</script>
<template>
  <SectionContainer class="flex flex-col items-center gap-40">
    <div class="flex items-center gap-32 w-full">
      <div v-zoom-in>
        <h3 class="uppercase text-black text-3xl text-nowrap">
          assista as suas séries e filmes
        </h3>
        <h2 class="uppercase text-5xl font-semibold tracking-wide text-nowrap">
          sem interrrupção
        </h2>
        <Button class="mt-10 px-8 py-3 font-normal">
          <template #icon
            ><CircleArrowDown :size="17"></CircleArrowDown
          ></template>
          Ver planos</Button
        >
      </div>
      <div v-zoom-in>
        <img
          src="/src/assets/banners/img1.jpg"
          alt=""
          class="rounded-2xl w-full"
        />
      </div>
    </div>
    <div class="flex items-center gap-32 w-full">
      <div v-zoom-in>
        <img
          src="/src/assets/banners/img2.jpg"
          alt=""
          class="rounded-2xl w-full"
        />
      </div>
      <div v-zoom-in>
        <h3 class="uppercase text-black text-3xl">
          melhore o desempenho da sua empresa
        </h3>
        <h2 class="uppercase text-5xl font-semibold tracking-wide">
          conheça nossos planos empresariais
        </h2>
        <Button class="mt-10 px-8 py-3 font-normal">
          <template #icon
            ><CircleArrowRight :size="17"></CircleArrowRight
          ></template>
          Saiba mais</Button
        >
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped></style>
