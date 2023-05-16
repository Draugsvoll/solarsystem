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


    <!-- <div class="planet-container">
      <div class="planet">
        <img id="mercury" c src="@/assets/mercury.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Mercury
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mercury')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>Mercury</p></div>
      </div>

      <div class="planet">
        <img id="venus" src="@/assets/venus.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Venus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('venus')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>Venus</p></div>
      </div>

      <div class="planet">
        <img id="earth" src="@/assets/earth.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Earth
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('earth')">Real size</button>
        </div>   
        <div class="planet-label" v-if="showLabels"><p>earth</p></div>
      </div>

      <div class="planet moon">
        <img id="moon" src="@/assets/moon.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Moon
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('moon')">Real size</button>
        </div>
      </div>

      <div class="planet">
        <img id="mars" c src="@/assets/mars.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>mars</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            Mars
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mars')">Real size</button>
        </div>
      </div>

      <div class="planet">
        <img id="jupiter" src="@/assets/jupiter.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Jupiter
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('jupiter')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>Jupiter</p></div>
      </div>

      <div class="planet">
        <img id="saturn" src="@/assets/saturn.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Saturn
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('saturn')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>saturn</p></div>
      </div>

      <div class="planet">
        <img id="uranus" class="rotate45" src="@/assets/uranus.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Uranus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('uranus')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>uranus</p></div>
      </div>

      <div class="planet">
        <img id="neptune" src="@/assets/neptune.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Neptune
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('neptune')">Real size</button>
        </div>
        <div class="planet-label" v-if="showLabels"><p>neptune</p></div>
      </div>

    </div> -->

    <!-- <div class="background-image">
      <img src="@/assets/universe.jpg" alt="" srcset="">
    </div> -->

</template>

<style scoped lang="scss">
.app-container {
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

  /*
  .planet-container {
    --planet-gap:2rem;
    display:flex;
    gap:3rem;
    margin-top:40vh;
    .moon {
      position: absolute;
      display: inline;
      width:0rem !important;
      height:0rem !important;
      margin-left:calc(var(--planet-gap) * -1);
      top:-6.5rem;
      left:-2rem;
      img {
        width:2.8rem !important;
        position: absolute;
        display: inline
      }
    }
    .planet { 
      position: relative;
      width:fit-content;
      display:flex;
      flex-direction: column;
      transition: all var(--transition-short);
      height:fit-content;
      &:hover {
        filter:brightness(120%);
        transform:translateY(-10px);
        .planet-info {
          opacity: 1;
          pointer-events: all;
        }
      }
      .planet-info {
        transition: all var(--transition-short);
        opacity:0;
        position: absolute;
        bottom:100%;
        background: rgba(0,0,0,0.75);
        padding:1rem;
        width:15rem;
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap:var(--planet-gap);
        .planet-name {
          color:aquamarine;
          text-align: left;
        }
        p {
          word-wrap: break-word;
        }
      }
      .planet-label {
        margin-bottom:0.1rem;
        font-size: var(--font-size-xsmall);
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing-medium);
      }
      .rotate45 {
        transform: rotate(-45deg);
      }
      #saturn {
        width:10vw;
        margin-top:2vw;
      }
      img {
        animation: brightnessAnimation 2s infinite;
        transition: 0.9s all;
        border-radius: 100%;
        margin:auto;
        display:block;
        width:8vw;
      }
    }
  }
  
  */
}

</style>
