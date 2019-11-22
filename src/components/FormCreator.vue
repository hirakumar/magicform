<template>
	<div><button v-if="!hasContainer" @click="creatContainer">Create New Container</button></div>
</template>
<script>

export default {
 name: 'FormCreator',
  props:{
  	data:Object
  },
  
  computed:{    
    hasContainer:{
    	get(){
    		return this.$store.getters.hasContainer;
    	}
    }
  
  },
  methods:{
  	creatContainer : function(){
  		this.$store.commit('addContainer');
  	}
  },
  components:{
    
  }
}
</script>