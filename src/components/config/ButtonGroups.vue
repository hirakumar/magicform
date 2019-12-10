<template>

<b-card   title="Button Group">
   
  <b-button variant="link" size="md" class="trash" @click="remove" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>
  <b-list-group flush>
        
  		<b-list-group-item  class="pl-0 pr-0">

 <!-- Placeholder --> <b-button @click="addButton">Add Button</b-button>
 		</b-list-group-item>
         <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Vertical : "
               label-cols="6"
               class="mb-0"
               >
               <b-form-checkbox v-model="vertical" class="float-right"  name="check-button" switch></b-form-checkbox>
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
            <template v-if="expandlevel>0">
          <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Tag : "
               label-cols="6"
               class="mb-0"
               >
               <b-input v-model="tag" type="text"></b-input>
            </b-form-group>
         </b-list-group-item>

             <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Before : "
               label-cols="6"
               class="mb-0"
               >
               <b-textarea v-model="before" type="text" />
            </b-form-group>
         </b-list-group-item>
   <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="After : "
               label-cols="6"
               class="mb-0"
               >
               <b-textarea v-model="after" type="text" />
            </b-form-group>
         </b-list-group-item>
   <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Aria Role : "
               label-cols="6"
               class="mb-0"
               >
                <b-input v-model="ariaRole" type="text"></b-input>
              
            </b-form-group>
         </b-list-group-item>


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
 name: 'ButtonGroup',
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
        vertical: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.vertical;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    vertical: val
                })
            }
        },
         tag: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.tag;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    tag: val
                })
            }
        },
          before: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.before;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    before: val
                })
            }
        },
          after: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.after;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    after: val
                })
            }
        },
        ariaRole: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['aria-role'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'aria-role': val
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
        addButton: function(){
            this.$store.dispatch("createEle",{ele:'button'});
        }
    
    }
}
</script>