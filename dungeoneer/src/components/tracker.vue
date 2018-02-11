<template>
  <section id="tracker">
	<div class="content">
		


		<card>
			<h1 slot='card-title' class='title'>Hello i am trackserino</h1>
			<p slot='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque rerum aliquid impedit nesciunt velit, nemo, inventore officiis voluptatum perferendis quia quam animi autem distinctio doloremque eos! Placeat, architecto maxime?</p>
			<div slot="card-content">
				<char v-for="char in chars" :key="char">{{char}}</char>
			</div>
		</card>
	</div>
  </section>
</template>

<script>
import card from './ui/card.vue';
import char from './ui/char.vue';
export default {
	data() {
		return {
			chars: ['blah', 'blah', 'blah', 'blah', 'blah'],
		};
	},
	components: {
		card: card,
		char: char,
	},
};
</script>

<style lang='scss'>
#tracker {
	background: linear-gradient(45deg, rgb(207, 105, 9), rgb(255, 217, 0));
	height: 100vh;
	padding-top: 25px;
}
</style>
