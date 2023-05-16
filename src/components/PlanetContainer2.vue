<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import Modal from './Modal.vue'
	import {planets} from '../data/planets'
    import type { Planet } from '../data/types';

	const scaleableEls = ref(<HTMLElement|null>null)
	const planetInModal = ref(<undefined|Planet>undefined)
	const planetsEl = ref(<undefined|HTMLElement[]>undefined)
	const showingRealSizePlanet = ref(false)

	const dayCounter = ref(0)
	const daysPerSecond = ref(25)
	const brightness = ref(100)
	const showOrbits = ref(true)
	const showDays = ref(true)
	const playAnimation = ref(true)
	const planetWidthFake = '4.2rem'
	const planetWidthReal = '52rem'
	const showLabels = ref(true)
	const showSun = ref(true)
	let currentScaling = 100
	
	function handleMouseScroll(event: WheelEvent) {
		const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1
		if (!event.ctrlKey || !event.metaKey) {
			event.preventDefault()
			zoomContent(zoomFactor)
		}
	}
	function zoomContent(zoomFactor: number) {
		if (zoomFactor > 1) {
			if (currentScaling > 250) return
			currentScaling += 5
		}
		else {
			if (currentScaling < 20) return
			currentScaling -= 5
		}
		if (scaleableEls.value?.style.transform !== undefined) {
			scaleableEls.value.style.transform = `scale(${currentScaling / 100})`;
		}
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
		let planetImages = document.querySelectorAll('.img-planet')
		planetsEl.value?.forEach(planet => {
			if (playAnimation.value === false){
				planet.classList.add('pause-animation')
			}
			else {
				planet.classList.remove('pause-animation')
			}
		})
		planetImages.forEach(planet => {
			if (playAnimation.value === false){
				planet.classList.add('pause-animation')
			}
			else {
				planet.classList.remove('pause-animation')
			}
		})
  }

	function displayPlanetsFakeSize () {
		let images = document.querySelectorAll('.img-planet') as NodeListOf<HTMLElement>;
		let earthEl = document.getElementById('earth') as HTMLElement;
		let earthImg = document.getElementById('img-earth') as HTMLImageElement;
		if (!images) return

		images.forEach(image => {
			image.style.width = planetWidthFake
			image.classList.remove('planet-rotate-slow')
		})
		planetsEl.value?.forEach(planet => {
			planet.classList.remove('planet-real-size')
		})
		earthEl?.classList.remove('center-earth-freeze')
		earthImg?.classList.remove('pause-animation')
		showingRealSizePlanet.value = false
		showSun.value = true
	}
	
	function displayPlanetRealSize(id: string) {
		let image = document.getElementById('img-'+id)
		let parentNode = image?.parentNode as HTMLElement | null;
		let earthEl = document.getElementById('earth')
		let earthImg = document.getElementById('img-earth')

		if (!image) return
		image.style.width = planetWidthReal
		image.classList.add('planet-rotate-slow')
		parentNode?.classList.add('planet-real-size')
		earthImg?.classList.add('pause-animation')
		earthEl?.classList.add('center-earth-freeze')
		showingRealSizePlanet.value = true
		showSun.value = false
	}

	function openPlanetDetails (id: string) {
		planetInModal.value = planets.find(planet => {
			return planet.name = id
		})
	}

	function closeModal () {
		planetInModal.value = undefined
	}

	function setPlanetImageWidth () {
		let images = document.querySelectorAll(".img-planet") as NodeListOf<HTMLElement>;
		images.forEach(image => {
			image.style.width = planetWidthFake
		})
	}

	function fetchElements () {
		scaleableEls.value = document.querySelectorAll(".planet-container-2")[0] as HTMLElement
		planetsEl.value = document.querySelectorAll(".planet") as unknown as HTMLElement[];
	}

	onMounted(() => {
		setPlanetImageWidth()
		fetchElements()

		setInterval(() => {
			dayCounter.value += (daysPerSecond.value/20)
		}, 50)

	})

</script>

<template>
	<div class="sidebar">
		<div>
		  <h3>Planet Explorer</h3>
		</div>
		<div>
		  <p class="notify-scrolling">Scroll to zoom</p>
		</div>
		<div>
			<span class="setting-label">Orbits</span><input type="checkbox" v-model="showOrbits"><br>
			<span class="setting-label">Labels</span><input type="checkbox" v-model="showLabels"><br>
			<span class="setting-label">Sun</span><input type="checkbox" v-model="showSun"><br>
			<span class="setting-label">Days</span><input type="checkbox" v-model="showDays"><br>
			<span class="setting-label">Animate</span><input type="checkbox" v-model="playAnimation" @change="toggleAnimation()"><br>
		</div>
		<div class="range-container">
			<div>
				<span class="label-range-input-stars">Stars</span>
				<input type="range" v-model="brightness" @input="adjustBrightness()" min="50" max="500" step="10">
			</div>
			<div>
				<span class="label-range-input-stars" >Days-per-second: {{daysPerSecond}}</span>
				<input type="range" v-model="daysPerSecond" min="1" max="365" step="1">
			</div>
		</div>
		<div class="btn-row">
		  <button @click="fullscreen()">Fullscreen</button>
		  <button @click="exitFullscreen()">Normal</button>
		</div>
	</div>

	<Modal :planet="planetInModal" v-if="planetInModal" @closePlanetDetails="closeModal()" />
	
	
	<div class="planet-container-2"  @wheel="handleMouseScroll">
		
		<div class="orbit-container" v-if="showOrbits">
			<div v-for="planet,index in planets" :class="'orbit'+' orbit'+(index+1)+' ' +'orbit-'+planet.name"></div>
		</div>
		
		<div v-if="showSun" class="sun">
			<img src="@/assets/sun.png" alt="" srcset="">
		</div>
		<p v-if="showDays" class="day-counter">Day: {{Math.floor(dayCounter).toLocaleString()}}</p>

		<div 
			v-for="planet, index in planets" :id="planet.name"
			:class="'planet planet'+(index+1)"
			:style="
				'animation: ' +(planet.orbitTime/daysPerSecond)+'s orbit'+(index+1)+' linear infinite; z-index:'+(15-(index+3))+';'">
			<img :id="'img-'+planet.name" class="img-planet" :src="planet.imageUrl" alt="" srcset="">
			<div class="planet-label" v-if="showLabels"><p>{{planet.name}}</p></div>
			<div class="planet-info">
				<h3 class="planet-name">{{planet.name}}</h3>
				<div>
					<p v-for="stat in planet.stats" class="planet-stats">
						<p>{{stat.label}} {{stat.value}}</p>
					</p>
				</div>
				<p class="planet-infotext">{{planet.synopsis}}</p>
				<div>
					<button v-if="!showingRealSizePlanet && planet.name !== 'earth'" @click="displayPlanetRealSize(planet.name)">Real size</button>
					<button v-else-if="showingRealSizePlanet" @click="displayPlanetsFakeSize()">Reset size</button>
					<button @click="openPlanetDetails(planet.name)">Details</button>
				</div>
			</div>
		</div>

	</div>
</template>


<style lang="scss" scoped>
.planet-container-2 {
	z-index:1;
	position:absolute;
	width:100%;
	height:100%;
	.day-counter {
		position:absolute;
		top:57%;
		left:50%;
		transform: translate(-50%, -50%);
		background:rgba(0,0,0,0.2);
		padding:0.25rem 0.5rem;
		border-radius: 5px;
		z-index:15;
		user-select: none;
		min-width:5rem;
		text-align: center;
	}
	.sun {
		position: absolute;
		width:fit-content;
		height:fit-content;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%);
		animation: brightnessAnimationSun 5s linear infinite;
		z-index:1;
		img {
		  position: absolute;
		  top:50%;
		  left:50%;
		  transform: translate(-50%, -50%);
		  width:20rem;
		  width:20rem;
		  z-index:2;
		}
	  }
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
	.planet { 
	  position: absolute;
	  display:flex;
	  min-width:2rem;
	  flex-direction: column;
	  transition: all 0.5s;
	  top: calc(50vh - 2rem); /* 2rem equals planetHeight/2 */
	  left: calc(50vw - 4.2rem/2); /* 4.2 equals planetWidthFake */
	  width: fit-content;
	  height: fit-content;
	  animation-play-state: running;
	  user-select: none;
	  &:hover {
		animation-play-state: paused !important;
		filter:brightness(115%);
		.planet-info {
		  display: flex;
		  flex-direction: column;
		  opacity: 1;
		  pointer-events: all;
		}
	  }
	  .planet-info {
		transition: all var(--transition-short); ;
		opacity:0;
		position: absolute;
		bottom:90%;
		left:50%;
		background: rgba(13, 16, 17, 0.5);
		border-top-right-radius:var(--border-radius-small);
		border-bottom-right-radius:var(--border-radius-small);
		border-left:1px solid rgba(135, 206, 250, 0.85);
		padding:1rem;
		width:15rem;
		display: flex;
		flex-direction: column;
		pointer-events: none;
		gap:1rem;
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
	  img {
		animation: rotate var(--planet-rotate-speed) linear infinite reverse;
		transition: 0.9s all;
		border-radius: 100%;
		margin:auto;
		display:block;
		width:4.2rem;
		user-drag: none;
	   -webkit-user-drag: none; /* For Safari */
	  }
	}
}
	.planet:hover {
		z-index:98 !important;
	}
  .pause-animation {
	animation-play-state: paused !important;
  }
  .planet-real-size {
	filter:brightness(92%) !important;
	animation-play-state: paused !important;
	top:50% !important;
	left:50% !important;
	transform:translate(-50%, -50%) !important;
	z-index:98 !important;
	.planet-info {
		top:30%;
		left:55% !important;
		height:fit-content;
		gap:2rem !important;
	}
	&:hover {
		filter:brightness(92%);
		.planet-info {
			gap:2rem !important;
		}
	}
}
  .planet-rotate-slow {
	animation: rotate var(--planet-rotate-speed-slow) linear infinite !important;
  }

  .center-earth-freeze {
	animation-play-state: paused !important;
	transform:translate(-150%, -25%) !important;
	z-index:99 !important;
	pointer-events: none;
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
	  width:4.5rem;
	}
	.range-container {
		display:flex;
		flex-direction: column;
		gap:1rem;
		justify-content: space-between;
		input[type="range"] {
		  margin-top:0;
		  width: 8rem;
		  height: 0.6rem;
		  border-radius: 5px;
		  display:block;
		  accent-color: var(--color-primary);
		}
		div > span {
			margin-bottom:0.35rem;
			display:block;
		}
	}
	input[type="checkbox"] {
	  width:1rem;
	  height:1rem;
	  accent-color: var(--color-primary);
	}
  }
#img-saturn {
	animation:none !important;
	padding-top:0.8rem;
}

</style>