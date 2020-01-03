<template>
   <div  @click="clickedSelectBox">
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
        :lazy-formatter = "data['lazy-formatter']"
        :trim = "data.trim"
        :number = "data.number"
        :rows = "data.rows"
        :max-rows = "data['max-rows']"
        :wrap = "data.wrap"
        :re-size = "data['re-size']"
        :no-auto-shrink = "data['no-auto-shrink']"
     
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
     
      isEditMode:{
        get(){
          return this.$store.getters['formBuilder/isEditMode'];
        }, 
      }
  },
  components:{
    
  },
  methods:{
    clickedSelectBox:function(event){
      if(this.isEditMode){
       this.$store.commit("formBuilder/setActiveEno",this.data.eno);
       this.$store.commit("formBuilder/setEditMode",true);
        event.preventDefault();
        event.stopPropagation();
      }

    }
  }
}
</script>