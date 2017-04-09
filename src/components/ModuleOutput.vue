<template>
  <div class="module">
    <h4 class="counter">{{ counter }}</h4>
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
  text-align: center;
}
</style>
