<template>
   <div>
    <b-form-textarea
        :id = "data.id"
        :name = "data.name"
        :disabled = "data.disabled"
        :required = "data.required"
        :form ="data.form"
        :autofocus = "data.autofocus"
        :size="data.size"
        :state ="data.state"
        :value="data.value"
        :readonly="data.readonly"
        :plaintext="data.plaintext"
        :autocomplete="data.autocomplete"

        :placeholder ="data.placeholder"
        :lazy-formatter = "data.lazy_formatter"
        :trim = "data.trim"
        :number = "data.number"
        :rows = "data.rows"
        :max-rows = "data.max_rows"
        :wrap = "data.wrap"
        :re-size = "data.re_size"
        :no-auto-shrink = "data.no_auto_shrink"
     
     />
  </div>

</template>
<script>

export default {
 name: 'FormTextarea',
  props:{
  	data:Object
  },
  
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>