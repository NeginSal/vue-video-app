<template>
  <div class="container mt-4" v-if="movie">
    <h2>{{ movie.title }} ({{ movie.releaseYear }})</h2>
    <p>{{ movie.description }}</p>
    <p><strong>Rating:</strong> {{ movie.rating }}</p>

    <video ref="video" class="w-100 mb-3" controls :src="currentQuality.url"></video>

    <div class="btn-group mb-3">
      <button class="btn btn-primary" @click="togglePlay">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button class="btn btn-secondary" @click="rewind">⏪ Rewind</button>
      <button class="btn btn-secondary" @click="forward">⏩ Forward</button>
    </div>

    <div class="form-group mb-3">
      <label for="qualitySelect">Quality:</label>
      <select class="form-control" v-model="selectedQuality" @change="changeQuality">
        <option v-for="q in qualities" :key="q.quality" :value="q.url">{{ q.quality }}</option>
      </select>
    </div>

    <h5>Cast:</h5>
    <ul>
      <li v-for="actor in movie.cast" :key="actor.name">{{ actor.name }} - {{ actor.role }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchMovieDetails } from '../services/api.js'

const video = ref(null)
const isPlaying = ref(false)

const movie = ref(null)
const qualities = ref([])
const selectedQuality = ref('')
const currentQuality = ref({})

onMounted(async () => {
  movie.value = await fetchMovieDetails()
  qualities.value = movie.value.qualities
  selectedQuality.value = qualities.value[0].url
  currentQuality.value = qualities.value[0]
})

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
  currentQuality.value = qualities.value.find(q => q.url === selectedQuality.value)
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
