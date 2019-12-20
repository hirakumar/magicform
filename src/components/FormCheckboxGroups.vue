<template>
<div  >
  <app-infoele :data="data" v-if="isEditMode"></app-infoele>
    <b-form-checkbox-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
        :switches ="isSwitches"
        :size="data.size"
        :plain="data.plain"
        :disabled = "data.disabled"
        :class = "data.class"
        :id = "data.id"
        :required = "data.required"       
        
     />
     </div>   
   

    

 
</template>
<script>
import InfoEle from '@/components/InfoEle.vue'
export default {
 name: 'FormCheckBoxGroups',
  props:{
  	data:Object
  },
  
  computed:{
     checkboxes :{
       get(){
         return true;
       }
     },
      isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },      
    },
     isButton:{
       get(){
         return (this.data.buttons ? true : false);
       }
     },
     isSwitches:{
       get(){
         return (this.data.switches ? true : false);
       }
     }
  },
   methods:{
    
  },
  components:{
    'app-infoele' : InfoEle
  }
}
</script>