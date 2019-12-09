<template>

<b-card   title="Form Textarea">
  <b-button variant="link" size="md" class="trash" @click="remove" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>
  <b-list-group flush>
  		<b-list-group-item  class="pl-0 pr-0">
               <b-form-group 
                  label="Rows : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input  size="sm" type="number" v-model="rows"  min="2" max="15" />
                  
               </b-form-group>
 <!-- Placeholder -->
 		</b-list-group-item>
         <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Placeholder : "
               label-cols="6"
               class="mb-0"
               >
               <b-input v-model="placeholder" size="sm" />
            </b-form-group>
         </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Value : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="value" size="sm" />
               </b-form-group>
            </b-list-group-item>
           <b-list-group-item class="pl-0 pr-0">
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
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="ID : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="id" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- Class -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Class : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="classname" size="sm" />
               </b-form-group>
            </b-list-group-item>

            <!-- disabled -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Disabled : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="disabled" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- required -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group
                  label="Required : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="required" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- size -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-select v-model="size" size="sm" :options="sizeOptions" />
               </b-form-group>
            </b-list-group-item>
             <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Max Rows : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="maxRows" size="sm" type="number" />
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="No Resize : "
                  label-cols="6"
                  class="mb-0"
                  >
                 
                   <b-form-checkbox v-model="noResize" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
             <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="No Auto Shrink : "
                  label-cols="6"
                  class="mb-0"
                  >
                 
                   <b-form-checkbox v-model="noAutoShrink" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
           </template>
  </b-list-group>
  <div class="float-right">
         <b-button  size="sm" variant="secondary" @click="increaselevel" v-if="expandlevel<1">
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
 name: 'ConfigFormTextarea',
  props:{
    data:Number   
  },
  data:function(){
    return {
      expandlevel: 0,
      
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
                    text: 'Large',
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
        placeholder: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.placeholder;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    placeholder: val
                })
            }
        },
        rows: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.rows;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    rows: val
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
        maxRows: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['max-rows'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'max-rows': val
                })
            }
        },
         noResize: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['no-resize'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'no-resize': val
                })
            }
        },
        noAutoShrink: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['no-auto-shrink'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'no-auto-shrink': val
                })
            }
        },
    },
    methods:{
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
         remove: function() {
            this.$store.dispatch("removeObj");
        },
    
    }
}
</script>