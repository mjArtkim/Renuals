<script setup>
import { ref } from "vue"
import axios from "axios"

const name = ref("")
const email = ref("")
const message = ref("")

const sendForm = async () => {
  try {
    const res = await axios.post("/contact.php", {
      name: name.value,
      email: email.value,
      message: message.value
    })
    alert(res.data.message)
  } catch (err) {
    alert("서버 오류가 발생했습니다")
  }
}
</script>

<template>
  <form @submit.prevent="sendForm" class="form-box">
    <input v-model="name" placeholder="이름" class="form-name"/>
    <input v-model="email" placeholder="이메일" class="form-email" />
    <textarea v-model="message" placeholder="메시지" class="form-msa"></textarea>
    <button type="submit" class="form-btn">보내기</button>
  </form>
</template>


<style lang="scss">

</style>