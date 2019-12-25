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

.configBlock{ position:absolute; width:350px ; right:15px; top:80px; z-index:99;
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
.toolsEle{position:absolute; left: 10px; top: 114px;}

.showEditor{

.rowHolder,.eleHolder{
		min-height:16px;
		width:100%;
	}

.buttonGroup,.formEle{
				border:dashed 1px gray;
}
.formGroupBlock,.btnEle,.divEle,.rowHolder{position:relative;
	.orderBtn{position:absolute; top:0px; right:0px; z-index:99}
}
.eleinfo{
		padding: 0px;
		font-size: 10px;
		line-height: 12px;
		border-radius: 0px; 
		position:relative; 
		top:-6px; 
		left:0px;
		background:#ccc;
		border:#ccc;
		color:#fff;
		text-decoration:none;
		&:after{
			content:'';
			display:block;
			width:100%;
			height:1px;
		}
		.ele,.eno,.eno_class,.eno_id,span{
			display: inline-block;
			min-width: 15px;
			min-height: 13px;			
			text-align: center;	
			padding-left:2px;
			padding-right:2px;	
			color:#fff;	
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

