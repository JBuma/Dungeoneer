<template>
  <section id="tracker">
	<div class="content">
		


		<card class='tracker'>
			<h1 slot='card-title' class='title'>Hello i am trackserino</h1>
			<div slot='card-text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque rerum aliquid impedit nesciunt velit, nemo, inventore officiis voluptatum perferendis quia quam animi autem distinctio doloremque eos! Placeat, architecto maxime?</p>
			<button @click='addChar'>Add more</button>
			<button @click='removeChar'>DEELTER</button>
			</div>
			
			<div class='characters' slot="card-content">
				<char v-for="char in chars" :key="char" :initialName='char'/>
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
			chars: ['firstName', 'second', 'bash', 'bheahashh'],
		};
	},
	components: {
		card: card,
		char: char,
	},
	methods: {
		addChar: function() {
			this.chars.push('empty');
		},
		removeChar: function(){
			this.chars.shift();
		}
	},
};
</script>

<style lang='scss'>
$color: #ff4500;

.characters div.char:first-of-type {
	border-radius: 0.75em 0.75em 0 0;
}

@for $i from 1 to 10 {
	.characters div:nth-child(#{$i}) {
		background: darken($color: #ff4500, $amount: $i*4);
	}
}
.characters div:nth-child(9) {
	border-radius: 0 0 0.75em 0.75em;
}

.characters div.char:last-of-type {
	border-radius: 0 0 0.75em 0.75em;
}
.char:hover {
}
</style>
