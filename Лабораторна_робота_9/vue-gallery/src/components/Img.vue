<template>
	<div
		class="Img"
		v-bind:class="{fullscreen: image.fullscreen, prev: image.prev, next: image.next}"
		>
		<img id = "img"
			v-bind:src="image.src"
			v-on:click="$emit('fullscreen-image', image.id)"
		>
		<div id = "del" v-on:click="$emit('delete-image', image.id)">
			X
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>

.Img {
	width: 30vh;
	height: 30vh;
	margin: 0.5vh;
	display: flex;
	align-content: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    user-select: none;
}

#img {
	height: 30vh;
    width: 30vh;
    object-fit: cover;
    transition-duration: 1s;
}

#del {
    background: #c00;
    color: #fff;
    font-size: 2vh;
    height: 2vh;
    width: 2vh;
    text-align: center;
    line-height: 2vh;
    border-radius: 1.5vh;
    position: absolute;
    margin-top: -29.5vh;
    margin-left: 29.5vh;
    visibility: hidden;
    cursor: pointer;
}

.Img:hover > #del, #del:hover {
    visibility: visible;
}

.fullscreen {
	position: fixed;
	top: 0;
	width: 100vw;
    height: 100vh;
    margin: 0;
	background: rgba(0, 0, 0, 0.95);
	box-shadow: none;
	z-index: 100;
}

.fullscreen > #img {
	height: 100vh;
    width: calc(100vw - 60vh);
    object-fit: contain;
}

.fullscreen:hover > #del, .prev:hover > #del, .next:hover > #del {
    visibility: hidden;
}

.prev , .next {
	z-index: 101;
	position: fixed;
	opacity: 0.65;
	top: 30vh;
	width: 15vw;
	transition-duration: 0.75s;
}

.prev {left: -7vh;}
.next {right: -7vh;}

.prev:hover, .next:hover {
	opacity: 1;
}

.prev:hover {left: -1vh;}
.next:hover {right: -1vh;}
</style>