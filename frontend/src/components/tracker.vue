<template>
  <section id="tracker">
	<div class="content">
		<card class='tracker'>
			<h1 slot='card-title' class='title'>Hello i am trackserino</h1>
			<div slot='card-text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque rerum aliquid impedit nesciunt velit, nemo, inventore officiis voluptatum perferendis quia quam animi autem distinctio doloremque eos! Placeat, architecto maxime?</p>
			<button class='primary' @click='addChar'>Add more</button>
			<button class='accent' @click='removeChar'>DEELTER</button>
			<button class="accent" @click="changeMode" >Change Mode</button>
			<button class="accent" v-if="!rolled" @click='rollInitiative' >Roll Initiative</button>
			</div>
			
			<div class='characters' slot="card-content">
				<char v-for="char in chars" :key="char.id" :initialName='char.name' :rolled="rolled" :info="char" v-on:unfocus='sortInitiative' />
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
			chars: [
				{
					name: 'Character 1',
					id: 1,
					dex: 0,
					init: 0,
				},
			],
			rolled: false,
		};
	},
	components: {
		card: card,
		char: char,
	},
	methods: {
		addChar: function() {
			this.chars.push({
				name: 'Character ' + (this.chars.length + 1),
				id: Math.floor(Math.random() * 10000),
				dex: 0,
				init: 0,
			});
		},
		removeChar: function() {
			this.chars.shift();
		},
		changeMode: function() {
			this.rolled = !this.rolled;
		},
		rollInitiative: function() {
			this.chars.forEach(char => {
				char.init = Math.floor(Math.random() * 20) + parseInt(char.dex);
			});

			this.changeMode();
			this.sortInitiative();
		},
		sortInitiative: function() {
			this.chars.sort((a, b) => {
				return a.init - b.init;
			});
		},
	},
};
</script>

<style lang='scss'>
.tracker .characters {
	max-height: 60vh;
	overflow-y: auto;
}

$color: #d63215;

.characters div.char:first-of-type {
	border-radius: 0.75em 0.75em 0 0;
}

@for $i from 1 to 10 {
	.characters > div:nth-child(#{$i}) {
		background: darken($color: #ff4500, $amount: $i*4);
	}
}
.characters div:nth-child(9) {
	border-radius: 0 0 0.75em 0.75em;
}

.characters div.char:last-of-type {
	border-radius: 0 0 0.75em 0.75em;
}
</style>
