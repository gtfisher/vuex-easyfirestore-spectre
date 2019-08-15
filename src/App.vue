<template>
  <div id="app">
    <header class="navbar">
  <section class="navbar-section">
    <a href="..." class="navbar-brand mr-2">Spectre.css</a>
   
  </section>
  <section class="navbar-section">
     <a href="/" class="btn btn-link">Home</a>
    <a href="/about" class="btn btn-link">About</a>
     <a href="/todo" class="btn btn-link">To Do</a>
     <a href="https://picturepan2.github.io/spectre/getting-started.html" class="btn btn-link">Docs</a>
    <a href="https://github.com/picturepan2/spectre" class="btn btn-link">GitHub</a>
    <!-- <div class="input-group input-inline">
      <input class="form-input" type="text" placeholder="search">
      <button class="btn btn-primary input-group-btn">Search</button>
    </div> -->
  </section>
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
