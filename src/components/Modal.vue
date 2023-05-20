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

			function dontAnimateSaturn () {
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
				descriptionImg.src = new URL(`../assets/planets/${planet.name}-img.jpg`, import.meta.url).href
			}

			return {closePlanetDetails, planet,dontAnimateSaturn,setupImages}
		},
		mounted() {
			this.setupImages()
			this.dontAnimateSaturn()
		}
	}
</script>

<template>
	<div class="modal-container" @click="closePlanetDetails()" >
			<div class="modal" @click.stop="">
				<button class="btn-close" @click="closePlanetDetails()">X</button>
				<div><h1>{{planet.name}}</h1></div>
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
				<div class="img-container"><img id="description-img" alt=""></div>
			</div>
	</div>
</template>

<style scoped lang="scss">
.modal-container {
	position: absolute;
	z-index:2;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.5);
	background: rgba(0, 8, 14, 0.6);
	flex-grow:0 !important;
	display: flex;
	flex-direction: column;
	.modal {
		overflow-x:hidden;
		z-index:99;
		border-radius:var(--border-radius-medium);
		background: var(--color-background);
		height:clamp(20rem, 95%, 74rem);
		width:clamp(20rem, 60rem, 90%);
		padding:3.5rem;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		display:flex;
		flex-grow:0;
		flex-direction: column;
		gap:2.5rem;
		overflow-y:auto;
		.btn-close {
			position: absolute;
			top:1px;
			left:1px;
			color:rgba(255, 255, 255, 0.83);
			border:2px solid rgba(255, 255, 255, 0.252);
			font-size: 1.1rem;
			&:hover {
				color:white;
				border:2px solid rgba(255, 255, 255, 0.812);
			}
		}
		h1 {
			margin:1rem;
			text-align: center;
			text-transform: capitalize;
			font-size: 2.85rem;
			letter-spacing: var(--letter-spacing-large);
		}
		.intro {
			max-width: 50rem;
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
			max-width: 50rem;
			margin:auto;
		}
		.img-container {
			max-width: 50rem;
			margin:auto;
			display:block;
			width:100%;
			img {
				width:100%;
				height:100%;
				object-fit: cover;
				border-radius: var(--border-radius-medium);
			}
		}
	}
}
</style>