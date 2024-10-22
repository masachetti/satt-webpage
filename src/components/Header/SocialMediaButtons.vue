<script setup lang="ts">
import { Facebook, Instagram } from "lucide-vue-next";
import WhatsAppIcon from "@/components/common/WhatsAppIcon.vue";
import Separator from "@/components/ui/separator/Separator.vue";
</script>
<template>
  <div class="flex gap-3 text-white h-5">
    <a
      href="https://www.facebook.com/satttecnologia/"
      class="cursor-pointer"
      target="_blank"
    >
      <Facebook :size="20" class="fill-white"></Facebook>
    </a>
    <Separator orientation="vertical" class="bg-white"></Separator>
    <a
      href="https://www.instagram.com/satttecnologia/"
      class="cursor-pointer"
      target="_blank"
    >
      <Instagram :size="20"></Instagram>
    </a>
    <Separator orientation="vertical" class="bg-white"></Separator>
    <a
      href="https://wa.me/5566999213122"
      class="cursor-pointer"
      target="_blank"
    >
      <WhatsAppIcon class="size-6"></WhatsAppIcon>
    </a>
  </div>
</template>

<style scoped></style>
