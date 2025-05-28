<template>
  <div class="row mb-2 justify-content-between align-items-baseline backBtnRow mx-auto">
    <div class="col-6 col-md-6">
      <span class="d-block d-md-none">
        <i class="bi bi-bookmark-dash fs-4 ms-1"></i>
        <i class="bi bi-share-fill fs-4"></i>
      </span>
    </div>
    <div class="col-6 col-md-6 text-end">
      <button class="btn backbtn">
        بازگشت
        <i class="bi bi-chevron-left"></i>
      </button>
    </div>
  </div>
  <div class="row mb-1 mx-auto justify-content-between align-items-baseline">
    <div class="col-lg-8 d-flex justify-content-between align-items-baseline p-0">
      <div class="d-flex align-items-center">
        <p><i class="bi bi-film fs-1 ms-3 align-middle"></i></p>
        <p class="d-flex flex-column">
          <span class="fs-4 fw-bold">
            {{ movie.title }}</span>
          <span class="fw-lighter">فیلم ال‌کامینو</span>
        </p>
      </div>
      <div class="d-none d-sm-block px-3">
        <select class="form-select w-auto d-inline-block text-white" @change="changeQuality($event)">
          <option v-for="q in qualities" :key="q.quality" :value="q.url">
            کیفیت {{ q.quality }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-lg-4 d-flex justify-content-between align-items-center">
      <span>
        <i class="bi bi-star text-warning fs-4"></i>
        <i class="bi bi-star-half text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
        <i class="bi bi-star-fill text-warning fs-4"></i>
      </span>
      <span class="fs-5">
        10/<strong> 4.5 </strong> <i class="bi bi-film fs-4"></i>
      </span>
      <span class="d-none d-md-block">
        <i class="bi bi-bookmark-dash fs-4 ms-1"></i>
        <i class="bi bi-share-fill fs-4"></i>
      </span>
    </div>
  </div>
  <div class="row mx-auto">
    <div class="col-12 col-lg-8 px-3 py-2">
      <div class="video-container">
        <video ref="videoPlayer" class="video-element" :src="selectedQuality" controls @click="toggleControls" />
        <div class="video-controls" :class="{ 'show': showControls }">
          <button class="btn btn-sm btn-light me-2" @click="rewind">⏪</button>
          <button class="btn btn-sm btn-light me-2" @click="playVideo">▶️</button>
          <button class="btn btn-sm btn-light me-2" @click="pauseVideo">⏸️</button>
          <button class="btn btn-sm btn-light me-2" @click="forward">⏩</button>
        </div>
      </div>
      <p class="fs-5 text-end">{{ movie.description }}</p>
      <p class="fs-6 text-end"> Released: {{ movie.releaseYear }} | Rating: {{ movie.rating }}
        <i class="bi bi-calendar3"></i>
      </p>
    </div>
    <div class="col-12 col-lg-4 p-0">
      <SidePanel />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchMovieDetails } from '../services/api'
import SidePanel from './SidePanel.vue'
import { useRouter } from 'vue-router'

const videoPlayer = ref(null)
const movie = ref({})
const qualities = ref([])
const selectedQuality = ref('')
const currentQuality = ref({})
const showControls = ref(false)
const router = useRouter()

const toggleControls = () => {
  showControls.value = true
  setTimeout(() => {
    showControls.value = false
  }, 3000)
}

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    alert('لطفاً ابتدا وارد شوید')
    router.push('/login')
    return
  }

  const cachedData = sessionStorage.getItem('movieDetails')
  if (cachedData) {
    const parsed = JSON.parse(cachedData)
    movie.value = parsed
    qualities.value = parsed.qualities
    selectedQuality.value = qualities.value[0].url
    currentQuality.value = qualities.value[0]
  } else {
    const data = await fetchMovieDetails()
    movie.value = data
    qualities.value = data.qualities
    selectedQuality.value = qualities.value[0].url
    currentQuality.value = qualities.value[0]
    sessionStorage.setItem('movieDetails', JSON.stringify(data))
  }
})

const playVideo = () => videoPlayer.value.play()
const pauseVideo = () => videoPlayer.value.pause()
const rewind = () => videoPlayer.value.currentTime -= 10
const forward = () => videoPlayer.value.currentTime += 10
const changeQuality = (event) => selectedQuality.value = event.target.value
</script>

<style scoped>
.form-select {
  border: none;
  background-color: #202022;
}

.form-select:focus {
  outline: none !important;
  box-shadow: none !important;
  border-color: inherit !important;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.video-element {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.video-controls {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.video-container:hover .video-controls,
.video-controls.show {
  opacity: 1;
  pointer-events: auto;
}

.backbtn {
  background-color: rgb(40, 40, 41);
  color: white;
  text-align: end;
}

.backBtnRow {
  margin-top: 100px !important;
}

@media (max-width: 575.98px) {
  .backBtnRow {
    margin-top: 90px !important;
  }

}
</style>
