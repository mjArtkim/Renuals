<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { onMounted } from "vue";
const emit = defineEmits(["ready"]);
onMounted(() => emit("ready"));
import DolbomeScreen from "./DolbomeScreen.vue";
import ambientImage from "@/assets/img/dolbome/745298d415265cd5.svg?no-inline";
defineProps({ poster: Boolean });

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
        data-figma-node="24:1503"
      />
    </div>
  </div>
  <article v-else class="dolbome-case community">
    <section
      class="db-44ddda80ac case-section case-column"
      data-node-id="1:127"
      data-design-name="00 · 프로젝트 커버"
    >
      <p class="db-653d605073 case-flow" data-node-id="1:131">
        {{ t("dolbome.copy.c000") }}
      </p>
      <p class="db-cb41befb52 case-flow" data-node-id="1:132">
        {{ t("dolbome.copy.c001") }}
      </p>
      <p class="db-b4009be04b case-flow" data-node-id="1:133">
        {{ t("dolbome.copy.c002") }}
      </p>
      <div
        class="db-86f380ac33 case-flow case-row"
        data-node-id="1:134"
        data-design-name="기술"
      >
        <div
          class="db-82f693b403 case-flow case-column"
          data-node-id="1:135"
          data-design-name="Figma"
        >
          <p class="db-8a94f21c75 case-flow" data-node-id="1:136">Figma</p>
        </div>
        <div
          class="db-82f693b403 case-flow case-column"
          data-node-id="1:137"
          data-design-name="Thymeleaf"
        >
          <p class="db-8a94f21c75 case-flow" data-node-id="1:138">Thymeleaf</p>
        </div>
        <div
          class="db-82f693b403 case-flow case-column"
          data-node-id="1:139"
          data-design-name="SCSS"
        >
          <p class="db-8a94f21c75 case-flow" data-node-id="1:140">SCSS</p>
        </div>
        <div
          class="db-82f693b403 case-flow case-column"
          data-node-id="1:141"
          data-design-name="HTML / JavaScript"
        >
          <p class="db-8a94f21c75 case-flow" data-node-id="1:142">
            HTML / JavaScript
          </p>
        </div>
      </div>
      <div
        class="db-34e5953370 case-flow case-row"
        data-node-id="1:143"
        data-design-name="대표 화면"
      >
        <DolbomeScreen
          :src="screen1_144"
          :width="360.0"
          :height="820.0"
          :label="t('dolbome.labels.a010')"
          data-figma-node="1:144"
        /><DolbomeScreen
          :src="screen1_308"
          :width="360.0"
          :height="820.0"
          :label="t('dolbome.labels.a011')"
          data-figma-node="1:308"
        /><DolbomeScreen
          :src="screen1_421"
          :width="382.0"
          :height="814.0"
          :label="t('dolbome.labels.a012')"
          data-figma-node="1:421"
        />
      </div>
    </section>
    <section
      class="db-e928003bf3 case-section case-column"
      data-node-id="1:470"
      data-design-name="01 · 프로젝트 개요"
    >
      <ol class="db-013f9e5894 case-flow" data-node-id="1:472" start="1">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c003")
          }}</span>
        </li>
      </ol>
      <div class="db-e0a9de895e case-flow" data-node-id="1:473">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c004") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c005") }}</p>
      </div>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="1:474"
        data-design-name="수행 범위"
      >
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="1:475"
          data-design-name="기획"
        >
          <p class="db-ad82c75553 case-flow" data-node-id="1:476">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="db-3b136dbce6 case-flow" data-node-id="1:477">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c007") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c008") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="1:478"
          data-design-name="와이어프레임"
        >
          <p class="db-ad82c75553 case-flow" data-node-id="1:479">
            {{ t("dolbome.copy.c009") }}
          </p>
          <div class="db-3b136dbce6 case-flow" data-node-id="1:480">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c010") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c011") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="1:481"
          data-design-name="UI 디자인"
        >
          <p class="db-ad82c75553 case-flow" data-node-id="1:482">
            {{ t("dolbome.copy.c012") }}
          </p>
          <div class="db-3b136dbce6 case-flow" data-node-id="1:483">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c013") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c014") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="1:484"
          data-design-name="퍼블리싱"
        >
          <p class="db-ad82c75553 case-flow" data-node-id="1:485">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="db-3b136dbce6 case-flow" data-node-id="1:486">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c016") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c017") }}</p>
          </div>
        </div>
      </div>
      <div
        class="db-157a80797d case-flow case-row"
        data-node-id="1:487"
        data-design-name="프로젝트 정보"
      >
        <div class="db-f16a700f25 case-flow" data-node-id="1:488">
          <p class="db-2710210a12 case-flow">PROJECT</p>
          <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c018") }}</p>
        </div>
        <div class="db-f16a700f25 case-flow" data-node-id="1:489">
          <p class="db-2710210a12 case-flow">ROLE</p>
          <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c019") }}</p>
        </div>
        <div class="db-f16a700f25 case-flow" data-node-id="1:490">
          <p class="db-2710210a12 case-flow">STACK</p>
          <p class="db-230521fb39 case-flow">Thymeleaf / SCSS</p>
        </div>
      </div>
    </section>
    <section
      class="db-4b256ebc22 case-section case-column"
      data-node-id="1:491"
      data-design-name="02 · 작업 과정"
    >
      <ol class="db-e3911dc7be case-flow" data-node-id="1:493" start="2">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c020")
          }}</span>
        </li>
      </ol>
      <p class="db-cc21b1beda case-flow" data-node-id="1:494">
        {{ t("dolbome.copy.c021") }}
      </p>
      <div
        class="db-66ca84dffa case-flow case-row"
        data-node-id="1:495"
        data-design-name="프로세스"
      >
        <div
          class="db-faf0a4d052 case-flow case-column"
          data-node-id="1:496"
          data-design-name="기획"
        >
          <p class="db-c99c17feda case-flow" data-node-id="1:497">01</p>
          <p class="db-2b5bb40fd4 case-flow" data-node-id="1:498">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="db-0cac69b025 case-flow" data-node-id="1:499">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c022") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c023") }}</p>
          </div>
        </div>
        <div
          class="db-faf0a4d052 case-flow case-column"
          data-node-id="1:500"
          data-design-name="설계"
        >
          <p class="db-c99c17feda case-flow" data-node-id="1:501">02</p>
          <p class="db-2b5bb40fd4 case-flow" data-node-id="1:502">
            {{ t("dolbome.copy.c024") }}
          </p>
          <div class="db-0cac69b025 case-flow" data-node-id="1:503">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c009") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c025") }}</p>
          </div>
        </div>
        <div
          class="db-faf0a4d052 case-flow case-column"
          data-node-id="1:504"
          data-design-name="디자인"
        >
          <p class="db-c99c17feda case-flow" data-node-id="1:505">03</p>
          <p class="db-2b5bb40fd4 case-flow" data-node-id="1:506">
            {{ t("dolbome.copy.c026") }}
          </p>
          <div class="db-0cac69b025 case-flow" data-node-id="1:507">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c027") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c028") }}</p>
          </div>
        </div>
        <div
          class="db-faf0a4d052 case-flow case-column"
          data-node-id="1:508"
          data-design-name="퍼블리싱"
        >
          <p class="db-c99c17feda case-flow" data-node-id="1:509">04</p>
          <p class="db-2b5bb40fd4 case-flow" data-node-id="1:510">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="db-0cac69b025 case-flow" data-node-id="1:511">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c029") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c030") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-9e99e89a03 case-section case-column"
      data-node-id="1:512"
      data-design-name="03 · 기획과 사이트맵"
    >
      <ol class="db-55e1ea2b5b case-flow" data-node-id="1:514" start="3">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c031")
          }}</span>
        </li>
      </ol>
      <div class="db-c75ed7b57d case-flow" data-node-id="1:515">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c032") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c033") }}</p>
      </div>
      <DolbomeCommunitySitemap />
      <p class="db-f959449042 case-flow" data-node-id="1:730">
        {{ t("dolbome.copy.c034") }}
      </p>
    </section>
    <section
      class="db-37d0c9657a case-section case-column"
      data-node-id="1:731"
      data-design-name="04 · 와이어프레임"
    >
      <ol class="db-d058db951a case-flow" data-node-id="1:733" start="4">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c035")
          }}</span>
        </li>
      </ol>
      <div class="db-c75ed7b57d case-flow" data-node-id="1:734">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c036") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c037") }}</p>
      </div>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="1:735"
        data-design-name="와이어프레임과 설명"
      >
        <DolbomeScreen
          :src="screen1_736"
          :width="340.0"
          :height="703.1818237304688"
          :label="t('dolbome.labels.a013')"
          data-figma-node="1:736"
        /><DolbomeScreen
          :src="screen1_789"
          :width="812.0"
          :height="567.0"
          :label="t('dolbome.labels.a014')"
          data-figma-node="1:789"
        />
      </div>
      <div
        class="db-049cee645d case-flow case-row"
        data-node-id="1:808"
        data-design-name="상태 설계"
      >
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="1:809"
          data-design-name="EMPTY"
        >
          <p class="db-a7f568cd76 case-flow" data-node-id="1:810">EMPTY</p>
          <p class="db-ccdba7ed7c case-flow" data-node-id="1:811">
            {{ t("dolbome.copy.c038") }}
          </p>
        </div>
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="1:812"
          data-design-name="CONFIRM"
        >
          <p class="db-a7f568cd76 case-flow" data-node-id="1:813">CONFIRM</p>
          <p class="db-ccdba7ed7c case-flow" data-node-id="1:814">
            {{ t("dolbome.copy.c039") }}
          </p>
        </div>
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="1:815"
          data-design-name="COMPLETE"
        >
          <p class="db-a7f568cd76 case-flow" data-node-id="1:816">COMPLETE</p>
          <p class="db-ccdba7ed7c case-flow" data-node-id="1:817">
            {{ t("dolbome.copy.c040") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-9e99e89a03 case-section case-column"
      data-node-id="1:818"
      data-design-name="05 · UI 방향"
    >
      <ol class="db-d058db951a case-flow" data-node-id="1:820" start="5">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c041")
          }}</span>
        </li>
      </ol>
      <p class="db-b4009be04b case-flow" data-node-id="1:821">
        {{ t("dolbome.copy.c042") }}
      </p>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="1:822"
        data-design-name="색상과 서체"
      >
        <div
          class="db-a262b1f0e7 case-flow case-column"
          data-node-id="1:823"
          data-design-name="컬러"
        >
          <p class="db-05e21b194e case-flow" data-node-id="1:824">COLOR</p>
          <div
            class="db-8cbddfcef0 case-flow case-row"
            data-node-id="1:825"
            data-design-name="팔레트"
          >
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="1:826"
              data-design-name="PINK"
            >
              <div
                class="db-00f61cdfce case-flow"
                data-node-id="1:827"
                data-design-name="Rectangle"
              ></div>
              <p class="db-6d57f76fbe case-flow" data-node-id="1:828">PINK</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="1:829"
              data-design-name="BLUSH"
            >
              <div
                class="db-4e83daee8e case-flow"
                data-node-id="1:830"
                data-design-name="Rectangle"
              ></div>
              <p class="db-6d57f76fbe case-flow" data-node-id="1:831">BLUSH</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="1:832"
              data-design-name="MINT"
            >
              <div
                class="db-e99ed965b3 case-flow"
                data-node-id="1:833"
                data-design-name="Rectangle"
              ></div>
              <p class="db-6d57f76fbe case-flow" data-node-id="1:834">MINT</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="1:835"
              data-design-name="WHITE"
            >
              <div
                class="db-e583224451 case-flow"
                data-node-id="1:836"
                data-design-name="Rectangle"
              ></div>
              <p class="db-6d57f76fbe case-flow" data-node-id="1:837">WHITE</p>
            </div>
          </div>
        </div>
        <div
          class="db-6bcc22850a case-flow case-column"
          data-node-id="1:838"
          data-design-name="타이포그래피"
        >
          <p class="db-87b0dbc407 case-flow" data-node-id="1:839">TYPOGRAPHY</p>
          <p class="db-0e8a71d3a7 case-flow" data-node-id="1:840">
            {{ t("dolbome.copy.c043") }}
          </p>
          <div class="db-3467b7cc4a case-flow" data-node-id="1:841">
            <p class="db-5a20e152eb case-flow">{{ t("dolbome.copy.c044") }}</p>
            <p class="db-8bee531b98 case-flow">{{ t("dolbome.copy.c045") }}</p>
          </div>
          <p class="db-b07d6181ee case-flow" data-node-id="1:842">
            {{ t("dolbome.copy.c046") }}
          </p>
        </div>
      </div>
    </section>
    <section class="case-section core-screens">
      <h2>{{ t("dolbome.copy.c047") }}</h2>
      <p class="section-description">{{ t("dolbome.copy.c048") }}</p>
      <div
        class="db-dc21ab7fb5 case-flow case-row"
        data-node-id="1:847"
        data-design-name="핵심 화면 1"
      >
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:848"
          data-design-name="01  홈 · 정보 탐색"
        >
          <DolbomeScreen
            :src="screen1_849"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a010')"
            data-figma-node="1:849"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1013">
            {{ t("dolbome.copy.c049") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1014">
            {{ t("dolbome.copy.c050") }}
          </p>
        </div>
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:1015"
          data-design-name="02  센터 · 참여"
        >
          <DolbomeScreen
            :src="screen1_1016"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a011')"
            data-figma-node="1:1016"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1129">
            {{ t("dolbome.copy.c051") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1130">
            {{ t("dolbome.copy.c052") }}
          </p>
        </div>
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:1131"
          data-design-name="03  MY · 활동 관리"
        >
          <DolbomeScreen
            :src="screen1_1132"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a015')"
            data-figma-node="1:1132"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1210">
            {{ t("dolbome.copy.c053") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1211">
            {{ t("dolbome.copy.c054") }}
          </p>
        </div>
      </div>
      <div
        class="db-d45c376dad case-flow case-row"
        data-node-id="1:1212"
        data-design-name="핵심 화면 2"
      >
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:1213"
          data-design-name="04  글쓰기 · 콘텐츠 등록"
        >
          <DolbomeScreen
            :src="screen1_1214"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a016')"
            data-figma-node="1:1214"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1269">
            {{ t("dolbome.copy.c055") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1270">
            {{ t("dolbome.copy.c056") }}
          </p>
        </div>
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:1271"
          data-design-name="05  DM · 대화 탐색"
        >
          <DolbomeScreen
            :src="screen1_1272"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a017')"
            data-figma-node="1:1272"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1321">
            {{ t("dolbome.copy.c057") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1322">
            {{ t("dolbome.copy.c058") }}
          </p>
        </div>
        <div
          class="db-8090cef8ba case-flow case-column"
          data-node-id="1:1323"
          data-design-name="06  채팅 · 연결"
        >
          <DolbomeScreen
            :src="screen1_1324"
            :width="373.0"
            :height="810.0"
            :label="t('dolbome.labels.a012')"
            data-figma-node="1:1324"
          />
          <p class="db-40d24d4427 case-flow" data-node-id="1:1373">
            {{ t("dolbome.copy.c059") }}
          </p>
          <p class="db-a129302e5b case-flow" data-node-id="1:1374">
            {{ t("dolbome.copy.c060") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-e928003bf3 case-section case-column"
      data-node-id="1:1375"
      data-design-name="07 · 퍼블리싱 구조"
    >
      <ol class="db-013f9e5894 case-flow" data-node-id="1:1377" start="7">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c061")
          }}</span>
        </li>
      </ol>
      <div class="db-e0a9de895e case-flow" data-node-id="1:1378">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c062") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c063") }}</p>
      </div>
      <div
        class="db-130407673a case-flow case-row"
        data-node-id="1:1379"
        data-design-name="구현 방식"
      >
        <div
          class="db-baa92b37b2 case-flow case-column"
          data-node-id="1:1380"
          data-design-name="Thymeleaf"
        >
          <p class="db-d33cde70f8 case-flow" data-node-id="1:1381">Thymeleaf</p>
          <div class="db-499b19e86e case-flow" data-node-id="1:1382">
            <p class="db-5a20e152eb case-flow">{{ t("dolbome.copy.c064") }}</p>
            <p class="db-8bee531b98 case-flow">{{ t("dolbome.copy.c065") }}</p>
          </div>
        </div>
        <div
          class="db-baa92b37b2 case-flow case-column"
          data-node-id="1:1383"
          data-design-name="SCSS"
        >
          <p class="db-d33cde70f8 case-flow" data-node-id="1:1384">SCSS</p>
          <div class="db-499b19e86e case-flow" data-node-id="1:1385">
            <p class="db-5a20e152eb case-flow">{{ t("dolbome.copy.c066") }}</p>
            <p class="db-8bee531b98 case-flow">{{ t("dolbome.copy.c067") }}</p>
          </div>
        </div>
      </div>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="1:1386"
        data-design-name="폴더 구조"
      >
        <div
          class="db-026d058b62 case-flow case-column"
          data-node-id="1:1387"
          data-design-name="HTML 템플릿 구조"
        >
          <p class="db-648b47c5ae case-flow" data-node-id="1:1388">
            {{ t("dolbome.copy.c068") }}
          </p>
          <div class="db-3a0bbfd57e case-flow" data-node-id="1:1389">
            <p class="db-f77f767b2f case-flow">views/</p>
            <p class="db-f77f767b2f case-flow">└─ community/</p>
            <p class="db-f77f767b2f case-flow">├─ admin/</p>
            <p class="db-f77f767b2f case-flow">├─ include/</p>
            <p class="db-f77f767b2f case-flow">└─ user/</p>
            <p class="db-f77f767b2f case-flow">├─ category/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ alarmPage.html</p>
            <p class="db-f77f767b2f case-flow">│ ├─ alarmSetting.html</p>
            <p class="db-f77f767b2f case-flow">│ ├─ centerPost.html</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ hotChart.html / newPosts.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ noticeBoard.html / noticeDetail.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ center/</p>
            <p class="db-f77f767b2f case-flow">
              │ └─ centerBoard.html / centerPage.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ chat/</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ chatMain.html / chatRoom.html
            </p>
            <p class="db-f77f767b2f case-flow">│ ├─ chatRoomList.html</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ chatRequest.html / chatReport.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ chatAlarm.html / chatSetting.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ chatShare.html / chatShareList.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ my/</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myPage.html / myPostList.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myCommentList.html / myLikeList.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ myCenterList.html / blockPage.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ post/</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ allPost.html / viewPost.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ writePost.html / reportPost.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ communityMain.html</p>
            <p class="db-f77f767b2f case-flow">├─ allMenu.html</p>
            <p class="db-6b319aafdd case-flow">
              └─ profileEdit.html / searchPage.html
            </p>
          </div>
        </div>
        <div
          class="db-00f66c7fc0 case-flow case-column"
          data-node-id="1:1390"
          data-design-name="SCSS와 정적 자산 구조"
        >
          <p class="db-cd6ddeb172 case-flow" data-node-id="1:1391">
            {{ t("dolbome.copy.c069") }}
          </p>
          <div class="db-ce5348a5a2 case-flow" data-node-id="1:1392">
            <p class="db-f77f767b2f case-flow">templates/</p>
            <p class="db-f77f767b2f case-flow">└─ static/</p>
            <p class="db-f77f767b2f case-flow">├─ css/</p>
            <p class="db-f77f767b2f case-flow">├─ fonts/</p>
            <p class="db-f77f767b2f case-flow">├─ img/</p>
            <p class="db-f77f767b2f case-flow">│ └─ community/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ common/</p>
            <p class="db-f77f767b2f case-flow">│ └─ user/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ avatar_pink.png</p>
            <p class="db-f77f767b2f case-flow">│ ├─ center_mark.png</p>
            <p class="db-f77f767b2f case-flow">│ ├─ my_bg.png</p>
            <p class="db-f77f767b2f case-flow">│ └─ sprite.svg</p>
            <p class="db-f77f767b2f case-flow">├─ js/</p>
            <p class="db-f77f767b2f case-flow">│ └─ community/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ admin/common.js</p>
            <p class="db-f77f767b2f case-flow">│ ├─ common/</p>
            <p class="db-f77f767b2f case-flow">│ └─ user/common.js</p>
            <p class="db-f77f767b2f case-flow">└─ scss/</p>
            <p class="db-f77f767b2f case-flow">├─ _variables.scss</p>
            <p class="db-f77f767b2f case-flow">├─ _mixins.scss</p>
            <p class="db-f77f767b2f case-flow">├─ common.scss</p>
            <p class="db-f77f767b2f case-flow">├─ community.scss</p>
            <p class="db-6b319aafdd case-flow">└─ community-nav.scss</p>
          </div>
          <p class="db-3990a1585b case-flow" data-node-id="1:1393">
            {{ t("dolbome.copy.c070") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-4b256ebc22 case-section case-column"
      data-node-id="1:1394"
      data-design-name="08 · 설계와 코드의 연결"
    >
      <ol class="db-013f9e5894 case-flow" data-node-id="1:1396" start="8">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c071")
          }}</span>
        </li>
      </ol>
      <p class="db-cc21b1beda case-flow" data-node-id="1:1397">
        {{ t("dolbome.copy.c072") }}
      </p>
      <div
        class="db-67db43901b case-flow case-row"
        data-node-id="1:1398"
        data-design-name="홈 · 게시판"
      >
        <p class="db-5b50ecaf23 case-flow" data-node-id="1:1399">01</p>
        <div
          class="db-5f208dcd24 case-flow case-column"
          data-node-id="1:1400"
          data-design-name="설계"
        >
          <p class="db-2a0220fef5 case-flow" data-node-id="1:1401">
            {{ t("dolbome.copy.c073") }}
          </p>
          <p class="db-582c7c169c case-flow" data-node-id="1:1402">
            {{ t("dolbome.copy.c074") }}
          </p>
        </div>
        <div
          class="db-67cd61e613 case-flow case-column"
          data-node-id="1:1403"
          data-design-name="파일"
        >
          <p class="db-22c586c491 case-flow" data-node-id="1:1404">
            HTML TEMPLATE
          </p>
          <p class="db-51a11aa82d case-flow" data-node-id="1:1405">
            communityMain.html / post/allPost.html
          </p>
        </div>
      </div>
      <div
        class="db-67db43901b case-flow case-row"
        data-node-id="1:1406"
        data-design-name="센터 공간"
      >
        <p class="db-5b50ecaf23 case-flow" data-node-id="1:1407">02</p>
        <div
          class="db-5f208dcd24 case-flow case-column"
          data-node-id="1:1408"
          data-design-name="설계"
        >
          <p class="db-2a0220fef5 case-flow" data-node-id="1:1409">
            {{ t("dolbome.copy.c075") }}
          </p>
          <p class="db-582c7c169c case-flow" data-node-id="1:1410">
            {{ t("dolbome.copy.c076") }}
          </p>
        </div>
        <div
          class="db-67cd61e613 case-flow case-column"
          data-node-id="1:1411"
          data-design-name="파일"
        >
          <p class="db-22c586c491 case-flow" data-node-id="1:1412">
            HTML TEMPLATE
          </p>
          <p class="db-51a11aa82d case-flow" data-node-id="1:1413">
            center/centerPage.html / center/centerBoard.html
          </p>
        </div>
      </div>
      <div
        class="db-67db43901b case-flow case-row"
        data-node-id="1:1414"
        data-design-name="개인 활동"
      >
        <p class="db-5b50ecaf23 case-flow" data-node-id="1:1415">03</p>
        <div
          class="db-5f208dcd24 case-flow case-column"
          data-node-id="1:1416"
          data-design-name="설계"
        >
          <p class="db-2a0220fef5 case-flow" data-node-id="1:1417">
            {{ t("dolbome.copy.c077") }}
          </p>
          <p class="db-582c7c169c case-flow" data-node-id="1:1418">
            {{ t("dolbome.copy.c078") }}
          </p>
        </div>
        <div
          class="db-67cd61e613 case-flow case-column"
          data-node-id="1:1419"
          data-design-name="파일"
        >
          <p class="db-22c586c491 case-flow" data-node-id="1:1420">
            HTML TEMPLATE
          </p>
          <p class="db-51a11aa82d case-flow" data-node-id="1:1421">
            my/myPage.html / my/myPostList.html
          </p>
        </div>
      </div>
      <div
        class="db-67db43901b case-flow case-row"
        data-node-id="1:1422"
        data-design-name="대화"
      >
        <p class="db-5b50ecaf23 case-flow" data-node-id="1:1423">04</p>
        <div
          class="db-5f208dcd24 case-flow case-column"
          data-node-id="1:1424"
          data-design-name="설계"
        >
          <p class="db-2a0220fef5 case-flow" data-node-id="1:1425">
            {{ t("dolbome.copy.c079") }}
          </p>
          <p class="db-582c7c169c case-flow" data-node-id="1:1426">
            {{ t("dolbome.copy.c080") }}
          </p>
        </div>
        <div
          class="db-67cd61e613 case-flow case-column"
          data-node-id="1:1427"
          data-design-name="파일"
        >
          <p class="db-22c586c491 case-flow" data-node-id="1:1428">
            HTML TEMPLATE
          </p>
          <p class="db-51a11aa82d case-flow" data-node-id="1:1429">
            chat/chatRoomList.html / chat/chatRoom.html
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-6ee9f1f8be case-section case-column"
      data-node-id="1:1430"
      data-design-name="09 · 프로젝트 마무리"
    >
      <p class="db-51641c30e2 case-flow" data-node-id="1:1432">
        {{ t("dolbome.copy.c081") }}
      </p>
      <p class="db-92d98d1f88 case-flow" data-node-id="1:1433">
        {{ t("dolbome.copy.c082") }}
      </p>
      <div
        class="db-dc33eb099d case-flow case-row"
        data-node-id="1:1434"
        data-design-name="작업 영역"
      >
        <p class="db-92a8373cc3 case-flow" data-node-id="1:1435">
          {{ t("dolbome.copy.c083") }}
        </p>
        <p class="db-1ddefc854e case-flow" data-node-id="1:1436">
          Thymeleaf / SCSS
        </p>
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@use "@/assets/dolbome-case.scss";
</style>
