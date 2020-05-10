<template>
  <div id="app">
   <Navigation/>
   <router-view></router-view>
   <HelloWorld/>
   <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'  
import HelloWorld from './components/HelloWorld.vue' 

export default {
  name: 'App',
  components: {
    Navigation,
    HelloWorld,
    Footer
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
    color: white;        
}

.lorem {
    text-align: justify;    
}
    
.my_card {
    margin-bottom: 50px;
}
    
</style>
