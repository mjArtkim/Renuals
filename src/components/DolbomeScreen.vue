<script setup>
defineProps({
  src: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  label: { type: String, default: 'UI 화면 설계' },
})
</script>

<template>
  <figure class="dolbome-screen" :style="{ '--screen-width': `${width}px` }">
    <img :src="src" :width="width" :height="height" :alt="label" loading="lazy" decoding="async" />
  </figure>
</template>

<style scoped lang="scss">
.dolbome-screen {
  width: min(100%, var(--screen-width));
  max-width: 100%;
  min-width: 0;
  flex-shrink: 0;
  margin: auto;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
