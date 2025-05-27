<template>
  <div class="container mt-4">
    <video ref="video" class="w-100 mb-3" controls :src="currentQuality.url"></video>
    <div class="btn-group mb-3">
      <button class="btn btn-primary" @click="togglePlay">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button class="btn btn-secondary" @click="rewind">⏪ Rewind</button>
      <button class="btn btn-secondary" @click="forward">⏩ Forward</button>
    </div>
    <div class="form-group">
      <label for="qualitySelect">Quality:</label>
      <select class="form-control" v-model="selectedQuality" @change="changeQuality">
        <option v-for="q in qualities" :key="q.quality" :value="q.url">{{ q.quality }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const video = ref(null)
const isPlaying = ref(false)

const qualities = [
  { quality: '480p', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { quality: '720p', url: 'https://www.w3schools.com/html/movie.mp4' }
]
const selectedQuality = ref(qualities[0].url)
const currentQuality = ref(qualities[0])

const togglePlay = () => {
  if (!video.value) return
  if (video.value.paused) {
    video.value.play()
    isPlaying.value = true
  } else {
    video.value.pause()
    isPlaying.value = false
  }
}

const rewind = () => {
  if (video.value) video.value.currentTime -= 10
}

const forward = () => {
  if (video.value) video.value.currentTime += 10
}

const changeQuality = () => {
  currentQuality.value = qualities.find(q => q.url === selectedQuality.value)
  if (video.value) {
    const currentTime = video.value.currentTime
    video.value.src = selectedQuality.value
    video.value.currentTime = currentTime
    if (isPlaying.value) video.value.play()
  }
}
</script>

<style scoped>
video {
  max-height: 400px;
}
</style>
