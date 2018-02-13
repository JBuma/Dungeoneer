<template>
  <div class="char">
	  <div class="drag">
		  +
	  </div>
      <div class='name'>
        <input ref="nameInput" class='name-input' type="text"
          v-model="data.name" >
      </div>
	  <div class="dex" v-if="!rolled">
		  <label for="dexInput">dex(initiative):</label>
		  <input name='dexInput' ref="dexInput" class='dex-input' type="number"
          v-model="data.dex">
	  </div>
	  <div v-if="rolled" class="init">
		  <label for="initInput">init:</label>
		  <input name='initInput' ref="initInput" class='init-input' type="number" v-model="data.init" @blur="unfocus">
	  </div>
  </div>
</template>

<script>
export default {
	props: ['rolled', 'info'],

	data() {
		return {
			name: this.initialName,
			data: this.info,
		};
	},

	methods: {
		unfocus:function(){
			this.$emit('unfocus');
		}
	},
	mounted: function() {
		this.$refs.nameInput.focus();
	},
};
</script>

<style lang='scss'>
.char {
	width: 100%;
	color: white;
	background-color: #2a2e38;
	padding: 16px 0;

	display: flex;
	flex-flow: row wrap;
}

input {
	box-sizing: border-box;
	border-style: none;
	background-color: rgba(0, 0, 0, 0);
	// margin-left: -12px;
	color: white;
	font-weight: normal;
	font-family: 'Inter-UI';
	font-size: 1.25em;
	padding: 8px 5%;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		border-style: none;
		border: 1px solid #ddd;
		background-color: white;
		border-radius: 20px;
		color: #222;

		&:hover {
			cursor: text;
		}
	}
}
</style>
