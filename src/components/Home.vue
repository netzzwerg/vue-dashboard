<template>
  <div>
    <header>
      <h1>{{msg}}</h1>
    </header>
    <div class="content">
      <module-input></module-input>
      <module-output></module-output>
    </div>
  </div>
</template>

<script>
import ModuleInput from '../components/ModuleInput.vue'
import ModuleOutput from '../components/ModuleOutput.vue'

export default {
  name: 'home',
  components: { ModuleInput, ModuleOutput },
  data () {
    return {
      msg: 'Home Page'
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
