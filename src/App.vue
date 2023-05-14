<script setup lang="ts">
import { onMounted, ref } from 'vue';

  const planetWidthFake = '4.5rem'
  const planetWidthReal = '52rem'

  const brightness = ref(200)

  const showOrbits = ref(true)
  const showLabels = ref(true)
  const showSun = ref(true)
  const playAnimation = ref(true)

  function adjustBrightness() {
    let videoEl = document.querySelector('video')
    if (!videoEl) return
    videoEl.style.filter = `brightness(${brightness.value}%)`
  }


  let currentScale = 100
  const planetContainer = ref(<HTMLElement|null>null)
  const orbitContainer = ref(<HTMLElement|null>null)
  const sunContainer = ref(<HTMLElement|null>null)

  console.error('1234 el',planetContainer )
  
  function handleMouseScroll(event) {
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1

    if (!event.ctrlKey || !event.metaKey) {
        event.preventDefault()
        zoomContent(zoomFactor)
    }
  }
  function zoomContent(zoomFactor) {
    if (zoomFactor > 1) {
      currentScale += 5
    }
    else {
      currentScale -= 5
    }
    planetContainer.value.style.transform= `scale(${currentScale / 100})`
    orbitContainer.value.style.transform= `scale(${currentScale / 100})`
    sunContainer.value.style.transform= `scale(${currentScale / 100})`
  }


  function toggleSun () {
    let prevValue = showSun.value
    showSun.value = prevValue
  }

  function toggleAnimation () {
    let prevValue = playAnimation.value
    playAnimation.value = prevValue
    let planets = document.querySelectorAll('.planet')
    planets.forEach(planet => {
      if (playAnimation.value === false){
          planet.classList.add('pause-animation')
      }
      else {
        planet.classList.remove('pause-animation')
      }

    })
  }

  function toggleOrbits() {
    let prevValue = showOrbits.value 
    showOrbits.value = prevValue
  }

  function toggleLabels() {
    let prevValue = showLabels.value 
    showLabels.value = prevValue
  }

  function fullscreen () {
    const element = document.documentElement; // Select the root element of the document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // For Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // For Internet Explorer and Edge
      element.msRequestFullscreen();
    }
  }

  function exitFullscreen () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // For Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // For Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // For Internet Explorer and Edge
      document.msExitFullscreen();
    }
  }

  function clickPlanet (id: string) {
    let image = document.getElementById(id);
    if (!image) return
    if (image.style.width == planetWidthReal) {
      image.style.width = planetWidthFake
      image.parentNode.classList.remove('planet-real-size')

    }
    else {
      image.style.width = planetWidthReal
      image.parentNode.classList.add('planet-real-size')
    }
  }
  
  onMounted(() => {
    let images = document.querySelectorAll(".img-planet")
    images.forEach(image => {
      image.style.width = planetWidthFake
    })

    const videoElement = document.querySelector('video'); // Replace with the appropriate selector for your video element
    if (videoElement) {
      videoElement.playbackRate = 0.6
    }

    planetContainer.value = document.querySelectorAll(".planet-container-3")[0] as HTMLElement
    orbitContainer.value = document.querySelectorAll(".orbit-container")[0] as HTMLElement
    sunContainer.value = document.querySelectorAll(".sun")[0] as HTMLElement
  })
</script>

<template>
  <div class="app-container" @wheel="handleMouseScroll">
    <video id="video" src="@/assets/stars2.mp4" autoplay muted loop>
    </video>

    <div v-if="showSun" class="sun">
      <img src="@/assets/sun.png" alt="" srcset="">
    </div>

    <div class="galaxy celestial">
      <img src="@/assets/galaxy.png" alt="">
    </div>

    <div class="asteroid celestial">
      <img class="" src="@/assets/asteroid.png" alt="" srcset="">
    </div>

    <div class="nebula celestial">
      <img class="" src="@/assets/nebula.png" alt="" srcset="">
    </div>

    <div class="sidebar">
      <div>
        <!-- <h1>Planet Explorer</h1> -->
      </div>
      <div class="btn-row">
        <button id="test" @click="fullscreen()">Fullscreen</button>
        <button id="test" @click="exitFullscreen()">Normal</button>
      </div>
      <div>
        <span>View orbits</span><input type="checkbox" v-model="showOrbits" @change="toggleOrbits()">
      </div>
      <div>
        <span>View Labels</span><input type="checkbox" v-model="showLabels" @change="toggleLabels()">
      </div>
      <div>
        <span>View sun</span><input type="checkbox" v-model="showSun" @change="toggleSun()">
      </div>
      <div>
        <span>Animate</span><input type="checkbox" v-model="playAnimation" @change="toggleAnimation()">
      </div>
      <div>
        <span>Background stars</span>
        <input type="range" v-model="brightness" @input="adjustBrightness()" min="50" max="500" step="10">
      </div>
    </div>

    <!-- <div class="planet-container">
      <div class="planet">
        <img id="mercury" class="flip-image" src="@/assets/mercury.png" alt="" srcset="">
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
        <img id="mars" class="flip-image" src="@/assets/mars.png" alt="" srcset="">
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

    <div class="orbit-container" v-if="showOrbits">
      <div class="orbit orbit1"></div>
      <div class="orbit orbit2"></div>
      <div class="orbit orbit3"></div>
      <div class="orbit orbit4"></div>
      <div class="orbit orbit5"></div>
      <div class="orbit orbit6"></div>
      <div class="orbit orbit7"></div>
      <div class="orbit orbit8"></div>
    </div>

    <div class="planet-container-3">

      <div class="planet mercury">
        <img id="mercury" class="flip-image img-planet" src="@/assets/mercury.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>mercury</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            mercury
          </h3>
          <p class="planet-stats">
            <p>Age: 3</p>
            <p>Size: 999</p>
            <p>Duration: 68546</p>
          </p>
          <p class="planet-infotext">
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mercury')">Real size</button>
        </div>
      </div>

      <div class="planet venus">
        <img id="venus" class="flip-image img-planet" src="@/assets/venus.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>venus</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            venus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('venus')">Real size</button>
        </div>
      </div>

      <div class="planet earth">
        <img id="earth" class="flip-image  img-planet" src="@/assets/earth.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>earth</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            earth
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('earth')">Real size</button>
        </div>
      </div>

      <div class="planet mars">
        <img id="mars" class="flip-image  img-planet" src="@/assets/mars.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>mars</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            mars
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mars')">Real size</button>
        </div>
      </div>

      <div class="planet jupiter">
        <img id="jupiter" class="flip-image  img-planet" src="@/assets/jupiter.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>jupiter</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            jupiter
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('jupiter')">Real size</button>
        </div>
      </div>

      <div class="planet saturn">
        <img id="saturn" class="flip-image img-planet" src="@/assets/saturn.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>saturn</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            saturn
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('saturn')">Real size</button>
        </div>
      </div>

      <div class="planet uranus">
        <img id="uranus" class="flip-image  img-planet" src="@/assets/uranus.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>uranus</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            uranus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('uranus')">Real size</button>
        </div>
      </div>

      <div class="planet neptune">
        <img id="neptune" class="flip-image  img-planet" src="@/assets/neptune.png" alt="" srcset="">
        <div class="planet-label" v-if="showLabels"><p>neptune</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            neptune
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('neptune')">Real size</button>
        </div>
      </div>
      

    </div>

    <!-- <div class="background-image">
      <img src="@/assets/universe.jpg" alt="" srcset="">
    </div> -->

  </div>
</template>

<style scoped lang="scss">
.pause-animation {
  animation-play-state: paused !important;
}
.sidebar {
  z-index:2;
  position: absolute;
  width:30rem;
  left:0;
  h1 {
    color:lightskyblue;
  }
  input[type="checkbox"] {
    width:1rem;
    height:1rem;
  }
  input[type="range"] {
    width: 10rem;
    height: 0.6rem;
    border-radius: 5px;
    background: linear-gradient(to right, red, red) no-repeat;
    background-size: calc((var(--thumb-width) / 2) + 5px) 100%;
  }
}
#test {
  z-index:999;
}
.planet-real-size {
  animation-play-state: paused !important;
  transform:translate(-50%, -50%) !important;
  z-index:98 !important;
}
.planet-container-3 {
  position:absolute;
  width:100%;
  height:100%;
  z-index:1;
  .mercury {
    animation: orbit1 10s linear infinite;
    animation-delay:-3s;
      z-index:10;
  }
  .venus {
    animation: orbit2 20s linear infinite;
    animation-delay:-6s;
    z-index:9;
  }
  .earth {
    z-index:99 !important;
    animation-delay:-9s;
    animation: orbit3 10s linear infinite;
  }
  .mars {
    animation: orbit4 15s linear infinite;
    animation-delay:-12s;
    z-index:8;
  }
  .jupiter {
    animation: orbit5 25s linear infinite;
    animation-delay:-15s;
    z-index:7;
  }
  .saturn {
    animation: orbit6 18s linear infinite;
    animation-delay:-18s;
    z-index:6;
  }
  .uranus {
    animation: orbit7 30s linear infinite;
    animation-delay:-21s;
    z-index:5;
  }
  .neptune {
    animation: orbit8 35s linear infinite;
    animation-delay:-24s;
    z-index:4;
  }
  .planet { 
    position: absolute;
    display:flex;
    min-width:3rem;
    flex-direction: column;
    transition: all 0.5s;
    top: 47%;
    left: 48%;
    width: fit-content;
    height: fit-content;
    animation-play-state: running;
    user-select: none;
    &:hover {
      z-index:100;
      animation-play-state: paused;
      filter:brightness(115%);
      .planet-info {
        display: flex;
        flex-direction: column;
        gap:1rem;
        opacity: 1;
        pointer-events: all;
      }
    }
    .planet-info {
      transition: all 0.8s;
      opacity:0;
      position: absolute;
      bottom:100%;
      background: rgba(13, 16, 17, 0.85);
      border-left:1px solid rgba(135, 206, 250, 0.85);
      padding:1rem;
      width:15rem;
      display: flex;
      flex-direction: column;
      pointer-events: none;
      gap:var(--planet-gap);
      .planet-name {
        color:lightskyblue;
        text-align: left;
        text-transform: capitalize;
      }
      p {
        word-wrap: break-word;
      }
    }
    .planet-label {
      font-size: 0.85rem;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing-medium);
      color:rgba(255, 255, 255, 0.80);
      text-align: center;
    }
    .flip-image {
      transform: scaleX(-1);
    }
    .rotate45 {
      transform: rotate(-45deg);
    }
    img {
      animation: brightnessAnimation 2s infinite;
      transition: 0.9s all;
      border-radius: 100%;
      margin:auto;
      display:block;
      width:3rem;
      user-drag: none;
     -webkit-user-drag: none; /* For Safari */
    }
  }
}
.orbit-container {
  z-index:1;
  position: relative;
  transform: translate(-50%, -50%);
  top:50%;
  .orbit {
    position: absolute;
    border:1px solid rgba(255, 255, 255, 0.32);
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
  .orbit1 {
    z-index:9;
    width:var(--orbit-width);
    height:var(--orbit-width);
  }
  .orbit2 {
    width: calc(var(--orbit-width) * 1.5);
    height: calc(var(--orbit-width) * 1.5);
  }
  .orbit3 {
    width: calc(var(--orbit-width) * 2);
    height: calc(var(--orbit-width) * 2);
  }
  .orbit4 {
    width: calc(var(--orbit-width) * 2.5);
    height: calc(var(--orbit-width) * 2.5);
  }
  .orbit5 {
    width: calc(var(--orbit-width) * 3);
    height: calc(var(--orbit-width) * 3);
  }
  .orbit6 {
    width: calc(var(--orbit-width) * 3.5);
    height: calc(var(--orbit-width) * 3.5);
  }
  .orbit7 {
    width: calc(var(--orbit-width) * 4);
    height: calc(var(--orbit-width) * 4);
  }
  .orbit8{
    width: calc(var(--orbit-width) * 4.5);
    height: calc(var(--orbit-width) * 4.5);
  }
}

/*
@keyframes subtleMovement {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(var(--random-x), var(--random-y));
  }
}
*/
@keyframes orbit1 {
  from {
      transform: rotate(0deg) 
      translateX(calc(var(--orbit-width)*0.5)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*0.5)) rotate(360deg);
  }
}
@keyframes orbit2 {
  from {
    transform: rotate(0deg) 
    translateX(calc(var(--orbit-width)*0.75)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*0.75)) rotate(360deg);
  }
}
@keyframes orbit3 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*1)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1)) rotate(360deg);
  }
}
@keyframes orbit4 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*1.25)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1.25)) rotate(360deg);
  }
}
@keyframes orbit5 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*1.5)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1.5)) rotate(360deg);
  }
}
@keyframes orbit6 {
  from {
    transform: rotate(0deg) 
    translateX(calc(var(--orbit-width)*1.75)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1.75)) rotate(360deg);
  }
}
@keyframes orbit7 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*2)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*2)) rotate(360deg);
  }
}
@keyframes orbit8 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*2.25)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*2.25)) rotate(360deg);
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
  z-index:1;
  animation: rotate 120s linear infinite;
  img {
    width:10rem;
    filter:brightness(80%);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.sun {
  position: absolute;
  width:fit-content;
  height:fit-content;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  filter:brightness(75%);
  img {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width:20rem;
    width:20rem;
  }
}
.asteroid {
  display:none;
  z-index:0;
  position: absolute;
  animation: move 150s;
  top: 0;
  right: 0;
  @keyframes move {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-100vw, 60vh);
    }
  }
  img {
    width:3rem;
    opacity: 0.95;
    filter:brightness(65%);
  }
}
video {
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  filter: brightness(200%);
  object-fit: cover;
}
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
  overflow:hidden;
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
      transition: all 0.5s;
      height:fit-content;
      /* animation: subtleMovement 5s linear infinite alternate; */
      &:hover {
        filter:brightness(120%);
        transform:translateY(-10px);
        .planet-info {
          opacity: 1;
          pointer-events: all;
        }
      }
      .planet-info {
        transition: all 0.8s;
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
        font-size: 0.85rem;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing-medium);
      }
      .flip-image {
        transform: scaleX(-1);
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

@keyframes brightnessAnimation {
  0% {
    filter: brightness(99%);
  }
  50% {
    filter: brightness(107%);
  }
  100% {
    filter: brightness(99%);
  }
}

</style>
