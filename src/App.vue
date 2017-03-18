<template>
  <div id="app">
    <side-bar></side-bar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: { SideBar }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul, li {
  list-style-type: none;
}

ul {
  padding-left: 0px;
}

h1 {
  padding: 0px;
  margin: 0px;
}

.container {
  padding-left: 260px;
}

.container header {
  background-color: #f8f8f8;
  height: 120px;
}

</style>
