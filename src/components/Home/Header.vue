<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import { User, Barcode, Menu } from "lucide-vue-next";
</script>
<template>
  <header
    class="bg-primary max-w-[1200px] w-full flex text-center justify-between py-2 items-center lg:bg-transparent lg:absolute lg:z-10"
  >
    <img src="/src/assets/logo_extend.png" alt="" class="w-auto h-20" />
    <nav
      class="hidden lg:flex text-center gap-4 mx-6 h-full [&>a]:h-fit text-white font-semibold"
    >
      <a class="hover:text-primary cursor-pointer">Início</a>
      <a class="hover:text-primary cursor-pointer">Sobre nós</a>
      <a class="hover:text-primary cursor-pointer">Para você</a>
      <a class="hover:text-primary cursor-pointer">Para sua empresa</a>
      <a class="hover:text-primary cursor-pointer">Atendimento</a>
    </nav>
    <Menu class="cursor-pointer text-white lg:hidden ml-auto mr-10"></Menu>
    <div class="hidden md:flex gap-2 flex-col lg:flex-row items-center">
      <Button class="py-1 hover:bg-white hover:text-primary">
        <template #icon><User></User></template>
        Área do cliente
      </Button>

      <Button class="py-1 hover:bg-white hover:text-primary">
        <template #icon><Barcode></Barcode></template>
        2° via fatura
      </Button>
    </div>
  </header>
</template>

<style scoped></style>
