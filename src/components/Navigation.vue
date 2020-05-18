<template> 
 <div id="navigation">
  <b-navbar toggleable="lg" type="light" variant="transparent">
  
   <b-container>
    <b-navbar-brand class="logo">
        <router-link to="/" class="nav-link" style="color: white; margin-top: -5px;"></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav class="mr-auto" style="margin-left: 22%; margin-top: -2px;">
       
        <b-nav-item>
            <router-link to="/Menu"  class="nav-link"  style="color: black;">Menu</router-link>
        </b-nav-item>
        
        <b-nav-item>
            <router-link to="/Information"  class="nav-link" style="color: black;">Information de livraison</router-link>
        </b-nav-item>
                
        <b-nav-item>
            <router-link to="/Creation"  class="nav-link" style="color: black;">Crée ta pizza</router-link>
        </b-nav-item>
        
      </b-navbar-nav>
          
      <b-navbar-nav class="ml-auto">
                          
      <div class="dropdown" style="margin-top: 7px;">
          <button class="btn btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color: #7dbfa1; color: white; font-size: 12px;">
            CONNEXION
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="margin-top: -8px;">
                    <b-nav-item class="dealer">  
                    <router-link to="/Login"  class="nav-link" style="color: black;"><font-awesome-icon icon="user"/> Log-In</router-link>
                    </b-nav-item>  
                   <b-nav-item  class="dealer">  
                    <router-link to="/Signup"  class="nav-link" style="color: black;"><font-awesome-icon icon="user"/> Sign-Up</router-link>
                    </b-nav-item>
          </div>
        </div>         
                  
        <b-nav-item>
            <router-link to="/Panier"  class="nav-link" style="color: black; margin-top: -2px;"><font-awesome-icon icon="shopping-cart" />   Panier</router-link>
                        
        </b-nav-item>
        
      </b-navbar-nav>
      

    </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    #navigation {
        margin-top: -60px;
        padding-bottom: 30px;
    }   
        
    .nav-link {
        font-size: 12px;
        text-transform: uppercase;
    }
        
    .dealer:hover {
        background-color: #c1e0d2;
    }
    
    .logo {
        width: 127px;
        height: 36px;
        background-image: url(../assets/foodoo.png);
    }
        
</style>
