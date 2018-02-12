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
}

#main-view {
	background: linear-gradient(140deg, rgb(255, 154, 38), rgb(255, 166, 0));
	height: 100vh;
	padding-top: 25px;
}

html,
body {
	margin: 0;
	padding: 0;
	font-size: 18px;
}
section > .content {
	max-width: 80%;
	margin: 0 auto;
}
h1.title {
	margin: 0;
	padding-top: 16px;
}
</style>
