<template>
    <div class="btnEle"  @mouseenter = "mouseEnter"
        @mouseleave = "mouseLeave">
        <template  v-if="isEditMode">
      <app-infoele :data="data" ref="infoele"  v-if="isEditMode"></app-infoele>
    </template>
    <div class="btnCont">
    <b-button @click="clickedEle"
        :id = "data.id"
        :class = "data.class"
        :name = "data.name"
        :href = "data.href"
        :rel = "data.rel"
        :target = "data.target"
        :active = "data.active"
        :disabled = "data.disabled"
        :to = "data.to"
        :append = "data.append"
        :replace = "data.replace"
        :event = "data.event"
        :active-class = "data['active-class']"
        :exact = "data.exact"
        :exact-active-class = "data['exact-active-class']"
        :router-tag = "data['router-tag']"
        :no-prefetch = "data['no-prefetch']"
        :block = "data.block"
        :size = "data.size"
        :variant = "data.variant"
        :type = "data.type"
        :tag = "data.tag"
        :pill = "data.pill"
        :squared = "data.squared"
        :pressed = "data.pressed"
        :data-eno = "data.eno"
       
     >{{data.text}}</b-button>
     </div>
       
     
    </div>

</template>
<script>
import InfoEle from '@/components/InfoEle.vue'
export default {
 name: 'Button',
  props:{
  	data:Object
  },
  data:function(){
    return {
      orderBtn:false
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
    'app-infoele' : InfoEle
  },
  methods:{
    clickedEle:function(event){
      try{
      if(this.isEditMode){
        this.$store.commit("formBuilder/setActiveEno",this.data.eno);
        this.$store.commit("formBuilder/setEditMode",true);
      }
        }catch(error){
        console.log("Error on clickedEle", error);
      }
    },
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
    remove: function() {
      try{
        this.$store.dispatch("formBuilder/removeObj",this.data);
       }catch(error){
        console.log("Error on remove", error);
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
  }
  
}
</script>