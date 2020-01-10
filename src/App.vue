<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary" fixed >
      <b-navbar-brand>MAGIC FORM</b-navbar-brand>
       <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item"><router-link to="/" tag="a" class="nav-link">Home</router-link></li>
       <li class="nav-item" ><router-link to="/formbuilder" tag="a" class="nav-link">Form Builder</router-link></li>
        <li class="nav-item" @click="goGenerator"><router-link to="/generator" tag="a" class="nav-link">Generator</router-link></li>
      
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
       
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  
    <router-view/>
    
  </div>
</template>
<script>

import formBuilderStore from './store/modules/form-builder'
export default {
  name :'App',
  created(){
     this.$store.registerModule('formBuilder', formBuilderStore)
  },
  computed:{
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },
      set(val){         
         return this.$store.commit('formBuilder/setEditMode',val);        
      }
    },
  },
  methods:{
    goGenerator:function(){
     
      this.$store.commit('formBuilder/setEditMode',false);
    },
   
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
