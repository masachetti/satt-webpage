<script setup lang="ts">
import { MenuIcon } from "lucide-vue-next";
import Location from "./Location.vue";
import SocialMediaButtons from "./SocialMediaButtons.vue";
import UtilityButtons from "./UtilityButtons.vue";
import Menu from "@/components/Header/Menu.vue";
</script>
<template>
  <header class="hidden md:flex bg-primary w-full h-14 justify-center px-4">
    <div class="max-w-[1300px] w-full flex justify-between items-center gap-8">
      <Location></Location>
      <div class="flex justify-around gap-1.5 items-center h-6 text-white">
        <span> 0800 066 3122 </span>
      </div>
      <UtilityButtons class="ml-auto"></UtilityButtons>
      <SocialMediaButtons></SocialMediaButtons>
    </div>
  </header>
  <header
    class="relative top-3 pb-3 rounded-xl md:py-3 md:rounded-none md:static bg-white max-w-[1200px] w-full flex text-center items-center gap-14 px-4 justify-between md:justify-start"
  >
    <img
      src="/src/assets/logo_extend.png"
      alt=""
      class="w-auto h-14 md:h-12 ml-4 md:ml-0"
    />
    <Menu class="hidden md:block"></Menu>
    <Location class="md:hidden ml-auto" variant="color"></Location>
    <MenuIcon class="cursor-pointer text-primary md:hidden"></MenuIcon>
  </header>
</template>

<style scoped></style>
