<template>
  <div class="char">
	  <div>
		  <slot></slot>
	  </div>
	  
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
div.char {
	width: 100%;
	color: white;
	background-color: orangered;

	& > * {
		padding: 8px 16px;
	}
}
</style>
