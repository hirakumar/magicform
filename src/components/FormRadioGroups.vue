<template>
<div  @click="clickedSelectBox">
    <b-form-radio-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
        :size="data.size"
        :plain="data.plain"
        :disabled = "data.disabled"
        :class = "data.class"
        :id = "data.id"
        :required = "data.required" 
     />
    
    </div>
   

    

 
</template>
<script>

export default {
 name: 'FormRadioGroups',
  props:{
  	data:Object
  },
  
  computed:{
     
     isButton:{
       get(){
         return (this.data.buttons ? true : false);
       }
     },
  
  },
  components:{
    
  },
  methods:{
    clickedSelectBox:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       event.preventDefault();
       event.stopPropagation();
    }
  }
}
</script>