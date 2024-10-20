<script setup lang="ts">
import { Facebook, Instagram, Barcode, User } from "lucide-vue-next";
import WhatsAppIcon from "@/components/common/WhatsAppIcon.vue";
import Button from "@/components/common/Button.vue";
import SectionContainer from "@/components/common/SectionContainer.vue";
</script>
<template>
  <SectionContainer
    variant="with-background-color"
    class="flex items-center gap-10 justify-between px-5"
  >
    <div class="flex flex-col text-6xl items-center gap-6">
      <div class="bg-white rounded-full py-1.5 px-5">
        <img src="/src/assets/logo_extend.png" alt="" class="w-auto h-20" />
      </div>
      <div class="flex gap-3">
        <div
          class="rounded-full bg-white size-10 text-primary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <Facebook :size="20" class="fill-primary"></Facebook>
        </div>
        <div
          class="rounded-full bg-white size-10 text-primary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <Instagram :size="20"></Instagram>
        </div>
        <div
          class="rounded-full bg-white size-10 text-primary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        >
          <WhatsAppIcon class="size-6"></WhatsAppIcon>
        </div>
      </div>
    </div>
    <nav class="flex flex-col">
      <a href="" class="hover:font-bold">Início</a>
      <a href="" class="hover:font-bold">Sobre nós</a>
      <a href="" class="hover:font-bold">Para você</a>
      <a href="" class="hover:font-bold">Para sua empresa</a>
      <a href="" class="hover:font-bold">Atendimento</a>
    </nav>
    <div class="flex flex-col">
      <span>Segunda à sexta:</span>
      <span>08h00 às 18h00</span>
      <span>Sábado:</span>
      <span>08h00 às 12h00</span>
    </div>
    <div class="flex flex-col gap-3">
      <Button class="py-2">
        <template #icon>
          <WhatsAppIcon class="size-4"></WhatsAppIcon>
        </template>
        Fale conosco</Button
      >
      <Button class="py-2"
        ><template #icon><Barcode></Barcode></template>2° via fatura</Button
      >
      <Button class="py-2"
        ><template #icon><User></User></template>Área do cliente</Button
      >
    </div>
  </SectionContainer>
  <SectionContainer class="flex justify-around py-4">
    <p>
      ©2024 SATT Tecnologia. Todos os direitos reservados. CNPJ
      00.000.000.0000-00
    </p>
    <p>
      Desenvolvido por:
      <a href="https://github.com/masachetti" class="font-bold"
        >Mateus Sachetti</a
      >
    </p>
  </SectionContainer>
</template>

<style scoped></style>
