<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "radix-vue";

const items = [
  {
    title: "Inicio",
    href: "",
  },
  {
    title: "Serviços",
    items: [
      {
        title: "Internet",
        href: "",
      },
      {
        title: "Internet movel",
        href: "",
      },
      {
        title: "Internet movel",
        href: "",
      },
    ],
  },
  {
    title: "Teste",
    items: [
      {
        title: "Internet",
        href: "",
      },
      {
        title: "Internet movel",
        href: "",
      },
      {
        title: "Internet movel",
        href: "",
      },
    ],
  },
];
</script>
<template>
  <NavigationMenuRoot>
    <NavigationMenuList class="flex gap-6">
      <NavigationMenuItem v-for="item in items">
        <NavigationMenuTrigger
          class="hover:text-primary border-b-2 border-white hover:border-primary transition-colors"
          @click="
            () => {
              debugger;
            }
          "
          >{{ item.title }}</NavigationMenuTrigger
        >
        <NavigationMenuContent v-if="'items' in item" asChild>
          <div
            class="absolute bg-white rounded-lg border p-1 z-50 transition-all mt-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <ul>
              <NavigationMenuLink asChild v-for="subItem in item.items">
                <li
                  class="px-3 py-2 hover:bg-gray-200 text-nowrap rounded-md cursor-pointer text-gray-800"
                >
                  {{ subItem.title }}
                </li>
              </NavigationMenuLink>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>

<style scoped></style>
