<template>
<div  @click="clickedSelectBox">
    <b-form-checkbox-group 
        :options = "data.options"
        :stacked = "data.stacked"
        :name = "data.name"
        :button-variant = "data.variant"
        :buttons="isButton"
        :switches ="isSwitches"
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
 name: 'FormCheckBoxGroups',
  props:{
  	data:Object
  },
  
  computed:{
     checkboxes :{
       get(){
         return true;
       }
     },
     isButton:{
       get(){
         return (this.data.buttons ? true : false);
       }
     },
     isSwitches:{
       get(){
         return (this.data.switches ? true : false);
       }
     }
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
  components:{
    
  }
}
</script>