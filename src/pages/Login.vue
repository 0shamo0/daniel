<template>
<div id="content">
      <h1>LOG-IN</h1>
<div class="container">   
   <div class="card" style="max-width: 40rem; margin: auto; padding: 5px; padding-top: 30px;">
      <img src="../assets/3333447.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">LoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLogin.</p>
        
        <form> 
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3">
            </div>
          </div>      
              <b-button ype="submit" variant="success">Se connecter</b-button>
        </form>
          <p>Vous n'avez pas de compte? Eh ben va te faire foutre!!</p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
    name: 'login',
    date() {
        return {};
    },
    methods: {
      login: function() {
          this.$router.replace('accueil');
      }
    }
}
</script>



<style scoped>    
    h1 {
        padding-top: 100px;
        margin-top: -72px;
        padding-bottom: 30px;
    }
    
</style>
