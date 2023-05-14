<script setup lang="ts">

</script>

<template>
	<div class="modal-container">
		<div class="modal">
			<div><h1>Planet title</h1></div>
			<div class="stats">
				<h2>mad stats</h2>
				<h2>mad stats</h2>
				<h2>mad stats</h2>
				<h2>mad stats</h2>
			</div>
			<div class="description">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit ut mollitia eligendi, odio incidunt sint optio possimus omnis minima veritatis, commodi nam hic accusantium quisquam molestias dolores molestiae ad explicabo quae quibusdam labore placeat id expedita. Error maxime ab atque magni reiciendis, laboriosam libero eos nisi a! Accusamus provident aut, qui quia voluptas ipsam ducimus accusantium odio ratione, molestiae veritatis eos iure eaque sed eum culpa. Quos aliquam magnam ullam tenetur repellendus nostrum consectetur cum rerum perspiciatis fuga dolorem laborum mollitia, quam, vitae ut veniam molestias odit fugiat facere tempora eveniet eos suscipit! Fuga doloribus tenetur aperiam iusto necessitatibus?</p>
			</div>
			<div class="img-container">
				<img src="@/assets/planets/mars-img.jpg" alt="">
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
	background: rgba(0,0,0,0.25);
	border:1px solid red;
	.modal {
		width:40rem;
		height:40rem;
		border:1px solid yellow;
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
			border:1px solid red;
			img {
				width:100%;
				height:100%;
				object-fit: cover;
			}
		}
	}
}
</style>