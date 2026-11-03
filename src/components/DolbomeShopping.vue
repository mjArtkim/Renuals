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
      />
    </div>
  </div>
  <article v-else class="dolbome-case shopping">
    <section class="shopping-cover case-panel">
      <p class="shopping-cover__title case-text--display">
        {{ t("dolbome.copy.c084") }}
      </p>
      <p class="shopping-cover__subtitle case-text--subheading">
        {{ t("dolbome.copy.c085") }}
      </p>
      <div class="shopping-section__intro case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c086") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c087") }}</p>
      </div>
      <div class="shopping-tech__list case-grid">
        <div class="shopping-tech__badge case-panel">
          <p class="shopping-tech__label case-text--caption">Figma</p>
        </div>
        <div class="shopping-tech__badge case-panel">
          <p class="shopping-tech__label case-text--caption">Thymeleaf</p>
        </div>
        <div class="shopping-tech__badge case-panel">
          <p class="shopping-tech__label case-text--caption">SCSS</p>
        </div>
        <div class="shopping-tech__badge case-panel">
          <p class="shopping-tech__label case-text--caption">PC / Mobile</p>
        </div>
      </div>
      <div class="shopping-cover__screens case-grid">
        <DolbomeScreen
          :src="screen2_173"
          :width="870.0"
          :height="880.0"
          :label="t('dolbome.labels.a018')"
        /><DolbomeScreen
          :src="screen2_525"
          :width="294.0"
          :height="880.0"
          :label="t('dolbome.labels.a019')"
        />
      </div>
    </section>
    <section class="shopping-content__section case-panel">
      <h2 class="shopping-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c088")
          }}</span>
        </span>
      </h2>
      <div class="shopping-section__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c089") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c090") }}</p>
      </div>
      <div class="case-content__row case-grid">
        <div class="case-scope__card case-panel">
          <p class="shopping-scope__title case-text--lead">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="shopping-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c091") }}</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c092") }}</p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="shopping-scope__title case-text--lead">
            {{ t("dolbome.copy.c009") }}
          </p>
          <div class="shopping-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c093") }}</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c011") }}</p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="shopping-scope__title case-text--lead">
            {{ t("dolbome.copy.c012") }}
          </p>
          <div class="shopping-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c094") }}</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c095") }}</p>
          </div>
        </div>
        <div class="case-scope__card case-panel">
          <p class="shopping-scope__title case-text--lead">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="shopping-scope__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c096") }}</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c097") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="shopping-muted__section case-panel">
      <h2 class="shopping-process__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c098")
          }}</span>
        </span>
      </h2>
      <p class="shopping-process__description case-text--lead">
        {{ t("dolbome.copy.c099") }}
      </p>
      <div class="case-card__row case-grid">
        <div class="case-process__card case-panel">
          <p class="shopping-process__title case-text--lead">
            {{ t("dolbome.copy.c006") }}
          </p>
          <div class="shopping-process__card-description case-text--body">
            <p class="case-body__line">
              {{ t("dolbome.copy.c100") }}
            </p>
            <p class="case-body__line--last">
              {{ t("dolbome.copy.c101") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="shopping-process__title case-text--lead">
            {{ t("dolbome.copy.c102") }}
          </p>
          <div class="shopping-process__card-description case-text--body">
            <p class="case-body__line">
              {{ t("dolbome.copy.c103") }}
            </p>
            <p class="case-body__line--last">
              {{ t("dolbome.copy.c104") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="shopping-process__title case-text--lead">
            {{ t("dolbome.copy.c012") }}
          </p>
          <div class="shopping-process__card-description case-text--body">
            <p class="case-body__line">
              {{ t("dolbome.copy.c105") }}
            </p>
            <p class="case-body__line--last">
              {{ t("dolbome.copy.c106") }}
            </p>
          </div>
        </div>
        <div class="case-process__card case-panel">
          <p class="shopping-process__title case-text--lead">
            {{ t("dolbome.copy.c015") }}
          </p>
          <div class="shopping-process__card-description case-text--body">
            <p class="case-body__line">
              {{ t("dolbome.copy.c107") }}
            </p>
            <p class="case-body__line--last">
              {{ t("dolbome.copy.c108") }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="shopping-content__section case-panel">
      <h2 class="shopping-planning__heading case-text--heading">
          <span class="case-numbered-heading__item">
            <span class="case-numbered-heading__text"
              >{{ t("dolbome.copy.c109") }}<br />{{
                t("dolbome.copy.c110")
              }}</span
            >
          </span>
        </h2>
      <div class="shopping-section__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c111") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c112") }}</p>
      </div>
      <div class="case-card__row case-grid">
        <div class="shopping-flow__card case-panel">
          <p class="shopping-flow__label case-text--body">DISCOVER</p>
          <p class="shopping-flow__description case-text--caption">
            {{ t("dolbome.copy.c113") }}
          </p>
        </div>
        <div class="shopping-flow__card case-panel">
          <p class="shopping-flow__label case-text--body">DECIDE</p>
          <p class="shopping-flow__description case-text--caption">
            {{ t("dolbome.copy.c114") }}
          </p>
        </div>
        <div class="shopping-flow__card case-panel">
          <p class="shopping-flow__label case-text--body">ORDER</p>
          <p class="shopping-flow__description case-text--caption">
            {{ t("dolbome.copy.c115") }}
          </p>
        </div>
        <div class="shopping-flow__card case-panel">
          <p class="shopping-flow__label case-text--body">MANAGE</p>
          <p class="shopping-flow__description case-text--caption">
            {{ t("dolbome.copy.c116") }}
          </p>
        </div>
      </div>
    </section>
    <section class="shopping-wireframe__section case-panel">
      <h2 class="shopping-wireframe__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c117")
          }}</span>
        </span>
      </h2>
      <div class="shopping-section__intro case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c118") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c119") }}</p>
      </div>
      <div class="case-split__row case-grid">
        <DolbomeScreen
          :src="screen2_655"
          :width="310.0"
          :height="1328.3460693359375"
          :label="t('dolbome.labels.a020')"
        /><DolbomeScreen
          :src="screen2_799"
          :width="842.0"
          :height="596.0"
          :label="t('dolbome.labels.a021')"
        />
      </div>
      <div class="shopping-state__list case-grid">
        <div class="case-state__card case-panel">
          <p class="shopping-state__title case-text--lead">
            {{ t("dolbome.copy.c120") }}
          </p>
          <p class="shopping-state__description case-text--caption">
            {{ t("dolbome.copy.c121") }}
          </p>
        </div>
        <div class="case-state__card case-panel">
          <p class="shopping-state__title case-text--lead">
            {{ t("dolbome.copy.c122") }}
          </p>
          <p class="shopping-state__description case-text--caption">
            {{ t("dolbome.copy.c123") }}
          </p>
        </div>
        <div class="case-state__card case-panel">
          <p class="shopping-state__title case-text--lead">
            {{ t("dolbome.copy.c124") }}
          </p>
          <p class="shopping-state__description case-text--caption">
            {{ t("dolbome.copy.c125") }}
          </p>
        </div>
      </div>
    </section>
    <section class="shopping-ui__section case-panel">
      <h2 class="shopping-ui__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c126")
          }}</span>
        </span>
      </h2>
      <div class="shopping-section__intro case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c127") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c128") }}</p>
      </div>
      <div class="case-split__row case-grid">
        <div class="case-color__panel case-panel">
          <p class="shopping-color__label case-text--caption">COLOR</p>
          <div class="case-color__palette case-grid">
            <div class="case-color__swatch case-panel">
              <div class="shopping-swatch__orange"></div>
              <p class="shopping-swatch__label case-text--small">ORANGE</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="shopping-swatch__white"></div>
              <p class="shopping-swatch__label case-text--small">WHITE</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="shopping-swatch__gray"></div>
              <p class="shopping-swatch__label case-text--small">GRAY</p>
            </div>
            <div class="case-color__swatch case-panel">
              <div class="shopping-swatch__ink"></div>
              <p class="shopping-swatch__label case-text--small">INK</p>
            </div>
          </div>
        </div>
        <div class="shopping-typography__panel case-panel">
          <p class="shopping-typography__label case-text--caption">TYPOGRAPHY</p>
          <p class="shopping-font__name case-text--subheading">
            {{ t("dolbome.copy.c129") }}
          </p>
          <p class="shopping-font__description case-text--body">
            {{ t("dolbome.copy.c130") }}
          </p>
          <p class="shopping-font__note case-text--caption">
            {{ t("dolbome.copy.c131") }}
          </p>
        </div>
      </div>
    </section>
    <section class="shopping-desktop__section case-panel">
      <h2 class="shopping-ui__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c132")
          }}</span>
        </span>
      </h2>
      <p class="shopping-screen__description case-text--lead">
        {{ t("dolbome.copy.c133") }}
      </p>
      <DolbomeScreen
        :src="screen2_862"
        :width="1200.0"
        :height="1400.0"
        :label="t('dolbome.labels.a022')"
      />
      <p class="shopping-screen__group-title case-text--lead">
        {{ t("dolbome.copy.c134") }}
      </p>
      <div class="case-content__row case-grid">
        <div class="shopping-desktop-screen__card case-panel">
          <DolbomeScreen
            :src="screen2_1071"
            :width="584.0"
            :height="820.0"
            :label="t('dolbome.labels.a023')"
          />
          <p class="shopping-desktop-screen__title case-text--body">
            {{ t("dolbome.copy.c135") }}
          </p>
        </div>
        <div class="shopping-desktop-screen__card case-panel">
          <DolbomeScreen
            :src="screen2_1238"
            :width="584.0"
            :height="820.0"
            :label="t('dolbome.labels.a024')"
          />
          <p class="shopping-desktop-screen__title case-text--body">
            {{ t("dolbome.copy.c136") }}
          </p>
        </div>
      </div>
    </section>
    <section class="shopping-ui__section case-panel">
      <h2 class="shopping-wireframe__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c137")
          }}</span>
        </span>
      </h2>
      <p class="shopping-screen__description case-text--lead">
        {{ t("dolbome.copy.c138") }}
      </p>
      <div class="case-detail__row case-grid">
        <div class="shopping-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen2_1395"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a025')"
          />
          <p class="shopping-mobile-screen__title case-text--lead">
            {{ t("dolbome.copy.c139") }}
          </p>
          <p class="shopping-mobile-screen__description case-text--caption">
            {{ t("dolbome.copy.c140") }}
          </p>
        </div>
        <div class="shopping-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen2_1539"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a026')"
          />
          <p class="shopping-mobile-screen__title case-text--lead">
            {{ t("dolbome.copy.c141") }}
          </p>
          <p class="shopping-mobile-screen__description case-text--caption">
            {{ t("dolbome.copy.c142") }}
          </p>
        </div>
        <div class="shopping-mobile-screen__card case-panel">
          <DolbomeScreen
            :src="screen2_1684"
            :width="373.0"
            :height="950.0"
            :label="t('dolbome.labels.a027')"
          />
          <p class="shopping-mobile-screen__title case-text--lead">03 MY</p>
          <p class="shopping-mobile-screen__description case-text--caption">
            {{ t("dolbome.copy.c143") }}
          </p>
        </div>
      </div>
    </section>
    <section class="shopping-muted__section case-panel">
      <h2 class="shopping-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c144")
          }}</span>
        </span>
      </h2>
      <div class="shopping-section__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c145") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c146") }}</p>
      </div>
      <div class="case-card__row case-grid">
        <div class="shopping-implementation__card case-panel">
          <p class="shopping-implementation__title case-text--subheading">Thymeleaf</p>
          <div class="shopping-implementation__description case-text--body">
            <p class="case-body__line">main / my / order / product</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c147") }}</p>
          </div>
        </div>
        <div class="shopping-implementation__card case-panel">
          <p class="shopping-implementation__title case-text--subheading">Common include</p>
          <div class="shopping-implementation__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c148") }}</p>
            <p class="case-body__line--last">{{ t("dolbome.copy.c149") }}</p>
          </div>
        </div>
        <div class="shopping-implementation__card case-panel">
          <p class="shopping-implementation__title case-text--subheading">SCSS</p>
          <div class="shopping-implementation__description case-text--body">
            <p class="case-body__line">{{ t("dolbome.copy.c150") }}</p>
            <p class="case-body__line--last">store.scss / responsive.scss</p>
          </div>
        </div>
      </div>
      <div class="shopping-file-tree__row case-text--caption case-grid">
        <div class="shopping-file-tree__panel case-panel">
          <p class="shopping-file-tree__title">
            {{ t("dolbome.copy.c151") }}
          </p>
          <div class="shopping-file-tree">
            <p class="case-file-tree__line">views/store/</p>
            <p class="case-file-tree__line">├─ admin/</p>
            <p class="case-file-tree__line">├─ include/</p>
            <p class="case-file-tree__line">│ ├─ admin/</p>
            <p class="case-file-tree__line">│ └─ user/</p>
            <p class="case-file-tree__line">└─ user/</p>
            <p class="case-file-tree__line">├─ main/</p>
            <p class="case-file-tree__line">│ └─ main.html</p>
            <p class="case-file-tree__line">├─ my/</p>
            <p class="case-file-tree__line">│ ├─ myPage.html / myInfo.html</p>
            <p class="case-file-tree__line">
              │ ├─ orderList.html / orderDetail.html
            </p>
            <p class="case-file-tree__line">│ ├─ pick.html / review.html</p>
            <p class="case-file-tree__line">
              │ ├─ myInquiry.html / myReport.html
            </p>
            <p class="case-file-tree__line">│ ├─ myCard.html / delivery.html</p>
            <p class="case-file-tree__line">
              │ ├─ myPoint.html / myPointHistory.html
            </p>
            <p class="case-file-tree__line">
              │ └─ invoice.html / refund.html / search.html
            </p>
            <p class="case-file-tree__line">├─ notice/</p>
            <p class="case-file-tree__line">│ ├─ faq.html / notice.html</p>
            <p class="case-file-tree__line">
              │ ├─ inquiry.html / registerInquiry.html
            </p>
            <p class="case-file-tree__line">│ └─ modifyInquiry.html</p>
            <p class="case-file-tree__line">├─ order/</p>
            <p class="case-file-tree__line">│ ├─ cart.html / order.html</p>
            <p class="case-file-tree__line">│ └─ orderResult.html</p>
            <p class="case-file-tree__line">└─ product/</p>
            <p class="case-file-tree__line">├─ productDetail.html</p>
            <p class="case-file-tree__line">├─ productList.html</p>
            <p class="case-file-tree__line--last">└─ rankingList.html</p>
          </div>
        </div>
        <div class="shopping-file-tree__panel case-panel">
          <p class="shopping-file-tree__title">
            {{ t("dolbome.copy.c152") }}
          </p>
          <div class="shopping-file-tree">
            <p class="case-file-tree__line">static/scss/store/</p>
            <p class="case-file-tree__line">├─ components/</p>
            <p class="case-file-tree__line">│ ├─ _common.scss</p>
            <p class="case-file-tree__line">│ ├─ _coupon-popup.scss</p>
            <p class="case-file-tree__line">│ ├─ _invoice.scss</p>
            <p class="case-file-tree__line">│ ├─ _mobile-controls.scss</p>
            <p class="case-file-tree__line">│ ├─ _my-navigation.scss</p>
            <p class="case-file-tree__line">│ ├─ _product-report.scss</p>
            <p class="case-file-tree__line">│ └─ _product-review-modals.scss</p>
            <p class="case-file-tree__line">├─ pages/</p>
            <p class="case-file-tree__line">│ ├─ _auth.scss / _home.scss</p>
            <p class="case-file-tree__line">│ ├─ _cart.scss / _order.scss</p>
            <p class="case-file-tree__line">
              │ ├─ _product-detail.scss / _product-list.scss
            </p>
            <p class="case-file-tree__line">
              │ ├─ _my-account.scss / _my-profile.scss
            </p>
            <p class="case-file-tree__line">
              │ ├─ _my-orders.scss / _my-order-detail.scss
            </p>
            <p class="case-file-tree__line">│ ├─ _my-page-layout.scss</p>
            <p class="case-file-tree__line">│ ├─ _my-payment-cards.scss</p>
            <p class="case-file-tree__line">│ ├─ _my-points.scss</p>
            <p class="case-file-tree__line">│ ├─ _my-reviews-inquiries.scss</p>
            <p class="case-file-tree__line">│ └─ _notice.scss / _search.scss</p>
            <p class="case-file-tree__line">├─ legacy/</p>
            <p class="case-file-tree__line">├─ responsive.scss</p>
            <p class="case-file-tree__line">├─ store.scss</p>
            <p class="case-file-tree__line--last">└─ store-nav.scss</p>
          </div>
        </div>
      </div>
    </section>
    <section class="shopping-content__section case-panel">
      <h2 class="shopping-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c153")
          }}</span>
        </span>
      </h2>
      <div class="shopping-section__description case-text--lead">
        <p class="case-lead__line">{{ t("dolbome.copy.c154") }}</p>
        <p class="case-lead__line--last">{{ t("dolbome.copy.c155") }}</p>
      </div>
      <div class="case-detail__row case-grid">
        <div class="shopping-shared__files-card case-panel">
          <p class="shopping-shared__files-title case-text--lead">include/user/</p>
          <div class="shopping-shared__files-description case-text--body">
            <p class="case-body__line">
              inc_user_head.html / inc_user_style.html
            </p>
            <p class="case-body__line">
              inc_user_header.html / inc_user_footer.html
            </p>
            <p class="case-body__line">
              inc_user_nav.html / inc_user_btm_nav.html
            </p>
            <p class="case-body__line">
              inc_user_my_nav.html / inc_recently_view.html
            </p>
            <p class="case-body__line">​</p>
            <p class="case-body__line">inc_user_cart_popup.html</p>
            <p class="case-body__line">inc_user_delivery_popup.html</p>
            <p class="case-body__line">inc_user_inquiry_popup.html</p>
            <p class="case-body__line">inc_user_review_popup.html</p>
            <p class="case-body__line--last">
              inc_user_report.html / inc_user_report_user.html
            </p>
          </div>
        </div>
        <div class="shopping-shared__files-card case-panel">
          <p class="shopping-shared__files-title case-text--lead">static/</p>
          <div class="shopping-shared__files-description case-text--body">
            <p class="case-body__line">img/store/user/</p>
            <p class="case-body__line">btm_nav/ · favicon/ · icon/</p>
            <p class="case-body__line">login/ · logo/ · main/</p>
            <p class="case-body__line">card_img.png · cards_y_img.png</p>
            <p class="case-body__line">sprite.svg · test_banner.jpg</p>
            <p class="case-body__line">​</p>
            <p class="case-body__line">js/store/</p>
            <p class="case-body__line">admin/common.js</p>
            <p class="case-body__line--last">user/common.js</p>
          </div>
        </div>
      </div>
    </section>
    <section class="shopping-muted__section case-panel">
      <h2 class="shopping-overview__heading case-text--heading">
        <span class="case-numbered-heading__item">
          <span class="case-numbered-heading__text">{{
            t("dolbome.copy.c156")
          }}</span>
        </span>
      </h2>
      <p class="shopping-process__description case-text--lead">
        {{ t("dolbome.copy.c157") }}
      </p>
      <div class="shopping-file-map__row case-grid">
        <p class="shopping-file-map__title case-text--lead">
          {{ t("dolbome.copy.c158") }}
        </p>
        <div class="shopping-file-map__files case-panel">
          <p class="shopping-file-map__template-path case-text--body">
            main/main.html, product/productList.html
          </p>
          <p class="shopping-file-map__style-path case-text--caption">
            pages/_home.scss, pages/_product-list.scss
          </p>
        </div>
      </div>
      <div class="shopping-file-map__row case-grid">
        <p class="shopping-file-map__title case-text--lead">
          {{ t("dolbome.copy.c159") }}
        </p>
        <div class="shopping-file-map__files case-panel">
          <p class="shopping-file-map__template-path case-text--body">
            product/productDetail.html
          </p>
          <p class="shopping-file-map__style-path case-text--caption">
            pages/_product-detail.scss
          </p>
        </div>
      </div>
      <div class="shopping-file-map__row case-grid">
        <p class="shopping-file-map__title case-text--lead">
          {{ t("dolbome.copy.c160") }}
        </p>
        <div class="shopping-file-map__files--multiline case-panel">
          <p class="shopping-file-map__template-path case-text--body">
            order/cart.html, order/order.html
          </p>
          <p class="shopping-file-map__style-path case-text--caption">
            pages/_cart.scss, pages/_order.scss
          </p>
        </div>
      </div>
      <div class="shopping-file-map__row case-grid">
        <p class="shopping-file-map__title case-text--lead">
          {{ t("dolbome.copy.c161") }}
        </p>
        <div class="shopping-file-map__files case-panel">
          <p class="shopping-file-map__template-path--multiline case-text--body">
            my/orderList.html, my/orderDetail.html
          </p>
          <p class="shopping-file-map__style-path case-text--caption">
            pages/_my-orders.scss , pages/_my-order-detail.scss
          </p>
        </div>
      </div>
      <div class="shopping-file-map__row case-grid">
        <p class="shopping-file-map__title case-text--lead">
          {{ t("dolbome.copy.c162") }}
        </p>
        <div class="shopping-file-map__files case-panel">
          <p class="shopping-file-map__template-path--multiline case-text--body">
            my/myCard.html, review.html, myInquiry.html
          </p>
          <p class="shopping-file-map__style-path case-text--caption">
            pages/_my-payment-cards.scss, _my-reviews-inquiries.scss
          </p>
        </div>
      </div>
    </section>
    <section class="case-closing__section case-panel">
      <p class="case-closing__title case-text--heading">
        {{ t("dolbome.copy.c163") }}
      </p>
      <p class="shopping-closing__description case-text--lead">
        {{ t("dolbome.copy.c164") }}
      </p>
      <div class="case-closing__meta case-text--body case-grid">
        <p class="shopping-closing__role">
          {{ t("dolbome.copy.c083") }}
        </p>
        å
        <p class="case-closing__stack">Thymeleaf / SCSS</p>
      </div>
    </section>
  </article>
</template>
<style scoped lang="scss">
@use "@/assets/dolbome-case.scss";
</style>
