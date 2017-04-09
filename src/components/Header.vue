<template>
  <header class="app-header navbar">
    <ul class="nav navbar-nav">
      <li class="nav-item px-1">
        <router-link to="/" class="nav-link" tag="a">Dashboard</router-link>
      </li>
      <li class="nav-item px-1">
        <a class="nav-link" href="#">Components</a>
      </li>
      <li class="nav-item px-1">
        <router-link to="/info" class="nav-link" tag="a">Info</router-link>
      </li>
    </ul>
  </header>
</template>
<script>

export default {
  name: 'header',
  components: {
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>

<style lang="css">

</style>
