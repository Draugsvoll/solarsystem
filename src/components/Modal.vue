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
			function test () {
				alert()
			}
			return {closePlanetDetails, planet,dontAnimateSaturn,test}
		},
		mounted() {
			this.dontAnimateSaturn()
		}
	}
</script>

<template>
	<div class="modal-container" @click="closePlanetDetails()" >
			<div class="modal">
				<button class="btn-close" @click="closePlanetDetails()">X</button>
				<div><h1>{{planet.name}}</h1></div>
				<div class="intro">
					<img class="img" :src="planet.imageUrl" alt="" srcset="">
					<div class="stats">
						<div v-for="stat in planet.stats" class="planet-stats">
							<div class="stat-label">{{stat.label}}: </div><div>{{stat.value}}</div>
						</div>
						<div v-for="stat in planet.statsExtra" class="planet-stats">
							<div class="stat-label">{{stat.label}}: </div><div>{{stat.value}}</div>
						</div>
					</div>
				</div>
				<div class="description"><p>{{planet.descriptionLong}}</p></div>
				<div class="img-container"><img src="@/assets/planets/mars-img.jpg" alt=""></div>
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
	flex-grow:0 !important;
	display: flex;
	flex-direction: column;
	.modal {
		border-radius:var(--border-radius-medium);
		background: rgba(2, 19, 31, 0.9);
		height:clamp(20rem, 90%, 74rem);
		width:clamp(20rem, 50rem, 50rem);
		padding:2.5rem;
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
		}
		.intro {
			width:100%;
			justify-content: space-around;
			display: flex;
			flex:1;
			flex-grow:0;
			img {
				width:18rem;
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
					.stat-label {
						width:3rem;
						text-align: right;
					}
				}
			}
		}
		.description {
			letter-spacing: var(--letter-spacing-small);
		}
		.img-container {
			margin:0;
			width:100%;
			img {
				width:100%;
				height:100%;
				object-fit: cover;
				border-radius: var(--border-radius-small);
			}
		}
		@media screen and (max-width:770px) {
			width:90%;
		}
	}
}
</style>