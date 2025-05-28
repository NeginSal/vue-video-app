<template>
  <div class="container-fluid bg-dark vh-100 d-flex justify-content-center align-items-start">
    <div class="row">
      <div class="col-12 mt-5">
        <h3 class="text-white text-center mb-4">به پنل مدیریت پخش آنلاین خوش آمدید.</h3>
        <input v-model="username" class="form-control mb-2" placeholder="نام کاربری">
        <input v-model="password" type="password" class="form-control mb-2" placeholder="رمزعبور">
        <button @click="login" class="btn btn-danger w-100">ورود</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { loginUser } from '../services/api'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const res = await loginUser(username.value, password.value)
  if (res?.token) {
    localStorage.setItem('token', res.token)
    router.push('/')
  }
}
</script>