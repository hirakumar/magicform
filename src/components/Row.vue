<template>
  <b-row :tag="data.tag" :no-gutters="data.no_gutters" :align-v="data.align_v" :align-h="data.align_h" :align-content="data.align_content">
    <app-infoele :data="data"></app-infoele>
  	<app-col :data="col" v-for="col in cols" :key="col.id" :data-id="col.id" />
  </b-row>  
</template>

<script>

import Cols from '@/components/Cols.vue'
import InfoEle from '@/components/InfoEle.vue'
export default {
  name: 'row',
   props:{
  	data:Object
  },
  components:{
  	'app-col' : Cols,
    'app-infoele' : InfoEle
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
