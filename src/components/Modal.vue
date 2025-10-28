<script  lang="ts">
import { PropType } from 'vue';
import type { Planet } from '../data/types';

	export default {
		props: {
			planet: {
				type: Object as PropType<Planet>,
				required: true,
			},
		},
		setup(props, context, ) {
			const planet = props.planet

			const closePlanetDetails = () => {
				context.emit('closePlanetDetails', null)
			}

			function checkShouldRotate () {
				if (planet.name === 'saturn') {
					let imgEl = document.querySelector('.img') as HTMLImageElement
					imgEl.style.animation = 'none';
				}
			}

			function setupImages () {
				// need this function because of stupid vite v-bind issues
				let planetImg = document.getElementById('planet-img') as HTMLImageElement
				let descriptionImg = document.getElementById('description-img') as HTMLImageElement
				planetImg.src = new URL(`../assets/${planet.name}.png`, import.meta.url).href
				checkShouldRotate()
				
				if (planet.videoUrl) {
					let descriptionVideo = document.getElementById('description-video') as HTMLImageElement
					descriptionVideo.src = new URL(`../assets/planets/${planet.name}-video.mp4`, import.meta.url).href
				}
				else {
					descriptionImg.src = new URL(`../assets/planets/${planet.name}-img.jpg`, import.meta.url).href
				}
			}
			return {closePlanetDetails, planet,checkShouldRotate,setupImages}
		},
		mounted() {
			this.setupImages()
		}
	}
</script>

<template>
	<div class="modal-container" @click="closePlanetDetails()" >
			<div class="modal" @click.stop="">
				<div class="title-container">
					<button class="btn-close" @click="closePlanetDetails()">X</button>
					<h1>{{planet.name}}</h1>
				</div>
				<div class="intro">
					<img id="planet-img" class="img" alt="" srcset="">
					<div class="stats">
						<div v-for="stat in planet.stats" class="planet-stats">
							<div class="stat-label">{{stat.label}}: </div><div class="stat-value">{{stat.value}}</div>
						</div>
						<div v-for="stat in planet.statsExtra" class="planet-stats">
							<div class="stat-label">{{stat.label}}: </div><div class="stat-value">{{stat.value}}</div>
						</div>
					</div>
				</div>
				<div class="description"><p>{{planet.descriptionLong}}</p></div>
				<div class="media-container">
					<video v-if="planet.videoUrl" id="description-video" alt="" autoplay loop muted></video>
					<img v-else id="description-img" alt="">
				</div>
			</div>
	</div>
</template>

<style scoped lang="scss">
.modal-container {
	position: absolute;
	z-index:2;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.1);
	flex-grow:0 !important;
	display: flex;
	flex-direction: column;
	.modal {
		filter:brightness(1.05);
		background: var(--color-background);
		-webkit-backdrop-filter: blur(15px);
  		backdrop-filter: blur(15px);
		overflow-x:hidden;
		z-index:99;
		border-radius:var(--border-radius-medium);
		height:clamp(20rem, 95%, 74rem);
		width:clamp(20rem, 60rem, 90%);
		padding:3.1rem 2rem;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		display:flex;
		flex-grow:0;
		flex-direction: column;
		gap:2.5rem;
		overflow-y:auto;
		.title-container {
			display: flex;
			position: relative;
			width: 100%;
			max-width:53rem;
			margin:auto;
			justify-content: space-between;

			.btn-close {
				position: absolute;
				left:0;
				top:-0.8rem;
				width:3.6rem;
				height:2.8rem;
				color:rgba(255, 255, 255, 0.73);
				border:1px solid rgba(255, 255, 255, 0.252);
				font-size: 0.85rem;
				&:hover {
					color:white;
					border:1px solid rgba(255, 255, 255, 0.812);
					background:transparent;
				}
			}
			h1 {
				margin:auto;
				text-align: center;
				text-transform: capitalize;
				font-size: 2.85rem;
				letter-spacing: var(--letter-spacing-large);
				width:fit-content;
			}
		}
		.intro {
			max-width: 53rem;
			margin:auto;
			width:100%;
			justify-content: space-around;
			display: flex;
			flex-wrap: wrap;
			flex:1;
			flex-grow:0;
			img {
				width:22rem;
				margin:auto 0;
				animation: rotate linear infinite var(--planet-rotate-speed-slow);
			}
			.stats {
				padding-right:2rem;
				display:flex;
				flex-direction: column;
				justify-content: center;
				gap:0.1rem;
				.planet-stats {
					display:flex;
					gap:0.5rem;
					line-height: var(--line-height-large);
					.stat-label {
						width:9rem;
						margin-right:0.3rem;
						text-align: right;
						font-weight: 600;
						&::first-letter {
							text-transform: capitalize;
						}
					}
					.stat-value {
						&::first-letter {
							text-transform: capitalize;
						}
					}
				}
			}
		}
		.description {
			letter-spacing: var(--letter-spacing-small);
			line-height: var(--line-height-lmedium);
			max-width: 53rem;
			margin:auto;
		}
		.media-container {
			max-width: 53rem;
			margin:auto;
			display:block;
			width:100%;
			img, video {
				width:100%;
				height:100%;
				object-fit: cover;
				border-radius: var(--border-radius-medium);
			}
		}
	}
}
</style>