<script setup lang="ts">
import Separator from "@/components/ui/separator/Separator.vue";
import { MenuIcon } from "lucide-vue-next";
import Location from "./Location.vue";
import SocialMediaButtons from "./SocialMediaButtons.vue";
import UtilityButtons from "./UtilityButtons.vue";
import Menu from "@/components/Header/Menu.vue";
</script>
<template>
  <header class="bg-primary w-full h-14 flex justify-center">
    <div class="max-w-[1300px] w-full flex justify-between items-center gap-16">
      <Location></Location>
      <div class="flex justify-around gap-1.5 items-center h-6 text-white">
        <span> 0800 066 3122 </span>
        <Separator orientation="vertical" class="bg-white"></Separator>
        <span> (66) 9 9921-3122 </span>
      </div>
      <UtilityButtons class="ml-auto"></UtilityButtons>
      <SocialMediaButtons></SocialMediaButtons>
    </div>
  </header>
  <header
    class="bg-white max-w-[1200px] w-full flex text-center py-3 items-center gap-14 lg:z-10"
  >
    <img src="/src/assets/logo_extend.png" alt="" class="w-auto h-12" />
    <Menu></Menu>
    <MenuIcon
      class="cursor-pointer text-white lg:hidden ml-auto mr-10"
    ></MenuIcon>
  </header>
</template>

<style scoped></style>
