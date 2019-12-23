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
       @mouseenter="mouseEnter" @mouseleave="mouseLeave"
      >
    <div class="rowHolder" v-if="isEditMode">
        <app-infoele :data="data"></app-infoele>
         <b-button-group v-if="orderBtn" class="orderBtn">
          <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
          <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
          <b-button size="sm" @click="remove" v-if="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>
        </b-button-group>
    </div>
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
  data:function(){
    return {
     orderBtn: false
    }
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
     isfirstOrder:{
      get(){
        return this.$store.getters.isFirstOrder(this.data.eno);
      }
    },
    isLastOrder:{
      get(){
        return this.$store.getters.isLastOrder(this.data.eno);
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
    },
     mouseEnter:function(){
    // this.$store.commit('changeEle',this.data.eno);
    if(this.isEditMode){
      this.orderBtn=true;
    }
    
    },
   
    mouseLeave:function(){
      this.orderBtn=false;
    },
    increaselevel: function() {
            try {
                this.expandlevel += 1;
            } catch (err) {
                console.log("Error on increaselevel :", err)
            }

        },
        decreaselevel: function() {
            try {
                this.expandlevel -= 1;
            } catch (err) {
                console.log("Error on decreaselevel :", err)
            }
        },
        remove: function() {
            this.$store.dispatch("removeObj");
        },
  }
}
</script>
