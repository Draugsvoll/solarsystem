<script lang="ts">
import { ref } from 'vue'

	export default {
		setup(_, context) {
			const brightness = ref(100)
			const daysPerSecond = ref(10)
			const isOrbitViewMode = ref(true)
			const currentYear = new Date().getFullYear()

			const toggleRealSizeAll = (isChecked: HTMLInputElement | boolean) => {
				if (typeof isChecked === 'object') {
					context.emit('toggleRealSizeAll', isChecked.checked)
				} else {
					context.emit('toggleRealSizeAll', isChecked)
				}
			}

			const toggleViewMode = (viewMode: string) => {
				isOrbitViewMode.value = viewMode === 'orbits' ? true : false
				if (isOrbitViewMode.value) {
					// reset to normal sizes before switching view-mode
					let checkbox = document.getElementById('checkbox-all-planets') as  HTMLInputElement
					checkbox.checked = false
					toggleRealSizeAll(checkbox)
				}
				else { // switching to simple view
					let checkboxLabels = document.getElementById('checkbox-label') as  HTMLInputElement
					checkboxLabels.checked = true
					toggleLabels(checkboxLabels)
				}
				context.emit('toggleViewMode', isOrbitViewMode.value)
			}

			const toggleOrbit = (isChecked: HTMLInputElement) => {
				context.emit('toggleOrbit', isChecked?.checked)
			}
			const toggleLabels = (isChecked: HTMLInputElement) => {
				context.emit('toggleLabels', isChecked?.checked)
			}
			const toggleSun = (isChecked: HTMLInputElement) => {
				context.emit('toggleSun', isChecked?.checked)
			}
			const toggleAnimate = (isChecked: HTMLInputElement) => {
				context.emit('toggleAnimate', isChecked?.checked)
			}
			const adjustDaysPerSecond = (days: any) => {
				daysPerSecond.value = days
				context.emit('updateDays', days)
			}
			const adjustBrightness = () => {
				let videoEl = document.querySelector('video')
				if (!videoEl) return
				videoEl.style.filter = `brightness(${brightness.value}%)`
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
			// function exitFullscreen () {
			// 	if (document.exitFullscreen) {
			// 	document.exitFullscreen();
			// 	} else if (document.mozCancelFullScreen) { // For Firefox
			// 	document.mozCancelFullScreen();
			// 	} else if (document.webkitExitFullscreen) { // For Chrome, Safari, and Opera
			// 	document.webkitExitFullscreen();
			// 	} else if (document.msExitFullscreen) { // For Internet Explorer and Edge
			// 	document.msExitFullscreen();
			// 	}
			// }

			return {toggleOrbit, toggleLabels, toggleSun, toggleAnimate, adjustBrightness, brightness,adjustDaysPerSecond,daysPerSecond,fullscreen,toggleViewMode,isOrbitViewMode,toggleRealSizeAll, currentYear}
		},
		mounted() {
			this.adjustDaysPerSecond(this.daysPerSecond)
			this.adjustBrightness()
		},
	}
</script>

<template>
	<div class="sidebar" :class="{ offsetMenuYposition : !isOrbitViewMode}" >
		<h2>Planet Explorer</h2>
		<p class="notify-scrolling">Scroll to zoom</p>
		<div class="switch-container" v-show="isOrbitViewMode">
			<span class="setting-label">Orbits</span>
			<label class="switch">
				<input type="checkbox" class="switch-input" checked @input="toggleOrbit($event.target as HTMLInputElement)" />
				<span class="switch-label" data-on="On" data-off="Off"></span>
				<span class="switch-knob"></span>
            </label>
			<br>

			<span class="setting-label">Labels</span>
			<label for="checkbox-label" class="switch">
				<input id="checkbox-label" type="checkbox" class="switch-input" checked @input="toggleLabels($event.target as HTMLInputElement)" />
				<span class="switch-label" data-on="On" data-off="Off"></span>
				<span class="switch-knob"></span>
            </label>
			<br>

			<span class="setting-label">Sun</span>
			<label class="switch">
				<input type="checkbox" class="switch-input" checked @input="toggleSun($event.target as HTMLInputElement)" />
				<span class="switch-label" data-on="On" data-off="Off"></span>
				<span class="switch-knob"></span>
            </label>
			<br>

			<span class="setting-label">Animation</span>
			<label class="switch">
				<input type="checkbox" class="switch-input" checked @input="toggleAnimate($event.target as HTMLInputElement)" />
				<span class="switch-label" data-on="On" data-off="Off"></span>
				<span class="switch-knob"></span>
            </label>
		</div>
		<div v-show="!isOrbitViewMode" class="switch-container">
			<span class="setting-label" id="setting-label-all-planets">Real size all planets</span>
			<label for="checkbox-all-planets" class="switch">
				<input type="checkbox" class="switch-input" id="checkbox-all-planets" @input="toggleRealSizeAll($event.target as HTMLInputElement)" />
				<span class="switch-label" data-on="On" data-off="Off"></span>
				<span class="switch-knob"></span>
            </label>
		</div>
		<div v-show="isOrbitViewMode" class="range-container">
			<!-- <span class="label-range-input">Brightness</span>
				<input type="range" v-model="brightness" @input="adjustBrightness()" min="20" max="150" step="10"> -->
				
				<span class="label-range-input">{{daysPerSecond}} days / sec</span>
				<input type="range" v-mode="daysPerSecond" @change="adjustDaysPerSecond($event.target?.value)" min="1" max="365" step="1">
				<!-- <p class="info-text-orbits">These are real orbit speeds</p> -->
			</div>
			<!-- <div class="btn-row">
				<button @click="fullscreen()">Fullscreen</button>
		</div> -->
		<div class="btn-row">
			<button :class="{ highlighted : isOrbitViewMode}" @click="toggleViewMode('orbits')">Orbits</button>
			<button :class="{ highlighted : !isOrbitViewMode}" @click="toggleViewMode('simple')">Simple</button>
		</div>
		<div class="copyright">
			<p>&copy; Copyright {{currentYear}} <a target="_blank" href="https://ove-portfolio.netlify.app">Ove H. Draugsvoll</a></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	backdrop-filter:blur(3px);
	-webkit-backdrop-filter: blur(3px);
	transform:scale(0.93);
	font-size: var(--font-size-small);
	opacity:0.92;
	padding:0.45rem;
	padding-left:0.3rem;
	z-index:2;
	position: fixed;
	left:0;
	top:23vh;
	width:fit-content;
	display:flex;
	justify-content: space-between;
	flex-direction: column;
	transition:all var(--transition-medium);
	gap:1.5rem;
	h1,h2,h3 {
	  color:var(--color-primary);
	  margin:0;
	  letter-spacing: var(--letter-spacing-medium);
	}
	.setting-label {
	  display:inline-block;
	  width:5.5rem;
	  margin-bottom:0.1rem;
	  letter-spacing: var(--letter-spacing-small);
	}
	#setting-label-all-planets {
		width:9.6rem;
		font-style: inherit;
	}
	.label-range-input {
	  display:block;
	  line-height:0.9;
	}
	.range-container {	
			input[type="range"] {
			margin-top:0;
			width: 10.8rem;
			height: 0.45rem;
			border-radius: 15px;
			accent-color: var(--color-primary);
		}
		.info-text-orbits {
			font-size: var(--font-size-xxsmall);
			color:rgba(221, 221, 221, 0.94);
			margin-top:-0.22rem;
			width:11rem;
			line-height: 1;
		}
	}
	div {
		line-height: var(--line-height-medium);
		input[type="checkbox"] {
			width:1rem;
			height:1rem;
			accent-color: var(--color-primary);
			vertical-align: middle;
			margin-bottom: 0.15rem;
		}
	}
	.btn-row {
		display:flex;
		gap:0.3rem;
		width:fit-content;
		justify-content: space-between;
		button {
			letter-spacing: var(--letter-spacing-small);
			min-width:5.3rem;
			max-width: 6rem;
		}
		.highlighted {
			text-decoration: underline;
			text-underline-offset: 0.2rem;   /* moves underline further from text */
		}
	}
	.copyright {
		font-size: 0.67rem;
		color:rgba(160, 160, 160, 1);
		opacity: 0.8;
		a {
			color:var(--color-primary);
		}
	}
	.notify-scrolling {
		font-size: var(--font-size-medium);
		margin-top:-0.4rem;
	}
  }
  .offsetMenuYposition {
	top:10vh;
  }











  /* SWITCH */
.switch-container {
	div {
		display:flex;
	}
  }
  .switch {
	border-radius: 18px;
	cursor: pointer;
	display: inline-block;
	height: 1.1rem;
	width: 3.2rem;
	position: relative;
	top:0.25rem;
  }
  .switch-input {
	left: 0;
	opacity: 0;
	top: 0;
	position: absolute;
  }
  .switch-label {
	background: #ccd5d9;
	border-radius: inherit;
	display: block;
	font-size: 0.48rem;
	height: inherit;
	position: relative;
	text-transform: uppercase;
	transition: all 0.15s ease-out;
	pointer-events: none;
	will-change: transform;
  }
  .switch-label::before,
  .switch-label::after {
	line-height: 1;
	margin-top: -0.3rem;
	position: absolute;
	top: 0.63rem;
	transition: inherit;
  }
  .switch-label::before {
	color: #aaa;
	content: attr(data-off);
	right: 0.5rem;
  }
  .switch-label::after {
	color: rgb(234, 238, 241);
	content: attr(data-on);
	left: 0.65rem;
	opacity: 0;
  }
  .switch-input:checked ~ .switch-label {
	background: var(--color-primary);
  }
  .switch-input:checked ~ .switch-label::before {
	opacity: 0;
  }
  .switch-input:checked ~ .switch-label::after {
	opacity: 1;
  }
  .switch-knob {
	background-color: #f3f5f8;
	border-radius: 10px;
	height: 1.1rem;
	width: 1.1rem;
	left: 0rem;
	top: 0rem;
	position: absolute;
	transition: left 0.2s ease-out 0s;
  }
  
  .switch-input:checked ~ .switch-knob {
	left: 2.1rem;
  }
  /* End of Switch */
</style>