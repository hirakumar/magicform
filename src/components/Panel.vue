<template>


     <div class="configBlock" v-if="data!=undefined">
       
          
                <app-configContainer v-if="isContainer" :data="data" />
                <app-configCols v-if="isCol" :data="data" />
                <app-configRow v-if="isRow" :data="data" />
                <app-configFormGroup v-if="isFormGroup" :data="data" />
                <app-configInput v-if="isInput" :data="data" />
                <app-config-form-select v-if="isFormSelect" :data="data"></app-config-form-select>          
                <app-config-checkbox-group v-if="isCheckBoxGroup" :data="data"></app-config-checkbox-group>
                <app-config-radio-group v-if="isRadioGroup" :data="data" />
                <app-config-textarea v-if="isTextarea" :data="data" />
                <app-config-file v-if="isFile" :data="data" />
                <app-button v-if="isButton" :data="data"  />
                <app-button-group v-if="isButtonGroup" :data="data" />
                <app-divele v-if="isDivEle" :data="data" />
                <app-config-form v-if="isForm" :data="data" />
              </div>
   

</template>
<script>
import ConfigCols from '@/components/config/Cols.vue'
import ConfigContainer from '@/components/config/Container.vue'
import ConfigRow from '@/components/config/Row.vue'
import ConfigFormGroups from '@/components/config/FormGroups.vue'
import ConfigInput from '@/components/config/Input.vue'
import ConfigSelect from '@/components/config/FormSelect.vue'
import ConfigCheckboxGroup from '@/components/config/FormCheckboxGroup.vue'
import ConfigRadioGroup from '@/components/config/FormRadioGroup.vue'
import ConfigTextarea from '@/components/config/FormTextarea.vue'
import ConfigFile from '@/components/config/FormFile.vue'
import ConfigButton from '@/components/config/Button.vue'
import ConfigButtonGroup from '@/components/config/ButtonGroups.vue'
import ConfigDivEle from '@/components/config/DivEle.vue'
import ConfigFormEle from '@/components/config/FormEle.vue'
export default {
 name: 'Panel',
  props:{
  	data:Number
  },
  
 computed:{

      eno:{
          get(){
             return this.data; 
          }
      },
     
      eleObj:{
        get(){
            return this.$store.getters['formBuilder/getObj'](this.data);
  		},
  		set(val){
  			return val;
  		}
      },
      
      isContainer:{
        get(){
            if(this.eleObj != undefined){

              return (this.eleObj.ele=="container" ? true : false);
            }
          }
      },
      isCol:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="col" ? true : false);
            }
          }
      },
       isFormGroup:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-group" ? true : false);
            }
          }
      },
       isFormSelect:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-select" ? true : false);
            }
          }
      },
      isForm:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form" ? true : false);
            }
          }
      },
       isButton:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button" ? true : false);
            }
          }
      },
      isButtonGroup:{
        get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button-group" ? true : false);
            }
          }
      },
      isInput:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-input" ? true : false);
            }
          }
      },
      isCheckBoxGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-checkbox-group" ? true : false);
          }
        }
      },
      
       isRadioGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-radio-group" ? true : false);
          }
        }
      },
      isTextarea:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-textarea" ? true : false);
          }
        }
      },
      isFile:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-file" ? true : false);
            }
          }
      },
      isRow:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="row" ? true : false);
            }
          }
      },
       isDivEle:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="div" ? true : false);
            }
          }
      },
     
      
  
      

  },
 
  components:{
       'app-configCols' : ConfigCols,
       'app-configContainer' : ConfigContainer,
       'app-configRow' : ConfigRow,
       'app-configFormGroup' : ConfigFormGroups,
       'app-configInput' : ConfigInput,
       'app-config-form-select' : ConfigSelect,
       'app-config-checkbox-group' : ConfigCheckboxGroup,
       'app-config-radio-group' : ConfigRadioGroup,
       'app-config-textarea' : ConfigTextarea,
       'app-config-file' : ConfigFile,
       'app-button' : ConfigButton,
       'app-button-group' : ConfigButtonGroup,
       'app-divele' : ConfigDivEle,
       'app-config-form' : ConfigFormEle
    }
}
</script>