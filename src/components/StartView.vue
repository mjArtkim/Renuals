<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  // 텍스트 패널 애니메이션 설정
  gsap.set(".slider.center.sec6-txt-wrap > div", {
    zIndex: (i, target, targets) => targets.length - i,
    opacity: 0,
  });

  const texts = gsap.utils.toArray(".slider.center.sec6-txt-wrap > div");

  texts.forEach((text, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.sec6",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight * i),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(text, { duration: 0.33, opacity: 1, y: "50%" })
      .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
  });

  // 전체 섹션 고정
  ScrollTrigger.create({
    trigger: ".section.sec6",
    scroller: ".scroller",
    scrub: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((texts.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,
  });
});
</script>

<template>
  <section class="section sec6">
    <div class="sec6-wrap scroller">
        <div class="sec6-inner">
            <h2>My Skill</h2>
        </div>
        <div class="slider center sec6-txt-wrap">
            <div class="sec6-html">
                하이퍼 텍스트 마크업 언어(Hyper Text Markup Language)<br>
                습득을 위해 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미와<br>
                링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 나타낼 수 있습니다.
            </div>
            <div class="sec6-js">
                다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있는<br>
                자바스크립트와 제이쿼리 문법을 함께 사용할 수 있습니다.
            </div>
            <div class="sec6-css">
                캐스케이딩 스타일 시트(Cascading Style Sheets)<br>
                마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어<br>
                레이아웃과 스타일을 정의할 때의 자유도 높게 사용할 수 있습니다.
            </div>
            <div class="sec6-ps">
                PhotoShop은 현재 10년이상 사용중인 툴로서<br>
                대부분의 작업을 이 툴로 돌렸다해도 <br>
                과언이 아닐정도로 자주 사용하는 툴입니다.                       
            </div>
            <div class="sec6-ai">
                백터 방식으로 이미지를 그려내고 추출 할 수 있습니다.<br>
                어도비 포토샵을 사용하며 함께 보조프로그램 용으로 사용하였습니다.
            </div>
            <div class="sec6-pr">
                프리미어 프로는 워낙 다루기 쉽고 직관적으로 되어있는 프로그램이라고 생각합니다.<br>
                처음 접했을때 어렵지 않게 사용했으며, 자막을 입히는 작업이나 편집, 오디오 삽입 등을 <br>
                할 때 주로 사용하고 있습니다.<br>
                간단한 편집을 해주고 있는 유투브 채널<a href="https://www.youtube.com/user/kjsjoon/featured"><strong>JS장기투자</strong></a>
            </div>
            <div class="sec6-ae">
                에프터이펙트는 강의를 듣고 사용하게 되었습니다.<br>
                무거운 프로그램이라 많이 다루고 있지는 않지만<br>
                효과를 다이나믹하게 넣고 싶을 때 주로 사용했습니다.
                <a href="https://youtu.be/Tw3juO1rTLk"><strong>장난스러운 편집작업</strong></a>
            </div>
            <div class="sec6-xd">
                XD는 모바일 디자인작업의 세계를 처음으로 열어주었다 라고 할 정도로<br>
                저에게 색다른 경험을 준 프로그램입니다.<br>
                현재에도 모바일 디자인을 할 때면 xd로 작업하여 추출하곤 합니다.
            </div>
        </div>
        <div class="slider center-nav sec6-nav-wrap clearfix">
            <div>
                <img src="@/assets/img/skill_ht.png" alt="문서">
                <span class="counter">100</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_js.png" alt="자바스크립트">
                <span class="counter">85</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_css.png" alt="스타일시트">
                <span class="counter">95</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_ps.png" alt="photoshop">
                <span class="counter">100</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_ai.png" alt="일러스트">
                <span class="counter">90</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_pr.png" alt="프리미어프로">
                <span class="counter">90</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_ae.png" alt="에프터이펙트">
                <span class="counter">90</span>
                <span>%</span>
            </div>
            <div>
                <img src="@/assets/img/skill_xd.png" alt="엑스디">
                <span class="counter">100</span>
                <span>%</span>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.sec6-wrap.scroller {
  height: 100vh;
  overflow: auto;
}
</style>