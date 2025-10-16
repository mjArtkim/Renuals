<script setup>
import { ref } from "vue"
import axios from "axios"

const name = ref("")
const email = ref("")
const phone = ref("")
const message = ref("")

const sendForm = async () => {
  if (!name.value || !email.value || !phone.value || !message.value) {
    alert("Please fill in all fields.")
    return
  }

  try {
    const res = await axios.post("/contact.php", {
      name: name.value,
      email: email.value,
      phone: phone.value, 
      message: message.value
    }, {
      headers: { "Content-Type": "application/json" }
    })

    alert(res.data.message)
    name.value = email.value = phone.value = message.value = ""
  } catch (err) {
    alert(err.response?.data?.message || "서버 오류가 발생했습니다")
  }
}
</script>

<template>
  <form @submit.prevent="sendForm" class="form">
    <div class="form__box">
      <div>
        <!-- <div class="form-nametit">*NAME</div> -->
        <input v-model="name" placeholder="*NAME" class="form__name"/>
      </div>
      <div>
        <!-- <div class="form-nametit">*PHONE NUMBER</div> -->
        <input v-model="phone" placeholder="*PHONE NUMBER" class="form__num"/>
      </div>
      <div>
        <!-- <div class="form-emailtit">*EMAIL</div> -->
        <input v-model="email" placeholder="*EMAIL" class="form__email"/>
      </div>
      <div>
        <textarea v-model="message" placeholder="*CONTENTS" class="form__txt"></textarea>
      </div>
    </div>
    <button type="submit" class="form__btn">SEND</button>
  </form>
</template>


<style lang="scss">
.form{
  position: relative;
  width: 100%;
  &__box{
    width: 100%;
  }
  &__name, &__num, &__email {
    width: 100%;
    height: 38px;
    margin-bottom: 26px;
    padding: 5px 10px 0;
    border: none;
    border-bottom: 1px solid #707070;
    background-color: transparent;
    font-size: 16px;
    &:focus{
      outline: none;
    }
  }
  &__txt{
    width: 100%;
    min-height: 300px;
    margin-bottom: 26px;
    padding: 5px 10px 0;
    border: none;
    border-bottom: 1px solid #707070;
    background-color: transparent;
    font-size: 16px;
    &:focus{
      outline: none;
    }
  }
  &__btn{
    float: right;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 5px;
    &:hover {
      background-color: #fff;
      transition: background-color 0.3s ease-in-out;
    }
  }
}


</style>
