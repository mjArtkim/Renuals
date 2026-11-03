<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { onMounted } from "vue";
const emit = defineEmits(["ready"]);
onMounted(() => emit("ready"));
import DolbomeScreen from "./DolbomeScreen.vue";
import ambientImage from "@/assets/img/dolbome/64b4d56ce48effad.svg?no-inline";
defineProps({ poster: Boolean });

import screen24_2341 from "@/assets/img/dolbome/screens/24-2341.png";
import screen8_165 from "@/assets/img/dolbome/screens/8-165.png";
import screen8_422 from "@/assets/img/dolbome/screens/8-422.png";
import screen8_613 from "@/assets/img/dolbome/screens/8-613.png";
import screen8_653 from "@/assets/img/dolbome/screens/8-653.png";
import screen8_724 from "@/assets/img/dolbome/screens/8-724.png";
import screen8_877 from "@/assets/img/dolbome/screens/8-877.png";
import screen8_972 from "@/assets/img/dolbome/screens/8-972.png";
import screen8_1049 from "@/assets/img/dolbome/screens/8-1049.png";
import screen8_1169 from "@/assets/img/dolbome/screens/8-1169.png";
</script>
<template>
  <div v-if="poster" class="poster-visual" aria-hidden="true">
    <img class="poster-ambient" :src="ambientImage" alt="" />
    <div class="poster-screens">
      <DolbomeScreen
        :src="screen24_2341"
        :width="984.0"
        :height="533.0"
        label="Editable UI / CAREERS"
      />
    </div>
  </div>
  <article v-else class="dolbome-case careers">
    <section class="careers-accent__section case-panel">
      <div class="careers-cover__title case-text--display">
        <p class="careers-text__line">{{ t("dolbome.copy.c165") }}</p>
      </div>
      <div class="careers-project__meta case-grid">
        <div class="careers-project__meta-title case-text--subheading">
          <p class="careers-text__line">{{ t("dolbome.copy.c167") }}</p>
          <p class="careers-text__line--last">PC &amp; Mobile Web</p>
        </div>
        <div class="careers-project__meta-description case-text--body">
          <p class="careers-text__line">{{ t("dolbome.copy.c168") }}</p>
          <p class="careers-text__line--last">{{ t("dolbome.copy.c169") }}</p>
        </div>
      </div>
      <div class="case-content__row case-grid">
        <DolbomeScreen
          :src="screen8_165"
          :width="900.0"
          :height="650.0"
          :label="t('dolbome.labels.a028')"
        /><DolbomeScreen
          :src="screen8_422"
          :width="268.0"
          :height="650.0"
          :label="t('dolbome.labels.a029')"
        />
      </div>
    </section>
    <section class="careers-audience__section case-panel">
      <h2 class="careers-audience__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c170")
        }}</span>
      </h2>
      <div class="careers-section__intro case-text--lead">
        <p class="careers-text__line">{{ t("dolbome.copy.c171") }}</p>
        <p class="careers-text__line--last">{{ t("dolbome.copy.c172") }}</p>
      </div>
      <div class="careers-audience__list case-grid">
        <div class="careers-audience__card case-panel">
          <p class="careers-audience__label case-text--caption">
            FOR JOB SEEKERS
          </p>
          <p class="careers-audience__title case-text--subheading">
            {{ t("dolbome.copy.c173") }}
          </p>
          <div class="careers-audience__description case-text--lead">
            <p class="careers-text__line">{{ t("dolbome.copy.c174") }}</p>
            <p class="careers-text__line--last">{{ t("dolbome.copy.c175") }}</p>
          </div>
        </div>
        <div class="careers-audience__card case-panel">
          <p class="careers-audience__label case-text--caption">
            FOR EMPLOYERS
          </p>
          <p class="careers-audience__title case-text--subheading">
            {{ t("dolbome.copy.c176") }}
          </p>
          <div class="careers-audience__description case-text--lead">
            <p class="careers-text__line">{{ t("dolbome.copy.c177") }}</p>
            <p class="careers-text__line--last">{{ t("dolbome.copy.c178") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="careers-process__section case-panel">
      <h2 class="careers-process__heading case-text--display">
        <span class="careers-text__line--last"
          >{{ t("dolbome.copy.c179") }} {{ t("dolbome.copy.c180") }}</span
        >
      </h2>
      <div class="careers-process__divider"></div>
      <div class="careers-feature__row case-grid">
        <p class="careers-process__title case-text--subheading">
          {{ t("dolbome.copy.c006") }}
        </p>
        <p class="careers-process__description case-text--lead">
          {{ t("dolbome.copy.c181") }}
        </p>
      </div>
      <div class="careers-process__divider"></div>
      <div class="careers-feature__row case-grid">
        <p class="careers-process__title case-text--subheading">
          {{ t("dolbome.copy.c009") }}
        </p>
        <p class="careers-process__description case-text--lead">
          {{ t("dolbome.copy.c182") }}
        </p>
      </div>
      <div class="careers-process__divider"></div>
      <div class="careers-feature__row case-grid">
        <p class="careers-process__title case-text--subheading">
          {{ t("dolbome.copy.c012") }}
        </p>
        <p class="careers-process__description case-text--lead">
          {{ t("dolbome.copy.c183") }}
        </p>
      </div>
      <div class="careers-process__divider"></div>
      <div class="careers-feature__row case-grid">
        <p class="careers-process__title case-text--subheading">
          {{ t("dolbome.copy.c015") }}
        </p>
        <p class="careers-process__description case-text--lead">
          {{ t("dolbome.copy.c184") }}
        </p>
      </div>
    </section>
    <section class="careers-content__section case-panel">
      <h2 class="careers-wireframe__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c185")
        }}</span>
      </h2>
      <div class="careers-wireframe__description case-text--lead">
        <p class="careers-text__line">{{ t("dolbome.copy.c186") }}</p>
        <p class="careers-text__line--last">{{ t("dolbome.copy.c187") }}</p>
      </div>
      <div class="case-split__row case-grid">
        <DolbomeScreen
          :src="screen8_613"
          :width="330.0"
          :height="757.6865844726562"
          :label="t('dolbome.labels.a030')"
        /><DolbomeScreen
          :src="screen8_653"
          :width="330.0"
          :height="758.0"
          :label="t('dolbome.labels.a031')"
        />
        <div class="careers-specification__card case-panel">
          <p class="careers-specification__title case-text--lead">
            {{ t("dolbome.copy.c188") }}
          </p>
          <p class="careers-specification__description case-text--body">
            {{ t("dolbome.copy.c189") }}
          </p>
          <p class="careers-specification__title case-text--lead">
            {{ t("dolbome.copy.c190") }}
          </p>
          <p class="careers-specification__description case-text--body">
            {{ t("dolbome.copy.c191") }}
          </p>
          <p class="careers-specification__title case-text--lead">
            {{ t("dolbome.copy.c192") }}
          </p>
          <p class="careers-specification__description case-text--body">
            {{ t("dolbome.copy.c193") }}
          </p>
        </div>
      </div>
    </section>
    <section class="careers-muted__section case-panel">
      <h2 class="careers-wireframe__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c194")
        }}</span>
      </h2>
      <div class="case-split__row case-grid">
        <div class="careers-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen8_724"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a029')"
          />
          <p class="careers-mobile-screen__title case-text--subheading">
            {{ t("dolbome.copy.c195") }}
          </p>
          <p class="careers-mobile-screen__description case-text--body">
            {{ t("dolbome.copy.c196") }}
          </p>
        </div>
        <div class="careers-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen8_877"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a032')"
          />
          <p class="careers-mobile-screen__title case-text--subheading">
            {{ t("dolbome.copy.c197") }}
          </p>
          <p class="careers-mobile-screen__description case-text--body">
            {{ t("dolbome.copy.c198") }}
          </p>
        </div>
        <div class="careers-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen8_972"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a033')"
          />
          <p class="careers-mobile-screen__title case-text--subheading">
            {{ t("dolbome.copy.c199") }}
          </p>
          <p class="careers-mobile-screen__description case-text--body">
            {{ t("dolbome.copy.c200") }}
          </p>
        </div>
      </div>
    </section>
    <section class="careers-accent__section case-panel">
      <h2 class="careers-employer__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c201")
        }}</span>
      </h2>
      <p class="careers-employer__description case-text--lead">
        {{ t("dolbome.copy.c202") }}
      </p>
      <DolbomeScreen
        :src="screen8_1049"
        :width="1200.0"
        :height="904.6875"
        :label="t('dolbome.labels.a034')"
      />
      <div class="case-detail__row case-grid">
        <div class="careers-employer__mobile-screen case-panel">
          <DolbomeScreen
            :src="screen8_1169"
            :width="330.0"
            :height="757.6865844726562"
            :label="t('dolbome.labels.a035')"
          />
        </div>
        <div class="careers-employer__features case-panel">
          <p class="careers-employer__feature-title case-text--heading">
            {{ t("dolbome.copy.c203") }}
          </p>
          <p class="careers-employer__feature-description case-text--lead">
            {{ t("dolbome.copy.c204") }}
          </p>
          <div class="careers-employer__divider"></div>
          <p class="careers-employer__feature-title case-text--heading">
            {{ t("dolbome.copy.c205") }}
          </p>
          <p class="careers-employer__feature-description case-text--lead">
            {{ t("dolbome.copy.c206") }}
          </p>
          <div class="careers-employer__divider"></div>
          <p class="careers-platform__label case-text--body">PC / MOBILE</p>
          <p class="careers-employer__feature-description case-text--lead">
            {{ t("dolbome.copy.c207") }}
          </p>
        </div>
      </div>
    </section>
    <section class="careers-implementation__section case-panel">
      <h2 class="careers-implementation__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c208")
        }}</span>
      </h2>
      <div class="careers-section__intro case-text--lead">
        <p class="careers-text__line">{{ t("dolbome.copy.c209") }}</p>
        <p class="careers-text__line--last">{{ t("dolbome.copy.c210") }}</p>
      </div>
      <div class="case-content__row case-grid">
        <div class="careers-template__tree-panel case-panel">
          <p class="careers-template__tree-title case-text--body">
            THYMELEAF / VIEWS
          </p>
          <div class="careers-template__tree case-text--body">
            <p class="careers-text__line">views/recruit/</p>
            <p class="careers-text__line">├ admin/</p>
            <p class="careers-text__line">├ include/</p>
            <p class="careers-text__line">│ ├ admin/</p>
            <p class="careers-text__line">│ └ user/</p>
            <p class="careers-text__line">│ ├ mobile/</p>
            <p class="careers-text__line">│ ├ pc/</p>
            <p class="careers-text__line">│ ├ inc_header.html</p>
            <p class="careers-text__line">│ ├ inc_footer.html</p>
            <p class="careers-text__line">│ └ inc_search.html</p>
            <p class="careers-text__line">└ user/</p>
            <p class="careers-text__line">├ login/</p>
            <p class="careers-text__line">├ mobile/</p>
            <p class="careers-text__line">├ pc/</p>
            <p class="careers-text__line">├ jobInfo.html</p>
            <p class="careers-text__line--last">└ recruitMain.html</p>
          </div>
        </div>
        <div class="careers-style__tree-panel case-panel">
          <p class="careers-style__tree-title case-text--body">
            SCSS / STYLE MODULES
          </p>
          <div class="careers-style__tree case-text--body">
            <p class="careers-text__line">static/scss/</p>
            <p class="careers-text__line">├ recruit/</p>
            <p class="careers-text__line">│ ├ _common.scss</p>
            <p class="careers-text__line">│ ├ _home.scss</p>
            <p class="careers-text__line">│ ├ _job-listings.scss</p>
            <p class="careers-text__line">│ ├ _job-info.scss</p>
            <p class="careers-text__line">│ ├ _job-apply.scss</p>
            <p class="careers-text__line">│ ├ _resume.scss</p>
            <p class="careers-text__line">│ ├ _company-recruit.scss</p>
            <p class="careers-text__line">│ ├ _my-page.scss</p>
            <p class="careers-text__line">│ ├ _mobile-my.scss</p>
            <p class="careers-text__line">│ ├ _responsive.scss</p>
            <p class="careers-text__line">│ └ _shell-navigation.scss</p>
            <p class="careers-text__line">├ _mixins.scss</p>
            <p class="careers-text__line">├ _variables.scss</p>
            <p class="careers-text__line--last">└ recruit.scss</p>
          </div>
        </div>
      </div>
    </section>
    <section class="careers-muted__section case-panel">
      <h2 class="careers-file-map__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c211")
        }}</span>
      </h2>
      <div class="careers-content__divider"></div>
      <div class="careers-feature__row case-grid">
        <div class="careers-reusable__feature case-panel">
          <p class="careers-reusable__title case-text--subheading">
            {{ t("dolbome.copy.c212") }}
          </p>
          <p class="careers-reusable__path case-text--body">include/user/</p>
        </div>
        <p class="careers-reusable__description case-text--lead">
          {{ t("dolbome.copy.c213") }}
        </p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-feature__row case-grid">
        <div class="careers-reusable__feature case-panel">
          <p class="careers-reusable__title case-text--subheading">
            {{ t("dolbome.copy.c214") }}
          </p>
          <p class="careers-reusable__path case-text--body">
            static/scss/recruit/
          </p>
        </div>
        <p class="careers-reusable__description case-text--lead">
          {{ t("dolbome.copy.c215") }}
        </p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-feature__row case-grid">
        <div class="careers-reusable__feature case-panel">
          <p class="careers-reusable__title case-text--subheading">
            {{ t("dolbome.copy.c216") }}
          </p>
          <p class="careers-reusable__path case-text--body">
            static/img/recruit/
          </p>
        </div>
        <p class="careers-reusable__description case-text--lead">
          {{ t("dolbome.copy.c217") }}
        </p>
      </div>
    </section>
    <section class="careers-content__section case-panel">
      <h2 class="careers-file-map__heading case-text--display">
        <span class="careers-text__line--last">{{
          t("dolbome.copy.c218")
        }}</span>
      </h2>
      <p class="careers-file-map__description case-text--lead">
        {{ t("dolbome.copy.c219") }}
      </p>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c220") }}
        </p>
        <p class="careers-file-map__template">
          {{ t("dolbome.copy.c221") }}
        </p>
        <p class="careers-file-map__style">
          {{ t("dolbome.copy.c222") }}
        </p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c223") }}
        </p>
        <p class="careers-file-map__template">recruitMain.html</p>
        <p class="careers-file-map__style">_home.scss</p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c224") }}
        </p>
        <p class="careers-file-map__template">jobInfo.html</p>
        <p class="careers-file-map__style">_job-info.scss</p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c225") }}
        </p>
        <p class="careers-file-map__template">pc/jobApply.html</p>
        <p class="careers-file-map__style">_job-apply.scss</p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c226") }}
        </p>
        <p class="careers-file-map__template">pc/recruitResume.html</p>
        <p class="careers-file-map__style">_resume.scss</p>
      </div>
      <div class="careers-content__divider"></div>
      <div class="careers-file-map__row case-text--body case-grid">
        <p class="careers-file-map__screen">
          {{ t("dolbome.copy.c227") }}
        </p>
        <p class="careers-file-map__template">pc/companyMy.html</p>
        <p class="careers-file-map__style">_company-recruit.scss</p>
      </div>
      <p class="careers-file-map__note case-text--caption">
        {{ t("dolbome.copy.c228") }}
      </p>
    </section>
    <section class="case-closing__section case-panel">
      <p class="case-closing__title case-text--heading">
        {{ t("dolbome.copy.c163") }}
      </p>
      <p class="careers-closing__description case-text--lead">
        {{ t("dolbome.copy.c164") }}
      </p>
      <div class="case-closing__meta case-text--body case-grid">
        <p class="careers-closing__role">
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
