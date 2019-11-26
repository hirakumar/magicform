<template>
   <div>
    <b-form-radio-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
        
        :size="data.size"
        :plain="data.plain"
     />
    
    </div>
   

    

 
</template>
<script>

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
  
  },
  components:{
    
  }
}
</script>