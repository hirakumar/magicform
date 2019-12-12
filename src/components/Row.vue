<template>
  <b-row 
      :class="data.class"
      :id="data.id"
      :tag="data.tag"
      :name="data.id"
      :no-gutters="data['no-gutters']" 
      :align-v="data['align-v']" 
      :align-h="data['align-h']" 
      :align-content="data['align-content']">
    <div class="rowHolder" v-if="isEditMode"><app-infoele :data="data"></app-infoele></div>
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
    },
    isEditMode:{
		get(){
			return this.$store.getters.isEditMode;
		},      
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
