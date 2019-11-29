<template>
<b-card   title="Form Group">

  <b-button variant="link" size="md" class="trash" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>
  <b-list-group flush>
      <b-list-group-item>
          <!-- Label -->
          <b-form-group                        
            label="Fill Data from : "
            label-for="label"
            label-cols="6"
            class="mb-0"
            >
            
          </b-form-group>
          <b-row>
              <b-col cols="5"><b-input placeholder="Text" v-model="text" @keyup="changeValue" /> </b-col>
              <b-col cols="5"><b-input placeholder="Value" v-model="value" /></b-col>
              <b-col cols="2"><b-button size="sm" @click="addOption"><font-awesome-icon :icon="['fas','plus']" /> </b-button></b-col>
          </b-row>
          <b-row v-for="(opt,index) in options">
              <b-col cols="5"> {{opt.text}} </b-col>
              <b-col cols="5">{{opt.value}}</b-col>
              <b-col cols="2"><b-button size="sm" @click="removeOption(index)"><font-awesome-icon :icon="['fas','trash-alt']" /> </b-button></b-col>
          </b-row>
      </b-list-group-item>
      <!-- Name -->
            <b-list-group-item>
               <b-form-group 
                  label="Name : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="name" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <template v-if="expandlevel>0">
            <!-- ID -->
            <b-list-group-item>
               <b-form-group 
                  label="ID : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="id" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- Class -->
            <b-list-group-item>
               <b-form-group 
                  label="Class : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="classname" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- disabled -->
            <b-list-group-item>
               <b-form-group 
                  label="Disabled : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="disabled" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- required -->
            <b-list-group-item>
               <b-form-group
                  label="Required : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="required" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- size -->
            <b-list-group-item>
               <b-form-group 
                  label="Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-select v-model="size" size="sm" :options="sizeOptions" />
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
               <b-form-group 
                  label="Multiple Size : "
                  label-cols="6"
                  class="mb-0"
                  >
               
                   <b-form-checkbox v-model="multiple" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item v-if="multiple">
               <b-form-group 
                  label="Select Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input type="number" size="sm" v-model="selectSize"  min="1" />
                  
               </b-form-group>

            </b-list-group-item>
          </template>
  </b-list-group>
  <div class="float-right">
         <b-button  size="sm" variant="secondary" @click="increaselevel" v-if="expandlevel<2">
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
 name: 'ConfigFormSelect',
  props:{
    data:Number,
    addDataPanelStatus:false
  },
  data:function(){
    return {
      expandlevel: 0,
      text:'',
      value:'',
      sizeOptions: [{
                    text: 'None',
                    value: false
                },
                {
                    text: 'Small',
                    value: 'sm'
                },
                {
                    text: 'Medium',
                    value: 'md'
                },
                {
                    text: 'Largge',
                    value: 'lg'
                },
            ],
    }
  },
  computed:{  
     eno: {
            get() {
                return this.data;
            }
        },

        eleObj: {
            get() {
                return this.$store.getters.getObj(this.eno);
            },
            set(val) {
                return val;
            }
        },
        options:{
          get(){
            if(this.eleObj!=undefined){
              return this.eleObj.options;
            }
          },
          set(val){
            return val;
          }
        },

    id: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.id;
                }

            },
            set(val) {
                console.log("ID");
                this.$store.commit('editObj', {
                    id: val
                })
            }
        },
        name: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.name;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    name: val
                })
            }
        },
        classname: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.class;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    class: val
                })
            }
        },
        disabled: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.disabled;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    disabled: val
                })
            }
        },
        required: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.required;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    required: val
                })
            }
        },
        size: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.size;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    size: val
                })
            }
        },
        value: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.value;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    value: val
                })
            }
        },
        plaintext: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.plaintext;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    plaintext: val
                })
            }
        },
        autocomplete: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.autocomplete;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    autocomplete: val
                })
            }
        },
        multiple:{
          get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.multiple;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    multiple: val
                })
            }
        },
        selectSize:{
          get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['select-size'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'select-size': val
                })
            }
        }
  
  },
  components:{

  },
  methods:{
    addCustomData :  function(){
      this.addDataPanelStatus =true;
    },
    
    changeValue : function(){
      this.value =this.text.replace(/\s/g,'_').toLowerCase();
    },
    addOption : function(){
      this.$store.dispatch('addOption',{text:this.text, value:this.value})
    },
    removeOption : function(index){
      console.log(index);
      this.$store.dispatch('removeSelectOption',{index:index});
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
        }

  }
}
</script>