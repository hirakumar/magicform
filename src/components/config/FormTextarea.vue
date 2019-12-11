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
                  <b-input  size="sm" type="number" v-model="eleObj.rows"  min="2" max="15" />
                  
               </b-form-group>
 <!-- Placeholder -->
 		</b-list-group-item>
         <b-list-group-item class="pl-0 pr-0">
            <b-form-group 
               label="Placeholder : "
               label-cols="6"
               class="mb-0"
               >
               <b-input v-model="eleObj.placeholder" size="sm" />
            </b-form-group>
         </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Value : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.value" size="sm" />
               </b-form-group>
            </b-list-group-item>
           <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Name : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.name" size="sm" />
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
                  <b-input v-model="eleObj.id" size="sm" />
               </b-form-group>
            </b-list-group-item>
            <!-- Class -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Class : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj.class" size="sm" />
               </b-form-group>
            </b-list-group-item>

            <!-- disabled -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Disabled : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.disabled" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- required -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group
                  label="Required : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-form-checkbox v-model="eleObj.required" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <!-- size -->
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-select v-model="eleObj.size" size="sm" :options="sizeOptions" />
               </b-form-group>
            </b-list-group-item>
             <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="Max Rows : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input v-model="eleObj['max-rows']" size="sm" type="number" />
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="No Resize : "
                  label-cols="6"
                  class="mb-0"
                  >
                 
                   <b-form-checkbox v-model="eleObj['no-resize']" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
             <b-list-group-item class="pl-0 pr-0">
               <b-form-group 
                  label="No Auto Shrink : "
                  label-cols="6"
                  class="mb-0"
                  >
                 
                   <b-form-checkbox v-model="eleObj['no-auto-shrink']" class="float-right"  name="check-button" switch></b-form-checkbox>
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