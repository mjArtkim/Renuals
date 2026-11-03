<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
import { RouterLink } from "vue-router";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const page = ref(null);
const currentPanel = ref(0);
const panelLabels = [
  "INTRO",
  "OVERVIEW",
  "THIRD PARTY",
  "HALŌ",
  "TEAM",
  "CONNECTED",
  "MOBILE",
  "FANMADE",
];
let panels = [];
let animation;
let observer;
let context;
let animating = false;
let boundaryReady = true;
let motionPreference;

function showPanel(index, direction = 1) {
  if (animating || !panels.length) return;
  const next = gsap.utils.wrap(0, panels.length, index);
  if (next === currentPanel.value) return;
  const previous = panels[currentPanel.value];
  const incoming = panels[next];
  const focusWasInside = previous.contains(document.activeElement);
  animating = true;
  boundaryReady = false;
  incoming.scrollTop =
    direction > 0 ? 0 : incoming.scrollHeight - incoming.clientHeight;
  incoming.inert = false;
  incoming.removeAttribute("aria-hidden");
  previous.inert = true;
  previous.setAttribute("aria-hidden", "true");
  gsap.set(incoming, { autoAlpha: 1, zIndex: 2, yPercent: direction * 100 });
  const finish = () => {
    gsap.set(previous, { autoAlpha: 0, yPercent: 0, zIndex: 0 });
    gsap.set(incoming, { zIndex: 1 });
    currentPanel.value = next;
    animating = false;
    if (focusWasInside)
      incoming.querySelector("h1, h2")?.focus({ preventScroll: true });
  };
  animation = gsap
    .timeline({
      defaults: {
        duration: motionPreference.matches ? 0 : 0.8,
        ease: "power3.inOut",
      },
      onComplete: finish,
    })
    .to(previous, { yPercent: -direction * 25, autoAlpha: 0.4 }, 0)
    .to(incoming, { yPercent: 0 }, 0);
}

function moveContent(delta) {
  if (animating || Math.abs(delta) < 1) return;
  const panel = panels[currentPanel.value];
  const maximum = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const atBoundary =
    delta > 0 ? panel.scrollTop >= maximum - 2 : panel.scrollTop <= 2;
  if (!atBoundary) {
    panel.scrollTop = gsap.utils.clamp(0, maximum, panel.scrollTop + delta);
    boundaryReady = false;
  } else if (boundaryReady && Math.abs(delta) >= 8) {
    showPanel(currentPanel.value + (delta > 0 ? 1 : -1), delta > 0 ? 1 : -1);
  }
}

function handleKey(event) {
  if (
    event.target.closest(
      "a, button, input, textarea, select, [contenteditable]",
    )
  )
    return;
  const direction = ["ArrowDown", "PageDown", " "].includes(event.key)
    ? event.shiftKey
      ? -1
      : 1
    : ["ArrowUp", "PageUp"].includes(event.key)
      ? -1
      : 0;
  if (direction) {
    event.preventDefault();
    boundaryReady = true;
    moveContent(
      direction *
        (event.key.startsWith("Arrow")
          ? 80
          : panels[currentPanel.value].clientHeight * 0.8),
    );
  } else if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    showPanel(
      event.key === "Home" ? 0 : panels.length - 1,
      event.key === "Home" ? -1 : 1,
    );
  }
}

onMounted(() => {
  panels = [...page.value.querySelectorAll(".section")];
  motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  context = gsap.context(() => {
    panels.forEach((panel, index) => {
      panel.inert = index !== 0;
      if (index !== 0) panel.setAttribute("aria-hidden", "true");
      panel.querySelector("h1, h2")?.setAttribute("tabindex", "-1");
    });
    gsap.set(panels, { autoAlpha: 0, zIndex: 0 });
    gsap.set(panels[0], { autoAlpha: 1, zIndex: 1 });
    observer = Observer.create({
      target: page.value,
      type: "wheel,touch",
      preventDefault: true,
      allowClicks: true,
      ignoreCheck: (event) => event.ctrlKey || event.touches?.length > 1,
      lockAxis: true,
      ignore: "[data-panel-controls]",
      onPress: () => {
        boundaryReady = true;
      },
      onChangeY: (self) => {
        // Wheel and finger movement have opposite directions.
        if (self.event.ctrlKey || self.event.touches?.length > 1) return;
        moveContent(self.event.type === "wheel" ? self.deltaY : -self.deltaY);
      },
      onStopDelay: 0.25,
      onStop: () => {
        boundaryReady = true;
      },
    });
  }, page.value);
});

onBeforeUnmount(() => {
  observer?.kill();
  animation?.kill();
  context?.revert();
});

import third from "@/assets/img/djs/381ea.png";
import halo from "@/assets/img/djs/03650.png";
import team from "@/assets/img/djs/fffa4.png";
import tour from "@/assets/img/djs/48ec8.png";
import artist from "@/assets/img/djs/ef386.png";
import thirdMobile from "@/assets/img/djs/0c80a.png";
import haloMobile from "@/assets/img/djs/7d2a8.png";
import teamMobile from "@/assets/img/djs/e489e.png";

const projects = computed(() => [
  {
    name: "THIRD PARTY",
    description: t("djs.thirdSummary"),
    stack: "Vue · Firebase · SCSS · Vercel",
    url: "www.djthirdparty.com",
    image: third,
    mobile: thirdMobile,
  },
  {
    name: "HALŌ",
    description: t("djs.haloSummary"),
    stack: "Vue · TypeScript · Tailwind CSS · SCSS",
    url: "www.beparthalo.com",
    image: halo,
    mobile: haloMobile,
  },
  {
    name: "TEAM PROGRESSIVE HOUSE",
    description: t("djs.teamSummary"),
    stack: "Vue · TypeScript · Tailwind CSS · SCSS",
    url: "prog.djthirdparty.com",
    image: team,
    mobile: teamMobile,
  },
]);
</script>

<template>
  <main
    :lang="locale"
    ref="page"
    class="djs-detail panel-deck"
    @keydown="handleKey"
  >
    <nav
      class="panel-controls"
      data-panel-controls
      :aria-label="t('djs.sectionNavigation')"
    >
      <RouterLink to="/" class="back-link">{{ t("djs.back") }}</RouterLink>
      <div class="panel-position" aria-live="polite" aria-atomic="true">
        {{ String(currentPanel + 1).padStart(2, "0") }} / 08
        <span>{{ panelLabels[currentPanel] }}</span>
      </div>
      <div class="panel-actions">
        <div
          class="language-switch"
          role="group"
          :aria-label="t('djs.language')"
        >
          <button
            v-for="language in ['ko', 'en']"
            :key="language"
            type="button"
            :aria-pressed="locale === language"
            @click="locale = language"
          >
            {{ language === "ko" ? "KR" : "EN" }}
          </button>
        </div>
        <div class="panel-buttons">
          <button
            type="button"
            :aria-label="t('djs.previous')"
            @click="showPanel(currentPanel - 1, -1)"
          >
            ↑
          </button>
          <button
            type="button"
            :aria-label="t('djs.next')"
            @click="showPanel(currentPanel + 1, 1)"
          >
            ↓
          </button>
        </div>
      </div>
    </nav>
    <section class="section cover" aria-labelledby="cover-title">
      <div class="section-inner">
        <h1 id="cover-title">FOR THE MUSIC.<br />BUILT FOR THE FANS.</h1>
        <div class="cover-intro">
          <h2>{{ t("djs.coverSubtitle") }}</h2>
          <p>
            {{ t("djs.coverDescription") }}<br class="desktop-break" />{{
              t("djs.coverDescriptionEnd")
            }}
          </p>
        </div>
        <div class="previews">
          <figure v-for="(project, index) in projects" :key="project.name">
            <a
              :href="`https://${project.url}`"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="t('djs.openSite', { name: project.name })"
              class="preview-image"
              :class="{ 'halo-preview': index === 1 }"
            >
              <img
                :src="project.image"
                :alt="t('djs.mainAlt', { name: project.name })"
              />
            </a>
            <figcaption>{{ project.name }}</figcaption>
          </figure>
        </div>
        <p class="note">{{ t("djs.unofficialIntro") }}</p>
      </div>
    </section>

    <section class="section overview light" aria-labelledby="overview-title">
      <div class="section-inner">
        <h2 id="overview-title">{{ t("djs.overviewTitle") }}</h2>
        <p class="lead">{{ t("djs.overviewDescription") }}</p>
        <ol class="project-list">
          <li v-for="(project, index) in projects" :key="project.name">
            <span class="number">0{{ index + 1 }}</span>
            <div class="project-name">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
            <div class="project-meta">
              <p>{{ project.stack }}</p>
              <a
                :href="`https://${project.url}`"
                target="_blank"
                rel="noopener noreferrer"
                >{{ project.url }}</a
              >
            </div>
          </li>
        </ol>
        <p class="note">{{ t("djs.common") }}</p>
      </div>
    </section>

    <section class="section third" aria-labelledby="third-title">
      <div class="section-inner">
        <h2 id="third-title" class="project-title">THIRD PARTY</h2>
        <div class="third-copy">
          <h3>{{ t("djs.thirdTitle") }}</h3>
          <p>{{ t("djs.thirdDescription") }}</p>
          <p class="stack">Vue · Firebase · SCSS / Deployment / Vercel</p>
          <p>{{ t("djs.thirdAdmin") }}</p>
          <a
            href="https://www.djthirdparty.com"
            target="_blank"
            rel="noopener noreferrer"
            >www.djthirdparty.com ↗</a
          >
        </div>
        <div class="capture third-capture">
          <img :src="third" :alt="t('djs.thirdAlt')" loading="lazy" />
        </div>
        <p class="note">{{ t("djs.thirdCredits") }}</p>
      </div>
    </section>

    <section class="section halo" aria-labelledby="halo-title">
      <div class="section-inner">
        <h2 id="halo-title" class="project-title">HALŌ</h2>
        <div class="project-layout halo-layout">
          <div class="captures halo-captures">
            <div class="capture halo-main">
              <img :src="halo" :alt="t('djs.haloAlt')" loading="lazy" />
            </div>
            <div class="capture halo-tour">
              <img :src="tour" :alt="t('djs.tourAlt')" loading="lazy" />
            </div>
          </div>
          <div class="project-copy">
            <h3>{{ t("djs.haloTitle") }}</h3>
            <p>{{ t("djs.haloDescription") }}</p>
            <p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p>
            <hr />
            <h4>{{ t("djs.connectionLabel") }}</h4>
            <p class="accent">{{ t("djs.haloData") }}</p>
            <a
              href="https://www.beparthalo.com"
              target="_blank"
              rel="noopener noreferrer"
              >www.beparthalo.com ↗</a
            >
          </div>
        </div>
        <p class="note">{{ t("djs.haloCredits") }}</p>
      </div>
    </section>

    <section class="section team" aria-labelledby="team-title">
      <div class="section-inner">
        <h2 id="team-title" class="project-title">
          TEAM<br />PROGRESSIVE HOUSE
        </h2>
        <div class="project-layout">
          <div class="captures">
            <div class="capture team-main">
              <img :src="team" :alt="t('djs.teamAlt')" loading="lazy" />
            </div>
            <div class="capture team-artist">
              <img :src="artist" :alt="t('djs.artistAlt')" loading="lazy" />
            </div>
          </div>
          <div class="project-copy">
            <h3>{{ t("djs.teamTitle") }}</h3>
            <p>{{ t("djs.teamDescription") }}</p>
            <p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p>
            <p>{{ t("djs.teamFeatures") }}</p>
            <a
              href="https://prog.djthirdparty.com"
              target="_blank"
              rel="noopener noreferrer"
              >prog.djthirdparty.com ↗</a
            >
          </div>
        </div>
        <p class="note">{{ t("djs.teamCredits") }}</p>
      </div>
    </section>

    <section class="section connected" aria-labelledby="connected-title">
      <div class="section-inner">
        <h2 id="connected-title">
          {{ t("djs.connectedTitle") }}<br />{{ t("djs.connectedTitleEnd") }}
        </h2>
        <p class="lead">{{ t("djs.connectedDescription") }}</p>
        <div class="data-cards">
          <article>
            <span>01 / SOURCE</span>
            <h3>THIRD PARTY</h3>
            <p>{{ t("djs.tourData") }}</p>
            <p class="stack">{{ t("djs.sourceStack") }}</p>
          </article>
          <article>
            <span>02 / REUSE</span>
            <h3>HALŌ</h3>
            <p>{{ t("djs.reuseData") }}</p>
            <p class="stack">Vue · TypeScript / Tailwind CSS · SCSS</p>
          </article>
        </div>
        <hr />
        <h3 class="connected-subtitle">{{ t("djs.connectedSubtitle") }}</h3>
        <p class="lead">
          {{ t("djs.connectedBody") }}<br />{{ t("djs.connectedBodyEnd") }}
        </p>
        <p class="note">{{ t("djs.dataNote") }}</p>
      </div>
    </section>

    <section class="section responsive" aria-labelledby="responsive-title">
      <div class="section-inner">
        <h2 id="responsive-title">DESKTOP TO MOBILE.</h2>
        <h3>{{ t("djs.responsiveSubtitle") }}</h3>
        <div class="mobile-previews">
          <figure v-for="(project, index) in projects" :key="project.name">
            <div
              class="capture mobile-capture"
              :class="{ 'team-mobile': index === 2 }"
            >
              <img
                :src="project.mobile"
                :alt="t('djs.mobileAlt', { name: project.name })"
                loading="lazy"
              />
            </div>
            <figcaption>{{ project.name }}</figcaption>
            <p v-if="index === 2" class="stack">
              {{ t("djs.mobileCaption") }}<br />{{ t("djs.mobileCaptionEnd") }}
            </p>
          </figure>
        </div>
        <p class="note">{{ t("djs.captureNote") }}</p>
      </div>
    </section>

    <section class="section practice light" aria-labelledby="practice-title">
      <div class="section-inner">
        <h2 id="practice-title">
          FANMADE.<br />SELF-INITIATED.<br />LIVE ON THE WEB.
        </h2>
        <h3>{{ t("djs.practiceSubtitle") }}</h3>
        <p class="lead">
          {{ t("djs.practiceBody") }}<br />{{ t("djs.practiceBodyEnd") }}
        </p>
        <hr />
        <div class="site-links">
          <div v-for="project in projects" :key="project.name">
            <h4>{{ project.name }}</h4>
            <a
              :href="`https://${project.url}`"
              target="_blank"
              rel="noopener noreferrer"
              >{{ project.url }}</a
            >
          </div>
        </div>
        <p class="note">{{ t("djs.searchNote") }}</p>
        <p class="note">{{ t("djs.unofficialNote") }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
$ink: #101212;
$paper: #f4f5ef;
$lime: #d6ff5f;
$muted: #a5aba8;

.djs-detail {
  background: $ink;
  color: $paper;
  font-family: "Pretendard", sans-serif;
  line-height: 1.4;
  overflow: clip;
  h1,
  h2,
  h3,
  h4,
  p,
  figure {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
  }
  a {
    color: $lime !important;
    font-size: 18px;
    font-weight: 700;
  }
  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #3c4440;
    margin: 0;
  }
  .section {
    padding: 64px 80px;
  }
  .section-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  h2 {
    font-size: 66px;
  }
  h3 {
    font-size: 35px;
    color: $lime;
  }
  p {
    font-size: 21px;
  }
  .stack {
    color: $muted;
    font-size: 19px;
  }
  .note {
    color: $muted;
    font-size: 15px;
  }
  .lead {
    font-size: 23px;
  }
  .accent {
    color: $lime;
    font-size: 23px;
    font-weight: 700;
  }
  .capture {
    overflow: hidden;
    background: $ink;
  }
  .light {
    background: $paper;
    color: $ink;
    hr {
      border-color: #c9cec5;
    }
    a {
      color: #315cff !important;
    }
    .note {
      color: $ink;
    }
  }
  .cover {
    min-height: 980px;
    h1 {
      font-size: 88px;
    }
    h2 {
      color: $lime;
      font-size: 30px;
    }
    .cover-intro {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  .previews {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    .preview-image {
      display: block;
      height: 330px;
      overflow: hidden;
      background: $ink;
    }
    figcaption {
      margin-top: 12px;
      color: $muted;
      font-size: 16px;
      font-weight: 700;
    }
    .halo-preview img {
      width: 170.5%;
      max-width: none;
      transform: translateX(-20.15%);
    }
  }
  .overview {
    min-height: 742px;
    h2 {
      font-size: 64px;
    }
    .project-list {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    li {
      border-top: 1px solid #c9cec5;
      padding-top: 28px;
      display: grid;
      grid-template-columns: 80px 500px minmax(0, 1fr);
      gap: 32px;
    }
    .number {
      font-size: 28px;
      font-weight: 700;
    }
    .project-name,
    .project-meta {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    h3 {
      color: $ink;
      font-size: 26px;
    }
    .project-name p {
      font-size: 20px;
    }
    .project-meta p {
      font-size: 18px;
    }
  }
  .third {
    min-height: 1080px;
    .project-title {
      font-size: 78px;
    }
    .third-copy {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .third-capture {
      aspect-ratio: 1280 / 582;
      margin-top: -16px;
    }
  }
  .halo {
    min-height: 977px;
    .project-title {
      font-size: 100px;
    }
    .halo-layout {
      grid-template-columns: minmax(0, 759fr) minmax(0, 481fr);
    }
    .halo-main {
      aspect-ratio: 759 / 330;
      img {
        width: 105.4%;
        max-width: none;
        transform: translateX(-3.95%);
      }
    }
    .halo-tour {
      aspect-ratio: 759 / 280;
      img {
        width: 105.4%;
        max-width: none;
        transform: translateX(-2.63%);
      }
    }
  }
  .project-layout {
    display: grid;
    grid-template-columns: minmax(0, 800fr) minmax(0, 440fr);
    gap: 40px;
  }
  .captures {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .project-copy {
    display: flex;
    flex-direction: column;
    gap: 28px;
    h4 {
      font-size: 20px;
    }
  }
  .team {
    min-height: 1080px;
    .project-title {
      font-size: 65px;
    }
    .project-copy {
      gap: 24px;
      h3 {
        font-size: 34px;
      }
    }
    .team-main {
      aspect-ratio: 800 / 380;
    }
    .team-artist {
      aspect-ratio: 800 / 230;
    }
  }
  .connected {
    min-height: 954px;
    background: $lime;
    color: $ink;
    .lead {
      font-size: 23px;
    }
    hr {
      border-color: #a7c64b;
    }
    .connected-subtitle {
      color: $ink;
    }
    .note {
      color: $ink;
    }
  }
  .data-cards {
    display: grid;
    grid-template-columns: 600fr 640fr;
    gap: 40px;
    article {
      background: $ink;
      color: $paper;
      padding: 36px 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    span {
      font-size: 16px;
      color: $lime;
      font-weight: 700;
    }
    h3 {
      color: $paper;
      font-size: 40px;
    }
    p {
      font-size: 27px;
    }
    .stack {
      font-size: 20px;
    }
  }
  .responsive {
    min-height: 1001px;
    h2 {
      font-size: 68px;
    }
    h3 {
      font-size: 28px;
    }
  }
  .mobile-previews {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 330px));
    justify-content: space-between;
    gap: 40px;
    .mobile-capture {
      aspect-ratio: 330 / 590;
    }
    .team-mobile {
      aspect-ratio: 330 / 500;
    }
    figcaption {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 700;
    }
    .stack {
      margin-top: 24px;
      font-size: 20px;
    }
  }
  .practice {
    min-height: 837px;
    h2 {
      font-size: 73px;
    }
    h3 {
      color: $ink;
      font-size: 32px;
    }
    .lead {
      font-size: 22px;
    }
  }
  .site-links {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    font-size: 18px;
    h4 {
      margin-bottom: 12px;
    }
  }
}

@media (max-width: 1199px) {
  .djs-detail {
    .section {
      padding: 64px 40px;
      min-height: 0;
    }
    .cover h1 {
      font-size: 68px;
    }
    .overview li {
      grid-template-columns: 48px 1fr 1fr;
      gap: 24px;
    }
    .previews .preview-image {
      height: 260px;
    }
    .project-layout,
    .halo .halo-layout {
      grid-template-columns: 3fr 2fr;
      gap: 32px;
    }
    .project-copy h3,
    .team .project-copy h3 {
      font-size: 28px;
    }
    .desktop-break {
      display: none;
    }
  }
}
@media (max-width: 767px) {
  .djs-detail {
    .section {
      padding: 48px 24px;
    }
    .section-inner {
      gap: 24px;
    }
    .cover h1 {
      font-size: 26px;
      line-height: 1.4;
    }
    h2,
    .overview h2,
    .connected h2,
    .third .project-title,
    .halo .project-title,
    .team .project-title,
    .responsive h2,
    .practice h2 {
      font-size: 22px;
      line-height: 1.45;
    }
    h3,
    .cover h2,
    .overview h3,
    .third h3,
    .project-copy h3,
    .team .project-copy h3,
    .connected-subtitle,
    .data-cards h3,
    .responsive h3,
    .practice h3 {
      font-size: 18px;
      line-height: 1.5;
    }
    p,
    .lead,
    .connected .lead,
    .practice .lead,
    .overview .project-name p,
    .data-cards p {
      font-size: 14px;
      line-height: 1.65;
    }
    .project-copy h4,
    .site-links h4,
    .site-links a {
      font-size: 14px;
      line-height: 1.65;
    }
    a {
      font-size: 14px;
    }
    .note {
      font-size: 12px;
    }
    .previews {
      grid-template-columns: 1fr;
      gap: 28px;
      .preview-image {
        height: auto;
        aspect-ratio: 412 / 330;
      }
    }
    .previews figcaption,
    .mobile-previews figcaption {
      font-size: 14px;
      line-height: 1.5;
    }
    .overview li {
      grid-template-columns: 32px 1fr;
      gap: 16px;
    }
    .overview .number {
      font-size: 18px;
    }
    .overview .project-meta {
      grid-column: 2;
    }
    .project-layout,
    .halo .halo-layout,
    .data-cards,
    .site-links {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .third .third-capture {
      margin-top: 0;
    }
    .project-copy {
      gap: 24px;
    }
    .data-cards article {
      padding: 32px 24px;
    }
    .data-cards span {
      font-size: 12px;
    }
    .mobile-previews {
      grid-template-columns: minmax(0, 330px);
      justify-content: center;
      gap: 40px;
    }
    .site-links {
      gap: 24px;
    }
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
    &.light {
      background: $paper;
    }
    &.connected {
      background: $lime;
    }
    &:not(.cover) {
      visibility: hidden;
    }
  }
  .section-inner {
    width: 100%;
  }
  h1,
  h2,
  h3,
  p,
  a,
  figcaption {
    overflow-wrap: anywhere;
  }
  h1:focus,
  h2:focus {
    outline: none;
  }
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
    .back-link {
      font-size: 14px;
    }
  }
  .panel-position {
    display: flex;
    gap: 16px;
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }
  .panel-actions,
  .language-switch {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .language-switch button {
    color: $muted;
    min-width: 32px;
    min-height: 44px;
    font: inherit;
    font-size: 12px;
    &[aria-pressed="true"] {
      color: $lime;
      font-weight: 700;
    }
    &:focus-visible {
      outline: 2px solid $lime;
      outline-offset: 4px;
    }
  }
  .panel-buttons {
    display: flex;
    gap: 8px;
    button {
      width: 44px;
      height: 44px;
      color: $paper;
      font-size: 24px;
      border: 1px solid #3c4440;
      border-radius: 4px;
      &:hover {
        background: $lime;
        color: $ink;
      }
      &:focus-visible {
        outline: 2px solid $lime;
        outline-offset: 4px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .djs-detail.panel-deck {
    h2,
    .overview h2 {
      font-size: 48px;
    }
    .cover h1 {
      font-size: clamp(48px, 6vw, 68px);
    }
    .previews .preview-image {
      height: auto;
      aspect-ratio: 412 / 330;
    }
    .overview li {
      grid-template-columns: 48px minmax(0, 1fr);
    }
    .overview .project-meta {
      grid-column: 2;
    }
    .project-layout,
    .halo .halo-layout {
      grid-template-columns: minmax(0, 1fr);
    }
    .project-copy {
      max-width: 720px;
    }
    .data-cards {
      gap: 24px;
      article {
        padding: 28px 24px;
      }
      h3 {
        font-size: 32px;
      }
      p {
        font-size: 22px;
      }
    }
    .responsive h2 {
      font-size: 48px;
    }
    .mobile-previews {
      gap: 24px;
      figcaption {
        font-size: 16px;
      }
    }
    .practice h2 {
      font-size: 56px;
    }
    .site-links {
      gap: 24px;
      h4,
      a {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 767px) {
  .djs-detail.panel-deck {
    .section {
      padding: 104px 24px 48px;
    }
    .panel-controls {
      left: 12px;
      right: 12px;
      top: 12px;
      padding: 8px;
      gap: 8px;
    }
    .panel-actions,
    .language-switch {
      gap: 4px;
    }
    .panel-position {
      font-size: 12px;
      span {
        display: none;
      }
    }
    .panel-controls .back-link {
      font-size: 12px;
    }
    .panel-buttons {
      gap: 4px;
    }
    .project-copy {
      gap: 20px;
    }
    .cover .cover-intro {
      gap: 20px;
    }
    .stack,
    .overview .project-meta p {
      font-size: 13px;
      line-height: 1.65;
    }
    .accent {
      font-size: 16px;
      line-height: 1.65;
    }
    .mobile-previews {
      width: 100%;
    }
  }
}
@media (max-width: 400px) {
  .djs-detail.panel-deck .panel-position {
    display: none;
  }
}
@media (max-width: 359px) {
  .djs-detail.panel-deck {
    .section {
      padding-left: 16px;
      padding-right: 16px;
    }
    .overview li {
      gap: 12px;
      grid-template-columns: 24px minmax(0, 1fr);
    }
  }
}
</style>
