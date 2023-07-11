<script setup lang="ts">
	import { onMounted, ref } from 'vue'
	import Modal from './Modal.vue'
	import {planets} from '../data/planets'
    import type { Planet } from '../data/types'
	import Sidebar from './Sidebar.vue'

	const planetContainerEl = ref<HTMLElement|undefined>(undefined)
	const planetInModal = ref<undefined|Planet>(undefined)
	const planetsEl = ref<undefined|HTMLElement[]>(undefined)
	const videoEl = ref<undefined|HTMLVideoElement[]>(undefined)
	const showingRealSizePlanet = ref(false)

	const isOrbitViewMode = ref(true)
	const dayCounter = ref(0)
	const daysPerSecond = ref(0)
	const showOrbits = ref(true)
	const showDays = ref(true)
	const playAnimation = ref(true)
	const planetWidthFake = 4.2
	const planetSimpleWidthFake = 6.5
	const showLabels = ref(true)
	const showSun = ref(true)
	const currentScaling = ref(100)
	const planetImgLoadedCounter = ref(0)
	const isLoading = ref(true)
	const currentScalingOnVideoEl = ref(1100)
	const scrollingCounter = ref(0)

	function scrollX(direction: 'left' | 'right') {
		let planetContainerSimple = document.querySelector('.planet-container-simple')
		if (!planetContainerSimple) return
		if (direction === 'left') {
			scrollingCounter.value -= 8
		}
		else {
			scrollingCounter.value += 8
		}
		planetContainerSimple.style.marginLeft = scrollingCounter.value + 'rem'
	}

	function toggleViewMode(data: boolean) {
		if (data === isOrbitViewMode.value) return
		isOrbitViewMode.value = data
		scrollingCounter.value = 0
		setTimeout(() => {
			setupPlanetImages()
		}, 1) // need timeout to wait for div to first render/exist
	}

	function planetImgIsLoaded() {
		planetImgLoadedCounter.value++
		if (planetImgLoadedCounter.value === planetsEl.value?.length) {
			isLoading.value = false
		}
	}

	function handleMouseScroll(event: WheelEvent) {
		const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1
		if (!event.ctrlKey || !event.metaKey) {
			event.preventDefault()
			zoomContent(zoomFactor)
		}
	}
	function zoomContent(zoomFactor: number) {
		if (zoomFactor > 1) {
			if (currentScaling.value > 220) return
			currentScaling.value += 5
			currentScalingOnVideoEl.value += 5
		}
		else {
			if (currentScaling.value < 20) return
			currentScaling.value -= 5
			if (currentScalingOnVideoEl.value >= 1015) currentScalingOnVideoEl.value -= 5
		}
		if (planetContainerEl.value?.style.transform !== undefined && videoEl.value?.style.transform !== undefined) {
			planetContainerEl.value.style.transform = `scale(${currentScaling.value / 100})`
			videoEl.value.style.transform = `scale(${currentScalingOnVideoEl.value / 1000})`
		}
	}

	function toggleAnimation (data: boolean) {
		playAnimation.value = data
		let planetImages = document.querySelectorAll('.img-planet')
		let planets = document.querySelectorAll('.planet')

		planets.forEach(planet => {
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

	function toggleOrbit(data: boolean) {
		showOrbits.value = data
	}

	function toggleLabels(data: boolean) {
		showLabels.value = data
	}

	function toggleSun(data: boolean) {
		showSun.value = data
	}

	function updateDays(days: number) {
		daysPerSecond.value = days
	}

	function displayPlanetsFakeSize () {
		if (isOrbitViewMode.value) {
			let images = document.querySelectorAll('.img-planet') as NodeListOf<HTMLElement>
			let earthEl = document.getElementById('earth') as HTMLElement
			let earthImg = document.getElementById('img-earth') as HTMLImageElement
			let planets = document.querySelectorAll('.planet')
			if (!images) return
	
			images.forEach(image => {
				image.style.width = planetWidthFake+'rem'
				image.classList.remove('planet-rotate-slow')
			})
			planets?.forEach(planet => {
				planet.classList.remove('planet-real-size')
			})
			earthEl?.classList.remove('center-earth-freeze')
			earthImg?.classList.remove('pause-animation')
			showingRealSizePlanet.value = false
			showSun.value = true
		}
		else {
			let images = document.querySelectorAll('.img-planet') as NodeListOf<HTMLElement>
			if (!images) return
	
			images.forEach(image => {
				image.style.width = planetSimpleWidthFake+'rem'
				image.classList.remove('planet-rotate-slow')
			})
			planetsEl.value?.forEach(planet => {
				planet.classList.remove('planet-real-size')
			})
			showingRealSizePlanet.value = false

			displayRealSizesAllPlanetsSimple(false)
		}
	}

	function displayRealSizesAllPlanetsSimple(data: boolean) {
			planets.forEach(planet => {
				let imageDivName = '#img-simple-' + planet.name
				let image = document.querySelector(imageDivName)
				if (!image) return

				if (data) { // if displayRealSizes === true
					let newWidth = planetSimpleWidthFake*planet.sizeToEarth + 'rem'
					if (planet.sizeToEarthSimple) newWidth = planetSimpleWidthFake*planet.sizeToEarthSimple + 'rem'
					image.style.width = newWidth
					image.classList.add('planet-rotate-slow')
				}
				else {
					let newWidth = planetSimpleWidthFake + 'rem'
					image.style.width = newWidth
					image.classList.remove('planet-rotate-slow')
				}
				
			})

			if (data) { // if displayRealSizes === true
				if (planetContainerEl.value?.style.transform !== undefined && videoEl.value?.style.transform !== undefined) {
					let newZoomValue = 28
					planetContainerEl.value.style.transform = `scale(${newZoomValue/ 100})`
					videoEl.value.style.transform = `scale(${currentScalingOnVideoEl.value / 1000})`
					currentScaling.value = newZoomValue
				}
				showingRealSizePlanet.value = true
			}
			else {
				if (planetContainerEl.value?.style.transform !== undefined && videoEl.value?.style.transform !== undefined) {
					let newZoomValue = 100
					planetContainerEl.value.style.transform = `scale(${newZoomValue/ 100})`
					videoEl.value.style.transform = `scale(${currentScalingOnVideoEl.value / 1000})`
					currentScaling.value = newZoomValue
				}
				showingRealSizePlanet.value = false
				let checkbox = document.getElementById('all-planets-size-checkbox') as  HTMLInputElement
				if (!checkbox) return
				checkbox.checked = false
			}
		}
	
	function displayPlanetRealSize(planet: Planet) {
		if (isOrbitViewMode.value) {
			let image = document.getElementById('img-'+planet.name) as HTMLImageElement
			let planetNode = document.getElementById(planet.name) as HTMLElement
			let earthEl = document.getElementById('earth') as HTMLElement
			let earthImg = document.getElementById('img-earth') as HTMLImageElement
	
			image.style.width = planet.sizeToEarthAdjusted*planetWidthFake+'rem'
			image.classList.add('planet-rotate-slow')
			planetNode?.classList.add('planet-real-size')
			earthImg?.classList.add('pause-animation')
			earthEl?.classList.add('center-earth-freeze')
			showingRealSizePlanet.value = true
			showSun.value = false
		}
		else {
			let image = document.getElementById('img-simple-'+planet.name) as HTMLImageElement
			let planetNode = document.getElementById(planet.name) as HTMLElement
	
			image.style.width = planet.sizeToEarthAdjusted*planetSimpleWidthFake+'rem'
			image.classList.add('planet-rotate-slow')
			planetNode?.classList.add('planet-real-size')
			showingRealSizePlanet.value = true
		}
	}

	function openPlanetModal (id: string) {
		let planetContainer = document.querySelector('.planet-container') as HTMLElement
		planetContainer.style.transition = 'all var(--transition-short)'
		planetContainer.style.transform = 'scale(0.2)' // only use transition while open/close modal
		planetInModal.value = planets.find(planet => {
			return planet.name === id
		})
	}

	function closePlanetModal () {
		let planetContainer = document.querySelector('.planet-container') as HTMLElement
		planetContainer.style.transform = 'scale(1)'
		setTimeout(()=> { 
			planetContainer.style.transition = 'all 0s' // only use transition while open/close modal
		},1000)
		planetInModal.value = undefined
	}

	function setupPlanetImages () {
		// need this function to set images because of vite v-bind on img-source issues
		// using try-catch as an easy way to only execute if the divs exists
		planets.forEach(planet => {
			// orbit view mode
			try {
				let planetImage = document.getElementById(`img-${planet.name}`) as HTMLImageElement
				planetImage.src = new URL(`../assets/${planet.name}.png`, import.meta.url).href
				planetImage.style.width = planetWidthFake+'rem'
			} catch (error) {}

			// simple view mode
			try {
				let planetImage2 = document.getElementById(`img-simple-${planet.name}`) as HTMLImageElement
				planetImage2.src = new URL(`../assets/${planet.name}.png`, import.meta.url).href
				planetImage2.style.width = planetSimpleWidthFake+'rem'
			} catch (error) {}}
		)
	}

	function fetchElements () {
		planetContainerEl.value = document.querySelector(".planet-container") as HTMLElement
		planetsEl.value = document.querySelectorAll(".planet") as unknown as HTMLElement[]
		videoEl.value = document.getElementById("video") as unknown as HTMLVideoElement
	}

	function setVideoZoom () {
		if (videoEl.value) {
			videoEl.value.style.transform = `scale(${currentScalingOnVideoEl.value / 1000})`
		}
	}

	onMounted(() => {
		fetchElements()
		setupPlanetImages()
		setVideoZoom()

		setInterval(() => {
			if (playAnimation.value === true) {
				dayCounter.value += (daysPerSecond.value/20)
			}
		}, 50)
	})
</script>

<template>
	<div v-if="isLoading"  id="loader" class="loader">
		<div class="spinner" id="spinner"></div>
		<!-- <p class="loading-text">Loading AI..</p> -->
	</div>

	<Sidebar
		@toggleAnimate="toggleAnimation"	
		@toggleOrbit="toggleOrbit"
		@toggleLabels="toggleLabels"
		@toggleSun="toggleSun"
		@toggleViewMode="toggleViewMode"
		@toggleRealSizeAll="displayRealSizesAllPlanetsSimple"
		@updateDays="updateDays"
	/>

	<transition-group name="opacity">
		<div class="scroll-btn-container">
			<button v-if="!isOrbitViewMode && !planetInModal" class="scroll-btn scroll-left-btn far fa-chevron-left fa-3x" @click="scrollX('left')"></button>
			<button v-if="!isOrbitViewMode && !planetInModal" class="scroll-btn scroll-right-btn far fa-chevron-right fa-3x" @click="scrollX('right')"></button>
		</div>
	</transition-group>

	<transition name="fade">
		<Modal :planet="planetInModal" v-if="planetInModal" @closePlanetDetails="closePlanetModal()" />
	</transition>
	
	<div class="planet-container"  @wheel="handleMouseScroll">
		
		<transition-group name="fade">
			<div v-if="showSun && isOrbitViewMode" class="sun">
				<img src="@/assets/sun.png" alt="" srcset="">
			</div>
			<p v-if="showDays && isOrbitViewMode" class="day-counter">Day: {{Math.floor(dayCounter).toLocaleString()}}</p>
		</transition-group>
		

		<!-- Orbit view mode -->
		<transition-group name="opacity">
			<div v-if="isOrbitViewMode"> 
				<div v-if="showOrbits" class="orbit-container" >
					<div v-for="planet,index in planets" :class="'orbit'+' orbit'+(index+1)+' ' +'orbit-'+planet.name"></div>
				</div>

				<div v-if="isOrbitViewMode"  v-for="planet, index in planets" :id="planet.name"
				:class="'planet planet'+(index+1)"
				:style="
				'animation: ' +(planet.orbitTime/daysPerSecond)+'s orbit'+(index+1)+' linear infinite; z-index:'+(15-(index+3))+';'"
				>
					<!-- <p class="size-in-earths">{{planet.sizeToEarth}} earths</p> -->
					<img @load="planetImgIsLoaded()" :id="'img-'+planet.name" class="img-planet"  alt="" srcset="">
					<div class="planet-label" v-if="showLabels"><p>{{planet.name}}</p></div>
					<div class="planet-info">
						<h3 class="planet-name">{{planet.name}}</h3>
						<div>
							<p v-for="stat in planet.stats" class="planet-stats">
								<p class="stat-label">{{stat.label}}:</p>
								<p class="stat-value">{{stat.value}}</p>
							</p>
						</div>
						<p class="planet-infotext">{{planet.synopsis}}</p>
						<div class="btn-row">
							<button v-if="!showingRealSizePlanet && planet.name !== 'earth'" @click="displayPlanetRealSize(planet)">Compare to Earth</button>
							<button v-else-if="showingRealSizePlanet" @click="displayPlanetsFakeSize()">Reset size</button>
							<button @click="openPlanetModal(planet.name)">More</button>
						</div>
					</div>
				</div>
			</div>
		</transition-group>

		<!-- Simple view mode -->
		<transition-group name="fade">
			<div v-if="!isOrbitViewMode" class="planet-container-simple">
				<div class="planet-simple" v-for="planet in planets">
					<img :id="'img-simple-'+planet.name" class="img-planet"  alt="" srcset="">
					<div class="planet-label" v-if="showLabels"><p>{{planet.name}}</p></div>
					<div class="planet-info">
						<h3 class="planet-name">{{planet.name}}</h3>
						<div>
							<p v-for="stat in planet.stats" class="planet-stats">
								<p class="stat-label">{{stat.label}}:</p>
								<p class="stat-value">{{stat.value}}</p>
							</p>
						</div>
						<p class="planet-infotext">{{planet.synopsis}}</p>
						<div class="btn-row">
							<button v-if="!showingRealSizePlanet && planet.name !== 'earth'" @click="displayPlanetRealSize(planet)">Compare to Earth</button>
							<button v-else-if="showingRealSizePlanet" @click="displayPlanetsFakeSize()">Reset size</button>
							<button @click="openPlanetModal(planet.name)">More</button>
						</div>
					</div>
				</div>
			</div>
		</transition-group>
		
	</div>
</template>
<style lang="scss" scoped>
.planet-container {
	transform:scale(0.9);
	z-index:1;
	position:absolute;
	width:100%;
	height:100%;
	transition: all 0.15s;
	.planet-container-simple {
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%);
		display:flex;
		gap:2.2rem;
		z-index: 99;
		padding:300rem;
		transition: all var(--transition-short) ease-out;
		margin-left:0rem;
		.planet-label {
			margin-top:0.4rem;
		}
		.planet-simple {
			position:relative !important;
			top: 0 !important;
			left: 0 !important;
			margin-top: auto;
			margin-bottom: auto;
			&:hover {
				transform: translateY(-0.35rem);
				z-index:99;
			}
			.planet-info {
				transform: scale(0.94);
			}
			img {
				animation: rotate var(--planet-rotate-speed-simple) linear infinite reverse;
			}
		}
	}
	.day-counter {
		position:absolute;
		top:calc(50% + 3.1rem);
		left:50%;
		transform: translate(-50%, -50%);
		background:rgba(0,0,0,0.15);
		padding:0.25rem 0.5rem;
		border-radius: 5px;
		z-index:13;
		user-select: none;
		min-width:5rem;
		text-align: center;
		letter-spacing: var(--letter-spacing-medium);
		font-size: var(--font-size-small);
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
		  border-radius:100%;
		}
	  }
	.orbit-container {
		z-index:1;
		position: absolute;
		transform: translate(-50%, -50%);
		top:50%;
		left:50%;
    	padding: 300rem;
		.orbit {
		  position: absolute;
		  border:1px solid rgba(255, 255, 255, 0.17);
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
	.planet, .planet-simple { 
	  position: absolute;
	  display:flex;
	  min-width:2rem;
	  flex-direction: column;
	  transition: all 0.5s;
	  top: calc(50vh - 4.2rem/2); /* this is planetWidthFake/2 */
	  left: calc(50vw - 4.2rem/2); /* this is planetWidthFake/2 */
	  width: fit-content;
	  height: fit-content;
	  animation-play-state: running;
	  user-select: none;
	  .size-in-earths {
		  display:none;
		  width:7rem;
	  }
	  &:hover {
		animation-play-state: paused !important;
		img {
			filter:brightness(1.15);
		}
		.planet-info {
		  display: flex;
		  flex-direction: column;
		  opacity: 1;
		  pointer-events: all;
		}
	  }
	#img-saturn, #img-simple-saturn {
		animation:none !important;
		padding-top:0.8rem;
	}
	#img-venus {
		margin-bottom:-0.2rem;
	}

	.planet-info {
		transition: all var(--transition-short);
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		opacity:0;
		position: absolute;
		bottom:75%;
		left:50%;
		background: var(--color-background-lower-alpha);
		border-top-right-radius:var(--border-radius-medium);
		border-bottom-right-radius:var(--border-radius-medium);
		border-left:1px solid rgba(135, 206, 250, 0.9);
		padding:1.5rem 1.35rem;
		width:15rem;
		display: flex;
		flex-direction: column;
		pointer-events: none;
		gap:1.1rem;
		.planet-name {
		  color:var(--color-primary);
		  text-align: left;
		  text-transform: capitalize;
		  letter-spacing: var(--letter-spacing-medium);
		  font-size: var(--font-size-large);
		}
		.planet-stats {
			display: flex;
			max-width:100%;
			line-height: var(--line-height-small);
			word-wrap: break-word;
			.stat-label {
				text-transform: capitalize;
				width:4.4em;
			}
			.stat-value{
				flex:1;
			}	
		}
	  }
	  .planet-label {
		text-transform: capitalize;
		letter-spacing: var(--letter-spacing-small);
		color:rgba(255, 255, 255, 0.7);
		text-align: center;
		font-weight: 600;
		font-size: var(--font-size-xxsmall);
	  }
	  img {
		filter:brightness(0.95);
		animation: rotate var(--planet-rotate-speed) linear infinite reverse;
		transition: 0.9s all;
		border-radius: 100%;
		margin:auto;
		display:block;
		width:4.2rem;
		user-drag: none;
	   -webkit-user-drag: none; /* For Safari */
	  }
	  .btn-row {
		display:flex;
		flex-direction: column;
		gap:0.65rem;
		position: relative;
		button {
			margin:0 auto;
			width:9.8rem;
			outline:none;
		}
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
	animation-play-state: paused !important;
	top:50% !important;
	left:50% !important;
	transform:translate(-50%, -50%) !important;
	z-index:98 !important;
	.size-in-earths {
		display:block !important;
		position: fixed !important;
		top:50%;
		left:50%;
		transform: translate(-55%, -300%);
		z-index:20;
		font-size: var(--font-size-xsmall);
		letter-spacing: var(--letter-spacing-small);
	}
	.planet-info {
		top:30%;
		left:55% !important;
		height:fit-content;
		z-index:999 !important;
	}
	&:hover {
		.planet-info {
			z-index:999 !important;
		}
	}
	img {
		filter:brightness(0.9) !important;
	}
}
  .planet-rotate-slow {
	animation: rotate var(--planet-rotate-speed-slow) linear infinite !important;
  }

  .center-earth-freeze {
	animation-play-state: paused !important;
	transform:translate(-87%, -15%) !important;
	z-index:99 !important;
	pointer-events: none;
  }
  .scroll-btn-container {
	position: absolute;
	display: flex;
	gap:1.15rem;
	z-index:3;
	transform: translate(-50%, -50%);
	top:71%;
	left:50%;
	  .scroll-btn {
		font-size: 1.1rem;
		padding:1.0rem 1.4rem;
		color:rgba(255,255,255,0.7);
		font-weight: 200;
		border:1px solid rgba(255,255,255,0.15);
		z-index:999;
		background:rgba(0,0,0,0.15);
		&:hover {
			background:rgba(0,0,0,0.3);
			border:1px solid rgba(255,255,255,0.2);
			color:var(--color-primary);
		}
	}
  }
</style>