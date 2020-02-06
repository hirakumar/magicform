<template>
	

	<b-button @click="creatForm" size="lg" >Create Form</b-button>
	
</template>
<script>

export default {
 name: 'FormCreator',
  props:{
  	data:Object
  },
  created(){
  
  },
  computed:{    
    hasContainer:{
    	get(){
    		return this.$store.getters['formBuilder/hasContainer'];
    	}
    }
  
  },
  methods:{
  	creatContainer : function(){
  		this.$store.dispatch('formBuilder/createEle',{ele:'container'});
	  },
	creatForm : function(){
  		 this.$store.dispatch('formBuilder/createEle',{ele :'form'});
  	}
  },
  components:{
    
  }
}
</script>


