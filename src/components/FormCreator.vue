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




.container,.container-fluid{
	border:dashed 1px #ccc;
	.eleinfo{
		padding: 1px;
		font-size: 10px;
		line-height: 12px;
		border-radius: 0px; 
		position:relative; 
		top:-6px; 
		left:-15px;
		background:#ccc;
		border:#ccc;
	};
	.row{
		border:dashed 1px #999;
		.eleinfo{
			left:0px;
			top:0px;
			height:16px;
			background:#999;
			border:#999;
		}
		.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{
			border:dashed 1px #333;
			.eleinfo{
				left:-15px;
				top:-5px;
				background:#333;
				border:#333;
			}
		}
	}
}

}




	</style>

