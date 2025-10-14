<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const footerName = document.querySelector(".footer__name")
  let isTracking = window.innerWidth > 880
  const handleMouseMove = (evt) => {

    if (!isTracking) return
    const mouseX = evt.clientX
    const mouseY = evt.clientY
    const rect = document.querySelector('.footer__name').getBoundingClientRect()
    gsap.set(".cursor", {
      x: mouseX - rect.left,
      y: mouseY - rect.top,
    })
    gsap.to(".shape", {
      x: mouseX - rect.left,
      y: mouseY - rect.top,
      stagger: -0.1
    })
  }
  const handleResize = () => {
    isTracking = window.innerWidth > 880
  }
  document.body.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("resize", handleResize)

  onUnmounted(() => {
    document.body.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("resize", handleResize)
  })
})
</script>
<template>
  <div class="footer">
    <div class="footer__top">
      <ul class="footer__link">
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">WORKS</a></li>
      </ul>
      <div class="footer__mail">
        <div class="footer__frs">
          <a href="mailto:mjtwins1@gmail.com">
            <div>mjtwins1@naver.com</div>
          </a>
        </div>
        <div class="footer__sec">FEEL FREE TO REACH OUT ANYTIME</div>
      </div>
    </div>
    <div class="footer__name">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="content">
        <h1>MIN JI KIM</h1>
      </div>
      <div class="cursor"></div>
    </div>
    <div class="footer__copy">&copy; 2025 MINJI KIM. All right reserved. </div>
  </div>
</template>

<style lang="scss">
.footer {
  position: relative;
  overflow: hidden;
  width: 100%;
  --font-scale: 0.08;
  padding: 0 50px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  &__link {
    display: flex;
    gap: 0 20px;
    font-size: 16px;
  }
  &__mail {
    text-align: right;
    font-size: clamp(20px, calc(var(--font-scale) * 26vw), 40px);
    font-weight: 600;
  }
  &__frs{
    a {
      div{
        &:hover {
          color: #707070;
        }
      }
    }
  }
  &__name {
    position: relative;
    height: 300px;
    width: 100vw;
    background: #000;
    overflow: hidden;
    h1{
      position: relative;
      z-index: 10;
      display: inline-block;
      text-align: center;
      font-size: clamp(30px, calc(var(--font-scale) * 240vw), 300px);
      font-weight: 900;
      line-height: 1;
    }
  }
  &__copy {
    position: relative;
  }
}
.shape-1 { --size: 650px; background: #005ffe; }
.shape-2 { --size: 440px; background: #0087fe; }
.shape-3 { --size: 270px; background: #adcbff; }
.shape {
  position: absolute;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  will-change: transform;
  transform: translate(-50%, -50%);
}
.content {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
  mix-blend-mode: screen;
  justify-content: center;
}
.cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 5px solid #005ffe;
  border-radius: 50%;
  pointer-events: none;
  user-select: none;
  will-change: transform;
  z-index: 10000;
  transform: translate(-50%, -50%); 
  margin: 0; 
  mix-blend-mode: hard-light;
}
::selection {
  color: #005ffe;
  background: #dde7ff;
}

@media (max-width: 880px) {
  .cursor {display: none;}
  .shape{display: none;}
}
@media (max-width: 768px) {
  .footer {
    padding: 30px;
    &__top {
      display: block;
    }
    &__link {
      display: flex;
      padding: 30px 0;
    }
    &__name {
      height: 570px;
      width: 100%;
      h1{
        display: block;
        text-align: left;
        font-size: clamp(170px, calc(var(--font-scale) * 240vw), 300px);
        font-weight: 900;
        line-height: 1;
      }
    }
  }
}
</style>