<script setup lang="ts">
import { ClassValue } from "clsx";
import { cn } from "@/components/lib/cn";

const props = defineProps<{
  variant?: "default" | "with-background-color";
  class?: ClassValue;
}>();

const { variant = "default" } = props;
</script>

<template>
  <section
    class="w-screen flex justify-center"
    :class="{
      'bg-primary text-white [&_button]:bg-white [&_button]:text-primary':
        variant === 'with-background-color',
      'bg-white text-primary': variant === 'default',
    }"
  >
    <div :class="cn('max-w-[1100px] w-full py-20', props.class)">
      <slot></slot>
    </div>
  </section>
</template>
