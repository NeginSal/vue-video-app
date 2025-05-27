<template>
  <div class="container mt-5">
    <h2>🔐 Login</h2>
    <div class="form-group mb-3">
      <label>Username:</label>
      <input type="text" v-model="username" class="form-control" />
    </div>
    <div class="form-group mb-3">
      <label>Password:</label>
      <input type="password" v-model="password" class="form-control" />
    </div>
    <button class="btn btn-success" @click="handleLogin">Login</button>

    <p class="text-danger mt-3" v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  try {
    await login(username.value, password.value)
    router.push('/') 
  } catch (err) {
    error.value = 'Login failed'
  }
}
</script>
