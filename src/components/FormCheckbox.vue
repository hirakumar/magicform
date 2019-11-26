<template>
 
    <b-form-checkbox
        :id = "data.id"
        :value = "data.value"
        :inline = "data.inline"
        :plain = "data.plain"
        :button = "data.button"
        :button-variant = "data.button_variant"
        :name = "data.name"
        :disabled = "data.disabled"
        :required = "data.required"
        :form = "data.form"
        :autofocus = "data.autofocus"
        :size = "data.size"
        :state = "data.state"
        :switch = "data.switch"
     
     >
     {{data.text}}
    </b-form-checkbox>
  

</template>
<script>

export default {
 name: 'FormCheckbox',
  props:{
  	data:Object
  },
  
  computed:{
   
    
  
  },
  components:{
    
  }
}
</script>