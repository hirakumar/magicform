<template>
  <b-row 
      :class="data.class"
      :id="data.id"
      :tag="data.tag"
      :name="data.id"
      :no-gutters="data['no-gutters']" 
      :align-v="data['align-v']" 
      :align-h="data['align-h']" 
      :align-content="data['align-content']"      
      >
  	<app-col :data="col" v-for="col in cols" :key="col.id" :data-id="col.id" />
  </b-row>  
</template>

<script>

export default {
  name: 'row',
   props:{
  	data:Object
  },
  components:{  	
     'app-col' : () => import('@/components/generator/Cols.vue')
  },
  data:function(){
    return {
    
    }
  },
  computed:{
    
  	cols:{
  		get(){
  			return this.$store.getters['formBuilder/getCols'](this.data.eno);
  		},
  		set(val){
  			return val;
  		}
    },
   
  },
    methods:{
   
  }
}
</script>
