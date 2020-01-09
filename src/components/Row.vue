<template>
  <b-row 
      :class="data.class"
      :id="data.id"
      :tag="data.tag"
      :name="data.id"
      :no-gutters="data['no-gutters']" 
      :align-v="data['align-v']" 
      :align-h="data['align-h']" 
      :align-content="data['align-content']"
       @mouseenter="mouseEnter" @mouseleave="mouseLeave"
      >  
    <template v-if="isEditMode" >
      <app-infoele :data="data"  ></app-infoele>          
        <b-button-group class="orderBtn" v-if="orderBtn">
        <b-link  size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-link>
        <b-link  size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-link>
        <b-link  size="sm" @click="remove" v-show="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-link>
      </b-button-group>       
    </template>
    <template v-if="hasChild">
      <app-elements :data="child" v-for="child in myChilds"  :key="child.eno" />
  </template>

  </b-row>  
</template>

<script>


export default {
  name: 'row',
   props:{
  	data:Object
  },
  components:{
    'app-elements' :  () => import('@/components/Elements.vue'),
    'app-infoele' : () => import('@/components/InfoEle.vue'),
  },
  data:function(){
    return {
     orderBtn: false
    }
  },
  computed:{
   
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
    isEditMode:{
      get(){
        try{
          return this.$store.getters['formBuilder/isEditMode'];
         }catch(error){
          console.log("Error on isEditMode : ", error);
        }  
      },      
    },
    hasChild:{
        get(){
          try{
            if(this.data != undefined){                
                return this.$store.getters['formBuilder/hasChild'](this.data.eno);
            } 
            }catch(error){
              console.log("Error on hasChild : ", error);
          }            
        }
    },
    myChilds:{
      get(){
        try{
        if(this.data != undefined){
          return this.$store.getters['formBuilder/getChilds'](this.data.eno)
        }
        }catch(error){
              console.log("Error on myChilds : ", error);
          }   
      }
    },
  },
  methods:{
    clickCol : function(event){
      try{
      event.currentTarget.classList.add('active');
      this.$store.commit('formBuilder/setEditMode',true);
      this.$store.commit('formBuilder/setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
       }catch(error){
              console.log("Error on clickCol : ", error);
          }  
    },
    mouseEnter:function(){
      // this.$store.commit('changeEle',this.data.eno);
      try{
      if(this.isEditMode){
        this.orderBtn=true;
      }
      }catch(error){
              console.log("Error on mouseEnter : ", error);
          }
    },
   
    mouseLeave:function(){
       try{
      this.orderBtn=false;
        }catch(error){
              console.log("Error on mouseLeave : ", error);
          }
    },
    increaselevel: function() {
      try {
          this.expandlevel += 1;
      } catch (err) {
          console.log("Error on increaselevel :", err)
      }

    },
    decreaselevel: function() {
        try {
            this.expandlevel -= 1;
        } catch (err) {
            console.log("Error on decreaselevel :", err)
        }
    },
    remove: function() {
      try {
        this.$store.dispatch("formBuilder/removeObj", this.data);
         } catch (err) {
            console.log("Error on decreaselevel :", err)
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
   
  }
}
</script>
