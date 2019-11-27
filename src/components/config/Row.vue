<template>
  <b-card no-body >
        <b-list-group flush>
               <b-list-group-item >
                    <b-form-group 
                        label="Tag"
                         label-cols="6"
                    >
                     <b-form-input id="input-1" type="text" size="sm" v-model="rowTag"   trim></b-form-input>
             
                    </b-form-group>
                        </b-list-group-item>
        <b-list-group-item >
                      <b-form-group 
                        label="No Gutter"
                         label-cols="6"
                    >
                    
                    <b-form-checkbox v-model="noGutters" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
</b-list-group-item>
        <b-list-group-item >
                    </b-form-group>
                      <b-form-group 
                        label="Align V"
                         label-cols="6"
                    >
                     <b-form-select  v-model="alignV" :options="alignVOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
                    </b-list-group-item>
        <b-list-group-item >
                     <b-form-group
                        label="Align H"
                         label-cols="6"
                    >
                     <b-form-select  v-model="alignH" :options="alignHOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
</b-list-group-item>
        <b-list-group-item >
                          <b-form-group 
                        label="Align Content"
                         label-cols="6"
                    >
                     <b-form-select  v-model="alignContent" :options="alignContentOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
                    </b-list-group-item>
     
                </b-list-group>
                </b-card>
                    </template>

<script>

export default {
 name: 'ConfigRpw',
  props:{
  	data:Number
  },
  
  computed:{
     
    alignVOptions :{
        get(){
            return ["start","center","end"]
        },
        set(val){
            return val;
        }
    },
    alignHOptions :{
        get(){
            return ["start","center","end","around","between"];
        },
        set(val){
            return val;
        }
    },
    alignContentOptions :{
         get(){
            return ["start","center","end","around","between","stretch"];
        },
        set(val){
            return val;
        }
    },
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
      rowTag:{
           get(){
                return this.eleObj.tag;
            },set(val){
                //this.$store.commit('changeColVal',val)
               this.$store.commit('editObj',{tag:val})
            }
      },
      noGutters:{
            get(){
                return this.eleObj['no-gutters'];
            },set(val){
                //this.$store.commit('changeColVal',val)
                console.log(val);
               this.$store.commit('editObj',{"no-gutters":val})
            }
      },
      alignV:{
         
          get(){
                return this.eleObj['align-v'];
            },set(val){
                
               this.$store.commit('editObj',{"align-v":val})
            }
      },
       alignH:{
         
          get(){
                return this.eleObj['align-h'];
            },set(val){
                
               this.$store.commit('editObj',{"align-h":val})
            }
      },
      alignContent:{
 get(){
                return this.eleObj['align-content'];
            },set(val){
                
               this.$store.commit('editObj',{"align-content":val})
            }
      },
  
  },
  components:{
    
  }
}
</script>