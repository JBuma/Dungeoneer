<template>
  <div id="app">
    <mainHeader></mainHeader>
    <!-- <div class="content"> -->
      <router-view id='main-view'/>
    <!-- </div> -->
    
  </div>
</template>

<script>
import mainHeader from './components/ui/header.vue';
export default {
	name: 'App',
	components: {
		mainHeader: mainHeader,
	},
};
</script>

<style lang='scss'>
#app {
	font-family: 'Inter-UI';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 18px;

	height: 100vh;
	background: linear-gradient(140deg, rgb(255, 154, 38), rgb(255, 166, 0));
}

#main-view {
	padding-top: 25px;
}

section > .content {
	max-width: 80%;
	margin: 0 auto;
}

button {
	border-style: none;
	font-family: 'Inter-UI';

	padding: 10px 20px;
	border-radius: 10px;

	&.primary {
		background-color: #db5c07;
		color: white;
	}

	&.accent {
		background-color: rgb(33, 88, 206);
		color: white;
	}
}
</style>
