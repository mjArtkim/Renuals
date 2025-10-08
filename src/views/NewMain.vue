<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>

<template>
  <div class="new">
    <div class="new__container">
      <div class="new__img"></div>
      <div class="new__main">
        <div class="new__minitit">BASED IN SOUTH KOREA</div>
        <h1 class="new__tit">CREATIVE DESIGNER</h1>
      </div>
      <div class="new__subbox">
        <h4 class="new__name">MINJI KIM</h4>
        <ul class="new__sublist">
          <li>DESIGN WORK</li>
          <li>WEB DESIGN[UI/UX]</li>
          <li>WEB DEVELOPMENT</li>
        </ul>
      </div>
      <div class="new__minitxt">
        {{ t('new.maintxt') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.new {
  height: 100%;
  width: 100%;
  font-family:'GmarketSans';

  &__container{
    position: relative;
    display: grid;
    grid-template-areas: 
    ". . ."
    "main main main"
    ". . ."
    ". sub sub"
    ". . mini";
  }
  &__img{
    position: absolute;
    top: 100px;
    width: 100%;
    height: calc(100vh - 100px);
    background-image: url('@/assets/img/new/main_shot.webp');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__main{
    position: relative;
    padding: 15% 50px 0;
    width: 100%;
    --font-scale: 0.08; 
    grid-area: main;
  }
  &__minitit{
    text-align: right;
    letter-spacing: 0.8em;
    font-size: calc(var(--font-scale) * 14vw);
    padding-right: 5px;
  }
  &__tit{
    text-align: center;
    font-size: calc(var(--font-scale) * 94vw);
    font-weight: 800;
    color: #000;
    mix-blend-mode: overlay;
  }
  &__subbox{
    background-color: #fff;
    grid-area: sub;
    --font-scale: 0.08;
  }
  &__name{
    font-size: calc(var(--font-scale) * 20vw);
  }
  &__sublist{}
  &__minitxt{
    grid-area: mini;
  }
}
</style>