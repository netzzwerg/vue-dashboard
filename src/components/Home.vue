<template>
    <div class="content">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-block">
              <module-input></module-input>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-block">
              <module-output></module-output>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-block">
              <module-input></module-input>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-block">
              <module-output></module-output>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import ModuleInput from '../components/ModuleInput.vue'
import ModuleOutput from '../components/ModuleOutput.vue'

export default {
  name: 'home',
  components: {
    ModuleInput,
    ModuleOutput
  },
  data () {
    return {
      msg: 'Home Page'
    }
  }
}
</script>

<style scoped>

</style>
