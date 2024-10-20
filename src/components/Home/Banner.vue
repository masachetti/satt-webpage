<script setup lang="ts">
import { CircleArrowRight, CircleArrowLeft } from "lucide-vue-next";
import Button from "@/components/common/Button.vue";
import { ref } from "vue";

const images = [
  "src/assets/banners/banner1.jpg",
  "src/assets/banners/banner2.jpg",
  "src/assets/banners/banner3.jpg",
];
const texts = [
  ["sempre", "conectado"],
  ["assista a séries e filmes sem interrupção"],
  ["não perca nenhum lance!"],
];

const slideComesFrom = ref<"right" | "left">("right");
const slideIndex = ref(0);
const prevSlide = async () => {
  slideComesFrom.value = "left";
  await new Promise((res) => setTimeout(res, 0));
  slideIndex.value =
    slideIndex.value === 0 ? images.length - 1 : slideIndex.value - 1;
};

const nextSlide = async () => {
  slideComesFrom.value = "right";
  await new Promise((res) => setTimeout(res, 0));
  slideIndex.value = (slideIndex.value + 1) % images.length;
};
</script>
<template>
  <div
    class="relative top-0 left-0 h-[60vh] w-full overflow-y-hidden overflow-x-hidden flex items-center"
  >
    <template v-for="(image, index) in images">
      <Transition name="images">
        <img
          v-if="index === slideIndex"
          :src="image"
          alt="Banner"
          class="absolute -top-[13vh] left-0 -z-10 h-[100vh] w-full object-cover"
        />
      </Transition>
    </template>
    <button class="text-gray-200 absolute left-3 z-10" @click="prevSlide">
      <CircleArrowLeft :size="35"></CircleArrowLeft>
    </button>
    <button class="text-gray-200 absolute right-3 z-10" @click="nextSlide">
      <CircleArrowRight :size="35"></CircleArrowRight>
    </button>
    <template v-for="(text, index) in texts">
      <Transition
        name="text"
        :style="{ '--direction': slideComesFrom === 'right' ? 1 : -1 }"
      >
        <div
          :class="[
            'w-screen absolute px-32 [&_p:nth-last-child(2)]:text-[4em] [&_p:nth-last-child(3)]:text-[6.5em]',
            // 'md:block md:top-1/2 md:-translate-y-2/3 md:left-14 lg:-translate-y-1/2',
            'md:items-start',
          ]"
          v-if="index === slideIndex"
        >
          <div class="max-w-[1100px] w-full mx-auto">
            <p
              v-for="(line, lineIndex) in text"
              class="uppercase text-white font-semibold w-[550px] leading-none"
            >
              {{ line }}
            </p>
            <Button
              class="my-12 px-14 py-2 text-base tracking-widest md:mt-8 md:mb-0"
            >
              Contrate já
            </Button>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped>
.images-enter-active,
.images-leave-active {
  transition: all 0.7s ease;
}
.images-enter-from {
  opacity: 0;
  @apply scale-50;
}
.images-leave-to {
  opacity: 0;
  @apply scale-125;
}

.text-enter-active,
.text-leave-active {
  transition: all 0.5s linear;
}
.text-enter-from {
  transform: translateX(calc(100% * var(--direction)));
}
.text-leave-to {
  transform: translateX(calc(-100% * var(--direction)));
}
</style>
