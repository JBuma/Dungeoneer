<template>
  <header id="main-header">
	  <div @click='navTo({name:"Home"})' class="menu-item logo">
		  LOGO
	  </div>
	  <ul class="menu">
		  <li @click='navTo({name:"Tracker"})' class="menu-item link">Tracker</li>
		  <li @click='navTo({name:"Settings"})' class="menu-item link">Settings</li>
	  </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss'>
#main-header {
	background-color: #222;
	color: white;

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;

	& > * {
		// padding: 12px;
		margin: 0;
	}
	.menu-item {
		padding: 16px;

		&.link:hover,
		&.logo:hover {
			background-color: #444;
			cursor: pointer;
		}
	}

	ul.menu {
		padding: 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;

		list-style: none;
	}
}
</style>
