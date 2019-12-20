<template>
  <div class="divEle"  @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div v-html="data.text" :class="data.class" @click="clickedEle" :id="data.id"></div>
    <b-button-group v-if="isEditMode && orderBtn" class="orderBtn">
      <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
      <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
      <b-button size="sm" @click="remove" >  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>
    </b-button-group>
  </div>
</template>
<script>

export default {
 name: 'DivEle',
  props:{
  	data:Object
  },
  data:function(){
    return {
     orderBtn: false
    }
  },
  computed:{
     
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },      
    },
    isfirstOrder:{
      get(){
        return this.$store.getters.isFirstOrder(this.data.eno);
      }
    },
    isLastOrder:{
      get(){
        return this.$store.getters.isLastOrder(this.data.eno);
      }
    },
  
  },
  components:{
    isEditMode:{
      get(){
        return this.$store.getters.isEditMode;
      },      
    },
  },
    methods:{
       mouseEnter:function(){
    // this.$store.commit('changeEle',this.data.eno);
    if(this.isEditMode){
      this.orderBtn=true;
    }
    
    },
   
    mouseLeave:function(){
      this.orderBtn=false;
    },
     clickedEle:function(event){
       if(this.isEditMode){
        this.$store.commit("setActiveEno",this.data.eno);
        this.$store.commit("setEditMode",true);
        event.preventDefault();
        event.stopPropagation();
       }       
    },
      setOrderUp : function(event){
      try{
        
        this.$store.dispatch('setOrder',{activeEno:this.data.eno,action:'up'})
      }catch(error){
        console.log("Error on setOrderUp", error);
      }
    },
    setOrderDown : function(event){
      try{
        
        this.$store.dispatch('setOrder',{activeEno:this.data.eno,action:'down'})
      }catch(error){
        console.log("Error on setOrderDown", error);
      }
    },
    remove: function() {
            this.$store.dispatch("removeObj",{obj:this.data});
        },
  },
    
}
</script>