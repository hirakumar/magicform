<template>
   <b-card   title="Form Input">
     
      <b-list-group flush>
         <!-- Type -->
         <b-list-group-item>
            <b-form-group 
               label="Type : "
               label-cols="6"
               class="mb-0"
               >
               <b-form-select v-model="eleObj.type"    :options="typeOptions" size="sm" ></b-form-select>
            </b-form-group>
         </b-list-group-item>
         <!-- If Type is number need to show max and min -->
         <template v-if="eleObj.type=='number'">
            <b-list-group-item>
               <b-form-group 
                  label="Min : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.min" size="sm" type="number" />
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
               <b-form-group             
                  label="Max : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.max" size="sm" type="number" />
               </b-form-group>
            </b-list-group-item>
         </template>
         <!-- Value -->
         <b-list-group-item>
            <b-form-group 
               label="Value : "
               label-cols="6"
               class="mb-0"
               >
               <b-input v-model="eleObj.value" size="sm" />
            </b-form-group>
         </b-list-group-item>
         <!-- Placeholder -->
         <b-list-group-item>
            <b-form-group 
               label="Placeholder : "
               label-cols="6"
               class="mb-0"
               >
               <b-input v-model="placeholder" size="sm" />
            </b-form-group>
         </b-list-group-item>
         <template v-if="expandlevel>0">
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
            <!-- ID -->
            <b-list-group-item>
               <b-form-group 
                  label="ID : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.id" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- Class -->
            <b-list-group-item>
               <b-form-group 
                  label="Class : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.classname" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- disabled -->
            <b-list-group-item>
               <b-form-group 
                  label="Disabled : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.disabled" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- required -->
            <b-list-group-item>
               <b-form-group
                  label="Required : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.required" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- size -->
            <b-list-group-item>
               <b-form-group 
                  label="Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-select v-model="eleObj.size" size="sm" :options="sizeOptions" />
               </b-form-group>
            </b-list-group-item>
         </template>
         <template v-if="expandlevel>1">
           
            <b-list-group-item>
               <b-form-group 
                  label="Auto Focus : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.autofocus" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
               <b-form-group 
                  label="Aria Invalid : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj['aria-invalid']" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
               <b-form-group 
                  label="Plain Text : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.plaintext" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
         
           
            
         </template>
      </b-list-group>
      <b-button variant="link" size="md" class="trash">
         <font-awesome-icon :icon="['fas','trash-alt']" />
      </b-button>
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
    name: 'ConfigInput',
    props: {
        data: Number
    },
    data: function() {
        return {
            expandlevel: 0,
            activeProperty: '',
         
            typeOptions: ['text', 'number', 'email', 'password', 'search', 'url', 'tel', 'date', 'time', 'range', 'color'],
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
            formOptions: [{
                    text: "Input",
                    value: 'form-input'
                },
                {
                    text: "Select Box",
                    value: 'form-select'
                },
                {
                    text: "Radio Button",
                    value: 'form-radio'
                },
                {
                    text: "Checkbox ",
                    value: 'form-checkbox'
                },
                {
                    text: "Textarea",
                    value: 'form-textarea'
                },
                {
                    text: "File",
                    value: 'form-file'
                }
            ]
        }
    },
    computed: {
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

        

    },
    components: {

    },
    methods: {

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
<style >
.expand{
  position: absolute;
  right: 0px;
  bottom: -12px;
  z-index: 999;
  border:solid 2px #333;
  width:25px;
  height:25px;
  align-items: center;
  justify-content: center;
  display:flex;
  border-radius:25px;
  background:#ffffff;
  padding:0px;
}
.expand svg{
  width:13px;
  height:13px;
}
.trash{
      position: absolute;
    right: 12px;
    top: 11px;
    color:#333;
}
</style>