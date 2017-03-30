<template>
  <div id="m1" class="module">
    <div>counter: 
      <span class="counter">{{ counter }}</span>
    </div>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'moduleInput',
  computed: {
    counter () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
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
