<template>
  <b-card title="Row">
         <b-button variant="link" size="md" class="trash" @click="remove" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>

        <b-list-group flush>
            <b-list-group-item>
                  <!-- Label -->
                    <b-form-group                        
                        label="ID : "
                        label-for="id"
                        label-cols="6"
                        class="mb-0"
                    >
                        <b-form-input id="id" type="text" size="sm" v-model="idname"   trim></b-form-input>
                    </b-form-group>

             </b-list-group-item>
             <b-list-group-item>
                  <!-- Label -->
                    <b-form-group                        
                        label="Class : "
                        label-for="class"
                        label-cols="6"
                        class="mb-0"
                    >
                        <b-form-input id="class" type="text" size="sm" v-model="classname"   trim></b-form-input>
                    </b-form-group>

             </b-list-group-item>
                <b-list-group-item>
        <b-button-group>
        <b-button size='sm' @click="addBefore">Add Before</b-button>
        <b-button size='sm' @click="addAfter">Add After</b-button>
        

        </b-button-group>

       
        
    </b-list-group-item>
    <template v-if="expandlevel>0">
               <b-list-group-item >
                    <b-form-group 
                        label="Tag"
                         label-cols="6"
                         class="mb-0"
                    >
                     <b-form-input id="input-1" type="text" size="sm" v-model="rowTag"   trim></b-form-input>
             
                    </b-form-group>
                        </b-list-group-item>
        <b-list-group-item >
                      <b-form-group 
                        label="No Gutter"
                         label-cols="6"
                         class="mb-0"
                    >
                    
                    <b-form-checkbox v-model="noGutters" class="float-right"  name="check-button" switch></b-form-checkbox> 
                    </b-form-group>
</b-list-group-item>

        <b-list-group-item >
                    </b-form-group>
                      <b-form-group 
                        label="Align V"
                         label-cols="6"
                         class="mb-0"
                    >
                     <b-form-select  v-model="alignV" :options="alignVOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
                    </b-list-group-item>
        <b-list-group-item >
                     <b-form-group
                        label="Align H"
                         label-cols="6"
                         class="mb-0"
                    >
                     <b-form-select  v-model="alignH" :options="alignHOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
</b-list-group-item>
        <b-list-group-item >
                          <b-form-group 
                        label="Align Content"
                         label-cols="6"
                         class="mb-0"
                        
                    >
                     <b-form-select  v-model="alignContent" :options="alignContentOptions" size="sm" ></b-form-select>
                   
                    </b-form-group>
                    </b-list-group-item>
     </template>
                </b-list-group>
                   <div class="float-right">
                 
         <b-button  size="sm" variant="secondary" @click="increaselevel" v-if="expandlevel<1" >
            <font-awesome-icon :icon="['fas','chevron-down']" />
         </b-button>
         <b-button  size="sm" variant="secondary" @click="decreaselevel" v-if="expandlevel>0">
            <font-awesome-icon :icon="['fas','chevron-up']" />
         </b-button>
      </div>
                </b-card>
                    </template>

<script>

export default {
 name: 'ConfigRpw',
  props:{
  	data:Number
  },
  data:function(){
      return {
         
           expandlevel: 0,
           showTrue : true
      }
  },
  computed:{
     idname:{
          get(){
              return this.eleObj.id;
          },
          set(val){
               return this.$store.commit('editObj',{id:val})
          }
      },
      classname:{
          get(){
              return this.eleObj.class;
          },
          set(val){
               return this.$store.commit('editObj',{class:val})
          }
      },
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
  methods:{
     addBefore : function(){
          this.$store.commit("addEle",{action:'addBefore',eno:this.data});
      },
      addAfter: function(){
          this.$store.commit("addEle",{action:'addAfter',eno:this.data});
      },
      remove: function(){
          this.$store.dispatch("removeObj");
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
  },
  components:{
    
  }
}
</script>