<template>
  <b-container :fluid="data.fluid"  :tag="data.tag" :id="data.id" :class="data.class" >
    <app-row :data="row" v-for="row in rows" :key="row.eno"  />
 </b-container>
</template>

<script>

export default {
  name: 'container',
  props:{
  	data:Object
  }, 
  components:{  	
    'app-row' :  () => import('@/components/generator/Row.vue')    
  },
  computed:{
  	rows:{
  		get(){
  			return this.$store.getters.getRows(this.data.eno);
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
