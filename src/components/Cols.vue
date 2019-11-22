<template>
  
    <b-col 
    	:offset = "data.offset" 
    	:offset-sm = "data.offset_sm" 
    	:offset-md = "data.offset_md" 
    	:offset-xl = "data.offset_xl" 
    	:offset-lg = "data.offset_lg"
    	:order = "data.order" 
    	:order-sm = "data.order_sm" 
    	:order-md = "data.order_md" 
    	:order-xl = "data.order_xl" 
    	:order-lg = "data.order_lg"   
    	:cols = "data.cols" 
    	:md = "data.md" 
    	:sm = "data.sm" 
    	:lg ="data.lg" 
    	:xl = "data.xl"
		:data-eno = "data.eno"
		:id = "data.id"
		@mouseenter="hoverOn(data.eno)"
		@mouseleave="hoverOut(data.eno)"
		@click ="clickCol"
    >

	<app-elements v-for="child in childs" :key="child.eno" :data="child" :parentID="colID" />
    </b-col>
  
</template>

<script>
// @ is an alias to /src

import Elements from '@/components/Elements.vue'
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
		  this.$store.commit('setActiveEno',this.data.eno)
	  }
  },
  components:{
	 
	  'app-elements' : Elements
  }
}
</script>
<style scoped>
.hoverEle,.active{
	background : rgba(37, 155, 37,0.2)
}
</style>
