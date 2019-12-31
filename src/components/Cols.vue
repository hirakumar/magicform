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
	<b-button-group class="orderBtn">
		<b-link size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-link>
		<b-link size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-link>
		<b-link size="sm" @click="remove" v-if="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-link>
	</b-button-group>
	<app-infoele :data="data" @click ="clickCol" v-if="isEditMode"></app-infoele>
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
  			return this.data.eno;
  		},	
  		set(val){
  			return val;
  		}
	},
	isEditMode:{
      get(){
        return this.$store.getters['formBuilder/isEditMode'];
      },      
    },
    hasChild:{
        get(){
            if(this.data != undefined){
                
                return this.$store.getters['formBuilder/hasChild'](this.data.eno);
            }
            
        }
    },
    myChilds:{
      get(){
        if(this.data != undefined){
          return this.$store.getters['formBuilder/getChilds'](this.data.eno)
        }
      }
    },
	device :{
            get(){
                return this.$store.getters['formBuilder/getDeviceObj'];
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
		  this.orderBtn=true;
		  this.$store.commit('formBuilder/changeEle',id);
		  this.$el.classList.add('hoverEle');
	  },
	  hoverOut :  function(){
		  this.orderBtn=false;
		   this.$el.classList.remove('hoverEle');
	  },
	  clickCol : function(event){
		  event.currentTarget.classList.add('active');
		  this.$store.commit('formBuilder/setEditMode',true);
		  this.$store.commit('formBuilder/setActiveEno',this.data.eno);
			event.preventDefault();
			event.stopPropagation();
	  }
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
