<template>
   <div>
    <b-form-file
      :placeholder ="data.placeholder"
      :drop-placeholder ="data.drop_placeholder"
      :multiple ="data.multiple"
      :accept ="data.accept"
      :size="data.size"
      :disabled ="data.disabled"
      :name ="data.name"
      :required = "data.required"
      :form ="data.form"
      :autofocus = "data.autofocus"
      :state ="data.state"
      :plain="data.plain"
      :value="data.value"
      :capture="data.capture"
      :browse-text="data.browser_text"
      :directory ="data.directory"
      :no-traverse = "data.no_traverse"
      :no-drop="data.no_drop"

     
     />
  </div>

</template>
<script>

export default {
 name: 'FormFile',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>