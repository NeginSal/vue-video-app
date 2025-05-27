<template>
  <div class="container-fluid bg-dark text-white h-100">
    <div class="row">
      <Navbar />
    </div>
    <div class="row mx-4 mt-5 h-100">
      <!-- <div class="col-12 col-lg-9"> -->
      <VideoPlayer />
      <!-- </div> -->
      <!-- <div class="col-12 col-lg-3 px-0">
        <SidePanel />
      </div> -->
    </div>
    <!-- <div class="row mx-4 mt-4 h-100">
      <div class="col-12 col-lg-9">
        <VideoPlayer />
      </div>
      <div class="col-12 col-lg-3 px-0">
        <SidePanel />
      </div>
    </div> -->
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
