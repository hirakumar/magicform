<template>
	<div>
	<b-button @click="creatContainer">Create New Container</b-button> 
	<b-button @click="creatForm">Create Form</b-button>
	</div>
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
  		this.$store.dispatch('createEle',{ele:'container'});
	  },
	creatForm : function(){
  		 this.$store.dispatch('createEle',{ele :'form'});
  	}
  },
  components:{
    
  }
}
</script>
<style lang="scss">
.configBlock{
	.card-title{text-transform: uppercase; font-size:14px}
	.list-group-item {
		padding:3px 0;
		font-size:12px;
		.form-row{
			legend{
				padding-top:3px;
				padding-bottom:3px;
			}
		}
		
	}
}
.showEditor{
.rowHolder,.eleHolder{
		height:16px;
		width:100%;
	}

.buttonGroup,.formEle{
				border:dashed 1px gray;
}
.eleinfo{
		padding: 1px;
		font-size: 10px;
		line-height: 12px;
		border-radius: 0px; 
		position:relative; 
		top:-5px; 
		left:0px;
		background:#ccc;
		border:#ccc;
		&:after{
			content:'';
			display:block;
			width:100%;
			height:1px;
		}
	}

.buttonGroup,.formGroupBlock{
		position:relative
	}
.container,.container-fluid{
	border:dashed 1px #ccc;
	
	
	
	
	.row{
		border:dashed 1px #999;
		
		.col,.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{
			border:dashed 1px #333;
			min-height:20px;
			.eleinfo{
				left:-15px;
				top:-5px;
				background:#333;
				border:#333;
				position:absolute;
				top:0px;
				left:0px;
			}
			.buttonGroup{
				border:dashed 1px gray;
				.eleinfo{
					left:0px;
				}
			}
		}
	}
}

}



	</style>

