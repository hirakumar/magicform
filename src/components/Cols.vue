<template>
	<b-col 
    	:offset = "myoffset" 
    	:order = "myorder" 
    	:cols = "mycols"
		:data-eno = "data.eno"
		:id = "data.id"
		:align-self = "data['align-self']"
		:tag = "data.tag"
		:class= "data.class"
		@mouseenter="mouseEnter"
		@mouseleave="mouseLeave"
    > 
	   <template  v-if="isEditMode">
      <app-infoele :data="data" ref="infoele"  v-if="isEditMode"></app-infoele>
    </template>
	<app-elements v-for="child in myChilds" :key="child.eno" :data="child" :parentID="colID" /> 
	
    </b-col>  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'cols',
  props:{
  	data:Object
  },
  data:function(){
	  return {
		   orderBtn: false
	  }
  },
  computed: {
  	colID : { 
  		get(){
			try{
			  	return this.data.eno;
			}catch(error){
					console.log("Error on get colID :", error)
			}
  		},	
  		set(val){
			try{
				return val;
			}catch(error){
				console.log("Error on set colID :", error)
			}
  		}
	},
	 isfirstOrder:{
      get(){
        return this.$store.getters['formBuilder/isFirstOrder'](this.data.eno);
      }
    },
    isLastOrder:{
      get(){
        return this.$store.getters['formBuilder/isLastOrder'](this.data.eno);
      }
    },
    
	isEditMode:{
    	get(){
			try{
				return this.$store.getters['formBuilder/isEditMode'];
			}catch(error){
				console.log("Error on get isEditMode :", error)
			}
      }      
    },
    hasChild:{
        get(){
			try{
            	if(this.data != undefined){
					return this.$store.getters['formBuilder/hasChild'](this.data.eno);
				}
            }catch(error){
				console.log("Error on get hasChild :", error)
			}
        }
    },
    myChilds:{
      get(){
		  	try{
        		if(this.data != undefined){
          			return this.$store.getters['formBuilder/getChilds'](this.data.eno)
				}
			}catch(error){
				console.log("Error on myChilds :", error)
			}
      }
    },
	device :{
            get(){
				try{
					return this.$store.getters['formBuilder/getDeviceObj'];
				}catch(error){
					console.log("Error on device :", error)
				}
            }
		}, 
	mycols:{
		get(){
			try{
				if(this.device !=undefined){
					if(this.device.width>=1200){
						return this.data.xl;
					}else if(this.device.width>=992){
						return this.data.lg;
					}else if(this.device.width>=768){
						return this.data.md;
					} else if(this.device.width>=576){
						return this.data.sm;
					}else if(this.device.width<576){
						return this.data.cols
					}
				}else{
					return this.data.cols
				}
			
			}catch(error){
				console.log("Error on mycols :", error)
			}
			
		},	
	},
	myoffset:{
		get(){
			try{
				if(this.device !=undefined){
					if(this.device.width>=1200){
						return this.data['offset-xl'];
					}else if(this.device.width>=992){
						return this.data['offset-lg'];
					}else if(this.device.width>=768){
						return this.data['offset-md'];
					} else if(this.device.width>=576){
						return this.data['offset-sm'];
					}else if(this.device.width<576){
						return this.data.offset
					}
				}else{
					return this.data.offset
				}
			}catch(error){
				console.log("Error on myoffset :", error);
			}
		
		},
	},
	myorder:{
		get(){
			try{
				if(this.device !=undefined){
					if(this.device.width>=1200){
					return this.data['order-xl'];
					}else if(this.device.width>=992){
						return this.data['order-lg'];
					}else if(this.device.width>=768){
						return this.data['order-md'];
					} else if(this.device.width>=576){
						return this.data['order-sm'];
					}else if(this.device.width<576){
						return this.data.order
					}
				}else{
					return this.data.order
				}
				
			}catch(error) {  
				console.log("Error on myorder:", error); 
			}
		
		},
	}
   
	
  },
  methods:{

    mouseEnter: function() {
		try{
			 if(this.isEditMode){
      		this.orderBtn=true;
     		this.$refs.infoele.setOrder(true);
			  this.$store.commit('formBuilder/changeEle',this.data.id);
			 }
		}catch(error){
			 console.log("Error on hoverOn :", error);
		}
		  
	  },
	  mouseLeave :  function(){
		  try{
			   if(this.isEditMode){
			this.orderBtn=false;
			this.$refs.infoele.setOrder(false);
			   }
		 }catch(error){
			 console.log("Error on hoverOut :", error);
		 }

    },
	  clickCol : function(event){
		try{
			event.currentTarget.classList.add('active');
			this.$store.commit('formBuilder/setEditMode',true);
			this.$store.commit('formBuilder/setActiveEno',this.data.eno);
			event.preventDefault();
			event.stopPropagation();
		 }catch(error){
			 console.log("Error on clickCol :", error);
		 }
	  },
	   remove: function() {
		try{
			this.$store.dispatch("formBuilder/removeObj",this.data);
		 }catch(error){
			 console.log("Error on clickCol :", error);
		 }
		},
		setOrderUp : function(event){
      try{
        
        this.$store.dispatch('formBuilder/setOrder',{activeEno:this.data.eno,action:'up'})
      }catch(error){
        console.log("Error on setOrderUp", error);
      }
    },
    setOrderDown : function(event){
      try{
        
        this.$store.dispatch('formBuilder/setOrder',{activeEno:this.data.eno,action:'down'})
      }catch(error){
        console.log("Error on setOrderDown", error);
      }
    },
  },
  components:{
 	'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue'),
  }
}
</script>
<style scoped>
.hoverEle,.active{
	background : rgba(37, 155, 37,0.2)
}
</style>
