<template>
  <div id="app">
    <mainHeader></mainHeader>
    <!-- <div class="content"> -->
      <router-view/>
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

html,
body {
	margin: 0;
	padding: 0;
}
.content {
	max-width: 80%;
	margin: 0 auto;
}
</style>
