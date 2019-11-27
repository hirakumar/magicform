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
                    <b-button>Input</b-button>
                    <b-button>Select Box</b-button>
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
                   
                    <!-- Label -->
                    <b-form-group v-if="isFormGroup"                       
                        label="Label : "
                        label-for="input-1"
                        label-cols="6"
                    >
                        <b-form-input id="input-1" type="text" size="sm" v-model="label"   trim></b-form-input>
                    </b-form-group>

                     <!-- Label Align -->
                    <b-form-group v-if="isFormGroup"
                      
                        label="Label Align : "
                        label-for="input-1"
                        label-cols="6"
                    >
                        <b-form-select  v-model="labelAlign" :options="alignOptions" size="sm" class="mt-3"></b-form-select>
                    </b-form-group>

                   

                    <!-- Label Cols -->
                    <b-form-group v-if="isFormGroup"
                       
                        label="Label Cols : "
                        label-for="input-1"
                        label-cols="6"
                    >
                        <b-form-select  v-model="labelCols" :options="colOptions" size="sm" ></b-form-select>
                    </b-form-group>

                    <!-- Label Class -->
                    <b-form-group v-if="isFormGroup"
                       
                        label="Label Class : "
                        label-for="input-1"
                        label-cols="6"
                     >
                        <b-form-input id="input-1" type="text" size="sm" v-model="labelClass"  trim></b-form-input>

                    </b-form-group>
                    
                    <!-- Label Sr Only -->
                    <b-form-group v-if="isFormGroup"
                   
                    label="Sr Only : "
                    label-for="input-1"
                    label-cols="6"
                    >    
                        <b-form-checkbox
                           
                            v-model="srOnly"
                            name="checkbox-1"
                           
                            />
                      

                    </b-form-group>

                    <!-- Description -->
                    <b-form-group v-if="isFormGroup"
                      
                        label="Description : "
                        label-for="input-1"
                        label-cols="6"
                    >
                        <b-form-input id="input-1" type="text" size="sm" v-model="description"   trim></b-form-input>
                    </b-form-group>

                    <!-- Before -->
                    <b-form-group v-if="isFormGroup"
                   
                    label="Before : "
                    label-for="input-1"
                    label-cols="6"
                    >
                        <b-textarea v-model="before" />
                    </b-form-group>

                    <!-- After -->
                    <b-form-group v-if="isFormGroup"
                      
                        label="After : "
                        label-for="input-1"
                        label-cols="6"
                        >
                            <b-textarea v-model="after" />
                    </b-form-group>
                     
                   <b-form-group v-if="isInput"
                      
                        label="Input Type : "
                        label-cols="6"
                        >
                           <b-form-select v-model="inputType"   :options="typeOptions" size="sm" ></b-form-select>
                    </b-form-group>

                     
                     <b-form-group v-if="isFormGroup"
                      
                       
                        label-for="input-1"
                        label-cols="6"
                        >



                            <b-button @click="removeObj">Remove</b-button>
                    </b-form-group>
                   
                  


                    



   </b-form>
  

    </div>
    </div>
    </div>
    
</template>
<script>
import ConfigCols from '@/components/config/Cols.vue'
import ConfigContainer from '@/components/config/Container.vue'
import ConfigRow from '@/components/config/Row.vue'
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
              return (this.eleObj.ele=="container" ? true : false);
          }
      },
      isCol:{
          get(){
              return (this.eleObj.ele=="col" ? true : false);
          }
      },
       isFormGroup:{
          get(){
              return (this.eleObj.ele=="form-group" ? true : false);
          }
      },
      isInput:{
          get(){
              
              return (this.eleObj.ele=="form-input" ? true : false);
          }
      },
      isRow:{
          get(){
              return (this.eleObj.ele=="row" ? true : false);
          }
      },
      
     
      label:{
          get(){
                return this.eleObj.label;
            },set(val){
                this.$store.commit('editObj',{label:val})
            }
      },
      description:{
           get(){
                return this.eleObj.description;
            },set(val){
                 this.$store.commit('editObj',{description:val})
            }
      },
      labelAlign:{
           get(){
                return this.eleObj.label_align;
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
      
      inputType:{
           get(){
               
               return (this.eleObj.hasOwnProperty('type') ? this.eleObj.type : "text");
               
            },set(val){
                this.$store.commit('editObj',{type:val})
            }
      }
  
      

  },
  components:{
       'app-configCols' : ConfigCols,
       'app-configContainer' : ConfigContainer,
       'app-configRow' : ConfigRow
    }
}
</script>
<style scoped>

</style>