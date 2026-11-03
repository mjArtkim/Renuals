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
        data-figma-node="24:2341"
      />
    </div>
  </div>
  <article v-else class="dolbome-case careers">
    <section
      class="db-bd0797a662 case-section case-column"
      data-node-id="8:158"
      data-design-name="01 / PROJECT COVER"
    >
      <div class="db-efba1a5283 case-flow" data-node-id="8:160">
        <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c165") }}</p>
        <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c166") }}</p>
      </div>
      <div
        class="db-8e3b9516a2 case-flow case-row"
        data-node-id="8:161"
        data-design-name="프로젝트 개요"
      >
        <div class="db-08483e1b48 case-flow" data-node-id="8:162">
          <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c167") }}</p>
          <p class="db-a4d2b1adae case-flow">PC &amp; Mobile Web</p>
        </div>
        <div class="db-1b4d49df04 case-flow" data-node-id="8:163">
          <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c168") }}</p>
          <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c169") }}</p>
        </div>
      </div>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="8:164"
        data-design-name="PC와 모바일 대표 화면"
      >
        <DolbomeScreen
          :src="screen8_165"
          :width="900.0"
          :height="650.0"
          :label="t('dolbome.labels.a028')"
          data-figma-node="8:165"
        /><DolbomeScreen
          :src="screen8_422"
          :width="268.0"
          :height="650.0"
          :label="t('dolbome.labels.a029')"
          data-figma-node="8:422"
        />
      </div>
    </section>
    <section
      class="db-3484a3adbf case-section case-column"
      data-node-id="8:572"
      data-design-name="02 / TWO AUDIENCES"
    >
      <ol class="db-cf0944a521 case-flow" data-node-id="8:574" start="1">
        <li class="db-302e4c32ac case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c170")
          }}</span>
        </li>
      </ol>
      <div class="db-2f2d7aa329 case-flow" data-node-id="8:575">
        <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c171") }}</p>
        <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c172") }}</p>
      </div>
      <div
        class="db-c6403a41b7 case-flow case-row"
        data-node-id="8:576"
        data-design-name="개인회원과 기업회원"
      >
        <div
          class="db-634bb8fa17 case-flow case-column"
          data-node-id="8:577"
          data-design-name="개인회원"
        >
          <p class="db-901a6a12ca case-flow" data-node-id="8:578">
            FOR JOB SEEKERS
          </p>
          <p class="db-8e68e07e85 case-flow" data-node-id="8:579">
            {{ t("dolbome.copy.c173") }}
          </p>
          <div class="db-cb54a4717a case-flow" data-node-id="8:580">
            <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c174") }}</p>
            <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c175") }}</p>
          </div>
        </div>
        <div
          class="db-634bb8fa17 case-flow case-column"
          data-node-id="8:581"
          data-design-name="기업회원"
        >
          <p class="db-901a6a12ca case-flow" data-node-id="8:582">
            FOR EMPLOYERS
          </p>
          <p class="db-8e68e07e85 case-flow" data-node-id="8:583">
            {{ t("dolbome.copy.c176") }}
          </p>
          <div class="db-cb54a4717a case-flow" data-node-id="8:584">
            <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c177") }}</p>
            <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c178") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-d213aff90e case-section case-column"
      data-node-id="8:585"
      data-design-name="03 / END TO END"
    >
      <div
        class="db-ca0c3469fb case-flow case-heading-group"
        data-node-id="8:587"
      >
        <ol class="db-9e531dcc95 case-flow" start="2">
          <li class="db-ed2815520c case-flow">
            <span class="db-a4d2b1adae case-flow"
              >{{ t("dolbome.copy.c179") }}<br />{{
                t("dolbome.copy.c180")
              }}</span
            >
          </li>
        </ol>
      </div>
      <div
        class="db-16f846e3fc case-flow"
        data-node-id="8:588"
        data-design-name="Rectangle"
      ></div>
      <ol class="case-numbered" start="1">
        <li>
          <div
            class="db-9d92ed64e0 case-flow case-column"
            data-node-id="8:589"
            data-design-name="기획"
          >
            <p class="db-8ec64d1f6c case-flow" data-node-id="8:591">
              {{ t("dolbome.copy.c006") }}
            </p>
            <p class="db-70905e7c42 case-flow" data-node-id="8:592">
              {{ t("dolbome.copy.c181") }}
            </p>
          </div>
        </li>
      </ol>
      <div
        class="db-16f846e3fc case-flow"
        data-node-id="8:593"
        data-design-name="Rectangle"
      ></div>
      <ol class="case-numbered" start="2">
        <li>
          <div
            class="db-9d92ed64e0 case-flow case-column"
            data-node-id="8:594"
            data-design-name="와이어프레임"
          >
            <p class="db-8ec64d1f6c case-flow" data-node-id="8:596">
              {{ t("dolbome.copy.c009") }}
            </p>
            <p class="db-70905e7c42 case-flow" data-node-id="8:597">
              {{ t("dolbome.copy.c182") }}
            </p>
          </div>
        </li>
      </ol>
      <div
        class="db-16f846e3fc case-flow"
        data-node-id="8:598"
        data-design-name="Rectangle"
      ></div>
      <ol class="case-numbered" start="3">
        <li>
          <div
            class="db-9d92ed64e0 case-flow case-column"
            data-node-id="8:599"
            data-design-name="UI 디자인"
          >
            <p class="db-8ec64d1f6c case-flow" data-node-id="8:601">
              {{ t("dolbome.copy.c012") }}
            </p>
            <p class="db-70905e7c42 case-flow" data-node-id="8:602">
              {{ t("dolbome.copy.c183") }}
            </p>
          </div>
        </li>
      </ol>
      <div
        class="db-16f846e3fc case-flow"
        data-node-id="8:603"
        data-design-name="Rectangle"
      ></div>
      <ol class="case-numbered" start="4">
        <li>
          <div
            class="db-9d92ed64e0 case-flow case-column"
            data-node-id="8:604"
            data-design-name="퍼블리싱"
          >
            <p class="db-8ec64d1f6c case-flow" data-node-id="8:606">
              {{ t("dolbome.copy.c015") }}
            </p>
            <p class="db-70905e7c42 case-flow" data-node-id="8:607">
              {{ t("dolbome.copy.c184") }}
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section
      class="db-c778e4df0a case-section case-column"
      data-node-id="8:608"
      data-design-name="04 / WIREFRAME &amp; SPECIFICATION"
    >
      <ol class="db-34c649f923 case-flow" data-node-id="8:610" start="3">
        <li class="db-0ab1985606 case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c185")
          }}</span>
        </li>
      </ol>
      <div class="db-54de09abfe case-flow" data-node-id="8:611">
        <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c186") }}</p>
        <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c187") }}</p>
      </div>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="8:612"
        data-design-name="와이어프레임과 기능 정의"
      >
        <DolbomeScreen
          :src="screen8_613"
          :width="330.0"
          :height="757.6865844726562"
          :label="t('dolbome.labels.a030')"
          data-figma-node="8:613"
        /><DolbomeScreen
          :src="screen8_653"
          :width="330.0"
          :height="758.0"
          :label="t('dolbome.labels.a031')"
          data-figma-node="8:653"
        />
        <div
          class="db-d81fe1b375 case-flow case-column"
          data-node-id="8:712"
          data-design-name="기능 설명"
        >
          <p class="db-fc888f3a2e case-flow" data-node-id="8:713">
            {{ t("dolbome.copy.c188") }}
          </p>
          <p class="db-e39bb2dea1 case-flow" data-node-id="8:714">
            {{ t("dolbome.copy.c189") }}
          </p>
          <p class="db-fc888f3a2e case-flow" data-node-id="8:715">
            {{ t("dolbome.copy.c190") }}
          </p>
          <p class="db-e39bb2dea1 case-flow" data-node-id="8:716">
            {{ t("dolbome.copy.c191") }}
          </p>
          <p class="db-fc888f3a2e case-flow" data-node-id="8:717">
            {{ t("dolbome.copy.c192") }}
          </p>
          <p class="db-e39bb2dea1 case-flow" data-node-id="8:718">
            {{ t("dolbome.copy.c193") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-a7d1b29454 case-section case-column"
      data-node-id="8:719"
      data-design-name="05 / UI DESIGN — PERSONAL"
    >
      <ol class="db-34c649f923 case-flow" data-node-id="8:721" start="4">
        <li class="db-0ab1985606 case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c194")
          }}</span>
        </li>
      </ol>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="8:722"
        data-design-name="구직자 모바일 화면"
      >
        <div
          class="db-599216a978 case-flow case-column"
          data-node-id="8:723"
          data-design-name="01  메인"
        >
          <DolbomeScreen
            :src="screen8_724"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a029')"
            data-figma-node="8:724"
          />
          <p class="db-3d2ffabfe0 case-flow" data-node-id="8:874">
            {{ t("dolbome.copy.c195") }}
          </p>
          <p class="db-8bf4faf8c1 case-flow" data-node-id="8:875">
            {{ t("dolbome.copy.c196") }}
          </p>
        </div>
        <div
          class="db-599216a978 case-flow case-column"
          data-node-id="8:876"
          data-design-name="02  채용 목록"
        >
          <DolbomeScreen
            :src="screen8_877"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a032')"
            data-figma-node="8:877"
          />
          <p class="db-3d2ffabfe0 case-flow" data-node-id="8:969">
            {{ t("dolbome.copy.c197") }}
          </p>
          <p class="db-8bf4faf8c1 case-flow" data-node-id="8:970">
            {{ t("dolbome.copy.c198") }}
          </p>
        </div>
        <div
          class="db-599216a978 case-flow case-column"
          data-node-id="8:971"
          data-design-name="03  지원 내역"
        >
          <DolbomeScreen
            :src="screen8_972"
            :width="368.0"
            :height="845.0"
            :label="t('dolbome.labels.a033')"
            data-figma-node="8:972"
          />
          <p class="db-3d2ffabfe0 case-flow" data-node-id="8:1043">
            {{ t("dolbome.copy.c199") }}
          </p>
          <p class="db-8bf4faf8c1 case-flow" data-node-id="8:1044">
            {{ t("dolbome.copy.c200") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-bd0797a662 case-section case-column"
      data-node-id="8:1045"
      data-design-name="06 / UI DESIGN — EMPLOYER"
    >
      <ol class="db-2140db4d61 case-flow" data-node-id="8:1047" start="5">
        <li class="db-0ab1985606 case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c201")
          }}</span>
        </li>
      </ol>
      <p class="db-366a6ee9e0 case-flow" data-node-id="8:1048">
        {{ t("dolbome.copy.c202") }}
      </p>
      <DolbomeScreen
        :src="screen8_1049"
        :width="1200.0"
        :height="904.6875"
        :label="t('dolbome.labels.a034')"
        data-figma-node="8:1049"
      />
      <div
        class="db-130407673a case-flow case-row"
        data-node-id="8:1167"
        data-design-name="기업 화면 보조"
      >
        <div
          class="db-b098baf6d7 case-flow case-column"
          data-node-id="8:1168"
          data-design-name="기업 모바일"
        >
          <DolbomeScreen
            :src="screen8_1169"
            :width="330.0"
            :height="757.6865844726562"
            :label="t('dolbome.labels.a035')"
            data-figma-node="8:1169"
          />
        </div>
        <div
          class="db-291b0e4aa8 case-flow case-column"
          data-node-id="8:1209"
          data-design-name="채용 업무 설명"
        >
          <p class="db-811f52737f case-flow" data-node-id="8:1210">
            {{ t("dolbome.copy.c203") }}
          </p>
          <p class="db-6b1f688d27 case-flow" data-node-id="8:1211">
            {{ t("dolbome.copy.c204") }}
          </p>
          <div
            class="db-86ca90d1d8 case-flow"
            data-node-id="8:1212"
            data-design-name="Rectangle"
          ></div>
          <p class="db-811f52737f case-flow" data-node-id="8:1213">
            {{ t("dolbome.copy.c205") }}
          </p>
          <p class="db-6b1f688d27 case-flow" data-node-id="8:1214">
            {{ t("dolbome.copy.c206") }}
          </p>
          <div
            class="db-86ca90d1d8 case-flow"
            data-node-id="8:1215"
            data-design-name="Rectangle"
          ></div>
          <p class="db-a3886bcaf8 case-flow" data-node-id="8:1216">
            PC / MOBILE
          </p>
          <p class="db-6b1f688d27 case-flow" data-node-id="8:1217">
            {{ t("dolbome.copy.c207") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-17b1fc5ea0 case-section case-column"
      data-node-id="8:1218"
      data-design-name="07 / THYMELEAF &amp; SCSS"
    >
      <ol class="db-99f625783c case-flow" data-node-id="8:1220" start="6">
        <li class="db-0ab1985606 case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c208")
          }}</span>
        </li>
      </ol>
      <div class="db-2f2d7aa329 case-flow" data-node-id="8:1221">
        <p class="db-96eff31b51 case-flow">{{ t("dolbome.copy.c209") }}</p>
        <p class="db-a4d2b1adae case-flow">{{ t("dolbome.copy.c210") }}</p>
      </div>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="8:1222"
        data-design-name="프로젝트 폴더 구조"
      >
        <div
          class="db-99711f173d case-flow case-column"
          data-node-id="8:1223"
          data-design-name="Thymeleaf 템플릿 구조"
        >
          <p class="db-af288a679b case-flow" data-node-id="8:1224">
            THYMELEAF / VIEWS
          </p>
          <div class="db-344298c35f case-flow" data-node-id="8:1225">
            <p class="db-96eff31b51 case-flow">views/recruit/</p>
            <p class="db-96eff31b51 case-flow">├ admin/</p>
            <p class="db-96eff31b51 case-flow">├ include/</p>
            <p class="db-96eff31b51 case-flow">│ ├ admin/</p>
            <p class="db-96eff31b51 case-flow">│ └ user/</p>
            <p class="db-96eff31b51 case-flow">│ ├ mobile/</p>
            <p class="db-96eff31b51 case-flow">│ ├ pc/</p>
            <p class="db-96eff31b51 case-flow">│ ├ inc_header.html</p>
            <p class="db-96eff31b51 case-flow">│ ├ inc_footer.html</p>
            <p class="db-96eff31b51 case-flow">│ └ inc_search.html</p>
            <p class="db-96eff31b51 case-flow">└ user/</p>
            <p class="db-96eff31b51 case-flow">├ login/</p>
            <p class="db-96eff31b51 case-flow">├ mobile/</p>
            <p class="db-96eff31b51 case-flow">├ pc/</p>
            <p class="db-96eff31b51 case-flow">├ jobInfo.html</p>
            <p class="db-a4d2b1adae case-flow">└ recruitMain.html</p>
          </div>
        </div>
        <div
          class="db-809bf3630f case-flow case-column"
          data-node-id="8:1226"
          data-design-name="SCSS 스타일 구조"
        >
          <p class="db-77168fb035 case-flow" data-node-id="8:1227">
            SCSS / STYLE MODULES
          </p>
          <div class="db-76b0e1013c case-flow" data-node-id="8:1228">
            <p class="db-96eff31b51 case-flow">static/scss/</p>
            <p class="db-96eff31b51 case-flow">├ recruit/</p>
            <p class="db-96eff31b51 case-flow">│ ├ _common.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _home.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _job-listings.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _job-info.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _job-apply.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _resume.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _company-recruit.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _my-page.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _mobile-my.scss</p>
            <p class="db-96eff31b51 case-flow">│ ├ _responsive.scss</p>
            <p class="db-96eff31b51 case-flow">│ └ _shell-navigation.scss</p>
            <p class="db-96eff31b51 case-flow">├ _mixins.scss</p>
            <p class="db-96eff31b51 case-flow">├ _variables.scss</p>
            <p class="db-a4d2b1adae case-flow">└ recruit.scss</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-a7d1b29454 case-section case-column"
      data-node-id="8:1229"
      data-design-name="08 / REUSABLE STRUCTURE"
    >
      <ol class="db-44caab69cd case-flow" data-node-id="8:1231" start="7">
        <li class="db-302e4c32ac case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c211")
          }}</span>
        </li>
      </ol>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1232"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-9d92ed64e0 case-flow case-row"
        data-node-id="8:1233"
        data-design-name="공통 레이아웃"
      >
        <div
          class="db-2aced4c2a2 case-flow case-column"
          data-node-id="8:1234"
          data-design-name="공통 레이아웃"
        >
          <p class="db-216f27f7cb case-flow" data-node-id="8:1235">
            {{ t("dolbome.copy.c212") }}
          </p>
          <p class="db-abc1e9649f case-flow" data-node-id="8:1236">
            include/user/
          </p>
        </div>
        <p class="db-855ba01ce2 case-flow" data-node-id="8:1237">
          {{ t("dolbome.copy.c213") }}
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1238"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-9d92ed64e0 case-flow case-row"
        data-node-id="8:1239"
        data-design-name="기능별 스타일"
      >
        <div
          class="db-2aced4c2a2 case-flow case-column"
          data-node-id="8:1240"
          data-design-name="기능별 스타일"
        >
          <p class="db-216f27f7cb case-flow" data-node-id="8:1241">
            {{ t("dolbome.copy.c214") }}
          </p>
          <p class="db-abc1e9649f case-flow" data-node-id="8:1242">
            static/scss/recruit/
          </p>
        </div>
        <p class="db-855ba01ce2 case-flow" data-node-id="8:1243">
          {{ t("dolbome.copy.c215") }}
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1244"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-9d92ed64e0 case-flow case-row"
        data-node-id="8:1245"
        data-design-name="서비스별 에셋"
      >
        <div
          class="db-2aced4c2a2 case-flow case-column"
          data-node-id="8:1246"
          data-design-name="서비스별 에셋"
        >
          <p class="db-216f27f7cb case-flow" data-node-id="8:1247">
            {{ t("dolbome.copy.c216") }}
          </p>
          <p class="db-abc1e9649f case-flow" data-node-id="8:1248">
            static/img/recruit/
          </p>
        </div>
        <p class="db-855ba01ce2 case-flow" data-node-id="8:1249">
          {{ t("dolbome.copy.c217") }}
        </p>
      </div>
    </section>
    <section
      class="db-c778e4df0a case-section case-column"
      data-node-id="8:1250"
      data-design-name="09 / SCREEN TO FILE"
    >
      <ol class="db-44caab69cd case-flow" data-node-id="8:1252" start="8">
        <li class="db-302e4c32ac case-flow">
          <span class="db-a4d2b1adae case-flow">{{
            t("dolbome.copy.c218")
          }}</span>
        </li>
      </ol>
      <p class="db-f76ab1d335 case-flow" data-node-id="8:1253">
        {{ t("dolbome.copy.c219") }}
      </p>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1254"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1255"
        data-design-name="화면"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1256">
          {{ t("dolbome.copy.c220") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1257">
          {{ t("dolbome.copy.c221") }}
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1258">
          {{ t("dolbome.copy.c222") }}
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1259"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1260"
        data-design-name="메인"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1261">
          {{ t("dolbome.copy.c223") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1262">
          recruitMain.html
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1263">_home.scss</p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1264"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1265"
        data-design-name="채용 상세"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1266">
          {{ t("dolbome.copy.c224") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1267">
          jobInfo.html
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1268">
          _job-info.scss
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1269"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1270"
        data-design-name="입사지원"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1271">
          {{ t("dolbome.copy.c225") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1272">
          pc/jobApply.html
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1273">
          _job-apply.scss
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1274"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1275"
        data-design-name="이력서"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1276">
          {{ t("dolbome.copy.c226") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1277">
          pc/recruitResume.html
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1278">
          _resume.scss
        </p>
      </div>
      <div
        class="db-8f4ce277b3 case-flow"
        data-node-id="8:1279"
        data-design-name="Rectangle"
      ></div>
      <div
        class="db-4f5fa2d7bf case-flow case-row"
        data-node-id="8:1280"
        data-design-name="기업 마이페이지"
      >
        <p class="db-476b679653 case-flow" data-node-id="8:1281">
          {{ t("dolbome.copy.c227") }}
        </p>
        <p class="db-6eb62c75ab case-flow" data-node-id="8:1282">
          pc/companyMy.html
        </p>
        <p class="db-b104d1fff3 case-flow" data-node-id="8:1283">
          _company-recruit.scss
        </p>
      </div>
      <p class="db-dae3fd7975 case-flow" data-node-id="8:1284">
        {{ t("dolbome.copy.c228") }}
      </p>
    </section>
    <section
      class="db-ecbba8681b case-section case-column"
      data-node-id="10:1298"
      data-design-name="11 · 프로젝트 마무리"
    >
      <p class="db-6f496b41c6 case-flow" data-node-id="10:1299">
        {{ t("dolbome.copy.c163") }}
      </p>
      <p class="db-0dc6d0526e case-flow" data-node-id="10:1300">
        {{ t("dolbome.copy.c164") }}
      </p>
      <div
        class="db-dc33eb099d case-flow case-row"
        data-node-id="10:1301"
        data-design-name="작업 영역"
      >
        <p class="db-1a5b200541 case-flow" data-node-id="10:1302">
          {{ t("dolbome.copy.c083") }}
        </p>
        <p class="db-1ddefc854e case-flow" data-node-id="10:1303">
          Thymeleaf / SCSS
        </p>
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@use "@/assets/dolbome-case.scss";
</style>
