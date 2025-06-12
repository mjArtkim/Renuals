<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
  <div class="card-grid">
      <div class="cards" data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
        <img src="@/assets/img/work_01.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.thirdparty') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        <img src="@/assets/img/work_02.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.incon') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
        <img src="@/assets/img/work_03.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.sam') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
        <img src="@/assets/img/work_04.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.mou') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
        <img src="@/assets/img/work_05.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.backc') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="700" data-aos-duration="500">
        <img src="@/assets/img/work_06.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.song') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="800" data-aos-duration="500">
        <img src="@/assets/img/work_07.png">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.tip') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="900" data-aos-duration="500">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.apjms') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
      <div class="cards" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="00">
        <div class="cards__content">
          <p class="cards__title">{{ t('menu.dsawrd') }}</p>
          <p class="cards__description"></p>
        </div>
      </div>
    </div>
</template>


<style>
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.cards {
  position: relative;
  width: 400px;
  height: 200px;
  background: rgba( 255, 255, 255, 0.25 );
  border-radius: 10px;
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.cards img {
  fill: #333;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.cards:hover {
  width: 390px;
  height: 190px;
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cards__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.cards:hover .cards__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

.cards__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.cards__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

.cards:hover img {
  transform: rotate(-5deg) scale(1.1);

}

@media (max-width: 1200px) {
  .card-grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

</style>