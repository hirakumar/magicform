<template>
   <div class="formEle">     
      <div class="eleHolder" v-if="isEditMode">
        <b-button @click="clickedEle" class="btn eleinfo btn-secondary btn-sm active" >Form</b-button>
      </div>
      <b-form :class="data.class" @click="clickedEle" :id="data.id" :inline="data.inline" :novalidate="data.novalidate" :validated="data.validated" >
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
     
  },
    methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
       event.preventDefault();
       event.stopPropagation();
    },
     
  }
}
</script>