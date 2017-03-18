<template>
  <div class="side-bar">
    <header>

    </header>
    <nav-list>
      <router-link to="/info" tag="li">Info</router-link>
      <router-link to="/" tag="li">Home</router-link>
    </nav-list>
  </div>
</template>

<script>
import NavList from '../components/NavList.vue'

export default {
  name: 'sidebar',
  components: { NavList }
}
</script>

<style scoped>
.side-bar {
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  overflow-x: hidden;
  overflow-y: auto;
}
header {
  background-color: #42b983;
  height: 120px;
}
</style>
