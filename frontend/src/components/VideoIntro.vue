<script setup lang="ts"></script>

<template>
  <main class="video-container">
    <h1>BULHMA</h1>
    <video autoplay muted loop playsinline>
      <source
        src="../assets/mixkit-two-people-playing-tennis-aerial-view-880-hd-ready.mp4"
        type="video/mp4"
      />
    </video>
  </main>
</template>

<style scoped>
.home {
  margin-left: 0px;
  margin-right: 0px;
}
h1 {
  color: #4caf50;
  position: absolute;
  z-index: 1000;
  margin-left: 43%;
  margin-top: calc(50vh - 84px);
  font-family: 'Spectral', serif;
  font-size: 52px;
}
.video-container {
  width: 100vw;
  height: calc(100vh - 84px);
  overflow: hidden;
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
