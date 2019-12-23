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
		
		
    >

	<app-infoele :data="data" @click ="clickCol" v-if="isEditMode"></app-infoele>

	<app-elements v-for="child in childs" :key="child.eno" :data="child" :parentID="colID" />
    </b-col>
  
</template>

<script>
// @ is an alias to /src

import Elements from '@/components/Elements.vue'
import InfoEle from '@/components/InfoEle.vue'
export default {
  name: 'cols',
  props:{
  	data:Object
  },
  computed: {
  	colID : { 
  		get(){
  			return this.data.eno;
  		},	
  		set(val){
  			return val;
  		}
	  },
	  childs:{
		  get(){
			  return this.$store.getters.getChilds(this.colID);
		  }
	  },
	isEditMode:{
		get(){
			return this.$store.getters.isEditMode;
		},      
	},
	
	device :{
            get(){
                return this.$store.getters.getDeviceObj;
            }
		}, 
	mycols:{
		get(){
			
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
		},	
	},
	myoffset:{
		get(){
			
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
		},
	},
	myorder:{
		get(){
			
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
		},
	}
   
	
  },
  methods:{
	 hoverOn: function(id) {
		  
		  this.$store.commit('changeEle',id);
		  this.$el.classList.add('hoverEle');
	  },
	  hoverOut :  function(){
		   this.$el.classList.remove('hoverEle');
	  },
	  clickCol : function(event){
		  event.currentTarget.classList.add('active');
		  this.$store.commit('setEditMode',true);
		  this.$store.commit('setActiveEno',this.data.eno);
       event.preventDefault();
      event.stopPropagation();
	  }
  },
  components:{
	'app-elements' : Elements,
    'app-infoele' : InfoEle
  }
}
</script>
<style scoped>
.hoverEle,.active{
	background : rgba(37, 155, 37,0.2)
}
</style>
