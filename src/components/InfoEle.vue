<template>
<div class="eleHolder">
  <b-link  :class="['eleinfo',myClass]" size="md" @click ="clickCol" :title="info">
   
    <span class="ele">{{data.ele}} :{{data.eno}}</span> 
   
   
     
  </b-link>
  <b-button-group class="orderBtn" v-if="orderBtn">
    
        <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
        <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
        <b-button size="sm" @click="remove" v-show="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>
      </b-button-group>  
 </div>
</template>
<script>

export default {
  name: 'infoele',
   props:{
  	data:Object
  },
  data:function(){
      return {
         
         orderBtn: false
      }
  },
  computed:{
    myClass:{
      get(){
          if(this.data != undefined){
            return this.data.ele+"Ele";
          }
         
      }
    },
     isEditMode:{
      get(){
        try{
          return this.$store.getters['formBuilder/isEditMode'];
         }catch(error){
          console.log("Error on isEditMode : ", error);
        }  
      },      
    },
     isLastOrder:{
      get(){
        try{
          if(this.data != undefined){
          return this.$store.getters['formBuilder/isLastOrder'](this.data.eno);
          }
         }catch(error){
          console.log("Error on isLastOrder : ", error);
        }  
      }
    },
    isfirstOrder:{
      get(){
        try{
          if(this.data != undefined){
            return this.$store.getters['formBuilder/isFirstOrder'](this.data.eno);
          }
        }catch(error){
          console.log("Error on isfirstOrder : ", error);
        }        
      }
    },
    info:{
      get(){
          let str ="";
          str += this.data.ele;
          if(this.data.hasOwnProperty('id')){
            str += "#"+ this.data.id;
          }
          
          if(this.data.hasOwnProperty('class')){
            str += "#"+ this.data.class;
          }
          
          if(this.data.hasOwnProperty('name')){
            str += "@"+ this.data.name;
          }
          
          return str;
        
      }
    }
  },
  methods:{
    clickCol : function(event){     
      event.currentTarget.classList.add('active');
      this.$store.commit('formBuilder/setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
      
    },
    setOrder:function(val){
      try {
        this.orderBtn=val;
         } catch (err) {
            console.log("Error on setOrder :", err)
        }
    },
      remove: function() {
      try {
        this.$store.dispatch("formBuilder/removeObj", this.data);
         } catch (err) {
            console.log("Error on remove :", err)
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
  },

}
</script>
<style scoped>
.eleinfo.containerEle{
  left:-15px;
}
</style>