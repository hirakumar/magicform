<template>    
    <b-form-select
      :placeholder = "data.placeholder"
      :size = "data.size"
      :disabled = "data.disabled"
      :name = "data.name"
      :required = "data.required"
      :form = "data.form"
      :autofocus = "data.autofocus"
      :state = "data.state"
      :plain = "data.plain"
      :id = "data.id"
      :options = "data.options"
      :value-field = "data['value-field']"
      :text-field = "data['text-field']"
      :value = "data.value"
      :multiple = "data.multiple"
      :select-size = "data['select_size']"
      :selected = "data.selected"     
     />
</template>
<script>

export default {
 name: 'FormSelect',
  props:{
  	data:Object
  },
  methods:{
   
  },
  computed:{
  
  },
  components:{
    
  }
}
</script>