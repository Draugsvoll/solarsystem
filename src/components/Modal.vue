<script  lang="ts">
import { PropType } from 'vue';
import { planetSummary } from '../data/types';

	export default {
		props: {
			planet: {
				type: Object as PropType<planetSummary>,
				required: true,
			},
		},
		setup(props, context, ) {
			const planet = props.planet
			const closePlanetDetails = () => {
				context.emit('closePlanetDetails', null)
			}
			return {closePlanetDetails, planet}
		}
	}
</script>

<template>
	<div class="modal-container">
		<div class="modal">
			<div><h1>{{planet['name']}}</h1></div>
			<!-- <div><h1>{{planet.name}}</h1></div> -->
			<p v-for="stat in planet.stats" class="planet-stats">
				<p>{{stat.label}} {{stat.value}}</p>
			</p>
			<div class="description"><p>{{planet.synopsis}}</p></div>
			<div class="description"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis consectetur consequuntur velit. Expedita minima magni sunt praesentium non officia voluptas labore dolores quasi reprehenderit ea animi esse sapiente repellendus sequi, ipsam, doloribus ratione quo aut excepturi nulla. Quasi quam error aspernatur doloribus dolore sed! Deserunt nesciunt nulla consequuntur temporibus quo rerum quia eius aliquam, esse, dolores et vero unde non placeat consequatur atque voluptates animi, dolorum dolorem dicta laboriosam voluptatum itaque? Aspernatur facere delectus nihil illum qui maiores, quae sed, in reprehenderit tenetur natus sit explicabo fuga quaerat non vel necessitatibus modi. Autem dolorum tenetur tempore sint eveniet laudantium!</p></div>
			<div class="img-container"><img src="@/assets/planets/mars-img.jpg" alt=""></div>
			<button @click="closePlanetDetails()">Close</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.modal-container {
	position: absolute;
	z-index:2;
	width:100%;
	height:100%;
	background: rgba(0,0,0,0.25);
	.modal {
		width:40rem;
		height:40rem;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		background: rgba(0,0,0,0.8);
		display:flex;
		flex-direction: column;
		overflow-y:auto;
		> div {
			margin:1rem auto;
		}
		.img-container {
			margin:0;
			width:100%;
			height:35rem;
			img {
				width:100%;
				height:100%;
				object-fit: cover;
			}
		}
	}
}
</style>