<template>
  <div class="card">

    <div class="points_wrapper">
      <div class="point" v-for="n in 10" :key="n"></div>
    </div>

    <div class="content">
      <div class="liquid-bg"></div>
      <div class="main-box2">
        <h1 class="main-tit">ART WORK</h1>
        <div class="main-txt">
          <div class="cutxt">{{ t('home.picasso') }}</div>
          <div>- {{ t('home.picassofull') }} -</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

</script>

<style scoped lang="scss">
.card {
  --border: 5px;
  --rounded: 20px;
  --h-card: 500px;
  margin: 0 auto;
  width: 80%;
  height: var(--h-card);
  border-radius: var(--rounded);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--border);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: 0.5s;
  border-radius: calc(var(--rounded) - 4px);
  background: rgba(255, 255, 255, 0.0);
  backdrop-filter: blur(3px) brightness(0.9) contrast(120%) saturate(180%);
  -webkit-backdrop-filter: blur(3px)  brightness(0.9) contrast(120%) saturate(180%);
  z-index: 1;
}
.card:hover {
  width: 90%;
  height: 530px;
  backdrop-filter: blur(8px) brightness(0.95) contrast(120%) saturate(180%);
  -webkit-backdrop-filter: blur(8px) brightness(0.95) contrast(120%) saturate(180%);
}
.card::before{ 
  content: "";
  position: absolute;
  inset: 0;
  padding: 1.5px;
  border-radius: inherit;
  background: linear-gradient(145deg, #ffffff8d 0%, #a0a0a05b 50%, #ffffff68 100%);
  filter: blur(50px);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
} 
.card:hover::before{ 
  background: linear-gradient(145deg, #ffffffcd 0%, #a0a0a05b 50%, #ffffffc6 100%);
}
.card::after { 
  content: "";
  position: absolute;
  filter: blur(24px); 
  opacity: 0.7; 
  animation-delay: 0.5s; 
}
.liquid-bg {
  position: absolute;

}
.content {
  position: absolute;
  inset: var(--border);
  border-radius: calc(var(--rounded) - 4px);
  overflow: hidden;
  z-index: 7;
}

/* 텍스트 */
.main-box2 {
  position: relative;
  z-index: 2; /* 필터 위 */
  display: grid;
  height: 100%;
  padding: 20px;
  place-items: center;
}
.main-tit {
  font-size: 7vw;
  color: #fff;
  text-shadow: 0 0 15px rgba(0,0,0,0.5);
}
.main-txt {
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.6);
}

.points_wrapper {
  position: absolute;
  overflow: hidden;
  width: calc(100% - (var(--border) * 4));
  height: calc(100% - (var(--border) * 4));
  border-radius: calc(var(--rounded) - 4px);
  pointer-events: none;
  z-index: 80;
}

.point {
  --sz-point: 4px;
  position: absolute;
  top: -8px;
  width: var(--sz-point);
  height: var(--sz-point);
  background-color: #f8f8f8;
  border-radius: 9999px;
  animation: floating-points infinite ease-in-out;
}

.point:nth-child(1) { left: 10%; animation-duration: 2.35s; animation-delay: 0.2s; opacity: 1; }
.point:nth-child(2) { left: 30%; animation-duration: 2.5s; animation-delay: 0.5s; opacity: 0.7; }
.point:nth-child(3) { left: 25%; animation-duration: 2.2s; animation-delay: 0.1s; opacity: 0.8; }
.point:nth-child(4) { left: 44%; animation-duration: 2.05s; opacity: 0.6; }
.point:nth-child(5) { left: 50%; animation-duration: 1.9s; opacity: 1; }
.point:nth-child(6) { left: 75%; animation-duration: 1.5s; animation-delay: 1.5s; opacity: 0.5; }
.point:nth-child(7) { left: 88%; animation-duration: 2.2s; animation-delay: 0.2s; opacity: 0.9; }
.point:nth-child(8) { left: 58%; animation-duration: 2.25s; animation-delay: 0.2s; opacity: 0.8; }
.point:nth-child(9) { left: 98%; animation-duration: 2.6s; animation-delay: 0.1s; opacity: 0.6; }
.point:nth-child(10){ left: 65%; animation-duration: 2.5s; animation-delay: 0.2s; opacity: 1; }

@keyframes floating-points {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translate(calc(var(--h-card) / 1.75), calc(var(--h-card) / 1.5));
  }
}

@keyframes diagonalShine {
  0% {
    transform: translate(-150%, -150%) rotate(45deg);
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translate(150%, 150%) rotate(45deg);
    opacity: 0.2;
  }
}
.cutxt {
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>