<template>
  <div class="home">
    <side-bar></side-bar>
    <div class="container">
      <header></header>
      <div class="content">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
  name: 'home',
  components: { SideBar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-left: 260px;
}

.container header {
  background-color: #f8f8f8;
  height: 120px;
}

.container .content {
  padding: 20px;
}
</style>
