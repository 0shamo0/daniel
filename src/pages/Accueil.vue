<template>
  <div id="App">
      <Jumbotron/>        
      <Gon/>
      <Kilua/>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue'
import Gon from '../pages/Gon.vue'
import Kilua from '../pages/Kilua.vue'

export default {
  name: 'App',
  components: {
    Jumbotron,
    Gon,
    Kilua
  }
}
</script>

<style scoped>
    h1 {
        background-color: darkseagreen;
        margin-top: -32px;
    }
        
</style>
