<template>
  <div class="container">
    <Navbar />
    <!-- <h1 class="text-center">🎬 Vue 3 Video App (Protected)</h1> -->
    <div class="row">
      <div class="col-12 col-lg-9">
        <VideoPlayer />
      </div>
      <div class="col-12 col-lg-3">
        <SidePanel />
      </div>
    </div>
    <button class="btn btn-danger float-end" @click="logout">🚪 Logout</button>

  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import { useRouter } from 'vue-router'
import SidePanel from '@/components/SidePanel.vue'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
