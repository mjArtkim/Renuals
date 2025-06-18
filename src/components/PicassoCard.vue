<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="card">
    <div class="points_wrapper">
      <div class="point" v-for="n in 10" :key="n"></div>
    </div>

    <div class="content">
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

<style scoped lang="scss">
.card {
  --border: 5px;
  --rounded: 10px;
  --quantity: 12;
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
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.3s ease-in-out;
}
.card:hover {
  width: 90%;
  --h-card: 550px;
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  background-color: rgba(0, 0, 0, 0.3);
}
.card::before,
.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  will-change: auto;
  --size: calc(100%);
  width: var(--size);
  height: var(--size);
  border-radius: var(--rounded);
  background-size: 400% 400%;
}

.card::after {
  filter: blur(24px);
  opacity: 0.7;
  animation-delay: 0.5s;
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

.content {
  position: absolute;
  width: calc(100% - (var(--border) * 4));
  height: calc(100% - (var(--border) * 4));
  border-radius: calc(var(--rounded) - 4px);
  border: 3px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  z-index: 7;
}
.main-box2 {
  display: grid;
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-items: center;
  align-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.main-box2::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 40%,
    rgba(255, 255, 255, 0.7) 50%,
    transparent 60%
  );
  animation: diagonalShine 4s linear infinite;
  pointer-events: none;
  z-index: 0;
}
.main-tit {
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5) ;
  font-size: 7vw;
  align-self: end !important;
  @media (max-width: 768px) {
    font-size: 14vw;
    text-align: center;
  }
}
.main-txt {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  justify-content: end;
  padding: 0 10px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 16px;
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