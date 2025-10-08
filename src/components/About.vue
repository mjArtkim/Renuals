<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <div class="about">
    <div class="about__mail">
      <div class="about__ul">
        <div class="about__frs">
          <a href="mailto:mjtwins1@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            <div>mjtwins1@gmail.com</div>
          </a>
        </div>
        <div class="about__sec">FEEL FREE TO REACH OUT ANYTIME</div>
      </div>
    </div>
    <h1 class="about__tit">ABOUT</h1>
    <ol class="about__txt">
      <li class="about__txt1">"{{ t('new.abouttit') }}"</li>
      <li class="about__txt2">{{ t('new.abouttxt') }}</li>
    </ol>
  </div>
</template>
<style lang="scss">
.about {
  width: 100%;
  --font-scale: 0.08;
  &__mail {
    margin: 10% 10% 5%;
    font-size: clamp(14px, calc(var(--font-scale) * 17vw), 20px);
  }
  &__ul {
    width: 400px;
    text-align: center;
  }
  &__frs {
    font-weight: bold;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        margin: 0 5px 2px;
      }
    }
  }
  &__tit{
    font-family:'GmarketSans';
    font-size: clamp(50px, calc(var(--font-scale) * 94vw), 150px);
    text-align: center;
  }
  &__txt{
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  &__txt1{
    padding: 0 20%;
    font-size: clamp(24px, calc(var(--font-scale) * 50vw), 70px);
    font-weight: 800;
  }
  &__txt2{
    padding: 0 10%;
    font-size: clamp(20px, calc(var(--font-scale) * 45vw), 60px);
    font-weight: 700;
    color: #606060;
  }
}
</style>