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
    <div>
      <div class="form-namebox">
        <div class="form-nametit">Name</div>
        <input v-model="name" placeholder="이름" class="form-name"/>
      </div>
      <div class="form-emailbox">
        <div class="form-emailtit">Email</div>
        <input v-model="email" placeholder="이메일" class="form-email" />
      </div>
    </div>
    <textarea v-model="message" placeholder="메시지" class="form-msa"></textarea>
    <button type="submit" class="form-btn">보내기</button>
  </form>
</template>


<style lang="scss">
.form-box{
  display: flex;
}
.form-name{}
.form-email{}
.form-msa{}
.form-btn{}

</style>
