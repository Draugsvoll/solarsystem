<script lang="ts">
import { ref } from 'vue'

	export default {
		setup(_, context) {
			const brightness = ref(90)
			const daysPerSecond = ref(5)

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

			return {toggleOrbit, toggleLabels, toggleSun, toggleAnimate, adjustBrightness, brightness,adjustDaysPerSecond,daysPerSecond,fullscreen}
		},
		mounted() {
			this.adjustDaysPerSecond(this.daysPerSecond)
			this.adjustBrightness()
		},
	}
</script>

<template>
	<div class="sidebar">
		<div>
		  <h2>Planet Explorer</h2>
		</div>
		<div>
		  <p class="notify-scrolling">Scroll to zoom</p>
		</div>
		<div>
			<span class="setting-label">Orbits</span><input type="checkbox" checked @input="toggleOrbit($event.target as HTMLInputElement)"><br>
			<span class="setting-label">Labels</span><input type="checkbox" checked @input="toggleLabels($event.target as HTMLInputElement)"><br>
			<span class="setting-label">Sun</span><input type="checkbox" checked @input="toggleSun($event.target as HTMLInputElement)"><br>
			<span class="setting-label">Animation</span><input type="checkbox" checked @input="toggleAnimate($event.target as HTMLInputElement)"><br>
		</div>
		<div class="range-container">
			<!-- <span class="label-range-input">Brightness</span>
			<input type="range" v-model="brightness" @input="adjustBrightness()" min="20" max="150" step="10"> -->

			<span class="label-range-input">{{daysPerSecond}} days / sec</span>
			<input type="range" v-mode="daysPerSecond" @change="adjustDaysPerSecond($event.target?.value)" min="1" max="365" step="1">
			<p class="info-text-orbits">These are real orbit speeds</p>
		</div>
		<div class="btn-row">
		  <button @click="fullscreen()">Fullscreen</button>
		  <!-- <button @click="exitFullscreen()">Normal screen</button> -->
		</div>
		<div class="copyright">
			<p>&copy; Copyright 2023 <a target="_blank" href="https://ove-portfolio.netlify.app">Ove H. Draugsvoll</a></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	font-size: var(--font-size-small);
	opacity:0.96;
	padding:0.6rem;
	z-index:2;
	position: fixed;
	left:0;
	top:23vh;
	width:fit-content;
	display:flex;
	justify-content: space-between;
	flex-direction: column;
	gap:1.6rem;
	h1,h2,h3 {
	  color:var(--color-primary);
	  margin:0;
	  letter-spacing: var(--letter-spacing-medium);
	}
	.setting-label {
	  display:inline-block;
	  width:6rem;
	}
	.label-range-input {
	  display:block;
	  line-height:0.9;
	}
	.range-container {	
			input[type="range"] {
			margin-top:0;
			margin-bottom:0.8rem;
			width: 10.2rem;
			height: 0.4rem;
			border-radius: 5px;
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
			margin-bottom: 0.25rem;
		}
	}
	.btn-row {
		margin-top:0.6rem;
		display:flex;
		gap:0.5rem;
		width:fit-content;
		justify-content: space-between;
		button {
			letter-spacing: var(--letter-spacing-small);
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
		margin-top:-0.8rem;
	}
  }
</style>