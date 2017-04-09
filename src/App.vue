<template>
<div class="app">
  <Header></Header>
  <div class="main">
    <SideBar></SideBar>
    <main>
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
  </div>
  <footer></footer>
</div>
</template>

<script>
import Header from './components/Header'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    Header
  }
}
</script>

<style>



</style>
