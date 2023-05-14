<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import Modal from './Modal.vue'

	const planetsEl = ref(<HTMLElement|null>null)
	const planetFocused = ref(<undefined|number>undefined)

	const brightness = ref(200)
	const showOrbits = ref(true)
	const playAnimation = ref(true)
	const planetWidthFake = '4.2rem'
	const planetWidthReal = '52rem'
	const showLabels = ref(true)
	const showSun = ref(true)
	let currentScaling = 100
	
	function handleMouseScroll(event) {
		const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1
		if (!event.ctrlKey || !event.metaKey) {
			event.preventDefault()
			zoomContent(zoomFactor)
		}
	}
	function zoomContent(zoomFactor) {
		if (zoomFactor > 1) {
			if (currentScaling > 250) return
			currentScaling += 5
		}
		else {
			if (currentScaling < 20) return
			currentScaling -= 5
		}
		planetsEl.value.style.transform= `scale(${currentScaling / 100})`
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

	function adjustBrightness() {
		let videoEl = document.querySelector('video')
		if (!videoEl) return
		videoEl.style.filter = `brightness(${brightness.value}%)`
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

	function clickPlanet (id: string) {
		planetFocused.value = 2
		let image = document.getElementById(id)
		let earthEl = document.querySelectorAll('.earth')[0]
		
		if (!image) return
		if (image.style.width == planetWidthReal) {
			image.style.width = planetWidthFake
			image.parentNode?.classList.remove('planet-real-size')
			earthEl.classList.remove('center-earth-freeze')
		}
		else {
			image.style.width = planetWidthReal
			image.parentNode?.classList.add('planet-real-size')
			earthEl.classList.add('center-earth-freeze')
		}
	}

	function setPlanetImageWidth () {
		let images = document.querySelectorAll(".img-planet")
		images.forEach(image => {
			image.style.width = planetWidthFake
		})
	}

	onMounted(() => {
		setPlanetImageWidth()
		planetsEl.value = document.querySelectorAll(".planet-container-2")[0] as HTMLElement
	})

</script>

<template>
	<div class="sidebar">
		<div>
		  <h3>Planet Explorer</h3>
		</div>
		<div>
		  <p class="notify-scrolling">Use mouse-scroll to zoom</p>
		</div>
		<div>
			<span class="setting-label">View orbits</span><input type="checkbox" v-model="showOrbits"><br>
			<span class="setting-label">View Labels</span><input type="checkbox" v-model="showLabels"><br>
			<span class="setting-label">View sun</span><input type="checkbox" v-model="showSun"><br>
			<span class="setting-label">Animate</span><input type="checkbox" v-model="playAnimation" @change="toggleAnimation()"><br>
		</div>
		<div>
			<span class="label-range-input-stars">Stars</span>
			<input type="range" v-model="brightness" @input="adjustBrightness()" min="50" max="500" step="10">
		</div>
		<div class="btn-row">
		  <button @click="fullscreen()">Fullscreen</button>
		  <button @click="exitFullscreen()">Normal</button>
		</div>
	</div>

	<Modal v-if="planetFocused" />
	
	<div class="planet-container-2"  @wheel="handleMouseScroll">
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

		<div v-if="showSun" class="sun">
			<img src="@/assets/sun.png" alt="" srcset="">
		  </div>

		<div class="planet mercury">
			<img id="mercury" class=" img-planet" src="@/assets/mercury.png" alt="" srcset="">
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
			<img id="venus" class=" img-planet" src="@/assets/venus.png" alt="" srcset="">
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
			<img id="earth" class="img-planet" src="@/assets/earth.png" alt="" srcset="">
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
			<img id="mars" class="img-planet" src="@/assets/mars.png" alt="" srcset="">
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
			<img id="jupiter" class="img-planet" src="@/assets/jupiter.png" alt="" srcset="">
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
			<img id="saturn" class=" img-planet" src="@/assets/saturn.png" alt="" srcset="">
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
			<img id="uranus" class="img-planet" src="@/assets/uranus.png" alt="" srcset="">
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
			<img id="neptune" class="img-planet" src="@/assets/neptune.png" alt="" srcset="">
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
</template>


<style lang="scss" scoped>
.planet-container-2 {
	z-index:1;
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
	position:absolute;
	width:100%;
	height:100%;
	z-index:1;
	
	.orbit-container {
		z-index:1;
		position: absolute;
		transform: translate(-50%, -50%);
		top:50%;
		left:50%;
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
	  z-index:1;
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
		bottom:90%;
		background: rgba(13, 16, 17, 0.85);
		border-left:1px solid rgba(135, 206, 250, 0.85);
		padding:1rem;
		width:15rem;
		display: flex;
		flex-direction: column;
		pointer-events: none;
		gap:var(--planet-gap);
		.planet-name {
		  color:var(--color-primary);
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

  .pause-animation {
	animation-play-state: paused !important;
  }
  .planet-real-size {
	animation-play-state: paused !important;
	transform:translate(-50%, -50%) !important;
	z-index:98 !important;
  }
  .center-earth-freeze {
	animation-play-state: paused !important;
	transform:translate(-150%, -25%) !important;
  }
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
  .sidebar {
	padding:0.7rem;
	z-index:2;
	position: absolute;
	width:fit-content;
	left:0;
	display:flex;
	flex-direction: column;
	gap:1rem;
	h1,h2,h3 {
	  color:var(--color-primary);
	  margin:0;
	}
	.setting-label {
	  display:inline-block;
	  width:6rem;
	}
	.label-range-input-stars {
	  display:block;
	}
	input[type="range"] {
	  margin-top:0;
	  width: 8rem;
	  height: 0.6rem;
	  border-radius: 5px;
	  accent-color: var(--color-primary);
	}
	input[type="checkbox"] {
	  width:1rem;
	  height:1rem;
	  accent-color: var(--color-primary);
	}
  }
</style>