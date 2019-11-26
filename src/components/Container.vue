<template>
  <b-container :data-eno="data.eno" :fluid="data.fluid"  :tag="data.tag" >
     
      <app-infoele :data="data"></app-infoele>
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
   
  },
  methods:{
    clickCol : function(event){
      event.currentTarget.classList.add('active');
      this.$store.commit('setEditMode',true);
      this.$store.commit('setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
</script>
<style>


</style>
