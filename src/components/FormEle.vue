<template>
   <div class="formEle">     
      <app-infoele :data="data" @click ="clickedEle" v-if="isEditMode"></app-infoele>
      {{getElements}}
      <b-form @submit="onSubmit" @reset="onReset" :class="data.class" :id="data.id" :inline="data.inline" :novalidate="data.novalidate" :validated="data.validated" >
        <app-elements :data="child" v-for="child in myChilds" />
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
    'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue'),
     
  },
    methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       //event.preventDefault();
       //event.stopPropagation();
    },
     onSubmit: function(){
      console.log("Submiting Form");
      this.data.validated=true;
      event.preventDefault();
      event.stopPropagation();
    },
    onReset: function(){
      console.log("Reseting Form");
    }
     
  }
}
</script>