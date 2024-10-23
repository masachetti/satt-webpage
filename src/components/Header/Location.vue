<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-vue-next";
import { ref } from "vue";

const value = ref("Juara");
const props = defineProps<{ variant?: "color" | "white" }>();
const variant = props.variant || "white";
</script>
<template>
  <div class="flex gap-2 items-center">
    <MapPin
      :class="{
        'text-white': variant === 'white',
        'text-primary': variant === 'color',
      }"
      :size="38"
    ></MapPin>
    <Select>
      <SelectTrigger
        class="focus:ring-primary rounded-sm shadow-sm border-b-2 border-x-0 border-t-0"
        :class="{
          'border-white bg-primary text-white': variant === 'white',
          'border-primary bg-white': variant === 'color',
        }"
      >
        <SelectValue :placeholder="value" />
      </SelectTrigger>
      <SelectContent v-model="value">
        <SelectGroup>
          <SelectLabel>Selecione uma cidade</SelectLabel>
          <SelectItem value="Juara"> Juara </SelectItem>
          <SelectItem value="Sinop"> Sinop </SelectItem>
          <SelectItem value="Porto dos Gauchos"> Porto dos Gauchos </SelectItem>
          <SelectItem value="Novo Horizonte"> Novo Horizonte </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
