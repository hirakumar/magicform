<template>
  <div class="divEle"  @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    
    <template v-if="isEditMode">
      <b-button-group v-if="orderBtn" class="orderBtn">
        <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
        <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
        <b-button size="sm" @click="remove" >  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>
      </b-button-group>
      <app-infoele :data="data"  v-if="isEditMode"></app-infoele>
    </template>
    <div v-html="data.text" :class="data.class" @click="clickedEle" :id="data.id"></div>
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
        return this.$store.getters['formBuilder/isEditMode'];
      },      
    },
    isfirstOrder:{
      get(){
        return this.$store.getters['formBuilder/isFirstOrder'](this.data.eno);
      }
    },
    isLastOrder:{
      get(){
        return this.$store.getters['formBuilder/isLastOrder'](this.data.eno);
      }
    },
  
  },
  components:{
   'app-infoele' : () => import('@/components/InfoEle.vue')
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
        this.$store.commit("formBuilder/setActiveEno",this.data.eno);
        this.$store.commit("formBuilder/setEditMode",true);
        event.preventDefault();
        event.stopPropagation();
       }       
    },
      setOrderUp : function(event){
      try{
        
        this.$store.dispatch('formBuilder/setOrder',{activeEno:this.data.eno,action:'up'})
      }catch(error){
        console.log("Error on setOrderUp", error);
      }
    },
    setOrderDown : function(event){
      try{
        
        this.$store.dispatch('formBuilder/setOrder',{activeEno:this.data.eno,action:'down'})
      }catch(error){
        console.log("Error on setOrderDown", error);
      }
    },
    remove: function() {
            this.$store.dispatch("formBuilder/removeObj",{obj:this.data});
        },
  },
    
}
</script>