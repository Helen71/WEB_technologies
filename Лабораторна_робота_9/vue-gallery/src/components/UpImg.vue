<template>
	<div id = "UpImg">
		<input type="file"
			id = "uploadImg"
			v-on:change = "UpImg()"
			ref = "file"
			multiple accept = "image/*"
		>
	</div>
</template>

<script>

export default {
	methods: {
		data() {
			return {
				src: ''
			}
		},
		UpImg() {
			if (window.FileList && window.File && window.FileReader) {
				const file = this.$refs.file.files[0];

				const reader = new FileReader();
				reader.addEventListener('load', event => {
					const newImg = {
						id: Date.now(),
						src: event.target.result,
						fullscreen: false,
						prev: false,
						next: false
					}
					this.$emit('upload-img', newImg);
				});
				reader.readAsDataURL(file);
			}
		}
	}
}
</script>

<style scoped>
input {
	height: 2vh;
	font-size: 1.5vh;
	color: #999;
	padding: 1vh;
	margin: 1vh;
}
</style>