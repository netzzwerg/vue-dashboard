<template>
    <ul class="nav-list">
      <slot></slot>
    </ul>
</template>

<script>
export default {
  name: 'navlist'
}
</script>

<style scoped>
li {
  color: #000;
  background-color: #42b983;
  padding: 20px 40px;
  margin: 20px 20px;
  text-transform: uppercase;
  border-radius: 2px;
}
</style>
