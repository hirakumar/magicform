<template>
   <div class="formEle"  @mouseenter="mouseEnter" @mouseleave="mouseLeave">  
     
      <template  v-if="isEditMode">
      <app-infoele :data="data" ref="infoele"  v-if="isEditMode"></app-infoele>
    </template>
      <b-form @submit="onSubmit" @reset="onReset" :class="data.class" :id="data.id" :inline="data.inline" :novalidate="data.novalidate" :validated="data.validated" >
       
        <app-elements :data="child" v-for="child in myChilds" :key="child.eno" />
      </b-form>
   </div>
</template>
<script>

export default {
 name: 'FormEle',
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
    getElements:{
      get(){
        return this.$store.getters['formBuilder/getRawElements'];
      }
    },
    hasChild:{
        get(){
            if(this.data != undefined){
                
                return this.$store.getters['formBuilder/hasChild'](this.data.eno);
            }
            
        }
    },
    myChilds:{
      get(){
        if(this.data != undefined){
          return this.$store.getters['formBuilder/getChilds'](this.data.eno)
        }
      }
    },

  },

  components:{
    'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue'),
     
  },
    methods:{
 mouseEnter: function() {
		 try{
        if(this.isEditMode){
      this.orderBtn=true;
     
     this.$refs.infoele.setOrder(true);
      this.$store.commit('formBuilder/changeEle',this.data.id);
        }
		
		 }catch(error){
			 console.log("Error on hoverOn :", error);
		 }
		  
	  },
	  mouseLeave :  function(){
		  try{
         if(this.isEditMode){
			this.orderBtn=false;
      this.$refs.infoele.setOrder(false);
         }
		 }catch(error){
			 console.log("Error on hoverOut :", error);
		 }

    },
     clickedEle:function(event){
       if(this.isEditMode){
          this.$store.commit("formBuilder/setActiveEno",this.data.eno);
          this.$store.commit("formBuilder/setEditMode",true);

          event.preventDefault();
          event.stopPropagation();
       }
       
    },
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
            this.$store.dispatch("formBuilder/removeObj",this.data);
    },
     
  }
}
</script>
<style scoped lang="scss">
.formEle{
  position:relative;
  .orderBtn{
    position:absolute;
    right:0px;
    top:0px;
  }
}
</style>