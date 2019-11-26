<template>
   <div>
    <b-form-select
      :placeholder ="data.placeholder"
      :size="data.size"
      :disabled ="data.disabled"
      :name ="data.name"
      :required = "data.required"
      :form ="data.form"
      :autofocus = "data.autofocus"
      :state ="data.state"
      :plain="data.plain"
      :id = "data.id"
      :data-eno = "data.eno"
      :options = "data.options"
      :value-field = "data.value_field"
      :text-field = "data.text_field"
      :value = "data.value"
      :multiple = "data.multiple"
      :select-size = "data.select_size"
      :selected = "data.selected"

     
     />
  </div>

</template>
<script>

export default {
 name: 'FormSelect',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>