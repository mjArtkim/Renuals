<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const columns = computed(() =>
  Array.from({ length: 9 }, (_, index) => ({
    title: t(`dolbome.sitemap.columns.${index}.title`),
    items: Array.from(
      { length: [7, 9, 8, 9, 9, 6, 10, 11, 8][index] },
      (_, itemIndex) =>
        t(`dolbome.sitemap.columns.${index}.items.${itemIndex}`),
    ),
  })),
);
const screens = computed(() =>
  Array.from({ length: 24 }, (_, index) =>
    t(`dolbome.sitemap.screens.${index}`),
  ),
);
</script>

<template>
  <section class="community-sitemap" aria-labelledby="sitemap-heading">
    <header class="sitemap-header">
      <h3 id="sitemap-heading">COMMUNITY / SITEMAP</h3>
      <p>{{ t("dolbome.copy.c229") }}</p>
      <p class="mobile-hint">{{ t("dolbome.copy.c230") }}</p>
    </header>
    <div
      class="tree-scroll"
      tabindex="0"
      role="region"
      :aria-label="t('dolbome.labels.a000')"
    >
      <div class="sitemap-tree">
        <div class="entry">
          <strong>{{ t("dolbome.copy.c231") }}</strong>
          <p>{{ t("dolbome.copy.c232") }}</p>
          <strong>{{ t("dolbome.copy.c233") }}</strong>
        </div>
        <ul class="branches">
          <li v-for="column in columns" :key="column.title" class="branch">
            <h4>{{ column.title }}</h4>
            <ul>
              <li v-for="item in column.items" :key="item">{{ item }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="sitemap-reference">
      <section class="reference-card">
        <h4>Screen List</h4>
        <ol class="screen-list">
          <li v-for="(screen, index) in screens" :key="screen">
            <span>{{ String(index + 1).padStart(2, "0") }}</span
            >{{ screen }}
          </li>
        </ol>
        <p class="reference-note">{{ t("dolbome.copy.c234") }}</p>
      </section>
      <section class="reference-card">
        <h4>MENU</h4>
        <dl>
          <dt>{{ t("dolbome.copy.c235") }}</dt>
          <dd>{{ t("dolbome.copy.c236") }}</dd>
          <dt>{{ t("dolbome.copy.c233") }}</dt>
          <dd>{{ t("dolbome.copy.c237") }}</dd>
          <dt>{{ t("dolbome.copy.c238") }}</dt>
          <dd>{{ t("dolbome.copy.c239") }}</dd>
        </dl>
      </section>
      <section class="reference-card">
        <h4>NAVIGATION</h4>
        <ul class="navigation-list">
          <li>{{ t("dolbome.copy.c240") }}</li>
          <li>{{ t("dolbome.copy.c241") }}</li>
          <li>{{ t("dolbome.copy.c242") }}</li>
          <li>{{ t("dolbome.copy.c243") }}</li>
        </ul>
        <h4 class="palette-title">MAIN COLOR PALETTE</h4>
        <ul class="palette" :aria-label="t('dolbome.labels.a001')">
          <li class="blush" :aria-label="t('dolbome.labels.a002')" />
          <li class="white" :aria-label="t('dolbome.labels.a003')" />
          <li class="mint" :aria-label="t('dolbome.labels.a004')" />
          <li class="pink" :aria-label="t('dolbome.labels.a005')" />
        </ul>
        <p class="reference-note">
          {{ t("dolbome.copy.c244") }}<br />{{ t("dolbome.copy.c245") }}
        </p>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
$line: #d9dde2;
.community-sitemap {
  width: 100%;
  min-width: 0;
  padding: 32px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: white;
  color: #242a32;
  font-size: 12px;
  h3,
  h4,
  p,
  ul,
  ol,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  .sitemap-header {
    h3 {
      font-size: 20px;
    }
    p {
      margin-top: 12px;
      color: #777e87;
      font-size: 13px;
    }
  }
  .mobile-hint {
    display: none;
  }
  .tree-scroll {
    overflow-x: auto;
    margin-top: 32px;
    padding-bottom: 16px;
    scrollbar-width: thin;
    &:focus-visible {
      outline: 2px solid #ee587f;
      outline-offset: 4px;
    }
  }
  .sitemap-tree {
    min-width: 1080px;
  }
  .entry {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    position: relative;
    padding-bottom: 24px;
    strong,
    p {
      padding: 8px 12px;
      border: 1px solid $line;
      text-align: center;
    }
    strong {
      min-width: 176px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 24px;
      border-left: 1px solid $line;
    }
  }
  .branches {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 8px;
  }
  .branch {
    position: relative;
    padding-top: 16px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      border-top: 1px solid $line;
    }
    &:first-child::before {
      left: 50%;
    }
    &:last-child::before {
      right: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      height: 16px;
      border-left: 1px solid $line;
    }
    h4 {
      padding: 8px 4px;
      text-align: center;
      border: 1px solid #aab0b8;
      font-size: 12px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 8px;
    }
    li {
      padding: 8px 4px;
      border: 1px solid $line;
      font-size: 11px;
      overflow-wrap: anywhere;
    }
  }
  .sitemap-reference {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.1fr;
    align-items: start;
    gap: 16px;
    margin-top: 40px;
  }
  .reference-card {
    padding: 16px;
    border: 1px solid $line;
    min-width: 0;
    h4 {
      font-size: 13px;
      margin-bottom: 12px;
    }
  }
  .screen-list {
    columns: 2;
    column-gap: 16px;
    li {
      break-inside: avoid;
      display: flex;
      gap: 8px;
      font-size: 11px;
    }
    span {
      font-variant-numeric: tabular-nums;
      color: #777e87;
    }
  }
  .reference-note {
    margin-top: 16px;
    color: #777e87;
    font-size: 10px;
  }
  dt {
    margin-top: 16px;
    font-weight: 700;
    &:first-child {
      margin-top: 0;
    }
  }
  dd,
  .navigation-list {
    font-size: 11px;
  }
  .palette-title {
    margin-top: 16px;
  }
  .palette {
    display: flex;
    gap: 8px;
    li {
      width: 40px;
      height: 40px;
      border: 1px solid #e5e7eb;
    }
    .blush {
      background: #facac9;
    }
    .white {
      background: white;
    }
    .mint {
      background: #ccf4d6;
    }
    .pink {
      background: #ffb2c5;
    }
  }
}
@media (max-width: 1199px) {
  .community-sitemap {
    .mobile-hint {
      display: block;
      color: #ee587f;
    }
    .sitemap-reference {
      grid-template-columns: 1fr 1fr;
    }
    .reference-card:first-child {
      grid-column: 1 / -1;
    }
    .screen-list {
      columns: 3;
    }
  }
}
@media (max-width: 767px) {
  .community-sitemap {
    padding: 24px 16px;
    .sitemap-header h3 {
      font-size: 17px;
    }
    .sitemap-reference {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .screen-list {
      columns: 2;
    }
    .tree-scroll {
      margin-top: 24px;
    }
  }
}
</style>
