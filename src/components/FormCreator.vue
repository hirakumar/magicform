<template>
	<div><button @click="creatContainer">Create New Container</button></div>
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
<style lang="scss">
form{


.container{
border:dashed 5px gray;
margin:10px 0;
}
.container .row{
	border:dashed 1px pink;
}
.container .row {
	.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{
		border:dashed 1px brown;
		padding:5px;
	}
}

}
	</style>
