<template>
  <div id="app">
    <!-- Construct top navbar -->
	<header class="navbar navshadow" style="padding: 1rem;" >
		<!-- Logo on the left -->
		<div class="navbar-primary">
			<a href="#" class="navbar-brand"><span class="text-large">vuex firestore app</span></a>
		</div>
		<!-- Supporting links on on the right -->
		<div class="navbar-section">
	   <a href="/" class="btn btn-link">Home</a>
    <a href="/about" class="btn btn-link">About</a>
     <a href="/todo" class="btn btn-link">To Do</a>
     <a href="https://picturepan2.github.io/spectre/getting-started.html" class="btn btn-link">Docs</a>
    <a href="https://github.com/picturepan2/spectre" class="btn btn-link">GitHub</a>
  	</div>
	</header>


     <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Make the navbar taller, and high contrast. */



		/* Add padding to the right side of navbar. */
		.navbar-section { padding-right: 2rem;}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
