<template>
  
	<b-col 
		:offset = "data.offset" 
		:offset-sm = "data['offset-sm']"
		:offset-md = "data['offset-md']"
		:offset-lg = "data['offset-lg']"
		:offset-xl = "data['offset-xl']"
		:order = "data.order"
		:order-sm = "data['order-sm']"
		:order-md = "data['order-md']"
		:order-lg = "data['order-lg']"
		:order-xl = "data['order-xl']"
		:cols = "data.cols"
		:id = "data.id"
		:align-self = "data['align-self']"
		:tag = "data.tag"
		:class= "data.class"
		:sm = "data.sm"
		:md = "data.md"
		:lg = "data.lg"
		:xl = "data.xl"
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
			  return this.$store.getters['formBuilder/getChilds'](this.colID);
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

