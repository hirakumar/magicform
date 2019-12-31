<template>
    <div class="formGroupBlock" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
   
      <app-infoele :data="data"  v-if="isEditMode"></app-infoele>
     
      <b-button-group v-if="orderBtn" class="orderBtn">
        <b-button size="sm" @click="setOrderUp" v-if="!isfirstOrder"> <font-awesome-icon :icon="['fas','chevron-up']" /> </b-button>
      <b-button size="sm" @click="setOrderDown" v-if="!isLastOrder">  <font-awesome-icon :icon="['fas','chevron-down']" /></b-button>
      <b-button size="sm" @click="remove" v-if="isEditMode">  <font-awesome-icon :icon="['fas','trash-alt']" /></b-button>
      </b-button-group>
     
      <template v-if="data.before!=undefined">
        <div v-html="data.before" class="before" ></div>
      </template>
      
     
       <b-form-group
      :id="data.id"
      :description="data.description"
      :label="data.label"
      :label-for="data.label_for"
      :label-cols = "data['label-cols']"
      :label-cols-sm = "data['label-cols-sm']"
      :label-cols-md = "data['label-cols-md']" 
      :label-cols-lg = "data['label-cols-lg']" 
      :label-cols-xl = "data['label-cols-xl']" 
      :label-size = "data['label-size']" 
      :label-align = "data['label-align']"
      :label-align-sm = "data['label-align-sm']"
      :label-align-md = "data['label-align-md']"
      :label-align-lg = "data['label-align-lg']"
      :label-align-xl = "data['label-align-xl']"
      :label-class = "data['label-class']"
      :label-sr-only = "data['label-sr-only']"
      :data-eno="data.eno"
      :disabled="data.disabled"
      :state="data.state"      
    >
  
    <app-elements :data="child" v-for="child in myChilds" :key="child.eno" />

      
  </b-form-group> 
  <template v-if="data.after!=undefined">
    <div v-html="data.after" class="after" ></div>
</template>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'form_groups',
  props:{
  	data:Object
  },
  data:function(){
    return {
     orderBtn: false
    }
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
    clickEvent:function(event){
      try{
        this.$store.commit('formBuilder/setActiveEno',this.data.eno);
        this.$store.commit('formBuilder/setEditMode',true);
      }catch(error){
        console.log("Error on clickEvent");
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
    formGroupID : {
      get(){
        return this.data.eno;
      },
      set(val){
        return val;
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
    'app-input': () => import ('@/components/Inputs.vue'),
    'app-formcheckboxgroup' : ()=> import ('@/components/FormCheckboxGroups.vue'),
    'app-formradiogroup' : ()=> import ('@/components/FormRadioGroups.vue'),
    'app-formfile' : ()=> import ('@/components/FormFile.vue'),
    'app-formselect'  : ()=> import ('@/components/FormSelect.vue'),
    'app-formtextarea' : ()=> import ('@/components/FormTextarea.vue'),
    'app-formcheckbox' : ()=> import ('@/components/FormCheckbox.vue'),
    'app-infoele' : ()=> import ('@/components/InfoEle.vue'),
    'app-elements' : ()=> import ('@/components/Elements.vue'),
  }
}
</script>
<style scoped>

</style>