<template>
  <div class="card">
	  <div class="title">
		  <slot name='card-title'></slot>
	  </div>
	  <div class="top-text">
		  <slot name='card-text'></slot>
	  </div>
	  <div class="content">
		  <slot name='card-content'></slot>
	  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div.card {
	background-color: #222;
	border-radius: 0.75em;
	color: white;

	box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.4);

	.title {
		background-color: #000;
		border-radius: 0.75em 0.75em 0 0;
		padding: 1px 0.75em;
	}
	.top-text {
		padding: 0.75em;
	}
}
</style>
