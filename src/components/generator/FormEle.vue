<template>
   <div class="formEle"> 
    <b-form @submit="onSubmit" @reset="onReset" :class="data.class" :id="data.id" :inline="data.inline" :novalidate="data.novalidate" 
    :validated="data.validated" >
      <app-element :data="child" v-for="child in myChilds" :key="child.eno" />
    </b-form>
   </div>
</template>
<script>

export default {
 name: 'FormEle',
  props:{
  	data:Object
  },
  
  computed:{
   
    getElements:{
      get(){
        return this.$store.getters.getRawElements;
      }
    },
    hasChild:{
        get(){
            if(this.data != undefined){
                
                return this.$store.getters.hasChild(this.data.eno);
            }
            
        }
    },
    myChilds:{
      get(){
        if(this.data != undefined){
          return this.$store.getters.getChilds(this.data.eno)
        }
      }
    },
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },
      
    },
  
  },

  components:{
    'app-element' :  () => import('@/components/generator/Elements.vue'),    
     
  },
    methods:{

     onSubmit: function(){
       if(!this.isEditMode){
        this.data.validated=true;
        event.preventDefault();
        event.stopPropagation();
       }
    },
    onReset: function(){
      if(!this.isEditMode){
        console.log("Reseting Form");
      }
    }
     
  }
}
</script>