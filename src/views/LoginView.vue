<template>
  <div class="container mt-5">
    <h3>Login</h3>
    <input v-model="username" class="form-control mb-2" placeholder="Username">
    <input v-model="password" type="password" class="form-control mb-2" placeholder="Password">
    <button @click="login" class="btn btn-success">Login</button>
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