<script setup lang="ts">
  import PlanetContainer2 from './components/PlanetContainer2.vue'

</script>

<template>
  <div class="app-container">
    <PlanetContainer2></PlanetContainer2>

    <video id="video" src="@/assets/stars2.mp4" autoplay muted loop>
    </video>

    <div class="galaxy celestial">
      <img src="@/assets/galaxy.png" alt="">
    </div>

    <div class="asteroid celestial">
      <img class="" src="@/assets/asteroid.png" alt="" srcset="">
    </div>

    <div class="nebula celestial">
      <img class="" src="@/assets/nebula.png" alt="" srcset="">
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.app-container {
  background:black;
  z-index:1;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    filter: brightness(100%);
    object-fit: cover;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    z-index:-1;
    filter: brightness(70%);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index:-1;
      border-radius:0;
    }
  }
  .celestial {
    position: absolute;
    width:15rem;
  }
  .nebula {
    top:-30%;
    right:25%;
    img {
      display:none;
      width:60rem;
      filter:brightness(60%);
      opacity: 0.9;
    }
  }
  .galaxy {
    top:12%;
    right:12%;
    animation: rotate 120s linear infinite;
    img {
      width:10rem;
      filter:brightness(80%);
    }
  }

  .asteroid {
    display:none;
    z-index:0;
    position: absolute;
    animation: moveAsteroid 150s;
    top: 0;
    right: 0;
    
    img {
      width:3rem;
      opacity: 0.95;
      filter:brightness(65%);
    }
  }
}

</style>
