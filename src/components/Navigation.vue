<template> 
 <div id="navigation">
  <b-navbar toggleable="lg" type="light" variant="transparent">
  
   <b-container>
    <b-navbar-brand class="logo">
        <router-link to="/" class="nav-link" style="color: white; margin-top: -5px;"></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav class="mr-auto" style="margin-left: 22%; margin-top: -4px;">
       
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
       
        <b-nav-item>   
                <b-button variant="success" size="sm" style="margin-top: -4px;">
                    <router-link to="/Connection"  class="nav-link" style="color: white;"><font-awesome-icon icon="user"/>   Connexion</router-link>
                </b-button>
                            
        </b-nav-item>
                
        <b-nav-item>
            <router-link to="/Panier"  class="nav-link" style="color: black;"><font-awesome-icon icon="shopping-cart" />   Panier</router-link>
                        
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
    
    .btn-success {
        background-color: #7dbfa1;
        border-color: #7dbfa1;
        border-radius: 7px;
    }
    
    .btn-success:hover {
        background-color: red;
        color: white;
        border-color: red;
    }
    
    .logo {
        width: 127px;
        height: 36px;
        background-image: url(../assets/foodoo.png);
    }
    
</style>
