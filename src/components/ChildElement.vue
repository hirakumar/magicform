<template>

    <app-button v-if="isButton" :data="data"  />
    <app-div v-else-if="isDiv" :data="data" />
    <app-form v-else-if="isForm" :data="data" />
    <app-row v-else-if="isRow" :data="data" />
    <app-col v-else-if="isCol" :data="data" />
    <app-container v-else-if="isContainer" :data="data" />
    <app-input v-else-if="isInput" :data="data" />
    <app-select v-else-if="isSelect" :data="data" />
    <app-checkboxgroup v-else-if="isCheckBoxGroup" :data="data" />
    <app-radiogroup v-else-if="isRadioGroup" :data="data" />
    <app-textarea v-else-if="isTextarea" :data="data" />
    <app-file v-else-if="isFile" :data="data" />
 
</template>
<script>

export default {
 name: 'ChildElement',
  props:{
  	data:Object
  },
  computed:{
     
     isButton:{
        get(){
        return (this.data.ele=='button' ? true : false);
       }
     },
     isDiv:{
         get(){
             
             return (this.data.ele=='div' ? true : false);
         }
     }, 
     isInput:{
       get(){
             
             return (this.data.ele=='form-input' ? true : false);
         }
     },
     isSelect:{
       get(){
             
             return (this.data.ele=='form-select' ? true : false);
         }
     },
     isCheckBoxGroup :{
       get(){
         return (this.data.ele=='form-checkbox-group' ? true : false);
         
       }
     },
     isRadioGroup :{
       get(){
         return (this.data.ele=='form-radio-group' ? true : false);
         
       }
     },
      isTextarea :{
       get(){
         return (this.data.ele=='form-textarea' ? true : false);
         
       }
     },
     isFile :{
       get(){
         return (this.data.ele=='form-file' ? true : false);
         
       }
     },
      isForm :{
      get(){
       
       return (this.data.ele=='form' ? true : false);
      }
    },
     isRow :{
      get(){
        return (this.data.ele=='row' ? true : false);
      }
    },
     isCol :{
      get(){
        return (this.data.ele=='col' ? true : false);
      }
    },
     isContainer :{
      get(){
        return (this.data.ele=='container' ? true : false);
      }
    }
  
  },
  components:{
    
	  'app-button'  : () => import('@/components/Buttons.vue'),	 
    'app-div' : () => import('@/components/DivEle.vue'),
    'app-form' : () => import('@/components/FormEle.vue'),
    'app-row' : () => import('@/components/Row.vue'),
    'app-col' : () => import('@/components/Cols.vue'),
    'app-container' : () => import('@/components/Container.vue'),
    'app-input' : () => import('@/components/Inputs.vue'),
    'app-select' : () => import('@/components/FormSelect.vue'),
    'app-checkboxgroup' : () => import('@/components/FormCheckboxGroups.vue'),
    'app-radiogroup' : () => import('@/components/FormRadioGroups.vue'),
    'app-textarea' : () => import('@/components/FormTextarea.vue'),
    'app-file' : () => import('@/components/FormFile.vue'),
      
  }
}
</script>