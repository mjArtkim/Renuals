<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Safari' },
  dark: { type: Boolean, default: false },
  visible: { type: Boolean, default: true },
  showLock: { type: Boolean, default: true },
  showShare: { type: Boolean, default: true },
  showTabs: { type: Boolean, default: true },
  showFooter: { type: Boolean, default: false },
  closeColor: { type: String, default: '#ff5f57' },
  minimizeColor: { type: String, default: '#ffbd2e' },
  maximizeColor: { type: String, default: '#28c840' }
})

</script>
<template>
  <div v-if="visible" :class="['safari-window', { dark }]">
    <header class="safari-header">
      <div class="traffic">
        <span
          class="light close"
          :style="{ background: closeColor }"
          @click="$emit('close')"
        ></span>
        <span class="light minimize" :style="{ background: minimizeColor }"></span>
        <span class="light maximize" :style="{ background: maximizeColor }"></span>
      </div>

      <div class="address-bar">
        <div class="lock" v-if="showLock">🔒</div>
        <div class="title">{{ title }}</div>
      </div>

      <div class="actions">
        <button class="action-btn" v-if="showShare">⇪</button>
        <button class="action-btn" v-if="showTabs">◱</button>
      </div>
    </header>

    <main class="safari-body">
      <slot>
        <div class="placeholder">Your content here (slot)</div>
      </slot>
    </main>
  </div>
</template>

<style scoped>
.safari-window {
  width: 900px;
  max-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
  box-shadow: 0 12px 30px rgba(20,20,30,0.12);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}

.safari-window.dark{
  background: linear-gradient(180deg, #0f1115 0%, #0b0c0f 100%);
  border: 1px solid rgba(255,255,255,0.06);
  color: #e7e7e7;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6);
}

.safari-header{
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: transparent;
}

.traffic{
  display: flex;
  gap: 8px;
  align-items: center;
  width: 70px;
}

.light{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.12);
  border: 1px solid rgba(0,0,0,0.06);
}

.address-bar{
  flex: 1;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 8px;
  background: rgba(0,0,0,0.03);
  backdrop-filter: blur(6px);
  min-width: 0;
}

.safari-window.dark .address-bar{
  background: rgba(255,255,255,0.04);
}

.lock{
  font-size: 12px;
}

.title{
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 35%;
}

.url{
  font-size: 12px;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions{
  display: flex;
  gap: 8px;
}
.action-btn{
  height: 32px;
  width: 36px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
}

.safari-body{
  min-height: 320px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.placeholder{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,0.45);
  font-size: 14px;
}

.safari-window.dark .placeholder{ color: rgba(255,255,255,0.55); }
.safari-window.dark .safari-footer{ color: rgba(255,255,255,0.55); border-top-color: rgba(255,255,255,0.03); }

@media (max-width: 640px){
  .safari-window{ width: 100%; }
  .title{ display:none; }
}
</style>
