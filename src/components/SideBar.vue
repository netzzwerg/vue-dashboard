<template>
  <div class="side-bar">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/info">Info</router-link>
    </header>
    <nav-list>
      <nav-item></nav-item>
      <nav-item></nav-item>
      <nav-item></nav-item>
      <nav-item></nav-item>
      <nav-item></nav-item>
    </nav-list>
  </div>
</template>

<script>
import NavList from '../components/NavList.vue'
import NavItem from '../components/NavItem.vue'

export default {
  name: 'sidebar',
  components: { NavList, NavItem }
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
