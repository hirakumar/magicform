<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary" fixed >
      <b-navbar-brand>MAGIC FORM</b-navbar-brand>
       <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item  @click="goFormBuilder" >Form Builder</b-nav-item>
        <b-nav-item  @click="goGenerator" >Generator</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
       
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  
    <router-view/>
    
  </div>
</template>
<script>
export default {
  name :'App',
  computed:{
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },
      set(val){         
         return this.$store.commit('setEditMode',val);        
      }
    },
  },
  methods:{
    goGenerator:function(){
      this.$router.push('/generator');
      this.$store.commit('setEditMode',false);
    },
    goFormBuilder:function(){
      this.$router.push('/about');
      
    }
  },
  components:{
   
  }

}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
