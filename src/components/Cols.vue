<template>
  
    <b-col 
    	:offset = "data.offset" 
    	:offset-sm = "data['offset-sm']" 
    	:offset-md = "data['offset-md']" 
    	:offset-xl = "data['offset-xl']" 
    	:offset-lg = "data['offset-lg']"
    	:order = "data.order" 
    	:order-sm = "data['order-sm']" 
    	:order-md = "data['order-md']" 
    	:order-xl = "data['order-xl']" 
    	:order-lg = "data['order-lg']"   
    	:cols = "data.cols" 
    	
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
