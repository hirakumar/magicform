<template>
  <b-container :data-eno="data.eno" :fluid="data.fluid"  :tag="data.tag" :id="data.id" :class="data.class" >
     <app-infoele :data="data" v-if="isEditMode"></app-infoele>
  		<app-row :data="row" v-for="row in rows" :key="row.eno"  :data-eno="row.eno" />
 </b-container>
</template>

<script>
// @ is an alias to /src
import Row from '@/components/Row.vue'
import InfoEle from '@/components/InfoEle.vue'

export default {
  name: 'container',
  props:{
  	data:Object
  }, 
  components:{
  	'app-row' : Row,
    'app-infoele' : InfoEle
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
    isEditMode:{
		get(){
			return this.$store.getters.isEditMode;
		},      
    },
   
  },
  methods:{
  
  }
}
</script>
<style>


</style>
