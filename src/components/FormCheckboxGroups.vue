<template>

    <b-form-checkbox-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
        :switches="isSwitches"
        :size="data.size"
        :plain="data.plain"
     />
    
   

    

 
</template>
<script>

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
     isButton:{
       get(){
         return (this.data.button ? true : false);
       }
     },
     isSwitches:{
       get(){
         return (this.data.switches ? true : false);
       }
     }
  },
  components:{
    
  }
}
</script>