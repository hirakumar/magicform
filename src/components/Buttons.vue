<template>
    <div class="btnEle"  @mouseenter = "mouseEnter"
        @mouseleave = "mouseLeave">
        <app-infoele :data="data"  v-if="isEditMode"></app-infoele>
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
     
      <b-button-group v-if="orderBtn" class="orderBtn">
        <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
      <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
      </b-button-group>
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
    'app-infoele' : InfoEle
  },
  methods:{
     clickedEle:function(event){
       this.$store.commit("setActiveEno",this.data.eno);
       this.$store.commit("setEditMode",true);
      // event.preventDefault();
      // event.stopPropagation();
    },
    mouseEnter : function(){
      if(this.isEditMode){
        this.orderBtn=true;
      }else{
         this.orderBtn=false;
      }
      
    },
     mouseLeave : function(){
      this.orderBtn=false;
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
    }
  }
  
}
</script>