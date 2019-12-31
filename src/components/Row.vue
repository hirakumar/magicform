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
     <div class="rowHolder" v-if="isEditMode">
         <app-infoele :data="data" v-if="isEditMode"></app-infoele> 
         
         <b-button-group class="orderBtn">
         <!-- <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
          <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
          <b-button size="sm" @click="remove" v-show="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>-->
        </b-button-group>
       
    </div>
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
        if(this.data != undefined){
          return this.$store.getters['isFirstOrder'](this.data.eno);
        }
      }
    },
    isLastOrder:{
      get(){
        if(this.data != undefined){
        return this.$store.getters['isLastOrder'](this.data.eno);
        }
      }
    },
    isEditMode:{
      get(){
        return this.$store.getters['formBuilder/isEditMode'];
      },      
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
  methods:{
    clickCol : function(event){
      event.currentTarget.classList.add('active');
      this.$store.commit('formBuilder/setEditMode',true);
      this.$store.commit('formBuilder/setActiveEno',this.data.eno);
      event.preventDefault();
      event.stopPropagation();
    },
    mouseEnter:function(){
      // this.$store.commit('changeEle',this.data.eno);
      if(this.isEditMode){
        this.orderBtn=true;
      }
    },
   
    mouseLeave:function(){
      this.orderBtn=false;
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
        this.$store.dispatch("formBuilder/removeObj");
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
