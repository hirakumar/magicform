<template>
   <div  @click="clickedSelectBox">
    
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
      :data-eno = "data.eno"
      :options = "data.options"
      :value-field = "data['value-field']"
      :text-field = "data['text-field']"
      :value = "data.value"
      :multiple = "data.multiple"
      :select-size = "data['select_size']"
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
  methods:{
    clickedSelectBox:function(event){
       console.log("ENO :" +this.data.eno);
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
        event.preventDefault();
        event.stopPropagation();
    }
  },
  computed:{
     
    
  
  },
  components:{
    
  }
}
</script>