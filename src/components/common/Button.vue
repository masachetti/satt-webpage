<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
const props = defineProps<{ class?: ClassValue }>();
</script>
<template>
  <button
    :class="
      cn(
        'py-1.5 px-7 rounded-full bg-primary text-white flex items-center gap-1.5 font-semibold',
        ' hover:scale-105 transition-transform',
        props.class
      )
    "
  >
    <div class="-ml-3">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>
