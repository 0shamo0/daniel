<template>
  <div id="app">
   <Navigation/>
   <router-view></router-view>
   <Prefooter/>
   <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Prefooter from './components/Prefooter.vue' 
import Footer from './components/Footer.vue'  

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    Prefooter
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    
h1 {
    color: red;        
}

.lorem {
    text-align: justify;    
}
    
.my_card {
    margin-bottom: 50px;
}
    
</style>
