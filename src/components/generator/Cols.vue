<template>
  
	<b-col 
		:offset = "data.offset" 
		:order = "data.order"     	
		:cols = "data.cols"
		:data-eno = "data.eno"
		:id = "data.id"
		:align-self = "data['align-self']"
		:tag = "data.tag"
		:class= "data.class"		
	>
		<app-elements v-for="child in childs" :key="child.eno" :data="child" :parentID="colID" />
	</b-col>
  
</template>

<script>

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

  },
  components:{
     'app-elements' :  () => import('@/components/generator/Elements.vue'),
  }
}
</script>

