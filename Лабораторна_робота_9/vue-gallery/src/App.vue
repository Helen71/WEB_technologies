<template>
  <div id="app">
	<UpImg v-bind:images = images @upload-img = "upImg"/>
    <SetOfImg 
		v-bind:images = "images"
		@delete-image = "deleteImage"
		@fullscreen-image = "fullscreenImage"
    />
  </div>
</template>

<script>
import SetOfImg from '@/components/SetOfImg'
import UpImg from '@/components/UpImg'

export default {
  name: 'App',
  data() {
	return {
		images: [
		{ id: 0, fullscreen: false, prev: false, next: false, src: "Images/pict1.png"},
		{ id: 1, fullscreen: false, prev: false, next: false, src: "Images/pict2.jpg"},
		{ id: 2, fullscreen: false, prev: false, next: false, src: "Images/pict3.jpg"},
		{ id: 3, fullscreen: false, prev: false, next: false, src: "Images/pict4.jpg"},
		{ id: 4, fullscreen: false, prev: false, next: false, src: "Images/pict5.jpg"},
		{ id: 5, fullscreen: false, prev: false, next: false, src: "Images/pict6.jpg"}
		]
	}
},
  methods: {
	fullscreenImage(id) {
		let imgs = this.images;
		for (let i in imgs) {
			if (imgs[i].id === id) {
				if(imgs[i].fullscreen) {
					for (let i in imgs) {
						imgs[i].fullscreen = false;
						imgs[i].prev = false;
						imgs[i].next = false;
					}
				} 
				else {
					for (let i in imgs) {
						imgs[i].fullscreen = false;
						imgs[i].prev = false;
						imgs[i].next = false;
					}

					imgs[i].fullscreen = true;

					if(imgs.length < 2){
						break;
					}
					if(i-1 >= 0) {
						imgs[i-1].prev = true;
					}
					else {
						imgs[imgs.length-1].prev = true;
					}
					if(parseInt(i) + 1 < imgs.length) {
						imgs[parseInt(i) + 1].next = true;
					}
					else {
						imgs[0].next = true;
					}
					break;
				}
			}
		}
	},
	deleteImage(id) {
		this.images = this.images.filter(t => t.id !== id);
	},
	upImg(id){
		this.images.push(id);
	}
  },
  components: {
    SetOfImg,
    UpImg,
  }
}
</script>

<style>
#app {text-align: center;}

body {
	margin: 0;
	min-height: 100vh;
	background: #222;
}
</style>
