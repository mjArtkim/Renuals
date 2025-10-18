<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap, Expo } from 'gsap'
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

const cursorRef = ref(null)
const textRef = ref(null)

const pos = { x: 0, y: 0 }
const vel = { x: 0, y: 0 }
const set = {}

function getScale(dx, dy) {
  const distance = Math.sqrt(dx * dx + dy * dy)
  return Math.min(distance / 300, 0.35)
}

function getAngle(dx, dy) {
  return (Math.atan2(dy, dx) * 180) / Math.PI
}

const loop = () => {
  const rotation = getAngle(vel.x, vel.y)
  const scale = getScale(vel.x, vel.y)
  set.x(pos.x)
  set.y(pos.y)
  set.r(rotation)
  set.sx(1 + scale)
  set.sy(1 - scale)
  set.rt(-rotation)
}
let handleMouseMove
onMounted(async () => {
  await nextTick()
  if (!cursorRef.value || !textRef.value) return
  gsap.set(cursorRef.value, { scale: 1, x: 0, y: 0, rotate: 0 })
  gsap.set(textRef.value, { rotate: 0 })

  set.x = gsap.quickSetter(cursorRef.value, 'x', 'px')
  set.y = gsap.quickSetter(cursorRef.value, 'y', 'px')
  set.r = gsap.quickSetter(cursorRef.value, 'rotate', 'deg')
  set.sx = gsap.quickSetter(cursorRef.value, 'scaleX')
  set.sy = gsap.quickSetter(cursorRef.value, 'scaleY')
  set.rt = gsap.quickSetter(textRef.value, 'rotate', 'deg')

  handleMouseMove = evt => {
    const mouseX = evt.clientX
    const mouseY = evt.clientY

    gsap.to(pos, {
      x: mouseX,
      y: mouseY,
      duration: 0.8,
      ease: Expo.easeOut,
      onUpdate: () => {
        vel.x = mouseX - pos.x
        vel.y = mouseY - pos.y
      }
    })
    loop()
  }

  document.body.addEventListener('mousemove', handleMouseMove)
  gsap.ticker.add(loop)

  const hoverTargets = document.querySelectorAll('a, button, input, textarea')
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursorRef.value, { scale: 1.4, duration: 0.3, borderColor: '#5D00DB', ease: 'power2.out' })
      gsap.to(textRef.value, { color: '#5D00DB', duration: 0.3 })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to(cursorRef.value, { scale: 1, duration: 0.3, borderColor: '#004cfe', ease: 'power2.out' })
      gsap.to(textRef.value, { color: '#004cfe', duration: 0.3 })
    })
    el.addEventListener('mousedown', () => {
      gsap.to(cursorRef.value, { scale: 0.5, duration: 0.15, ease: 'power1.inOut' })
    })
    el.addEventListener('mouseup', () => {
      gsap.to(cursorRef.value, { scale: 1.4, duration: 0.2, ease: 'power2.out' })
    })
  })
})

onBeforeUnmount(() => {
  if (handleMouseMove) document.body.removeEventListener('mousemove', handleMouseMove)
  gsap.ticker.remove(loop)
})
</script>

<template>
  <Header></Header>
  <RouterView />
  <div ref="cursorRef" class="cursor">
    <div ref="textRef" class="inside-text">ART</div>
  </div>
</template>

<style lang="scss">
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-color: #004cfe;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
  will-change: width, height, transform,  border-color;
  z-index: 999;
  pointer-events: none;
}

.inside-text {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #004cfe;
  pointer-events: none;
}

@media (max-width: 880px) {
  .cursor { display: none; }
}
</style>