<template>
  <div class="module">
    <h4 class="counter">{{ counter }}</h4>
    <button v-on:click="increment" class="btn btn-secondary">+</button>
    <button v-on:click="decrement" class="btn btn-secondary">-</button>
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
  text-align: center;
}
</style>
