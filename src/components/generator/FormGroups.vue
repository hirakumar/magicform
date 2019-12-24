<template>
    <div class="formGroupBlocks" >    
        <div v-html="data.before" class="before" v-if="data.before!=undefined"></div>   
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
          :disabled="data.disabled"
          :state="data.state"      
        >    
        <app-formcheckbox v-for="checkbox in checkboxes" :data="checkbox" :key="checkbox.eno"  />
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
      <div v-html="data.after" class="after" v-if="data.after!=undefined" ></div>
  </div>
</template>

<script>

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
    'app-input'  : () => import('@/components/generator/Inputs.vue'),
    'app-formcheckboxgroup' :  () => import('@/components/generator/FormCheckboxGroups.vue'),
    'app-formradiogroup' : () => import('@/components/generator/FormRadioGroups.vue'),
    'app-formfile'  : () => import('@/components/generator/FormFile.vue'),
    'app-formselect' : () => import('@/components/generator/FormSelect.vue'),
    'app-formtextarea' : () => import('@/components/generator/FormTextarea.vue'),
    'app-formcheckbox' : () => import('@/components/generator/FormCheckbox.vue'),
 
  }
}
</script>
<style scoped>

</style>