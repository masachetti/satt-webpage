<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import WhatsAppIcon from "@/components/common/WhatsAppIcon.vue";
import { User, Barcode } from "lucide-vue-next";
</script>
<template>
  <div class="hidden md:flex gap-2 flex-col lg:flex-row items-center">
    <Button class="py-1.5 text-sm bg-white text-primary">
      <template #icon><WhatsAppIcon class="size-6"></WhatsAppIcon></template>
      Fale Conosco
    </Button>
    <Button class="py-1.5 text-sm bg-white text-primary">
      <template #icon><User></User></template>
      Área do cliente
    </Button>

    <Button class="py-1.5 text-sm bg-white text-primary">
      <template #icon><Barcode></Barcode></template>
      2° via fatura
    </Button>
  </div>
</template>

<style scoped></style>
