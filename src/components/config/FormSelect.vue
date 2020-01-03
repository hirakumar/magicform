<template>
<b-card   title="Form Select">

  <b-button variant="link" size="md" class="trash" @click="remove" >
      <font-awesome-icon :icon="['fas','trash-alt']" /> 
  </b-button>
  <b-list-group flush>
      <b-list-group-item class="pl-0 pr-0">
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
        
          <b-row v-for="(opt,index) in options" :key="opt.id">
              <b-col cols="5"> {{opt.text}} </b-col>
              <b-col cols="5">{{opt.value}}</b-col>
              <b-col cols="2"><b-button size="sm" @click="removeOption(index)"><font-awesome-icon :icon="['fas','trash-alt']" /> </b-button></b-col>
          </b-row>
      </b-list-group-item>
      <!-- Name -->
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
                  label="Multiple Size : "
                  label-cols="6"
                  class="mb-0"
                  >
               
                   <b-form-checkbox v-model="eleObj.multiple" class="float-right"  name="check-button" switch></b-form-checkbox>
               </b-form-group>
            </b-list-group-item>
            <b-list-group-item v-if="eleObj.multiple" class="pl-0 pr-0">
               <b-form-group 
                  label="Select Size : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input type="number" size="sm" v-model="eleObj['select-size']"  min="1" />
                  
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
                    id:0,
                    text: 'None',
                    value: false
                },
                {
                    id:1,
                    text: 'Small',
                    value: 'sm'
                },
                {
                    id:2,
                    text: 'Medium',
                    value: 'md'
                },
                {
                    id:3,
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
                return this.$store.getters['formBuilder/getObj'](this.eno);
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
      this.$store.dispatch('formBuilder/addOption',{text:this.text, value:this.value})
    },
    removeOption : function(index){
      console.log(index);
      this.$store.dispatch('formBuilder/removeSelectOption',{index:index});
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
    remove: function() {
            this.$store.dispatch("formBuilder/removeObj",this.eleObj);
        },
  },
  
}
</script>
