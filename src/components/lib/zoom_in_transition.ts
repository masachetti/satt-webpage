import { useElementVisibility } from "@vueuse/core";
import { watch } from "vue";

const vZoomIn = {
  mounted: (el: HTMLElement, binding, vnode) => {
    const targetIsVisible = useElementVisibility(el);
    el.classList.add(
      "transition-transform",
      "ease-out",
      "duration-700",
      targetIsVisible.value ? "scale-100" : "scale-50"
    );
    watch(
      targetIsVisible,
      () => {
        el.classList.remove("scale-50");
        el.classList.add("scale-100");
      },
      { once: true }
    );
    console.log(binding);
    console.log(vnode);
  },
};

export { vZoomIn };
