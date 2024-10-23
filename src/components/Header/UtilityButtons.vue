<script setup lang="ts">
import WhatsAppIcon from "@/components/common/WhatsAppIcon.vue";
import { User, Barcode } from "lucide-vue-next";
import { breakpointsTailwind } from "@vueuse/core";
import { useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const largeBreakpoint = breakpoints.greaterOrEqual("lg");
</script>
<template>
  <div class="gap-2 items-center text-white flex w-fit">
    <div
      class="hover:font-bold cursor-pointer flex gap-2 items-center border-r border-white pr-2"
      v-if="largeBreakpoint"
    >
      <WhatsAppIcon class="size-6"></WhatsAppIcon>
      <span class="text-nowrap">Fale Conosco</span>
    </div>
    <div
      class="hover:font-bold cursor-pointer flex gap-2 items-center border-r border-white pr-2"
    >
      <User></User>
      <span class="text-nowrap">Área do cliente</span>
    </div>
    <div class="hover:font-bold cursor-pointer flex gap-2 items-center">
      <Barcode></Barcode>
      <span class="text-nowrap">2° via fatura</span>
    </div>
  </div>
</template>

<style scoped></style>
