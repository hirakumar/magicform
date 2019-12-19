<template>
<div>
   <b-container  fluid>
      <b-row>
          <b-col>
             <b-form-checkbox v-model="isEditMode" class="float-right" name="check-button" switch></b-form-checkbox>
          </b-col>
      </b-row>
   </b-container>
  <b-container class="about" fluid>
      <b-row>
        <b-col cols="2" >  <app-tools :data="activeEno" v-if="isEditMode" /> </b-col>
        <b-col cols="7"> <div :class="['formEditor',showEditor]">
      <app-elements :data="mainParent" v-for="mainParent in mainParents" :key="mainParent.eno" />
    </div> 
     <app-creator v-if="startStatus" ></app-creator>
    </b-col>
         <b-col cols="3" ><app-panel :data="activeEno" v-if="isEditMode"></app-panel> </b-col>
        </b-col>
      </b-row>   
  </b-container>
  </div>
</template>
<script>
import Container from '@/components/Container.vue';

import FormCreator from '@/components/FormCreator.vue';
import Elements from '@/components/Elements.vue';
import Tools from '@/components/Tools.vue';
import Panel from '@/components/Panel.vue';
export default {
  name: 'About',
  data:function(){
    return {
     
    }
  },
  computed:{
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },
      set(val){         
         return this.$store.commit('setEditMode',val);        
      }
    },
    startStatus:{
      get(){
    
        return (this.$store.getters.getTotalElements>0 ? false : true)
      }
    },
  showEditor:{
    get(){
      if(this.isEditMode){
        return "showEditor";
      }else{
        return "hideEditor";
      }
    }
  },
  	containers:{
  		get(){
       return this.$store.getters.getContainers;
  		},
  		set(val){
  			return val;
  		}
    },
    isConfigEle:{
      get(){
        return this.$store.getters.isConfigEle;
      }
    },
    enoid :{
      get(){
        return this.$store.getters.getConfigEle;
      }
    },
    activeEno :{
      get(){
        
        return this.$store.getters.getActiveEno;
      }
    },
    activeObj:{
      get(){
        return this.$store.getters.activeObj;
      }
    },

      mainParents:{
        get(){
          return this.$store.getters.getMainParents;
        }
      }
  },
  components:{
    'app-container' : Container,
   
       'app-creator':FormCreator,
    'app-elements' : Elements,
    'app-tools' : Tools,
    'app-panel' : Panel
  }
  
}
</script>
