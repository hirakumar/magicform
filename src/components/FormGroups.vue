<template>
    <div class="formGroupBlock" @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @click="clickEvent">
    <div v-html="data.before" class="before"></div>
    <b-form-group
      :id="data.id"
      :description="data.description"
      :label="data.label"
      :label-for="data.label_for"
      :label-cols = "data.label_cols"
      :label-cols-sm = "data.label_cols_sm"
      :label-cols-md = "data.label_cols_md" 
      :label-cols-lg = "data.label_cols_lg" 
      :label-cols-xl = "data.label_cols_xl" 
      :label-size = "data.label_size" 
      :label-align = "data.label_align"
      :label-align-sm = "data.label_align_sm"
      :label-align-md = "data.label_align_md"
      :label-align-lg = "data.label_align_lg"
      :label-align-xl = "data.label_align_xl"
      :label-class = "data.label_class"
      :label-sr-only = "data.label_sr_only"
      :data-eno="data.eno"
      
    >
    
    <app-formcheckbox v-for="checkbox in checkboxes" :data="checkbox" :key="checkbox.eno" :data-eno="checkbox.eno" />
    <app-formselect v-for="select in formSelects" :data="select" :key="select.eno" />
    <app-input v-for="input in inputs" :data="input" :key="input.eno" />
    <app-formcheckboxgroup v-for="checkbox in formcheckboxgroups" :data="checkbox" :key="checkbox.eno" />
    <app-formradiogroup v-for="radio in formradiogroups" :data="radio" :key="radio.eno" />
    <app-formfile v-for="file in formfiles" :data="file" :key="file.eno" /> 
    <app-formtextarea v-for="textarea in formTextareas" :data="textarea" :key="textarea.eno" />
    
  </b-form-group>
  <div v-html="data.after" class="after"></div>
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

export default {
  name: 'form_groups',
  props:{
  	data:Object
  },
  methods:{
    mouseEnter:function(){
     // console.log("Mouse Enter :" + this.data.eno);
      this.$store.commit('changeEle',this.data.eno);
      
    },
    mouseLeave:function(){
     // console.log("Mouse Leave")
    },
    clickEvent:function(event){
      console.log("Clicked :" + this.data.eno);
      this.$store.commit('setActiveEno',this.data.eno);
      this.$store.commit('setEditMode',true);
      event.preventDefault();
      event.stopPropagation();
    }
  },
  computed:{
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
    'app-formcheckbox' : FormCheckbox
  }
}
</script>
<style scoped>
.formGroupBlock:hover{
  border:solid 1px Red;
}
</style>