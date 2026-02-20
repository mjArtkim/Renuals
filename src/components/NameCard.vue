<template>
  <div class="parent">
    <div class="name-card">
      <div class="glass"></div>
      <div class="card-txt">
        <span class="card-tit">{{ t('home.name') }}</span>
        <span class="card-in-txt">{{ t('home.descript') }}</span>
      </div>
      <div class="bottom">
        <div class="social-buttons-container">
          <button class="social-button">
            <a href="https://www.instagram.com/art_portfoilo/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </button>
          <button class="social-button">
            <a href="https://github.com/mjArtkim" target="_blank"><img src="@/assets/img/github_mark.png"></a>
          </button>
          <button class="social-button">
            <a href="https://www.behance.net/h201826287b817" target="_blank"><i class="fa-brands fa-behance"></i></a>
          </button>
          <button class="social-button">
            <a href="mailto:mjtwins1@naver.com"><i class="fa-solid fa-envelope"></i></a>
          </button>
        </div>
        <!-- <div class="view-more">
          <router-link to="/other" class="view-more-button">View More</router-link>
          <i class="fa-solid fa-arrow-right"></i>
        </div> -->
      </div>
      <div class="logo">
        <span class="circle circle1"></span>
        <span class="circle circle2"></span>
        <span class="circle circle3"></span>
        <span class="circle circle4"></span>
        <span class="circle circle5">
          
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>

<style scoped lang="scss">

.parent {
  width: 320px;
  height: 300px;
  perspective: 1000px;
}

.name-card {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(222, 236, 255) 0%, rgb(92, 152, 255) 100%);
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  box-shadow: rgba(71, 48, 5, 0) 40px 50px 25px -40px, rgba(71, 46, 5, 0.2) 0px 25px 25px -5px;
}

.glass {
  transform-style: preserve-3d;
  position: absolute;
  inset: 8px;
  border-radius: 55px;
  border-top-right-radius: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
  transform: translate3d(0px, 0px, 25px);
  -webkit-transform: translate3d(0px, 0px, 25px);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.5s ease-in-out;
}

.card-txt {
  padding: 100px 60px 0px 30px;
  transform: translate3d(0, 0, 26px);
  -webkit-transform: translate3d(0, 0, 26px);
  .card-tit {
    display: block;
    color: #000000;
    font-weight: 900;
    font-size: 20px;
  }
  .card-in-txt {
    display: block;
    color: rgba(0, 0, 0, 0.765);
    font-size: 15px;
    margin-top: 20px;
  }
}

.bottom {
  padding: 10px;
  transform-style: preserve-3d;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate3d(0, 0, 26px);
  -webkit-transform: translate3d(0, 0, 26px);

  .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
    &:hover {  
      transform: translate3d(0, 0, 10px);
      -webkit-transform: translate3d(0, 0, 10px);
    }
    .view-more-button {
      background: none;
      border: none;
      color: #000000;
      font-weight: bolder;
      font-size: 12px;
      margin-right: 5px;
    }
    i {
      fill: none;
      max-height: 15px;
      font-size: 15px;
      color: #000000;
    }
  }
}

.bottom .social-buttons-container {
  display: flex;
  gap: 10px;
  transform-style: preserve-3d;
}

.bottom .social-buttons-container .social-button {
  width: 30px;
  height: 30px;
  aspect-ratio: 1;
  padding: 5px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  img {
    width: 100%;
  }
}

.bottom .social-buttons-container .social-button:first-child {
  transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
}

.bottom .social-buttons-container .social-button:nth-child(2) {
  transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
}

.bottom .social-buttons-container .social-button:nth-child(3) {
  transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
}

.bottom .social-buttons-container .social-button:nth-child(4) {
  transition: transform 0.2s ease-in-out 1s, box-shadow 0.2s ease-in-out 1s;
}

.bottom .social-buttons-container .social-button:hover {
  background: linear-gradient(135deg,rgb(222, 236, 255) 0%, rgb(92, 152, 255) 100%);
}


.bottom .social-buttons-container .social-button:active {
  background: rgb(255, 234, 0);
}


.logo {
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
}

.logo .circle {
  display: block;
  position: absolute;
  aspect-ratio: 1;

  top: 0;
  right: 0;
  box-shadow: rgba(100, 111, 100, 0.2) -10px 10px 20px 0px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: linear-gradient(135deg,rgba(222, 236, 255, 0.2) 0%, rgba(92, 152, 255, 0.2) 100%);
  transition: all 0.5s ease-in-out;
}

.logo .circle1 {
  width: 170px;
  transform: translate3d(0, 0, 20px);
  -webkit-transform: translate3d(0, 0, 20px);
  border-radius: 50px;
  top: 8px;
  right: 8px;
}

.logo .circle2 {
  width: 140px;
  transform: translate3d(0, 0, 40px);
  -webkit-transform: translate3d(0, 0, 40px);
  top: 10px;
  right: 10px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  transition-delay: 0.4s;
  border-radius: 50px;
}

.logo .circle3 {
  width: 110px;
  transform: translate3d(0, 0, 60px);
  -webkit-transform: translate3d(0, 0, 60px);
  top: 17px;
  right: 17px;
  transition-delay: 0.8s;
  border-radius: 50px;
}

.logo .circle4 {
  width: 80px;
  transform: translate3d(0, 0, 80px);
  -webkit-transform: translate3d(0, 0, 80px);
  top: 23px;
  right: 23px;
  transition-delay: 1.2s;
  border-radius: 50px;
}

.logo .circle5 {
  width: 50px;
  transform: translate3d(0, 0, 100px);
  -webkit-transform: translate3d(0, 0, 100px);
  top: 30px;
  right: 30px;
  display: grid;
  place-content: center;
  transition-delay: 1.6s;
  border-radius: 30px;
}

.logo .circle5 img {
  width: 20px;
}

.parent:hover .name-card {
  transform: rotate3d(1, 1, 0, 30deg);
  -webkit-transform: rotate3d(1, 1, 0, 30deg);
  box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
}

.parent:hover .name-card .bottom .social-buttons-container .social-button {
  transform: translate3d(0, 0, 50px);
  -webkit-transform: translate3d(0, 0, 50px);
  box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
}

.parent:hover .name-card .logo .circle2 {
  transform: translate3d(0, 0, 60px);
  -webkit-transform: translate3d(0, 0, 60px);
}

.parent:hover .name-card .logo .circle3 {
  transform: translate3d(0, 0, 80px);
  -webkit-transform: translate3d(0, 0, 80px);
}

.parent:hover .name-card .logo .circle4 {
  transform: translate3d(0, 0, 100px);
  -webkit-transform: translate3d(0, 0, 100px);
}

.parent:hover .name-card .logo .circle5 {
  transform: translate3d(0, 0, 120px);
  -webkit-transform: translate3d(0, 0, 120px);
}
</style>
