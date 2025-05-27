<template>
  <div class="container mt-5">
    <h2>{{ movie.title }}</h2>
    <video ref="videoPlayer" width="100%" controls :src="selectedQuality" class="mb-3"></video>
    <div class="mb-2">
      <button class="btn btn-primary me-2" @click="playVideo">▶️ Play</button>
      <button class="btn btn-warning me-2" @click="pauseVideo">⏸️ Pause</button>
      <button class="btn btn-info me-2" @click="rewind">⏪ Rewind 10s</button>
      <button class="btn btn-info me-2" @click="forward">⏩ Forward 10s</button>
    </div>
    <div class="mb-3">
      <label>Select Quality:</label>
      <select class="form-select w-auto d-inline-block" @change="changeQuality($event)">
        <option v-for="q in qualities" :key="q.quality" :value="q.url">
          {{ q.quality }}
        </option>
      </select>
    </div>
    <p>{{ movie.description }}</p>
    <small>🎬 Released: {{ movie.releaseYear }} | Rating: {{ movie.rating }}</small>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchMovieDetails } from '../services/api'

const videoPlayer = ref(null)
const movie = ref({})
const qualities = ref([])
const selectedQuality = ref('')
const currentQuality = ref({})

onMounted(async () => {
  const data = await fetchMovieDetails()
  movie.value = data
  qualities.value = data.qualities
  selectedQuality.value = qualities.value[0].url
  currentQuality.value = qualities.value[0]
})

const playVideo = () => videoPlayer.value.play()
const pauseVideo = () => videoPlayer.value.pause()
const rewind = () => videoPlayer.value.currentTime -= 10
const forward = () => videoPlayer.value.currentTime += 10
const changeQuality = (event) => selectedQuality.value = event.target.value
</script>