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
    
    <app-formcheckbox v-for="checkbox in checkboxes" :data="checkbox" :key="checkbox.eno" :data-eno="checkbox.eno" />
    <app-formselect v-for="select in formSelects" :data="select" :key="select.eno" />
    <app-input v-for="input in inputs" :data="input" :key="input.eno" />
    <app-formcheckboxgroup v-for="checkbox in formcheckboxgroups" :data="checkbox" :key="checkbox.eno" />
    <app-formradiogroup v-for="radio in formradiogroups" :data="radio" :key="radio.eno" />
    <app-formfile v-for="file in formfiles" :data="file" :key="file.eno" /> 
    <app-formtextarea v-for="textarea in formTextareas" :data="textarea" :key="textarea.eno" />
     <b-form-invalid-feedback >
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback >
        Looks Good.
      </b-form-valid-feedback>
  </b-form-group>
  <template v-if="data.after!=undefined">
  <div v-html="data.after" class="after" ></div>
</template>
  </div>
</template>

<script>
// @ is an alias to /src
import Inputs from '@/components/Inputs.vue'
import FormCheckboxGroup from '@/components/FormCheckboxGroups.vue'
import FormRadioGroup from '@/components/FormRadioGroups.vue'
import FormFile from '@/components/FormFile.vue'
import FormSelect from '@/components/FormSelect.vue'
import FormTextarea from '@/components/FormTextarea.vue'
import FormCheckbox from '@/components/FormCheckbox.vue'
import InfoEle from '@/components/InfoEle.vue'

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
    remove: function() {
            this.$store.dispatch("removeObj",{obj:this.data});
        },
    mouseLeave:function(){
      this.orderBtn=false;
    },
    clickEvent:function(event){
      try{
        this.$store.commit('setActiveEno',this.data.eno);
        this.$store.commit('setEditMode',true);
      }catch(error){
        console.log("Error on clickEvent");
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
    formGroupID : {
      get(){
        return this.data.eno;
      },
      set(val){
        return val;
      }
    },
    inputs:{
      get(){
        return this.$store.getters.getInputs(this.formGroupID);
      },
      set(val){
        return val;
      }
    },
    formcheckboxgroups :{
      get(){
        return this.$store.getters.getformCheckboxGroup(this.formGroupID)
      }
    },
    formradiogroups :{
      get(){
        return this.$store.getters.getformRadioGroup(this.formGroupID)
      }
    },
    formfiles:{
       get(){
        return this.$store.getters.getformFile(this.formGroupID)
      }
    },
    formSelects:{
      get(){
        return this.$store.getters.getformSelect(this.formGroupID)
        
      }
    },
    formTextareas:{
      get(){
        return this.$store.getters.getformTextarea(this.formGroupID)
        
      }
    },
    checkboxes :{
		get(){
			return this.$store.getters.getformcheckboxs(this.formGroupID)
		}
	}
  },
  components: {
    'app-input' : Inputs,
    'app-formcheckboxgroup' : FormCheckboxGroup,
    'app-formradiogroup' : FormRadioGroup,
    'app-formfile' : FormFile,
    'app-formselect' : FormSelect,
    'app-formtextarea' : FormTextarea,
    'app-formcheckbox' : FormCheckbox,
    'app-infoele' : InfoEle
  }
}
</script>
<style scoped>

</style>