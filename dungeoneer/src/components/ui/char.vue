<template>
  <div class="char">
	  <h1 @click='changeName(true)' v-if="!isEditing">
		{{name}}
	  </h1>
	  <input @keyup.enter='changeName(false)' ref="nameInput" @blur='changeName(false)' v-if="isEditing" type="text" v-model="name" v-bind:autofocus="isEditing">
	  
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
				console.log(this.$refs.initialName);
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

	& > * {
		padding: 8px 16px;
		margin: 0;
	}
}
</style>
