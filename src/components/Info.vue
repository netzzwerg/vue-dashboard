<template>
  <div>
    <header>
      <h1>{{msg}}</h1>
    </header>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: 'Info Page'
    }
  }
}
</script>


<style scoped>
header h1 {
  padding-top: 20px;
}
.container .content {
  padding: 20px;
}
</style>
