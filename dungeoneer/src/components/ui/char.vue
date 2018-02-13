<template>
  <div class="char">
	  <div>
<h1 class='name' @click='changeName(true)' v-if="!isEditing">
		{{name}}
	  </h1>
	  <input @keyup.enter='changeName(false)' ref="nameInput" class='name name-input' @blur='changeName(false)' v-if="isEditing" type="text" v-model="name" v-bind:autofocus="isEditing">
	  </div>
	  
  </div>
</template>

<script>
export default {
	props: ['initialName'],
	data() {
		return {
			name: this.initialName,
			isEditing: false,
		};
	},
	methods: {
		changeName: function(b) {
			this.isEditing = b;
			if (this.isEditing === true) {
				// window.Vue = Vue;
				Vue.nextTick(()=>{
					this.$refs.nameInput.focus();
					console.log(this.$refs.nameInput);
				})
			}
		},
	},
};
</script>

<style lang='scss'>
.char {
	width: 100%;
	color: white;
	background-color: #2a2e38;

	h1{
		margin:0;
	}

	& > * {
		// padding: 8px 16px;
		// margin: 0;
	}
	& > div{
		padding:8px;
	}
}
.char input.name-input{
	border-style:none;
	background-color:rgba(0,0,0,0);
	color:white;
	font-weight:bold;
	font-size:1.5em;
	font-family:'Inter-UI';

	
	border-bottom:2px solid white;
	// border-radius:50px;
}
.char .name{
	max-width:30%;
	margin-left:25px;
}
</style>
