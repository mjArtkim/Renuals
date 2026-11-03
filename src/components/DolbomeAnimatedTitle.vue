<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { gsap } from "gsap";

const props = defineProps({
  text: { type: String, required: true },
  active: { type: Boolean, default: true },
  direction: { type: Number, default: 1 },
});
const heading = ref(null);
const words = computed(() => props.text.split(" "));
let animation;
let motion;
let stopWatch;
let disposed = false;

async function reveal() {
  await nextTick();
  if (disposed || !heading.value) return;
  animation?.kill();
  const chars = heading.value.querySelectorAll(".title-char");
  if (!props.active || motion?.matches) {
    gsap.set(chars, { clearProps: "transform,opacity" });
    return;
  }
  animation = gsap.fromTo(
    chars,
    { yPercent: props.direction < 0 ? -120 : 120, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      delay: 0.12,
      ease: "power3.out",
      stagger: { each: 0.045, from: "random" },
      onComplete: () => gsap.set(chars, { clearProps: "transform,opacity" }),
    },
  );
}

onMounted(() => {
  motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", reveal);
  stopWatch = watch(() => [props.active, props.text], reveal, {
    flush: "post",
  });
  reveal();
});
onBeforeUnmount(() => {
  disposed = true;
  stopWatch?.();
  motion?.removeEventListener("change", reveal);
  animation?.kill();
});
</script>

<template>
  <h1 ref="heading" class="animated-title" :aria-label="text">
    <span class="title-clip" aria-hidden="true"
      ><template v-for="(word, wordIndex) in words" :key="wordIndex"
        ><span v-if="wordIndex" class="title-space"> </span
        ><span class="title-word"
          ><span
            v-for="(char, charIndex) in Array.from(word)"
            :key="charIndex"
            class="title-char"
            >{{ char }}</span
          ></span
        ></template
      ></span
    >
  </h1>
</template>

<style scoped lang="scss">
.animated-title {
  .title-clip {
    display: block;
    overflow: hidden;
    padding: 4px 0;
  }
  .title-word {
    display: inline-block;
    white-space: nowrap;
  }
  .title-char {
    display: inline-block;
  }
  .title-space {
    white-space: pre;
  }
}
</style>
