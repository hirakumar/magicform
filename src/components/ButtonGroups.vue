<template>    
    <div class="buttonGroup" @mouseenter="mouseEnter"
		@mouseleave="mouseLeave" >
      
    <template  v-if="isEditMode">

      <!--
      <b-button-group class="orderBtn" v-if="orderBtn">
        <b-link size="sm"  @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-link>
        <b-link size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-link>
        <b-link size="sm" @click="remove" v-if="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-link>
      </b-button-group>
      -->
      <app-infoele :data="data" ref="infoele"  v-if="isEditMode"></app-infoele>
    </template>
      
   
      <b-btn-group
        :id = "data.id"
        :class = "data.class"
        :vertical = "data.vertical"
        :size = "data.size"
        :tag = "data.tag"
        :ariaRole = "data['aria-role']"        
      >  
      <template v-if="hasChild">     
        <app-elements :data="child" v-for="child in myChilds" :key="child.eno" />
      </template>
    
      </b-btn-group>

  </div>
</template>

<script>
import Button from '@/components/Buttons.vue'

export default {
  name: 'buttonGroups',
  props:{
  	data:Object
  },
  data:function(){
	  return {
		   orderBtn: false
	  }
  },
  methods:{
    clickEvent:function(event){
      if(this.isEditMode){
        this.$store.commit('formBuilder/setActiveEno',this.data.eno);
        this.$store.commit('formBuilder/setEditMode',true);
        event.preventDefault();
        event.stopPropagation();
      }   
      
    },  
    remove: function() {
      try{
        this.$store.dispatch("formBuilder/removeObj",this.data);
       }catch(error){
        console.log("Error on remove", error);
      }
    },
     mouseEnter: function() {
		 try{
      this.orderBtn=true;
     
     this.$refs.infoele.setOrder(true);
		  this.$store.commit('formBuilder/changeEle',this.data.id);
		
		 }catch(error){
			 console.log("Error on hoverOn :", error);
		 }
		  
	  },
	  mouseLeave :  function(){
		  try{
			this.orderBtn=false;
			
		 }catch(error){
			 console.log("Error on hoverOut :", error);
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
  components: {
    'app-button' : Button,
    'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue')
   
  }
}
</script>
