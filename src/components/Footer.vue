<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const footerName = document.querySelector(".footer__name")
  if (!footerName) return  // 요소가 없으면 바로 종료 (안전)
  
  let isTracking = window.innerWidth > 880

  const handleMouseMove = (evt) => {
    if (!isTracking) return

const footerName = document.querySelector('.footer__name')
if (!footerName) return // 요소 없으면 안전하게 종료

const shapes = document.querySelectorAll('.shape')
if (!shapes.length) return // shape이 없을 때도 종료

const rect = footerName.getBoundingClientRect()
const mouseX = evt.clientX
const mouseY = evt.clientY

gsap.to(shapes, {
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

  // 🔥 라우트 이동 또는 컴포넌트 해제 시 반드시 정리
  onUnmounted(() => {
    document.body.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("resize", handleResize)
    gsap.killTweensOf(".shape") // 애니메이션까지 완전히 정리
  })
})
</script>
<template>
  <div class="footer">
    
    <div class="footer__name">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="content">
        <div class="footer__top">
          <!-- <ul class="footer__link">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">WORKS</a></li>
          </ul> -->
          <div class="footer__mail">
            <div class="footer__frs">
              <a href="mailto:mjtwins1@gmail.com">
                <div>mjtwins1@naver.com</div>
              </a>
            </div>
            <div class="footer__sec">FEEL FREE TO REACH OUT ANYTIME</div>
          </div>
        </div>
        <h1>MIN JI KIM</h1>
        <div class="footer__copy">&copy; 2026 MINJI KIM. All right reserved. </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  position: relative;
  overflow: hidden;
  width: 100%;
  --font-scale: 0.08;


  &__top {
    display: flex;
    justify-content: end;
    align-items: center;
    z-index: 15;
    padding: 0 50px;
  }
  &__link {
    display: flex;
    gap: 0 20px;
    font-size: 16px;
    z-index: 15;
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
    height: 500px;
    width: 100%;
    background: #000;
    overflow: hidden;
    h1{
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(30px, calc(var(--font-scale) * 240vw), 300px);
      font-weight: 900;
      line-height: 1;
    }
  }
  &__copy {
    position: relative;
    padding-left: 30px;
  }
}
.shape-1 { --size: 550px; background: #005ffe; }
.shape-2 { --size: 340px; background: #0087fe; }
.shape-3 { --size: 170px; background: #adcbff; }
.shape {
  position: absolute;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  will-change: transform;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  backface-visibility: hidden;
}
.content {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
  mix-blend-mode: screen;
}

::selection {
  color: #005ffe;
  background: #dde7ff;
}

@media (max-width: 768px) {
  .footer {
    margin-top: 20px;
    padding: 30px;
    &__top {
      display: block;
      padding: 0;
    }
    &__link {
      display: flex;
      padding: 30px 0;
    }
    &__name {
      height: 750px;
      width: 100%;
      background-color: transparent;
      h1{
        display: block;
        text-align: left;
        font-size: clamp(170px, calc(var(--font-scale) * 240vw), 300px);
        font-weight: 900;
        line-height: 1;
      }
    }
    &__copy {
      padding-left: 10px;
    }
  }
}
</style>