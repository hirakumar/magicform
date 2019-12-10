<template>
   <div  @click="clickedEle">
    <b-form-file
      :placeholder = "data.placeholder"
      :drop-placeholder = "data['drop-placeholder']"
      :multiple = "data.multiple"
      :accept = "data.accept"
      :size= "data.size"
      :disabled = "data.disabled"
      :name = "data.name"
      :required = "data.required"
      :form = "data.form"
      :autofocus = "data.autofocus"
      :state = "data.state"
      :plain= "data.plain"
      :value= "data.value"
      :capture= "data.capture"
      :browse-text= "data['browse-text']"
      :directory = "data.directory"
      :no-traverse = "data['no-traverse']"
      :no-drop= "data['no-drop']"
      :id = "data.id"
      :class = "data.class"
     
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
    
  },
  methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       event.preventDefault();
       event.stopPropagation();
    }
  }
}
</script>