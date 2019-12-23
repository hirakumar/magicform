<template>
    <b-form-checkbox-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="data.buttons"
        :switches ="data.switches"
        :size="data.size"
        :plain="data.plain"
        :disabled = "data.disabled"
        :class = "data.class"
        :id = "data.id"
        :required = "data.required"     
        
     />   

 
</template>
<script>

export default {
 name: 'FormCheckBoxGroups',
  props:{
  	data:Object
  },
  
  computed:{
   
  },
   methods:{
    
  },
  components:{
  
  }
}
</script>