<template>
  <div class="module">
    <div>counter: 
      <span class="counter">{{ counter }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moduleOutput',
  computed: {
    counter () {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>
.module {
  font-size: 24px;
  background-color: #42b983;
  border-radius: 2px;
  color: #FFF;
  float: left;
  padding: 10px;
  margin: 10px;
  position: relative;
  width: 25%;
  min-height: 100px;
}
</style>
