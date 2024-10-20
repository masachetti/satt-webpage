<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { ref, watch } from "vue";

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
const isElementVisited = ref(targetIsVisible.value);
watch(targetIsVisible, () => (isElementVisited.value = true));
</script>
<template>
  <div ref="target">
    <slot :isVisited="isElementVisited"></slot>
  </div>
</template>
