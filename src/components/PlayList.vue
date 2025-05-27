<template>
    <div class="row mx-4 mt-4 h-100">
      <div class="col-12 col-lg-9">
        <VideoPlayer />
      </div>
      <div class="col-12 col-lg-3 px-0">
        <SidePanel />
      </div>
    </div>
</template>

<script setup>
import VideoPlayer from './VideoPlayer.vue';
import SidePanel from './SidePanel.vue';

</script>

<style lang="scss" scoped>

</style>