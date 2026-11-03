<script setup>
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import DolbomeScreen from "./DolbomeScreen.vue";
import ambientImage from "@/assets/img/dolbome/745298d415265cd5.svg?no-inline";

import screen24_1503 from "@/assets/img/dolbome/screens/24-1503.png";
import screen1_144 from "@/assets/img/dolbome/screens/1-144.png";
import screen1_308 from "@/assets/img/dolbome/screens/1-308.png";
import screen1_421 from "@/assets/img/dolbome/screens/1-421.png";
import DolbomeCommunitySitemap from "./DolbomeCommunitySitemap.vue";
import screen1_736 from "@/assets/img/dolbome/screens/1-736.png";
import screen1_789 from "@/assets/img/dolbome/screens/1-789.png";
import screen1_849 from "@/assets/img/dolbome/screens/1-849.png";
import screen1_1016 from "@/assets/img/dolbome/screens/1-1016.png";
import screen1_1132 from "@/assets/img/dolbome/screens/1-1132.png";
import screen1_1214 from "@/assets/img/dolbome/screens/1-1214.png";
import screen1_1272 from "@/assets/img/dolbome/screens/1-1272.png";
import screen1_1324 from "@/assets/img/dolbome/screens/1-1324.png";

const { t } = useI18n();
const emit = defineEmits(["ready"]);
defineProps({ poster: Boolean });

onMounted(() => emit("ready"));
</script>
<template>
  <div v-if="poster" class="poster-visual" aria-hidden="true">
    <img class="poster-ambient" :src="ambientImage" alt="" />
    <div class="poster-screens">
      <DolbomeScreen
        :src="screen24_1503"
        :width="984.0"
        :height="698.6400146484375"
        label="Editable UI / COMMUNITY"
      />
    </div>
  </div>
  <article v-else class="dolbome-case community">
    <section class="community-cover case-panel">
      <p class="community-section__description case-text--lead">[2026.08-2026.10]</p>
      <p class="community-cover__title case-text--display">
        {{ t("dolbome.copy.c000") }}
      </p>
      <p class="community-cover__subtitle case-text--subheading">
        {{ t("dolbome.copy.c001") }}
      </p>
      <p class="community-section__description case-text--lead">
        {{ t("dolbome.copy.c002") }}
      </p>
      <div class="community-tech__list case-grid">
        <div class="community-tech__badge case-panel">
          <p class="community-tech__label case-text--caption">Figma</p>
        </div>
        <div class="community-tech__badge case-panel">
          <p class="community-tech__label case-text--caption">Thymeleaf</p>
        </div>
        <div class="community-tech__badge case-panel">
          <p class="community-tech__label case-text--caption">SCSS</p>
        </div>
        <div class="community-tech__badge case-panel">
          <p class="community-tech__label case-text--caption">HTML / JavaScript</p>
        </div>
      </div>
      <div class="community-cover__screens case-grid">
        <DolbomeScreen
          :src="screen1_144"
          :width="360.0"
          :height="820.0"
          :label="t('dolbome.labels.a010')"
        /><DolbomeScreen
          :src="screen1_308"
          :width="360.0"
          :height="820.0"
          :label="t('dolbome.labels.a011')"
        /><DolbomeScreen
          :src="screen1_421"
          :width="382.0"
          :height="814.0"
          :label="t('dolbome.labels.a012')"
        />
      </div>
    </section>
    <section class="community-content__section case-panel">
      <h2 class="community-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c003")
          }}</span>
        </span>
      </h2>
      <div class="community-section__intro case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c004") }}</p>
        <p class="case-lead__line case-lead__line--last">
          {{ t("dolbome.copy.c005") }}
        </p>
      </div>
      <div class="case-content__row case-grid">
        <div class="case-scope__card case-panel">
          <p class="community-scope__title case-text--lead">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="community-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c007") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c008") }}
            </p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="community-scope__title case-text--lead">
            {{ t("dolbome.copy.c009") }}
          </p>
          <div class="community-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c010") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c011") }}
            </p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="community-scope__title case-text--lead">
            {{ t("dolbome.copy.c012") }}
          </p>
          <div class="community-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c013") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c014") }}
            </p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="community-scope__title case-text--lead">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="community-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c016") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c017") }}
            </p>
          </div>
        </div>
      </div>
      <div class="community-project__meta case-text--body case-grid">
        <div class="community-project__meta-item">
          <p class="case-body__line">PROJECT</p>
          <p class="case-body__line case-body__line--last">
            {{ t("dolbome.copy.c018") }}
          </p>
        </div>
        <div class="community-project__meta-item">
          <p class="case-body__line">ROLE</p>
          <p class="case-body__line case-body__line--last">
            {{ t("dolbome.copy.c019") }}
          </p>
        </div>
        <div class="community-project__meta-item">
          <p class="case-body__line">STACK</p>
          <p class="case-body__line case-body__line--last">Thymeleaf / SCSS</p>
        </div>
      </div>
    </section>
    <section class="community-muted__section case-panel">
      <h2 class="community-process__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c020")
          }}</span>
        </span>
      </h2>
      <p class="community-section__summary case-text--lead">
        {{ t("dolbome.copy.c021") }}
      </p>
      <div class="case-card__row case-grid">
        <div class="case-process__card case-panel">
          <p class="community-process__number case-text--heading">01</p>
          <p class="community-process__title case-text--subheading">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="community-process__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c022") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c023") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="community-process__number case-text--heading">02</p>
          <p class="community-process__title case-text--subheading">
            {{ t("dolbome.copy.c024") }}
          </p>
          <div class="community-process__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c009") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c025") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="community-process__number case-text--heading">03</p>
          <p class="community-process__title case-text--subheading">
            {{ t("dolbome.copy.c026") }}
          </p>
          <div class="community-process__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c027") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c028") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="community-process__number case-text--heading">04</p>
          <p class="community-process__title case-text--subheading">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="community-process__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c029") }}</p>
            <p class="case-body__line case-body__line--last">
              {{ t("dolbome.copy.c030") }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="community-planning__section case-panel">
      <h2 class="community-planning__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c031")
          }}</span>
        </span>
      </h2>
      <div class="community-planning__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c032") }}</p>
        <p class="case-lead__line case-lead__line--last">
          {{ t("dolbome.copy.c033") }}
        </p>
      </div>
      <DolbomeCommunitySitemap />
      <p class="community-planning__highlight case-text--lead">
        {{ t("dolbome.copy.c034") }}
      </p>
    </section>
    <section class="community-wireframe__section case-panel">
      <h2 class="community-wireframe__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c035")
          }}</span>
        </span>
      </h2>
      <div class="community-planning__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c036") }}</p>
        <p class="case-lead__line case-lead__line--last">
          {{ t("dolbome.copy.c037") }}
        </p>
      </div>
      <div class="case-split__row case-grid">
        <DolbomeScreen
          :src="screen1_736"
          :width="340.0"
          :height="703.1818237304688"
          :label="t('dolbome.labels.a013')"
        /><DolbomeScreen
          :src="screen1_789"
          :width="812.0"
          :height="567.0"
          :label="t('dolbome.labels.a014')"
        />
      </div>
      <div class="community-state__list case-grid">
        <div class="case-state__card case-panel">
          <p class="community-state__label case-text--caption">EMPTY</p>
          <p class="community-state__description case-text--body">
            {{ t("dolbome.copy.c038") }}
          </p>
        </div>
        <div class="case-state__card case-panel">
          <p class="community-state__label case-text--caption">CONFIRM</p>
          <p class="community-state__description case-text--body">
            {{ t("dolbome.copy.c039") }}
          </p>
        </div>
        <div class="case-state__card case-panel">
          <p class="community-state__label case-text--caption">COMPLETE</p>
          <p class="community-state__description case-text--body">
            {{ t("dolbome.copy.c040") }}
          </p>
        </div>
      </div>
    </section>
    <section class="community-planning__section case-panel">
      <h2 class="community-wireframe__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c041")
          }}</span>
        </span>
      </h2>
      <p class="community-section__description case-text--lead">
        {{ t("dolbome.copy.c042") }}
      </p>
      <div class="case-split__row case-grid">
        <div class="case-color__panel case-panel">
          <p class="community-color__label case-text--caption">COLOR</p>
          <div class="case-color__palette case-grid">
            <div class="case-color__swatch case-panel">
              <div class="community-swatch__pink"></div>
              <p class="community-swatch__label case-text--small">PINK</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="community-swatch__blush"></div>
              <p class="community-swatch__label case-text--small">BLUSH</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="community-swatch__mint"></div>
              <p class="community-swatch__label case-text--small">MINT</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="community-swatch__white"></div>
              <p class="community-swatch__label case-text--small">WHITE</p>
            </div>
          </div>
        </div>
        <div class="community-typography__panel case-panel">
          <p class="community-typography__label case-text--caption">TYPOGRAPHY</p>
          <p class="community-font__name case-text--subheading">
            {{ t("dolbome.copy.c043") }}
          </p>
          <div class="community-font__description case-text--body">
            <p class="case-description__line">{{ t("dolbome.copy.c044") }}</p>
            <p class="case-description__line case-description__line--last">
              {{ t("dolbome.copy.c045") }}
            </p>
          </div>
          <p class="community-font__note case-text--body">
            {{ t("dolbome.copy.c046") }}
          </p>
        </div>
      </div>
    </section>
    <section class="core-screens">
      <h2>{{ t("dolbome.copy.c047") }}</h2>
      <p class="section-description">{{ t("dolbome.copy.c048") }}</p>
      <div class="community-screen__grid case-grid">
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_849"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a010')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c049") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c050") }}
          </p>
        </div>
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_1016"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a011')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c051") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c052") }}
          </p>
        </div>
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_1132"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a015')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c053") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c054") }}
          </p>
        </div>
      </div>
      <div class="community-screen__grid community-screen__grid--continuation case-grid">
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_1214"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a016')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c055") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c056") }}
          </p>
        </div>
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_1272"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a017')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c057") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c058") }}
          </p>
        </div>
        <div class="community-screen__card case-panel">
          <DolbomeScreen
            :src="screen1_1324"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a012')"
          />
          <p class="community-screen__title case-text--lead">
            {{ t("dolbome.copy.c059") }}
          </p>
          <p class="community-screen__description case-text--caption">
            {{ t("dolbome.copy.c060") }}
          </p>
        </div>
      </div>
    </section>
    <section class="community-content__section case-panel">
      <h2 class="community-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">

          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c061")
          }}</span>
        </span>
      </h2>
      <div class="community-section__intro case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c062") }}</p>
        <p class="case-lead__line case-lead__line--last">
          {{ t("dolbome.copy.c063") }}
        </p>
      </div>
      <div class="case-detail__row case-grid">
        <div class="community-implementation__card case-panel">
          <p class="community-implementation__title case-text--subheading">Thymeleaf</p>
          <div class="community-implementation__description case-text--body">
            <p class="case-description__line">{{ t("dolbome.copy.c064") }}</p>
            <p class="case-description__line case-description__line--last">
              {{ t("dolbome.copy.c065") }}
            </p>
          </div>
        </div>
        <div class="community-implementation__card case-panel">
          <p class="community-implementation__title case-text--subheading">SCSS</p>
          <div class="community-implementation__description case-text--body">
            <p class="case-description__line">{{ t("dolbome.copy.c066") }}</p>
            <p class="case-description__line case-description__line--last">
              {{ t("dolbome.copy.c067") }}
            </p>
          </div>
        </div>
      </div>
      <div class="case-content__row case-grid">
        <div class="community-template__tree-panel case-text--caption case-panel">
          <p class="community-template__tree-title">
            {{ t("dolbome.copy.c068") }}
          </p>
          <div class="community-template__tree">
            <p class="case-file-tree__line">views/</p>
            <p class="case-file-tree__line">└─ community/</p>
            <p class="case-file-tree__line">├─ admin/</p>
            <p class="case-file-tree__line">├─ include/</p>
            <p class="case-file-tree__line">└─ user/</p>
            <p class="case-file-tree__line">├─ category/</p>
            <p class="case-file-tree__line">│ ├─ alarmPage.html</p>
            <p class="case-file-tree__line">│ ├─ alarmSetting.html</p>
            <p class="case-file-tree__line">│ ├─ centerPost.html</p>
            <p class="case-file-tree__line">
              │ ├─ hotChart.html / newPosts.html
            </p>
            <p class="case-file-tree__line">
              │ └─ noticeBoard.html / noticeDetail.html
            </p>
            <p class="case-file-tree__line">├─ center/</p>
            <p class="case-file-tree__line">
              │ └─ centerBoard.html / centerPage.html
            </p>
            <p class="case-file-tree__line">├─ chat/</p>
            <p class="case-file-tree__line">
              │ ├─ chatMain.html / chatRoom.html
            </p>
            <p class="case-file-tree__line">│ ├─ chatRoomList.html</p>
            <p class="case-file-tree__line">
              │ ├─ chatRequest.html / chatReport.html
            </p>
            <p class="case-file-tree__line">
              │ ├─ chatAlarm.html / chatSetting.html
            </p>
            <p class="case-file-tree__line">
              │ └─ chatShare.html / chatShareList.html
            </p>
            <p class="case-file-tree__line">├─ my/</p>
            <p class="case-file-tree__line">
              │ ├─ myPage.html / myPostList.html
            </p>
            <p class="case-file-tree__line">
              │ ├─ myCommentList.html / myLikeList.html
            </p>
            <p class="case-file-tree__line">
              │ └─ myCenterList.html / blockPage.html
            </p>
            <p class="case-file-tree__line">├─ post/</p>
            <p class="case-file-tree__line">
              │ ├─ allPost.html / viewPost.html
            </p>
            <p class="case-file-tree__line">
              │ └─ writePost.html / reportPost.html
            </p>
            <p class="case-file-tree__line">├─ communityMain.html</p>
            <p class="case-file-tree__line">├─ allMenu.html</p>
            <p class="case-file-tree__line case-file-tree__line--last">
              └─ profileEdit.html / searchPage.html
            </p>
          </div>
        </div>
        <div class="community-style__tree-panel case-panel">
          <p class="community-style__tree-title case-text--caption">
            {{ t("dolbome.copy.c069") }}
          </p>
          <div class="community-style__tree case-text--caption">
            <p class="case-file-tree__line">templates/</p>
            <p class="case-file-tree__line">└─ static/</p>
            <p class="case-file-tree__line">├─ css/</p>
            <p class="case-file-tree__line">├─ fonts/</p>
            <p class="case-file-tree__line">├─ img/</p>
            <p class="case-file-tree__line">│ └─ community/</p>
            <p class="case-file-tree__line">│ ├─ common/</p>
            <p class="case-file-tree__line">│ └─ user/</p>
            <p class="case-file-tree__line">│ ├─ avatar_pink.png</p>
            <p class="case-file-tree__line">│ ├─ center_mark.png</p>
            <p class="case-file-tree__line">│ ├─ my_bg.png</p>
            <p class="case-file-tree__line">│ └─ sprite.svg</p>
            <p class="case-file-tree__line">├─ js/</p>
            <p class="case-file-tree__line">│ └─ community/</p>
            <p class="case-file-tree__line">│ ├─ admin/common.js</p>
            <p class="case-file-tree__line">│ ├─ common/</p>
            <p class="case-file-tree__line">│ └─ user/common.js</p>
            <p class="case-file-tree__line">└─ scss/</p>
            <p class="case-file-tree__line">├─ _variables.scss</p>
            <p class="case-file-tree__line">├─ _mixins.scss</p>
            <p class="case-file-tree__line">├─ common.scss</p>
            <p class="case-file-tree__line">├─ community.scss</p>
            <p class="case-file-tree__line case-file-tree__line--last">
              └─ community-nav.scss
            </p>
          </div>
          <p class="community-file-tree__note case-text--caption">
            {{ t("dolbome.copy.c070") }}
          </p>
        </div>
      </div>
    </section>
    <section class="community-muted__section case-panel">
      <h2 class="community-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c071")
          }}</span>
        </span>
      </h2>
      <p class="community-section__summary case-text--lead">
        {{ t("dolbome.copy.c072") }}
      </p>
      <div class="community-file-map__row case-grid">
        <p class="community-file-map__number case-text--subheading">01</p>
        <div class="community-file-map__design case-panel">
          <p class="community-file-map__title case-text--lead">
            {{ t("dolbome.copy.c073") }}
          </p>
          <p class="community-file-map__description case-text--caption">
            {{ t("dolbome.copy.c074") }}
          </p>
        </div>
        <div class="community-file-map__files case-panel">
          <p class="community-file-map__label case-text--caption">HTML TEMPLATE</p>
          <p class="community-file-map__path case-text--body">
            communityMain.html / post/allPost.html
          </p>
        </div>
      </div>
      <div class="community-file-map__row case-grid">
        <p class="community-file-map__number case-text--subheading">02</p>
        <div class="community-file-map__design case-panel">
          <p class="community-file-map__title case-text--lead">
            {{ t("dolbome.copy.c075") }}
          </p>
          <p class="community-file-map__description case-text--caption">
            {{ t("dolbome.copy.c076") }}
          </p>
        </div>
        <div class="community-file-map__files case-panel">
          <p class="community-file-map__label case-text--caption">HTML TEMPLATE</p>
          <p class="community-file-map__path case-text--body">
            center/centerPage.html / center/centerBoard.html
          </p>
        </div>
      </div>
      <div class="community-file-map__row case-grid">
        <p class="community-file-map__number case-text--subheading">03</p>
        <div class="community-file-map__design case-panel">
          <p class="community-file-map__title case-text--lead">
            {{ t("dolbome.copy.c077") }}
          </p>
          <p class="community-file-map__description case-text--caption">
            {{ t("dolbome.copy.c078") }}
          </p>
        </div>
        <div class="community-file-map__files case-panel">
          <p class="community-file-map__label case-text--caption">HTML TEMPLATE</p>
          <p class="community-file-map__path case-text--body">
            my/myPage.html / my/myPostList.html
          </p>
        </div>
      </div>
      <div class="community-file-map__row case-grid">
        <p class="community-file-map__number case-text--subheading">04</p>
        <div class="community-file-map__design case-panel">
          <p class="community-file-map__title case-text--lead">
            {{ t("dolbome.copy.c079") }}
          </p>
          <p class="community-file-map__description case-text--caption">
            {{ t("dolbome.copy.c080") }}
          </p>
        </div>
        <div class="community-file-map__files case-panel">
          <p class="community-file-map__label case-text--caption">HTML TEMPLATE</p>
          <p class="community-file-map__path case-text--body">
            chat/chatRoomList.html / chat/chatRoom.html
          </p>
        </div>
      </div>
    </section>
    <section class="community-closing__section case-panel">
      <p class="community-closing__title case-text--display">
        {{ t("dolbome.copy.c081") }}
      </p>
      <p class="community-closing__description case-text--lead">
        {{ t("dolbome.copy.c082") }}
      </p>
      <div class="case-closing__meta case-text--body case-grid">
        <p class="community-closing__role">
          {{ t("dolbome.copy.c083") }}
        </p>
        <p class="case-closing__stack">Thymeleaf / SCSS</p>
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@use "@/assets/dolbome-case.scss";
</style>
