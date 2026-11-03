<script setup>
import "@/assets/dolbome-design.scss";
import {
  computed,
  defineAsyncComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import DolbomeAnimatedTitle from "@/components/DolbomeAnimatedTitle.vue";

const { t, locale } = useI18n();
const caseComponents = {
  community: defineAsyncComponent(
    () => import("@/components/DolbomeCommunity.vue"),
  ),
  shopping: defineAsyncComponent(
    () => import("@/components/DolbomeShopping.vue"),
  ),
  careers: defineAsyncComponent(
    () => import("@/components/DolbomeCareers.vue"),
  ),
};

const route = useRoute();
const router = useRouter();
const projects = computed(() => [
  {
    slug: "community",
    title: t("dolbome.projects.community.title"),
    category: "COMMUNITY",
    description: t("dolbome.projects.community.description"),
    color: "#b4d7b1",
    background: "#101d19",
    component: caseComponents.community,
  },
  {
    slug: "shopping",
    title: t("dolbome.projects.shopping.title"),
    category: "COMMERCE",
    description: t("dolbome.projects.shopping.description"),
    color: "#c3b1ea",
    background: "#1b142c",
    component: caseComponents.shopping,
  },
  {
    slug: "careers",
    title: t("dolbome.projects.careers.title"),
    category: "CAREERS",
    description: t("dolbome.projects.careers.description"),
    color: "#f2968c",
    background: "#2b141b",
    component: caseComponents.careers,
  },
]);
const indexFromRoute = () =>
  Math.max(
    0,
    projects.value.findIndex((project) => project.slug === route.query.project),
  );
const activeIndex = ref(indexFromRoute());
const slideDirection = ref(1);
const project = computed(() => projects.value[activeIndex.value]);
const isDetail = computed(() => route.query.view === "detail");
const viewport = ref(null);
const track = ref(null);
const detail = ref(null);
const detailTitle = ref(null);
const isScrolling = ref(false);

function updateDetailScroll() {
  isScrolling.value = (detail.value?.scrollTop ?? 0) > 300;
}

function scrollToTop() {
  detail.value?.scrollTo({ top: 0, behavior: motion?.matches ? "auto" : "smooth" });
}

function scrollToBottom() {
  const reader = detail.value;
  if (!reader) return;
  reader.scrollTo({ top: reader.scrollHeight - reader.clientHeight, behavior: motion?.matches ? "auto" : "smooth" });
}
let swipeObserver;
let wheelObserver;
let animation;
let animating = false;
let wheelReady = true;
let motion;
let stopRouteWatch;

function updateQuery(index, view) {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      project: projects.value[index].slug,
      ...(view === "detail" ? { view: "detail" } : { view: undefined }),
    },
  });
}

function selectProject(index) {
  if (animating || isDetail.value) return;
  const next = gsap.utils.wrap(0, projects.value.length, index);
  if (next === activeIndex.value) return;
  slideDirection.value = index < activeIndex.value ? -1 : 1;
  updateQuery(next, "poster");
}

async function resetDetailScroll() {
  await nextTick();
  if (detail.value) detail.value.scrollTop = 0;
  isScrolling.value = false;
  detailTitle.value?.focus({ preventScroll: true });
}

async function syncRoute() {
  const previous = activeIndex.value;
  activeIndex.value = indexFromRoute();
  await nextTick();
  if (isDetail.value) {
    animation?.kill();
    animating = false;
    swipeObserver?.disable();
    wheelObserver?.disable();
    if (detail.value) detail.value.scrollTop = 0;
  isScrolling.value = false;
    detailTitle.value?.focus({ preventScroll: true });
    return;
  }
  swipeObserver?.enable();
  wheelObserver?.enable();
  if (!track.value) return;
  animating = true;
  animation?.kill();
  animation = gsap.to(track.value, {
    xPercent: -activeIndex.value * 100,
    duration: motion?.matches || previous === activeIndex.value ? 0 : 0.85,
    ease: "power3.inOut",
    onComplete: () => {
      animating = false;
    },
  });
}

function onKeydown(event) {
  if (
    isDetail.value ||
    event.target.closest("input, textarea, select, [contenteditable]")
  )
    return;
  const direction =
    event.key === "ArrowRight" || event.key === "ArrowDown"
      ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowUp"
        ? -1
        : 0;
  if (direction) {
    event.preventDefault();
    selectProject(activeIndex.value + direction);
  }
}

onMounted(() => {
  gsap.registerPlugin(Observer);
  motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Horizontal drags navigate the poster slider; vertical gestures remain available in case studies.
  swipeObserver = Observer.create({
    target: viewport.value,
    type: "touch,pointer",
    lockAxis: true,
    dragMinimum: 12,
    ignore: "[data-slider-controls], a, button",
    onDragEnd: (self) => {
      if (self.axis !== "x" || Math.abs(self.x - self.startX) < 40) return;
      selectProject(activeIndex.value + (self.x < self.startX ? 1 : -1));
    },
  });
  wheelObserver = Observer.create({
    target: viewport.value,
    type: "wheel",
    preventDefault: true,
    tolerance: 24,
    ignoreCheck: (event) => event.ctrlKey,
    onDown: () => {
      if (wheelReady) {
        wheelReady = false;
        selectProject(activeIndex.value + 1);
      }
    },
    onUp: () => {
      if (wheelReady) {
        wheelReady = false;
        selectProject(activeIndex.value - 1);
      }
    },
    onStopDelay: 0.25,
    onStop: () => {
      wheelReady = true;
    },
  });
  stopRouteWatch = watch(
    () => [route.query.project, route.query.view],
    syncRoute,
    { flush: "post" },
  );
  syncRoute();
});

onBeforeUnmount(() => {
  stopRouteWatch?.();
  swipeObserver?.kill();
  wheelObserver?.kill();
  animation?.kill();
});
</script>

<template>
  <main :lang="locale" class="dolbome-project" @keydown="onKeydown">
    <div
      v-show="!isDetail"
      ref="viewport"
      class="poster-slider"
      aria-roledescription="carousel"
      :aria-label="t('dolbome.labels.a006')"
    >
      <div ref="track" class="slider-track">
        <section
          v-for="(item, index) in projects"
          :key="item.slug"
          class="poster-slide"
          :style="{
            '--poster-color': item.color,
            '--poster-background': item.background,
            background: item.background,
          }"
          :inert="index !== activeIndex"
          :aria-hidden="index !== activeIndex"
          :aria-label="item.title"
          aria-roledescription="slide"
        >
          <div class="poster-word" aria-hidden="true">{{ item.category }}</div>
          <component :is="item.component" poster />
          <div class="poster-shade" />
          <div class="poster-heading">
            <p class="project-kicker">
              PROJECT 0{{ index + 1 }} <span>/</span> {{ item.category }}
            </p>
            <DolbomeAnimatedTitle
              :text="item.title"
              :active="index === activeIndex && !isDetail"
              :direction="slideDirection"
            />
            <p class="project-description">{{ item.description }}</p>
            <button
              type="button"
              class="open-project"
              @click="updateQuery(index, 'detail')"
            >
              {{ t("dolbome.copy.c246") }}
            </button>
          </div>
        </section>
      </div>
      <header class="poster-header" data-slider-controls>
        <RouterLink to="/" class="portfolio-link">ART</RouterLink>
        <div class="header-actions">
          <div
            class="language-switch"
            role="group"
            :aria-label="t('dolbome.controls.language')"
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
          <span class="header-number">0{{ activeIndex + 1 }} — 03</span>
        </div>
      </header>
      <nav
        class="project-index"
        data-slider-controls
        :aria-label="t('dolbome.labels.a007')"
      >
        <button
          v-for="(item, index) in projects"
          :key="item.slug"
          type="button"
          :class="{ active: activeIndex === index }"
          :style="{ '--tab-color': item.color }"
          :aria-current="activeIndex === index ? 'true' : undefined"
          @click="selectProject(index)"
        >
          <span>0{{ index + 1 }} / {{ item.category }}</span
          ><strong>{{ item.title }}</strong>
        </button>
      </nav>
      <footer class="poster-footer" data-slider-controls>
        <p class="scroll-cue">SCROLL / SWIPE TO EXPLORE</p>
        <p class="role-caption">{{ t("dolbome.copy.c247") }}</p>
        <div class="slide-controls">
          <button
            type="button"
            :aria-label="t('dolbome.labels.a008')"
            @click="selectProject(activeIndex - 1)"
          >
            ←</button
          ><span aria-live="polite">0{{ activeIndex + 1 }} / 03</span
          ><button
            type="button"
            :aria-label="t('dolbome.labels.a009')"
            @click="selectProject(activeIndex + 1)"
          >
            →
          </button>
        </div>
      </footer>
    </div>

    <div v-if="isDetail" ref="detail" class="case-reader" @scroll.passive="updateDetailScroll">
      <header class="case-header">
        <button type="button" @click="updateQuery(activeIndex, 'poster')">
          {{ t("dolbome.copy.c248") }}
        </button>
        <h1 ref="detailTitle" tabindex="-1">{{ project.title }}</h1>
        <div class="case-header-actions">
          <div
            class="language-switch"
            role="group"
            :aria-label="t('dolbome.controls.language')"
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
        </div>
      </header>
      <component
        :is="project.component"
        :key="project.slug"
        @ready="resetDetailScroll"
      />
      <footer class="case-footer">
        <button type="button" @click="updateQuery(activeIndex, 'poster')">
          {{ t("dolbome.copy.c249") }}
        </button>
        <button
          type="button"
          @click="updateQuery((activeIndex + 1) % projects.length, 'detail')"
        >
          {{
            t("dolbome.controls.nextCase", {
              name: projects[(activeIndex + 1) % projects.length].title,
            })
          }}
        </button>
      </footer>
    </div>
    <Transition name="fade">
      <div v-if="isDetail && isScrolling" class="scroll-btn-group2">
        <button type="button" class="scroll-btn top" :aria-label="t('dolbome.controls.scrollTop')" @click="scrollToTop">
          <span class="material-icons-round" aria-hidden="true">expand_less</span>
        </button>
        <button type="button" class="scroll-btn bottom" :aria-label="t('dolbome.controls.scrollBottom')" @click="scrollToBottom">
          <span class="material-icons-round" aria-hidden="true">expand_more</span>
        </button>
      </div>
    </Transition>
  </main>
</template>

<style scoped lang="scss">
$cream: #f6f3dd;
.dolbome-project {
  line-height: 1.6;
  word-break: keep-all;
  overflow-wrap: break-word;
  &:lang(en) { word-break: normal; }
  position: fixed;
  inset: 0;
  background: #101d19;
  font-family: "Pretendard", sans-serif;
  color: $cream;
  isolation: isolate;
  button {
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
  .poster-slider {
    height: 100%;
    overflow: hidden;
    touch-action: pan-y pinch-zoom;
  }
  .slider-track {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .poster-slide {
    position: relative;
    width: 100%;
    height: 100%;
    flex: 0 0 100%;
    overflow: hidden;
  }
  .poster-word {
    position: absolute;
    top: 12%;
    left: 4.7%;
    font-weight: 700;
    font-size: clamp(96px, 12.8vw, 220px);
    color: var(--poster-color);
    opacity: 0.07;
    white-space: nowrap;
  }
  .poster-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--poster-background) 20%, transparent),
      color-mix(in srgb, var(--poster-background) 48%, transparent) 45%,
      var(--poster-background)
    );
    pointer-events: none;
  }
  .poster-heading {
    position: absolute;
    inset: 34% 24px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .project-kicker {
    color: var(--poster-color);
    font-size: 12px;
    letter-spacing: 3px;
    span {
      padding: 0 16px;
    }
  }
  h1 {
    font-size: clamp(48px, 6.7vw, 104px);
    letter-spacing: -3px;
  }
  .project-description {
    font-size: 19px;
  }
  .open-project {
    padding: 8px;
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
  .poster-header {
    position: absolute;
    top: 32px;
    left: 60px;
    right: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    font-size: 12px;
  }
  .portfolio-link {
    color: $cream !important;
    font-weight: 700;
    font-size: 38px;
  }
  .poster-header p span {
    padding: 0 8px;
  }
  .header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    button {
      min-height: 44px;
      opacity: 0.5;
      &[aria-pressed="true"] {
        opacity: 1;
      }
    }
  }
  .language-switch {
    display: flex;
    align-items: center;
    gap: 8px;
    button {
      min-height: 44px;
      min-width: 28px;
      font-size: 12px;
      opacity: 0.5;
      &[aria-pressed="true"] {
        opacity: 1;
        font-weight: 700;
      }
    }
  }
  .case-header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &:lang(en) .poster-heading h1 {
    font-size: clamp(40px, 6vw, 92px);
    letter-spacing: -2px;
  }
  .header-number {
    margin-left: 16px;
  }
  .project-index {
    position: absolute;
    left: 60px;
    right: 60px;
    bottom: 92px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }
  .project-index button {
    border-top: 2px solid #7e7b80;
    padding: 12px 0;
    text-align: left;
    opacity: 0.44;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: opacity 0.2s;
    span {
      font-size: 11px;
    }
    strong {
      font-size: 17px;
    }
    &.active,
    &:hover {
      opacity: 1;
      border-color: var(--tab-color);
    }
    &.active span {
      color: var(--tab-color);
    }
  }
  .poster-footer {
    position: absolute;
    left: 60px;
    right: 60px;
    bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    font-size: 11px;
  }
  .slide-controls {
    display: flex;
    gap: 12px;
    align-items: center;
    button {
      width: 44px;
      height: 44px;
      font-size: 22px;
    }
  }
  .case-reader {
    width: 100%;
    min-width: 0;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    overflow-anchor: none;
    background: #fff;
    color: #242a32;
  }
  .case-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    min-height: 72px;
    padding: 12px 48px;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid #e5e7eb;
    h1 {
      font-size: 17px;
      letter-spacing: 0;
    }
    button {
      padding: 8px 0;
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
  .case-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    padding: 48px 60px;
    border-top: 1px solid #e5e7eb;
    button {
      font-size: 18px;
      text-align: left;
      padding: 8px 0;
    }
  }
}
@media (max-width: 1199px) {
  .dolbome-project {
    .poster-header {
      left: 40px;
      right: 40px;
    }
    .project-index {
      left: 40px;
      right: 40px;
      gap: 24px;
    }
    .poster-footer {
      left: 40px;
      right: 40px;
    }
    .poster-heading {
      top: 36%;
    }
    .project-description {
      font-size: 17px;
    }
  }
}
@media (max-width: 767px) {
  .dolbome-project {
    .poster-header {
      top: 16px;
      left: 24px;
      right: 24px;
      gap: 12px;
      p {
        display: none;
      }
    }
    .portfolio-link {
      font-size: 15px;
    }
    .header-actions {
      gap: 16px;
    }
    .poster-heading {
      inset: 35% 20px auto;
      gap: 20px;
    }
    h1 {
      font-size: clamp(26px, 6.8vw, 36px);
      letter-spacing: -1px;
    }
    .project-kicker {
      font-size: 10px;
      letter-spacing: 2px;
    }
    .project-description {
      font-size: 13px;
    }
    .open-project {
      font-size: 12px;
    }
    &:lang(en) .poster-heading h1 {
      font-size: clamp(24px, 6.4vw, 34px);
      letter-spacing: -1px;
    }
    .case-header {
      gap: 8px;
    }
    .case-header-actions {
      gap: 8px;
    }
    .poster-word {
      top: 17%;
      left: -4%;
      font-size: 24vw;
    }
    .project-index {
      left: 24px;
      right: 24px;
      bottom: 88px;
      gap: 12px;
      button {
        gap: 8px;
        span {
          font-size: 9px;
        }
        strong {
          font-size: 12px;
        }
      }
    }
    .poster-footer {
      left: 24px;
      right: 24px;
      bottom: 16px;
      gap: 8px;
    }
    .role-caption {
      display: none;
    }
    .scroll-cue {
      font-size: 9px;
    }
    .slide-controls {
      gap: 4px;
    }
    .case-header {
      padding: 12px 24px;
      gap: 16px;
      h1 {
        font-size: 14px;
      }
      button {
        font-size: 12px;
      }
      span {
        display: none;
      }
    }
    .case-footer {
      gap: 24px;
      padding: 32px 24px;
      button {
        font-size: 15px;
      }
    }
  }
}
@media (max-height: 560px) and (orientation: landscape) {
  .dolbome-project {
    .poster-heading {
      top: 24%;
      gap: 12px;
    }
    .poster-heading h1 {
      font-size: clamp(26px, 4.8vw, 36px);
    }
    .project-index {
      bottom: 64px;
      button {
        gap: 4px;
        padding: 8px 0;
      }
    }
    .poster-footer {
      bottom: 8px;
    }
    .project-description {
      font-size: 14px;
    }
  }
}
.dolbome-project {
  .scroll-btn-group2 {
    position: fixed;
    right: 50px;
    bottom: 80px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .scroll-btn {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border: 1px solid rgba(36, 42, 50, 0.12);
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.88);
      color: #242a32;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }
  .fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
  .fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(12px); }
}
@media (max-width: 767px) {
  .dolbome-project .scroll-btn-group2 {
    right: 20px;
    bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  }
}
@media (prefers-reduced-motion: reduce) {
  .dolbome-project .fade-enter-active, .dolbome-project .fade-leave-active { transition: none; }
}
</style>
