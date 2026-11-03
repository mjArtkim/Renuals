<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { onMounted } from "vue";
const emit = defineEmits(["ready"]);
onMounted(() => emit("ready"));
import DolbomeScreen from "./DolbomeScreen.vue";
import ambientImage from "@/assets/img/dolbome/8248ddbc54c1eb19.svg?no-inline";
defineProps({ poster: Boolean });

import screen24_1868 from "@/assets/img/dolbome/screens/24-1868.png";
import screen2_173 from "@/assets/img/dolbome/screens/2-173.png";
import screen2_525 from "@/assets/img/dolbome/screens/2-525.png";
import screen2_655 from "@/assets/img/dolbome/screens/2-655.png";
import screen2_799 from "@/assets/img/dolbome/screens/2-799.png";
import screen2_862 from "@/assets/img/dolbome/screens/2-862.png";
import screen2_1071 from "@/assets/img/dolbome/screens/2-1071.png";
import screen2_1238 from "@/assets/img/dolbome/screens/2-1238.png";
import screen2_1395 from "@/assets/img/dolbome/screens/2-1395.png";
import screen2_1539 from "@/assets/img/dolbome/screens/2-1539.png";
import screen2_1684 from "@/assets/img/dolbome/screens/2-1684.png";
</script>
<template>
  <div v-if="poster" class="poster-visual" aria-hidden="true">
    <img class="poster-ambient" :src="ambientImage" alt="" />
    <div class="poster-screens">
      <DolbomeScreen
        :src="screen24_1868"
        :width="984.0"
        :height="741.280029296875"
        label="Editable UI / COMMERCE"
        data-figma-node="24:1868"
      />
    </div>
  </div>
  <article v-else class="dolbome-case shopping">
    <section
      class="db-461c5adcfb case-section case-column"
      data-node-id="2:158"
      data-design-name="00 · 프로젝트 커버"
    >
      <p class="db-05cde45bc7 case-flow" data-node-id="2:160">
        {{ t("dolbome.copy.c084") }}
      </p>
      <p class="db-e3ce2d2540 case-flow" data-node-id="2:161">
        {{ t("dolbome.copy.c085") }}
      </p>
      <div class="db-9d5bdad906 case-flow" data-node-id="2:162">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c086") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c087") }}</p>
      </div>
      <div
        class="db-eaf791ea0a case-flow case-row"
        data-node-id="2:163"
        data-design-name="기술"
      >
        <div
          class="db-181d1ddf0a case-flow case-column"
          data-node-id="2:164"
          data-design-name="Figma"
        >
          <p class="db-20bc627279 case-flow" data-node-id="2:165">Figma</p>
        </div>
        <div
          class="db-181d1ddf0a case-flow case-column"
          data-node-id="2:166"
          data-design-name="Thymeleaf"
        >
          <p class="db-20bc627279 case-flow" data-node-id="2:167">Thymeleaf</p>
        </div>
        <div
          class="db-181d1ddf0a case-flow case-column"
          data-node-id="2:168"
          data-design-name="SCSS"
        >
          <p class="db-20bc627279 case-flow" data-node-id="2:169">SCSS</p>
        </div>
        <div
          class="db-181d1ddf0a case-flow case-column"
          data-node-id="2:170"
          data-design-name="PC / Mobile"
        >
          <p class="db-20bc627279 case-flow" data-node-id="2:171">
            PC / Mobile
          </p>
        </div>
      </div>
      <div
        class="db-50e2e4e9c2 case-flow case-row"
        data-node-id="2:172"
        data-design-name="대표 화면"
      >
        <DolbomeScreen
          :src="screen2_173"
          :width="870.0"
          :height="880.0"
          :label="t('dolbome.labels.a018')"
          data-figma-node="2:173"
        /><DolbomeScreen
          :src="screen2_525"
          :width="294.0"
          :height="880.0"
          :label="t('dolbome.labels.a019')"
          data-figma-node="2:525"
        />
      </div>
    </section>
    <section
      class="db-2d0512e3d0 case-section case-column"
      data-node-id="2:595"
      data-design-name="01 · 프로젝트 개요"
    >
      <ol class="db-15adb6dd52 case-flow" data-node-id="2:597" start="1">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c088")
          }}</span>
        </li>
      </ol>
      <div class="db-aa8bcb27c5 case-flow" data-node-id="2:598">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c089") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c090") }}</p>
      </div>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="2:599"
        data-design-name="담당 영역"
      >
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="2:600"
          data-design-name="기획"
        >
          <p class="db-e5ae6cc952 case-flow" data-node-id="2:601">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="db-00983f8e94 case-flow" data-node-id="2:602">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c091") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c092") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="2:603"
          data-design-name="와이어프레임"
        >
          <p class="db-e5ae6cc952 case-flow" data-node-id="2:604">
            {{ t("dolbome.copy.c009") }}
          </p>
          <div class="db-00983f8e94 case-flow" data-node-id="2:605">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c093") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c011") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="2:606"
          data-design-name="UI 디자인"
        >
          <p class="db-e5ae6cc952 case-flow" data-node-id="2:607">
            {{ t("dolbome.copy.c012") }}
          </p>
          <div class="db-00983f8e94 case-flow" data-node-id="2:608">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c094") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c095") }}</p>
          </div>
        </div>
        <div
          class="db-daec7191a6 case-flow case-column"
          data-node-id="2:609"
          data-design-name="퍼블리싱"
        >
          <p class="db-e5ae6cc952 case-flow" data-node-id="2:610">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="db-00983f8e94 case-flow" data-node-id="2:611">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c096") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c097") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-4eab67adda case-section case-column"
      data-node-id="2:612"
      data-design-name="02 · 작업 흐름"
    >
      <ol class="db-52de20cec4 case-flow" data-node-id="2:614" start="2">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c098")
          }}</span>
        </li>
      </ol>
      <p class="db-0b62ba1f4c case-flow" data-node-id="2:615">
        {{ t("dolbome.copy.c099") }}
      </p>
      <div
        class="db-66ca84dffa case-flow case-row"
        data-node-id="2:616"
        data-design-name="작업 단계"
      >
        <ol class="case-numbered" start="1">
          <li>
            <div
              class="db-faf0a4d052 case-flow case-column"
              data-node-id="2:617"
              data-design-name="기획"
            >
              <p class="db-75560bf044 case-flow" data-node-id="2:619">
                {{ t("dolbome.copy.c006") }}
              </p>
              <div class="db-5382f78c68 case-flow" data-node-id="2:620">
                <p class="db-2710210a12 case-flow">
                  {{ t("dolbome.copy.c100") }}
                </p>
                <p class="db-230521fb39 case-flow">
                  {{ t("dolbome.copy.c101") }}
                </p>
              </div>
            </div>
          </li>
        </ol>
        <ol class="case-numbered" start="2">
          <li>
            <div
              class="db-faf0a4d052 case-flow case-column"
              data-node-id="2:621"
              data-design-name="화면 설계"
            >
              <p class="db-75560bf044 case-flow" data-node-id="2:623">
                {{ t("dolbome.copy.c102") }}
              </p>
              <div class="db-5382f78c68 case-flow" data-node-id="2:624">
                <p class="db-2710210a12 case-flow">
                  {{ t("dolbome.copy.c103") }}
                </p>
                <p class="db-230521fb39 case-flow">
                  {{ t("dolbome.copy.c104") }}
                </p>
              </div>
            </div>
          </li>
        </ol>
        <ol class="case-numbered" start="3">
          <li>
            <div
              class="db-faf0a4d052 case-flow case-column"
              data-node-id="2:625"
              data-design-name="UI 디자인"
            >
              <p class="db-75560bf044 case-flow" data-node-id="2:627">
                {{ t("dolbome.copy.c012") }}
              </p>
              <div class="db-5382f78c68 case-flow" data-node-id="2:628">
                <p class="db-2710210a12 case-flow">
                  {{ t("dolbome.copy.c105") }}
                </p>
                <p class="db-230521fb39 case-flow">
                  {{ t("dolbome.copy.c106") }}
                </p>
              </div>
            </div>
          </li>
        </ol>
        <ol class="case-numbered" start="4">
          <li>
            <div
              class="db-faf0a4d052 case-flow case-column"
              data-node-id="2:629"
              data-design-name="퍼블리싱"
            >
              <p class="db-75560bf044 case-flow" data-node-id="2:631">
                {{ t("dolbome.copy.c015") }}
              </p>
              <div class="db-5382f78c68 case-flow" data-node-id="2:632">
                <p class="db-2710210a12 case-flow">
                  {{ t("dolbome.copy.c107") }}
                </p>
                <p class="db-230521fb39 case-flow">
                  {{ t("dolbome.copy.c108") }}
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section
      class="db-2d0512e3d0 case-section case-column"
      data-node-id="2:633"
      data-design-name="03 · 서비스 기획"
    >
      <div
        class="db-b39ba7ce69 case-flow case-heading-group"
        data-node-id="2:635"
      >
        <ol class="db-9e531dcc95 case-flow" start="3">
          <li class="db-02c5351b87 case-flow">
            <span class="db-ec62c81b4d case-flow"
              >{{ t("dolbome.copy.c109") }}<br />{{
                t("dolbome.copy.c110")
              }}</span
            >
          </li>
        </ol>
      </div>
      <div class="db-aa8bcb27c5 case-flow" data-node-id="2:636">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c111") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c112") }}</p>
      </div>
      <div
        class="db-66ca84dffa case-flow case-row"
        data-node-id="2:637"
        data-design-name="주요 이용 흐름"
      >
        <div
          class="db-4186333431 case-flow case-column"
          data-node-id="2:638"
          data-design-name="DISCOVER"
        >
          <p class="db-92b1cf42c0 case-flow" data-node-id="2:639">DISCOVER</p>
          <p class="db-f1f52e2bd9 case-flow" data-node-id="2:640">
            {{ t("dolbome.copy.c113") }}
          </p>
        </div>
        <div
          class="db-4186333431 case-flow case-column"
          data-node-id="2:641"
          data-design-name="DECIDE"
        >
          <p class="db-92b1cf42c0 case-flow" data-node-id="2:642">DECIDE</p>
          <p class="db-f1f52e2bd9 case-flow" data-node-id="2:643">
            {{ t("dolbome.copy.c114") }}
          </p>
        </div>
        <div
          class="db-4186333431 case-flow case-column"
          data-node-id="2:644"
          data-design-name="ORDER"
        >
          <p class="db-92b1cf42c0 case-flow" data-node-id="2:645">ORDER</p>
          <p class="db-f1f52e2bd9 case-flow" data-node-id="2:646">
            {{ t("dolbome.copy.c115") }}
          </p>
        </div>
        <div
          class="db-4186333431 case-flow case-column"
          data-node-id="2:647"
          data-design-name="MANAGE"
        >
          <p class="db-92b1cf42c0 case-flow" data-node-id="2:648">MANAGE</p>
          <p class="db-f1f52e2bd9 case-flow" data-node-id="2:649">
            {{ t("dolbome.copy.c116") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-72ca28fcc8 case-section case-column"
      data-node-id="2:650"
      data-design-name="04 · 와이어프레임"
    >
      <ol class="db-3581ee77cd case-flow" data-node-id="2:652" start="4">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c117")
          }}</span>
        </li>
      </ol>
      <div class="db-9d5bdad906 case-flow" data-node-id="2:653">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c118") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c119") }}</p>
      </div>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="2:654"
        data-design-name="장바구니 와이어프레임·설명"
      >
        <DolbomeScreen
          :src="screen2_655"
          :width="310.0"
          :height="1328.3460693359375"
          :label="t('dolbome.labels.a020')"
          data-figma-node="2:655"
        /><DolbomeScreen
          :src="screen2_799"
          :width="842.0"
          :height="596.0"
          :label="t('dolbome.labels.a021')"
          data-figma-node="2:799"
        />
      </div>
      <div
        class="db-41d2096a2f case-flow case-row"
        data-node-id="2:823"
        data-design-name="화면 설계 범위"
      >
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="2:824"
          data-design-name="목록과 빈 상태"
        >
          <p class="db-cf79c91843 case-flow" data-node-id="2:825">
            {{ t("dolbome.copy.c120") }}
          </p>
          <p class="db-9af2422779 case-flow" data-node-id="2:826">
            {{ t("dolbome.copy.c121") }}
          </p>
        </div>
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="2:827"
          data-design-name="입력과 선택"
        >
          <p class="db-cf79c91843 case-flow" data-node-id="2:828">
            {{ t("dolbome.copy.c122") }}
          </p>
          <p class="db-9af2422779 case-flow" data-node-id="2:829">
            {{ t("dolbome.copy.c123") }}
          </p>
        </div>
        <div
          class="db-3d5b1f79fa case-flow case-column"
          data-node-id="2:830"
          data-design-name="결과와 관리"
        >
          <p class="db-cf79c91843 case-flow" data-node-id="2:831">
            {{ t("dolbome.copy.c124") }}
          </p>
          <p class="db-9af2422779 case-flow" data-node-id="2:832">
            {{ t("dolbome.copy.c125") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-899382a651 case-section case-column"
      data-node-id="2:833"
      data-design-name="05 · UI 방향"
    >
      <ol class="db-2920802c0c case-flow" data-node-id="2:835" start="5">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c126")
          }}</span>
        </li>
      </ol>
      <div class="db-9d5bdad906 case-flow" data-node-id="2:836">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c127") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c128") }}</p>
      </div>
      <div
        class="db-cff20b749c case-flow case-row"
        data-node-id="2:837"
        data-design-name="시각 체계"
      >
        <div
          class="db-a262b1f0e7 case-flow case-column"
          data-node-id="2:838"
          data-design-name="컬러"
        >
          <p class="db-5c0d7a049c case-flow" data-node-id="2:839">COLOR</p>
          <div
            class="db-8cbddfcef0 case-flow case-row"
            data-node-id="2:840"
            data-design-name="팔레트"
          >
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="2:841"
              data-design-name="ORANGE"
            >
              <div
                class="db-db36dac429 case-flow"
                data-node-id="2:842"
                data-design-name="Rectangle"
              ></div>
              <p class="db-b932354335 case-flow" data-node-id="2:843">ORANGE</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="2:844"
              data-design-name="WHITE"
            >
              <div
                class="db-d0998b0dd9 case-flow"
                data-node-id="2:845"
                data-design-name="Rectangle"
              ></div>
              <p class="db-b932354335 case-flow" data-node-id="2:846">WHITE</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="2:847"
              data-design-name="GRAY"
            >
              <div
                class="db-7cdef7a4f7 case-flow"
                data-node-id="2:848"
                data-design-name="Rectangle"
              ></div>
              <p class="db-b932354335 case-flow" data-node-id="2:849">GRAY</p>
            </div>
            <div
              class="db-c54386deeb case-flow case-column"
              data-node-id="2:850"
              data-design-name="INK"
            >
              <div
                class="db-ac4d51312b case-flow"
                data-node-id="2:851"
                data-design-name="Rectangle"
              ></div>
              <p class="db-b932354335 case-flow" data-node-id="2:852">INK</p>
            </div>
          </div>
        </div>
        <div
          class="db-adf875a2c6 case-flow case-column"
          data-node-id="2:853"
          data-design-name="타이포그래피"
        >
          <p class="db-6bc5833a52 case-flow" data-node-id="2:854">TYPOGRAPHY</p>
          <p class="db-4b946d04cd case-flow" data-node-id="2:855">
            {{ t("dolbome.copy.c129") }}
          </p>
          <p class="db-474677408c case-flow" data-node-id="2:856">
            {{ t("dolbome.copy.c130") }}
          </p>
          <p class="db-88570b2b7e case-flow" data-node-id="2:857">
            {{ t("dolbome.copy.c131") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-62aded81d3 case-section case-column"
      data-node-id="2:858"
      data-design-name="06 · PC 화면"
    >
      <ol class="db-2920802c0c case-flow" data-node-id="2:860" start="6">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c132")
          }}</span>
        </li>
      </ol>
      <p class="db-6cdbb565ab case-flow" data-node-id="2:861">
        {{ t("dolbome.copy.c133") }}
      </p>
      <DolbomeScreen
        :src="screen2_862"
        :width="1200.0"
        :height="1400.0"
        :label="t('dolbome.labels.a022')"
        data-figma-node="2:862"
      />
      <p class="db-984111666c case-flow" data-node-id="2:1068">
        {{ t("dolbome.copy.c134") }}
      </p>
      <div
        class="db-e5d59c893a case-flow case-row"
        data-node-id="2:1069"
        data-design-name="PC 주문·결제"
      >
        <div
          class="db-3eb9bc38d9 case-flow case-column"
          data-node-id="2:1070"
          data-design-name="장바구니 · 선택상품과 주문 예상 금액"
        >
          <DolbomeScreen
            :src="screen2_1071"
            :width="584.0"
            :height="820.0"
            :label="t('dolbome.labels.a023')"
            data-figma-node="2:1071"
          />
          <p class="db-c3f71c5c7d case-flow" data-node-id="2:1236">
            {{ t("dolbome.copy.c135") }}
          </p>
        </div>
        <div
          class="db-3eb9bc38d9 case-flow case-column"
          data-node-id="2:1237"
          data-design-name="주문결제 · 배송지와 결제수단"
        >
          <DolbomeScreen
            :src="screen2_1238"
            :width="584.0"
            :height="820.0"
            :label="t('dolbome.labels.a024')"
            data-figma-node="2:1238"
          />
          <p class="db-c3f71c5c7d case-flow" data-node-id="2:1388">
            {{ t("dolbome.copy.c136") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-899382a651 case-section case-column"
      data-node-id="2:1389"
      data-design-name="07 · 모바일 화면"
    >
      <ol class="db-3581ee77cd case-flow" data-node-id="2:1391" start="7">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c137")
          }}</span>
        </li>
      </ol>
      <p class="db-6cdbb565ab case-flow" data-node-id="2:1392">
        {{ t("dolbome.copy.c138") }}
      </p>
      <div
        class="db-130407673a case-flow case-row"
        data-node-id="2:1393"
        data-design-name="모바일 핵심 화면"
      >
        <div
          class="db-57a4bfcb8c case-flow case-column"
          data-node-id="2:1394"
          data-design-name="01  상품 탐색"
        >
          <DolbomeScreen
            :src="screen2_1395"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a025')"
            data-figma-node="2:1395"
          />
          <p class="db-7d4169b343 case-flow" data-node-id="2:1536">
            {{ t("dolbome.copy.c139") }}
          </p>
          <p class="db-71f8bfd125 case-flow" data-node-id="2:1537">
            {{ t("dolbome.copy.c140") }}
          </p>
        </div>
        <div
          class="db-57a4bfcb8c case-flow case-column"
          data-node-id="2:1538"
          data-design-name="02  장바구니"
        >
          <DolbomeScreen
            :src="screen2_1539"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a026')"
            data-figma-node="2:1539"
          />
          <p class="db-7d4169b343 case-flow" data-node-id="2:1681">
            {{ t("dolbome.copy.c141") }}
          </p>
          <p class="db-71f8bfd125 case-flow" data-node-id="2:1682">
            {{ t("dolbome.copy.c142") }}
          </p>
        </div>
        <div
          class="db-57a4bfcb8c case-flow case-column"
          data-node-id="2:1683"
          data-design-name="03  MY"
        >
          <DolbomeScreen
            :src="screen2_1684"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a027')"
            data-figma-node="2:1684"
          />
          <p class="db-7d4169b343 case-flow" data-node-id="2:1788">03 MY</p>
          <p class="db-71f8bfd125 case-flow" data-node-id="2:1789">
            {{ t("dolbome.copy.c143") }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="db-4eab67adda case-section case-column"
      data-node-id="2:1790"
      data-design-name="08 · 퍼블리싱 구조"
    >
      <ol class="db-15adb6dd52 case-flow" data-node-id="2:1792" start="8">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c144")
          }}</span>
        </li>
      </ol>
      <div class="db-aa8bcb27c5 case-flow" data-node-id="2:1793">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c145") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c146") }}</p>
      </div>
      <div
        class="db-66ca84dffa case-flow case-row"
        data-node-id="2:1794"
        data-design-name="퍼블리싱 구성"
      >
        <div
          class="db-9a6f8b302b case-flow case-column"
          data-node-id="2:1795"
          data-design-name="Thymeleaf"
        >
          <p class="db-73fc03f6d6 case-flow" data-node-id="2:1796">Thymeleaf</p>
          <div class="db-f720b27731 case-flow" data-node-id="2:1797">
            <p class="db-2710210a12 case-flow">main / my / order / product</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c147") }}</p>
          </div>
        </div>
        <div
          class="db-9a6f8b302b case-flow case-column"
          data-node-id="2:1798"
          data-design-name="Common include"
        >
          <p class="db-73fc03f6d6 case-flow" data-node-id="2:1799">
            Common include
          </p>
          <div class="db-f720b27731 case-flow" data-node-id="2:1800">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c148") }}</p>
            <p class="db-230521fb39 case-flow">{{ t("dolbome.copy.c149") }}</p>
          </div>
        </div>
        <div
          class="db-9a6f8b302b case-flow case-column"
          data-node-id="2:1801"
          data-design-name="SCSS"
        >
          <p class="db-73fc03f6d6 case-flow" data-node-id="2:1802">SCSS</p>
          <div class="db-f720b27731 case-flow" data-node-id="2:1803">
            <p class="db-2710210a12 case-flow">{{ t("dolbome.copy.c150") }}</p>
            <p class="db-230521fb39 case-flow">store.scss / responsive.scss</p>
          </div>
        </div>
      </div>
      <div
        class="db-86816a3e2b case-flow case-row"
        data-node-id="2:1804"
        data-design-name="템플릿·SCSS 폴더 구조"
      >
        <div
          class="db-279169547a case-flow case-column"
          data-node-id="2:1805"
          data-design-name="HTML 템플릿"
        >
          <p class="db-0b3bc54d75 case-flow" data-node-id="2:1806">
            {{ t("dolbome.copy.c151") }}
          </p>
          <div class="db-c3b6fecf71 case-flow" data-node-id="2:1807">
            <p class="db-f77f767b2f case-flow">views/store/</p>
            <p class="db-f77f767b2f case-flow">├─ admin/</p>
            <p class="db-f77f767b2f case-flow">├─ include/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ admin/</p>
            <p class="db-f77f767b2f case-flow">│ └─ user/</p>
            <p class="db-f77f767b2f case-flow">└─ user/</p>
            <p class="db-f77f767b2f case-flow">├─ main/</p>
            <p class="db-f77f767b2f case-flow">│ └─ main.html</p>
            <p class="db-f77f767b2f case-flow">├─ my/</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myPage.html / myInfo.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ orderList.html / orderDetail.html
            </p>
            <p class="db-f77f767b2f case-flow">│ ├─ pick.html / review.html</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myInquiry.html / myReport.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myCard.html / delivery.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ myPoint.html / myPointHistory.html
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ invoice.html / refund.html / search.html
            </p>
            <p class="db-f77f767b2f case-flow">├─ notice/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ faq.html / notice.html</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ inquiry.html / registerInquiry.html
            </p>
            <p class="db-f77f767b2f case-flow">│ └─ modifyInquiry.html</p>
            <p class="db-f77f767b2f case-flow">├─ order/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ cart.html / order.html</p>
            <p class="db-f77f767b2f case-flow">│ └─ orderResult.html</p>
            <p class="db-f77f767b2f case-flow">└─ product/</p>
            <p class="db-f77f767b2f case-flow">├─ productDetail.html</p>
            <p class="db-f77f767b2f case-flow">├─ productList.html</p>
            <p class="db-6b319aafdd case-flow">└─ rankingList.html</p>
          </div>
        </div>
        <div
          class="db-279169547a case-flow case-column"
          data-node-id="2:1808"
          data-design-name="SCSS 파일 구성"
        >
          <p class="db-0b3bc54d75 case-flow" data-node-id="2:1809">
            {{ t("dolbome.copy.c152") }}
          </p>
          <div class="db-c3b6fecf71 case-flow" data-node-id="2:1810">
            <p class="db-f77f767b2f case-flow">static/scss/store/</p>
            <p class="db-f77f767b2f case-flow">├─ components/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _common.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _coupon-popup.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _invoice.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _mobile-controls.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _my-navigation.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _product-report.scss</p>
            <p class="db-f77f767b2f case-flow">
              │ └─ _product-review-modals.scss
            </p>
            <p class="db-f77f767b2f case-flow">├─ pages/</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _auth.scss / _home.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _cart.scss / _order.scss</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ _product-detail.scss / _product-list.scss
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ _my-account.scss / _my-profile.scss
            </p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ _my-orders.scss / _my-order-detail.scss
            </p>
            <p class="db-f77f767b2f case-flow">│ ├─ _my-page-layout.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _my-payment-cards.scss</p>
            <p class="db-f77f767b2f case-flow">│ ├─ _my-points.scss</p>
            <p class="db-f77f767b2f case-flow">
              │ ├─ _my-reviews-inquiries.scss
            </p>
            <p class="db-f77f767b2f case-flow">
              │ └─ _notice.scss / _search.scss
            </p>
            <p class="db-f77f767b2f case-flow">├─ legacy/</p>
            <p class="db-f77f767b2f case-flow">├─ responsive.scss</p>
            <p class="db-f77f767b2f case-flow">├─ store.scss</p>
            <p class="db-6b319aafdd case-flow">└─ store-nav.scss</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-2d0512e3d0 case-section case-column"
      data-node-id="2:1812"
      data-design-name="09 · 공통 UI와 자산"
    >
      <ol class="db-15adb6dd52 case-flow" data-node-id="2:1814" start="9">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c153")
          }}</span>
        </li>
      </ol>
      <div class="db-aa8bcb27c5 case-flow" data-node-id="2:1815">
        <p class="db-fd19851b66 case-flow">{{ t("dolbome.copy.c154") }}</p>
        <p class="db-a0118ea47e case-flow">{{ t("dolbome.copy.c155") }}</p>
      </div>
      <div
        class="db-130407673a case-flow case-row"
        data-node-id="2:1816"
        data-design-name="공통 파일"
      >
        <div
          class="db-8fa0681780 case-flow case-column"
          data-node-id="2:1817"
          data-design-name="공통 include"
        >
          <p class="db-412d7d37be case-flow" data-node-id="2:1818">
            include/user/
          </p>
          <div class="db-de1c4e73ba case-flow" data-node-id="2:1819">
            <p class="db-2710210a12 case-flow">
              inc_user_head.html / inc_user_style.html
            </p>
            <p class="db-2710210a12 case-flow">
              inc_user_header.html / inc_user_footer.html
            </p>
            <p class="db-2710210a12 case-flow">
              inc_user_nav.html / inc_user_btm_nav.html
            </p>
            <p class="db-2710210a12 case-flow">
              inc_user_my_nav.html / inc_recently_view.html
            </p>
            <p class="db-2710210a12 case-flow">​</p>
            <p class="db-2710210a12 case-flow">inc_user_cart_popup.html</p>
            <p class="db-2710210a12 case-flow">inc_user_delivery_popup.html</p>
            <p class="db-2710210a12 case-flow">inc_user_inquiry_popup.html</p>
            <p class="db-2710210a12 case-flow">inc_user_review_popup.html</p>
            <p class="db-230521fb39 case-flow">
              inc_user_report.html / inc_user_report_user.html
            </p>
          </div>
        </div>
        <div
          class="db-8fa0681780 case-flow case-column"
          data-node-id="2:1820"
          data-design-name="정적 자산"
        >
          <p class="db-412d7d37be case-flow" data-node-id="2:1821">static/</p>
          <div class="db-de1c4e73ba case-flow" data-node-id="2:1822">
            <p class="db-2710210a12 case-flow">img/store/user/</p>
            <p class="db-2710210a12 case-flow">btm_nav/ · favicon/ · icon/</p>
            <p class="db-2710210a12 case-flow">login/ · logo/ · main/</p>
            <p class="db-2710210a12 case-flow">
              card_img.png · cards_y_img.png
            </p>
            <p class="db-2710210a12 case-flow">sprite.svg · test_banner.jpg</p>
            <p class="db-2710210a12 case-flow">​</p>
            <p class="db-2710210a12 case-flow">js/store/</p>
            <p class="db-2710210a12 case-flow">admin/common.js</p>
            <p class="db-230521fb39 case-flow">user/common.js</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="db-4eab67adda case-section case-column"
      data-node-id="2:1823"
      data-design-name="10 · 화면과 코드"
    >
      <ol class="db-15adb6dd52 case-flow" data-node-id="2:1825" start="10">
        <li class="db-02c5351b87 case-flow">
          <span class="db-ec62c81b4d case-flow">{{
            t("dolbome.copy.c156")
          }}</span>
        </li>
      </ol>
      <p class="db-0b62ba1f4c case-flow" data-node-id="2:1826">
        {{ t("dolbome.copy.c157") }}
      </p>
      <ol class="case-numbered" start="1">
        <li>
          <div
            class="db-c2539cb28a case-flow case-column"
            data-node-id="2:1827"
            data-design-name="상품 탐색"
          >
            <p class="db-f0b81eccef case-flow" data-node-id="2:1829">
              {{ t("dolbome.copy.c158") }}
            </p>
            <div
              class="db-9f52d7dd7a case-flow case-column"
              data-node-id="2:1830"
              data-design-name="파일 대응"
            >
              <p class="db-f500577890 case-flow" data-node-id="2:1831">
                main/main.html, product/productList.html
              </p>
              <p class="db-3a8ed70bd9 case-flow" data-node-id="2:1832">
                pages/_home.scss, pages/_product-list.scss
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol class="case-numbered" start="2">
        <li>
          <div
            class="db-c2539cb28a case-flow case-column"
            data-node-id="2:1833"
            data-design-name="상품 상세"
          >
            <p class="db-f0b81eccef case-flow" data-node-id="2:1835">
              {{ t("dolbome.copy.c159") }}
            </p>
            <div
              class="db-9f52d7dd7a case-flow case-column"
              data-node-id="2:1836"
              data-design-name="파일 대응"
            >
              <p class="db-f500577890 case-flow" data-node-id="2:1837">
                product/productDetail.html
              </p>
              <p class="db-3a8ed70bd9 case-flow" data-node-id="2:1838">
                pages/_product-detail.scss
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol class="case-numbered" start="3">
        <li>
          <div
            class="db-c2539cb28a case-flow case-column"
            data-node-id="2:1839"
            data-design-name="장바구니·결제"
          >
            <p class="db-f0b81eccef case-flow" data-node-id="2:1841">
              {{ t("dolbome.copy.c160") }}
            </p>
            <div
              class="db-9493f551cc case-flow case-column"
              data-node-id="2:1842"
              data-design-name="파일 대응"
            >
              <p class="db-f500577890 case-flow" data-node-id="2:1843">
                order/cart.html, order/order.html
              </p>
              <p class="db-3a8ed70bd9 case-flow" data-node-id="2:1844">
                pages/_cart.scss, pages/_order.scss
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol class="case-numbered" start="4">
        <li>
          <div
            class="db-c2539cb28a case-flow case-column"
            data-node-id="2:1845"
            data-design-name="주문·MY 관리"
          >
            <p class="db-f0b81eccef case-flow" data-node-id="2:1847">
              {{ t("dolbome.copy.c161") }}
            </p>
            <div
              class="db-9f52d7dd7a case-flow case-column"
              data-node-id="2:1848"
              data-design-name="파일 대응"
            >
              <p class="db-8aa70e691e case-flow" data-node-id="2:1849">
                my/orderList.html, my/orderDetail.html
              </p>
              <p class="db-3a8ed70bd9 case-flow" data-node-id="2:1850">
                pages/_my-orders.scss , pages/_my-order-detail.scss
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol class="case-numbered" start="5">
        <li>
          <div
            class="db-c2539cb28a case-flow case-column"
            data-node-id="2:1851"
            data-design-name="카드·리뷰·문의"
          >
            <p class="db-f0b81eccef case-flow" data-node-id="2:1853">
              {{ t("dolbome.copy.c162") }}
            </p>
            <div
              class="db-9f52d7dd7a case-flow case-column"
              data-node-id="2:1854"
              data-design-name="파일 대응"
            >
              <p class="db-8aa70e691e case-flow" data-node-id="2:1855">
                my/myCard.html, review.html, myInquiry.html
              </p>
              <p class="db-3a8ed70bd9 case-flow" data-node-id="2:1856">
                pages/_my-payment-cards.scss, _my-reviews-inquiries.scss
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
    <section
      class="db-ecbba8681b case-section case-column"
      data-node-id="2:1857"
      data-design-name="11 · 프로젝트 마무리"
    >
      <p class="db-6f496b41c6 case-flow" data-node-id="2:1859">
        {{ t("dolbome.copy.c163") }}
      </p>
      <p class="db-1ea8f89d20 case-flow" data-node-id="2:1860">
        {{ t("dolbome.copy.c164") }}
      </p>
      <div
        class="db-dc33eb099d case-flow case-row"
        data-node-id="3:1863"
        data-design-name="작업 영역"
      >
        <p class="db-c0641b3c11 case-flow" data-node-id="3:1864">
          {{ t("dolbome.copy.c083") }}
        </p>å
        <p class="db-1ddefc854e case-flow" data-node-id="3:1865">
          Thymeleaf / SCSS
        </p>
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@use "@/assets/dolbome-case.scss";
</style>
