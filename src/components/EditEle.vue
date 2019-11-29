<template>
    <div class="container">

  
        <div class="row">
            <div class="col">
 <!-- Container -->
                <template v-if="isContainer">
                    <b-button>Add Row</b-button>
                </template>

                <template v-if="isRow">
                    <b-button>Add Col</b-button>
                </template>

                <template v-if="isCol">
                    <b-button-group>
                   
                    <b-button @click="createFormGroup">Input</b-button>
                    <b-button @click="createFormSelectBox">Select Box</b-button>
                    <b-button>Check Box</b-button>
                    <b-button>Radio Box</b-button>
                    <b-button>Button</b-button>
                    <b-button>Textarea</b-button>
                    <b-button>File</b-button>
                    
                    </b-button-group>
                </template>
            </div>
        </div>
   
        <div class="row">
                
              <div class="col-6">             
               
                <b-form >          


               
                <app-configContainer v-if="isContainer" :data="data" />
                <app-configCols v-if="isCol" :data="data" />
                <app-configRow v-if="isRow" :data="data" />
                <app-configFormGroup v-if="isFormGroup" :data="data" />
                <app-configInput v-if="isInput" :data="data" />
                <app-config-form-select v-if="isFormSelect" :data="data"></app-config-form-select>
                   
               
                  


                    



   </b-form>
  

    </div>
    </div>
    </div>
    
</template>
<script>
import ConfigCols from '@/components/config/Cols.vue'
import ConfigContainer from '@/components/config/Container.vue'
import ConfigRow from '@/components/config/Row.vue'
import ConfigFormGroups from '@/components/config/FormGroups.vue'
import ConfigInput from '@/components/config/Input.vue'
import ConfigSelect from '@/components/config/FormSelect.vue'
export default {
  name: 'editele',
  props:{
      data:Number
  },
  data:function(){
      return {
        alignOptions : [
            {value:'left', text:'Left'},
            {value:'center', text:'Center'},
            {value:'right', text:'Right'}
        ],
        colOptions:[1,2,3,4,5,6,7,8,9,10,11,12],
        typeOptions:['text','number','email','password','search','url','tel','date','time','range','color'],
        containerAddOptions:['At First','Before','After','At Last'],
      
      }
  },
  methods:{
      changeVal(val){
        
        this.$store.commit('changeColVal',val)
      },
      createFormGroup(){
          this.$store.dispatch('createFormGroup',{formType : 'input'});
      },
      createFormSelectBox(){
        this.$store.dispatch('createFormGroup',{formType : 'form-select'});
      }
   
  },
  computed:{

      eno:{
          get(){
             return this.data; 
          }
      },
     
      eleObj:{
        get(){
            return this.$store.getters.getObj(this.eno);
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
      isInput:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-input" ? true : false);
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
      
     
      label:{
          get(){
            if(this.eleObj != undefined){
                return this.eleObj.label;
              }
            },set(val){
                this.$store.commit('editObj',{label:val})
            }
      },
      description:{
           get(){
            if(this.eleObj != undefined){
                return this.eleObj.description;
              }
            },set(val){
                 this.$store.commit('editObj',{description:val})
            }
      },
      labelAlign:{
           get(){
            if(this.eleObj != undefined){
                return this.eleObj.label_align;
              }
            },set(val){
                this.$store.commit('editObj',{label_align:val})
            }
      },
      labelClass:{
           get(){
                return this.eleObj.label_class;
            },set(val){
                 this.$store.commit('editObj',{label_class:val})
            }
      },
      srOnly:{
          get(){
                return this.eleObj.label_sr_only;
            },set(val){
                
                this.$store.commit('editObj',{label_sr_only:val})
            }
      },
      labelCols :{
           get(){
                return this.eleObj.label_cols;
            },set(val){
                this.$store.commit('editObj',{label_cols:val})
            }
      },
      before:{
           get(){
                return this.eleObj.before;
            },set(val){
                this.$store.commit('editObj',{before:val})
            }
      },
      after:{
           get(){
                return this.eleObj.after;
            },set(val){
                this.$store.commit('editObj',{after:val})
            }
      },
      
      
  
      

  },
  components:{
       'app-configCols' : ConfigCols,
       'app-configContainer' : ConfigContainer,
       'app-configRow' : ConfigRow,
       'app-configFormGroup' : ConfigFormGroups,
       'app-configInput' : ConfigInput,
       'app-config-form-select' : ConfigSelect
    }
}
</script>
<style scoped>

</style>