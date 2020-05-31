<template>
	<div id = "SetOfImg">
		<Img 
			v-for = "image of images"
			v-bind:image = "image"
			v-on:fullscreen-image = "fullscreenImage"
			v-on:delete-image = "deleteImage"
		/>
	</div>
</template>

<script>
import Img from "@/components/Img"

export default {
	props: ['images'],
	components: {
		SingleImg
	},
	methods: {
		fullscreenImage(id) {
			this.$emit('fullscreen-image', id);
		},
		deleteImage(id) {
			this.$emit('delete-image', id);
		}
	}
}
</script>

<style>
#SetOfImg {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>