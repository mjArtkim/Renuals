<script setup>
import { skills } from '@/data/skillsData.js'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>

  <div class="skill">
    <h1 class="skill__tit">SKILLS</h1>
    <ol>
      <li v-for="(item, i) in skills.newskill" :key="item.id">
        <div>{{ String(i + 1).padStart(2, '0') }}</div>
        <div>{{ item.title }}</div>
        <div>
          <div>
            <ul>
              <li v-for="(tag, idx) in item.tags" :key="idx"># {{ tag }}</li>
            </ul>
            <img :src="item.img" alt="" />
          </div>
          <div>{{ t(item.textKey) }}</div>
        </div>
      </li>
    </ol>
  </div>

</template>

<style lang="scss">

</style>