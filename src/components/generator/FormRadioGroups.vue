<template>
   <b-form-radio-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="data.buttons"
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
 name: 'FormRadioGroups',
  props:{
  	data:Object
  },
  
  computed:{

  
  },
  components:{

  },
  methods:{
 
  }
}
</script>