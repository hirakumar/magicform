<template>
  <b-row>
  	<app-col :data="col" v-for="col in cols" :key="col.id" :data-id="col.id" />
  </b-row>  
</template>

<script>

import Cols from '@/components/Cols.vue'

export default {
  name: 'row',
   props:{
  	data:Object
  },
  components:{
  	'app-col' : Cols
  },
  computed:{
  	cols:{
  		get(){
  			return this.$store.getters.getCols(this.data.eno);
  		},
  		set(val){
  			return val;
  		}
  	}
  }
}
</script>
