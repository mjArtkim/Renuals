<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Observer)

const page = ref(null)
const currentPanel = ref(0)
const panelLabels = ['INTRO', 'OVERVIEW', 'THIRD PARTY', 'HALŌ', 'TEAM', 'CONNECTED', 'MOBILE', 'FANMADE']
let panels = []
let animation
let observer
let context
let animating = false
let boundaryReady = true
let motionPreference

function showPanel(index, direction = 1) {
  if (animating || !panels.length) return
  const next = gsap.utils.wrap(0, panels.length, index)
  if (next === currentPanel.value) return
  const previous = panels[currentPanel.value]
  const incoming = panels[next]
  const focusWasInside = previous.contains(document.activeElement)
  animating = true
  boundaryReady = false
  incoming.scrollTop = direction > 0 ? 0 : incoming.scrollHeight - incoming.clientHeight
  incoming.inert = false
  incoming.removeAttribute('aria-hidden')
  previous.inert = true
  previous.setAttribute('aria-hidden', 'true')
  gsap.set(incoming, { autoAlpha: 1, zIndex: 2, yPercent: direction * 100 })
  const finish = () => {
    gsap.set(previous, { autoAlpha: 0, yPercent: 0, zIndex: 0 })
    gsap.set(incoming, { zIndex: 1 })
    currentPanel.value = next
    animating = false
    if (focusWasInside) incoming.querySelector('h1, h2')?.focus({ preventScroll: true })
  }
  animation = gsap.timeline({ defaults: { duration: motionPreference.matches ? 0 : 0.8, ease: 'power3.inOut' }, onComplete: finish })
    .to(previous, { yPercent: -direction * 25, autoAlpha: 0.4 }, 0)
    .to(incoming, { yPercent: 0 }, 0)
}

function moveContent(delta) {
  if (animating || Math.abs(delta) < 1) return
  const panel = panels[currentPanel.value]
  const maximum = Math.max(0, panel.scrollHeight - panel.clientHeight)
  const atBoundary = delta > 0 ? panel.scrollTop >= maximum - 2 : panel.scrollTop <= 2
  if (!atBoundary) {
    panel.scrollTop = gsap.utils.clamp(0, maximum, panel.scrollTop + delta)
    boundaryReady = false
  } else if (boundaryReady && Math.abs(delta) >= 8) {
    showPanel(currentPanel.value + (delta > 0 ? 1 : -1), delta > 0 ? 1 : -1)
  }
}

function handleKey(event) {
  if (event.target.closest('a, button, input, textarea, select, [contenteditable]')) return
  const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? (event.shiftKey ? -1 : 1) : ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0
  if (direction) {
    event.preventDefault()
    boundaryReady = true
    moveContent(direction * (event.key.startsWith('Arrow') ? 80 : panels[currentPanel.value].clientHeight * 0.8))
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault()
    showPanel(event.key === 'Home' ? 0 : panels.length - 1, event.key === 'Home' ? -1 : 1)
  }
}

onMounted(() => {
  panels = [...page.value.querySelectorAll('.section')]
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  context = gsap.context(() => {
    panels.forEach((panel, index) => {
      panel.inert = index !== 0
      if (index !== 0) panel.setAttribute('aria-hidden', 'true')
      panel.querySelector('h1, h2')?.setAttribute('tabindex', '-1')
    })
    gsap.set(panels, { autoAlpha: 0, zIndex: 0 })
    gsap.set(panels[0], { autoAlpha: 1, zIndex: 1 })
    observer = Observer.create({
      target: page.value,
      type: 'wheel,touch',
      preventDefault: true,
      allowClicks: true,
      ignoreCheck: event => event.ctrlKey || event.touches?.length > 1,
      lockAxis: true,
      ignore: '[data-panel-controls]',
      onPress: () => { boundaryReady = true },
      onChangeY: self => {
        // Wheel and finger movement have opposite directions.
        if (self.event.ctrlKey || self.event.touches?.length > 1) return
        moveContent(self.event.type === 'wheel' ? self.deltaY : -self.deltaY)
      },
      onStopDelay: 0.25,
      onStop: () => { boundaryReady = true },
    })
  }, page.value)
})

onBeforeUnmount(() => {
  observer?.kill()
  animation?.kill()
  context?.revert()
})

import third from '@/assets/img/djs/381ea.png'
import halo from '@/assets/img/djs/03650.png'
import team from '@/assets/img/djs/fffa4.png'
import tour from '@/assets/img/djs/48ec8.png'
import artist from '@/assets/img/djs/ef386.png'
import thirdMobile from '@/assets/img/djs/0c80a.png'
import haloMobile from '@/assets/img/djs/7d2a8.png'
import teamMobile from '@/assets/img/djs/e489e.png'

const projects = [
  { name: 'THIRD PARTY', description: '아티스트 중심의 음악 · 투어 아카이브', stack: 'Vue · Firebase · SCSS · Vercel', url: 'www.djthirdparty.com', image: third, mobile: thirdMobile },
  { name: 'HALŌ', description: '공연의 분위기와 투어 · 영상을 담는 공간', stack: 'Vue · TypeScript · Tailwind CSS · SCSS', url: 'www.beparthalo.com', image: halo, mobile: haloMobile },
  { name: 'TEAM PROGRESSIVE HOUSE', description: '여러 아티스트와 음악 · 영상을 연결하는 허브', stack: 'Vue · TypeScript · Tailwind CSS · SCSS', url: 'prog.djthirdparty.com', image: team, mobile: teamMobile },
]
</script>

<template>
  <main ref="page" class="djs-detail panel-deck" @keydown="handleKey">
    <nav class="panel-controls" data-panel-controls aria-label="연작 섹션 이동">
      <RouterLink to="/" class="back-link">포트폴리오 ↗</RouterLink>
      <div class="panel-position" aria-live="polite" aria-atomic="true">{{ String(currentPanel + 1).padStart(2, '0') }} / 08 <span>{{ panelLabels[currentPanel] }}</span></div>
      <div class="panel-buttons">
        <button type="button" aria-label="이전 섹션" @click="showPanel(currentPanel - 1, -1)">↑</button>
        <button type="button" aria-label="다음 섹션" @click="showPanel(currentPanel + 1, 1)">↓</button>
      </div>
    </nav>
    <section class="section cover" aria-labelledby="cover-title">
      <div class="section-inner">
        <h1 id="cover-title">FOR THE MUSIC.<br />BUILT FOR THE FANS.</h1>
        <div class="cover-intro">
          <h2>음악을 좋아하는 마음을, 직접 만드는 웹 경험으로.</h2>
          <p>Third Party · HALŌ · Team Progressive House 세 개의 실제 운영 사이트로 이어지는 개인 웹 연작. 기획과 디자인, 퍼블리싱과 프론트엔드<br class="desktop-break" /> 구현을 연결했습니다.</p>
        </div>
        <div class="previews">
          <figure v-for="(project, index) in projects" :key="project.name">
            <a :href="`https://${project.url}`" target="_blank" rel="noopener noreferrer" :aria-label="`${project.name} 사이트 새 창에서 보기`" class="preview-image" :class="{ 'halo-preview': index === 1 }">
              <img :src="project.image" :alt="`${project.name} 메인 화면`" />
            </a>
            <figcaption>{{ project.name }}</figcaption>
          </figure>
        </div>
        <p class="note">INDEPENDENT FANMADE PROJECTS — 아티스트·소속사와 무관한 비공식 팬 프로젝트</p>
      </div>
    </section>

    <section class="section overview light" aria-labelledby="overview-title">
      <div class="section-inner">
        <h2 id="overview-title">하나의 음악 취향 세 가지 웹의 방향.</h2>
        <p class="lead">아티스트의 음악을 모으는 공간에서 시작해, 공연의 분위기를 담고 장르의 아티스트들을 연결하는 연작으로 확장했습니다.</p>
        <ol class="project-list">
          <li v-for="(project, index) in projects" :key="project.name">
            <span class="number">0{{ index + 1 }}</span>
            <div class="project-name"><h3>{{ project.name }}</h3><p>{{ project.description }}</p></div>
            <div class="project-meta"><p>{{ project.stack }}</p><a :href="`https://${project.url}`" target="_blank" rel="noopener noreferrer">{{ project.url }}</a></div>
          </li>
        </ol>
        <p class="note">공통: 개인 작업 · 실제 서비스 운영 · PC / Mobile 화면 구성 · SCSS 활용</p>
      </div>
    </section>

    <section class="section third" aria-labelledby="third-title">
      <div class="section-inner">
        <h2 id="third-title" class="project-title">THIRD PARTY</h2>
        <div class="third-copy">
          <h3>음악과 투어 정보를 한곳에서.</h3>
          <p>음원 아카이브와 투어 일정을 중심으로 아티스트의 콘텐츠를 탐색하는 팬메이드 사이트입니다.</p>
          <p class="stack">Vue · Firebase · SCSS / Deployment / Vercel</p>
          <p>운영을 위한 간단한 어드민 기능도 함께 구현했습니다.</p>
          <a href="https://www.djthirdparty.com" target="_blank" rel="noopener noreferrer">www.djthirdparty.com ↗</a>
        </div>
        <div class="capture third-capture"><img :src="third" alt="Third Party 메인 · 음악 콘텐츠 화면" loading="lazy" /></div>
        <p class="note">기획 · 디자인 · 퍼블리싱 · Vue 구현 · Firebase 활용 · Vercel 배포 · 간단한 어드민</p>
      </div>
    </section>

    <section class="section halo" aria-labelledby="halo-title">
      <div class="section-inner">
        <h2 id="halo-title" class="project-title">HALŌ</h2>
        <div class="project-layout halo-layout">
          <div class="captures halo-captures">
            <div class="capture halo-main"><img :src="halo" alt="HALŌ 공연 메인 화면" loading="lazy" /></div>
            <div class="capture halo-tour"><img :src="tour" alt="HALŌ 투어 일정 모달 화면" loading="lazy" /></div>
          </div>
          <div class="project-copy">
            <h3>공연의 몰입감을 웹의 분위기로.</h3>
            <p>공연 사진과 영상, 투어 정보가 이어지는 팬메이드 웹사이트입니다.</p>
            <p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p>
            <hr />
            <h4>연작의 연결점</h4>
            <p class="accent">투어 데이터는 Third Party 사이트의 데이터를 사용합니다.</p>
            <a href="https://www.beparthalo.com" target="_blank" rel="noopener noreferrer">www.beparthalo.com ↗</a>
          </div>
        </div>
        <p class="note">기획 · 디자인 · 퍼블리싱 · Vue / TypeScript 구현 · Third Party 투어 데이터 활용</p>
      </div>
    </section>

    <section class="section team" aria-labelledby="team-title">
      <div class="section-inner">
        <h2 id="team-title" class="project-title">TEAM<br />PROGRESSIVE HOUSE</h2>
        <div class="project-layout">
          <div class="captures">
            <div class="capture team-main"><img :src="team" alt="Team Progressive House 아티스트 메인 화면" loading="lazy" /></div>
            <div class="capture team-artist"><img :src="artist" alt="Matisse &amp; Sadko 아티스트 상세 모달" loading="lazy" /></div>
          </div>
          <div class="project-copy">
            <h3>취향이 이어지는 아티스트 허브.</h3>
            <p>DubVision, Matisse &amp; Sadko, Third Party, Sick Individuals의 음악과 영상을 한 공간에서 탐색하도록 구성했습니다.</p>
            <p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p>
            <p>아티스트 소개 · 음악 카드 / 영상 콘텐츠 · 상세 모달</p>
            <a href="https://prog.djthirdparty.com" target="_blank" rel="noopener noreferrer">prog.djthirdparty.com ↗</a>
          </div>
        </div>
        <p class="note">기획 · 디자인 · 퍼블리싱 · Vue / TypeScript 구현</p>
      </div>
    </section>

    <section class="section connected" aria-labelledby="connected-title">
      <div class="section-inner">
        <h2 id="connected-title">서로 다른 화면,<br />이어지는 데이터.</h2>
        <p class="lead">세 사이트를 개별 작업으로 완성하면서, Third Party와 HALŌ 사이에는 투어 데이터를 재사용하는 연결점을 만들었습니다.</p>
        <div class="data-cards">
          <article><span>01 / SOURCE</span><h3>THIRD PARTY</h3><p>투어 데이터</p><p class="stack">Vue · Firebase · SCSS / Vercel 배포 · 간단한 어드민</p></article>
          <article><span>02 / REUSE</span><h3>HALŌ</h3><p>Third Party의 투어 데이터를 사용</p><p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p></article>
        </div>
        <hr />
        <h3 class="connected-subtitle">같은 정보도, 프로젝트의 분위기에 맞게.</h3>
        <p class="lead">Third Party는 아티스트의 음악과 일정에, HALŌ는 공연 경험과 콘텐츠에 초점을 맞췄습니다.<br />데이터의 연결은 유지하면서 각 사이트의 시각적 방향을 달리했습니다.</p>
        <p class="note">데이터 사용 관계를 요약한 설명입니다. API 구성과 동기화 방식 등 세부 구현은 별도로 단정하지 않았습니다.</p>
      </div>
    </section>

    <section class="section responsive" aria-labelledby="responsive-title">
      <div class="section-inner">
        <h2 id="responsive-title">DESKTOP TO MOBILE.</h2>
        <h3>화면은 달라도, 음악을 탐색하는 경험은 이어지도록.</h3>
        <div class="mobile-previews">
          <figure v-for="(project, index) in projects" :key="project.name">
            <div class="capture mobile-capture" :class="{ 'team-mobile': index === 2 }"><img :src="project.mobile" :alt="`${project.name} 모바일 실제 사이트 화면`" loading="lazy" /></div>
            <figcaption>{{ project.name }}</figcaption>
            <p v-if="index === 2" class="stack">PC와 모바일의<br />실제 사이트 화면</p>
          </figure>
        </div>
        <p class="note">세 사이트의 기존 캡처를 작업 사례 이미지로 배치했습니다.</p>
      </div>
    </section>

    <section class="section practice light" aria-labelledby="practice-title">
      <div class="section-inner">
        <h2 id="practice-title">FANMADE.<br />SELF-INITIATED.<br />LIVE ON THE WEB.</h2>
        <h3>좋아하는 음악을, 실제로 방문하는 웹사이트로.</h3>
        <p class="lead">개인의 관심사에서 출발해 기획·디자인·퍼블리싱과 프런트엔드 구현, 실제 운영까지 경험했습니다.<br />Third Party와 HALŌ는 검색을 통한 팬들의 유입을 경험하며, 공개된 웹사이트를 운영하는 작업으로 이어졌습니다.</p>
        <hr />
        <div class="site-links"><div v-for="project in projects" :key="project.name"><h4>{{ project.name }}</h4><a :href="`https://${project.url}`" target="_blank" rel="noopener noreferrer">{{ project.url }}</a></div></div>
        <p class="note">검색 유입 경험은 제작자의 운영 경험을 바탕으로 작성했습니다. 검색 순위는 시점·환경에 따라 달라집니다.</p>
        <p class="note">UNOFFICIAL FANMADE WEBSITES · 아티스트나 소속사의 공식 사이트가 아닌 개인 팬 프로젝트입니다.</p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(@/assets/font/djs-inter-400.ttf) format('truetype');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(@/assets/font/djs-inter-700.ttf) format('truetype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(@/assets/font/djs-noto-sans-kr-400.ttf) format('truetype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(@/assets/font/djs-noto-sans-kr-700.ttf) format('truetype');
}

$ink: #101212;
$paper: #f4f5ef;
$lime: #d6ff5f;
$muted: #a5aba8;

.djs-detail {
  background: $ink;
  color: $paper;
  font-family: 'Inter', 'Noto Sans KR', 'Pretendard', sans-serif;
  line-height: 1.4;
  overflow: clip;
  h1, h2, h3, h4, p, figure { margin: 0; }
  h1, h2, h3, h4 { font-weight: 700; }
  a { color: $lime !important; font-size: 18px; font-weight: 700; }
  a:hover { text-decoration: underline; text-underline-offset: 4px; }
  a:focus-visible { outline: 2px solid currentColor; outline-offset: 4px; }
  img { display: block; width: 100%; height: auto; }
  hr { width: 100%; border: 0; border-top: 1px solid #3c4440; margin: 0; }
  .section { padding: 64px 80px; }
  .section-inner { max-width: 1280px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px; }
  h2 { font-size: 66px; }
  h3 { font-size: 35px; color: $lime; }
  p { font-size: 21px; }
  .stack { color: $muted; font-size: 19px; }
  .note { color: $muted; font-size: 15px; }
  .lead { font-size: 23px; }
  .accent { color: $lime; font-size: 23px; font-weight: 700; }
  .capture { overflow: hidden; background: $ink; }
  .light { background: $paper; color: $ink; hr { border-color: #c9cec5; } a { color: #315cff !important; } .note { color: $ink; } }
  .cover {
    min-height: 980px;
    h1 { font-size: 88px; }
    h2 { color: $lime; font-size: 30px; }
    .cover-intro { display: flex; flex-direction: column; gap: 24px; }
  }
  .previews {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px;
    .preview-image { display: block; height: 330px; overflow: hidden; background: $ink; }
    figcaption { margin-top: 12px; color: $muted; font-size: 16px; font-weight: 700; }
    .halo-preview img { width: 170.5%; max-width: none; transform: translateX(-20.15%); }
  }
  .overview {
    min-height: 742px;
    h2 { font-size: 64px; }
    .project-list { display: flex; flex-direction: column; gap: 28px; }
    li { border-top: 1px solid #c9cec5; padding-top: 28px; display: grid; grid-template-columns: 80px 500px minmax(0, 1fr); gap: 32px; }
    .number { font-size: 28px; font-weight: 700; }
    .project-name, .project-meta { display: flex; flex-direction: column; gap: 12px; }
    h3 { color: $ink; font-size: 26px; }
    .project-name p { font-size: 20px; }
    .project-meta p { font-size: 18px; }
  }
  .third {
    min-height: 1080px;
    .project-title { font-size: 78px; }
    .third-copy { display: flex; flex-direction: column; gap: 12px; }
    .third-capture { aspect-ratio: 1280 / 582; margin-top: -16px; }
  }
  .halo {
    min-height: 977px;
    .project-title { font-size: 100px; }
    .halo-layout { grid-template-columns: minmax(0, 759fr) minmax(0, 481fr); }
    .halo-main { aspect-ratio: 759 / 330; img { width: 105.4%; max-width: none; transform: translateX(-3.95%); } }
    .halo-tour { aspect-ratio: 759 / 280; img { width: 105.4%; max-width: none; transform: translateX(-2.63%); } }
  }
  .project-layout { display: grid; grid-template-columns: minmax(0, 800fr) minmax(0, 440fr); gap: 40px; }
  .captures { display: flex; flex-direction: column; gap: 20px; }
  .project-copy { display: flex; flex-direction: column; gap: 28px; h4 { font-size: 20px; } }
  .team {
    min-height: 1080px;
    .project-title { font-size: 65px; }
    .project-copy { gap: 24px; h3 { font-size: 34px; } }
    .team-main { aspect-ratio: 800 / 380; }
    .team-artist { aspect-ratio: 800 / 230; }
  }
  .connected {
    min-height: 954px; background: $lime; color: $ink;
    .lead { font-size: 23px; }
    hr { border-color: #a7c64b; }
    .connected-subtitle { color: $ink; }
    .note { color: $ink; }
  }
  .data-cards {
    display: grid; grid-template-columns: 600fr 640fr; gap: 40px;
    article { background: $ink; color: $paper; padding: 36px 32px; display: flex; flex-direction: column; gap: 24px; }
    span { font-size: 16px; color: $lime; font-weight: 700; }
    h3 { color: $paper; font-size: 40px; }
    p { font-size: 27px; }
    .stack { font-size: 20px; }
  }
  .responsive {
    min-height: 1001px;
    h2 { font-size: 68px; }
    h3 { font-size: 28px; }
  }
  .mobile-previews {
    display: grid; grid-template-columns: repeat(3, minmax(0, 330px)); justify-content: space-between; gap: 40px;
    .mobile-capture { aspect-ratio: 330 / 590; }
    .team-mobile { aspect-ratio: 330 / 500; }
    figcaption { margin-top: 20px; font-size: 20px; font-weight: 700; }
    .stack { margin-top: 24px; font-size: 20px; }
  }
  .practice {
    min-height: 837px;
    h2 { font-size: 73px; }
    h3 { color: $ink; font-size: 32px; }
    .lead { font-size: 22px; }
  }
  .site-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px; font-size: 18px; h4 { margin-bottom: 12px; } }
}

@media (max-width: 1199px) {
  .djs-detail {
    .section { padding: 64px 40px; min-height: 0; }
    .cover h1 { font-size: 68px; }
    .overview li { grid-template-columns: 48px 1fr 1fr; gap: 24px; }
    .previews .preview-image { height: 260px; }
    .project-layout, .halo .halo-layout { grid-template-columns: 3fr 2fr; gap: 32px; }
    .project-copy h3, .team .project-copy h3 { font-size: 28px; }
    .desktop-break { display: none; }
  }
}
@media (max-width: 767px) {
  .djs-detail {
    .section { padding: 48px 24px; }
    .section-inner { gap: 24px; }
    .cover h1 { font-size: clamp(32px, 7.8vw, 56px); }
    h2, .overview h2, .connected h2 { font-size: 36px; }
    .cover h2, .responsive h3 { font-size: 22px; }
    p, .lead, .connected .lead, .practice .lead { font-size: 18px; }
    .note { font-size: 12px; }
    .previews { grid-template-columns: 1fr; gap: 28px; .preview-image { height: auto; aspect-ratio: 412 / 330; } }
    .overview li { grid-template-columns: 32px 1fr; gap: 16px; }
    .overview .project-meta { grid-column: 2; }
    .overview h3 { font-size: 22px; }
    .overview .project-name p { font-size: 18px; }
    .third .project-title, .halo .project-title { font-size: 48px; }
    .team .project-title { font-size: clamp(28px, 6.6vw, 48px); }
    .third h3, .connected-subtitle { font-size: 26px; }
    .project-layout, .halo .halo-layout, .data-cards, .site-links { grid-template-columns: 1fr; gap: 32px; }
    .third .third-capture { margin-top: 0; }
    .project-copy { gap: 24px; }
    .data-cards article { padding: 32px 24px; }
    .data-cards p { font-size: 23px; }
    .responsive h2 { font-size: clamp(26px, 6.6vw, 44px); }
    .mobile-previews { grid-template-columns: minmax(0, 330px); justify-content: center; gap: 40px; }
    .practice h2 { font-size: clamp(32px, 7.8vw, 56px); }
    .practice h3 { font-size: 26px; }
    .site-links { gap: 24px; }
  }
}

// Each panel keeps its own scroll range so long mobile content remains reachable.
.djs-detail.panel-deck {
  position: fixed;
  inset: 0;
  height: 100dvh;
  isolation: isolate;
  .section {
    position: absolute;
    inset: 0;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    background: $ink;
    padding-top: 96px;
    padding-bottom: 64px;
    scrollbar-width: thin;
    scrollbar-color: $muted transparent;
    &.light { background: $paper; }
    &.connected { background: $lime; }
    &:not(.cover) { visibility: hidden; }
  }
  .section-inner { width: 100%; }
  h1, h2, h3, p, a, figcaption { overflow-wrap: anywhere; }
  h1:focus, h2:focus { outline: none; }
  .panel-controls {
    position: absolute;
    z-index: 5;
    top: 16px;
    left: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 16px;
    border: 1px solid #3c4440;
    border-radius: 8px;
    background: rgba($ink, 0.94);
    color: $paper;
    .back-link { font-size: 14px; }
  }
  .panel-position { display: flex; gap: 16px; font-size: 14px; font-variant-numeric: tabular-nums; }
  .panel-buttons {
    display: flex; gap: 8px;
    button {
      width: 44px; height: 44px; color: $paper; font-size: 24px;
      border: 1px solid #3c4440; border-radius: 4px;
      &:hover { background: $lime; color: $ink; }
      &:focus-visible { outline: 2px solid $lime; outline-offset: 4px; }
    }
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .djs-detail.panel-deck {
    h2, .overview h2 { font-size: 48px; }
    .cover h1 { font-size: clamp(48px, 6vw, 68px); }
    .previews .preview-image { height: auto; aspect-ratio: 412 / 330; }
    .overview li { grid-template-columns: 48px minmax(0, 1fr); }
    .overview .project-meta { grid-column: 2; }
    .project-layout, .halo .halo-layout { grid-template-columns: minmax(0, 1fr); }
    .project-copy { max-width: 720px; }
    .data-cards { gap: 24px; article { padding: 28px 24px; } h3 { font-size: 32px; } p { font-size: 22px; } }
    .responsive h2 { font-size: 48px; }
    .mobile-previews { gap: 24px; figcaption { font-size: 16px; } }
    .practice h2 { font-size: 56px; }
    .site-links { gap: 24px; h4, a { font-size: 16px; } }
  }
}

@media (max-width: 767px) {
  .djs-detail.panel-deck {
    .section { padding: 104px 24px 48px; }
    .panel-controls { left: 12px; right: 12px; top: 12px; padding: 8px; gap: 8px; }
    .panel-position { font-size: 12px; span { display: none; } }
    .panel-controls .back-link { font-size: 12px; }
    .panel-buttons { gap: 4px; }
    .project-copy { gap: 20px; }
    .cover .cover-intro { gap: 20px; }
    .stack, .overview .project-meta p { font-size: 16px; }
    .accent { font-size: 20px; }
    .mobile-previews { width: 100%; }
  }
}
@media (max-width: 359px) {
  .djs-detail.panel-deck {
    .section { padding-left: 16px; padding-right: 16px; }
    .cover h1, .practice h2 { font-size: 28px; }
    .overview li { gap: 12px; grid-template-columns: 24px minmax(0, 1fr); }
  }
}
</style>
