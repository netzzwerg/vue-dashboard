<template>
  <div id="m1" class="module">
    <div>counter: 
      <span class="counter">{{ counter }}</span>
    </div>
    <button v-on:click="countUp">+</button>
    <button v-on:click="countDown">-</button>
  </div>
</template>

<script>
export default {
  name: 'moduleInput',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    countUp () {
      this.counter += 1
    },
    countDown () {
      this.counter -= 1
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
  margin-left: 10px;
  position: relative;
  width: 25%;
  min-height: 100px;
}
</style>
