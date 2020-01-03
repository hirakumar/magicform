<template>
<div >
   <app-infoele :data="data" v-if="isEditMode"></app-infoele>
    <b-form-radio-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
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
 name: 'FormRadioGroups',
  props:{
  	data:Object
  },
  
  computed:{
     
     isButton:{
       get(){
         return (this.data.buttons ? true : false);
       }
     },
    isEditMode:{
      get(){
        return this.$store.getters['formBuilder/isEditMode'];
      },      
    },
  
  },
  components:{
    'app-infoele' : InfoEle
  },
  methods:{
 
  }
}
</script>