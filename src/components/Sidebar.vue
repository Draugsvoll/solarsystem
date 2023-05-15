<script lang="ts">
import { ref } from 'vue'

	export default {
		setup(_, context) {
			const brightness = ref(200)

			const toggleOrbit = (isChecked: boolean) => {
				context.emit('toggleOrbit', isChecked)
			}
			const toggleLabels = (isChecked: boolean) => {
				context.emit('toggleLabels', isChecked)
			}
			const toggleSun = (isChecked: boolean) => {
				context.emit('toggleSun', isChecked)
			}
			const toggleAnimate = (isChecked: boolean) => {
				context.emit('toggleAnimate', isChecked)
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

			return {toggleOrbit, toggleLabels, toggleSun, toggleAnimate, adjustBrightness, brightness, fullscreen, exitFullscreen}
		}
	}
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
			<span class="setting-label">View orbits</span><input type="checkbox" checked @input="toggleOrbit($event.target.checked)"><br>
			<span class="setting-label">View Labels</span><input type="checkbox" checked @input="toggleLabels($event.target.checked)"><br>
			<span class="setting-label">View sun</span><input type="checkbox" checked @input="toggleSun($event.target.checked)"><br>
			<span class="setting-label">Animate</span><input type="checkbox" checked @input="toggleAnimate($event.target.checked)"><br>
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
</template>

<style lang="scss" scoped>
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